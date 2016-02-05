/* */ 
"format cjs";
(function(process) {
  !function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd)
      define([], e);
    else {
      var f;
      "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.markdownit = e();
    }
  }(function() {
    var define,
        module,
        exports;
    return (function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a)
              return a(o, !0);
            if (i)
              return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o] = {exports: {}};
          t[o][0].call(l.exports, function(e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      var i = typeof require == "function" && require;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    })({
      1: [function(require, module, exports) {
        'use strict';
        module.exports = {
          "Aacute": "\u00C1",
          "aacute": "\u00E1",
          "Abreve": "\u0102",
          "abreve": "\u0103",
          "ac": "\u223E",
          "acd": "\u223F",
          "acE": "\u223E\u0333",
          "Acirc": "\u00C2",
          "acirc": "\u00E2",
          "acute": "\u00B4",
          "Acy": "\u0410",
          "acy": "\u0430",
          "AElig": "\u00C6",
          "aelig": "\u00E6",
          "af": "\u2061",
          "Afr": "\uD835\uDD04",
          "afr": "\uD835\uDD1E",
          "Agrave": "\u00C0",
          "agrave": "\u00E0",
          "alefsym": "\u2135",
          "aleph": "\u2135",
          "Alpha": "\u0391",
          "alpha": "\u03B1",
          "Amacr": "\u0100",
          "amacr": "\u0101",
          "amalg": "\u2A3F",
          "AMP": "\u0026",
          "amp": "\u0026",
          "And": "\u2A53",
          "and": "\u2227",
          "andand": "\u2A55",
          "andd": "\u2A5C",
          "andslope": "\u2A58",
          "andv": "\u2A5A",
          "ang": "\u2220",
          "ange": "\u29A4",
          "angle": "\u2220",
          "angmsd": "\u2221",
          "angmsdaa": "\u29A8",
          "angmsdab": "\u29A9",
          "angmsdac": "\u29AA",
          "angmsdad": "\u29AB",
          "angmsdae": "\u29AC",
          "angmsdaf": "\u29AD",
          "angmsdag": "\u29AE",
          "angmsdah": "\u29AF",
          "angrt": "\u221F",
          "angrtvb": "\u22BE",
          "angrtvbd": "\u299D",
          "angsph": "\u2222",
          "angst": "\u00C5",
          "angzarr": "\u237C",
          "Aogon": "\u0104",
          "aogon": "\u0105",
          "Aopf": "\uD835\uDD38",
          "aopf": "\uD835\uDD52",
          "ap": "\u2248",
          "apacir": "\u2A6F",
          "apE": "\u2A70",
          "ape": "\u224A",
          "apid": "\u224B",
          "apos": "\u0027",
          "ApplyFunction": "\u2061",
          "approx": "\u2248",
          "approxeq": "\u224A",
          "Aring": "\u00C5",
          "aring": "\u00E5",
          "Ascr": "\uD835\uDC9C",
          "ascr": "\uD835\uDCB6",
          "Assign": "\u2254",
          "ast": "\u002A",
          "asymp": "\u2248",
          "asympeq": "\u224D",
          "Atilde": "\u00C3",
          "atilde": "\u00E3",
          "Auml": "\u00C4",
          "auml": "\u00E4",
          "awconint": "\u2233",
          "awint": "\u2A11",
          "backcong": "\u224C",
          "backepsilon": "\u03F6",
          "backprime": "\u2035",
          "backsim": "\u223D",
          "backsimeq": "\u22CD",
          "Backslash": "\u2216",
          "Barv": "\u2AE7",
          "barvee": "\u22BD",
          "Barwed": "\u2306",
          "barwed": "\u2305",
          "barwedge": "\u2305",
          "bbrk": "\u23B5",
          "bbrktbrk": "\u23B6",
          "bcong": "\u224C",
          "Bcy": "\u0411",
          "bcy": "\u0431",
          "bdquo": "\u201E",
          "becaus": "\u2235",
          "Because": "\u2235",
          "because": "\u2235",
          "bemptyv": "\u29B0",
          "bepsi": "\u03F6",
          "bernou": "\u212C",
          "Bernoullis": "\u212C",
          "Beta": "\u0392",
          "beta": "\u03B2",
          "beth": "\u2136",
          "between": "\u226C",
          "Bfr": "\uD835\uDD05",
          "bfr": "\uD835\uDD1F",
          "bigcap": "\u22C2",
          "bigcirc": "\u25EF",
          "bigcup": "\u22C3",
          "bigodot": "\u2A00",
          "bigoplus": "\u2A01",
          "bigotimes": "\u2A02",
          "bigsqcup": "\u2A06",
          "bigstar": "\u2605",
          "bigtriangledown": "\u25BD",
          "bigtriangleup": "\u25B3",
          "biguplus": "\u2A04",
          "bigvee": "\u22C1",
          "bigwedge": "\u22C0",
          "bkarow": "\u290D",
          "blacklozenge": "\u29EB",
          "blacksquare": "\u25AA",
          "blacktriangle": "\u25B4",
          "blacktriangledown": "\u25BE",
          "blacktriangleleft": "\u25C2",
          "blacktriangleright": "\u25B8",
          "blank": "\u2423",
          "blk12": "\u2592",
          "blk14": "\u2591",
          "blk34": "\u2593",
          "block": "\u2588",
          "bne": "\u003D\u20E5",
          "bnequiv": "\u2261\u20E5",
          "bNot": "\u2AED",
          "bnot": "\u2310",
          "Bopf": "\uD835\uDD39",
          "bopf": "\uD835\uDD53",
          "bot": "\u22A5",
          "bottom": "\u22A5",
          "bowtie": "\u22C8",
          "boxbox": "\u29C9",
          "boxDL": "\u2557",
          "boxDl": "\u2556",
          "boxdL": "\u2555",
          "boxdl": "\u2510",
          "boxDR": "\u2554",
          "boxDr": "\u2553",
          "boxdR": "\u2552",
          "boxdr": "\u250C",
          "boxH": "\u2550",
          "boxh": "\u2500",
          "boxHD": "\u2566",
          "boxHd": "\u2564",
          "boxhD": "\u2565",
          "boxhd": "\u252C",
          "boxHU": "\u2569",
          "boxHu": "\u2567",
          "boxhU": "\u2568",
          "boxhu": "\u2534",
          "boxminus": "\u229F",
          "boxplus": "\u229E",
          "boxtimes": "\u22A0",
          "boxUL": "\u255D",
          "boxUl": "\u255C",
          "boxuL": "\u255B",
          "boxul": "\u2518",
          "boxUR": "\u255A",
          "boxUr": "\u2559",
          "boxuR": "\u2558",
          "boxur": "\u2514",
          "boxV": "\u2551",
          "boxv": "\u2502",
          "boxVH": "\u256C",
          "boxVh": "\u256B",
          "boxvH": "\u256A",
          "boxvh": "\u253C",
          "boxVL": "\u2563",
          "boxVl": "\u2562",
          "boxvL": "\u2561",
          "boxvl": "\u2524",
          "boxVR": "\u2560",
          "boxVr": "\u255F",
          "boxvR": "\u255E",
          "boxvr": "\u251C",
          "bprime": "\u2035",
          "Breve": "\u02D8",
          "breve": "\u02D8",
          "brvbar": "\u00A6",
          "Bscr": "\u212C",
          "bscr": "\uD835\uDCB7",
          "bsemi": "\u204F",
          "bsim": "\u223D",
          "bsime": "\u22CD",
          "bsol": "\u005C",
          "bsolb": "\u29C5",
          "bsolhsub": "\u27C8",
          "bull": "\u2022",
          "bullet": "\u2022",
          "bump": "\u224E",
          "bumpE": "\u2AAE",
          "bumpe": "\u224F",
          "Bumpeq": "\u224E",
          "bumpeq": "\u224F",
          "Cacute": "\u0106",
          "cacute": "\u0107",
          "Cap": "\u22D2",
          "cap": "\u2229",
          "capand": "\u2A44",
          "capbrcup": "\u2A49",
          "capcap": "\u2A4B",
          "capcup": "\u2A47",
          "capdot": "\u2A40",
          "CapitalDifferentialD": "\u2145",
          "caps": "\u2229\uFE00",
          "caret": "\u2041",
          "caron": "\u02C7",
          "Cayleys": "\u212D",
          "ccaps": "\u2A4D",
          "Ccaron": "\u010C",
          "ccaron": "\u010D",
          "Ccedil": "\u00C7",
          "ccedil": "\u00E7",
          "Ccirc": "\u0108",
          "ccirc": "\u0109",
          "Cconint": "\u2230",
          "ccups": "\u2A4C",
          "ccupssm": "\u2A50",
          "Cdot": "\u010A",
          "cdot": "\u010B",
          "cedil": "\u00B8",
          "Cedilla": "\u00B8",
          "cemptyv": "\u29B2",
          "cent": "\u00A2",
          "CenterDot": "\u00B7",
          "centerdot": "\u00B7",
          "Cfr": "\u212D",
          "cfr": "\uD835\uDD20",
          "CHcy": "\u0427",
          "chcy": "\u0447",
          "check": "\u2713",
          "checkmark": "\u2713",
          "Chi": "\u03A7",
          "chi": "\u03C7",
          "cir": "\u25CB",
          "circ": "\u02C6",
          "circeq": "\u2257",
          "circlearrowleft": "\u21BA",
          "circlearrowright": "\u21BB",
          "circledast": "\u229B",
          "circledcirc": "\u229A",
          "circleddash": "\u229D",
          "CircleDot": "\u2299",
          "circledR": "\u00AE",
          "circledS": "\u24C8",
          "CircleMinus": "\u2296",
          "CirclePlus": "\u2295",
          "CircleTimes": "\u2297",
          "cirE": "\u29C3",
          "cire": "\u2257",
          "cirfnint": "\u2A10",
          "cirmid": "\u2AEF",
          "cirscir": "\u29C2",
          "ClockwiseContourIntegral": "\u2232",
          "CloseCurlyDoubleQuote": "\u201D",
          "CloseCurlyQuote": "\u2019",
          "clubs": "\u2663",
          "clubsuit": "\u2663",
          "Colon": "\u2237",
          "colon": "\u003A",
          "Colone": "\u2A74",
          "colone": "\u2254",
          "coloneq": "\u2254",
          "comma": "\u002C",
          "commat": "\u0040",
          "comp": "\u2201",
          "compfn": "\u2218",
          "complement": "\u2201",
          "complexes": "\u2102",
          "cong": "\u2245",
          "congdot": "\u2A6D",
          "Congruent": "\u2261",
          "Conint": "\u222F",
          "conint": "\u222E",
          "ContourIntegral": "\u222E",
          "Copf": "\u2102",
          "copf": "\uD835\uDD54",
          "coprod": "\u2210",
          "Coproduct": "\u2210",
          "COPY": "\u00A9",
          "copy": "\u00A9",
          "copysr": "\u2117",
          "CounterClockwiseContourIntegral": "\u2233",
          "crarr": "\u21B5",
          "Cross": "\u2A2F",
          "cross": "\u2717",
          "Cscr": "\uD835\uDC9E",
          "cscr": "\uD835\uDCB8",
          "csub": "\u2ACF",
          "csube": "\u2AD1",
          "csup": "\u2AD0",
          "csupe": "\u2AD2",
          "ctdot": "\u22EF",
          "cudarrl": "\u2938",
          "cudarrr": "\u2935",
          "cuepr": "\u22DE",
          "cuesc": "\u22DF",
          "cularr": "\u21B6",
          "cularrp": "\u293D",
          "Cup": "\u22D3",
          "cup": "\u222A",
          "cupbrcap": "\u2A48",
          "CupCap": "\u224D",
          "cupcap": "\u2A46",
          "cupcup": "\u2A4A",
          "cupdot": "\u228D",
          "cupor": "\u2A45",
          "cups": "\u222A\uFE00",
          "curarr": "\u21B7",
          "curarrm": "\u293C",
          "curlyeqprec": "\u22DE",
          "curlyeqsucc": "\u22DF",
          "curlyvee": "\u22CE",
          "curlywedge": "\u22CF",
          "curren": "\u00A4",
          "curvearrowleft": "\u21B6",
          "curvearrowright": "\u21B7",
          "cuvee": "\u22CE",
          "cuwed": "\u22CF",
          "cwconint": "\u2232",
          "cwint": "\u2231",
          "cylcty": "\u232D",
          "Dagger": "\u2021",
          "dagger": "\u2020",
          "daleth": "\u2138",
          "Darr": "\u21A1",
          "dArr": "\u21D3",
          "darr": "\u2193",
          "dash": "\u2010",
          "Dashv": "\u2AE4",
          "dashv": "\u22A3",
          "dbkarow": "\u290F",
          "dblac": "\u02DD",
          "Dcaron": "\u010E",
          "dcaron": "\u010F",
          "Dcy": "\u0414",
          "dcy": "\u0434",
          "DD": "\u2145",
          "dd": "\u2146",
          "ddagger": "\u2021",
          "ddarr": "\u21CA",
          "DDotrahd": "\u2911",
          "ddotseq": "\u2A77",
          "deg": "\u00B0",
          "Del": "\u2207",
          "Delta": "\u0394",
          "delta": "\u03B4",
          "demptyv": "\u29B1",
          "dfisht": "\u297F",
          "Dfr": "\uD835\uDD07",
          "dfr": "\uD835\uDD21",
          "dHar": "\u2965",
          "dharl": "\u21C3",
          "dharr": "\u21C2",
          "DiacriticalAcute": "\u00B4",
          "DiacriticalDot": "\u02D9",
          "DiacriticalDoubleAcute": "\u02DD",
          "DiacriticalGrave": "\u0060",
          "DiacriticalTilde": "\u02DC",
          "diam": "\u22C4",
          "Diamond": "\u22C4",
          "diamond": "\u22C4",
          "diamondsuit": "\u2666",
          "diams": "\u2666",
          "die": "\u00A8",
          "DifferentialD": "\u2146",
          "digamma": "\u03DD",
          "disin": "\u22F2",
          "div": "\u00F7",
          "divide": "\u00F7",
          "divideontimes": "\u22C7",
          "divonx": "\u22C7",
          "DJcy": "\u0402",
          "djcy": "\u0452",
          "dlcorn": "\u231E",
          "dlcrop": "\u230D",
          "dollar": "\u0024",
          "Dopf": "\uD835\uDD3B",
          "dopf": "\uD835\uDD55",
          "Dot": "\u00A8",
          "dot": "\u02D9",
          "DotDot": "\u20DC",
          "doteq": "\u2250",
          "doteqdot": "\u2251",
          "DotEqual": "\u2250",
          "dotminus": "\u2238",
          "dotplus": "\u2214",
          "dotsquare": "\u22A1",
          "doublebarwedge": "\u2306",
          "DoubleContourIntegral": "\u222F",
          "DoubleDot": "\u00A8",
          "DoubleDownArrow": "\u21D3",
          "DoubleLeftArrow": "\u21D0",
          "DoubleLeftRightArrow": "\u21D4",
          "DoubleLeftTee": "\u2AE4",
          "DoubleLongLeftArrow": "\u27F8",
          "DoubleLongLeftRightArrow": "\u27FA",
          "DoubleLongRightArrow": "\u27F9",
          "DoubleRightArrow": "\u21D2",
          "DoubleRightTee": "\u22A8",
          "DoubleUpArrow": "\u21D1",
          "DoubleUpDownArrow": "\u21D5",
          "DoubleVerticalBar": "\u2225",
          "DownArrow": "\u2193",
          "Downarrow": "\u21D3",
          "downarrow": "\u2193",
          "DownArrowBar": "\u2913",
          "DownArrowUpArrow": "\u21F5",
          "DownBreve": "\u0311",
          "downdownarrows": "\u21CA",
          "downharpoonleft": "\u21C3",
          "downharpoonright": "\u21C2",
          "DownLeftRightVector": "\u2950",
          "DownLeftTeeVector": "\u295E",
          "DownLeftVector": "\u21BD",
          "DownLeftVectorBar": "\u2956",
          "DownRightTeeVector": "\u295F",
          "DownRightVector": "\u21C1",
          "DownRightVectorBar": "\u2957",
          "DownTee": "\u22A4",
          "DownTeeArrow": "\u21A7",
          "drbkarow": "\u2910",
          "drcorn": "\u231F",
          "drcrop": "\u230C",
          "Dscr": "\uD835\uDC9F",
          "dscr": "\uD835\uDCB9",
          "DScy": "\u0405",
          "dscy": "\u0455",
          "dsol": "\u29F6",
          "Dstrok": "\u0110",
          "dstrok": "\u0111",
          "dtdot": "\u22F1",
          "dtri": "\u25BF",
          "dtrif": "\u25BE",
          "duarr": "\u21F5",
          "duhar": "\u296F",
          "dwangle": "\u29A6",
          "DZcy": "\u040F",
          "dzcy": "\u045F",
          "dzigrarr": "\u27FF",
          "Eacute": "\u00C9",
          "eacute": "\u00E9",
          "easter": "\u2A6E",
          "Ecaron": "\u011A",
          "ecaron": "\u011B",
          "ecir": "\u2256",
          "Ecirc": "\u00CA",
          "ecirc": "\u00EA",
          "ecolon": "\u2255",
          "Ecy": "\u042D",
          "ecy": "\u044D",
          "eDDot": "\u2A77",
          "Edot": "\u0116",
          "eDot": "\u2251",
          "edot": "\u0117",
          "ee": "\u2147",
          "efDot": "\u2252",
          "Efr": "\uD835\uDD08",
          "efr": "\uD835\uDD22",
          "eg": "\u2A9A",
          "Egrave": "\u00C8",
          "egrave": "\u00E8",
          "egs": "\u2A96",
          "egsdot": "\u2A98",
          "el": "\u2A99",
          "Element": "\u2208",
          "elinters": "\u23E7",
          "ell": "\u2113",
          "els": "\u2A95",
          "elsdot": "\u2A97",
          "Emacr": "\u0112",
          "emacr": "\u0113",
          "empty": "\u2205",
          "emptyset": "\u2205",
          "EmptySmallSquare": "\u25FB",
          "emptyv": "\u2205",
          "EmptyVerySmallSquare": "\u25AB",
          "emsp": "\u2003",
          "emsp13": "\u2004",
          "emsp14": "\u2005",
          "ENG": "\u014A",
          "eng": "\u014B",
          "ensp": "\u2002",
          "Eogon": "\u0118",
          "eogon": "\u0119",
          "Eopf": "\uD835\uDD3C",
          "eopf": "\uD835\uDD56",
          "epar": "\u22D5",
          "eparsl": "\u29E3",
          "eplus": "\u2A71",
          "epsi": "\u03B5",
          "Epsilon": "\u0395",
          "epsilon": "\u03B5",
          "epsiv": "\u03F5",
          "eqcirc": "\u2256",
          "eqcolon": "\u2255",
          "eqsim": "\u2242",
          "eqslantgtr": "\u2A96",
          "eqslantless": "\u2A95",
          "Equal": "\u2A75",
          "equals": "\u003D",
          "EqualTilde": "\u2242",
          "equest": "\u225F",
          "Equilibrium": "\u21CC",
          "equiv": "\u2261",
          "equivDD": "\u2A78",
          "eqvparsl": "\u29E5",
          "erarr": "\u2971",
          "erDot": "\u2253",
          "Escr": "\u2130",
          "escr": "\u212F",
          "esdot": "\u2250",
          "Esim": "\u2A73",
          "esim": "\u2242",
          "Eta": "\u0397",
          "eta": "\u03B7",
          "ETH": "\u00D0",
          "eth": "\u00F0",
          "Euml": "\u00CB",
          "euml": "\u00EB",
          "euro": "\u20AC",
          "excl": "\u0021",
          "exist": "\u2203",
          "Exists": "\u2203",
          "expectation": "\u2130",
          "ExponentialE": "\u2147",
          "exponentiale": "\u2147",
          "fallingdotseq": "\u2252",
          "Fcy": "\u0424",
          "fcy": "\u0444",
          "female": "\u2640",
          "ffilig": "\uFB03",
          "fflig": "\uFB00",
          "ffllig": "\uFB04",
          "Ffr": "\uD835\uDD09",
          "ffr": "\uD835\uDD23",
          "filig": "\uFB01",
          "FilledSmallSquare": "\u25FC",
          "FilledVerySmallSquare": "\u25AA",
          "fjlig": "\u0066\u006A",
          "flat": "\u266D",
          "fllig": "\uFB02",
          "fltns": "\u25B1",
          "fnof": "\u0192",
          "Fopf": "\uD835\uDD3D",
          "fopf": "\uD835\uDD57",
          "ForAll": "\u2200",
          "forall": "\u2200",
          "fork": "\u22D4",
          "forkv": "\u2AD9",
          "Fouriertrf": "\u2131",
          "fpartint": "\u2A0D",
          "frac12": "\u00BD",
          "frac13": "\u2153",
          "frac14": "\u00BC",
          "frac15": "\u2155",
          "frac16": "\u2159",
          "frac18": "\u215B",
          "frac23": "\u2154",
          "frac25": "\u2156",
          "frac34": "\u00BE",
          "frac35": "\u2157",
          "frac38": "\u215C",
          "frac45": "\u2158",
          "frac56": "\u215A",
          "frac58": "\u215D",
          "frac78": "\u215E",
          "frasl": "\u2044",
          "frown": "\u2322",
          "Fscr": "\u2131",
          "fscr": "\uD835\uDCBB",
          "gacute": "\u01F5",
          "Gamma": "\u0393",
          "gamma": "\u03B3",
          "Gammad": "\u03DC",
          "gammad": "\u03DD",
          "gap": "\u2A86",
          "Gbreve": "\u011E",
          "gbreve": "\u011F",
          "Gcedil": "\u0122",
          "Gcirc": "\u011C",
          "gcirc": "\u011D",
          "Gcy": "\u0413",
          "gcy": "\u0433",
          "Gdot": "\u0120",
          "gdot": "\u0121",
          "gE": "\u2267",
          "ge": "\u2265",
          "gEl": "\u2A8C",
          "gel": "\u22DB",
          "geq": "\u2265",
          "geqq": "\u2267",
          "geqslant": "\u2A7E",
          "ges": "\u2A7E",
          "gescc": "\u2AA9",
          "gesdot": "\u2A80",
          "gesdoto": "\u2A82",
          "gesdotol": "\u2A84",
          "gesl": "\u22DB\uFE00",
          "gesles": "\u2A94",
          "Gfr": "\uD835\uDD0A",
          "gfr": "\uD835\uDD24",
          "Gg": "\u22D9",
          "gg": "\u226B",
          "ggg": "\u22D9",
          "gimel": "\u2137",
          "GJcy": "\u0403",
          "gjcy": "\u0453",
          "gl": "\u2277",
          "gla": "\u2AA5",
          "glE": "\u2A92",
          "glj": "\u2AA4",
          "gnap": "\u2A8A",
          "gnapprox": "\u2A8A",
          "gnE": "\u2269",
          "gne": "\u2A88",
          "gneq": "\u2A88",
          "gneqq": "\u2269",
          "gnsim": "\u22E7",
          "Gopf": "\uD835\uDD3E",
          "gopf": "\uD835\uDD58",
          "grave": "\u0060",
          "GreaterEqual": "\u2265",
          "GreaterEqualLess": "\u22DB",
          "GreaterFullEqual": "\u2267",
          "GreaterGreater": "\u2AA2",
          "GreaterLess": "\u2277",
          "GreaterSlantEqual": "\u2A7E",
          "GreaterTilde": "\u2273",
          "Gscr": "\uD835\uDCA2",
          "gscr": "\u210A",
          "gsim": "\u2273",
          "gsime": "\u2A8E",
          "gsiml": "\u2A90",
          "GT": "\u003E",
          "Gt": "\u226B",
          "gt": "\u003E",
          "gtcc": "\u2AA7",
          "gtcir": "\u2A7A",
          "gtdot": "\u22D7",
          "gtlPar": "\u2995",
          "gtquest": "\u2A7C",
          "gtrapprox": "\u2A86",
          "gtrarr": "\u2978",
          "gtrdot": "\u22D7",
          "gtreqless": "\u22DB",
          "gtreqqless": "\u2A8C",
          "gtrless": "\u2277",
          "gtrsim": "\u2273",
          "gvertneqq": "\u2269\uFE00",
          "gvnE": "\u2269\uFE00",
          "Hacek": "\u02C7",
          "hairsp": "\u200A",
          "half": "\u00BD",
          "hamilt": "\u210B",
          "HARDcy": "\u042A",
          "hardcy": "\u044A",
          "hArr": "\u21D4",
          "harr": "\u2194",
          "harrcir": "\u2948",
          "harrw": "\u21AD",
          "Hat": "\u005E",
          "hbar": "\u210F",
          "Hcirc": "\u0124",
          "hcirc": "\u0125",
          "hearts": "\u2665",
          "heartsuit": "\u2665",
          "hellip": "\u2026",
          "hercon": "\u22B9",
          "Hfr": "\u210C",
          "hfr": "\uD835\uDD25",
          "HilbertSpace": "\u210B",
          "hksearow": "\u2925",
          "hkswarow": "\u2926",
          "hoarr": "\u21FF",
          "homtht": "\u223B",
          "hookleftarrow": "\u21A9",
          "hookrightarrow": "\u21AA",
          "Hopf": "\u210D",
          "hopf": "\uD835\uDD59",
          "horbar": "\u2015",
          "HorizontalLine": "\u2500",
          "Hscr": "\u210B",
          "hscr": "\uD835\uDCBD",
          "hslash": "\u210F",
          "Hstrok": "\u0126",
          "hstrok": "\u0127",
          "HumpDownHump": "\u224E",
          "HumpEqual": "\u224F",
          "hybull": "\u2043",
          "hyphen": "\u2010",
          "Iacute": "\u00CD",
          "iacute": "\u00ED",
          "ic": "\u2063",
          "Icirc": "\u00CE",
          "icirc": "\u00EE",
          "Icy": "\u0418",
          "icy": "\u0438",
          "Idot": "\u0130",
          "IEcy": "\u0415",
          "iecy": "\u0435",
          "iexcl": "\u00A1",
          "iff": "\u21D4",
          "Ifr": "\u2111",
          "ifr": "\uD835\uDD26",
          "Igrave": "\u00CC",
          "igrave": "\u00EC",
          "ii": "\u2148",
          "iiiint": "\u2A0C",
          "iiint": "\u222D",
          "iinfin": "\u29DC",
          "iiota": "\u2129",
          "IJlig": "\u0132",
          "ijlig": "\u0133",
          "Im": "\u2111",
          "Imacr": "\u012A",
          "imacr": "\u012B",
          "image": "\u2111",
          "ImaginaryI": "\u2148",
          "imagline": "\u2110",
          "imagpart": "\u2111",
          "imath": "\u0131",
          "imof": "\u22B7",
          "imped": "\u01B5",
          "Implies": "\u21D2",
          "in": "\u2208",
          "incare": "\u2105",
          "infin": "\u221E",
          "infintie": "\u29DD",
          "inodot": "\u0131",
          "Int": "\u222C",
          "int": "\u222B",
          "intcal": "\u22BA",
          "integers": "\u2124",
          "Integral": "\u222B",
          "intercal": "\u22BA",
          "Intersection": "\u22C2",
          "intlarhk": "\u2A17",
          "intprod": "\u2A3C",
          "InvisibleComma": "\u2063",
          "InvisibleTimes": "\u2062",
          "IOcy": "\u0401",
          "iocy": "\u0451",
          "Iogon": "\u012E",
          "iogon": "\u012F",
          "Iopf": "\uD835\uDD40",
          "iopf": "\uD835\uDD5A",
          "Iota": "\u0399",
          "iota": "\u03B9",
          "iprod": "\u2A3C",
          "iquest": "\u00BF",
          "Iscr": "\u2110",
          "iscr": "\uD835\uDCBE",
          "isin": "\u2208",
          "isindot": "\u22F5",
          "isinE": "\u22F9",
          "isins": "\u22F4",
          "isinsv": "\u22F3",
          "isinv": "\u2208",
          "it": "\u2062",
          "Itilde": "\u0128",
          "itilde": "\u0129",
          "Iukcy": "\u0406",
          "iukcy": "\u0456",
          "Iuml": "\u00CF",
          "iuml": "\u00EF",
          "Jcirc": "\u0134",
          "jcirc": "\u0135",
          "Jcy": "\u0419",
          "jcy": "\u0439",
          "Jfr": "\uD835\uDD0D",
          "jfr": "\uD835\uDD27",
          "jmath": "\u0237",
          "Jopf": "\uD835\uDD41",
          "jopf": "\uD835\uDD5B",
          "Jscr": "\uD835\uDCA5",
          "jscr": "\uD835\uDCBF",
          "Jsercy": "\u0408",
          "jsercy": "\u0458",
          "Jukcy": "\u0404",
          "jukcy": "\u0454",
          "Kappa": "\u039A",
          "kappa": "\u03BA",
          "kappav": "\u03F0",
          "Kcedil": "\u0136",
          "kcedil": "\u0137",
          "Kcy": "\u041A",
          "kcy": "\u043A",
          "Kfr": "\uD835\uDD0E",
          "kfr": "\uD835\uDD28",
          "kgreen": "\u0138",
          "KHcy": "\u0425",
          "khcy": "\u0445",
          "KJcy": "\u040C",
          "kjcy": "\u045C",
          "Kopf": "\uD835\uDD42",
          "kopf": "\uD835\uDD5C",
          "Kscr": "\uD835\uDCA6",
          "kscr": "\uD835\uDCC0",
          "lAarr": "\u21DA",
          "Lacute": "\u0139",
          "lacute": "\u013A",
          "laemptyv": "\u29B4",
          "lagran": "\u2112",
          "Lambda": "\u039B",
          "lambda": "\u03BB",
          "Lang": "\u27EA",
          "lang": "\u27E8",
          "langd": "\u2991",
          "langle": "\u27E8",
          "lap": "\u2A85",
          "Laplacetrf": "\u2112",
          "laquo": "\u00AB",
          "Larr": "\u219E",
          "lArr": "\u21D0",
          "larr": "\u2190",
          "larrb": "\u21E4",
          "larrbfs": "\u291F",
          "larrfs": "\u291D",
          "larrhk": "\u21A9",
          "larrlp": "\u21AB",
          "larrpl": "\u2939",
          "larrsim": "\u2973",
          "larrtl": "\u21A2",
          "lat": "\u2AAB",
          "lAtail": "\u291B",
          "latail": "\u2919",
          "late": "\u2AAD",
          "lates": "\u2AAD\uFE00",
          "lBarr": "\u290E",
          "lbarr": "\u290C",
          "lbbrk": "\u2772",
          "lbrace": "\u007B",
          "lbrack": "\u005B",
          "lbrke": "\u298B",
          "lbrksld": "\u298F",
          "lbrkslu": "\u298D",
          "Lcaron": "\u013D",
          "lcaron": "\u013E",
          "Lcedil": "\u013B",
          "lcedil": "\u013C",
          "lceil": "\u2308",
          "lcub": "\u007B",
          "Lcy": "\u041B",
          "lcy": "\u043B",
          "ldca": "\u2936",
          "ldquo": "\u201C",
          "ldquor": "\u201E",
          "ldrdhar": "\u2967",
          "ldrushar": "\u294B",
          "ldsh": "\u21B2",
          "lE": "\u2266",
          "le": "\u2264",
          "LeftAngleBracket": "\u27E8",
          "LeftArrow": "\u2190",
          "Leftarrow": "\u21D0",
          "leftarrow": "\u2190",
          "LeftArrowBar": "\u21E4",
          "LeftArrowRightArrow": "\u21C6",
          "leftarrowtail": "\u21A2",
          "LeftCeiling": "\u2308",
          "LeftDoubleBracket": "\u27E6",
          "LeftDownTeeVector": "\u2961",
          "LeftDownVector": "\u21C3",
          "LeftDownVectorBar": "\u2959",
          "LeftFloor": "\u230A",
          "leftharpoondown": "\u21BD",
          "leftharpoonup": "\u21BC",
          "leftleftarrows": "\u21C7",
          "LeftRightArrow": "\u2194",
          "Leftrightarrow": "\u21D4",
          "leftrightarrow": "\u2194",
          "leftrightarrows": "\u21C6",
          "leftrightharpoons": "\u21CB",
          "leftrightsquigarrow": "\u21AD",
          "LeftRightVector": "\u294E",
          "LeftTee": "\u22A3",
          "LeftTeeArrow": "\u21A4",
          "LeftTeeVector": "\u295A",
          "leftthreetimes": "\u22CB",
          "LeftTriangle": "\u22B2",
          "LeftTriangleBar": "\u29CF",
          "LeftTriangleEqual": "\u22B4",
          "LeftUpDownVector": "\u2951",
          "LeftUpTeeVector": "\u2960",
          "LeftUpVector": "\u21BF",
          "LeftUpVectorBar": "\u2958",
          "LeftVector": "\u21BC",
          "LeftVectorBar": "\u2952",
          "lEg": "\u2A8B",
          "leg": "\u22DA",
          "leq": "\u2264",
          "leqq": "\u2266",
          "leqslant": "\u2A7D",
          "les": "\u2A7D",
          "lescc": "\u2AA8",
          "lesdot": "\u2A7F",
          "lesdoto": "\u2A81",
          "lesdotor": "\u2A83",
          "lesg": "\u22DA\uFE00",
          "lesges": "\u2A93",
          "lessapprox": "\u2A85",
          "lessdot": "\u22D6",
          "lesseqgtr": "\u22DA",
          "lesseqqgtr": "\u2A8B",
          "LessEqualGreater": "\u22DA",
          "LessFullEqual": "\u2266",
          "LessGreater": "\u2276",
          "lessgtr": "\u2276",
          "LessLess": "\u2AA1",
          "lesssim": "\u2272",
          "LessSlantEqual": "\u2A7D",
          "LessTilde": "\u2272",
          "lfisht": "\u297C",
          "lfloor": "\u230A",
          "Lfr": "\uD835\uDD0F",
          "lfr": "\uD835\uDD29",
          "lg": "\u2276",
          "lgE": "\u2A91",
          "lHar": "\u2962",
          "lhard": "\u21BD",
          "lharu": "\u21BC",
          "lharul": "\u296A",
          "lhblk": "\u2584",
          "LJcy": "\u0409",
          "ljcy": "\u0459",
          "Ll": "\u22D8",
          "ll": "\u226A",
          "llarr": "\u21C7",
          "llcorner": "\u231E",
          "Lleftarrow": "\u21DA",
          "llhard": "\u296B",
          "lltri": "\u25FA",
          "Lmidot": "\u013F",
          "lmidot": "\u0140",
          "lmoust": "\u23B0",
          "lmoustache": "\u23B0",
          "lnap": "\u2A89",
          "lnapprox": "\u2A89",
          "lnE": "\u2268",
          "lne": "\u2A87",
          "lneq": "\u2A87",
          "lneqq": "\u2268",
          "lnsim": "\u22E6",
          "loang": "\u27EC",
          "loarr": "\u21FD",
          "lobrk": "\u27E6",
          "LongLeftArrow": "\u27F5",
          "Longleftarrow": "\u27F8",
          "longleftarrow": "\u27F5",
          "LongLeftRightArrow": "\u27F7",
          "Longleftrightarrow": "\u27FA",
          "longleftrightarrow": "\u27F7",
          "longmapsto": "\u27FC",
          "LongRightArrow": "\u27F6",
          "Longrightarrow": "\u27F9",
          "longrightarrow": "\u27F6",
          "looparrowleft": "\u21AB",
          "looparrowright": "\u21AC",
          "lopar": "\u2985",
          "Lopf": "\uD835\uDD43",
          "lopf": "\uD835\uDD5D",
          "loplus": "\u2A2D",
          "lotimes": "\u2A34",
          "lowast": "\u2217",
          "lowbar": "\u005F",
          "LowerLeftArrow": "\u2199",
          "LowerRightArrow": "\u2198",
          "loz": "\u25CA",
          "lozenge": "\u25CA",
          "lozf": "\u29EB",
          "lpar": "\u0028",
          "lparlt": "\u2993",
          "lrarr": "\u21C6",
          "lrcorner": "\u231F",
          "lrhar": "\u21CB",
          "lrhard": "\u296D",
          "lrm": "\u200E",
          "lrtri": "\u22BF",
          "lsaquo": "\u2039",
          "Lscr": "\u2112",
          "lscr": "\uD835\uDCC1",
          "Lsh": "\u21B0",
          "lsh": "\u21B0",
          "lsim": "\u2272",
          "lsime": "\u2A8D",
          "lsimg": "\u2A8F",
          "lsqb": "\u005B",
          "lsquo": "\u2018",
          "lsquor": "\u201A",
          "Lstrok": "\u0141",
          "lstrok": "\u0142",
          "LT": "\u003C",
          "Lt": "\u226A",
          "lt": "\u003C",
          "ltcc": "\u2AA6",
          "ltcir": "\u2A79",
          "ltdot": "\u22D6",
          "lthree": "\u22CB",
          "ltimes": "\u22C9",
          "ltlarr": "\u2976",
          "ltquest": "\u2A7B",
          "ltri": "\u25C3",
          "ltrie": "\u22B4",
          "ltrif": "\u25C2",
          "ltrPar": "\u2996",
          "lurdshar": "\u294A",
          "luruhar": "\u2966",
          "lvertneqq": "\u2268\uFE00",
          "lvnE": "\u2268\uFE00",
          "macr": "\u00AF",
          "male": "\u2642",
          "malt": "\u2720",
          "maltese": "\u2720",
          "Map": "\u2905",
          "map": "\u21A6",
          "mapsto": "\u21A6",
          "mapstodown": "\u21A7",
          "mapstoleft": "\u21A4",
          "mapstoup": "\u21A5",
          "marker": "\u25AE",
          "mcomma": "\u2A29",
          "Mcy": "\u041C",
          "mcy": "\u043C",
          "mdash": "\u2014",
          "mDDot": "\u223A",
          "measuredangle": "\u2221",
          "MediumSpace": "\u205F",
          "Mellintrf": "\u2133",
          "Mfr": "\uD835\uDD10",
          "mfr": "\uD835\uDD2A",
          "mho": "\u2127",
          "micro": "\u00B5",
          "mid": "\u2223",
          "midast": "\u002A",
          "midcir": "\u2AF0",
          "middot": "\u00B7",
          "minus": "\u2212",
          "minusb": "\u229F",
          "minusd": "\u2238",
          "minusdu": "\u2A2A",
          "MinusPlus": "\u2213",
          "mlcp": "\u2ADB",
          "mldr": "\u2026",
          "mnplus": "\u2213",
          "models": "\u22A7",
          "Mopf": "\uD835\uDD44",
          "mopf": "\uD835\uDD5E",
          "mp": "\u2213",
          "Mscr": "\u2133",
          "mscr": "\uD835\uDCC2",
          "mstpos": "\u223E",
          "Mu": "\u039C",
          "mu": "\u03BC",
          "multimap": "\u22B8",
          "mumap": "\u22B8",
          "nabla": "\u2207",
          "Nacute": "\u0143",
          "nacute": "\u0144",
          "nang": "\u2220\u20D2",
          "nap": "\u2249",
          "napE": "\u2A70\u0338",
          "napid": "\u224B\u0338",
          "napos": "\u0149",
          "napprox": "\u2249",
          "natur": "\u266E",
          "natural": "\u266E",
          "naturals": "\u2115",
          "nbsp": "\u00A0",
          "nbump": "\u224E\u0338",
          "nbumpe": "\u224F\u0338",
          "ncap": "\u2A43",
          "Ncaron": "\u0147",
          "ncaron": "\u0148",
          "Ncedil": "\u0145",
          "ncedil": "\u0146",
          "ncong": "\u2247",
          "ncongdot": "\u2A6D\u0338",
          "ncup": "\u2A42",
          "Ncy": "\u041D",
          "ncy": "\u043D",
          "ndash": "\u2013",
          "ne": "\u2260",
          "nearhk": "\u2924",
          "neArr": "\u21D7",
          "nearr": "\u2197",
          "nearrow": "\u2197",
          "nedot": "\u2250\u0338",
          "NegativeMediumSpace": "\u200B",
          "NegativeThickSpace": "\u200B",
          "NegativeThinSpace": "\u200B",
          "NegativeVeryThinSpace": "\u200B",
          "nequiv": "\u2262",
          "nesear": "\u2928",
          "nesim": "\u2242\u0338",
          "NestedGreaterGreater": "\u226B",
          "NestedLessLess": "\u226A",
          "NewLine": "\u000A",
          "nexist": "\u2204",
          "nexists": "\u2204",
          "Nfr": "\uD835\uDD11",
          "nfr": "\uD835\uDD2B",
          "ngE": "\u2267\u0338",
          "nge": "\u2271",
          "ngeq": "\u2271",
          "ngeqq": "\u2267\u0338",
          "ngeqslant": "\u2A7E\u0338",
          "nges": "\u2A7E\u0338",
          "nGg": "\u22D9\u0338",
          "ngsim": "\u2275",
          "nGt": "\u226B\u20D2",
          "ngt": "\u226F",
          "ngtr": "\u226F",
          "nGtv": "\u226B\u0338",
          "nhArr": "\u21CE",
          "nharr": "\u21AE",
          "nhpar": "\u2AF2",
          "ni": "\u220B",
          "nis": "\u22FC",
          "nisd": "\u22FA",
          "niv": "\u220B",
          "NJcy": "\u040A",
          "njcy": "\u045A",
          "nlArr": "\u21CD",
          "nlarr": "\u219A",
          "nldr": "\u2025",
          "nlE": "\u2266\u0338",
          "nle": "\u2270",
          "nLeftarrow": "\u21CD",
          "nleftarrow": "\u219A",
          "nLeftrightarrow": "\u21CE",
          "nleftrightarrow": "\u21AE",
          "nleq": "\u2270",
          "nleqq": "\u2266\u0338",
          "nleqslant": "\u2A7D\u0338",
          "nles": "\u2A7D\u0338",
          "nless": "\u226E",
          "nLl": "\u22D8\u0338",
          "nlsim": "\u2274",
          "nLt": "\u226A\u20D2",
          "nlt": "\u226E",
          "nltri": "\u22EA",
          "nltrie": "\u22EC",
          "nLtv": "\u226A\u0338",
          "nmid": "\u2224",
          "NoBreak": "\u2060",
          "NonBreakingSpace": "\u00A0",
          "Nopf": "\u2115",
          "nopf": "\uD835\uDD5F",
          "Not": "\u2AEC",
          "not": "\u00AC",
          "NotCongruent": "\u2262",
          "NotCupCap": "\u226D",
          "NotDoubleVerticalBar": "\u2226",
          "NotElement": "\u2209",
          "NotEqual": "\u2260",
          "NotEqualTilde": "\u2242\u0338",
          "NotExists": "\u2204",
          "NotGreater": "\u226F",
          "NotGreaterEqual": "\u2271",
          "NotGreaterFullEqual": "\u2267\u0338",
          "NotGreaterGreater": "\u226B\u0338",
          "NotGreaterLess": "\u2279",
          "NotGreaterSlantEqual": "\u2A7E\u0338",
          "NotGreaterTilde": "\u2275",
          "NotHumpDownHump": "\u224E\u0338",
          "NotHumpEqual": "\u224F\u0338",
          "notin": "\u2209",
          "notindot": "\u22F5\u0338",
          "notinE": "\u22F9\u0338",
          "notinva": "\u2209",
          "notinvb": "\u22F7",
          "notinvc": "\u22F6",
          "NotLeftTriangle": "\u22EA",
          "NotLeftTriangleBar": "\u29CF\u0338",
          "NotLeftTriangleEqual": "\u22EC",
          "NotLess": "\u226E",
          "NotLessEqual": "\u2270",
          "NotLessGreater": "\u2278",
          "NotLessLess": "\u226A\u0338",
          "NotLessSlantEqual": "\u2A7D\u0338",
          "NotLessTilde": "\u2274",
          "NotNestedGreaterGreater": "\u2AA2\u0338",
          "NotNestedLessLess": "\u2AA1\u0338",
          "notni": "\u220C",
          "notniva": "\u220C",
          "notnivb": "\u22FE",
          "notnivc": "\u22FD",
          "NotPrecedes": "\u2280",
          "NotPrecedesEqual": "\u2AAF\u0338",
          "NotPrecedesSlantEqual": "\u22E0",
          "NotReverseElement": "\u220C",
          "NotRightTriangle": "\u22EB",
          "NotRightTriangleBar": "\u29D0\u0338",
          "NotRightTriangleEqual": "\u22ED",
          "NotSquareSubset": "\u228F\u0338",
          "NotSquareSubsetEqual": "\u22E2",
          "NotSquareSuperset": "\u2290\u0338",
          "NotSquareSupersetEqual": "\u22E3",
          "NotSubset": "\u2282\u20D2",
          "NotSubsetEqual": "\u2288",
          "NotSucceeds": "\u2281",
          "NotSucceedsEqual": "\u2AB0\u0338",
          "NotSucceedsSlantEqual": "\u22E1",
          "NotSucceedsTilde": "\u227F\u0338",
          "NotSuperset": "\u2283\u20D2",
          "NotSupersetEqual": "\u2289",
          "NotTilde": "\u2241",
          "NotTildeEqual": "\u2244",
          "NotTildeFullEqual": "\u2247",
          "NotTildeTilde": "\u2249",
          "NotVerticalBar": "\u2224",
          "npar": "\u2226",
          "nparallel": "\u2226",
          "nparsl": "\u2AFD\u20E5",
          "npart": "\u2202\u0338",
          "npolint": "\u2A14",
          "npr": "\u2280",
          "nprcue": "\u22E0",
          "npre": "\u2AAF\u0338",
          "nprec": "\u2280",
          "npreceq": "\u2AAF\u0338",
          "nrArr": "\u21CF",
          "nrarr": "\u219B",
          "nrarrc": "\u2933\u0338",
          "nrarrw": "\u219D\u0338",
          "nRightarrow": "\u21CF",
          "nrightarrow": "\u219B",
          "nrtri": "\u22EB",
          "nrtrie": "\u22ED",
          "nsc": "\u2281",
          "nsccue": "\u22E1",
          "nsce": "\u2AB0\u0338",
          "Nscr": "\uD835\uDCA9",
          "nscr": "\uD835\uDCC3",
          "nshortmid": "\u2224",
          "nshortparallel": "\u2226",
          "nsim": "\u2241",
          "nsime": "\u2244",
          "nsimeq": "\u2244",
          "nsmid": "\u2224",
          "nspar": "\u2226",
          "nsqsube": "\u22E2",
          "nsqsupe": "\u22E3",
          "nsub": "\u2284",
          "nsubE": "\u2AC5\u0338",
          "nsube": "\u2288",
          "nsubset": "\u2282\u20D2",
          "nsubseteq": "\u2288",
          "nsubseteqq": "\u2AC5\u0338",
          "nsucc": "\u2281",
          "nsucceq": "\u2AB0\u0338",
          "nsup": "\u2285",
          "nsupE": "\u2AC6\u0338",
          "nsupe": "\u2289",
          "nsupset": "\u2283\u20D2",
          "nsupseteq": "\u2289",
          "nsupseteqq": "\u2AC6\u0338",
          "ntgl": "\u2279",
          "Ntilde": "\u00D1",
          "ntilde": "\u00F1",
          "ntlg": "\u2278",
          "ntriangleleft": "\u22EA",
          "ntrianglelefteq": "\u22EC",
          "ntriangleright": "\u22EB",
          "ntrianglerighteq": "\u22ED",
          "Nu": "\u039D",
          "nu": "\u03BD",
          "num": "\u0023",
          "numero": "\u2116",
          "numsp": "\u2007",
          "nvap": "\u224D\u20D2",
          "nVDash": "\u22AF",
          "nVdash": "\u22AE",
          "nvDash": "\u22AD",
          "nvdash": "\u22AC",
          "nvge": "\u2265\u20D2",
          "nvgt": "\u003E\u20D2",
          "nvHarr": "\u2904",
          "nvinfin": "\u29DE",
          "nvlArr": "\u2902",
          "nvle": "\u2264\u20D2",
          "nvlt": "\u003C\u20D2",
          "nvltrie": "\u22B4\u20D2",
          "nvrArr": "\u2903",
          "nvrtrie": "\u22B5\u20D2",
          "nvsim": "\u223C\u20D2",
          "nwarhk": "\u2923",
          "nwArr": "\u21D6",
          "nwarr": "\u2196",
          "nwarrow": "\u2196",
          "nwnear": "\u2927",
          "Oacute": "\u00D3",
          "oacute": "\u00F3",
          "oast": "\u229B",
          "ocir": "\u229A",
          "Ocirc": "\u00D4",
          "ocirc": "\u00F4",
          "Ocy": "\u041E",
          "ocy": "\u043E",
          "odash": "\u229D",
          "Odblac": "\u0150",
          "odblac": "\u0151",
          "odiv": "\u2A38",
          "odot": "\u2299",
          "odsold": "\u29BC",
          "OElig": "\u0152",
          "oelig": "\u0153",
          "ofcir": "\u29BF",
          "Ofr": "\uD835\uDD12",
          "ofr": "\uD835\uDD2C",
          "ogon": "\u02DB",
          "Ograve": "\u00D2",
          "ograve": "\u00F2",
          "ogt": "\u29C1",
          "ohbar": "\u29B5",
          "ohm": "\u03A9",
          "oint": "\u222E",
          "olarr": "\u21BA",
          "olcir": "\u29BE",
          "olcross": "\u29BB",
          "oline": "\u203E",
          "olt": "\u29C0",
          "Omacr": "\u014C",
          "omacr": "\u014D",
          "Omega": "\u03A9",
          "omega": "\u03C9",
          "Omicron": "\u039F",
          "omicron": "\u03BF",
          "omid": "\u29B6",
          "ominus": "\u2296",
          "Oopf": "\uD835\uDD46",
          "oopf": "\uD835\uDD60",
          "opar": "\u29B7",
          "OpenCurlyDoubleQuote": "\u201C",
          "OpenCurlyQuote": "\u2018",
          "operp": "\u29B9",
          "oplus": "\u2295",
          "Or": "\u2A54",
          "or": "\u2228",
          "orarr": "\u21BB",
          "ord": "\u2A5D",
          "order": "\u2134",
          "orderof": "\u2134",
          "ordf": "\u00AA",
          "ordm": "\u00BA",
          "origof": "\u22B6",
          "oror": "\u2A56",
          "orslope": "\u2A57",
          "orv": "\u2A5B",
          "oS": "\u24C8",
          "Oscr": "\uD835\uDCAA",
          "oscr": "\u2134",
          "Oslash": "\u00D8",
          "oslash": "\u00F8",
          "osol": "\u2298",
          "Otilde": "\u00D5",
          "otilde": "\u00F5",
          "Otimes": "\u2A37",
          "otimes": "\u2297",
          "otimesas": "\u2A36",
          "Ouml": "\u00D6",
          "ouml": "\u00F6",
          "ovbar": "\u233D",
          "OverBar": "\u203E",
          "OverBrace": "\u23DE",
          "OverBracket": "\u23B4",
          "OverParenthesis": "\u23DC",
          "par": "\u2225",
          "para": "\u00B6",
          "parallel": "\u2225",
          "parsim": "\u2AF3",
          "parsl": "\u2AFD",
          "part": "\u2202",
          "PartialD": "\u2202",
          "Pcy": "\u041F",
          "pcy": "\u043F",
          "percnt": "\u0025",
          "period": "\u002E",
          "permil": "\u2030",
          "perp": "\u22A5",
          "pertenk": "\u2031",
          "Pfr": "\uD835\uDD13",
          "pfr": "\uD835\uDD2D",
          "Phi": "\u03A6",
          "phi": "\u03C6",
          "phiv": "\u03D5",
          "phmmat": "\u2133",
          "phone": "\u260E",
          "Pi": "\u03A0",
          "pi": "\u03C0",
          "pitchfork": "\u22D4",
          "piv": "\u03D6",
          "planck": "\u210F",
          "planckh": "\u210E",
          "plankv": "\u210F",
          "plus": "\u002B",
          "plusacir": "\u2A23",
          "plusb": "\u229E",
          "pluscir": "\u2A22",
          "plusdo": "\u2214",
          "plusdu": "\u2A25",
          "pluse": "\u2A72",
          "PlusMinus": "\u00B1",
          "plusmn": "\u00B1",
          "plussim": "\u2A26",
          "plustwo": "\u2A27",
          "pm": "\u00B1",
          "Poincareplane": "\u210C",
          "pointint": "\u2A15",
          "Popf": "\u2119",
          "popf": "\uD835\uDD61",
          "pound": "\u00A3",
          "Pr": "\u2ABB",
          "pr": "\u227A",
          "prap": "\u2AB7",
          "prcue": "\u227C",
          "prE": "\u2AB3",
          "pre": "\u2AAF",
          "prec": "\u227A",
          "precapprox": "\u2AB7",
          "preccurlyeq": "\u227C",
          "Precedes": "\u227A",
          "PrecedesEqual": "\u2AAF",
          "PrecedesSlantEqual": "\u227C",
          "PrecedesTilde": "\u227E",
          "preceq": "\u2AAF",
          "precnapprox": "\u2AB9",
          "precneqq": "\u2AB5",
          "precnsim": "\u22E8",
          "precsim": "\u227E",
          "Prime": "\u2033",
          "prime": "\u2032",
          "primes": "\u2119",
          "prnap": "\u2AB9",
          "prnE": "\u2AB5",
          "prnsim": "\u22E8",
          "prod": "\u220F",
          "Product": "\u220F",
          "profalar": "\u232E",
          "profline": "\u2312",
          "profsurf": "\u2313",
          "prop": "\u221D",
          "Proportion": "\u2237",
          "Proportional": "\u221D",
          "propto": "\u221D",
          "prsim": "\u227E",
          "prurel": "\u22B0",
          "Pscr": "\uD835\uDCAB",
          "pscr": "\uD835\uDCC5",
          "Psi": "\u03A8",
          "psi": "\u03C8",
          "puncsp": "\u2008",
          "Qfr": "\uD835\uDD14",
          "qfr": "\uD835\uDD2E",
          "qint": "\u2A0C",
          "Qopf": "\u211A",
          "qopf": "\uD835\uDD62",
          "qprime": "\u2057",
          "Qscr": "\uD835\uDCAC",
          "qscr": "\uD835\uDCC6",
          "quaternions": "\u210D",
          "quatint": "\u2A16",
          "quest": "\u003F",
          "questeq": "\u225F",
          "QUOT": "\u0022",
          "quot": "\u0022",
          "rAarr": "\u21DB",
          "race": "\u223D\u0331",
          "Racute": "\u0154",
          "racute": "\u0155",
          "radic": "\u221A",
          "raemptyv": "\u29B3",
          "Rang": "\u27EB",
          "rang": "\u27E9",
          "rangd": "\u2992",
          "range": "\u29A5",
          "rangle": "\u27E9",
          "raquo": "\u00BB",
          "Rarr": "\u21A0",
          "rArr": "\u21D2",
          "rarr": "\u2192",
          "rarrap": "\u2975",
          "rarrb": "\u21E5",
          "rarrbfs": "\u2920",
          "rarrc": "\u2933",
          "rarrfs": "\u291E",
          "rarrhk": "\u21AA",
          "rarrlp": "\u21AC",
          "rarrpl": "\u2945",
          "rarrsim": "\u2974",
          "Rarrtl": "\u2916",
          "rarrtl": "\u21A3",
          "rarrw": "\u219D",
          "rAtail": "\u291C",
          "ratail": "\u291A",
          "ratio": "\u2236",
          "rationals": "\u211A",
          "RBarr": "\u2910",
          "rBarr": "\u290F",
          "rbarr": "\u290D",
          "rbbrk": "\u2773",
          "rbrace": "\u007D",
          "rbrack": "\u005D",
          "rbrke": "\u298C",
          "rbrksld": "\u298E",
          "rbrkslu": "\u2990",
          "Rcaron": "\u0158",
          "rcaron": "\u0159",
          "Rcedil": "\u0156",
          "rcedil": "\u0157",
          "rceil": "\u2309",
          "rcub": "\u007D",
          "Rcy": "\u0420",
          "rcy": "\u0440",
          "rdca": "\u2937",
          "rdldhar": "\u2969",
          "rdquo": "\u201D",
          "rdquor": "\u201D",
          "rdsh": "\u21B3",
          "Re": "\u211C",
          "real": "\u211C",
          "realine": "\u211B",
          "realpart": "\u211C",
          "reals": "\u211D",
          "rect": "\u25AD",
          "REG": "\u00AE",
          "reg": "\u00AE",
          "ReverseElement": "\u220B",
          "ReverseEquilibrium": "\u21CB",
          "ReverseUpEquilibrium": "\u296F",
          "rfisht": "\u297D",
          "rfloor": "\u230B",
          "Rfr": "\u211C",
          "rfr": "\uD835\uDD2F",
          "rHar": "\u2964",
          "rhard": "\u21C1",
          "rharu": "\u21C0",
          "rharul": "\u296C",
          "Rho": "\u03A1",
          "rho": "\u03C1",
          "rhov": "\u03F1",
          "RightAngleBracket": "\u27E9",
          "RightArrow": "\u2192",
          "Rightarrow": "\u21D2",
          "rightarrow": "\u2192",
          "RightArrowBar": "\u21E5",
          "RightArrowLeftArrow": "\u21C4",
          "rightarrowtail": "\u21A3",
          "RightCeiling": "\u2309",
          "RightDoubleBracket": "\u27E7",
          "RightDownTeeVector": "\u295D",
          "RightDownVector": "\u21C2",
          "RightDownVectorBar": "\u2955",
          "RightFloor": "\u230B",
          "rightharpoondown": "\u21C1",
          "rightharpoonup": "\u21C0",
          "rightleftarrows": "\u21C4",
          "rightleftharpoons": "\u21CC",
          "rightrightarrows": "\u21C9",
          "rightsquigarrow": "\u219D",
          "RightTee": "\u22A2",
          "RightTeeArrow": "\u21A6",
          "RightTeeVector": "\u295B",
          "rightthreetimes": "\u22CC",
          "RightTriangle": "\u22B3",
          "RightTriangleBar": "\u29D0",
          "RightTriangleEqual": "\u22B5",
          "RightUpDownVector": "\u294F",
          "RightUpTeeVector": "\u295C",
          "RightUpVector": "\u21BE",
          "RightUpVectorBar": "\u2954",
          "RightVector": "\u21C0",
          "RightVectorBar": "\u2953",
          "ring": "\u02DA",
          "risingdotseq": "\u2253",
          "rlarr": "\u21C4",
          "rlhar": "\u21CC",
          "rlm": "\u200F",
          "rmoust": "\u23B1",
          "rmoustache": "\u23B1",
          "rnmid": "\u2AEE",
          "roang": "\u27ED",
          "roarr": "\u21FE",
          "robrk": "\u27E7",
          "ropar": "\u2986",
          "Ropf": "\u211D",
          "ropf": "\uD835\uDD63",
          "roplus": "\u2A2E",
          "rotimes": "\u2A35",
          "RoundImplies": "\u2970",
          "rpar": "\u0029",
          "rpargt": "\u2994",
          "rppolint": "\u2A12",
          "rrarr": "\u21C9",
          "Rrightarrow": "\u21DB",
          "rsaquo": "\u203A",
          "Rscr": "\u211B",
          "rscr": "\uD835\uDCC7",
          "Rsh": "\u21B1",
          "rsh": "\u21B1",
          "rsqb": "\u005D",
          "rsquo": "\u2019",
          "rsquor": "\u2019",
          "rthree": "\u22CC",
          "rtimes": "\u22CA",
          "rtri": "\u25B9",
          "rtrie": "\u22B5",
          "rtrif": "\u25B8",
          "rtriltri": "\u29CE",
          "RuleDelayed": "\u29F4",
          "ruluhar": "\u2968",
          "rx": "\u211E",
          "Sacute": "\u015A",
          "sacute": "\u015B",
          "sbquo": "\u201A",
          "Sc": "\u2ABC",
          "sc": "\u227B",
          "scap": "\u2AB8",
          "Scaron": "\u0160",
          "scaron": "\u0161",
          "sccue": "\u227D",
          "scE": "\u2AB4",
          "sce": "\u2AB0",
          "Scedil": "\u015E",
          "scedil": "\u015F",
          "Scirc": "\u015C",
          "scirc": "\u015D",
          "scnap": "\u2ABA",
          "scnE": "\u2AB6",
          "scnsim": "\u22E9",
          "scpolint": "\u2A13",
          "scsim": "\u227F",
          "Scy": "\u0421",
          "scy": "\u0441",
          "sdot": "\u22C5",
          "sdotb": "\u22A1",
          "sdote": "\u2A66",
          "searhk": "\u2925",
          "seArr": "\u21D8",
          "searr": "\u2198",
          "searrow": "\u2198",
          "sect": "\u00A7",
          "semi": "\u003B",
          "seswar": "\u2929",
          "setminus": "\u2216",
          "setmn": "\u2216",
          "sext": "\u2736",
          "Sfr": "\uD835\uDD16",
          "sfr": "\uD835\uDD30",
          "sfrown": "\u2322",
          "sharp": "\u266F",
          "SHCHcy": "\u0429",
          "shchcy": "\u0449",
          "SHcy": "\u0428",
          "shcy": "\u0448",
          "ShortDownArrow": "\u2193",
          "ShortLeftArrow": "\u2190",
          "shortmid": "\u2223",
          "shortparallel": "\u2225",
          "ShortRightArrow": "\u2192",
          "ShortUpArrow": "\u2191",
          "shy": "\u00AD",
          "Sigma": "\u03A3",
          "sigma": "\u03C3",
          "sigmaf": "\u03C2",
          "sigmav": "\u03C2",
          "sim": "\u223C",
          "simdot": "\u2A6A",
          "sime": "\u2243",
          "simeq": "\u2243",
          "simg": "\u2A9E",
          "simgE": "\u2AA0",
          "siml": "\u2A9D",
          "simlE": "\u2A9F",
          "simne": "\u2246",
          "simplus": "\u2A24",
          "simrarr": "\u2972",
          "slarr": "\u2190",
          "SmallCircle": "\u2218",
          "smallsetminus": "\u2216",
          "smashp": "\u2A33",
          "smeparsl": "\u29E4",
          "smid": "\u2223",
          "smile": "\u2323",
          "smt": "\u2AAA",
          "smte": "\u2AAC",
          "smtes": "\u2AAC\uFE00",
          "SOFTcy": "\u042C",
          "softcy": "\u044C",
          "sol": "\u002F",
          "solb": "\u29C4",
          "solbar": "\u233F",
          "Sopf": "\uD835\uDD4A",
          "sopf": "\uD835\uDD64",
          "spades": "\u2660",
          "spadesuit": "\u2660",
          "spar": "\u2225",
          "sqcap": "\u2293",
          "sqcaps": "\u2293\uFE00",
          "sqcup": "\u2294",
          "sqcups": "\u2294\uFE00",
          "Sqrt": "\u221A",
          "sqsub": "\u228F",
          "sqsube": "\u2291",
          "sqsubset": "\u228F",
          "sqsubseteq": "\u2291",
          "sqsup": "\u2290",
          "sqsupe": "\u2292",
          "sqsupset": "\u2290",
          "sqsupseteq": "\u2292",
          "squ": "\u25A1",
          "Square": "\u25A1",
          "square": "\u25A1",
          "SquareIntersection": "\u2293",
          "SquareSubset": "\u228F",
          "SquareSubsetEqual": "\u2291",
          "SquareSuperset": "\u2290",
          "SquareSupersetEqual": "\u2292",
          "SquareUnion": "\u2294",
          "squarf": "\u25AA",
          "squf": "\u25AA",
          "srarr": "\u2192",
          "Sscr": "\uD835\uDCAE",
          "sscr": "\uD835\uDCC8",
          "ssetmn": "\u2216",
          "ssmile": "\u2323",
          "sstarf": "\u22C6",
          "Star": "\u22C6",
          "star": "\u2606",
          "starf": "\u2605",
          "straightepsilon": "\u03F5",
          "straightphi": "\u03D5",
          "strns": "\u00AF",
          "Sub": "\u22D0",
          "sub": "\u2282",
          "subdot": "\u2ABD",
          "subE": "\u2AC5",
          "sube": "\u2286",
          "subedot": "\u2AC3",
          "submult": "\u2AC1",
          "subnE": "\u2ACB",
          "subne": "\u228A",
          "subplus": "\u2ABF",
          "subrarr": "\u2979",
          "Subset": "\u22D0",
          "subset": "\u2282",
          "subseteq": "\u2286",
          "subseteqq": "\u2AC5",
          "SubsetEqual": "\u2286",
          "subsetneq": "\u228A",
          "subsetneqq": "\u2ACB",
          "subsim": "\u2AC7",
          "subsub": "\u2AD5",
          "subsup": "\u2AD3",
          "succ": "\u227B",
          "succapprox": "\u2AB8",
          "succcurlyeq": "\u227D",
          "Succeeds": "\u227B",
          "SucceedsEqual": "\u2AB0",
          "SucceedsSlantEqual": "\u227D",
          "SucceedsTilde": "\u227F",
          "succeq": "\u2AB0",
          "succnapprox": "\u2ABA",
          "succneqq": "\u2AB6",
          "succnsim": "\u22E9",
          "succsim": "\u227F",
          "SuchThat": "\u220B",
          "Sum": "\u2211",
          "sum": "\u2211",
          "sung": "\u266A",
          "Sup": "\u22D1",
          "sup": "\u2283",
          "sup1": "\u00B9",
          "sup2": "\u00B2",
          "sup3": "\u00B3",
          "supdot": "\u2ABE",
          "supdsub": "\u2AD8",
          "supE": "\u2AC6",
          "supe": "\u2287",
          "supedot": "\u2AC4",
          "Superset": "\u2283",
          "SupersetEqual": "\u2287",
          "suphsol": "\u27C9",
          "suphsub": "\u2AD7",
          "suplarr": "\u297B",
          "supmult": "\u2AC2",
          "supnE": "\u2ACC",
          "supne": "\u228B",
          "supplus": "\u2AC0",
          "Supset": "\u22D1",
          "supset": "\u2283",
          "supseteq": "\u2287",
          "supseteqq": "\u2AC6",
          "supsetneq": "\u228B",
          "supsetneqq": "\u2ACC",
          "supsim": "\u2AC8",
          "supsub": "\u2AD4",
          "supsup": "\u2AD6",
          "swarhk": "\u2926",
          "swArr": "\u21D9",
          "swarr": "\u2199",
          "swarrow": "\u2199",
          "swnwar": "\u292A",
          "szlig": "\u00DF",
          "Tab": "\u0009",
          "target": "\u2316",
          "Tau": "\u03A4",
          "tau": "\u03C4",
          "tbrk": "\u23B4",
          "Tcaron": "\u0164",
          "tcaron": "\u0165",
          "Tcedil": "\u0162",
          "tcedil": "\u0163",
          "Tcy": "\u0422",
          "tcy": "\u0442",
          "tdot": "\u20DB",
          "telrec": "\u2315",
          "Tfr": "\uD835\uDD17",
          "tfr": "\uD835\uDD31",
          "there4": "\u2234",
          "Therefore": "\u2234",
          "therefore": "\u2234",
          "Theta": "\u0398",
          "theta": "\u03B8",
          "thetasym": "\u03D1",
          "thetav": "\u03D1",
          "thickapprox": "\u2248",
          "thicksim": "\u223C",
          "ThickSpace": "\u205F\u200A",
          "thinsp": "\u2009",
          "ThinSpace": "\u2009",
          "thkap": "\u2248",
          "thksim": "\u223C",
          "THORN": "\u00DE",
          "thorn": "\u00FE",
          "Tilde": "\u223C",
          "tilde": "\u02DC",
          "TildeEqual": "\u2243",
          "TildeFullEqual": "\u2245",
          "TildeTilde": "\u2248",
          "times": "\u00D7",
          "timesb": "\u22A0",
          "timesbar": "\u2A31",
          "timesd": "\u2A30",
          "tint": "\u222D",
          "toea": "\u2928",
          "top": "\u22A4",
          "topbot": "\u2336",
          "topcir": "\u2AF1",
          "Topf": "\uD835\uDD4B",
          "topf": "\uD835\uDD65",
          "topfork": "\u2ADA",
          "tosa": "\u2929",
          "tprime": "\u2034",
          "TRADE": "\u2122",
          "trade": "\u2122",
          "triangle": "\u25B5",
          "triangledown": "\u25BF",
          "triangleleft": "\u25C3",
          "trianglelefteq": "\u22B4",
          "triangleq": "\u225C",
          "triangleright": "\u25B9",
          "trianglerighteq": "\u22B5",
          "tridot": "\u25EC",
          "trie": "\u225C",
          "triminus": "\u2A3A",
          "TripleDot": "\u20DB",
          "triplus": "\u2A39",
          "trisb": "\u29CD",
          "tritime": "\u2A3B",
          "trpezium": "\u23E2",
          "Tscr": "\uD835\uDCAF",
          "tscr": "\uD835\uDCC9",
          "TScy": "\u0426",
          "tscy": "\u0446",
          "TSHcy": "\u040B",
          "tshcy": "\u045B",
          "Tstrok": "\u0166",
          "tstrok": "\u0167",
          "twixt": "\u226C",
          "twoheadleftarrow": "\u219E",
          "twoheadrightarrow": "\u21A0",
          "Uacute": "\u00DA",
          "uacute": "\u00FA",
          "Uarr": "\u219F",
          "uArr": "\u21D1",
          "uarr": "\u2191",
          "Uarrocir": "\u2949",
          "Ubrcy": "\u040E",
          "ubrcy": "\u045E",
          "Ubreve": "\u016C",
          "ubreve": "\u016D",
          "Ucirc": "\u00DB",
          "ucirc": "\u00FB",
          "Ucy": "\u0423",
          "ucy": "\u0443",
          "udarr": "\u21C5",
          "Udblac": "\u0170",
          "udblac": "\u0171",
          "udhar": "\u296E",
          "ufisht": "\u297E",
          "Ufr": "\uD835\uDD18",
          "ufr": "\uD835\uDD32",
          "Ugrave": "\u00D9",
          "ugrave": "\u00F9",
          "uHar": "\u2963",
          "uharl": "\u21BF",
          "uharr": "\u21BE",
          "uhblk": "\u2580",
          "ulcorn": "\u231C",
          "ulcorner": "\u231C",
          "ulcrop": "\u230F",
          "ultri": "\u25F8",
          "Umacr": "\u016A",
          "umacr": "\u016B",
          "uml": "\u00A8",
          "UnderBar": "\u005F",
          "UnderBrace": "\u23DF",
          "UnderBracket": "\u23B5",
          "UnderParenthesis": "\u23DD",
          "Union": "\u22C3",
          "UnionPlus": "\u228E",
          "Uogon": "\u0172",
          "uogon": "\u0173",
          "Uopf": "\uD835\uDD4C",
          "uopf": "\uD835\uDD66",
          "UpArrow": "\u2191",
          "Uparrow": "\u21D1",
          "uparrow": "\u2191",
          "UpArrowBar": "\u2912",
          "UpArrowDownArrow": "\u21C5",
          "UpDownArrow": "\u2195",
          "Updownarrow": "\u21D5",
          "updownarrow": "\u2195",
          "UpEquilibrium": "\u296E",
          "upharpoonleft": "\u21BF",
          "upharpoonright": "\u21BE",
          "uplus": "\u228E",
          "UpperLeftArrow": "\u2196",
          "UpperRightArrow": "\u2197",
          "Upsi": "\u03D2",
          "upsi": "\u03C5",
          "upsih": "\u03D2",
          "Upsilon": "\u03A5",
          "upsilon": "\u03C5",
          "UpTee": "\u22A5",
          "UpTeeArrow": "\u21A5",
          "upuparrows": "\u21C8",
          "urcorn": "\u231D",
          "urcorner": "\u231D",
          "urcrop": "\u230E",
          "Uring": "\u016E",
          "uring": "\u016F",
          "urtri": "\u25F9",
          "Uscr": "\uD835\uDCB0",
          "uscr": "\uD835\uDCCA",
          "utdot": "\u22F0",
          "Utilde": "\u0168",
          "utilde": "\u0169",
          "utri": "\u25B5",
          "utrif": "\u25B4",
          "uuarr": "\u21C8",
          "Uuml": "\u00DC",
          "uuml": "\u00FC",
          "uwangle": "\u29A7",
          "vangrt": "\u299C",
          "varepsilon": "\u03F5",
          "varkappa": "\u03F0",
          "varnothing": "\u2205",
          "varphi": "\u03D5",
          "varpi": "\u03D6",
          "varpropto": "\u221D",
          "vArr": "\u21D5",
          "varr": "\u2195",
          "varrho": "\u03F1",
          "varsigma": "\u03C2",
          "varsubsetneq": "\u228A\uFE00",
          "varsubsetneqq": "\u2ACB\uFE00",
          "varsupsetneq": "\u228B\uFE00",
          "varsupsetneqq": "\u2ACC\uFE00",
          "vartheta": "\u03D1",
          "vartriangleleft": "\u22B2",
          "vartriangleright": "\u22B3",
          "Vbar": "\u2AEB",
          "vBar": "\u2AE8",
          "vBarv": "\u2AE9",
          "Vcy": "\u0412",
          "vcy": "\u0432",
          "VDash": "\u22AB",
          "Vdash": "\u22A9",
          "vDash": "\u22A8",
          "vdash": "\u22A2",
          "Vdashl": "\u2AE6",
          "Vee": "\u22C1",
          "vee": "\u2228",
          "veebar": "\u22BB",
          "veeeq": "\u225A",
          "vellip": "\u22EE",
          "Verbar": "\u2016",
          "verbar": "\u007C",
          "Vert": "\u2016",
          "vert": "\u007C",
          "VerticalBar": "\u2223",
          "VerticalLine": "\u007C",
          "VerticalSeparator": "\u2758",
          "VerticalTilde": "\u2240",
          "VeryThinSpace": "\u200A",
          "Vfr": "\uD835\uDD19",
          "vfr": "\uD835\uDD33",
          "vltri": "\u22B2",
          "vnsub": "\u2282\u20D2",
          "vnsup": "\u2283\u20D2",
          "Vopf": "\uD835\uDD4D",
          "vopf": "\uD835\uDD67",
          "vprop": "\u221D",
          "vrtri": "\u22B3",
          "Vscr": "\uD835\uDCB1",
          "vscr": "\uD835\uDCCB",
          "vsubnE": "\u2ACB\uFE00",
          "vsubne": "\u228A\uFE00",
          "vsupnE": "\u2ACC\uFE00",
          "vsupne": "\u228B\uFE00",
          "Vvdash": "\u22AA",
          "vzigzag": "\u299A",
          "Wcirc": "\u0174",
          "wcirc": "\u0175",
          "wedbar": "\u2A5F",
          "Wedge": "\u22C0",
          "wedge": "\u2227",
          "wedgeq": "\u2259",
          "weierp": "\u2118",
          "Wfr": "\uD835\uDD1A",
          "wfr": "\uD835\uDD34",
          "Wopf": "\uD835\uDD4E",
          "wopf": "\uD835\uDD68",
          "wp": "\u2118",
          "wr": "\u2240",
          "wreath": "\u2240",
          "Wscr": "\uD835\uDCB2",
          "wscr": "\uD835\uDCCC",
          "xcap": "\u22C2",
          "xcirc": "\u25EF",
          "xcup": "\u22C3",
          "xdtri": "\u25BD",
          "Xfr": "\uD835\uDD1B",
          "xfr": "\uD835\uDD35",
          "xhArr": "\u27FA",
          "xharr": "\u27F7",
          "Xi": "\u039E",
          "xi": "\u03BE",
          "xlArr": "\u27F8",
          "xlarr": "\u27F5",
          "xmap": "\u27FC",
          "xnis": "\u22FB",
          "xodot": "\u2A00",
          "Xopf": "\uD835\uDD4F",
          "xopf": "\uD835\uDD69",
          "xoplus": "\u2A01",
          "xotime": "\u2A02",
          "xrArr": "\u27F9",
          "xrarr": "\u27F6",
          "Xscr": "\uD835\uDCB3",
          "xscr": "\uD835\uDCCD",
          "xsqcup": "\u2A06",
          "xuplus": "\u2A04",
          "xutri": "\u25B3",
          "xvee": "\u22C1",
          "xwedge": "\u22C0",
          "Yacute": "\u00DD",
          "yacute": "\u00FD",
          "YAcy": "\u042F",
          "yacy": "\u044F",
          "Ycirc": "\u0176",
          "ycirc": "\u0177",
          "Ycy": "\u042B",
          "ycy": "\u044B",
          "yen": "\u00A5",
          "Yfr": "\uD835\uDD1C",
          "yfr": "\uD835\uDD36",
          "YIcy": "\u0407",
          "yicy": "\u0457",
          "Yopf": "\uD835\uDD50",
          "yopf": "\uD835\uDD6A",
          "Yscr": "\uD835\uDCB4",
          "yscr": "\uD835\uDCCE",
          "YUcy": "\u042E",
          "yucy": "\u044E",
          "Yuml": "\u0178",
          "yuml": "\u00FF",
          "Zacute": "\u0179",
          "zacute": "\u017A",
          "Zcaron": "\u017D",
          "zcaron": "\u017E",
          "Zcy": "\u0417",
          "zcy": "\u0437",
          "Zdot": "\u017B",
          "zdot": "\u017C",
          "zeetrf": "\u2128",
          "ZeroWidthSpace": "\u200B",
          "Zeta": "\u0396",
          "zeta": "\u03B6",
          "Zfr": "\u2128",
          "zfr": "\uD835\uDD37",
          "ZHcy": "\u0416",
          "zhcy": "\u0436",
          "zigrarr": "\u21DD",
          "Zopf": "\u2124",
          "zopf": "\uD835\uDD6B",
          "Zscr": "\uD835\uDCB5",
          "zscr": "\uD835\uDCCF",
          "zwj": "\u200D",
          "zwnj": "\u200C"
        };
      }, {}],
      2: [function(require, module, exports) {
        'use strict';
        var html_blocks = {};
        ['article', 'aside', 'button', 'blockquote', 'body', 'canvas', 'caption', 'col', 'colgroup', 'dd', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'iframe', 'li', 'map', 'object', 'ol', 'output', 'p', 'pre', 'progress', 'script', 'section', 'style', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'tr', 'thead', 'ul', 'video'].forEach(function(name) {
          html_blocks[name] = true;
        });
        module.exports = html_blocks;
      }, {}],
      3: [function(require, module, exports) {
        'use strict';
        function replace(regex, options) {
          regex = regex.source;
          options = options || '';
          return function self(name, val) {
            if (!name) {
              return new RegExp(regex, options);
            }
            val = val.source;
            regex = regex.replace(name, val);
            return self;
          };
        }
        var attr_name = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;
        var unquoted = /[^"'=<>`\x00-\x20]+/;
        var single_quoted = /'[^']*'/;
        var double_quoted = /"[^"]*"/;
        var attr_value = replace(/(?:unquoted|single_quoted|double_quoted)/)('unquoted', unquoted)('single_quoted', single_quoted)('double_quoted', double_quoted)();
        var attribute = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)('attr_name', attr_name)('attr_value', attr_value)();
        var open_tag = replace(/<[A-Za-z][A-Za-z0-9\-]*attribute*\s*\/?>/)('attribute', attribute)();
        var close_tag = /<\/[A-Za-z][A-Za-z0-9\-]*\s*>/;
        var comment = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
        var processing = /<[?].*?[?]>/;
        var declaration = /<![A-Z]+\s+[^>]*>/;
        var cdata = /<!\[CDATA\[[\s\S]*?\]\]>/;
        var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)('open_tag', open_tag)('close_tag', close_tag)('comment', comment)('processing', processing)('declaration', declaration)('cdata', cdata)();
        module.exports.HTML_TAG_RE = HTML_TAG_RE;
      }, {}],
      4: [function(require, module, exports) {
        'use strict';
        module.exports = ['coap', 'doi', 'javascript', 'aaa', 'aaas', 'about', 'acap', 'cap', 'cid', 'crid', 'data', 'dav', 'dict', 'dns', 'file', 'ftp', 'geo', 'go', 'gopher', 'h323', 'http', 'https', 'iax', 'icap', 'im', 'imap', 'info', 'ipp', 'iris', 'iris.beep', 'iris.xpc', 'iris.xpcs', 'iris.lwz', 'ldap', 'mailto', 'mid', 'msrp', 'msrps', 'mtqp', 'mupdate', 'news', 'nfs', 'ni', 'nih', 'nntp', 'opaquelocktoken', 'pop', 'pres', 'rtsp', 'service', 'session', 'shttp', 'sieve', 'sip', 'sips', 'sms', 'snmp', 'soap.beep', 'soap.beeps', 'tag', 'tel', 'telnet', 'tftp', 'thismessage', 'tn3270', 'tip', 'tv', 'urn', 'vemmi', 'ws', 'wss', 'xcon', 'xcon-userid', 'xmlrpc.beep', 'xmlrpc.beeps', 'xmpp', 'z39.50r', 'z39.50s', 'adiumxtra', 'afp', 'afs', 'aim', 'apt', 'attachment', 'aw', 'beshare', 'bitcoin', 'bolo', 'callto', 'chrome', 'chrome-extension', 'com-eventbrite-attendee', 'content', 'cvs', 'dlna-playsingle', 'dlna-playcontainer', 'dtn', 'dvb', 'ed2k', 'facetime', 'feed', 'finger', 'fish', 'gg', 'git', 'gizmoproject', 'gtalk', 'hcp', 'icon', 'ipn', 'irc', 'irc6', 'ircs', 'itms', 'jar', 'jms', 'keyparc', 'lastfm', 'ldaps', 'magnet', 'maps', 'market', 'message', 'mms', 'ms-help', 'msnim', 'mumble', 'mvn', 'notes', 'oid', 'palm', 'paparazzi', 'platform', 'proxy', 'psyc', 'query', 'res', 'resource', 'rmi', 'rsync', 'rtmp', 'secondlife', 'sftp', 'sgn', 'skype', 'smb', 'soldat', 'spotify', 'ssh', 'steam', 'svn', 'teamspeak', 'things', 'udp', 'unreal', 'ut2004', 'ventrilo', 'view-source', 'webcal', 'wtai', 'wyciwyg', 'xfire', 'xri', 'ymsgr'];
      }, {}],
      5: [function(require, module, exports) {
        'use strict';
        function _class(obj) {
          return Object.prototype.toString.call(obj);
        }
        function isString(obj) {
          return _class(obj) === '[object String]';
        }
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        function has(object, key) {
          return _hasOwnProperty.call(object, key);
        }
        function assign(obj) {
          var sources = Array.prototype.slice.call(arguments, 1);
          sources.forEach(function(source) {
            if (!source) {
              return;
            }
            if (typeof source !== 'object') {
              throw new TypeError(source + 'must be object');
            }
            Object.keys(source).forEach(function(key) {
              obj[key] = source[key];
            });
          });
          return obj;
        }
        function arrayReplaceAt(src, pos, newElements) {
          return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
        }
        var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
        function unescapeMd(str) {
          if (str.indexOf('\\') < 0) {
            return str;
          }
          return str.replace(UNESCAPE_MD_RE, '$1');
        }
        function isValidEntityCode(c) {
          if (c >= 0xD800 && c <= 0xDFFF) {
            return false;
          }
          if (c >= 0xFDD0 && c <= 0xFDEF) {
            return false;
          }
          if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) {
            return false;
          }
          if (c >= 0x00 && c <= 0x08) {
            return false;
          }
          if (c === 0x0B) {
            return false;
          }
          if (c >= 0x0E && c <= 0x1F) {
            return false;
          }
          if (c >= 0x7F && c <= 0x9F) {
            return false;
          }
          if (c > 0x10FFFF) {
            return false;
          }
          return true;
        }
        function fromCodePoint(c) {
          if (c > 0xffff) {
            c -= 0x10000;
            var surrogate1 = 0xd800 + (c >> 10),
                surrogate2 = 0xdc00 + (c & 0x3ff);
            return String.fromCharCode(surrogate1, surrogate2);
          }
          return String.fromCharCode(c);
        }
        var NAMED_ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
        var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
        var entities = require('./entities');
        function replaceEntityPattern(match, name) {
          var code = 0;
          if (has(entities, name)) {
            return entities[name];
          } else if (name.charCodeAt(0) === 0x23 && DIGITAL_ENTITY_TEST_RE.test(name)) {
            code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
            if (isValidEntityCode(code)) {
              return fromCodePoint(code);
            }
          }
          return match;
        }
        function replaceEntities(str) {
          if (str.indexOf('&') < 0) {
            return str;
          }
          return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
        }
        var HTML_ESCAPE_TEST_RE = /[&<>"]/;
        var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
        var HTML_REPLACEMENTS = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;'
        };
        function replaceUnsafeChar(ch) {
          return HTML_REPLACEMENTS[ch];
        }
        function escapeHtml(str) {
          if (HTML_ESCAPE_TEST_RE.test(str)) {
            return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
          }
          return str;
        }
        var SURRORATE_TEST_RE = /[\uD800-\uDFFF]/;
        var SURRORATE_SEARCH_RE = /[\uD800-\uDFFF]/g;
        function replaceBadSurrogate(ch, pos, orig) {
          var code = ch.charCodeAt(0);
          if (code >= 0xD800 && code <= 0xDBFF) {
            if (pos >= orig.length - 1) {
              return '\uFFFD';
            }
            code = orig.charCodeAt(pos + 1);
            if (code < 0xDC00 || code > 0xDFFF) {
              return '\uFFFD';
            }
            return ch;
          }
          if (pos === 0) {
            return '\uFFFD';
          }
          code = orig.charCodeAt(pos - 1);
          if (code < 0xD800 || code > 0xDBFF) {
            return '\uFFFD';
          }
          return ch;
        }
        function fixBrokenSurrogates(str) {
          if (!SURRORATE_TEST_RE.test(str)) {
            return str;
          }
          return str.replace(SURRORATE_SEARCH_RE, replaceBadSurrogate);
        }
        function normalizeLink(url) {
          var normalized = replaceEntities(url);
          try {
            normalized = decodeURI(normalized);
          } catch (__) {}
          try {
            return encodeURI(fixBrokenSurrogates(normalized));
          } catch (__) {
            return '';
          }
        }
        var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
        function escapeRE(str) {
          return str.replace(REGEXP_ESCAPE_RE, '\\$&');
        }
        function isWhiteSpace(code) {
          if (code >= 0x2000 && code <= 0x200A) {
            return true;
          }
          switch (code) {
            case 0x09:
            case 0x0A:
            case 0x0D:
            case 0x0C:
            case 0x20:
            case 0xA0:
            case 0x1680:
            case 0x202F:
            case 0x205F:
            case 0x3000:
              return true;
          }
          return false;
        }
        var BMP_PUNCT_RE = /[\x21-\x23\x25-\x2A\x2C-\x2F\x3A\x3B\x3F\x40\x5B-\x5D\x5F\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
        function isPunctChar(char) {
          return BMP_PUNCT_RE.test(char);
        }
        function isMdAsciiPunct(ch) {
          switch (ch) {
            case 0x21:
            case 0x22:
            case 0x23:
            case 0x24:
            case 0x25:
            case 0x26:
            case 0x27:
            case 0x28:
            case 0x29:
            case 0x2A:
            case 0x2B:
            case 0x2C:
            case 0x2D:
            case 0x2E:
            case 0x2F:
            case 0x3A:
            case 0x3B:
            case 0x3C:
            case 0x3D:
            case 0x3E:
            case 0x3F:
            case 0x40:
            case 0x5B:
            case 0x5C:
            case 0x5D:
            case 0x5E:
            case 0x5F:
            case 0x60:
            case 0x7B:
            case 0x7C:
            case 0x7D:
            case 0x7E:
              return true;
            default:
              return false;
          }
        }
        function normalizeReference(str) {
          return str.trim().replace(/\s+/g, ' ').toUpperCase();
        }
        exports.assign = assign;
        exports.isString = isString;
        exports.has = has;
        exports.unescapeMd = unescapeMd;
        exports.isValidEntityCode = isValidEntityCode;
        exports.fromCodePoint = fromCodePoint;
        exports.replaceEntities = replaceEntities;
        exports.escapeHtml = escapeHtml;
        exports.arrayReplaceAt = arrayReplaceAt;
        exports.normalizeLink = normalizeLink;
        exports.isWhiteSpace = isWhiteSpace;
        exports.isMdAsciiPunct = isMdAsciiPunct;
        exports.isPunctChar = isPunctChar;
        exports.escapeRE = escapeRE;
        exports.normalizeReference = normalizeReference;
        exports.fixBrokenSurrogates = fixBrokenSurrogates;
      }, {"./entities": 1}],
      6: [function(require, module, exports) {
        'use strict';
        exports.parseLinkLabel = require('./parse_link_label');
        exports.parseLinkDestination = require('./parse_link_destination');
        exports.parseLinkTitle = require('./parse_link_title');
      }, {
        "./parse_link_destination": 7,
        "./parse_link_label": 8,
        "./parse_link_title": 9
      }],
      7: [function(require, module, exports) {
        'use strict';
        var normalizeLink = require('../common/utils').normalizeLink;
        var unescapeMd = require('../common/utils').unescapeMd;
        module.exports = function parseLinkDestination(str, pos, max) {
          var code,
              level,
              lines = 0,
              start = pos,
              result = {
                ok: false,
                pos: 0,
                lines: 0,
                str: ''
              };
          if (str.charCodeAt(pos) === 0x3C) {
            pos++;
            while (pos < max) {
              code = str.charCodeAt(pos);
              if (code === 0x0A) {
                return result;
              }
              if (code === 0x3E) {
                result.pos = pos + 1;
                result.str = normalizeLink(unescapeMd(str.slice(start + 1, pos)));
                result.ok = true;
                return result;
              }
              if (code === 0x5C && pos + 1 < max) {
                pos += 2;
                continue;
              }
              pos++;
            }
            return result;
          }
          level = 0;
          while (pos < max) {
            code = str.charCodeAt(pos);
            if (code === 0x20) {
              break;
            }
            if (code < 0x20 || code === 0x7F) {
              break;
            }
            if (code === 0x5C && pos + 1 < max) {
              pos += 2;
              continue;
            }
            if (code === 0x28) {
              level++;
              if (level > 1) {
                break;
              }
            }
            if (code === 0x29) {
              level--;
              if (level < 0) {
                break;
              }
            }
            pos++;
          }
          if (start === pos) {
            return result;
          }
          result.str = normalizeLink(unescapeMd(str.slice(start, pos)));
          result.lines = lines;
          result.pos = pos;
          result.ok = true;
          return result;
        };
      }, {"../common/utils": 5}],
      8: [function(require, module, exports) {
        'use strict';
        module.exports = function parseLinkLabel(state, start, disableNested) {
          var level,
              found,
              marker,
              prevPos,
              labelEnd = -1,
              max = state.posMax,
              oldPos = state.pos;
          state.pos = start + 1;
          level = 1;
          while (state.pos < max) {
            marker = state.src.charCodeAt(state.pos);
            if (marker === 0x5D) {
              level--;
              if (level === 0) {
                found = true;
                break;
              }
            }
            prevPos = state.pos;
            state.md.inline.skipToken(state);
            if (marker === 0x5B) {
              if (prevPos === state.pos - 1) {
                level++;
              } else if (disableNested) {
                state.pos = oldPos;
                return -1;
              }
            }
          }
          if (found) {
            labelEnd = state.pos;
          }
          state.pos = oldPos;
          return labelEnd;
        };
      }, {}],
      9: [function(require, module, exports) {
        'use strict';
        var unescapeMd = require('../common/utils').unescapeMd;
        module.exports = function parseLinkTitle(str, pos, max) {
          var code,
              marker,
              lines = 0,
              start = pos,
              result = {
                ok: false,
                pos: 0,
                lines: 0,
                str: ''
              };
          if (pos >= max) {
            return result;
          }
          marker = str.charCodeAt(pos);
          if (marker !== 0x22 && marker !== 0x27 && marker !== 0x28) {
            return result;
          }
          pos++;
          if (marker === 0x28) {
            marker = 0x29;
          }
          while (pos < max) {
            code = str.charCodeAt(pos);
            if (code === marker) {
              result.pos = pos + 1;
              result.lines = lines;
              result.str = unescapeMd(str.slice(start + 1, pos));
              result.ok = true;
              return result;
            } else if (code === 0x0A) {
              lines++;
            } else if (code === 0x5C && pos + 1 < max) {
              pos++;
              if (str.charCodeAt(pos) === 0x0A) {
                lines++;
              }
            }
            pos++;
          }
          return result;
        };
      }, {"../common/utils": 5}],
      10: [function(require, module, exports) {
        'use strict';
        var utils = require('./common/utils');
        var helpers = require('./helpers');
        var Renderer = require('./renderer');
        var ParserCore = require('./parser_core');
        var ParserBlock = require('./parser_block');
        var ParserInline = require('./parser_inline');
        var config = {
          'default': require('./presets/default'),
          zero: require('./presets/zero'),
          commonmark: require('./presets/commonmark')
        };
        function MarkdownIt(presetName, options) {
          if (!(this instanceof MarkdownIt)) {
            return new MarkdownIt(presetName, options);
          }
          if (!options) {
            if (!utils.isString(presetName)) {
              options = presetName || {};
              presetName = 'default';
            }
          }
          this.inline = new ParserInline();
          this.block = new ParserBlock();
          this.core = new ParserCore();
          this.renderer = new Renderer();
          this.utils = utils;
          this.helpers = helpers;
          this.options = {};
          this.configure(presetName);
          if (options) {
            this.set(options);
          }
        }
        MarkdownIt.prototype.set = function(options) {
          utils.assign(this.options, options);
          return this;
        };
        MarkdownIt.prototype.configure = function(presets) {
          var self = this,
              presetName;
          if (utils.isString(presets)) {
            presetName = presets;
            presets = config[presetName];
            if (!presets) {
              throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
            }
          }
          if (!presets) {
            throw new Error('Wrong `markdown-it` preset, can\'t be empty');
          }
          if (presets.options) {
            self.set(presets.options);
          }
          if (presets.components) {
            Object.keys(presets.components).forEach(function(name) {
              if (presets.components[name].rules) {
                self[name].ruler.enableOnly(presets.components[name].rules);
              }
            });
          }
          return this;
        };
        MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
          var result = [];
          if (!Array.isArray(list)) {
            list = [list];
          }
          ['core', 'block', 'inline'].forEach(function(chain) {
            result = result.concat(this[chain].ruler.enable(list, true));
          }, this);
          var missed = list.filter(function(name) {
            return result.indexOf(name) < 0;
          });
          if (missed.length && !ignoreInvalid) {
            throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
          }
          return this;
        };
        MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
          var result = [];
          if (!Array.isArray(list)) {
            list = [list];
          }
          ['core', 'block', 'inline'].forEach(function(chain) {
            result = result.concat(this[chain].ruler.disable(list, true));
          }, this);
          var missed = list.filter(function(name) {
            return result.indexOf(name) < 0;
          });
          if (missed.length && !ignoreInvalid) {
            throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
          }
          return this;
        };
        MarkdownIt.prototype.use = function(plugin) {
          var args = [this].concat(Array.prototype.slice.call(arguments, 1));
          plugin.apply(plugin, args);
          return this;
        };
        MarkdownIt.prototype.parse = function(src, env) {
          var state = new this.core.State(src, this, env);
          this.core.process(state);
          return state.tokens;
        };
        MarkdownIt.prototype.render = function(src, env) {
          env = env || {};
          return this.renderer.render(this.parse(src, env), this.options, env);
        };
        MarkdownIt.prototype.parseInline = function(src, env) {
          var state = new this.core.State(src, this, env);
          state.inlineMode = true;
          this.core.process(state);
          return state.tokens;
        };
        MarkdownIt.prototype.renderInline = function(src, env) {
          env = env || {};
          return this.renderer.render(this.parseInline(src, env), this.options, env);
        };
        module.exports = MarkdownIt;
      }, {
        "./common/utils": 5,
        "./helpers": 6,
        "./parser_block": 11,
        "./parser_core": 12,
        "./parser_inline": 13,
        "./presets/commonmark": 14,
        "./presets/default": 15,
        "./presets/zero": 16,
        "./renderer": 17
      }],
      11: [function(require, module, exports) {
        'use strict';
        var Ruler = require('./ruler');
        var _rules = [['code', require('./rules_block/code')], ['fence', require('./rules_block/fence'), ['paragraph', 'reference', 'blockquote', 'list']], ['blockquote', require('./rules_block/blockquote'), ['paragraph', 'reference', 'blockquote', 'list']], ['hr', require('./rules_block/hr'), ['paragraph', 'reference', 'blockquote', 'list']], ['list', require('./rules_block/list'), ['paragraph', 'reference', 'blockquote']], ['reference', require('./rules_block/reference')], ['heading', require('./rules_block/heading'), ['paragraph', 'reference', 'blockquote']], ['lheading', require('./rules_block/lheading')], ['html_block', require('./rules_block/html_block'), ['paragraph', 'reference', 'blockquote']], ['table', require('./rules_block/table'), ['paragraph', 'reference']], ['paragraph', require('./rules_block/paragraph')]];
        function ParserBlock() {
          this.ruler = new Ruler();
          for (var i = 0; i < _rules.length; i++) {
            this.ruler.push(_rules[i][0], _rules[i][1], {alt: (_rules[i][2] || []).slice()});
          }
        }
        ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
          var ok,
              i,
              rules = this.ruler.getRules(''),
              len = rules.length,
              line = startLine,
              hasEmptyLines = false,
              maxNesting = state.md.options.maxNesting;
          while (line < endLine) {
            state.line = line = state.skipEmptyLines(line);
            if (line >= endLine) {
              break;
            }
            if (state.tShift[line] < state.blkIndent) {
              break;
            }
            if (state.level >= maxNesting) {
              state.line = endLine;
              break;
            }
            for (i = 0; i < len; i++) {
              ok = rules[i](state, line, endLine, false);
              if (ok) {
                break;
              }
            }
            state.tight = !hasEmptyLines;
            if (state.isEmpty(state.line - 1)) {
              hasEmptyLines = true;
            }
            line = state.line;
            if (line < endLine && state.isEmpty(line)) {
              hasEmptyLines = true;
              line++;
              if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) {
                break;
              }
              state.line = line;
            }
          }
        };
        ParserBlock.prototype.parse = function(src, md, env, outTokens) {
          var state;
          if (!src) {
            return [];
          }
          state = new this.State(src, md, env, outTokens);
          this.tokenize(state, state.line, state.lineMax);
        };
        ParserBlock.prototype.State = require('./rules_block/state_block');
        module.exports = ParserBlock;
      }, {
        "./ruler": 18,
        "./rules_block/blockquote": 19,
        "./rules_block/code": 20,
        "./rules_block/fence": 21,
        "./rules_block/heading": 22,
        "./rules_block/hr": 23,
        "./rules_block/html_block": 24,
        "./rules_block/lheading": 25,
        "./rules_block/list": 26,
        "./rules_block/paragraph": 27,
        "./rules_block/reference": 28,
        "./rules_block/state_block": 29,
        "./rules_block/table": 30
      }],
      12: [function(require, module, exports) {
        'use strict';
        var Ruler = require('./ruler');
        var _rules = [['normalize', require('./rules_core/normalize')], ['block', require('./rules_core/block')], ['inline', require('./rules_core/inline')], ['replacements', require('./rules_core/replacements')], ['smartquotes', require('./rules_core/smartquotes')], ['linkify', require('./rules_core/linkify')]];
        function Core() {
          this.ruler = new Ruler();
          for (var i = 0; i < _rules.length; i++) {
            this.ruler.push(_rules[i][0], _rules[i][1]);
          }
        }
        Core.prototype.process = function(state) {
          var i,
              l,
              rules;
          rules = this.ruler.getRules('');
          for (i = 0, l = rules.length; i < l; i++) {
            rules[i](state);
          }
        };
        Core.prototype.State = require('./rules_core/state_core');
        module.exports = Core;
      }, {
        "./ruler": 18,
        "./rules_core/block": 31,
        "./rules_core/inline": 32,
        "./rules_core/linkify": 33,
        "./rules_core/normalize": 34,
        "./rules_core/replacements": 35,
        "./rules_core/smartquotes": 36,
        "./rules_core/state_core": 37
      }],
      13: [function(require, module, exports) {
        'use strict';
        var Ruler = require('./ruler');
        var replaceEntities = require('./common/utils').replaceEntities;
        var _rules = [['text', require('./rules_inline/text')], ['newline', require('./rules_inline/newline')], ['escape', require('./rules_inline/escape')], ['backticks', require('./rules_inline/backticks')], ['strikethrough', require('./rules_inline/strikethrough')], ['emphasis', require('./rules_inline/emphasis')], ['link', require('./rules_inline/link')], ['image', require('./rules_inline/image')], ['autolink', require('./rules_inline/autolink')], ['html_inline', require('./rules_inline/html_inline')], ['entity', require('./rules_inline/entity')]];
        var BAD_PROTOCOLS = ['vbscript', 'javascript', 'file'];
        function validateLink(url) {
          var str = replaceEntities(url);
          str = str.trim().toLowerCase();
          if (str.indexOf(':') >= 0 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) >= 0) {
            return false;
          }
          return true;
        }
        function ParserInline() {
          this.validateLink = validateLink;
          this.ruler = new Ruler();
          for (var i = 0; i < _rules.length; i++) {
            this.ruler.push(_rules[i][0], _rules[i][1]);
          }
        }
        ParserInline.prototype.skipToken = function(state) {
          var i,
              cached_pos,
              pos = state.pos,
              rules = this.ruler.getRules(''),
              len = rules.length,
              maxNesting = state.md.options.maxNesting;
          if ((cached_pos = state.cacheGet(pos)) > 0) {
            state.pos = cached_pos;
            return;
          }
          if (state.level < maxNesting) {
            for (i = 0; i < len; i++) {
              if (rules[i](state, true)) {
                state.cacheSet(pos, state.pos);
                return;
              }
            }
          }
          state.pos++;
          state.cacheSet(pos, state.pos);
        };
        ParserInline.prototype.tokenize = function(state) {
          var ok,
              i,
              rules = this.ruler.getRules(''),
              len = rules.length,
              end = state.posMax,
              maxNesting = state.md.options.maxNesting;
          while (state.pos < end) {
            if (state.level < maxNesting) {
              for (i = 0; i < len; i++) {
                ok = rules[i](state, false);
                if (ok) {
                  break;
                }
              }
            }
            if (ok) {
              if (state.pos >= end) {
                break;
              }
              continue;
            }
            state.pending += state.src[state.pos++];
          }
          if (state.pending) {
            state.pushPending();
          }
        };
        ParserInline.prototype.parse = function(str, md, env, outTokens) {
          var state = new this.State(str, md, env, outTokens);
          this.tokenize(state);
        };
        ParserInline.prototype.State = require('./rules_inline/state_inline');
        module.exports = ParserInline;
      }, {
        "./common/utils": 5,
        "./ruler": 18,
        "./rules_inline/autolink": 38,
        "./rules_inline/backticks": 39,
        "./rules_inline/emphasis": 40,
        "./rules_inline/entity": 41,
        "./rules_inline/escape": 42,
        "./rules_inline/html_inline": 43,
        "./rules_inline/image": 44,
        "./rules_inline/link": 45,
        "./rules_inline/newline": 46,
        "./rules_inline/state_inline": 47,
        "./rules_inline/strikethrough": 48,
        "./rules_inline/text": 49
      }],
      14: [function(require, module, exports) {
        'use strict';
        module.exports = {
          options: {
            html: true,
            xhtmlOut: true,
            breaks: false,
            langPrefix: 'language-',
            linkify: false,
            typographer: false,
            quotes: '\u201c\u201d\u2018\u2019',
            highlight: null,
            maxNesting: 20
          },
          components: {
            core: {rules: ['normalize', 'block', 'inline']},
            block: {rules: ['blockquote', 'code', 'fence', 'heading', 'hr', 'html_block', 'lheading', 'list', 'reference', 'paragraph']},
            inline: {rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'html_inline', 'image', 'link', 'newline', 'text']}
          }
        };
      }, {}],
      15: [function(require, module, exports) {
        'use strict';
        module.exports = {
          options: {
            html: false,
            xhtmlOut: false,
            breaks: false,
            langPrefix: 'language-',
            linkify: false,
            typographer: false,
            quotes: '\u201c\u201d\u2018\u2019',
            highlight: null,
            maxNesting: 20
          },
          components: {
            core: {},
            block: {},
            inline: {}
          }
        };
      }, {}],
      16: [function(require, module, exports) {
        'use strict';
        module.exports = {
          options: {
            html: false,
            xhtmlOut: false,
            breaks: false,
            langPrefix: 'language-',
            linkify: false,
            typographer: false,
            quotes: '\u201c\u201d\u2018\u2019',
            highlight: null,
            maxNesting: 20
          },
          components: {
            core: {rules: ['normalize', 'block', 'inline']},
            block: {rules: ['paragraph']},
            inline: {rules: ['text']}
          }
        };
      }, {}],
      17: [function(require, module, exports) {
        'use strict';
        var assign = require('./common/utils').assign;
        var unescapeMd = require('./common/utils').unescapeMd;
        var replaceEntities = require('./common/utils').replaceEntities;
        var escapeHtml = require('./common/utils').escapeHtml;
        var rules = {};
        rules.blockquote_open = function() {
          return '<blockquote>\n';
        };
        rules.blockquote_close = function() {
          return '</blockquote>\n';
        };
        rules.code_block = function(tokens, idx) {
          return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
        };
        rules.code_inline = function(tokens, idx) {
          return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
        };
        rules.fence = function(tokens, idx, options) {
          var token = tokens[idx];
          var langClass = '';
          var langPrefix = options.langPrefix;
          var langName = '';
          var highlighted;
          if (token.params) {
            langName = escapeHtml(replaceEntities(unescapeMd(token.params.split(/\s+/g)[0])));
            langClass = ' class="' + langPrefix + langName + '"';
          }
          if (options.highlight) {
            highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
          } else {
            highlighted = escapeHtml(token.content);
          }
          return '<pre><code' + langClass + '>' + highlighted + '</code></pre>\n';
        };
        rules.heading_open = function(tokens, idx) {
          return '<h' + tokens[idx].hLevel + '>';
        };
        rules.heading_close = function(tokens, idx) {
          return '</h' + tokens[idx].hLevel + '>\n';
        };
        rules.hr = function(tokens, idx, options) {
          return (options.xhtmlOut ? '<hr />\n' : '<hr>\n');
        };
        rules.bullet_list_open = function() {
          return '<ul>\n';
        };
        rules.bullet_list_close = function() {
          return '</ul>\n';
        };
        rules.list_item_open = function(tokens, idx) {
          var next = tokens[idx + 1];
          if ((next.type === 'list_item_close') || (next.type === 'paragraph_open' && next.tight)) {
            return '<li>';
          }
          return '<li>\n';
        };
        rules.list_item_close = function() {
          return '</li>\n';
        };
        rules.ordered_list_open = function(tokens, idx) {
          if (tokens[idx].order > 1) {
            return '<ol start="' + tokens[idx].order + '">\n';
          }
          return '<ol>\n';
        };
        rules.ordered_list_close = function() {
          return '</ol>\n';
        };
        rules.paragraph_open = function(tokens, idx) {
          return tokens[idx].tight ? '' : '<p>';
        };
        rules.paragraph_close = function(tokens, idx) {
          if (tokens[idx].tight === true) {
            return tokens[idx + 1].type.slice(-5) === 'close' ? '' : '\n';
          }
          return '</p>\n';
        };
        rules.link_open = function(tokens, idx) {
          var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
          var target = tokens[idx].target ? (' target="' + escapeHtml(tokens[idx].target) + '"') : '';
          return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + '>';
        };
        rules.link_close = function() {
          return '</a>';
        };
        rules.image = function(tokens, idx, options, env, self) {
          var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
          var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
          var alt = ' alt="' + self.renderInlineAsText(tokens[idx].tokens, options, env) + '"';
          var suffix = options.xhtmlOut ? ' /' : '';
          return '<img' + src + alt + title + suffix + '>';
        };
        rules.table_open = function() {
          return '<table>\n';
        };
        rules.table_close = function() {
          return '</table>\n';
        };
        rules.thead_open = function() {
          return '<thead>\n';
        };
        rules.thead_close = function() {
          return '</thead>\n';
        };
        rules.tbody_open = function() {
          return '<tbody>\n';
        };
        rules.tbody_close = function() {
          return '</tbody>\n';
        };
        rules.tr_open = function() {
          return '<tr>';
        };
        rules.tr_close = function() {
          return '</tr>\n';
        };
        rules.th_open = function(tokens, idx) {
          if (tokens[idx].align) {
            return '<th style="text-align:' + tokens[idx].align + '">';
          }
          return '<th>';
        };
        rules.th_close = function() {
          return '</th>';
        };
        rules.td_open = function(tokens, idx) {
          if (tokens[idx].align) {
            return '<td style="text-align:' + tokens[idx].align + '">';
          }
          return '<td>';
        };
        rules.td_close = function() {
          return '</td>';
        };
        rules.strong_open = function() {
          return '<strong>';
        };
        rules.strong_close = function() {
          return '</strong>';
        };
        rules.em_open = function() {
          return '<em>';
        };
        rules.em_close = function() {
          return '</em>';
        };
        rules.s_open = function() {
          return '<s>';
        };
        rules.s_close = function() {
          return '</s>';
        };
        rules.hardbreak = function(tokens, idx, options) {
          return options.xhtmlOut ? '<br />\n' : '<br>\n';
        };
        rules.softbreak = function(tokens, idx, options) {
          return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
        };
        rules.text = function(tokens, idx) {
          return escapeHtml(tokens[idx].content);
        };
        rules.html_block = function(tokens, idx) {
          return tokens[idx].content;
        };
        rules.html_inline = function(tokens, idx) {
          return tokens[idx].content;
        };
        function Renderer() {
          this.rules = assign({}, rules);
        }
        Renderer.prototype.renderInline = function(tokens, options, env) {
          var result = '',
              _rules = this.rules;
          for (var i = 0,
              len = tokens.length; i < len; i++) {
            result += _rules[tokens[i].type](tokens, i, options, env, this);
          }
          return result;
        };
        Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
          var result = '',
              _rules = this.rules;
          for (var i = 0,
              len = tokens.length; i < len; i++) {
            if (tokens[i].type === 'text') {
              result += _rules.text(tokens, i, options, env, this);
            } else if (tokens[i].type === 'image') {
              result += this.renderInlineAsText(tokens[i].tokens, options, env);
            }
          }
          return result;
        };
        Renderer.prototype.render = function(tokens, options, env) {
          var i,
              len,
              result = '',
              _rules = this.rules;
          for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === 'inline') {
              result += this.renderInline(tokens[i].children, options, env);
            } else {
              result += _rules[tokens[i].type](tokens, i, options, env, this);
            }
          }
          return result;
        };
        module.exports = Renderer;
      }, {"./common/utils": 5}],
      18: [function(require, module, exports) {
        'use strict';
        function Ruler() {
          this.__rules__ = [];
          this.__cache__ = null;
        }
        Ruler.prototype.__find__ = function(name) {
          for (var i = 0; i < this.__rules__.length; i++) {
            if (this.__rules__[i].name === name) {
              return i;
            }
          }
          return -1;
        };
        Ruler.prototype.__compile__ = function() {
          var self = this;
          var chains = [''];
          self.__rules__.forEach(function(rule) {
            if (!rule.enabled) {
              return;
            }
            rule.alt.forEach(function(altName) {
              if (chains.indexOf(altName) < 0) {
                chains.push(altName);
              }
            });
          });
          self.__cache__ = {};
          chains.forEach(function(chain) {
            self.__cache__[chain] = [];
            self.__rules__.forEach(function(rule) {
              if (!rule.enabled) {
                return;
              }
              if (chain && rule.alt.indexOf(chain) < 0) {
                return;
              }
              self.__cache__[chain].push(rule.fn);
            });
          });
        };
        Ruler.prototype.at = function(name, fn, options) {
          var index = this.__find__(name);
          var opt = options || {};
          if (index === -1) {
            throw new Error('Parser rule not found: ' + name);
          }
          this.__rules__[index].fn = fn;
          this.__rules__[index].alt = opt.alt || [];
          this.__cache__ = null;
        };
        Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
          var index = this.__find__(beforeName);
          var opt = options || {};
          if (index === -1) {
            throw new Error('Parser rule not found: ' + beforeName);
          }
          this.__rules__.splice(index, 0, {
            name: ruleName,
            enabled: true,
            fn: fn,
            alt: opt.alt || []
          });
          this.__cache__ = null;
        };
        Ruler.prototype.after = function(afterName, ruleName, fn, options) {
          var index = this.__find__(afterName);
          var opt = options || {};
          if (index === -1) {
            throw new Error('Parser rule not found: ' + afterName);
          }
          this.__rules__.splice(index + 1, 0, {
            name: ruleName,
            enabled: true,
            fn: fn,
            alt: opt.alt || []
          });
          this.__cache__ = null;
        };
        Ruler.prototype.push = function(ruleName, fn, options) {
          var opt = options || {};
          this.__rules__.push({
            name: ruleName,
            enabled: true,
            fn: fn,
            alt: opt.alt || []
          });
          this.__cache__ = null;
        };
        Ruler.prototype.enable = function(list, ignoreInvalid) {
          if (!Array.isArray(list)) {
            list = [list];
          }
          var result = [];
          list.forEach(function(name) {
            var idx = this.__find__(name);
            if (idx < 0) {
              if (ignoreInvalid) {
                return;
              }
              throw new Error('Rules manager: invalid rule name ' + name);
            }
            this.__rules__[idx].enabled = true;
            result.push(name);
          }, this);
          this.__cache__ = null;
          return result;
        };
        Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
          if (!Array.isArray(list)) {
            list = [list];
          }
          this.__rules__.forEach(function(rule) {
            rule.enabled = false;
          });
          this.enable(list, ignoreInvalid);
        };
        Ruler.prototype.disable = function(list, ignoreInvalid) {
          if (!Array.isArray(list)) {
            list = [list];
          }
          var result = [];
          list.forEach(function(name) {
            var idx = this.__find__(name);
            if (idx < 0) {
              if (ignoreInvalid) {
                return;
              }
              throw new Error('Rules manager: invalid rule name ' + name);
            }
            this.__rules__[idx].enabled = false;
            result.push(name);
          }, this);
          this.__cache__ = null;
          return result;
        };
        Ruler.prototype.getRules = function(chainName) {
          if (this.__cache__ === null) {
            this.__compile__();
          }
          return this.__cache__[chainName] || [];
        };
        module.exports = Ruler;
      }, {}],
      19: [function(require, module, exports) {
        'use strict';
        module.exports = function blockquote(state, startLine, endLine, silent) {
          var nextLine,
              lastLineEmpty,
              oldTShift,
              oldBMarks,
              oldIndent,
              oldParentType,
              lines,
              terminatorRules,
              i,
              l,
              terminate,
              pos = state.bMarks[startLine] + state.tShift[startLine],
              max = state.eMarks[startLine];
          if (state.src.charCodeAt(pos++) !== 0x3E) {
            return false;
          }
          if (silent) {
            return true;
          }
          if (state.src.charCodeAt(pos) === 0x20) {
            pos++;
          }
          oldIndent = state.blkIndent;
          state.blkIndent = 0;
          oldBMarks = [state.bMarks[startLine]];
          state.bMarks[startLine] = pos;
          pos = pos < max ? state.skipSpaces(pos) : pos;
          lastLineEmpty = pos >= max;
          oldTShift = [state.tShift[startLine]];
          state.tShift[startLine] = pos - state.bMarks[startLine];
          terminatorRules = state.md.block.ruler.getRules('blockquote');
          for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            if (pos >= max) {
              break;
            }
            if (state.src.charCodeAt(pos++) === 0x3E) {
              if (state.src.charCodeAt(pos) === 0x20) {
                pos++;
              }
              oldBMarks.push(state.bMarks[nextLine]);
              state.bMarks[nextLine] = pos;
              pos = pos < max ? state.skipSpaces(pos) : pos;
              lastLineEmpty = pos >= max;
              oldTShift.push(state.tShift[nextLine]);
              state.tShift[nextLine] = pos - state.bMarks[nextLine];
              continue;
            }
            if (lastLineEmpty) {
              break;
            }
            terminate = false;
            for (i = 0, l = terminatorRules.length; i < l; i++) {
              if (terminatorRules[i](state, nextLine, endLine, true)) {
                terminate = true;
                break;
              }
            }
            if (terminate) {
              break;
            }
            oldBMarks.push(state.bMarks[nextLine]);
            oldTShift.push(state.tShift[nextLine]);
            state.tShift[nextLine] = -1337;
          }
          oldParentType = state.parentType;
          state.parentType = 'blockquote';
          state.tokens.push({
            type: 'blockquote_open',
            lines: lines = [startLine, 0],
            level: state.level++
          });
          state.md.block.tokenize(state, startLine, nextLine);
          state.tokens.push({
            type: 'blockquote_close',
            level: --state.level
          });
          state.parentType = oldParentType;
          lines[1] = state.line;
          for (i = 0; i < oldTShift.length; i++) {
            state.bMarks[i + startLine] = oldBMarks[i];
            state.tShift[i + startLine] = oldTShift[i];
          }
          state.blkIndent = oldIndent;
          return true;
        };
      }, {}],
      20: [function(require, module, exports) {
        'use strict';
        module.exports = function code(state, startLine, endLine) {
          var nextLine,
              last;
          if (state.tShift[startLine] - state.blkIndent < 4) {
            return false;
          }
          last = nextLine = startLine + 1;
          while (nextLine < endLine) {
            if (state.isEmpty(nextLine)) {
              nextLine++;
              continue;
            }
            if (state.tShift[nextLine] - state.blkIndent >= 4) {
              nextLine++;
              last = nextLine;
              continue;
            }
            break;
          }
          state.line = nextLine;
          state.tokens.push({
            type: 'code_block',
            content: state.getLines(startLine, last, 4 + state.blkIndent, true),
            lines: [startLine, state.line],
            level: state.level
          });
          return true;
        };
      }, {}],
      21: [function(require, module, exports) {
        'use strict';
        module.exports = function fence(state, startLine, endLine, silent) {
          var marker,
              len,
              params,
              nextLine,
              mem,
              haveEndMarker = false,
              pos = state.bMarks[startLine] + state.tShift[startLine],
              max = state.eMarks[startLine];
          if (pos + 3 > max) {
            return false;
          }
          marker = state.src.charCodeAt(pos);
          if (marker !== 0x7E && marker !== 0x60) {
            return false;
          }
          mem = pos;
          pos = state.skipChars(pos, marker);
          len = pos - mem;
          if (len < 3) {
            return false;
          }
          params = state.src.slice(pos, max).trim();
          if (params.indexOf('`') >= 0) {
            return false;
          }
          if (silent) {
            return true;
          }
          nextLine = startLine;
          for (; ; ) {
            nextLine++;
            if (nextLine >= endLine) {
              break;
            }
            pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            if (pos < max && state.tShift[nextLine] < state.blkIndent) {
              break;
            }
            if (state.src.charCodeAt(pos) !== marker) {
              continue;
            }
            if (state.tShift[nextLine] - state.blkIndent >= 4) {
              continue;
            }
            pos = state.skipChars(pos, marker);
            if (pos - mem < len) {
              continue;
            }
            pos = state.skipSpaces(pos);
            if (pos < max) {
              continue;
            }
            haveEndMarker = true;
            break;
          }
          len = state.tShift[startLine];
          state.line = nextLine + (haveEndMarker ? 1 : 0);
          state.tokens.push({
            type: 'fence',
            params: params,
            content: state.getLines(startLine + 1, nextLine, len, true),
            lines: [startLine, state.line],
            level: state.level
          });
          return true;
        };
      }, {}],
      22: [function(require, module, exports) {
        'use strict';
        module.exports = function heading(state, startLine, endLine, silent) {
          var ch,
              level,
              tmp,
              pos = state.bMarks[startLine] + state.tShift[startLine],
              max = state.eMarks[startLine];
          ch = state.src.charCodeAt(pos);
          if (ch !== 0x23 || pos >= max) {
            return false;
          }
          level = 1;
          ch = state.src.charCodeAt(++pos);
          while (ch === 0x23 && pos < max && level <= 6) {
            level++;
            ch = state.src.charCodeAt(++pos);
          }
          if (level > 6 || (pos < max && ch !== 0x20)) {
            return false;
          }
          if (silent) {
            return true;
          }
          max = state.skipCharsBack(max, 0x20, pos);
          tmp = state.skipCharsBack(max, 0x23, pos);
          if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20) {
            max = tmp;
          }
          state.line = startLine + 1;
          state.tokens.push({
            type: 'heading_open',
            hLevel: level,
            lines: [startLine, state.line],
            level: state.level
          });
          if (pos < max) {
            state.tokens.push({
              type: 'inline',
              content: state.src.slice(pos, max).trim(),
              level: state.level + 1,
              lines: [startLine, state.line],
              children: []
            });
          }
          state.tokens.push({
            type: 'heading_close',
            hLevel: level,
            level: state.level
          });
          return true;
        };
      }, {}],
      23: [function(require, module, exports) {
        'use strict';
        module.exports = function hr(state, startLine, endLine, silent) {
          var marker,
              cnt,
              ch,
              pos = state.bMarks[startLine] + state.tShift[startLine],
              max = state.eMarks[startLine];
          marker = state.src.charCodeAt(pos++);
          if (marker !== 0x2A && marker !== 0x2D && marker !== 0x5F) {
            return false;
          }
          cnt = 1;
          while (pos < max) {
            ch = state.src.charCodeAt(pos++);
            if (ch !== marker && ch !== 0x20) {
              return false;
            }
            if (ch === marker) {
              cnt++;
            }
          }
          if (cnt < 3) {
            return false;
          }
          if (silent) {
            return true;
          }
          state.line = startLine + 1;
          state.tokens.push({
            type: 'hr',
            lines: [startLine, state.line],
            level: state.level
          });
          return true;
        };
      }, {}],
      24: [function(require, module, exports) {
        'use strict';
        var block_names = require('../common/html_blocks');
        var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
        var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
        function isLetter(ch) {
          var lc = ch | 0x20;
          return (lc >= 0x61) && (lc <= 0x7a);
        }
        module.exports = function html_block(state, startLine, endLine, silent) {
          var ch,
              match,
              nextLine,
              pos = state.bMarks[startLine],
              max = state.eMarks[startLine],
              shift = state.tShift[startLine];
          pos += shift;
          if (!state.md.options.html) {
            return false;
          }
          if (shift > 3 || pos + 2 >= max) {
            return false;
          }
          if (state.src.charCodeAt(pos) !== 0x3C) {
            return false;
          }
          ch = state.src.charCodeAt(pos + 1);
          if (ch === 0x21 || ch === 0x3F) {
            if (silent) {
              return true;
            }
          } else if (ch === 0x2F || isLetter(ch)) {
            if (ch === 0x2F) {
              match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
              if (!match) {
                return false;
              }
            } else {
              match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
              if (!match) {
                return false;
              }
            }
            if (block_names[match[1].toLowerCase()] !== true) {
              return false;
            }
            if (silent) {
              return true;
            }
          } else {
            return false;
          }
          nextLine = startLine + 1;
          while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
            nextLine++;
          }
          state.line = nextLine;
          state.tokens.push({
            type: 'html_block',
            level: state.level,
            lines: [startLine, state.line],
            content: state.getLines(startLine, nextLine, 0, true)
          });
          return true;
        };
      }, {"../common/html_blocks": 2}],
      25: [function(require, module, exports) {
        'use strict';
        module.exports = function lheading(state, startLine, endLine) {
          var marker,
              pos,
              max,
              next = startLine + 1;
          if (next >= endLine) {
            return false;
          }
          if (state.tShift[next] < state.blkIndent) {
            return false;
          }
          if (state.tShift[next] - state.blkIndent > 3) {
            return false;
          }
          pos = state.bMarks[next] + state.tShift[next];
          max = state.eMarks[next];
          if (pos >= max) {
            return false;
          }
          marker = state.src.charCodeAt(pos);
          if (marker !== 0x2D && marker !== 0x3D) {
            return false;
          }
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);
          if (pos < max) {
            return false;
          }
          pos = state.bMarks[startLine] + state.tShift[startLine];
          state.line = next + 1;
          state.tokens.push({
            type: 'heading_open',
            hLevel: marker === 0x3D ? 1 : 2,
            lines: [startLine, state.line],
            level: state.level
          });
          state.tokens.push({
            type: 'inline',
            content: state.src.slice(pos, state.eMarks[startLine]).trim(),
            level: state.level + 1,
            lines: [startLine, state.line - 1],
            children: []
          });
          state.tokens.push({
            type: 'heading_close',
            hLevel: marker === 0x3D ? 1 : 2,
            level: state.level
          });
          return true;
        };
      }, {}],
      26: [function(require, module, exports) {
        'use strict';
        function skipBulletListMarker(state, startLine) {
          var marker,
              pos,
              max;
          pos = state.bMarks[startLine] + state.tShift[startLine];
          max = state.eMarks[startLine];
          marker = state.src.charCodeAt(pos++);
          if (marker !== 0x2A && marker !== 0x2D && marker !== 0x2B) {
            return -1;
          }
          if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
            return -1;
          }
          return pos;
        }
        function skipOrderedListMarker(state, startLine) {
          var ch,
              pos = state.bMarks[startLine] + state.tShift[startLine],
              max = state.eMarks[startLine];
          if (pos + 1 >= max) {
            return -1;
          }
          ch = state.src.charCodeAt(pos++);
          if (ch < 0x30 || ch > 0x39) {
            return -1;
          }
          for (; ; ) {
            if (pos >= max) {
              return -1;
            }
            ch = state.src.charCodeAt(pos++);
            if (ch >= 0x30 && ch <= 0x39) {
              continue;
            }
            if (ch === 0x29 || ch === 0x2e) {
              break;
            }
            return -1;
          }
          if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
            return -1;
          }
          return pos;
        }
        function markTightParagraphs(state, idx) {
          var i,
              l,
              level = state.level + 2;
          for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
            if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
              state.tokens[i + 2].tight = true;
              state.tokens[i].tight = true;
              i += 2;
            }
          }
        }
        module.exports = function list(state, startLine, endLine, silent) {
          var nextLine,
              indent,
              oldTShift,
              oldIndent,
              oldTight,
              oldParentType,
              start,
              posAfterMarker,
              max,
              indentAfterMarker,
              markerValue,
              markerCharCode,
              isOrdered,
              contentStart,
              listTokIdx,
              prevEmptyEnd,
              listLines,
              itemLines,
              tight = true,
              terminatorRules,
              i,
              l,
              terminate;
          if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
            isOrdered = true;
          } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
            isOrdered = false;
          } else {
            return false;
          }
          markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
          if (silent) {
            return true;
          }
          listTokIdx = state.tokens.length;
          if (isOrdered) {
            start = state.bMarks[startLine] + state.tShift[startLine];
            markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
            state.tokens.push({
              type: 'ordered_list_open',
              order: markerValue,
              lines: listLines = [startLine, 0],
              level: state.level++
            });
          } else {
            state.tokens.push({
              type: 'bullet_list_open',
              lines: listLines = [startLine, 0],
              level: state.level++
            });
          }
          nextLine = startLine;
          prevEmptyEnd = false;
          terminatorRules = state.md.block.ruler.getRules('list');
          while (nextLine < endLine) {
            contentStart = state.skipSpaces(posAfterMarker);
            max = state.eMarks[nextLine];
            if (contentStart >= max) {
              indentAfterMarker = 1;
            } else {
              indentAfterMarker = contentStart - posAfterMarker;
            }
            if (indentAfterMarker > 4) {
              indentAfterMarker = 1;
            }
            indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;
            state.tokens.push({
              type: 'list_item_open',
              lines: itemLines = [startLine, 0],
              level: state.level++
            });
            oldIndent = state.blkIndent;
            oldTight = state.tight;
            oldTShift = state.tShift[startLine];
            oldParentType = state.parentType;
            state.tShift[startLine] = contentStart - state.bMarks[startLine];
            state.blkIndent = indent;
            state.tight = true;
            state.parentType = 'list';
            state.md.block.tokenize(state, startLine, endLine, true);
            if (!state.tight || prevEmptyEnd) {
              tight = false;
            }
            prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);
            state.blkIndent = oldIndent;
            state.tShift[startLine] = oldTShift;
            state.tight = oldTight;
            state.parentType = oldParentType;
            state.tokens.push({
              type: 'list_item_close',
              level: --state.level
            });
            nextLine = startLine = state.line;
            itemLines[1] = nextLine;
            contentStart = state.bMarks[startLine];
            if (nextLine >= endLine) {
              break;
            }
            if (state.isEmpty(nextLine)) {
              break;
            }
            if (state.tShift[nextLine] < state.blkIndent) {
              break;
            }
            terminate = false;
            for (i = 0, l = terminatorRules.length; i < l; i++) {
              if (terminatorRules[i](state, nextLine, endLine, true)) {
                terminate = true;
                break;
              }
            }
            if (terminate) {
              break;
            }
            if (isOrdered) {
              posAfterMarker = skipOrderedListMarker(state, nextLine);
              if (posAfterMarker < 0) {
                break;
              }
            } else {
              posAfterMarker = skipBulletListMarker(state, nextLine);
              if (posAfterMarker < 0) {
                break;
              }
            }
            if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
              break;
            }
          }
          state.tokens.push({
            type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
            level: --state.level
          });
          listLines[1] = nextLine;
          state.line = nextLine;
          if (tight) {
            markTightParagraphs(state, listTokIdx);
          }
          return true;
        };
      }, {}],
      27: [function(require, module, exports) {
        'use strict';
        module.exports = function paragraph(state, startLine) {
          var endLine,
              content,
              terminate,
              i,
              l,
              nextLine = startLine + 1,
              terminatorRules;
          endLine = state.lineMax;
          if (nextLine < endLine && !state.isEmpty(nextLine)) {
            terminatorRules = state.md.block.ruler.getRules('paragraph');
            for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
              if (state.tShift[nextLine] - state.blkIndent > 3) {
                continue;
              }
              terminate = false;
              for (i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                  terminate = true;
                  break;
                }
              }
              if (terminate) {
                break;
              }
            }
          }
          content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
          state.line = nextLine;
          state.tokens.push({
            type: 'paragraph_open',
            tight: false,
            lines: [startLine, state.line],
            level: state.level
          });
          state.tokens.push({
            type: 'inline',
            content: content,
            level: state.level + 1,
            lines: [startLine, state.line],
            children: []
          });
          state.tokens.push({
            type: 'paragraph_close',
            tight: false,
            level: state.level
          });
          return true;
        };
      }, {}],
      28: [function(require, module, exports) {
        'use strict';
        var parseLinkDestination = require('../helpers/parse_link_destination');
        var parseLinkTitle = require('../helpers/parse_link_title');
        var normalizeReference = require('../common/utils').normalizeReference;
        module.exports = function reference(state, startLine, _endLine, silent) {
          var ch,
              destEndPos,
              destEndLineNo,
              endLine,
              href,
              i,
              l,
              label,
              labelEnd,
              res,
              start,
              str,
              terminate,
              terminatorRules,
              title,
              lines = 0,
              pos = state.bMarks[startLine] + state.tShift[startLine],
              max = state.eMarks[startLine],
              nextLine = startLine + 1;
          if (state.src.charCodeAt(pos) !== 0x5B) {
            return false;
          }
          while (++pos < max) {
            if (state.src.charCodeAt(pos) === 0x5D && state.src.charCodeAt(pos - 1) !== 0x5C) {
              if (pos + 1 === max) {
                return false;
              }
              if (state.src.charCodeAt(pos + 1) !== 0x3A) {
                return false;
              }
              break;
            }
          }
          endLine = state.lineMax;
          if (nextLine < endLine && !state.isEmpty(nextLine)) {
            terminatorRules = state.md.block.ruler.getRules('reference');
            for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
              if (state.tShift[nextLine] - state.blkIndent > 3) {
                continue;
              }
              terminate = false;
              for (i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                  terminate = true;
                  break;
                }
              }
              if (terminate) {
                break;
              }
            }
          }
          str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
          max = str.length;
          for (pos = 1; pos < max; pos++) {
            ch = str.charCodeAt(pos);
            if (ch === 0x5B) {
              return false;
            } else if (ch === 0x5D) {
              labelEnd = pos;
              break;
            } else if (ch === 0x0A) {
              lines++;
            } else if (ch === 0x5C) {
              pos++;
              if (pos < max && str.charCodeAt(pos) === 0x0A) {
                lines++;
              }
            }
          }
          if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A) {
            return false;
          }
          for (pos = labelEnd + 2; pos < max; pos++) {
            ch = str.charCodeAt(pos);
            if (ch === 0x0A) {
              lines++;
            } else if (ch === 0x20) {} else {
              break;
            }
          }
          res = parseLinkDestination(str, pos, max);
          if (!res.ok) {
            return false;
          }
          if (!state.md.inline.validateLink(res.str)) {
            return false;
          }
          href = res.str;
          pos = res.pos;
          lines += res.lines;
          destEndPos = pos;
          destEndLineNo = lines;
          start = pos;
          for (; pos < max; pos++) {
            ch = str.charCodeAt(pos);
            if (ch === 0x0A) {
              lines++;
            } else if (ch === 0x20) {} else {
              break;
            }
          }
          res = parseLinkTitle(str, pos, max);
          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            lines += res.lines;
          } else {
            title = '';
            pos = destEndPos;
            lines = destEndLineNo;
          }
          while (pos < max && str.charCodeAt(pos) === 0x20) {
            pos++;
          }
          if (pos < max && str.charCodeAt(pos) !== 0x0A) {
            return false;
          }
          if (silent) {
            return true;
          }
          label = normalizeReference(str.slice(1, labelEnd));
          if (typeof state.env.references === 'undefined') {
            state.env.references = {};
          }
          if (typeof state.env.references[label] === 'undefined') {
            state.env.references[label] = {
              title: title,
              href: href
            };
          }
          state.line = startLine + lines + 1;
          return true;
        };
      }, {
        "../common/utils": 5,
        "../helpers/parse_link_destination": 7,
        "../helpers/parse_link_title": 9
      }],
      29: [function(require, module, exports) {
        'use strict';
        function StateBlock(src, md, env, tokens) {
          var ch,
              s,
              start,
              pos,
              len,
              indent,
              indent_found;
          this.src = src;
          this.md = md;
          this.env = env;
          this.tokens = tokens;
          this.bMarks = [];
          this.eMarks = [];
          this.tShift = [];
          this.blkIndent = 0;
          this.line = 0;
          this.lineMax = 0;
          this.tight = false;
          this.parentType = 'root';
          this.ddIndent = -1;
          this.level = 0;
          this.result = '';
          s = this.src;
          indent = 0;
          indent_found = false;
          for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
            ch = s.charCodeAt(pos);
            if (!indent_found) {
              if (ch === 0x20) {
                indent++;
                continue;
              } else {
                indent_found = true;
              }
            }
            if (ch === 0x0A || pos === len - 1) {
              if (ch !== 0x0A) {
                pos++;
              }
              this.bMarks.push(start);
              this.eMarks.push(pos);
              this.tShift.push(indent);
              indent_found = false;
              indent = 0;
              start = pos + 1;
            }
          }
          this.bMarks.push(s.length);
          this.eMarks.push(s.length);
          this.tShift.push(0);
          this.lineMax = this.bMarks.length - 1;
        }
        StateBlock.prototype.isEmpty = function isEmpty(line) {
          return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
        };
        StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
          for (var max = this.lineMax; from < max; from++) {
            if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
              break;
            }
          }
          return from;
        };
        StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
          for (var max = this.src.length; pos < max; pos++) {
            if (this.src.charCodeAt(pos) !== 0x20) {
              break;
            }
          }
          return pos;
        };
        StateBlock.prototype.skipChars = function skipChars(pos, code) {
          for (var max = this.src.length; pos < max; pos++) {
            if (this.src.charCodeAt(pos) !== code) {
              break;
            }
          }
          return pos;
        };
        StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
          if (pos <= min) {
            return pos;
          }
          while (pos > min) {
            if (code !== this.src.charCodeAt(--pos)) {
              return pos + 1;
            }
          }
          return pos;
        };
        StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
          var i,
              first,
              last,
              queue,
              shift,
              line = begin;
          if (begin >= end) {
            return '';
          }
          if (line + 1 === end) {
            first = this.bMarks[line] + Math.min(this.tShift[line], indent);
            last = keepLastLF ? this.bMarks[end] : this.eMarks[end - 1];
            return this.src.slice(first, last);
          }
          queue = new Array(end - begin);
          for (i = 0; line < end; line++, i++) {
            shift = this.tShift[line];
            if (shift > indent) {
              shift = indent;
            }
            if (shift < 0) {
              shift = 0;
            }
            first = this.bMarks[line] + shift;
            if (line + 1 < end || keepLastLF) {
              last = this.eMarks[line] + 1;
            } else {
              last = this.eMarks[line];
            }
            queue[i] = this.src.slice(first, last);
          }
          return queue.join('');
        };
        module.exports = StateBlock;
      }, {}],
      30: [function(require, module, exports) {
        'use strict';
        function getLine(state, line) {
          var pos = state.bMarks[line] + state.blkIndent,
              max = state.eMarks[line];
          return state.src.substr(pos, max - pos);
        }
        function escapedSplit(str) {
          var result = [],
              pos = 0,
              max = str.length,
              ch,
              escapes = 0,
              lastPos = 0;
          ch = str.charCodeAt(pos);
          while (pos < max) {
            if (ch === 0x7c && (escapes % 2 === 0)) {
              result.push(str.substring(lastPos, pos));
              lastPos = pos + 1;
            } else if (ch === 0x5c) {
              escapes++;
            } else {
              escapes = 0;
            }
            ch = str.charCodeAt(++pos);
          }
          result.push(str.substring(lastPos));
          return result;
        }
        module.exports = function table(state, startLine, endLine, silent) {
          var ch,
              lineText,
              pos,
              i,
              nextLine,
              rows,
              aligns,
              t,
              tableLines,
              tbodyLines;
          if (startLine + 2 > endLine) {
            return false;
          }
          nextLine = startLine + 1;
          if (state.tShift[nextLine] < state.blkIndent) {
            return false;
          }
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          if (pos >= state.eMarks[nextLine]) {
            return false;
          }
          ch = state.src.charCodeAt(pos);
          if (ch !== 0x7C && ch !== 0x2D && ch !== 0x3A) {
            return false;
          }
          lineText = getLine(state, startLine + 1);
          if (!/^[-:| ]+$/.test(lineText)) {
            return false;
          }
          rows = lineText.split('|');
          if (rows.length < 2) {
            return false;
          }
          aligns = [];
          for (i = 0; i < rows.length; i++) {
            t = rows[i].trim();
            if (!t) {
              if (i === 0 || i === rows.length - 1) {
                continue;
              } else {
                return false;
              }
            }
            if (!/^:?-+:?$/.test(t)) {
              return false;
            }
            if (t.charCodeAt(t.length - 1) === 0x3A) {
              aligns.push(t.charCodeAt(0) === 0x3A ? 'center' : 'right');
            } else if (t.charCodeAt(0) === 0x3A) {
              aligns.push('left');
            } else {
              aligns.push('');
            }
          }
          lineText = getLine(state, startLine).trim();
          if (lineText.indexOf('|') === -1) {
            return false;
          }
          rows = escapedSplit(lineText.replace(/^\||\|$/g, ''));
          if (aligns.length !== rows.length) {
            return false;
          }
          if (silent) {
            return true;
          }
          state.tokens.push({
            type: 'table_open',
            lines: tableLines = [startLine, 0],
            level: state.level++
          });
          state.tokens.push({
            type: 'thead_open',
            lines: [startLine, startLine + 1],
            level: state.level++
          });
          state.tokens.push({
            type: 'tr_open',
            lines: [startLine, startLine + 1],
            level: state.level++
          });
          for (i = 0; i < rows.length; i++) {
            state.tokens.push({
              type: 'th_open',
              align: aligns[i],
              lines: [startLine, startLine + 1],
              level: state.level++
            });
            state.tokens.push({
              type: 'inline',
              content: rows[i].trim(),
              lines: [startLine, startLine + 1],
              level: state.level,
              children: []
            });
            state.tokens.push({
              type: 'th_close',
              level: --state.level
            });
          }
          state.tokens.push({
            type: 'tr_close',
            level: --state.level
          });
          state.tokens.push({
            type: 'thead_close',
            level: --state.level
          });
          state.tokens.push({
            type: 'tbody_open',
            lines: tbodyLines = [startLine + 2, 0],
            level: state.level++
          });
          for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
            if (state.tShift[nextLine] < state.blkIndent) {
              break;
            }
            lineText = getLine(state, nextLine).trim();
            if (lineText.indexOf('|') === -1) {
              break;
            }
            rows = escapedSplit(lineText.replace(/^\||\|$/g, ''));
            state.tokens.push({
              type: 'tr_open',
              level: state.level++
            });
            for (i = 0; i < rows.length; i++) {
              state.tokens.push({
                type: 'td_open',
                align: aligns[i],
                level: state.level++
              });
              state.tokens.push({
                type: 'inline',
                content: rows[i].trim(),
                level: state.level,
                children: []
              });
              state.tokens.push({
                type: 'td_close',
                level: --state.level
              });
            }
            state.tokens.push({
              type: 'tr_close',
              level: --state.level
            });
          }
          state.tokens.push({
            type: 'tbody_close',
            level: --state.level
          });
          state.tokens.push({
            type: 'table_close',
            level: --state.level
          });
          tableLines[1] = tbodyLines[1] = nextLine;
          state.line = nextLine;
          return true;
        };
      }, {}],
      31: [function(require, module, exports) {
        'use strict';
        module.exports = function block(state) {
          if (state.inlineMode) {
            state.tokens.push({
              type: 'inline',
              content: state.src,
              level: 0,
              lines: [0, 1],
              children: []
            });
          } else {
            state.md.block.parse(state.src, state.md, state.env, state.tokens);
          }
        };
      }, {}],
      32: [function(require, module, exports) {
        'use strict';
        module.exports = function inline(state) {
          var tokens = state.tokens,
              tok,
              i,
              l;
          for (i = 0, l = tokens.length; i < l; i++) {
            tok = tokens[i];
            if (tok.type === 'inline') {
              state.md.inline.parse(tok.content, state.md, state.env, tok.children);
            }
          }
        };
      }, {}],
      33: [function(require, module, exports) {
        'use strict';
        var Autolinker = require('autolinker');
        var arrayReplaceAt = require('../common/utils').arrayReplaceAt;
        var LINK_SCAN_RE = /www|@|\:\/\//;
        function isLinkOpen(str) {
          return /^<a[>\s]/i.test(str);
        }
        function isLinkClose(str) {
          return /^<\/a\s*>/i.test(str);
        }
        function createLinkifier() {
          var links = [];
          var autolinker = new Autolinker({
            stripPrefix: false,
            url: true,
            email: true,
            twitter: false,
            replaceFn: function(__, match) {
              switch (match.getType()) {
                case 'url':
                  links.push({
                    text: match.matchedText,
                    url: match.getUrl()
                  });
                  break;
                case 'email':
                  links.push({
                    text: match.matchedText,
                    url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
                  });
                  break;
              }
              return false;
            }
          });
          return {
            links: links,
            autolinker: autolinker
          };
        }
        module.exports = function linkify(state) {
          var i,
              j,
              l,
              tokens,
              token,
              text,
              nodes,
              ln,
              pos,
              level,
              htmlLinkLevel,
              blockTokens = state.tokens,
              linkifier = null,
              links,
              autolinker;
          if (!state.md.options.linkify) {
            return;
          }
          for (j = 0, l = blockTokens.length; j < l; j++) {
            if (blockTokens[j].type !== 'inline') {
              continue;
            }
            tokens = blockTokens[j].children;
            htmlLinkLevel = 0;
            for (i = tokens.length - 1; i >= 0; i--) {
              token = tokens[i];
              if (token.type === 'link_close') {
                i--;
                while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
                  i--;
                }
                continue;
              }
              if (token.type === 'html_inline') {
                if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
                  htmlLinkLevel--;
                }
                if (isLinkClose(token.content)) {
                  htmlLinkLevel++;
                }
              }
              if (htmlLinkLevel > 0) {
                continue;
              }
              if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {
                if (!linkifier) {
                  linkifier = createLinkifier();
                  links = linkifier.links;
                  autolinker = linkifier.autolinker;
                }
                text = token.content;
                links.length = 0;
                autolinker.link(text);
                if (!links.length) {
                  continue;
                }
                nodes = [];
                level = token.level;
                for (ln = 0; ln < links.length; ln++) {
                  if (!state.md.inline.validateLink(links[ln].url)) {
                    continue;
                  }
                  pos = text.indexOf(links[ln].text);
                  if (pos) {
                    level = level;
                    nodes.push({
                      type: 'text',
                      content: text.slice(0, pos),
                      level: level
                    });
                  }
                  nodes.push({
                    type: 'link_open',
                    href: links[ln].url,
                    target: '',
                    title: '',
                    level: level++
                  });
                  nodes.push({
                    type: 'text',
                    content: links[ln].text,
                    level: level
                  });
                  nodes.push({
                    type: 'link_close',
                    level: --level
                  });
                  text = text.slice(pos + links[ln].text.length);
                }
                if (text.length) {
                  nodes.push({
                    type: 'text',
                    content: text,
                    level: level
                  });
                }
                blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
              }
            }
          }
        };
      }, {
        "../common/utils": 5,
        "autolinker": 50
      }],
      34: [function(require, module, exports) {
        'use strict';
        var TABS_SCAN_RE = /[\n\t]/g;
        var NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
        var NULL_RE = /\u0000/g;
        module.exports = function inline(state) {
          var str,
              lineStart,
              lastTabPos;
          str = state.src.replace(NEWLINES_RE, '\n');
          str = str.replace(NULL_RE, '\uFFFD');
          if (str.indexOf('\t') >= 0) {
            lineStart = 0;
            lastTabPos = 0;
            str = str.replace(TABS_SCAN_RE, function(match, offset) {
              var result;
              if (str.charCodeAt(offset) === 0x0A) {
                lineStart = offset + 1;
                lastTabPos = 0;
                return match;
              }
              result = '    '.slice((offset - lineStart - lastTabPos) % 4);
              lastTabPos = offset - lineStart + 1;
              return result;
            });
          }
          state.src = str;
        };
      }, {}],
      35: [function(require, module, exports) {
        'use strict';
        var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
        var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
        var SCOPED_ABBR = {
          'c': '©',
          'r': '®',
          'p': '§',
          'tm': '™'
        };
        function replaceScopedAbbr(str) {
          if (str.indexOf('(') < 0) {
            return str;
          }
          return str.replace(SCOPED_ABBR_RE, function(match, name) {
            return SCOPED_ABBR[name.toLowerCase()];
          });
        }
        module.exports = function replace(state) {
          var i,
              token,
              text,
              inlineTokens,
              blkIdx;
          if (!state.md.options.typographer) {
            return;
          }
          for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
            if (state.tokens[blkIdx].type !== 'inline') {
              continue;
            }
            inlineTokens = state.tokens[blkIdx].children;
            for (i = inlineTokens.length - 1; i >= 0; i--) {
              token = inlineTokens[i];
              if (token.type === 'text') {
                text = token.content;
                text = replaceScopedAbbr(text);
                if (RARE_RE.test(text)) {
                  text = text.replace(/\+-/g, '±').replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..').replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',').replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2').replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2').replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
                }
                token.content = text;
              }
            }
          }
        };
      }, {}],
      36: [function(require, module, exports) {
        'use strict';
        var QUOTE_TEST_RE = /['"]/;
        var QUOTE_RE = /['"]/g;
        var PUNCT_RE = /[-\s()\[\]]/;
        var APOSTROPHE = '\u2019';
        function isLetter(str, pos) {
          if (pos < 0 || pos >= str.length) {
            return false;
          }
          return !PUNCT_RE.test(str[pos]);
        }
        function replaceAt(str, index, ch) {
          return str.substr(0, index) + ch + str.substr(index + 1);
        }
        module.exports = function smartquotes(state) {
          var i,
              token,
              text,
              t,
              pos,
              max,
              thisLevel,
              lastSpace,
              nextSpace,
              item,
              canOpen,
              canClose,
              j,
              isSingle,
              blkIdx,
              tokens,
              stack;
          if (!state.md.options.typographer) {
            return;
          }
          stack = [];
          for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
            if (state.tokens[blkIdx].type !== 'inline') {
              continue;
            }
            tokens = state.tokens[blkIdx].children;
            stack.length = 0;
            for (i = 0; i < tokens.length; i++) {
              token = tokens[i];
              if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) {
                continue;
              }
              thisLevel = tokens[i].level;
              for (j = stack.length - 1; j >= 0; j--) {
                if (stack[j].level <= thisLevel) {
                  break;
                }
              }
              stack.length = j + 1;
              text = token.content;
              pos = 0;
              max = text.length;
              OUTER: while (pos < max) {
                QUOTE_RE.lastIndex = pos;
                t = QUOTE_RE.exec(text);
                if (!t) {
                  break;
                }
                lastSpace = !isLetter(text, t.index - 1);
                pos = t.index + 1;
                isSingle = (t[0] === "'");
                nextSpace = !isLetter(text, pos);
                if (!nextSpace && !lastSpace) {
                  if (isSingle) {
                    token.content = replaceAt(token.content, t.index, APOSTROPHE);
                  }
                  continue;
                }
                canOpen = !nextSpace;
                canClose = !lastSpace;
                if (canClose) {
                  for (j = stack.length - 1; j >= 0; j--) {
                    item = stack[j];
                    if (stack[j].level < thisLevel) {
                      break;
                    }
                    if (item.single === isSingle && stack[j].level === thisLevel) {
                      item = stack[j];
                      if (isSingle) {
                        tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.md.options.quotes[2]);
                        token.content = replaceAt(token.content, t.index, state.md.options.quotes[3]);
                      } else {
                        tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.md.options.quotes[0]);
                        token.content = replaceAt(token.content, t.index, state.md.options.quotes[1]);
                      }
                      stack.length = j;
                      continue OUTER;
                    }
                  }
                }
                if (canOpen) {
                  stack.push({
                    token: i,
                    pos: t.index,
                    single: isSingle,
                    level: thisLevel
                  });
                } else if (canClose && isSingle) {
                  token.content = replaceAt(token.content, t.index, APOSTROPHE);
                }
              }
            }
          }
        };
      }, {}],
      37: [function(require, module, exports) {
        'use strict';
        module.exports = function StateCore(src, md, env) {
          this.src = src;
          this.env = env;
          this.tokens = [];
          this.inlineMode = false;
          this.md = md;
        };
      }, {}],
      38: [function(require, module, exports) {
        'use strict';
        var url_schemas = require('../common/url_schemas');
        var normalizeLink = require('../common/utils').normalizeLink;
        var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
        var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
        module.exports = function autolink(state, silent) {
          var tail,
              linkMatch,
              emailMatch,
              url,
              fullUrl,
              pos = state.pos;
          if (state.src.charCodeAt(pos) !== 0x3C) {
            return false;
          }
          tail = state.src.slice(pos);
          if (tail.indexOf('>') < 0) {
            return false;
          }
          linkMatch = tail.match(AUTOLINK_RE);
          if (linkMatch) {
            if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) {
              return false;
            }
            url = linkMatch[0].slice(1, -1);
            fullUrl = normalizeLink(url);
            if (!state.md.inline.validateLink(url)) {
              return false;
            }
            if (!silent) {
              state.push({
                type: 'link_open',
                href: fullUrl,
                target: '',
                level: state.level
              });
              state.push({
                type: 'text',
                content: url,
                level: state.level + 1
              });
              state.push({
                type: 'link_close',
                level: state.level
              });
            }
            state.pos += linkMatch[0].length;
            return true;
          }
          emailMatch = tail.match(EMAIL_RE);
          if (emailMatch) {
            url = emailMatch[0].slice(1, -1);
            fullUrl = normalizeLink('mailto:' + url);
            if (!state.md.inline.validateLink(fullUrl)) {
              return false;
            }
            if (!silent) {
              state.push({
                type: 'link_open',
                href: fullUrl,
                target: '',
                level: state.level
              });
              state.push({
                type: 'text',
                content: url,
                level: state.level + 1
              });
              state.push({
                type: 'link_close',
                level: state.level
              });
            }
            state.pos += emailMatch[0].length;
            return true;
          }
          return false;
        };
      }, {
        "../common/url_schemas": 4,
        "../common/utils": 5
      }],
      39: [function(require, module, exports) {
        'use strict';
        module.exports = function backtick(state, silent) {
          var start,
              max,
              marker,
              matchStart,
              matchEnd,
              pos = state.pos,
              ch = state.src.charCodeAt(pos);
          if (ch !== 0x60) {
            return false;
          }
          start = pos;
          pos++;
          max = state.posMax;
          while (pos < max && state.src.charCodeAt(pos) === 0x60) {
            pos++;
          }
          marker = state.src.slice(start, pos);
          matchStart = matchEnd = pos;
          while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
            matchEnd = matchStart + 1;
            while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60) {
              matchEnd++;
            }
            if (matchEnd - matchStart === marker.length) {
              if (!silent) {
                state.push({
                  type: 'code_inline',
                  content: state.src.slice(pos, matchStart).replace(/[ \n]+/g, ' ').trim(),
                  level: state.level
                });
              }
              state.pos = matchEnd;
              return true;
            }
          }
          if (!silent) {
            state.pending += marker;
          }
          state.pos += marker.length;
          return true;
        };
      }, {}],
      40: [function(require, module, exports) {
        'use strict';
        var isWhiteSpace = require('../common/utils').isWhiteSpace;
        var isPunctChar = require('../common/utils').isPunctChar;
        var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;
        function isAlphaNum(code) {
          return (code >= 0x30 && code <= 0x39) || (code >= 0x41 && code <= 0x5A) || (code >= 0x61 && code <= 0x7A);
        }
        function scanDelims(state, start) {
          var pos = start,
              lastChar,
              nextChar,
              count,
              isLastWhiteSpace,
              isLastPunctChar,
              isNextWhiteSpace,
              isNextPunctChar,
              can_open = true,
              can_close = true,
              max = state.posMax,
              marker = state.src.charCodeAt(start);
          lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
          while (pos < max && state.src.charCodeAt(pos) === marker) {
            pos++;
          }
          if (pos >= max) {
            can_open = false;
          }
          count = pos - start;
          nextChar = pos < max ? state.src.charCodeAt(pos) : -1;
          isLastPunctChar = lastChar >= 0 && (isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar)));
          isNextPunctChar = nextChar >= 0 && (isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar)));
          isLastWhiteSpace = lastChar >= 0 && isWhiteSpace(lastChar);
          isNextWhiteSpace = nextChar >= 0 && isWhiteSpace(nextChar);
          if (isNextWhiteSpace) {
            can_open = false;
          } else if (isNextPunctChar) {
            if (!(isLastWhiteSpace || isLastPunctChar || lastChar === -1)) {
              can_open = false;
            }
          }
          if (isLastWhiteSpace) {
            can_close = false;
          } else if (isLastPunctChar) {
            if (!(isNextWhiteSpace || isNextPunctChar || nextChar === -1)) {
              can_close = false;
            }
          }
          if (marker === 0x5F) {
            if (isAlphaNum(lastChar)) {
              can_open = false;
            }
            if (isAlphaNum(nextChar)) {
              can_close = false;
            }
          }
          return {
            can_open: can_open,
            can_close: can_close,
            delims: count
          };
        }
        module.exports = function emphasis(state, silent) {
          var startCount,
              count,
              found,
              oldCount,
              newCount,
              stack,
              res,
              max = state.posMax,
              start = state.pos,
              marker = state.src.charCodeAt(start);
          if (marker !== 0x5F && marker !== 0x2A) {
            return false;
          }
          if (silent) {
            return false;
          }
          res = scanDelims(state, start);
          startCount = res.delims;
          if (!res.can_open) {
            state.pos += startCount;
            state.pending += state.src.slice(start, state.pos);
            return true;
          }
          state.pos = start + startCount;
          stack = [startCount];
          while (state.pos < max) {
            if (state.src.charCodeAt(state.pos) === marker) {
              res = scanDelims(state, state.pos);
              count = res.delims;
              if (res.can_close) {
                oldCount = stack.pop();
                newCount = count;
                while (oldCount !== newCount) {
                  if (newCount < oldCount) {
                    stack.push(oldCount - newCount);
                    break;
                  }
                  newCount -= oldCount;
                  if (stack.length === 0) {
                    break;
                  }
                  state.pos += oldCount;
                  oldCount = stack.pop();
                }
                if (stack.length === 0) {
                  startCount = oldCount;
                  found = true;
                  break;
                }
                state.pos += count;
                continue;
              }
              if (res.can_open) {
                stack.push(count);
              }
              state.pos += count;
              continue;
            }
            state.md.inline.skipToken(state);
          }
          if (!found) {
            state.pos = start;
            return false;
          }
          state.posMax = state.pos;
          state.pos = start + startCount;
          for (count = startCount; count > 1; count -= 2) {
            state.push({
              type: 'strong_open',
              level: state.level++
            });
          }
          if (count % 2) {
            state.push({
              type: 'em_open',
              level: state.level++
            });
          }
          state.md.inline.tokenize(state);
          if (count % 2) {
            state.push({
              type: 'em_close',
              level: --state.level
            });
          }
          for (count = startCount; count > 1; count -= 2) {
            state.push({
              type: 'strong_close',
              level: --state.level
            });
          }
          state.pos = state.posMax + startCount;
          state.posMax = max;
          return true;
        };
      }, {"../common/utils": 5}],
      41: [function(require, module, exports) {
        'use strict';
        var entities = require('../common/entities');
        var has = require('../common/utils').has;
        var isValidEntityCode = require('../common/utils').isValidEntityCode;
        var fromCodePoint = require('../common/utils').fromCodePoint;
        var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
        var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
        module.exports = function entity(state, silent) {
          var ch,
              code,
              match,
              pos = state.pos,
              max = state.posMax;
          if (state.src.charCodeAt(pos) !== 0x26) {
            return false;
          }
          if (pos + 1 < max) {
            ch = state.src.charCodeAt(pos + 1);
            if (ch === 0x23) {
              match = state.src.slice(pos).match(DIGITAL_RE);
              if (match) {
                if (!silent) {
                  code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
                  state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
                }
                state.pos += match[0].length;
                return true;
              }
            } else {
              match = state.src.slice(pos).match(NAMED_RE);
              if (match) {
                if (has(entities, match[1])) {
                  if (!silent) {
                    state.pending += entities[match[1]];
                  }
                  state.pos += match[0].length;
                  return true;
                }
              }
            }
          }
          if (!silent) {
            state.pending += '&';
          }
          state.pos++;
          return true;
        };
      }, {
        "../common/entities": 1,
        "../common/utils": 5
      }],
      42: [function(require, module, exports) {
        'use strict';
        var ESCAPED = [];
        for (var i = 0; i < 256; i++) {
          ESCAPED.push(0);
        }
        '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function(ch) {
          ESCAPED[ch.charCodeAt(0)] = 1;
        });
        module.exports = function escape(state, silent) {
          var ch,
              pos = state.pos,
              max = state.posMax;
          if (state.src.charCodeAt(pos) !== 0x5C) {
            return false;
          }
          pos++;
          if (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (ch < 256 && ESCAPED[ch] !== 0) {
              if (!silent) {
                state.pending += state.src[pos];
              }
              state.pos += 2;
              return true;
            }
            if (ch === 0x0A) {
              if (!silent) {
                state.push({
                  type: 'hardbreak',
                  level: state.level
                });
              }
              pos++;
              while (pos < max && state.src.charCodeAt(pos) === 0x20) {
                pos++;
              }
              state.pos = pos;
              return true;
            }
          }
          if (!silent) {
            state.pending += '\\';
          }
          state.pos++;
          return true;
        };
      }, {}],
      43: [function(require, module, exports) {
        'use strict';
        var HTML_TAG_RE = require('../common/html_re').HTML_TAG_RE;
        function isLetter(ch) {
          var lc = ch | 0x20;
          return (lc >= 0x61) && (lc <= 0x7a);
        }
        module.exports = function html_inline(state, silent) {
          var ch,
              match,
              max,
              pos = state.pos;
          if (!state.md.options.html) {
            return false;
          }
          max = state.posMax;
          if (state.src.charCodeAt(pos) !== 0x3C || pos + 2 >= max) {
            return false;
          }
          ch = state.src.charCodeAt(pos + 1);
          if (ch !== 0x21 && ch !== 0x3F && ch !== 0x2F && !isLetter(ch)) {
            return false;
          }
          match = state.src.slice(pos).match(HTML_TAG_RE);
          if (!match) {
            return false;
          }
          if (!silent) {
            state.push({
              type: 'html_inline',
              content: state.src.slice(pos, pos + match[0].length),
              level: state.level
            });
          }
          state.pos += match[0].length;
          return true;
        };
      }, {"../common/html_re": 3}],
      44: [function(require, module, exports) {
        'use strict';
        var parseLinkLabel = require('../helpers/parse_link_label');
        var parseLinkDestination = require('../helpers/parse_link_destination');
        var parseLinkTitle = require('../helpers/parse_link_title');
        var normalizeReference = require('../common/utils').normalizeReference;
        module.exports = function image(state, silent) {
          var code,
              href,
              label,
              labelEnd,
              labelStart,
              pos,
              ref,
              res,
              title,
              tokens,
              start,
              oldPos = state.pos,
              max = state.posMax;
          if (state.src.charCodeAt(state.pos) !== 0x21) {
            return false;
          }
          if (state.src.charCodeAt(state.pos + 1) !== 0x5B) {
            return false;
          }
          labelStart = state.pos + 2;
          labelEnd = parseLinkLabel(state, state.pos + 1, false);
          if (labelEnd < 0) {
            return false;
          }
          pos = labelEnd + 1;
          if (pos < max && state.src.charCodeAt(pos) === 0x28) {
            pos++;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (code !== 0x20 && code !== 0x0A) {
                break;
              }
            }
            if (pos >= max) {
              return false;
            }
            start = pos;
            res = parseLinkDestination(state.src, pos, state.posMax);
            if (res.ok && state.md.inline.validateLink(res.str)) {
              href = res.str;
              pos = res.pos;
            } else {
              href = '';
            }
            start = pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (code !== 0x20 && code !== 0x0A) {
                break;
              }
            }
            res = parseLinkTitle(state.src, pos, state.posMax);
            if (pos < max && start !== pos && res.ok) {
              title = res.str;
              pos = res.pos;
              for (; pos < max; pos++) {
                code = state.src.charCodeAt(pos);
                if (code !== 0x20 && code !== 0x0A) {
                  break;
                }
              }
            } else {
              title = '';
            }
            if (pos >= max || state.src.charCodeAt(pos) !== 0x29) {
              state.pos = oldPos;
              return false;
            }
            pos++;
          } else {
            if (typeof state.env.references === 'undefined') {
              return false;
            }
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (code !== 0x20 && code !== 0x0A) {
                break;
              }
            }
            if (pos < max && state.src.charCodeAt(pos) === 0x5B) {
              start = pos + 1;
              pos = parseLinkLabel(state, pos);
              if (pos >= 0) {
                label = state.src.slice(start, pos++);
              } else {
                pos = labelEnd + 1;
              }
            } else {
              pos = labelEnd + 1;
            }
            if (!label) {
              label = state.src.slice(labelStart, labelEnd);
            }
            ref = state.env.references[normalizeReference(label)];
            if (!ref) {
              state.pos = oldPos;
              return false;
            }
            href = ref.href;
            title = ref.title;
          }
          if (!silent) {
            state.pos = labelStart;
            state.posMax = labelEnd;
            var newState = new state.md.inline.State(state.src.slice(labelStart, labelEnd), state.md, state.env, tokens = []);
            newState.md.inline.tokenize(newState);
            state.push({
              type: 'image',
              src: href,
              title: title,
              tokens: tokens,
              level: state.level
            });
          }
          state.pos = pos;
          state.posMax = max;
          return true;
        };
      }, {
        "../common/utils": 5,
        "../helpers/parse_link_destination": 7,
        "../helpers/parse_link_label": 8,
        "../helpers/parse_link_title": 9
      }],
      45: [function(require, module, exports) {
        'use strict';
        var parseLinkLabel = require('../helpers/parse_link_label');
        var parseLinkDestination = require('../helpers/parse_link_destination');
        var parseLinkTitle = require('../helpers/parse_link_title');
        var normalizeReference = require('../common/utils').normalizeReference;
        module.exports = function link(state, silent) {
          var code,
              href,
              label,
              labelEnd,
              labelStart,
              pos,
              res,
              ref,
              title,
              oldPos = state.pos,
              max = state.posMax,
              start = state.pos;
          if (state.src.charCodeAt(state.pos) !== 0x5B) {
            return false;
          }
          labelStart = state.pos + 1;
          labelEnd = parseLinkLabel(state, state.pos, true);
          if (labelEnd < 0) {
            return false;
          }
          pos = labelEnd + 1;
          if (pos < max && state.src.charCodeAt(pos) === 0x28) {
            pos++;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (code !== 0x20 && code !== 0x0A) {
                break;
              }
            }
            if (pos >= max) {
              return false;
            }
            start = pos;
            res = parseLinkDestination(state.src, pos, state.posMax);
            if (res.ok && state.md.inline.validateLink(res.str)) {
              href = res.str;
              pos = res.pos;
            } else {
              href = '';
            }
            start = pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (code !== 0x20 && code !== 0x0A) {
                break;
              }
            }
            res = parseLinkTitle(state.src, pos, state.posMax);
            if (pos < max && start !== pos && res.ok) {
              title = res.str;
              pos = res.pos;
              for (; pos < max; pos++) {
                code = state.src.charCodeAt(pos);
                if (code !== 0x20 && code !== 0x0A) {
                  break;
                }
              }
            } else {
              title = '';
            }
            if (pos >= max || state.src.charCodeAt(pos) !== 0x29) {
              state.pos = oldPos;
              return false;
            }
            pos++;
          } else {
            if (typeof state.env.references === 'undefined') {
              return false;
            }
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (code !== 0x20 && code !== 0x0A) {
                break;
              }
            }
            if (pos < max && state.src.charCodeAt(pos) === 0x5B) {
              start = pos + 1;
              pos = parseLinkLabel(state, pos);
              if (pos >= 0) {
                label = state.src.slice(start, pos++);
              } else {
                pos = labelEnd + 1;
              }
            } else {
              pos = labelEnd + 1;
            }
            if (!label) {
              label = state.src.slice(labelStart, labelEnd);
            }
            ref = state.env.references[normalizeReference(label)];
            if (!ref) {
              state.pos = oldPos;
              return false;
            }
            href = ref.href;
            title = ref.title;
          }
          if (!silent) {
            state.pos = labelStart;
            state.posMax = labelEnd;
            state.push({
              type: 'link_open',
              href: href,
              target: '',
              title: title,
              level: state.level++
            });
            state.md.inline.tokenize(state);
            state.push({
              type: 'link_close',
              level: --state.level
            });
          }
          state.pos = pos;
          state.posMax = max;
          return true;
        };
      }, {
        "../common/utils": 5,
        "../helpers/parse_link_destination": 7,
        "../helpers/parse_link_label": 8,
        "../helpers/parse_link_title": 9
      }],
      46: [function(require, module, exports) {
        'use strict';
        module.exports = function newline(state, silent) {
          var pmax,
              max,
              pos = state.pos;
          if (state.src.charCodeAt(pos) !== 0x0A) {
            return false;
          }
          pmax = state.pending.length - 1;
          max = state.posMax;
          if (!silent) {
            if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
              if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
                state.pending = state.pending.replace(/ +$/, '');
                state.push({
                  type: 'hardbreak',
                  level: state.level
                });
              } else {
                state.pending = state.pending.slice(0, -1);
                state.push({
                  type: 'softbreak',
                  level: state.level
                });
              }
            } else {
              state.push({
                type: 'softbreak',
                level: state.level
              });
            }
          }
          pos++;
          while (pos < max && state.src.charCodeAt(pos) === 0x20) {
            pos++;
          }
          state.pos = pos;
          return true;
        };
      }, {}],
      47: [function(require, module, exports) {
        'use strict';
        function StateInline(src, md, env, outTokens) {
          this.src = src;
          this.env = env;
          this.md = md;
          this.tokens = outTokens;
          this.pos = 0;
          this.posMax = this.src.length;
          this.level = 0;
          this.pending = '';
          this.pendingLevel = 0;
          this.cache = [];
        }
        StateInline.prototype.pushPending = function() {
          this.tokens.push({
            type: 'text',
            content: this.pending,
            level: this.pendingLevel
          });
          this.pending = '';
        };
        StateInline.prototype.push = function(token) {
          if (this.pending) {
            this.pushPending();
          }
          this.tokens.push(token);
          this.pendingLevel = this.level;
        };
        StateInline.prototype.cacheSet = function(key, val) {
          for (var i = this.cache.length; i <= key; i++) {
            this.cache.push(0);
          }
          this.cache[key] = val;
        };
        StateInline.prototype.cacheGet = function(key) {
          return key < this.cache.length ? this.cache[key] : 0;
        };
        module.exports = StateInline;
      }, {}],
      48: [function(require, module, exports) {
        'use strict';
        var isWhiteSpace = require('../common/utils').isWhiteSpace;
        var isPunctChar = require('../common/utils').isPunctChar;
        var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;
        function scanDelims(state, start) {
          var pos = start,
              lastChar,
              nextChar,
              count,
              isLastWhiteSpace,
              isLastPunctChar,
              isNextWhiteSpace,
              isNextPunctChar,
              can_open = true,
              can_close = true,
              max = state.posMax,
              marker = state.src.charCodeAt(start);
          lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
          while (pos < max && state.src.charCodeAt(pos) === marker) {
            pos++;
          }
          if (pos >= max) {
            can_open = false;
          }
          count = pos - start;
          nextChar = pos < max ? state.src.charCodeAt(pos) : -1;
          isLastPunctChar = lastChar >= 0 && (isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar)));
          isNextPunctChar = nextChar >= 0 && (isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar)));
          isLastWhiteSpace = lastChar >= 0 && isWhiteSpace(lastChar);
          isNextWhiteSpace = nextChar >= 0 && isWhiteSpace(nextChar);
          if (isNextWhiteSpace) {
            can_open = false;
          } else if (isNextPunctChar) {
            if (!(isLastWhiteSpace || isLastPunctChar || lastChar === -1)) {
              can_open = false;
            }
          }
          if (isLastWhiteSpace) {
            can_close = false;
          } else if (isLastPunctChar) {
            if (!(isNextWhiteSpace || isNextPunctChar || nextChar === -1)) {
              can_close = false;
            }
          }
          return {
            can_open: can_open,
            can_close: can_close,
            delims: count
          };
        }
        module.exports = function strikethrough(state, silent) {
          var startCount,
              count,
              tagCount,
              found,
              stack,
              res,
              max = state.posMax,
              start = state.pos,
              marker = state.src.charCodeAt(start);
          if (marker !== 0x7E) {
            return false;
          }
          if (silent) {
            return false;
          }
          res = scanDelims(state, start);
          startCount = res.delims;
          if (!res.can_open) {
            state.pos += startCount;
            state.pending += state.src.slice(start, state.pos);
            return true;
          }
          stack = Math.floor(startCount / 2);
          if (stack <= 0) {
            return false;
          }
          state.pos = start + startCount;
          while (state.pos < max) {
            if (state.src.charCodeAt(state.pos) === marker) {
              res = scanDelims(state, state.pos);
              count = res.delims;
              tagCount = Math.floor(count / 2);
              if (res.can_close) {
                if (tagCount >= stack) {
                  state.pos += count - 2;
                  found = true;
                  break;
                }
                stack -= tagCount;
                state.pos += count;
                continue;
              }
              if (res.can_open) {
                stack += tagCount;
              }
              state.pos += count;
              continue;
            }
            state.md.inline.skipToken(state);
          }
          if (!found) {
            state.pos = start;
            return false;
          }
          state.posMax = state.pos;
          state.pos = start + 2;
          state.push({
            type: 's_open',
            level: state.level++
          });
          state.md.inline.tokenize(state);
          state.push({
            type: 's_close',
            level: --state.level
          });
          state.pos = state.posMax + 2;
          state.posMax = max;
          return true;
        };
      }, {"../common/utils": 5}],
      49: [function(require, module, exports) {
        'use strict';
        function isTerminatorChar(ch) {
          switch (ch) {
            case 0x0A:
            case 0x21:
            case 0x23:
            case 0x24:
            case 0x25:
            case 0x26:
            case 0x2A:
            case 0x2B:
            case 0x2D:
            case 0x3A:
            case 0x3C:
            case 0x3D:
            case 0x3E:
            case 0x40:
            case 0x5B:
            case 0x5C:
            case 0x5D:
            case 0x5E:
            case 0x5F:
            case 0x60:
            case 0x7B:
            case 0x7D:
            case 0x7E:
              return true;
            default:
              return false;
          }
        }
        module.exports = function text(state, silent) {
          var pos = state.pos;
          while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
            pos++;
          }
          if (pos === state.pos) {
            return false;
          }
          if (!silent) {
            state.pending += state.src.slice(state.pos, pos);
          }
          state.pos = pos;
          return true;
        };
      }, {}],
      50: [function(require, module, exports) {
        (function(root, factory) {
          if (typeof define === 'function' && define.amd) {
            define([], function() {
              return (root.returnExportsGlobal = factory());
            });
          } else if (typeof exports === 'object') {
            module.exports = factory();
          } else {
            root['Autolinker'] = factory();
          }
        }(this, function() {
          var Autolinker = function(cfg) {
            Autolinker.Util.assign(this, cfg);
            this.matchValidator = new Autolinker.MatchValidator();
          };
          Autolinker.prototype = {
            constructor: Autolinker,
            urls: true,
            email: true,
            twitter: true,
            newWindow: true,
            stripPrefix: true,
            className: "",
            htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
            matcherRegex: (function() {
              var twitterRegex = /(^|[^\w])@(\w{1,15})/,
                  emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,
                  protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
                  wwwRegex = /(?:www\.)/,
                  domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
                  tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
                  urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
              return new RegExp(['(', twitterRegex.source, ')', '|', '(', emailRegex.source, domainNameRegex.source, tldRegex.source, ')', '|', '(', '(?:', '(', protocolRegex.source, domainNameRegex.source, ')', '|', '(?:', '(.?//)?', wwwRegex.source, domainNameRegex.source, ')', '|', '(?:', '(.?//)?', domainNameRegex.source, tldRegex.source, ')', ')', '(?:' + urlSuffixRegex.source + ')?', ')'].join(""), 'gi');
            })(),
            charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
            link: function(textOrHtml) {
              var me = this,
                  htmlParser = this.getHtmlParser(),
                  htmlCharacterEntitiesRegex = this.htmlCharacterEntitiesRegex,
                  anchorTagStackCount = 0,
                  resultHtml = [];
              htmlParser.parse(textOrHtml, {
                processHtmlNode: function(tagText, tagName, isClosingTag) {
                  if (tagName === 'a') {
                    if (!isClosingTag) {
                      anchorTagStackCount++;
                    } else {
                      anchorTagStackCount = Math.max(anchorTagStackCount - 1, 0);
                    }
                  }
                  resultHtml.push(tagText);
                },
                processTextNode: function(text) {
                  if (anchorTagStackCount === 0) {
                    var unescapedText = Autolinker.Util.splitAndCapture(text, htmlCharacterEntitiesRegex);
                    for (var i = 0,
                        len = unescapedText.length; i < len; i++) {
                      var textToProcess = unescapedText[i],
                          processedTextNode = me.processTextNode(textToProcess);
                      resultHtml.push(processedTextNode);
                    }
                  } else {
                    resultHtml.push(text);
                  }
                }
              });
              return resultHtml.join("");
            },
            getHtmlParser: function() {
              var htmlParser = this.htmlParser;
              if (!htmlParser) {
                htmlParser = this.htmlParser = new Autolinker.HtmlParser();
              }
              return htmlParser;
            },
            getTagBuilder: function() {
              var tagBuilder = this.tagBuilder;
              if (!tagBuilder) {
                tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder({
                  newWindow: this.newWindow,
                  truncate: this.truncate,
                  className: this.className
                });
              }
              return tagBuilder;
            },
            processTextNode: function(text) {
              var me = this;
              return text.replace(this.matcherRegex, function(matchStr, $1, $2, $3, $4, $5, $6, $7, $8) {
                var matchDescObj = me.processCandidateMatch(matchStr, $1, $2, $3, $4, $5, $6, $7, $8);
                if (!matchDescObj) {
                  return matchStr;
                } else {
                  var matchReturnVal = me.createMatchReturnVal(matchDescObj.match, matchDescObj.matchStr);
                  return matchDescObj.prefixStr + matchReturnVal + matchDescObj.suffixStr;
                }
              });
            },
            processCandidateMatch: function(matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch) {
              var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
                  match,
                  prefixStr = "",
                  suffixStr = "";
              if ((twitterMatch && !this.twitter) || (emailAddressMatch && !this.email) || (urlMatch && !this.urls) || !this.matchValidator.isValidMatch(urlMatch, protocolUrlMatch, protocolRelativeMatch)) {
                return null;
              }
              if (this.matchHasUnbalancedClosingParen(matchStr)) {
                matchStr = matchStr.substr(0, matchStr.length - 1);
                suffixStr = ")";
              }
              if (emailAddressMatch) {
                match = new Autolinker.match.Email({
                  matchedText: matchStr,
                  email: emailAddressMatch
                });
              } else if (twitterMatch) {
                if (twitterHandlePrefixWhitespaceChar) {
                  prefixStr = twitterHandlePrefixWhitespaceChar;
                  matchStr = matchStr.slice(1);
                }
                match = new Autolinker.match.Twitter({
                  matchedText: matchStr,
                  twitterHandle: twitterHandle
                });
              } else {
                if (protocolRelativeMatch) {
                  var charBeforeMatch = protocolRelativeMatch.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                  if (charBeforeMatch) {
                    prefixStr = charBeforeMatch;
                    matchStr = matchStr.slice(1);
                  }
                }
                match = new Autolinker.match.Url({
                  matchedText: matchStr,
                  url: matchStr,
                  protocolUrlMatch: !!protocolUrlMatch,
                  protocolRelativeMatch: !!protocolRelativeMatch,
                  stripPrefix: this.stripPrefix
                });
              }
              return {
                prefixStr: prefixStr,
                suffixStr: suffixStr,
                matchStr: matchStr,
                match: match
              };
            },
            matchHasUnbalancedClosingParen: function(matchStr) {
              var lastChar = matchStr.charAt(matchStr.length - 1);
              if (lastChar === ')') {
                var openParensMatch = matchStr.match(/\(/g),
                    closeParensMatch = matchStr.match(/\)/g),
                    numOpenParens = (openParensMatch && openParensMatch.length) || 0,
                    numCloseParens = (closeParensMatch && closeParensMatch.length) || 0;
                if (numOpenParens < numCloseParens) {
                  return true;
                }
              }
              return false;
            },
            createMatchReturnVal: function(match, matchStr) {
              var replaceFnResult;
              if (this.replaceFn) {
                replaceFnResult = this.replaceFn.call(this, this, match);
              }
              if (typeof replaceFnResult === 'string') {
                return replaceFnResult;
              } else if (replaceFnResult === false) {
                return matchStr;
              } else if (replaceFnResult instanceof Autolinker.HtmlTag) {
                return replaceFnResult.toString();
              } else {
                var tagBuilder = this.getTagBuilder(),
                    anchorTag = tagBuilder.build(match);
                return anchorTag.toString();
              }
            }
          };
          Autolinker.link = function(textOrHtml, options) {
            var autolinker = new Autolinker(options);
            return autolinker.link(textOrHtml);
          };
          Autolinker.match = {};
          Autolinker.Util = {
            abstractMethod: function() {
              throw "abstract";
            },
            assign: function(dest, src) {
              for (var prop in src) {
                if (src.hasOwnProperty(prop)) {
                  dest[prop] = src[prop];
                }
              }
              return dest;
            },
            extend: function(superclass, protoProps) {
              var superclassProto = superclass.prototype;
              var F = function() {};
              F.prototype = superclassProto;
              var subclass;
              if (protoProps.hasOwnProperty('constructor')) {
                subclass = protoProps.constructor;
              } else {
                subclass = function() {
                  superclassProto.constructor.apply(this, arguments);
                };
              }
              var subclassProto = subclass.prototype = new F();
              subclassProto.constructor = subclass;
              subclassProto.superclass = superclassProto;
              delete protoProps.constructor;
              Autolinker.Util.assign(subclassProto, protoProps);
              return subclass;
            },
            ellipsis: function(str, truncateLen, ellipsisChars) {
              if (str.length > truncateLen) {
                ellipsisChars = (ellipsisChars == null) ? '..' : ellipsisChars;
                str = str.substring(0, truncateLen - ellipsisChars.length) + ellipsisChars;
              }
              return str;
            },
            indexOf: function(arr, element) {
              if (Array.prototype.indexOf) {
                return arr.indexOf(element);
              } else {
                for (var i = 0,
                    len = arr.length; i < len; i++) {
                  if (arr[i] === element)
                    return i;
                }
                return -1;
              }
            },
            splitAndCapture: function(str, splitRegex) {
              if (!splitRegex.global)
                throw new Error("`splitRegex` must have the 'g' flag set");
              var result = [],
                  lastIdx = 0,
                  match;
              while (match = splitRegex.exec(str)) {
                result.push(str.substring(lastIdx, match.index));
                result.push(match[0]);
                lastIdx = match.index + match[0].length;
              }
              result.push(str.substring(lastIdx));
              return result;
            }
          };
          Autolinker.HtmlParser = Autolinker.Util.extend(Object, {
            htmlRegex: (function() {
              var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
                  attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
                  attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,
                  nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';
              return new RegExp(['(?:', '<(!DOCTYPE)', '(?:', '\\s+', '(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')', ')*', '>', ')', '|', '(?:', '<(/)?', '(' + tagNameRegex.source + ')', '(?:', '\\s+', nameEqualsValueRegex, ')*', '\\s*/?', '>', ')'].join(""), 'gi');
            })(),
            parse: function(html, options) {
              options = options || {};
              var processHtmlNodeVisitor = options.processHtmlNode || function() {},
                  processTextNodeVisitor = options.processTextNode || function() {},
                  htmlRegex = this.htmlRegex,
                  currentResult,
                  lastIndex = 0;
              while ((currentResult = htmlRegex.exec(html)) !== null) {
                var tagText = currentResult[0],
                    tagName = currentResult[1] || currentResult[3],
                    isClosingTag = !!currentResult[2],
                    inBetweenTagsText = html.substring(lastIndex, currentResult.index);
                if (inBetweenTagsText) {
                  processTextNodeVisitor(inBetweenTagsText);
                }
                processHtmlNodeVisitor(tagText, tagName.toLowerCase(), isClosingTag);
                lastIndex = currentResult.index + tagText.length;
              }
              if (lastIndex < html.length) {
                var text = html.substring(lastIndex);
                if (text) {
                  processTextNodeVisitor(text);
                }
              }
            }
          });
          Autolinker.HtmlTag = Autolinker.Util.extend(Object, {
            whitespaceRegex: /\s+/,
            constructor: function(cfg) {
              Autolinker.Util.assign(this, cfg);
              this.innerHtml = this.innerHtml || this.innerHTML;
            },
            setTagName: function(tagName) {
              this.tagName = tagName;
              return this;
            },
            getTagName: function() {
              return this.tagName || "";
            },
            setAttr: function(attrName, attrValue) {
              var tagAttrs = this.getAttrs();
              tagAttrs[attrName] = attrValue;
              return this;
            },
            getAttr: function(attrName) {
              return this.getAttrs()[attrName];
            },
            setAttrs: function(attrs) {
              var tagAttrs = this.getAttrs();
              Autolinker.Util.assign(tagAttrs, attrs);
              return this;
            },
            getAttrs: function() {
              return this.attrs || (this.attrs = {});
            },
            setClass: function(cssClass) {
              return this.setAttr('class', cssClass);
            },
            addClass: function(cssClass) {
              var classAttr = this.getClass(),
                  whitespaceRegex = this.whitespaceRegex,
                  indexOf = Autolinker.Util.indexOf,
                  classes = (!classAttr) ? [] : classAttr.split(whitespaceRegex),
                  newClasses = cssClass.split(whitespaceRegex),
                  newClass;
              while (newClass = newClasses.shift()) {
                if (indexOf(classes, newClass) === -1) {
                  classes.push(newClass);
                }
              }
              this.getAttrs()['class'] = classes.join(" ");
              return this;
            },
            removeClass: function(cssClass) {
              var classAttr = this.getClass(),
                  whitespaceRegex = this.whitespaceRegex,
                  indexOf = Autolinker.Util.indexOf,
                  classes = (!classAttr) ? [] : classAttr.split(whitespaceRegex),
                  removeClasses = cssClass.split(whitespaceRegex),
                  removeClass;
              while (classes.length && (removeClass = removeClasses.shift())) {
                var idx = indexOf(classes, removeClass);
                if (idx !== -1) {
                  classes.splice(idx, 1);
                }
              }
              this.getAttrs()['class'] = classes.join(" ");
              return this;
            },
            getClass: function() {
              return this.getAttrs()['class'] || "";
            },
            hasClass: function(cssClass) {
              return (' ' + this.getClass() + ' ').indexOf(' ' + cssClass + ' ') !== -1;
            },
            setInnerHtml: function(html) {
              this.innerHtml = html;
              return this;
            },
            getInnerHtml: function() {
              return this.innerHtml || "";
            },
            toString: function() {
              var tagName = this.getTagName(),
                  attrsStr = this.buildAttrsStr();
              attrsStr = (attrsStr) ? ' ' + attrsStr : '';
              return ['<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>'].join("");
            },
            buildAttrsStr: function() {
              if (!this.attrs)
                return "";
              var attrs = this.getAttrs(),
                  attrsArr = [];
              for (var prop in attrs) {
                if (attrs.hasOwnProperty(prop)) {
                  attrsArr.push(prop + '="' + attrs[prop] + '"');
                }
              }
              return attrsArr.join(" ");
            }
          });
          Autolinker.MatchValidator = Autolinker.Util.extend(Object, {
            invalidProtocolRelMatchRegex: /^[\w]\/\//,
            hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
            uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
            hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
            isValidMatch: function(urlMatch, protocolUrlMatch, protocolRelativeMatch) {
              if ((protocolUrlMatch && !this.isValidUriScheme(protocolUrlMatch)) || this.urlMatchDoesNotHaveProtocolOrDot(urlMatch, protocolUrlMatch) || this.urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch, protocolUrlMatch) || this.isInvalidProtocolRelativeMatch(protocolRelativeMatch)) {
                return false;
              }
              return true;
            },
            isValidUriScheme: function(uriSchemeMatch) {
              var uriScheme = uriSchemeMatch.match(this.uriSchemeRegex)[0];
              return (uriScheme !== 'javascript:' && uriScheme !== 'vbscript:');
            },
            urlMatchDoesNotHaveProtocolOrDot: function(urlMatch, protocolUrlMatch) {
              return (!!urlMatch && (!protocolUrlMatch || !this.hasFullProtocolRegex.test(protocolUrlMatch)) && urlMatch.indexOf('.') === -1);
            },
            urlMatchDoesNotHaveAtLeastOneWordChar: function(urlMatch, protocolUrlMatch) {
              if (urlMatch && protocolUrlMatch) {
                return !this.hasWordCharAfterProtocolRegex.test(urlMatch);
              } else {
                return false;
              }
            },
            isInvalidProtocolRelativeMatch: function(protocolRelativeMatch) {
              return (!!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test(protocolRelativeMatch));
            }
          });
          Autolinker.AnchorTagBuilder = Autolinker.Util.extend(Object, {
            constructor: function(cfg) {
              Autolinker.Util.assign(this, cfg);
            },
            build: function(match) {
              var tag = new Autolinker.HtmlTag({
                tagName: 'a',
                attrs: this.createAttrs(match.getType(), match.getAnchorHref()),
                innerHtml: this.processAnchorText(match.getAnchorText())
              });
              return tag;
            },
            createAttrs: function(matchType, anchorHref) {
              var attrs = {'href': anchorHref};
              var cssClass = this.createCssClass(matchType);
              if (cssClass) {
                attrs['class'] = cssClass;
              }
              if (this.newWindow) {
                attrs['target'] = "_blank";
              }
              return attrs;
            },
            createCssClass: function(matchType) {
              var className = this.className;
              if (!className)
                return "";
              else
                return className + " " + className + "-" + matchType;
            },
            processAnchorText: function(anchorText) {
              anchorText = this.doTruncate(anchorText);
              return anchorText;
            },
            doTruncate: function(anchorText) {
              return Autolinker.Util.ellipsis(anchorText, this.truncate || Number.POSITIVE_INFINITY);
            }
          });
          Autolinker.match.Match = Autolinker.Util.extend(Object, {
            constructor: function(cfg) {
              Autolinker.Util.assign(this, cfg);
            },
            getType: Autolinker.Util.abstractMethod,
            getMatchedText: function() {
              return this.matchedText;
            },
            getAnchorHref: Autolinker.Util.abstractMethod,
            getAnchorText: Autolinker.Util.abstractMethod
          });
          Autolinker.match.Email = Autolinker.Util.extend(Autolinker.match.Match, {
            getType: function() {
              return 'email';
            },
            getEmail: function() {
              return this.email;
            },
            getAnchorHref: function() {
              return 'mailto:' + this.email;
            },
            getAnchorText: function() {
              return this.email;
            }
          });
          Autolinker.match.Twitter = Autolinker.Util.extend(Autolinker.match.Match, {
            getType: function() {
              return 'twitter';
            },
            getTwitterHandle: function() {
              return this.twitterHandle;
            },
            getAnchorHref: function() {
              return 'https://twitter.com/' + this.twitterHandle;
            },
            getAnchorText: function() {
              return '@' + this.twitterHandle;
            }
          });
          Autolinker.match.Url = Autolinker.Util.extend(Autolinker.match.Match, {
            urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
            protocolRelativeRegex: /^\/\//,
            protocolPrepended: false,
            getType: function() {
              return 'url';
            },
            getUrl: function() {
              var url = this.url;
              if (!this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended) {
                url = this.url = 'http://' + url;
                this.protocolPrepended = true;
              }
              return url;
            },
            getAnchorHref: function() {
              var url = this.getUrl();
              return url.replace(/&amp;/g, '&');
            },
            getAnchorText: function() {
              var anchorText = this.getUrl();
              if (this.protocolRelativeMatch) {
                anchorText = this.stripProtocolRelativePrefix(anchorText);
              }
              if (this.stripPrefix) {
                anchorText = this.stripUrlPrefix(anchorText);
              }
              anchorText = this.removeTrailingSlash(anchorText);
              return anchorText;
            },
            stripUrlPrefix: function(text) {
              return text.replace(this.urlPrefixRegex, '');
            },
            stripProtocolRelativePrefix: function(text) {
              return text.replace(this.protocolRelativeRegex, '');
            },
            removeTrailingSlash: function(anchorText) {
              if (anchorText.charAt(anchorText.length - 1) === '/') {
                anchorText = anchorText.slice(0, -1);
              }
              return anchorText;
            }
          });
          return Autolinker;
        }));
      }, {}],
      51: [function(require, module, exports) {
        'use strict';
        module.exports = require('./lib');
      }, {"./lib/": 10}]
    }, {}, [51])(51);
  });
})(require('process'));
