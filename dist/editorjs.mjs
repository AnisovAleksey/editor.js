(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Re(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Kn(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(t, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[o];
      }
    });
  }), t;
}
function qe() {
}
Object.assign(qe, {
  default: qe,
  register: qe,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n) {
  const e = (this.document || this.ownerDocument).querySelectorAll(n);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(n) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(n))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    const i = o instanceof Node;
    t.appendChild(i ? o : document.createTextNode(o));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n) {
  n = arguments.length === 0 ? !0 : !!n;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), r = this.offsetTop - e.offsetTop < e.scrollTop, s = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c = r && !s;
  (r || s) && n && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && n && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (r || s || a || l) && !n && this.scrollIntoView(c);
});
window.requestIdleCallback = window.requestIdleCallback || function(n) {
  const e = Date.now();
  return setTimeout(function() {
    n({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(n) {
  clearTimeout(n);
};
let Xn = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Mo = /* @__PURE__ */ ((n) => (n.VERBOSE = "VERBOSE", n.INFO = "INFO", n.WARN = "WARN", n.ERROR = "ERROR", n))(Mo || {});
const y = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, Zn = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function Be(n, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const r = ["info", "log", "warn", "error"].includes(t), s = [];
  switch (Be.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!r || n)
        return;
      break;
  }
  o && s.push(o);
  const a = "Editor.js 2.31.6", l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  n && (r ? (s.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    r ? o ? console[t](`${e} %o`, ...s) : console[t](e, ...s) : console[t](e);
  } catch {
  }
}
Be.logLevel = "VERBOSE";
function qn(n) {
  Be.logLevel = n;
}
const I = Be.bind(window, !1), U = Be.bind(window, !0);
function re(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function O(n) {
  return re(n) === "function" || re(n) === "asyncfunction";
}
function P(n) {
  return re(n) === "object";
}
function J(n) {
  return re(n) === "string";
}
function Vn(n) {
  return re(n) === "boolean";
}
function bo(n) {
  return re(n) === "number";
}
function vo(n) {
  return re(n) === "undefined";
}
function Y(n) {
  return n ? Object.keys(n).length === 0 && n.constructor === Object : !0;
}
function Lo(n) {
  return n > 47 && n < 58 || // number keys
  n === 32 || n === 13 || // Space bar & return key(s)
  n === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  n > 64 && n < 91 || // letter keys
  n > 95 && n < 112 || // Numpad keys
  n > 185 && n < 193 || // ;=,-./` (in order)
  n > 218 && n < 223;
}
async function Gn(n, e = () => {
}, t = () => {
}) {
  async function o(i, r, s) {
    try {
      await i.function(i.data), await r(vo(i.data) ? {} : i.data);
    } catch {
      s(vo(i.data) ? {} : i.data);
    }
  }
  return n.reduce(async (i, r) => (await i, o(r, e, t)), Promise.resolve());
}
function No(n) {
  return Array.prototype.slice.call(n);
}
function Me(n, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => n.apply(t, o), e);
  };
}
function Qn(n) {
  return n.name.split(".").pop();
}
function Jn(n) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(n);
}
function ko(n, e, t) {
  let o;
  return (...i) => {
    const r = this, s = () => {
      o = null, t || n.apply(r, i);
    }, a = t && !o;
    window.clearTimeout(o), o = window.setTimeout(s, e), a && n.apply(r, i);
  };
}
function ot(n, e, t = void 0) {
  let o, i, r, s = null, a = 0;
  t || (t = {});
  const l = function() {
    a = t.leading === !1 ? 0 : Date.now(), s = null, r = n.apply(o, i), s || (o = i = null);
  };
  return function() {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return o = this, i = arguments, d <= 0 || d > e ? (s && (clearTimeout(s), s = null), a = c, r = n.apply(o, i), s || (o = i = null)) : !s && t.trailing !== !1 && (s = setTimeout(l, d)), r;
  };
}
function ei() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (n[e] = !0), n;
}
function nt(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function it(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (P(n) && P(t))
    for (const o in t)
      P(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), it(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return it(n, ...e);
}
function ti(n) {
  const e = ei();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function oi(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function ni() {
  return Xn(10);
}
function ii(n) {
  window.open(n, "_blank");
}
function ri(n = "") {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function rt(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && U(o, "warn");
}
function he(n, e, t) {
  const o = t.value ? "value" : "get", i = t[o], r = `#${e}Cache`;
  if (t[o] = function(...s) {
    return this[r] === void 0 && (this[r] = i.apply(this, ...s)), this[r];
  }, o === "get" && t.set) {
    const s = t.set;
    t.set = function(a) {
      delete n[r], s.apply(this, a);
    };
  }
  return t;
}
const Po = 650;
function De() {
  return window.matchMedia(`(max-width: ${Po}px)`).matches;
}
const st = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function si(n, e) {
  const t = Array.isArray(n) || P(n), o = Array.isArray(e) || P(e);
  return t || o ? JSON.stringify(n) === JSON.stringify(e) : n === e;
}
class h {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const i = document.createElement(e);
    if (Array.isArray(t)) {
      const r = t.filter((s) => s !== void 0);
      i.classList.add(...r);
    } else
      t && i.classList.add(t);
    for (const r in o)
      Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r]);
    return i;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return No(e.querySelectorAll(h.allInputsSelector)).reduce((t, o) => h.isNativeInput(o) || h.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...h.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns - it can be text Node or Element Node, so that caret will able to work with it
   *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let r = e[o];
      if (h.isSingleTag(r) && !h.isNativeInput(r) && !h.isLineBreakTag(r))
        if (r[i])
          r = r[i];
        else if (r.parentNode[i])
          r = r.parentNode[i];
        else
          return r.parentNode;
      return this.getDeepestNode(r, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return bo(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return bo(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (h.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = h.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, t) {
    let o;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("​", ""), t && (o = o.replace(new RegExp(t, "g"), "")), o.length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, t) {
    const o = [e];
    for (; o.length > 0; )
      if (e = o.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
          return !1;
        e.childNodes && o.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = h.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return h.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    J(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (i) => !h.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return h.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...h.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return J(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Returns the closest ancestor anchor (A tag) of the given element (including itself)
   * 
   * @param element - element to check
   * @returns {HTMLAnchorElement | null}
   */
  static getClosestAnchor(e) {
    return e.closest("a");
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, r = t.top + i, s = t.left + o;
    return {
      top: r,
      left: s,
      bottom: r + t.height,
      right: s + t.width
    };
  }
  /**
   * Find text node and offset by total content offset
   *
   * @param {Node} root - root node to start search from
   * @param {number} totalOffset - offset relative to the root node content
   * @returns {{node: Node | null, offset: number}} - node and offset inside node
   */
  static getNodeByOffset(e, t) {
    let o = 0, i = null;
    const r = document.createTreeWalker(
      e,
      NodeFilter.SHOW_TEXT,
      null
    );
    let s = r.nextNode();
    for (; s; ) {
      const c = s.textContent, d = c === null ? 0 : c.length;
      if (i = s, o + d >= t)
        break;
      o += d, s = r.nextNode();
    }
    if (!i)
      return {
        node: null,
        offset: 0
      };
    const a = i.textContent;
    if (a === null || a.length === 0)
      return {
        node: null,
        offset: 0
      };
    const l = Math.min(t - o, a.length);
    return {
      node: i,
      offset: l
    };
  }
}
function ai(n) {
  return !/[^\t\n\r ]/.test(n);
}
function li(n) {
  const e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), r = parseFloat(e.borderTopWidth), s = parseFloat(e.marginTop), a = t * 0.8, l = (o - t) / 2;
  return s + r + i + l + a;
}
function Ro(n) {
  n.dataset.empty = h.isEmpty(n) ? "true" : "false";
}
const ci = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": "",
    "Convert to": ""
  }
}, di = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, ui = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, hi = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, Do = {
  ui: ci,
  toolNames: di,
  tools: ui,
  blockTunes: hi
}, Ho = class de {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(e, t) {
    return de._t(e, t);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(e, t) {
    return de._t(e, t);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(e) {
    de.currentDictionary = e;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(e, t) {
    const o = de.getNamespace(e);
    return !o || !o[t] ? t : o[t];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(e) {
    return e.split(".").reduce((o, i) => !o || !Object.keys(o).length ? {} : o[i], de.currentDictionary);
  }
};
Ho.currentDictionary = Do;
let ut = Ho;
class jo extends Error {
}
class He {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (i) => {
      const r = t(i), s = this.subscribers[e].indexOf(o);
      return s !== -1 && this.subscribers[e].splice(s, 1), r;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    Y(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const r = i(o);
      return r !== void 0 ? r : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function G(n) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return n.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return n.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return n.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return n.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return n.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return n.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(t) {
      n.stretched = t;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return n.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return n.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(t, o) {
      return n.call(t, o);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return n.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(t) {
      return n.validate(t);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      n.dispatchChange();
    },
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    getActiveToolboxEntry() {
      return n.getActiveToolboxEntry();
    }
  });
}
class je {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, i = !1) {
    const r = ri("l"), s = {
      id: r,
      element: e,
      eventType: t,
      handler: o,
      options: i
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(s), e.addEventListener(t, o, i), r;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, i) {
    const r = this.findAll(e, t, o);
    r.forEach((s, a) => {
      const l = this.allListeners.indexOf(r[a]);
      l > -1 && (this.allListeners.splice(l, 1), s.element.removeEventListener(s.eventType, s.handler, s.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let i;
    const r = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = r.filter((s) => s.eventType === t && s.handler === o) : e && t ? i = r.filter((s) => s.eventType === t) : i = r, i;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}
class B {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new je(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, i, r, s = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, i, r, s)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === B)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}
class b {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? h.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(b.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!b.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return I("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return I("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
        const r = i.parentNode;
        r.removeChild(i), r.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), i = window.getSelection();
    return h.isNativeInput(e) ? h.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = b.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = b.range;
    if (e === null)
      return;
    const t = h.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return h.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = h.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (document.execCommand(this.commandBackground, !1, "transparent"), this.isFakeBackgroundEnabled = !1);
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = b.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const i = window.getSelection();
    let r = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((a) => {
      let l = o;
      for (; l > 0 && a.parentNode && !(a.tagName === e && (r = a, t && a.classList && !a.classList.contains(t) && (r = null), r)); )
        a = a.parentNode, l--;
    }), r);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
}
function pi(n, e) {
  const { type: t, target: o, addedNodes: i, removedNodes: r } = n;
  return n.type === "attributes" && n.attributeName === "data-empty" ? !1 : !!(e.contains(o) || t === "childList" && (Array.from(i).some((l) => l === e) || Array.from(r).some((l) => l === e)));
}
const at = "redactor dom changed", Fo = "block changed", $o = "fake cursor is about to be toggled", zo = "fake cursor have been set", Ee = "editor mobile layout toggled";
function fi(n, e) {
  if (!n.conversionConfig)
    return !1;
  const t = n.conversionConfig[e];
  return O(t) || J(t);
}
function Le(n, e) {
  return fi(n.tool, e);
}
function gi(n, e) {
  return Object.entries(n).some(([t, o]) => e[t] && si(e[t], o));
}
function yo(n, e) {
  return n.mergeable ? n.name === e.name ? !0 : Le(e, "export") && Le(n, "import") : !1;
}
function mi(n, e) {
  const t = e == null ? void 0 : e.export;
  return O(t) ? t(n) : J(t) ? n[t] : (t !== void 0 && I("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function wo(n, e, t) {
  const o = e == null ? void 0 : e.import;
  return O(o) ? o(n, t) : J(o) ? {
    [o]: n
  } : (o !== void 0 && I("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var W = /* @__PURE__ */ ((n) => (n.Default = "default", n.Separator = "separator", n.Html = "html", n))(W || {}), Q = /* @__PURE__ */ ((n) => (n.APPEND_CALLBACK = "appendCallback", n.RENDERED = "rendered", n.MOVED = "moved", n.UPDATED = "updated", n.REMOVED = "removed", n.ON_PASTE = "onPaste", n))(Q || {});
class N extends He {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = ni(),
    data: t,
    tool: o,
    readOnly: i,
    tunesData: r
  }, s) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (a = void 0) => {
      const l = a === void 0, c = a instanceof InputEvent;
      !l && !c && this.detectToolRootChange(a);
      let d;
      l || c ? d = !0 : d = !(a.length > 0 && a.every((p) => {
        const { addedNodes: g, removedNodes: f, target: m } = p;
        return [
          ...Array.from(g),
          ...Array.from(f),
          m
        ].some((E) => (h.isElement(E) || (E = E.parentElement), E && E.closest('[data-mutation-free="true"]') !== null));
      })), d && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.editorEventBus = s || null, this.blockAPI = new G(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, i), this.tunes = o.tunes, this.composeTunes(r), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = h.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o) => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !Y(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return O(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = h.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var i, r;
    this.holder.classList.toggle(N.CSS.selected, e);
    const t = e === !0 && b.isRangeInsideContainer(this.holder), o = e === !1 && b.isFakeCursorInsideContainer(this.holder);
    (t || o) && ((i = this.editorEventBus) == null || i.emit($o, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (r = this.editorEventBus) == null || r.emit(zo, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(N.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(N.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(N.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(N.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (O(this.toolInstance[e])) {
      e === "appendCallback" && I(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        I(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([r, s]) => {
      if (O(s.save))
        try {
          t[r] = s.save();
        } catch (a) {
          I(`Tune ${s.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then((r) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: r,
      tunes: t,
      time: i - o
    })).catch((r) => {
      I(`Saving process for ${this.name} tool failed due to the ${r}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  getTunes() {
    const e = [], t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
    return h.isElement(o) ? e.push({
      type: W.Html,
      element: o
    }) : Array.isArray(o) ? e.push(...o) : e.push(o), [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((r) => r.render()).forEach((r) => {
      h.isElement(r) ? t.push({
        type: W.Html,
        element: r
      }) : Array.isArray(r) ? t.push(...r) : t.push(r);
    }), {
      toolTunes: e,
      commonTunes: t
    };
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = h.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), O(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data, o = e;
    return o == null ? void 0 : o.find((i) => gi(i.data, t));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return mi(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = h.make("div", N.CSS.wrapper), t = h.make("div", N.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((r) => {
      if (O(r.wrap))
        try {
          i = r.wrap(i);
        } catch (s) {
          I(`Tune ${r.constructor.name} wrap method throws an Error %o`, "warn", s);
        }
    }), e.appendChild(i), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), h.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), h.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((r) => pi(r, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(at, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(at, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const i = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
  /**
   * Mark inputs with 'data-empty' attribute with the empty state
   */
  toggleInputsEmptyMark() {
    this.inputs.forEach(Ro);
  }
}
class bi extends B {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, r, s, a) => {
      const l = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: i,
        needToFocus: r,
        replace: s
      });
      return new G(l);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new N({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t, o) => {
      const { BlockManager: i } = this.Editor, r = i.getBlockById(e);
      if (r === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const s = await i.update(r, t, o);
      return new G(s);
    }, this.convert = async (e, t, o) => {
      var u, p;
      const { BlockManager: i, Tools: r } = this.Editor, s = i.getBlockById(e);
      if (!s)
        throw new Error(`Block with id "${e}" not found`);
      const a = r.blockTools.get(s.name), l = r.blockTools.get(t);
      if (!l)
        throw new Error(`Block Tool with type "${t}" not found`);
      const c = ((u = a == null ? void 0 : a.conversionConfig) == null ? void 0 : u.export) !== void 0, d = ((p = l.conversionConfig) == null ? void 0 : p.import) !== void 0;
      if (c && d) {
        const g = await i.convert(s, t, o);
        return new G(g);
      } else {
        const g = [
          c ? !1 : nt(s.name),
          d ? !1 : nt(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${s.name}" to "${t}" is not possible. ${g} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: i, type: r, data: s }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: r || this.config.defaultBlock,
        data: s
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((i) => new G(i));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: (e) => this.getBlockByElement(e),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      U("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      U("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new G(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (U("There is no block with id `" + e + "`", "warn"), null) : new G(t);
  }
  /**
   * Get Block API object by any child html element
   *
   * @param element - html element to get Block by
   */
  getBlockByElement(e) {
    const t = this.Editor.BlockManager.getBlock(e);
    if (t === void 0) {
      U("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new G(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    I(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      U(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  async renderFromHTML(e) {
    return await this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    rt(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    I("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
function vi(n, e) {
  return typeof n == "number" ? e.BlockManager.getBlockByIndex(n) : typeof n == "string" ? e.BlockManager.getBlockById(n) : e.BlockManager.getBlockById(n.id);
}
class ki extends B {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => {
      const i = vi(e, this.Editor);
      return i === void 0 ? !1 : (this.Editor.Caret.setToBlock(i, t, o), !0);
    }, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class yi extends B {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
class ht extends B {
  /**
   * Return namespace section for tool or block tune
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  static getNamespace(e, t) {
    return t ? `blockTunes.${e}` : `tools.${e}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        U("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        t: (o) => ut.t(ht.getNamespace(e, t), o)
      }
    );
  }
}
class wi extends B {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
      }
    );
  }
}
class xi extends B {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class Ei extends B {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var Uo = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(r) {
        if (o[r])
          return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule)
          return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string")
          for (var l in r)
            i.d(a, l, (function(c) {
              return r[c];
            }).bind(null, l));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "/", i(i.s = 0);
    }([function(t, o, i) {
      i(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */
      t.exports = function() {
        var r = i(6), s = "cdx-notify--bounce-in", a = null;
        return { show: function(l) {
          if (l.message) {
            (function() {
              if (a)
                return !0;
              a = r.getWrapper(), document.body.appendChild(a);
            })();
            var c = null, d = l.time || 8e3;
            switch (l.type) {
              case "confirm":
                c = r.confirm(l);
                break;
              case "prompt":
                c = r.prompt(l);
                break;
              default:
                c = r.alert(l), window.setTimeout(function() {
                  c.remove();
                }, d);
            }
            a.appendChild(c), c.classList.add(s);
          }
        } };
      }();
    }, function(t, o, i) {
      var r = i(2);
      typeof r == "string" && (r = [[t.i, r, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      i(4)(r, s), r.locals && (t.exports = r.locals);
    }, function(t, o, i) {
      (t.exports = i(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(i) {
        var r = [];
        return r.toString = function() {
          return this.map(function(s) {
            var a = function(l, c) {
              var d = l[1] || "", u = l[3];
              if (!u)
                return d;
              if (c && typeof btoa == "function") {
                var p = (f = u, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f)))) + " */"), g = u.sources.map(function(m) {
                  return "/*# sourceURL=" + u.sourceRoot + m + " */";
                });
                return [d].concat(g).concat([p]).join(`
`);
              }
              var f;
              return [d].join(`
`);
            }(s, i);
            return s[2] ? "@media " + s[2] + "{" + a + "}" : a;
          }).join("");
        }, r.i = function(s, a) {
          typeof s == "string" && (s = [[null, s, ""]]);
          for (var l = {}, c = 0; c < this.length; c++) {
            var d = this[c][0];
            typeof d == "number" && (l[d] = !0);
          }
          for (c = 0; c < s.length; c++) {
            var u = s[c];
            typeof u[0] == "number" && l[u[0]] || (a && !u[2] ? u[2] = a : a && (u[2] = "(" + u[2] + ") and (" + a + ")"), r.push(u));
          }
        }, r;
      };
    }, function(t, o, i) {
      var r, s, a = {}, l = (r = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return s === void 0 && (s = r.apply(this, arguments)), s;
      }), c = function(k) {
        var v = {};
        return function(x) {
          if (typeof x == "function")
            return x();
          if (v[x] === void 0) {
            var C = (function(_) {
              return document.querySelector(_);
            }).call(this, x);
            if (window.HTMLIFrameElement && C instanceof window.HTMLIFrameElement)
              try {
                C = C.contentDocument.head;
              } catch {
                C = null;
              }
            v[x] = C;
          }
          return v[x];
        };
      }(), d = null, u = 0, p = [], g = i(5);
      function f(k, v) {
        for (var x = 0; x < k.length; x++) {
          var C = k[x], _ = a[C.id];
          if (_) {
            _.refs++;
            for (var S = 0; S < _.parts.length; S++)
              _.parts[S](C.parts[S]);
            for (; S < C.parts.length; S++)
              _.parts.push(R(C.parts[S], v));
          } else {
            var L = [];
            for (S = 0; S < C.parts.length; S++)
              L.push(R(C.parts[S], v));
            a[C.id] = { id: C.id, refs: 1, parts: L };
          }
        }
      }
      function m(k, v) {
        for (var x = [], C = {}, _ = 0; _ < k.length; _++) {
          var S = k[_], L = v.base ? S[0] + v.base : S[0], T = { css: S[1], media: S[2], sourceMap: S[3] };
          C[L] ? C[L].parts.push(T) : x.push(C[L] = { id: L, parts: [T] });
        }
        return x;
      }
      function w(k, v) {
        var x = c(k.insertInto);
        if (!x)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var C = p[p.length - 1];
        if (k.insertAt === "top")
          C ? C.nextSibling ? x.insertBefore(v, C.nextSibling) : x.appendChild(v) : x.insertBefore(v, x.firstChild), p.push(v);
        else if (k.insertAt === "bottom")
          x.appendChild(v);
        else {
          if (typeof k.insertAt != "object" || !k.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var _ = c(k.insertInto + " " + k.insertAt.before);
          x.insertBefore(v, _);
        }
      }
      function E(k) {
        if (k.parentNode === null)
          return !1;
        k.parentNode.removeChild(k);
        var v = p.indexOf(k);
        v >= 0 && p.splice(v, 1);
      }
      function A(k) {
        var v = document.createElement("style");
        return k.attrs.type === void 0 && (k.attrs.type = "text/css"), K(v, k.attrs), w(k, v), v;
      }
      function K(k, v) {
        Object.keys(v).forEach(function(x) {
          k.setAttribute(x, v[x]);
        });
      }
      function R(k, v) {
        var x, C, _, S;
        if (v.transform && k.css) {
          if (!(S = v.transform(k.css)))
            return function() {
            };
          k.css = S;
        }
        if (v.singleton) {
          var L = u++;
          x = d || (d = A(v)), C = te.bind(null, x, L, !1), _ = te.bind(null, x, L, !0);
        } else
          k.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (x = function(T) {
            var $ = document.createElement("link");
            return T.attrs.type === void 0 && (T.attrs.type = "text/css"), T.attrs.rel = "stylesheet", K($, T.attrs), w(T, $), $;
          }(v), C = (function(T, $, pe) {
            var oe = pe.css, Ze = pe.sourceMap, Wn = $.convertToAbsoluteUrls === void 0 && Ze;
            ($.convertToAbsoluteUrls || Wn) && (oe = g(oe)), Ze && (oe += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Ze)))) + " */");
            var Yn = new Blob([oe], { type: "text/css" }), mo = T.href;
            T.href = URL.createObjectURL(Yn), mo && URL.revokeObjectURL(mo);
          }).bind(null, x, v), _ = function() {
            E(x), x.href && URL.revokeObjectURL(x.href);
          }) : (x = A(v), C = (function(T, $) {
            var pe = $.css, oe = $.media;
            if (oe && T.setAttribute("media", oe), T.styleSheet)
              T.styleSheet.cssText = pe;
            else {
              for (; T.firstChild; )
                T.removeChild(T.firstChild);
              T.appendChild(document.createTextNode(pe));
            }
          }).bind(null, x), _ = function() {
            E(x);
          });
        return C(k), function(T) {
          if (T) {
            if (T.css === k.css && T.media === k.media && T.sourceMap === k.sourceMap)
              return;
            C(k = T);
          } else
            _();
        };
      }
      t.exports = function(k, v) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (v = v || {}).attrs = typeof v.attrs == "object" ? v.attrs : {}, v.singleton || typeof v.singleton == "boolean" || (v.singleton = l()), v.insertInto || (v.insertInto = "head"), v.insertAt || (v.insertAt = "bottom");
        var x = m(k, v);
        return f(x, v), function(C) {
          for (var _ = [], S = 0; S < x.length; S++) {
            var L = x[S];
            (T = a[L.id]).refs--, _.push(T);
          }
          for (C && f(m(C, v), v), S = 0; S < _.length; S++) {
            var T;
            if ((T = _[S]).refs === 0) {
              for (var $ = 0; $ < T.parts.length; $++)
                T.parts[$]();
              delete a[T.id];
            }
          }
        };
      };
      var j, V = (j = [], function(k, v) {
        return j[k] = v, j.filter(Boolean).join(`
`);
      });
      function te(k, v, x, C) {
        var _ = x ? "" : C.css;
        if (k.styleSheet)
          k.styleSheet.cssText = V(v, _);
        else {
          var S = document.createTextNode(_), L = k.childNodes;
          L[v] && k.removeChild(L[v]), L.length ? k.insertBefore(S, L[v]) : k.appendChild(S);
        }
      }
    }, function(t, o) {
      t.exports = function(i) {
        var r = typeof window < "u" && window.location;
        if (!r)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var s = r.protocol + "//" + r.host, a = s + r.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, c) {
          var d, u = c.trim().replace(/^"(.*)"$/, function(p, g) {
            return g;
          }).replace(/^'(.*)'$/, function(p, g) {
            return g;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(u) ? l : (d = u.indexOf("//") === 0 ? u : u.indexOf("/") === 0 ? s + u : a + u.replace(/^\.\//, ""), "url(" + JSON.stringify(d) + ")");
        });
      };
    }, function(t, o, i) {
      var r, s, a, l, c, d, u, p, g;
      t.exports = (r = "cdx-notifies", s = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", d = "cdx-notify__input", u = "cdx-notify__button", p = "cdx-notify__btns-wrapper", { alert: g = function(f) {
        var m = document.createElement("DIV"), w = document.createElement("DIV"), E = f.message, A = f.style;
        return m.classList.add(s), A && m.classList.add(s + "--" + A), m.innerHTML = E, w.classList.add(a), w.addEventListener("click", m.remove.bind(m)), m.appendChild(w), m;
      }, confirm: function(f) {
        var m = g(f), w = document.createElement("div"), E = document.createElement("button"), A = document.createElement("button"), K = m.querySelector("." + a), R = f.cancelHandler, j = f.okHandler;
        return w.classList.add(p), E.innerHTML = f.okText || "Confirm", A.innerHTML = f.cancelText || "Cancel", E.classList.add(u), A.classList.add(u), E.classList.add(l), A.classList.add(c), R && typeof R == "function" && (A.addEventListener("click", R), K.addEventListener("click", R)), j && typeof j == "function" && E.addEventListener("click", j), E.addEventListener("click", m.remove.bind(m)), A.addEventListener("click", m.remove.bind(m)), w.appendChild(E), w.appendChild(A), m.appendChild(w), m;
      }, prompt: function(f) {
        var m = g(f), w = document.createElement("div"), E = document.createElement("button"), A = document.createElement("input"), K = m.querySelector("." + a), R = f.cancelHandler, j = f.okHandler;
        return w.classList.add(p), E.innerHTML = f.okText || "Ok", E.classList.add(u), E.classList.add(l), A.classList.add(d), f.placeholder && A.setAttribute("placeholder", f.placeholder), f.default && (A.value = f.default), f.inputType && (A.type = f.inputType), R && typeof R == "function" && K.addEventListener("click", R), j && typeof j == "function" && E.addEventListener("click", function() {
          j(A.value);
        }), E.addEventListener("click", m.remove.bind(m)), w.appendChild(A), w.appendChild(E), m.appendChild(w), m;
      }, getWrapper: function() {
        var f = document.createElement("DIV");
        return f.classList.add(r), f;
      } });
    }]);
  });
})(Uo);
var Bi = Uo.exports;
const Ci = /* @__PURE__ */ Re(Bi);
class Ti {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    Ci.show(e);
  }
}
class Si extends B {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new Ti();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class Ii extends B {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var Wo = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(xe, function() {
    function t(u) {
      var p = u.tags, g = Object.keys(p), f = g.map(function(m) {
        return typeof p[m];
      }).every(function(m) {
        return m === "object" || m === "boolean" || m === "function";
      });
      if (!f)
        throw new Error("The configuration was invalid");
      this.config = u;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(u) {
      return o.indexOf(u.nodeName) !== -1;
    }
    var r = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function s(u) {
      return r.indexOf(u.nodeName) !== -1;
    }
    t.prototype.clean = function(u) {
      const p = document.implementation.createHTMLDocument(), g = p.createElement("div");
      return g.innerHTML = u, this._sanitize(p, g), g.innerHTML;
    }, t.prototype._sanitize = function(u, p) {
      var g = a(u, p), f = g.firstChild();
      if (f)
        do {
          if (f.nodeType === Node.TEXT_NODE)
            if (f.data.trim() === "" && (f.previousElementSibling && i(f.previousElementSibling) || f.nextElementSibling && i(f.nextElementSibling))) {
              p.removeChild(f), this._sanitize(u, p);
              break;
            } else
              continue;
          if (f.nodeType === Node.COMMENT_NODE) {
            p.removeChild(f), this._sanitize(u, p);
            break;
          }
          var m = s(f), w;
          m && (w = Array.prototype.some.call(f.childNodes, i));
          var E = !!p.parentNode, A = i(p) && i(f) && E, K = f.nodeName.toLowerCase(), R = l(this.config, K, f), j = m && w;
          if (j || c(f, R) || !this.config.keepNestedBlockElements && A) {
            if (!(f.nodeName === "SCRIPT" || f.nodeName === "STYLE"))
              for (; f.childNodes.length > 0; )
                p.insertBefore(f.childNodes[0], f);
            p.removeChild(f), this._sanitize(u, p);
            break;
          }
          for (var V = 0; V < f.attributes.length; V += 1) {
            var te = f.attributes[V];
            d(te, R, f) && (f.removeAttribute(te.name), V = V - 1);
          }
          this._sanitize(u, f);
        } while (f = g.nextSibling());
    };
    function a(u, p) {
      return u.createTreeWalker(
        p,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function l(u, p, g) {
      return typeof u.tags[p] == "function" ? u.tags[p](g) : u.tags[p];
    }
    function c(u, p) {
      return typeof p > "u" ? !0 : typeof p == "boolean" ? !p : !1;
    }
    function d(u, p, g) {
      var f = u.name.toLowerCase();
      return p === !0 ? !1 : typeof p[f] == "function" ? !p[f](u.value, g) : typeof p[f] > "u" || p[f] === !1 ? !0 : typeof p[f] == "string" ? p[f] !== u.value : !1;
    }
    return t;
  });
})(Wo);
var _i = Wo.exports;
const Oi = /* @__PURE__ */ Re(_i);
function pt(n, e) {
  return n.map((t) => {
    const o = O(e) ? e(t.tool) : e;
    return Y(o) || (t.data = ft(t.data, o)), t;
  });
}
function Z(n, e = {}) {
  const t = {
    tags: e
  };
  return new Oi(t).clean(n);
}
function ft(n, e) {
  return Array.isArray(n) ? Ai(n, e) : P(n) ? Mi(n, e) : J(n) ? Li(n, e) : n;
}
function Ai(n, e) {
  return n.map((t) => ft(t, e));
}
function Mi(n, e) {
  const t = {};
  for (const o in n) {
    if (!Object.prototype.hasOwnProperty.call(n, o))
      continue;
    const i = n[o], r = Ni(e[o]) ? e[o] : e;
    t[o] = ft(i, r);
  }
  return t;
}
function Li(n, e) {
  return P(e) ? Z(n, e) : e === !1 ? Z(n, {}) : n;
}
function Ni(n) {
  return P(n) || Vn(n) || O(n);
}
class Pi extends B {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return Z(e, t);
  }
}
class Ri extends B {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (U(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class Di extends B {
  constructor() {
    super(...arguments), this.selectionUtils = new b();
  }
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return this.selectionUtils.findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
}
class Hi extends B {
  /**
   * Available methods
   */
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
    };
  }
}
class ji extends B {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class Fi extends B {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      U("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      U("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var Yo = { exports: {} };
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(r) {
        if (o[r])
          return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule)
          return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string")
          for (var l in r)
            i.d(a, l, (function(c) {
              return r[c];
            }).bind(null, l));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      t.exports = i(1);
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return r;
      });
      class r {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, l, c) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const d = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c);
          if (d.hidingDelay && (this.hidingDelay = d.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string")
            this.nodes.content.appendChild(document.createTextNode(l));
          else {
            if (!(l instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof l + " given.");
            this.nodes.content.appendChild(l);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), d.placement) {
            case "top":
              this.placeTop(a, d);
              break;
            case "left":
              this.placeLeft(a, d);
              break;
            case "right":
              this.placeRight(a, d);
              break;
            case "bottom":
            default:
              this.placeBottom(a, d);
          }
          d && d.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, d.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, l, c) {
          a.addEventListener("mouseenter", () => {
            this.show(a, l, c);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const l = i(2), c = this.make("style", null, { textContent: l.toString(), id: a });
          this.prepend(document.head, c);
        }
        placeBottom(a, l) {
          const c = a.getBoundingClientRect(), d = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, u = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
          this.applyPlacement("bottom", d, u);
        }
        placeTop(a, l) {
          const c = a.getBoundingClientRect(), d = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, u = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", d, u);
        }
        placeLeft(a, l) {
          const c = a.getBoundingClientRect(), d = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, u = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", d, u);
        }
        placeRight(a, l) {
          const c = a.getBoundingClientRect(), d = c.right + this.offsetRight + l.marginRight, u = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", d, u);
        }
        applyPlacement(a, l, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(a, l = null, c = {}) {
          const d = document.createElement(a);
          Array.isArray(l) ? d.classList.add(...l) : l && d.classList.add(l);
          for (const u in c)
            c.hasOwnProperty(u) && (d[u] = c[u]);
          return d;
        }
        append(a, l) {
          Array.isArray(l) ? l.forEach((c) => a.appendChild(c)) : a.appendChild(l);
        }
        prepend(a, l) {
          Array.isArray(l) ? (l = l.reverse()).forEach((c) => a.prepend(c)) : a.prepend(l);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(Yo);
var $i = Yo.exports;
const zi = /* @__PURE__ */ Re($i);
let F = null;
function gt() {
  F || (F = new zi());
}
function Ui(n, e, t) {
  gt(), F == null || F.show(n, e, t);
}
function Ko(n = !1) {
  gt(), F == null || F.hide(n);
}
function Xo(n, e, t) {
  gt(), F == null || F.onHover(n, e, t);
}
function Wi() {
  F == null || F.destroy(), F = null;
}
class Yi extends B {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    Ui(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    Ko();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    Xo(e, t, o);
  }
}
class Ki extends B {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function Xi(n, e) {
  const t = {};
  return Object.keys(n).forEach((o) => {
    const i = e[o];
    i !== void 0 ? t[i] = n[o] : t[o] = n[o];
  }), t;
}
const Zo = class be {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(e, t) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(e) {
    this.items = e;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(be.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(be.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0)
      return this.cursor;
    let t = this.cursor;
    return t === -1 ? t = e === be.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === be.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, h.canSetCaret(this.items[t]) && Me(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
  }
};
Zo.directions = {
  RIGHT: "right",
  LEFT: "left"
};
let fe = Zo;
class se {
  /**
   * @param options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (!(!this.isEventReadyForHandling(t) || t.shiftKey === !0))
        switch (se.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case y.TAB:
            this.handleTabPress(t);
            break;
          case y.LEFT:
          case y.UP:
            this.flipLeft();
            break;
          case y.RIGHT:
          case y.DOWN:
            this.flipRight();
            break;
          case y.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new fe(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || se.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      y.TAB,
      y.LEFT,
      y.RIGHT,
      y.ENTER,
      y.UP,
      y.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? fe.directions.LEFT : fe.directions.RIGHT) {
      case fe.directions.RIGHT:
        this.flipRight();
        break;
      case fe.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), O(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
const Zi = '<svg viewBox="0 0 20 20"><path d="M10 4v12M5 9l5-5 5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>', qi = '<svg viewBox="0 0 20 20"><path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>', Vi = '<svg viewBox="0 0 20 20"><path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>', Gi = '<svg viewBox="0 0 20 20"><path d="M12 4l-6 6 6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>', Qi = '<svg viewBox="0 0 20 20"><path d="M8 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ji = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="2.5" fill="currentColor"/></svg>', er = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10 6v4.5M10 13.5h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', tr = "__", or = "--";
function ae(n) {
  return (e, t) => [[n, e].filter((i) => !!i).join(tr), t].filter((i) => !!i).join(or);
}
const ge = ae("ce-hint"), me = {
  root: ge(),
  alignedStart: ge(null, "align-left"),
  alignedCenter: ge(null, "align-center"),
  title: ge("title"),
  description: ge("description")
};
class nr {
  /**
   * Constructs the hint content instance
   *
   * @param params - hint content parameters
   */
  constructor(e) {
    this.nodes = {
      root: h.make("div", [me.root, e.alignment === "center" ? me.alignedCenter : me.alignedStart]),
      title: h.make("div", me.title, { textContent: e.title })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = h.make("div", me.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
  }
  /**
   * Returns the root element of the hint content
   */
  getElement() {
    return this.nodes.root;
  }
}
class mt {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    this.params = e;
  }
  /**
   * Item name if exists
   */
  get name() {
    if (this.params !== void 0 && "name" in this.params)
      return this.params.name;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    Ko();
  }
  /**
   * Called when children popover is opened (if exists)
   */
  onChildrenOpen() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
  }
  /**
   * Called when children popover is closed (if exists)
   */
  onChildrenClose() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    var e, t;
    this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
  }
  /**
   * Adds hint to the item element if hint data is provided
   *
   * @param itemElement - popover item root element to add hint to
   * @param hintData - hint data
   */
  addHint(e, t) {
    const o = new nr(t);
    Xo(e, o.getElement(), {
      placement: t.position,
      hidingDelay: 100
    });
  }
  /**
   * Returns item children that are represented as popover items
   */
  get children() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
  }
  /**
   * Returns true if item has any type of children
   */
  get hasChildren() {
    return this.children.length > 0;
  }
  /**
   * Returns true if item children should be open instantly after popover is opened and not on item click/hover
   */
  get isChildrenOpen() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === !0;
  }
  /**
   * True if item children items should be navigatable via keyboard
   */
  get isChildrenFlippable() {
    var e;
    return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === !1);
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
  }
  /**
   * True if item is active
   */
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params) ? !1 : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === !0;
  }
}
const z = ae("ce-popover-item"), M = {
  container: z(),
  active: z(null, "active"),
  disabled: z(null, "disabled"),
  focused: z(null, "focused"),
  hidden: z(null, "hidden"),
  confirmationState: z(null, "confirmation"),
  noHover: z(null, "no-hover"),
  noFocus: z(null, "no-focus"),
  title: z("title"),
  secondaryTitle: z("secondary-title"),
  icon: z("icon"),
  iconTool: z("icon", "tool"),
  iconChevronRight: z("icon", "chevron-right"),
  wobbleAnimation: ae("wobble")()
};
class ve extends mt {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   * @param renderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e), this.params = e, this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(M.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(M.noHover);
    }, this.onErrorAnimationEnd = () => {
      var o, i;
      (o = this.nodes.icon) == null || o.classList.remove(M.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.nodes.root = this.make(e, t);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled === !0;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root === null ? !1 : this.nodes.root.classList.contains(M.focused);
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(M.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(M.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   * @param renderParams - popover item render params
   */
  make(e, t) {
    var r, s;
    const o = (t == null ? void 0 : t.wrapperTag) || "div", i = h.make(o, M.container, {
      type: o === "button" ? "button" : void 0
    });
    return e.name && (i.dataset.itemName = e.name), this.nodes.icon = h.make("div", [M.icon, M.iconTool], {
      innerHTML: e.icon || Ji
    }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(h.make("div", M.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && i.appendChild(h.make("div", M.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && i.appendChild(h.make("div", [M.icon, M.iconChevronRight], {
      innerHTML: Qi
    })), this.isActive && i.classList.add(M.active), e.isDisabled && i.classList.add(M.disabled), e.hint !== void 0 && ((r = t == null ? void 0 : t.hint) == null ? void 0 : r.enabled) !== !1 && this.addHint(i, {
      ...e.hint,
      position: ((s = t == null ? void 0 : t.hint) == null ? void 0 : s.position) || "right"
    }), i;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    if (this.nodes.root === null)
      return;
    const t = {
      ...this.params,
      ...e,
      confirmation: "confirmation" in e ? e.confirmation : void 0
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(M.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    if (this.nodes.root === null)
      return;
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(M.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    var e, t, o;
    (e = this.nodes.root) == null || e.classList.add(M.noHover), (t = this.nodes.root) == null || t.classList.add(M.noFocus), (o = this.nodes.root) == null || o.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    var t;
    if (!("confirmation" in e) || e.confirmation === void 0)
      try {
        (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    var e, t, o;
    (e = this.nodes.icon) != null && e.classList.contains(M.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(M.wobbleAnimation), (o = this.nodes.icon) == null || o.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const Ve = ae("ce-popover-item-separator"), Ge = {
  container: Ve(),
  line: Ve("line"),
  hidden: Ve(null, "hidden")
};
class ir extends mt {
  /**
   * Constructs the instance
   */
  constructor() {
    super(), this.nodes = {
      root: h.make("div", Ge.container),
      line: h.make("div", Ge.line)
    }, this.nodes.root.appendChild(this.nodes.line);
  }
  /**
   * Returns popover separator root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(Ge.hidden, e);
  }
}
var q = /* @__PURE__ */ ((n) => (n.Closed = "closed", n.ClosedOnActivate = "closed-on-activate", n))(q || {});
const X = ae("ce-popover"), H = {
  popover: X(),
  popoverContainer: X("container"),
  popoverOpenTop: X(null, "open-top"),
  popoverOpenLeft: X(null, "open-left"),
  popoverOpened: X(null, "opened"),
  items: X("items"),
  overlay: X("overlay"),
  overlayHidden: X("overlay", "hidden"),
  popoverNested: X(null, "nested"),
  popoverHeader: X("header")
};
var Se = /* @__PURE__ */ ((n) => (n.NestingLevel = "--nesting-level", n.PopoverHeight = "--popover-height", n.TriggerItemTop = "--trigger-item-top", n))(Se || {});
const xo = ae("ce-popover-item-html"), Eo = {
  root: xo(),
  hidden: xo(null, "hidden")
};
class lt extends mt {
  /**
   * Constructs the instance
   *
   * @param params – instance parameters
   * @param renderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    var o, i;
    super(e), this.nodes = {
      root: h.make("div", Eo.root)
    }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o = t == null ? void 0 : t.hint) == null ? void 0 : o.enabled) !== !1 && this.addHint(this.nodes.root, {
      ...e.hint,
      position: ((i = t == null ? void 0 : t.hint) == null ? void 0 : i.position) || "right"
    });
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(Eo.hidden, e);
  }
  /**
   * Returns list of buttons and inputs inside custom content
   */
  getControls() {
    const e = this.nodes.root.querySelectorAll(
      `button, ${h.allInputsSelector}`
    );
    return Array.from(e);
  }
}
class qo extends He {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   * @param itemsRenderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t = {}) {
    super(), this.params = e, this.itemsRenderParams = t, this.listeners = new je(), this.items = this.buildItems(e.items), this.nodes = {}, this.nodes.popoverContainer = h.make("div", [H.popoverContainer]), this.nodes.items = h.make("div", [H.items]), this.items.forEach((o) => {
      const i = o.getElement();
      i !== null && this.nodes.items.appendChild(i);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o) => this.handleClick(o)), this.nodes.popover = h.make("div", [
      H.popover,
      this.params.class
    ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  /**
   * List of default popover items that may have confirmation state
   */
  get itemsDefault() {
    return this.items.filter((e) => e instanceof ve);
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.popover;
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.popover.classList.add(H.popoverOpened);
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(H.popoverOpened), this.nodes.popover.classList.remove(H.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.emit(q.Closed);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.items.forEach((e) => e.destroy()), this.nodes.popover.remove(), this.listeners.removeAll();
  }
  /**
   * Looks for the item by name and imitates click on it
   *
   * @param name - name of the item to activate
   */
  activateItemByName(e) {
    const t = this.items.find((o) => o.name === e);
    this.handleItemClick(t);
  }
  /**
   * Factory method for creating popover items
   *
   * @param items - list of items params
   */
  buildItems(e) {
    return e.map((t) => {
      switch (t.type) {
        case W.Separator:
          return new ir();
        case W.Html:
          return new lt(t, this.itemsRenderParams[W.Html]);
        default:
          return new ve(t, this.itemsRenderParams[W.Default]);
      }
    });
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(e) {
    return this.items.filter((t) => t instanceof ve || t instanceof lt).find((t) => {
      const o = t.getElement();
      return o === null ? !1 : e.composedPath().includes(o);
    });
  }
  /**
   * Handles popover item click
   *
   * @param item - item to handle click of
   */
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
        return;
      }
      this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(q.ClosedOnActivate));
    }
  }
  /**
   * Handles clicks inside popover
   *
   * @param event - item to handle click of
   */
  handleClick(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.handleItemClick(t);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(e) {
    if (e instanceof ve && (e.toggle === !0 && e.toggleActive(), typeof e.toggle == "string")) {
      const t = this.itemsDefault.filter((o) => o.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach((o) => {
        o.toggleActive(o === e);
      });
    }
  }
}
var rr = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, ar = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? sr(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = (o ? s(e, t, i) : s(i)) || i);
  return o && i && rr(e, t, i), i;
};
const Vo = class Go extends qo {
  /**
   * Construct the instance
   *
   * @param params - popover params
   * @param itemsRenderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
      var o;
      super.hide(), this.destroyNestedPopoverIfExists(), (o = this.flipper) == null || o.deactivate(), this.previouslyHoveredItem = null;
    }, this.onFlip = () => {
      const o = this.itemsDefault.find((i) => i.isFocused);
      o == null || o.onFocus();
    }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(H.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o) => this.handleHover(o)), e.flippable !== !1 && (this.flipper = new se({
      items: this.flippableElements,
      focusedItemClass: M.focused,
      allowedKeys: [
        y.TAB,
        y.UP,
        y.DOWN,
        y.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip));
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper === void 0 ? !1 : this.flipper.hasFocus();
  }
  /**
   * Scroll position inside items container of the popover
   */
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  /**
   * Returns visible element offset top
   */
  get offsetTop() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
  }
  /**
   * Open popover
   */
  show() {
    var e;
    this.nodes.popover.style.setProperty(Se.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(H.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(H.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.hide(), super.destroy();
  }
  /**
   * Handles displaying nested items for the item.
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
  }
  /**
   * Handles hover events inside popover items container
   *
   * @param event - hover event data
   */
  handleHover(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used for correct positioning of the nested popover
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o = t.getElement(), i = (o ? o.offsetTop : 0) - this.scrollTop, r = this.offsetTop + i;
    e.style.setProperty(Se.TriggerItemTop, r + "px");
  }
  /**
   * Destroys existing nested popover
   */
  destroyNestedPopoverIfExists() {
    var e, t;
    this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(q.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    var o;
    this.nestedPopover = new Go({
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable
    }), e.onChildrenOpen(), this.nestedPopover.on(q.ClosedOnActivate, this.hide);
    const t = this.nestedPopover.getElement();
    return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(Se.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o = this.flipper) == null || o.deactivate(), this.nestedPopover;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.height, i = e.top + o, r = e.top - o, s = Math.min(window.innerHeight, t.bottom);
    return r < t.top || i <= s;
  }
  /**
   * Checks if popover should be opened left.
   * It should happen when there is enough space in the right or not enough space in the left
   */
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.width, i = e.right + o, r = e.left - o, s = Math.min(window.innerWidth, t.right);
    return r < t.left || i <= s;
  }
  get size() {
    var i;
    const e = {
      height: 0,
      width: 0
    };
    if (this.nodes.popover === null)
      return e;
    const t = this.nodes.popover.cloneNode(!0);
    t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(H.popoverOpened), (i = t.querySelector("." + H.popoverNested)) == null || i.remove(), document.body.appendChild(t);
    const o = t.querySelector("." + H.popoverContainer);
    return e.height = o.offsetHeight, e.width = o.offsetWidth, t.remove(), e;
  }
  /**
   * Returns list of elements available for keyboard navigation.
   */
  get flippableElements() {
    return this.items.map((t) => {
      if (t instanceof ve)
        return t.getElement();
      if (t instanceof lt)
        return t.getControls();
    }).flat().filter((t) => t != null);
  }
};
ar([
  he
], Vo.prototype, "size", 1);
let Qo = Vo;
const Jo = class ke {
  constructor() {
    this.scrollPosition = null;
  }
  /**
   * Locks body element scroll
   */
  lock() {
    st ? this.lockHard() : document.body.classList.add(ke.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    st ? this.unlockHard() : document.body.classList.remove(ke.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(ke.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(ke.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
Jo.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
let lr = Jo;
const Qe = ae("ce-popover-header"), Je = {
  root: Qe(),
  text: Qe("text"),
  backButton: Qe("back-button")
};
class cr {
  /**
   * Constructs the instance
   *
   * @param params - popover header params
   */
  constructor({ text: e, onBackButtonClick: t }) {
    this.listeners = new je(), this.text = e, this.onBackButtonClick = t, this.nodes = {
      root: h.make("div", [Je.root]),
      backButton: h.make("button", [Je.backButton]),
      text: h.make("div", [Je.text])
    }, this.nodes.backButton.innerHTML = Gi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
  }
  /**
   * Returns popover header root html element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
}
class dr {
  constructor() {
    this.history = [];
  }
  /**
   * Push new popover state
   *
   * @param state - new state
   */
  push(e) {
    this.history.push(e);
  }
  /**
   * Pop last popover state
   */
  pop() {
    return this.history.pop();
  }
  /**
   * Title retrieved from the current state
   */
  get currentTitle() {
    return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
  }
  /**
   * Items list retrieved from the current state
   */
  get currentItems() {
    return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
  }
  /**
   * Returns history to initial popover state
   */
  reset() {
    for (; this.history.length > 1; )
      this.pop();
  }
}
class en extends qo {
  /**
   * Construct the instance
   *
   * @param params - popover params
   */
  constructor(e) {
    super(e, {
      [W.Default]: {
        hint: {
          enabled: !1
        }
      },
      [W.Html]: {
        hint: {
          enabled: !1
        }
      }
    }), this.scrollLocker = new lr(), this.history = new dr(), this.isHidden = !0, this.nodes.overlay = h.make("div", [H.overlay, H.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.history.push({ items: e.items });
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.overlay.classList.remove(H.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = !1;
  }
  /**
   * Closes popover
   */
  hide() {
    this.isHidden || (super.hide(), this.nodes.overlay.classList.add(H.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = !0);
  }
  /**
   * Clears memory
   */
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  /**
   * Handles displaying nested items for the item
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title), this.history.push({
      title: e.title,
      items: e.children
    });
  }
  /**
   * Removes rendered popover items and header and displays new ones
   *
   * @param items - new popover items
   * @param title - new popover header text
   */
  updateItemsAndHeader(e, t) {
    if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
      this.header = new cr({
        text: t,
        onBackButtonClick: () => {
          this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
        }
      });
      const o = this.header.getElement();
      o !== null && this.nodes.popoverContainer.insertBefore(o, this.nodes.popoverContainer.firstChild);
    }
    this.items.forEach((o) => {
      var i;
      return (i = o.getElement()) == null ? void 0 : i.remove();
    }), this.items = this.buildItems(e), this.items.forEach((o) => {
      var r;
      const i = o.getElement();
      i !== null && ((r = this.nodes.items) == null || r.appendChild(i));
    });
  }
}
class ur extends B {
  constructor() {
    super(...arguments), this.opened = !1, this.hasMobileLayoutToggleListener = !1, this.selection = new b(), this.popover = null, this.close = () => {
      this.opened && (this.opened = !1, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(q.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }, this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    if (this.popover !== null)
      return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = h.make("div", [this.CSS.settings]), this.eventsDispatcher.on(Ee, this.close), this.hasMobileLayoutToggleListener = !0;
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes(), this.listeners.destroy(), this.hasMobileLayoutToggleListener && (this.eventsDispatcher.off(Ee, this.close), this.hasMobileLayoutToggleListener = !1);
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  async open(e = this.Editor.BlockManager.currentBlock) {
    var r;
    this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const { toolTunes: t, commonTunes: o } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const i = De() ? en : Qo;
    this.popover = new i({
      items: this.getTunesItems(o, t),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      class: "ce-popover--vk-menu"
    }), this.popover.on(q.Closed, this.onPopoverClose), (r = this.nodes.wrapper) == null || r.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns list of items to be displayed in block tunes menu.
   * Merges tool specific tunes and common tunes in one list in predefined order.
   *
   * @param commonTunes – common tunes
   * @param toolTunes - tool specific tunes
   */
  getTunesItems(e, t) {
    const o = [];
    return t !== void 0 && t.length > 0 && (o.push(...t), o.push({
      type: W.Separator
    })), o.push(...e), o.map((i) => this.resolveTuneAliases(i));
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    if (e.type === W.Separator || e.type === W.Html)
      return e;
    const t = Xi(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
var tn = { exports: {} };
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(r) {
        if (o[r])
          return o[r].exports;
        var s = o[r] = { i: r, l: !1, exports: {} };
        return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      return i.m = t, i.c = o, i.d = function(r, s, a) {
        i.o(r, s) || Object.defineProperty(r, s, { enumerable: !0, get: a });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, s) {
        if (1 & s && (r = i(r)), 8 & s || 4 & s && typeof r == "object" && r && r.__esModule)
          return r;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & s && typeof r != "string")
          for (var l in r)
            i.d(a, l, (function(c) {
              return r[c];
            }).bind(null, l));
        return a;
      }, i.n = function(r) {
        var s = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(r, s) {
        return Object.prototype.hasOwnProperty.call(r, s);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      function r(l, c) {
        for (var d = 0; d < c.length; d++) {
          var u = c[d];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(l, u.key, u);
        }
      }
      function s(l, c, d) {
        return c && r(l.prototype, c), d && r(l, d), l;
      }
      i.r(o);
      var a = function() {
        function l(c) {
          var d = this;
          (function(u, p) {
            if (!(u instanceof p))
              throw new TypeError("Cannot call a class as a function");
          })(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function(u) {
            d.execute(u);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return s(l, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), s(l, [{ key: "parseShortcutName", value: function(c) {
          c = c.split("+");
          for (var d = 0; d < c.length; d++) {
            c[d] = c[d].toUpperCase();
            var u = !1;
            for (var p in l.supportedCommands)
              if (l.supportedCommands[p].includes(c[d])) {
                u = this.commands[p] = !0;
                break;
              }
            u || (this.keys[c[d]] = !0);
          }
          for (var g in l.supportedCommands)
            this.commands[g] || (this.commands[g] = !1);
        } }, { key: "execute", value: function(c) {
          var d, u = { CMD: c.ctrlKey || c.metaKey, SHIFT: c.shiftKey, ALT: c.altKey }, p = !0;
          for (d in this.commands)
            this.commands[d] !== u[d] && (p = !1);
          var g, f = !0;
          for (g in this.keys)
            f = f && c.keyCode === l.keyCodes[g];
          p && f && this.callback(c);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), l;
      }();
      o.default = a;
    }]).default;
  });
})(tn);
var hr = tn.exports;
const pr = /* @__PURE__ */ Re(hr);
class fr {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const o = new pr({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const r = this.registeredShortcuts.get(e).filter((s) => s !== o);
    if (r.length === 0) {
      this.registeredShortcuts.delete(e);
      return;
    }
    this.registeredShortcuts.set(e, r);
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
  }
}
const ne = new fr();
function on(n, e) {
  const t = {};
  return Object.entries(n).forEach(([o, i]) => {
    if (P(i)) {
      const r = e ? `${e}.${o}` : o;
      Object.values(i).every((a) => J(a)) ? t[o] = r : t[o] = on(i, r);
      return;
    }
    t[o] = i;
  }), t;
}
const gr = on(Do);
var mr = Object.defineProperty, br = Object.getOwnPropertyDescriptor, nn = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? br(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = (o ? s(e, t, i) : s(i)) || i);
  return o && i && mr(e, t, i), i;
}, Ie = /* @__PURE__ */ ((n) => (n.Opened = "toolbox-opened", n.Closed = "toolbox-closed", n.BlockAdded = "toolbox-block-added", n))(Ie || {});
const bt = class rn extends He {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: e, tools: t }) {
    super(), this.opened = !1, this.listeners = new je(), this.popover = null, this.handleMobileLayoutToggle = () => {
      this.destroyPopover(), this.initPopover();
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = e, this.tools = t, this.enableShortcuts(), this.nodes = {
      toolbox: h.make("div", rn.CSS.toolbox)
    }, this.initPopover(), this.api.events.on(Ee, this.handleMobileLayoutToggle);
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    if (this.popover !== null)
      return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  /**
   * Destroy Module
   */
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(q.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(Ee, this.handleMobileLayoutToggle);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  /**
   * Creates toolbox popover and appends it inside wrapper element
   */
  initPopover() {
    var t;
    const e = De() ? en : Qo;
    this.popover = new e({
      scopeElement: this.api.ui.nodes.redactor,
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(q.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
  }
  /**
   * Destroys popover instance and removes it from DOM
   */
  destroyPopover() {
    this.popover !== null && (this.popover.hide(), this.popover.off(q.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach((t) => {
      t.toolbox && !t.toolboxHidden && e.push(t);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, o, i = !0) => ({
      icon: t.icon,
      title: ut.t(gr.toolNames, t.title || nt(o.name)),
      name: o.name,
      onActivate: () => {
        this.toolButtonActivated(o.name, t.data);
      },
      secondaryLabel: o.shortcut && i ? ti(o.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((t, o) => (Array.isArray(o.toolbox) ? o.toolbox.forEach((i, r) => {
      t.push(e(i, o, r === 0));
    }) : o.toolbox !== void 0 && t.push(e(o.toolbox, o)), t), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(e, t) {
    ne.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: async (o) => {
        o.preventDefault();
        const i = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(i);
        if (r)
          try {
            const s = await this.api.blocks.convert(r.id, e);
            this.api.caret.setToBlock(s, "end");
            return;
          } catch {
          }
        this.insertNewBlock(e);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && ne.remove(this.api.ui.nodes.redactor, t);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(e, t) {
    const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
    if (!i)
      return;
    const r = i.isEmpty ? o : o + 1;
    let s;
    if (t) {
      const l = await this.api.blocks.composeBlockData(e);
      s = Object.assign(l, t);
    }
    const a = this.api.blocks.insert(
      e,
      s,
      void 0,
      r,
      void 0,
      i.isEmpty
    );
    a.call(Q.APPEND_CALLBACK), this.api.caret.setToBlock(r), this.emit("toolbox-block-added", {
      block: a
    }), this.api.toolbar.close();
  }
};
nn([
  he
], bt.prototype, "toolsToBeDisplayed", 1);
nn([
  he
], bt.prototype, "toolboxItemsToBeDisplayed", 1);
let vr = bt;
const sn = "block hovered", kr = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
  <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`, yr = '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd"/></svg>';
class wr {
  constructor() {
    this.ctx = null, this.plusButton = null, this.dragHandle = null, this.editorWrapper = null, this.initialized = !1, this.onClickBound = null, this.onKeyUpBound = null, this.onInputBound = null, this.onFocusInBound = null;
  }
  render(e) {
    this.ctx = e;
    const t = e.actionsContainer.closest(".ce-toolbar");
    t && t.classList.add("ce-toolbar--vk-hidden"), requestAnimationFrame(() => {
      this.initialized || this.initElements();
    });
  }
  onBlockHover(e) {
    if (this.initialized || this.initElements(), !(!this.dragHandle || !this.editorWrapper)) {
      if (e.isMobile) {
        this.dragHandle.style.display = "none";
        return;
      }
      e.isEmpty ? this.dragHandle.style.display = "none" : (this.positionElement(this.dragHandle, e.holder), this.dragHandle.style.display = "");
    }
  }
  destroy() {
    var e, t;
    this.editorWrapper && (this.onClickBound && this.editorWrapper.removeEventListener("click", this.onClickBound, !0), this.onKeyUpBound && this.editorWrapper.removeEventListener("keyup", this.onKeyUpBound, !0), this.onInputBound && this.editorWrapper.removeEventListener("input", this.onInputBound, !0), this.onFocusInBound && this.editorWrapper.removeEventListener("focusin", this.onFocusInBound, !0)), (e = this.plusButton) == null || e.remove(), (t = this.dragHandle) == null || t.remove(), this.plusButton = null, this.dragHandle = null, this.ctx = null, this.editorWrapper = null;
  }
  /**
   * Create elements and attach listeners.
   */
  initElements() {
    if (!this.ctx || (this.editorWrapper = this.ctx.actionsContainer.closest(".codex-editor"), !this.editorWrapper))
      return;
    this.initialized = !0, this.plusButton = document.createElement("div"), this.plusButton.className = "ce-toolbar-vk-plus", this.plusButton.style.display = "none";
    const e = document.createElement("div");
    e.className = "ce-toolbar-vk-plus__trigger", e.innerHTML = kr, e.addEventListener("mousedown", (o) => {
      var i;
      o.preventDefault(), o.stopPropagation(), (i = this.ctx) == null || i.toggleToolbox(!1);
    }), this.plusButton.appendChild(e), this.plusButton.appendChild(this.ctx.toolboxElement), this.editorWrapper.appendChild(this.plusButton), this.dragHandle = document.createElement("div"), this.dragHandle.className = "ce-toolbar-vk-drag", this.dragHandle.style.display = "none";
    const t = document.createElement("div");
    t.className = "ce-toolbar-vk-drag__trigger", t.innerHTML = yr, t.addEventListener("mousedown", (o) => {
      var i;
      o.stopPropagation(), (i = this.ctx) == null || i.toggleBlockSettings(!0);
    }), this.dragHandle.appendChild(t), this.dragHandle.appendChild(this.ctx.blockSettingsElement), this.editorWrapper.appendChild(this.dragHandle), this.onClickBound = () => this.updatePlusButton(), this.onKeyUpBound = () => this.updatePlusButton(), this.onInputBound = () => this.onInput(), this.onFocusInBound = () => this.updatePlusButton(), this.editorWrapper.addEventListener("click", this.onClickBound, !0), this.editorWrapper.addEventListener("keyup", this.onKeyUpBound, !0), this.editorWrapper.addEventListener("input", this.onInputBound, !0), this.editorWrapper.addEventListener("focusin", this.onFocusInBound, !0), this.updatePlusButton();
  }
  /**
   * Position an element to the left of a block's content area.
   * For table blocks with resized width, anchors to the actual table element
   * so the handle stays at the table's top-left corner.
   */
  positionElement(e, t) {
    if (!this.editorWrapper)
      return;
    const o = this.editorWrapper.getBoundingClientRect(), i = t.getBoundingClientRect(), r = t.querySelector(".ce-block__content");
    r && r.getBoundingClientRect();
    const s = 34, a = 6, l = t.querySelector(".vk-table"), c = !!l, u = (l ?? r ?? t).getBoundingClientRect(), p = c ? 15 : a;
    let g;
    if (l) {
      const m = l.querySelector("tr"), w = m ? m.getBoundingClientRect() : u;
      g = w.top - o.top + (w.height - s) / 2 - 4;
    } else
      g = i.top - o.top + (i.height - s) / 2;
    const f = u.left - o.left - s - p;
    e.style.top = `${g}px`, e.style.left = `${f}px`;
  }
  /**
   * Handle input events.
   */
  onInput() {
    this.updatePlusButton(), this.updateDragOnInput();
  }
  /**
   * Update drag handle visibility when typing in a block.
   */
  updateDragOnInput() {
    if (!this.dragHandle || !this.editorWrapper)
      return;
    const e = this.getFocusedBlock();
    e && (this.isBlockEmpty(e) ? this.dragHandle.style.display = "none" : (this.positionElement(this.dragHandle, e), this.dragHandle.style.display = ""));
  }
  /**
   * Find which block the caret is in and update the "+" button.
   */
  updatePlusButton() {
    if (!this.plusButton || !this.editorWrapper)
      return;
    const e = this.getFocusedBlock();
    if (!e) {
      this.plusButton.style.display = "none";
      return;
    }
    this.isBlockEmpty(e) ? (this.positionElement(this.plusButton, e), this.plusButton.style.display = "") : this.plusButton.style.display = "none";
  }
  /**
   * Get the .ce-block element that contains the caret.
   */
  getFocusedBlock() {
    const e = window.getSelection();
    if (!e || e.rangeCount === 0)
      return null;
    const t = e.anchorNode;
    if (!t)
      return null;
    const o = t instanceof HTMLElement ? t : t.parentElement;
    return (o == null ? void 0 : o.closest(".ce-block")) ?? null;
  }
  /**
   * A block is "empty" only when it is a blank paragraph — the default
   * state before the user picks a block type.
   */
  isBlockEmpty(e) {
    var o;
    const t = e.querySelector(".ce-paragraph");
    return !!t && !((o = t.textContent) != null && o.trim());
  }
}
class xr extends B {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null, this.plugin = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          I("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          I("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    var u;
    if (this.toolboxInstance === null) {
      I("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI;
    let i;
    const r = 20, s = e.firstInput, a = t.getBoundingClientRect(), l = s !== void 0 ? s.getBoundingClientRect() : null, c = l !== null ? l.top - a.top : null, d = c !== null ? c > r : void 0;
    if (o)
      i = t.offsetTop + t.offsetHeight;
    else if (s === void 0 || d) {
      const p = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      i = t.offsetTop + p;
    } else {
      const p = li(s), g = ((u = this.nodes.actions) == null ? void 0 : u.querySelector(`.${this.CSS.plusButton}`)) ?? this.nodes.actions, f = g ? parseInt(window.getComputedStyle(g).height, 10) : 26, m = 8;
      i = t.offsetTop + p - f + m + c;
    }
    if (this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.plugin) {
      const p = {
        id: e.id,
        name: e.name,
        isEmpty: e.isEmpty,
        holder: e.holder,
        blockCount: this.Editor.BlockManager.blocks.length,
        isMobile: o
      };
      this.plugin.onBlockHover(p);
    }
    this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  async make() {
    var i;
    this.nodes.wrapper = h.make("div", this.CSS.toolbar), ["content", "actions"].forEach((r) => {
      this.nodes[r] = h.make("div", this.CSS[r]);
    }), h.append(this.nodes.wrapper, this.nodes.content), h.append(this.nodes.content, this.nodes.actions);
    const e = this.makeToolbox(), t = this.Editor.BlockSettings.getElement();
    h.append(this.nodes.actions, e), h.append(this.nodes.actions, t), this.plugin = ((i = this.config.toolbar) == null ? void 0 : i.plugin) ?? new wr();
    const o = {
      actionsContainer: this.nodes.actions,
      toolboxElement: e,
      blockSettingsElement: t,
      toggleToolbox: (r = !0) => this.plusButtonClicked(r),
      toggleBlockSettings: (r = !0) => this.settingsTogglerClicked(r),
      isToolboxOpen: () => {
        var r;
        return ((r = this.toolboxInstance) == null ? void 0 : r.opened) ?? !1;
      },
      isBlockSettingsOpen: () => this.Editor.BlockSettings.opened
    };
    this.plugin.render(o), h.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new vr({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools
    }), this.toolboxInstance.on(Ie.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Ie.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Ie.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.getElement();
  }
  /**
   * Handler for Plus Button — called by plugin via ctx.toggleToolbox()
   *
   * @param useHoveredBlock - if true, sets currentBlock to hoveredBlock before toggling.
   *                          Set to false when the caret already points to the correct block (e.g. VK-style toolbar).
   */
  plusButtonClicked(e = !0) {
    var t;
    e && this.hoveredBlock && (this.Editor.BlockManager.currentBlock = this.hoveredBlock), (t = this.toolboxInstance) == null || t.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    De() || this.eventsDispatcher.on(sn, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler — called by plugin via ctx.toggleBlockSettings()
   *
   * @param useHoveredBlock - if true, uses hoveredBlock for settings.
   *                          Set to false to use the current caret block.
   */
  settingsTogglerClicked(e = !0) {
    var o;
    const t = e && this.hoveredBlock ? this.hoveredBlock : this.Editor.BlockManager.currentBlock;
    this.Editor.BlockManager.currentBlock = t, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(t), (o = this.toolboxInstance) != null && o.opened && this.toolboxInstance.close();
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.plugin && (this.plugin.destroy(), this.plugin = null), this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var ie = /* @__PURE__ */ ((n) => (n[n.Block = 0] = "Block", n[n.Inline = 1] = "Inline", n[n.Tune = 2] = "Tune", n))(ie || {}), ye = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.Toolbox = "toolbox", n.EnabledInlineTools = "inlineToolbar", n.EnabledBlockTunes = "tunes", n.Config = "config", n.ToolboxHidden = "toolboxHidden", n))(ye || {}), an = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.SanitizeConfig = "sanitize", n))(an || {}), ue = /* @__PURE__ */ ((n) => (n.IsEnabledLineBreaks = "enableLineBreaks", n.Toolbox = "toolbox", n.ConversionConfig = "conversionConfig", n.IsReadOnlySupported = "isReadOnlySupported", n.PasteConfig = "pasteConfig", n))(ue || {}), Ne = /* @__PURE__ */ ((n) => (n.IsInline = "isInline", n.Title = "title", n.IsReadOnlySupported = "isReadOnlySupported", n))(Ne || {}), ct = /* @__PURE__ */ ((n) => (n.IsTune = "isTune", n))(ct || {});
class vt {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: r,
    isInternal: s = !1,
    defaultPlaceholder: a
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = r, this.isInternal = s, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (O(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (O(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === ie.Inline;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === ie.Block;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === ie.Tune;
  }
}
class Er extends B {
  constructor({ config: e, eventsDispatcher: t }) {
    super({ config: e, eventsDispatcher: t }), this.CSS = {
      panel: "ce-inline-text-style-panel",
      container: "ce-inline-text-style-panel__container",
      button: "ce-inline-text-style-panel__btn",
      buttonActive: "ce-inline-text-style-panel__btn--active",
      separator: "ce-inline-text-style-panel__sep",
      actions: "ce-inline-text-style-panel__actions"
    }, this.opened = !1, this.toolbarGap = De() ? 20 : 4, this.tools = /* @__PURE__ */ new Map(), this.container = null, this.actionsEl = null, this.separatorBefore = /* @__PURE__ */ new Set(["convertHeadingH2", "bold"]), window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   * Shows Inline Toolbar if something is selected
   */
  async tryToShow(e = !1) {
    e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    if (this.opened) {
      for (const [e, t] of this.tools) {
        const o = this.getToolShortcut(e.name);
        o !== void 0 && ne.remove(this.Editor.UI.nodes.redactor, o), O(t.clear) && t.clear();
      }
      this.tools = /* @__PURE__ */ new Map(), this.clearPanel(), this.reset(), this.opened = !1;
    }
  }
  /**
   * Check if node is contained by Inline Toolbar
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    this.removeAllNodes();
  }
  /**
   * Create the positioning wrapper
   */
  make() {
    this.nodes.wrapper = h.make("div", [
      this.CSS.panel,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), h.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Open: create tool instances, render buttons, position panel
   */
  async open() {
    this.opened || (this.opened = !0, this.createToolsInstances(), await this.renderButtons(), this.move());
  }
  /**
   * Render all tool buttons into the container
   */
  async renderButtons() {
    var e, t, o, i;
    this.clearPanel(), this.container = h.make("div", this.CSS.container), this.actionsEl = h.make("div", this.CSS.actions);
    for (const [r, s] of this.tools) {
      this.separatorBefore.has(r.name) && this.container.children.length > 0 && this.container.appendChild(h.make("div", this.CSS.separator));
      const a = await s.render(), l = this.getToolShortcut(r.name);
      if (l !== void 0)
        try {
          this.enableShortcuts(r, s, l);
        } catch {
        }
      if (h.isElement(a))
        a.classList.add(this.CSS.button), a.addEventListener("click", (c) => {
          c.preventDefault(), this.toolClicked(s);
        }), O(s.renderActions) && this.actionsEl.appendChild(s.renderActions()), (e = s.checkState) == null || e.call(s, b.get()), this.container.appendChild(a);
      else {
        const c = a, d = document.createElement("button");
        d.type = "button", d.className = this.CSS.button, d.innerHTML = c.icon || "", d.setAttribute("data-tool-name", c.name || r.name), (t = c.isActive) != null && t.call(c) && d.classList.add(this.CSS.buttonActive), d.addEventListener("click", async (u) => {
          var f, m, w;
          u.preventDefault();
          const p = (f = this.Editor.BlockManager.currentBlock) == null ? void 0 : f.name;
          await ((m = c.onActivate) == null ? void 0 : m.call(c));
          const g = (w = this.Editor.BlockManager.currentBlock) == null ? void 0 : w.name;
          p !== g ? await this.rebuildTools() : this.updateActiveStates();
        }), this.container.appendChild(d);
      }
    }
    (o = this.nodes.wrapper) == null || o.appendChild(this.container), this.actionsEl.children.length > 0 && ((i = this.nodes.wrapper) == null || i.appendChild(this.actionsEl));
  }
  /**
   * Remove all rendered content from the wrapper
   */
  clearPanel() {
    this.container && (this.container.remove(), this.container = null), this.actionsEl && (this.actionsEl.remove(), this.actionsEl = null);
  }
  /**
   * Position the panel centered above the selected text
   */
  move() {
    if (!this.container)
      return;
    const e = b.rect, t = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = this.container.getBoundingClientRect(), r = {
      x: e.x + e.width / 2 - o.width / 2 - t.x,
      y: e.y - t.top - o.height - this.toolbarGap
    };
    r.x + o.width + t.x > this.Editor.UI.contentRect.right && (r.x = this.Editor.UI.contentRect.right - o.width - t.x), r.x + t.x < this.Editor.UI.contentRect.left && (r.x = this.Editor.UI.contentRect.left - t.x), this.nodes.wrapper.style.left = Math.floor(r.x) + "px", this.nodes.wrapper.style.top = Math.floor(r.y) + "px";
  }
  /**
   * Reset position
   */
  reset() {
    this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Check if inline toolbar is allowed to show
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = b.get(), o = b.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const i = h.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (i === null || e.includes(i.tagName))
      return !1;
    const r = this.Editor.BlockManager.getBlock(t.anchorNode);
    return !r || !this.getTools().some(
      (l) => r.tool.inlineTools.has(l.name)
    ) ? !1 : i.closest("[contenteditable]") !== null;
  }
  /**
   * Returns tools available for the current block
   */
  getTools() {
    const e = this.Editor.BlockManager.currentBlock;
    return e ? Array.from(e.tool.inlineTools.values()).filter((t) => !(this.Editor.ReadOnly.isEnabled && t.isReadOnlySupported !== !0)) : [];
  }
  /**
   * Constructs tools instances
   */
  createToolsInstances() {
    this.tools = /* @__PURE__ */ new Map();
    for (const e of this.getTools())
      this.tools.set(e, e.create());
  }
  /**
   * Rebuild tool instances and buttons in place, without closing the panel.
   * Used after a conversion tool changes the current block's tool — the
   * available inline tools may differ, but the panel itself should stay open.
   */
  async rebuildTools() {
    for (const [e, t] of this.tools) {
      const o = this.getToolShortcut(e.name);
      o !== void 0 && ne.remove(this.Editor.UI.nodes.redactor, o), O(t.clear) && t.clear();
    }
    this.createToolsInstances(), await this.renderButtons(), this.move();
  }
  /**
   * Get shortcut for a tool
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][an.Shortcut] : o == null ? void 0 : o.shortcut;
  }
  /**
   * Enable shortcut for a tool
   */
  enableShortcuts(e, t, o) {
    ne.add({
      name: o,
      handler: (i) => {
        const { currentBlock: r } = this.Editor.BlockManager;
        r && r.tool.enabledInlineTools && (i.preventDefault(), this.toolClicked(t));
      },
      on: document
    });
  }
  /**
   * Handle tool button click (old API tools)
   */
  toolClicked(e) {
    var o;
    const t = b.range;
    (o = e.surround) == null || o.call(e, t), this.updateActiveStates();
  }
  /**
   * Update active state of all buttons
   */
  updateActiveStates() {
    var e;
    for (const [, t] of this.tools)
      (e = t.checkState) == null || e.call(t, b.get());
    this.container && this.container.querySelectorAll("[data-tool-name]").forEach((o) => {
      const i = o.getAttribute("data-tool-name");
      for (const [r, s] of this.tools)
        (r.name === i || i === r.name) && s.render;
    });
  }
  /**
   * Get inline tools (used for shortcut lookup)
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o]) => {
      e[t] = o.create();
    }), e;
  }
}
function ln() {
  const n = window.getSelection();
  if (n === null)
    return [null, 0];
  let e = n.focusNode, t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
}
function cn(n, e, t, o) {
  const i = document.createRange();
  o === "left" ? (i.setStart(n, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n, n.childNodes.length));
  const r = i.cloneContents(), s = document.createElement("div");
  s.appendChild(r);
  const a = s.textContent || "";
  return ai(a);
}
function _e(n) {
  const e = h.getDeepestNode(n);
  if (e === null || h.isEmpty(n))
    return !0;
  if (h.isNativeInput(e))
    return e.selectionEnd === 0;
  if (h.isEmpty(n))
    return !0;
  const [t, o] = ln();
  return t === null ? !1 : cn(n, t, o, "left");
}
function Oe(n) {
  const e = h.getDeepestNode(n, !0);
  if (e === null)
    return !0;
  if (h.isNativeInput(e))
    return e.selectionEnd === e.value.length;
  const [t, o] = ln();
  return t === null ? !1 : cn(n, t, o, "right");
}
var dn = {}, kt = {}, Fe = {}, le = {}, yt = {}, wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.allInputsSelector = Br;
function Br() {
  var n = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + n.map(function(e) {
    return 'input[type="'.concat(e, '"]');
  }).join(", ");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.allInputsSelector = void 0;
  var e = wt;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
})(yt);
var ce = {}, xt = {};
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.isNativeInput = Cr;
function Cr(n) {
  var e = [
    "INPUT",
    "TEXTAREA"
  ];
  return n && n.tagName ? e.includes(n.tagName) : !1;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNativeInput = void 0;
  var e = xt;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return e.isNativeInput;
  } });
})(ce);
var un = {}, Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.append = Tr;
function Tr(n, e) {
  Array.isArray(e) ? e.forEach(function(t) {
    n.appendChild(t);
  }) : n.appendChild(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.append = void 0;
  var e = Et;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return e.append;
  } });
})(un);
var Bt = {}, Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.blockElements = Sr;
function Sr() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.blockElements = void 0;
  var e = Ct;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return e.blockElements;
  } });
})(Bt);
var hn = {}, Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.calculateBaseline = Ir;
function Ir(n) {
  var e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), r = parseFloat(e.borderTopWidth), s = parseFloat(e.marginTop), a = t * 0.8, l = (o - t) / 2, c = s + r + i + l + a;
  return c;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.calculateBaseline = void 0;
  var e = Tt;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return e.calculateBaseline;
  } });
})(hn);
var pn = {}, St = {}, It = {}, _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.isContentEditable = _r;
function _r(n) {
  return n.contentEditable === "true";
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isContentEditable = void 0;
  var e = _t;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return e.isContentEditable;
  } });
})(It);
Object.defineProperty(St, "__esModule", { value: !0 });
St.canSetCaret = Mr;
var Or = ce, Ar = It;
function Mr(n) {
  var e = !0;
  if ((0, Or.isNativeInput)(n))
    switch (n.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else
    e = (0, Ar.isContentEditable)(n);
  return e;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.canSetCaret = void 0;
  var e = St;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return e.canSetCaret;
  } });
})(pn);
var $e = {}, Ot = {};
function Lr(n, e, t) {
  const o = t.value !== void 0 ? "value" : "get", i = t[o], r = `#${e}Cache`;
  if (t[o] = function(...s) {
    return this[r] === void 0 && (this[r] = i.apply(this, s)), this[r];
  }, o === "get" && t.set) {
    const s = t.set;
    t.set = function(a) {
      delete n[r], s.apply(this, a);
    };
  }
  return t;
}
function fn() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e !== void 0 && (n[e] = !0), n;
}
function At(n) {
  return n != null && n !== "" && (typeof n != "object" || Object.keys(n).length > 0);
}
function Nr(n) {
  return !At(n);
}
const Pr = () => typeof window < "u" && window.navigator !== null && At(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Rr(n) {
  const e = fn();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function Dr(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function Hr(n) {
  const e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-999px", e.style.bottom = "-999px", e.innerHTML = n, document.body.appendChild(e);
  const t = window.getSelection(), o = document.createRange();
  if (o.selectNode(e), t === null)
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(), t.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
}
function jr(n, e, t) {
  let o;
  return (...i) => {
    const r = this, s = () => {
      o = void 0, t !== !0 && n.apply(r, i);
    }, a = t === !0 && o !== void 0;
    window.clearTimeout(o), o = window.setTimeout(s, e), a && n.apply(r, i);
  };
}
function ee(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Fr(n) {
  return ee(n) === "boolean";
}
function gn(n) {
  return ee(n) === "function" || ee(n) === "asyncfunction";
}
function $r(n) {
  return gn(n) && /^\s*class\s+/.test(n.toString());
}
function zr(n) {
  return ee(n) === "number";
}
function Ae(n) {
  return ee(n) === "object";
}
function Ur(n) {
  return Promise.resolve(n) === n;
}
function Wr(n) {
  return ee(n) === "string";
}
function Yr(n) {
  return ee(n) === "undefined";
}
function dt(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (Ae(n) && Ae(t))
    for (const o in t)
      Ae(t[o]) ? (n[o] === void 0 && Object.assign(n, { [o]: {} }), dt(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return dt(n, ...e);
}
function Kr(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && console.warn(o);
}
function Xr(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function Zr(n) {
  return n > 47 && n < 58 || n === 32 || n === 13 || n === 229 || n > 64 && n < 91 || n > 95 && n < 112 || n > 185 && n < 193 || n > 218 && n < 223;
}
const qr = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, Vr = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
let Gr = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
};
function Qr(n, e, t = void 0) {
  let o, i, r, s = null, a = 0;
  t || (t = {});
  const l = function() {
    a = t.leading === !1 ? 0 : Date.now(), s = null, r = n.apply(o, i), s === null && (o = i = null);
  };
  return function() {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return o = this, i = arguments, d <= 0 || d > e ? (s && (clearTimeout(s), s = null), a = c, r = n.apply(o, i), s === null && (o = i = null)) : !s && t.trailing !== !1 && (s = setTimeout(l, d)), r;
  };
}
const Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: Gr,
  beautifyShortcut: Rr,
  cacheable: Lr,
  capitalize: Dr,
  copyTextToClipboard: Hr,
  debounce: jr,
  deepMerge: dt,
  deprecationAssert: Kr,
  getUserOS: fn,
  getValidUrl: Xr,
  isBoolean: Fr,
  isClass: $r,
  isEmpty: Nr,
  isFunction: gn,
  isIosDevice: Pr,
  isNumber: zr,
  isObject: Ae,
  isPrintableKey: Zr,
  isPromise: Ur,
  isString: Wr,
  isUndefined: Yr,
  keyCodes: qr,
  mouseButtons: Vr,
  notEmpty: At,
  throttle: Qr,
  typeOf: ee
}, Symbol.toStringTag, { value: "Module" })), Mt = /* @__PURE__ */ Kn(Jr);
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.containsOnlyInlineElements = os;
var es = Mt, ts = Bt;
function os(n) {
  var e;
  (0, es.isString)(n) ? (e = document.createElement("div"), e.innerHTML = n) : e = n;
  var t = function(o) {
    return !(0, ts.blockElements)().includes(o.tagName.toLowerCase()) && Array.from(o.children).every(t);
  };
  return Array.from(e.children).every(t);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.containsOnlyInlineElements = void 0;
  var e = Ot;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return e.containsOnlyInlineElements;
  } });
})($e);
var mn = {}, Lt = {}, ze = {}, Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.make = ns;
function ns(n, e, t) {
  var o;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var i = document.createElement(n);
  if (Array.isArray(e)) {
    var r = e.filter(function(a) {
      return a !== void 0;
    });
    (o = i.classList).add.apply(o, r);
  } else
    e !== null && i.classList.add(e);
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
  return i;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.make = void 0;
  var e = Nt;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return e.make;
  } });
})(ze);
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.fragmentToString = rs;
var is = ze;
function rs(n) {
  var e = (0, is.make)("div");
  return e.appendChild(n), e.innerHTML;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.fragmentToString = void 0;
  var e = Lt;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return e.fragmentToString;
  } });
})(mn);
var bn = {}, Pt = {};
Object.defineProperty(Pt, "__esModule", { value: !0 });
Pt.getContentLength = as;
var ss = ce;
function as(n) {
  var e, t;
  return (0, ss.isNativeInput)(n) ? n.value.length : n.nodeType === Node.TEXT_NODE ? n.length : (t = (e = n.textContent) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getContentLength = void 0;
  var e = Pt;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return e.getContentLength;
  } });
})(bn);
var Rt = {}, Dt = {}, Bo = xe && xe.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, r; o < i; o++)
      (r || !(o in e)) && (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
  return n.concat(r || Array.prototype.slice.call(e));
};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.getDeepestBlockElements = vn;
var ls = $e;
function vn(n) {
  return (0, ls.containsOnlyInlineElements)(n) ? [n] : Array.from(n.children).reduce(function(e, t) {
    return Bo(Bo([], e, !0), vn(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestBlockElements = void 0;
  var e = Dt;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return e.getDeepestBlockElements;
  } });
})(Rt);
var kn = {}, Ht = {}, Ue = {}, jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.isLineBreakTag = cs;
function cs(n) {
  return [
    "BR",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLineBreakTag = void 0;
  var e = jt;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return e.isLineBreakTag;
  } });
})(Ue);
var We = {}, Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.isSingleTag = ds;
function ds(n) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isSingleTag = void 0;
  var e = Ft;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return e.isSingleTag;
  } });
})(We);
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.getDeepestNode = yn;
var us = ce, hs = Ue, ps = We;
function yn(n, e) {
  e === void 0 && (e = !1);
  var t = e ? "lastChild" : "firstChild", o = e ? "previousSibling" : "nextSibling";
  if (n.nodeType === Node.ELEMENT_NODE && n[t]) {
    var i = n[t];
    if ((0, ps.isSingleTag)(i) && !(0, us.isNativeInput)(i) && !(0, hs.isLineBreakTag)(i))
      if (i[o])
        i = i[o];
      else if (i.parentNode !== null && i.parentNode[o])
        i = i.parentNode[o];
      else
        return i.parentNode;
    return yn(i, e);
  }
  return n;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestNode = void 0;
  var e = Ht;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return e.getDeepestNode;
  } });
})(kn);
var wn = {}, $t = {}, Ce = xe && xe.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, r; o < i; o++)
      (r || !(o in e)) && (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
  return n.concat(r || Array.prototype.slice.call(e));
};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.findAllInputs = vs;
var fs = $e, gs = Rt, ms = yt, bs = ce;
function vs(n) {
  return Array.from(n.querySelectorAll((0, ms.allInputsSelector)())).reduce(function(e, t) {
    return (0, bs.isNativeInput)(t) || (0, fs.containsOnlyInlineElements)(t) ? Ce(Ce([], e, !0), [t], !1) : Ce(Ce([], e, !0), (0, gs.getDeepestBlockElements)(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.findAllInputs = void 0;
  var e = $t;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return e.findAllInputs;
  } });
})(wn);
var xn = {}, zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.isCollapsedWhitespaces = ks;
function ks(n) {
  return !/[^\t\n\r ]/.test(n);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCollapsedWhitespaces = void 0;
  var e = zt;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return e.isCollapsedWhitespaces;
  } });
})(xn);
var Ut = {}, Wt = {};
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.isElement = ws;
var ys = Mt;
function ws(n) {
  return (0, ys.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.ELEMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isElement = void 0;
  var e = Wt;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return e.isElement;
  } });
})(Ut);
var En = {}, Yt = {}, Kt = {}, Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.isLeaf = xs;
function xs(n) {
  return n === null ? !1 : n.childNodes.length === 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLeaf = void 0;
  var e = Xt;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return e.isLeaf;
  } });
})(Kt);
var Zt = {}, qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.isNodeEmpty = Ss;
var Es = Ue, Bs = Ut, Cs = ce, Ts = We;
function Ss(n, e) {
  var t = "";
  return (0, Ts.isSingleTag)(n) && !(0, Es.isLineBreakTag)(n) ? !1 : ((0, Bs.isElement)(n) && (0, Cs.isNativeInput)(n) ? t = n.value : n.textContent !== null && (t = n.textContent.replace("​", "")), e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")), t.trim().length === 0);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNodeEmpty = void 0;
  var e = qt;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return e.isNodeEmpty;
  } });
})(Zt);
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.isEmpty = Os;
var Is = Kt, _s = Zt;
function Os(n, e) {
  n.normalize();
  for (var t = [n]; t.length > 0; ) {
    var o = t.shift();
    if (o) {
      if (n = o, (0, Is.isLeaf)(n) && !(0, _s.isNodeEmpty)(n, e))
        return !1;
      t.push.apply(t, Array.from(n.childNodes));
    }
  }
  return !0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isEmpty = void 0;
  var e = Yt;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return e.isEmpty;
  } });
})(En);
var Bn = {}, Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.isFragment = Ms;
var As = Mt;
function Ms(n) {
  return (0, As.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isFragment = void 0;
  var e = Vt;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return e.isFragment;
  } });
})(Bn);
var Cn = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.isHTMLString = Ns;
var Ls = ze;
function Ns(n) {
  var e = (0, Ls.make)("div");
  return e.innerHTML = n, e.childElementCount > 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isHTMLString = void 0;
  var e = Gt;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return e.isHTMLString;
  } });
})(Cn);
var Tn = {}, Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.offset = Ps;
function Ps(n) {
  var e = n.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop, i = e.top + o, r = e.left + t;
  return {
    top: i,
    left: r,
    bottom: i + e.height,
    right: r + e.width
  };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.offset = void 0;
  var e = Qt;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return e.offset;
  } });
})(Tn);
var Sn = {}, Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.prepend = Rs;
function Rs(n, e) {
  Array.isArray(e) ? (e = e.reverse(), e.forEach(function(t) {
    return n.prepend(t);
  })) : n.prepend(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = void 0;
  var e = Jt;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return e.prepend;
  } });
})(Sn);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = n.offset = n.make = n.isLineBreakTag = n.isSingleTag = n.isNodeEmpty = n.isLeaf = n.isHTMLString = n.isFragment = n.isEmpty = n.isElement = n.isContentEditable = n.isCollapsedWhitespaces = n.findAllInputs = n.isNativeInput = n.allInputsSelector = n.getDeepestNode = n.getDeepestBlockElements = n.getContentLength = n.fragmentToString = n.containsOnlyInlineElements = n.canSetCaret = n.calculateBaseline = n.blockElements = n.append = void 0;
  var e = yt;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
  var t = ce;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
  var o = un;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return o.append;
  } });
  var i = Bt;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var r = hn;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return r.calculateBaseline;
  } });
  var s = pn;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return s.canSetCaret;
  } });
  var a = $e;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return a.containsOnlyInlineElements;
  } });
  var l = mn;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return l.fragmentToString;
  } });
  var c = bn;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return c.getContentLength;
  } });
  var d = Rt;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return d.getDeepestBlockElements;
  } });
  var u = kn;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return u.getDeepestNode;
  } });
  var p = wn;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return p.findAllInputs;
  } });
  var g = xn;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return g.isCollapsedWhitespaces;
  } });
  var f = It;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return f.isContentEditable;
  } });
  var m = Ut;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return m.isElement;
  } });
  var w = En;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return w.isEmpty;
  } });
  var E = Bn;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return E.isFragment;
  } });
  var A = Cn;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return A.isHTMLString;
  } });
  var K = Kt;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return K.isLeaf;
  } });
  var R = Zt;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return R.isNodeEmpty;
  } });
  var j = Ue;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return j.isLineBreakTag;
  } });
  var V = We;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return V.isSingleTag;
  } });
  var te = ze;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return te.make;
  } });
  var k = Tn;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return k.offset;
  } });
  var v = Sn;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return v.prepend;
  } });
})(le);
var Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.getContenteditableSlice = Hs;
var Ds = le;
function Hs(n, e, t, o, i) {
  var r;
  i === void 0 && (i = !1);
  var s = document.createRange();
  if (o === "left" ? (s.setStart(n, 0), s.setEnd(e, t)) : (s.setStart(e, t), s.setEnd(n, n.childNodes.length)), i === !0) {
    var a = s.extractContents();
    return (0, Ds.fragmentToString)(a);
  }
  var l = s.cloneContents(), c = document.createElement("div");
  c.appendChild(l);
  var d = (r = c.textContent) !== null && r !== void 0 ? r : "";
  return d;
}
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.checkContenteditableSliceForEmptiness = $s;
var js = le, Fs = Ye;
function $s(n, e, t, o) {
  var i = (0, Fs.getContenteditableSlice)(n, e, t, o);
  return (0, js.isCollapsedWhitespaces)(i);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.checkContenteditableSliceForEmptiness = void 0;
  var e = Fe;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
})(kt);
var In = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getContenteditableSlice = void 0;
  var e = Ye;
  Object.defineProperty(n, "getContenteditableSlice", { enumerable: !0, get: function() {
    return e.getContenteditableSlice;
  } });
})(In);
var _n = {}, eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.focus = Us;
var zs = le;
function Us(n, e) {
  var t, o;
  if (e === void 0 && (e = !0), (0, zs.isNativeInput)(n)) {
    n.focus();
    var i = e ? 0 : n.value.length;
    n.setSelectionRange(i, i);
  } else {
    var r = document.createRange(), s = window.getSelection();
    if (!s)
      return;
    var a = function(p) {
      var g = document.createTextNode("");
      p.appendChild(g), r.setStart(g, 0), r.setEnd(g, 0);
    }, l = function(p) {
      return p != null;
    }, c = n.childNodes, d = e ? c[0] : c[c.length - 1];
    if (l(d)) {
      for (; l(d) && d.nodeType !== Node.TEXT_NODE; )
        d = e ? d.firstChild : d.lastChild;
      if (l(d) && d.nodeType === Node.TEXT_NODE) {
        var u = (o = (t = d.textContent) === null || t === void 0 ? void 0 : t.length) !== null && o !== void 0 ? o : 0, i = e ? 0 : u;
        r.setStart(d, i), r.setEnd(d, i);
      } else
        a(n);
    } else
      a(n);
    s.removeAllRanges(), s.addRange(r);
  }
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.focus = void 0;
  var e = eo;
  Object.defineProperty(n, "focus", { enumerable: !0, get: function() {
    return e.focus;
  } });
})(_n);
var to = {}, Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.getCaretNodeAndOffset = Ws;
function Ws() {
  var n = window.getSelection();
  if (n === null)
    return [null, 0];
  var e = n.focusNode, t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] !== void 0 ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], e.textContent !== null && (t = e.textContent.length))), [e, t]);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getCaretNodeAndOffset = void 0;
  var e = Ke;
  Object.defineProperty(n, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return e.getCaretNodeAndOffset;
  } });
})(to);
var On = {}, Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.getRange = Ys;
function Ys() {
  var n = window.getSelection();
  return n && n.rangeCount ? n.getRangeAt(0) : null;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getRange = void 0;
  var e = Xe;
  Object.defineProperty(n, "getRange", { enumerable: !0, get: function() {
    return e.getRange;
  } });
})(On);
var An = {}, oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.isCaretAtEndOfInput = Zs;
var Co = le, Ks = to, Xs = kt;
function Zs(n) {
  var e = (0, Co.getDeepestNode)(n, !0);
  if (e === null)
    return !0;
  if ((0, Co.isNativeInput)(e))
    return e.selectionEnd === e.value.length;
  var t = (0, Ks.getCaretNodeAndOffset)(), o = t[0], i = t[1];
  return o === null ? !1 : (0, Xs.checkContenteditableSliceForEmptiness)(n, o, i, "right");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCaretAtEndOfInput = void 0;
  var e = oo;
  Object.defineProperty(n, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return e.isCaretAtEndOfInput;
  } });
})(An);
var Mn = {}, no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.isCaretAtStartOfInput = Gs;
var Te = le, qs = Ke, Vs = Fe;
function Gs(n) {
  var e = (0, Te.getDeepestNode)(n);
  if (e === null || (0, Te.isEmpty)(n))
    return !0;
  if ((0, Te.isNativeInput)(e))
    return e.selectionEnd === 0;
  if ((0, Te.isEmpty)(n))
    return !0;
  var t = (0, qs.getCaretNodeAndOffset)(), o = t[0], i = t[1];
  return o === null ? !1 : (0, Vs.checkContenteditableSliceForEmptiness)(n, o, i, "left");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCaretAtStartOfInput = void 0;
  var e = no;
  Object.defineProperty(n, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return e.isCaretAtStartOfInput;
  } });
})(Mn);
var Ln = {}, io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.save = ea;
var Qs = le, Js = Xe;
function ea() {
  var n = (0, Js.getRange)(), e = (0, Qs.make)("span");
  if (e.id = "cursor", e.hidden = !0, !!n)
    return n.insertNode(e), function() {
      var o = window.getSelection();
      o && (n.setStartAfter(e), n.setEndAfter(e), o.removeAllRanges(), o.addRange(n), setTimeout(function() {
        e.remove();
      }, 150));
    };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.save = void 0;
  var e = io;
  Object.defineProperty(n, "save", { enumerable: !0, get: function() {
    return e.save;
  } });
})(Ln);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.save = n.isCaretAtStartOfInput = n.isCaretAtEndOfInput = n.getRange = n.getCaretNodeAndOffset = n.focus = n.getContenteditableSlice = n.checkContenteditableSliceForEmptiness = void 0;
  var e = kt;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
  var t = In;
  Object.defineProperty(n, "getContenteditableSlice", { enumerable: !0, get: function() {
    return t.getContenteditableSlice;
  } });
  var o = _n;
  Object.defineProperty(n, "focus", { enumerable: !0, get: function() {
    return o.focus;
  } });
  var i = to;
  Object.defineProperty(n, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var r = On;
  Object.defineProperty(n, "getRange", { enumerable: !0, get: function() {
    return r.getRange;
  } });
  var s = An;
  Object.defineProperty(n, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return s.isCaretAtEndOfInput;
  } });
  var a = Mn;
  Object.defineProperty(n, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return a.isCaretAtStartOfInput;
  } });
  var l = Ln;
  Object.defineProperty(n, "save", { enumerable: !0, get: function() {
    return l.save;
  } });
})(dn);
class ta extends B {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case y.BACKSPACE:
        this.backspace(e);
        break;
      case y.DELETE:
        this.delete(e);
        break;
      case y.ENTER:
        this.enter(e);
        break;
      case y.DOWN:
      case y.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case y.UP:
      case y.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case y.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Lo(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const r = o.removeSelectedBlocks(), s = o.insertDefaultBlockAtIndex(r, !0);
      i.setToBlock(s, i.positions.START), t.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: t, Caret: o } = this.Editor;
    if (t.opened)
      return;
    (e.shiftKey ? o.navigatePrevious(!0) : o.navigateNext(!0)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   *
   * @param event - keydown
   */
  slashPressed(e) {
    !this.Editor.UI.nodes.wrapper.contains(e.target) || !this.Editor.BlockManager.currentBlock.isEmpty || (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor, i = t.currentBlock;
    if (i === void 0 || i.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey && !st)
      return;
    let r = i;
    i.currentInput !== void 0 && _e(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && Oe(i.currentInput) ? r = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : r = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r), this.Editor.Toolbar.moveAndOpen(r), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, previousBlock: r } = t;
    if (i === void 0 || !b.isCollapsed || !i.currentInput || !_e(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
      o.navigatePrevious();
      return;
    }
    if (r === null)
      return;
    if (r.isEmpty) {
      t.removeBlock(r);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i);
      const l = t.currentBlock;
      o.setToBlock(l, o.positions.END);
      return;
    }
    yo(r, i) ? this.mergeBlocks(r, i) : o.setToBlock(r, o.positions.END);
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, nextBlock: r } = t;
    if (!b.isCollapsed || !Oe(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
      o.navigateNext();
      return;
    }
    if (r === null)
      return;
    if (r.isEmpty) {
      t.removeBlock(r);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i), o.setToBlock(r, o.positions.START);
      return;
    }
    yo(i, r) ? this.mergeBlocks(i, r) : o.setToBlock(r, o.positions.START);
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Toolbar: i } = this.Editor;
    e.lastInput !== void 0 && (dn.focus(e.lastInput, !1), o.mergeBlocks(e, t).then(() => {
      i.close();
    }));
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = se.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.Toolbar.close();
    const { currentBlock: o } = this.Editor.BlockManager, r = ((o == null ? void 0 : o.currentInput) !== void 0 ? Oe(o.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.DOWN && r) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === y.DOWN || e.keyCode === y.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    Me(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (se.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const { currentBlock: t } = this.Editor.BlockManager, i = ((t == null ? void 0 : t.currentInput) !== void 0 ? _e(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.UP && i) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (e.keyCode === y.UP || e.keyCode === y.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    Me(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === y.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === y.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === y.ENTER && this.Editor.InlineToolbar.opened, r = e.keyCode === y.TAB;
    return !(e.shiftKey || r || t || o || i);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class et {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return No(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    h.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], i = e - 1, r = Math.max(0, i), s = this.blocks[r];
    e > 0 ? this.insertToDOM(o, "afterend", s) : this.insertToDOM(o, "beforebegin", s), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(Q.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(Q.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const r = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", r);
    } else {
      const r = this.blocks[e + 1];
      r ? this.insertToDOM(t, "beforebegin", r) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const i of e)
      o.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((i) => i.call(Q.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(Q.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(Q.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(Q.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
}
const To = "block-removed", So = "block-added", oa = "block-moved", Io = "block-changed";
class na {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
class ia extends B {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new et(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: et.set,
      get: et.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: i = {}
  }) {
    const r = this.Editor.ReadOnly.isEnabled, s = this.Editor.Tools.blockTools.get(e), a = new N({
      id: o,
      data: t,
      tool: s,
      api: this.Editor.API,
      readOnly: r,
      tunesData: i
    }, this.eventsDispatcher);
    return r || window.requestIdleCallback(() => {
      this.bindBlockEvents(a);
    }, { timeout: 2e3 }), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: i,
    needToFocus: r = !0,
    replace: s = !1,
    tunes: a = {}
  } = {}) {
    let l = i;
    l === void 0 && (l = this.currentBlockIndex + (s ? 0 : 1));
    const c = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return s && this.blockDidMutated(To, this.getBlockByIndex(l), {
      index: l
    }), this._blocks.insert(l, c, s), this.blockDidMutated(So, c, {
      index: l
    }), r ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, c;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events.
   *
   * If neither data nor tunes is provided, return the provided block instead.
   *
   * @param block - block to update
   * @param data - (optional) new data
   * @param tunes - (optional) tune data
   */
  async update(e, t, o) {
    if (!t && !o)
      return e;
    const i = await e.data, r = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, i, t ?? {}),
      tunes: o ?? e.tunes
    }), s = this.getBlockIndex(e);
    return this._blocks.replace(s, r), this.blockDidMutated(Io, r, {
      index: s
    }), r;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const i = this.getBlockIndex(e);
    return this.insert({
      tool: t,
      data: o,
      index: i,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        i.call(Q.ON_PASTE, t);
      });
    } catch (r) {
      I(`${e}: onPaste callback call is failed`, "error", r);
    }
    return i;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1) {
    const o = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o, this.blockDidMutated(So, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    let o;
    if (e.name === t.name && e.mergeable) {
      const i = await t.data;
      if (Y(i)) {
        console.error("Could not merge Block. Failed to extract original Block data.");
        return;
      }
      const [r] = pt([i], e.tool.sanitizeConfig);
      o = r;
    } else if (e.mergeable && Le(t, "export") && Le(e, "import")) {
      const i = await t.exportDataAsString(), r = Z(i, e.tool.sanitizeConfig);
      o = wo(r, e.tool.conversionConfig);
    }
    o !== void 0 && (await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i))
        throw new Error("Can't find a Block to remove");
      this._blocks.remove(i), e.destroy(), this.blockDidMutated(To, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = h.make("div");
    t.appendChild(e);
    const o = {
      text: h.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    h.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${N.CSS.wrapper}`), i = t.indexOf(o);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    h.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${N.CSS.wrapper}`);
    if (!t)
      return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    h.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${N.CSS.wrapper}`);
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      I("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      I("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(oa, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const r = this.Editor.Tools.blockTools.get(t);
    if (!r)
      throw new Error(`Could not convert Block. Tool «${t}» not found.`);
    const s = await e.exportDataAsString(), a = Z(
      s,
      r.sanitizeConfig
    );
    let l = wo(a, r.conversionConfig, r.settings);
    return o && (l = Object.assign(l, o)), this.replace(e, r.name, l);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new na();
    [...this.blocks].forEach((i) => {
      t.add(async () => {
        await this.removeBlock(i, !1);
      });
    }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (o) => {
      t.keydown(o);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o) => {
      t.keyup(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o) => {
      t.dragOver(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o) => {
      t.dragLeave(o);
    }), e.on("didMutated", (o) => this.blockDidMutated(Io, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const i = new CustomEvent(e, {
      detail: {
        target: new G(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(Fo, {
      event: i
    }), t;
  }
}
class ra extends B {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new b(), ne.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    b.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: i, RectangleSelection: r } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const s = e && e instanceof KeyboardEvent, a = s && Lo(e.keyCode);
    if (this.anyBlockSelected && s && a && !b.isSelectionExists) {
      const l = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(l, !0), i.setToBlock(o.currentBlock), Me(() => {
        const c = e.key;
        i.insertContentAtCaretPosition(c.length > 1 ? "" : c);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || r.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = h.make("div");
    this.selectedBlocks.forEach((r) => {
      const s = Z(r.holder.innerHTML, this.sanitizerConfig), a = h.make("p");
      a.innerHTML = s, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((r) => r.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((r) => r.save())).then((r) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(r));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor, o = t.getBlockByIndex(e);
    o !== void 0 && this.selectBlock(o);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), b.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = !1, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    ne.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), h.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target), o = t.inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class Pe extends B {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the block content
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    var c;
    const { BlockManager: i, BlockSelection: r } = this.Editor;
    if (r.clearSelection(), !e.focusable) {
      (c = window.getSelection()) == null || c.removeAllRanges(), r.selectBlock(e), i.currentBlock = e;
      return;
    }
    let s;
    switch (t) {
      case this.positions.START:
        s = e.firstInput;
        break;
      case this.positions.END:
        s = e.lastInput;
        break;
      default:
        s = e.currentInput;
    }
    if (!s)
      return;
    let a, l = o;
    if (t === this.positions.START)
      a = h.getDeepestNode(s, !1), l = 0;
    else if (t === this.positions.END)
      a = h.getDeepestNode(s, !0), l = h.getContentLength(a);
    else {
      const { node: d, offset: u } = h.getNodeByOffset(s, o);
      d ? (a = d, l = u) : (a = h.getDeepestNode(s, !1), l = 0);
    }
    this.set(a, l), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = s;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: i } = this.Editor.BlockManager, r = h.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(r, 0);
        break;
      case this.positions.END:
        this.set(r, h.getContentLength(r));
        break;
      default:
        o && this.set(r, o);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: i, bottom: r } = b.setCursor(e, t), { innerHeight: s } = window;
    i < 0 ? window.scrollBy(0, i - 30) : r > s && window.scrollBy(0, r - s + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = b.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (h.isNativeInput(o)) {
          const i = o, r = document.createDocumentFragment(), s = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
          return r.textContent = a, i.value = s, r;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = !1) {
    const { BlockManager: t } = this.Editor, { currentBlock: o, nextBlock: i } = t;
    if (o === void 0)
      return !1;
    const { nextInput: r, currentInput: s } = o, a = s !== void 0 ? Oe(s) : void 0;
    let l = i;
    const c = e || a || !o.focusable;
    if (r && c)
      return this.setToInput(r, this.positions.START), !0;
    if (l === null) {
      if (o.tool.isDefault || !c)
        return !1;
      l = t.insertAtEnd();
    }
    return c ? (this.setToBlock(l, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = !1) {
    const { currentBlock: t, previousBlock: o } = this.Editor.BlockManager;
    if (!t)
      return !1;
    const { previousInput: i, currentInput: r } = t, s = r !== void 0 ? _e(r) : void 0, a = e || s || !t.focusable;
    return i && a ? (this.setToInput(i, this.positions.END), !0) : o !== null && a ? (this.setToBlock(o, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(Pe.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${Pe.CSS.shadowCaret}`);
    if (!t)
      return;
    new b().expandToTag(t);
    const i = document.createRange();
    i.selectNode(t), i.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), i = b.get(), r = b.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((c) => t.appendChild(c)), t.childNodes.length === 0 && t.appendChild(new Text());
    const s = t.lastChild;
    r.deleteContents(), r.insertNode(t);
    const a = document.createRange(), l = s.nodeType === Node.TEXT_NODE ? s : s.firstChild;
    l !== null && l.textContent !== null && a.setStart(l, l.textContent.length), i.removeAllRanges(), i.addRange(a);
  }
}
class sa extends B {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, r = t.getBlockByChildNode(e.target);
      if (!(!i || !r) && r !== i) {
        if (i === this.firstSelectedBlock) {
          b.get().removeAllRanges(), i.selected = !0, r.selected = !0, o.clearCache();
          return;
        }
        if (r === this.firstSelectedBlock) {
          i.selected = !1, r.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, r), this.lastSelectedBlock = r;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== Zn.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * Return boolean is cross block selection started:
   * there should be at least 2 selected blocks
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), b.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), r = t.blocks[i];
    r && (this.lastSelectedBlock.selected !== r.selected ? (r.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = r, this.Editor.InlineToolbar.close(), r.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, r = t.blocks.indexOf(this.firstSelectedBlock), s = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && r > -1 && s > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case y.DOWN:
        case y.RIGHT:
          i.setToBlock(t.blocks[Math.max(r, s)], i.positions.END);
          break;
        case y.UP:
        case y.LEFT:
          i.setToBlock(t.blocks[Math.min(r, s)], i.positions.START);
          break;
        default:
          i.setToBlock(t.blocks[Math.max(r, s)], i.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: i } = this.Editor, r = o.blocks.indexOf(e), s = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let l = Math.min(r, s); l <= Math.max(r, s); l++) {
      const c = o.blocks[l];
      c !== this.firstSelectedBlock && c !== (a ? e : t) && (o.blocks[l].selected = !o.blocks[l].selected, i.clearCache());
    }
  }
}
class aa extends B {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Paste: o,
      Caret: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((s) => {
      s.dropTarget = !1;
    }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const r = t.setCurrentBlockByChildNode(e.target);
    if (r)
      this.Editor.Caret.setToBlock(r, i.positions.END);
    else {
      const s = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(s, i.positions.END);
    }
    await o.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
const la = 180, ca = 400;
class da extends B {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = ca, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on(Fo, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on($o, () => {
      this.disable();
    }), this.eventsDispatcher.on(zo, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !O(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(at, {
      mutations: e
    });
  }
}
const Nn = class Pn extends B {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
      try {
        const t = e.create({}, {}, !1);
        if (e.pasteConfig === !1) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!O(t.onPaste))
          return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (t) {
        I(
          `Paste handling for «${e.name}» Tool hasn't been set up because of the error`,
          "warn",
          t
        );
      }
    }, this.handlePasteEvent = async (e) => {
      const { BlockManager: t, Toolbar: o } = this.Editor, i = t.setCurrentBlockByChildNode(e.target);
      !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(e, t = !1) {
    const { Tools: o } = this.Editor, i = e.types;
    if ((i.includes ? i.includes("Files") : i.contains("Files")) && !Y(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const s = e.getData(this.MIME_TYPE), a = e.getData("text/plain");
    let l = e.getData("text/html");
    if (s)
      try {
        this.insertEditorJSData(JSON.parse(s));
        return;
      } catch {
      }
    t && a.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : a) + "</p>");
    const c = Object.keys(this.toolsTags).reduce((p, g) => (p[g.toLowerCase()] = this.toolsTags[g].sanitizationConfig ?? {}, p), {}), d = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), { br: {} }), u = Z(l, d);
    !u.trim() || u.trim() === a || !h.isHTMLString(u) ? await this.processText(a) : await this.processText(u, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(e, t = !1) {
    const { Caret: o, BlockManager: i } = this.Editor, r = t ? this.processHTML(e) : this.processPlain(e);
    if (!r.length)
      return;
    if (r.length === 1) {
      r[0].isBlock ? this.processSingleBlock(r.pop()) : this.processInlinePaste(r.pop());
      return;
    }
    const a = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
    r.map(
      async (l, c) => this.insertBlock(l, c === 0 && a)
    ), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(e) {
    return J(e) ? [e] : P(e) ? Object.keys(e) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const t = e.pasteConfig.tags || [], o = [];
    t.forEach((i) => {
      const r = this.collectTagNames(i);
      o.push(...r), r.forEach((s) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, s)) {
          I(
            `Paste handler for «${e.name}» Tool on «${s}» tag is skipped because it is already used by «${this.toolsTags[s].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const a = P(i) ? i[s] : null;
        this.toolsTags[s.toUpperCase()] = {
          tool: e,
          sanitizationConfig: a
        };
      });
    }), this.tagsByTool[e.name] = o.map((i) => i.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const { files: t = {} } = e.pasteConfig;
    let { extensions: o, mimeTypes: i } = t;
    !o && !i || (o && !Array.isArray(o) && (I(`«extensions» property of the onDrop config for «${e.name}» Tool should be an array`), o = []), i && !Array.isArray(i) && (I(`«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`), i = []), i && (i = i.filter((r) => Jn(r) ? !0 : (I(`MIME type value «${r}» for the «${e.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[e.name] = {
      extensions: o || [],
      mimeTypes: i || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(e) {
    e.pasteConfig === !1 || !e.pasteConfig.patterns || Y(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o]) => {
      o instanceof RegExp || I(
        `Pattern ${o} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: t,
        pattern: o,
        tool: e
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(e) {
    return h.isNativeInput(e);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    o = await Promise.all(
      Array.from(e).map((s) => this.processFile(s))
    ), o = o.filter((s) => !!s);
    const r = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    o.forEach(
      (s, a) => {
        t.paste(s.type, s.event, a === 0 && r);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(e) {
    const t = Qn(e), o = Object.entries(this.toolsFiles).find(([s, { mimeTypes: a, extensions: l }]) => {
      const [c, d] = e.type.split("/"), u = l.find((g) => g.toLowerCase() === t.toLowerCase()), p = a.find((g) => {
        const [f, m] = g.split("/");
        return f === c && (m === d || m === "*");
      });
      return !!u || !!p;
    });
    if (!o)
      return;
    const [i] = o;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: i
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(e) {
    const { Tools: t } = this.Editor, o = h.make("DIV");
    return o.innerHTML = e, this.getNodes(o).map((r) => {
      let s, a = t.defaultTool, l = !1;
      switch (r.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          s = h.make("div"), s.appendChild(r);
          break;
        case Node.ELEMENT_NODE:
          s = r, l = !0, this.toolsTags[s.tagName] && (a = this.toolsTags[s.tagName].tool);
          break;
      }
      const { tags: c } = a.pasteConfig || { tags: [] }, d = c.reduce((g, f) => (this.collectTagNames(f).forEach((w) => {
        const E = P(f) ? f[w] : null;
        g[w.toLowerCase()] = E || {};
      }), g), {}), u = Object.assign({}, d, a.baseSanitizeConfig);
      if (s.tagName.toLowerCase() === "table") {
        const g = Z(s.outerHTML, u);
        s = h.make("div", void 0, {
          innerHTML: g
        }).firstChild;
      } else
        s.innerHTML = Z(s.innerHTML, u);
      const p = this.composePasteEvent("tag", {
        data: s
      });
      return {
        content: s,
        isBlock: l,
        tool: a.name,
        event: p
      };
    }).filter((r) => {
      const s = h.isEmpty(r.content), a = h.isSingleTag(r.content);
      return !s || a;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(e) {
    const { defaultBlock: t } = this.config;
    if (!e)
      return [];
    const o = t;
    return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
      const r = h.make("div");
      r.textContent = i;
      const s = this.composePasteEvent("tag", {
        data: r
      });
      return {
        content: r,
        tool: o,
        isBlock: !1,
        event: s
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(e) {
    const { Caret: t, BlockManager: o } = this.Editor, { currentBlock: i } = o;
    if (!i || e.tool !== i.name || !h.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(e, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { content: i } = e;
    if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < Pn.PATTERN_PROCESSING_MAX_LENGTH) {
      const s = await this.processPattern(i.textContent);
      if (s) {
        const a = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, l = t.paste(s.tool, s.event, a);
        o.setToBlock(l, o.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const s = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        Z(i.innerHTML, s)
      );
    } else
      this.insertBlock(e);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(e) {
    const t = this.toolsPatterns.find((i) => {
      const r = i.pattern.exec(e);
      return r ? e === r.shift() : !1;
    });
    return t ? {
      event: this.composePasteEvent("pattern", {
        key: t.key,
        data: e
      }),
      tool: t.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(e, t = !1) {
    const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: r } = o;
    let s;
    if (t && r && r.isEmpty) {
      s = o.paste(e.tool, e.event, !0), i.setToBlock(s, i.positions.END);
      return;
    }
    s = o.paste(e.tool, e.event), i.setToBlock(s, i.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(e) {
    const { BlockManager: t, Caret: o, Tools: i } = this.Editor;
    pt(
      e,
      (s) => i.blockTools.get(s).sanitizeConfig
    ).forEach(({ tool: s, data: a }, l) => {
      let c = !1;
      l === 0 && (c = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
      const d = t.insert({
        tool: s,
        data: a,
        replace: c
      });
      o.setToBlock(d, o.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(e, t, o) {
    const i = Object.keys(this.toolsTags), r = e, { tool: s } = this.toolsTags[r.tagName] || {}, a = this.tagsByTool[s == null ? void 0 : s.name] || [], l = i.includes(r.tagName), c = h.blockElements.includes(r.tagName.toLowerCase()), d = Array.from(r.children).some(
      ({ tagName: p }) => i.includes(p) && !a.includes(p)
    ), u = Array.from(r.children).some(
      ({ tagName: p }) => h.blockElements.includes(p.toLowerCase())
    );
    if (!c && !l && !d)
      return o.appendChild(r), [...t, o];
    if (l && !d || c && !u && !d)
      return [...t, o, r];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o;
    const i = (r, s) => {
      if (h.isEmpty(s) && !h.isSingleTag(s))
        return r;
      const a = r[r.length - 1];
      let l = new DocumentFragment();
      switch (a && h.isFragment(a) && (l = r.pop()), s.nodeType) {
        case Node.ELEMENT_NODE:
          if (o = this.processElementNode(s, r, l), o)
            return o;
          break;
        case Node.TEXT_NODE:
          return l.appendChild(s), [...r, l];
        default:
          return [...r, l];
      }
      return [...r, ...Array.from(s.childNodes).reduce(i, [])];
    };
    return t.reduce(i, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
Nn.PATTERN_PROCESSING_MAX_LENGTH = 450;
let ua = Nn;
class ha extends B {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([i, r]) => {
      r.isReadOnlySupported || o.push(i);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, !0);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param state - (optional) read-only state or toggle
   * @param isInitial - (optional) true when editor is initializing
   */
  async toggle(e = !this.readOnlyEnabled, t = !1) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const o = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const r in this.Editor)
      this.Editor[r].toggleReadOnly && this.Editor[r].toggleReadOnly(e);
    if (o === e)
      return this.readOnlyEnabled;
    if (t)
      return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const i = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new jo(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class we extends B {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const r = [
      `.${N.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], s = o.closest("." + this.Editor.UI.CSS.editorWrapper), a = r.some((l) => !!o.closest(l));
    !s || a || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, !1), this.listeners.on(document.body, "mousemove", ot((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", ot((t) => {
      this.processScroll(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    if (e.button !== this.MAIN_MOUSE_BUTTON)
      return;
    e.target.closest(h.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = h.make("div", we.CSS.overlay, {}), i = h.make("div", we.CSS.overlayContainer, {}), r = h.make("div", we.CSS.rect, {});
    return i.appendChild(r), o.appendChild(i), t.appendChild(o), this.overlayRectangle = r, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: i } = this.genInfoForMouseSelection(), r = this.startX > t && this.mouseX > t, s = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(r || s), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const t = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o), r = this.Editor.BlockManager.getBlockByChildNode(i);
    let s;
    r !== void 0 && (s = this.Editor.BlockManager.blocks.findIndex((u) => u.holder === r.holder));
    const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + N.CSS.content), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, c = t - l, d = t + l;
    return {
      index: s,
      leftPos: c,
      rightPos: d
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, r = -1, s = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let l = s;
    o > 1 && (l = a ? i : r);
    const c = e > this.stackOfSelected[o - 1] && l === i, d = e < this.stackOfSelected[o - 1] && l === r, p = !(c || d || l === s);
    if (!p && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let m = this.stackOfSelected[o - 1] + 1 || e;
      for (m; m <= e; m++)
        this.addBlockInSelection(m);
      return;
    }
    if (!p && e < this.stackOfSelected[o - 1]) {
      for (let m = this.stackOfSelected[o - 1] - 1; m >= e; m--)
        this.addBlockInSelection(m);
      return;
    }
    if (!p)
      return;
    let g = o - 1, f;
    for (e > this.stackOfSelected[o - 1] ? f = () => e > this.stackOfSelected[g] : f = () => e < this.stackOfSelected[g]; f(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g]), this.stackOfSelected.pop(), g--;
  }
}
class pa extends B {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: i } = this.Editor;
      if (e.length === 0)
        i.insert();
      else {
        const r = e.map(({ type: s, data: a, tunes: l, id: c }) => {
          o.available.has(s) === !1 && (U(`Tool «${s}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(s, a, c), s = o.stubTool);
          let d;
          try {
            d = i.composeBlock({
              id: c,
              tool: s,
              data: a,
              tunes: l
            });
          } catch (u) {
            I(`Block «${s}» skipped because of plugins error`, "error", {
              data: a,
              error: u
            }), a = this.composeStubDataForTool(s, a, c), s = o.stubTool, d = i.composeBlock({
              id: c,
              tool: s,
              data: a,
              tunes: l
            });
          }
          return d;
        });
        i.insertMany(r);
      }
      window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o) {
    const { Tools: i } = this.Editor;
    let r = e;
    if (i.unavailable.has(e)) {
      const s = i.unavailable.get(e).toolbox;
      s !== void 0 && s[0].title !== void 0 && (r = s[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: r
    };
  }
}
class fa extends B {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, i = [];
    try {
      o.forEach((a) => {
        i.push(this.getSavedData(a));
      });
      const r = await Promise.all(i), s = await pt(r, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(s);
    } catch (r) {
      U("Saving failed due to the Error %o", "error", r);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: i, data: r, tunes: s, isValid: a }) => {
      if (!a) {
        I(`Block «${i}» skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(r);
        return;
      }
      const l = {
        id: o,
        type: i,
        data: r,
        ...!Y(s) && {
          tunes: s
        }
      };
      t.push(l);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.31.6"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const ga = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function ma(n) {
  const e = document.createElement("div");
  e.innerHTML = n.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class ro {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : ro.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = ma(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: ga,
      title: "Text"
    };
  }
}
const ba = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.246 12.66c.482.33.872.746 1.173 1.246.3.5.451 1.088.451 1.764 0 .812-.17 1.498-.513 2.058-.342.56-.832 1.002-1.471 1.325-.677.346-1.457.59-2.34.733-.883.143-1.923.214-3.118.214H4.5a.5.5 0 1 1 0-1H5c1 0 1-1 1-3V8c0-2 0-3-1-3h-.5a.5.5 0 0 1 0-1h8.312c2.187 0 3.766.3 4.735.902.97.601 1.455 1.488 1.455 2.661 0 .541-.11 1.017-.327 1.426-.218.41-.53.765-.936 1.066a5.618 5.618 0 0 1-1.32.722c-.51.203-1.06.372-1.645.507v.214a9.13 9.13 0 0 1 1.826.39c.632.198 1.18.456 1.646.772zM15 7.83c0-.89-.301-1.585-.904-2.083C13.494 5.25 12.591 5 11.386 5c-.172 0-.396.006-.673.017l-.425.017a.3.3 0 0 0-.288.3V10.7a.3.3 0 0 0 .3.3h.407c1.467 0 2.55-.285 3.247-.855C14.65 9.575 15 8.804 15 7.83zm1 7.676c0-1.13-.402-1.998-1.205-2.6-.804-.604-1.96-.906-3.466-.906-.174 0-.404.006-.692.017a60.6 60.6 0 0 0-.35.015.3.3 0 0 0-.287.3v5.66c.082.282.338.521.767.716.43.195.95.292 1.562.292 1.087 0 1.97-.306 2.65-.917.68-.61 1.021-1.47 1.021-2.577z"/></svg>';
class so {
  constructor() {
    this.commandName = "bold";
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return {
      icon: ba,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
so.isInline = !0;
so.title = "Bold";
const va = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m6 20 .192-.823c.218-.008.515-.032.89-.073a4.42 4.42 0 0 0 .869-.164c.293-.098.516-.246.67-.445.155-.2.262-.43.322-.694l2.582-11.185a4.53 4.53 0 0 0 .079-.395c.015-.105.022-.184.022-.237 0-.315-.174-.561-.524-.738s-.885-.318-1.607-.423l.192-.823h8.874l-.192.823c-.24.015-.548.05-.924.107a5.816 5.816 0 0 0-.846.175c-.308.098-.536.25-.682.457-.147.206-.25.438-.31.693l-2.582 11.197c-.03.128-.055.248-.074.36-.018.113-.028.2-.028.26 0 .376.175.637.524.784.35.146.89.253 1.619.32l-.192.824z"/></svg>';
class ao {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = va, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
ao.isInline = !0;
ao.title = "Italic";
const ka = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12.056 20c-.875 0-1.691-.114-2.448-.342-.757-.229-1.398-.5-1.923-.814l-.696.75h-.858l-.131-5.492h.868c.195.52.444 1.07.747 1.648a8.039 8.039 0 0 0 1.05 1.552c.41.478.87.867 1.377 1.167.508.3 1.102.45 1.781.45.915 0 1.617-.238 2.105-.713.487-.474.731-1.072.731-1.792 0-.592-.207-1.09-.62-1.493-.414-.403-1.055-.751-1.923-1.044-.565-.192-1.085-.37-1.56-.535-.474-.164-.92-.332-1.336-.503-.963-.407-1.678-.988-2.145-1.744-.468-.757-.702-1.602-.702-2.537 0-.592.122-1.161.364-1.707a4.522 4.522 0 0 1 1.06-1.471c.444-.407 1.012-.739 1.705-.996a6.456 6.456 0 0 1 2.26-.384c.795 0 1.538.116 2.231.348s1.238.465 1.635.7l.616-.641h.878l.08 5.18h-.867a20.506 20.506 0 0 0-.712-1.707 7.501 7.501 0 0 0-.863-1.45 3.979 3.979 0 0 0-1.14-.99c-.43-.247-.935-.37-1.514-.37-.727 0-1.32.218-1.781.653s-.692.974-.692 1.616c0 .607.2 1.102.6 1.488.401.385 1.025.724 1.873 1.016.498.179 1.006.357 1.524.536.518.178.979.35 1.383.513.975.4 1.717.951 2.225 1.654s.762 1.574.762 2.617c0 .656-.145 1.291-.434 1.905a4.38 4.38 0 0 1-1.17 1.53c-.539.45-1.161.796-1.868 1.038-.706.243-1.53.364-2.472.364z"/><path fill="currentColor" d="m2 11h20v2h-20z"/></svg>';
class lo {
  constructor() {
    this.commandName = "strikeThrough";
  }
  static get sanitize() {
    return {
      s: {},
      strike: {}
    };
  }
  render() {
    return {
      icon: ka,
      name: "strikethrough",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  get shortcut() {
    return "CMD+SHIFT+S";
  }
}
lo.isInline = !0;
lo.title = "Strikethrough";
const _o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.75" fill="none" d="m10 14 4-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" fill="none" d="m16.5 13.5c3-3 3.5-5.5 1.5-7.5s-4.5-1.5-7.5 1.5m-3 3c-3 3-3.5 5.5-1.5 7.5s4.5 1.5 7.5-1.5"/></svg>', ya = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.75" fill="none" d="m10 14 4-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" fill="none" d="m16.5 13.5c3-3 3.5-5.5 1.5-7.5s-4.5-1.5-7.5 1.5m-3 3c-3 3-3.5 5.5-1.5 7.5s4.5 1.5 7.5-1.5"/><line x1="4" y1="20" x2="20" y2="4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>';
class co {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = _o, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.inputOpened ? (this.closeActions(!1), this.checkState()) : (this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close());
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = ya, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.defaultValue = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = _o, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new b();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), I("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
co.isInline = !0;
co.title = "Link";
function Rn(n) {
  return n.isContentEditable ? [n] : Array.from(n.querySelectorAll('[contenteditable="true"]'));
}
function Oo(n, e, t) {
  var r, s;
  if (e === n) {
    let a = 0;
    for (let l = 0; l < t && l < n.childNodes.length; l++)
      a += ((r = n.childNodes[l].textContent) == null ? void 0 : r.length) ?? 0;
    return a;
  }
  const o = document.createTreeWalker(n, NodeFilter.SHOW_TEXT);
  let i = 0;
  for (let a = o.nextNode(); a !== null; a = o.nextNode()) {
    if (a === e)
      return i + t;
    i += a.length;
  }
  if (e.nodeType === Node.ELEMENT_NODE && n.contains(e)) {
    let a = 0;
    for (let l = 0; l < t && l < e.childNodes.length; l++)
      a += ((s = e.childNodes[l].textContent) == null ? void 0 : s.length) ?? 0;
    return i + a;
  }
  return i;
}
function uo(n) {
  const e = Rn(n);
  if (e.length === 0)
    return null;
  const t = window.getSelection();
  if (!t || t.rangeCount === 0)
    return null;
  const o = t.getRangeAt(0), i = e.findIndex(
    (s) => s.contains(o.startContainer) && s.contains(o.endContainer)
  );
  if (i === -1)
    return null;
  const r = e[i];
  return {
    editableIndex: i,
    start: Oo(r, o.startContainer, o.startOffset),
    end: Oo(r, o.endContainer, o.endOffset)
  };
}
function ho(n, e) {
  var m;
  const t = Rn(n);
  if (t.length === 0)
    return;
  const o = t[Math.min(e.editableIndex, t.length - 1)], i = document.createTreeWalker(o, NodeFilter.SHOW_TEXT), r = ((m = o.textContent) == null ? void 0 : m.length) ?? 0, s = Math.min(e.start, r), a = Math.min(e.end, r);
  let l = 0, c = null, d = 0, u = null, p = 0;
  for (let w = i.nextNode(); w !== null; w = i.nextNode()) {
    const E = w.length;
    if (c === null && s >= l && s <= l + E && (c = w, d = s - l), u === null && a >= l && a <= l + E && (u = w, p = a - l), l += E, c !== null && u !== null)
      break;
  }
  if (c === null || u === null) {
    const w = document.createRange();
    w.selectNodeContents(o), w.collapse(!1);
    const E = window.getSelection();
    if (!E)
      return;
    E.removeAllRanges(), E.addRange(w);
    return;
  }
  const g = document.createRange();
  g.setStart(c, d), g.setEnd(u, p);
  const f = window.getSelection();
  f && (f.removeAllRanges(), f.addRange(g));
}
function tt(n) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><text x="3" y="17" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-weight="700" fill="currentColor">H</text><text x="13" y="20" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-weight="700" fill="currentColor">${n}</text></svg>`;
}
const wa = {
  2: tt(2),
  3: tt(3),
  4: tt(4)
}, xa = {
  2: "Heading",
  3: "Subheading",
  4: "Sub-subheading"
};
function po(n) {
  var e;
  const t = wa[n], o = `convert-heading-${n}`, i = xa[n];
  return e = class {
    constructor({ api: r }) {
      this.blocksAPI = r.blocks;
    }
    render() {
      return {
        icon: t,
        name: o,
        onActivate: async () => {
          var g;
          const r = b.get(), s = this.blocksAPI.getBlockByElement(
            r.anchorNode
          );
          if (!s)
            return;
          const a = uo(s.holder), l = s.name === "header" && Ao(s.holder) === n, c = l ? "paragraph" : "header", d = l ? void 0 : { level: n }, u = await this.blocksAPI.convert(
            s.id,
            c,
            d
          ), p = ((g = this.blocksAPI.getById(u.id)) == null ? void 0 : g.holder) ?? null;
          p && a && ho(p, a);
        },
        isActive: () => {
          const r = b.get();
          if (!r.anchorNode)
            return !1;
          const s = this.blocksAPI.getBlockByElement(
            r.anchorNode
          );
          return !s || s.name !== "header" ? !1 : Ao(s.holder) === n;
        }
      };
    }
  }, e.isInline = !0, e.title = i, e;
}
function Ao(n) {
  const e = n.querySelector("h1, h2, h3, h4, h5, h6");
  if (!e)
    return null;
  const t = parseInt(e.tagName.slice(1), 10);
  return t === 2 || t === 3 || t === 4 ? t : null;
}
const Ea = po(2), Ba = po(3), Ca = po(4), Ta = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.972 10l.01.14a3.54 3.54 0 0 1 .017.453l.001.157c0 4.28-2.686 7.75-6 7.75a.127.127 0 0 1-.063-.238c1.279-.73 2.132-1.464 2.558-2.203a5.474 5.474 0 0 0 .707-2.13A3.5 3.5 0 1 1 7.5 7a3.515 3.515 0 0 1 3.472 3.001zm9 0l.01.14a3.54 3.54 0 0 1 .017.453l.001.157c0 4.28-2.686 7.75-6 7.75a.127.127 0 0 1-.063-.238c1.279-.73 2.132-1.464 2.558-2.203a5.474 5.474 0 0 0 .707-2.13A3.5 3.5 0 1 1 16.5 7a3.515 3.515 0 0 1 3.472 3.001z"/></svg>';
class fo {
  constructor({ api: e }) {
    this.blocksAPI = e.blocks;
  }
  render() {
    return {
      icon: Ta,
      name: "convert-quote",
      onActivate: async () => {
        var l;
        const e = b.get(), t = this.blocksAPI.getBlockByElement(
          e.anchorNode
        );
        if (!t)
          return;
        const o = uo(t.holder), r = t.name === "quote" ? "paragraph" : "quote", s = await this.blocksAPI.convert(
          t.id,
          r
        ), a = ((l = this.blocksAPI.getById(s.id)) == null ? void 0 : l.holder) ?? null;
        a && o && ho(a, o);
      },
      isActive: () => {
        const e = b.get();
        if (!e.anchorNode)
          return !1;
        const t = this.blocksAPI.getBlockByElement(
          e.anchorNode
        );
        return t ? t.name === "quote" : !1;
      }
    };
  }
}
fo.isInline = !0;
fo.title = "Quote";
const Sa = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5.9a.9.9 0 0 1 .9-.9h11.2a.9.9 0 1 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM8 12a.9.9 0 0 1 .9-.9h11.2a.9.9 0 1 1 0 1.8H8.9A.9.9 0 0 1 8 12Zm0 6.1a.9.9 0 0 1 .9-.9h11.2a.9.9 0 1 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>', Ia = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5.9a.9.9 0 0 1 .9-.9h11.2a.9.9 0 0 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM8 12a.9.9 0 0 1 .9-.9h11.2a.9.9 0 0 1 0 1.8H8.9A.9.9 0 0 1 8 12Zm0 6.1a.9.9 0 0 1 .9-.9h11.2a.9.9 0 0 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM3.9 7.36c0 .41.2.64.55.64.35 0 .55-.23.55-.64V4.72C5 4.28 4.75 4 4.35 4a1.3 1.3 0 0 0-.7.23l-.37.24c-.18.13-.28.28-.28.45 0 .24.15.4.37.4.1 0 .2-.03.37-.14l.15-.1v2.28ZM3 13.52c0 .29.22.48.52.48h1.95c.33 0 .53-.17.53-.46 0-.3-.2-.47-.53-.47h-.93v-.05l.66-.6c.44-.41.66-.82.66-1.24 0-.68-.6-1.18-1.42-1.18-.78 0-1.44.5-1.44 1.06 0 .25.19.44.46.44.19 0 .3-.08.48-.3.15-.18.27-.25.44-.25.21 0 .37.14.37.35 0 .2-.13.38-.42.66l-.86.83c-.34.33-.46.52-.46.74Zm0 5.55c0 .52.64.93 1.43.93.92 0 1.57-.49 1.57-1.18 0-.5-.32-.87-.77-.9v-.08c.38-.03.67-.38.67-.8 0-.61-.6-1.04-1.46-1.04-.78 0-1.43.4-1.43.88 0 .25.2.43.45.43a.6.6 0 0 0 .43-.18c.2-.2.35-.27.53-.27.24 0 .42.14.42.33 0 .2-.18.33-.42.33h-.15c-.22 0-.38.2-.38.43 0 .26.16.44.38.44h.15c.3 0 .48.15.48.38 0 .22-.19.37-.48.37-.2 0-.38-.09-.56-.28-.15-.17-.29-.24-.44-.24-.24 0-.42.19-.42.45Z"/></svg>', _a = {
  unordered: "Bulleted list",
  ordered: "Numbered list"
}, Oa = {
  unordered: Sa,
  ordered: Ia
};
function Dn(n) {
  var e;
  const t = Oa[n], o = _a[n], i = `convert-list-${n}`;
  return e = class {
    constructor({ api: r }) {
      this.blocksAPI = r.blocks;
    }
    render() {
      return {
        icon: t,
        name: i,
        onActivate: async () => {
          var c;
          const r = b.get(), s = this.blocksAPI.getBlockByElement(
            r.anchorNode
          );
          if (!s || s.name !== "list")
            return;
          const a = uo(s.holder);
          await this.blocksAPI.update(s.id, { style: n });
          const l = ((c = this.blocksAPI.getById(s.id)) == null ? void 0 : c.holder) ?? null;
          l && a && ho(l, a);
        },
        isActive: () => {
          const r = b.get();
          if (!r.anchorNode)
            return !1;
          const s = this.blocksAPI.getBlockByElement(
            r.anchorNode
          );
          if (!s || s.name !== "list")
            return !1;
          const a = s.holder.querySelector("ol.cdx-list, ul.cdx-list");
          if (!a)
            return !1;
          const l = a.tagName === "OL";
          return n === "ordered" ? l : !l;
        }
      };
    }
  }, e.isInline = !0, e.title = o, e;
}
const Aa = Dn("unordered"), Ma = Dn("ordered");
class Hn {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = h.make("div", this.CSS.wrapper), t = er, o = h.make("div", this.CSS.info), i = h.make("div", this.CSS.title, {
      textContent: this.title
    }), r = h.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(r), e.appendChild(o), e;
  }
}
Hn.isReadOnlySupported = !0;
class La extends vt {
  constructor() {
    super(...arguments), this.type = ie.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[Ne.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Allows inline tool to be available in read-only mode
   * Can be used, for example, by comments tool
   */
  get isReadOnlySupported() {
    return this.constructable[Ne.IsReadOnlySupported] ?? !1;
  }
}
class Na extends vt {
  constructor() {
    super(...arguments), this.type = ie.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: t,
      data: e
    });
  }
}
class D extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new D(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new D(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new D(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new D(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new D(e);
  }
}
var Pa = Object.defineProperty, Ra = Object.getOwnPropertyDescriptor, jn = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Ra(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = (o ? s(e, t, i) : s(i)) || i);
  return o && i && Pa(e, t, i), i;
};
class go extends vt {
  constructor() {
    super(...arguments), this.type = ie.Block, this.inlineTools = new D(), this.tunes = new D();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[ue.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[ue.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[ue.Toolbox], t = this.config[ye.Toolbox];
    if (!Y(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
        const r = e[i];
        return r ? {
          ...r,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[ue.ConversionConfig];
  }
  /**
   * Returns true if tool should be hidden from the Toolbox (plus button)
   * while still being available in the "Convert to" menu
   */
  get toolboxHidden() {
    return this.config[ye.ToolboxHidden] === !0;
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[ye.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[ye.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[ue.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (Y(e))
      return t;
    const o = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const r = e[i];
        P(r) ? o[i] = Object.assign({}, t, r) : o[i] = r;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
jn([
  he
], go.prototype, "sanitizeConfig", 1);
jn([
  he
], go.prototype, "baseSanitizeConfig", 1);
class Da {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...i } = this.config[e], r = this.getConstructor(t), s = t[ct.IsTune];
    return new r({
      name: e,
      constructable: t,
      config: i,
      api: this.api.getMethodsForTool(e, s),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[Ne.IsInline]:
        return La;
      case e[ct.IsTune]:
        return Na;
      default:
        return go;
    }
  }
}
class Fn {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: qi,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, i = o.getBoundingClientRect();
    let r = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (r = window.scrollY + o.offsetHeight), window.scrollTo(0, r), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Fn.isTune = !0;
class $n {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Vi,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
$n.isTune = !0;
class zn {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Zi,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder, r = o.holder, s = i.getBoundingClientRect(), a = r.getBoundingClientRect();
    let l;
    a.top > 0 ? l = Math.abs(s.top) - Math.abs(a.top) : l = Math.abs(s.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
zn.isTune = !0;
var Ha = Object.defineProperty, ja = Object.getOwnPropertyDescriptor, Fa = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? ja(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (i = (o ? s(e, t, i) : s(i)) || i);
  return o && i && Ha(e, t, i), i;
};
class Un extends B {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new D(), this.toolsUnavailable = new D();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = it({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new Da(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await Gn(t, (o) => {
      this.toolPrepareMethodSuccess(o);
    }, (o) => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      O(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      link: {
        class: co,
        isInternal: !0
      },
      bold: {
        class: so,
        isInternal: !0
      },
      italic: {
        class: ao,
        isInternal: !0
      },
      strikethrough: {
        class: lo,
        isInternal: !0
      },
      convertHeadingH2: {
        class: Ea,
        isInternal: !0
      },
      convertHeadingH3: {
        class: Ba,
        isInternal: !0
      },
      convertHeadingH4: {
        class: Ca,
        isInternal: !0
      },
      convertQuote: {
        class: fo,
        isInternal: !0
      },
      convertListUnordered: {
        class: Aa,
        isInternal: !0
      },
      convertListOrdered: {
        class: Ma,
        isInternal: !0
      },
      paragraph: {
        class: ro,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: Hn,
        isInternal: !0
      },
      moveUp: {
        class: zn,
        isInternal: !0
      },
      delete: {
        class: $n,
        isInternal: !0
      },
      moveDown: {
        class: Fn,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const i = ["render"].filter((r) => !t.create()[r]);
      if (i.length) {
        I(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          i
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: O(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: i.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new D(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.filter((t) => this.inlineTools.has(t)).map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new D(
        e.enabledInlineTools.map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new D(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new D([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new D(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new D([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!O(t) && !O(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      P(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
}
Fa([
  he
], Un.prototype, "getAllInlineToolsSanitizeConfig", 1);
const $a = `:root{--selectionColor: var(--editor-selection, #e1f2ff);--inlineSelectionColor: var(--editor-inline-selection, #d4ecff);--bg-light: var(--editor-bg-light, #eff2f5);--grayText: var(--editor-text-secondary, #707684);--color-dark: var(--editor-text, #1D202B);--color-active-icon: var(--editor-active, #388AE5);--color-gray-border: var(--editor-border-icon, rgba(201, 201, 204, .48));--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: var(--editor-border, #EFF0F1) }.codex-editor{--editor-bg: #FFFFFF;--editor-bg-hover: #F8F8F8;--editor-bg-light: #eff2f5;--editor-text: #1D202B;--editor-text-secondary: #707684;--editor-border: #EFF0F1;--editor-border-icon: rgba(201, 201, 204, .48);--editor-border-input: rgba(226, 226, 229, .2);--editor-shadow: rgba(13, 20, 33, .1);--editor-shadow-overlay: rgba(13, 20, 33, .13);--editor-shadow-input: rgba(35, 44, 72, .06);--editor-shadow-focus: rgba(7, 161, 227, .08);--editor-active: #388AE5;--editor-active-bg: rgba(56, 138, 229, .1);--editor-focus-bg: rgba(34, 186, 255, .08);--editor-selection: #e1f2ff;--editor-inline-selection: #d4ecff;--editor-confirm: #E24A4A;--editor-confirm-hover: #CE4343;--editor-button-bg: #fff;--editor-button-bg-hover: #FBFCFE;--editor-button-shadow: rgba(18, 30, 57, .04);--editor-button-shadow-hover: rgba(18, 30, 57, .08);--editor-toolbar-btn-color: var(--editor-text);--editor-toolbar-btn-bg: transparent;--editor-toolbar-btn-hover-color: var(--editor-text);--editor-toolbar-btn-hover-bg: var(--editor-bg-light);--editor-inline-bg: var(--editor-bg);--editor-inline-border: var(--editor-border);--editor-inline-shadow: var(--editor-shadow-overlay);--editor-inline-separator: var(--editor-border-icon);--editor-inline-tool-color: var(--editor-text);--editor-inline-tool-hover-bg: var(--editor-bg-hover);--editor-inline-tool-hover-color: var(--editor-text);--editor-popover-icon-bg: transparent}@media (prefers-color-scheme: dark){.codex-editor:not(.codex-editor--light){--editor-bg: #1a1a1a;--editor-bg-hover: #252525;--editor-bg-light: #2a2a2e;--editor-text: #e5e5e5;--editor-text-secondary: #9ca3af;--editor-border: #2a2a2a;--editor-border-icon: rgba(100, 100, 104, .48);--editor-border-input: rgba(60, 60, 64, .4);--editor-shadow: rgba(0, 0, 0, .3);--editor-shadow-overlay: rgba(0, 0, 0, .4);--editor-shadow-input: rgba(0, 0, 0, .15);--editor-shadow-focus: rgba(7, 161, 227, .15);--editor-active: #60a5fa;--editor-active-bg: rgba(96, 165, 250, .15);--editor-focus-bg: rgba(34, 186, 255, .12);--editor-selection: #2d4263;--editor-inline-selection: #2d4263;--editor-confirm: #E24A4A;--editor-confirm-hover: #CE4343;--editor-button-bg: #2a2a2e;--editor-button-bg-hover: #3a3a3e;--editor-button-shadow: rgba(0, 0, 0, .15);--editor-button-shadow-hover: rgba(0, 0, 0, .25);--editor-toolbar-btn-color: var(--editor-text-secondary);--editor-toolbar-btn-bg: var(--editor-bg);--editor-toolbar-btn-hover-color: var(--editor-text);--editor-toolbar-btn-hover-bg: var(--editor-bg-hover);--editor-inline-bg: var(--editor-bg-light);--editor-inline-border: #3a3a3e;--editor-inline-shadow: rgba(0, 0, 0, .4);--editor-inline-separator: #383838;--editor-inline-tool-color: #c8c8cc;--editor-inline-tool-hover-bg: #3a3a3e;--editor-inline-tool-hover-color: #fff;--editor-popover-icon-bg: var(--editor-bg)}}.codex-editor.codex-editor--dark{--editor-bg: #1a1a1a;--editor-bg-hover: #252525;--editor-bg-light: #2a2a2e;--editor-text: #e5e5e5;--editor-text-secondary: #9ca3af;--editor-border: #2a2a2a;--editor-border-icon: rgba(100, 100, 104, .48);--editor-border-input: rgba(60, 60, 64, .4);--editor-shadow: rgba(0, 0, 0, .3);--editor-shadow-overlay: rgba(0, 0, 0, .4);--editor-shadow-input: rgba(0, 0, 0, .15);--editor-shadow-focus: rgba(7, 161, 227, .15);--editor-active: #60a5fa;--editor-active-bg: rgba(96, 165, 250, .15);--editor-focus-bg: rgba(34, 186, 255, .12);--editor-selection: #2d4263;--editor-inline-selection: #2d4263;--editor-confirm: #E24A4A;--editor-confirm-hover: #CE4343;--editor-button-bg: #2a2a2e;--editor-button-bg-hover: #3a3a3e;--editor-button-shadow: rgba(0, 0, 0, .15);--editor-button-shadow-hover: rgba(0, 0, 0, .25);--editor-toolbar-btn-color: var(--editor-text-secondary);--editor-toolbar-btn-bg: var(--editor-bg);--editor-toolbar-btn-hover-color: var(--editor-text);--editor-toolbar-btn-hover-bg: var(--editor-bg-hover);--editor-inline-bg: var(--editor-bg-light);--editor-inline-border: #3a3a3e;--editor-inline-shadow: rgba(0, 0, 0, .4);--editor-inline-separator: #383838;--editor-inline-tool-color: #c8c8cc;--editor-inline-tool-hover-bg: #3a3a3e;--editor-inline-tool-hover-color: #fff;--editor-popover-icon-bg: var(--editor-bg)}.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px;margin-right:var(--narrow-mode-right-padding)}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-left:var(--narrow-mode-right-padding);margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor ::-moz-selection{background-color:#d4ecff;background-color:var(--inlineSelectionColor)}.codex-editor ::selection{background-color:#d4ecff;background-color:var(--inlineSelectionColor)}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;max-width:var(--content-width);margin:0 auto;position:relative}.ce-toolbar__plus{color:var(--editor-toolbar-btn-color);background:var(--editor-toolbar-btn-bg);cursor:pointer;width:26px;width:var(--toolbox-buttons-size);height:26px;height:var(--toolbox-buttons-size);border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;width:var(--toolbox-buttons-size--mobile);height:36px;height:var(--toolbox-buttons-size--mobile)}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:var(--editor-toolbar-btn-hover-bg);color:var(--editor-toolbar-btn-hover-color)}}.ce-toolbar__plus--active{background-color:var(--editor-toolbar-btn-hover-bg);-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:var(--editor-bg);border:1px solid var(--editor-border);-webkit-box-shadow:0 3px 15px -3px var(--editor-shadow-overlay);box-shadow:0 3px 15px -3px var(--editor-shadow-overlay);border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:var(--editor-toolbar-btn-color);background:var(--editor-toolbar-btn-bg);width:26px;width:var(--toolbox-buttons-size);height:26px;height:var(--toolbox-buttons-size);border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;width:var(--toolbox-buttons-size--mobile);height:36px;height:var(--toolbox-buttons-size--mobile)}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:var(--editor-toolbar-btn-hover-bg);color:var(--editor-toolbar-btn-hover-color)}}.ce-toolbar__settings-btn--active{background-color:var(--editor-toolbar-btn-hover-bg);-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:var(--editor-bg);border:1px solid var(--editor-border);-webkit-box-shadow:0 3px 15px -3px var(--editor-shadow-overlay);box-shadow:0 3px 15px -3px var(--editor-shadow-overlay);border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-text-style-panel{position:absolute;top:0;left:0;z-index:3}.ce-inline-text-style-panel__container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;background:var(--editor-inline-bg, var(--editor-bg, #fff));border:1px solid #e8e8eb;border:1px solid var(--editor-inline-border, var(--editor-border, #e8e8eb));border-radius:12px;padding:4px;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.1);box-shadow:0 3px 15px -3px #0d14211a;-webkit-box-shadow:0 3px 15px -3px var(--editor-inline-shadow, rgba(13, 20, 33, .1));box-shadow:0 3px 15px -3px var(--editor-inline-shadow, rgba(13, 20, 33, .1))}.ce-inline-text-style-panel__btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px;border:none;border-radius:8px;background:transparent;color:currentColor;color:var(--editor-inline-tool-color, currentColor);cursor:pointer;padding:0;-webkit-transition:background .12s ease;transition:background .12s ease}.ce-inline-text-style-panel__btn:hover{background:#f0f1f3;background:var(--editor-bg-hover, #f0f1f3)}.ce-inline-text-style-panel__btn--active{background:#eff2fc;background:var(--editor-active-bg, #eff2fc);color:#388ae5;color:var(--editor-active, #388ae5)}.ce-inline-text-style-panel__btn svg{width:24px;height:24px}.ce-inline-text-style-panel__sep{width:1px;height:20px;background:#e8e8eb;background:var(--editor-inline-separator, var(--editor-border, #e8e8eb));margin:0 2px;-ms-flex-negative:0;flex-shrink:0}.ce-inline-text-style-panel__actions{padding:0 4px 4px}.ce-inline-tool-input{background:#f5f5f5;background:var(--editor-bg-hover, #f5f5f5);border:1px solid #e8e8eb;border:1px solid var(--editor-border-input, var(--editor-border, #e8e8eb));border-radius:8px;padding:4px 8px;font-size:14px;line-height:22px;color:#1d202b;color:var(--editor-text, #1d202b);outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684;color:var(--editor-text-secondary, #707684)}.ce-inline-tool-input::-moz-placeholder{color:#707684;color:var(--editor-text-secondary, #707684)}.ce-inline-tool-input:-ms-input-placeholder{color:#707684;color:var(--editor-text-secondary, #707684)}.ce-inline-tool-input::-ms-input-placeholder{color:#707684;color:var(--editor-text-secondary, #707684)}.ce-inline-tool-input::placeholder{color:#707684;color:var(--editor-text-secondary, #707684)}.ce-inline-tool-input--showed{display:block}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff;background:var(--editor-selection, #e1f2ff)}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;max-width:var(--content-width);margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border:solid var(--color-active-icon);border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;color:var(--color-active-icon);background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,var(--editor-bg) 1px,var(--editor-bg) 6px);background:repeating-linear-gradient(90deg,var(--color-active-icon),var(--color-active-icon) 1px,var(--editor-bg) 1px,var(--editor-bg) 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0;padding:var(--block-padding-vertical) 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);border:1px solid var(--color-gray-border);-webkit-box-shadow:inset 0 1px 2px 0 var(--editor-shadow-input);box-shadow:inset 0 1px 2px 0 var(--editor-shadow-input);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-width:var(--toolbox-buttons-size);min-height:26px;min-height:var(--toolbox-buttons-size)}.cdx-settings-button--focused{background:var(--editor-focus-bg)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px var(--editor-shadow-focus);box-shadow:inset 0 0 0 1px var(--editor-shadow-focus)}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5;color:var(--color-active-icon)}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;width:var(--icon-size--mobile);height:28px;height:var(--icon-size--mobile)}}@media (max-width: 650px){.cdx-settings-button{width:36px;width:var(--toolbox-buttons-size--mobile);height:36px;height:var(--toolbox-buttons-size--mobile);border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5;background-color:var(--bg-light)}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48);border:1px solid var(--color-gray-border)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border:2px solid var(--color-gray-border);border-left-color:#388ae5;border-left-color:var(--color-active-icon);border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);border:1px solid var(--color-gray-border);font-size:14.9px;background:var(--editor-button-bg);-webkit-box-shadow:0 2px 2px 0 var(--editor-button-shadow);box-shadow:0 2px 2px 0 var(--editor-button-shadow);color:#707684;color:var(--grayText);text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:var(--editor-button-bg-hover);-webkit-box-shadow:0 1px 3px 0 var(--editor-button-shadow-hover);box-shadow:0 1px 3px 0 var(--editor-button-shadow-hover)}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;background:var(--bg-light);border:1px solid #EFF0F1;border:1px solid var(--color-line-gray);color:#707684;color:var(--grayText);font-size:14px}.ce-stub svg{width:20px;width:var(--icon-size);height:20px;height:var(--icon-size)}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;right:calc(var(--toolbox-buttons-size) * -1);left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px;left:calc(var(--toolbox-buttons-size) * -1)}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);border-left:1px solid var(--color-gray-border);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:var(--editor-bg-hover);border:1px solid var(--editor-border-input);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;width:var(--toolbox-buttons-size);height:26px;height:var(--toolbox-buttons-size);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;width:var(--icon-size);height:20px;height:var(--icon-size);color:#707684;color:var(--grayText)}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right));min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;color:var(--grayText);font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;color:var(--grayText);font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;color:var(--grayText);font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;color:var(--grayText);font-weight:500}.cdx-search-field__input::placeholder{color:#707684;color:var(--grayText);font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: var(--editor-border);--color-shadow: var(--editor-shadow);--color-background: var(--editor-bg);--color-text-primary: var(--editor-text);--color-text-secondary: var(--editor-text-secondary);--color-border-icon: var(--editor-border-icon);--color-border-icon-disabled: var(--editor-border);--color-text-icon-active: var(--editor-active);--color-background-icon-active: var(--editor-active-bg);--color-background-item-focus: var(--editor-focus-bg);--color-shadow-item-focus: var(--editor-shadow-focus);--color-background-item-hover: var(--editor-bg-hover);--color-background-item-confirm: var(--editor-confirm);--color-background-item-confirm-hover: var(--editor-confirm-hover);--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:var(--editor-text);z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - 10px);min-width:calc(100% - var(--offset) * 2);left:5px;left:var(--offset);right:5px;right:var(--offset);bottom:calc(5px + env(safe-area-inset-bottom));bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:var(--editor-popover-icon-bg)}.ce-popover-item__icon svg{width:20px;width:var(--icon-size);height:20px;height:var(--icon-size)}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--editor-text)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;color:var(--grayText);cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;color:var(--grayText);cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}.ce-toolbar--vk-hidden{display:none!important}.ce-toolbar-vk-plus{position:absolute;z-index:3;background:none}.ce-toolbar-vk-plus__trigger{width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;cursor:pointer;color:#99a2ad;color:var(--muted, #99a2ad);background:#f0f1f3;background:var(--surface, #f0f1f3);-webkit-transition:background .15s ease,color .15s ease;transition:background .15s ease,color .15s ease}.ce-toolbar-vk-plus__trigger:hover{background:#e3e4e8;background:var(--hover, #e3e4e8);color:#656e80;color:var(--foreground, #656e80)}.ce-toolbar-vk-plus__trigger>svg{-webkit-transition:-webkit-transform .15s ease;transition:-webkit-transform .15s ease;transition:transform .15s ease;transition:transform .15s ease,-webkit-transform .15s ease}.codex-editor--toolbox-opened .ce-toolbar-vk-plus__trigger>svg{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-toolbar-vk-plus .ce-toolbox{position:absolute;top:0;left:40px}.ce-toolbar-vk-drag .ce-settings{position:absolute;top:calc(100% + 4px);left:0}@media (min-width: 651px){.ce-toolbar-vk-plus .ce-popover__container{top:0!important}.ce-toolbar-vk-plus .ce-popover__container{-webkit-transform:translateY(calc((34px - 100%)/2));transform:translateY(calc((34px - 100%)/2))}}.ce-toolbar-vk-drag{position:absolute;z-index:3;background:none}.ce-toolbar-vk-drag__trigger{width:26px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:7px;cursor:pointer;color:#c0c4cc;color:var(--muted, #c0c4cc)}.ce-toolbar-vk-drag__trigger:hover{background:#f0f1f3;background:var(--hover, #f0f1f3);color:#656e80;color:var(--foreground, #656e80)}@media (min-width: 651px){.ce-toolbox .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;padding:4px;-webkit-animation:none;animation:none;overflow:visible}.ce-toolbox .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:visible}.ce-toolbox .ce-popover-item__title{position:absolute;bottom:calc(100% + 8px);left:50%;-webkit-transform:translateX(-50%);transform:translate(-50%);opacity:0;pointer-events:none;white-space:nowrap;font-size:13px;line-height:1;padding:6px 10px;border-radius:7px;background:#fff;background:var(--popover-color-background, var(--color-background, #fff));color:#1d202b;color:var(--popover-color-text-primary, var(--color-text-primary, #1d202b));-webkit-box-shadow:0 2px 10px -2px rgba(0,0,0,.16);box-shadow:0 2px 10px -2px #00000029;border:1px solid #e8e8eb;border:1px solid var(--popover-color-border, var(--color-border, #e8e8eb));z-index:5;-webkit-transition:opacity .12s ease;transition:opacity .12s ease;margin-right:0}.ce-toolbox .ce-popover-item__title:after{content:"";position:absolute;top:100%;left:50%;-webkit-transform:translateX(-50%);transform:translate(-50%);border:5px solid transparent;border-top-color:#fff;border-top-color:var(--popover-color-background, var(--color-background, #fff))}.ce-toolbox .ce-popover-item:hover .ce-popover-item__title{opacity:1}.ce-toolbox .ce-popover-item{position:relative;padding:4px;margin-bottom:0}.ce-toolbox .ce-popover-item__icon--tool{margin-right:0;-webkit-box-shadow:none;box-shadow:none;background:transparent}.ce-toolbox .ce-popover-item__secondary-title{display:none}}.codex-editor{z-index:auto!important}@media (max-width: 650px){.codex-editor-overlay__container{pointer-events:none!important}.ce-inline-text-style-panel{position:fixed!important;top:100vh!important;top:var(--editor-vv-bottom, 100vh)!important;-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;bottom:auto!important;left:0!important;right:0!important;width:100%!important;max-width:100%!important;z-index:50!important}.ce-toolbar{position:fixed!important;top:100vh!important;top:var(--editor-vv-bottom, 100vh)!important;-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;bottom:auto!important;left:0!important;right:0!important;width:100%!important;z-index:49!important;background:var(--card-bg)!important;border-top:1px solid var(--border)!important;padding:6px 12px!important}.ce-toolbar__content{max-width:100%!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.ce-toolbar__plus,.ce-toolbar__settings-btn{position:static!important;-webkit-transform:none!important;transform:none!important}.ce-toolbar-vk-plus,.ce-toolbar-vk-drag{display:none!important}.ce-toolbar__actions{position:static!important;-webkit-transform:none!important;transform:none!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;opacity:1!important;right:auto!important}.ce-popover__overlay{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;background:rgba(0,0,0,.3)!important;z-index:51!important}.ce-popover--opened>.ce-popover__container{position:fixed!important;bottom:0!important;left:0!important;right:0!important;top:auto!important;max-height:50vh!important;width:100%!important;border-radius:12px 12px 0 0!important;overflow-y:auto!important;-webkit-box-shadow:0 -4px 16px rgba(0,0,0,.12)!important;box-shadow:0 -4px 16px #0000001f!important;z-index:52!important}.ce-popover--opened>.ce-popover__container{-webkit-overflow-scrolling:touch}}.ce-popover--vk-menu{--width: 212px}.ce-popover--vk-menu>.ce-popover__container{border-radius:8px;border:none;-webkit-box-shadow:rgba(0,0,0,.12) 0 0 8px 0,rgba(0,0,0,.16) 0 16px 16px 0;box-shadow:#0000001f 0 0 8px,#00000029 0 16px 16px;padding:0}.ce-popover--vk-menu.ce-popover--opened>.ce-popover__container{padding:6px 0 8px;border:none;-webkit-animation:vkMenuShowing .2s linear;animation:vkMenuShowing .2s linear}.ce-popover--vk-menu .ce-popover__items{overflow-y:auto}.ce-popover--vk-menu .ce-popover-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 8px 8px 12px;margin:0;border-radius:0;min-height:36px;background:transparent}.ce-popover--vk-menu .ce-popover-item:not(:last-of-type){margin-bottom:0}.ce-popover--vk-menu .ce-popover-item__icon{width:20px;height:20px;margin-right:12px;background:transparent;color:#447bba;-ms-flex-negative:0;flex-shrink:0}.ce-popover--vk-menu .ce-popover-item__icon svg{width:20px;height:20px;shape-rendering:geometricPrecision}.ce-popover--vk-menu .ce-popover-item__icon--tool{margin-right:12px;-webkit-box-shadow:none;box-shadow:none}.ce-popover--vk-menu .ce-popover-item__title{font-size:13px;line-height:20px;font-weight:400;color:#000}@media (hover: hover){.ce-popover--vk-menu .ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:#aeb7c21f}}.ce-popover--vk-menu .ce-popover-item--focused:not(.ce-popover-item--no-focus){background:rgba(174,183,194,.18)!important}.ce-popover--vk-menu .ce-popover-item--disabled{opacity:.5;cursor:default;pointer-events:none}.ce-popover--vk-menu .ce-popover-item--active{background:transparent;color:#000}.ce-popover--vk-menu .ce-popover-item--active .ce-popover-item__icon{color:#447bba;background:transparent}.ce-popover--vk-menu .ce-popover-item--vk-danger .ce-popover-item__icon,.ce-popover--vk-menu .ce-popover-item[data-item-name^=delete-] .ce-popover-item__icon,.ce-popover--vk-menu .ce-popover-item[data-item-name=delete] .ce-popover-item__icon{color:#e64646}.ce-popover--vk-menu .ce-popover-item--confirmation{background:transparent!important}.ce-popover--vk-menu .ce-popover-item--confirmation .ce-popover-item__title,.ce-popover--vk-menu .ce-popover-item--confirmation .ce-popover-item__icon{color:#e64646}.ce-popover--vk-menu .ce-popover--nested>.ce-popover__container{border-radius:8px;border:none;-webkit-box-shadow:rgba(0,0,0,.12) 0 0 8px 0,rgba(0,0,0,.16) 0 16px 16px 0;box-shadow:#0000001f 0 0 8px,#00000029 0 16px 16px}.ce-popover--vk-menu .ce-popover--nested.ce-popover--opened>.ce-popover__container{-webkit-animation:vkMenuShowing .2s linear;animation:vkMenuShowing .2s linear}@-webkit-keyframes vkMenuShowing{0%{opacity:0;-webkit-transform:translateY(4px);transform:translateY(4px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes vkMenuShowing{0%{opacity:0;-webkit-transform:translateY(4px);transform:translateY(4px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@media (max-width: 650px){.ce-popover--vk-menu .ce-popover-item{padding:12px 16px;min-height:44px}.ce-popover--vk-menu .ce-popover-item__icon{width:24px;height:24px;margin-right:14px}.ce-popover--vk-menu .ce-popover-item__icon svg{width:24px;height:24px}.ce-popover--vk-menu .ce-popover-item__title{font-size:15px;line-height:20px}}@media (prefers-color-scheme: dark){.ce-popover--vk-menu>.ce-popover__container,.ce-popover--vk-menu .ce-popover--nested>.ce-popover__container{background:rgb(40,40,40);-webkit-box-shadow:rgba(0,0,0,.24) 0 0 8px 0,rgba(0,0,0,.32) 0 16px 16px 0;box-shadow:#0000003d 0 0 8px,#00000052 0 16px 16px}.ce-popover--vk-menu .ce-popover-item__title{color:#c8c8c8}.ce-popover--vk-menu .ce-popover-item__icon{color:#78a5d7}.ce-popover--vk-menu .ce-popover-item--vk-danger .ce-popover-item__icon,.ce-popover--vk-menu .ce-popover-item[data-item-name^=delete-] .ce-popover-item__icon,.ce-popover--vk-menu .ce-popover-item[data-item-name=delete] .ce-popover-item__icon{color:#f06e6e}@media (hover: hover){.ce-popover--vk-menu .ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:#ffffff14}}.ce-popover--vk-menu .ce-popover-item--focused:not(.ce-popover-item--no-focus){background:rgba(255,255,255,.12)!important}}.ce-header{margin:0}h2.ce-header{font-size:1.5em;font-weight:700}h3.ce-header{font-size:1.25em;font-weight:700}h4.ce-header{font-size:1.1em;font-weight:600}
`;
class za extends B {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = null, this.resizeDebouncer = ko(() => {
      this.windowResize();
    }, 200), this.selectionChangeDebounced = ko(() => {
      this.selectionChanged();
    }, la), this.documentTouchedListener = (e) => {
      this.documentTouched(e);
    };
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache !== null)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${N.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.unbindReadOnlySensitiveListeners() : window.requestIdleCallback(() => {
      this.bindReadOnlySensitiveListeners();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    return !!(t.opened || o.opened || e.toolbox.opened);
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof se).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "", this.unbindReadOnlyInsensitiveListeners();
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    t.close(), o.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and save the result
   */
  setIsMobile() {
    const e = window.innerWidth < Po;
    e !== this.isMobile && this.eventsDispatcher.emit(Ee, {
      isEnabled: this.isMobile
    }), this.isMobile = e;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    var t;
    this.nodes.holder = h.getHolder(this.config.holder), this.nodes.wrapper = h.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = h.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px";
    const e = ((t = this.config.style) == null ? void 0 : t.theme) || "auto";
    e === "dark" ? this.nodes.wrapper.classList.add("codex-editor--dark") : e === "light" && this.nodes.wrapper.classList.add("codex-editor--light"), this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper), this.bindReadOnlyInsensitiveListeners();
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (h.get(e))
      return;
    const t = h.make("style", null, {
      id: e,
      textContent: $a.toString()
    });
    this.config.style && !Y(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), h.prepend(document.head, t);
  }
  /**
   * Adds listeners that should work both in read-only and read-write modes
   */
  bindReadOnlyInsensitiveListeners() {
    this.listeners.on(document, "selectionchange", this.selectionChangeDebounced), this.listeners.on(window, "resize", this.resizeDebouncer, {
      passive: !0
    }), this.listeners.on(this.nodes.redactor, "mousedown", this.documentTouchedListener, {
      capture: !0,
      passive: !0
    }), this.listeners.on(this.nodes.redactor, "touchstart", this.documentTouchedListener, {
      capture: !0,
      passive: !0
    });
  }
  /**
   * Removes listeners that should work both in read-only and read-write modes
   */
  unbindReadOnlyInsensitiveListeners() {
    this.listeners.off(document, "selectionchange", this.selectionChangeDebounced), this.listeners.off(window, "resize", this.resizeDebouncer), this.listeners.off(this.nodes.redactor, "mousedown", this.documentTouchedListener), this.listeners.off(this.nodes.redactor, "touchstart", this.documentTouchedListener);
  }
  /**
   * Adds listeners that should work only in read-only mode
   */
  bindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (e) => {
      this.redactorClicked(e);
    }, !1), this.readOnlyMutableListeners.on(document, "keydown", (e) => {
      this.documentKeydown(e);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (e) => {
      this.documentClicked(e);
    }, !0), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", ot((t) => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(sn, {
        block: this.Editor.BlockManager.getBlockByChildNode(o)
      }));
    }, 20), {
      passive: !0
    });
  }
  /**
   * Unbind events that should work only in read-only mode
   */
  unbindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.setIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case y.ENTER:
        this.enterPressed(e);
        break;
      case y.BACKSPACE:
      case y.DELETE:
        this.backspacePressed(e);
        break;
      case y.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      const r = t.removeSelectedBlocks(), s = t.insertDefaultBlockAtIndex(r, !0);
      i.setToBlock(s, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    if (this.someToolbarOpened)
      return;
    const i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const r = this.Editor.BlockManager.insert();
      e.preventDefault(), this.Editor.Caret.setToBlock(r), this.Editor.Toolbar.moveAndOpen(r);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var a, l;
    if (!e.isTrusted)
      return;
    const t = e.target;
    this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    const i = (a = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : a.contains(t), r = (l = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : l.contains(t), s = i || r;
    if (this.Editor.BlockSettings.opened && !s) {
      this.Editor.BlockSettings.close();
      const c = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(c);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.ReadOnly.isEnabled || this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!b.isCollapsed)
      return;
    const t = e.target, o = e.metaKey || e.ctrlKey, i = h.getClosestAnchor(t);
    if (i && o) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const r = i.getAttribute("href"), s = oi(r);
      ii(s);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1), o = h.offset(t.holder).bottom, i = e.pageY, { BlockSelection: r } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !r.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    o < i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: a, Caret: l, Toolbar: c } = this.Editor;
      (!a.lastBlock.tool.isDefault || !a.lastBlock.isEmpty) && a.insertAtEnd(), l.setToTheLastBlock(), c.moveAndOpen(a.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = b.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o) {
      b.range || this.Editor.InlineToolbar.close();
      return;
    }
    const i = o.closest(`.${N.CSS.content}`);
    (i === null || i.closest(`.${b.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o), this.Editor.InlineToolbar.tryToShow(!0));
  }
  /**
   * Editor.js provides and ability to show placeholders for empty contenteditable elements
   *
   * This method watches for input and focus events and toggles 'data-empty' attribute
   * to workaroud the case, when inputs contains only <br>s and has no visible content
   * Then, CSS could rely on this attribute to show placeholders
   */
  enableInputsEmptyMark() {
    function e(t) {
      const o = t.target;
      Ro(o);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
}
const Ua = {
  // API Modules
  BlocksAPI: bi,
  CaretAPI: ki,
  EventsAPI: yi,
  I18nAPI: ht,
  API: wi,
  InlineToolbarAPI: xi,
  ListenersAPI: Ei,
  NotifierAPI: Si,
  ReadOnlyAPI: Ii,
  SanitizerAPI: Pi,
  SaverAPI: Ri,
  SelectionAPI: Di,
  ToolsAPI: Hi,
  StylesAPI: ji,
  ToolbarAPI: Fi,
  TooltipAPI: Yi,
  UiAPI: Ki,
  // Toolbar Modules
  BlockSettings: ur,
  Toolbar: xr,
  InlineToolbar: Er,
  // Modules
  BlockEvents: ta,
  BlockManager: ia,
  BlockSelection: ra,
  Caret: Pe,
  CrossBlockSelection: sa,
  DragNDrop: aa,
  ModificationsObserver: da,
  Paste: ua,
  ReadOnly: ha,
  RectangleSelection: we,
  Renderer: pa,
  Saver: fa,
  Tools: Un,
  UI: za
};
class Wa {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new He();
    let t, o;
    this.isReady = new Promise((i, r) => {
      t = i, o = r;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: i, Caret: r, UI: s, ModificationsObserver: a } = this.moduleInstances;
      s.checkEmptiness(), a.enable(), this.configuration.autofocus === !0 && this.configuration.readOnly !== !0 && r.setToBlock(i.blocks[0], r.positions.START), t();
    }).catch((i) => {
      I(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o, i;
    P(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, rt(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = Mo.VERBOSE), qn(this.config.logLevel), rt(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (Y(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && ut.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (J(t) && !h.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && P(t) && !h.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (t, o) => t.then(async () => {
        try {
          await this.moduleInstances[o].prepare();
        } catch (i) {
          if (i instanceof jo)
            throw new Error(i.message);
          I(`Module ${o} was skipped because of %o`, "warn", i);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(Ua).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        I("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
class Ka {
  /** Editor version */
  static get version() {
    return "2.31.6";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    P(e) && O(e.onReady) && (t = e.onReady);
    const o = new Wa(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((r) => {
        O(r.destroy) && r.destroy(), r.listeners.removeAll();
      }), Wi(), e = null;
      for (const r in this)
        Object.prototype.hasOwnProperty.call(this, r) && delete this[r];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((r) => {
      this[r] = e[r];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([r, s]) => {
      Object.entries(s).forEach(([a, l]) => {
        this[l] = e.moduleInstances.API.methods[r][a];
      });
    });
  }
}
export {
  Qo as PopoverDesktop,
  q as PopoverEvent,
  W as PopoverItemType,
  en as PopoverMobile,
  wr as VkToolbarPlugin,
  Ka as default
};
