/* */ 
"format cjs";
(function(process) {
  !function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
      module.exports = t(require('react'), require('react-dom'));
    else if ("function" == typeof define && define.amd)
      define(["react", "react-dom"], t);
    else {
      var r = "object" == typeof exports ? t(require('react'), require('react-dom')) : t(e.React, e.ReactDOM);
      for (var n in r)
        ("object" == typeof exports ? exports : e)[n] = r[n];
    }
  }(this, function(e, t) {
    return function(e) {
      function t(n) {
        if (r[n])
          return r[n].exports;
        var i = r[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
      }
      var r = {};
      return t.m = e, t.c = r, t.p = "/demo/dist", t(0);
    }([function(e, t, r) {
      e.exports = r(7);
    }, function(e, t, r) {
      "use strict";
      var n = r(25),
          i = r(24),
          a = 92,
          s = r(4).decodeHTML,
          o = "&(?:#x[a-f0-9]{1,8}|#[0-9]{1,8}|[a-z][a-z0-9]{1,31});",
          u = "[A-Za-z][A-Za-z0-9-]*",
          l = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
          c = "[^\"'=<>`\\x00-\\x20]+",
          p = "'[^']*'",
          h = '"[^"]*"',
          d = "(?:" + c + "|" + p + "|" + h + ")",
          f = "(?:\\s*=\\s*" + d + ")",
          m = "(?:\\s+" + l + f + "?)",
          g = "<" + u + m + "*\\s*/?>",
          b = "</" + u + "\\s*[>]",
          v = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",
          C = "[<][?].*?[?][>]",
          E = "<![A-Z]+\\s+[^>]*>",
          k = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          A = "(?:" + g + "|" + b + "|" + v + "|" + C + "|" + E + "|" + k + ")",
          w = new RegExp("^" + A, "i"),
          y = /[\\&]/,
          x = "[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]",
          _ = new RegExp("\\\\" + x + "|" + o, "gi"),
          L = '[&<>"]',
          q = new RegExp(L, "g"),
          D = new RegExp(o + "|" + L, "gi"),
          T = function(e) {
            return e.charCodeAt(0) === a ? e.charAt(1) : s(e);
          },
          B = function(e) {
            return y.test(e) ? e.replace(_, T) : e;
          },
          N = function(e) {
            try {
              return n(i(e));
            } catch (t) {
              return e;
            }
          },
          S = function(e) {
            switch (e) {
              case "&":
                return "&amp;";
              case "<":
                return "&lt;";
              case ">":
                return "&gt;";
              case '"':
                return "&quot;";
              default:
                return e;
            }
          },
          F = function(e, t) {
            return q.test(e) ? t ? e.replace(D, S) : e.replace(q, S) : e;
          };
      e.exports = {
        unescapeString: B,
        normalizeURI: N,
        escapeXml: F,
        reHtmlTag: w,
        OPENTAG: g,
        CLOSETAG: b,
        ENTITY: o,
        ESCAPABLE: x
      };
    }, function(t, r) {
      t.exports = e;
    }, function(e, t) {
      "use strict";
      function r(e) {
        switch (e._type) {
          case "Document":
          case "BlockQuote":
          case "List":
          case "Item":
          case "Paragraph":
          case "Header":
          case "Emph":
          case "Strong":
          case "Link":
          case "Image":
            return !0;
          default:
            return !1;
        }
      }
      var n = function(e, t) {
        this.current = e, this.entering = t === !0;
      },
          i = function() {
            var e = this.current,
                t = this.entering;
            if (null === e)
              return null;
            var n = r(e);
            return t && n ? e._firstChild ? (this.current = e._firstChild, this.entering = !0) : this.entering = !1 : e === this.root ? this.current = null : null === e._next ? (this.current = e._parent, this.entering = !1) : (this.current = e._next, this.entering = !0), {
              entering: t,
              node: e
            };
          },
          a = function(e) {
            return {
              current: e,
              root: e,
              entering: !0,
              next: i,
              resumeAt: n
            };
          },
          s = function(e, t) {
            this._type = e, this._parent = null, this._firstChild = null, this._lastChild = null, this._prev = null, this._next = null, this._sourcepos = t, this._lastLineBlank = !1, this._open = !0, this._string_content = null, this._literal = null, this._listData = null, this._info = null, this._destination = null, this._title = null, this._isFenced = !1, this._fenceChar = null, this._fenceLength = 0, this._fenceOffset = null, this._level = null;
          },
          o = s.prototype;
      Object.defineProperty(o, "isContainer", {get: function() {
          return r(this);
        }}), Object.defineProperty(o, "type", {get: function() {
          return this._type;
        }}), Object.defineProperty(o, "firstChild", {get: function() {
          return this._firstChild;
        }}), Object.defineProperty(o, "lastChild", {get: function() {
          return this._lastChild;
        }}), Object.defineProperty(o, "next", {get: function() {
          return this._next;
        }}), Object.defineProperty(o, "prev", {get: function() {
          return this._prev;
        }}), Object.defineProperty(o, "parent", {get: function() {
          return this._parent;
        }}), Object.defineProperty(o, "sourcepos", {get: function() {
          return this._sourcepos;
        }}), Object.defineProperty(o, "literal", {
        get: function() {
          return this._literal;
        },
        set: function(e) {
          this._literal = e;
        }
      }), Object.defineProperty(o, "destination", {
        get: function() {
          return this._destination;
        },
        set: function(e) {
          this._destination = e;
        }
      }), Object.defineProperty(o, "title", {
        get: function() {
          return this._title;
        },
        set: function(e) {
          this._title = e;
        }
      }), Object.defineProperty(o, "info", {
        get: function() {
          return this._info;
        },
        set: function(e) {
          this._info = e;
        }
      }), Object.defineProperty(o, "level", {
        get: function() {
          return this._level;
        },
        set: function(e) {
          this._level = e;
        }
      }), Object.defineProperty(o, "listType", {
        get: function() {
          return this._listData.type;
        },
        set: function(e) {
          this._listData.type = e;
        }
      }), Object.defineProperty(o, "listTight", {
        get: function() {
          return this._listData.tight;
        },
        set: function(e) {
          this._listData.tight = e;
        }
      }), Object.defineProperty(o, "listStart", {
        get: function() {
          return this._listData.start;
        },
        set: function(e) {
          this._listData.start = e;
        }
      }), Object.defineProperty(o, "listDelimiter", {
        get: function() {
          return this._listData.delimiter;
        },
        set: function(e) {
          this._listData.delimiter = e;
        }
      }), s.prototype.appendChild = function(e) {
        e.unlink(), e._parent = this, this._lastChild ? (this._lastChild._next = e, e._prev = this._lastChild, this._lastChild = e) : (this._firstChild = e, this._lastChild = e);
      }, s.prototype.prependChild = function(e) {
        e.unlink(), e._parent = this, this._firstChild ? (this._firstChild._prev = e, e._next = this._firstChild, this._firstChild = e) : (this._firstChild = e, this._lastChild = e);
      }, s.prototype.unlink = function() {
        this._prev ? this._prev._next = this._next : this._parent && (this._parent._firstChild = this._next), this._next ? this._next._prev = this._prev : this._parent && (this._parent._lastChild = this._prev), this._parent = null, this._next = null, this._prev = null;
      }, s.prototype.insertAfter = function(e) {
        e.unlink(), e._next = this._next, e._next && (e._next._prev = e), e._prev = this, this._next = e, e._parent = this._parent, e._next || (e._parent._lastChild = e);
      }, s.prototype.insertBefore = function(e) {
        e.unlink(), e._prev = this._prev, e._prev && (e._prev._next = e), e._next = this, this._prev = e, e._parent = this._parent, e._prev || (e._parent._firstChild = e);
      }, s.prototype.walker = function() {
        var e = new a(this);
        return e;
      }, e.exports = s;
    }, function(e, t, r) {
      var n = r(21),
          i = r(19);
      t.decode = function(e, t) {
        return (!t || 0 >= t ? i.XML : i.HTML)(e);
      }, t.decodeStrict = function(e, t) {
        return (!t || 0 >= t ? i.XML : i.HTMLStrict)(e);
      }, t.encode = function(e, t) {
        return (!t || 0 >= t ? n.XML : n.HTML)(e);
      }, t.encodeXML = n.XML, t.encodeHTML4 = t.encodeHTML5 = t.encodeHTML = n.HTML, t.decodeXML = t.decodeXMLStrict = i.XML, t.decodeHTML4 = t.decodeHTML5 = t.decodeHTML = i.HTML, t.decodeHTML4Strict = t.decodeHTML5Strict = t.decodeHTMLStrict = i.HTMLStrict, t.escape = n.escape;
    }, function(e, t) {
      e.exports = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        amp: "&",
        AMP: "&",
        andand: "⩕",
        And: "⩓",
        and: "∧",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angmsd: "∡",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        apacir: "⩯",
        ap: "≈",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        barwed: "⌅",
        Barwed: "⌆",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        Because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxdl: "┐",
        boxdL: "╕",
        boxDl: "╖",
        boxDL: "╗",
        boxdr: "┌",
        boxdR: "╒",
        boxDr: "╓",
        boxDR: "╔",
        boxh: "─",
        boxH: "═",
        boxhd: "┬",
        boxHd: "╤",
        boxhD: "╥",
        boxHD: "╦",
        boxhu: "┴",
        boxHu: "╧",
        boxhU: "╨",
        boxHU: "╩",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxuL: "╛",
        boxUl: "╜",
        boxUL: "╝",
        boxur: "└",
        boxuR: "╘",
        boxUr: "╙",
        boxUR: "╚",
        boxv: "│",
        boxV: "║",
        boxvh: "┼",
        boxvH: "╪",
        boxVh: "╫",
        boxVH: "╬",
        boxvl: "┤",
        boxvL: "╡",
        boxVl: "╢",
        boxVL: "╣",
        boxvr: "├",
        boxvR: "╞",
        boxVr: "╟",
        boxVR: "╠",
        bprime: "‵",
        breve: "˘",
        Breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        Bscr: "ℬ",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsolb: "⧅",
        bsol: "\\",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        cap: "∩",
        Cap: "⋒",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        CenterDot: "·",
        cfr: "𝔠",
        Cfr: "ℭ",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cir: "○",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        Colon: "∷",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        conint: "∮",
        Conint: "∯",
        ContourIntegral: "∮",
        copf: "𝕔",
        Copf: "ℂ",
        coprod: "∐",
        Coproduct: "∐",
        copy: "©",
        COPY: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        cross: "✗",
        Cross: "⨯",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cupbrcap: "⩈",
        cupcap: "⩆",
        CupCap: "≍",
        cup: "∪",
        Cup: "⋓",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dagger: "†",
        Dagger: "‡",
        daleth: "ℸ",
        darr: "↓",
        Darr: "↡",
        dArr: "⇓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        ddagger: "‡",
        ddarr: "⇊",
        DD: "ⅅ",
        dd: "ⅆ",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        diamond: "⋄",
        Diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrowBar: "⤓",
        downarrow: "↓",
        DownArrow: "↓",
        Downarrow: "⇓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVectorBar: "⥖",
        DownLeftVector: "↽",
        DownRightTeeVector: "⥟",
        DownRightVectorBar: "⥗",
        DownRightVector: "⇁",
        DownTeeArrow: "↧",
        DownTee: "⊤",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        Ecirc: "Ê",
        ecirc: "ê",
        ecir: "≖",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        edot: "ė",
        eDot: "≑",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        escr: "ℯ",
        Escr: "ℰ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        ExponentialE: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        forall: "∀",
        ForAll: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        Fscr: "ℱ",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        ge: "≥",
        gE: "≧",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        gescc: "⪩",
        ges: "⩾",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        gg: "≫",
        Gg: "⋙",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gla: "⪥",
        gl: "≷",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gnE: "≩",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gtcc: "⪧",
        gtcir: "⩺",
        gt: ">",
        GT: ">",
        Gt: "≫",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        harrcir: "⥈",
        harr: "↔",
        hArr: "⇔",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        Hopf: "ℍ",
        horbar: "―",
        HorizontalLine: "─",
        hscr: "𝒽",
        Hscr: "ℋ",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        Ifr: "ℑ",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        Im: "ℑ",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        incare: "℅",
        "in": "∈",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        intcal: "⊺",
        "int": "∫",
        Int: "∬",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        Iscr: "ℐ",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        lang: "⟨",
        Lang: "⟪",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        larrb: "⇤",
        larrbfs: "⤟",
        larr: "←",
        Larr: "↞",
        lArr: "⇐",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        latail: "⤙",
        lAtail: "⤛",
        lat: "⪫",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lBarr: "⤎",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        lE: "≦",
        LeftAngleBracket: "⟨",
        LeftArrowBar: "⇤",
        leftarrow: "←",
        LeftArrow: "←",
        Leftarrow: "⇐",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVectorBar: "⥙",
        LeftDownVector: "⇃",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTeeArrow: "↤",
        LeftTee: "⊣",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangleBar: "⧏",
        LeftTriangle: "⊲",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVectorBar: "⥘",
        LeftUpVector: "↿",
        LeftVectorBar: "⥒",
        LeftVector: "↼",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        lescc: "⪨",
        les: "⩽",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        llarr: "⇇",
        ll: "≪",
        Ll: "⋘",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoustache: "⎰",
        lmoust: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lnE: "≨",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftrightarrow: "⟷",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        Lscr: "ℒ",
        lsh: "↰",
        Lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        ltcc: "⪦",
        ltcir: "⩹",
        lt: "<",
        LT: "<",
        Lt: "≪",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        midast: "*",
        midcir: "⫰",
        mid: "∣",
        middot: "·",
        minusb: "⊟",
        minus: "−",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        Mscr: "ℳ",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natural: "♮",
        naturals: "ℕ",
        natur: "♮",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        nearhk: "⤤",
        nearr: "↗",
        neArr: "⇗",
        nearrow: "↗",
        ne: "≠",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nharr: "↮",
        nhArr: "⇎",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlarr: "↚",
        nlArr: "⇍",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nleftarrow: "↚",
        nLeftarrow: "⇍",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        nopf: "𝕟",
        Nopf: "ℕ",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangle: "⋫",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        nparallel: "∦",
        npar: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        nprec: "⊀",
        npreceq: "⪯̸",
        npre: "⪯̸",
        nrarrc: "⤳̸",
        nrarr: "↛",
        nrArr: "⇏",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nRightarrow: "⇏",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwarr: "↖",
        nwArr: "⇖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        Ocirc: "Ô",
        ocirc: "ô",
        ocir: "⊚",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        orarr: "↻",
        Or: "⩔",
        or: "∨",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        otimesas: "⨶",
        Otimes: "⨷",
        otimes: "⊗",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        para: "¶",
        parallel: "∥",
        par: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plus: "+",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        popf: "𝕡",
        Popf: "ℙ",
        pound: "£",
        prap: "⪷",
        Pr: "⪻",
        pr: "≺",
        prcue: "≼",
        precapprox: "⪷",
        prec: "≺",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        pre: "⪯",
        prE: "⪳",
        precsim: "≾",
        prime: "′",
        Prime: "″",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportional: "∝",
        Proportion: "∷",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        Qopf: "ℚ",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        QUOT: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        Rang: "⟫",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarr: "→",
        Rarr: "↠",
        rArr: "⇒",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        rAtail: "⤜",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rBarr: "⤏",
        RBarr: "⤐",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        Re: "ℜ",
        rect: "▭",
        reg: "®",
        REG: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        Rfr: "ℜ",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrowBar: "⇥",
        rightarrow: "→",
        RightArrow: "→",
        Rightarrow: "⇒",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVectorBar: "⥕",
        RightDownVector: "⇂",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTeeArrow: "↦",
        RightTee: "⊢",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangleBar: "⧐",
        RightTriangle: "⊳",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVectorBar: "⥔",
        RightUpVector: "↾",
        RightVectorBar: "⥓",
        RightVector: "⇀",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoustache: "⎱",
        rmoust: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        Ropf: "ℝ",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        rscr: "𝓇",
        Rscr: "ℛ",
        rsh: "↱",
        Rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        Sc: "⪼",
        sc: "≻",
        sccue: "≽",
        sce: "⪰",
        scE: "⪴",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdotb: "⊡",
        sdot: "⋅",
        sdote: "⩦",
        searhk: "⤥",
        searr: "↘",
        seArr: "⇘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        solbar: "⌿",
        solb: "⧄",
        sol: "/",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        square: "□",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squ: "□",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        Sub: "⋐",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        Subset: "⋐",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succapprox: "⪸",
        succ: "≻",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        sum: "∑",
        Sum: "∑",
        sung: "♪",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        sup: "⊃",
        Sup: "⋑",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        Supset: "⋑",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swarr: "↙",
        swArr: "⇙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "	",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        Therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        ThinSpace: " ",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        tilde: "˜",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        timesbar: "⨱",
        timesb: "⊠",
        times: "×",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        topbot: "⌶",
        topcir: "⫱",
        top: "⊤",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        TRADE: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        uarr: "↑",
        Uarr: "↟",
        uArr: "⇑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrowBar: "⤒",
        uparrow: "↑",
        UpArrow: "↑",
        Uparrow: "⇑",
        UpArrowDownArrow: "⇅",
        updownarrow: "↕",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        upsi: "υ",
        Upsi: "ϒ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTeeArrow: "↥",
        UpTee: "⊥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        vArr: "⇕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vBar: "⫨",
        Vbar: "⫫",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        vdash: "⊢",
        vDash: "⊨",
        Vdash: "⊩",
        VDash: "⊫",
        Vdashl: "⫦",
        veebar: "⊻",
        vee: "∨",
        Vee: "⋁",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        Verbar: "‖",
        vert: "|",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        Wedge: "⋀",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xharr: "⟷",
        xhArr: "⟺",
        Xi: "Ξ",
        xi: "ξ",
        xlarr: "⟵",
        xlArr: "⟸",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrarr: "⟶",
        xrArr: "⟹",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        yuml: "ÿ",
        Yuml: "Ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        zfr: "𝔷",
        Zfr: "ℨ",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        Zopf: "ℤ",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
      };
    }, function(e, t) {
      e.exports = {
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
      };
    }, function(e, t, r) {
      "use strict";
      var n = r(2),
          i = r(27),
          a = r(8),
          s = r(9),
          o = r(10),
          u = e.exports = n.createClass({
            displayName: "Demo",
            getInitialState: function() {
              return {
                markdownSrc: ["# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ", '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ', "elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)", "\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n", "\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ", "on the HTML settings above.\n</blockquote>\n\n## How about some code?\n", "```js\nvar React = require('react');\nvar Markdown = require('react-markdown');", '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.', "getElementById('content')\n);\n```\n\nPretty neat, eh?\n\n", "## More info?\n\n", "Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n", "---------------\n\n", "A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal"].join(""),
                htmlMode: "raw"
              };
            },
            onMarkdownChange: function(e) {
              this.setState({markdownSrc: e});
            },
            highlightCodeBlocks: function() {
              if (-1 !== this.state.markdownSrc.indexOf("```"))
                for (var e = document.querySelectorAll("pre code"),
                    t = 0; t < e.length; t++)
                  window.hljs.highlightBlock(e[t]);
            },
            componentDidMount: function() {
              this.highlightCodeBlocks();
            },
            componentDidUpdate: function() {
              this.highlightCodeBlocks();
            },
            onControlsChange: function(e) {
              this.setState({htmlMode: e});
            },
            render: function() {
              return n.createElement("div", {className: "demo"}, n.createElement("div", {className: "editor-pane"}, n.createElement(s, {
                onChange: this.onControlsChange,
                mode: this.state.htmlMode
              }), n.createElement(a, {
                value: this.state.markdownSrc,
                onChange: this.onMarkdownChange
              })), n.createElement("div", {className: "result-pane"}, n.createElement(o, {
                className: "result",
                source: this.state.markdownSrc,
                skipHtml: "skip" === this.state.htmlMode,
                escapeHtml: "escape" === this.state.htmlMode
              })));
            }
          });
      "undefined" != typeof window && i.render(n.createElement(u, null), document.getElementById("main"));
    }, function(e, t, r) {
      "use strict";
      var n = r(2),
          i = window.CodeMirrorEditor;
      e.exports = n.createClass({
        displayName: "Editor",
        propTypes: {
          onChange: n.PropTypes.func.isRequired,
          value: n.PropTypes.string
        },
        onInputChange: function(e) {
          this.props.onChange(e.target.value);
        },
        render: function() {
          return n.createElement("form", {className: "editor pure-form"}, n.createElement(i, {
            mode: "markdown",
            theme: "monokai",
            value: this.props.value,
            onChange: this.onInputChange
          }));
        }
      });
    }, function(e, t, r) {
      "use strict";
      var n = r(2);
      e.exports = n.createClass({
        displayName: "MarkdownControls",
        propTypes: {
          mode: n.PropTypes.string.isRequired,
          onChange: n.PropTypes.func.isRequired
        },
        getDefaultProps: function() {
          return {mode: "raw"};
        },
        onChange: function(e) {
          this.props.onChange(e.target.value);
        },
        render: function() {
          var e = "raw" === this.props.mode,
              t = "skip" === this.props.mode,
              r = "escape" === this.props.mode;
          return n.createElement("div", {className: "markdown-controls"}, n.createElement("form", {className: "pure-form pure-form-inline"}, n.createElement("fieldset", null, n.createElement("legend", null, "HTML mode:"), n.createElement("label", {
            htmlFor: "raw-html",
            className: "pure-checkbox"
          }, "Raw ", n.createElement("input", {
            id: "raw-html",
            name: "html-mode",
            type: "radio",
            value: "raw",
            checked: e,
            onChange: this.onChange
          })), n.createElement("label", {
            htmlFor: "escape-html",
            className: "pure-checkbox"
          }, "Escape ", n.createElement("input", {
            id: "escape-html",
            name: "html-mode",
            type: "radio",
            value: "escape",
            checked: r,
            onChange: this.onChange
          })), n.createElement("label", {
            htmlFor: "skip-html",
            className: "pure-checkbox"
          }, "Skip ", n.createElement("input", {
            id: "skip-html",
            name: "html-mode",
            type: "radio",
            value: "skip",
            checked: t,
            onChange: this.onChange
          })))));
        }
      });
    }, function(e, t, r) {
      "use strict";
      var n = r(2),
          i = r(15).Parser,
          a = r(11),
          s = new i,
          o = n.PropTypes,
          u = n.createClass({
            displayName: "ReactMarkdown",
            propTypes: {
              className: o.string,
              source: o.string.isRequired,
              containerTagName: o.string,
              sourcePos: o.bool,
              escapeHtml: o.bool,
              skipHtml: o.bool,
              softBreak: o.string,
              allowNode: o.func,
              allowedTypes: o.array,
              disallowedTypes: o.array
            },
            getDefaultProps: function() {
              return {containerTagName: "div"};
            },
            render: function() {
              var e = {},
                  t = new a(this.props),
                  r = s.parse(this.props.source || "");
              return this.props.className && (e.className = this.props.className), n.createElement.apply(n, [this.props.containerTagName, e].concat(t.render(r)));
            }
          });
      e.exports = u;
    }, function(e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        e.react = {
          tag: t,
          props: r,
          children: n || []
        };
      }
      function i(e) {
        var t = e.parent.parent;
        return t && "List" === t.type && t.listTight;
      }
      function a(e, t) {
        var r = e;
        do
          r = r.parent;
 while (!r.react);
        r.react.children.push(t);
      }
      function s(e, t, r) {
        var n = [e, t].concat(r),
            i = l.createElement.apply(l, n);
        return i;
      }
      function o(e) {
        for (var t,
            r,
            o,
            u,
            c,
            p,
            h,
            d = e.walker(),
            f = this.sourcePos,
            m = this.escapeHtml,
            g = this.skipHtml,
            b = "br" === this.softBreak ? l.createElement("br") : this.softBreak; r = d.next(); ) {
          if (u = r.entering, c = !u, o = r.node, p = {}, h || (h = o, o.react = {children: []}), f && o.sourcepos) {
            var v = o.sourcepos;
            p["data-sourcepos"] = [v[0][0], ":", v[0][1], "-", v[1][0], ":", v[1][1]].map(String).join("");
          }
          if ("Paragraph" !== o.type || !i(o))
            if (c) {
              if ("Image" === o.type && (o.react.props.alt = o.react.children[0], o.react.children = []), o !== h && this.allowNode && !this.allowNode({
                type: o.type,
                tag: o.react.tag,
                props: o.react.props,
                children: o.react.children
              }))
                continue;
              var C = -1 !== this.allowedTypes.indexOf(o.type);
              o !== h && C && a(o, s(o.react.tag, o.react.props, o.react.children));
            } else
              switch (o.type) {
                case "Html":
                case "HtmlBlock":
                  m ? a(o, o.literal) : g || (p.dangerouslySetInnerHTML = {__html: o.literal}, a(o, s("Html" === o.type ? "span" : "div", p)));
                  break;
                case "Text":
                  a(o, o.literal);
                  break;
                case "Paragraph":
                  n(o, "p", p);
                  break;
                case "Header":
                  n(o, "h" + o.level, p);
                  break;
                case "Softbreak":
                  a(o, b);
                  break;
                case "Hardbreak":
                  a(o, l.createElement("br"));
                  break;
                case "Strong":
                  n(o, "strong", p);
                  break;
                case "Link":
                  p.href = o.destination, o.title && (p.title = o.title), n(o, "a", p);
                  break;
                case "Image":
                  p.src = o.destination, o.title && (p.title = o.title), n(o, "img", p);
                  break;
                case "Emph":
                  n(o, "em", p);
                  break;
                case "Code":
                  a(o, s("code", p, [o.literal]));
                  break;
                case "CodeBlock":
                  t = o.info ? o.info.split(/ +/) : [], t.length > 0 && t[0].length > 0 && (p.className = "language-" + t[0]);
                  var E = s("code", p, [o.literal]);
                  a(o, s("pre", {}, [E]));
                  break;
                case "BlockQuote":
                  n(o, "blockquote", p);
                  break;
                case "List":
                  var k = o.listStart;
                  null !== k && 1 !== k && (p.start = k.toString()), n(o, "Bullet" === o.listType ? "ul" : "ol", p);
                  break;
                case "Item":
                  n(o, "li", p);
                  break;
                case "HorizontalRule":
                  a(o, s("hr", p));
                  break;
                case "Document":
                  break;
                default:
                  throw new Error('Unknown node type "' + o.type + '"');
              }
        }
        return h.react.children;
      }
      function u(e) {
        var t = e || {};
        if (t.allowedTypes && t.disallowedTypes)
          throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");
        if (t.allowedTypes && !Array.isArray(t.allowedTypes))
          throw new Error("`allowedTypes` must be an array");
        if (t.disallowedTypes && !Array.isArray(t.disallowedTypes))
          throw new Error("`disallowedTypes` must be an array");
        if (t.allowNode && "function" != typeof t.allowNode)
          throw new Error("`allowNode` must be a function");
        var r = t.allowedTypes || c;
        return t.disallowedTypes && (r = r.filter(function(e) {
          return -1 === t.disallowedTypes.indexOf(e);
        })), {
          sourcePos: t.sourcePos,
          softBreak: t.softBreak || "\n",
          escapeHtml: Boolean(t.escapeHtml),
          skipHtml: Boolean(t.skipHtml),
          allowNode: t.allowNode,
          allowedTypes: r,
          render: o
        };
      }
      var l = r(2),
          c = ["Html", "HtmlBlock", "Text", "Paragraph", "Header", "Softbreak", "Hardbreak", "Link", "Image", "Emph", "Code", "CodeBlock", "BlockQuote", "List", "Item", "Strong", "HorizontalRule", "Document"];
      e.exports = u;
    }, function(e, t, r) {
      "use strict";
      function n(e) {
        return {
          doc: new V,
          blocks: H,
          blockStarts: O,
          tip: this.doc,
          oldtip: this.doc,
          currentLine: "",
          lineNumber: 0,
          offset: 0,
          column: 0,
          nextNonspace: 0,
          nextNonspaceColumn: 0,
          indent: 0,
          indented: !1,
          blank: !1,
          allClosed: !0,
          lastMatchedContainer: this.doc,
          refmap: {},
          lastLineLength: 0,
          inlineParser: new f(e),
          findNextNonspace: U,
          advanceOffset: P,
          advanceNextNonspace: I,
          breakOutOfLists: T,
          addLine: B,
          addChild: N,
          incorporateLine: M,
          finalize: j,
          processInlines: z,
          closeUnmatchedBlocks: R,
          parse: G,
          options: e || {}
        };
      }
      var i = r(3),
          a = r(1).unescapeString,
          s = r(1).OPENTAG,
          o = r(1).CLOSETAG,
          u = 4,
          l = 10,
          c = 62,
          p = 60,
          h = 32,
          d = 91,
          f = r(16),
          m = [/./, /^<(?:script|pre|style)(?:\s|>|$)/i, /^<!--/, /^<[?]/, /^<![A-Z]/, /^<!\[CDATA\[/, /^<[\/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|title|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[\/]?[>]|$)/i, new RegExp("^(?:" + s + "|" + o + ")s*$", "i")],
          g = [/./, /<\/(?:script|pre|style)>/i, /-->/, /\?>/, />/, /\]\]>/],
          b = /^(?:(?:\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$/,
          v = /^[#`~*+_=<>0-9-]/,
          C = /[^ \t\f\v\r\n]/,
          E = /^[*+-]( +|$)/,
          k = /^(\d{1,9})([.)])( +|$)/,
          A = /^#{1,6}(?: +|$)/,
          w = /^`{3,}(?!.*`)|^~{3,}(?!.*~)/,
          y = /^(?:`{3,}|~{3,})(?= *$)/,
          x = /^(?:=+|-+) *$/,
          _ = /\r\n|\n|\r/,
          L = function(e) {
            return !C.test(e);
          },
          q = function(e, t) {
            return t < e.length ? e.charCodeAt(t) : -1;
          },
          D = function(e) {
            for (; e; ) {
              if (e._lastLineBlank)
                return !0;
              var t = e.type;
              if ("List" !== t && "Item" !== t)
                break;
              e = e._lastChild;
            }
            return !1;
          },
          T = function(e) {
            var t = e,
                r = null;
            do
              "List" === t.type && (r = t), t = t._parent;
 while (t);
            if (r) {
              for (; e !== r; )
                this.finalize(e, this.lineNumber), e = e._parent;
              this.finalize(r, this.lineNumber), this.tip = r._parent;
            }
          },
          B = function() {
            this.tip._string_content += this.currentLine.slice(this.offset) + "\n";
          },
          N = function(e, t) {
            for (; !this.blocks[this.tip.type].canContain(e); )
              this.finalize(this.tip, this.lineNumber - 1);
            var r = t + 1,
                n = new i(e, [[this.lineNumber, r], [0, 0]]);
            return n._string_content = "", this.tip.appendChild(n), this.tip = n, n;
          },
          S = function(e, t, r) {
            var n,
                i,
                a = e.slice(t),
                s = {
                  type: null,
                  tight: !0,
                  bulletChar: null,
                  start: null,
                  delimiter: null,
                  padding: null,
                  markerOffset: r
                };
            if (n = a.match(E))
              i = n[1].length, s.type = "Bullet", s.bulletChar = n[0][0];
            else {
              if (!(n = a.match(k)))
                return null;
              i = n[3].length, s.type = "Ordered", s.start = parseInt(n[1]), s.delimiter = n[2];
            }
            var o = n[0].length === a.length;
            return i >= 5 || 1 > i || o ? s.padding = n[0].length - i + 1 : s.padding = n[0].length, s;
          },
          F = function(e, t) {
            return e.type === t.type && e.delimiter === t.delimiter && e.bulletChar === t.bulletChar;
          },
          R = function() {
            if (!this.allClosed) {
              for (; this.oldtip !== this.lastMatchedContainer; ) {
                var e = this.oldtip._parent;
                this.finalize(this.oldtip, this.lineNumber - 1), this.oldtip = e;
              }
              this.allClosed = !0;
            }
          },
          H = {
            Document: {
              "continue": function() {
                return 0;
              },
              finalize: function() {},
              canContain: function(e) {
                return "Item" !== e;
              },
              acceptsLines: !1
            },
            List: {
              "continue": function() {
                return 0;
              },
              finalize: function(e, t) {
                for (var r = t._firstChild; r; ) {
                  if (D(r) && r._next) {
                    t._listData.tight = !1;
                    break;
                  }
                  for (var n = r._firstChild; n; ) {
                    if (D(n) && (r._next || n._next)) {
                      t._listData.tight = !1;
                      break;
                    }
                    n = n._next;
                  }
                  r = r._next;
                }
              },
              canContain: function(e) {
                return "Item" === e;
              },
              acceptsLines: !1
            },
            BlockQuote: {
              "continue": function(e) {
                var t = e.currentLine;
                return e.indented || q(t, e.nextNonspace) !== c ? 1 : (e.advanceNextNonspace(), e.advanceOffset(1, !1), q(t, e.offset) === h && e.offset++, 0);
              },
              finalize: function() {},
              canContain: function(e) {
                return "Item" !== e;
              },
              acceptsLines: !1
            },
            Item: {
              "continue": function(e, t) {
                if (e.blank && null !== t._firstChild)
                  e.advanceNextNonspace();
                else {
                  if (!(e.indent >= t._listData.markerOffset + t._listData.padding))
                    return 1;
                  e.advanceOffset(t._listData.markerOffset + t._listData.padding, !0);
                }
                return 0;
              },
              finalize: function() {},
              canContain: function(e) {
                return "Item" !== e;
              },
              acceptsLines: !1
            },
            Header: {
              "continue": function() {
                return 1;
              },
              finalize: function() {},
              canContain: function() {
                return !1;
              },
              acceptsLines: !1
            },
            HorizontalRule: {
              "continue": function() {
                return 1;
              },
              finalize: function() {},
              canContain: function() {
                return !1;
              },
              acceptsLines: !1
            },
            CodeBlock: {
              "continue": function(e, t) {
                var r = e.currentLine,
                    n = e.indent;
                if (t._isFenced) {
                  var i = 3 >= n && r.charAt(e.nextNonspace) === t._fenceChar && r.slice(e.nextNonspace).match(y);
                  if (i && i[0].length >= t._fenceLength)
                    return e.finalize(t, e.lineNumber), 2;
                  for (var a = t._fenceOffset; a > 0 && q(r, e.offset) === h; )
                    e.advanceOffset(1, !1), a--;
                } else if (n >= u)
                  e.advanceOffset(u, !0);
                else {
                  if (!e.blank)
                    return 1;
                  e.advanceNextNonspace();
                }
                return 0;
              },
              finalize: function(e, t) {
                if (t._isFenced) {
                  var r = t._string_content,
                      n = r.indexOf("\n"),
                      i = r.slice(0, n),
                      s = r.slice(n + 1);
                  t.info = a(i.trim()), t._literal = s;
                } else
                  t._literal = t._string_content.replace(/(\n *)+$/, "\n");
                t._string_content = null;
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            },
            HtmlBlock: {
              "continue": function(e, t) {
                return !e.blank || 6 !== t._htmlBlockType && 7 !== t._htmlBlockType ? 0 : 1;
              },
              finalize: function(e, t) {
                t._literal = t._string_content.replace(/(\n *)+$/, ""), t._string_content = null;
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            },
            Paragraph: {
              "continue": function(e) {
                return e.blank ? 1 : 0;
              },
              finalize: function(e, t) {
                for (var r,
                    n = !1; q(t._string_content, 0) === d && (r = e.inlineParser.parseReference(t._string_content, e.refmap)); )
                  t._string_content = t._string_content.slice(r), n = !0;
                n && L(t._string_content) && t.unlink();
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            }
          },
          O = [function(e) {
            return e.indented || q(e.currentLine, e.nextNonspace) !== c ? 0 : (e.advanceNextNonspace(), e.advanceOffset(1, !1), q(e.currentLine, e.offset) === h && e.advanceOffset(1, !1), e.closeUnmatchedBlocks(), e.addChild("BlockQuote", e.nextNonspace), 1);
          }, function(e) {
            var t;
            if (!e.indented && (t = e.currentLine.slice(e.nextNonspace).match(A))) {
              e.advanceNextNonspace(), e.advanceOffset(t[0].length, !1), e.closeUnmatchedBlocks();
              var r = e.addChild("Header", e.nextNonspace);
              return r.level = t[0].trim().length, r._string_content = e.currentLine.slice(e.offset).replace(/^ *#+ *$/, "").replace(/ +#+ *$/, ""), e.advanceOffset(e.currentLine.length - e.offset), 2;
            }
            return 0;
          }, function(e) {
            var t;
            if (!e.indented && (t = e.currentLine.slice(e.nextNonspace).match(w))) {
              var r = t[0].length;
              e.closeUnmatchedBlocks();
              var n = e.addChild("CodeBlock", e.nextNonspace);
              return n._isFenced = !0, n._fenceLength = r, n._fenceChar = t[0][0], n._fenceOffset = e.indent, e.advanceNextNonspace(), e.advanceOffset(r, !1), 2;
            }
            return 0;
          }, function(e, t) {
            if (!e.indented && q(e.currentLine, e.nextNonspace) === p) {
              var r,
                  n = e.currentLine.slice(e.nextNonspace);
              for (r = 1; 7 >= r; r++)
                if (m[r].test(n) && (7 > r || "Paragraph" !== t.type)) {
                  e.closeUnmatchedBlocks();
                  var i = e.addChild("HtmlBlock", e.offset);
                  return i._htmlBlockType = r, 2;
                }
            }
            return 0;
          }, function(e, t) {
            var r;
            if (!e.indented && "Paragraph" === t.type && t._string_content.indexOf("\n") === t._string_content.length - 1 && (r = e.currentLine.slice(e.nextNonspace).match(x))) {
              e.closeUnmatchedBlocks();
              var n = new i("Header", t.sourcepos);
              return n.level = "=" === r[0][0] ? 1 : 2, n._string_content = t._string_content, t.insertAfter(n), t.unlink(), e.tip = n, e.advanceOffset(e.currentLine.length - e.offset, !1), 2;
            }
            return 0;
          }, function(e) {
            return !e.indented && b.test(e.currentLine.slice(e.nextNonspace)) ? (e.closeUnmatchedBlocks(), e.addChild("HorizontalRule", e.nextNonspace), e.advanceOffset(e.currentLine.length - e.offset, !1), 2) : 0;
          }, function(e, t) {
            var r,
                n;
            return !(r = S(e.currentLine, e.nextNonspace, e.indent)) || e.indented && "List" !== t.type ? 0 : (e.closeUnmatchedBlocks(), e.advanceNextNonspace(), n = e.column, e.advanceOffset(r.padding, !1), r.padding = e.column - n, "List" === e.tip.type && F(t._listData, r) || (t = e.addChild("List", e.nextNonspace), t._listData = r), t = e.addChild("Item", e.nextNonspace), t._listData = r, 1);
          }, function(e) {
            return e.indented && "Paragraph" !== e.tip.type && !e.blank ? (e.advanceOffset(u, !0), e.closeUnmatchedBlocks(), e.addChild("CodeBlock", e.offset), 2) : 0;
          }],
          P = function(e, t) {
            for (var r = 0,
                n = 0,
                i = this.currentLine; t ? e > n : e > r; )
              n += "	" === i[this.offset + r] ? 4 - (this.column + n) % 4 : 1, r++;
            this.offset += r, this.column += n;
          },
          I = function() {
            this.offset = this.nextNonspace, this.column = this.nextNonspaceColumn;
          },
          U = function() {
            for (var e,
                t = this.currentLine,
                r = this.offset,
                n = this.column; "" !== (e = t.charAt(r)); )
              if (" " === e)
                r++, n++;
              else {
                if ("	" !== e)
                  break;
                r++, n += 4 - n % 4;
              }
            this.blank = "\n" === e || "\r" === e || "" === e, this.nextNonspace = r, this.nextNonspaceColumn = n, this.indent = this.nextNonspaceColumn - this.column, this.indented = this.indent >= u;
          },
          M = function(e) {
            var t,
                r = !0,
                n = this.doc;
            this.oldtip = this.tip, this.offset = 0, this.lineNumber += 1, -1 !== e.indexOf("\x00") && (e = e.replace(/\0/g, "�")), this.currentLine = e;
            for (var i; (i = n._lastChild) && i._open; ) {
              switch (n = i, this.findNextNonspace(), this.blocks[n.type]["continue"](this, n)) {
                case 0:
                  break;
                case 1:
                  r = !1;
                  break;
                case 2:
                  return void(this.lastLineLength = e.length);
                default:
                  throw "continue returned illegal value, must be 0, 1, or 2";
              }
              if (!r) {
                n = n._parent;
                break;
              }
            }
            this.allClosed = n === this.oldtip, this.lastMatchedContainer = n, this.blank && n._lastLineBlank && this.breakOutOfLists(n);
            for (var a = "Paragraph" !== n.type && H[n.type].acceptsLines,
                s = this.blockStarts,
                o = s.length; !a; ) {
              if (this.findNextNonspace(), !this.indented && !v.test(e.slice(this.nextNonspace))) {
                this.advanceNextNonspace();
                break;
              }
              for (var u = 0; o > u; ) {
                var l = s[u](this, n);
                if (1 === l) {
                  n = this.tip;
                  break;
                }
                if (2 === l) {
                  n = this.tip, a = !0;
                  break;
                }
                u++;
              }
              if (u === o) {
                this.advanceNextNonspace();
                break;
              }
            }
            if (this.allClosed || this.blank || "Paragraph" !== this.tip.type) {
              this.closeUnmatchedBlocks(), this.blank && n.lastChild && (n.lastChild._lastLineBlank = !0), t = n.type;
              for (var c = this.blank && !("BlockQuote" === t || "CodeBlock" === t && n._isFenced || "Item" === t && !n._firstChild && n.sourcepos[0][0] === this.lineNumber),
                  p = n; p; )
                p._lastLineBlank = c, p = p._parent;
              this.blocks[t].acceptsLines ? (this.addLine(), "HtmlBlock" === t && n._htmlBlockType >= 1 && n._htmlBlockType <= 5 && g[n._htmlBlockType].test(this.currentLine.slice(this.offset)) && this.finalize(n, this.lineNumber)) : this.offset < e.length && !this.blank && (n = this.addChild("Paragraph", this.offset), this.advanceNextNonspace(), this.addLine());
            } else
              this.addLine();
            this.lastLineLength = e.length;
          },
          j = function(e, t) {
            var r = e._parent;
            e._open = !1, e.sourcepos[1] = [t, this.lastLineLength], this.blocks[e.type].finalize(this, e), this.tip = r;
          },
          z = function(e) {
            var t,
                r,
                n,
                i = e.walker();
            for (this.inlineParser.refmap = this.refmap, this.inlineParser.options = this.options; r = i.next(); )
              t = r.node, n = t.type, r.entering || "Paragraph" !== n && "Header" !== n || this.inlineParser.parse(t);
          },
          V = function() {
            var e = new i("Document", [[1, 1], [0, 0]]);
            return e;
          },
          G = function(e) {
            this.doc = new V, this.tip = this.doc, this.refmap = {}, this.lineNumber = 0, this.lastLineLength = 0, this.offset = 0, this.column = 0, this.lastMatchedContainer = this.doc, this.currentLine = "", this.options.time && console.time("preparing input");
            var t = e.split(_),
                r = t.length;
            e.charCodeAt(e.length - 1) === l && (r -= 1), this.options.time && console.timeEnd("preparing input"), this.options.time && console.time("block parsing");
            for (var n = 0; r > n; n++)
              this.incorporateLine(t[n]);
            for (; this.tip; )
              this.finalize(this.tip, r);
            return this.options.time && console.timeEnd("block parsing"), this.options.time && console.time("inline parsing"), this.processInlines(this.doc), this.options.time && console.timeEnd("inline parsing"), this.doc;
          };
      e.exports = n;
    }, function(e, t) {
      "use strict";
      if (String.fromCodePoint)
        e.exports = function(e) {
          try {
            return String.fromCodePoint(e);
          } catch (t) {
            if (t instanceof RangeError)
              return String.fromCharCode(65533);
            throw t;
          }
        };
      else {
        var r = String.fromCharCode,
            n = Math.floor,
            i = function() {
              var e,
                  t,
                  i = 16384,
                  a = [],
                  s = -1,
                  o = arguments.length;
              if (!o)
                return "";
              for (var u = ""; ++s < o; ) {
                var l = Number(arguments[s]);
                if (!isFinite(l) || 0 > l || l > 1114111 || n(l) !== l)
                  return String.fromCharCode(65533);
                65535 >= l ? a.push(l) : (l -= 65536, e = (l >> 10) + 55296, t = l % 1024 + 56320, a.push(e, t)), (s + 1 === o || a.length > i) && (u += r.apply(null, a), a.length = 0);
              }
              return u;
            };
        e.exports = i;
      }
    }, function(e, t, r) {
      "use strict";
      function n(e) {
        return {
          softbreak: "\n",
          escape: i,
          options: e || {},
          render: c
        };
      }
      var i = r(1).escapeXml,
          a = function(e, t, r) {
            var n = "<" + e;
            if (t && t.length > 0)
              for (var i,
                  a = 0; void 0 !== (i = t[a]); )
                n += " " + i[0] + '="' + i[1] + '"', a++;
            return r && (n += " /"), n += ">";
          },
          s = /\<[^>]*\>/,
          o = /^javascript:|vbscript:|file:|data:/i,
          u = /^data:image\/(?:png|gif|jpeg|webp)/i,
          l = function(e) {
            return o.test(e) && !u.test(e);
          },
          c = function(e) {
            var t,
                r,
                n,
                i,
                o,
                u,
                c,
                p = e.walker(),
                h = "",
                d = "\n",
                f = 0,
                m = function(e) {
                  h += f > 0 ? e.replace(s, "") : e, d = e;
                },
                g = this.escape,
                b = function() {
                  "\n" !== d && (h += "\n", d = "\n");
                },
                v = this.options;
            for (v.time && console.time("rendering"); i = p.next(); ) {
              if (u = i.entering, o = i.node, t = [], v.sourcepos) {
                var C = o.sourcepos;
                C && t.push(["data-sourcepos", String(C[0][0]) + ":" + String(C[0][1]) + "-" + String(C[1][0]) + ":" + String(C[1][1])]);
              }
              switch (o.type) {
                case "Text":
                  m(g(o.literal, !1));
                  break;
                case "Softbreak":
                  m(this.softbreak);
                  break;
                case "Hardbreak":
                  m(a("br", [], !0)), b();
                  break;
                case "Emph":
                  m(a(u ? "em" : "/em"));
                  break;
                case "Strong":
                  m(a(u ? "strong" : "/strong"));
                  break;
                case "Html":
                  m(v.safe ? "<!-- raw HTML omitted -->" : o.literal);
                  break;
                case "Link":
                  u ? (v.safe && l(o.destination) || t.push(["href", g(o.destination, !0)]), o.title && t.push(["title", g(o.title, !0)]), m(a("a", t))) : m(a("/a"));
                  break;
                case "Image":
                  u ? (0 === f && m(v.safe && l(o.destination) ? '<img src="" alt="' : '<img src="' + g(o.destination, !0) + '" alt="'), f += 1) : (f -= 1, 0 === f && (o.title && m('" title="' + g(o.title, !0)), m('" />')));
                  break;
                case "Code":
                  m(a("code") + g(o.literal, !1) + a("/code"));
                  break;
                case "Document":
                  break;
                case "Paragraph":
                  if (c = o.parent.parent, null !== c && "List" === c.type && c.listTight)
                    break;
                  u ? (b(), m(a("p", t))) : (m(a("/p")), b());
                  break;
                case "BlockQuote":
                  u ? (b(), m(a("blockquote", t)), b()) : (b(), m(a("/blockquote")), b());
                  break;
                case "Item":
                  u ? m(a("li", t)) : (m(a("/li")), b());
                  break;
                case "List":
                  if (n = "Bullet" === o.listType ? "ul" : "ol", u) {
                    var E = o.listStart;
                    null !== E && 1 !== E && t.push(["start", E.toString()]), b(), m(a(n, t)), b();
                  } else
                    b(), m(a("/" + n)), b();
                  break;
                case "Header":
                  n = "h" + o.level, u ? (b(), m(a(n, t))) : (m(a("/" + n)), b());
                  break;
                case "CodeBlock":
                  r = o.info ? o.info.split(/\s+/) : [], r.length > 0 && r[0].length > 0 && t.push(["class", "language-" + g(r[0], !0)]), b(), m(a("pre") + a("code", t)), m(g(o.literal, !1)), m(a("/code") + a("/pre")), b();
                  break;
                case "HtmlBlock":
                  b(), m(v.safe ? "<!-- raw HTML omitted -->" : o.literal), b();
                  break;
                case "HorizontalRule":
                  b(), m(a("hr", t, !0)), b();
                  break;
                default:
                  throw "Unknown node type " + o.type;
              }
            }
            return v.time && console.timeEnd("rendering"), h;
          };
      e.exports = n;
    }, function(e, t, r) {
      "use strict";
      e.exports.Node = r(3), e.exports.Parser = r(12), e.exports.HtmlRenderer = r(14), e.exports.XmlRenderer = r(18);
    }, function(e, t, r) {
      "use strict";
      function n(e) {
        return {
          subject: "",
          delimiters: null,
          pos: 0,
          refmap: {},
          match: W,
          peek: ee,
          spnl: te,
          parseBackticks: re,
          parseBackslash: ne,
          parseAutolink: ie,
          parseHtmlTag: ae,
          scanDelims: se,
          handleDelim: oe,
          parseLinkTitle: pe,
          parseLinkDestination: he,
          parseLinkLabel: de,
          parseOpenBracket: fe,
          parseCloseBracket: ge,
          parseBang: me,
          parseEntity: be,
          parseString: ve,
          parseNewline: Ce,
          parseReference: Ee,
          parseInline: ke,
          processEmphasis: ce,
          removeDelimiter: ue,
          options: e || {},
          parse: Ae
        };
      }
      var i = r(3),
          a = r(1),
          s = r(17),
          o = a.normalizeURI,
          u = a.unescapeString,
          l = r(13),
          c = r(4).decodeHTML;
      r(26);
      var p = 10,
          h = 42,
          d = 95,
          f = 96,
          m = 91,
          g = 93,
          b = 60,
          v = 33,
          C = 92,
          E = 38,
          k = 40,
          A = 41,
          w = 58,
          y = 39,
          x = 34,
          _ = a.ESCAPABLE,
          L = "\\\\" + _,
          q = "[^\\\\()\\x00-\\x20]",
          D = "\\((" + q + "|" + L + "|\\\\)*\\)",
          T = a.ENTITY,
          B = a.reHtmlTag,
          N = new RegExp(/^[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/),
          S = new RegExp('^(?:"(' + L + '|[^"\\x00])*"|\'(' + L + "|[^'\\x00])*'|\\((" + L + "|[^)\\x00])*\\))"),
          F = new RegExp("^(?:[<](?:[^<>\\n\\\\\\x00]|" + L + "|\\\\)*[>])"),
          R = new RegExp("^(?:" + q + "+|" + L + "|\\\\|" + D + ")*"),
          H = new RegExp("^" + _),
          O = new RegExp("^" + T, "i"),
          P = /`+/,
          I = /^`+/,
          U = /\.\.\./g,
          M = /--+/g,
          j = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
          z = /^<(?:coap|doi|javascript|aaa|aaas|about|acap|cap|cid|crid|data|dav|dict|dns|file|ftp|geo|go|gopher|h323|http|https|iax|icap|im|imap|info|ipp|iris|iris.beep|iris.xpc|iris.xpcs|iris.lwz|ldap|mailto|mid|msrp|msrps|mtqp|mupdate|news|nfs|ni|nih|nntp|opaquelocktoken|pop|pres|rtsp|service|session|shttp|sieve|sip|sips|sms|snmp|soap.beep|soap.beeps|tag|tel|telnet|tftp|thismessage|tn3270|tip|tv|urn|vemmi|ws|wss|xcon|xcon-userid|xmlrpc.beep|xmlrpc.beeps|xmpp|z39.50r|z39.50s|adiumxtra|afp|afs|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|chrome|chrome-extension|com-eventbrite-attendee|content|cvs|dlna-playsingle|dlna-playcontainer|dtn|dvb|ed2k|facetime|feed|finger|fish|gg|git|gizmoproject|gtalk|hcp|icon|ipn|irc|irc6|ircs|itms|jar|jms|keyparc|lastfm|ldaps|magnet|maps|market|message|mms|ms-help|msnim|mumble|mvn|notes|oid|palm|paparazzi|platform|proxy|psyc|query|res|resource|rmi|rsync|rtmp|secondlife|sftp|sgn|skype|smb|soldat|spotify|ssh|steam|svn|teamspeak|things|udp|unreal|ut2004|ventrilo|view-source|webcal|wtai|wyciwyg|xfire|xri|ymsgr):[^<>\x00-\x20]*>/i,
          V = /^ *(?:\n *)?/,
          G = /^\s/,
          Z = /\s+/g,
          $ = / *$/,
          X = /^ */,
          Y = /^ *(?:\n|$)/,
          Q = new RegExp("^\\[(?:[^\\\\\\[\\]]|" + L + "|\\\\){0,1000}\\]"),
          J = /^[^\n`\[\]\\!<&*_'"]+/m,
          K = function(e) {
            var t = new i("Text");
            return t._literal = e, t;
          },
          W = function(e) {
            var t = e.exec(this.subject.slice(this.pos));
            return null === t ? null : (this.pos += t.index + t[0].length, t[0]);
          },
          ee = function() {
            return this.pos < this.subject.length ? this.subject.charCodeAt(this.pos) : -1;
          },
          te = function() {
            return this.match(V), !0;
          },
          re = function(e) {
            var t = this.match(I);
            if (null === t)
              return !1;
            for (var r,
                n,
                a = this.pos; null !== (r = this.match(P)); )
              if (r === t)
                return n = new i("Code"), n._literal = this.subject.slice(a, this.pos - t.length).trim().replace(Z, " "), e.appendChild(n), !0;
            return this.pos = a, e.appendChild(K(t)), !0;
          },
          ne = function(e) {
            var t,
                r = this.subject;
            return this.pos += 1, this.peek() === p ? (this.pos += 1, t = new i("Hardbreak"), e.appendChild(t)) : H.test(r.charAt(this.pos)) ? (e.appendChild(K(r.charAt(this.pos))), this.pos += 1) : e.appendChild(K("\\")), !0;
          },
          ie = function(e) {
            var t,
                r,
                n;
            return (t = this.match(j)) ? (r = t.slice(1, t.length - 1), n = new i("Link"), n._destination = o("mailto:" + r), n._title = "", n.appendChild(K(r)), e.appendChild(n), !0) : (t = this.match(z)) ? (r = t.slice(1, t.length - 1), n = new i("Link"), n._destination = o(r), n._title = "", n.appendChild(K(r)), e.appendChild(n), !0) : !1;
          },
          ae = function(e) {
            var t = this.match(B);
            if (null === t)
              return !1;
            var r = new i("Html");
            return r._literal = t, e.appendChild(r), !0;
          },
          se = function(e) {
            var t,
                r,
                n,
                i,
                a,
                s,
                o,
                u,
                c,
                p,
                h,
                f = 0,
                m = this.pos;
            if (e === y || e === x)
              f++, this.pos++;
            else
              for (; this.peek() === e; )
                f++, this.pos++;
            return 0 === f ? null : (t = 0 === m ? "\n" : this.subject.charAt(m - 1), n = this.peek(), r = -1 === n ? "\n" : l(n), u = G.test(r), c = N.test(r), p = G.test(t), h = N.test(t), i = !(u || c && !p && !h), a = !(p || h && !u && !c), e === d ? (s = i && (!a || h), o = a && (!i || c)) : e === y || e === x ? (s = i && !a, o = a) : (s = i, o = a), this.pos = m, {
              numdelims: f,
              can_open: s,
              can_close: o
            });
          },
          oe = function(e, t) {
            var r = this.scanDelims(e);
            if (!r)
              return !1;
            var n,
                i = r.numdelims,
                a = this.pos;
            this.pos += i, n = e === y ? "’" : e === x ? "“" : this.subject.slice(a, this.pos);
            var s = K(n);
            return t.appendChild(s), this.delimiters = {
              cc: e,
              numdelims: i,
              node: s,
              previous: this.delimiters,
              next: null,
              can_open: r.can_open,
              can_close: r.can_close,
              active: !0
            }, null !== this.delimiters.previous && (this.delimiters.previous.next = this.delimiters), !0;
          },
          ue = function(e) {
            null !== e.previous && (e.previous.next = e.next), null === e.next ? this.delimiters = e.previous : e.next.previous = e.previous;
          },
          le = function(e, t) {
            e.next !== t && (e.next = t, t.previous = e);
          },
          ce = function(e) {
            var t,
                r,
                n,
                a,
                s,
                o,
                u,
                l,
                c,
                p,
                f = [];
            for (f[d] = e, f[h] = e, f[y] = e, f[x] = e, r = this.delimiters; null !== r && r.previous !== e; )
              r = r.previous;
            for (; null !== r; ) {
              var m = r.cc;
              if (!r.can_close || m !== d && m !== h && m !== y && m !== x)
                r = r.next;
              else {
                for (t = r.previous, p = !1; null !== t && t !== e && t !== f[m]; ) {
                  if (t.cc === r.cc && t.can_open) {
                    p = !0;
                    break;
                  }
                  t = t.previous;
                }
                if (n = r, m === h || m === d)
                  if (p) {
                    u = r.numdelims < 3 || t.numdelims < 3 ? r.numdelims <= t.numdelims ? r.numdelims : t.numdelims : r.numdelims % 2 === 0 ? 2 : 1, a = t.node, s = r.node, t.numdelims -= u, r.numdelims -= u, a._literal = a._literal.slice(0, a._literal.length - u), s._literal = s._literal.slice(0, s._literal.length - u);
                    var g = new i(1 === u ? "Emph" : "Strong");
                    for (l = a._next; l && l !== s; )
                      c = l._next, l.unlink(), g.appendChild(l), l = c;
                    a.insertAfter(g), le(t, r), 0 === t.numdelims && (a.unlink(), this.removeDelimiter(t)), 0 === r.numdelims && (s.unlink(), o = r.next, this.removeDelimiter(r), r = o);
                  } else
                    r = r.next;
                else
                  m === y ? (r.node._literal = "’", p && (t.node._literal = "‘"), r = r.next) : m === x && (r.node._literal = "”", p && (t.node.literal = "“"), r = r.next);
                p || (f[m] = n.previous, n.can_open || this.removeDelimiter(n));
              }
            }
            for (; null !== this.delimiters && this.delimiters !== e; )
              this.removeDelimiter(this.delimiters);
          },
          pe = function() {
            var e = this.match(S);
            return null === e ? null : u(e.substr(1, e.length - 2));
          },
          he = function() {
            var e = this.match(F);
            return null === e ? (e = this.match(R), null === e ? null : o(u(e))) : o(u(e.substr(1, e.length - 2)));
          },
          de = function() {
            var e = this.match(Q);
            return null === e || e.length > 1001 ? 0 : e.length;
          },
          fe = function(e) {
            var t = this.pos;
            this.pos += 1;
            var r = K("[");
            return e.appendChild(r), this.delimiters = {
              cc: m,
              numdelims: 1,
              node: r,
              previous: this.delimiters,
              next: null,
              can_open: !0,
              can_close: !1,
              index: t,
              active: !0
            }, null !== this.delimiters.previous && (this.delimiters.previous.next = this.delimiters), !0;
          },
          me = function(e) {
            var t = this.pos;
            if (this.pos += 1, this.peek() === m) {
              this.pos += 1;
              var r = K("![");
              e.appendChild(r), this.delimiters = {
                cc: v,
                numdelims: 1,
                node: r,
                previous: this.delimiters,
                next: null,
                can_open: !0,
                can_close: !1,
                index: t + 1,
                active: !0
              }, null !== this.delimiters.previous && (this.delimiters.previous.next = this.delimiters);
            } else
              e.appendChild(K("!"));
            return !0;
          },
          ge = function(e) {
            var t,
                r,
                n,
                a,
                o,
                u,
                l = !1;
            for (this.pos += 1, t = this.pos, u = this.delimiters; null !== u && u.cc !== m && u.cc !== v; )
              u = u.previous;
            if (null === u)
              return e.appendChild(K("]")), !0;
            if (!u.active)
              return e.appendChild(K("]")), this.removeDelimiter(u), !0;
            if (r = u.cc === v, this.peek() === k)
              this.pos++, this.spnl() && null !== (n = this.parseLinkDestination()) && this.spnl() && (G.test(this.subject.charAt(this.pos - 1)) && (a = this.parseLinkTitle()), !0) && this.spnl() && this.peek() === A && (this.pos += 1, l = !0);
            else {
              var c = this.pos;
              this.spnl();
              var p = this.pos,
                  h = this.parseLinkLabel();
              o = 0 === h || 2 === h ? this.subject.slice(u.index, t) : this.subject.slice(p, p + h), 0 === h && (this.pos = c);
              var d = this.refmap[s(o)];
              d && (n = d.destination, a = d.title, l = !0);
            }
            if (l) {
              var f = new i(r ? "Image" : "Link");
              f._destination = n, f._title = a || "";
              var g,
                  b;
              for (g = u.node._next; g; )
                b = g._next, g.unlink(), f.appendChild(g), g = b;
              if (e.appendChild(f), this.processEmphasis(u.previous), u.node.unlink(), !r)
                for (u = this.delimiters; null !== u; )
                  u.cc === m && (u.active = !1), u = u.previous;
              return !0;
            }
            return this.removeDelimiter(u), this.pos = t, e.appendChild(K("]")), !0;
          },
          be = function(e) {
            var t;
            return (t = this.match(O)) ? (e.appendChild(K(c(t))), !0) : !1;
          },
          ve = function(e) {
            var t;
            return (t = this.match(J)) ? (this.options.smart ? e.appendChild(K(t.replace(U, "…").replace(M, function(e) {
              var t = 0,
                  r = 0;
              return e.length % 3 === 0 ? r = e.length / 3 : e.length % 2 === 0 ? t = e.length / 2 : e.length % 3 === 2 ? (t = 1, r = (e.length - 2) / 3) : (t = 2, r = (e.length - 4) / 3), "—".repeat(r) + "–".repeat(t);
            }))) : e.appendChild(K(t)), !0) : !1;
          },
          Ce = function(e) {
            this.pos += 1;
            var t = e._lastChild;
            if (t && "Text" === t.type && " " === t._literal[t._literal.length - 1]) {
              var r = " " === t._literal[t._literal.length - 2];
              t._literal = t._literal.replace($, ""), e.appendChild(new i(r ? "Hardbreak" : "Softbreak"));
            } else
              e.appendChild(new i("Softbreak"));
            return this.match(X), !0;
          },
          Ee = function(e, t) {
            this.subject = e, this.pos = 0;
            var r,
                n,
                i,
                a,
                o = this.pos;
            if (a = this.parseLinkLabel(), 0 === a)
              return 0;
            if (r = this.subject.substr(0, a), this.peek() !== w)
              return this.pos = o, 0;
            if (this.pos++, this.spnl(), n = this.parseLinkDestination(), null === n || 0 === n.length)
              return this.pos = o, 0;
            var u = this.pos;
            this.spnl(), i = this.parseLinkTitle(), null === i && (i = "", this.pos = u);
            var l = !0;
            if (null === this.match(Y) && ("" === i ? l = !1 : (i = "", this.pos = u, l = null !== this.match(Y))), !l)
              return this.pos = o, 0;
            var c = s(r);
            return "" === c ? (this.pos = o, 0) : (t[c] || (t[c] = {
              destination: n,
              title: i
            }), this.pos - o);
          },
          ke = function(e) {
            var t = !1,
                r = this.peek();
            if (-1 === r)
              return !1;
            switch (r) {
              case p:
                t = this.parseNewline(e);
                break;
              case C:
                t = this.parseBackslash(e);
                break;
              case f:
                t = this.parseBackticks(e);
                break;
              case h:
              case d:
                t = this.handleDelim(r, e);
                break;
              case y:
              case x:
                t = this.options.smart && this.handleDelim(r, e);
                break;
              case m:
                t = this.parseOpenBracket(e);
                break;
              case v:
                t = this.parseBang(e);
                break;
              case g:
                t = this.parseCloseBracket(e);
                break;
              case b:
                t = this.parseAutolink(e) || this.parseHtmlTag(e);
                break;
              case E:
                t = this.parseEntity(e);
                break;
              default:
                t = this.parseString(e);
            }
            return t || (this.pos += 1, e.appendChild(K(l(r)))), !0;
          },
          Ae = function(e) {
            for (this.subject = e._string_content.trim(), this.pos = 0, this.delimiters = null; this.parseInline(e); )
              ;
            e._string_content = null, this.processEmphasis(null);
          };
      e.exports = n;
    }, function(e, t) {
      "use strict";
      var r = /[ \t\r\n]+|[A-Z\xB5\xC0-\xD6\xD8-\xDF\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u0149\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u017F\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C5\u01C7\u01C8\u01CA\u01CB\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F0-\u01F2\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0345\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03AB\u03B0\u03C2\u03CF-\u03D1\u03D5\u03D6\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F0\u03F1\u03F4\u03F5\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u0587\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E96-\u1E9B\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F50\u1F52\u1F54\u1F56\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1F80-\u1FAF\u1FB2-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD2\u1FD3\u1FD6-\u1FDB\u1FE2-\u1FE4\u1FE6-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2126\u212A\u212B\u2132\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0\uA7B1\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27]|\uD806[\uDCA0-\uDCBF]/g,
          n = {
            A: "a",
            B: "b",
            C: "c",
            D: "d",
            E: "e",
            F: "f",
            G: "g",
            H: "h",
            I: "i",
            J: "j",
            K: "k",
            L: "l",
            M: "m",
            N: "n",
            O: "o",
            P: "p",
            Q: "q",
            R: "r",
            S: "s",
            T: "t",
            U: "u",
            V: "v",
            W: "w",
            X: "x",
            Y: "y",
            Z: "z",
            "µ": "μ",
            "À": "à",
            "Á": "á",
            "Â": "â",
            "Ã": "ã",
            "Ä": "ä",
            "Å": "å",
            "Æ": "æ",
            "Ç": "ç",
            "È": "è",
            "É": "é",
            "Ê": "ê",
            "Ë": "ë",
            "Ì": "ì",
            "Í": "í",
            "Î": "î",
            "Ï": "ï",
            "Ð": "ð",
            "Ñ": "ñ",
            "Ò": "ò",
            "Ó": "ó",
            "Ô": "ô",
            "Õ": "õ",
            "Ö": "ö",
            "Ø": "ø",
            "Ù": "ù",
            "Ú": "ú",
            "Û": "û",
            "Ü": "ü",
            "Ý": "ý",
            "Þ": "þ",
            "Ā": "ā",
            "Ă": "ă",
            "Ą": "ą",
            "Ć": "ć",
            "Ĉ": "ĉ",
            "Ċ": "ċ",
            "Č": "č",
            "Ď": "ď",
            "Đ": "đ",
            "Ē": "ē",
            "Ĕ": "ĕ",
            "Ė": "ė",
            "Ę": "ę",
            "Ě": "ě",
            "Ĝ": "ĝ",
            "Ğ": "ğ",
            "Ġ": "ġ",
            "Ģ": "ģ",
            "Ĥ": "ĥ",
            "Ħ": "ħ",
            "Ĩ": "ĩ",
            "Ī": "ī",
            "Ĭ": "ĭ",
            "Į": "į",
            "Ĳ": "ĳ",
            "Ĵ": "ĵ",
            "Ķ": "ķ",
            "Ĺ": "ĺ",
            "Ļ": "ļ",
            "Ľ": "ľ",
            "Ŀ": "ŀ",
            "Ł": "ł",
            "Ń": "ń",
            "Ņ": "ņ",
            "Ň": "ň",
            "Ŋ": "ŋ",
            "Ō": "ō",
            "Ŏ": "ŏ",
            "Ő": "ő",
            "Œ": "œ",
            "Ŕ": "ŕ",
            "Ŗ": "ŗ",
            "Ř": "ř",
            "Ś": "ś",
            "Ŝ": "ŝ",
            "Ş": "ş",
            "Š": "š",
            "Ţ": "ţ",
            "Ť": "ť",
            "Ŧ": "ŧ",
            "Ũ": "ũ",
            "Ū": "ū",
            "Ŭ": "ŭ",
            "Ů": "ů",
            "Ű": "ű",
            "Ų": "ų",
            "Ŵ": "ŵ",
            "Ŷ": "ŷ",
            "Ÿ": "ÿ",
            "Ź": "ź",
            "Ż": "ż",
            "Ž": "ž",
            "ſ": "s",
            "Ɓ": "ɓ",
            "Ƃ": "ƃ",
            "Ƅ": "ƅ",
            "Ɔ": "ɔ",
            "Ƈ": "ƈ",
            "Ɖ": "ɖ",
            "Ɗ": "ɗ",
            "Ƌ": "ƌ",
            "Ǝ": "ǝ",
            "Ə": "ə",
            "Ɛ": "ɛ",
            "Ƒ": "ƒ",
            "Ɠ": "ɠ",
            "Ɣ": "ɣ",
            "Ɩ": "ɩ",
            "Ɨ": "ɨ",
            "Ƙ": "ƙ",
            "Ɯ": "ɯ",
            "Ɲ": "ɲ",
            "Ɵ": "ɵ",
            "Ơ": "ơ",
            "Ƣ": "ƣ",
            "Ƥ": "ƥ",
            "Ʀ": "ʀ",
            "Ƨ": "ƨ",
            "Ʃ": "ʃ",
            "Ƭ": "ƭ",
            "Ʈ": "ʈ",
            "Ư": "ư",
            "Ʊ": "ʊ",
            "Ʋ": "ʋ",
            "Ƴ": "ƴ",
            "Ƶ": "ƶ",
            "Ʒ": "ʒ",
            "Ƹ": "ƹ",
            "Ƽ": "ƽ",
            "Ǆ": "ǆ",
            "ǅ": "ǆ",
            "Ǉ": "ǉ",
            "ǈ": "ǉ",
            "Ǌ": "ǌ",
            "ǋ": "ǌ",
            "Ǎ": "ǎ",
            "Ǐ": "ǐ",
            "Ǒ": "ǒ",
            "Ǔ": "ǔ",
            "Ǖ": "ǖ",
            "Ǘ": "ǘ",
            "Ǚ": "ǚ",
            "Ǜ": "ǜ",
            "Ǟ": "ǟ",
            "Ǡ": "ǡ",
            "Ǣ": "ǣ",
            "Ǥ": "ǥ",
            "Ǧ": "ǧ",
            "Ǩ": "ǩ",
            "Ǫ": "ǫ",
            "Ǭ": "ǭ",
            "Ǯ": "ǯ",
            "Ǳ": "ǳ",
            "ǲ": "ǳ",
            "Ǵ": "ǵ",
            "Ƕ": "ƕ",
            "Ƿ": "ƿ",
            "Ǹ": "ǹ",
            "Ǻ": "ǻ",
            "Ǽ": "ǽ",
            "Ǿ": "ǿ",
            "Ȁ": "ȁ",
            "Ȃ": "ȃ",
            "Ȅ": "ȅ",
            "Ȇ": "ȇ",
            "Ȉ": "ȉ",
            "Ȋ": "ȋ",
            "Ȍ": "ȍ",
            "Ȏ": "ȏ",
            "Ȑ": "ȑ",
            "Ȓ": "ȓ",
            "Ȕ": "ȕ",
            "Ȗ": "ȗ",
            "Ș": "ș",
            "Ț": "ț",
            "Ȝ": "ȝ",
            "Ȟ": "ȟ",
            "Ƞ": "ƞ",
            "Ȣ": "ȣ",
            "Ȥ": "ȥ",
            "Ȧ": "ȧ",
            "Ȩ": "ȩ",
            "Ȫ": "ȫ",
            "Ȭ": "ȭ",
            "Ȯ": "ȯ",
            "Ȱ": "ȱ",
            "Ȳ": "ȳ",
            "Ⱥ": "ⱥ",
            "Ȼ": "ȼ",
            "Ƚ": "ƚ",
            "Ⱦ": "ⱦ",
            "Ɂ": "ɂ",
            "Ƀ": "ƀ",
            "Ʉ": "ʉ",
            "Ʌ": "ʌ",
            "Ɇ": "ɇ",
            "Ɉ": "ɉ",
            "Ɋ": "ɋ",
            "Ɍ": "ɍ",
            "Ɏ": "ɏ",
            "ͅ": "ι",
            "Ͱ": "ͱ",
            "Ͳ": "ͳ",
            "Ͷ": "ͷ",
            "Ϳ": "ϳ",
            "Ά": "ά",
            "Έ": "έ",
            "Ή": "ή",
            "Ί": "ί",
            "Ό": "ό",
            "Ύ": "ύ",
            "Ώ": "ώ",
            "Α": "α",
            "Β": "β",
            "Γ": "γ",
            "Δ": "δ",
            "Ε": "ε",
            "Ζ": "ζ",
            "Η": "η",
            "Θ": "θ",
            "Ι": "ι",
            "Κ": "κ",
            "Λ": "λ",
            "Μ": "μ",
            "Ν": "ν",
            "Ξ": "ξ",
            "Ο": "ο",
            "Π": "π",
            "Ρ": "ρ",
            "Σ": "σ",
            "Τ": "τ",
            "Υ": "υ",
            "Φ": "φ",
            "Χ": "χ",
            "Ψ": "ψ",
            "Ω": "ω",
            "Ϊ": "ϊ",
            "Ϋ": "ϋ",
            "ς": "σ",
            "Ϗ": "ϗ",
            "ϐ": "β",
            "ϑ": "θ",
            "ϕ": "φ",
            "ϖ": "π",
            "Ϙ": "ϙ",
            "Ϛ": "ϛ",
            "Ϝ": "ϝ",
            "Ϟ": "ϟ",
            "Ϡ": "ϡ",
            "Ϣ": "ϣ",
            "Ϥ": "ϥ",
            "Ϧ": "ϧ",
            "Ϩ": "ϩ",
            "Ϫ": "ϫ",
            "Ϭ": "ϭ",
            "Ϯ": "ϯ",
            "ϰ": "κ",
            "ϱ": "ρ",
            "ϴ": "θ",
            "ϵ": "ε",
            "Ϸ": "ϸ",
            "Ϲ": "ϲ",
            "Ϻ": "ϻ",
            "Ͻ": "ͻ",
            "Ͼ": "ͼ",
            "Ͽ": "ͽ",
            "Ѐ": "ѐ",
            "Ё": "ё",
            "Ђ": "ђ",
            "Ѓ": "ѓ",
            "Є": "є",
            "Ѕ": "ѕ",
            "І": "і",
            "Ї": "ї",
            "Ј": "ј",
            "Љ": "љ",
            "Њ": "њ",
            "Ћ": "ћ",
            "Ќ": "ќ",
            "Ѝ": "ѝ",
            "Ў": "ў",
            "Џ": "џ",
            "А": "а",
            "Б": "б",
            "В": "в",
            "Г": "г",
            "Д": "д",
            "Е": "е",
            "Ж": "ж",
            "З": "з",
            "И": "и",
            "Й": "й",
            "К": "к",
            "Л": "л",
            "М": "м",
            "Н": "н",
            "О": "о",
            "П": "п",
            "Р": "р",
            "С": "с",
            "Т": "т",
            "У": "у",
            "Ф": "ф",
            "Х": "х",
            "Ц": "ц",
            "Ч": "ч",
            "Ш": "ш",
            "Щ": "щ",
            "Ъ": "ъ",
            "Ы": "ы",
            "Ь": "ь",
            "Э": "э",
            "Ю": "ю",
            "Я": "я",
            "Ѡ": "ѡ",
            "Ѣ": "ѣ",
            "Ѥ": "ѥ",
            "Ѧ": "ѧ",
            "Ѩ": "ѩ",
            "Ѫ": "ѫ",
            "Ѭ": "ѭ",
            "Ѯ": "ѯ",
            "Ѱ": "ѱ",
            "Ѳ": "ѳ",
            "Ѵ": "ѵ",
            "Ѷ": "ѷ",
            "Ѹ": "ѹ",
            "Ѻ": "ѻ",
            "Ѽ": "ѽ",
            "Ѿ": "ѿ",
            "Ҁ": "ҁ",
            "Ҋ": "ҋ",
            "Ҍ": "ҍ",
            "Ҏ": "ҏ",
            "Ґ": "ґ",
            "Ғ": "ғ",
            "Ҕ": "ҕ",
            "Җ": "җ",
            "Ҙ": "ҙ",
            "Қ": "қ",
            "Ҝ": "ҝ",
            "Ҟ": "ҟ",
            "Ҡ": "ҡ",
            "Ң": "ң",
            "Ҥ": "ҥ",
            "Ҧ": "ҧ",
            "Ҩ": "ҩ",
            "Ҫ": "ҫ",
            "Ҭ": "ҭ",
            "Ү": "ү",
            "Ұ": "ұ",
            "Ҳ": "ҳ",
            "Ҵ": "ҵ",
            "Ҷ": "ҷ",
            "Ҹ": "ҹ",
            "Һ": "һ",
            "Ҽ": "ҽ",
            "Ҿ": "ҿ",
            "Ӏ": "ӏ",
            "Ӂ": "ӂ",
            "Ӄ": "ӄ",
            "Ӆ": "ӆ",
            "Ӈ": "ӈ",
            "Ӊ": "ӊ",
            "Ӌ": "ӌ",
            "Ӎ": "ӎ",
            "Ӑ": "ӑ",
            "Ӓ": "ӓ",
            "Ӕ": "ӕ",
            "Ӗ": "ӗ",
            "Ә": "ә",
            "Ӛ": "ӛ",
            "Ӝ": "ӝ",
            "Ӟ": "ӟ",
            "Ӡ": "ӡ",
            "Ӣ": "ӣ",
            "Ӥ": "ӥ",
            "Ӧ": "ӧ",
            "Ө": "ө",
            "Ӫ": "ӫ",
            "Ӭ": "ӭ",
            "Ӯ": "ӯ",
            "Ӱ": "ӱ",
            "Ӳ": "ӳ",
            "Ӵ": "ӵ",
            "Ӷ": "ӷ",
            "Ӹ": "ӹ",
            "Ӻ": "ӻ",
            "Ӽ": "ӽ",
            "Ӿ": "ӿ",
            "Ԁ": "ԁ",
            "Ԃ": "ԃ",
            "Ԅ": "ԅ",
            "Ԇ": "ԇ",
            "Ԉ": "ԉ",
            "Ԋ": "ԋ",
            "Ԍ": "ԍ",
            "Ԏ": "ԏ",
            "Ԑ": "ԑ",
            "Ԓ": "ԓ",
            "Ԕ": "ԕ",
            "Ԗ": "ԗ",
            "Ԙ": "ԙ",
            "Ԛ": "ԛ",
            "Ԝ": "ԝ",
            "Ԟ": "ԟ",
            "Ԡ": "ԡ",
            "Ԣ": "ԣ",
            "Ԥ": "ԥ",
            "Ԧ": "ԧ",
            "Ԩ": "ԩ",
            "Ԫ": "ԫ",
            "Ԭ": "ԭ",
            "Ԯ": "ԯ",
            "Ա": "ա",
            "Բ": "բ",
            "Գ": "գ",
            "Դ": "դ",
            "Ե": "ե",
            "Զ": "զ",
            "Է": "է",
            "Ը": "ը",
            "Թ": "թ",
            "Ժ": "ժ",
            "Ի": "ի",
            "Լ": "լ",
            "Խ": "խ",
            "Ծ": "ծ",
            "Կ": "կ",
            "Հ": "հ",
            "Ձ": "ձ",
            "Ղ": "ղ",
            "Ճ": "ճ",
            "Մ": "մ",
            "Յ": "յ",
            "Ն": "ն",
            "Շ": "շ",
            "Ո": "ո",
            "Չ": "չ",
            "Պ": "պ",
            "Ջ": "ջ",
            "Ռ": "ռ",
            "Ս": "ս",
            "Վ": "վ",
            "Տ": "տ",
            "Ր": "ր",
            "Ց": "ց",
            "Ւ": "ւ",
            "Փ": "փ",
            "Ք": "ք",
            "Օ": "օ",
            "Ֆ": "ֆ",
            "Ⴀ": "ⴀ",
            "Ⴁ": "ⴁ",
            "Ⴂ": "ⴂ",
            "Ⴃ": "ⴃ",
            "Ⴄ": "ⴄ",
            "Ⴅ": "ⴅ",
            "Ⴆ": "ⴆ",
            "Ⴇ": "ⴇ",
            "Ⴈ": "ⴈ",
            "Ⴉ": "ⴉ",
            "Ⴊ": "ⴊ",
            "Ⴋ": "ⴋ",
            "Ⴌ": "ⴌ",
            "Ⴍ": "ⴍ",
            "Ⴎ": "ⴎ",
            "Ⴏ": "ⴏ",
            "Ⴐ": "ⴐ",
            "Ⴑ": "ⴑ",
            "Ⴒ": "ⴒ",
            "Ⴓ": "ⴓ",
            "Ⴔ": "ⴔ",
            "Ⴕ": "ⴕ",
            "Ⴖ": "ⴖ",
            "Ⴗ": "ⴗ",
            "Ⴘ": "ⴘ",
            "Ⴙ": "ⴙ",
            "Ⴚ": "ⴚ",
            "Ⴛ": "ⴛ",
            "Ⴜ": "ⴜ",
            "Ⴝ": "ⴝ",
            "Ⴞ": "ⴞ",
            "Ⴟ": "ⴟ",
            "Ⴠ": "ⴠ",
            "Ⴡ": "ⴡ",
            "Ⴢ": "ⴢ",
            "Ⴣ": "ⴣ",
            "Ⴤ": "ⴤ",
            "Ⴥ": "ⴥ",
            "Ⴧ": "ⴧ",
            "Ⴭ": "ⴭ",
            "Ḁ": "ḁ",
            "Ḃ": "ḃ",
            "Ḅ": "ḅ",
            "Ḇ": "ḇ",
            "Ḉ": "ḉ",
            "Ḋ": "ḋ",
            "Ḍ": "ḍ",
            "Ḏ": "ḏ",
            "Ḑ": "ḑ",
            "Ḓ": "ḓ",
            "Ḕ": "ḕ",
            "Ḗ": "ḗ",
            "Ḙ": "ḙ",
            "Ḛ": "ḛ",
            "Ḝ": "ḝ",
            "Ḟ": "ḟ",
            "Ḡ": "ḡ",
            "Ḣ": "ḣ",
            "Ḥ": "ḥ",
            "Ḧ": "ḧ",
            "Ḩ": "ḩ",
            "Ḫ": "ḫ",
            "Ḭ": "ḭ",
            "Ḯ": "ḯ",
            "Ḱ": "ḱ",
            "Ḳ": "ḳ",
            "Ḵ": "ḵ",
            "Ḷ": "ḷ",
            "Ḹ": "ḹ",
            "Ḻ": "ḻ",
            "Ḽ": "ḽ",
            "Ḿ": "ḿ",
            "Ṁ": "ṁ",
            "Ṃ": "ṃ",
            "Ṅ": "ṅ",
            "Ṇ": "ṇ",
            "Ṉ": "ṉ",
            "Ṋ": "ṋ",
            "Ṍ": "ṍ",
            "Ṏ": "ṏ",
            "Ṑ": "ṑ",
            "Ṓ": "ṓ",
            "Ṕ": "ṕ",
            "Ṗ": "ṗ",
            "Ṙ": "ṙ",
            "Ṛ": "ṛ",
            "Ṝ": "ṝ",
            "Ṟ": "ṟ",
            "Ṡ": "ṡ",
            "Ṣ": "ṣ",
            "Ṥ": "ṥ",
            "Ṧ": "ṧ",
            "Ṩ": "ṩ",
            "Ṫ": "ṫ",
            "Ṭ": "ṭ",
            "Ṯ": "ṯ",
            "Ṱ": "ṱ",
            "Ṳ": "ṳ",
            "Ṵ": "ṵ",
            "Ṷ": "ṷ",
            "Ṹ": "ṹ",
            "Ṻ": "ṻ",
            "Ṽ": "ṽ",
            "Ṿ": "ṿ",
            "Ẁ": "ẁ",
            "Ẃ": "ẃ",
            "Ẅ": "ẅ",
            "Ẇ": "ẇ",
            "Ẉ": "ẉ",
            "Ẋ": "ẋ",
            "Ẍ": "ẍ",
            "Ẏ": "ẏ",
            "Ẑ": "ẑ",
            "Ẓ": "ẓ",
            "Ẕ": "ẕ",
            "ẛ": "ṡ",
            "Ạ": "ạ",
            "Ả": "ả",
            "Ấ": "ấ",
            "Ầ": "ầ",
            "Ẩ": "ẩ",
            "Ẫ": "ẫ",
            "Ậ": "ậ",
            "Ắ": "ắ",
            "Ằ": "ằ",
            "Ẳ": "ẳ",
            "Ẵ": "ẵ",
            "Ặ": "ặ",
            "Ẹ": "ẹ",
            "Ẻ": "ẻ",
            "Ẽ": "ẽ",
            "Ế": "ế",
            "Ề": "ề",
            "Ể": "ể",
            "Ễ": "ễ",
            "Ệ": "ệ",
            "Ỉ": "ỉ",
            "Ị": "ị",
            "Ọ": "ọ",
            "Ỏ": "ỏ",
            "Ố": "ố",
            "Ồ": "ồ",
            "Ổ": "ổ",
            "Ỗ": "ỗ",
            "Ộ": "ộ",
            "Ớ": "ớ",
            "Ờ": "ờ",
            "Ở": "ở",
            "Ỡ": "ỡ",
            "Ợ": "ợ",
            "Ụ": "ụ",
            "Ủ": "ủ",
            "Ứ": "ứ",
            "Ừ": "ừ",
            "Ử": "ử",
            "Ữ": "ữ",
            "Ự": "ự",
            "Ỳ": "ỳ",
            "Ỵ": "ỵ",
            "Ỷ": "ỷ",
            "Ỹ": "ỹ",
            "Ỻ": "ỻ",
            "Ỽ": "ỽ",
            "Ỿ": "ỿ",
            "Ἀ": "ἀ",
            "Ἁ": "ἁ",
            "Ἂ": "ἂ",
            "Ἃ": "ἃ",
            "Ἄ": "ἄ",
            "Ἅ": "ἅ",
            "Ἆ": "ἆ",
            "Ἇ": "ἇ",
            "Ἐ": "ἐ",
            "Ἑ": "ἑ",
            "Ἒ": "ἒ",
            "Ἓ": "ἓ",
            "Ἔ": "ἔ",
            "Ἕ": "ἕ",
            "Ἠ": "ἠ",
            "Ἡ": "ἡ",
            "Ἢ": "ἢ",
            "Ἣ": "ἣ",
            "Ἤ": "ἤ",
            "Ἥ": "ἥ",
            "Ἦ": "ἦ",
            "Ἧ": "ἧ",
            "Ἰ": "ἰ",
            "Ἱ": "ἱ",
            "Ἲ": "ἲ",
            "Ἳ": "ἳ",
            "Ἴ": "ἴ",
            "Ἵ": "ἵ",
            "Ἶ": "ἶ",
            "Ἷ": "ἷ",
            "Ὀ": "ὀ",
            "Ὁ": "ὁ",
            "Ὂ": "ὂ",
            "Ὃ": "ὃ",
            "Ὄ": "ὄ",
            "Ὅ": "ὅ",
            "Ὑ": "ὑ",
            "Ὓ": "ὓ",
            "Ὕ": "ὕ",
            "Ὗ": "ὗ",
            "Ὠ": "ὠ",
            "Ὡ": "ὡ",
            "Ὢ": "ὢ",
            "Ὣ": "ὣ",
            "Ὤ": "ὤ",
            "Ὥ": "ὥ",
            "Ὦ": "ὦ",
            "Ὧ": "ὧ",
            "Ᾰ": "ᾰ",
            "Ᾱ": "ᾱ",
            "Ὰ": "ὰ",
            "Ά": "ά",
            "ι": "ι",
            "Ὲ": "ὲ",
            "Έ": "έ",
            "Ὴ": "ὴ",
            "Ή": "ή",
            "Ῐ": "ῐ",
            "Ῑ": "ῑ",
            "Ὶ": "ὶ",
            "Ί": "ί",
            "Ῠ": "ῠ",
            "Ῡ": "ῡ",
            "Ὺ": "ὺ",
            "Ύ": "ύ",
            "Ῥ": "ῥ",
            "Ὸ": "ὸ",
            "Ό": "ό",
            "Ὼ": "ὼ",
            "Ώ": "ώ",
            "Ω": "ω",
            "K": "k",
            "Å": "å",
            "Ⅎ": "ⅎ",
            "Ⅰ": "ⅰ",
            "Ⅱ": "ⅱ",
            "Ⅲ": "ⅲ",
            "Ⅳ": "ⅳ",
            "Ⅴ": "ⅴ",
            "Ⅵ": "ⅵ",
            "Ⅶ": "ⅶ",
            "Ⅷ": "ⅷ",
            "Ⅸ": "ⅸ",
            "Ⅹ": "ⅹ",
            "Ⅺ": "ⅺ",
            "Ⅻ": "ⅻ",
            "Ⅼ": "ⅼ",
            "Ⅽ": "ⅽ",
            "Ⅾ": "ⅾ",
            "Ⅿ": "ⅿ",
            "Ↄ": "ↄ",
            "Ⓐ": "ⓐ",
            "Ⓑ": "ⓑ",
            "Ⓒ": "ⓒ",
            "Ⓓ": "ⓓ",
            "Ⓔ": "ⓔ",
            "Ⓕ": "ⓕ",
            "Ⓖ": "ⓖ",
            "Ⓗ": "ⓗ",
            "Ⓘ": "ⓘ",
            "Ⓙ": "ⓙ",
            "Ⓚ": "ⓚ",
            "Ⓛ": "ⓛ",
            "Ⓜ": "ⓜ",
            "Ⓝ": "ⓝ",
            "Ⓞ": "ⓞ",
            "Ⓟ": "ⓟ",
            "Ⓠ": "ⓠ",
            "Ⓡ": "ⓡ",
            "Ⓢ": "ⓢ",
            "Ⓣ": "ⓣ",
            "Ⓤ": "ⓤ",
            "Ⓥ": "ⓥ",
            "Ⓦ": "ⓦ",
            "Ⓧ": "ⓧ",
            "Ⓨ": "ⓨ",
            "Ⓩ": "ⓩ",
            "Ⰰ": "ⰰ",
            "Ⰱ": "ⰱ",
            "Ⰲ": "ⰲ",
            "Ⰳ": "ⰳ",
            "Ⰴ": "ⰴ",
            "Ⰵ": "ⰵ",
            "Ⰶ": "ⰶ",
            "Ⰷ": "ⰷ",
            "Ⰸ": "ⰸ",
            "Ⰹ": "ⰹ",
            "Ⰺ": "ⰺ",
            "Ⰻ": "ⰻ",
            "Ⰼ": "ⰼ",
            "Ⰽ": "ⰽ",
            "Ⰾ": "ⰾ",
            "Ⰿ": "ⰿ",
            "Ⱀ": "ⱀ",
            "Ⱁ": "ⱁ",
            "Ⱂ": "ⱂ",
            "Ⱃ": "ⱃ",
            "Ⱄ": "ⱄ",
            "Ⱅ": "ⱅ",
            "Ⱆ": "ⱆ",
            "Ⱇ": "ⱇ",
            "Ⱈ": "ⱈ",
            "Ⱉ": "ⱉ",
            "Ⱊ": "ⱊ",
            "Ⱋ": "ⱋ",
            "Ⱌ": "ⱌ",
            "Ⱍ": "ⱍ",
            "Ⱎ": "ⱎ",
            "Ⱏ": "ⱏ",
            "Ⱐ": "ⱐ",
            "Ⱑ": "ⱑ",
            "Ⱒ": "ⱒ",
            "Ⱓ": "ⱓ",
            "Ⱔ": "ⱔ",
            "Ⱕ": "ⱕ",
            "Ⱖ": "ⱖ",
            "Ⱗ": "ⱗ",
            "Ⱘ": "ⱘ",
            "Ⱙ": "ⱙ",
            "Ⱚ": "ⱚ",
            "Ⱛ": "ⱛ",
            "Ⱜ": "ⱜ",
            "Ⱝ": "ⱝ",
            "Ⱞ": "ⱞ",
            "Ⱡ": "ⱡ",
            "Ɫ": "ɫ",
            "Ᵽ": "ᵽ",
            "Ɽ": "ɽ",
            "Ⱨ": "ⱨ",
            "Ⱪ": "ⱪ",
            "Ⱬ": "ⱬ",
            "Ɑ": "ɑ",
            "Ɱ": "ɱ",
            "Ɐ": "ɐ",
            "Ɒ": "ɒ",
            "Ⱳ": "ⱳ",
            "Ⱶ": "ⱶ",
            "Ȿ": "ȿ",
            "Ɀ": "ɀ",
            "Ⲁ": "ⲁ",
            "Ⲃ": "ⲃ",
            "Ⲅ": "ⲅ",
            "Ⲇ": "ⲇ",
            "Ⲉ": "ⲉ",
            "Ⲋ": "ⲋ",
            "Ⲍ": "ⲍ",
            "Ⲏ": "ⲏ",
            "Ⲑ": "ⲑ",
            "Ⲓ": "ⲓ",
            "Ⲕ": "ⲕ",
            "Ⲗ": "ⲗ",
            "Ⲙ": "ⲙ",
            "Ⲛ": "ⲛ",
            "Ⲝ": "ⲝ",
            "Ⲟ": "ⲟ",
            "Ⲡ": "ⲡ",
            "Ⲣ": "ⲣ",
            "Ⲥ": "ⲥ",
            "Ⲧ": "ⲧ",
            "Ⲩ": "ⲩ",
            "Ⲫ": "ⲫ",
            "Ⲭ": "ⲭ",
            "Ⲯ": "ⲯ",
            "Ⲱ": "ⲱ",
            "Ⲳ": "ⲳ",
            "Ⲵ": "ⲵ",
            "Ⲷ": "ⲷ",
            "Ⲹ": "ⲹ",
            "Ⲻ": "ⲻ",
            "Ⲽ": "ⲽ",
            "Ⲿ": "ⲿ",
            "Ⳁ": "ⳁ",
            "Ⳃ": "ⳃ",
            "Ⳅ": "ⳅ",
            "Ⳇ": "ⳇ",
            "Ⳉ": "ⳉ",
            "Ⳋ": "ⳋ",
            "Ⳍ": "ⳍ",
            "Ⳏ": "ⳏ",
            "Ⳑ": "ⳑ",
            "Ⳓ": "ⳓ",
            "Ⳕ": "ⳕ",
            "Ⳗ": "ⳗ",
            "Ⳙ": "ⳙ",
            "Ⳛ": "ⳛ",
            "Ⳝ": "ⳝ",
            "Ⳟ": "ⳟ",
            "Ⳡ": "ⳡ",
            "Ⳣ": "ⳣ",
            "Ⳬ": "ⳬ",
            "Ⳮ": "ⳮ",
            "Ⳳ": "ⳳ",
            "Ꙁ": "ꙁ",
            "Ꙃ": "ꙃ",
            "Ꙅ": "ꙅ",
            "Ꙇ": "ꙇ",
            "Ꙉ": "ꙉ",
            "Ꙋ": "ꙋ",
            "Ꙍ": "ꙍ",
            "Ꙏ": "ꙏ",
            "Ꙑ": "ꙑ",
            "Ꙓ": "ꙓ",
            "Ꙕ": "ꙕ",
            "Ꙗ": "ꙗ",
            "Ꙙ": "ꙙ",
            "Ꙛ": "ꙛ",
            "Ꙝ": "ꙝ",
            "Ꙟ": "ꙟ",
            "Ꙡ": "ꙡ",
            "Ꙣ": "ꙣ",
            "Ꙥ": "ꙥ",
            "Ꙧ": "ꙧ",
            "Ꙩ": "ꙩ",
            "Ꙫ": "ꙫ",
            "Ꙭ": "ꙭ",
            "Ꚁ": "ꚁ",
            "Ꚃ": "ꚃ",
            "Ꚅ": "ꚅ",
            "Ꚇ": "ꚇ",
            "Ꚉ": "ꚉ",
            "Ꚋ": "ꚋ",
            "Ꚍ": "ꚍ",
            "Ꚏ": "ꚏ",
            "Ꚑ": "ꚑ",
            "Ꚓ": "ꚓ",
            "Ꚕ": "ꚕ",
            "Ꚗ": "ꚗ",
            "Ꚙ": "ꚙ",
            "Ꚛ": "ꚛ",
            "Ꜣ": "ꜣ",
            "Ꜥ": "ꜥ",
            "Ꜧ": "ꜧ",
            "Ꜩ": "ꜩ",
            "Ꜫ": "ꜫ",
            "Ꜭ": "ꜭ",
            "Ꜯ": "ꜯ",
            "Ꜳ": "ꜳ",
            "Ꜵ": "ꜵ",
            "Ꜷ": "ꜷ",
            "Ꜹ": "ꜹ",
            "Ꜻ": "ꜻ",
            "Ꜽ": "ꜽ",
            "Ꜿ": "ꜿ",
            "Ꝁ": "ꝁ",
            "Ꝃ": "ꝃ",
            "Ꝅ": "ꝅ",
            "Ꝇ": "ꝇ",
            "Ꝉ": "ꝉ",
            "Ꝋ": "ꝋ",
            "Ꝍ": "ꝍ",
            "Ꝏ": "ꝏ",
            "Ꝑ": "ꝑ",
            "Ꝓ": "ꝓ",
            "Ꝕ": "ꝕ",
            "Ꝗ": "ꝗ",
            "Ꝙ": "ꝙ",
            "Ꝛ": "ꝛ",
            "Ꝝ": "ꝝ",
            "Ꝟ": "ꝟ",
            "Ꝡ": "ꝡ",
            "Ꝣ": "ꝣ",
            "Ꝥ": "ꝥ",
            "Ꝧ": "ꝧ",
            "Ꝩ": "ꝩ",
            "Ꝫ": "ꝫ",
            "Ꝭ": "ꝭ",
            "Ꝯ": "ꝯ",
            "Ꝺ": "ꝺ",
            "Ꝼ": "ꝼ",
            "Ᵹ": "ᵹ",
            "Ꝿ": "ꝿ",
            "Ꞁ": "ꞁ",
            "Ꞃ": "ꞃ",
            "Ꞅ": "ꞅ",
            "Ꞇ": "ꞇ",
            "Ꞌ": "ꞌ",
            "Ɥ": "ɥ",
            "Ꞑ": "ꞑ",
            "Ꞓ": "ꞓ",
            "Ꞗ": "ꞗ",
            "Ꞙ": "ꞙ",
            "Ꞛ": "ꞛ",
            "Ꞝ": "ꞝ",
            "Ꞟ": "ꞟ",
            "Ꞡ": "ꞡ",
            "Ꞣ": "ꞣ",
            "Ꞥ": "ꞥ",
            "Ꞧ": "ꞧ",
            "Ꞩ": "ꞩ",
            "Ɦ": "ɦ",
            "Ɜ": "ɜ",
            "Ɡ": "ɡ",
            "Ɬ": "ɬ",
            "Ʞ": "ʞ",
            "Ʇ": "ʇ",
            "Ａ": "ａ",
            "Ｂ": "ｂ",
            "Ｃ": "ｃ",
            "Ｄ": "ｄ",
            "Ｅ": "ｅ",
            "Ｆ": "ｆ",
            "Ｇ": "ｇ",
            "Ｈ": "ｈ",
            "Ｉ": "ｉ",
            "Ｊ": "ｊ",
            "Ｋ": "ｋ",
            "Ｌ": "ｌ",
            "Ｍ": "ｍ",
            "Ｎ": "ｎ",
            "Ｏ": "ｏ",
            "Ｐ": "ｐ",
            "Ｑ": "ｑ",
            "Ｒ": "ｒ",
            "Ｓ": "ｓ",
            "Ｔ": "ｔ",
            "Ｕ": "ｕ",
            "Ｖ": "ｖ",
            "Ｗ": "ｗ",
            "Ｘ": "ｘ",
            "Ｙ": "ｙ",
            "Ｚ": "ｚ",
            "𐐀": "𐐨",
            "𐐁": "𐐩",
            "𐐂": "𐐪",
            "𐐃": "𐐫",
            "𐐄": "𐐬",
            "𐐅": "𐐭",
            "𐐆": "𐐮",
            "𐐇": "𐐯",
            "𐐈": "𐐰",
            "𐐉": "𐐱",
            "𐐊": "𐐲",
            "𐐋": "𐐳",
            "𐐌": "𐐴",
            "𐐍": "𐐵",
            "𐐎": "𐐶",
            "𐐏": "𐐷",
            "𐐐": "𐐸",
            "𐐑": "𐐹",
            "𐐒": "𐐺",
            "𐐓": "𐐻",
            "𐐔": "𐐼",
            "𐐕": "𐐽",
            "𐐖": "𐐾",
            "𐐗": "𐐿",
            "𐐘": "𐑀",
            "𐐙": "𐑁",
            "𐐚": "𐑂",
            "𐐛": "𐑃",
            "𐐜": "𐑄",
            "𐐝": "𐑅",
            "𐐞": "𐑆",
            "𐐟": "𐑇",
            "𐐠": "𐑈",
            "𐐡": "𐑉",
            "𐐢": "𐑊",
            "𐐣": "𐑋",
            "𐐤": "𐑌",
            "𐐥": "𐑍",
            "𐐦": "𐑎",
            "𐐧": "𐑏",
            "𑢠": "𑣀",
            "𑢡": "𑣁",
            "𑢢": "𑣂",
            "𑢣": "𑣃",
            "𑢤": "𑣄",
            "𑢥": "𑣅",
            "𑢦": "𑣆",
            "𑢧": "𑣇",
            "𑢨": "𑣈",
            "𑢩": "𑣉",
            "𑢪": "𑣊",
            "𑢫": "𑣋",
            "𑢬": "𑣌",
            "𑢭": "𑣍",
            "𑢮": "𑣎",
            "𑢯": "𑣏",
            "𑢰": "𑣐",
            "𑢱": "𑣑",
            "𑢲": "𑣒",
            "𑢳": "𑣓",
            "𑢴": "𑣔",
            "𑢵": "𑣕",
            "𑢶": "𑣖",
            "𑢷": "𑣗",
            "𑢸": "𑣘",
            "𑢹": "𑣙",
            "𑢺": "𑣚",
            "𑢻": "𑣛",
            "𑢼": "𑣜",
            "𑢽": "𑣝",
            "𑢾": "𑣞",
            "𑢿": "𑣟",
            "ß": "ss",
            "İ": "i̇",
            "ŉ": "ʼn",
            "ǰ": "ǰ",
            "ΐ": "ΐ",
            "ΰ": "ΰ",
            "և": "եւ",
            "ẖ": "ẖ",
            "ẗ": "ẗ",
            "ẘ": "ẘ",
            "ẙ": "ẙ",
            "ẚ": "aʾ",
            "ẞ": "ss",
            "ὐ": "ὐ",
            "ὒ": "ὒ",
            "ὔ": "ὔ",
            "ὖ": "ὖ",
            "ᾀ": "ἀι",
            "ᾁ": "ἁι",
            "ᾂ": "ἂι",
            "ᾃ": "ἃι",
            "ᾄ": "ἄι",
            "ᾅ": "ἅι",
            "ᾆ": "ἆι",
            "ᾇ": "ἇι",
            "ᾈ": "ἀι",
            "ᾉ": "ἁι",
            "ᾊ": "ἂι",
            "ᾋ": "ἃι",
            "ᾌ": "ἄι",
            "ᾍ": "ἅι",
            "ᾎ": "ἆι",
            "ᾏ": "ἇι",
            "ᾐ": "ἠι",
            "ᾑ": "ἡι",
            "ᾒ": "ἢι",
            "ᾓ": "ἣι",
            "ᾔ": "ἤι",
            "ᾕ": "ἥι",
            "ᾖ": "ἦι",
            "ᾗ": "ἧι",
            "ᾘ": "ἠι",
            "ᾙ": "ἡι",
            "ᾚ": "ἢι",
            "ᾛ": "ἣι",
            "ᾜ": "ἤι",
            "ᾝ": "ἥι",
            "ᾞ": "ἦι",
            "ᾟ": "ἧι",
            "ᾠ": "ὠι",
            "ᾡ": "ὡι",
            "ᾢ": "ὢι",
            "ᾣ": "ὣι",
            "ᾤ": "ὤι",
            "ᾥ": "ὥι",
            "ᾦ": "ὦι",
            "ᾧ": "ὧι",
            "ᾨ": "ὠι",
            "ᾩ": "ὡι",
            "ᾪ": "ὢι",
            "ᾫ": "ὣι",
            "ᾬ": "ὤι",
            "ᾭ": "ὥι",
            "ᾮ": "ὦι",
            "ᾯ": "ὧι",
            "ᾲ": "ὰι",
            "ᾳ": "αι",
            "ᾴ": "άι",
            "ᾶ": "ᾶ",
            "ᾷ": "ᾶι",
            "ᾼ": "αι",
            "ῂ": "ὴι",
            "ῃ": "ηι",
            "ῄ": "ήι",
            "ῆ": "ῆ",
            "ῇ": "ῆι",
            "ῌ": "ηι",
            "ῒ": "ῒ",
            "ΐ": "ΐ",
            "ῖ": "ῖ",
            "ῗ": "ῗ",
            "ῢ": "ῢ",
            "ΰ": "ΰ",
            "ῤ": "ῤ",
            "ῦ": "ῦ",
            "ῧ": "ῧ",
            "ῲ": "ὼι",
            "ῳ": "ωι",
            "ῴ": "ώι",
            "ῶ": "ῶ",
            "ῷ": "ῶι",
            "ῼ": "ωι",
            "ﬀ": "ff",
            "ﬁ": "fi",
            "ﬂ": "fl",
            "ﬃ": "ffi",
            "ﬄ": "ffl",
            "ﬅ": "st",
            "ﬆ": "st",
            "ﬓ": "մն",
            "ﬔ": "մե",
            "ﬕ": "մի",
            "ﬖ": "վն",
            "ﬗ": "մխ"
          };
      e.exports = function(e) {
        return e.slice(1, e.length - 1).trim().replace(r, function(e) {
          return n[e] || " ";
        });
      };
    }, function(e, t, r) {
      "use strict";
      function n(e) {
        return {
          softbreak: "\n",
          escape: i,
          options: e || {},
          render: u
        };
      }
      var i = r(1).escapeXml,
          a = function(e, t, r) {
            var n = "<" + e;
            if (t && t.length > 0)
              for (var i,
                  a = 0; void 0 !== (i = t[a]); )
                n += " " + i[0] + '="' + i[1] + '"', a++;
            return r && (n += " /"), n += ">";
          },
          s = /\<[^>]*\>/,
          o = function(e) {
            return e.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
          },
          u = function(e) {
            var t,
                r,
                n,
                i,
                u,
                l,
                c,
                p,
                h,
                d = e.walker(),
                f = "",
                m = "\n",
                g = 0,
                b = 0,
                v = "  ",
                C = function(e) {
                  f += g > 0 ? e.replace(s, "") : e, m = e;
                },
                E = this.escape,
                k = function() {
                  if ("\n" !== m) {
                    f += "\n", m = "\n";
                    for (var e = b; e > 0; e--)
                      f += v;
                  }
                },
                A = this.options;
            for (A.time && console.time("rendering"), f += '<?xml version="1.0" encoding="UTF-8"?>\n', f += '<!DOCTYPE CommonMark SYSTEM "CommonMark.dtd">\n'; n = d.next(); )
              if (u = n.entering, i = n.node, h = i.type, c = i.isContainer, p = "HorizontalRule" === h || "Hardbreak" === h || "Softbreak" === h, l = "Html" === h || "HtmlInline" === h, r = o(h), u) {
                switch (t = [], h) {
                  case "List":
                    null !== i.listType && t.push(["type", i.listType.toLowerCase()]), null !== i.listStart && t.push(["start", String(i.listStart)]), null !== i.listTight && t.push(["tight", i.listTight ? "true" : "false"]);
                    var w = i.listDelimiter;
                    if (null !== w) {
                      var y = "";
                      y = "." === w ? "period" : "paren", t.push(["delimiter", y]);
                    }
                    break;
                  case "CodeBlock":
                    i.info && t.push(["info", i.info]);
                    break;
                  case "Header":
                    t.push(["level", String(i.level)]);
                    break;
                  case "Link":
                  case "Image":
                    t.push(["destination", i.destination]), t.push(["title", i.title]);
                }
                if (A.sourcepos) {
                  var x = i.sourcepos;
                  x && t.push(["sourcepos", String(x[0][0]) + ":" + String(x[0][1]) + "-" + String(x[1][0]) + ":" + String(x[1][1])]);
                }
                if (k(), C(a(r, t, p)), c)
                  b += 1;
                else if (!c && !p) {
                  var _ = i.literal;
                  _ && C(l ? _ : E(_)), C(a("/" + r));
                }
              } else
                b -= 1, k(), C(a("/" + r));
            return A.time && console.timeEnd("rendering"), f += "\n";
          };
      e.exports = n;
    }, function(e, t, r) {
      function n(e) {
        var t = Object.keys(e).join("|"),
            r = a(e);
        t += "|#[xX][\\da-fA-F]+|#\\d+";
        var n = new RegExp("&(?:" + t + ");", "g");
        return function(e) {
          return String(e).replace(n, r);
        };
      }
      function i(e, t) {
        return t > e ? 1 : -1;
      }
      function a(e) {
        return function(t) {
          return "#" === t.charAt(1) ? l("X" === t.charAt(2) || "x" === t.charAt(2) ? parseInt(t.substr(3), 16) : parseInt(t.substr(2), 10)) : e[t.slice(1, -1)];
        };
      }
      var s = r(5),
          o = r(23),
          u = r(6),
          l = r(20),
          c = n(u),
          p = n(s),
          h = function() {
            function e(e) {
              return ";" !== e.substr(-1) && (e += ";"), c(e);
            }
            for (var t = Object.keys(o).sort(i),
                r = Object.keys(s).sort(i),
                n = 0,
                u = 0; n < r.length; n++)
              t[u] === r[n] ? (r[n] += ";?", u++) : r[n] += ";";
            var l = new RegExp("&(?:" + r.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
                c = a(s);
            return function(t) {
              return String(t).replace(l, e);
            };
          }();
      e.exports = {
        XML: c,
        HTML: h,
        HTMLStrict: p
      };
    }, function(e, t, r) {
      function n(e) {
        if (e >= 55296 && 57343 >= e || e > 1114111)
          return "�";
        e in i && (e = i[e]);
        var t = "";
        return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += String.fromCharCode(e);
      }
      var i = r(22);
      e.exports = n;
    }, function(e, t, r) {
      function n(e) {
        return Object.keys(e).sort().reduce(function(t, r) {
          return t[e[r]] = "&" + r + ";", t;
        }, {});
      }
      function i(e) {
        var t = [],
            r = [];
        return Object.keys(e).forEach(function(e) {
          1 === e.length ? t.push("\\" + e) : r.push(e);
        }), r.unshift("[" + t.join("") + "]"), new RegExp(r.join("|"), "g");
      }
      function a(e) {
        return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";";
      }
      function s(e) {
        var t = e.charCodeAt(0),
            r = e.charCodeAt(1),
            n = 1024 * (t - 55296) + r - 56320 + 65536;
        return "&#x" + n.toString(16).toUpperCase() + ";";
      }
      function o(e, t) {
        function r(t) {
          return e[t];
        }
        return function(e) {
          return e.replace(t, r).replace(f, s).replace(d, a);
        };
      }
      function u(e) {
        return e.replace(m, a).replace(f, s).replace(d, a);
      }
      var l = n(r(6)),
          c = i(l);
      t.XML = o(l, c);
      var p = n(r(5)),
          h = i(p);
      t.HTML = o(p, h);
      var d = /[^\0-\x7F]/g,
          f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
          m = i(l);
      t.escape = u;
    }, function(e, t) {
      e.exports = {
        0: 65533,
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376
      };
    }, function(e, t) {
      e.exports = {
        Aacute: "Á",
        aacute: "á",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        AElig: "Æ",
        aelig: "æ",
        Agrave: "À",
        agrave: "à",
        amp: "&",
        AMP: "&",
        Aring: "Å",
        aring: "å",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        brvbar: "¦",
        Ccedil: "Ç",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        COPY: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        Eacute: "É",
        eacute: "é",
        Ecirc: "Ê",
        ecirc: "ê",
        Egrave: "È",
        egrave: "è",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        GT: ">",
        Iacute: "Í",
        iacute: "í",
        Icirc: "Î",
        icirc: "î",
        iexcl: "¡",
        Igrave: "Ì",
        igrave: "ì",
        iquest: "¿",
        Iuml: "Ï",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        LT: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        Ntilde: "Ñ",
        ntilde: "ñ",
        Oacute: "Ó",
        oacute: "ó",
        Ocirc: "Ô",
        ocirc: "ô",
        Ograve: "Ò",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        Oslash: "Ø",
        oslash: "ø",
        Otilde: "Õ",
        otilde: "õ",
        Ouml: "Ö",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        QUOT: '"',
        raquo: "»",
        reg: "®",
        REG: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        THORN: "Þ",
        thorn: "þ",
        times: "×",
        Uacute: "Ú",
        uacute: "ú",
        Ucirc: "Û",
        ucirc: "û",
        Ugrave: "Ù",
        ugrave: "ù",
        uml: "¨",
        Uuml: "Ü",
        uuml: "ü",
        Yacute: "Ý",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ"
      };
    }, function(e, t) {
      "use strict";
      function r(e) {
        var t,
            r,
            n = i[e];
        if (n)
          return n;
        for (n = i[e] = [], t = 0; 128 > t; t++)
          r = String.fromCharCode(t), n.push(r);
        for (t = 0; t < e.length; t++)
          r = e.charCodeAt(t), n[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
        return n;
      }
      function n(e, t) {
        var i;
        return "string" != typeof t && (t = n.defaultChars), i = r(t), e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
          var t,
              r,
              n,
              a,
              s,
              o,
              u,
              l = "";
          for (t = 0, r = e.length; r > t; t += 3)
            n = parseInt(e.slice(t + 1, t + 3), 16), 128 > n ? l += i[n] : 192 === (224 & n) && r > t + 3 && (a = parseInt(e.slice(t + 4, t + 6), 16), 128 === (192 & a)) ? (u = n << 6 & 1984 | 63 & a, l += 128 > u ? "��" : String.fromCharCode(u), t += 3) : 224 === (240 & n) && r > t + 6 && (a = parseInt(e.slice(t + 4, t + 6), 16), s = parseInt(e.slice(t + 7, t + 9), 16), 128 === (192 & a) && 128 === (192 & s)) ? (u = n << 12 & 61440 | a << 6 & 4032 | 63 & s, l += 2048 > u || u >= 55296 && 57343 >= u ? "���" : String.fromCharCode(u), t += 6) : 240 === (248 & n) && r > t + 9 && (a = parseInt(e.slice(t + 4, t + 6), 16), s = parseInt(e.slice(t + 7, t + 9), 16), o = parseInt(e.slice(t + 10, t + 12), 16), 128 === (192 & a) && 128 === (192 & s) && 128 === (192 & o)) ? (u = n << 18 & 1835008 | a << 12 & 258048 | s << 6 & 4032 | 63 & o, 65536 > u || u > 1114111 ? l += "����" : (u -= 65536, l += String.fromCharCode(55296 + (u >> 10), 56320 + (1023 & u))), t += 9) : l += "�";
          return l;
        });
      }
      var i = {};
      n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", e.exports = n;
    }, function(e, t) {
      "use strict";
      function r(e) {
        var t,
            r,
            n = i[e];
        if (n)
          return n;
        for (n = i[e] = [], t = 0; 128 > t; t++)
          r = String.fromCharCode(t), /^[0-9a-z]$/i.test(r) ? n.push(r) : n.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
        for (t = 0; t < e.length; t++)
          n[e.charCodeAt(t)] = e[t];
        return n;
      }
      function n(e, t, i) {
        var a,
            s,
            o,
            u,
            l,
            c = "";
        for ("string" != typeof t && (i = t, t = n.defaultChars), "undefined" == typeof i && (i = !0), l = r(t), a = 0, s = e.length; s > a; a++)
          if (o = e.charCodeAt(a), i && 37 === o && s > a + 2 && /^[0-9a-f]{2}$/i.test(e.slice(a + 1, a + 3)))
            c += e.slice(a, a + 3), a += 2;
          else if (128 > o)
            c += l[o];
          else if (o >= 55296 && 57343 >= o) {
            if (o >= 55296 && 56319 >= o && s > a + 1 && (u = e.charCodeAt(a + 1), u >= 56320 && 57343 >= u)) {
              c += encodeURIComponent(e[a] + e[a + 1]), a++;
              continue;
            }
            c += "%EF%BF%BD";
          } else
            c += encodeURIComponent(e[a]);
        return c;
      }
      var i = {};
      n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", e.exports = n;
    }, function(e, t) {
      String.prototype.repeat || !function() {
        "use strict";
        var e = function() {
          try {
            var e = {},
                t = Object.defineProperty,
                r = t(e, e, e) && t;
          } catch (n) {}
          return r;
        }(),
            t = function(e) {
              if (null == this)
                throw TypeError();
              var t = String(this),
                  r = e ? Number(e) : 0;
              if (r != r && (r = 0), 0 > r || r == 1 / 0)
                throw RangeError();
              for (var n = ""; r; )
                r % 2 == 1 && (n += t), r > 1 && (t += t), r >>= 1;
              return n;
            };
        e ? e(String.prototype, "repeat", {
          value: t,
          configurable: !0,
          writable: !0
        }) : String.prototype.repeat = t;
      }();
    }, function(e, r) {
      e.exports = t;
    }]);
  });
})(require('process'));
