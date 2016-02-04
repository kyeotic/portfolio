/* */ 
(function(process) {
  "use strict";
  var Node = require('./node');
  var unescapeString = require('./common').unescapeString;
  var OPENTAG = require('./common').OPENTAG;
  var CLOSETAG = require('./common').CLOSETAG;
  var CODE_INDENT = 4;
  var C_NEWLINE = 10;
  var C_GREATERTHAN = 62;
  var C_LESSTHAN = 60;
  var C_SPACE = 32;
  var C_OPEN_BRACKET = 91;
  var InlineParser = require('./inlines');
  var reHtmlBlockOpen = [/./, /^<(?:script|pre|style)(?:\s|>|$)/i, /^<!--/, /^<[?]/, /^<![A-Z]/, /^<!\[CDATA\[/, /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|title|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i, new RegExp('^(?:' + OPENTAG + '|' + CLOSETAG + ')\s*$', 'i')];
  var reHtmlBlockClose = [/./, /<\/(?:script|pre|style)>/i, /-->/, /\?>/, />/, /\]\]>/];
  var reHrule = /^(?:(?:\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$/;
  var reMaybeSpecial = /^[#`~*+_=<>0-9-]/;
  var reNonSpace = /[^ \t\f\v\r\n]/;
  var reBulletListMarker = /^[*+-]( +|$)/;
  var reOrderedListMarker = /^(\d{1,9})([.)])( +|$)/;
  var reATXHeaderMarker = /^#{1,6}(?: +|$)/;
  var reCodeFence = /^`{3,}(?!.*`)|^~{3,}(?!.*~)/;
  var reClosingCodeFence = /^(?:`{3,}|~{3,})(?= *$)/;
  var reSetextHeaderLine = /^(?:=+|-+) *$/;
  var reLineEnding = /\r\n|\n|\r/;
  var isBlank = function(s) {
    return !(reNonSpace.test(s));
  };
  var peek = function(ln, pos) {
    if (pos < ln.length) {
      return ln.charCodeAt(pos);
    } else {
      return -1;
    }
  };
  var endsWithBlankLine = function(block) {
    while (block) {
      if (block._lastLineBlank) {
        return true;
      }
      var t = block.type;
      if (t === 'List' || t === 'Item') {
        block = block._lastChild;
      } else {
        break;
      }
    }
    return false;
  };
  var breakOutOfLists = function(block) {
    var b = block;
    var last_list = null;
    do {
      if (b.type === 'List') {
        last_list = b;
      }
      b = b._parent;
    } while (b);
    if (last_list) {
      while (block !== last_list) {
        this.finalize(block, this.lineNumber);
        block = block._parent;
      }
      this.finalize(last_list, this.lineNumber);
      this.tip = last_list._parent;
    }
  };
  var addLine = function() {
    this.tip._string_content += this.currentLine.slice(this.offset) + '\n';
  };
  var addChild = function(tag, offset) {
    while (!this.blocks[this.tip.type].canContain(tag)) {
      this.finalize(this.tip, this.lineNumber - 1);
    }
    var column_number = offset + 1;
    var newBlock = new Node(tag, [[this.lineNumber, column_number], [0, 0]]);
    newBlock._string_content = '';
    this.tip.appendChild(newBlock);
    this.tip = newBlock;
    return newBlock;
  };
  var parseListMarker = function(ln, offset, indent) {
    var rest = ln.slice(offset);
    var match;
    var spaces_after_marker;
    var data = {
      type: null,
      tight: true,
      bulletChar: null,
      start: null,
      delimiter: null,
      padding: null,
      markerOffset: indent
    };
    if ((match = rest.match(reBulletListMarker))) {
      spaces_after_marker = match[1].length;
      data.type = 'Bullet';
      data.bulletChar = match[0][0];
    } else if ((match = rest.match(reOrderedListMarker))) {
      spaces_after_marker = match[3].length;
      data.type = 'Ordered';
      data.start = parseInt(match[1]);
      data.delimiter = match[2];
    } else {
      return null;
    }
    var blank_item = match[0].length === rest.length;
    if (spaces_after_marker >= 5 || spaces_after_marker < 1 || blank_item) {
      data.padding = match[0].length - spaces_after_marker + 1;
    } else {
      data.padding = match[0].length;
    }
    return data;
  };
  var listsMatch = function(list_data, item_data) {
    return (list_data.type === item_data.type && list_data.delimiter === item_data.delimiter && list_data.bulletChar === item_data.bulletChar);
  };
  var closeUnmatchedBlocks = function() {
    if (!this.allClosed) {
      while (this.oldtip !== this.lastMatchedContainer) {
        var parent = this.oldtip._parent;
        this.finalize(this.oldtip, this.lineNumber - 1);
        this.oldtip = parent;
      }
      this.allClosed = true;
    }
  };
  var blocks = {
    Document: {
      continue: function() {
        return 0;
      },
      finalize: function() {
        return;
      },
      canContain: function(t) {
        return (t !== 'Item');
      },
      acceptsLines: false
    },
    List: {
      continue: function() {
        return 0;
      },
      finalize: function(parser, block) {
        var item = block._firstChild;
        while (item) {
          if (endsWithBlankLine(item) && item._next) {
            block._listData.tight = false;
            break;
          }
          var subitem = item._firstChild;
          while (subitem) {
            if (endsWithBlankLine(subitem) && (item._next || subitem._next)) {
              block._listData.tight = false;
              break;
            }
            subitem = subitem._next;
          }
          item = item._next;
        }
      },
      canContain: function(t) {
        return (t === 'Item');
      },
      acceptsLines: false
    },
    BlockQuote: {
      continue: function(parser) {
        var ln = parser.currentLine;
        if (!parser.indented && peek(ln, parser.nextNonspace) === C_GREATERTHAN) {
          parser.advanceNextNonspace();
          parser.advanceOffset(1, false);
          if (peek(ln, parser.offset) === C_SPACE) {
            parser.offset++;
          }
        } else {
          return 1;
        }
        return 0;
      },
      finalize: function() {
        return;
      },
      canContain: function(t) {
        return (t !== 'Item');
      },
      acceptsLines: false
    },
    Item: {
      continue: function(parser, container) {
        if (parser.blank && container._firstChild !== null) {
          parser.advanceNextNonspace();
        } else if (parser.indent >= container._listData.markerOffset + container._listData.padding) {
          parser.advanceOffset(container._listData.markerOffset + container._listData.padding, true);
        } else {
          return 1;
        }
        return 0;
      },
      finalize: function() {
        return;
      },
      canContain: function(t) {
        return (t !== 'Item');
      },
      acceptsLines: false
    },
    Header: {
      continue: function() {
        return 1;
      },
      finalize: function() {
        return;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: false
    },
    HorizontalRule: {
      continue: function() {
        return 1;
      },
      finalize: function() {
        return;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: false
    },
    CodeBlock: {
      continue: function(parser, container) {
        var ln = parser.currentLine;
        var indent = parser.indent;
        if (container._isFenced) {
          var match = (indent <= 3 && ln.charAt(parser.nextNonspace) === container._fenceChar && ln.slice(parser.nextNonspace).match(reClosingCodeFence));
          if (match && match[0].length >= container._fenceLength) {
            parser.finalize(container, parser.lineNumber);
            return 2;
          } else {
            var i = container._fenceOffset;
            while (i > 0 && peek(ln, parser.offset) === C_SPACE) {
              parser.advanceOffset(1, false);
              i--;
            }
          }
        } else {
          if (indent >= CODE_INDENT) {
            parser.advanceOffset(CODE_INDENT, true);
          } else if (parser.blank) {
            parser.advanceNextNonspace();
          } else {
            return 1;
          }
        }
        return 0;
      },
      finalize: function(parser, block) {
        if (block._isFenced) {
          var content = block._string_content;
          var newlinePos = content.indexOf('\n');
          var firstLine = content.slice(0, newlinePos);
          var rest = content.slice(newlinePos + 1);
          block.info = unescapeString(firstLine.trim());
          block._literal = rest;
        } else {
          block._literal = block._string_content.replace(/(\n *)+$/, '\n');
        }
        block._string_content = null;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: true
    },
    HtmlBlock: {
      continue: function(parser, container) {
        return ((parser.blank && (container._htmlBlockType === 6 || container._htmlBlockType === 7)) ? 1 : 0);
      },
      finalize: function(parser, block) {
        block._literal = block._string_content.replace(/(\n *)+$/, '');
        block._string_content = null;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: true
    },
    Paragraph: {
      continue: function(parser) {
        return (parser.blank ? 1 : 0);
      },
      finalize: function(parser, block) {
        var pos;
        var hasReferenceDefs = false;
        while (peek(block._string_content, 0) === C_OPEN_BRACKET && (pos = parser.inlineParser.parseReference(block._string_content, parser.refmap))) {
          block._string_content = block._string_content.slice(pos);
          hasReferenceDefs = true;
        }
        if (hasReferenceDefs && isBlank(block._string_content)) {
          block.unlink();
        }
      },
      canContain: function() {
        return false;
      },
      acceptsLines: true
    }
  };
  var blockStarts = [function(parser) {
    if (!parser.indented && peek(parser.currentLine, parser.nextNonspace) === C_GREATERTHAN) {
      parser.advanceNextNonspace();
      parser.advanceOffset(1, false);
      if (peek(parser.currentLine, parser.offset) === C_SPACE) {
        parser.advanceOffset(1, false);
      }
      parser.closeUnmatchedBlocks();
      parser.addChild('BlockQuote', parser.nextNonspace);
      return 1;
    } else {
      return 0;
    }
  }, function(parser) {
    var match;
    if (!parser.indented && (match = parser.currentLine.slice(parser.nextNonspace).match(reATXHeaderMarker))) {
      parser.advanceNextNonspace();
      parser.advanceOffset(match[0].length, false);
      parser.closeUnmatchedBlocks();
      var container = parser.addChild('Header', parser.nextNonspace);
      container.level = match[0].trim().length;
      container._string_content = parser.currentLine.slice(parser.offset).replace(/^ *#+ *$/, '').replace(/ +#+ *$/, '');
      parser.advanceOffset(parser.currentLine.length - parser.offset);
      return 2;
    } else {
      return 0;
    }
  }, function(parser) {
    var match;
    if (!parser.indented && (match = parser.currentLine.slice(parser.nextNonspace).match(reCodeFence))) {
      var fenceLength = match[0].length;
      parser.closeUnmatchedBlocks();
      var container = parser.addChild('CodeBlock', parser.nextNonspace);
      container._isFenced = true;
      container._fenceLength = fenceLength;
      container._fenceChar = match[0][0];
      container._fenceOffset = parser.indent;
      parser.advanceNextNonspace();
      parser.advanceOffset(fenceLength, false);
      return 2;
    } else {
      return 0;
    }
  }, function(parser, container) {
    if (!parser.indented && peek(parser.currentLine, parser.nextNonspace) === C_LESSTHAN) {
      var s = parser.currentLine.slice(parser.nextNonspace);
      var blockType;
      for (blockType = 1; blockType <= 7; blockType++) {
        if (reHtmlBlockOpen[blockType].test(s) && (blockType < 7 || container.type !== 'Paragraph')) {
          parser.closeUnmatchedBlocks();
          var b = parser.addChild('HtmlBlock', parser.offset);
          b._htmlBlockType = blockType;
          return 2;
        }
      }
    }
    return 0;
  }, function(parser, container) {
    var match;
    if (!parser.indented && container.type === 'Paragraph' && (container._string_content.indexOf('\n') === container._string_content.length - 1) && ((match = parser.currentLine.slice(parser.nextNonspace).match(reSetextHeaderLine)))) {
      parser.closeUnmatchedBlocks();
      var header = new Node('Header', container.sourcepos);
      header.level = match[0][0] === '=' ? 1 : 2;
      header._string_content = container._string_content;
      container.insertAfter(header);
      container.unlink();
      parser.tip = header;
      parser.advanceOffset(parser.currentLine.length - parser.offset, false);
      return 2;
    } else {
      return 0;
    }
  }, function(parser) {
    if (!parser.indented && reHrule.test(parser.currentLine.slice(parser.nextNonspace))) {
      parser.closeUnmatchedBlocks();
      parser.addChild('HorizontalRule', parser.nextNonspace);
      parser.advanceOffset(parser.currentLine.length - parser.offset, false);
      return 2;
    } else {
      return 0;
    }
  }, function(parser, container) {
    var data;
    var i;
    if ((data = parseListMarker(parser.currentLine, parser.nextNonspace, parser.indent)) && (!parser.indented || container.type === 'List')) {
      parser.closeUnmatchedBlocks();
      parser.advanceNextNonspace();
      i = parser.column;
      parser.advanceOffset(data.padding, false);
      data.padding = parser.column - i;
      if (parser.tip.type !== 'List' || !(listsMatch(container._listData, data))) {
        container = parser.addChild('List', parser.nextNonspace);
        container._listData = data;
      }
      container = parser.addChild('Item', parser.nextNonspace);
      container._listData = data;
      return 1;
    } else {
      return 0;
    }
  }, function(parser) {
    if (parser.indented && parser.tip.type !== 'Paragraph' && !parser.blank) {
      parser.advanceOffset(CODE_INDENT, true);
      parser.closeUnmatchedBlocks();
      parser.addChild('CodeBlock', parser.offset);
      return 2;
    } else {
      return 0;
    }
  }];
  var advanceOffset = function(count, columns) {
    var i = 0;
    var cols = 0;
    var currentLine = this.currentLine;
    while (columns ? (cols < count) : (i < count)) {
      if (currentLine[this.offset + i] === '\t') {
        cols += (4 - ((this.column + cols) % 4));
      } else {
        cols += 1;
      }
      i++;
    }
    this.offset += i;
    this.column += cols;
  };
  var advanceNextNonspace = function() {
    this.offset = this.nextNonspace;
    this.column = this.nextNonspaceColumn;
  };
  var findNextNonspace = function() {
    var currentLine = this.currentLine;
    var i = this.offset;
    var cols = this.column;
    var c;
    while ((c = currentLine.charAt(i)) !== '') {
      if (c === ' ') {
        i++;
        cols++;
      } else if (c === '\t') {
        i++;
        cols += (4 - (cols % 4));
      } else {
        break;
      }
    }
    this.blank = (c === '\n' || c === '\r' || c === '');
    this.nextNonspace = i;
    this.nextNonspaceColumn = cols;
    this.indent = this.nextNonspaceColumn - this.column;
    this.indented = this.indent >= CODE_INDENT;
  };
  var incorporateLine = function(ln) {
    var all_matched = true;
    var t;
    var container = this.doc;
    this.oldtip = this.tip;
    this.offset = 0;
    this.lineNumber += 1;
    if (ln.indexOf('\u0000') !== -1) {
      ln = ln.replace(/\0/g, '\uFFFD');
    }
    this.currentLine = ln;
    var lastChild;
    while ((lastChild = container._lastChild) && lastChild._open) {
      container = lastChild;
      this.findNextNonspace();
      switch (this.blocks[container.type].continue(this, container)) {
        case 0:
          break;
        case 1:
          all_matched = false;
          break;
        case 2:
          this.lastLineLength = ln.length;
          return;
        default:
          throw 'continue returned illegal value, must be 0, 1, or 2';
      }
      if (!all_matched) {
        container = container._parent;
        break;
      }
    }
    this.allClosed = (container === this.oldtip);
    this.lastMatchedContainer = container;
    if (this.blank && container._lastLineBlank) {
      this.breakOutOfLists(container);
    }
    var matchedLeaf = container.type !== 'Paragraph' && blocks[container.type].acceptsLines;
    var starts = this.blockStarts;
    var startsLen = starts.length;
    while (!matchedLeaf) {
      this.findNextNonspace();
      if (!this.indented && !reMaybeSpecial.test(ln.slice(this.nextNonspace))) {
        this.advanceNextNonspace();
        break;
      }
      var i = 0;
      while (i < startsLen) {
        var res = starts[i](this, container);
        if (res === 1) {
          container = this.tip;
          break;
        } else if (res === 2) {
          container = this.tip;
          matchedLeaf = true;
          break;
        } else {
          i++;
        }
      }
      if (i === startsLen) {
        this.advanceNextNonspace();
        break;
      }
    }
    if (!this.allClosed && !this.blank && this.tip.type === 'Paragraph') {
      this.addLine();
    } else {
      this.closeUnmatchedBlocks();
      if (this.blank && container.lastChild) {
        container.lastChild._lastLineBlank = true;
      }
      t = container.type;
      var lastLineBlank = this.blank && !(t === 'BlockQuote' || (t === 'CodeBlock' && container._isFenced) || (t === 'Item' && !container._firstChild && container.sourcepos[0][0] === this.lineNumber));
      var cont = container;
      while (cont) {
        cont._lastLineBlank = lastLineBlank;
        cont = cont._parent;
      }
      if (this.blocks[t].acceptsLines) {
        this.addLine();
        if (t === 'HtmlBlock' && container._htmlBlockType >= 1 && container._htmlBlockType <= 5 && reHtmlBlockClose[container._htmlBlockType].test(this.currentLine.slice(this.offset))) {
          this.finalize(container, this.lineNumber);
        }
      } else if (this.offset < ln.length && !this.blank) {
        container = this.addChild('Paragraph', this.offset);
        this.advanceNextNonspace();
        this.addLine();
      }
    }
    this.lastLineLength = ln.length;
  };
  var finalize = function(block, lineNumber) {
    var above = block._parent;
    block._open = false;
    block.sourcepos[1] = [lineNumber, this.lastLineLength];
    this.blocks[block.type].finalize(this, block);
    this.tip = above;
  };
  var processInlines = function(block) {
    var node,
        event,
        t;
    var walker = block.walker();
    this.inlineParser.refmap = this.refmap;
    this.inlineParser.options = this.options;
    while ((event = walker.next())) {
      node = event.node;
      t = node.type;
      if (!event.entering && (t === 'Paragraph' || t === 'Header')) {
        this.inlineParser.parse(node);
      }
    }
  };
  var Document = function() {
    var doc = new Node('Document', [[1, 1], [0, 0]]);
    return doc;
  };
  var parse = function(input) {
    this.doc = new Document();
    this.tip = this.doc;
    this.refmap = {};
    this.lineNumber = 0;
    this.lastLineLength = 0;
    this.offset = 0;
    this.column = 0;
    this.lastMatchedContainer = this.doc;
    this.currentLine = "";
    if (this.options.time) {
      console.time("preparing input");
    }
    var lines = input.split(reLineEnding);
    var len = lines.length;
    if (input.charCodeAt(input.length - 1) === C_NEWLINE) {
      len -= 1;
    }
    if (this.options.time) {
      console.timeEnd("preparing input");
    }
    if (this.options.time) {
      console.time("block parsing");
    }
    for (var i = 0; i < len; i++) {
      this.incorporateLine(lines[i]);
    }
    while (this.tip) {
      this.finalize(this.tip, len);
    }
    if (this.options.time) {
      console.timeEnd("block parsing");
    }
    if (this.options.time) {
      console.time("inline parsing");
    }
    this.processInlines(this.doc);
    if (this.options.time) {
      console.timeEnd("inline parsing");
    }
    return this.doc;
  };
  function Parser(options) {
    return {
      doc: new Document(),
      blocks: blocks,
      blockStarts: blockStarts,
      tip: this.doc,
      oldtip: this.doc,
      currentLine: "",
      lineNumber: 0,
      offset: 0,
      column: 0,
      nextNonspace: 0,
      nextNonspaceColumn: 0,
      indent: 0,
      indented: false,
      blank: false,
      allClosed: true,
      lastMatchedContainer: this.doc,
      refmap: {},
      lastLineLength: 0,
      inlineParser: new InlineParser(options),
      findNextNonspace: findNextNonspace,
      advanceOffset: advanceOffset,
      advanceNextNonspace: advanceNextNonspace,
      breakOutOfLists: breakOutOfLists,
      addLine: addLine,
      addChild: addChild,
      incorporateLine: incorporateLine,
      finalize: finalize,
      processInlines: processInlines,
      closeUnmatchedBlocks: closeUnmatchedBlocks,
      parse: parse,
      options: options || {}
    };
  }
  module.exports = Parser;
})(require('process'));
