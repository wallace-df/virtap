

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js from "files.txt" begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/* Last merge : Tue Feb 11 18:18:16 -03 2025  */

/* Merging order :

- jquery-3.6.0.min.js
- bootstrap.min.js
- intlTelInput.min.js
- jquery.auto-complete.min.js
- cropme.min.js
- card-js.min.js
- ufs.js
- utils-v1.js

*/


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: jquery-3.6.0.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (C, e) { "use strict"; var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) { return t.flat.call(e) } : function (e) { return t.concat.apply([], e) }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item }, x = function (e) { return null != e && e === e.window }, E = C.document, c = { type: !0, src: !0, nonce: !0, noModule: !0 }; function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.6.0", S = function (e, t) { return new S.fn.init(e, t) }; function p(e) { var t = !!e && "length" in e && e.length, n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function () { return s.call(this) }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return S.each(this, e) }, map: function (n) { return this.pushStack(S.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(s.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, even: function () { return this.pushStack(S.grep(this, function (e, t) { return (t + 1) % 2 })) }, odd: function () { return this.pushStack(S.grep(this, function (e, t) { return t % 2 })) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function (e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function (e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (p(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function (n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) { return e === t && (l = !0), 0 }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, oe = function () { T() }, ae = be(function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) { (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]); c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) } function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function le(e) { return e[S] = !0, e } function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function fe(e, t) { var n = e.split("|"), r = n.length; while (r--) b.attrHandle[n[r]] = t } function pe(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function de(t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t } } function he(n) { return function (e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } } function ge(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function ve(a) { return le(function (o) { return o = +o, le(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { var t; a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, j = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function (e, t) { return se(e, null, null, t) }, se.matchesSelector = function (e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) } return 0 < se(t, C, null, [e]).length }, se.contains = function (e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function (e, t) { (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()], r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function (e) { return (e + "").replace(re, ie) }, se.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (h, e, t, g, v) { var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e; return 1 === g && 0 === v ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1; u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break; return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function (e) { var r = [], i = [], s = f(e.replace($, "$1")); return s[S] ? le(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function (t) { return function (e) { return 0 < se(t, e).length } }), contains: le(function (t) { return t = t.replace(te, ne), function (e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function (n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) { var t; do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === a }, focus: function (e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return J.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function () { return [0] }), last: ve(function (e, t) { return [t - 1] }), eq: ve(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ve(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e); function me() { } function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function be(s, e, t) { var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++; return e.first ? function (e, t, n) { while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n); return !1 } : function (e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } } function we(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) { var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--) (a = p[o]) && i.push(f[o] = a); y(null, p = [], i, r) } o = p.length; while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) } function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) { return e === i }, a, !0), l = be(function (e) { return -1 < P(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) } c.push(t) } return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function (e, t) { var n, v, y, m, x, r, i = [], o = [], a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a); (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++]) if (s(o, t || C, n)) { r.push(o); break } i && (k = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r)); f = Te(f) } H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function (e) { return null == e.getAttribute("disabled") }) || fe(R, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C); S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && S(e).is(n)) break; r.push(e) } return r }, T = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, k = S.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, n, r) { return m(n) ? S.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function (e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) } S.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function () { for (t = 0; t < r; t++)if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (S.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || D, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, D = S(E); var L = /^(?:parents|prev(?:Until|All))/, H = { children: !0, contents: !0, next: !0, prev: !0 }; function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } S.fn.extend({ has: function (e) { var t = S(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (S.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e); if (!k.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return h(e, "parentNode") }, parentsUntil: function (e, t, n) { return h(e, "parentNode", n) }, next: function (e) { return O(e, "nextSibling") }, prev: function (e) { return O(e, "previousSibling") }, nextAll: function (e) { return h(e, "nextSibling") }, prevAll: function (e) { return h(e, "previousSibling") }, nextUntil: function (e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return h(e, "previousSibling", n) }, siblings: function (e) { return T((e.parentNode || {}).firstChild, e) }, children: function (e) { return T(e.firstChild) }, contents: function (e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function (r, i) { S.fn[r] = function (e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g; function R(e) { return e } function M(e) { throw e } function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } S.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function (e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return S.each(arguments, function (e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, S.extend({ Deferred: function (e) { var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return S.Deferred(function (r) { S.each(o, function (e, t) { var n = m(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function (e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function (e) { return null != e ? S.extend(e, a) : a } }, s = {}; return S.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; S.Deferred.exceptionHook = function (e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function (e) { C.setTimeout(function () { throw e }) }; var F = S.Deferred(); function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() } S.fn.ready = function (e) { return F.then(e)["catch"](function (e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(S(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, _ = /^-ms-/, z = /-([a-z])/g; function U(e, t) { return t.toUpperCase() } function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function G() { this.expando = S.expando + G.uid++ } G.uid = 1, G.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] } (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g; function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) { } Q.set(e, t, n) } else n = void 0; return n } S.extend({ hasData: function (e) { return Q.hasData(e) || Y.hasData(e) }, data: function (e, t, n) { return Q.access(e, t, n) }, removeData: function (e, t) { Q.remove(e, t) }, _data: function (e, t, n) { return Y.access(e, t, n) }, _removeData: function (e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r])); Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { Q.set(this, n) }) : $(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0; this.each(function () { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { Q.remove(this, e) }) } }), S.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function () { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = S.queue(this, t, n); S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { S.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) { return S.contains(e.ownerDocument, e) }, oe = { composed: !0 }; re.getRootNode && (ie = function (e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") }; function se(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return S.css(e, t, "") }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {}; function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } S.fn.extend({ show: function () { return le(this, !0) }, hide: function () { return le(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i; ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n } function ye(e, t) { for (var n = 0, r = e.length; n < r; n++)Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) } ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/; function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^([^.]*)(?:\.(.+)|)/; function we() { return !0 } function Te() { return !1 } function Ce(e, t) { return e === function () { try { return E.activeElement } catch (e) { } }() == ("focus" === t) } function Ee(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function () { S.event.add(this, t, i, r, n) }) } function Se(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function (e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, we) } S.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) S.event.remove(e, d + t[l], n, r, !0); S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1 }, trigger: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0 }, _default: function (e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function (e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function (e, t) { S.event.special[e] = { setup: function () { return Se(this, e, Ce), !1 }, trigger: function () { return Se(this, e), !0 }, _default: function () { return !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function (e, t, n, r) { return Ee(this, e, t, n, r) }, one: function (e, t, n, r) { return Ee(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () { S.event.remove(this, e, n, t) }) } }); var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function je(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e } function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function qe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Le(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++)S.event.add(t, i, s[i][n]); Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } } function He(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l)) } return n } function Oe(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } S.extend({ htmlPrefilter: function (e) { return e }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)Le(o[r], a[r]); else Le(e, c); return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)if (V(n)) { if (t = n[Y.expando]) { if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle); n[Y.expando] = void 0 } n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function (e) { return Oe(this, e, !0) }, remove: function (e) { return Oe(this, e) }, text: function (e) { return $(this, function (e) { return void 0 === e ? S.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return He(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) }, prepend: function () { return He(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = je(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return S.clone(this, e, t) }) }, html: function (e) { return $(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return He(this, arguments, function (e) { var t = this.parentNode; S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { S.fn[e] = function (e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) }, Me = function (e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }, Ie = new RegExp(ne.join("|"), "i"); function We(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function Fe(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l); n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), s }, scrollboxSize: function () { return e(), i }, reliableTrDimensions: function () { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a } })) }(); var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {}; function ze(e) { var t = S.cssProps[e] || _e[e]; return t || (e in $e ? e : _e[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Be.length; while (n--) if ((e = Be[n] + t) in $e) return e }(e) || e) } var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" }; function Ye(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function Qe(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u } function Je(e, t, n) { var r = Re(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i, a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if (Pe.test(a)) { if (!n) return a; a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function Ke(e, t, n, r, i) { return new Ke.prototype.init(e, t, n, r, i) } S.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = We(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t), u = Xe.test(t), l = e.style; if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = X(t); return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function (e, u) { S.cssHooks[u] = { get: function (e, t, n) { if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () { return Je(e, u, n) }) }, set: function (e, t, n) { var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s) } } }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function (i, o) { S.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Ye) }), S.fn.extend({ css: function (e, t) { return $(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Re(e), i = t.length; a < i; a++)o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function () { var e = Ke.propHooks[this.prop]; return e && e.get ? e.get(this) : Ke.propHooks._default.get(this) }, run: function (e) { var t, n = Ke.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {}; var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/; function ot() { et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick()) } function at() { return C.setTimeout(function () { Ze = void 0 }), Ze = Date.now() } function st(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function ut(e, t, n) { for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function lt(o, e, t) { var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: Ze || at(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } S.Animation = S.extend(lt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function (e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], rt.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || S.style(e, r) } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function () { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) } }), S.speed = function (e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () { var e = lt(this, S.extend({}, t), o); (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || S.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), S.each(["toggle", "show", "hide"], function (e, r) { var i = S.fn[r]; S.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n) } }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { S.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function () { var e, t = 0, n = S.timers; for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || S.fx.stop(), Ze = void 0 }, S.fx.timer = function (e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function () { et || (et = !0, ot()) }, S.fx.stop = function () { et = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function (r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = C.setTimeout(e, r); t.stop = function () { C.clearTimeout(n) } }) }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value; var ct, ft = S.expr.attrHandle; S.fn.extend({ attr: function (e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { S.removeAttr(this, e) }) } }), S.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(P); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), ct = { set: function (e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = ft[t] || S.find.attr; ft[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r } }); var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i; function ht(e) { return (e.match(P) || []).join(" ") } function gt(e) { return e.getAttribute && e.getAttribute("class") || "" } function vt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] } S.fn.extend({ prop: function (e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).addClass(t.call(this, e, gt(this))) }); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, removeClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).removeClass(t.call(this, e, gt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (i, t) { var o = typeof i, a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) { S(this).toggleClass(i.call(this, e, gt(this), t), t) }) : this.each(function () { var e, t, n, r; if (a) { t = 0, n = S(this), r = vt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0; return !1 } }); var yt = /\r/g; S.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function (e) { var t = S.find.attr(e, "value"); return null != t ? t : ht(S.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = S.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function () { S.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) { e.stopPropagation() }; S.extend(S.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 }); S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function (e, t) { return this.each(function () { S.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function (n, r) { var i = function (e) { S.event.simulate(r, e.target, S.event.fix(e)) }; S.event.special[r] = { setup: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r); t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1; t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/; S.parseXML = function (e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) { return e.textContent }).join("\n") : e)), t }; var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i; function At(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function (e, t) { r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) At(n + "[" + t + "]", e[t], r, i) } S.param = function (e, t) { var n, r = [], i = function (e, t) { var n = m(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () { i(this.name, this.value) }); else for (n in e) At(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function () { return S.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function (e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } }); var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a"); function It(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(P) || []; if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function Wt(t, i, o, a) { var s = {}, u = t === Pt; function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function Ft(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e } Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e) }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = C.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () { }), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return S.get(e, t, n, "json") }, getScript: function (e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function (e, i) { S[i] = function (e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function (e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function (e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function (e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return m(n) ? this.each(function (e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = S(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = m(t); return this.each(function (e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function (e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function () { try { return new C.XMLHttpRequest } catch (e) { } }; var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr(); y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) { var o, a; if (y.cors || $t && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && C.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), S.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/; S.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = zt.pop() || S.expando + "_" + wt.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function () { o = arguments }, n.always(function () { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function (t) { return S.grep(S.timers, function (e) { return t === e.elem }).length }, S.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, S.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; S.fn[t] = function (e) { return $(this, function (e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function (e, n) { S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) { if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function (a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { S.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function (e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { S.fn[t] = function (e) { return this.on(t, e) } }), S.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { S.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; S.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function (e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function (e) { return null == e ? "" : (e + "").replace(Xt, "") }, "function" == typeof define && define.amd && define("jquery", [], function () { return S }); var Vt = C.jQuery, Gt = C.$; return S.noConflict = function (e) { return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: bootstrap.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper) }(this, (function (t) { "use strict"; function e(t) { if (t && t.__esModule) return t; const e = Object.create(null); if (t) for (const i in t) if ("default" !== i) { const s = Object.getOwnPropertyDescriptor(t, i); Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => t[i] }) } return e.default = t, Object.freeze(e) } const i = e(t), s = "transitionend", n = t => { let e = t.getAttribute("data-bs-target"); if (!e || "#" === e) { let i = t.getAttribute("href"); if (!i || !i.includes("#") && !i.startsWith(".")) return null; i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null } return e }, o = t => { const e = n(t); return e && document.querySelector(e) ? e : null }, r = t => { const e = n(t); return e ? document.querySelector(e) : null }, a = t => { t.dispatchEvent(new Event(s)) }, l = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), c = t => l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null, h = (t, e, i) => { Object.keys(i).forEach((s => { const n = i[s], o = e[s], r = o && l(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase(); var a; if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`) })) }, d = t => !(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"), u = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), g = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? g(t.parentNode) : null }, _ = () => { }, f = t => { t.offsetHeight }, p = () => { const { jQuery: t } = window; return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null }, m = [], b = () => "rtl" === document.documentElement.dir, v = t => { var e; e = () => { const e = p(); if (e) { const i = t.NAME, s = e.fn[i]; e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryInterface) } }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (() => { m.forEach((t => t())) })), m.push(e)) : e() }, y = t => { "function" == typeof t && t() }, E = (t, e, i = !0) => { if (!i) return void y(t); const n = (t => { if (!t) return 0; let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t); const s = Number.parseFloat(e), n = Number.parseFloat(i); return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0 })(e) + 5; let o = !1; const r = ({ target: i }) => { i === e && (o = !0, e.removeEventListener(s, r), y(t)) }; e.addEventListener(s, r), setTimeout((() => { o || a(e) }), n) }, w = (t, e, i, s) => { let n = t.indexOf(e); if (-1 === n) return t[!i && s ? t.length - 1 : 0]; const o = t.length; return n += i ? 1 : -1, s && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))] }, A = /[^.]*(?=\..*)\.|.*/, T = /\..*/, C = /::\d+$/, k = {}; let L = 1; const S = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /^(mouseenter|mouseleave)/i, N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]); function D(t, e) { return e && `${e}::${L++}` || t.uidEvent || L++ } function I(t) { const e = D(t); return t.uidEvent = e, k[e] = k[e] || {}, k[e] } function P(t, e, i = null) { const s = Object.keys(t); for (let n = 0, o = s.length; n < o; n++) { const o = t[s[n]]; if (o.originalHandler === e && o.delegationSelector === i) return o } return null } function x(t, e, i) { const s = "string" == typeof e, n = s ? i : e; let o = H(t); return N.has(o) || (o = t), [s, n, o] } function M(t, e, i, s, n) { if ("string" != typeof e || !t) return; if (i || (i = s, s = null), O.test(e)) { const t = t => function (e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) }; s ? s = t(s) : i = t(i) } const [o, r, a] = x(e, i, s), l = I(t), c = l[a] || (l[a] = {}), h = P(c, r, o ? i : null); if (h) return void (h.oneOff = h.oneOff && n); const d = D(r, e.replace(A, "")), u = o ? function (t, e, i) { return function s(n) { const o = t.querySelectorAll(e); for (let { target: r } = n; r && r !== this; r = r.parentNode)for (let a = o.length; a--;)if (o[a] === r) return n.delegateTarget = r, s.oneOff && $.off(t, n.type, e, i), i.apply(r, [n]); return null } }(t, i, s) : function (t, e) { return function i(s) { return s.delegateTarget = t, i.oneOff && $.off(t, s.type, e), e.apply(t, [s]) } }(t, i); u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o) } function j(t, e, i, s, n) { const o = P(e[i], s, n); o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]) } function H(t) { return t = t.replace(T, ""), S[t] || t } const $ = { on(t, e, i, s) { M(t, e, i, s, !1) }, one(t, e, i, s) { M(t, e, i, s, !0) }, off(t, e, i, s) { if ("string" != typeof e || !t) return; const [n, o, r] = x(e, i, s), a = r !== e, l = I(t), c = e.startsWith("."); if (void 0 !== o) { if (!l || !l[r]) return; return void j(t, l, r, o, n ? i : null) } c && Object.keys(l).forEach((i => { !function (t, e, i, s) { const n = e[i] || {}; Object.keys(n).forEach((o => { if (o.includes(s)) { const s = n[o]; j(t, e, i, s.originalHandler, s.delegationSelector) } })) }(t, l, i, e.slice(1)) })); const h = l[r] || {}; Object.keys(h).forEach((i => { const s = i.replace(C, ""); if (!a || e.includes(s)) { const e = h[i]; j(t, l, r, e.originalHandler, e.delegationSelector) } })) }, trigger(t, e, i) { if ("string" != typeof e || !t) return null; const s = p(), n = H(e), o = e !== n, r = N.has(n); let a, l = !0, c = !0, h = !1, d = null; return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== i && Object.keys(i).forEach((t => { Object.defineProperty(d, t, { get: () => i[t] }) })), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d } }, B = new Map, z = { set(t, e, i) { B.has(t) || B.set(t, new Map); const s = B.get(t); s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`) }, get: (t, e) => B.has(t) && B.get(t).get(e) || null, remove(t, e) { if (!B.has(t)) return; const i = B.get(t); i.delete(e), 0 === i.size && B.delete(t) } }; class R { constructor(t) { (t = c(t)) && (this._element = t, z.set(this._element, this.constructor.DATA_KEY, this)) } dispose() { z.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => { this[t] = null })) } _queueCallback(t, e, i = !0) { E(t, e, i) } static getInstance(t) { return z.get(c(t), this.DATA_KEY) } static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) } static get VERSION() { return "5.1.3" } static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') } static get DATA_KEY() { return `bs.${this.NAME}` } static get EVENT_KEY() { return `.${this.DATA_KEY}` } } const F = (t, e = "hide") => { const i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME; $.on(document, i, `[data-bs-dismiss="${s}"]`, (function (i) { if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this)) return; const n = r(this) || this.closest(`.${s}`); t.getOrCreateInstance(n)[e]() })) }; class q extends R { static get NAME() { return "alert" } close() { if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return; this._element.classList.remove("show"); const t = this._element.classList.contains("fade"); this._queueCallback((() => this._destroyElement()), this._element, t) } _destroyElement() { this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose() } static jQueryInterface(t) { return this.each((function () { const e = q.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } F(q, "close"), v(q); const W = '[data-bs-toggle="button"]'; class U extends R { static get NAME() { return "button" } toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) } static jQueryInterface(t) { return this.each((function () { const e = U.getOrCreateInstance(this); "toggle" === t && e[t]() })) } } function K(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) } function V(t) { return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)) } $.on(document, "click.bs.button.data-api", W, (t => { t.preventDefault(); const e = t.target.closest(W); U.getOrCreateInstance(e).toggle() })), v(U); const X = { setDataAttribute(t, e, i) { t.setAttribute(`data-bs-${V(e)}`, i) }, removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${V(e)}`) }, getDataAttributes(t) { if (!t) return {}; const e = {}; return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => { let s = i.replace(/^bs/, ""); s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = K(t.dataset[i]) })), e }, getDataAttribute: (t, e) => K(t.getAttribute(`data-bs-${V(e)}`)), offset(t) { const e = t.getBoundingClientRect(); return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset } }, position: t => ({ top: t.offsetTop, left: t.offsetLeft }) }, Y = { find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))), parents(t, e) { const i = []; let s = t.parentNode; for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;)s.matches(e) && i.push(s), s = s.parentNode; return i }, prev(t, e) { let i = t.previousElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.previousElementSibling } return [] }, next(t, e) { let i = t.nextElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.nextElementSibling } return [] }, focusableChildren(t) { const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", "); return this.find(e, t).filter((t => !u(t) && d(t))) } }, Q = "carousel", G = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, Z = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, J = "next", tt = "prev", et = "left", it = "right", st = { ArrowLeft: it, ArrowRight: et }, nt = "slid.bs.carousel", ot = "active", rt = ".active.carousel-item"; class at extends R { constructor(t, e) { super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Y.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners() } static get Default() { return G } static get NAME() { return Q } next() { this._slide(J) } nextWhenVisible() { !document.hidden && d(this._element) && this.next() } prev() { this._slide(tt) } pause(t) { t || (this._isPaused = !0), Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null } cycle(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) } to(t) { this._activeElement = Y.findOne(rt, this._element); const e = this._getItemIndex(this._activeElement); if (t > this._items.length - 1 || t < 0) return; if (this._isSliding) return void $.one(this._element, nt, (() => this.to(t))); if (e === t) return this.pause(), void this.cycle(); const i = t > e ? J : tt; this._slide(i, this._items[t]) } _getConfig(t) { return t = { ...G, ...X.getDataAttributes(this._element), ..."object" == typeof t ? t : {} }, h(Q, t, Z), t } _handleSwipe() { const t = Math.abs(this.touchDeltaX); if (t <= 40) return; const e = t / this.touchDeltaX; this.touchDeltaX = 0, e && this._slide(e > 0 ? it : et) } _addEventListeners() { this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), $.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners() } _addTouchEventListeners() { const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType), e = e => { t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX) }, i = t => { this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX }, s = e => { t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval)) }; Y.find(".carousel-item img", this._element).forEach((t => { $.on(t, "dragstart.bs.carousel", (t => t.preventDefault())) })), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", (t => e(t))), $.on(this._element, "pointerup.bs.carousel", (t => s(t))), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", (t => e(t))), $.on(this._element, "touchmove.bs.carousel", (t => i(t))), $.on(this._element, "touchend.bs.carousel", (t => s(t)))) } _keydown(t) { if (/input|textarea/i.test(t.target.tagName)) return; const e = st[t.key]; e && (t.preventDefault(), this._slide(e)) } _getItemIndex(t) { return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t) } _getItemByOrder(t, e) { const i = t === J; return w(this._items, e, i, this._config.wrap) } _triggerSlideEvent(t, e) { const i = this._getItemIndex(t), s = this._getItemIndex(Y.findOne(rt, this._element)); return $.trigger(this._element, "slide.bs.carousel", { relatedTarget: t, direction: e, from: s, to: i }) } _setActiveIndicatorElement(t) { if (this._indicatorsElement) { const e = Y.findOne(".active", this._indicatorsElement); e.classList.remove(ot), e.removeAttribute("aria-current"); const i = Y.find("[data-bs-target]", this._indicatorsElement); for (let e = 0; e < i.length; e++)if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) { i[e].classList.add(ot), i[e].setAttribute("aria-current", "true"); break } } } _updateInterval() { const t = this._activeElement || Y.findOne(rt, this._element); if (!t) return; const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10); e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval } _slide(t, e) { const i = this._directionToOrder(t), s = Y.findOne(rt, this._element), n = this._getItemIndex(s), o = e || this._getItemByOrder(i, s), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === J, c = l ? "carousel-item-start" : "carousel-item-end", h = l ? "carousel-item-next" : "carousel-item-prev", d = this._orderToDirection(i); if (o && o.classList.contains(ot)) return void (this._isSliding = !1); if (this._isSliding) return; if (this._triggerSlideEvent(o, d).defaultPrevented) return; if (!s || !o) return; this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o; const u = () => { $.trigger(this._element, nt, { relatedTarget: o, direction: d, from: n, to: r }) }; if (this._element.classList.contains("slide")) { o.classList.add(h), f(o), s.classList.add(c), o.classList.add(c); const t = () => { o.classList.remove(c, h), o.classList.add(ot), s.classList.remove(ot, h, c), this._isSliding = !1, setTimeout(u, 0) }; this._queueCallback(t, s, !0) } else s.classList.remove(ot), o.classList.add(ot), this._isSliding = !1, u(); a && this.cycle() } _directionToOrder(t) { return [it, et].includes(t) ? b() ? t === et ? tt : J : t === et ? J : tt : t } _orderToDirection(t) { return [J, tt].includes(t) ? b() ? t === tt ? et : it : t === tt ? it : et : t } static carouselInterface(t, e) { const i = at.getOrCreateInstance(t, e); let { _config: s } = i; "object" == typeof e && (s = { ...s, ...e }); const n = "string" == typeof e ? e : s.slide; if ("number" == typeof e) i.to(e); else if ("string" == typeof n) { if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`); i[n]() } else s.interval && s.ride && (i.pause(), i.cycle()) } static jQueryInterface(t) { return this.each((function () { at.carouselInterface(this, t) })) } static dataApiClickHandler(t) { const e = r(this); if (!e || !e.classList.contains("carousel")) return; const i = { ...X.getDataAttributes(e), ...X.getDataAttributes(this) }, s = this.getAttribute("data-bs-slide-to"); s && (i.interval = !1), at.carouselInterface(e, i), s && at.getInstance(e).to(s), t.preventDefault() } } $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", at.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", (() => { const t = Y.find('[data-bs-ride="carousel"]'); for (let e = 0, i = t.length; e < i; e++)at.carouselInterface(t[e], at.getInstance(t[e])) })), v(at); const lt = "collapse", ct = { toggle: !0, parent: null }, ht = { toggle: "boolean", parent: "(null|element)" }, dt = "show", ut = "collapse", gt = "collapsing", _t = "collapsed", ft = ":scope .collapse .collapse", pt = '[data-bs-toggle="collapse"]'; class mt extends R { constructor(t, e) { super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = []; const i = Y.find(pt); for (let t = 0, e = i.length; t < e; t++) { const e = i[t], s = o(e), n = Y.find(s).filter((t => t === this._element)); null !== s && n.length && (this._selector = s, this._triggerArray.push(e)) } this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle() } static get Default() { return ct } static get NAME() { return lt } toggle() { this._isShown() ? this.hide() : this.show() } show() { if (this._isTransitioning || this._isShown()) return; let t, e = []; if (this._config.parent) { const t = Y.find(ft, this._config.parent); e = Y.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e))) } const i = Y.findOne(this._selector); if (e.length) { const s = e.find((t => i !== t)); if (t = s ? mt.getInstance(s) : null, t && t._isTransitioning) return } if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return; e.forEach((e => { i !== e && mt.getOrCreateInstance(e, { toggle: !1 }).hide(), t || z.set(e, "bs.collapse", null) })); const s = this._getDimension(); this._element.classList.remove(ut), this._element.classList.add(gt), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0; const n = `scroll${s[0].toUpperCase() + s.slice(1)}`; this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut, dt), this._element.style[s] = "", $.trigger(this._element, "shown.bs.collapse") }), this._element, !0), this._element.style[s] = `${this._element[n]}px` } hide() { if (this._isTransitioning || !this._isShown()) return; if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return; const t = this._getDimension(); this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, f(this._element), this._element.classList.add(gt), this._element.classList.remove(ut, dt); const e = this._triggerArray.length; for (let t = 0; t < e; t++) { const e = this._triggerArray[t], i = r(e); i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1) } this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut), $.trigger(this._element, "hidden.bs.collapse") }), this._element, !0) } _isShown(t = this._element) { return t.classList.contains(dt) } _getConfig(t) { return (t = { ...ct, ...X.getDataAttributes(this._element), ...t }).toggle = Boolean(t.toggle), t.parent = c(t.parent), h(lt, t, ht), t } _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" } _initializeChildren() { if (!this._config.parent) return; const t = Y.find(ft, this._config.parent); Y.find(pt, this._config.parent).filter((e => !t.includes(e))).forEach((t => { const e = r(t); e && this._addAriaAndCollapsedClass([t], this._isShown(e)) })) } _addAriaAndCollapsedClass(t, e) { t.length && t.forEach((t => { e ? t.classList.remove(_t) : t.classList.add(_t), t.setAttribute("aria-expanded", e) })) } static jQueryInterface(t) { return this.each((function () { const e = {}; "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1); const i = mt.getOrCreateInstance(this, e); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t]() } })) } } $.on(document, "click.bs.collapse.data-api", pt, (function (t) { ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault(); const e = o(this); Y.find(e).forEach((t => { mt.getOrCreateInstance(t, { toggle: !1 }).toggle() })) })), v(mt); const bt = "dropdown", vt = "Escape", yt = "Space", Et = "ArrowUp", wt = "ArrowDown", At = new RegExp("ArrowUp|ArrowDown|Escape"), Tt = "click.bs.dropdown.data-api", Ct = "keydown.bs.dropdown.data-api", kt = "show", Lt = '[data-bs-toggle="dropdown"]', St = ".dropdown-menu", Ot = b() ? "top-end" : "top-start", Nt = b() ? "top-start" : "top-end", Dt = b() ? "bottom-end" : "bottom-start", It = b() ? "bottom-start" : "bottom-end", Pt = b() ? "left-start" : "right-start", xt = b() ? "right-start" : "left-start", Mt = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 }, jt = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" }; class Ht extends R { constructor(t, e) { super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar() } static get Default() { return Mt } static get DefaultType() { return jt } static get NAME() { return bt } toggle() { return this._isShown() ? this.hide() : this.show() } show() { if (u(this._element) || this._isShown(this._menu)) return; const t = { relatedTarget: this._element }; if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return; const e = Ht.getParentFromElement(this._element); this._inNavbar ? X.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => $.on(t, "mouseover", _))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(kt), this._element.classList.add(kt), $.trigger(this._element, "shown.bs.dropdown", t) } hide() { if (u(this._element) || !this._isShown(this._menu)) return; const t = { relatedTarget: this._element }; this._completeHide(t) } dispose() { this._popper && this._popper.destroy(), super.dispose() } update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() } _completeHide(t) { $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => $.off(t, "mouseover", _))), this._popper && this._popper.destroy(), this._menu.classList.remove(kt), this._element.classList.remove(kt), this._element.setAttribute("aria-expanded", "false"), X.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t)) } _getConfig(t) { if (t = { ...this.constructor.Default, ...X.getDataAttributes(this._element), ...t }, h(bt, t, this.constructor.DefaultType), "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t } _createPopper(t) { if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let e = this._element; "parent" === this._config.reference ? e = t : l(this._config.reference) ? e = c(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference); const s = this._getPopperConfig(), n = s.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled)); this._popper = i.createPopper(e, this._menu, s), n && X.setDataAttribute(this._menu, "popper", "static") } _isShown(t = this._element) { return t.classList.contains(kt) } _getMenuElement() { return Y.next(this._element, St)[0] } _getPlacement() { const t = this._element.parentNode; if (t.classList.contains("dropend")) return Pt; if (t.classList.contains("dropstart")) return xt; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? Nt : Ot : e ? It : Dt } _detectNavbar() { return null !== this._element.closest(".navbar") } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } } _selectMenuItem({ key: t, target: e }) { const i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(d); i.length && w(i, e, t === wt, !i.includes(e)).focus() } static jQueryInterface(t) { return this.each((function () { const e = Ht.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } static clearMenus(t) { if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return; const e = Y.find(Lt); for (let i = 0, s = e.length; i < s; i++) { const s = Ht.getInstance(e[i]); if (!s || !1 === s._config.autoClose) continue; if (!s._isShown()) continue; const n = { relatedTarget: s._element }; if (t) { const e = t.composedPath(), i = e.includes(s._menu); if (e.includes(s._element) || "inside" === s._config.autoClose && !i || "outside" === s._config.autoClose && i) continue; if (s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue; "click" === t.type && (n.clickEvent = t) } s._completeHide(n) } } static getParentFromElement(t) { return r(t) || t.parentNode } static dataApiKeydownHandler(t) { if (/input|textarea/i.test(t.target.tagName) ? t.key === yt || t.key !== vt && (t.key !== wt && t.key !== Et || t.target.closest(St)) : !At.test(t.key)) return; const e = this.classList.contains(kt); if (!e && t.key === vt) return; if (t.preventDefault(), t.stopPropagation(), u(this)) return; const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0], s = Ht.getOrCreateInstance(i); if (t.key !== vt) return t.key === Et || t.key === wt ? (e || s.show(), void s._selectMenuItem(t)) : void (e && t.key !== yt || Ht.clearMenus()); s.hide() } } $.on(document, Ct, Lt, Ht.dataApiKeydownHandler), $.on(document, Ct, St, Ht.dataApiKeydownHandler), $.on(document, Tt, Ht.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus), $.on(document, Tt, Lt, (function (t) { t.preventDefault(), Ht.getOrCreateInstance(this).toggle() })), v(Ht); const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Bt = ".sticky-top"; class zt { constructor() { this._element = document.body } getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) } hide() { const t = this.getWidth(); this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes($t, "paddingRight", (e => e + t)), this._setElementAttributes(Bt, "marginRight", (e => e - t)) } _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" } _setElementAttributes(t, e, i) { const s = this.getWidth(); this._applyManipulationCallback(t, (t => { if (t !== this._element && window.innerWidth > t.clientWidth + s) return; this._saveInitialAttribute(t, e); const n = window.getComputedStyle(t)[e]; t.style[e] = `${i(Number.parseFloat(n))}px` })) } reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes($t, "paddingRight"), this._resetElementAttributes(Bt, "marginRight") } _saveInitialAttribute(t, e) { const i = t.style[e]; i && X.setDataAttribute(t, e, i) } _resetElementAttributes(t, e) { this._applyManipulationCallback(t, (t => { const i = X.getDataAttribute(t, e); void 0 === i ? t.style.removeProperty(e) : (X.removeDataAttribute(t, e), t.style[e] = i) })) } _applyManipulationCallback(t, e) { l(t) ? e(t) : Y.find(t, this._element).forEach(e) } isOverflowing() { return this.getWidth() > 0 } } const Rt = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null }, Ft = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" }, qt = "show", Wt = "mousedown.bs.backdrop"; class Ut { constructor(t) { this._config = this._getConfig(t), this._isAppended = !1, this._element = null } show(t) { this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add(qt), this._emulateAnimation((() => { y(t) }))) : y(t) } hide(t) { this._config.isVisible ? (this._getElement().classList.remove(qt), this._emulateAnimation((() => { this.dispose(), y(t) }))) : y(t) } _getElement() { if (!this._element) { const t = document.createElement("div"); t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t } return this._element } _getConfig(t) { return (t = { ...Rt, ..."object" == typeof t ? t : {} }).rootElement = c(t.rootElement), h("backdrop", t, Ft), t } _append() { this._isAppended || (this._config.rootElement.append(this._getElement()), $.on(this._getElement(), Wt, (() => { y(this._config.clickCallback) })), this._isAppended = !0) } dispose() { this._isAppended && ($.off(this._element, Wt), this._element.remove(), this._isAppended = !1) } _emulateAnimation(t) { E(t, this._getElement(), this._config.isAnimated) } } const Kt = { trapElement: null, autofocus: !0 }, Vt = { trapElement: "element", autofocus: "boolean" }, Xt = ".bs.focustrap", Yt = "backward"; class Qt { constructor(t) { this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null } activate() { const { trapElement: t, autofocus: e } = this._config; this._isActive || (e && t.focus(), $.off(document, Xt), $.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), $.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0) } deactivate() { this._isActive && (this._isActive = !1, $.off(document, Xt)) } _handleFocusin(t) { const { target: e } = t, { trapElement: i } = this._config; if (e === document || e === i || i.contains(e)) return; const s = Y.focusableChildren(i); 0 === s.length ? i.focus() : this._lastTabNavDirection === Yt ? s[s.length - 1].focus() : s[0].focus() } _handleKeydown(t) { "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Yt : "forward") } _getConfig(t) { return t = { ...Kt, ..."object" == typeof t ? t : {} }, h("focustrap", t, Vt), t } } const Gt = "modal", Zt = "Escape", Jt = { backdrop: !0, keyboard: !0, focus: !0 }, te = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" }, ee = "hidden.bs.modal", ie = "show.bs.modal", se = "resize.bs.modal", ne = "click.dismiss.bs.modal", oe = "keydown.dismiss.bs.modal", re = "mousedown.dismiss.bs.modal", ae = "modal-open", le = "show", ce = "modal-static"; class he extends R { constructor(t, e) { super(t), this._config = this._getConfig(e), this._dialog = Y.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new zt } static get Default() { return Jt } static get NAME() { return Gt } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || this._isTransitioning || $.trigger(this._element, ie, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(ae), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._dialog, re, (() => { $.one(this._element, "mouseup.dismiss.bs.modal", (t => { t.target === this._element && (this._ignoreBackdropClick = !0) })) })), this._showBackdrop((() => this._showElement(t)))) } hide() { if (!this._isShown || this._isTransitioning) return; if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return; this._isShown = !1; const t = this._isAnimated(); t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(le), $.off(this._element, ne), $.off(this._dialog, re), this._queueCallback((() => this._hideModal()), this._element, t) } dispose() { [window, this._dialog].forEach((t => $.off(t, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } handleUpdate() { this._adjustDialog() } _initializeBackDrop() { return new Ut({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) } _initializeFocusTrap() { return new Qt({ trapElement: this._element }) } _getConfig(t) { return t = { ...Jt, ...X.getDataAttributes(this._element), ..."object" == typeof t ? t : {} }, h(Gt, t, te), t } _showElement(t) { const e = this._isAnimated(), i = Y.findOne(".modal-body", this._dialog); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add(le), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, $.trigger(this._element, "shown.bs.modal", { relatedTarget: t }) }), this._dialog, e) } _setEscapeEvent() { this._isShown ? $.on(this._element, oe, (t => { this._config.keyboard && t.key === Zt ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Zt || this._triggerBackdropTransition() })) : $.off(this._element, oe) } _setResizeEvent() { this._isShown ? $.on(window, se, (() => this._adjustDialog())) : $.off(window, se) } _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(ae), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, ee) })) } _showBackdrop(t) { $.on(this._element, ne, (t => { this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition()) })), this._backdrop.show(t) } _isAnimated() { return this._element.classList.contains("fade") } _triggerBackdropTransition() { if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const { classList: t, scrollHeight: e, style: i } = this._element, s = e > document.documentElement.clientHeight; !s && "hidden" === i.overflowY || t.contains(ce) || (s || (i.overflowY = "hidden"), t.add(ce), this._queueCallback((() => { t.remove(ce), s || this._queueCallback((() => { i.overflowY = "" }), this._dialog) }), this._dialog), this._element.focus()) } _adjustDialog() { const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0; (!i && t && !b() || i && !t && b()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !b() || !i && t && b()) && (this._element.style.paddingRight = `${e}px`) } _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" } static jQueryInterface(t, e) { return this.each((function () { const i = he.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t](e) } })) } } $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) { const e = r(this);["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, ie, (t => { t.defaultPrevented || $.one(e, ee, (() => { d(this) && this.focus() })) })); const i = Y.findOne(".modal.show"); i && he.getInstance(i).hide(), he.getOrCreateInstance(e).toggle(this) })), F(he), v(he); const de = "offcanvas", ue = { backdrop: !0, keyboard: !0, scroll: !1 }, ge = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" }, _e = "show", fe = ".offcanvas.show", pe = "hidden.bs.offcanvas"; class me extends R { constructor(t, e) { super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() } static get NAME() { return de } static get Default() { return ue } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || $.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new zt).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(_e), this._queueCallback((() => { this._config.scroll || this._focustrap.activate(), $.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }), this._element, !0)) } hide() { this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(_e), this._backdrop.hide(), this._queueCallback((() => { this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new zt).reset(), $.trigger(this._element, pe) }), this._element, !0))) } dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } _getConfig(t) { return t = { ...ue, ...X.getDataAttributes(this._element), ..."object" == typeof t ? t : {} }, h(de, t, ge), t } _initializeBackDrop() { return new Ut({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() }) } _initializeFocusTrap() { return new Qt({ trapElement: this._element }) } _addEventListeners() { $.on(this._element, "keydown.dismiss.bs.offcanvas", (t => { this._config.keyboard && "Escape" === t.key && this.hide() })) } static jQueryInterface(t) { return this.each((function () { const e = me.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) { const e = r(this); if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this)) return; $.one(e, pe, (() => { d(this) && this.focus() })); const i = Y.findOne(fe); i && i !== e && me.getInstance(i).hide(), me.getOrCreateInstance(e).toggle(this) })), $.on(window, "load.bs.offcanvas.data-api", (() => Y.find(fe).forEach((t => me.getOrCreateInstance(t).show())))), F(me), v(me); const be = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, ye = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ee = (t, e) => { const i = t.nodeName.toLowerCase(); if (e.includes(i)) return !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue)); const s = e.filter((t => t instanceof RegExp)); for (let t = 0, e = s.length; t < e; t++)if (s[t].test(i)) return !0; return !1 }; function we(t, e, i) { if (!t.length) return t; if (i && "function" == typeof i) return i(t); const s = (new window.DOMParser).parseFromString(t, "text/html"), n = [].concat(...s.body.querySelectorAll("*")); for (let t = 0, i = n.length; t < i; t++) { const i = n[t], s = i.nodeName.toLowerCase(); if (!Object.keys(e).includes(s)) { i.remove(); continue } const o = [].concat(...i.attributes), r = [].concat(e["*"] || [], e[s] || []); o.forEach((t => { Ee(t, r) || i.removeAttribute(t.nodeName) })) } return s.body.innerHTML } const Ae = "tooltip", Te = new Set(["sanitize", "allowList", "sanitizeFn"]), Ce = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, ke = { AUTO: "auto", TOP: "top", RIGHT: b() ? "left" : "right", BOTTOM: "bottom", LEFT: b() ? "right" : "left" }, Le = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: !0, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Se = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, Oe = "fade", Ne = "show", De = "show", Ie = "out", Pe = ".tooltip-inner", xe = ".modal", Me = "hide.bs.modal", je = "hover", He = "focus"; class $e extends R { constructor(t, e) { if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners() } static get Default() { return Le } static get NAME() { return Ae } static get Event() { return Se } static get DefaultType() { return Ce } enable() { this._isEnabled = !0 } disable() { this._isEnabled = !1 } toggleEnabled() { this._isEnabled = !this._isEnabled } toggle(t) { if (this._isEnabled) if (t) { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e) } else { if (this.getTipElement().classList.contains(Ne)) return void this._leave(null, this); this._enter(null, this) } } dispose() { clearTimeout(this._timeout), $.off(this._element.closest(xe), Me, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose() } show() { if ("none" === this._element.style.display) throw new Error("Please use show on visible elements"); if (!this.isWithContent() || !this._isEnabled) return; const t = $.trigger(this._element, this.constructor.Event.SHOW), e = g(this._element), s = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element); if (t.defaultPrevented || !s) return; "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Pe).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null); const n = this.getTipElement(), o = (t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t })(this.constructor.NAME); n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && n.classList.add(Oe); const r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r); this._addAttachmentClass(a); const { container: l } = this._config; z.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, n, this._getPopperConfig(a)), n.classList.add(Ne); const c = this._resolvePossibleFunction(this._config.customClass); c && n.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => { $.on(t, "mouseover", _) })); const h = this.tip.classList.contains(Oe); this._queueCallback((() => { const t = this._hoverState; this._hoverState = null, $.trigger(this._element, this.constructor.Event.SHOWN), t === Ie && this._leave(null, this) }), this.tip, h) } hide() { if (!this._popper) return; const t = this.getTipElement(); if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return; t.classList.remove(Ne), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => $.off(t, "mouseover", _))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1; const e = this.tip.classList.contains(Oe); this._queueCallback((() => { this._isWithActiveTrigger() || (this._hoverState !== De && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper()) }), this.tip, e), this._hoverState = "" } update() { null !== this._popper && this._popper.update() } isWithContent() { return Boolean(this.getTitle()) } getTipElement() { if (this.tip) return this.tip; const t = document.createElement("div"); t.innerHTML = this._config.template; const e = t.children[0]; return this.setContent(e), e.classList.remove(Oe, Ne), this.tip = e, this.tip } setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), Pe) } _sanitizeAndSetContent(t, e, i) { const s = Y.findOne(i, t); e || !s ? this.setElementContent(s, e) : s.remove() } setElementContent(t, e) { if (null !== t) return l(e) ? (e = c(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = we(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e) } getTitle() { const t = this._element.getAttribute("data-bs-original-title") || this._config.title; return this._resolvePossibleFunction(t) } updateAttachment(t) { return "right" === t ? "end" : "left" === t ? "start" : t } _initializeOnDelegatedTarget(t, e) { return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()) } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _resolvePossibleFunction(t) { return "function" == typeof t ? t.call(this._element) : t } _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: !0, phase: "afterWrite", fn: t => this._handlePopperPlacementChange(t) }], onFirstUpdate: t => { t.options.placement !== t.placement && this._handlePopperPlacementChange(t) } }; return { ...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } } _addAttachmentClass(t) { this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`) } _getAttachment(t) { return ke[t.toUpperCase()] } _setListeners() { this._config.trigger.split(" ").forEach((t => { if ("click" === t) $.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t))); else if ("manual" !== t) { const e = t === je ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = t === je ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT; $.on(this._element, e, this._config.selector, (t => this._enter(t))), $.on(this._element, i, this._config.selector, (t => this._leave(t))) } })), this._hideModalHandler = () => { this._element && this.hide() }, $.on(this._element.closest(xe), Me, this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle() } _fixTitle() { const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title"); (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", "")) } _enter(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? He : je] = !0), e.getTipElement().classList.contains(Ne) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => { e._hoverState === De && e.show() }), e._config.delay.show) : e.show()) } _leave(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? He : je] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ie, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => { e._hoverState === Ie && e.hide() }), e._config.delay.hide) : e.hide()) } _isWithActiveTrigger() { for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 } _getConfig(t) { const e = X.getDataAttributes(this._element); return Object.keys(e).forEach((t => { Te.has(t) && delete e[t] })), (t = { ...this.constructor.Default, ...e, ..."object" == typeof t && t ? t : {} }).container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), h(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)), t } _getDelegateConfig() { const t = {}; for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]); return t } _cleanTipClass() { const t = this.getTipElement(), e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i = t.getAttribute("class").match(e); null !== i && i.length > 0 && i.map((t => t.trim())).forEach((e => t.classList.remove(e))) } _getBasicClassPrefix() { return "bs-tooltip" } _handlePopperPlacementChange(t) { const { state: e } = t; e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement))) } _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null) } static jQueryInterface(t) { return this.each((function () { const e = $e.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } v($e); const Be = { ...$e.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, ze = { ...$e.DefaultType, content: "(string|element|function)" }, Re = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" }; class Fe extends $e { static get Default() { return Be } static get NAME() { return "popover" } static get Event() { return Re } static get DefaultType() { return ze } isWithContent() { return this.getTitle() || this._getContent() } setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body") } _getContent() { return this._resolvePossibleFunction(this._config.content) } _getBasicClassPrefix() { return "bs-popover" } static jQueryInterface(t) { return this.each((function () { const e = Fe.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } v(Fe); const qe = "scrollspy", We = { offset: 10, method: "auto", target: "" }, Ue = { offset: "number", method: "string", target: "(string|element)" }, Ke = "active", Ve = ".nav-link, .list-group-item, .dropdown-item", Xe = "position"; class Ye extends R { constructor(t, e) { super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, $.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process() } static get Default() { return We } static get NAME() { return qe } refresh() { const t = this._scrollElement === this._scrollElement.window ? "offset" : Xe, e = "auto" === this._config.method ? t : this._config.method, i = e === Xe ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Y.find(Ve, this._config.target).map((t => { const s = o(t), n = s ? Y.findOne(s) : null; if (n) { const t = n.getBoundingClientRect(); if (t.width || t.height) return [X[e](n).top + i, s] } return null })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => { this._offsets.push(t[0]), this._targets.push(t[1]) })) } dispose() { $.off(this._scrollElement, ".bs.scrollspy"), super.dispose() } _getConfig(t) { return (t = { ...We, ...X.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {} }).target = c(t.target) || document.documentElement, h(qe, t, Ue), t } _getScrollTop() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop } _getScrollHeight() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) } _getOffsetHeight() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height } _process() { const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= i) { const t = this._targets[this._targets.length - 1]; this._activeTarget !== t && this._activate(t) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]) } } _activate(t) { this._activeTarget = t, this._clear(); const e = Ve.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)), i = Y.findOne(e.join(","), this._config.target); i.classList.add(Ke), i.classList.contains("dropdown-item") ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ke) : Y.parents(i, ".nav, .list-group").forEach((t => { Y.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(Ke))), Y.prev(t, ".nav-item").forEach((t => { Y.children(t, ".nav-link").forEach((t => t.classList.add(Ke))) })) })), $.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t }) } _clear() { Y.find(Ve, this._config.target).filter((t => t.classList.contains(Ke))).forEach((t => t.classList.remove(Ke))) } static jQueryInterface(t) { return this.each((function () { const e = Ye.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } $.on(window, "load.bs.scrollspy.data-api", (() => { Y.find('[data-bs-spy="scroll"]').forEach((t => new Ye(t))) })), v(Ye); const Qe = "active", Ge = "fade", Ze = "show", Je = ".active", ti = ":scope > li > .active"; class ei extends R { static get NAME() { return "tab" } show() { if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Qe)) return; let t; const e = r(this._element), i = this._element.closest(".nav, .list-group"); if (i) { const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je; t = Y.find(e, i), t = t[t.length - 1] } const s = t ? $.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null; if ($.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || null !== s && s.defaultPrevented) return; this._activate(this._element, i); const n = () => { $.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }), $.trigger(this._element, "shown.bs.tab", { relatedTarget: t }) }; e ? this._activate(e, e.parentNode, n) : n() } _activate(t, e, i) { const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, Je) : Y.find(ti, e))[0], n = i && s && s.classList.contains(Ge), o = () => this._transitionComplete(t, s, i); s && n ? (s.classList.remove(Ze), this._queueCallback(o, t, !0)) : o() } _transitionComplete(t, e, i) { if (e) { e.classList.remove(Qe); const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode); t && t.classList.remove(Qe), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } t.classList.add(Qe), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains(Ge) && t.classList.add(Ze); let s = t.parentNode; if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) { const e = t.closest(".dropdown"); e && Y.find(".dropdown-toggle", e).forEach((t => t.classList.add(Qe))), t.setAttribute("aria-expanded", !0) } i && i() } static jQueryInterface(t) { return this.each((function () { const e = ei.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) { ["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this) || ei.getOrCreateInstance(this).show() })), v(ei); const ii = "toast", si = "hide", ni = "show", oi = "showing", ri = { animation: "boolean", autohide: "boolean", delay: "number" }, ai = { animation: !0, autohide: !0, delay: 5e3 }; class li extends R { constructor(t, e) { super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() } static get DefaultType() { return ri } static get Default() { return ai } static get NAME() { return ii } show() { $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(si), f(this._element), this._element.classList.add(ni), this._element.classList.add(oi), this._queueCallback((() => { this._element.classList.remove(oi), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }), this._element, this._config.animation)) } hide() { this._element.classList.contains(ni) && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(oi), this._queueCallback((() => { this._element.classList.add(si), this._element.classList.remove(oi), this._element.classList.remove(ni), $.trigger(this._element, "hidden.bs.toast") }), this._element, this._config.animation))) } dispose() { this._clearTimeout(), this._element.classList.contains(ni) && this._element.classList.remove(ni), super.dispose() } _getConfig(t) { return t = { ...ai, ...X.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {} }, h(ii, t, this.constructor.DefaultType), t } _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide() }), this._config.delay))) } _onInteraction(t, e) { switch (t.type) { case "mouseover": case "mouseout": this._hasMouseInteraction = e; break; case "focusin": case "focusout": this._hasKeyboardInteraction = e }if (e) return void this._clearTimeout(); const i = t.relatedTarget; this._element === i || this._element.contains(i) || this._maybeScheduleHide() } _setListeners() { $.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), $.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), $.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), $.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1))) } _clearTimeout() { clearTimeout(this._timeout), this._timeout = null } static jQueryInterface(t) { return this.each((function () { const e = li.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } return F(li), v(li), { Alert: q, Button: U, Carousel: at, Collapse: mt, Dropdown: Ht, Modal: he, Offcanvas: me, Popover: Fe, ScrollSpy: Ye, Tab: ei, Toast: li, Tooltip: $e } }));
//# sourceMappingURL=bootstrap.min.js.map

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: intlTelInput.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*
 * International Telephone Input v18.1.1
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

!function (a) { "object" == typeof module && module.exports ? module.exports = a() : window.intlTelInput = a() }(function (a) {
    "use strict"; return function () {
        function b(a) { for (var b = 1; b < arguments.length; b++) { var d = null != arguments[b] ? Object(arguments[b]) : {}, e = Object.keys(d); "function" == typeof Object.getOwnPropertySymbols && e.push.apply(e, Object.getOwnPropertySymbols(d).filter(function (a) { return Object.getOwnPropertyDescriptor(d, a).enumerable })), e.forEach(function (b) { c(a, b, d[b]) }) } return a } function c(a, b, c) { return b = g(b), b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[b] = c, a } function d(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function e(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c]; d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, g(d.key), d) } } function f(a, b, c) { return b && e(a.prototype, b), c && e(a, c), Object.defineProperty(a, "prototype", { writable: !1 }), a } function g(a) { var b = h(a, "string"); return "symbol" == typeof b ? b : String(b) } function h(b, c) { if ("object" != typeof b || null === b) return b; var d = b[Symbol.toPrimitive]; if (d !== a) { var e = d.call(b, c || "default"); if ("object" != typeof e) return e; throw new TypeError("@@toPrimitive must return a primitive value.") } return ("string" === c ? String : Number)(b) } for (var i = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "367", "368", "387", "403", "416", "418", "431", "437", "438", "450", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["North Macedonia (Северна Македонија)", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]], j = 0; j < i.length; j++) { var k = i[j]; i[j] = { name: k[0], iso2: k[1], dialCode: k[2], priority: k[3] || 0, areaCodes: k[4] || null } } var l = { getInstance: function (a) { var b = a.getAttribute("data-intl-tel-input-id"); return window.intlTelInputGlobals.instances[b] }, instances: {}, documentReady: function () { return "complete" === document.readyState } }; "object" == typeof window && (window.intlTelInputGlobals = l); var m = 0, n = { allowDropdown: !0, autoInsertDialCode: !1, autoPlaceholder: "polite", customContainer: "", customPlaceholder: null, dropdownContainer: null, excludeCountries: [], formatOnDisplay: !0, geoIpLookup: null, hiddenInput: "", initialCountry: "", localizedCountries: null, nationalMode: !0, onlyCountries: [], placeholderNumberType: "MOBILE", preferredCountries: ["us", "gb"], separateDialCode: !1, showFlags: !0, utilsScript: "" }, o = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"], p = function (a, b) { for (var c = Object.keys(a), d = 0; d < c.length; d++)b(c[d], a[c[d]]) }, q = function (a) { p(window.intlTelInputGlobals.instances, function (b) { window.intlTelInputGlobals.instances[b][a]() }) }, r = function () {
            function c(a, b) { var e = this; d(this, c), this.id = m++, this.a = a, this.b = null, this.c = null; var f = b || {}; this.d = {}, p(n, function (a, b) { e.d[a] = f.hasOwnProperty(a) ? f[a] : b }), this.e = Boolean(a.getAttribute("placeholder")) } return f(c, [{ key: "_init", value: function () { var a = this; this.d.nationalMode && (this.d.autoInsertDialCode = !1), this.d.separateDialCode && (this.d.autoInsertDialCode = !1); var b = this.d.allowDropdown && !this.d.separateDialCode; if (!this.d.showFlags && b && (this.d.showFlags = !0), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), "undefined" != typeof Promise) { var c = new Promise(function (b, c) { a.h = b, a.i = c }), d = new Promise(function (b, c) { a.i0 = b, a.i1 = c }); this.promise = Promise.all([c, d]) } else this.h = this.i = function () { }, this.i0 = this.i1 = function () { }; this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i3() } }, { key: "_b", value: function () { this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1) } }, { key: "_c", value: function (b, c, d) { c.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = c.length), this.q.hasOwnProperty(c) || (this.q[c] = []); for (var e = 0; e < this.q[c].length; e++)if (this.q[c][e] === b) return; var f = d !== a ? d : this.q[c].length; this.q[c][f] = b } }, { key: "_d", value: function () { if (this.d.onlyCountries.length) { var a = this.d.onlyCountries.map(function (a) { return a.toLowerCase() }); this.p = i.filter(function (b) { return a.indexOf(b.iso2) > -1 }) } else if (this.d.excludeCountries.length) { var b = this.d.excludeCountries.map(function (a) { return a.toLowerCase() }); this.p = i.filter(function (a) { return -1 === b.indexOf(a.iso2) }) } else this.p = i } }, { key: "_d0", value: function () { for (var a = 0; a < this.p.length; a++) { var b = this.p[a].iso2.toLowerCase(); this.d.localizedCountries.hasOwnProperty(b) && (this.p[a].name = this.d.localizedCountries[b]) } } }, { key: "_d1", value: function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0 } }, { key: "_d2", value: function () { this.countryCodeMaxLen = 0, this.dialCodes = {}, this.q = {}; for (var a = 0; a < this.p.length; a++) { var b = this.p[a]; this.dialCodes[b.dialCode] || (this.dialCodes[b.dialCode] = !0), this._c(b.iso2, b.dialCode, b.priority) } for (var c = 0; c < this.p.length; c++) { var d = this.p[c]; if (d.areaCodes) for (var e = this.q[d.dialCode][0], f = 0; f < d.areaCodes.length; f++) { for (var g = d.areaCodes[f], h = 1; h < g.length; h++) { var i = d.dialCode + g.substr(0, h); this._c(e, i), this._c(d.iso2, i) } this._c(d.iso2, d.dialCode + g) } } } }, { key: "_e", value: function () { this.preferredCountries = []; for (var a = 0; a < this.d.preferredCountries.length; a++) { var b = this.d.preferredCountries[a].toLowerCase(), c = this._y(b, !1, !0); c && this.preferredCountries.push(c) } } }, { key: "_e2", value: function (a, b, c) { var d = document.createElement(a); return b && p(b, function (a, b) { return d.setAttribute(a, b) }), c && c.appendChild(d), d } }, { key: "_f", value: function () { this.a.hasAttribute("autocomplete") || this.a.form && this.a.form.hasAttribute("autocomplete") || this.a.setAttribute("autocomplete", "off"); var a = this.d, c = a.allowDropdown, d = a.separateDialCode, e = a.showFlags, f = a.customContainer, g = a.hiddenInput, h = a.dropdownContainer, i = "iti"; c && (i += " iti--allow-dropdown"), d && (i += " iti--separate-dial-code"), e && (i += " iti--show-flags"), f && (i += " ".concat(f)); var j = this._e2("div", { "class": i }); this.a.parentNode.insertBefore(j, this.a); var k = c || e || d; if (k && (this.k = this._e2("div", { "class": "iti__flag-container" }, j)), j.appendChild(this.a), k && (this.selectedFlag = this._e2("div", b({ "class": "iti__selected-flag" }, c && { role: "combobox", "aria-haspopup": "listbox", "aria-controls": "iti-".concat(this.id, "__country-listbox"), "aria-owns": "iti-".concat(this.id, "__country-listbox"), "aria-expanded": "false", "aria-label": "Telephone country code" }), this.k)), e && (this.l = this._e2("div", { "class": "iti__flag" }, this.selectedFlag)), this.selectedFlag && this.a.disabled && this.selectedFlag.setAttribute("aria-disabled", "true"), d && (this.t = this._e2("div", { "class": "iti__selected-dial-code" }, this.selectedFlag)), c && (this.a.disabled || this.selectedFlag.setAttribute("tabindex", "0"), this.u = this._e2("div", { "class": "iti__arrow" }, this.selectedFlag), this.m = this._e2("ul", { "class": "iti__country-list iti__hide", id: "iti-".concat(this.id, "__country-listbox"), role: "listbox", "aria-label": "List of countries" }), this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0), this._e2("li", { "class": "iti__divider", role: "separator", "aria-disabled": "true" }, this.m)), this._g(this.p, "iti__standard"), h ? (this.dropdown = this._e2("div", { "class": "iti iti--container" }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), g) { var l = g, m = this.a.getAttribute("name"); if (m) { var n = m.lastIndexOf("["); -1 !== n && (l = "".concat(m.substr(0, n), "[").concat(l, "]")) } this.hiddenInput = this._e2("input", { type: "hidden", name: l }), j.appendChild(this.hiddenInput) } } }, { key: "_g", value: function (a, b, c) { for (var d = "", e = 0; e < a.length; e++) { var f = a[e], g = c ? "-preferred" : ""; d += "<li class='iti__country ".concat(b, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(f.iso2).concat(g, "' role='option' data-dial-code='").concat(f.dialCode, "' data-country-code='").concat(f.iso2, "' aria-selected='false'>"), this.d.showFlags && (d += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(f.iso2, "'></div></div>")), d += "<span class='iti__country-name'>".concat(f.name, "</span>"), d += "<span class='iti__dial-code'>+".concat(f.dialCode, "</span>"), d += "</li>" } this.m.insertAdjacentHTML("beforeend", d) } }, { key: "_h", value: function () { var a = this.a.getAttribute("value"), b = this.a.value, c = a && "+" === a.charAt(0) && (!b || "+" !== b.charAt(0)), d = c ? a : b, e = this._5(d), f = this._w(d), g = this.d, h = g.initialCountry, i = g.autoInsertDialCode; e && !f ? this._v(d) : "auto" !== h && (h ? this._z(h.toLowerCase()) : e && f ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, d || this._z(this.j)), !d && i && (this.a.value = "+".concat(this.s.dialCode))), d && this._u(d) } }, { key: "_i", value: function () { this._j(), this.d.autoInsertDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0() } }, { key: "_i0", value: function () { var a = this; this._a14 = function () { a.hiddenInput.value = a.getNumber() }, this.a.form && this.a.form.addEventListener("submit", this._a14) } }, { key: "_i1", value: function () { for (var a = this.a; a && "LABEL" !== a.tagName;)a = a.parentNode; return a } }, { key: "_i2", value: function () { var a = this; this._a9 = function (b) { a.m.classList.contains("iti__hide") ? a.a.focus() : b.preventDefault() }; var b = this._i1(); b && b.addEventListener("click", this._a9), this._a10 = function () { !a.m.classList.contains("iti__hide") || a.a.disabled || a.a.readOnly || a._n() }, this.selectedFlag.addEventListener("click", this._a10), this._a11 = function (b) { a.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(b.key) && (b.preventDefault(), b.stopPropagation(), a._n()), "Tab" === b.key && a._2() }, this.k.addEventListener("keydown", this._a11) } }, { key: "_i3", value: function () { var a = this; this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener("load", function () { window.intlTelInputGlobals.loadUtils(a.d.utilsScript) }) : this.i0(), "auto" === this.d.initialCountry ? this._i4() : this.h() } }, { key: "_i4", value: function () { window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup(function (a) { window.intlTelInputGlobals.autoCountry = a.toLowerCase(), setTimeout(function () { return q("handleAutoCountry") }) }, function () { return q("rejectAutoCountryPromise") })) } }, { key: "_j", value: function () { var a = this; this._a12 = function () { a._v(a.a.value) && a._m2CountryChange() }, this.a.addEventListener("keyup", this._a12), this._a13 = function () { setTimeout(a._a12) }, this.a.addEventListener("cut", this._a13), this.a.addEventListener("paste", this._a13) } }, { key: "_j2", value: function (a) { var b = this.a.getAttribute("maxlength"); return b && a.length > b ? a.substr(0, b) : a } }, { key: "_l", value: function () { var a = this; this._a8 = function () { a._l2() }, this.a.form && this.a.form.addEventListener("submit", this._a8), this.a.addEventListener("blur", this._a8) } }, { key: "_l2", value: function () { if ("+" === this.a.value.charAt(0)) { var a = this._m(this.a.value); a && this.s.dialCode !== a || (this.a.value = "") } } }, { key: "_m", value: function (a) { return a.replace(/\D/g, "") } }, { key: "_m2", value: function (a) { var b = document.createEvent("Event"); b.initEvent(a, !0, !0), this.a.dispatchEvent(b) } }, { key: "_n", value: function () { this.m.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._o(), this.b && (this._x(this.b, !1), this._3(this.b, !0)), this._p(), this.u.classList.add("iti__arrow--up"), this._m2("open:countrydropdown") } }, { key: "_n2", value: function (a, b, c) { c && !a.classList.contains(b) ? a.classList.add(b) : !c && a.classList.contains(b) && a.classList.remove(b) } }, { key: "_o", value: function () { var a = this; if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g) { var b = this.a.getBoundingClientRect(), c = window.pageYOffset || document.documentElement.scrollTop, d = b.top + c, e = this.m.offsetHeight, f = d + this.a.offsetHeight + e < c + window.innerHeight, g = d - e > c; if (this._n2(this.m, "iti__country-list--dropup", !f && g), this.d.dropdownContainer) { var h = !f && g ? 0 : this.a.offsetHeight; this.dropdown.style.top = "".concat(d + h, "px"), this.dropdown.style.left = "".concat(b.left + document.body.scrollLeft, "px"), this._a4 = function () { return a._2() }, window.addEventListener("scroll", this._a4) } } } }, { key: "_o2", value: function (a) { for (var b = a; b && b !== this.m && !b.classList.contains("iti__country");)b = b.parentNode; return b === this.m ? null : b } }, { key: "_p", value: function () { var a = this; this._a0 = function (b) { var c = a._o2(b.target); c && a._x(c, !1) }, this.m.addEventListener("mouseover", this._a0), this._a1 = function (b) { var c = a._o2(b.target); c && a._1(c) }, this.m.addEventListener("click", this._a1); var b = !0; this._a2 = function () { b || a._2(), b = !1 }, document.documentElement.addEventListener("click", this._a2); var c = "", d = null; this._a3 = function (b) { b.preventDefault(), "ArrowUp" === b.key || "Up" === b.key || "ArrowDown" === b.key || "Down" === b.key ? a._q(b.key) : "Enter" === b.key ? a._r() : "Escape" === b.key ? a._2() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) && (d && clearTimeout(d), c += b.key.toLowerCase(), a._s(c), d = setTimeout(function () { c = "" }, 1e3)) }, document.addEventListener("keydown", this._a3) } }, { key: "_q", value: function (a) { var b = "ArrowUp" === a || "Up" === a ? this.c.previousElementSibling : this.c.nextElementSibling; b && (b.classList.contains("iti__divider") && (b = "ArrowUp" === a || "Up" === a ? b.previousElementSibling : b.nextElementSibling), this._x(b, !0)) } }, { key: "_r", value: function () { this.c && this._1(this.c) } }, { key: "_s", value: function (a) { for (var b = 0; b < this.p.length; b++)if (this._t(this.p[b].name, a)) { var c = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[b].iso2)); this._x(c, !1), this._3(c, !0); break } } }, { key: "_t", value: function (a, b) { return a.substr(0, b.length).toLowerCase() === b } }, { key: "_u", value: function (a) { var b = a; if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) { var c = this.d.nationalMode || "+" !== b.charAt(0) && !this.d.separateDialCode, d = intlTelInputUtils.numberFormat, e = d.NATIONAL, f = d.INTERNATIONAL, g = c ? e : f; b = intlTelInputUtils.formatNumber(b, this.s.iso2, g) } b = this._7(b), this.a.value = b } }, { key: "_v", value: function (a) { var b = a, c = this.s.dialCode, d = "1" === c; b && d && "+" !== b.charAt(0) && ("1" !== b.charAt(0) && (b = "1".concat(b)), b = "+".concat(b)), this.d.separateDialCode && c && "+" !== b.charAt(0) && (b = "+".concat(c).concat(b)); var e = this._5(b, !0), f = this._m(b), g = null; if (e) { var h = this.q[this._m(e)], i = -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1; if (!("1" === c && this._w(f)) && !i) for (var j = 0; j < h.length; j++)if (h[j]) { g = h[j]; break } } else "+" === b.charAt(0) && f.length ? g = "" : b && "+" !== b || (g = this.j); return null !== g && this._z(g) } }, { key: "_w", value: function (a) { var b = this._m(a); if ("1" === b.charAt(0)) { var c = b.substr(1, 3); return -1 !== o.indexOf(c) } return !1 } }, { key: "_x", value: function (a, b) { var c = this.c; c && c.classList.remove("iti__highlight"), this.c = a, this.c.classList.add("iti__highlight"), this.selectedFlag.setAttribute("aria-activedescendant", a.getAttribute("id")), b && this.c.focus() } }, { key: "_y", value: function (a, b, c) { for (var d = b ? i : this.p, e = 0; e < d.length; e++)if (d[e].iso2 === a) return d[e]; if (c) return null; throw new Error("No country data for '".concat(a, "'")) } }, { key: "_z", value: function (a) { var b = this.s.iso2 ? this.s : {}; if (this.s = a ? this._y(a, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.d.showFlags && this.l.setAttribute("class", "iti__flag iti__".concat(a)), this.selectedFlag) { var c = a ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown"; this.selectedFlag.setAttribute("title", c) } if (this.d.separateDialCode) { var d = this.s.dialCode ? "+".concat(this.s.dialCode) : ""; this.t.innerHTML = d; var e = this.selectedFlag.offsetWidth || this._z2(); this.a.style.paddingLeft = "".concat(e + 6, "px") } if (this._0(), this.d.allowDropdown) { var f = this.b; if (f && (f.classList.remove("iti__active"), f.setAttribute("aria-selected", "false")), a) { var g = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a)); g.setAttribute("aria-selected", "true"), g.classList.add("iti__active"), this.b = g } } return b.iso2 !== a } }, { key: "_z2", value: function () { var a = this.a.parentNode.cloneNode(); a.style.visibility = "hidden", document.body.appendChild(a); var b = this.k.cloneNode(); a.appendChild(b); var c = this.selectedFlag.cloneNode(!0); b.appendChild(c); var d = c.offsetWidth; return a.parentNode.removeChild(a), d } }, { key: "_0", value: function () { var a = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder; if (window.intlTelInputUtils && a) { var b = intlTelInputUtils.numberType[this.d.placeholderNumberType], c = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, b) : ""; c = this._7(c), "function" == typeof this.d.customPlaceholder && (c = this.d.customPlaceholder(c, this.s)), this.a.setAttribute("placeholder", c) } } }, { key: "_1", value: function (a) { var b = this._z(a.getAttribute("data-country-code")); this._2(), this._4(a.getAttribute("data-dial-code")), this.a.focus(); var c = this.a.value.length; this.a.setSelectionRange(c, c), b && this._m2CountryChange() } }, { key: "_2", value: function () { this.m.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.selectedFlag.removeAttribute("aria-activedescendant"), this.u.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._a3), document.documentElement.removeEventListener("click", this._a2), this.m.removeEventListener("mouseover", this._a0), this.m.removeEventListener("click", this._a1), this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._m2("close:countrydropdown") } }, { key: "_3", value: function (a, b) { var c = this.m, d = window.pageYOffset || document.documentElement.scrollTop, e = c.offsetHeight, f = c.getBoundingClientRect().top + d, g = f + e, h = a.offsetHeight, i = a.getBoundingClientRect().top + d, j = i + h, k = i - f + c.scrollTop, l = e / 2 - h / 2; if (i < f) b && (k -= l), c.scrollTop = k; else if (j > g) { b && (k += l); var m = e - h; c.scrollTop = k - m } } }, { key: "_4", value: function (a) { var b, c = this.a.value, d = "+".concat(a); if ("+" === c.charAt(0)) { var e = this._5(c); b = e ? c.replace(e, d) : d, this.a.value = b } else this.d.autoInsertDialCode && (b = c ? d + c : d, this.a.value = b) } }, { key: "_5", value: function (a, b) { var c = ""; if ("+" === a.charAt(0)) for (var d = "", e = 0; e < a.length; e++) { var f = a.charAt(e); if (!isNaN(parseInt(f, 10))) { if (d += f, b) this.q[d] && (c = a.substr(0, e + 1)); else if (this.dialCodes[d]) { c = a.substr(0, e + 1); break } if (d.length === this.countryCodeMaxLen) break } } return c } }, { key: "_6", value: function () { var a = this.a.value.trim(), b = this.s.dialCode, c = this._m(a); return (this.d.separateDialCode && "+" !== a.charAt(0) && b && c ? "+".concat(b) : "") + a } }, { key: "_7", value: function (a) { var b = a; if (this.d.separateDialCode) { var c = this._5(b); if (c) { c = "+".concat(this.s.dialCode); var d = " " === b[c.length] || "-" === b[c.length] ? c.length + 1 : c.length; b = b.substr(d) } } return this._j2(b) } }, { key: "_m2CountryChange", value: function () { this._m2("countrychange") } }, { key: "handleAutoCountry", value: function () { "auto" === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry, this.a.value || this.setCountry(this.j), this.h()) } }, { key: "handleUtils", value: function () { window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0() } }, {
                key: "destroy", value: function () {
                    var a = this.a.form; if (this.d.allowDropdown) {
                        this._2(),
                            this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11); var b = this._i1(); b && b.removeEventListener("click", this._a9)
                    } this.hiddenInput && a && a.removeEventListener("submit", this._a14), this.d.autoInsertDialCode && (a && a.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)), this.a.removeEventListener("keyup", this._a12), this.a.removeEventListener("cut", this._a13), this.a.removeEventListener("paste", this._a13), this.a.removeAttribute("data-intl-tel-input-id"); var c = this.a.parentNode; c.parentNode.insertBefore(this.a, c), c.parentNode.removeChild(c), delete window.intlTelInputGlobals.instances[this.id]
                }
            }, { key: "getExtension", value: function () { return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : "" } }, { key: "getNumber", value: function (a) { if (window.intlTelInputUtils) { var b = this.s.iso2; return intlTelInputUtils.formatNumber(this._6(), b, a) } return "" } }, { key: "getNumberType", value: function () { return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99 } }, { key: "getSelectedCountryData", value: function () { return this.s } }, { key: "getValidationError", value: function () { if (window.intlTelInputUtils) { var a = this.s.iso2; return intlTelInputUtils.getValidationError(this._6(), a) } return -99 } }, { key: "isValidNumber", value: function () { var a = this._6().trim(); return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(a, this.s.iso2) : null } }, { key: "setCountry", value: function (a) { var b = a.toLowerCase(); this.s.iso2 !== b && (this._z(b), this._4(this.s.dialCode), this._m2CountryChange()) } }, { key: "setNumber", value: function (a) { var b = this._v(a); this._u(a), b && this._m2CountryChange() } }, { key: "setPlaceholderNumberType", value: function (a) { this.d.placeholderNumberType = a, this._0() } }]), c
        }(); l.getCountryData = function () { return i }; var s = function (a, b, c) { var d = document.createElement("script"); d.onload = function () { q("handleUtils"), b && b() }, d.onerror = function () { q("rejectUtilsScriptPromise"), c && c() }, d.className = "iti-load-utils", d.async = !0, d.src = a, document.body.appendChild(d) }; return l.loadUtils = function (a) { if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) { if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function (b, c) { return s(a, b, c) }); s(a) } return null }, l.defaults = n, l.version = "18.1.1", function (a, b) { var c = new r(a, b); return c._init(), a.setAttribute("data-intl-tel-input-id", c.id), window.intlTelInputGlobals.instances[c.id] = c, c }
    }()
});

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: jquery.auto-complete.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// jQuery autoComplete v1.0.7
// https://github.com/Pixabay/jQuery-autoComplete
!function (e) { e.fn.autoComplete = function (t) { var o = e.extend({}, e.fn.autoComplete.defaults, t); return "string" == typeof t ? (this.each(function () { var o = e(this); "destroy" == t && (e(window).off("resize.autocomplete", o.updateSC), o.off("blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete"), o.data("autocomplete") ? o.attr("autocomplete", o.data("autocomplete")) : o.removeAttr("autocomplete"), e(o.data("sc")).remove(), o.removeData("sc").removeData("autocomplete")) }), this) : this.each(function () { function t(e) { var t = s.val(); if (s.cache[t] = e, e.length && t.length >= o.minChars) { for (var a = "", c = 0; c < e.length; c++)a += o.renderItem(e[c], t); s.sc.html(a), s.updateSC(0) } else s.sc.hide() } var s = e(this); s.sc = e('<div class="autocomplete-suggestions ' + o.menuClass + '"></div>'), s.data("sc", s.sc).data("autocomplete", s.attr("autocomplete")), s.attr("autocomplete", "off"), s.cache = {}, s.last_val = "", s.updateSC = function (t, o) { if (s.sc.css({ top: s.offset().top + s.outerHeight(), left: s.offset().left, width: s.outerWidth() }), !t && (s.sc.show(), s.sc.maxHeight || (s.sc.maxHeight = parseInt(s.sc.css("max-height"))), s.sc.suggestionHeight || (s.sc.suggestionHeight = e(".autocomplete-suggestion", s.sc).first().outerHeight()), s.sc.suggestionHeight)) if (o) { var a = s.sc.scrollTop(), c = o.offset().top - s.sc.offset().top; c + s.sc.suggestionHeight - s.sc.maxHeight > 0 ? s.sc.scrollTop(c + s.sc.suggestionHeight + a - s.sc.maxHeight) : 0 > c && s.sc.scrollTop(c + a) } else s.sc.scrollTop(0) }, e(window).on("resize.autocomplete", s.updateSC), s.sc.appendTo("body"), s.sc.on("mouseleave", ".autocomplete-suggestion", function () { e(".autocomplete-suggestion.selected").removeClass("selected") }), s.sc.on("mouseenter", ".autocomplete-suggestion", function () { e(".autocomplete-suggestion.selected").removeClass("selected"), e(this).addClass("selected") }), s.sc.on("mousedown click", ".autocomplete-suggestion", function (t) { var a = e(this), c = a.data("val"); return (c || a.hasClass("autocomplete-suggestion")) && (s.val(c), o.onSelect(t, c, a), s.sc.hide()), !1 }), s.on("blur.autocomplete", function () { try { over_sb = e(".autocomplete-suggestions:hover").length } catch (t) { over_sb = 0 } over_sb ? s.is(":focus") || setTimeout(function () { s.focus() }, 20) : (s.last_val = s.val(), s.sc.hide(), setTimeout(function () { s.sc.hide() }, 350)) }), o.minChars || s.on("focus.autocomplete", function () { s.last_val = "\n", s.trigger("keyup.autocomplete") }), s.on("keydown.autocomplete", function (t) { if ((40 == t.which || 38 == t.which) && s.sc.html()) { var a, c = e(".autocomplete-suggestion.selected", s.sc); return c.length ? (a = 40 == t.which ? c.next(".autocomplete-suggestion") : c.prev(".autocomplete-suggestion"), a.length ? (c.removeClass("selected"), s.val(a.addClass("selected").data("val"))) : (c.removeClass("selected"), s.val(s.last_val), a = 0)) : (a = 40 == t.which ? e(".autocomplete-suggestion", s.sc).first() : e(".autocomplete-suggestion", s.sc).last(), s.val(a.addClass("selected").data("val"))), s.updateSC(0, a), !1 } if (27 == t.which) s.val(s.last_val).sc.hide(); else if (13 == t.which || 9 == t.which) { var c = e(".autocomplete-suggestion.selected", s.sc); c.length && s.sc.is(":visible") && (o.onSelect(t, c.data("val"), c), setTimeout(function () { s.sc.hide() }, 20)) } }), s.on("keyup.autocomplete", function (a) { if (!~e.inArray(a.which, [13, 27, 35, 36, 37, 38, 39, 40])) { var c = s.val(); if (c.length >= o.minChars) { if (c != s.last_val) { if (s.last_val = c, clearTimeout(s.timer), o.cache) { if (c in s.cache) return void t(s.cache[c]); for (var l = 1; l < c.length - o.minChars; l++) { var i = c.slice(0, c.length - l); if (i in s.cache && !s.cache[i].length) return void t([]) } } s.timer = setTimeout(function () { o.source(c, t) }, o.delay) } } else s.last_val = c, s.sc.hide() } }) }) }, e.fn.autoComplete.defaults = { source: 0, minChars: 3, delay: 150, cache: 1, menuClass: "", renderItem: function (e, t) { t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); var o = new RegExp("(" + t.split(" ").join("|") + ")", "gi"); return '<div class="autocomplete-suggestion" data-val="' + e + '">' + e.replace(o, "<b>$1</b>") + "</div>" }, onSelect: function (e, t, o) { } } }(jQuery);


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: cropme.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*!
 * cropme v1.4.3
 * https://shpontex.github.io/cropme
 *
 * Copyright 2020 shpontex
 * Released under the MIT license
 *
 * Date: 2020-03-02T12:55:13.295Z
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Cropme = e() }(this, function () { "use strict"; function Z(t) { return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function r(t, e) { for (var i = 0; i < e.length; i++) { var r = e[i]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } function p(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t } function a(t) { return t && "object" === Z(t) && !Array.isArray(t) } function h(t) { for (var e = arguments.length, i = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)i[r - 1] = arguments[r]; if (!i.length) return t; var o, n = i.shift(); if (Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function (t) { if (null == t) throw new TypeError("Cannot convert first argument to object"); for (var e = Object(t), i = 1; i < arguments.length; i++) { var r = arguments[i]; if (null != r) { r = Object(r); for (var o = Object.keys(Object(r)), n = 0, s = o.length; n < s; n++) { var p = o[n], a = Object.getOwnPropertyDescriptor(r, p); void 0 !== a && a.enumerable && (e[p] = r[p]) } } } return e } }), a(t) && a(n)) for (var s in n) a(n[s]) ? (t[s] || Object.assign(t, p({}, s, {})), h(t[s], n[s])) : (o = n[s]) && Array.isArray(o) ? (t[s] || Object.assign(t, p({}, s, [])), t[s] = t[s].concat(n[s])) : Object.assign(t, p({}, s, n[s])); return h.apply(void 0, [t].concat(i)) } function w() { return "translate3d(" + this.properties.x + "px," + this.properties.y + "px, 0) scale(" + this.properties.scale + ") rotate(" + this.properties.deg + "deg)" } function d(t, e) { return t + "px " + e + "px" } function l() { if (this.properties.rotation_slider) this.options.rotation.slider ? this.properties.rotation_slider.disabled = !this.options.rotation.enable : (this.properties.wrapper.removeChild(this.properties.rotation_slider.parentNode), delete this.properties.rotation_slider), this.properties.rotation_slider && (this.properties.rotation_slider.style.width = this.properties.container.offsetWidth + "px"); else if (this.options.rotation.slider) { var t = document.createElement("div"); t.classList.add("cropme-rotation-slider"); var e = this.properties.rotation_slider = document.createElement("input"); e.type = "range", e.setAttribute("min", -180), e.setAttribute("max", 180), e.setAttribute("step", 1), e.value = 0, e.style.width = this.properties.container.offsetWidth + "px", t.appendChild(e), this.properties.wrapper.appendChild(t); var i = this; this.properties.rotation_slider.addEventListener(o() ? "change" : "input", function (t) { i.rotate(t.target.value) }), this.properties.rotation_slider.disabled = !this.options.rotation.enable } } function o() { var t = window.navigator.userAgent, e = t.indexOf("MSIE "); if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10); if (0 < t.indexOf("Trident/")) { var i = t.indexOf("rv:"); return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10) } var r = t.indexOf("Edge/"); return 0 < r && parseInt(t.substring(r + 5, t.indexOf(".", r)), 10) } function u() { function t() { var t = (this.properties.wrapper.offsetWidth - this.properties.container.offsetWidth) / 2, e = this.properties.container.offsetWidth / 2 + 12 + t; "left" === this.options.rotation.position && (e = -this.properties.container.offsetWidth / 2 - 20 + t); var i = (this.properties.container.offsetWidth - this.properties.container.offsetHeight) / 2, r = this.properties.container.offsetHeight / 2 + 12 - i; this.properties.sliderContainer.style.transform = "translate3d(" + e + "px, " + r + "px, 0) rotate(-90deg)"; var o = this.properties.container.offsetWidth / 2; this.properties.sliderContainer.style.transformOrigin = o + "px 12px", this.properties.sliderContainer.style.marginTop = "-24px", this.properties.slider.disabled = !this.options.zoom.enable } if (this.properties.slider) this.options.zoom.slider ? t.call(this) : (this.properties.wrapper.removeChild(this.properties.slider.parentNode), delete this.properties.slider); else if (this.options.zoom.slider) { var e = this, i = this.properties.sliderContainer = document.createElement("div"); i.classList.add("cropme-slider"); var r = this.properties.slider = document.createElement("input"); r.type = "range", r.setAttribute("min", this.options.zoom.min), r.setAttribute("max", this.options.zoom.max), r.setAttribute("step", 1e-6), r.style.width = this.properties.container.offsetHeight + "px", i.style.width = this.properties.container.offsetHeight + "px", i.appendChild(r), this.properties.wrapper.insertBefore(i, this.properties.wrapper.firstChild), this.properties.slider.value = this.properties.scale, this.properties.slider.addEventListener(o() ? "change" : "input", function (t) { e.properties.scale = parseFloat(t.target.value), e.properties.image.style.transform = w.call(e) }), t.call(this) } } function e() { var t = this.properties.container; t || (t = this.properties.container = document.createElement("div"), this.properties.wrapper.appendChild(t)), t.classList.add("cropme-container"), t.style.width = this.options.container.width + ("string" == typeof this.options.container.width ? "" : "px"), t.style.height = this.options.container.height + "px" } function f() { var t = this.properties.viewport = this.properties.viewport || document.createElement("div"), e = this.properties.container, i = this.options, r = i.viewport.border.width; if (e.style.width = i.viewport.width > e.offsetWidth ? i.viewport.width + 2 * r + "px" : e.offsetWidth, e.style.height = i.viewport.height > e.offsetHeight ? i.viewport.height + 2 * r + "px" : e.offsetHeight, t.style.width = i.viewport.width + "px", t.style.height = i.viewport.height + "px", t.className = "viewport", "circle" === i.viewport.type && (t.className = "viewport circle"), i.viewport.border.enable) { var o = (e.offsetWidth - i.viewport.width) / 2; i.viewport.border.width = o < i.viewport.border.width ? o : i.viewport.border.width } else i.viewport.border.width = 0; this.properties.viewport.style.borderWidth = i.viewport.border.width + "px", this.properties.viewport.style.borderColor = i.viewport.border.color, this.properties.container.appendChild(t) } function m() { var t = this.properties.image.style.transformOrigin.split("px "); return { x: parseFloat(t[0]), y: parseFloat(t[1]) } } function g() { var t = m.call(this), e = t.x, i = t.y, r = -parseInt(this.properties.deg) * Math.PI / 180; if ("viewport" === this.options.transformOrigin) { var o = this.properties.deg; this.properties.deg = 0, this.properties.image.style.transform = w.call(this); var n, s, p = this.properties.scale, a = this.properties.container, h = this.properties.image.getBoundingClientRect(), c = this.properties.viewport.getBoundingClientRect(), l = c.top - h.top + c.height / 2, u = (c.left - h.left + c.width / 2) / p - e, f = l / p - i; n = e + (u * Math.cos(r) - f * Math.sin(r)), s = i + (u * Math.sin(r) + f * Math.cos(r)), this.properties.x = a.offsetWidth / 2 - n, this.properties.y = a.offsetHeight / 2 - s, this.properties.image.style.transformOrigin = d.call(this, n, s), this.properties.deg = o, this.properties.image.style.transform = w.call(this) } else this.properties.x -= this.properties.origin_x - e, this.properties.y -= this.properties.origin_y - i, this.properties.image.style.transformOrigin = d.call(this, this.properties.origin_x, this.properties.origin_y), this.properties.image.style.transform = w.call(this) } function n() { e.call(this), l.call(this), u.call(this), function () { this.properties.image || (this.properties.image = new Image), this.properties.image.ondragstart = function () { return !1 }, this.properties.container.appendChild(this.properties.image) }.call(this), f.call(this); function t(t) { t.preventDefault(); var e = t.pageX, i = t.pageY; t.touches && (e = t.touches[0].pageX, i = t.touches[0].pageY), r = c.properties.x || r, o = c.properties.y || o, a = e - r, h = i - o, document.addEventListener("mousemove", n), document.addEventListener("touchmove", n), document.addEventListener("mouseup", s), document.addEventListener("touchend", s) } var a, h, r = 0, o = 0, c = this; c.properties.image.addEventListener("mousedown", t), c.properties.image.addEventListener("touchstart", t); var n = function (t) { t.preventDefault(); var e = t.pageX, i = t.pageY; if (t.touches && (e = t.touches[0].pageX, i = t.touches[0].pageY), t.touches && 1 < t.touches.length) { var r = t.touches[1], o = e - r.pageX, n = i - r.pageY; if (c.options.rotation.enable) { var s = 90 - 180 * Math.atan2(o, n) / Math.PI; c.properties.odeg || (c.properties.odeg = s - c.properties.deg), c.properties.deg = s - c.properties.odeg } if (c.options.zoom.enable) { var p = Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2)); c.properties.od || (c.properties.od = p / c.properties.scale), c.properties.scale = p / c.properties.od, c.properties.slider && (c.properties.slider.value = c.properties.scale) } } else c.properties.x = e - a, c.properties.y = i - h; c.properties.image.style.transform = w.call(c) }, s = function t() { document.removeEventListener("touchmove", n), document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", t), document.removeEventListener("touchend", t), c.properties.od = 0, c.properties.odeg = 0, g.call(c) }; c.properties.container.addEventListener("mousewheel", function (t) { t.preventDefault(); var e = c.properties.scale + t.wheelDelta / 1200 * c.properties.scale; e > c.options.zoom.min && e < c.options.zoom.max && c.options.zoom.mouseWheel && c.options.zoom.enable && (c.options.zoom.slider && (c.properties.slider.value = e), c.properties.scale = e, c.properties.image.style.transform = w.call(c)) }) } (function (K) { function r(t) { if (o[t]) return o[t].exports; var e = o[t] = { i: t, l: !1, exports: {} }; return i[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports } var i, o; o = {}, r.m = i = { 100: function (t, e, i) { (function (t) { var e = i(5); try { t.Promise = e, window.Promise = e } catch (t) { } }).call(e, i(2)) }, 2: function (t, e) { var i; i = function () { return this }(); try { i = i || Function("return this")() || (0, eval)("this") } catch (t) { "object" == ("undefined" == typeof window ? "undefined" : Z(window)) && (i = window) } t.exports = i }, 5: function (J, t, e) { (function (G) { !function () { function r() { return $[S][H] || "Symbol(species)" } function o(t) { return t && "object" == Z(t) } function a(t) { return "function" == typeof t } function h(t, e) { return t instanceof e } function e(t, e, i) { if (!e(t)) throw l(i) } function i() { try { return j.apply(O, arguments) } catch (t) { return X.e = t, X } } function c(t, e) { return j = t, O = e, i } function t(e, i) { function r() { for (var t = 0; t < n;)i(o[t], o[t + 1]), o[t++] = _, o[t++] = _; n = 0, o.length > e && (o.length = e) } var o = P(e), n = 0; return function (t, e) { o[n++] = t, o[n++] = e, 2 === n && $.nextTick(r) } } function p(t, e) { var i, r, o, n, s = 0; if (!t) throw l(B); var p = t[$[S].iterator]; if (a(p)) r = p.call(t); else { if (!a(t.next)) { if (h(t, P)) { for (i = t.length; s < i;)e(t[s], s++); return s } throw l(B) } r = t } for (; !(o = r.next()).done;)if ((n = c(e)(o.value, s++)) === X) throw a(r.return) && r.return(), n.e; return s } function l(t) { return new TypeError(t) } function n(t) { return (t ? "" : D) + (new M).stack } function s(t, e) { var i = "on" + t.toLowerCase(), r = z[i]; k && k.listeners(t).length ? t === U ? k.emit(t, e._v, e) : k.emit(t, e) : r ? r({ reason: e._v, promise: e }) : $[t](e._v, e) } function u(t) { return t && t._s } function f(t) { return u(t) ? new t(x) : (i = new t(function (t, e) { if (i) throw l(); r = t, o = e }), e(r, a), e(o, a), i); var i, r, o } function d(e, i) { var r = !1; return function (t) { r || (r = !0, I && (e[N] = n(!0)), i === A ? w(e, t) : v(e, i, t)) } } function m(t, e) { function i(t) { return r.push(t.replace(/^\s+|\s+$/g, "")) } var r = []; return I && (e[N] && i(e[N]), function t(e) { e && T in e && (t(e._next), i(e[T] + ""), t(e._p)) }(e)), (t && t.stack ? t.stack : t) + ("\n" + r.join("\n")).replace(q, "") } function g(t, e) { return t(e) } function v(t, e, i) { var r = 0, o = t._c; if (t._s === F) for (t._s = e, t._v = i, e === R && (I && function (t) { return h(t, M) }(i) && (i.longStack = m(i, t)), V(t)); r < o;)Q(t, t[r++]); return t } function w(t, e) { if (e === t && e) return v(t, R, l(Y)), t; if (e !== C && (a(e) || o(e))) { var i = c(y)(e); if (i === X) return v(t, R, i.e), t; a(i) ? (I && u(e) && (t._next = e), u(e) ? b(t, e, i) : $.nextTick(function () { b(t, e, i) })) : v(t, A, e) } else v(t, A, e); return t } function y(t) { return t.then } function b(e, i, t) { var r = c(t, i)(function (t) { i && (i = C, w(e, t)) }, function (t) { i && (i = C, v(e, R, t)) }); r === X && i && (v(e, R, r.e), i = C) } function x() { } var _, j, O, C = null, E = "object" == ("undefined" == typeof self ? "undefined" : Z(self)), z = E ? self : G, L = z.Promise, k = z.process, W = z.console, I = !1, P = Array, M = Error, R = 1, A = 2, F = 3, S = "Symbol", H = "species", T = "_pt", N = "_st", B = "Invalid argument", D = "\nFrom previous ", Y = "Chaining cycle detected for promise", U = "unhandledRejection", X = { e: C }, q = /^.+\/node_modules\/yaku\/.+\n?/gm, $ = function (t) { var e, i = this; if (!o(i) || i._s !== _) throw l("Invalid this"); if (i._s = F, I && (i[T] = n()), t !== x) { if (!a(t)) throw l(B); (e = c(t)(d(i, A), d(i, R))) === X && v(i, R, e.e) } }; (function (t, e) { for (var i in e) t[i] = e[i] })(($.default = $).prototype, { then: function (t, e) { if (this._s === K) throw l(); return function (t, e, i, r) { return a(i) && (e._onFulfilled = i), a(r) && (t._uh && s("rejectionHandled", t), e._onRejected = r), I && (e._p = t), t[t._c++] = e, t._s !== F && Q(t, e), e }(this, f($.speciesConstructor(this, $)), t, e) }, catch: function (t) { return this.then(_, t) }, finally: function (e) { return this.then(function (t) { return $.resolve(e()).then(function () { return t }) }, function (t) { return $.resolve(e()).then(function () { throw t }) }) }, _c: 0, _p: C }), $.resolve = function (t) { return u(t) ? t : w(f(this), t) }, $.reject = function (t) { return v(f(this), R, t) }, $.race = function (t) { function e(t) { v(o, A, t) } function i(t) { v(o, R, t) } var r = this, o = f(r), n = c(p)(t, function (t) { r.resolve(t).then(e, i) }); return n === X ? r.reject(n.e) : o }, $.all = function (t) { function i(t) { v(n, R, t) } var r, o = this, n = f(o), s = []; return (r = c(p)(t, function (t, e) { o.resolve(t).then(function (t) { s[e] = t, --r || v(n, A, s) }, i) })) === X ? o.reject(r.e) : (r || v(n, A, []), n) }, $.Symbol = z[S] || {}, c(function () { Object.defineProperty($, r(), { get: function () { return this } }) })(), $.speciesConstructor = function (t, e) { var i = t.constructor; return i && i[r()] || e }, $.unhandledRejection = function (t, e) { W && W.error("Uncaught (in promise)", I ? e.longStack : m(t, e)) }, $.rejectionHandled = x, $.enableLongStackTrace = function () { I = !0 }, $.nextTick = E ? function (t) { L ? new L(function (t) { t() }).then(t) : setTimeout(t) } : k.nextTick, $._s = 1; var Q = t(999, function (t, e) { var i, r; return (r = t._s !== R ? e._onFulfilled : e._onRejected) === _ ? void v(e, t._s, t._v) : (i = c(g)(r, t._v)) === X ? void v(e, R, i.e) : void w(e, i) }), V = t(9, function (t) { !function t(e) { if (e._umark) return !0; e._umark = !0; for (var i, r = 0, o = e._c; r < o;)if ((i = e[r++])._onRejected || t(i)) return !0 }(t) && (t._uh = 1, s(U, t)) }); try { J.exports = $ } catch (t) { z.Yaku = $ } }() }).call(t, e(2)) } }, r.c = o, r.i = function (t) { return t }, r.d = function (t, e, i) { r.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: i }) }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return r.d(e, "a", e), e }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 100) }).call("object" === ("undefined" == typeof window ? "undefined" : Z(window)) && window || "object" === ("undefined" == typeof self ? "undefined" : Z(self)) && self || "object" === ("undefined" == typeof global ? "undefined" : Z(global)) && global || {}), window.jQuery && (jQuery.fn.cropme = function () { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = 1 < arguments.length ? arguments[1] : void 0; if ("object" === Z(e)) return this.each(function () { var t = new s(this, e); $(this).data("cropme", t) }); if ("string" != typeof e) throw "Error: the argument must be an object or a string"; var i = $(this).data("cropme"); switch (e) { case "position": return i.position(); case "bind": return i.bind(t); case "crop": return i.crop(t); case "rotate": return i.rotate(t); case "reload": return i.reload(t); case "destroy": return i.destroy(); default: throw "Error: " + e + " method not found" } }); var s = function () { function i(t, e) { if (function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, i), -1 < t.className.indexOf("cropme-wrapper")) throw "Error: Cropme is already initialized"; if (this.properties = {}, this.options = h(c, e), this.options.viewport.width > this.options.container.width) throw "Error: Viewport width cannot be greater that container width"; if (this.options.viewport.height > this.options.container.height) throw "Error: Viewport height cannot be greater that container height"; "img" === (this.properties.wrapper = t).tagName.toLowerCase() && (this.properties.image = t, this.properties.wrapper = document.createElement("div"), t.parentNode.insertBefore(this.properties.wrapper, t.previousSibling), t.parentNode.removeChild(t)), this.properties.wrapper.className += " cropme-wrapper " + this.options.customClass, n.call(this), this.properties.image.src && this.bind({ url: this.properties.image.src }) } return function (t, e, i) { e && r(t.prototype, e), i && r(t, i) }(i, [{ key: "resize", value: function () { var t = this.properties.container, e = this.properties.container_w - t.offsetWidth, i = this.properties.container_h - t.offsetHeight; t.style.width = this.options.container.width + ("string" == typeof this.options.container.width ? "" : "px"), t.offsetWidth > this.options.viewport.width ? (this.properties.x -= e / 2, this.properties.y -= i / 2, this.properties.container_w = t.offsetWidth, this.properties.container_h = t.offsetHeight, this.properties.ox -= e / 2, this.properties.oy -= i / 2, this.properties.image.style.transform = w.call(this), u.call(this), l.call(this)) : t.style.width = this.options.viewport.width + 2 * this.options.viewport.border.width + "px" } }, { key: "bind", value: function (a) { var t = this; window.onresize = this.resize.bind(this), this.properties.image.src = a.url; var h = this.properties, c = this.options, l = this; return new Promise(function (p) { t.properties.image.onload = function () { var t = h.image.getBoundingClientRect(), e = h.container.getBoundingClientRect(), i = (e.width - t.width) / 2, r = (e.height - t.height) / 2, o = e.height / t.height, n = 0; h.ox = i, h.oy = r; var s = {}; if ("object" === Z(a.position) && (i = a.position.x ? a.position.x + i : i, r = a.position.y ? a.position.y + r : r, o = a.position.scale || o, n = a.position.angle || n, s = a.position.origin || s, c.transformOrigin = "object" === a.position.origin ? "viewport" : "image"), c.zoom.max <= c.zoom.min) throw "Error: max zoom cannot be less or equal to min zoom"; o < c.zoom.min && (o = c.zoom.min), o > c.zoom.max && (o = c.zoom.max), h.x = i, h.y = r, h.container_w = e.width, h.container_h = e.height, h.origin_x = t.width / 2, h.origin_y = t.height / 2, h.scale = o, l.options.zoom.slider && (h.slider.value = o), l.options.rotation.slider && (h.rotation_slider.value = n), h.deg = n, h.image.style.transform = w.call(l), h.image.style.transformOrigin = d.call(l, s.x || h.origin_x, s.y || h.origin_y), h.image.style.opacity = 1, g.call(l), p(l.properties.image) } }) } }, { key: "rotate", value: function (t) { this.properties.deg = t; var e = this.properties.image.style.transformOrigin.split("px "), i = parseInt(e[0]), r = parseInt(e[1]); this.properties.rotate_originx = i, this.properties.rotate_originy = r, this.properties.image.style.transform = w.call(this) } }, { key: "crop", value: function (t) { var i = function (t) { var e = document.createElement("canvas"), i = e.getContext("2d"), r = this.options.viewport.width, o = this.options.viewport.height; "object" === Z(t) && (t.scale ? (r *= t.scale, o *= t.scale) : t.width && (o = t.width * o / r, r = t.width)), e.width = r, e.height = o; var n = r / this.options.viewport.width, s = o / this.options.viewport.height, p = this.properties.deg, a = this.properties.x, h = this.properties.y; function c(t, e, i) { this.properties.deg = t, this.properties.x = e, this.properties.y = i, this.properties.image.style.transform = w.call(this) } c.call(this, 0, this.properties.ox, this.properties.oy); var l = this.properties.image.getBoundingClientRect(), u = this.properties.viewport.getBoundingClientRect(), f = n * (l.left - u.left - this.options.viewport.border.width), d = s * (l.top - u.top - this.options.viewport.border.width), m = this.options.transformOrigin, g = (a - this.properties.x) * n, v = (h - this.properties.y) * s; return "image" === m && i.translate(g, v), i.translate(r / 2, o / 2), i.rotate(p * Math.PI / 180), "image" === m ? i.translate(-r / 2, -o / 2) : i.translate(-r / 2 + g, -o / 2 + v), i.drawImage(this.properties.image, f, d, l.width * n, l.height * s), "circle" === this.options.viewport.type && ("image" === m ? i.translate(r / 2, o / 2) : i.translate(r / 2 - g, o / 2 - v), i.rotate(-p * Math.PI / 180), i.translate(-r / 2, -o / 2), i.scale(1, this.options.viewport.height / this.options.viewport.width), "image" === m ? i.translate(2 * -g, 2 * -v) : i.translate(-g, -v), i.globalCompositeOperation = "destination-in", i.arc(r / 2 + g, o / 2 + v, r / 2, 0, 2 * Math.PI), i.fill()), c.call(this, p, a, h), e }.call(this, t), r = "object" === Z(t) ? t.type : t; return new Promise(function (e) { "blob" === r ? i.toBlob(function (t) { return e(URL.createObjectURL(t)) }, t.mimetype, t.quality) : "object" === Z(t) ? e(i.toDataURL(t.mimetype, t.quality)) : e(i.toDataURL()) }) } }, { key: "position", value: function () { var t = { x: parseFloat((this.properties.x - this.properties.ox).toFixed(3)), y: parseFloat((this.properties.y - this.properties.oy).toFixed(3)), scale: parseFloat(this.properties.scale.toFixed(4)), angle: parseInt(this.properties.deg) }; return "viewport" === this.options.transformOrigin && (t.origin = m.call(this)), t } }, { key: "reload", value: function (t) { this.options = h(c, t), u.call(this), e.call(this), l.call(this), f.call(this), g.call(this) } }, { key: "destroy", value: function () { this.properties.wrapper.innerHTML = "", this.properties.wrapper.className = this.properties.wrapper.className.replace("cropme-wrapper", ""), delete this.options, delete this.properties } }]), i }(), c = { container: { width: 300, height: 300 }, viewport: { width: 100, height: 100, border: { enable: !0, width: 2, color: "#fff" } }, transformOrigin: "viewport", zoom: { min: .01, max: 3, enable: !0, mouseWheel: !0, slider: !1 }, customClass: "", rotation: { slider: !1, enable: !0, position: "right" } }; return s });


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: card-js.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


function CardJs(elem) { this.elem = jQuery(elem), this.captureName = this.elem.data("capture-name") ? this.elem.data("capture-name") : !1, this.iconColour = this.elem.data("icon-colour") ? this.elem.data("icon-colour") : !1, this.stripe = this.elem.data("stripe") ? this.elem.data("stripe") : !1, this.stripe && (this.captureName = !1), this.initCardNumberInput(), this.initNameInput(), this.initExpiryMonthInput(), this.initExpiryYearInput(), this.initCvcInput(), this.elem.empty(), this.setupCardNumberInput(), this.setupNameInput(), this.setupExpiryInput(), this.setupCvcInput(), this.iconColour && this.setIconColour(this.iconColour), this.refreshCreditCardTypeIcon() } !function ($) { var methods = { init: function () { return this.data("cardjs", new CardJs(this)), this }, cardNumber: function () { return this.data("cardjs").getCardNumber() }, cardType: function () { return this.data("cardjs").getCardType() }, name: function () { return this.data("cardjs").getName() }, expiryMonth: function () { return this.data("cardjs").getExpiryMonth() }, expiryYear: function () { return this.data("cardjs").getExpiryYear() }, cvc: function () { return this.data("cardjs").getCvc() } }; $.fn.CardJs = function (methodOrOptions) { return methods[methodOrOptions] ? methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof methodOrOptions && methodOrOptions ? void $.error("Method " + methodOrOptions + " does not exist on jQuery.CardJs") : methods.init.apply(this, arguments) } }(jQuery), $(function () { $(".card-js").each(function (i, obj) { }) }), CardJs.prototype.constructor = CardJs, CardJs.KEYS = { 0: 48, 9: 57, NUMPAD_0: 96, NUMPAD_9: 105, DELETE: 46, BACKSPACE: 8, ARROW_LEFT: 37, ARROW_RIGHT: 39, ARROW_UP: 38, ARROW_DOWN: 40, HOME: 36, END: 35, TAB: 9, A: 65, X: 88, C: 67, V: 86 }, CardJs.CREDIT_CARD_NUMBER_DEFAULT_MASK = "XXXX XXXX XXXX XXXX", CardJs.CREDIT_CARD_NUMBER_VISA_MASK = "XXXX XXXX XXXX XXXX", CardJs.CREDIT_CARD_NUMBER_MASTERCARD_MASK = "XXXX XXXX XXXX XXXX", CardJs.CREDIT_CARD_NUMBER_DISCOVER_MASK = "XXXX XXXX XXXX XXXX", CardJs.CREDIT_CARD_NUMBER_JCB_MASK = "XXXX XXXX XXXX XXXX", CardJs.CREDIT_CARD_NUMBER_AMEX_MASK = "XXXX XXXXXX XXXXX", CardJs.CREDIT_CARD_NUMBER_DINERS_MASK = "XXXX XXXX XXXX XX", CardJs.prototype.creditCardNumberMask = CardJs.CREDIT_CARD_NUMBER_DEFAULT_MASK, CardJs.CREDIT_CARD_NUMBER_PLACEHOLDER = "Card number", CardJs.NAME_PLACEHOLDER = "Name on card", CardJs.EXPIRY_MASK = "XX / XX", CardJs.EXPIRY_PLACEHOLDER = "MM / YY", CardJs.EXPIRY_USE_DROPDOWNS = !1, CardJs.EXPIRY_NUMBER_OF_YEARS = 10, CardJs.CVC_MASK_3 = "XXX", CardJs.CVC_MASK_4 = "XXXX", CardJs.CVC_PLACEHOLDER = "CVC", CardJs.CREDIT_CARD_SVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="3px" width="24px" height="17px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><g><path class="svg" d="M182.385,14.258c-2.553-2.553-5.621-3.829-9.205-3.829H42.821c-3.585,0-6.653,1.276-9.207,3.829c-2.553,2.553-3.829,5.621-3.829,9.206v99.071c0,3.585,1.276,6.654,3.829,9.207c2.554,2.553,5.622,3.829,9.207,3.829H173.18c3.584,0,6.652-1.276,9.205-3.829s3.83-5.622,3.83-9.207V23.464C186.215,19.879,184.938,16.811,182.385,14.258z M175.785,122.536c0,0.707-0.258,1.317-0.773,1.834c-0.516,0.515-1.127,0.772-1.832,0.772H42.821c-0.706,0-1.317-0.258-1.833-0.773c-0.516-0.518-0.774-1.127-0.774-1.834V73h135.571V122.536z M175.785,41.713H40.214v-18.25c0-0.706,0.257-1.316,0.774-1.833c0.516-0.515,1.127-0.773,1.833-0.773H173.18c0.705,0,1.316,0.257,1.832,0.773c0.516,0.517,0.773,1.127,0.773,1.833V41.713z"/><rect class="svg" x="50.643" y="104.285" width="20.857" height="10.429"/><rect class="svg" x="81.929" y="104.285" width="31.286" height="10.429"/></g></svg>', CardJs.LOCK_SVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="3px" width="24px" height="17px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><path class="svg" d="M152.646,70.067c-1.521-1.521-3.367-2.281-5.541-2.281H144.5V52.142c0-9.994-3.585-18.575-10.754-25.745c-7.17-7.17-15.751-10.755-25.746-10.755s-18.577,3.585-25.746,10.755C75.084,33.567,71.5,42.148,71.5,52.142v15.644h-2.607c-2.172,0-4.019,0.76-5.54,2.281c-1.521,1.52-2.281,3.367-2.281,5.541v46.929c0,2.172,0.76,4.019,2.281,5.54c1.521,1.52,3.368,2.281,5.54,2.281h78.214c2.174,0,4.02-0.76,5.541-2.281c1.52-1.521,2.281-3.368,2.281-5.54V75.607C154.93,73.435,154.168,71.588,152.646,70.067z M128.857,67.786H87.143V52.142c0-5.757,2.037-10.673,6.111-14.746c4.074-4.074,8.989-6.11,14.747-6.11s10.673,2.036,14.746,6.11c4.073,4.073,6.11,8.989,6.11,14.746V67.786z"/></svg>', CardJs.CALENDAR_SVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><path class="svg" d="M172.691,23.953c-2.062-2.064-4.508-3.096-7.332-3.096h-10.428v-7.822c0-3.584-1.277-6.653-3.83-9.206c-2.554-2.553-5.621-3.83-9.207-3.83h-5.213c-3.586,0-6.654,1.277-9.207,3.83c-2.554,2.553-3.83,5.622-3.83,9.206v7.822H92.359v-7.822c0-3.584-1.277-6.653-3.83-9.206c-2.553-2.553-5.622-3.83-9.207-3.83h-5.214c-3.585,0-6.654,1.277-9.207,3.83c-2.553,2.553-3.83,5.622-3.83,9.206v7.822H50.643c-2.825,0-5.269,1.032-7.333,3.096s-3.096,4.509-3.096,7.333v104.287c0,2.823,1.032,5.267,3.096,7.332c2.064,2.064,4.508,3.096,7.333,3.096h114.714c2.824,0,5.27-1.032,7.332-3.096c2.064-2.064,3.096-4.509,3.096-7.332V31.286C175.785,28.461,174.754,26.017,172.691,23.953z M134.073,13.036c0-0.761,0.243-1.386,0.731-1.874c0.488-0.488,1.113-0.733,1.875-0.733h5.213c0.762,0,1.385,0.244,1.875,0.733c0.488,0.489,0.732,1.114,0.732,1.874V36.5c0,0.761-0.244,1.385-0.732,1.874c-0.49,0.488-1.113,0.733-1.875,0.733h-5.213c-0.762,0-1.387-0.244-1.875-0.733s-0.731-1.113-0.731-1.874V13.036z M71.501,13.036c0-0.761,0.244-1.386,0.733-1.874c0.489-0.488,1.113-0.733,1.874-0.733h5.214c0.761,0,1.386,0.244,1.874,0.733c0.488,0.489,0.733,1.114,0.733,1.874V36.5c0,0.761-0.244,1.386-0.733,1.874c-0.489,0.488-1.113,0.733-1.874,0.733h-5.214c-0.761,0-1.386-0.244-1.874-0.733c-0.488-0.489-0.733-1.113-0.733-1.874V13.036z M165.357,135.572H50.643V52.143h114.714V135.572z"/></svg>', CardJs.USER_SVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><g><path class="svg" d="M107.999,73c8.638,0,16.011-3.056,22.12-9.166c6.111-6.11,9.166-13.483,9.166-22.12c0-8.636-3.055-16.009-9.166-22.12c-6.11-6.11-13.484-9.165-22.12-9.165c-8.636,0-16.01,3.055-22.12,9.165c-6.111,6.111-9.166,13.484-9.166,22.12c0,8.637,3.055,16.01,9.166,22.12C91.99,69.944,99.363,73,107.999,73z"/><path class="svg" d="M165.07,106.037c-0.191-2.743-0.571-5.703-1.141-8.881c-0.57-3.178-1.291-6.124-2.16-8.84c-0.869-2.715-2.037-5.363-3.504-7.943c-1.466-2.58-3.15-4.78-5.052-6.6s-4.223-3.272-6.965-4.358c-2.744-1.086-5.772-1.63-9.085-1.63c-0.489,0-1.63,0.584-3.422,1.752s-3.815,2.472-6.069,3.911c-2.254,1.438-5.188,2.743-8.799,3.909c-3.612,1.168-7.237,1.752-10.877,1.752c-3.639,0-7.264-0.584-10.876-1.752c-3.611-1.166-6.545-2.471-8.799-3.909c-2.254-1.439-4.277-2.743-6.069-3.911c-1.793-1.168-2.933-1.752-3.422-1.752c-3.313,0-6.341,0.544-9.084,1.63s-5.065,2.539-6.966,4.358c-1.901,1.82-3.585,4.02-5.051,6.6s-2.634,5.229-3.503,7.943c-0.869,2.716-1.589,5.662-2.159,8.84c-0.571,3.178-0.951,6.137-1.141,8.881c-0.19,2.744-0.285,5.554-0.285,8.433c0,6.517,1.983,11.664,5.948,15.439c3.965,3.774,9.234,5.661,15.806,5.661h71.208c6.572,0,11.84-1.887,15.806-5.661c3.966-3.775,5.948-8.921,5.948-15.439C165.357,111.591,165.262,108.78,165.07,106.037z"/></g></svg>', CardJs.MAIL_SVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><path class="svg" d="M177.171,19.472c-2.553-2.553-5.622-3.829-9.206-3.829H48.036c-3.585,0-6.654,1.276-9.207,3.829C36.276,22.025,35,25.094,35,28.679v88.644c0,3.585,1.276,6.652,3.829,9.205c2.553,2.555,5.622,3.83,9.207,3.83h119.929c3.584,0,6.653-1.275,9.206-3.83c2.554-2.553,3.829-5.621,3.829-9.205V28.679C181,25.094,179.725,22.025,177.171,19.472zM170.57,117.321c0,0.706-0.258,1.317-0.774,1.833s-1.127,0.773-1.832,0.773H48.035c-0.706,0-1.317-0.257-1.833-0.773c-0.516-0.516-0.774-1.127-0.774-1.833V54.75c1.738,1.955,3.612,3.748,5.622,5.377c14.557,11.189,26.126,20.368,34.708,27.538c2.77,2.336,5.024,4.155,6.762,5.459s4.087,2.62,7.047,3.951s5.744,1.995,8.351,1.995H108h0.081c2.606,0,5.392-0.664,8.351-1.995c2.961-1.331,5.311-2.647,7.049-3.951c1.737-1.304,3.992-3.123,6.762-5.459c8.582-7.17,20.15-16.349,34.707-27.538c2.01-1.629,3.885-3.422,5.621-5.377V117.321z M170.57,30.797v0.896c0,3.204-1.262,6.776-3.787,10.713c-2.525,3.938-5.256,7.075-8.188,9.41c-10.484,8.257-21.373,16.865-32.672,25.827c-0.326,0.271-1.277,1.073-2.852,2.403c-1.574,1.331-2.824,2.351-3.748,3.056c-0.924,0.707-2.131,1.562-3.625,2.566s-2.865,1.752-4.114,2.24s-2.417,0.732-3.503,0.732H108h-0.082c-1.086,0-2.253-0.244-3.503-0.732c-1.249-0.488-2.621-1.236-4.114-2.24c-1.493-1.004-2.702-1.859-3.625-2.566c-0.923-0.705-2.173-1.725-3.748-3.056c-1.575-1.33-2.526-2.132-2.852-2.403c-11.297-8.962-22.187-17.57-32.67-25.827c-7.985-6.3-11.977-14.013-11.977-23.138c0-0.706,0.258-1.317,0.774-1.833c0.516-0.516,1.127-0.774,1.833-0.774h119.929c0.434,0.244,0.814,0.312,1.141,0.204c0.326-0.11,0.57,0.094,0.732,0.61c0.163,0.516,0.312,0.76,0.448,0.733c0.136-0.027,0.218,0.312,0.245,1.019c0.025,0.706,0.039,1.061,0.039,1.061V30.797z"/></svg>', CardJs.INFORMATION_SVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><g><path class="svg" d="M97.571,41.714h20.859c1.411,0,2.633-0.516,3.666-1.548c1.031-1.031,1.547-2.254,1.547-3.666V20.857c0-1.412-0.516-2.634-1.549-3.667c-1.031-1.031-2.254-1.548-3.666-1.548H97.571c-1.412,0-2.634,0.517-3.666,1.548c-1.032,1.032-1.548,2.255-1.548,3.667V36.5c0,1.412,0.516,2.635,1.548,3.666C94.937,41.198,96.159,41.714,97.571,41.714z"/><path class="svg" d="M132.523,111.048c-1.031-1.032-2.254-1.548-3.666-1.548h-5.215V62.571c0-1.412-0.516-2.634-1.547-3.666c-1.033-1.032-2.255-1.548-3.666-1.548H87.143c-1.412,0-2.634,0.516-3.666,1.548c-1.032,1.032-1.548,2.254-1.548,3.666V73c0,1.412,0.516,2.635,1.548,3.666c1.032,1.032,2.254,1.548,3.666,1.548h5.215V109.5h-5.215c-1.412,0-2.634,0.516-3.666,1.548c-1.032,1.032-1.548,2.254-1.548,3.666v10.429c0,1.412,0.516,2.635,1.548,3.668c1.032,1.03,2.254,1.547,3.666,1.547h41.714c1.412,0,2.634-0.517,3.666-1.547c1.031-1.033,1.547-2.256,1.547-3.668v-10.429C134.07,113.302,133.557,112.08,132.523,111.048z"/></g></svg>', CardJs.keyCodeFromEvent = function (e) { return e.which || e.keyCode }, CardJs.keyIsCommandFromEvent = function (e) { return e.ctrlKey || e.metaKey }, CardJs.keyIsNumber = function (e) { return CardJs.keyIsTopNumber(e) || CardJs.keyIsKeypadNumber(e) }, CardJs.keyIsTopNumber = function (e) { var keyCode = CardJs.keyCodeFromEvent(e); return keyCode >= CardJs.KEYS[0] && keyCode <= CardJs.KEYS[9] }, CardJs.keyIsKeypadNumber = function (e) { var keyCode = CardJs.keyCodeFromEvent(e); return keyCode >= CardJs.KEYS.NUMPAD_0 && keyCode <= CardJs.KEYS.NUMPAD_9 }, CardJs.keyIsDelete = function (e) { return CardJs.keyCodeFromEvent(e) == CardJs.KEYS.DELETE }, CardJs.keyIsBackspace = function (e) { return CardJs.keyCodeFromEvent(e) == CardJs.KEYS.BACKSPACE }, CardJs.keyIsDeletion = function (e) { return CardJs.keyIsDelete(e) || CardJs.keyIsBackspace(e) }, CardJs.keyIsArrow = function (e) { var keyCode = CardJs.keyCodeFromEvent(e); return keyCode >= CardJs.KEYS.ARROW_LEFT && keyCode <= CardJs.KEYS.ARROW_DOWN }, CardJs.keyIsNavigation = function (e) { var keyCode = CardJs.keyCodeFromEvent(e); return keyCode == CardJs.KEYS.HOME || keyCode == CardJs.KEYS.END }, CardJs.keyIsKeyboardCommand = function (e) { var keyCode = CardJs.keyCodeFromEvent(e); return CardJs.keyIsCommandFromEvent(e) && (keyCode == CardJs.KEYS.A || keyCode == CardJs.KEYS.X || keyCode == CardJs.KEYS.C || keyCode == CardJs.KEYS.V) }, CardJs.keyIsTab = function (e) { return CardJs.keyCodeFromEvent(e) == CardJs.KEYS.TAB }, CardJs.copyAllElementAttributes = function (source, destination) { $.each(source[0].attributes, function (idx, attr) { destination.attr(attr.nodeName, attr.nodeValue) }) }, CardJs.numbersOnlyString = function (string) { for (var numbersOnlyString = "", i = 0; i < string.length; i++) { var currentChar = string.charAt(i), isValid = !isNaN(parseInt(currentChar)); isValid && (numbersOnlyString += currentChar) } return numbersOnlyString }, CardJs.applyFormatMask = function (string, mask) { for (var formattedString = "", numberPos = 0, j = 0; j < mask.length; j++) { var currentMaskChar = mask[j]; if ("X" == currentMaskChar) { var digit = string.charAt(numberPos); if (!digit) break; formattedString += string.charAt(numberPos), numberPos++ } else formattedString += currentMaskChar } return formattedString }, CardJs.cardTypeFromNumber = function (number) { if (re = new RegExp("^30[0-5]"), null != number.match(re)) return "Diners - Carte Blanche"; if (re = new RegExp("^(30[6-9]|36|38)"), null != number.match(re)) return "Diners"; if (re = new RegExp("^35(2[89]|[3-8][0-9])"), null != number.match(re)) return "JCB"; if (re = new RegExp("^3[47]"), null != number.match(re)) return "AMEX"; if (re = new RegExp("^(4026|417500|4508|4844|491(3|7))"), null != number.match(re)) return "Visa Electron"; var re = new RegExp("^4"); return null != number.match(re) ? "Visa" : (re = new RegExp("^5[1-5]"), null != number.match(re) ? "Mastercard" : (re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"), null != number.match(re) ? "Discover" : "")) }, CardJs.caretStartPosition = function (element) { return "number" == typeof element.selectionStart ? element.selectionStart : !1 }, CardJs.caretEndPosition = function (element) { return "number" == typeof element.selectionEnd ? element.selectionEnd : !1 }, CardJs.setCaretPosition = function (element, caretPos) { if (null != element) if (element.createTextRange) { var range = element.createTextRange(); range.move("character", caretPos), range.select() } else element.selectionStart ? (element.focus(), element.setSelectionRange(caretPos, caretPos)) : element.focus() }, CardJs.normaliseCaretPosition = function (mask, caretPosition) { var numberPos = 0; if (0 > caretPosition || caretPosition > mask.length) return 0; for (var i = 0; i < mask.length; i++) { if (i == caretPosition) return numberPos; "X" == mask[i] && numberPos++ } return numberPos }, CardJs.denormaliseCaretPosition = function (mask, caretPosition) { var numberPos = 0; if (0 > caretPosition || caretPosition > mask.length) return 0; for (var i = 0; i < mask.length; i++) { if (numberPos == caretPosition) return i; "X" == mask[i] && numberPos++ } return mask.length }, CardJs.filterNumberOnlyKey = function (e) { var isNumber = CardJs.keyIsNumber(e), isDeletion = CardJs.keyIsDeletion(e), isArrow = CardJs.keyIsArrow(e), isNavigation = CardJs.keyIsNavigation(e), isKeyboardCommand = CardJs.keyIsKeyboardCommand(e), isTab = CardJs.keyIsTab(e); isNumber || isDeletion || isArrow || isNavigation || isKeyboardCommand || isTab || e.preventDefault() }, CardJs.digitFromKeyCode = function (keyCode) { return keyCode >= CardJs.KEYS[0] && keyCode <= CardJs.KEYS[9] ? keyCode - CardJs.KEYS[0] : keyCode >= CardJs.KEYS.NUMPAD_0 && keyCode <= CardJs.KEYS.NUMPAD_9 ? keyCode - CardJs.KEYS.NUMPAD_0 : null }, CardJs.handleMaskedNumberInputKey = function (e, mask) { CardJs.filterNumberOnlyKey(e); var keyCode = e.which || e.keyCode, element = e.target, caretStart = CardJs.caretStartPosition(element), caretEnd = CardJs.caretEndPosition(element), normalisedStartCaretPosition = CardJs.normaliseCaretPosition(mask, caretStart), normalisedEndCaretPosition = CardJs.normaliseCaretPosition(mask, caretEnd), newCaretPosition = caretStart, isNumber = CardJs.keyIsNumber(e), isDelete = CardJs.keyIsDelete(e), isBackspace = CardJs.keyIsBackspace(e); if (isNumber || isDelete || isBackspace) { e.preventDefault(); var rawText = $(element).val(), numbersOnly = CardJs.numbersOnlyString(rawText), digit = CardJs.digitFromKeyCode(keyCode), rangeHighlighted = normalisedEndCaretPosition > normalisedStartCaretPosition; rangeHighlighted && (numbersOnly = numbersOnly.slice(0, normalisedStartCaretPosition) + numbersOnly.slice(normalisedEndCaretPosition)), caretStart != mask.length && (isNumber && rawText.length <= mask.length && (numbersOnly = numbersOnly.slice(0, normalisedStartCaretPosition) + digit + numbersOnly.slice(normalisedStartCaretPosition), newCaretPosition = Math.max(CardJs.denormaliseCaretPosition(mask, normalisedStartCaretPosition + 1), CardJs.denormaliseCaretPosition(mask, normalisedStartCaretPosition + 2) - 1)), isDelete && (numbersOnly = numbersOnly.slice(0, normalisedStartCaretPosition) + numbersOnly.slice(normalisedStartCaretPosition + 1))), 0 != caretStart && isBackspace && !rangeHighlighted && (numbersOnly = numbersOnly.slice(0, normalisedStartCaretPosition - 1) + numbersOnly.slice(normalisedStartCaretPosition), newCaretPosition = CardJs.denormaliseCaretPosition(mask, normalisedStartCaretPosition - 1)), $(element).val(CardJs.applyFormatMask(numbersOnly, mask)), CardJs.setCaretPosition(element, newCaretPosition) } }, CardJs.handleCreditCardNumberKey = function (e, cardMask) { CardJs.handleMaskedNumberInputKey(e, cardMask) }, CardJs.handleCreditCardNumberChange = function (e) { }, CardJs.handleExpiryKey = function (e) { CardJs.handleMaskedNumberInputKey(e, CardJs.EXPIRY_MASK) }, CardJs.prototype.getCardNumber = function () { return this.cardNumberInput.val() }, CardJs.prototype.getCardType = function () { return CardJs.cardTypeFromNumber(this.getCardNumber()) }, CardJs.prototype.getName = function () { return this.nameInput.val() }, CardJs.prototype.getExpiryMonth = function () { return this.expiryMonthInput.val() }, CardJs.prototype.getExpiryYear = function () { return this.expiryYearInput.val() }, CardJs.prototype.getCvc = function () { return this.cvcInput.val() }, CardJs.prototype.setIconColour = function (colour) { this.elem.find(".icon .svg").css({ fill: colour }) }, CardJs.prototype.setIconColour = function (colour) { this.elem.find(".icon .svg").css({ fill: colour }) }, CardJs.prototype.refreshCreditCardTypeIcon = function () { this.setCardTypeIconFromNumber(CardJs.numbersOnlyString(this.cardNumberInput.val())) }, CardJs.prototype.refreshCreditCardNumberFormat = function () { var numbersOnly = CardJs.numbersOnlyString($(this.cardNumberInput).val()), formattedNumber = CardJs.applyFormatMask(numbersOnly, this.creditCardNumberMask); $(this.cardNumberInput).val(formattedNumber) }, CardJs.prototype.refreshExpiryMonthYearInput = function () { var numbersOnly = CardJs.numbersOnlyString($(this.expiryMonthYearInput).val()), formattedNumber = CardJs.applyFormatMask(numbersOnly, CardJs.EXPIRY_MASK); $(this.expiryMonthYearInput).val(formattedNumber) }, CardJs.prototype.refreshCvc = function () { var numbersOnly = CardJs.numbersOnlyString($(this.cvcInput).val()), formattedNumber = CardJs.applyFormatMask(numbersOnly, this.creditCardNumberMask); $(this.cvcInput).val(formattedNumber) }, CardJs.prototype.setCardTypeIconFromNumber = function (number) { switch (CardJs.cardTypeFromNumber(number)) { case "Visa Electron": case "Visa": this.setCardTypeAsVisa(); break; case "Mastercard": this.setCardTypeAsMasterCard(); break; case "AMEX": this.setCardTypeAsAmericanExpress(); break; case "Discover": this.setCardTypeAsDiscover(); break; case "Diners - Carte Blanche": case "Diners": this.setCardTypeAsDiners(); break; case "JCB": this.setCardTypeAsJcb(); break; default: this.clearCardType() } }, CardJs.prototype.setCardMask = function (cardMask) { this.creditCardNumberMask = cardMask, this.cardNumberInput.attr("maxlength", cardMask.length) }, CardJs.prototype.setCvc3 = function () { this.cvcInput.attr("maxlength", CardJs.CVC_MASK_3.length) }, CardJs.prototype.setCvc4 = function () { this.cvcInput.attr("maxlength", CardJs.CVC_MASK_4.length) }, CardJs.prototype.clearCardTypeIcon = function () { this.elem.find(".card-number-wrapper .card-type-icon").removeClass("show") }, CardJs.prototype.setCardTypeIconAsVisa = function () { this.elem.find(".card-number-wrapper .card-type-icon").attr("class", "card-type-icon show visa") }, CardJs.prototype.setCardTypeIconAsMasterCard = function () { this.elem.find(".card-number-wrapper .card-type-icon").attr("class", "card-type-icon show master-card") }, CardJs.prototype.setCardTypeIconAsAmericanExpress = function () { this.elem.find(".card-number-wrapper .card-type-icon").attr("class", "card-type-icon show american-express") }, CardJs.prototype.setCardTypeIconAsDiscover = function () { this.elem.find(".card-number-wrapper .card-type-icon").attr("class", "card-type-icon show discover") }, CardJs.prototype.setCardTypeIconAsDiners = function () { this.elem.find(".card-number-wrapper .card-type-icon").attr("class", "card-type-icon show diners") }, CardJs.prototype.setCardTypeIconAsJcb = function () { this.elem.find(".card-number-wrapper .card-type-icon").attr("class", "card-type-icon show jcb") }, CardJs.prototype.clearCardType = function () { this.clearCardTypeIcon(), this.setCardMask(CardJs.CREDIT_CARD_NUMBER_DEFAULT_MASK), this.setCvc3() }, CardJs.prototype.setCardTypeAsVisa = function () { this.setCardTypeIconAsVisa(), this.setCardMask(CardJs.CREDIT_CARD_NUMBER_VISA_MASK), this.setCvc3() }, CardJs.prototype.setCardTypeAsMasterCard = function () { this.setCardTypeIconAsMasterCard(), this.setCardMask(CardJs.CREDIT_CARD_NUMBER_MASTERCARD_MASK), this.setCvc3() }, CardJs.prototype.setCardTypeAsAmericanExpress = function () { this.setCardTypeIconAsAmericanExpress(), this.setCardMask(CardJs.CREDIT_CARD_NUMBER_AMEX_MASK), this.setCvc4() }, CardJs.prototype.setCardTypeAsDiscover = function () { this.setCardTypeIconAsDiscover(), this.setCardMask(CardJs.CREDIT_CARD_NUMBER_DISCOVER_MASK), this.setCvc3() }, CardJs.prototype.setCardTypeAsDiners = function () { this.setCardTypeIconAsDiners(), this.setCardMask(CardJs.CREDIT_CARD_NUMBER_DINERS_MASK), this.setCvc3() }, CardJs.prototype.setCardTypeAsJcb = function () { this.setCardTypeIconAsJcb(), this.setCardMask(CardJs.CREDIT_CARD_NUMBER_JCB_MASK), this.setCvc3() }, CardJs.prototype.initCardNumberInput = function () { this.cardNumberInput = CardJs.detachOrCreateElement(this.elem, ".card-number", "<input class='card-number' />"), CardJs.elementHasAttribute(this.cardNumberInput, "name") || this.cardNumberInput.attr("name", "card-number"), CardJs.elementHasAttribute(this.cardNumberInput, "placeholder") || this.cardNumberInput.attr("placeholder", CardJs.CREDIT_CARD_NUMBER_PLACEHOLDER), this.cardNumberInput.attr("type", "tel"), this.cardNumberInput.attr("maxlength", this.creditCardNumberMask.length), this.cardNumberInput.attr("x-autocompletetype", "cc-number"), this.cardNumberInput.attr("autocompletetype", "cc-number"), this.cardNumberInput.attr("autocorrect", "off"), this.cardNumberInput.attr("spellcheck", "off"), this.cardNumberInput.attr("autocapitalize", "off"); var $this = this; this.cardNumberInput.keydown(function (e) { CardJs.handleCreditCardNumberKey(e, $this.creditCardNumberMask) }), this.cardNumberInput.keyup(function () { $this.refreshCreditCardTypeIcon() }), this.cardNumberInput.on("paste", function () { setTimeout(function () { $this.refreshCreditCardNumberFormat(), $this.refreshCreditCardTypeIcon() }, 1) }) }, CardJs.prototype.initNameInput = function () { this.captureName = null != this.elem.find(".name")[0], this.nameInput = CardJs.detachOrCreateElement(this.elem, ".name", "<input class='name' />"), CardJs.elementHasAttribute(this.nameInput, "name") || this.nameInput.attr("name", "card-number"), CardJs.elementHasAttribute(this.nameInput, "placeholder") || this.nameInput.attr("placeholder", CardJs.NAME_PLACEHOLDER) }, CardJs.prototype.initExpiryMonthInput = function () { this.expiryMonthInput = CardJs.detachOrCreateElement(this.elem, ".expiry-month", "<input class='expiry-month' />") }, CardJs.prototype.initExpiryYearInput = function () { this.expiryYearInput = CardJs.detachOrCreateElement(this.elem, ".expiry-year", "<input class='expiry-year' />") }, CardJs.prototype.initCvcInput = function () { this.cvcInput = CardJs.detachOrCreateElement(this.elem, ".cvc", "<input class='cvc' />"), CardJs.elementHasAttribute(this.cvcInput, "placeholder") || this.cvcInput.attr("placeholder", CardJs.CVC_PLACEHOLDER), this.cvcInput.attr("type", "tel"), this.cvcInput.attr("maxlength", CardJs.CVC_MASK_3.length), this.cvcInput.attr("x-autocompletetype", "cc-csc"), this.cvcInput.attr("autocompletetype", "cc-csc"), this.cvcInput.attr("autocorrect", "off"), this.cvcInput.attr("spellcheck", "off"), this.cvcInput.attr("autocapitalize", "off"); var $this = this; this.cvcInput.keydown(CardJs.filterNumberOnlyKey), this.cvcInput.on("paste", function () { setTimeout(function () { $this.refreshCvc() }, 1) }) }, CardJs.prototype.setupCardNumberInput = function () { this.stripe && this.cardNumberInput.attr("data-stripe", "number"), this.elem.append("<div class='card-number-wrapper'></div>"); var wrapper = this.elem.find(".card-number-wrapper"); wrapper.append(this.cardNumberInput), wrapper.append("<div class='card-type-icon'></div>"), wrapper.append("<div class='icon'></div>"), wrapper.find(".icon").append(CardJs.CREDIT_CARD_SVG) }, CardJs.prototype.setupNameInput = function () { if (this.captureName) { this.elem.append("<div class='name-wrapper'></div>"); var wrapper = this.elem.find(".name-wrapper"); wrapper.append(this.nameInput), wrapper.append("<div class='icon'></div>"), wrapper.find(".icon").append(CardJs.USER_SVG) } }, CardJs.prototype.setupExpiryInput = function () { this.elem.append("<div class='expiry-container'><div class='expiry-wrapper'></div></div>"); var expiryInput, wrapper = this.elem.find(".expiry-wrapper"); if (this.EXPIRY_USE_DROPDOWNS) { expiryInput = $("<div></div>"); var expiryMonthNew = $("<select><option value='any' selected='' hidden=''>MM</option><option value='1'>01</option><option value='2'>02</option><option value='3'>03</option><option value='4'>04</option><option value='5'>05</option><option value='6'>06</option><option value='7'>07</option><option value='8'>08</option><option value='9'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option></select>"), expiryMonthOld = this.expiryMonthInput; CardJs.copyAllElementAttributes(expiryMonthOld, expiryMonthNew), this.expiryMonthInput.remove(), this.expiryMonthInput = expiryMonthNew; for (var expiryYearNew = $("<select><option value='any' selected='' hidden=''>YY</option></select>"), currentYear = parseInt((new Date).getFullYear().toString().substring(2, 4)), i = 0; i < CardJs.EXPIRY_NUMBER_OF_YEARS; i++)expiryYearNew.append("<option value='" + currentYear + "'>" + currentYear + "</option>"), currentYear = (currentYear + 1) % 100; var expiryYearOld = this.expiryYearInput; CardJs.copyAllElementAttributes(expiryYearOld, expiryYearNew), this.expiryYearInput.remove(), this.expiryYearInput = expiryYearNew, expiryInput.append(this.expiryMonthInput), expiryInput.append(this.expiryYearInput) } else { expiryInput = $("<div></div>"), "hidden" != this.expiryMonthInput.attr("type") && this.expiryMonthInput.attr("type", "hidden"), "hidden" != this.expiryYearInput.attr("type") && this.expiryYearInput.attr("type", "hidden"), this.stripe && (this.expiryMonthInput.attr("data-stripe", "exp-month"), this.expiryYearInput.attr("data-stripe", "exp-year")), this.expiryMonthYearInput = CardJs.detachOrCreateElement(this.elem, ".expiry", "<input class='expiry' />"), CardJs.elementHasAttribute(this.expiryMonthYearInput, "placeholder") || this.expiryMonthYearInput.attr("placeholder", CardJs.EXPIRY_PLACEHOLDER), this.expiryMonthYearInput.attr("type", "tel"), this.expiryMonthYearInput.attr("maxlength", CardJs.EXPIRY_MASK.length), this.expiryMonthYearInput.attr("x-autocompletetype", "cc-exp"), this.expiryMonthYearInput.attr("autocompletetype", "cc-exp"), this.expiryMonthYearInput.attr("autocorrect", "off"), this.expiryMonthYearInput.attr("spellcheck", "off"), this.expiryMonthYearInput.attr("autocapitalize", "off"); var $this = this; this.expiryMonthYearInput.keydown(function (e) { CardJs.handleExpiryKey(e); var val = $this.expiryMonthYearInput.val(); 1 == val.length && parseInt(val) > 1 && CardJs.keyIsNumber(e) && $this.expiryMonthYearInput.val(CardJs.applyFormatMask("0" + val, CardJs.EXPIRY_MASK)), $this.EXPIRY_USE_DROPDOWNS || null == $this.expiryMonthYearInput || ($this.expiryMonthInput.val($this.expiryMonth()), $this.expiryYearInput.val(7 == val.length ? val.substr(5, 2) : null)) }), this.expiryMonthYearInput.blur(function () { $this.refreshExpiryMonthValidation() }), this.expiryMonthYearInput.on("paste", function () { setTimeout(function () { $this.refreshExpiryMonthYearInput() }, 1) }), expiryInput.append(this.expiryMonthYearInput), expiryInput.append(this.expiryMonthInput), expiryInput.append(this.expiryYearInput) } wrapper.append(expiryInput), wrapper.append("<div class='icon'></div>"), wrapper.find(".icon").append(CardJs.CALENDAR_SVG) }, CardJs.prototype.setupCvcInput = function () { this.stripe && this.cvcInput.attr("data-stripe", "cvc"), this.elem.append("<div class='cvc-container'><div class='cvc-wrapper'></div></div>"); var wrapper = this.elem.find(".cvc-wrapper"); wrapper.append(this.cvcInput), wrapper.append("<div class='icon'></div>"), wrapper.find(".icon").append(CardJs.LOCK_SVG) }, CardJs.prototype.expiryMonth = function () { if (!this.EXPIRY_USE_DROPDOWNS && null != this.expiryMonthYearInput) { var val = this.expiryMonthYearInput.val(); return val.length >= 2 ? parseInt(val.substr(0, 2)) : null } return null }, CardJs.prototype.refreshExpiryMonthValidation = function () { CardJs.isExpiryValid(this.getExpiryMonth(), this.getExpiryYear()) ? this.setExpiryMonthAsValid() : this.setExpiryMonthAsInvalid() }, CardJs.prototype.setExpiryMonthAsValid = function () { this.EXPIRY_USE_DROPDOWNS || this.expiryMonthYearInput.parent().removeClass("has-error") }, CardJs.prototype.setExpiryMonthAsInvalid = function () { this.EXPIRY_USE_DROPDOWNS || this.expiryMonthYearInput.parent().addClass("has-error") }, CardJs.elementHasAttribute = function (element, attributeName) { var attr = $(element).attr(attributeName); return "undefined" != typeof attr && attr !== !1 }, CardJs.detachOrCreateElement = function (parentElement, selector, html) { var element = parentElement.find(selector); return element[0] ? element.detach() : element = $(html), element }, CardJs.isValidMonth = function (expiryMonth) { return expiryMonth >= 1 && 12 >= expiryMonth }, CardJs.isExpiryValid = function (month, year) { var today = new Date, currentMonth = today.getMonth() + 1, currentYear = "" + today.getFullYear(); return 2 == ("" + year).length && (year = currentYear.substring(0, 2) + "" + year), currentMonth = parseInt(currentMonth), currentYear = parseInt(currentYear), month = parseInt(month), year = parseInt(year), CardJs.isValidMonth(month) && (year > currentYear || year == currentYear && month >= currentMonth) };

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: ufs.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


let ufs = {
    "AC": {
        "nome": "Acre",
        "municipios": [
            {
                "codigo_ibge": 1200013,
                "nome": "Acrelândia"
            },
            {
                "codigo_ibge": 1200054,
                "nome": "Assis Brasil"
            },
            {
                "codigo_ibge": 1200104,
                "nome": "Brasiléia"
            },
            {
                "codigo_ibge": 1200138,
                "nome": "Bujari"
            },
            {
                "codigo_ibge": 1200179,
                "nome": "Capixaba"
            },
            {
                "codigo_ibge": 1200203,
                "nome": "Cruzeiro do Sul"
            },
            {
                "codigo_ibge": 1200252,
                "nome": "Epitaciolândia"
            },
            {
                "codigo_ibge": 1200302,
                "nome": "Feijó"
            },
            {
                "codigo_ibge": 1200328,
                "nome": "Jordão"
            },
            {
                "codigo_ibge": 1200336,
                "nome": "Mâncio Lima"
            },
            {
                "codigo_ibge": 1200344,
                "nome": "Manoel Urbano"
            },
            {
                "codigo_ibge": 1200351,
                "nome": "Marechal Thaumaturgo"
            },
            {
                "codigo_ibge": 1200385,
                "nome": "Plácido de Castro"
            },
            {
                "codigo_ibge": 1200807,
                "nome": "Porto Acre"
            },
            {
                "codigo_ibge": 1200393,
                "nome": "Porto Walter"
            },
            {
                "codigo_ibge": 1200401,
                "nome": "Rio Branco"
            },
            {
                "codigo_ibge": 1200427,
                "nome": "Rodrigues Alves"
            },
            {
                "codigo_ibge": 1200435,
                "nome": "Santa Rosa do Purus"
            },
            {
                "codigo_ibge": 1200500,
                "nome": "Sena Madureira"
            },
            {
                "codigo_ibge": 1200450,
                "nome": "Senador Guiomard"
            },
            {
                "codigo_ibge": 1200609,
                "nome": "Tarauacá"
            },
            {
                "codigo_ibge": 1200708,
                "nome": "Xapuri"
            }
        ]
    },
    "AL": {
        "nome": "Alagoas",
        "municipios": [
            {
                "codigo_ibge": 2700102,
                "nome": "Água Branca"
            },
            {
                "codigo_ibge": 2700201,
                "nome": "Anadia"
            },
            {
                "codigo_ibge": 2700300,
                "nome": "Arapiraca"
            },
            {
                "codigo_ibge": 2700409,
                "nome": "Atalaia"
            },
            {
                "codigo_ibge": 2700508,
                "nome": "Barra de Santo Antônio"
            },
            {
                "codigo_ibge": 2700607,
                "nome": "Barra de São Miguel"
            },
            {
                "codigo_ibge": 2700706,
                "nome": "Batalha"
            },
            {
                "codigo_ibge": 2700805,
                "nome": "Belém"
            },
            {
                "codigo_ibge": 2700904,
                "nome": "Belo Monte"
            },
            {
                "codigo_ibge": 2701001,
                "nome": "Boca da Mata"
            },
            {
                "codigo_ibge": 2701100,
                "nome": "Branquinha"
            },
            {
                "codigo_ibge": 2701209,
                "nome": "Cacimbinhas"
            },
            {
                "codigo_ibge": 2701308,
                "nome": "Cajueiro"
            },
            {
                "codigo_ibge": 2701357,
                "nome": "Campestre"
            },
            {
                "codigo_ibge": 2701407,
                "nome": "Campo Alegre"
            },
            {
                "codigo_ibge": 2701506,
                "nome": "Campo Grande"
            },
            {
                "codigo_ibge": 2701605,
                "nome": "Canapi"
            },
            {
                "codigo_ibge": 2701704,
                "nome": "Capela"
            },
            {
                "codigo_ibge": 2701803,
                "nome": "Carneiros"
            },
            {
                "codigo_ibge": 2701902,
                "nome": "Chã Preta"
            },
            {
                "codigo_ibge": 2702009,
                "nome": "Coité do Nóia"
            },
            {
                "codigo_ibge": 2702108,
                "nome": "Colônia Leopoldina"
            },
            {
                "codigo_ibge": 2702207,
                "nome": "Coqueiro Seco"
            },
            {
                "codigo_ibge": 2702306,
                "nome": "Coruripe"
            },
            {
                "codigo_ibge": 2702355,
                "nome": "Craíbas"
            },
            {
                "codigo_ibge": 2702405,
                "nome": "Delmiro Gouveia"
            },
            {
                "codigo_ibge": 2702504,
                "nome": "Dois Riachos"
            },
            {
                "codigo_ibge": 2702553,
                "nome": "Estrela de Alagoas"
            },
            {
                "codigo_ibge": 2702603,
                "nome": "Feira Grande"
            },
            {
                "codigo_ibge": 2702702,
                "nome": "Feliz Deserto"
            },
            {
                "codigo_ibge": 2702801,
                "nome": "Flexeiras"
            },
            {
                "codigo_ibge": 2702900,
                "nome": "Girau do Ponciano"
            },
            {
                "codigo_ibge": 2703007,
                "nome": "Ibateguara"
            },
            {
                "codigo_ibge": 2703106,
                "nome": "Igaci"
            },
            {
                "codigo_ibge": 2703205,
                "nome": "Igreja Nova"
            },
            {
                "codigo_ibge": 2703304,
                "nome": "Inhapi"
            },
            {
                "codigo_ibge": 2703403,
                "nome": "Jacaré dos Homens"
            },
            {
                "codigo_ibge": 2703502,
                "nome": "Jacuípe"
            },
            {
                "codigo_ibge": 2703601,
                "nome": "Japaratinga"
            },
            {
                "codigo_ibge": 2703700,
                "nome": "Jaramataia"
            },
            {
                "codigo_ibge": 2703759,
                "nome": "Jequiá da Praia"
            },
            {
                "codigo_ibge": 2703809,
                "nome": "Joaquim Gomes"
            },
            {
                "codigo_ibge": 2703908,
                "nome": "Jundiá"
            },
            {
                "codigo_ibge": 2704005,
                "nome": "Junqueiro"
            },
            {
                "codigo_ibge": 2704104,
                "nome": "Lagoa da Canoa"
            },
            {
                "codigo_ibge": 2704203,
                "nome": "Limoeiro de Anadia"
            },
            {
                "codigo_ibge": 2704302,
                "nome": "Maceió"
            },
            {
                "codigo_ibge": 2704401,
                "nome": "Major Isidoro"
            },
            {
                "codigo_ibge": 2704906,
                "nome": "Mar Vermelho"
            },
            {
                "codigo_ibge": 2704500,
                "nome": "Maragogi"
            },
            {
                "codigo_ibge": 2704609,
                "nome": "Maravilha"
            },
            {
                "codigo_ibge": 2704708,
                "nome": "Marechal Deodoro"
            },
            {
                "codigo_ibge": 2704807,
                "nome": "Maribondo"
            },
            {
                "codigo_ibge": 2705002,
                "nome": "Mata Grande"
            },
            {
                "codigo_ibge": 2705101,
                "nome": "Matriz de Camaragibe"
            },
            {
                "codigo_ibge": 2705200,
                "nome": "Messias"
            },
            {
                "codigo_ibge": 2705309,
                "nome": "Minador do Negrão"
            },
            {
                "codigo_ibge": 2705408,
                "nome": "Monteirópolis"
            },
            {
                "codigo_ibge": 2705507,
                "nome": "Murici"
            },
            {
                "codigo_ibge": 2705606,
                "nome": "Novo Lino"
            },
            {
                "codigo_ibge": 2705705,
                "nome": "Olho d'Água das Flores"
            },
            {
                "codigo_ibge": 2705804,
                "nome": "Olho d'Água do Casado"
            },
            {
                "codigo_ibge": 2705903,
                "nome": "Olho d'Água Grande"
            },
            {
                "codigo_ibge": 2706000,
                "nome": "Olivença"
            },
            {
                "codigo_ibge": 2706109,
                "nome": "Ouro Branco"
            },
            {
                "codigo_ibge": 2706208,
                "nome": "Palestina"
            },
            {
                "codigo_ibge": 2706307,
                "nome": "Palmeira dos Índios"
            },
            {
                "codigo_ibge": 2706406,
                "nome": "Pão de Açúcar"
            },
            {
                "codigo_ibge": 2706422,
                "nome": "Pariconha"
            },
            {
                "codigo_ibge": 2706448,
                "nome": "Paripueira"
            },
            {
                "codigo_ibge": 2706505,
                "nome": "Passo de Camaragibe"
            },
            {
                "codigo_ibge": 2706604,
                "nome": "Paulo Jacinto"
            },
            {
                "codigo_ibge": 2706703,
                "nome": "Penedo"
            },
            {
                "codigo_ibge": 2706802,
                "nome": "Piaçabuçu"
            },
            {
                "codigo_ibge": 2706901,
                "nome": "Pilar"
            },
            {
                "codigo_ibge": 2707008,
                "nome": "Pindoba"
            },
            {
                "codigo_ibge": 2707107,
                "nome": "Piranhas"
            },
            {
                "codigo_ibge": 2707206,
                "nome": "Poço das Trincheiras"
            },
            {
                "codigo_ibge": 2707305,
                "nome": "Porto Calvo"
            },
            {
                "codigo_ibge": 2707404,
                "nome": "Porto de Pedras"
            },
            {
                "codigo_ibge": 2707503,
                "nome": "Porto Real do Colégio"
            },
            {
                "codigo_ibge": 2707602,
                "nome": "Quebrangulo"
            },
            {
                "codigo_ibge": 2707701,
                "nome": "Rio Largo"
            },
            {
                "codigo_ibge": 2707800,
                "nome": "Roteiro"
            },
            {
                "codigo_ibge": 2707909,
                "nome": "Santa Luzia do Norte"
            },
            {
                "codigo_ibge": 2708006,
                "nome": "Santana do Ipanema"
            },
            {
                "codigo_ibge": 2708105,
                "nome": "Santana do Mundaú"
            },
            {
                "codigo_ibge": 2708204,
                "nome": "São Brás"
            },
            {
                "codigo_ibge": 2708303,
                "nome": "São José da Laje"
            },
            {
                "codigo_ibge": 2708402,
                "nome": "São José da Tapera"
            },
            {
                "codigo_ibge": 2708501,
                "nome": "São Luís do Quitunde"
            },
            {
                "codigo_ibge": 2708600,
                "nome": "São Miguel dos Campos"
            },
            {
                "codigo_ibge": 2708709,
                "nome": "São Miguel dos Milagres"
            },
            {
                "codigo_ibge": 2708808,
                "nome": "São Sebastião"
            },
            {
                "codigo_ibge": 2708907,
                "nome": "Satuba"
            },
            {
                "codigo_ibge": 2708956,
                "nome": "Senador Rui Palmeira"
            },
            {
                "codigo_ibge": 2709004,
                "nome": "Tanque d'Arca"
            },
            {
                "codigo_ibge": 2709103,
                "nome": "Taquarana"
            },
            {
                "codigo_ibge": 2709152,
                "nome": "Teotônio Vilela"
            },
            {
                "codigo_ibge": 2709202,
                "nome": "Traipu"
            },
            {
                "codigo_ibge": 2709301,
                "nome": "União dos Palmares"
            },
            {
                "codigo_ibge": 2709400,
                "nome": "Viçosa"
            }
        ]
    },
    "AM": {
        "nome": "Amazonas",
        "municipios": [
            {
                "codigo_ibge": 1300029,
                "nome": "Alvarães"
            },
            {
                "codigo_ibge": 1300060,
                "nome": "Amaturá"
            },
            {
                "codigo_ibge": 1300086,
                "nome": "Anamã"
            },
            {
                "codigo_ibge": 1300102,
                "nome": "Anori"
            },
            {
                "codigo_ibge": 1300144,
                "nome": "Apuí"
            },
            {
                "codigo_ibge": 1300201,
                "nome": "Atalaia do Norte"
            },
            {
                "codigo_ibge": 1300300,
                "nome": "Autazes"
            },
            {
                "codigo_ibge": 1300409,
                "nome": "Barcelos"
            },
            {
                "codigo_ibge": 1300508,
                "nome": "Barreirinha"
            },
            {
                "codigo_ibge": 1300607,
                "nome": "Benjamin Constant"
            },
            {
                "codigo_ibge": 1300631,
                "nome": "Beruri"
            },
            {
                "codigo_ibge": 1300680,
                "nome": "Boa Vista do Ramos"
            },
            {
                "codigo_ibge": 1300706,
                "nome": "Boca do Acre"
            },
            {
                "codigo_ibge": 1300805,
                "nome": "Borba"
            },
            {
                "codigo_ibge": 1300839,
                "nome": "Caapiranga"
            },
            {
                "codigo_ibge": 1300904,
                "nome": "Canutama"
            },
            {
                "codigo_ibge": 1301001,
                "nome": "Carauari"
            },
            {
                "codigo_ibge": 1301100,
                "nome": "Careiro"
            },
            {
                "codigo_ibge": 1301159,
                "nome": "Careiro da Várzea"
            },
            {
                "codigo_ibge": 1301209,
                "nome": "Coari"
            },
            {
                "codigo_ibge": 1301308,
                "nome": "Codajás"
            },
            {
                "codigo_ibge": 1301407,
                "nome": "Eirunepé"
            },
            {
                "codigo_ibge": 1301506,
                "nome": "Envira"
            },
            {
                "codigo_ibge": 1301605,
                "nome": "Fonte Boa"
            },
            {
                "codigo_ibge": 1301654,
                "nome": "Guajará"
            },
            {
                "codigo_ibge": 1301704,
                "nome": "Humaitá"
            },
            {
                "codigo_ibge": 1301803,
                "nome": "Ipixuna"
            },
            {
                "codigo_ibge": 1301852,
                "nome": "Iranduba"
            },
            {
                "codigo_ibge": 1301902,
                "nome": "Itacoatiara"
            },
            {
                "codigo_ibge": 1301951,
                "nome": "Itamarati"
            },
            {
                "codigo_ibge": 1302009,
                "nome": "Itapiranga"
            },
            {
                "codigo_ibge": 1302108,
                "nome": "Japurá"
            },
            {
                "codigo_ibge": 1302207,
                "nome": "Juruá"
            },
            {
                "codigo_ibge": 1302306,
                "nome": "Jutaí"
            },
            {
                "codigo_ibge": 1302405,
                "nome": "Lábrea"
            },
            {
                "codigo_ibge": 1302504,
                "nome": "Manacapuru"
            },
            {
                "codigo_ibge": 1302553,
                "nome": "Manaquiri"
            },
            {
                "codigo_ibge": 1302603,
                "nome": "Manaus"
            },
            {
                "codigo_ibge": 1302702,
                "nome": "Manicoré"
            },
            {
                "codigo_ibge": 1302801,
                "nome": "Maraã"
            },
            {
                "codigo_ibge": 1302900,
                "nome": "Maués"
            },
            {
                "codigo_ibge": 1303007,
                "nome": "Nhamundá"
            },
            {
                "codigo_ibge": 1303106,
                "nome": "Nova Olinda do Norte"
            },
            {
                "codigo_ibge": 1303205,
                "nome": "Novo Airão"
            },
            {
                "codigo_ibge": 1303304,
                "nome": "Novo Aripuanã"
            },
            {
                "codigo_ibge": 1303403,
                "nome": "Parintins"
            },
            {
                "codigo_ibge": 1303502,
                "nome": "Pauini"
            },
            {
                "codigo_ibge": 1303536,
                "nome": "Presidente Figueiredo"
            },
            {
                "codigo_ibge": 1303569,
                "nome": "Rio Preto da Eva"
            },
            {
                "codigo_ibge": 1303601,
                "nome": "Santa Isabel do Rio Negro"
            },
            {
                "codigo_ibge": 1303700,
                "nome": "Santo Antônio do Içá"
            },
            {
                "codigo_ibge": 1303809,
                "nome": "São Gabriel da Cachoeira"
            },
            {
                "codigo_ibge": 1303908,
                "nome": "São Paulo de Olivença"
            },
            {
                "codigo_ibge": 1303957,
                "nome": "São Sebastião do Uatumã"
            },
            {
                "codigo_ibge": 1304005,
                "nome": "Silves"
            },
            {
                "codigo_ibge": 1304062,
                "nome": "Tabatinga"
            },
            {
                "codigo_ibge": 1304104,
                "nome": "Tapauá"
            },
            {
                "codigo_ibge": 1304203,
                "nome": "Tefé"
            },
            {
                "codigo_ibge": 1304237,
                "nome": "Tonantins"
            },
            {
                "codigo_ibge": 1304260,
                "nome": "Uarini"
            },
            {
                "codigo_ibge": 1304302,
                "nome": "Urucará"
            },
            {
                "codigo_ibge": 1304401,
                "nome": "Urucurituba"
            }
        ]
    },
    "AP": {
        "nome": "Amapá",
        "municipios": [
            {
                "codigo_ibge": 1600105,
                "nome": "Amapá"
            },
            {
                "codigo_ibge": 1600204,
                "nome": "Calçoene"
            },
            {
                "codigo_ibge": 1600212,
                "nome": "Cutias"
            },
            {
                "codigo_ibge": 1600238,
                "nome": "Ferreira Gomes"
            },
            {
                "codigo_ibge": 1600253,
                "nome": "Itaubal"
            },
            {
                "codigo_ibge": 1600279,
                "nome": "Laranjal do Jari"
            },
            {
                "codigo_ibge": 1600303,
                "nome": "Macapá"
            },
            {
                "codigo_ibge": 1600402,
                "nome": "Mazagão"
            },
            {
                "codigo_ibge": 1600501,
                "nome": "Oiapoque"
            },
            {
                "codigo_ibge": 1600154,
                "nome": "Pedra Branca do Amapari"
            },
            {
                "codigo_ibge": 1600535,
                "nome": "Porto Grande"
            },
            {
                "codigo_ibge": 1600550,
                "nome": "Pracuúba"
            },
            {
                "codigo_ibge": 1600600,
                "nome": "Santana"
            },
            {
                "codigo_ibge": 1600055,
                "nome": "Serra do Navio"
            },
            {
                "codigo_ibge": 1600709,
                "nome": "Tartarugalzinho"
            },
            {
                "codigo_ibge": 1600808,
                "nome": "Vitória do Jari"
            }
        ]
    },
    "BA": {
        "nome": "Bahia",
        "municipios": [
            {
                "codigo_ibge": 2900108,
                "nome": "Abaíra"
            },
            {
                "codigo_ibge": 2900207,
                "nome": "Abaré"
            },
            {
                "codigo_ibge": 2900306,
                "nome": "Acajutiba"
            },
            {
                "codigo_ibge": 2900355,
                "nome": "Adustina"
            },
            {
                "codigo_ibge": 2900405,
                "nome": "Água Fria"
            },
            {
                "codigo_ibge": 2900603,
                "nome": "Aiquara"
            },
            {
                "codigo_ibge": 2900702,
                "nome": "Alagoinhas"
            },
            {
                "codigo_ibge": 2900801,
                "nome": "Alcobaça"
            },
            {
                "codigo_ibge": 2900900,
                "nome": "Almadina"
            },
            {
                "codigo_ibge": 2901007,
                "nome": "Amargosa"
            },
            {
                "codigo_ibge": 2901106,
                "nome": "Amélia Rodrigues"
            },
            {
                "codigo_ibge": 2901155,
                "nome": "América Dourada"
            },
            {
                "codigo_ibge": 2901205,
                "nome": "Anagé"
            },
            {
                "codigo_ibge": 2901304,
                "nome": "Andaraí"
            },
            {
                "codigo_ibge": 2901353,
                "nome": "Andorinha"
            },
            {
                "codigo_ibge": 2901403,
                "nome": "Angical"
            },
            {
                "codigo_ibge": 2901502,
                "nome": "Anguera"
            },
            {
                "codigo_ibge": 2901601,
                "nome": "Antas"
            },
            {
                "codigo_ibge": 2901700,
                "nome": "Antônio Cardoso"
            },
            {
                "codigo_ibge": 2901809,
                "nome": "Antônio Gonçalves"
            },
            {
                "codigo_ibge": 2901908,
                "nome": "Aporá"
            },
            {
                "codigo_ibge": 2901957,
                "nome": "Apuarema"
            },
            {
                "codigo_ibge": 2902054,
                "nome": "Araças"
            },
            {
                "codigo_ibge": 2902005,
                "nome": "Aracatu"
            },
            {
                "codigo_ibge": 2902104,
                "nome": "Araci"
            },
            {
                "codigo_ibge": 2902203,
                "nome": "Aramari"
            },
            {
                "codigo_ibge": 2902252,
                "nome": "Arataca"
            },
            {
                "codigo_ibge": 2902302,
                "nome": "Aratuípe"
            },
            {
                "codigo_ibge": 2902401,
                "nome": "Aurelino Leal"
            },
            {
                "codigo_ibge": 2902500,
                "nome": "Baianópolis"
            },
            {
                "codigo_ibge": 2902609,
                "nome": "Baixa Grande"
            },
            {
                "codigo_ibge": 2902658,
                "nome": "Banzaê"
            },
            {
                "codigo_ibge": 2902708,
                "nome": "Barra"
            },
            {
                "codigo_ibge": 2902807,
                "nome": "Barra da Estiva"
            },
            {
                "codigo_ibge": 2902906,
                "nome": "Barra do Choça"
            },
            {
                "codigo_ibge": 2903003,
                "nome": "Barra do Mendes"
            },
            {
                "codigo_ibge": 2903102,
                "nome": "Barra do Rocha"
            },
            {
                "codigo_ibge": 2903201,
                "nome": "Barreiras"
            },
            {
                "codigo_ibge": 2903235,
                "nome": "Barro Alto"
            },
            {
                "codigo_ibge": 2903300,
                "nome": "Barro Preto"
            },
            {
                "codigo_ibge": 2903276,
                "nome": "Barrocas"
            },
            {
                "codigo_ibge": 2903409,
                "nome": "Belmonte"
            },
            {
                "codigo_ibge": 2903508,
                "nome": "Belo Campo"
            },
            {
                "codigo_ibge": 2903607,
                "nome": "Biritinga"
            },
            {
                "codigo_ibge": 2903706,
                "nome": "Boa Nova"
            },
            {
                "codigo_ibge": 2903805,
                "nome": "Boa Vista do Tupim"
            },
            {
                "codigo_ibge": 2903904,
                "nome": "Bom Jesus da Lapa"
            },
            {
                "codigo_ibge": 2903953,
                "nome": "Bom Jesus da Serra"
            },
            {
                "codigo_ibge": 2904001,
                "nome": "Boninal"
            },
            {
                "codigo_ibge": 2904050,
                "nome": "Bonito"
            },
            {
                "codigo_ibge": 2904100,
                "nome": "Boquira"
            },
            {
                "codigo_ibge": 2904209,
                "nome": "Botuporã"
            },
            {
                "codigo_ibge": 2904308,
                "nome": "Brejões"
            },
            {
                "codigo_ibge": 2904407,
                "nome": "Brejolândia"
            },
            {
                "codigo_ibge": 2904506,
                "nome": "Brotas de Macaúbas"
            },
            {
                "codigo_ibge": 2904605,
                "nome": "Brumado"
            },
            {
                "codigo_ibge": 2904704,
                "nome": "Buerarema"
            },
            {
                "codigo_ibge": 2904753,
                "nome": "Buritirama"
            },
            {
                "codigo_ibge": 2904803,
                "nome": "Caatiba"
            },
            {
                "codigo_ibge": 2904852,
                "nome": "Cabaceiras do Paraguaçu"
            },
            {
                "codigo_ibge": 2904902,
                "nome": "Cachoeira"
            },
            {
                "codigo_ibge": 2905008,
                "nome": "Caculé"
            },
            {
                "codigo_ibge": 2905107,
                "nome": "Caém"
            },
            {
                "codigo_ibge": 2905156,
                "nome": "Caetanos"
            },
            {
                "codigo_ibge": 2905206,
                "nome": "Caetité"
            },
            {
                "codigo_ibge": 2905305,
                "nome": "Cafarnaum"
            },
            {
                "codigo_ibge": 2905404,
                "nome": "Cairu"
            },
            {
                "codigo_ibge": 2905503,
                "nome": "Caldeirão Grande"
            },
            {
                "codigo_ibge": 2905602,
                "nome": "Camacan"
            },
            {
                "codigo_ibge": 2905701,
                "nome": "Camaçari"
            },
            {
                "codigo_ibge": 2905800,
                "nome": "Camamu"
            },
            {
                "codigo_ibge": 2905909,
                "nome": "Campo Alegre de Lourdes"
            },
            {
                "codigo_ibge": 2906006,
                "nome": "Campo Formoso"
            },
            {
                "codigo_ibge": 2906105,
                "nome": "Canápolis"
            },
            {
                "codigo_ibge": 2906204,
                "nome": "Canarana"
            },
            {
                "codigo_ibge": 2906303,
                "nome": "Canavieiras"
            },
            {
                "codigo_ibge": 2906402,
                "nome": "Candeal"
            },
            {
                "codigo_ibge": 2906501,
                "nome": "Candeias"
            },
            {
                "codigo_ibge": 2906600,
                "nome": "Candiba"
            },
            {
                "codigo_ibge": 2906709,
                "nome": "Cândido Sales"
            },
            {
                "codigo_ibge": 2906808,
                "nome": "Cansanção"
            },
            {
                "codigo_ibge": 2906824,
                "nome": "Canudos"
            },
            {
                "codigo_ibge": 2906857,
                "nome": "Capela do Alto Alegre"
            },
            {
                "codigo_ibge": 2906873,
                "nome": "Capim Grosso"
            },
            {
                "codigo_ibge": 2906899,
                "nome": "Caraíbas"
            },
            {
                "codigo_ibge": 2906907,
                "nome": "Caravelas"
            },
            {
                "codigo_ibge": 2907004,
                "nome": "Cardeal da Silva"
            },
            {
                "codigo_ibge": 2907103,
                "nome": "Carinhanha"
            },
            {
                "codigo_ibge": 2907202,
                "nome": "Casa Nova"
            },
            {
                "codigo_ibge": 2907301,
                "nome": "Castro Alves"
            },
            {
                "codigo_ibge": 2907400,
                "nome": "Catolândia"
            },
            {
                "codigo_ibge": 2907509,
                "nome": "Catu"
            },
            {
                "codigo_ibge": 2907558,
                "nome": "Caturama"
            },
            {
                "codigo_ibge": 2907608,
                "nome": "Central"
            },
            {
                "codigo_ibge": 2907707,
                "nome": "Chorrochó"
            },
            {
                "codigo_ibge": 2907806,
                "nome": "Cícero Dantas"
            },
            {
                "codigo_ibge": 2907905,
                "nome": "Cipó"
            },
            {
                "codigo_ibge": 2908002,
                "nome": "Coaraci"
            },
            {
                "codigo_ibge": 2908101,
                "nome": "Cocos"
            },
            {
                "codigo_ibge": 2908200,
                "nome": "Conceição da Feira"
            },
            {
                "codigo_ibge": 2908309,
                "nome": "Conceição do Almeida"
            },
            {
                "codigo_ibge": 2908408,
                "nome": "Conceição do Coité"
            },
            {
                "codigo_ibge": 2908507,
                "nome": "Conceição do Jacuípe"
            },
            {
                "codigo_ibge": 2908606,
                "nome": "Conde"
            },
            {
                "codigo_ibge": 2908705,
                "nome": "Condeúba"
            },
            {
                "codigo_ibge": 2908804,
                "nome": "Contendas do Sincorá"
            },
            {
                "codigo_ibge": 2908903,
                "nome": "Coração de Maria"
            },
            {
                "codigo_ibge": 2909000,
                "nome": "Cordeiros"
            },
            {
                "codigo_ibge": 2909109,
                "nome": "Coribe"
            },
            {
                "codigo_ibge": 2909208,
                "nome": "Coronel João Sá"
            },
            {
                "codigo_ibge": 2909307,
                "nome": "Correntina"
            },
            {
                "codigo_ibge": 2909406,
                "nome": "Cotegipe"
            },
            {
                "codigo_ibge": 2909505,
                "nome": "Cravolândia"
            },
            {
                "codigo_ibge": 2909604,
                "nome": "Crisópolis"
            },
            {
                "codigo_ibge": 2909703,
                "nome": "Cristópolis"
            },
            {
                "codigo_ibge": 2909802,
                "nome": "Cruz das Almas"
            },
            {
                "codigo_ibge": 2909901,
                "nome": "Curaçá"
            },
            {
                "codigo_ibge": 2910008,
                "nome": "Dário Meira"
            },
            {
                "codigo_ibge": 2910057,
                "nome": "Dias d'Ávila"
            },
            {
                "codigo_ibge": 2910107,
                "nome": "Dom Basílio"
            },
            {
                "codigo_ibge": 2910206,
                "nome": "Dom Macedo Costa"
            },
            {
                "codigo_ibge": 2910305,
                "nome": "Elísio Medrado"
            },
            {
                "codigo_ibge": 2910404,
                "nome": "Encruzilhada"
            },
            {
                "codigo_ibge": 2910503,
                "nome": "Entre Rios"
            },
            {
                "codigo_ibge": 2900504,
                "nome": "Érico Cardoso"
            },
            {
                "codigo_ibge": 2910602,
                "nome": "Esplanada"
            },
            {
                "codigo_ibge": 2910701,
                "nome": "Euclides da Cunha"
            },
            {
                "codigo_ibge": 2910727,
                "nome": "Eunápolis"
            },
            {
                "codigo_ibge": 2910750,
                "nome": "Fátima"
            },
            {
                "codigo_ibge": 2910776,
                "nome": "Feira da Mata"
            },
            {
                "codigo_ibge": 2910800,
                "nome": "Feira de Santana"
            },
            {
                "codigo_ibge": 2910859,
                "nome": "Filadélfia"
            },
            {
                "codigo_ibge": 2910909,
                "nome": "Firmino Alves"
            },
            {
                "codigo_ibge": 2911006,
                "nome": "Floresta Azul"
            },
            {
                "codigo_ibge": 2911105,
                "nome": "Formosa do Rio Preto"
            },
            {
                "codigo_ibge": 2911204,
                "nome": "Gandu"
            },
            {
                "codigo_ibge": 2911253,
                "nome": "Gavião"
            },
            {
                "codigo_ibge": 2911303,
                "nome": "Gentio do Ouro"
            },
            {
                "codigo_ibge": 2911402,
                "nome": "Glória"
            },
            {
                "codigo_ibge": 2911501,
                "nome": "Gongogi"
            },
            {
                "codigo_ibge": 2911600,
                "nome": "Governador Mangabeira"
            },
            {
                "codigo_ibge": 2911659,
                "nome": "Guajeru"
            },
            {
                "codigo_ibge": 2911709,
                "nome": "Guanambi"
            },
            {
                "codigo_ibge": 2911808,
                "nome": "Guaratinga"
            },
            {
                "codigo_ibge": 2911857,
                "nome": "Heliópolis"
            },
            {
                "codigo_ibge": 2911907,
                "nome": "Iaçu"
            },
            {
                "codigo_ibge": 2912004,
                "nome": "Ibiassucê"
            },
            {
                "codigo_ibge": 2912103,
                "nome": "Ibicaraí"
            },
            {
                "codigo_ibge": 2912202,
                "nome": "Ibicoara"
            },
            {
                "codigo_ibge": 2912301,
                "nome": "Ibicuí"
            },
            {
                "codigo_ibge": 2912400,
                "nome": "Ibipeba"
            },
            {
                "codigo_ibge": 2912509,
                "nome": "Ibipitanga"
            },
            {
                "codigo_ibge": 2912608,
                "nome": "Ibiquera"
            },
            {
                "codigo_ibge": 2912707,
                "nome": "Ibirapitanga"
            },
            {
                "codigo_ibge": 2912806,
                "nome": "Ibirapuã"
            },
            {
                "codigo_ibge": 2912905,
                "nome": "Ibirataia"
            },
            {
                "codigo_ibge": 2913002,
                "nome": "Ibitiara"
            },
            {
                "codigo_ibge": 2913101,
                "nome": "Ibititá"
            },
            {
                "codigo_ibge": 2913200,
                "nome": "Ibotirama"
            },
            {
                "codigo_ibge": 2913309,
                "nome": "Ichu"
            },
            {
                "codigo_ibge": 2913408,
                "nome": "Igaporã"
            },
            {
                "codigo_ibge": 2913457,
                "nome": "Igrapiúna"
            },
            {
                "codigo_ibge": 2913507,
                "nome": "Iguaí"
            },
            {
                "codigo_ibge": 2913606,
                "nome": "Ilhéus"
            },
            {
                "codigo_ibge": 2913705,
                "nome": "Inhambupe"
            },
            {
                "codigo_ibge": 2913804,
                "nome": "Ipecaetá"
            },
            {
                "codigo_ibge": 2913903,
                "nome": "Ipiaú"
            },
            {
                "codigo_ibge": 2914000,
                "nome": "Ipirá"
            },
            {
                "codigo_ibge": 2914109,
                "nome": "Ipupiara"
            },
            {
                "codigo_ibge": 2914208,
                "nome": "Irajuba"
            },
            {
                "codigo_ibge": 2914307,
                "nome": "Iramaia"
            },
            {
                "codigo_ibge": 2914406,
                "nome": "Iraquara"
            },
            {
                "codigo_ibge": 2914505,
                "nome": "Irará"
            },
            {
                "codigo_ibge": 2914604,
                "nome": "Irecê"
            },
            {
                "codigo_ibge": 2914653,
                "nome": "Itabela"
            },
            {
                "codigo_ibge": 2914703,
                "nome": "Itaberaba"
            },
            {
                "codigo_ibge": 2914802,
                "nome": "Itabuna"
            },
            {
                "codigo_ibge": 2914901,
                "nome": "Itacaré"
            },
            {
                "codigo_ibge": 2915007,
                "nome": "Itaeté"
            },
            {
                "codigo_ibge": 2915106,
                "nome": "Itagi"
            },
            {
                "codigo_ibge": 2915205,
                "nome": "Itagibá"
            },
            {
                "codigo_ibge": 2915304,
                "nome": "Itagimirim"
            },
            {
                "codigo_ibge": 2915353,
                "nome": "Itaguaçu da Bahia"
            },
            {
                "codigo_ibge": 2915403,
                "nome": "Itaju do Colônia"
            },
            {
                "codigo_ibge": 2915502,
                "nome": "Itajuípe"
            },
            {
                "codigo_ibge": 2915601,
                "nome": "Itamaraju"
            },
            {
                "codigo_ibge": 2915700,
                "nome": "Itamari"
            },
            {
                "codigo_ibge": 2915809,
                "nome": "Itambé"
            },
            {
                "codigo_ibge": 2915908,
                "nome": "Itanagra"
            },
            {
                "codigo_ibge": 2916005,
                "nome": "Itanhém"
            },
            {
                "codigo_ibge": 2916104,
                "nome": "Itaparica"
            },
            {
                "codigo_ibge": 2916203,
                "nome": "Itapé"
            },
            {
                "codigo_ibge": 2916302,
                "nome": "Itapebi"
            },
            {
                "codigo_ibge": 2916401,
                "nome": "Itapetinga"
            },
            {
                "codigo_ibge": 2916500,
                "nome": "Itapicuru"
            },
            {
                "codigo_ibge": 2916609,
                "nome": "Itapitanga"
            },
            {
                "codigo_ibge": 2916708,
                "nome": "Itaquara"
            },
            {
                "codigo_ibge": 2916807,
                "nome": "Itarantim"
            },
            {
                "codigo_ibge": 2916856,
                "nome": "Itatim"
            },
            {
                "codigo_ibge": 2916906,
                "nome": "Itiruçu"
            },
            {
                "codigo_ibge": 2917003,
                "nome": "Itiúba"
            },
            {
                "codigo_ibge": 2917102,
                "nome": "Itororó"
            },
            {
                "codigo_ibge": 2917201,
                "nome": "Ituaçu"
            },
            {
                "codigo_ibge": 2917300,
                "nome": "Ituberá"
            },
            {
                "codigo_ibge": 2917334,
                "nome": "Iuiú"
            },
            {
                "codigo_ibge": 2917359,
                "nome": "Jaborandi"
            },
            {
                "codigo_ibge": 2917409,
                "nome": "Jacaraci"
            },
            {
                "codigo_ibge": 2917508,
                "nome": "Jacobina"
            },
            {
                "codigo_ibge": 2917607,
                "nome": "Jaguaquara"
            },
            {
                "codigo_ibge": 2917706,
                "nome": "Jaguarari"
            },
            {
                "codigo_ibge": 2917805,
                "nome": "Jaguaripe"
            },
            {
                "codigo_ibge": 2917904,
                "nome": "Jandaíra"
            },
            {
                "codigo_ibge": 2918001,
                "nome": "Jequié"
            },
            {
                "codigo_ibge": 2918100,
                "nome": "Jeremoabo"
            },
            {
                "codigo_ibge": 2918209,
                "nome": "Jiquiriçá"
            },
            {
                "codigo_ibge": 2918308,
                "nome": "Jitaúna"
            },
            {
                "codigo_ibge": 2918357,
                "nome": "João Dourado"
            },
            {
                "codigo_ibge": 2918407,
                "nome": "Juazeiro"
            },
            {
                "codigo_ibge": 2918456,
                "nome": "Jucuruçu"
            },
            {
                "codigo_ibge": 2918506,
                "nome": "Jussara"
            },
            {
                "codigo_ibge": 2918555,
                "nome": "Jussari"
            },
            {
                "codigo_ibge": 2918605,
                "nome": "Jussiape"
            },
            {
                "codigo_ibge": 2918704,
                "nome": "Lafaiete Coutinho"
            },
            {
                "codigo_ibge": 2918753,
                "nome": "Lagoa Real"
            },
            {
                "codigo_ibge": 2918803,
                "nome": "Laje"
            },
            {
                "codigo_ibge": 2918902,
                "nome": "Lajedão"
            },
            {
                "codigo_ibge": 2919009,
                "nome": "Lajedinho"
            },
            {
                "codigo_ibge": 2919058,
                "nome": "Lajedo do Tabocal"
            },
            {
                "codigo_ibge": 2919108,
                "nome": "Lamarão"
            },
            {
                "codigo_ibge": 2919157,
                "nome": "Lapão"
            },
            {
                "codigo_ibge": 2919207,
                "nome": "Lauro de Freitas"
            },
            {
                "codigo_ibge": 2919306,
                "nome": "Lençóis"
            },
            {
                "codigo_ibge": 2919405,
                "nome": "Licínio de Almeida"
            },
            {
                "codigo_ibge": 2919504,
                "nome": "Livramento de Nossa Senhora"
            },
            {
                "codigo_ibge": 2919553,
                "nome": "Luís Eduardo Magalhães"
            },
            {
                "codigo_ibge": 2919603,
                "nome": "Macajuba"
            },
            {
                "codigo_ibge": 2919702,
                "nome": "Macarani"
            },
            {
                "codigo_ibge": 2919801,
                "nome": "Macaúbas"
            },
            {
                "codigo_ibge": 2919900,
                "nome": "Macururé"
            },
            {
                "codigo_ibge": 2919926,
                "nome": "Madre de Deus"
            },
            {
                "codigo_ibge": 2919959,
                "nome": "Maetinga"
            },
            {
                "codigo_ibge": 2920007,
                "nome": "Maiquinique"
            },
            {
                "codigo_ibge": 2920106,
                "nome": "Mairi"
            },
            {
                "codigo_ibge": 2920205,
                "nome": "Malhada"
            },
            {
                "codigo_ibge": 2920304,
                "nome": "Malhada de Pedras"
            },
            {
                "codigo_ibge": 2920403,
                "nome": "Manoel Vitorino"
            },
            {
                "codigo_ibge": 2920452,
                "nome": "Mansidão"
            },
            {
                "codigo_ibge": 2920502,
                "nome": "Maracás"
            },
            {
                "codigo_ibge": 2920601,
                "nome": "Maragogipe"
            },
            {
                "codigo_ibge": 2920700,
                "nome": "Maraú"
            },
            {
                "codigo_ibge": 2920809,
                "nome": "Marcionílio Souza"
            },
            {
                "codigo_ibge": 2920908,
                "nome": "Mascote"
            },
            {
                "codigo_ibge": 2921005,
                "nome": "Mata de São João"
            },
            {
                "codigo_ibge": 2921054,
                "nome": "Matina"
            },
            {
                "codigo_ibge": 2921104,
                "nome": "Medeiros Neto"
            },
            {
                "codigo_ibge": 2921203,
                "nome": "Miguel Calmon"
            },
            {
                "codigo_ibge": 2921302,
                "nome": "Milagres"
            },
            {
                "codigo_ibge": 2921401,
                "nome": "Mirangaba"
            },
            {
                "codigo_ibge": 2921450,
                "nome": "Mirante"
            },
            {
                "codigo_ibge": 2921500,
                "nome": "Monte Santo"
            },
            {
                "codigo_ibge": 2921609,
                "nome": "Morpará"
            },
            {
                "codigo_ibge": 2921708,
                "nome": "Morro do Chapéu"
            },
            {
                "codigo_ibge": 2921807,
                "nome": "Mortugaba"
            },
            {
                "codigo_ibge": 2921906,
                "nome": "Mucugê"
            },
            {
                "codigo_ibge": 2922003,
                "nome": "Mucuri"
            },
            {
                "codigo_ibge": 2922052,
                "nome": "Mulungu do Morro"
            },
            {
                "codigo_ibge": 2922102,
                "nome": "Mundo Novo"
            },
            {
                "codigo_ibge": 2922201,
                "nome": "Muniz Ferreira"
            },
            {
                "codigo_ibge": 2922250,
                "nome": "Muquém de São Francisco"
            },
            {
                "codigo_ibge": 2922300,
                "nome": "Muritiba"
            },
            {
                "codigo_ibge": 2922409,
                "nome": "Mutuípe"
            },
            {
                "codigo_ibge": 2922508,
                "nome": "Nazaré"
            },
            {
                "codigo_ibge": 2922607,
                "nome": "Nilo Peçanha"
            },
            {
                "codigo_ibge": 2922656,
                "nome": "Nordestina"
            },
            {
                "codigo_ibge": 2922706,
                "nome": "Nova Canaã"
            },
            {
                "codigo_ibge": 2922730,
                "nome": "Nova Fátima"
            },
            {
                "codigo_ibge": 2922755,
                "nome": "Nova Ibiá"
            },
            {
                "codigo_ibge": 2922805,
                "nome": "Nova Itarana"
            },
            {
                "codigo_ibge": 2922854,
                "nome": "Nova Redenção"
            },
            {
                "codigo_ibge": 2922904,
                "nome": "Nova Soure"
            },
            {
                "codigo_ibge": 2923001,
                "nome": "Nova Viçosa"
            },
            {
                "codigo_ibge": 2923035,
                "nome": "Novo Horizonte"
            },
            {
                "codigo_ibge": 2923050,
                "nome": "Novo Triunfo"
            },
            {
                "codigo_ibge": 2923100,
                "nome": "Olindina"
            },
            {
                "codigo_ibge": 2923209,
                "nome": "Oliveira dos Brejinhos"
            },
            {
                "codigo_ibge": 2923308,
                "nome": "Ouriçangas"
            },
            {
                "codigo_ibge": 2923357,
                "nome": "Ourolândia"
            },
            {
                "codigo_ibge": 2923407,
                "nome": "Palmas de Monte Alto"
            },
            {
                "codigo_ibge": 2923506,
                "nome": "Palmeiras"
            },
            {
                "codigo_ibge": 2923605,
                "nome": "Paramirim"
            },
            {
                "codigo_ibge": 2923704,
                "nome": "Paratinga"
            },
            {
                "codigo_ibge": 2923803,
                "nome": "Paripiranga"
            },
            {
                "codigo_ibge": 2923902,
                "nome": "Pau Brasil"
            },
            {
                "codigo_ibge": 2924009,
                "nome": "Paulo Afonso"
            },
            {
                "codigo_ibge": 2924058,
                "nome": "Pé de Serra"
            },
            {
                "codigo_ibge": 2924108,
                "nome": "Pedrão"
            },
            {
                "codigo_ibge": 2924207,
                "nome": "Pedro Alexandre"
            },
            {
                "codigo_ibge": 2924306,
                "nome": "Piatã"
            },
            {
                "codigo_ibge": 2924405,
                "nome": "Pilão Arcado"
            },
            {
                "codigo_ibge": 2924504,
                "nome": "Pindaí"
            },
            {
                "codigo_ibge": 2924603,
                "nome": "Pindobaçu"
            },
            {
                "codigo_ibge": 2924652,
                "nome": "Pintadas"
            },
            {
                "codigo_ibge": 2924678,
                "nome": "Piraí do Norte"
            },
            {
                "codigo_ibge": 2924702,
                "nome": "Piripá"
            },
            {
                "codigo_ibge": 2924801,
                "nome": "Piritiba"
            },
            {
                "codigo_ibge": 2924900,
                "nome": "Planaltino"
            },
            {
                "codigo_ibge": 2925006,
                "nome": "Planalto"
            },
            {
                "codigo_ibge": 2925105,
                "nome": "Poções"
            },
            {
                "codigo_ibge": 2925204,
                "nome": "Pojuca"
            },
            {
                "codigo_ibge": 2925253,
                "nome": "Ponto Novo"
            },
            {
                "codigo_ibge": 2925303,
                "nome": "Porto Seguro"
            },
            {
                "codigo_ibge": 2925402,
                "nome": "Potiraguá"
            },
            {
                "codigo_ibge": 2925501,
                "nome": "Prado"
            },
            {
                "codigo_ibge": 2925600,
                "nome": "Presidente Dutra"
            },
            {
                "codigo_ibge": 2925709,
                "nome": "Presidente Jânio Quadros"
            },
            {
                "codigo_ibge": 2925758,
                "nome": "Presidente Tancredo Neves"
            },
            {
                "codigo_ibge": 2925808,
                "nome": "Queimadas"
            },
            {
                "codigo_ibge": 2925907,
                "nome": "Quijingue"
            },
            {
                "codigo_ibge": 2925931,
                "nome": "Quixabeira"
            },
            {
                "codigo_ibge": 2925956,
                "nome": "Rafael Jambeiro"
            },
            {
                "codigo_ibge": 2926004,
                "nome": "Remanso"
            },
            {
                "codigo_ibge": 2926103,
                "nome": "Retirolândia"
            },
            {
                "codigo_ibge": 2926202,
                "nome": "Riachão das Neves"
            },
            {
                "codigo_ibge": 2926301,
                "nome": "Riachão do Jacuípe"
            },
            {
                "codigo_ibge": 2926400,
                "nome": "Riacho de Santana"
            },
            {
                "codigo_ibge": 2926509,
                "nome": "Ribeira do Amparo"
            },
            {
                "codigo_ibge": 2926608,
                "nome": "Ribeira do Pombal"
            },
            {
                "codigo_ibge": 2926657,
                "nome": "Ribeirão do Largo"
            },
            {
                "codigo_ibge": 2926707,
                "nome": "Rio de Contas"
            },
            {
                "codigo_ibge": 2926806,
                "nome": "Rio do Antônio"
            },
            {
                "codigo_ibge": 2926905,
                "nome": "Rio do Pires"
            },
            {
                "codigo_ibge": 2927002,
                "nome": "Rio Real"
            },
            {
                "codigo_ibge": 2927101,
                "nome": "Rodelas"
            },
            {
                "codigo_ibge": 2927200,
                "nome": "Ruy Barbosa"
            },
            {
                "codigo_ibge": 2927309,
                "nome": "Salinas da Margarida"
            },
            {
                "codigo_ibge": 2927408,
                "nome": "Salvador"
            },
            {
                "codigo_ibge": 2927507,
                "nome": "Santa Bárbara"
            },
            {
                "codigo_ibge": 2927606,
                "nome": "Santa Brígida"
            },
            {
                "codigo_ibge": 2927705,
                "nome": "Santa Cruz Cabrália"
            },
            {
                "codigo_ibge": 2927804,
                "nome": "Santa Cruz da Vitória"
            },
            {
                "codigo_ibge": 2927903,
                "nome": "Santa Inês"
            },
            {
                "codigo_ibge": 2928059,
                "nome": "Santa Luzia"
            },
            {
                "codigo_ibge": 2928109,
                "nome": "Santa Maria da Vitória"
            },
            {
                "codigo_ibge": 2928406,
                "nome": "Santa Rita de Cássia"
            },
            {
                "codigo_ibge": 2928505,
                "nome": "Santa Teresinha"
            },
            {
                "codigo_ibge": 2928000,
                "nome": "Santaluz"
            },
            {
                "codigo_ibge": 2928208,
                "nome": "Santana"
            },
            {
                "codigo_ibge": 2928307,
                "nome": "Santanópolis"
            },
            {
                "codigo_ibge": 2928604,
                "nome": "Santo Amaro"
            },
            {
                "codigo_ibge": 2928703,
                "nome": "Santo Antônio de Jesus"
            },
            {
                "codigo_ibge": 2928802,
                "nome": "Santo Estêvão"
            },
            {
                "codigo_ibge": 2928901,
                "nome": "São Desidério"
            },
            {
                "codigo_ibge": 2928950,
                "nome": "São Domingos"
            },
            {
                "codigo_ibge": 2929107,
                "nome": "São Felipe"
            },
            {
                "codigo_ibge": 2929008,
                "nome": "São Félix"
            },
            {
                "codigo_ibge": 2929057,
                "nome": "São Félix do Coribe"
            },
            {
                "codigo_ibge": 2929206,
                "nome": "São Francisco do Conde"
            },
            {
                "codigo_ibge": 2929255,
                "nome": "São Gabriel"
            },
            {
                "codigo_ibge": 2929305,
                "nome": "São Gonçalo dos Campos"
            },
            {
                "codigo_ibge": 2929354,
                "nome": "São José da Vitória"
            },
            {
                "codigo_ibge": 2929370,
                "nome": "São José do Jacuípe"
            },
            {
                "codigo_ibge": 2929404,
                "nome": "São Miguel das Matas"
            },
            {
                "codigo_ibge": 2929503,
                "nome": "São Sebastião do Passé"
            },
            {
                "codigo_ibge": 2929602,
                "nome": "Sapeaçu"
            },
            {
                "codigo_ibge": 2929701,
                "nome": "Sátiro Dias"
            },
            {
                "codigo_ibge": 2929750,
                "nome": "Saubara"
            },
            {
                "codigo_ibge": 2929800,
                "nome": "Saúde"
            },
            {
                "codigo_ibge": 2929909,
                "nome": "Seabra"
            },
            {
                "codigo_ibge": 2930006,
                "nome": "Sebastião Laranjeiras"
            },
            {
                "codigo_ibge": 2930105,
                "nome": "Senhor do Bonfim"
            },
            {
                "codigo_ibge": 2930204,
                "nome": "Sento Sé"
            },
            {
                "codigo_ibge": 2930154,
                "nome": "Serra do Ramalho"
            },
            {
                "codigo_ibge": 2930303,
                "nome": "Serra Dourada"
            },
            {
                "codigo_ibge": 2930402,
                "nome": "Serra Preta"
            },
            {
                "codigo_ibge": 2930501,
                "nome": "Serrinha"
            },
            {
                "codigo_ibge": 2930600,
                "nome": "Serrolândia"
            },
            {
                "codigo_ibge": 2930709,
                "nome": "Simões Filho"
            },
            {
                "codigo_ibge": 2930758,
                "nome": "Sítio do Mato"
            },
            {
                "codigo_ibge": 2930766,
                "nome": "Sítio do Quinto"
            },
            {
                "codigo_ibge": 2930774,
                "nome": "Sobradinho"
            },
            {
                "codigo_ibge": 2930808,
                "nome": "Souto Soares"
            },
            {
                "codigo_ibge": 2930907,
                "nome": "Tabocas do Brejo Velho"
            },
            {
                "codigo_ibge": 2931004,
                "nome": "Tanhaçu"
            },
            {
                "codigo_ibge": 2931053,
                "nome": "Tanque Novo"
            },
            {
                "codigo_ibge": 2931103,
                "nome": "Tanquinho"
            },
            {
                "codigo_ibge": 2931202,
                "nome": "Taperoá"
            },
            {
                "codigo_ibge": 2931301,
                "nome": "Tapiramutá"
            },
            {
                "codigo_ibge": 2931350,
                "nome": "Teixeira de Freitas"
            },
            {
                "codigo_ibge": 2931400,
                "nome": "Teodoro Sampaio"
            },
            {
                "codigo_ibge": 2931509,
                "nome": "Teofilândia"
            },
            {
                "codigo_ibge": 2931608,
                "nome": "Teolândia"
            },
            {
                "codigo_ibge": 2931707,
                "nome": "Terra Nova"
            },
            {
                "codigo_ibge": 2931806,
                "nome": "Tremedal"
            },
            {
                "codigo_ibge": 2931905,
                "nome": "Tucano"
            },
            {
                "codigo_ibge": 2932002,
                "nome": "Uauá"
            },
            {
                "codigo_ibge": 2932101,
                "nome": "Ubaíra"
            },
            {
                "codigo_ibge": 2932200,
                "nome": "Ubaitaba"
            },
            {
                "codigo_ibge": 2932309,
                "nome": "Ubatã"
            },
            {
                "codigo_ibge": 2932408,
                "nome": "Uibaí"
            },
            {
                "codigo_ibge": 2932457,
                "nome": "Umburanas"
            },
            {
                "codigo_ibge": 2932507,
                "nome": "Una"
            },
            {
                "codigo_ibge": 2932606,
                "nome": "Urandi"
            },
            {
                "codigo_ibge": 2932705,
                "nome": "Uruçuca"
            },
            {
                "codigo_ibge": 2932804,
                "nome": "Utinga"
            },
            {
                "codigo_ibge": 2932903,
                "nome": "Valença"
            },
            {
                "codigo_ibge": 2933000,
                "nome": "Valente"
            },
            {
                "codigo_ibge": 2933059,
                "nome": "Várzea da Roça"
            },
            {
                "codigo_ibge": 2933109,
                "nome": "Várzea do Poço"
            },
            {
                "codigo_ibge": 2933158,
                "nome": "Várzea Nova"
            },
            {
                "codigo_ibge": 2933174,
                "nome": "Varzedo"
            },
            {
                "codigo_ibge": 2933208,
                "nome": "Vera Cruz"
            },
            {
                "codigo_ibge": 2933257,
                "nome": "Vereda"
            },
            {
                "codigo_ibge": 2933307,
                "nome": "Vitória da Conquista"
            },
            {
                "codigo_ibge": 2933406,
                "nome": "Wagner"
            },
            {
                "codigo_ibge": 2933455,
                "nome": "Wanderley"
            },
            {
                "codigo_ibge": 2933505,
                "nome": "Wenceslau Guimarães"
            },
            {
                "codigo_ibge": 2933604,
                "nome": "Xique-Xique"
            }
        ]
    },
    "CE": {
        "nome": "Ceará",
        "municipios": [
            {
                "codigo_ibge": 2300101,
                "nome": "Abaiara"
            },
            {
                "codigo_ibge": 2300150,
                "nome": "Acarape"
            },
            {
                "codigo_ibge": 2300200,
                "nome": "Acaraú"
            },
            {
                "codigo_ibge": 2300309,
                "nome": "Acopiara"
            },
            {
                "codigo_ibge": 2300408,
                "nome": "Aiuaba"
            },
            {
                "codigo_ibge": 2300507,
                "nome": "Alcântaras"
            },
            {
                "codigo_ibge": 2300606,
                "nome": "Altaneira"
            },
            {
                "codigo_ibge": 2300705,
                "nome": "Alto Santo"
            },
            {
                "codigo_ibge": 2300754,
                "nome": "Amontada"
            },
            {
                "codigo_ibge": 2300804,
                "nome": "Antonina do Norte"
            },
            {
                "codigo_ibge": 2300903,
                "nome": "Apuiarés"
            },
            {
                "codigo_ibge": 2301000,
                "nome": "Aquiraz"
            },
            {
                "codigo_ibge": 2301109,
                "nome": "Aracati"
            },
            {
                "codigo_ibge": 2301208,
                "nome": "Aracoiaba"
            },
            {
                "codigo_ibge": 2301257,
                "nome": "Ararendá"
            },
            {
                "codigo_ibge": 2301307,
                "nome": "Araripe"
            },
            {
                "codigo_ibge": 2301406,
                "nome": "Aratuba"
            },
            {
                "codigo_ibge": 2301505,
                "nome": "Arneiroz"
            },
            {
                "codigo_ibge": 2301604,
                "nome": "Assaré"
            },
            {
                "codigo_ibge": 2301703,
                "nome": "Aurora"
            },
            {
                "codigo_ibge": 2301802,
                "nome": "Baixio"
            },
            {
                "codigo_ibge": 2301851,
                "nome": "Banabuiú"
            },
            {
                "codigo_ibge": 2301901,
                "nome": "Barbalha"
            },
            {
                "codigo_ibge": 2301950,
                "nome": "Barreira"
            },
            {
                "codigo_ibge": 2302008,
                "nome": "Barro"
            },
            {
                "codigo_ibge": 2302057,
                "nome": "Barroquinha"
            },
            {
                "codigo_ibge": 2302107,
                "nome": "Baturité"
            },
            {
                "codigo_ibge": 2302206,
                "nome": "Beberibe"
            },
            {
                "codigo_ibge": 2302305,
                "nome": "Bela Cruz"
            },
            {
                "codigo_ibge": 2302404,
                "nome": "Boa Viagem"
            },
            {
                "codigo_ibge": 2302503,
                "nome": "Brejo Santo"
            },
            {
                "codigo_ibge": 2302602,
                "nome": "Camocim"
            },
            {
                "codigo_ibge": 2302701,
                "nome": "Campos Sales"
            },
            {
                "codigo_ibge": 2302800,
                "nome": "Canindé"
            },
            {
                "codigo_ibge": 2302909,
                "nome": "Capistrano"
            },
            {
                "codigo_ibge": 2303006,
                "nome": "Caridade"
            },
            {
                "codigo_ibge": 2303105,
                "nome": "Cariré"
            },
            {
                "codigo_ibge": 2303204,
                "nome": "Caririaçu"
            },
            {
                "codigo_ibge": 2303303,
                "nome": "Cariús"
            },
            {
                "codigo_ibge": 2303402,
                "nome": "Carnaubal"
            },
            {
                "codigo_ibge": 2303501,
                "nome": "Cascavel"
            },
            {
                "codigo_ibge": 2303600,
                "nome": "Catarina"
            },
            {
                "codigo_ibge": 2303659,
                "nome": "Catunda"
            },
            {
                "codigo_ibge": 2303709,
                "nome": "Caucaia"
            },
            {
                "codigo_ibge": 2303808,
                "nome": "Cedro"
            },
            {
                "codigo_ibge": 2303907,
                "nome": "Chaval"
            },
            {
                "codigo_ibge": 2303931,
                "nome": "Choró"
            },
            {
                "codigo_ibge": 2303956,
                "nome": "Chorozinho"
            },
            {
                "codigo_ibge": 2304004,
                "nome": "Coreaú"
            },
            {
                "codigo_ibge": 2304103,
                "nome": "Crateús"
            },
            {
                "codigo_ibge": 2304202,
                "nome": "Crato"
            },
            {
                "codigo_ibge": 2304236,
                "nome": "Croatá"
            },
            {
                "codigo_ibge": 2304251,
                "nome": "Cruz"
            },
            {
                "codigo_ibge": 2304269,
                "nome": "Deputado Irapuan Pinheiro"
            },
            {
                "codigo_ibge": 2304277,
                "nome": "Ererê"
            },
            {
                "codigo_ibge": 2304285,
                "nome": "Eusébio"
            },
            {
                "codigo_ibge": 2304301,
                "nome": "Farias Brito"
            },
            {
                "codigo_ibge": 2304350,
                "nome": "Forquilha"
            },
            {
                "codigo_ibge": 2304400,
                "nome": "Fortaleza"
            },
            {
                "codigo_ibge": 2304459,
                "nome": "Fortim"
            },
            {
                "codigo_ibge": 2304509,
                "nome": "Frecheirinha"
            },
            {
                "codigo_ibge": 2304608,
                "nome": "General Sampaio"
            },
            {
                "codigo_ibge": 2304657,
                "nome": "Graça"
            },
            {
                "codigo_ibge": 2304707,
                "nome": "Granja"
            },
            {
                "codigo_ibge": 2304806,
                "nome": "Granjeiro"
            },
            {
                "codigo_ibge": 2304905,
                "nome": "Groaíras"
            },
            {
                "codigo_ibge": 2304954,
                "nome": "Guaiúba"
            },
            {
                "codigo_ibge": 2305001,
                "nome": "Guaraciaba do Norte"
            },
            {
                "codigo_ibge": 2305100,
                "nome": "Guaramiranga"
            },
            {
                "codigo_ibge": 2305209,
                "nome": "Hidrolândia"
            },
            {
                "codigo_ibge": 2305233,
                "nome": "Horizonte"
            },
            {
                "codigo_ibge": 2305266,
                "nome": "Ibaretama"
            },
            {
                "codigo_ibge": 2305308,
                "nome": "Ibiapina"
            },
            {
                "codigo_ibge": 2305332,
                "nome": "Ibicuitinga"
            },
            {
                "codigo_ibge": 2305357,
                "nome": "Icapuí"
            },
            {
                "codigo_ibge": 2305407,
                "nome": "Icó"
            },
            {
                "codigo_ibge": 2305506,
                "nome": "Iguatu"
            },
            {
                "codigo_ibge": 2305605,
                "nome": "Independência"
            },
            {
                "codigo_ibge": 2305654,
                "nome": "Ipaporanga"
            },
            {
                "codigo_ibge": 2305704,
                "nome": "Ipaumirim"
            },
            {
                "codigo_ibge": 2305803,
                "nome": "Ipu"
            },
            {
                "codigo_ibge": 2305902,
                "nome": "Ipueiras"
            },
            {
                "codigo_ibge": 2306009,
                "nome": "Iracema"
            },
            {
                "codigo_ibge": 2306108,
                "nome": "Irauçuba"
            },
            {
                "codigo_ibge": 2306207,
                "nome": "Itaiçaba"
            },
            {
                "codigo_ibge": 2306256,
                "nome": "Itaitinga"
            },
            {
                "codigo_ibge": 2306306,
                "nome": "Itapajé"
            },
            {
                "codigo_ibge": 2306405,
                "nome": "Itapipoca"
            },
            {
                "codigo_ibge": 2306504,
                "nome": "Itapiúna"
            },
            {
                "codigo_ibge": 2306553,
                "nome": "Itarema"
            },
            {
                "codigo_ibge": 2306603,
                "nome": "Itatira"
            },
            {
                "codigo_ibge": 2306702,
                "nome": "Jaguaretama"
            },
            {
                "codigo_ibge": 2306801,
                "nome": "Jaguaribara"
            },
            {
                "codigo_ibge": 2306900,
                "nome": "Jaguaribe"
            },
            {
                "codigo_ibge": 2307007,
                "nome": "Jaguaruana"
            },
            {
                "codigo_ibge": 2307106,
                "nome": "Jardim"
            },
            {
                "codigo_ibge": 2307205,
                "nome": "Jati"
            },
            {
                "codigo_ibge": 2307254,
                "nome": "Jijoca de Jericoacoara"
            },
            {
                "codigo_ibge": 2307304,
                "nome": "Juazeiro do Norte"
            },
            {
                "codigo_ibge": 2307403,
                "nome": "Jucás"
            },
            {
                "codigo_ibge": 2307502,
                "nome": "Lavras da Mangabeira"
            },
            {
                "codigo_ibge": 2307601,
                "nome": "Limoeiro do Norte"
            },
            {
                "codigo_ibge": 2307635,
                "nome": "Madalena"
            },
            {
                "codigo_ibge": 2307650,
                "nome": "Maracanaú"
            },
            {
                "codigo_ibge": 2307700,
                "nome": "Maranguape"
            },
            {
                "codigo_ibge": 2307809,
                "nome": "Marco"
            },
            {
                "codigo_ibge": 2307908,
                "nome": "Martinópole"
            },
            {
                "codigo_ibge": 2308005,
                "nome": "Massapê"
            },
            {
                "codigo_ibge": 2308104,
                "nome": "Mauriti"
            },
            {
                "codigo_ibge": 2308203,
                "nome": "Meruoca"
            },
            {
                "codigo_ibge": 2308302,
                "nome": "Milagres"
            },
            {
                "codigo_ibge": 2308351,
                "nome": "Milhã"
            },
            {
                "codigo_ibge": 2308377,
                "nome": "Miraíma"
            },
            {
                "codigo_ibge": 2308401,
                "nome": "Missão Velha"
            },
            {
                "codigo_ibge": 2308500,
                "nome": "Mombaça"
            },
            {
                "codigo_ibge": 2308609,
                "nome": "Monsenhor Tabosa"
            },
            {
                "codigo_ibge": 2308708,
                "nome": "Morada Nova"
            },
            {
                "codigo_ibge": 2308807,
                "nome": "Moraújo"
            },
            {
                "codigo_ibge": 2308906,
                "nome": "Morrinhos"
            },
            {
                "codigo_ibge": 2309003,
                "nome": "Mucambo"
            },
            {
                "codigo_ibge": 2309102,
                "nome": "Mulungu"
            },
            {
                "codigo_ibge": 2309201,
                "nome": "Nova Olinda"
            },
            {
                "codigo_ibge": 2309300,
                "nome": "Nova Russas"
            },
            {
                "codigo_ibge": 2309409,
                "nome": "Novo Oriente"
            },
            {
                "codigo_ibge": 2309458,
                "nome": "Ocara"
            },
            {
                "codigo_ibge": 2309508,
                "nome": "Orós"
            },
            {
                "codigo_ibge": 2309607,
                "nome": "Pacajus"
            },
            {
                "codigo_ibge": 2309706,
                "nome": "Pacatuba"
            },
            {
                "codigo_ibge": 2309805,
                "nome": "Pacoti"
            },
            {
                "codigo_ibge": 2309904,
                "nome": "Pacujá"
            },
            {
                "codigo_ibge": 2310001,
                "nome": "Palhano"
            },
            {
                "codigo_ibge": 2310100,
                "nome": "Palmácia"
            },
            {
                "codigo_ibge": 2310209,
                "nome": "Paracuru"
            },
            {
                "codigo_ibge": 2310258,
                "nome": "Paraipaba"
            },
            {
                "codigo_ibge": 2310308,
                "nome": "Parambu"
            },
            {
                "codigo_ibge": 2310407,
                "nome": "Paramoti"
            },
            {
                "codigo_ibge": 2310506,
                "nome": "Pedra Branca"
            },
            {
                "codigo_ibge": 2310605,
                "nome": "Penaforte"
            },
            {
                "codigo_ibge": 2310704,
                "nome": "Pentecoste"
            },
            {
                "codigo_ibge": 2310803,
                "nome": "Pereiro"
            },
            {
                "codigo_ibge": 2310852,
                "nome": "Pindoretama"
            },
            {
                "codigo_ibge": 2310902,
                "nome": "Piquet Carneiro"
            },
            {
                "codigo_ibge": 2310951,
                "nome": "Pires Ferreira"
            },
            {
                "codigo_ibge": 2311009,
                "nome": "Poranga"
            },
            {
                "codigo_ibge": 2311108,
                "nome": "Porteiras"
            },
            {
                "codigo_ibge": 2311207,
                "nome": "Potengi"
            },
            {
                "codigo_ibge": 2311231,
                "nome": "Potiretama"
            },
            {
                "codigo_ibge": 2311264,
                "nome": "Quiterianópolis"
            },
            {
                "codigo_ibge": 2311306,
                "nome": "Quixadá"
            },
            {
                "codigo_ibge": 2311355,
                "nome": "Quixelô"
            },
            {
                "codigo_ibge": 2311405,
                "nome": "Quixeramobim"
            },
            {
                "codigo_ibge": 2311504,
                "nome": "Quixeré"
            },
            {
                "codigo_ibge": 2311603,
                "nome": "Redenção"
            },
            {
                "codigo_ibge": 2311702,
                "nome": "Reriutaba"
            },
            {
                "codigo_ibge": 2311801,
                "nome": "Russas"
            },
            {
                "codigo_ibge": 2311900,
                "nome": "Saboeiro"
            },
            {
                "codigo_ibge": 2311959,
                "nome": "Salitre"
            },
            {
                "codigo_ibge": 2312205,
                "nome": "Santa Quitéria"
            },
            {
                "codigo_ibge": 2312007,
                "nome": "Santana do Acaraú"
            },
            {
                "codigo_ibge": 2312106,
                "nome": "Santana do Cariri"
            },
            {
                "codigo_ibge": 2312304,
                "nome": "São Benedito"
            },
            {
                "codigo_ibge": 2312403,
                "nome": "São Gonçalo do Amarante"
            },
            {
                "codigo_ibge": 2312502,
                "nome": "São João do Jaguaribe"
            },
            {
                "codigo_ibge": 2312601,
                "nome": "São Luís do Curu"
            },
            {
                "codigo_ibge": 2312700,
                "nome": "Senador Pompeu"
            },
            {
                "codigo_ibge": 2312809,
                "nome": "Senador Sá"
            },
            {
                "codigo_ibge": 2312908,
                "nome": "Sobral"
            },
            {
                "codigo_ibge": 2313005,
                "nome": "Solonópole"
            },
            {
                "codigo_ibge": 2313104,
                "nome": "Tabuleiro do Norte"
            },
            {
                "codigo_ibge": 2313203,
                "nome": "Tamboril"
            },
            {
                "codigo_ibge": 2313252,
                "nome": "Tarrafas"
            },
            {
                "codigo_ibge": 2313302,
                "nome": "Tauá"
            },
            {
                "codigo_ibge": 2313351,
                "nome": "Tejuçuoca"
            },
            {
                "codigo_ibge": 2313401,
                "nome": "Tianguá"
            },
            {
                "codigo_ibge": 2313500,
                "nome": "Trairi"
            },
            {
                "codigo_ibge": 2313559,
                "nome": "Tururu"
            },
            {
                "codigo_ibge": 2313609,
                "nome": "Ubajara"
            },
            {
                "codigo_ibge": 2313708,
                "nome": "Umari"
            },
            {
                "codigo_ibge": 2313757,
                "nome": "Umirim"
            },
            {
                "codigo_ibge": 2313807,
                "nome": "Uruburetama"
            },
            {
                "codigo_ibge": 2313906,
                "nome": "Uruoca"
            },
            {
                "codigo_ibge": 2313955,
                "nome": "Varjota"
            },
            {
                "codigo_ibge": 2314003,
                "nome": "Várzea Alegre"
            },
            {
                "codigo_ibge": 2314102,
                "nome": "Viçosa do Ceará"
            }
        ]
    },
    "DF": {
        "nome": "Distrito Federal",
        "municipios": [
            {
                "codigo_ibge": 5300108,
                "nome": "Brasília"
            }
        ]
    },
    "ES": {
        "nome": "Espírito Santo",
        "municipios": [
            {
                "codigo_ibge": 3200102,
                "nome": "Afonso Cláudio"
            },
            {
                "codigo_ibge": 3200169,
                "nome": "Água Doce do Norte"
            },
            {
                "codigo_ibge": 3200136,
                "nome": "Águia Branca"
            },
            {
                "codigo_ibge": 3200201,
                "nome": "Alegre"
            },
            {
                "codigo_ibge": 3200300,
                "nome": "Alfredo Chaves"
            },
            {
                "codigo_ibge": 3200359,
                "nome": "Alto Rio Novo"
            },
            {
                "codigo_ibge": 3200409,
                "nome": "Anchieta"
            },
            {
                "codigo_ibge": 3200508,
                "nome": "Apiacá"
            },
            {
                "codigo_ibge": 3200607,
                "nome": "Aracruz"
            },
            {
                "codigo_ibge": 3200706,
                "nome": "Atilio Vivacqua"
            },
            {
                "codigo_ibge": 3200805,
                "nome": "Baixo Guandu"
            },
            {
                "codigo_ibge": 3200904,
                "nome": "Barra de São Francisco"
            },
            {
                "codigo_ibge": 3201001,
                "nome": "Boa Esperança"
            },
            {
                "codigo_ibge": 3201100,
                "nome": "Bom Jesus do Norte"
            },
            {
                "codigo_ibge": 3201159,
                "nome": "Brejetuba"
            },
            {
                "codigo_ibge": 3201209,
                "nome": "Cachoeiro de Itapemirim"
            },
            {
                "codigo_ibge": 3201308,
                "nome": "Cariacica"
            },
            {
                "codigo_ibge": 3201407,
                "nome": "Castelo"
            },
            {
                "codigo_ibge": 3201506,
                "nome": "Colatina"
            },
            {
                "codigo_ibge": 3201605,
                "nome": "Conceição da Barra"
            },
            {
                "codigo_ibge": 3201704,
                "nome": "Conceição do Castelo"
            },
            {
                "codigo_ibge": 3201803,
                "nome": "Divino de São Lourenço"
            },
            {
                "codigo_ibge": 3201902,
                "nome": "Domingos Martins"
            },
            {
                "codigo_ibge": 3202009,
                "nome": "Dores do Rio Preto"
            },
            {
                "codigo_ibge": 3202108,
                "nome": "Ecoporanga"
            },
            {
                "codigo_ibge": 3202207,
                "nome": "Fundão"
            },
            {
                "codigo_ibge": 3202256,
                "nome": "Governador Lindenberg"
            },
            {
                "codigo_ibge": 3202306,
                "nome": "Guaçuí"
            },
            {
                "codigo_ibge": 3202405,
                "nome": "Guarapari"
            },
            {
                "codigo_ibge": 3202454,
                "nome": "Ibatiba"
            },
            {
                "codigo_ibge": 3202504,
                "nome": "Ibiraçu"
            },
            {
                "codigo_ibge": 3202553,
                "nome": "Ibitirama"
            },
            {
                "codigo_ibge": 3202603,
                "nome": "Iconha"
            },
            {
                "codigo_ibge": 3202652,
                "nome": "Irupi"
            },
            {
                "codigo_ibge": 3202702,
                "nome": "Itaguaçu"
            },
            {
                "codigo_ibge": 3202801,
                "nome": "Itapemirim"
            },
            {
                "codigo_ibge": 3202900,
                "nome": "Itarana"
            },
            {
                "codigo_ibge": 3203007,
                "nome": "Iúna"
            },
            {
                "codigo_ibge": 3203056,
                "nome": "Jaguaré"
            },
            {
                "codigo_ibge": 3203106,
                "nome": "Jerônimo Monteiro"
            },
            {
                "codigo_ibge": 3203130,
                "nome": "João Neiva"
            },
            {
                "codigo_ibge": 3203163,
                "nome": "Laranja da Terra"
            },
            {
                "codigo_ibge": 3203205,
                "nome": "Linhares"
            },
            {
                "codigo_ibge": 3203304,
                "nome": "Mantenópolis"
            },
            {
                "codigo_ibge": 3203320,
                "nome": "Marataízes"
            },
            {
                "codigo_ibge": 3203346,
                "nome": "Marechal Floriano"
            },
            {
                "codigo_ibge": 3203353,
                "nome": "Marilândia"
            },
            {
                "codigo_ibge": 3203403,
                "nome": "Mimoso do Sul"
            },
            {
                "codigo_ibge": 3203502,
                "nome": "Montanha"
            },
            {
                "codigo_ibge": 3203601,
                "nome": "Mucurici"
            },
            {
                "codigo_ibge": 3203700,
                "nome": "Muniz Freire"
            },
            {
                "codigo_ibge": 3203809,
                "nome": "Muqui"
            },
            {
                "codigo_ibge": 3203908,
                "nome": "Nova Venécia"
            },
            {
                "codigo_ibge": 3204005,
                "nome": "Pancas"
            },
            {
                "codigo_ibge": 3204054,
                "nome": "Pedro Canário"
            },
            {
                "codigo_ibge": 3204104,
                "nome": "Pinheiros"
            },
            {
                "codigo_ibge": 3204203,
                "nome": "Piúma"
            },
            {
                "codigo_ibge": 3204252,
                "nome": "Ponto Belo"
            },
            {
                "codigo_ibge": 3204302,
                "nome": "Presidente Kennedy"
            },
            {
                "codigo_ibge": 3204351,
                "nome": "Rio Bananal"
            },
            {
                "codigo_ibge": 3204401,
                "nome": "Rio Novo do Sul"
            },
            {
                "codigo_ibge": 3204500,
                "nome": "Santa Leopoldina"
            },
            {
                "codigo_ibge": 3204559,
                "nome": "Santa Maria de Jetibá"
            },
            {
                "codigo_ibge": 3204609,
                "nome": "Santa Teresa"
            },
            {
                "codigo_ibge": 3204658,
                "nome": "São Domingos do Norte"
            },
            {
                "codigo_ibge": 3204708,
                "nome": "São Gabriel da Palha"
            },
            {
                "codigo_ibge": 3204807,
                "nome": "São José do Calçado"
            },
            {
                "codigo_ibge": 3204906,
                "nome": "São Mateus"
            },
            {
                "codigo_ibge": 3204955,
                "nome": "São Roque do Canaã"
            },
            {
                "codigo_ibge": 3205002,
                "nome": "Serra"
            },
            {
                "codigo_ibge": 3205010,
                "nome": "Sooretama"
            },
            {
                "codigo_ibge": 3205036,
                "nome": "Vargem Alta"
            },
            {
                "codigo_ibge": 3205069,
                "nome": "Venda Nova do Imigrante"
            },
            {
                "codigo_ibge": 3205101,
                "nome": "Viana"
            },
            {
                "codigo_ibge": 3205150,
                "nome": "Vila Pavão"
            },
            {
                "codigo_ibge": 3205176,
                "nome": "Vila Valério"
            },
            {
                "codigo_ibge": 3205200,
                "nome": "Vila Velha"
            },
            {
                "codigo_ibge": 3205309,
                "nome": "Vitória"
            }
        ]
    },
    "GO": {
        "nome": "Goiás",
        "municipios": [
            {
                "codigo_ibge": 5200050,
                "nome": "Abadia de Goiás"
            },
            {
                "codigo_ibge": 5200100,
                "nome": "Abadiânia"
            },
            {
                "codigo_ibge": 5200134,
                "nome": "Acreúna"
            },
            {
                "codigo_ibge": 5200159,
                "nome": "Adelândia"
            },
            {
                "codigo_ibge": 5200175,
                "nome": "Água Fria de Goiás"
            },
            {
                "codigo_ibge": 5200209,
                "nome": "Água Limpa"
            },
            {
                "codigo_ibge": 5200258,
                "nome": "Águas Lindas de Goiás"
            },
            {
                "codigo_ibge": 5200308,
                "nome": "Alexânia"
            },
            {
                "codigo_ibge": 5200506,
                "nome": "Aloândia"
            },
            {
                "codigo_ibge": 5200555,
                "nome": "Alto Horizonte"
            },
            {
                "codigo_ibge": 5200605,
                "nome": "Alto Paraíso de Goiás"
            },
            {
                "codigo_ibge": 5200803,
                "nome": "Alvorada do Norte"
            },
            {
                "codigo_ibge": 5200829,
                "nome": "Amaralina"
            },
            {
                "codigo_ibge": 5200852,
                "nome": "Americano do Brasil"
            },
            {
                "codigo_ibge": 5200902,
                "nome": "Amorinópolis"
            },
            {
                "codigo_ibge": 5201108,
                "nome": "Anápolis"
            },
            {
                "codigo_ibge": 5201207,
                "nome": "Anhanguera"
            },
            {
                "codigo_ibge": 5201306,
                "nome": "Anicuns"
            },
            {
                "codigo_ibge": 5201405,
                "nome": "Aparecida de Goiânia"
            },
            {
                "codigo_ibge": 5201454,
                "nome": "Aparecida do Rio Doce"
            },
            {
                "codigo_ibge": 5201504,
                "nome": "Aporé"
            },
            {
                "codigo_ibge": 5201603,
                "nome": "Araçu"
            },
            {
                "codigo_ibge": 5201702,
                "nome": "Aragarças"
            },
            {
                "codigo_ibge": 5201801,
                "nome": "Aragoiânia"
            },
            {
                "codigo_ibge": 5202155,
                "nome": "Araguapaz"
            },
            {
                "codigo_ibge": 5202353,
                "nome": "Arenópolis"
            },
            {
                "codigo_ibge": 5202502,
                "nome": "Aruanã"
            },
            {
                "codigo_ibge": 5202601,
                "nome": "Aurilândia"
            },
            {
                "codigo_ibge": 5202809,
                "nome": "Avelinópolis"
            },
            {
                "codigo_ibge": 5203104,
                "nome": "Baliza"
            },
            {
                "codigo_ibge": 5203203,
                "nome": "Barro Alto"
            },
            {
                "codigo_ibge": 5203302,
                "nome": "Bela Vista de Goiás"
            },
            {
                "codigo_ibge": 5203401,
                "nome": "Bom Jardim de Goiás"
            },
            {
                "codigo_ibge": 5203500,
                "nome": "Bom Jesus de Goiás"
            },
            {
                "codigo_ibge": 5203559,
                "nome": "Bonfinópolis"
            },
            {
                "codigo_ibge": 5203575,
                "nome": "Bonópolis"
            },
            {
                "codigo_ibge": 5203609,
                "nome": "Brazabrantes"
            },
            {
                "codigo_ibge": 5203807,
                "nome": "Britânia"
            },
            {
                "codigo_ibge": 5203906,
                "nome": "Buriti Alegre"
            },
            {
                "codigo_ibge": 5203939,
                "nome": "Buriti de Goiás"
            },
            {
                "codigo_ibge": 5203962,
                "nome": "Buritinópolis"
            },
            {
                "codigo_ibge": 5204003,
                "nome": "Cabeceiras"
            },
            {
                "codigo_ibge": 5204102,
                "nome": "Cachoeira Alta"
            },
            {
                "codigo_ibge": 5204201,
                "nome": "Cachoeira de Goiás"
            },
            {
                "codigo_ibge": 5204250,
                "nome": "Cachoeira Dourada"
            },
            {
                "codigo_ibge": 5204300,
                "nome": "Caçu"
            },
            {
                "codigo_ibge": 5204409,
                "nome": "Caiapônia"
            },
            {
                "codigo_ibge": 5204508,
                "nome": "Caldas Novas"
            },
            {
                "codigo_ibge": 5204557,
                "nome": "Caldazinha"
            },
            {
                "codigo_ibge": 5204607,
                "nome": "Campestre de Goiás"
            },
            {
                "codigo_ibge": 5204656,
                "nome": "Campinaçu"
            },
            {
                "codigo_ibge": 5204706,
                "nome": "Campinorte"
            },
            {
                "codigo_ibge": 5204805,
                "nome": "Campo Alegre de Goiás"
            },
            {
                "codigo_ibge": 5204854,
                "nome": "Campo Limpo de Goiás"
            },
            {
                "codigo_ibge": 5204904,
                "nome": "Campos Belos"
            },
            {
                "codigo_ibge": 5204953,
                "nome": "Campos Verdes"
            },
            {
                "codigo_ibge": 5205000,
                "nome": "Carmo do Rio Verde"
            },
            {
                "codigo_ibge": 5205059,
                "nome": "Castelândia"
            },
            {
                "codigo_ibge": 5205109,
                "nome": "Catalão"
            },
            {
                "codigo_ibge": 5205208,
                "nome": "Caturaí"
            },
            {
                "codigo_ibge": 5205307,
                "nome": "Cavalcante"
            },
            {
                "codigo_ibge": 5205406,
                "nome": "Ceres"
            },
            {
                "codigo_ibge": 5205455,
                "nome": "Cezarina"
            },
            {
                "codigo_ibge": 5205471,
                "nome": "Chapadão do Céu"
            },
            {
                "codigo_ibge": 5205497,
                "nome": "Cidade Ocidental"
            },
            {
                "codigo_ibge": 5205513,
                "nome": "Cocalzinho de Goiás"
            },
            {
                "codigo_ibge": 5205521,
                "nome": "Colinas do Sul"
            },
            {
                "codigo_ibge": 5205703,
                "nome": "Córrego do Ouro"
            },
            {
                "codigo_ibge": 5205802,
                "nome": "Corumbá de Goiás"
            },
            {
                "codigo_ibge": 5205901,
                "nome": "Corumbaíba"
            },
            {
                "codigo_ibge": 5206206,
                "nome": "Cristalina"
            },
            {
                "codigo_ibge": 5206305,
                "nome": "Cristianópolis"
            },
            {
                "codigo_ibge": 5206404,
                "nome": "Crixás"
            },
            {
                "codigo_ibge": 5206503,
                "nome": "Cromínia"
            },
            {
                "codigo_ibge": 5206602,
                "nome": "Cumari"
            },
            {
                "codigo_ibge": 5206701,
                "nome": "Damianópolis"
            },
            {
                "codigo_ibge": 5206800,
                "nome": "Damolândia"
            },
            {
                "codigo_ibge": 5206909,
                "nome": "Davinópolis"
            },
            {
                "codigo_ibge": 5207105,
                "nome": "Diorama"
            },
            {
                "codigo_ibge": 5208301,
                "nome": "Divinópolis de Goiás"
            },
            {
                "codigo_ibge": 5207253,
                "nome": "Doverlândia"
            },
            {
                "codigo_ibge": 5207352,
                "nome": "Edealina"
            },
            {
                "codigo_ibge": 5207402,
                "nome": "Edéia"
            },
            {
                "codigo_ibge": 5207501,
                "nome": "Estrela do Norte"
            },
            {
                "codigo_ibge": 5207535,
                "nome": "Faina"
            },
            {
                "codigo_ibge": 5207600,
                "nome": "Fazenda Nova"
            },
            {
                "codigo_ibge": 5207808,
                "nome": "Firminópolis"
            },
            {
                "codigo_ibge": 5207907,
                "nome": "Flores de Goiás"
            },
            {
                "codigo_ibge": 5208004,
                "nome": "Formosa"
            },
            {
                "codigo_ibge": 5208103,
                "nome": "Formoso"
            },
            {
                "codigo_ibge": 5208152,
                "nome": "Gameleira de Goiás"
            },
            {
                "codigo_ibge": 5208400,
                "nome": "Goianápolis"
            },
            {
                "codigo_ibge": 5208509,
                "nome": "Goiandira"
            },
            {
                "codigo_ibge": 5208608,
                "nome": "Goianésia"
            },
            {
                "codigo_ibge": 5208707,
                "nome": "Goiânia"
            },
            {
                "codigo_ibge": 5208806,
                "nome": "Goianira"
            },
            {
                "codigo_ibge": 5208905,
                "nome": "Goiás"
            },
            {
                "codigo_ibge": 5209101,
                "nome": "Goiatuba"
            },
            {
                "codigo_ibge": 5209150,
                "nome": "Gouvelândia"
            },
            {
                "codigo_ibge": 5209200,
                "nome": "Guapó"
            },
            {
                "codigo_ibge": 5209291,
                "nome": "Guaraíta"
            },
            {
                "codigo_ibge": 5209408,
                "nome": "Guarani de Goiás"
            },
            {
                "codigo_ibge": 5209457,
                "nome": "Guarinos"
            },
            {
                "codigo_ibge": 5209606,
                "nome": "Heitoraí"
            },
            {
                "codigo_ibge": 5209705,
                "nome": "Hidrolândia"
            },
            {
                "codigo_ibge": 5209804,
                "nome": "Hidrolina"
            },
            {
                "codigo_ibge": 5209903,
                "nome": "Iaciara"
            },
            {
                "codigo_ibge": 5209937,
                "nome": "Inaciolândia"
            },
            {
                "codigo_ibge": 5209952,
                "nome": "Indiara"
            },
            {
                "codigo_ibge": 5210000,
                "nome": "Inhumas"
            },
            {
                "codigo_ibge": 5210109,
                "nome": "Ipameri"
            },
            {
                "codigo_ibge": 5210158,
                "nome": "Ipiranga de Goiás"
            },
            {
                "codigo_ibge": 5210208,
                "nome": "Iporá"
            },
            {
                "codigo_ibge": 5210307,
                "nome": "Israelândia"
            },
            {
                "codigo_ibge": 5210406,
                "nome": "Itaberaí"
            },
            {
                "codigo_ibge": 5210562,
                "nome": "Itaguari"
            },
            {
                "codigo_ibge": 5210604,
                "nome": "Itaguaru"
            },
            {
                "codigo_ibge": 5210802,
                "nome": "Itajá"
            },
            {
                "codigo_ibge": 5210901,
                "nome": "Itapaci"
            },
            {
                "codigo_ibge": 5211008,
                "nome": "Itapirapuã"
            },
            {
                "codigo_ibge": 5211206,
                "nome": "Itapuranga"
            },
            {
                "codigo_ibge": 5211305,
                "nome": "Itarumã"
            },
            {
                "codigo_ibge": 5211404,
                "nome": "Itauçu"
            },
            {
                "codigo_ibge": 5211503,
                "nome": "Itumbiara"
            },
            {
                "codigo_ibge": 5211602,
                "nome": "Ivolândia"
            },
            {
                "codigo_ibge": 5211701,
                "nome": "Jandaia"
            },
            {
                "codigo_ibge": 5211800,
                "nome": "Jaraguá"
            },
            {
                "codigo_ibge": 5211909,
                "nome": "Jataí"
            },
            {
                "codigo_ibge": 5212006,
                "nome": "Jaupaci"
            },
            {
                "codigo_ibge": 5212055,
                "nome": "Jesúpolis"
            },
            {
                "codigo_ibge": 5212105,
                "nome": "Joviânia"
            },
            {
                "codigo_ibge": 5212204,
                "nome": "Jussara"
            },
            {
                "codigo_ibge": 5212253,
                "nome": "Lagoa Santa"
            },
            {
                "codigo_ibge": 5212303,
                "nome": "Leopoldo de Bulhões"
            },
            {
                "codigo_ibge": 5212501,
                "nome": "Luziânia"
            },
            {
                "codigo_ibge": 5212600,
                "nome": "Mairipotaba"
            },
            {
                "codigo_ibge": 5212709,
                "nome": "Mambaí"
            },
            {
                "codigo_ibge": 5212808,
                "nome": "Mara Rosa"
            },
            {
                "codigo_ibge": 5212907,
                "nome": "Marzagão"
            },
            {
                "codigo_ibge": 5212956,
                "nome": "Matrinchã"
            },
            {
                "codigo_ibge": 5213004,
                "nome": "Maurilândia"
            },
            {
                "codigo_ibge": 5213053,
                "nome": "Mimoso de Goiás"
            },
            {
                "codigo_ibge": 5213087,
                "nome": "Minaçu"
            },
            {
                "codigo_ibge": 5213103,
                "nome": "Mineiros"
            },
            {
                "codigo_ibge": 5213400,
                "nome": "Moiporá"
            },
            {
                "codigo_ibge": 5213509,
                "nome": "Monte Alegre de Goiás"
            },
            {
                "codigo_ibge": 5213707,
                "nome": "Montes Claros de Goiás"
            },
            {
                "codigo_ibge": 5213756,
                "nome": "Montividiu"
            },
            {
                "codigo_ibge": 5213772,
                "nome": "Montividiu do Norte"
            },
            {
                "codigo_ibge": 5213806,
                "nome": "Morrinhos"
            },
            {
                "codigo_ibge": 5213855,
                "nome": "Morro Agudo de Goiás"
            },
            {
                "codigo_ibge": 5213905,
                "nome": "Mossâmedes"
            },
            {
                "codigo_ibge": 5214002,
                "nome": "Mozarlândia"
            },
            {
                "codigo_ibge": 5214051,
                "nome": "Mundo Novo"
            },
            {
                "codigo_ibge": 5214101,
                "nome": "Mutunópolis"
            },
            {
                "codigo_ibge": 5214408,
                "nome": "Nazário"
            },
            {
                "codigo_ibge": 5214507,
                "nome": "Nerópolis"
            },
            {
                "codigo_ibge": 5214606,
                "nome": "Niquelândia"
            },
            {
                "codigo_ibge": 5214705,
                "nome": "Nova América"
            },
            {
                "codigo_ibge": 5214804,
                "nome": "Nova Aurora"
            },
            {
                "codigo_ibge": 5214838,
                "nome": "Nova Crixás"
            },
            {
                "codigo_ibge": 5214861,
                "nome": "Nova Glória"
            },
            {
                "codigo_ibge": 5214879,
                "nome": "Nova Iguaçu de Goiás"
            },
            {
                "codigo_ibge": 5214903,
                "nome": "Nova Roma"
            },
            {
                "codigo_ibge": 5215009,
                "nome": "Nova Veneza"
            },
            {
                "codigo_ibge": 5215207,
                "nome": "Novo Brasil"
            },
            {
                "codigo_ibge": 5215231,
                "nome": "Novo Gama"
            },
            {
                "codigo_ibge": 5215256,
                "nome": "Novo Planalto"
            },
            {
                "codigo_ibge": 5215306,
                "nome": "Orizona"
            },
            {
                "codigo_ibge": 5215405,
                "nome": "Ouro Verde de Goiás"
            },
            {
                "codigo_ibge": 5215504,
                "nome": "Ouvidor"
            },
            {
                "codigo_ibge": 5215603,
                "nome": "Padre Bernardo"
            },
            {
                "codigo_ibge": 5215652,
                "nome": "Palestina de Goiás"
            },
            {
                "codigo_ibge": 5215702,
                "nome": "Palmeiras de Goiás"
            },
            {
                "codigo_ibge": 5215801,
                "nome": "Palmelo"
            },
            {
                "codigo_ibge": 5215900,
                "nome": "Palminópolis"
            },
            {
                "codigo_ibge": 5216007,
                "nome": "Panamá"
            },
            {
                "codigo_ibge": 5216304,
                "nome": "Paranaiguara"
            },
            {
                "codigo_ibge": 5216403,
                "nome": "Paraúna"
            },
            {
                "codigo_ibge": 5216452,
                "nome": "Perolândia"
            },
            {
                "codigo_ibge": 5216809,
                "nome": "Petrolina de Goiás"
            },
            {
                "codigo_ibge": 5216908,
                "nome": "Pilar de Goiás"
            },
            {
                "codigo_ibge": 5217104,
                "nome": "Piracanjuba"
            },
            {
                "codigo_ibge": 5217203,
                "nome": "Piranhas"
            },
            {
                "codigo_ibge": 5217302,
                "nome": "Pirenópolis"
            },
            {
                "codigo_ibge": 5217401,
                "nome": "Pires do Rio"
            },
            {
                "codigo_ibge": 5217609,
                "nome": "Planaltina"
            },
            {
                "codigo_ibge": 5217708,
                "nome": "Pontalina"
            },
            {
                "codigo_ibge": 5218003,
                "nome": "Porangatu"
            },
            {
                "codigo_ibge": 5218052,
                "nome": "Porteirão"
            },
            {
                "codigo_ibge": 5218102,
                "nome": "Portelândia"
            },
            {
                "codigo_ibge": 5218300,
                "nome": "Posse"
            },
            {
                "codigo_ibge": 5218391,
                "nome": "Professor Jamil"
            },
            {
                "codigo_ibge": 5218508,
                "nome": "Quirinópolis"
            },
            {
                "codigo_ibge": 5218607,
                "nome": "Rialma"
            },
            {
                "codigo_ibge": 5218706,
                "nome": "Rianápolis"
            },
            {
                "codigo_ibge": 5218789,
                "nome": "Rio Quente"
            },
            {
                "codigo_ibge": 5218805,
                "nome": "Rio Verde"
            },
            {
                "codigo_ibge": 5218904,
                "nome": "Rubiataba"
            },
            {
                "codigo_ibge": 5219001,
                "nome": "Sanclerlândia"
            },
            {
                "codigo_ibge": 5219100,
                "nome": "Santa Bárbara de Goiás"
            },
            {
                "codigo_ibge": 5219209,
                "nome": "Santa Cruz de Goiás"
            },
            {
                "codigo_ibge": 5219258,
                "nome": "Santa Fé de Goiás"
            },
            {
                "codigo_ibge": 5219308,
                "nome": "Santa Helena de Goiás"
            },
            {
                "codigo_ibge": 5219357,
                "nome": "Santa Isabel"
            },
            {
                "codigo_ibge": 5219407,
                "nome": "Santa Rita do Araguaia"
            },
            {
                "codigo_ibge": 5219456,
                "nome": "Santa Rita do Novo Destino"
            },
            {
                "codigo_ibge": 5219506,
                "nome": "Santa Rosa de Goiás"
            },
            {
                "codigo_ibge": 5219605,
                "nome": "Santa Tereza de Goiás"
            },
            {
                "codigo_ibge": 5219704,
                "nome": "Santa Terezinha de Goiás"
            },
            {
                "codigo_ibge": 5219712,
                "nome": "Santo Antônio da Barra"
            },
            {
                "codigo_ibge": 5219738,
                "nome": "Santo Antônio de Goiás"
            },
            {
                "codigo_ibge": 5219753,
                "nome": "Santo Antônio do Descoberto"
            },
            {
                "codigo_ibge": 5219803,
                "nome": "São Domingos"
            },
            {
                "codigo_ibge": 5219902,
                "nome": "São Francisco de Goiás"
            },
            {
                "codigo_ibge": 5220009,
                "nome": "São João d'Aliança"
            },
            {
                "codigo_ibge": 5220058,
                "nome": "São João da Paraúna"
            },
            {
                "codigo_ibge": 5220108,
                "nome": "São Luís de Montes Belos"
            },
            {
                "codigo_ibge": 5220157,
                "nome": "São Luiz do Norte"
            },
            {
                "codigo_ibge": 5220207,
                "nome": "São Miguel do Araguaia"
            },
            {
                "codigo_ibge": 5220264,
                "nome": "São Miguel do Passa Quatro"
            },
            {
                "codigo_ibge": 5220280,
                "nome": "São Patrício"
            },
            {
                "codigo_ibge": 5220405,
                "nome": "São Simão"
            },
            {
                "codigo_ibge": 5220454,
                "nome": "Senador Canedo"
            },
            {
                "codigo_ibge": 5220504,
                "nome": "Serranópolis"
            },
            {
                "codigo_ibge": 5220603,
                "nome": "Silvânia"
            },
            {
                "codigo_ibge": 5220686,
                "nome": "Simolândia"
            },
            {
                "codigo_ibge": 5220702,
                "nome": "Sítio d'Abadia"
            },
            {
                "codigo_ibge": 5221007,
                "nome": "Taquaral de Goiás"
            },
            {
                "codigo_ibge": 5221080,
                "nome": "Teresina de Goiás"
            },
            {
                "codigo_ibge": 5221197,
                "nome": "Terezópolis de Goiás"
            },
            {
                "codigo_ibge": 5221304,
                "nome": "Três Ranchos"
            },
            {
                "codigo_ibge": 5221403,
                "nome": "Trindade"
            },
            {
                "codigo_ibge": 5221452,
                "nome": "Trombas"
            },
            {
                "codigo_ibge": 5221502,
                "nome": "Turvânia"
            },
            {
                "codigo_ibge": 5221551,
                "nome": "Turvelândia"
            },
            {
                "codigo_ibge": 5221577,
                "nome": "Uirapuru"
            },
            {
                "codigo_ibge": 5221601,
                "nome": "Uruaçu"
            },
            {
                "codigo_ibge": 5221700,
                "nome": "Uruana"
            },
            {
                "codigo_ibge": 5221809,
                "nome": "Urutaí"
            },
            {
                "codigo_ibge": 5221858,
                "nome": "Valparaíso de Goiás"
            },
            {
                "codigo_ibge": 5221908,
                "nome": "Varjão"
            },
            {
                "codigo_ibge": 5222005,
                "nome": "Vianópolis"
            },
            {
                "codigo_ibge": 5222054,
                "nome": "Vicentinópolis"
            },
            {
                "codigo_ibge": 5222203,
                "nome": "Vila Boa"
            },
            {
                "codigo_ibge": 5222302,
                "nome": "Vila Propício"
            }
        ]
    },
    "MA": {
        "nome": "Maranhão",
        "municipios": [
            {
                "codigo_ibge": 2100055,
                "nome": "Açailândia"
            },
            {
                "codigo_ibge": 2100105,
                "nome": "Afonso Cunha"
            },
            {
                "codigo_ibge": 2100154,
                "nome": "Água Doce do Maranhão"
            },
            {
                "codigo_ibge": 2100204,
                "nome": "Alcântara"
            },
            {
                "codigo_ibge": 2100303,
                "nome": "Aldeias Altas"
            },
            {
                "codigo_ibge": 2100402,
                "nome": "Altamira do Maranhão"
            },
            {
                "codigo_ibge": 2100436,
                "nome": "Alto Alegre do Maranhão"
            },
            {
                "codigo_ibge": 2100477,
                "nome": "Alto Alegre do Pindaré"
            },
            {
                "codigo_ibge": 2100501,
                "nome": "Alto Parnaíba"
            },
            {
                "codigo_ibge": 2100550,
                "nome": "Amapá do Maranhão"
            },
            {
                "codigo_ibge": 2100600,
                "nome": "Amarante do Maranhão"
            },
            {
                "codigo_ibge": 2100709,
                "nome": "Anajatuba"
            },
            {
                "codigo_ibge": 2100808,
                "nome": "Anapurus"
            },
            {
                "codigo_ibge": 2100832,
                "nome": "Apicum-Açu"
            },
            {
                "codigo_ibge": 2100873,
                "nome": "Araguanã"
            },
            {
                "codigo_ibge": 2100907,
                "nome": "Araioses"
            },
            {
                "codigo_ibge": 2100956,
                "nome": "Arame"
            },
            {
                "codigo_ibge": 2101004,
                "nome": "Arari"
            },
            {
                "codigo_ibge": 2101103,
                "nome": "Axixá"
            },
            {
                "codigo_ibge": 2101202,
                "nome": "Bacabal"
            },
            {
                "codigo_ibge": 2101251,
                "nome": "Bacabeira"
            },
            {
                "codigo_ibge": 2101301,
                "nome": "Bacuri"
            },
            {
                "codigo_ibge": 2101350,
                "nome": "Bacurituba"
            },
            {
                "codigo_ibge": 2101400,
                "nome": "Balsas"
            },
            {
                "codigo_ibge": 2101509,
                "nome": "Barão de Grajaú"
            },
            {
                "codigo_ibge": 2101608,
                "nome": "Barra do Corda"
            },
            {
                "codigo_ibge": 2101707,
                "nome": "Barreirinhas"
            },
            {
                "codigo_ibge": 2101772,
                "nome": "Bela Vista do Maranhão"
            },
            {
                "codigo_ibge": 2101731,
                "nome": "Belágua"
            },
            {
                "codigo_ibge": 2101806,
                "nome": "Benedito Leite"
            },
            {
                "codigo_ibge": 2101905,
                "nome": "Bequimão"
            },
            {
                "codigo_ibge": 2101939,
                "nome": "Bernardo do Mearim"
            },
            {
                "codigo_ibge": 2101970,
                "nome": "Boa Vista do Gurupi"
            },
            {
                "codigo_ibge": 2102002,
                "nome": "Bom Jardim"
            },
            {
                "codigo_ibge": 2102036,
                "nome": "Bom Jesus das Selvas"
            },
            {
                "codigo_ibge": 2102077,
                "nome": "Bom Lugar"
            },
            {
                "codigo_ibge": 2102101,
                "nome": "Brejo"
            },
            {
                "codigo_ibge": 2102150,
                "nome": "Brejo de Areia"
            },
            {
                "codigo_ibge": 2102200,
                "nome": "Buriti"
            },
            {
                "codigo_ibge": 2102309,
                "nome": "Buriti Bravo"
            },
            {
                "codigo_ibge": 2102325,
                "nome": "Buriticupu"
            },
            {
                "codigo_ibge": 2102358,
                "nome": "Buritirana"
            },
            {
                "codigo_ibge": 2102374,
                "nome": "Cachoeira Grande"
            },
            {
                "codigo_ibge": 2102408,
                "nome": "Cajapió"
            },
            {
                "codigo_ibge": 2102507,
                "nome": "Cajari"
            },
            {
                "codigo_ibge": 2102556,
                "nome": "Campestre do Maranhão"
            },
            {
                "codigo_ibge": 2102606,
                "nome": "Cândido Mendes"
            },
            {
                "codigo_ibge": 2102705,
                "nome": "Cantanhede"
            },
            {
                "codigo_ibge": 2102754,
                "nome": "Capinzal do Norte"
            },
            {
                "codigo_ibge": 2102804,
                "nome": "Carolina"
            },
            {
                "codigo_ibge": 2102903,
                "nome": "Carutapera"
            },
            {
                "codigo_ibge": 2103000,
                "nome": "Caxias"
            },
            {
                "codigo_ibge": 2103109,
                "nome": "Cedral"
            },
            {
                "codigo_ibge": 2103125,
                "nome": "Central do Maranhão"
            },
            {
                "codigo_ibge": 2103158,
                "nome": "Centro do Guilherme"
            },
            {
                "codigo_ibge": 2103174,
                "nome": "Centro Novo do Maranhão"
            },
            {
                "codigo_ibge": 2103208,
                "nome": "Chapadinha"
            },
            {
                "codigo_ibge": 2103257,
                "nome": "Cidelândia"
            },
            {
                "codigo_ibge": 2103307,
                "nome": "Codó"
            },
            {
                "codigo_ibge": 2103406,
                "nome": "Coelho Neto"
            },
            {
                "codigo_ibge": 2103505,
                "nome": "Colinas"
            },
            {
                "codigo_ibge": 2103554,
                "nome": "Conceição do Lago-Açu"
            },
            {
                "codigo_ibge": 2103604,
                "nome": "Coroatá"
            },
            {
                "codigo_ibge": 2103703,
                "nome": "Cururupu"
            },
            {
                "codigo_ibge": 2103752,
                "nome": "Davinópolis"
            },
            {
                "codigo_ibge": 2103802,
                "nome": "Dom Pedro"
            },
            {
                "codigo_ibge": 2103901,
                "nome": "Duque Bacelar"
            },
            {
                "codigo_ibge": 2104008,
                "nome": "Esperantinópolis"
            },
            {
                "codigo_ibge": 2104057,
                "nome": "Estreito"
            },
            {
                "codigo_ibge": 2104073,
                "nome": "Feira Nova do Maranhão"
            },
            {
                "codigo_ibge": 2104081,
                "nome": "Fernando Falcão"
            },
            {
                "codigo_ibge": 2104099,
                "nome": "Formosa da Serra Negra"
            },
            {
                "codigo_ibge": 2104107,
                "nome": "Fortaleza dos Nogueiras"
            },
            {
                "codigo_ibge": 2104206,
                "nome": "Fortuna"
            },
            {
                "codigo_ibge": 2104305,
                "nome": "Godofredo Viana"
            },
            {
                "codigo_ibge": 2104404,
                "nome": "Gonçalves Dias"
            },
            {
                "codigo_ibge": 2104503,
                "nome": "Governador Archer"
            },
            {
                "codigo_ibge": 2104552,
                "nome": "Governador Edison Lobão"
            },
            {
                "codigo_ibge": 2104602,
                "nome": "Governador Eugênio Barros"
            },
            {
                "codigo_ibge": 2104628,
                "nome": "Governador Luiz Rocha"
            },
            {
                "codigo_ibge": 2104651,
                "nome": "Governador Newton Bello"
            },
            {
                "codigo_ibge": 2104677,
                "nome": "Governador Nunes Freire"
            },
            {
                "codigo_ibge": 2104701,
                "nome": "Graça Aranha"
            },
            {
                "codigo_ibge": 2104800,
                "nome": "Grajaú"
            },
            {
                "codigo_ibge": 2104909,
                "nome": "Guimarães"
            },
            {
                "codigo_ibge": 2105005,
                "nome": "Humberto de Campos"
            },
            {
                "codigo_ibge": 2105104,
                "nome": "Icatu"
            },
            {
                "codigo_ibge": 2105153,
                "nome": "Igarapé do Meio"
            },
            {
                "codigo_ibge": 2105203,
                "nome": "Igarapé Grande"
            },
            {
                "codigo_ibge": 2105302,
                "nome": "Imperatriz"
            },
            {
                "codigo_ibge": 2105351,
                "nome": "Itaipava do Grajaú"
            },
            {
                "codigo_ibge": 2105401,
                "nome": "Itapecuru Mirim"
            },
            {
                "codigo_ibge": 2105427,
                "nome": "Itinga do Maranhão"
            },
            {
                "codigo_ibge": 2105450,
                "nome": "Jatobá"
            },
            {
                "codigo_ibge": 2105476,
                "nome": "Jenipapo dos Vieiras"
            },
            {
                "codigo_ibge": 2105500,
                "nome": "João Lisboa"
            },
            {
                "codigo_ibge": 2105609,
                "nome": "Joselândia"
            },
            {
                "codigo_ibge": 2105658,
                "nome": "Junco do Maranhão"
            },
            {
                "codigo_ibge": 2105708,
                "nome": "Lago da Pedra"
            },
            {
                "codigo_ibge": 2105807,
                "nome": "Lago do Junco"
            },
            {
                "codigo_ibge": 2105948,
                "nome": "Lago dos Rodrigues"
            },
            {
                "codigo_ibge": 2105906,
                "nome": "Lago Verde"
            },
            {
                "codigo_ibge": 2105922,
                "nome": "Lagoa do Mato"
            },
            {
                "codigo_ibge": 2105963,
                "nome": "Lagoa Grande do Maranhão"
            },
            {
                "codigo_ibge": 2105989,
                "nome": "Lajeado Novo"
            },
            {
                "codigo_ibge": 2106003,
                "nome": "Lima Campos"
            },
            {
                "codigo_ibge": 2106102,
                "nome": "Loreto"
            },
            {
                "codigo_ibge": 2106201,
                "nome": "Luís Domingues"
            },
            {
                "codigo_ibge": 2106300,
                "nome": "Magalhães de Almeida"
            },
            {
                "codigo_ibge": 2106326,
                "nome": "Maracaçumé"
            },
            {
                "codigo_ibge": 2106359,
                "nome": "Marajá do Sena"
            },
            {
                "codigo_ibge": 2106375,
                "nome": "Maranhãozinho"
            },
            {
                "codigo_ibge": 2106409,
                "nome": "Mata Roma"
            },
            {
                "codigo_ibge": 2106508,
                "nome": "Matinha"
            },
            {
                "codigo_ibge": 2106607,
                "nome": "Matões"
            },
            {
                "codigo_ibge": 2106631,
                "nome": "Matões do Norte"
            },
            {
                "codigo_ibge": 2106672,
                "nome": "Milagres do Maranhão"
            },
            {
                "codigo_ibge": 2106706,
                "nome": "Mirador"
            },
            {
                "codigo_ibge": 2106755,
                "nome": "Miranda do Norte"
            },
            {
                "codigo_ibge": 2106805,
                "nome": "Mirinzal"
            },
            {
                "codigo_ibge": 2106904,
                "nome": "Monção"
            },
            {
                "codigo_ibge": 2107001,
                "nome": "Montes Altos"
            },
            {
                "codigo_ibge": 2107100,
                "nome": "Morros"
            },
            {
                "codigo_ibge": 2107209,
                "nome": "Nina Rodrigues"
            },
            {
                "codigo_ibge": 2107258,
                "nome": "Nova Colinas"
            },
            {
                "codigo_ibge": 2107308,
                "nome": "Nova Iorque"
            },
            {
                "codigo_ibge": 2107357,
                "nome": "Nova Olinda do Maranhão"
            },
            {
                "codigo_ibge": 2107407,
                "nome": "Olho d'Água das Cunhãs"
            },
            {
                "codigo_ibge": 2107456,
                "nome": "Olinda Nova do Maranhão"
            },
            {
                "codigo_ibge": 2107506,
                "nome": "Paço do Lumiar"
            },
            {
                "codigo_ibge": 2107605,
                "nome": "Palmeirândia"
            },
            {
                "codigo_ibge": 2107704,
                "nome": "Paraibano"
            },
            {
                "codigo_ibge": 2107803,
                "nome": "Parnarama"
            },
            {
                "codigo_ibge": 2107902,
                "nome": "Passagem Franca"
            },
            {
                "codigo_ibge": 2108009,
                "nome": "Pastos Bons"
            },
            {
                "codigo_ibge": 2108058,
                "nome": "Paulino Neves"
            },
            {
                "codigo_ibge": 2108108,
                "nome": "Paulo Ramos"
            },
            {
                "codigo_ibge": 2108207,
                "nome": "Pedreiras"
            },
            {
                "codigo_ibge": 2108256,
                "nome": "Pedro do Rosário"
            },
            {
                "codigo_ibge": 2108306,
                "nome": "Penalva"
            },
            {
                "codigo_ibge": 2108405,
                "nome": "Peri Mirim"
            },
            {
                "codigo_ibge": 2108454,
                "nome": "Peritoró"
            },
            {
                "codigo_ibge": 2108504,
                "nome": "Pindaré-Mirim"
            },
            {
                "codigo_ibge": 2108603,
                "nome": "Pinheiro"
            },
            {
                "codigo_ibge": 2108702,
                "nome": "Pio XII"
            },
            {
                "codigo_ibge": 2108801,
                "nome": "Pirapemas"
            },
            {
                "codigo_ibge": 2108900,
                "nome": "Poção de Pedras"
            },
            {
                "codigo_ibge": 2109007,
                "nome": "Porto Franco"
            },
            {
                "codigo_ibge": 2109056,
                "nome": "Porto Rico do Maranhão"
            },
            {
                "codigo_ibge": 2109106,
                "nome": "Presidente Dutra"
            },
            {
                "codigo_ibge": 2109205,
                "nome": "Presidente Juscelino"
            },
            {
                "codigo_ibge": 2109239,
                "nome": "Presidente Médici"
            },
            {
                "codigo_ibge": 2109270,
                "nome": "Presidente Sarney"
            },
            {
                "codigo_ibge": 2109304,
                "nome": "Presidente Vargas"
            },
            {
                "codigo_ibge": 2109403,
                "nome": "Primeira Cruz"
            },
            {
                "codigo_ibge": 2109452,
                "nome": "Raposa"
            },
            {
                "codigo_ibge": 2109502,
                "nome": "Riachão"
            },
            {
                "codigo_ibge": 2109551,
                "nome": "Ribamar Fiquene"
            },
            {
                "codigo_ibge": 2109601,
                "nome": "Rosário"
            },
            {
                "codigo_ibge": 2109700,
                "nome": "Sambaíba"
            },
            {
                "codigo_ibge": 2109759,
                "nome": "Santa Filomena do Maranhão"
            },
            {
                "codigo_ibge": 2109809,
                "nome": "Santa Helena"
            },
            {
                "codigo_ibge": 2109908,
                "nome": "Santa Inês"
            },
            {
                "codigo_ibge": 2110005,
                "nome": "Santa Luzia"
            },
            {
                "codigo_ibge": 2110039,
                "nome": "Santa Luzia do Paruá"
            },
            {
                "codigo_ibge": 2110104,
                "nome": "Santa Quitéria do Maranhão"
            },
            {
                "codigo_ibge": 2110203,
                "nome": "Santa Rita"
            },
            {
                "codigo_ibge": 2110237,
                "nome": "Santana do Maranhão"
            },
            {
                "codigo_ibge": 2110278,
                "nome": "Santo Amaro do Maranhão"
            },
            {
                "codigo_ibge": 2110302,
                "nome": "Santo Antônio dos Lopes"
            },
            {
                "codigo_ibge": 2110401,
                "nome": "São Benedito do Rio Preto"
            },
            {
                "codigo_ibge": 2110500,
                "nome": "São Bento"
            },
            {
                "codigo_ibge": 2110609,
                "nome": "São Bernardo"
            },
            {
                "codigo_ibge": 2110658,
                "nome": "São Domingos do Azeitão"
            },
            {
                "codigo_ibge": 2110708,
                "nome": "São Domingos do Maranhão"
            },
            {
                "codigo_ibge": 2110807,
                "nome": "São Félix de Balsas"
            },
            {
                "codigo_ibge": 2110856,
                "nome": "São Francisco do Brejão"
            },
            {
                "codigo_ibge": 2110906,
                "nome": "São Francisco do Maranhão"
            },
            {
                "codigo_ibge": 2111003,
                "nome": "São João Batista"
            },
            {
                "codigo_ibge": 2111029,
                "nome": "São João do Carú"
            },
            {
                "codigo_ibge": 2111052,
                "nome": "São João do Paraíso"
            },
            {
                "codigo_ibge": 2111078,
                "nome": "São João do Soter"
            },
            {
                "codigo_ibge": 2111102,
                "nome": "São João dos Patos"
            },
            {
                "codigo_ibge": 2111201,
                "nome": "São José de Ribamar"
            },
            {
                "codigo_ibge": 2111250,
                "nome": "São José dos Basílios"
            },
            {
                "codigo_ibge": 2111300,
                "nome": "São Luís"
            },
            {
                "codigo_ibge": 2111409,
                "nome": "São Luís Gonzaga do Maranhão"
            },
            {
                "codigo_ibge": 2111508,
                "nome": "São Mateus do Maranhão"
            },
            {
                "codigo_ibge": 2111532,
                "nome": "São Pedro da Água Branca"
            },
            {
                "codigo_ibge": 2111573,
                "nome": "São Pedro dos Crentes"
            },
            {
                "codigo_ibge": 2111607,
                "nome": "São Raimundo das Mangabeiras"
            },
            {
                "codigo_ibge": 2111631,
                "nome": "São Raimundo do Doca Bezerra"
            },
            {
                "codigo_ibge": 2111672,
                "nome": "São Roberto"
            },
            {
                "codigo_ibge": 2111706,
                "nome": "São Vicente Ferrer"
            },
            {
                "codigo_ibge": 2111722,
                "nome": "Satubinha"
            },
            {
                "codigo_ibge": 2111748,
                "nome": "Senador Alexandre Costa"
            },
            {
                "codigo_ibge": 2111763,
                "nome": "Senador La Rocque"
            },
            {
                "codigo_ibge": 2111789,
                "nome": "Serrano do Maranhão"
            },
            {
                "codigo_ibge": 2111805,
                "nome": "Sítio Novo"
            },
            {
                "codigo_ibge": 2111904,
                "nome": "Sucupira do Norte"
            },
            {
                "codigo_ibge": 2111953,
                "nome": "Sucupira do Riachão"
            },
            {
                "codigo_ibge": 2112001,
                "nome": "Tasso Fragoso"
            },
            {
                "codigo_ibge": 2112100,
                "nome": "Timbiras"
            },
            {
                "codigo_ibge": 2112209,
                "nome": "Timon"
            },
            {
                "codigo_ibge": 2112233,
                "nome": "Trizidela do Vale"
            },
            {
                "codigo_ibge": 2112274,
                "nome": "Tufilândia"
            },
            {
                "codigo_ibge": 2112308,
                "nome": "Tuntum"
            },
            {
                "codigo_ibge": 2112407,
                "nome": "Turiaçu"
            },
            {
                "codigo_ibge": 2112456,
                "nome": "Turilândia"
            },
            {
                "codigo_ibge": 2112506,
                "nome": "Tutóia"
            },
            {
                "codigo_ibge": 2112605,
                "nome": "Urbano Santos"
            },
            {
                "codigo_ibge": 2112704,
                "nome": "Vargem Grande"
            },
            {
                "codigo_ibge": 2112803,
                "nome": "Viana"
            },
            {
                "codigo_ibge": 2112852,
                "nome": "Vila Nova dos Martírios"
            },
            {
                "codigo_ibge": 2112902,
                "nome": "Vitória do Mearim"
            },
            {
                "codigo_ibge": 2113009,
                "nome": "Vitorino Freire"
            },
            {
                "codigo_ibge": 2114007,
                "nome": "Zé Doca"
            }
        ]
    },
    "MG": {
        "nome": "Minas Gerais",
        "municipios": [
            {
                "codigo_ibge": 3100104,
                "nome": "Abadia dos Dourados"
            },
            {
                "codigo_ibge": 3100203,
                "nome": "Abaeté"
            },
            {
                "codigo_ibge": 3100302,
                "nome": "Abre Campo"
            },
            {
                "codigo_ibge": 3100401,
                "nome": "Acaiaca"
            },
            {
                "codigo_ibge": 3100500,
                "nome": "Açucena"
            },
            {
                "codigo_ibge": 3100609,
                "nome": "Água Boa"
            },
            {
                "codigo_ibge": 3100708,
                "nome": "Água Comprida"
            },
            {
                "codigo_ibge": 3100807,
                "nome": "Aguanil"
            },
            {
                "codigo_ibge": 3100906,
                "nome": "Águas Formosas"
            },
            {
                "codigo_ibge": 3101003,
                "nome": "Águas Vermelhas"
            },
            {
                "codigo_ibge": 3101102,
                "nome": "Aimorés"
            },
            {
                "codigo_ibge": 3101201,
                "nome": "Aiuruoca"
            },
            {
                "codigo_ibge": 3101300,
                "nome": "Alagoa"
            },
            {
                "codigo_ibge": 3101409,
                "nome": "Albertina"
            },
            {
                "codigo_ibge": 3101508,
                "nome": "Além Paraíba"
            },
            {
                "codigo_ibge": 3101607,
                "nome": "Alfenas"
            },
            {
                "codigo_ibge": 3101631,
                "nome": "Alfredo Vasconcelos"
            },
            {
                "codigo_ibge": 3101706,
                "nome": "Almenara"
            },
            {
                "codigo_ibge": 3101805,
                "nome": "Alpercata"
            },
            {
                "codigo_ibge": 3101904,
                "nome": "Alpinópolis"
            },
            {
                "codigo_ibge": 3102001,
                "nome": "Alterosa"
            },
            {
                "codigo_ibge": 3102050,
                "nome": "Alto Caparaó"
            },
            {
                "codigo_ibge": 3153509,
                "nome": "Alto Jequitibá"
            },
            {
                "codigo_ibge": 3102100,
                "nome": "Alto Rio Doce"
            },
            {
                "codigo_ibge": 3102209,
                "nome": "Alvarenga"
            },
            {
                "codigo_ibge": 3102308,
                "nome": "Alvinópolis"
            },
            {
                "codigo_ibge": 3102407,
                "nome": "Alvorada de Minas"
            },
            {
                "codigo_ibge": 3102506,
                "nome": "Amparo do Serra"
            },
            {
                "codigo_ibge": 3102605,
                "nome": "Andradas"
            },
            {
                "codigo_ibge": 3102803,
                "nome": "Andrelândia"
            },
            {
                "codigo_ibge": 3102852,
                "nome": "Angelândia"
            },
            {
                "codigo_ibge": 3102902,
                "nome": "Antônio Carlos"
            },
            {
                "codigo_ibge": 3103009,
                "nome": "Antônio Dias"
            },
            {
                "codigo_ibge": 3103108,
                "nome": "Antônio Prado de Minas"
            },
            {
                "codigo_ibge": 3103207,
                "nome": "Araçaí"
            },
            {
                "codigo_ibge": 3103306,
                "nome": "Aracitaba"
            },
            {
                "codigo_ibge": 3103405,
                "nome": "Araçuaí"
            },
            {
                "codigo_ibge": 3103504,
                "nome": "Araguari"
            },
            {
                "codigo_ibge": 3103603,
                "nome": "Arantina"
            },
            {
                "codigo_ibge": 3103702,
                "nome": "Araponga"
            },
            {
                "codigo_ibge": 3103751,
                "nome": "Araporã"
            },
            {
                "codigo_ibge": 3103801,
                "nome": "Arapuá"
            },
            {
                "codigo_ibge": 3103900,
                "nome": "Araújos"
            },
            {
                "codigo_ibge": 3104007,
                "nome": "Araxá"
            },
            {
                "codigo_ibge": 3104106,
                "nome": "Arceburgo"
            },
            {
                "codigo_ibge": 3104205,
                "nome": "Arcos"
            },
            {
                "codigo_ibge": 3104304,
                "nome": "Areado"
            },
            {
                "codigo_ibge": 3104403,
                "nome": "Argirita"
            },
            {
                "codigo_ibge": 3104452,
                "nome": "Aricanduva"
            },
            {
                "codigo_ibge": 3104502,
                "nome": "Arinos"
            },
            {
                "codigo_ibge": 3104601,
                "nome": "Astolfo Dutra"
            },
            {
                "codigo_ibge": 3104700,
                "nome": "Ataléia"
            },
            {
                "codigo_ibge": 3104809,
                "nome": "Augusto de Lima"
            },
            {
                "codigo_ibge": 3104908,
                "nome": "Baependi"
            },
            {
                "codigo_ibge": 3105004,
                "nome": "Baldim"
            },
            {
                "codigo_ibge": 3105103,
                "nome": "Bambuí"
            },
            {
                "codigo_ibge": 3105202,
                "nome": "Bandeira"
            },
            {
                "codigo_ibge": 3105301,
                "nome": "Bandeira do Sul"
            },
            {
                "codigo_ibge": 3105400,
                "nome": "Barão de Cocais"
            },
            {
                "codigo_ibge": 3105509,
                "nome": "Barão de Monte Alto"
            },
            {
                "codigo_ibge": 3105608,
                "nome": "Barbacena"
            },
            {
                "codigo_ibge": 3105707,
                "nome": "Barra Longa"
            },
            {
                "codigo_ibge": 3105905,
                "nome": "Barroso"
            },
            {
                "codigo_ibge": 3106002,
                "nome": "Bela Vista de Minas"
            },
            {
                "codigo_ibge": 3106101,
                "nome": "Belmiro Braga"
            },
            {
                "codigo_ibge": 3106200,
                "nome": "Belo Horizonte"
            },
            {
                "codigo_ibge": 3106309,
                "nome": "Belo Oriente"
            },
            {
                "codigo_ibge": 3106408,
                "nome": "Belo Vale"
            },
            {
                "codigo_ibge": 3106507,
                "nome": "Berilo"
            },
            {
                "codigo_ibge": 3106655,
                "nome": "Berizal"
            },
            {
                "codigo_ibge": 3106606,
                "nome": "Bertópolis"
            },
            {
                "codigo_ibge": 3106705,
                "nome": "Betim"
            },
            {
                "codigo_ibge": 3106804,
                "nome": "Bias Fortes"
            },
            {
                "codigo_ibge": 3106903,
                "nome": "Bicas"
            },
            {
                "codigo_ibge": 3107000,
                "nome": "Biquinhas"
            },
            {
                "codigo_ibge": 3107109,
                "nome": "Boa Esperança"
            },
            {
                "codigo_ibge": 3107208,
                "nome": "Bocaina de Minas"
            },
            {
                "codigo_ibge": 3107307,
                "nome": "Bocaiúva"
            },
            {
                "codigo_ibge": 3107406,
                "nome": "Bom Despacho"
            },
            {
                "codigo_ibge": 3107505,
                "nome": "Bom Jardim de Minas"
            },
            {
                "codigo_ibge": 3107604,
                "nome": "Bom Jesus da Penha"
            },
            {
                "codigo_ibge": 3107703,
                "nome": "Bom Jesus do Amparo"
            },
            {
                "codigo_ibge": 3107802,
                "nome": "Bom Jesus do Galho"
            },
            {
                "codigo_ibge": 3107901,
                "nome": "Bom Repouso"
            },
            {
                "codigo_ibge": 3108008,
                "nome": "Bom Sucesso"
            },
            {
                "codigo_ibge": 3108107,
                "nome": "Bonfim"
            },
            {
                "codigo_ibge": 3108206,
                "nome": "Bonfinópolis de Minas"
            },
            {
                "codigo_ibge": 3108255,
                "nome": "Bonito de Minas"
            },
            {
                "codigo_ibge": 3108305,
                "nome": "Borda da Mata"
            },
            {
                "codigo_ibge": 3108404,
                "nome": "Botelhos"
            },
            {
                "codigo_ibge": 3108503,
                "nome": "Botumirim"
            },
            {
                "codigo_ibge": 3108701,
                "nome": "Brás Pires"
            },
            {
                "codigo_ibge": 3108552,
                "nome": "Brasilândia de Minas"
            },
            {
                "codigo_ibge": 3108602,
                "nome": "Brasília de Minas"
            },
            {
                "codigo_ibge": 3108800,
                "nome": "Braúnas"
            },
            {
                "codigo_ibge": 3108909,
                "nome": "Brazópolis"
            },
            {
                "codigo_ibge": 3109006,
                "nome": "Brumadinho"
            },
            {
                "codigo_ibge": 3109105,
                "nome": "Bueno Brandão"
            },
            {
                "codigo_ibge": 3109204,
                "nome": "Buenópolis"
            },
            {
                "codigo_ibge": 3109253,
                "nome": "Bugre"
            },
            {
                "codigo_ibge": 3109303,
                "nome": "Buritis"
            },
            {
                "codigo_ibge": 3109402,
                "nome": "Buritizeiro"
            },
            {
                "codigo_ibge": 3109451,
                "nome": "Cabeceira Grande"
            },
            {
                "codigo_ibge": 3109501,
                "nome": "Cabo Verde"
            },
            {
                "codigo_ibge": 3109600,
                "nome": "Cachoeira da Prata"
            },
            {
                "codigo_ibge": 3109709,
                "nome": "Cachoeira de Minas"
            },
            {
                "codigo_ibge": 3102704,
                "nome": "Cachoeira de Pajeú"
            },
            {
                "codigo_ibge": 3109808,
                "nome": "Cachoeira Dourada"
            },
            {
                "codigo_ibge": 3109907,
                "nome": "Caetanópolis"
            },
            {
                "codigo_ibge": 3110004,
                "nome": "Caeté"
            },
            {
                "codigo_ibge": 3110103,
                "nome": "Caiana"
            },
            {
                "codigo_ibge": 3110202,
                "nome": "Cajuri"
            },
            {
                "codigo_ibge": 3110301,
                "nome": "Caldas"
            },
            {
                "codigo_ibge": 3110400,
                "nome": "Camacho"
            },
            {
                "codigo_ibge": 3110509,
                "nome": "Camanducaia"
            },
            {
                "codigo_ibge": 3110608,
                "nome": "Cambuí"
            },
            {
                "codigo_ibge": 3110707,
                "nome": "Cambuquira"
            },
            {
                "codigo_ibge": 3110806,
                "nome": "Campanário"
            },
            {
                "codigo_ibge": 3110905,
                "nome": "Campanha"
            },
            {
                "codigo_ibge": 3111002,
                "nome": "Campestre"
            },
            {
                "codigo_ibge": 3111101,
                "nome": "Campina Verde"
            },
            {
                "codigo_ibge": 3111150,
                "nome": "Campo Azul"
            },
            {
                "codigo_ibge": 3111200,
                "nome": "Campo Belo"
            },
            {
                "codigo_ibge": 3111309,
                "nome": "Campo do Meio"
            },
            {
                "codigo_ibge": 3111408,
                "nome": "Campo Florido"
            },
            {
                "codigo_ibge": 3111507,
                "nome": "Campos Altos"
            },
            {
                "codigo_ibge": 3111606,
                "nome": "Campos Gerais"
            },
            {
                "codigo_ibge": 3111903,
                "nome": "Cana Verde"
            },
            {
                "codigo_ibge": 3111705,
                "nome": "Canaã"
            },
            {
                "codigo_ibge": 3111804,
                "nome": "Canápolis"
            },
            {
                "codigo_ibge": 3112000,
                "nome": "Candeias"
            },
            {
                "codigo_ibge": 3112059,
                "nome": "Cantagalo"
            },
            {
                "codigo_ibge": 3112109,
                "nome": "Caparaó"
            },
            {
                "codigo_ibge": 3112208,
                "nome": "Capela Nova"
            },
            {
                "codigo_ibge": 3112307,
                "nome": "Capelinha"
            },
            {
                "codigo_ibge": 3112406,
                "nome": "Capetinga"
            },
            {
                "codigo_ibge": 3112505,
                "nome": "Capim Branco"
            },
            {
                "codigo_ibge": 3112604,
                "nome": "Capinópolis"
            },
            {
                "codigo_ibge": 3112653,
                "nome": "Capitão Andrade"
            },
            {
                "codigo_ibge": 3112703,
                "nome": "Capitão Enéas"
            },
            {
                "codigo_ibge": 3112802,
                "nome": "Capitólio"
            },
            {
                "codigo_ibge": 3112901,
                "nome": "Caputira"
            },
            {
                "codigo_ibge": 3113008,
                "nome": "Caraí"
            },
            {
                "codigo_ibge": 3113107,
                "nome": "Caranaíba"
            },
            {
                "codigo_ibge": 3113206,
                "nome": "Carandaí"
            },
            {
                "codigo_ibge": 3113305,
                "nome": "Carangola"
            },
            {
                "codigo_ibge": 3113404,
                "nome": "Caratinga"
            },
            {
                "codigo_ibge": 3113503,
                "nome": "Carbonita"
            },
            {
                "codigo_ibge": 3113602,
                "nome": "Careaçu"
            },
            {
                "codigo_ibge": 3113701,
                "nome": "Carlos Chagas"
            },
            {
                "codigo_ibge": 3113800,
                "nome": "Carmésia"
            },
            {
                "codigo_ibge": 3113909,
                "nome": "Carmo da Cachoeira"
            },
            {
                "codigo_ibge": 3114006,
                "nome": "Carmo da Mata"
            },
            {
                "codigo_ibge": 3114105,
                "nome": "Carmo de Minas"
            },
            {
                "codigo_ibge": 3114204,
                "nome": "Carmo do Cajuru"
            },
            {
                "codigo_ibge": 3114303,
                "nome": "Carmo do Paranaíba"
            },
            {
                "codigo_ibge": 3114402,
                "nome": "Carmo do Rio Claro"
            },
            {
                "codigo_ibge": 3114501,
                "nome": "Carmópolis de Minas"
            },
            {
                "codigo_ibge": 3114550,
                "nome": "Carneirinho"
            },
            {
                "codigo_ibge": 3114600,
                "nome": "Carrancas"
            },
            {
                "codigo_ibge": 3114709,
                "nome": "Carvalhópolis"
            },
            {
                "codigo_ibge": 3114808,
                "nome": "Carvalhos"
            },
            {
                "codigo_ibge": 3114907,
                "nome": "Casa Grande"
            },
            {
                "codigo_ibge": 3115003,
                "nome": "Cascalho Rico"
            },
            {
                "codigo_ibge": 3115102,
                "nome": "Cássia"
            },
            {
                "codigo_ibge": 3115300,
                "nome": "Cataguases"
            },
            {
                "codigo_ibge": 3115359,
                "nome": "Catas Altas"
            },
            {
                "codigo_ibge": 3115409,
                "nome": "Catas Altas da Noruega"
            },
            {
                "codigo_ibge": 3115458,
                "nome": "Catuji"
            },
            {
                "codigo_ibge": 3115474,
                "nome": "Catuti"
            },
            {
                "codigo_ibge": 3115508,
                "nome": "Caxambu"
            },
            {
                "codigo_ibge": 3115607,
                "nome": "Cedro do Abaeté"
            },
            {
                "codigo_ibge": 3115706,
                "nome": "Central de Minas"
            },
            {
                "codigo_ibge": 3115805,
                "nome": "Centralina"
            },
            {
                "codigo_ibge": 3115904,
                "nome": "Chácara"
            },
            {
                "codigo_ibge": 3116001,
                "nome": "Chalé"
            },
            {
                "codigo_ibge": 3116100,
                "nome": "Chapada do Norte"
            },
            {
                "codigo_ibge": 3116159,
                "nome": "Chapada Gaúcha"
            },
            {
                "codigo_ibge": 3116209,
                "nome": "Chiador"
            },
            {
                "codigo_ibge": 3116308,
                "nome": "Cipotânea"
            },
            {
                "codigo_ibge": 3116407,
                "nome": "Claraval"
            },
            {
                "codigo_ibge": 3116506,
                "nome": "Claro dos Poções"
            },
            {
                "codigo_ibge": 3116605,
                "nome": "Cláudio"
            },
            {
                "codigo_ibge": 3116704,
                "nome": "Coimbra"
            },
            {
                "codigo_ibge": 3116803,
                "nome": "Coluna"
            },
            {
                "codigo_ibge": 3116902,
                "nome": "Comendador Gomes"
            },
            {
                "codigo_ibge": 3117009,
                "nome": "Comercinho"
            },
            {
                "codigo_ibge": 3117108,
                "nome": "Conceição da Aparecida"
            },
            {
                "codigo_ibge": 3115201,
                "nome": "Conceição da Barra de Minas"
            },
            {
                "codigo_ibge": 3117306,
                "nome": "Conceição das Alagoas"
            },
            {
                "codigo_ibge": 3117207,
                "nome": "Conceição das Pedras"
            },
            {
                "codigo_ibge": 3117405,
                "nome": "Conceição de Ipanema"
            },
            {
                "codigo_ibge": 3117504,
                "nome": "Conceição do Mato Dentro"
            },
            {
                "codigo_ibge": 3117603,
                "nome": "Conceição do Pará"
            },
            {
                "codigo_ibge": 3117702,
                "nome": "Conceição do Rio Verde"
            },
            {
                "codigo_ibge": 3117801,
                "nome": "Conceição dos Ouros"
            },
            {
                "codigo_ibge": 3117836,
                "nome": "Cônego Marinho"
            },
            {
                "codigo_ibge": 3117876,
                "nome": "Confins"
            },
            {
                "codigo_ibge": 3117900,
                "nome": "Congonhal"
            },
            {
                "codigo_ibge": 3118007,
                "nome": "Congonhas"
            },
            {
                "codigo_ibge": 3118106,
                "nome": "Congonhas do Norte"
            },
            {
                "codigo_ibge": 3118205,
                "nome": "Conquista"
            },
            {
                "codigo_ibge": 3118304,
                "nome": "Conselheiro Lafaiete"
            },
            {
                "codigo_ibge": 3118403,
                "nome": "Conselheiro Pena"
            },
            {
                "codigo_ibge": 3118502,
                "nome": "Consolação"
            },
            {
                "codigo_ibge": 3118601,
                "nome": "Contagem"
            },
            {
                "codigo_ibge": 3118700,
                "nome": "Coqueiral"
            },
            {
                "codigo_ibge": 3118809,
                "nome": "Coração de Jesus"
            },
            {
                "codigo_ibge": 3118908,
                "nome": "Cordisburgo"
            },
            {
                "codigo_ibge": 3119005,
                "nome": "Cordislândia"
            },
            {
                "codigo_ibge": 3119104,
                "nome": "Corinto"
            },
            {
                "codigo_ibge": 3119203,
                "nome": "Coroaci"
            },
            {
                "codigo_ibge": 3119302,
                "nome": "Coromandel"
            },
            {
                "codigo_ibge": 3119401,
                "nome": "Coronel Fabriciano"
            },
            {
                "codigo_ibge": 3119500,
                "nome": "Coronel Murta"
            },
            {
                "codigo_ibge": 3119609,
                "nome": "Coronel Pacheco"
            },
            {
                "codigo_ibge": 3119708,
                "nome": "Coronel Xavier Chaves"
            },
            {
                "codigo_ibge": 3119807,
                "nome": "Córrego Danta"
            },
            {
                "codigo_ibge": 3119906,
                "nome": "Córrego do Bom Jesus"
            },
            {
                "codigo_ibge": 3119955,
                "nome": "Córrego Fundo"
            },
            {
                "codigo_ibge": 3120003,
                "nome": "Córrego Novo"
            },
            {
                "codigo_ibge": 3120102,
                "nome": "Couto de Magalhães de Minas"
            },
            {
                "codigo_ibge": 3120151,
                "nome": "Crisólita"
            },
            {
                "codigo_ibge": 3120201,
                "nome": "Cristais"
            },
            {
                "codigo_ibge": 3120300,
                "nome": "Cristália"
            },
            {
                "codigo_ibge": 3120409,
                "nome": "Cristiano Otoni"
            },
            {
                "codigo_ibge": 3120508,
                "nome": "Cristina"
            },
            {
                "codigo_ibge": 3120607,
                "nome": "Crucilândia"
            },
            {
                "codigo_ibge": 3120706,
                "nome": "Cruzeiro da Fortaleza"
            },
            {
                "codigo_ibge": 3120805,
                "nome": "Cruzília"
            },
            {
                "codigo_ibge": 3120839,
                "nome": "Cuparaque"
            },
            {
                "codigo_ibge": 3120870,
                "nome": "Curral de Dentro"
            },
            {
                "codigo_ibge": 3120904,
                "nome": "Curvelo"
            },
            {
                "codigo_ibge": 3121001,
                "nome": "Datas"
            },
            {
                "codigo_ibge": 3121100,
                "nome": "Delfim Moreira"
            },
            {
                "codigo_ibge": 3121209,
                "nome": "Delfinópolis"
            },
            {
                "codigo_ibge": 3121258,
                "nome": "Delta"
            },
            {
                "codigo_ibge": 3121308,
                "nome": "Descoberto"
            },
            {
                "codigo_ibge": 3121407,
                "nome": "Desterro de Entre Rios"
            },
            {
                "codigo_ibge": 3121506,
                "nome": "Desterro do Melo"
            },
            {
                "codigo_ibge": 3121605,
                "nome": "Diamantina"
            },
            {
                "codigo_ibge": 3121704,
                "nome": "Diogo de Vasconcelos"
            },
            {
                "codigo_ibge": 3121803,
                "nome": "Dionísio"
            },
            {
                "codigo_ibge": 3121902,
                "nome": "Divinésia"
            },
            {
                "codigo_ibge": 3122009,
                "nome": "Divino"
            },
            {
                "codigo_ibge": 3122108,
                "nome": "Divino das Laranjeiras"
            },
            {
                "codigo_ibge": 3122207,
                "nome": "Divinolândia de Minas"
            },
            {
                "codigo_ibge": 3122306,
                "nome": "Divinópolis"
            },
            {
                "codigo_ibge": 3122355,
                "nome": "Divisa Alegre"
            },
            {
                "codigo_ibge": 3122405,
                "nome": "Divisa Nova"
            },
            {
                "codigo_ibge": 3122454,
                "nome": "Divisópolis"
            },
            {
                "codigo_ibge": 3122470,
                "nome": "Dom Bosco"
            },
            {
                "codigo_ibge": 3122504,
                "nome": "Dom Cavati"
            },
            {
                "codigo_ibge": 3122603,
                "nome": "Dom Joaquim"
            },
            {
                "codigo_ibge": 3122702,
                "nome": "Dom Silvério"
            },
            {
                "codigo_ibge": 3122801,
                "nome": "Dom Viçoso"
            },
            {
                "codigo_ibge": 3122900,
                "nome": "Dona Eusébia"
            },
            {
                "codigo_ibge": 3123007,
                "nome": "Dores de Campos"
            },
            {
                "codigo_ibge": 3123106,
                "nome": "Dores de Guanhães"
            },
            {
                "codigo_ibge": 3123205,
                "nome": "Dores do Indaiá"
            },
            {
                "codigo_ibge": 3123304,
                "nome": "Dores do Turvo"
            },
            {
                "codigo_ibge": 3123403,
                "nome": "Doresópolis"
            },
            {
                "codigo_ibge": 3123502,
                "nome": "Douradoquara"
            },
            {
                "codigo_ibge": 3123528,
                "nome": "Durandé"
            },
            {
                "codigo_ibge": 3123601,
                "nome": "Elói Mendes"
            },
            {
                "codigo_ibge": 3123700,
                "nome": "Engenheiro Caldas"
            },
            {
                "codigo_ibge": 3123809,
                "nome": "Engenheiro Navarro"
            },
            {
                "codigo_ibge": 3123858,
                "nome": "Entre Folhas"
            },
            {
                "codigo_ibge": 3123908,
                "nome": "Entre Rios de Minas"
            },
            {
                "codigo_ibge": 3124005,
                "nome": "Ervália"
            },
            {
                "codigo_ibge": 3124104,
                "nome": "Esmeraldas"
            },
            {
                "codigo_ibge": 3124203,
                "nome": "Espera Feliz"
            },
            {
                "codigo_ibge": 3124302,
                "nome": "Espinosa"
            },
            {
                "codigo_ibge": 3124401,
                "nome": "Espírito Santo do Dourado"
            },
            {
                "codigo_ibge": 3124500,
                "nome": "Estiva"
            },
            {
                "codigo_ibge": 3124609,
                "nome": "Estrela Dalva"
            },
            {
                "codigo_ibge": 3124708,
                "nome": "Estrela do Indaiá"
            },
            {
                "codigo_ibge": 3124807,
                "nome": "Estrela do Sul"
            },
            {
                "codigo_ibge": 3124906,
                "nome": "Eugenópolis"
            },
            {
                "codigo_ibge": 3125002,
                "nome": "Ewbank da Câmara"
            },
            {
                "codigo_ibge": 3125101,
                "nome": "Extrema"
            },
            {
                "codigo_ibge": 3125200,
                "nome": "Fama"
            },
            {
                "codigo_ibge": 3125309,
                "nome": "Faria Lemos"
            },
            {
                "codigo_ibge": 3125408,
                "nome": "Felício dos Santos"
            },
            {
                "codigo_ibge": 3125606,
                "nome": "Felisburgo"
            },
            {
                "codigo_ibge": 3125705,
                "nome": "Felixlândia"
            },
            {
                "codigo_ibge": 3125804,
                "nome": "Fernandes Tourinho"
            },
            {
                "codigo_ibge": 3125903,
                "nome": "Ferros"
            },
            {
                "codigo_ibge": 3125952,
                "nome": "Fervedouro"
            },
            {
                "codigo_ibge": 3126000,
                "nome": "Florestal"
            },
            {
                "codigo_ibge": 3126109,
                "nome": "Formiga"
            },
            {
                "codigo_ibge": 3126208,
                "nome": "Formoso"
            },
            {
                "codigo_ibge": 3126307,
                "nome": "Fortaleza de Minas"
            },
            {
                "codigo_ibge": 3126406,
                "nome": "Fortuna de Minas"
            },
            {
                "codigo_ibge": 3126505,
                "nome": "Francisco Badaró"
            },
            {
                "codigo_ibge": 3126604,
                "nome": "Francisco Dumont"
            },
            {
                "codigo_ibge": 3126703,
                "nome": "Francisco Sá"
            },
            {
                "codigo_ibge": 3126752,
                "nome": "Franciscópolis"
            },
            {
                "codigo_ibge": 3126802,
                "nome": "Frei Gaspar"
            },
            {
                "codigo_ibge": 3126901,
                "nome": "Frei Inocêncio"
            },
            {
                "codigo_ibge": 3126950,
                "nome": "Frei Lagonegro"
            },
            {
                "codigo_ibge": 3127008,
                "nome": "Fronteira"
            },
            {
                "codigo_ibge": 3127057,
                "nome": "Fronteira dos Vales"
            },
            {
                "codigo_ibge": 3127073,
                "nome": "Fruta de Leite"
            },
            {
                "codigo_ibge": 3127107,
                "nome": "Frutal"
            },
            {
                "codigo_ibge": 3127206,
                "nome": "Funilândia"
            },
            {
                "codigo_ibge": 3127305,
                "nome": "Galiléia"
            },
            {
                "codigo_ibge": 3127339,
                "nome": "Gameleiras"
            },
            {
                "codigo_ibge": 3127354,
                "nome": "Glaucilândia"
            },
            {
                "codigo_ibge": 3127370,
                "nome": "Goiabeira"
            },
            {
                "codigo_ibge": 3127388,
                "nome": "Goianá"
            },
            {
                "codigo_ibge": 3127404,
                "nome": "Gonçalves"
            },
            {
                "codigo_ibge": 3127503,
                "nome": "Gonzaga"
            },
            {
                "codigo_ibge": 3127602,
                "nome": "Gouveia"
            },
            {
                "codigo_ibge": 3127701,
                "nome": "Governador Valadares"
            },
            {
                "codigo_ibge": 3127800,
                "nome": "Grão Mogol"
            },
            {
                "codigo_ibge": 3127909,
                "nome": "Grupiara"
            },
            {
                "codigo_ibge": 3128006,
                "nome": "Guanhães"
            },
            {
                "codigo_ibge": 3128105,
                "nome": "Guapé"
            },
            {
                "codigo_ibge": 3128204,
                "nome": "Guaraciaba"
            },
            {
                "codigo_ibge": 3128253,
                "nome": "Guaraciama"
            },
            {
                "codigo_ibge": 3128303,
                "nome": "Guaranésia"
            },
            {
                "codigo_ibge": 3128402,
                "nome": "Guarani"
            },
            {
                "codigo_ibge": 3128501,
                "nome": "Guarará"
            },
            {
                "codigo_ibge": 3128600,
                "nome": "Guarda-Mor"
            },
            {
                "codigo_ibge": 3128709,
                "nome": "Guaxupé"
            },
            {
                "codigo_ibge": 3128808,
                "nome": "Guidoval"
            },
            {
                "codigo_ibge": 3128907,
                "nome": "Guimarânia"
            },
            {
                "codigo_ibge": 3129004,
                "nome": "Guiricema"
            },
            {
                "codigo_ibge": 3129103,
                "nome": "Gurinhatã"
            },
            {
                "codigo_ibge": 3129202,
                "nome": "Heliodora"
            },
            {
                "codigo_ibge": 3129301,
                "nome": "Iapu"
            },
            {
                "codigo_ibge": 3129400,
                "nome": "Ibertioga"
            },
            {
                "codigo_ibge": 3129509,
                "nome": "Ibiá"
            },
            {
                "codigo_ibge": 3129608,
                "nome": "Ibiaí"
            },
            {
                "codigo_ibge": 3129657,
                "nome": "Ibiracatu"
            },
            {
                "codigo_ibge": 3129707,
                "nome": "Ibiraci"
            },
            {
                "codigo_ibge": 3129806,
                "nome": "Ibirité"
            },
            {
                "codigo_ibge": 3129905,
                "nome": "Ibitiúra de Minas"
            },
            {
                "codigo_ibge": 3130002,
                "nome": "Ibituruna"
            },
            {
                "codigo_ibge": 3130051,
                "nome": "Icaraí de Minas"
            },
            {
                "codigo_ibge": 3130101,
                "nome": "Igarapé"
            },
            {
                "codigo_ibge": 3130200,
                "nome": "Igaratinga"
            },
            {
                "codigo_ibge": 3130309,
                "nome": "Iguatama"
            },
            {
                "codigo_ibge": 3130408,
                "nome": "Ijaci"
            },
            {
                "codigo_ibge": 3130507,
                "nome": "Ilicínea"
            },
            {
                "codigo_ibge": 3130556,
                "nome": "Imbé de Minas"
            },
            {
                "codigo_ibge": 3130606,
                "nome": "Inconfidentes"
            },
            {
                "codigo_ibge": 3130655,
                "nome": "Indaiabira"
            },
            {
                "codigo_ibge": 3130705,
                "nome": "Indianópolis"
            },
            {
                "codigo_ibge": 3130804,
                "nome": "Ingaí"
            },
            {
                "codigo_ibge": 3130903,
                "nome": "Inhapim"
            },
            {
                "codigo_ibge": 3131000,
                "nome": "Inhaúma"
            },
            {
                "codigo_ibge": 3131109,
                "nome": "Inimutaba"
            },
            {
                "codigo_ibge": 3131158,
                "nome": "Ipaba"
            },
            {
                "codigo_ibge": 3131208,
                "nome": "Ipanema"
            },
            {
                "codigo_ibge": 3131307,
                "nome": "Ipatinga"
            },
            {
                "codigo_ibge": 3131406,
                "nome": "Ipiaçu"
            },
            {
                "codigo_ibge": 3131505,
                "nome": "Ipuiúna"
            },
            {
                "codigo_ibge": 3131604,
                "nome": "Iraí de Minas"
            },
            {
                "codigo_ibge": 3131703,
                "nome": "Itabira"
            },
            {
                "codigo_ibge": 3131802,
                "nome": "Itabirinha"
            },
            {
                "codigo_ibge": 3131901,
                "nome": "Itabirito"
            },
            {
                "codigo_ibge": 3132008,
                "nome": "Itacambira"
            },
            {
                "codigo_ibge": 3132107,
                "nome": "Itacarambi"
            },
            {
                "codigo_ibge": 3132206,
                "nome": "Itaguara"
            },
            {
                "codigo_ibge": 3132305,
                "nome": "Itaipé"
            },
            {
                "codigo_ibge": 3132404,
                "nome": "Itajubá"
            },
            {
                "codigo_ibge": 3132503,
                "nome": "Itamarandiba"
            },
            {
                "codigo_ibge": 3132602,
                "nome": "Itamarati de Minas"
            },
            {
                "codigo_ibge": 3132701,
                "nome": "Itambacuri"
            },
            {
                "codigo_ibge": 3132800,
                "nome": "Itambé do Mato Dentro"
            },
            {
                "codigo_ibge": 3132909,
                "nome": "Itamogi"
            },
            {
                "codigo_ibge": 3133006,
                "nome": "Itamonte"
            },
            {
                "codigo_ibge": 3133105,
                "nome": "Itanhandu"
            },
            {
                "codigo_ibge": 3133204,
                "nome": "Itanhomi"
            },
            {
                "codigo_ibge": 3133303,
                "nome": "Itaobim"
            },
            {
                "codigo_ibge": 3133402,
                "nome": "Itapagipe"
            },
            {
                "codigo_ibge": 3133501,
                "nome": "Itapecerica"
            },
            {
                "codigo_ibge": 3133600,
                "nome": "Itapeva"
            },
            {
                "codigo_ibge": 3133709,
                "nome": "Itatiaiuçu"
            },
            {
                "codigo_ibge": 3133758,
                "nome": "Itaú de Minas"
            },
            {
                "codigo_ibge": 3133808,
                "nome": "Itaúna"
            },
            {
                "codigo_ibge": 3133907,
                "nome": "Itaverava"
            },
            {
                "codigo_ibge": 3134004,
                "nome": "Itinga"
            },
            {
                "codigo_ibge": 3134103,
                "nome": "Itueta"
            },
            {
                "codigo_ibge": 3134202,
                "nome": "Ituiutaba"
            },
            {
                "codigo_ibge": 3134301,
                "nome": "Itumirim"
            },
            {
                "codigo_ibge": 3134400,
                "nome": "Iturama"
            },
            {
                "codigo_ibge": 3134509,
                "nome": "Itutinga"
            },
            {
                "codigo_ibge": 3134608,
                "nome": "Jaboticatubas"
            },
            {
                "codigo_ibge": 3134707,
                "nome": "Jacinto"
            },
            {
                "codigo_ibge": 3134806,
                "nome": "Jacuí"
            },
            {
                "codigo_ibge": 3134905,
                "nome": "Jacutinga"
            },
            {
                "codigo_ibge": 3135001,
                "nome": "Jaguaraçu"
            },
            {
                "codigo_ibge": 3135050,
                "nome": "Jaíba"
            },
            {
                "codigo_ibge": 3135076,
                "nome": "Jampruca"
            },
            {
                "codigo_ibge": 3135100,
                "nome": "Janaúba"
            },
            {
                "codigo_ibge": 3135209,
                "nome": "Januária"
            },
            {
                "codigo_ibge": 3135308,
                "nome": "Japaraíba"
            },
            {
                "codigo_ibge": 3135357,
                "nome": "Japonvar"
            },
            {
                "codigo_ibge": 3135407,
                "nome": "Jeceaba"
            },
            {
                "codigo_ibge": 3135456,
                "nome": "Jenipapo de Minas"
            },
            {
                "codigo_ibge": 3135506,
                "nome": "Jequeri"
            },
            {
                "codigo_ibge": 3135605,
                "nome": "Jequitaí"
            },
            {
                "codigo_ibge": 3135704,
                "nome": "Jequitibá"
            },
            {
                "codigo_ibge": 3135803,
                "nome": "Jequitinhonha"
            },
            {
                "codigo_ibge": 3135902,
                "nome": "Jesuânia"
            },
            {
                "codigo_ibge": 3136009,
                "nome": "Joaíma"
            },
            {
                "codigo_ibge": 3136108,
                "nome": "Joanésia"
            },
            {
                "codigo_ibge": 3136207,
                "nome": "João Monlevade"
            },
            {
                "codigo_ibge": 3136306,
                "nome": "João Pinheiro"
            },
            {
                "codigo_ibge": 3136405,
                "nome": "Joaquim Felício"
            },
            {
                "codigo_ibge": 3136504,
                "nome": "Jordânia"
            },
            {
                "codigo_ibge": 3136520,
                "nome": "José Gonçalves de Minas"
            },
            {
                "codigo_ibge": 3136553,
                "nome": "José Raydan"
            },
            {
                "codigo_ibge": 3136579,
                "nome": "Josenópolis"
            },
            {
                "codigo_ibge": 3136652,
                "nome": "Juatuba"
            },
            {
                "codigo_ibge": 3136702,
                "nome": "Juiz de Fora"
            },
            {
                "codigo_ibge": 3136801,
                "nome": "Juramento"
            },
            {
                "codigo_ibge": 3136900,
                "nome": "Juruaia"
            },
            {
                "codigo_ibge": 3136959,
                "nome": "Juvenília"
            },
            {
                "codigo_ibge": 3137007,
                "nome": "Ladainha"
            },
            {
                "codigo_ibge": 3137106,
                "nome": "Lagamar"
            },
            {
                "codigo_ibge": 3137205,
                "nome": "Lagoa da Prata"
            },
            {
                "codigo_ibge": 3137304,
                "nome": "Lagoa dos Patos"
            },
            {
                "codigo_ibge": 3137403,
                "nome": "Lagoa Dourada"
            },
            {
                "codigo_ibge": 3137502,
                "nome": "Lagoa Formosa"
            },
            {
                "codigo_ibge": 3137536,
                "nome": "Lagoa Grande"
            },
            {
                "codigo_ibge": 3137601,
                "nome": "Lagoa Santa"
            },
            {
                "codigo_ibge": 3137700,
                "nome": "Lajinha"
            },
            {
                "codigo_ibge": 3137809,
                "nome": "Lambari"
            },
            {
                "codigo_ibge": 3137908,
                "nome": "Lamim"
            },
            {
                "codigo_ibge": 3138005,
                "nome": "Laranjal"
            },
            {
                "codigo_ibge": 3138104,
                "nome": "Lassance"
            },
            {
                "codigo_ibge": 3138203,
                "nome": "Lavras"
            },
            {
                "codigo_ibge": 3138302,
                "nome": "Leandro Ferreira"
            },
            {
                "codigo_ibge": 3138351,
                "nome": "Leme do Prado"
            },
            {
                "codigo_ibge": 3138401,
                "nome": "Leopoldina"
            },
            {
                "codigo_ibge": 3138500,
                "nome": "Liberdade"
            },
            {
                "codigo_ibge": 3138609,
                "nome": "Lima Duarte"
            },
            {
                "codigo_ibge": 3138625,
                "nome": "Limeira do Oeste"
            },
            {
                "codigo_ibge": 3138658,
                "nome": "Lontra"
            },
            {
                "codigo_ibge": 3138674,
                "nome": "Luisburgo"
            },
            {
                "codigo_ibge": 3138682,
                "nome": "Luislândia"
            },
            {
                "codigo_ibge": 3138708,
                "nome": "Luminárias"
            },
            {
                "codigo_ibge": 3138807,
                "nome": "Luz"
            },
            {
                "codigo_ibge": 3138906,
                "nome": "Machacalis"
            },
            {
                "codigo_ibge": 3139003,
                "nome": "Machado"
            },
            {
                "codigo_ibge": 3139102,
                "nome": "Madre de Deus de Minas"
            },
            {
                "codigo_ibge": 3139201,
                "nome": "Malacacheta"
            },
            {
                "codigo_ibge": 3139250,
                "nome": "Mamonas"
            },
            {
                "codigo_ibge": 3139300,
                "nome": "Manga"
            },
            {
                "codigo_ibge": 3139409,
                "nome": "Manhuaçu"
            },
            {
                "codigo_ibge": 3139508,
                "nome": "Manhumirim"
            },
            {
                "codigo_ibge": 3139607,
                "nome": "Mantena"
            },
            {
                "codigo_ibge": 3139805,
                "nome": "Mar de Espanha"
            },
            {
                "codigo_ibge": 3139706,
                "nome": "Maravilhas"
            },
            {
                "codigo_ibge": 3139904,
                "nome": "Maria da Fé"
            },
            {
                "codigo_ibge": 3140001,
                "nome": "Mariana"
            },
            {
                "codigo_ibge": 3140100,
                "nome": "Marilac"
            },
            {
                "codigo_ibge": 3140159,
                "nome": "Mário Campos"
            },
            {
                "codigo_ibge": 3140209,
                "nome": "Maripá de Minas"
            },
            {
                "codigo_ibge": 3140308,
                "nome": "Marliéria"
            },
            {
                "codigo_ibge": 3140407,
                "nome": "Marmelópolis"
            },
            {
                "codigo_ibge": 3140506,
                "nome": "Martinho Campos"
            },
            {
                "codigo_ibge": 3140530,
                "nome": "Martins Soares"
            },
            {
                "codigo_ibge": 3140555,
                "nome": "Mata Verde"
            },
            {
                "codigo_ibge": 3140605,
                "nome": "Materlândia"
            },
            {
                "codigo_ibge": 3140704,
                "nome": "Mateus Leme"
            },
            {
                "codigo_ibge": 3171501,
                "nome": "Mathias Lobato"
            },
            {
                "codigo_ibge": 3140803,
                "nome": "Matias Barbosa"
            },
            {
                "codigo_ibge": 3140852,
                "nome": "Matias Cardoso"
            },
            {
                "codigo_ibge": 3140902,
                "nome": "Matipó"
            },
            {
                "codigo_ibge": 3141009,
                "nome": "Mato Verde"
            },
            {
                "codigo_ibge": 3141108,
                "nome": "Matozinhos"
            },
            {
                "codigo_ibge": 3141207,
                "nome": "Matutina"
            },
            {
                "codigo_ibge": 3141306,
                "nome": "Medeiros"
            },
            {
                "codigo_ibge": 3141405,
                "nome": "Medina"
            },
            {
                "codigo_ibge": 3141504,
                "nome": "Mendes Pimentel"
            },
            {
                "codigo_ibge": 3141603,
                "nome": "Mercês"
            },
            {
                "codigo_ibge": 3141702,
                "nome": "Mesquita"
            },
            {
                "codigo_ibge": 3141801,
                "nome": "Minas Novas"
            },
            {
                "codigo_ibge": 3141900,
                "nome": "Minduri"
            },
            {
                "codigo_ibge": 3142007,
                "nome": "Mirabela"
            },
            {
                "codigo_ibge": 3142106,
                "nome": "Miradouro"
            },
            {
                "codigo_ibge": 3142205,
                "nome": "Miraí"
            },
            {
                "codigo_ibge": 3142254,
                "nome": "Miravânia"
            },
            {
                "codigo_ibge": 3142304,
                "nome": "Moeda"
            },
            {
                "codigo_ibge": 3142403,
                "nome": "Moema"
            },
            {
                "codigo_ibge": 3142502,
                "nome": "Monjolos"
            },
            {
                "codigo_ibge": 3142601,
                "nome": "Monsenhor Paulo"
            },
            {
                "codigo_ibge": 3142700,
                "nome": "Montalvânia"
            },
            {
                "codigo_ibge": 3142809,
                "nome": "Monte Alegre de Minas"
            },
            {
                "codigo_ibge": 3142908,
                "nome": "Monte Azul"
            },
            {
                "codigo_ibge": 3143005,
                "nome": "Monte Belo"
            },
            {
                "codigo_ibge": 3143104,
                "nome": "Monte Carmelo"
            },
            {
                "codigo_ibge": 3143153,
                "nome": "Monte Formoso"
            },
            {
                "codigo_ibge": 3143203,
                "nome": "Monte Santo de Minas"
            },
            {
                "codigo_ibge": 3143401,
                "nome": "Monte Sião"
            },
            {
                "codigo_ibge": 3143302,
                "nome": "Montes Claros"
            },
            {
                "codigo_ibge": 3143450,
                "nome": "Montezuma"
            },
            {
                "codigo_ibge": 3143500,
                "nome": "Morada Nova de Minas"
            },
            {
                "codigo_ibge": 3143609,
                "nome": "Morro da Garça"
            },
            {
                "codigo_ibge": 3143708,
                "nome": "Morro do Pilar"
            },
            {
                "codigo_ibge": 3143807,
                "nome": "Munhoz"
            },
            {
                "codigo_ibge": 3143906,
                "nome": "Muriaé"
            },
            {
                "codigo_ibge": 3144003,
                "nome": "Mutum"
            },
            {
                "codigo_ibge": 3144102,
                "nome": "Muzambinho"
            },
            {
                "codigo_ibge": 3144201,
                "nome": "Nacip Raydan"
            },
            {
                "codigo_ibge": 3144300,
                "nome": "Nanuque"
            },
            {
                "codigo_ibge": 3144359,
                "nome": "Naque"
            },
            {
                "codigo_ibge": 3144375,
                "nome": "Natalândia"
            },
            {
                "codigo_ibge": 3144409,
                "nome": "Natércia"
            },
            {
                "codigo_ibge": 3144508,
                "nome": "Nazareno"
            },
            {
                "codigo_ibge": 3144607,
                "nome": "Nepomuceno"
            },
            {
                "codigo_ibge": 3144656,
                "nome": "Ninheira"
            },
            {
                "codigo_ibge": 3144672,
                "nome": "Nova Belém"
            },
            {
                "codigo_ibge": 3144706,
                "nome": "Nova Era"
            },
            {
                "codigo_ibge": 3144805,
                "nome": "Nova Lima"
            },
            {
                "codigo_ibge": 3144904,
                "nome": "Nova Módica"
            },
            {
                "codigo_ibge": 3145000,
                "nome": "Nova Ponte"
            },
            {
                "codigo_ibge": 3145059,
                "nome": "Nova Porteirinha"
            },
            {
                "codigo_ibge": 3145109,
                "nome": "Nova Resende"
            },
            {
                "codigo_ibge": 3145208,
                "nome": "Nova Serrana"
            },
            {
                "codigo_ibge": 3136603,
                "nome": "Nova União"
            },
            {
                "codigo_ibge": 3145307,
                "nome": "Novo Cruzeiro"
            },
            {
                "codigo_ibge": 3145356,
                "nome": "Novo Oriente de Minas"
            },
            {
                "codigo_ibge": 3145372,
                "nome": "Novorizonte"
            },
            {
                "codigo_ibge": 3145406,
                "nome": "Olaria"
            },
            {
                "codigo_ibge": 3145455,
                "nome": "Olhos d'Água"
            },
            {
                "codigo_ibge": 3145505,
                "nome": "Olímpio Noronha"
            },
            {
                "codigo_ibge": 3145604,
                "nome": "Oliveira"
            },
            {
                "codigo_ibge": 3145703,
                "nome": "Oliveira Fortes"
            },
            {
                "codigo_ibge": 3145802,
                "nome": "Onça de Pitangui"
            },
            {
                "codigo_ibge": 3145851,
                "nome": "Oratórios"
            },
            {
                "codigo_ibge": 3145877,
                "nome": "Orizânia"
            },
            {
                "codigo_ibge": 3145901,
                "nome": "Ouro Branco"
            },
            {
                "codigo_ibge": 3146008,
                "nome": "Ouro Fino"
            },
            {
                "codigo_ibge": 3146107,
                "nome": "Ouro Preto"
            },
            {
                "codigo_ibge": 3146206,
                "nome": "Ouro Verde de Minas"
            },
            {
                "codigo_ibge": 3146255,
                "nome": "Padre Carvalho"
            },
            {
                "codigo_ibge": 3146305,
                "nome": "Padre Paraíso"
            },
            {
                "codigo_ibge": 3146552,
                "nome": "Pai Pedro"
            },
            {
                "codigo_ibge": 3146404,
                "nome": "Paineiras"
            },
            {
                "codigo_ibge": 3146503,
                "nome": "Pains"
            },
            {
                "codigo_ibge": 3146602,
                "nome": "Paiva"
            },
            {
                "codigo_ibge": 3146701,
                "nome": "Palma"
            },
            {
                "codigo_ibge": 3146750,
                "nome": "Palmópolis"
            },
            {
                "codigo_ibge": 3146909,
                "nome": "Papagaios"
            },
            {
                "codigo_ibge": 3147105,
                "nome": "Pará de Minas"
            },
            {
                "codigo_ibge": 3147006,
                "nome": "Paracatu"
            },
            {
                "codigo_ibge": 3147204,
                "nome": "Paraguaçu"
            },
            {
                "codigo_ibge": 3147303,
                "nome": "Paraisópolis"
            },
            {
                "codigo_ibge": 3147402,
                "nome": "Paraopeba"
            },
            {
                "codigo_ibge": 3147600,
                "nome": "Passa Quatro"
            },
            {
                "codigo_ibge": 3147709,
                "nome": "Passa Tempo"
            },
            {
                "codigo_ibge": 3147808,
                "nome": "Passa-Vinte"
            },
            {
                "codigo_ibge": 3147501,
                "nome": "Passabém"
            },
            {
                "codigo_ibge": 3147907,
                "nome": "Passos"
            },
            {
                "codigo_ibge": 3147956,
                "nome": "Patis"
            },
            {
                "codigo_ibge": 3148004,
                "nome": "Patos de Minas"
            },
            {
                "codigo_ibge": 3148103,
                "nome": "Patrocínio"
            },
            {
                "codigo_ibge": 3148202,
                "nome": "Patrocínio do Muriaé"
            },
            {
                "codigo_ibge": 3148301,
                "nome": "Paula Cândido"
            },
            {
                "codigo_ibge": 3148400,
                "nome": "Paulistas"
            },
            {
                "codigo_ibge": 3148509,
                "nome": "Pavão"
            },
            {
                "codigo_ibge": 3148608,
                "nome": "Peçanha"
            },
            {
                "codigo_ibge": 3148707,
                "nome": "Pedra Azul"
            },
            {
                "codigo_ibge": 3148756,
                "nome": "Pedra Bonita"
            },
            {
                "codigo_ibge": 3148806,
                "nome": "Pedra do Anta"
            },
            {
                "codigo_ibge": 3148905,
                "nome": "Pedra do Indaiá"
            },
            {
                "codigo_ibge": 3149002,
                "nome": "Pedra Dourada"
            },
            {
                "codigo_ibge": 3149101,
                "nome": "Pedralva"
            },
            {
                "codigo_ibge": 3149150,
                "nome": "Pedras de Maria da Cruz"
            },
            {
                "codigo_ibge": 3149200,
                "nome": "Pedrinópolis"
            },
            {
                "codigo_ibge": 3149309,
                "nome": "Pedro Leopoldo"
            },
            {
                "codigo_ibge": 3149408,
                "nome": "Pedro Teixeira"
            },
            {
                "codigo_ibge": 3149507,
                "nome": "Pequeri"
            },
            {
                "codigo_ibge": 3149606,
                "nome": "Pequi"
            },
            {
                "codigo_ibge": 3149705,
                "nome": "Perdigão"
            },
            {
                "codigo_ibge": 3149804,
                "nome": "Perdizes"
            },
            {
                "codigo_ibge": 3149903,
                "nome": "Perdões"
            },
            {
                "codigo_ibge": 3149952,
                "nome": "Periquito"
            },
            {
                "codigo_ibge": 3150000,
                "nome": "Pescador"
            },
            {
                "codigo_ibge": 3150109,
                "nome": "Piau"
            },
            {
                "codigo_ibge": 3150158,
                "nome": "Piedade de Caratinga"
            },
            {
                "codigo_ibge": 3150208,
                "nome": "Piedade de Ponte Nova"
            },
            {
                "codigo_ibge": 3150307,
                "nome": "Piedade do Rio Grande"
            },
            {
                "codigo_ibge": 3150406,
                "nome": "Piedade dos Gerais"
            },
            {
                "codigo_ibge": 3150505,
                "nome": "Pimenta"
            },
            {
                "codigo_ibge": 3150539,
                "nome": "Pingo-d'Água"
            },
            {
                "codigo_ibge": 3150570,
                "nome": "Pintópolis"
            },
            {
                "codigo_ibge": 3150604,
                "nome": "Piracema"
            },
            {
                "codigo_ibge": 3150703,
                "nome": "Pirajuba"
            },
            {
                "codigo_ibge": 3150802,
                "nome": "Piranga"
            },
            {
                "codigo_ibge": 3150901,
                "nome": "Piranguçu"
            },
            {
                "codigo_ibge": 3151008,
                "nome": "Piranguinho"
            },
            {
                "codigo_ibge": 3151107,
                "nome": "Pirapetinga"
            },
            {
                "codigo_ibge": 3151206,
                "nome": "Pirapora"
            },
            {
                "codigo_ibge": 3151305,
                "nome": "Piraúba"
            },
            {
                "codigo_ibge": 3151404,
                "nome": "Pitangui"
            },
            {
                "codigo_ibge": 3151503,
                "nome": "Piumhi"
            },
            {
                "codigo_ibge": 3151602,
                "nome": "Planura"
            },
            {
                "codigo_ibge": 3151701,
                "nome": "Poço Fundo"
            },
            {
                "codigo_ibge": 3151800,
                "nome": "Poços de Caldas"
            },
            {
                "codigo_ibge": 3151909,
                "nome": "Pocrane"
            },
            {
                "codigo_ibge": 3152006,
                "nome": "Pompéu"
            },
            {
                "codigo_ibge": 3152105,
                "nome": "Ponte Nova"
            },
            {
                "codigo_ibge": 3152131,
                "nome": "Ponto Chique"
            },
            {
                "codigo_ibge": 3152170,
                "nome": "Ponto dos Volantes"
            },
            {
                "codigo_ibge": 3152204,
                "nome": "Porteirinha"
            },
            {
                "codigo_ibge": 3152303,
                "nome": "Porto Firme"
            },
            {
                "codigo_ibge": 3152402,
                "nome": "Poté"
            },
            {
                "codigo_ibge": 3152501,
                "nome": "Pouso Alegre"
            },
            {
                "codigo_ibge": 3152600,
                "nome": "Pouso Alto"
            },
            {
                "codigo_ibge": 3152709,
                "nome": "Prados"
            },
            {
                "codigo_ibge": 3152808,
                "nome": "Prata"
            },
            {
                "codigo_ibge": 3152907,
                "nome": "Pratápolis"
            },
            {
                "codigo_ibge": 3153004,
                "nome": "Pratinha"
            },
            {
                "codigo_ibge": 3153103,
                "nome": "Presidente Bernardes"
            },
            {
                "codigo_ibge": 3153202,
                "nome": "Presidente Juscelino"
            },
            {
                "codigo_ibge": 3153301,
                "nome": "Presidente Kubitschek"
            },
            {
                "codigo_ibge": 3153400,
                "nome": "Presidente Olegário"
            },
            {
                "codigo_ibge": 3153608,
                "nome": "Prudente de Morais"
            },
            {
                "codigo_ibge": 3153707,
                "nome": "Quartel Geral"
            },
            {
                "codigo_ibge": 3153806,
                "nome": "Queluzito"
            },
            {
                "codigo_ibge": 3153905,
                "nome": "Raposos"
            },
            {
                "codigo_ibge": 3154002,
                "nome": "Raul Soares"
            },
            {
                "codigo_ibge": 3154101,
                "nome": "Recreio"
            },
            {
                "codigo_ibge": 3154150,
                "nome": "Reduto"
            },
            {
                "codigo_ibge": 3154200,
                "nome": "Resende Costa"
            },
            {
                "codigo_ibge": 3154309,
                "nome": "Resplendor"
            },
            {
                "codigo_ibge": 3154408,
                "nome": "Ressaquinha"
            },
            {
                "codigo_ibge": 3154457,
                "nome": "Riachinho"
            },
            {
                "codigo_ibge": 3154507,
                "nome": "Riacho dos Machados"
            },
            {
                "codigo_ibge": 3154606,
                "nome": "Ribeirão das Neves"
            },
            {
                "codigo_ibge": 3154705,
                "nome": "Ribeirão Vermelho"
            },
            {
                "codigo_ibge": 3154804,
                "nome": "Rio Acima"
            },
            {
                "codigo_ibge": 3154903,
                "nome": "Rio Casca"
            },
            {
                "codigo_ibge": 3155108,
                "nome": "Rio do Prado"
            },
            {
                "codigo_ibge": 3155009,
                "nome": "Rio Doce"
            },
            {
                "codigo_ibge": 3155207,
                "nome": "Rio Espera"
            },
            {
                "codigo_ibge": 3155306,
                "nome": "Rio Manso"
            },
            {
                "codigo_ibge": 3155405,
                "nome": "Rio Novo"
            },
            {
                "codigo_ibge": 3155504,
                "nome": "Rio Paranaíba"
            },
            {
                "codigo_ibge": 3155603,
                "nome": "Rio Pardo de Minas"
            },
            {
                "codigo_ibge": 3155702,
                "nome": "Rio Piracicaba"
            },
            {
                "codigo_ibge": 3155801,
                "nome": "Rio Pomba"
            },
            {
                "codigo_ibge": 3155900,
                "nome": "Rio Preto"
            },
            {
                "codigo_ibge": 3156007,
                "nome": "Rio Vermelho"
            },
            {
                "codigo_ibge": 3156106,
                "nome": "Ritápolis"
            },
            {
                "codigo_ibge": 3156205,
                "nome": "Rochedo de Minas"
            },
            {
                "codigo_ibge": 3156304,
                "nome": "Rodeiro"
            },
            {
                "codigo_ibge": 3156403,
                "nome": "Romaria"
            },
            {
                "codigo_ibge": 3156452,
                "nome": "Rosário da Limeira"
            },
            {
                "codigo_ibge": 3156502,
                "nome": "Rubelita"
            },
            {
                "codigo_ibge": 3156601,
                "nome": "Rubim"
            },
            {
                "codigo_ibge": 3156700,
                "nome": "Sabará"
            },
            {
                "codigo_ibge": 3156809,
                "nome": "Sabinópolis"
            },
            {
                "codigo_ibge": 3156908,
                "nome": "Sacramento"
            },
            {
                "codigo_ibge": 3157005,
                "nome": "Salinas"
            },
            {
                "codigo_ibge": 3157104,
                "nome": "Salto da Divisa"
            },
            {
                "codigo_ibge": 3157203,
                "nome": "Santa Bárbara"
            },
            {
                "codigo_ibge": 3157252,
                "nome": "Santa Bárbara do Leste"
            },
            {
                "codigo_ibge": 3157278,
                "nome": "Santa Bárbara do Monte Verde"
            },
            {
                "codigo_ibge": 3157302,
                "nome": "Santa Bárbara do Tugúrio"
            },
            {
                "codigo_ibge": 3157336,
                "nome": "Santa Cruz de Minas"
            },
            {
                "codigo_ibge": 3157377,
                "nome": "Santa Cruz de Salinas"
            },
            {
                "codigo_ibge": 3157401,
                "nome": "Santa Cruz do Escalvado"
            },
            {
                "codigo_ibge": 3157500,
                "nome": "Santa Efigênia de Minas"
            },
            {
                "codigo_ibge": 3157609,
                "nome": "Santa Fé de Minas"
            },
            {
                "codigo_ibge": 3157658,
                "nome": "Santa Helena de Minas"
            },
            {
                "codigo_ibge": 3157708,
                "nome": "Santa Juliana"
            },
            {
                "codigo_ibge": 3157807,
                "nome": "Santa Luzia"
            },
            {
                "codigo_ibge": 3157906,
                "nome": "Santa Margarida"
            },
            {
                "codigo_ibge": 3158003,
                "nome": "Santa Maria de Itabira"
            },
            {
                "codigo_ibge": 3158102,
                "nome": "Santa Maria do Salto"
            },
            {
                "codigo_ibge": 3158201,
                "nome": "Santa Maria do Suaçuí"
            },
            {
                "codigo_ibge": 3159209,
                "nome": "Santa Rita de Caldas"
            },
            {
                "codigo_ibge": 3159407,
                "nome": "Santa Rita de Ibitipoca"
            },
            {
                "codigo_ibge": 3159308,
                "nome": "Santa Rita de Jacutinga"
            },
            {
                "codigo_ibge": 3159357,
                "nome": "Santa Rita de Minas"
            },
            {
                "codigo_ibge": 3159506,
                "nome": "Santa Rita do Itueto"
            },
            {
                "codigo_ibge": 3159605,
                "nome": "Santa Rita do Sapucaí"
            },
            {
                "codigo_ibge": 3159704,
                "nome": "Santa Rosa da Serra"
            },
            {
                "codigo_ibge": 3159803,
                "nome": "Santa Vitória"
            },
            {
                "codigo_ibge": 3158300,
                "nome": "Santana da Vargem"
            },
            {
                "codigo_ibge": 3158409,
                "nome": "Santana de Cataguases"
            },
            {
                "codigo_ibge": 3158508,
                "nome": "Santana de Pirapama"
            },
            {
                "codigo_ibge": 3158607,
                "nome": "Santana do Deserto"
            },
            {
                "codigo_ibge": 3158706,
                "nome": "Santana do Garambéu"
            },
            {
                "codigo_ibge": 3158805,
                "nome": "Santana do Jacaré"
            },
            {
                "codigo_ibge": 3158904,
                "nome": "Santana do Manhuaçu"
            },
            {
                "codigo_ibge": 3158953,
                "nome": "Santana do Paraíso"
            },
            {
                "codigo_ibge": 3159001,
                "nome": "Santana do Riacho"
            },
            {
                "codigo_ibge": 3159100,
                "nome": "Santana dos Montes"
            },
            {
                "codigo_ibge": 3159902,
                "nome": "Santo Antônio do Amparo"
            },
            {
                "codigo_ibge": 3160009,
                "nome": "Santo Antônio do Aventureiro"
            },
            {
                "codigo_ibge": 3160108,
                "nome": "Santo Antônio do Grama"
            },
            {
                "codigo_ibge": 3160207,
                "nome": "Santo Antônio do Itambé"
            },
            {
                "codigo_ibge": 3160306,
                "nome": "Santo Antônio do Jacinto"
            },
            {
                "codigo_ibge": 3160405,
                "nome": "Santo Antônio do Monte"
            },
            {
                "codigo_ibge": 3160454,
                "nome": "Santo Antônio do Retiro"
            },
            {
                "codigo_ibge": 3160504,
                "nome": "Santo Antônio do Rio Abaixo"
            },
            {
                "codigo_ibge": 3160603,
                "nome": "Santo Hipólito"
            },
            {
                "codigo_ibge": 3160702,
                "nome": "Santos Dumont"
            },
            {
                "codigo_ibge": 3160801,
                "nome": "São Bento Abade"
            },
            {
                "codigo_ibge": 3160900,
                "nome": "São Brás do Suaçuí"
            },
            {
                "codigo_ibge": 3160959,
                "nome": "São Domingos das Dores"
            },
            {
                "codigo_ibge": 3161007,
                "nome": "São Domingos do Prata"
            },
            {
                "codigo_ibge": 3161056,
                "nome": "São Félix de Minas"
            },
            {
                "codigo_ibge": 3161106,
                "nome": "São Francisco"
            },
            {
                "codigo_ibge": 3161205,
                "nome": "São Francisco de Paula"
            },
            {
                "codigo_ibge": 3161304,
                "nome": "São Francisco de Sales"
            },
            {
                "codigo_ibge": 3161403,
                "nome": "São Francisco do Glória"
            },
            {
                "codigo_ibge": 3161502,
                "nome": "São Geraldo"
            },
            {
                "codigo_ibge": 3161601,
                "nome": "São Geraldo da Piedade"
            },
            {
                "codigo_ibge": 3161650,
                "nome": "São Geraldo do Baixio"
            },
            {
                "codigo_ibge": 3161700,
                "nome": "São Gonçalo do Abaeté"
            },
            {
                "codigo_ibge": 3161809,
                "nome": "São Gonçalo do Pará"
            },
            {
                "codigo_ibge": 3161908,
                "nome": "São Gonçalo do Rio Abaixo"
            },
            {
                "codigo_ibge": 3125507,
                "nome": "São Gonçalo do Rio Preto"
            },
            {
                "codigo_ibge": 3162005,
                "nome": "São Gonçalo do Sapucaí"
            },
            {
                "codigo_ibge": 3162104,
                "nome": "São Gotardo"
            },
            {
                "codigo_ibge": 3162203,
                "nome": "São João Batista do Glória"
            },
            {
                "codigo_ibge": 3162252,
                "nome": "São João da Lagoa"
            },
            {
                "codigo_ibge": 3162302,
                "nome": "São João da Mata"
            },
            {
                "codigo_ibge": 3162401,
                "nome": "São João da Ponte"
            },
            {
                "codigo_ibge": 3162450,
                "nome": "São João das Missões"
            },
            {
                "codigo_ibge": 3162500,
                "nome": "São João del Rei"
            },
            {
                "codigo_ibge": 3162559,
                "nome": "São João do Manhuaçu"
            },
            {
                "codigo_ibge": 3162575,
                "nome": "São João do Manteninha"
            },
            {
                "codigo_ibge": 3162609,
                "nome": "São João do Oriente"
            },
            {
                "codigo_ibge": 3162658,
                "nome": "São João do Pacuí"
            },
            {
                "codigo_ibge": 3162708,
                "nome": "São João do Paraíso"
            },
            {
                "codigo_ibge": 3162807,
                "nome": "São João Evangelista"
            },
            {
                "codigo_ibge": 3162906,
                "nome": "São João Nepomuceno"
            },
            {
                "codigo_ibge": 3162922,
                "nome": "São Joaquim de Bicas"
            },
            {
                "codigo_ibge": 3162948,
                "nome": "São José da Barra"
            },
            {
                "codigo_ibge": 3162955,
                "nome": "São José da Lapa"
            },
            {
                "codigo_ibge": 3163003,
                "nome": "São José da Safira"
            },
            {
                "codigo_ibge": 3163102,
                "nome": "São José da Varginha"
            },
            {
                "codigo_ibge": 3163201,
                "nome": "São José do Alegre"
            },
            {
                "codigo_ibge": 3163300,
                "nome": "São José do Divino"
            },
            {
                "codigo_ibge": 3163409,
                "nome": "São José do Goiabal"
            },
            {
                "codigo_ibge": 3163508,
                "nome": "São José do Jacuri"
            },
            {
                "codigo_ibge": 3163607,
                "nome": "São José do Mantimento"
            },
            {
                "codigo_ibge": 3163706,
                "nome": "São Lourenço"
            },
            {
                "codigo_ibge": 3163805,
                "nome": "São Miguel do Anta"
            },
            {
                "codigo_ibge": 3163904,
                "nome": "São Pedro da União"
            },
            {
                "codigo_ibge": 3164100,
                "nome": "São Pedro do Suaçuí"
            },
            {
                "codigo_ibge": 3164001,
                "nome": "São Pedro dos Ferros"
            },
            {
                "codigo_ibge": 3164209,
                "nome": "São Romão"
            },
            {
                "codigo_ibge": 3164308,
                "nome": "São Roque de Minas"
            },
            {
                "codigo_ibge": 3164407,
                "nome": "São Sebastião da Bela Vista"
            },
            {
                "codigo_ibge": 3164431,
                "nome": "São Sebastião da Vargem Alegre"
            },
            {
                "codigo_ibge": 3164472,
                "nome": "São Sebastião do Anta"
            },
            {
                "codigo_ibge": 3164506,
                "nome": "São Sebastião do Maranhão"
            },
            {
                "codigo_ibge": 3164605,
                "nome": "São Sebastião do Oeste"
            },
            {
                "codigo_ibge": 3164704,
                "nome": "São Sebastião do Paraíso"
            },
            {
                "codigo_ibge": 3164803,
                "nome": "São Sebastião do Rio Preto"
            },
            {
                "codigo_ibge": 3164902,
                "nome": "São Sebastião do Rio Verde"
            },
            {
                "codigo_ibge": 3165206,
                "nome": "São Thomé das Letras"
            },
            {
                "codigo_ibge": 3165008,
                "nome": "São Tiago"
            },
            {
                "codigo_ibge": 3165107,
                "nome": "São Tomás de Aquino"
            },
            {
                "codigo_ibge": 3165305,
                "nome": "São Vicente de Minas"
            },
            {
                "codigo_ibge": 3165404,
                "nome": "Sapucaí-Mirim"
            },
            {
                "codigo_ibge": 3165503,
                "nome": "Sardoá"
            },
            {
                "codigo_ibge": 3165537,
                "nome": "Sarzedo"
            },
            {
                "codigo_ibge": 3165560,
                "nome": "Sem-Peixe"
            },
            {
                "codigo_ibge": 3165578,
                "nome": "Senador Amaral"
            },
            {
                "codigo_ibge": 3165602,
                "nome": "Senador Cortes"
            },
            {
                "codigo_ibge": 3165701,
                "nome": "Senador Firmino"
            },
            {
                "codigo_ibge": 3165800,
                "nome": "Senador José Bento"
            },
            {
                "codigo_ibge": 3165909,
                "nome": "Senador Modestino Gonçalves"
            },
            {
                "codigo_ibge": 3166006,
                "nome": "Senhora de Oliveira"
            },
            {
                "codigo_ibge": 3166105,
                "nome": "Senhora do Porto"
            },
            {
                "codigo_ibge": 3166204,
                "nome": "Senhora dos Remédios"
            },
            {
                "codigo_ibge": 3166303,
                "nome": "Sericita"
            },
            {
                "codigo_ibge": 3166402,
                "nome": "Seritinga"
            },
            {
                "codigo_ibge": 3166501,
                "nome": "Serra Azul de Minas"
            },
            {
                "codigo_ibge": 3166600,
                "nome": "Serra da Saudade"
            },
            {
                "codigo_ibge": 3166808,
                "nome": "Serra do Salitre"
            },
            {
                "codigo_ibge": 3166709,
                "nome": "Serra dos Aimorés"
            },
            {
                "codigo_ibge": 3166907,
                "nome": "Serrania"
            },
            {
                "codigo_ibge": 3166956,
                "nome": "Serranópolis de Minas"
            },
            {
                "codigo_ibge": 3167004,
                "nome": "Serranos"
            },
            {
                "codigo_ibge": 3167103,
                "nome": "Serro"
            },
            {
                "codigo_ibge": 3167202,
                "nome": "Sete Lagoas"
            },
            {
                "codigo_ibge": 3165552,
                "nome": "Setubinha"
            },
            {
                "codigo_ibge": 3167301,
                "nome": "Silveirânia"
            },
            {
                "codigo_ibge": 3167400,
                "nome": "Silvianópolis"
            },
            {
                "codigo_ibge": 3167509,
                "nome": "Simão Pereira"
            },
            {
                "codigo_ibge": 3167608,
                "nome": "Simonésia"
            },
            {
                "codigo_ibge": 3167707,
                "nome": "Sobrália"
            },
            {
                "codigo_ibge": 3167806,
                "nome": "Soledade de Minas"
            },
            {
                "codigo_ibge": 3167905,
                "nome": "Tabuleiro"
            },
            {
                "codigo_ibge": 3168002,
                "nome": "Taiobeiras"
            },
            {
                "codigo_ibge": 3168051,
                "nome": "Taparuba"
            },
            {
                "codigo_ibge": 3168101,
                "nome": "Tapira"
            },
            {
                "codigo_ibge": 3168200,
                "nome": "Tapiraí"
            },
            {
                "codigo_ibge": 3168309,
                "nome": "Taquaraçu de Minas"
            },
            {
                "codigo_ibge": 3168408,
                "nome": "Tarumirim"
            },
            {
                "codigo_ibge": 3168507,
                "nome": "Teixeiras"
            },
            {
                "codigo_ibge": 3168606,
                "nome": "Teófilo Otoni"
            },
            {
                "codigo_ibge": 3168705,
                "nome": "Timóteo"
            },
            {
                "codigo_ibge": 3168804,
                "nome": "Tiradentes"
            },
            {
                "codigo_ibge": 3168903,
                "nome": "Tiros"
            },
            {
                "codigo_ibge": 3169000,
                "nome": "Tocantins"
            },
            {
                "codigo_ibge": 3169059,
                "nome": "Tocos do Moji"
            },
            {
                "codigo_ibge": 3169109,
                "nome": "Toledo"
            },
            {
                "codigo_ibge": 3169208,
                "nome": "Tombos"
            },
            {
                "codigo_ibge": 3169307,
                "nome": "Três Corações"
            },
            {
                "codigo_ibge": 3169356,
                "nome": "Três Marias"
            },
            {
                "codigo_ibge": 3169406,
                "nome": "Três Pontas"
            },
            {
                "codigo_ibge": 3169505,
                "nome": "Tumiritinga"
            },
            {
                "codigo_ibge": 3169604,
                "nome": "Tupaciguara"
            },
            {
                "codigo_ibge": 3169703,
                "nome": "Turmalina"
            },
            {
                "codigo_ibge": 3169802,
                "nome": "Turvolândia"
            },
            {
                "codigo_ibge": 3169901,
                "nome": "Ubá"
            },
            {
                "codigo_ibge": 3170008,
                "nome": "Ubaí"
            },
            {
                "codigo_ibge": 3170057,
                "nome": "Ubaporanga"
            },
            {
                "codigo_ibge": 3170107,
                "nome": "Uberaba"
            },
            {
                "codigo_ibge": 3170206,
                "nome": "Uberlândia"
            },
            {
                "codigo_ibge": 3170305,
                "nome": "Umburatiba"
            },
            {
                "codigo_ibge": 3170404,
                "nome": "Unaí"
            },
            {
                "codigo_ibge": 3170438,
                "nome": "União de Minas"
            },
            {
                "codigo_ibge": 3170479,
                "nome": "Uruana de Minas"
            },
            {
                "codigo_ibge": 3170503,
                "nome": "Urucânia"
            },
            {
                "codigo_ibge": 3170529,
                "nome": "Urucuia"
            },
            {
                "codigo_ibge": 3170578,
                "nome": "Vargem Alegre"
            },
            {
                "codigo_ibge": 3170602,
                "nome": "Vargem Bonita"
            },
            {
                "codigo_ibge": 3170651,
                "nome": "Vargem Grande do Rio Pardo"
            },
            {
                "codigo_ibge": 3170701,
                "nome": "Varginha"
            },
            {
                "codigo_ibge": 3170750,
                "nome": "Varjão de Minas"
            },
            {
                "codigo_ibge": 3170800,
                "nome": "Várzea da Palma"
            },
            {
                "codigo_ibge": 3170909,
                "nome": "Varzelândia"
            },
            {
                "codigo_ibge": 3171006,
                "nome": "Vazante"
            },
            {
                "codigo_ibge": 3171030,
                "nome": "Verdelândia"
            },
            {
                "codigo_ibge": 3171071,
                "nome": "Veredinha"
            },
            {
                "codigo_ibge": 3171105,
                "nome": "Veríssimo"
            },
            {
                "codigo_ibge": 3171154,
                "nome": "Vermelho Novo"
            },
            {
                "codigo_ibge": 3171204,
                "nome": "Vespasiano"
            },
            {
                "codigo_ibge": 3171303,
                "nome": "Viçosa"
            },
            {
                "codigo_ibge": 3171402,
                "nome": "Vieiras"
            },
            {
                "codigo_ibge": 3171600,
                "nome": "Virgem da Lapa"
            },
            {
                "codigo_ibge": 3171709,
                "nome": "Virgínia"
            },
            {
                "codigo_ibge": 3171808,
                "nome": "Virginópolis"
            },
            {
                "codigo_ibge": 3171907,
                "nome": "Virgolândia"
            },
            {
                "codigo_ibge": 3172004,
                "nome": "Visconde do Rio Branco"
            },
            {
                "codigo_ibge": 3172103,
                "nome": "Volta Grande"
            },
            {
                "codigo_ibge": 3172202,
                "nome": "Wenceslau Braz"
            }
        ]
    },
    "MS": {
        "nome": "Mato Grosso do Sul",
        "municipios": [
            {
                "codigo_ibge": 5000203,
                "nome": "Água Clara"
            },
            {
                "codigo_ibge": 5000252,
                "nome": "Alcinópolis"
            },
            {
                "codigo_ibge": 5000609,
                "nome": "Amambai"
            },
            {
                "codigo_ibge": 5000708,
                "nome": "Anastácio"
            },
            {
                "codigo_ibge": 5000807,
                "nome": "Anaurilândia"
            },
            {
                "codigo_ibge": 5000856,
                "nome": "Angélica"
            },
            {
                "codigo_ibge": 5000906,
                "nome": "Antônio João"
            },
            {
                "codigo_ibge": 5001003,
                "nome": "Aparecida do Taboado"
            },
            {
                "codigo_ibge": 5001102,
                "nome": "Aquidauana"
            },
            {
                "codigo_ibge": 5001243,
                "nome": "Aral Moreira"
            },
            {
                "codigo_ibge": 5001508,
                "nome": "Bandeirantes"
            },
            {
                "codigo_ibge": 5001904,
                "nome": "Bataguassu"
            },
            {
                "codigo_ibge": 5002001,
                "nome": "Batayporã"
            },
            {
                "codigo_ibge": 5002100,
                "nome": "Bela Vista"
            },
            {
                "codigo_ibge": 5002159,
                "nome": "Bodoquena"
            },
            {
                "codigo_ibge": 5002209,
                "nome": "Bonito"
            },
            {
                "codigo_ibge": 5002308,
                "nome": "Brasilândia"
            },
            {
                "codigo_ibge": 5002407,
                "nome": "Caarapó"
            },
            {
                "codigo_ibge": 5002605,
                "nome": "Camapuã"
            },
            {
                "codigo_ibge": 5002704,
                "nome": "Campo Grande"
            },
            {
                "codigo_ibge": 5002803,
                "nome": "Caracol"
            },
            {
                "codigo_ibge": 5002902,
                "nome": "Cassilândia"
            },
            {
                "codigo_ibge": 5002951,
                "nome": "Chapadão do Sul"
            },
            {
                "codigo_ibge": 5003108,
                "nome": "Corguinho"
            },
            {
                "codigo_ibge": 5003157,
                "nome": "Coronel Sapucaia"
            },
            {
                "codigo_ibge": 5003207,
                "nome": "Corumbá"
            },
            {
                "codigo_ibge": 5003256,
                "nome": "Costa Rica"
            },
            {
                "codigo_ibge": 5003306,
                "nome": "Coxim"
            },
            {
                "codigo_ibge": 5003454,
                "nome": "Deodápolis"
            },
            {
                "codigo_ibge": 5003488,
                "nome": "Dois Irmãos do Buriti"
            },
            {
                "codigo_ibge": 5003504,
                "nome": "Douradina"
            },
            {
                "codigo_ibge": 5003702,
                "nome": "Dourados"
            },
            {
                "codigo_ibge": 5003751,
                "nome": "Eldorado"
            },
            {
                "codigo_ibge": 5003801,
                "nome": "Fátima do Sul"
            },
            {
                "codigo_ibge": 5003900,
                "nome": "Figueirão"
            },
            {
                "codigo_ibge": 5004007,
                "nome": "Glória de Dourados"
            },
            {
                "codigo_ibge": 5004106,
                "nome": "Guia Lopes da Laguna"
            },
            {
                "codigo_ibge": 5004304,
                "nome": "Iguatemi"
            },
            {
                "codigo_ibge": 5004403,
                "nome": "Inocência"
            },
            {
                "codigo_ibge": 5004502,
                "nome": "Itaporã"
            },
            {
                "codigo_ibge": 5004601,
                "nome": "Itaquiraí"
            },
            {
                "codigo_ibge": 5004700,
                "nome": "Ivinhema"
            },
            {
                "codigo_ibge": 5004809,
                "nome": "Japorã"
            },
            {
                "codigo_ibge": 5004908,
                "nome": "Jaraguari"
            },
            {
                "codigo_ibge": 5005004,
                "nome": "Jardim"
            },
            {
                "codigo_ibge": 5005103,
                "nome": "Jateí"
            },
            {
                "codigo_ibge": 5005152,
                "nome": "Juti"
            },
            {
                "codigo_ibge": 5005202,
                "nome": "Ladário"
            },
            {
                "codigo_ibge": 5005251,
                "nome": "Laguna Carapã"
            },
            {
                "codigo_ibge": 5005400,
                "nome": "Maracaju"
            },
            {
                "codigo_ibge": 5005608,
                "nome": "Miranda"
            },
            {
                "codigo_ibge": 5005681,
                "nome": "Mundo Novo"
            },
            {
                "codigo_ibge": 5005707,
                "nome": "Naviraí"
            },
            {
                "codigo_ibge": 5005806,
                "nome": "Nioaque"
            },
            {
                "codigo_ibge": 5006002,
                "nome": "Nova Alvorada do Sul"
            },
            {
                "codigo_ibge": 5006200,
                "nome": "Nova Andradina"
            },
            {
                "codigo_ibge": 5006259,
                "nome": "Novo Horizonte do Sul"
            },
            {
                "codigo_ibge": 5006275,
                "nome": "Paraíso das Águas"
            },
            {
                "codigo_ibge": 5006309,
                "nome": "Paranaíba"
            },
            {
                "codigo_ibge": 5006358,
                "nome": "Paranhos"
            },
            {
                "codigo_ibge": 5006408,
                "nome": "Pedro Gomes"
            },
            {
                "codigo_ibge": 5006606,
                "nome": "Ponta Porã"
            },
            {
                "codigo_ibge": 5006903,
                "nome": "Porto Murtinho"
            },
            {
                "codigo_ibge": 5007109,
                "nome": "Ribas do Rio Pardo"
            },
            {
                "codigo_ibge": 5007208,
                "nome": "Rio Brilhante"
            },
            {
                "codigo_ibge": 5007307,
                "nome": "Rio Negro"
            },
            {
                "codigo_ibge": 5007406,
                "nome": "Rio Verde de Mato Grosso"
            },
            {
                "codigo_ibge": 5007505,
                "nome": "Rochedo"
            },
            {
                "codigo_ibge": 5007554,
                "nome": "Santa Rita do Pardo"
            },
            {
                "codigo_ibge": 5007695,
                "nome": "São Gabriel do Oeste"
            },
            {
                "codigo_ibge": 5007802,
                "nome": "Selvíria"
            },
            {
                "codigo_ibge": 5007703,
                "nome": "Sete Quedas"
            },
            {
                "codigo_ibge": 5007901,
                "nome": "Sidrolândia"
            },
            {
                "codigo_ibge": 5007935,
                "nome": "Sonora"
            },
            {
                "codigo_ibge": 5007950,
                "nome": "Tacuru"
            },
            {
                "codigo_ibge": 5007976,
                "nome": "Taquarussu"
            },
            {
                "codigo_ibge": 5008008,
                "nome": "Terenos"
            },
            {
                "codigo_ibge": 5008305,
                "nome": "Três Lagoas"
            },
            {
                "codigo_ibge": 5008404,
                "nome": "Vicentina"
            }
        ]
    },
    "MT": {
        "nome": "Mato Grosso",
        "municipios": [
            {
                "codigo_ibge": 5100102,
                "nome": "Acorizal"
            },
            {
                "codigo_ibge": 5100201,
                "nome": "Água Boa"
            },
            {
                "codigo_ibge": 5100250,
                "nome": "Alta Floresta"
            },
            {
                "codigo_ibge": 5100300,
                "nome": "Alto Araguaia"
            },
            {
                "codigo_ibge": 5100359,
                "nome": "Alto Boa Vista"
            },
            {
                "codigo_ibge": 5100409,
                "nome": "Alto Garças"
            },
            {
                "codigo_ibge": 5100508,
                "nome": "Alto Paraguai"
            },
            {
                "codigo_ibge": 5100607,
                "nome": "Alto Taquari"
            },
            {
                "codigo_ibge": 5100805,
                "nome": "Apiacás"
            },
            {
                "codigo_ibge": 5101001,
                "nome": "Araguaiana"
            },
            {
                "codigo_ibge": 5101209,
                "nome": "Araguainha"
            },
            {
                "codigo_ibge": 5101258,
                "nome": "Araputanga"
            },
            {
                "codigo_ibge": 5101308,
                "nome": "Arenápolis"
            },
            {
                "codigo_ibge": 5101407,
                "nome": "Aripuanã"
            },
            {
                "codigo_ibge": 5101605,
                "nome": "Barão de Melgaço"
            },
            {
                "codigo_ibge": 5101704,
                "nome": "Barra do Bugres"
            },
            {
                "codigo_ibge": 5101803,
                "nome": "Barra do Garças"
            },
            {
                "codigo_ibge": 5101852,
                "nome": "Bom Jesus do Araguaia"
            },
            {
                "codigo_ibge": 5101902,
                "nome": "Brasnorte"
            },
            {
                "codigo_ibge": 5102504,
                "nome": "Cáceres"
            },
            {
                "codigo_ibge": 5102603,
                "nome": "Campinápolis"
            },
            {
                "codigo_ibge": 5102637,
                "nome": "Campo Novo do Parecis"
            },
            {
                "codigo_ibge": 5102678,
                "nome": "Campo Verde"
            },
            {
                "codigo_ibge": 5102686,
                "nome": "Campos de Júlio"
            },
            {
                "codigo_ibge": 5102694,
                "nome": "Canabrava do Norte"
            },
            {
                "codigo_ibge": 5102702,
                "nome": "Canarana"
            },
            {
                "codigo_ibge": 5102793,
                "nome": "Carlinda"
            },
            {
                "codigo_ibge": 5102850,
                "nome": "Castanheira"
            },
            {
                "codigo_ibge": 5103007,
                "nome": "Chapada dos Guimarães"
            },
            {
                "codigo_ibge": 5103056,
                "nome": "Cláudia"
            },
            {
                "codigo_ibge": 5103106,
                "nome": "Cocalinho"
            },
            {
                "codigo_ibge": 5103205,
                "nome": "Colíder"
            },
            {
                "codigo_ibge": 5103254,
                "nome": "Colniza"
            },
            {
                "codigo_ibge": 5103304,
                "nome": "Comodoro"
            },
            {
                "codigo_ibge": 5103353,
                "nome": "Confresa"
            },
            {
                "codigo_ibge": 5103361,
                "nome": "Conquista D'Oeste"
            },
            {
                "codigo_ibge": 5103379,
                "nome": "Cotriguaçu"
            },
            {
                "codigo_ibge": 5103403,
                "nome": "Cuiabá"
            },
            {
                "codigo_ibge": 5103437,
                "nome": "Curvelândia"
            },
            {
                "codigo_ibge": 5103452,
                "nome": "Denise"
            },
            {
                "codigo_ibge": 5103502,
                "nome": "Diamantino"
            },
            {
                "codigo_ibge": 5103601,
                "nome": "Dom Aquino"
            },
            {
                "codigo_ibge": 5103700,
                "nome": "Feliz Natal"
            },
            {
                "codigo_ibge": 5103809,
                "nome": "Figueirópolis D'Oeste"
            },
            {
                "codigo_ibge": 5103858,
                "nome": "Gaúcha do Norte"
            },
            {
                "codigo_ibge": 5103908,
                "nome": "General Carneiro"
            },
            {
                "codigo_ibge": 5103957,
                "nome": "Glória D'Oeste"
            },
            {
                "codigo_ibge": 5104104,
                "nome": "Guarantã do Norte"
            },
            {
                "codigo_ibge": 5104203,
                "nome": "Guiratinga"
            },
            {
                "codigo_ibge": 5104500,
                "nome": "Indiavaí"
            },
            {
                "codigo_ibge": 5104526,
                "nome": "Ipiranga do Norte"
            },
            {
                "codigo_ibge": 5104542,
                "nome": "Itanhangá"
            },
            {
                "codigo_ibge": 5104559,
                "nome": "Itaúba"
            },
            {
                "codigo_ibge": 5104609,
                "nome": "Itiquira"
            },
            {
                "codigo_ibge": 5104807,
                "nome": "Jaciara"
            },
            {
                "codigo_ibge": 5104906,
                "nome": "Jangada"
            },
            {
                "codigo_ibge": 5105002,
                "nome": "Jauru"
            },
            {
                "codigo_ibge": 5105101,
                "nome": "Juara"
            },
            {
                "codigo_ibge": 5105150,
                "nome": "Juína"
            },
            {
                "codigo_ibge": 5105176,
                "nome": "Juruena"
            },
            {
                "codigo_ibge": 5105200,
                "nome": "Juscimeira"
            },
            {
                "codigo_ibge": 5105234,
                "nome": "Lambari D'Oeste"
            },
            {
                "codigo_ibge": 5105259,
                "nome": "Lucas do Rio Verde"
            },
            {
                "codigo_ibge": 5105309,
                "nome": "Luciara"
            },
            {
                "codigo_ibge": 5105580,
                "nome": "Marcelândia"
            },
            {
                "codigo_ibge": 5105606,
                "nome": "Matupá"
            },
            {
                "codigo_ibge": 5105622,
                "nome": "Mirassol d'Oeste"
            },
            {
                "codigo_ibge": 5105903,
                "nome": "Nobres"
            },
            {
                "codigo_ibge": 5106000,
                "nome": "Nortelândia"
            },
            {
                "codigo_ibge": 5106109,
                "nome": "Nossa Senhora do Livramento"
            },
            {
                "codigo_ibge": 5106158,
                "nome": "Nova Bandeirantes"
            },
            {
                "codigo_ibge": 5106208,
                "nome": "Nova Brasilândia"
            },
            {
                "codigo_ibge": 5106216,
                "nome": "Nova Canaã do Norte"
            },
            {
                "codigo_ibge": 5108808,
                "nome": "Nova Guarita"
            },
            {
                "codigo_ibge": 5106182,
                "nome": "Nova Lacerda"
            },
            {
                "codigo_ibge": 5108857,
                "nome": "Nova Marilândia"
            },
            {
                "codigo_ibge": 5108907,
                "nome": "Nova Maringá"
            },
            {
                "codigo_ibge": 5108956,
                "nome": "Nova Monte Verde"
            },
            {
                "codigo_ibge": 5106224,
                "nome": "Nova Mutum"
            },
            {
                "codigo_ibge": 5106174,
                "nome": "Nova Nazaré"
            },
            {
                "codigo_ibge": 5106232,
                "nome": "Nova Olímpia"
            },
            {
                "codigo_ibge": 5106190,
                "nome": "Nova Santa Helena"
            },
            {
                "codigo_ibge": 5106240,
                "nome": "Nova Ubiratã"
            },
            {
                "codigo_ibge": 5106257,
                "nome": "Nova Xavantina"
            },
            {
                "codigo_ibge": 5106273,
                "nome": "Novo Horizonte do Norte"
            },
            {
                "codigo_ibge": 5106265,
                "nome": "Novo Mundo"
            },
            {
                "codigo_ibge": 5106315,
                "nome": "Novo Santo Antônio"
            },
            {
                "codigo_ibge": 5106281,
                "nome": "Novo São Joaquim"
            },
            {
                "codigo_ibge": 5106299,
                "nome": "Paranaíta"
            },
            {
                "codigo_ibge": 5106307,
                "nome": "Paranatinga"
            },
            {
                "codigo_ibge": 5106372,
                "nome": "Pedra Preta"
            },
            {
                "codigo_ibge": 5106422,
                "nome": "Peixoto de Azevedo"
            },
            {
                "codigo_ibge": 5106455,
                "nome": "Planalto da Serra"
            },
            {
                "codigo_ibge": 5106505,
                "nome": "Poconé"
            },
            {
                "codigo_ibge": 5106653,
                "nome": "Pontal do Araguaia"
            },
            {
                "codigo_ibge": 5106703,
                "nome": "Ponte Branca"
            },
            {
                "codigo_ibge": 5106752,
                "nome": "Pontes e Lacerda"
            },
            {
                "codigo_ibge": 5106778,
                "nome": "Porto Alegre do Norte"
            },
            {
                "codigo_ibge": 5106802,
                "nome": "Porto dos Gaúchos"
            },
            {
                "codigo_ibge": 5106828,
                "nome": "Porto Esperidião"
            },
            {
                "codigo_ibge": 5106851,
                "nome": "Porto Estrela"
            },
            {
                "codigo_ibge": 5107008,
                "nome": "Poxoréu"
            },
            {
                "codigo_ibge": 5107040,
                "nome": "Primavera do Leste"
            },
            {
                "codigo_ibge": 5107065,
                "nome": "Querência"
            },
            {
                "codigo_ibge": 5107156,
                "nome": "Reserva do Cabaçal"
            },
            {
                "codigo_ibge": 5107180,
                "nome": "Ribeirão Cascalheira"
            },
            {
                "codigo_ibge": 5107198,
                "nome": "Ribeirãozinho"
            },
            {
                "codigo_ibge": 5107206,
                "nome": "Rio Branco"
            },
            {
                "codigo_ibge": 5107578,
                "nome": "Rondolândia"
            },
            {
                "codigo_ibge": 5107602,
                "nome": "Rondonópolis"
            },
            {
                "codigo_ibge": 5107701,
                "nome": "Rosário Oeste"
            },
            {
                "codigo_ibge": 5107750,
                "nome": "Salto do Céu"
            },
            {
                "codigo_ibge": 5107248,
                "nome": "Santa Carmem"
            },
            {
                "codigo_ibge": 5107743,
                "nome": "Santa Cruz do Xingu"
            },
            {
                "codigo_ibge": 5107768,
                "nome": "Santa Rita do Trivelato"
            },
            {
                "codigo_ibge": 5107776,
                "nome": "Santa Terezinha"
            },
            {
                "codigo_ibge": 5107263,
                "nome": "Santo Afonso"
            },
            {
                "codigo_ibge": 5107792,
                "nome": "Santo Antônio do Leste"
            },
            {
                "codigo_ibge": 5107800,
                "nome": "Santo Antônio do Leverger"
            },
            {
                "codigo_ibge": 5107859,
                "nome": "São Félix do Araguaia"
            },
            {
                "codigo_ibge": 5107297,
                "nome": "São José do Povo"
            },
            {
                "codigo_ibge": 5107305,
                "nome": "São José do Rio Claro"
            },
            {
                "codigo_ibge": 5107354,
                "nome": "São José do Xingu"
            },
            {
                "codigo_ibge": 5107107,
                "nome": "São José dos Quatro Marcos"
            },
            {
                "codigo_ibge": 5107404,
                "nome": "São Pedro da Cipa"
            },
            {
                "codigo_ibge": 5107875,
                "nome": "Sapezal"
            },
            {
                "codigo_ibge": 5107883,
                "nome": "Serra Nova Dourada"
            },
            {
                "codigo_ibge": 5107909,
                "nome": "Sinop"
            },
            {
                "codigo_ibge": 5107925,
                "nome": "Sorriso"
            },
            {
                "codigo_ibge": 5107941,
                "nome": "Tabaporã"
            },
            {
                "codigo_ibge": 5107958,
                "nome": "Tangará da Serra"
            },
            {
                "codigo_ibge": 5108006,
                "nome": "Tapurah"
            },
            {
                "codigo_ibge": 5108055,
                "nome": "Terra Nova do Norte"
            },
            {
                "codigo_ibge": 5108105,
                "nome": "Tesouro"
            },
            {
                "codigo_ibge": 5108204,
                "nome": "Torixoréu"
            },
            {
                "codigo_ibge": 5108303,
                "nome": "União do Sul"
            },
            {
                "codigo_ibge": 5108352,
                "nome": "Vale de São Domingos"
            },
            {
                "codigo_ibge": 5108402,
                "nome": "Várzea Grande"
            },
            {
                "codigo_ibge": 5108501,
                "nome": "Vera"
            },
            {
                "codigo_ibge": 5105507,
                "nome": "Vila Bela da Santíssima Trindade"
            },
            {
                "codigo_ibge": 5108600,
                "nome": "Vila Rica"
            }
        ]
    },
    "PA": {
        "nome": "Pará",
        "municipios": [
            {
                "codigo_ibge": 1500107,
                "nome": "Abaetetuba"
            },
            {
                "codigo_ibge": 1500131,
                "nome": "Abel Figueiredo"
            },
            {
                "codigo_ibge": 1500206,
                "nome": "Acará"
            },
            {
                "codigo_ibge": 1500305,
                "nome": "Afuá"
            },
            {
                "codigo_ibge": 1500347,
                "nome": "Água Azul do Norte"
            },
            {
                "codigo_ibge": 1500404,
                "nome": "Alenquer"
            },
            {
                "codigo_ibge": 1500503,
                "nome": "Almeirim"
            },
            {
                "codigo_ibge": 1500602,
                "nome": "Altamira"
            },
            {
                "codigo_ibge": 1500701,
                "nome": "Anajás"
            },
            {
                "codigo_ibge": 1500800,
                "nome": "Ananindeua"
            },
            {
                "codigo_ibge": 1500859,
                "nome": "Anapu"
            },
            {
                "codigo_ibge": 1500909,
                "nome": "Augusto Corrêa"
            },
            {
                "codigo_ibge": 1500958,
                "nome": "Aurora do Pará"
            },
            {
                "codigo_ibge": 1501006,
                "nome": "Aveiro"
            },
            {
                "codigo_ibge": 1501105,
                "nome": "Bagre"
            },
            {
                "codigo_ibge": 1501204,
                "nome": "Baião"
            },
            {
                "codigo_ibge": 1501253,
                "nome": "Bannach"
            },
            {
                "codigo_ibge": 1501303,
                "nome": "Barcarena"
            },
            {
                "codigo_ibge": 1501402,
                "nome": "Belém"
            },
            {
                "codigo_ibge": 1501451,
                "nome": "Belterra"
            },
            {
                "codigo_ibge": 1501501,
                "nome": "Benevides"
            },
            {
                "codigo_ibge": 1501576,
                "nome": "Bom Jesus do Tocantins"
            },
            {
                "codigo_ibge": 1501600,
                "nome": "Bonito"
            },
            {
                "codigo_ibge": 1501709,
                "nome": "Bragança"
            },
            {
                "codigo_ibge": 1501725,
                "nome": "Brasil Novo"
            },
            {
                "codigo_ibge": 1501758,
                "nome": "Brejo Grande do Araguaia"
            },
            {
                "codigo_ibge": 1501782,
                "nome": "Breu Branco"
            },
            {
                "codigo_ibge": 1501808,
                "nome": "Breves"
            },
            {
                "codigo_ibge": 1501907,
                "nome": "Bujaru"
            },
            {
                "codigo_ibge": 1502004,
                "nome": "Cachoeira do Arari"
            },
            {
                "codigo_ibge": 1501956,
                "nome": "Cachoeira do Piriá"
            },
            {
                "codigo_ibge": 1502103,
                "nome": "Cametá"
            },
            {
                "codigo_ibge": 1502152,
                "nome": "Canaã dos Carajás"
            },
            {
                "codigo_ibge": 1502202,
                "nome": "Capanema"
            },
            {
                "codigo_ibge": 1502301,
                "nome": "Capitão Poço"
            },
            {
                "codigo_ibge": 1502400,
                "nome": "Castanhal"
            },
            {
                "codigo_ibge": 1502509,
                "nome": "Chaves"
            },
            {
                "codigo_ibge": 1502608,
                "nome": "Colares"
            },
            {
                "codigo_ibge": 1502707,
                "nome": "Conceição do Araguaia"
            },
            {
                "codigo_ibge": 1502756,
                "nome": "Concórdia do Pará"
            },
            {
                "codigo_ibge": 1502764,
                "nome": "Cumaru do Norte"
            },
            {
                "codigo_ibge": 1502772,
                "nome": "Curionópolis"
            },
            {
                "codigo_ibge": 1502806,
                "nome": "Curralinho"
            },
            {
                "codigo_ibge": 1502855,
                "nome": "Curuá"
            },
            {
                "codigo_ibge": 1502905,
                "nome": "Curuçá"
            },
            {
                "codigo_ibge": 1502939,
                "nome": "Dom Eliseu"
            },
            {
                "codigo_ibge": 1502954,
                "nome": "Eldorado do Carajás"
            },
            {
                "codigo_ibge": 1503002,
                "nome": "Faro"
            },
            {
                "codigo_ibge": 1503044,
                "nome": "Floresta do Araguaia"
            },
            {
                "codigo_ibge": 1503077,
                "nome": "Garrafão do Norte"
            },
            {
                "codigo_ibge": 1503093,
                "nome": "Goianésia do Pará"
            },
            {
                "codigo_ibge": 1503101,
                "nome": "Gurupá"
            },
            {
                "codigo_ibge": 1503200,
                "nome": "Igarapé-Açu"
            },
            {
                "codigo_ibge": 1503309,
                "nome": "Igarapé-Miri"
            },
            {
                "codigo_ibge": 1503408,
                "nome": "Inhangapi"
            },
            {
                "codigo_ibge": 1503457,
                "nome": "Ipixuna do Pará"
            },
            {
                "codigo_ibge": 1503507,
                "nome": "Irituia"
            },
            {
                "codigo_ibge": 1503606,
                "nome": "Itaituba"
            },
            {
                "codigo_ibge": 1503705,
                "nome": "Itupiranga"
            },
            {
                "codigo_ibge": 1503754,
                "nome": "Jacareacanga"
            },
            {
                "codigo_ibge": 1503804,
                "nome": "Jacundá"
            },
            {
                "codigo_ibge": 1503903,
                "nome": "Juruti"
            },
            {
                "codigo_ibge": 1504000,
                "nome": "Limoeiro do Ajuru"
            },
            {
                "codigo_ibge": 1504059,
                "nome": "Mãe do Rio"
            },
            {
                "codigo_ibge": 1504109,
                "nome": "Magalhães Barata"
            },
            {
                "codigo_ibge": 1504208,
                "nome": "Marabá"
            },
            {
                "codigo_ibge": 1504307,
                "nome": "Maracanã"
            },
            {
                "codigo_ibge": 1504406,
                "nome": "Marapanim"
            },
            {
                "codigo_ibge": 1504422,
                "nome": "Marituba"
            },
            {
                "codigo_ibge": 1504455,
                "nome": "Medicilândia"
            },
            {
                "codigo_ibge": 1504505,
                "nome": "Melgaço"
            },
            {
                "codigo_ibge": 1504604,
                "nome": "Mocajuba"
            },
            {
                "codigo_ibge": 1504703,
                "nome": "Moju"
            },
            {
                "codigo_ibge": 1504752,
                "nome": "Mojuí dos Campos"
            },
            {
                "codigo_ibge": 1504802,
                "nome": "Monte Alegre"
            },
            {
                "codigo_ibge": 1504901,
                "nome": "Muaná"
            },
            {
                "codigo_ibge": 1504950,
                "nome": "Nova Esperança do Piriá"
            },
            {
                "codigo_ibge": 1504976,
                "nome": "Nova Ipixuna"
            },
            {
                "codigo_ibge": 1505007,
                "nome": "Nova Timboteua"
            },
            {
                "codigo_ibge": 1505031,
                "nome": "Novo Progresso"
            },
            {
                "codigo_ibge": 1505064,
                "nome": "Novo Repartimento"
            },
            {
                "codigo_ibge": 1505106,
                "nome": "Óbidos"
            },
            {
                "codigo_ibge": 1505205,
                "nome": "Oeiras do Pará"
            },
            {
                "codigo_ibge": 1505304,
                "nome": "Oriximiná"
            },
            {
                "codigo_ibge": 1505403,
                "nome": "Ourém"
            },
            {
                "codigo_ibge": 1505437,
                "nome": "Ourilândia do Norte"
            },
            {
                "codigo_ibge": 1505486,
                "nome": "Pacajá"
            },
            {
                "codigo_ibge": 1505494,
                "nome": "Palestina do Pará"
            },
            {
                "codigo_ibge": 1505502,
                "nome": "Paragominas"
            },
            {
                "codigo_ibge": 1505536,
                "nome": "Parauapebas"
            },
            {
                "codigo_ibge": 1505551,
                "nome": "Pau d'Arco"
            },
            {
                "codigo_ibge": 1505601,
                "nome": "Peixe-Boi"
            },
            {
                "codigo_ibge": 1505635,
                "nome": "Piçarra"
            },
            {
                "codigo_ibge": 1505650,
                "nome": "Placas"
            },
            {
                "codigo_ibge": 1505700,
                "nome": "Ponta de Pedras"
            },
            {
                "codigo_ibge": 1505809,
                "nome": "Portel"
            },
            {
                "codigo_ibge": 1505908,
                "nome": "Porto de Moz"
            },
            {
                "codigo_ibge": 1506005,
                "nome": "Prainha"
            },
            {
                "codigo_ibge": 1506104,
                "nome": "Primavera"
            },
            {
                "codigo_ibge": 1506112,
                "nome": "Quatipuru"
            },
            {
                "codigo_ibge": 1506138,
                "nome": "Redenção"
            },
            {
                "codigo_ibge": 1506161,
                "nome": "Rio Maria"
            },
            {
                "codigo_ibge": 1506187,
                "nome": "Rondon do Pará"
            },
            {
                "codigo_ibge": 1506195,
                "nome": "Rurópolis"
            },
            {
                "codigo_ibge": 1506203,
                "nome": "Salinópolis"
            },
            {
                "codigo_ibge": 1506302,
                "nome": "Salvaterra"
            },
            {
                "codigo_ibge": 1506351,
                "nome": "Santa Bárbara do Pará"
            },
            {
                "codigo_ibge": 1506401,
                "nome": "Santa Cruz do Arari"
            },
            {
                "codigo_ibge": 1506500,
                "nome": "Santa Izabel do Pará"
            },
            {
                "codigo_ibge": 1506559,
                "nome": "Santa Luzia do Pará"
            },
            {
                "codigo_ibge": 1506583,
                "nome": "Santa Maria das Barreiras"
            },
            {
                "codigo_ibge": 1506609,
                "nome": "Santa Maria do Pará"
            },
            {
                "codigo_ibge": 1506708,
                "nome": "Santana do Araguaia"
            },
            {
                "codigo_ibge": 1506807,
                "nome": "Santarém"
            },
            {
                "codigo_ibge": 1506906,
                "nome": "Santarém Novo"
            },
            {
                "codigo_ibge": 1507003,
                "nome": "Santo Antônio do Tauá"
            },
            {
                "codigo_ibge": 1507102,
                "nome": "São Caetano de Odivelas"
            },
            {
                "codigo_ibge": 1507151,
                "nome": "São Domingos do Araguaia"
            },
            {
                "codigo_ibge": 1507201,
                "nome": "São Domingos do Capim"
            },
            {
                "codigo_ibge": 1507300,
                "nome": "São Félix do Xingu"
            },
            {
                "codigo_ibge": 1507409,
                "nome": "São Francisco do Pará"
            },
            {
                "codigo_ibge": 1507458,
                "nome": "São Geraldo do Araguaia"
            },
            {
                "codigo_ibge": 1507466,
                "nome": "São João da Ponta"
            },
            {
                "codigo_ibge": 1507474,
                "nome": "São João de Pirabas"
            },
            {
                "codigo_ibge": 1507508,
                "nome": "São João do Araguaia"
            },
            {
                "codigo_ibge": 1507607,
                "nome": "São Miguel do Guamá"
            },
            {
                "codigo_ibge": 1507706,
                "nome": "São Sebastião da Boa Vista"
            },
            {
                "codigo_ibge": 1507755,
                "nome": "Sapucaia"
            },
            {
                "codigo_ibge": 1507805,
                "nome": "Senador José Porfírio"
            },
            {
                "codigo_ibge": 1507904,
                "nome": "Soure"
            },
            {
                "codigo_ibge": 1507953,
                "nome": "Tailândia"
            },
            {
                "codigo_ibge": 1507961,
                "nome": "Terra Alta"
            },
            {
                "codigo_ibge": 1507979,
                "nome": "Terra Santa"
            },
            {
                "codigo_ibge": 1508001,
                "nome": "Tomé-Açu"
            },
            {
                "codigo_ibge": 1508035,
                "nome": "Tracuateua"
            },
            {
                "codigo_ibge": 1508050,
                "nome": "Trairão"
            },
            {
                "codigo_ibge": 1508084,
                "nome": "Tucumã"
            },
            {
                "codigo_ibge": 1508100,
                "nome": "Tucuruí"
            },
            {
                "codigo_ibge": 1508126,
                "nome": "Ulianópolis"
            },
            {
                "codigo_ibge": 1508159,
                "nome": "Uruará"
            },
            {
                "codigo_ibge": 1508209,
                "nome": "Vigia"
            },
            {
                "codigo_ibge": 1508308,
                "nome": "Viseu"
            },
            {
                "codigo_ibge": 1508357,
                "nome": "Vitória do Xingu"
            },
            {
                "codigo_ibge": 1508407,
                "nome": "Xinguara"
            }
        ]
    },
    "PB": {
        "nome": "Paraíba",
        "municipios": [
            {
                "codigo_ibge": 2500106,
                "nome": "Água Branca"
            },
            {
                "codigo_ibge": 2500205,
                "nome": "Aguiar"
            },
            {
                "codigo_ibge": 2500304,
                "nome": "Alagoa Grande"
            },
            {
                "codigo_ibge": 2500403,
                "nome": "Alagoa Nova"
            },
            {
                "codigo_ibge": 2500502,
                "nome": "Alagoinha"
            },
            {
                "codigo_ibge": 2500536,
                "nome": "Alcantil"
            },
            {
                "codigo_ibge": 2500577,
                "nome": "Algodão de Jandaíra"
            },
            {
                "codigo_ibge": 2500601,
                "nome": "Alhandra"
            },
            {
                "codigo_ibge": 2500734,
                "nome": "Amparo"
            },
            {
                "codigo_ibge": 2500775,
                "nome": "Aparecida"
            },
            {
                "codigo_ibge": 2500809,
                "nome": "Araçagi"
            },
            {
                "codigo_ibge": 2500908,
                "nome": "Arara"
            },
            {
                "codigo_ibge": 2501005,
                "nome": "Araruna"
            },
            {
                "codigo_ibge": 2501104,
                "nome": "Areia"
            },
            {
                "codigo_ibge": 2501153,
                "nome": "Areia de Baraúnas"
            },
            {
                "codigo_ibge": 2501203,
                "nome": "Areial"
            },
            {
                "codigo_ibge": 2501302,
                "nome": "Aroeiras"
            },
            {
                "codigo_ibge": 2501351,
                "nome": "Assunção"
            },
            {
                "codigo_ibge": 2501401,
                "nome": "Baía da Traição"
            },
            {
                "codigo_ibge": 2501500,
                "nome": "Bananeiras"
            },
            {
                "codigo_ibge": 2501534,
                "nome": "Baraúna"
            },
            {
                "codigo_ibge": 2501609,
                "nome": "Barra de Santa Rosa"
            },
            {
                "codigo_ibge": 2501575,
                "nome": "Barra de Santana"
            },
            {
                "codigo_ibge": 2501708,
                "nome": "Barra de São Miguel"
            },
            {
                "codigo_ibge": 2501807,
                "nome": "Bayeux"
            },
            {
                "codigo_ibge": 2501906,
                "nome": "Belém"
            },
            {
                "codigo_ibge": 2502003,
                "nome": "Belém do Brejo do Cruz"
            },
            {
                "codigo_ibge": 2502052,
                "nome": "Bernardino Batista"
            },
            {
                "codigo_ibge": 2502102,
                "nome": "Boa Ventura"
            },
            {
                "codigo_ibge": 2502151,
                "nome": "Boa Vista"
            },
            {
                "codigo_ibge": 2502201,
                "nome": "Bom Jesus"
            },
            {
                "codigo_ibge": 2502300,
                "nome": "Bom Sucesso"
            },
            {
                "codigo_ibge": 2502409,
                "nome": "Bonito de Santa Fé"
            },
            {
                "codigo_ibge": 2502508,
                "nome": "Boqueirão"
            },
            {
                "codigo_ibge": 2502706,
                "nome": "Borborema"
            },
            {
                "codigo_ibge": 2502805,
                "nome": "Brejo do Cruz"
            },
            {
                "codigo_ibge": 2502904,
                "nome": "Brejo dos Santos"
            },
            {
                "codigo_ibge": 2503001,
                "nome": "Caaporã"
            },
            {
                "codigo_ibge": 2503100,
                "nome": "Cabaceiras"
            },
            {
                "codigo_ibge": 2503209,
                "nome": "Cabedelo"
            },
            {
                "codigo_ibge": 2503308,
                "nome": "Cachoeira dos Índios"
            },
            {
                "codigo_ibge": 2503407,
                "nome": "Cacimba de Areia"
            },
            {
                "codigo_ibge": 2503506,
                "nome": "Cacimba de Dentro"
            },
            {
                "codigo_ibge": 2503555,
                "nome": "Cacimbas"
            },
            {
                "codigo_ibge": 2503605,
                "nome": "Caiçara"
            },
            {
                "codigo_ibge": 2503704,
                "nome": "Cajazeiras"
            },
            {
                "codigo_ibge": 2503753,
                "nome": "Cajazeirinhas"
            },
            {
                "codigo_ibge": 2503803,
                "nome": "Caldas Brandão"
            },
            {
                "codigo_ibge": 2503902,
                "nome": "Camalaú"
            },
            {
                "codigo_ibge": 2504009,
                "nome": "Campina Grande"
            },
            {
                "codigo_ibge": 2504033,
                "nome": "Capim"
            },
            {
                "codigo_ibge": 2504074,
                "nome": "Caraúbas"
            },
            {
                "codigo_ibge": 2504108,
                "nome": "Carrapateira"
            },
            {
                "codigo_ibge": 2504157,
                "nome": "Casserengue"
            },
            {
                "codigo_ibge": 2504207,
                "nome": "Catingueira"
            },
            {
                "codigo_ibge": 2504306,
                "nome": "Catolé do Rocha"
            },
            {
                "codigo_ibge": 2504355,
                "nome": "Caturité"
            },
            {
                "codigo_ibge": 2504405,
                "nome": "Conceição"
            },
            {
                "codigo_ibge": 2504504,
                "nome": "Condado"
            },
            {
                "codigo_ibge": 2504603,
                "nome": "Conde"
            },
            {
                "codigo_ibge": 2504702,
                "nome": "Congo"
            },
            {
                "codigo_ibge": 2504801,
                "nome": "Coremas"
            },
            {
                "codigo_ibge": 2504850,
                "nome": "Coxixola"
            },
            {
                "codigo_ibge": 2504900,
                "nome": "Cruz do Espírito Santo"
            },
            {
                "codigo_ibge": 2505006,
                "nome": "Cubati"
            },
            {
                "codigo_ibge": 2505105,
                "nome": "Cuité"
            },
            {
                "codigo_ibge": 2505238,
                "nome": "Cuité de Mamanguape"
            },
            {
                "codigo_ibge": 2505204,
                "nome": "Cuitegi"
            },
            {
                "codigo_ibge": 2505279,
                "nome": "Curral de Cima"
            },
            {
                "codigo_ibge": 2505303,
                "nome": "Curral Velho"
            },
            {
                "codigo_ibge": 2505352,
                "nome": "Damião"
            },
            {
                "codigo_ibge": 2505402,
                "nome": "Desterro"
            },
            {
                "codigo_ibge": 2505600,
                "nome": "Diamante"
            },
            {
                "codigo_ibge": 2505709,
                "nome": "Dona Inês"
            },
            {
                "codigo_ibge": 2505808,
                "nome": "Duas Estradas"
            },
            {
                "codigo_ibge": 2505907,
                "nome": "Emas"
            },
            {
                "codigo_ibge": 2506004,
                "nome": "Esperança"
            },
            {
                "codigo_ibge": 2506103,
                "nome": "Fagundes"
            },
            {
                "codigo_ibge": 2506202,
                "nome": "Frei Martinho"
            },
            {
                "codigo_ibge": 2506251,
                "nome": "Gado Bravo"
            },
            {
                "codigo_ibge": 2506301,
                "nome": "Guarabira"
            },
            {
                "codigo_ibge": 2506400,
                "nome": "Gurinhém"
            },
            {
                "codigo_ibge": 2506509,
                "nome": "Gurjão"
            },
            {
                "codigo_ibge": 2506608,
                "nome": "Ibiara"
            },
            {
                "codigo_ibge": 2502607,
                "nome": "Igaracy"
            },
            {
                "codigo_ibge": 2506707,
                "nome": "Imaculada"
            },
            {
                "codigo_ibge": 2506806,
                "nome": "Ingá"
            },
            {
                "codigo_ibge": 2506905,
                "nome": "Itabaiana"
            },
            {
                "codigo_ibge": 2507002,
                "nome": "Itaporanga"
            },
            {
                "codigo_ibge": 2507101,
                "nome": "Itapororoca"
            },
            {
                "codigo_ibge": 2507200,
                "nome": "Itatuba"
            },
            {
                "codigo_ibge": 2507309,
                "nome": "Jacaraú"
            },
            {
                "codigo_ibge": 2507408,
                "nome": "Jericó"
            },
            {
                "codigo_ibge": 2507507,
                "nome": "João Pessoa"
            },
            {
                "codigo_ibge": 2513653,
                "nome": "Joca Claudino"
            },
            {
                "codigo_ibge": 2507606,
                "nome": "Juarez Távora"
            },
            {
                "codigo_ibge": 2507705,
                "nome": "Juazeirinho"
            },
            {
                "codigo_ibge": 2507804,
                "nome": "Junco do Seridó"
            },
            {
                "codigo_ibge": 2507903,
                "nome": "Juripiranga"
            },
            {
                "codigo_ibge": 2508000,
                "nome": "Juru"
            },
            {
                "codigo_ibge": 2508109,
                "nome": "Lagoa"
            },
            {
                "codigo_ibge": 2508208,
                "nome": "Lagoa de Dentro"
            },
            {
                "codigo_ibge": 2508307,
                "nome": "Lagoa Seca"
            },
            {
                "codigo_ibge": 2508406,
                "nome": "Lastro"
            },
            {
                "codigo_ibge": 2508505,
                "nome": "Livramento"
            },
            {
                "codigo_ibge": 2508554,
                "nome": "Logradouro"
            },
            {
                "codigo_ibge": 2508604,
                "nome": "Lucena"
            },
            {
                "codigo_ibge": 2508703,
                "nome": "Mãe d'Água"
            },
            {
                "codigo_ibge": 2508802,
                "nome": "Malta"
            },
            {
                "codigo_ibge": 2508901,
                "nome": "Mamanguape"
            },
            {
                "codigo_ibge": 2509008,
                "nome": "Manaíra"
            },
            {
                "codigo_ibge": 2509057,
                "nome": "Marcação"
            },
            {
                "codigo_ibge": 2509107,
                "nome": "Mari"
            },
            {
                "codigo_ibge": 2509156,
                "nome": "Marizópolis"
            },
            {
                "codigo_ibge": 2509206,
                "nome": "Massaranduba"
            },
            {
                "codigo_ibge": 2509305,
                "nome": "Mataraca"
            },
            {
                "codigo_ibge": 2509339,
                "nome": "Matinhas"
            },
            {
                "codigo_ibge": 2509370,
                "nome": "Mato Grosso"
            },
            {
                "codigo_ibge": 2509396,
                "nome": "Maturéia"
            },
            {
                "codigo_ibge": 2509404,
                "nome": "Mogeiro"
            },
            {
                "codigo_ibge": 2509503,
                "nome": "Montadas"
            },
            {
                "codigo_ibge": 2509602,
                "nome": "Monte Horebe"
            },
            {
                "codigo_ibge": 2509701,
                "nome": "Monteiro"
            },
            {
                "codigo_ibge": 2509800,
                "nome": "Mulungu"
            },
            {
                "codigo_ibge": 2509909,
                "nome": "Natuba"
            },
            {
                "codigo_ibge": 2510006,
                "nome": "Nazarezinho"
            },
            {
                "codigo_ibge": 2510105,
                "nome": "Nova Floresta"
            },
            {
                "codigo_ibge": 2510204,
                "nome": "Nova Olinda"
            },
            {
                "codigo_ibge": 2510303,
                "nome": "Nova Palmeira"
            },
            {
                "codigo_ibge": 2510402,
                "nome": "Olho d'Água"
            },
            {
                "codigo_ibge": 2510501,
                "nome": "Olivedos"
            },
            {
                "codigo_ibge": 2510600,
                "nome": "Ouro Velho"
            },
            {
                "codigo_ibge": 2510659,
                "nome": "Parari"
            },
            {
                "codigo_ibge": 2510709,
                "nome": "Passagem"
            },
            {
                "codigo_ibge": 2510808,
                "nome": "Patos"
            },
            {
                "codigo_ibge": 2510907,
                "nome": "Paulista"
            },
            {
                "codigo_ibge": 2511004,
                "nome": "Pedra Branca"
            },
            {
                "codigo_ibge": 2511103,
                "nome": "Pedra Lavrada"
            },
            {
                "codigo_ibge": 2511202,
                "nome": "Pedras de Fogo"
            },
            {
                "codigo_ibge": 2512721,
                "nome": "Pedro Régis"
            },
            {
                "codigo_ibge": 2511301,
                "nome": "Piancó"
            },
            {
                "codigo_ibge": 2511400,
                "nome": "Picuí"
            },
            {
                "codigo_ibge": 2511509,
                "nome": "Pilar"
            },
            {
                "codigo_ibge": 2511608,
                "nome": "Pilões"
            },
            {
                "codigo_ibge": 2511707,
                "nome": "Pilõezinhos"
            },
            {
                "codigo_ibge": 2511806,
                "nome": "Pirpirituba"
            },
            {
                "codigo_ibge": 2511905,
                "nome": "Pitimbu"
            },
            {
                "codigo_ibge": 2512002,
                "nome": "Pocinhos"
            },
            {
                "codigo_ibge": 2512036,
                "nome": "Poço Dantas"
            },
            {
                "codigo_ibge": 2512077,
                "nome": "Poço de José de Moura"
            },
            {
                "codigo_ibge": 2512101,
                "nome": "Pombal"
            },
            {
                "codigo_ibge": 2512200,
                "nome": "Prata"
            },
            {
                "codigo_ibge": 2512309,
                "nome": "Princesa Isabel"
            },
            {
                "codigo_ibge": 2512408,
                "nome": "Puxinanã"
            },
            {
                "codigo_ibge": 2512507,
                "nome": "Queimadas"
            },
            {
                "codigo_ibge": 2512606,
                "nome": "Quixabá"
            },
            {
                "codigo_ibge": 2512705,
                "nome": "Remígio"
            },
            {
                "codigo_ibge": 2512747,
                "nome": "Riachão"
            },
            {
                "codigo_ibge": 2512754,
                "nome": "Riachão do Bacamarte"
            },
            {
                "codigo_ibge": 2512762,
                "nome": "Riachão do Poço"
            },
            {
                "codigo_ibge": 2512788,
                "nome": "Riacho de Santo Antônio"
            },
            {
                "codigo_ibge": 2512804,
                "nome": "Riacho dos Cavalos"
            },
            {
                "codigo_ibge": 2512903,
                "nome": "Rio Tinto"
            },
            {
                "codigo_ibge": 2513000,
                "nome": "Salgadinho"
            },
            {
                "codigo_ibge": 2513109,
                "nome": "Salgado de São Félix"
            },
            {
                "codigo_ibge": 2513158,
                "nome": "Santa Cecília"
            },
            {
                "codigo_ibge": 2513208,
                "nome": "Santa Cruz"
            },
            {
                "codigo_ibge": 2513307,
                "nome": "Santa Helena"
            },
            {
                "codigo_ibge": 2513356,
                "nome": "Santa Inês"
            },
            {
                "codigo_ibge": 2513406,
                "nome": "Santa Luzia"
            },
            {
                "codigo_ibge": 2513703,
                "nome": "Santa Rita"
            },
            {
                "codigo_ibge": 2513802,
                "nome": "Santa Teresinha"
            },
            {
                "codigo_ibge": 2513505,
                "nome": "Santana de Mangueira"
            },
            {
                "codigo_ibge": 2513604,
                "nome": "Santana dos Garrotes"
            },
            {
                "codigo_ibge": 2513851,
                "nome": "Santo André"
            },
            {
                "codigo_ibge": 2513927,
                "nome": "São Bentinho"
            },
            {
                "codigo_ibge": 2513901,
                "nome": "São Bento"
            },
            {
                "codigo_ibge": 2513968,
                "nome": "São Domingos"
            },
            {
                "codigo_ibge": 2513943,
                "nome": "São Domingos do Cariri"
            },
            {
                "codigo_ibge": 2513984,
                "nome": "São Francisco"
            },
            {
                "codigo_ibge": 2514008,
                "nome": "São João do Cariri"
            },
            {
                "codigo_ibge": 2500700,
                "nome": "São João do Rio do Peixe"
            },
            {
                "codigo_ibge": 2514107,
                "nome": "São João do Tigre"
            },
            {
                "codigo_ibge": 2514206,
                "nome": "São José da Lagoa Tapada"
            },
            {
                "codigo_ibge": 2514305,
                "nome": "São José de Caiana"
            },
            {
                "codigo_ibge": 2514404,
                "nome": "São José de Espinharas"
            },
            {
                "codigo_ibge": 2514503,
                "nome": "São José de Piranhas"
            },
            {
                "codigo_ibge": 2514552,
                "nome": "São José de Princesa"
            },
            {
                "codigo_ibge": 2514602,
                "nome": "São José do Bonfim"
            },
            {
                "codigo_ibge": 2514651,
                "nome": "São José do Brejo do Cruz"
            },
            {
                "codigo_ibge": 2514701,
                "nome": "São José do Sabugi"
            },
            {
                "codigo_ibge": 2514800,
                "nome": "São José dos Cordeiros"
            },
            {
                "codigo_ibge": 2514453,
                "nome": "São José dos Ramos"
            },
            {
                "codigo_ibge": 2514909,
                "nome": "São Mamede"
            },
            {
                "codigo_ibge": 2515005,
                "nome": "São Miguel de Taipu"
            },
            {
                "codigo_ibge": 2515104,
                "nome": "São Sebastião de Lagoa de Roça"
            },
            {
                "codigo_ibge": 2515203,
                "nome": "São Sebastião do Umbuzeiro"
            },
            {
                "codigo_ibge": 2515401,
                "nome": "São Vicente do Seridó"
            },
            {
                "codigo_ibge": 2515302,
                "nome": "Sapé"
            },
            {
                "codigo_ibge": 2515500,
                "nome": "Serra Branca"
            },
            {
                "codigo_ibge": 2515609,
                "nome": "Serra da Raiz"
            },
            {
                "codigo_ibge": 2515708,
                "nome": "Serra Grande"
            },
            {
                "codigo_ibge": 2515807,
                "nome": "Serra Redonda"
            },
            {
                "codigo_ibge": 2515906,
                "nome": "Serraria"
            },
            {
                "codigo_ibge": 2515930,
                "nome": "Sertãozinho"
            },
            {
                "codigo_ibge": 2515971,
                "nome": "Sobrado"
            },
            {
                "codigo_ibge": 2516003,
                "nome": "Solânea"
            },
            {
                "codigo_ibge": 2516102,
                "nome": "Soledade"
            },
            {
                "codigo_ibge": 2516151,
                "nome": "Sossêgo"
            },
            {
                "codigo_ibge": 2516201,
                "nome": "Sousa"
            },
            {
                "codigo_ibge": 2516300,
                "nome": "Sumé"
            },
            {
                "codigo_ibge": 2516409,
                "nome": "Tacima"
            },
            {
                "codigo_ibge": 2516508,
                "nome": "Taperoá"
            },
            {
                "codigo_ibge": 2516607,
                "nome": "Tavares"
            },
            {
                "codigo_ibge": 2516706,
                "nome": "Teixeira"
            },
            {
                "codigo_ibge": 2516755,
                "nome": "Tenório"
            },
            {
                "codigo_ibge": 2516805,
                "nome": "Triunfo"
            },
            {
                "codigo_ibge": 2516904,
                "nome": "Uiraúna"
            },
            {
                "codigo_ibge": 2517001,
                "nome": "Umbuzeiro"
            },
            {
                "codigo_ibge": 2517100,
                "nome": "Várzea"
            },
            {
                "codigo_ibge": 2517209,
                "nome": "Vieirópolis"
            },
            {
                "codigo_ibge": 2505501,
                "nome": "Vista Serrana"
            },
            {
                "codigo_ibge": 2517407,
                "nome": "Zabelê"
            }
        ]
    },
    "PE": {
        "nome": "Pernambuco",
        "municipios": [
            {
                "codigo_ibge": 2600054,
                "nome": "Abreu e Lima"
            },
            {
                "codigo_ibge": 2600104,
                "nome": "Afogados da Ingazeira"
            },
            {
                "codigo_ibge": 2600203,
                "nome": "Afrânio"
            },
            {
                "codigo_ibge": 2600302,
                "nome": "Agrestina"
            },
            {
                "codigo_ibge": 2600401,
                "nome": "Água Preta"
            },
            {
                "codigo_ibge": 2600500,
                "nome": "Águas Belas"
            },
            {
                "codigo_ibge": 2600609,
                "nome": "Alagoinha"
            },
            {
                "codigo_ibge": 2600708,
                "nome": "Aliança"
            },
            {
                "codigo_ibge": 2600807,
                "nome": "Altinho"
            },
            {
                "codigo_ibge": 2600906,
                "nome": "Amaraji"
            },
            {
                "codigo_ibge": 2601003,
                "nome": "Angelim"
            },
            {
                "codigo_ibge": 2601052,
                "nome": "Araçoiaba"
            },
            {
                "codigo_ibge": 2601102,
                "nome": "Araripina"
            },
            {
                "codigo_ibge": 2601201,
                "nome": "Arcoverde"
            },
            {
                "codigo_ibge": 2601300,
                "nome": "Barra de Guabiraba"
            },
            {
                "codigo_ibge": 2601409,
                "nome": "Barreiros"
            },
            {
                "codigo_ibge": 2601508,
                "nome": "Belém de Maria"
            },
            {
                "codigo_ibge": 2601607,
                "nome": "Belém do São Francisco"
            },
            {
                "codigo_ibge": 2601706,
                "nome": "Belo Jardim"
            },
            {
                "codigo_ibge": 2601805,
                "nome": "Betânia"
            },
            {
                "codigo_ibge": 2601904,
                "nome": "Bezerros"
            },
            {
                "codigo_ibge": 2602001,
                "nome": "Bodocó"
            },
            {
                "codigo_ibge": 2602100,
                "nome": "Bom Conselho"
            },
            {
                "codigo_ibge": 2602209,
                "nome": "Bom Jardim"
            },
            {
                "codigo_ibge": 2602308,
                "nome": "Bonito"
            },
            {
                "codigo_ibge": 2602407,
                "nome": "Brejão"
            },
            {
                "codigo_ibge": 2602506,
                "nome": "Brejinho"
            },
            {
                "codigo_ibge": 2602605,
                "nome": "Brejo da Madre de Deus"
            },
            {
                "codigo_ibge": 2602704,
                "nome": "Buenos Aires"
            },
            {
                "codigo_ibge": 2602803,
                "nome": "Buíque"
            },
            {
                "codigo_ibge": 2602902,
                "nome": "Cabo de Santo Agostinho"
            },
            {
                "codigo_ibge": 2603009,
                "nome": "Cabrobó"
            },
            {
                "codigo_ibge": 2603108,
                "nome": "Cachoeirinha"
            },
            {
                "codigo_ibge": 2603207,
                "nome": "Caetés"
            },
            {
                "codigo_ibge": 2603306,
                "nome": "Calçado"
            },
            {
                "codigo_ibge": 2603405,
                "nome": "Calumbi"
            },
            {
                "codigo_ibge": 2603454,
                "nome": "Camaragibe"
            },
            {
                "codigo_ibge": 2603504,
                "nome": "Camocim de São Félix"
            },
            {
                "codigo_ibge": 2603603,
                "nome": "Camutanga"
            },
            {
                "codigo_ibge": 2603702,
                "nome": "Canhotinho"
            },
            {
                "codigo_ibge": 2603801,
                "nome": "Capoeiras"
            },
            {
                "codigo_ibge": 2603900,
                "nome": "Carnaíba"
            },
            {
                "codigo_ibge": 2603926,
                "nome": "Carnaubeira da Penha"
            },
            {
                "codigo_ibge": 2604007,
                "nome": "Carpina"
            },
            {
                "codigo_ibge": 2604106,
                "nome": "Caruaru"
            },
            {
                "codigo_ibge": 2604155,
                "nome": "Casinhas"
            },
            {
                "codigo_ibge": 2604205,
                "nome": "Catende"
            },
            {
                "codigo_ibge": 2604304,
                "nome": "Cedro"
            },
            {
                "codigo_ibge": 2604403,
                "nome": "Chã de Alegria"
            },
            {
                "codigo_ibge": 2604502,
                "nome": "Chã Grande"
            },
            {
                "codigo_ibge": 2604601,
                "nome": "Condado"
            },
            {
                "codigo_ibge": 2604700,
                "nome": "Correntes"
            },
            {
                "codigo_ibge": 2604809,
                "nome": "Cortês"
            },
            {
                "codigo_ibge": 2604908,
                "nome": "Cumaru"
            },
            {
                "codigo_ibge": 2605004,
                "nome": "Cupira"
            },
            {
                "codigo_ibge": 2605103,
                "nome": "Custódia"
            },
            {
                "codigo_ibge": 2605152,
                "nome": "Dormentes"
            },
            {
                "codigo_ibge": 2605202,
                "nome": "Escada"
            },
            {
                "codigo_ibge": 2605301,
                "nome": "Exu"
            },
            {
                "codigo_ibge": 2605400,
                "nome": "Feira Nova"
            },
            {
                "codigo_ibge": 2605459,
                "nome": "Fernando de Noronha"
            },
            {
                "codigo_ibge": 2605509,
                "nome": "Ferreiros"
            },
            {
                "codigo_ibge": 2605608,
                "nome": "Flores"
            },
            {
                "codigo_ibge": 2605707,
                "nome": "Floresta"
            },
            {
                "codigo_ibge": 2605806,
                "nome": "Frei Miguelinho"
            },
            {
                "codigo_ibge": 2605905,
                "nome": "Gameleira"
            },
            {
                "codigo_ibge": 2606002,
                "nome": "Garanhuns"
            },
            {
                "codigo_ibge": 2606101,
                "nome": "Glória do Goitá"
            },
            {
                "codigo_ibge": 2606200,
                "nome": "Goiana"
            },
            {
                "codigo_ibge": 2606309,
                "nome": "Granito"
            },
            {
                "codigo_ibge": 2606408,
                "nome": "Gravatá"
            },
            {
                "codigo_ibge": 2606507,
                "nome": "Iati"
            },
            {
                "codigo_ibge": 2606606,
                "nome": "Ibimirim"
            },
            {
                "codigo_ibge": 2606705,
                "nome": "Ibirajuba"
            },
            {
                "codigo_ibge": 2606804,
                "nome": "Igarassu"
            },
            {
                "codigo_ibge": 2606903,
                "nome": "Iguaracy"
            },
            {
                "codigo_ibge": 2607604,
                "nome": "Ilha de Itamaracá"
            },
            {
                "codigo_ibge": 2607000,
                "nome": "Inajá"
            },
            {
                "codigo_ibge": 2607109,
                "nome": "Ingazeira"
            },
            {
                "codigo_ibge": 2607208,
                "nome": "Ipojuca"
            },
            {
                "codigo_ibge": 2607307,
                "nome": "Ipubi"
            },
            {
                "codigo_ibge": 2607406,
                "nome": "Itacuruba"
            },
            {
                "codigo_ibge": 2607505,
                "nome": "Itaíba"
            },
            {
                "codigo_ibge": 2607653,
                "nome": "Itambé"
            },
            {
                "codigo_ibge": 2607703,
                "nome": "Itapetim"
            },
            {
                "codigo_ibge": 2607752,
                "nome": "Itapissuma"
            },
            {
                "codigo_ibge": 2607802,
                "nome": "Itaquitinga"
            },
            {
                "codigo_ibge": 2607901,
                "nome": "Jaboatão dos Guararapes"
            },
            {
                "codigo_ibge": 2607950,
                "nome": "Jaqueira"
            },
            {
                "codigo_ibge": 2608008,
                "nome": "Jataúba"
            },
            {
                "codigo_ibge": 2608057,
                "nome": "Jatobá"
            },
            {
                "codigo_ibge": 2608107,
                "nome": "João Alfredo"
            },
            {
                "codigo_ibge": 2608206,
                "nome": "Joaquim Nabuco"
            },
            {
                "codigo_ibge": 2608255,
                "nome": "Jucati"
            },
            {
                "codigo_ibge": 2608305,
                "nome": "Jupi"
            },
            {
                "codigo_ibge": 2608404,
                "nome": "Jurema"
            },
            {
                "codigo_ibge": 2608503,
                "nome": "Lagoa de Itaenga"
            },
            {
                "codigo_ibge": 2608453,
                "nome": "Lagoa do Carro"
            },
            {
                "codigo_ibge": 2608602,
                "nome": "Lagoa do Ouro"
            },
            {
                "codigo_ibge": 2608701,
                "nome": "Lagoa dos Gatos"
            },
            {
                "codigo_ibge": 2608750,
                "nome": "Lagoa Grande"
            },
            {
                "codigo_ibge": 2608800,
                "nome": "Lajedo"
            },
            {
                "codigo_ibge": 2608909,
                "nome": "Limoeiro"
            },
            {
                "codigo_ibge": 2609006,
                "nome": "Macaparana"
            },
            {
                "codigo_ibge": 2609105,
                "nome": "Machados"
            },
            {
                "codigo_ibge": 2609154,
                "nome": "Manari"
            },
            {
                "codigo_ibge": 2609204,
                "nome": "Maraial"
            },
            {
                "codigo_ibge": 2609303,
                "nome": "Mirandiba"
            },
            {
                "codigo_ibge": 2614303,
                "nome": "Moreilândia"
            },
            {
                "codigo_ibge": 2609402,
                "nome": "Moreno"
            },
            {
                "codigo_ibge": 2609501,
                "nome": "Nazaré da Mata"
            },
            {
                "codigo_ibge": 2609600,
                "nome": "Olinda"
            },
            {
                "codigo_ibge": 2609709,
                "nome": "Orobó"
            },
            {
                "codigo_ibge": 2609808,
                "nome": "Orocó"
            },
            {
                "codigo_ibge": 2609907,
                "nome": "Ouricuri"
            },
            {
                "codigo_ibge": 2610004,
                "nome": "Palmares"
            },
            {
                "codigo_ibge": 2610103,
                "nome": "Palmeirina"
            },
            {
                "codigo_ibge": 2610202,
                "nome": "Panelas"
            },
            {
                "codigo_ibge": 2610301,
                "nome": "Paranatama"
            },
            {
                "codigo_ibge": 2610400,
                "nome": "Parnamirim"
            },
            {
                "codigo_ibge": 2610509,
                "nome": "Passira"
            },
            {
                "codigo_ibge": 2610608,
                "nome": "Paudalho"
            },
            {
                "codigo_ibge": 2610707,
                "nome": "Paulista"
            },
            {
                "codigo_ibge": 2610806,
                "nome": "Pedra"
            },
            {
                "codigo_ibge": 2610905,
                "nome": "Pesqueira"
            },
            {
                "codigo_ibge": 2611002,
                "nome": "Petrolândia"
            },
            {
                "codigo_ibge": 2611101,
                "nome": "Petrolina"
            },
            {
                "codigo_ibge": 2611200,
                "nome": "Poção"
            },
            {
                "codigo_ibge": 2611309,
                "nome": "Pombos"
            },
            {
                "codigo_ibge": 2611408,
                "nome": "Primavera"
            },
            {
                "codigo_ibge": 2611507,
                "nome": "Quipapá"
            },
            {
                "codigo_ibge": 2611533,
                "nome": "Quixaba"
            },
            {
                "codigo_ibge": 2611606,
                "nome": "Recife"
            },
            {
                "codigo_ibge": 2611705,
                "nome": "Riacho das Almas"
            },
            {
                "codigo_ibge": 2611804,
                "nome": "Ribeirão"
            },
            {
                "codigo_ibge": 2611903,
                "nome": "Rio Formoso"
            },
            {
                "codigo_ibge": 2612000,
                "nome": "Sairé"
            },
            {
                "codigo_ibge": 2612109,
                "nome": "Salgadinho"
            },
            {
                "codigo_ibge": 2612208,
                "nome": "Salgueiro"
            },
            {
                "codigo_ibge": 2612307,
                "nome": "Saloá"
            },
            {
                "codigo_ibge": 2612406,
                "nome": "Sanharó"
            },
            {
                "codigo_ibge": 2612455,
                "nome": "Santa Cruz"
            },
            {
                "codigo_ibge": 2612471,
                "nome": "Santa Cruz da Baixa Verde"
            },
            {
                "codigo_ibge": 2612505,
                "nome": "Santa Cruz do Capibaribe"
            },
            {
                "codigo_ibge": 2612554,
                "nome": "Santa Filomena"
            },
            {
                "codigo_ibge": 2612604,
                "nome": "Santa Maria da Boa Vista"
            },
            {
                "codigo_ibge": 2612703,
                "nome": "Santa Maria do Cambucá"
            },
            {
                "codigo_ibge": 2612802,
                "nome": "Santa Terezinha"
            },
            {
                "codigo_ibge": 2612901,
                "nome": "São Benedito do Sul"
            },
            {
                "codigo_ibge": 2613008,
                "nome": "São Bento do Una"
            },
            {
                "codigo_ibge": 2613107,
                "nome": "São Caetano"
            },
            {
                "codigo_ibge": 2613206,
                "nome": "São João"
            },
            {
                "codigo_ibge": 2613305,
                "nome": "São Joaquim do Monte"
            },
            {
                "codigo_ibge": 2613404,
                "nome": "São José da Coroa Grande"
            },
            {
                "codigo_ibge": 2613503,
                "nome": "São José do Belmonte"
            },
            {
                "codigo_ibge": 2613602,
                "nome": "São José do Egito"
            },
            {
                "codigo_ibge": 2613701,
                "nome": "São Lourenço da Mata"
            },
            {
                "codigo_ibge": 2613800,
                "nome": "São Vicente Ferrer"
            },
            {
                "codigo_ibge": 2613909,
                "nome": "Serra Talhada"
            },
            {
                "codigo_ibge": 2614006,
                "nome": "Serrita"
            },
            {
                "codigo_ibge": 2614105,
                "nome": "Sertânia"
            },
            {
                "codigo_ibge": 2614204,
                "nome": "Sirinhaém"
            },
            {
                "codigo_ibge": 2614402,
                "nome": "Solidão"
            },
            {
                "codigo_ibge": 2614501,
                "nome": "Surubim"
            },
            {
                "codigo_ibge": 2614600,
                "nome": "Tabira"
            },
            {
                "codigo_ibge": 2614709,
                "nome": "Tacaimbó"
            },
            {
                "codigo_ibge": 2614808,
                "nome": "Tacaratu"
            },
            {
                "codigo_ibge": 2614857,
                "nome": "Tamandaré"
            },
            {
                "codigo_ibge": 2615003,
                "nome": "Taquaritinga do Norte"
            },
            {
                "codigo_ibge": 2615102,
                "nome": "Terezinha"
            },
            {
                "codigo_ibge": 2615201,
                "nome": "Terra Nova"
            },
            {
                "codigo_ibge": 2615300,
                "nome": "Timbaúba"
            },
            {
                "codigo_ibge": 2615409,
                "nome": "Toritama"
            },
            {
                "codigo_ibge": 2615508,
                "nome": "Tracunhaém"
            },
            {
                "codigo_ibge": 2615607,
                "nome": "Trindade"
            },
            {
                "codigo_ibge": 2615706,
                "nome": "Triunfo"
            },
            {
                "codigo_ibge": 2615805,
                "nome": "Tupanatinga"
            },
            {
                "codigo_ibge": 2615904,
                "nome": "Tuparetama"
            },
            {
                "codigo_ibge": 2616001,
                "nome": "Venturosa"
            },
            {
                "codigo_ibge": 2616100,
                "nome": "Verdejante"
            },
            {
                "codigo_ibge": 2616183,
                "nome": "Vertente do Lério"
            },
            {
                "codigo_ibge": 2616209,
                "nome": "Vertentes"
            },
            {
                "codigo_ibge": 2616308,
                "nome": "Vicência"
            },
            {
                "codigo_ibge": 2616407,
                "nome": "Vitória de Santo Antão"
            },
            {
                "codigo_ibge": 2616506,
                "nome": "Xexéu"
            }
        ]
    },
    "PI": {
        "nome": "Piauí",
        "municipios": [
            {
                "codigo_ibge": 2200053,
                "nome": "Acauã"
            },
            {
                "codigo_ibge": 2200103,
                "nome": "Agricolândia"
            },
            {
                "codigo_ibge": 2200202,
                "nome": "Água Branca"
            },
            {
                "codigo_ibge": 2200251,
                "nome": "Alagoinha do Piauí"
            },
            {
                "codigo_ibge": 2200277,
                "nome": "Alegrete do Piauí"
            },
            {
                "codigo_ibge": 2200301,
                "nome": "Alto Longá"
            },
            {
                "codigo_ibge": 2200400,
                "nome": "Altos"
            },
            {
                "codigo_ibge": 2200459,
                "nome": "Alvorada do Gurguéia"
            },
            {
                "codigo_ibge": 2200509,
                "nome": "Amarante"
            },
            {
                "codigo_ibge": 2200608,
                "nome": "Angical do Piauí"
            },
            {
                "codigo_ibge": 2200707,
                "nome": "Anísio de Abreu"
            },
            {
                "codigo_ibge": 2200806,
                "nome": "Antônio Almeida"
            },
            {
                "codigo_ibge": 2200905,
                "nome": "Aroazes"
            },
            {
                "codigo_ibge": 2200954,
                "nome": "Aroeiras do Itaim"
            },
            {
                "codigo_ibge": 2201002,
                "nome": "Arraial"
            },
            {
                "codigo_ibge": 2201051,
                "nome": "Assunção do Piauí"
            },
            {
                "codigo_ibge": 2201101,
                "nome": "Avelino Lopes"
            },
            {
                "codigo_ibge": 2201150,
                "nome": "Baixa Grande do Ribeiro"
            },
            {
                "codigo_ibge": 2201176,
                "nome": "Barra D'Alcântara"
            },
            {
                "codigo_ibge": 2201200,
                "nome": "Barras"
            },
            {
                "codigo_ibge": 2201309,
                "nome": "Barreiras do Piauí"
            },
            {
                "codigo_ibge": 2201408,
                "nome": "Barro Duro"
            },
            {
                "codigo_ibge": 2201507,
                "nome": "Batalha"
            },
            {
                "codigo_ibge": 2201556,
                "nome": "Bela Vista do Piauí"
            },
            {
                "codigo_ibge": 2201572,
                "nome": "Belém do Piauí"
            },
            {
                "codigo_ibge": 2201606,
                "nome": "Beneditinos"
            },
            {
                "codigo_ibge": 2201705,
                "nome": "Bertolínia"
            },
            {
                "codigo_ibge": 2201739,
                "nome": "Betânia do Piauí"
            },
            {
                "codigo_ibge": 2201770,
                "nome": "Boa Hora"
            },
            {
                "codigo_ibge": 2201804,
                "nome": "Bocaina"
            },
            {
                "codigo_ibge": 2201903,
                "nome": "Bom Jesus"
            },
            {
                "codigo_ibge": 2201919,
                "nome": "Bom Princípio do Piauí"
            },
            {
                "codigo_ibge": 2201929,
                "nome": "Bonfim do Piauí"
            },
            {
                "codigo_ibge": 2201945,
                "nome": "Boqueirão do Piauí"
            },
            {
                "codigo_ibge": 2201960,
                "nome": "Brasileira"
            },
            {
                "codigo_ibge": 2201988,
                "nome": "Brejo do Piauí"
            },
            {
                "codigo_ibge": 2202000,
                "nome": "Buriti dos Lopes"
            },
            {
                "codigo_ibge": 2202026,
                "nome": "Buriti dos Montes"
            },
            {
                "codigo_ibge": 2202059,
                "nome": "Cabeceiras do Piauí"
            },
            {
                "codigo_ibge": 2202075,
                "nome": "Cajazeiras do Piauí"
            },
            {
                "codigo_ibge": 2202083,
                "nome": "Cajueiro da Praia"
            },
            {
                "codigo_ibge": 2202091,
                "nome": "Caldeirão Grande do Piauí"
            },
            {
                "codigo_ibge": 2202109,
                "nome": "Campinas do Piauí"
            },
            {
                "codigo_ibge": 2202117,
                "nome": "Campo Alegre do Fidalgo"
            },
            {
                "codigo_ibge": 2202133,
                "nome": "Campo Grande do Piauí"
            },
            {
                "codigo_ibge": 2202174,
                "nome": "Campo Largo do Piauí"
            },
            {
                "codigo_ibge": 2202208,
                "nome": "Campo Maior"
            },
            {
                "codigo_ibge": 2202251,
                "nome": "Canavieira"
            },
            {
                "codigo_ibge": 2202307,
                "nome": "Canto do Buriti"
            },
            {
                "codigo_ibge": 2202406,
                "nome": "Capitão de Campos"
            },
            {
                "codigo_ibge": 2202455,
                "nome": "Capitão Gervásio Oliveira"
            },
            {
                "codigo_ibge": 2202505,
                "nome": "Caracol"
            },
            {
                "codigo_ibge": 2202539,
                "nome": "Caraúbas do Piauí"
            },
            {
                "codigo_ibge": 2202554,
                "nome": "Caridade do Piauí"
            },
            {
                "codigo_ibge": 2202604,
                "nome": "Castelo do Piauí"
            },
            {
                "codigo_ibge": 2202653,
                "nome": "Caxingó"
            },
            {
                "codigo_ibge": 2202703,
                "nome": "Cocal"
            },
            {
                "codigo_ibge": 2202711,
                "nome": "Cocal de Telha"
            },
            {
                "codigo_ibge": 2202729,
                "nome": "Cocal dos Alves"
            },
            {
                "codigo_ibge": 2202737,
                "nome": "Coivaras"
            },
            {
                "codigo_ibge": 2202752,
                "nome": "Colônia do Gurguéia"
            },
            {
                "codigo_ibge": 2202778,
                "nome": "Colônia do Piauí"
            },
            {
                "codigo_ibge": 2202802,
                "nome": "Conceição do Canindé"
            },
            {
                "codigo_ibge": 2202851,
                "nome": "Coronel José Dias"
            },
            {
                "codigo_ibge": 2202901,
                "nome": "Corrente"
            },
            {
                "codigo_ibge": 2203008,
                "nome": "Cristalândia do Piauí"
            },
            {
                "codigo_ibge": 2203107,
                "nome": "Cristino Castro"
            },
            {
                "codigo_ibge": 2203206,
                "nome": "Curimatá"
            },
            {
                "codigo_ibge": 2203230,
                "nome": "Currais"
            },
            {
                "codigo_ibge": 2203271,
                "nome": "Curral Novo do Piauí"
            },
            {
                "codigo_ibge": 2203255,
                "nome": "Curralinhos"
            },
            {
                "codigo_ibge": 2203305,
                "nome": "Demerval Lobão"
            },
            {
                "codigo_ibge": 2203354,
                "nome": "Dirceu Arcoverde"
            },
            {
                "codigo_ibge": 2203404,
                "nome": "Dom Expedito Lopes"
            },
            {
                "codigo_ibge": 2203453,
                "nome": "Dom Inocêncio"
            },
            {
                "codigo_ibge": 2203420,
                "nome": "Domingos Mourão"
            },
            {
                "codigo_ibge": 2203503,
                "nome": "Elesbão Veloso"
            },
            {
                "codigo_ibge": 2203602,
                "nome": "Eliseu Martins"
            },
            {
                "codigo_ibge": 2203701,
                "nome": "Esperantina"
            },
            {
                "codigo_ibge": 2203750,
                "nome": "Fartura do Piauí"
            },
            {
                "codigo_ibge": 2203800,
                "nome": "Flores do Piauí"
            },
            {
                "codigo_ibge": 2203859,
                "nome": "Floresta do Piauí"
            },
            {
                "codigo_ibge": 2203909,
                "nome": "Floriano"
            },
            {
                "codigo_ibge": 2204006,
                "nome": "Francinópolis"
            },
            {
                "codigo_ibge": 2204105,
                "nome": "Francisco Ayres"
            },
            {
                "codigo_ibge": 2204154,
                "nome": "Francisco Macedo"
            },
            {
                "codigo_ibge": 2204204,
                "nome": "Francisco Santos"
            },
            {
                "codigo_ibge": 2204303,
                "nome": "Fronteiras"
            },
            {
                "codigo_ibge": 2204352,
                "nome": "Geminiano"
            },
            {
                "codigo_ibge": 2204402,
                "nome": "Gilbués"
            },
            {
                "codigo_ibge": 2204501,
                "nome": "Guadalupe"
            },
            {
                "codigo_ibge": 2204550,
                "nome": "Guaribas"
            },
            {
                "codigo_ibge": 2204600,
                "nome": "Hugo Napoleão"
            },
            {
                "codigo_ibge": 2204659,
                "nome": "Ilha Grande"
            },
            {
                "codigo_ibge": 2204709,
                "nome": "Inhuma"
            },
            {
                "codigo_ibge": 2204808,
                "nome": "Ipiranga do Piauí"
            },
            {
                "codigo_ibge": 2204907,
                "nome": "Isaías Coelho"
            },
            {
                "codigo_ibge": 2205003,
                "nome": "Itainópolis"
            },
            {
                "codigo_ibge": 2205102,
                "nome": "Itaueira"
            },
            {
                "codigo_ibge": 2205151,
                "nome": "Jacobina do Piauí"
            },
            {
                "codigo_ibge": 2205201,
                "nome": "Jaicós"
            },
            {
                "codigo_ibge": 2205250,
                "nome": "Jardim do Mulato"
            },
            {
                "codigo_ibge": 2205276,
                "nome": "Jatobá do Piauí"
            },
            {
                "codigo_ibge": 2205300,
                "nome": "Jerumenha"
            },
            {
                "codigo_ibge": 2205359,
                "nome": "João Costa"
            },
            {
                "codigo_ibge": 2205409,
                "nome": "Joaquim Pires"
            },
            {
                "codigo_ibge": 2205458,
                "nome": "Joca Marques"
            },
            {
                "codigo_ibge": 2205508,
                "nome": "José de Freitas"
            },
            {
                "codigo_ibge": 2205516,
                "nome": "Juazeiro do Piauí"
            },
            {
                "codigo_ibge": 2205524,
                "nome": "Júlio Borges"
            },
            {
                "codigo_ibge": 2205532,
                "nome": "Jurema"
            },
            {
                "codigo_ibge": 2205557,
                "nome": "Lagoa Alegre"
            },
            {
                "codigo_ibge": 2205573,
                "nome": "Lagoa de São Francisco"
            },
            {
                "codigo_ibge": 2205565,
                "nome": "Lagoa do Barro do Piauí"
            },
            {
                "codigo_ibge": 2205581,
                "nome": "Lagoa do Piauí"
            },
            {
                "codigo_ibge": 2205599,
                "nome": "Lagoa do Sítio"
            },
            {
                "codigo_ibge": 2205540,
                "nome": "Lagoinha do Piauí"
            },
            {
                "codigo_ibge": 2205607,
                "nome": "Landri Sales"
            },
            {
                "codigo_ibge": 2205706,
                "nome": "Luís Correia"
            },
            {
                "codigo_ibge": 2205805,
                "nome": "Luzilândia"
            },
            {
                "codigo_ibge": 2205854,
                "nome": "Madeiro"
            },
            {
                "codigo_ibge": 2205904,
                "nome": "Manoel Emídio"
            },
            {
                "codigo_ibge": 2205953,
                "nome": "Marcolândia"
            },
            {
                "codigo_ibge": 2206001,
                "nome": "Marcos Parente"
            },
            {
                "codigo_ibge": 2206050,
                "nome": "Massapê do Piauí"
            },
            {
                "codigo_ibge": 2206100,
                "nome": "Matias Olímpio"
            },
            {
                "codigo_ibge": 2206209,
                "nome": "Miguel Alves"
            },
            {
                "codigo_ibge": 2206308,
                "nome": "Miguel Leão"
            },
            {
                "codigo_ibge": 2206357,
                "nome": "Milton Brandão"
            },
            {
                "codigo_ibge": 2206407,
                "nome": "Monsenhor Gil"
            },
            {
                "codigo_ibge": 2206506,
                "nome": "Monsenhor Hipólito"
            },
            {
                "codigo_ibge": 2206605,
                "nome": "Monte Alegre do Piauí"
            },
            {
                "codigo_ibge": 2206654,
                "nome": "Morro Cabeça no Tempo"
            },
            {
                "codigo_ibge": 2206670,
                "nome": "Morro do Chapéu do Piauí"
            },
            {
                "codigo_ibge": 2206696,
                "nome": "Murici dos Portelas"
            },
            {
                "codigo_ibge": 2206704,
                "nome": "Nazaré do Piauí"
            },
            {
                "codigo_ibge": 2206720,
                "nome": "Nazária"
            },
            {
                "codigo_ibge": 2206753,
                "nome": "Nossa Senhora de Nazaré"
            },
            {
                "codigo_ibge": 2206803,
                "nome": "Nossa Senhora dos Remédios"
            },
            {
                "codigo_ibge": 2207959,
                "nome": "Nova Santa Rita"
            },
            {
                "codigo_ibge": 2206902,
                "nome": "Novo Oriente do Piauí"
            },
            {
                "codigo_ibge": 2206951,
                "nome": "Novo Santo Antônio"
            },
            {
                "codigo_ibge": 2207009,
                "nome": "Oeiras"
            },
            {
                "codigo_ibge": 2207108,
                "nome": "Olho D'Água do Piauí"
            },
            {
                "codigo_ibge": 2207207,
                "nome": "Padre Marcos"
            },
            {
                "codigo_ibge": 2207306,
                "nome": "Paes Landim"
            },
            {
                "codigo_ibge": 2207355,
                "nome": "Pajeú do Piauí"
            },
            {
                "codigo_ibge": 2207405,
                "nome": "Palmeira do Piauí"
            },
            {
                "codigo_ibge": 2207504,
                "nome": "Palmeirais"
            },
            {
                "codigo_ibge": 2207553,
                "nome": "Paquetá"
            },
            {
                "codigo_ibge": 2207603,
                "nome": "Parnaguá"
            },
            {
                "codigo_ibge": 2207702,
                "nome": "Parnaíba"
            },
            {
                "codigo_ibge": 2207751,
                "nome": "Passagem Franca do Piauí"
            },
            {
                "codigo_ibge": 2207777,
                "nome": "Patos do Piauí"
            },
            {
                "codigo_ibge": 2207793,
                "nome": "Pau D'Arco do Piauí"
            },
            {
                "codigo_ibge": 2207801,
                "nome": "Paulistana"
            },
            {
                "codigo_ibge": 2207850,
                "nome": "Pavussu"
            },
            {
                "codigo_ibge": 2207900,
                "nome": "Pedro II"
            },
            {
                "codigo_ibge": 2207934,
                "nome": "Pedro Laurentino"
            },
            {
                "codigo_ibge": 2208007,
                "nome": "Picos"
            },
            {
                "codigo_ibge": 2208106,
                "nome": "Pimenteiras"
            },
            {
                "codigo_ibge": 2208205,
                "nome": "Pio IX"
            },
            {
                "codigo_ibge": 2208304,
                "nome": "Piracuruca"
            },
            {
                "codigo_ibge": 2208403,
                "nome": "Piripiri"
            },
            {
                "codigo_ibge": 2208502,
                "nome": "Porto"
            },
            {
                "codigo_ibge": 2208551,
                "nome": "Porto Alegre do Piauí"
            },
            {
                "codigo_ibge": 2208601,
                "nome": "Prata do Piauí"
            },
            {
                "codigo_ibge": 2208650,
                "nome": "Queimada Nova"
            },
            {
                "codigo_ibge": 2208700,
                "nome": "Redenção do Gurguéia"
            },
            {
                "codigo_ibge": 2208809,
                "nome": "Regeneração"
            },
            {
                "codigo_ibge": 2208858,
                "nome": "Riacho Frio"
            },
            {
                "codigo_ibge": 2208874,
                "nome": "Ribeira do Piauí"
            },
            {
                "codigo_ibge": 2208908,
                "nome": "Ribeiro Gonçalves"
            },
            {
                "codigo_ibge": 2209005,
                "nome": "Rio Grande do Piauí"
            },
            {
                "codigo_ibge": 2209104,
                "nome": "Santa Cruz do Piauí"
            },
            {
                "codigo_ibge": 2209153,
                "nome": "Santa Cruz dos Milagres"
            },
            {
                "codigo_ibge": 2209203,
                "nome": "Santa Filomena"
            },
            {
                "codigo_ibge": 2209302,
                "nome": "Santa Luz"
            },
            {
                "codigo_ibge": 2209377,
                "nome": "Santa Rosa do Piauí"
            },
            {
                "codigo_ibge": 2209351,
                "nome": "Santana do Piauí"
            },
            {
                "codigo_ibge": 2209401,
                "nome": "Santo Antônio de Lisboa"
            },
            {
                "codigo_ibge": 2209450,
                "nome": "Santo Antônio dos Milagres"
            },
            {
                "codigo_ibge": 2209500,
                "nome": "Santo Inácio do Piauí"
            },
            {
                "codigo_ibge": 2209559,
                "nome": "São Braz do Piauí"
            },
            {
                "codigo_ibge": 2209609,
                "nome": "São Félix do Piauí"
            },
            {
                "codigo_ibge": 2209658,
                "nome": "São Francisco de Assis do Piauí"
            },
            {
                "codigo_ibge": 2209708,
                "nome": "São Francisco do Piauí"
            },
            {
                "codigo_ibge": 2209757,
                "nome": "São Gonçalo do Gurguéia"
            },
            {
                "codigo_ibge": 2209807,
                "nome": "São Gonçalo do Piauí"
            },
            {
                "codigo_ibge": 2209856,
                "nome": "São João da Canabrava"
            },
            {
                "codigo_ibge": 2209872,
                "nome": "São João da Fronteira"
            },
            {
                "codigo_ibge": 2209906,
                "nome": "São João da Serra"
            },
            {
                "codigo_ibge": 2209955,
                "nome": "São João da Varjota"
            },
            {
                "codigo_ibge": 2209971,
                "nome": "São João do Arraial"
            },
            {
                "codigo_ibge": 2210003,
                "nome": "São João do Piauí"
            },
            {
                "codigo_ibge": 2210052,
                "nome": "São José do Divino"
            },
            {
                "codigo_ibge": 2210102,
                "nome": "São José do Peixe"
            },
            {
                "codigo_ibge": 2210201,
                "nome": "São José do Piauí"
            },
            {
                "codigo_ibge": 2210300,
                "nome": "São Julião"
            },
            {
                "codigo_ibge": 2210359,
                "nome": "São Lourenço do Piauí"
            },
            {
                "codigo_ibge": 2210375,
                "nome": "São Luis do Piauí"
            },
            {
                "codigo_ibge": 2210383,
                "nome": "São Miguel da Baixa Grande"
            },
            {
                "codigo_ibge": 2210391,
                "nome": "São Miguel do Fidalgo"
            },
            {
                "codigo_ibge": 2210409,
                "nome": "São Miguel do Tapuio"
            },
            {
                "codigo_ibge": 2210508,
                "nome": "São Pedro do Piauí"
            },
            {
                "codigo_ibge": 2210607,
                "nome": "São Raimundo Nonato"
            },
            {
                "codigo_ibge": 2210623,
                "nome": "Sebastião Barros"
            },
            {
                "codigo_ibge": 2210631,
                "nome": "Sebastião Leal"
            },
            {
                "codigo_ibge": 2210656,
                "nome": "Sigefredo Pacheco"
            },
            {
                "codigo_ibge": 2210706,
                "nome": "Simões"
            },
            {
                "codigo_ibge": 2210805,
                "nome": "Simplício Mendes"
            },
            {
                "codigo_ibge": 2210904,
                "nome": "Socorro do Piauí"
            },
            {
                "codigo_ibge": 2210938,
                "nome": "Sussuapara"
            },
            {
                "codigo_ibge": 2210953,
                "nome": "Tamboril do Piauí"
            },
            {
                "codigo_ibge": 2210979,
                "nome": "Tanque do Piauí"
            },
            {
                "codigo_ibge": 2211001,
                "nome": "Teresina"
            },
            {
                "codigo_ibge": 2211100,
                "nome": "União"
            },
            {
                "codigo_ibge": 2211209,
                "nome": "Uruçuí"
            },
            {
                "codigo_ibge": 2211308,
                "nome": "Valença do Piauí"
            },
            {
                "codigo_ibge": 2211357,
                "nome": "Várzea Branca"
            },
            {
                "codigo_ibge": 2211407,
                "nome": "Várzea Grande"
            },
            {
                "codigo_ibge": 2211506,
                "nome": "Vera Mendes"
            },
            {
                "codigo_ibge": 2211605,
                "nome": "Vila Nova do Piauí"
            },
            {
                "codigo_ibge": 2211704,
                "nome": "Wall Ferraz"
            }
        ]
    },
    "PR": {
        "nome": "Paraná",
        "municipios": [
            {
                "codigo_ibge": 4100103,
                "nome": "Abatiá"
            },
            {
                "codigo_ibge": 4100202,
                "nome": "Adrianópolis"
            },
            {
                "codigo_ibge": 4100301,
                "nome": "Agudos do Sul"
            },
            {
                "codigo_ibge": 4100400,
                "nome": "Almirante Tamandaré"
            },
            {
                "codigo_ibge": 4100459,
                "nome": "Altamira do Paraná"
            },
            {
                "codigo_ibge": 4128625,
                "nome": "Alto Paraíso"
            },
            {
                "codigo_ibge": 4100608,
                "nome": "Alto Paraná"
            },
            {
                "codigo_ibge": 4100707,
                "nome": "Alto Piquiri"
            },
            {
                "codigo_ibge": 4100509,
                "nome": "Altônia"
            },
            {
                "codigo_ibge": 4100806,
                "nome": "Alvorada do Sul"
            },
            {
                "codigo_ibge": 4100905,
                "nome": "Amaporã"
            },
            {
                "codigo_ibge": 4101002,
                "nome": "Ampére"
            },
            {
                "codigo_ibge": 4101051,
                "nome": "Anahy"
            },
            {
                "codigo_ibge": 4101101,
                "nome": "Andirá"
            },
            {
                "codigo_ibge": 4101150,
                "nome": "Ângulo"
            },
            {
                "codigo_ibge": 4101200,
                "nome": "Antonina"
            },
            {
                "codigo_ibge": 4101309,
                "nome": "Antônio Olinto"
            },
            {
                "codigo_ibge": 4101408,
                "nome": "Apucarana"
            },
            {
                "codigo_ibge": 4101507,
                "nome": "Arapongas"
            },
            {
                "codigo_ibge": 4101606,
                "nome": "Arapoti"
            },
            {
                "codigo_ibge": 4101655,
                "nome": "Arapuã"
            },
            {
                "codigo_ibge": 4101705,
                "nome": "Araruna"
            },
            {
                "codigo_ibge": 4101804,
                "nome": "Araucária"
            },
            {
                "codigo_ibge": 4101853,
                "nome": "Ariranha do Ivaí"
            },
            {
                "codigo_ibge": 4101903,
                "nome": "Assaí"
            },
            {
                "codigo_ibge": 4102000,
                "nome": "Assis Chateaubriand"
            },
            {
                "codigo_ibge": 4102109,
                "nome": "Astorga"
            },
            {
                "codigo_ibge": 4102208,
                "nome": "Atalaia"
            },
            {
                "codigo_ibge": 4102307,
                "nome": "Balsa Nova"
            },
            {
                "codigo_ibge": 4102406,
                "nome": "Bandeirantes"
            },
            {
                "codigo_ibge": 4102505,
                "nome": "Barbosa Ferraz"
            },
            {
                "codigo_ibge": 4102703,
                "nome": "Barra do Jacaré"
            },
            {
                "codigo_ibge": 4102604,
                "nome": "Barracão"
            },
            {
                "codigo_ibge": 4102752,
                "nome": "Bela Vista da Caroba"
            },
            {
                "codigo_ibge": 4102802,
                "nome": "Bela Vista do Paraíso"
            },
            {
                "codigo_ibge": 4102901,
                "nome": "Bituruna"
            },
            {
                "codigo_ibge": 4103008,
                "nome": "Boa Esperança"
            },
            {
                "codigo_ibge": 4103024,
                "nome": "Boa Esperança do Iguaçu"
            },
            {
                "codigo_ibge": 4103040,
                "nome": "Boa Ventura de São Roque"
            },
            {
                "codigo_ibge": 4103057,
                "nome": "Boa Vista da Aparecida"
            },
            {
                "codigo_ibge": 4103107,
                "nome": "Bocaiúva do Sul"
            },
            {
                "codigo_ibge": 4103156,
                "nome": "Bom Jesus do Sul"
            },
            {
                "codigo_ibge": 4103206,
                "nome": "Bom Sucesso"
            },
            {
                "codigo_ibge": 4103222,
                "nome": "Bom Sucesso do Sul"
            },
            {
                "codigo_ibge": 4103305,
                "nome": "Borrazópolis"
            },
            {
                "codigo_ibge": 4103354,
                "nome": "Braganey"
            },
            {
                "codigo_ibge": 4103370,
                "nome": "Brasilândia do Sul"
            },
            {
                "codigo_ibge": 4103404,
                "nome": "Cafeara"
            },
            {
                "codigo_ibge": 4103453,
                "nome": "Cafelândia"
            },
            {
                "codigo_ibge": 4103479,
                "nome": "Cafezal do Sul"
            },
            {
                "codigo_ibge": 4103503,
                "nome": "Califórnia"
            },
            {
                "codigo_ibge": 4103602,
                "nome": "Cambará"
            },
            {
                "codigo_ibge": 4103701,
                "nome": "Cambé"
            },
            {
                "codigo_ibge": 4103800,
                "nome": "Cambira"
            },
            {
                "codigo_ibge": 4103909,
                "nome": "Campina da Lagoa"
            },
            {
                "codigo_ibge": 4103958,
                "nome": "Campina do Simão"
            },
            {
                "codigo_ibge": 4104006,
                "nome": "Campina Grande do Sul"
            },
            {
                "codigo_ibge": 4104055,
                "nome": "Campo Bonito"
            },
            {
                "codigo_ibge": 4104105,
                "nome": "Campo do Tenente"
            },
            {
                "codigo_ibge": 4104204,
                "nome": "Campo Largo"
            },
            {
                "codigo_ibge": 4104253,
                "nome": "Campo Magro"
            },
            {
                "codigo_ibge": 4104303,
                "nome": "Campo Mourão"
            },
            {
                "codigo_ibge": 4104402,
                "nome": "Cândido de Abreu"
            },
            {
                "codigo_ibge": 4104428,
                "nome": "Candói"
            },
            {
                "codigo_ibge": 4104451,
                "nome": "Cantagalo"
            },
            {
                "codigo_ibge": 4104501,
                "nome": "Capanema"
            },
            {
                "codigo_ibge": 4104600,
                "nome": "Capitão Leônidas Marques"
            },
            {
                "codigo_ibge": 4104659,
                "nome": "Carambeí"
            },
            {
                "codigo_ibge": 4104709,
                "nome": "Carlópolis"
            },
            {
                "codigo_ibge": 4104808,
                "nome": "Cascavel"
            },
            {
                "codigo_ibge": 4104907,
                "nome": "Castro"
            },
            {
                "codigo_ibge": 4105003,
                "nome": "Catanduvas"
            },
            {
                "codigo_ibge": 4105102,
                "nome": "Centenário do Sul"
            },
            {
                "codigo_ibge": 4105201,
                "nome": "Cerro Azul"
            },
            {
                "codigo_ibge": 4105300,
                "nome": "Céu Azul"
            },
            {
                "codigo_ibge": 4105409,
                "nome": "Chopinzinho"
            },
            {
                "codigo_ibge": 4105508,
                "nome": "Cianorte"
            },
            {
                "codigo_ibge": 4105607,
                "nome": "Cidade Gaúcha"
            },
            {
                "codigo_ibge": 4105706,
                "nome": "Clevelândia"
            },
            {
                "codigo_ibge": 4105805,
                "nome": "Colombo"
            },
            {
                "codigo_ibge": 4105904,
                "nome": "Colorado"
            },
            {
                "codigo_ibge": 4106001,
                "nome": "Congonhinhas"
            },
            {
                "codigo_ibge": 4106100,
                "nome": "Conselheiro Mairinck"
            },
            {
                "codigo_ibge": 4106209,
                "nome": "Contenda"
            },
            {
                "codigo_ibge": 4106308,
                "nome": "Corbélia"
            },
            {
                "codigo_ibge": 4106407,
                "nome": "Cornélio Procópio"
            },
            {
                "codigo_ibge": 4106456,
                "nome": "Coronel Domingos Soares"
            },
            {
                "codigo_ibge": 4106506,
                "nome": "Coronel Vivida"
            },
            {
                "codigo_ibge": 4106555,
                "nome": "Corumbataí do Sul"
            },
            {
                "codigo_ibge": 4106803,
                "nome": "Cruz Machado"
            },
            {
                "codigo_ibge": 4106571,
                "nome": "Cruzeiro do Iguaçu"
            },
            {
                "codigo_ibge": 4106605,
                "nome": "Cruzeiro do Oeste"
            },
            {
                "codigo_ibge": 4106704,
                "nome": "Cruzeiro do Sul"
            },
            {
                "codigo_ibge": 4106852,
                "nome": "Cruzmaltina"
            },
            {
                "codigo_ibge": 4106902,
                "nome": "Curitiba"
            },
            {
                "codigo_ibge": 4107009,
                "nome": "Curiúva"
            },
            {
                "codigo_ibge": 4107157,
                "nome": "Diamante D'Oeste"
            },
            {
                "codigo_ibge": 4107108,
                "nome": "Diamante do Norte"
            },
            {
                "codigo_ibge": 4107124,
                "nome": "Diamante do Sul"
            },
            {
                "codigo_ibge": 4107207,
                "nome": "Dois Vizinhos"
            },
            {
                "codigo_ibge": 4107256,
                "nome": "Douradina"
            },
            {
                "codigo_ibge": 4107306,
                "nome": "Doutor Camargo"
            },
            {
                "codigo_ibge": 4128633,
                "nome": "Doutor Ulysses"
            },
            {
                "codigo_ibge": 4107405,
                "nome": "Enéas Marques"
            },
            {
                "codigo_ibge": 4107504,
                "nome": "Engenheiro Beltrão"
            },
            {
                "codigo_ibge": 4107538,
                "nome": "Entre Rios do Oeste"
            },
            {
                "codigo_ibge": 4107520,
                "nome": "Esperança Nova"
            },
            {
                "codigo_ibge": 4107546,
                "nome": "Espigão Alto do Iguaçu"
            },
            {
                "codigo_ibge": 4107553,
                "nome": "Farol"
            },
            {
                "codigo_ibge": 4107603,
                "nome": "Faxinal"
            },
            {
                "codigo_ibge": 4107652,
                "nome": "Fazenda Rio Grande"
            },
            {
                "codigo_ibge": 4107702,
                "nome": "Fênix"
            },
            {
                "codigo_ibge": 4107736,
                "nome": "Fernandes Pinheiro"
            },
            {
                "codigo_ibge": 4107751,
                "nome": "Figueira"
            },
            {
                "codigo_ibge": 4107850,
                "nome": "Flor da Serra do Sul"
            },
            {
                "codigo_ibge": 4107801,
                "nome": "Floraí"
            },
            {
                "codigo_ibge": 4107900,
                "nome": "Floresta"
            },
            {
                "codigo_ibge": 4108007,
                "nome": "Florestópolis"
            },
            {
                "codigo_ibge": 4108106,
                "nome": "Flórida"
            },
            {
                "codigo_ibge": 4108205,
                "nome": "Formosa do Oeste"
            },
            {
                "codigo_ibge": 4108304,
                "nome": "Foz do Iguaçu"
            },
            {
                "codigo_ibge": 4108452,
                "nome": "Foz do Jordão"
            },
            {
                "codigo_ibge": 4108320,
                "nome": "Francisco Alves"
            },
            {
                "codigo_ibge": 4108403,
                "nome": "Francisco Beltrão"
            },
            {
                "codigo_ibge": 4108502,
                "nome": "General Carneiro"
            },
            {
                "codigo_ibge": 4108551,
                "nome": "Godoy Moreira"
            },
            {
                "codigo_ibge": 4108601,
                "nome": "Goioerê"
            },
            {
                "codigo_ibge": 4108650,
                "nome": "Goioxim"
            },
            {
                "codigo_ibge": 4108700,
                "nome": "Grandes Rios"
            },
            {
                "codigo_ibge": 4108809,
                "nome": "Guaíra"
            },
            {
                "codigo_ibge": 4108908,
                "nome": "Guairaçá"
            },
            {
                "codigo_ibge": 4108957,
                "nome": "Guamiranga"
            },
            {
                "codigo_ibge": 4109005,
                "nome": "Guapirama"
            },
            {
                "codigo_ibge": 4109104,
                "nome": "Guaporema"
            },
            {
                "codigo_ibge": 4109203,
                "nome": "Guaraci"
            },
            {
                "codigo_ibge": 4109302,
                "nome": "Guaraniaçu"
            },
            {
                "codigo_ibge": 4109401,
                "nome": "Guarapuava"
            },
            {
                "codigo_ibge": 4109500,
                "nome": "Guaraqueçaba"
            },
            {
                "codigo_ibge": 4109609,
                "nome": "Guaratuba"
            },
            {
                "codigo_ibge": 4109658,
                "nome": "Honório Serpa"
            },
            {
                "codigo_ibge": 4109708,
                "nome": "Ibaiti"
            },
            {
                "codigo_ibge": 4109757,
                "nome": "Ibema"
            },
            {
                "codigo_ibge": 4109807,
                "nome": "Ibiporã"
            },
            {
                "codigo_ibge": 4109906,
                "nome": "Icaraíma"
            },
            {
                "codigo_ibge": 4110003,
                "nome": "Iguaraçu"
            },
            {
                "codigo_ibge": 4110052,
                "nome": "Iguatu"
            },
            {
                "codigo_ibge": 4110078,
                "nome": "Imbaú"
            },
            {
                "codigo_ibge": 4110102,
                "nome": "Imbituva"
            },
            {
                "codigo_ibge": 4110201,
                "nome": "Inácio Martins"
            },
            {
                "codigo_ibge": 4110300,
                "nome": "Inajá"
            },
            {
                "codigo_ibge": 4110409,
                "nome": "Indianópolis"
            },
            {
                "codigo_ibge": 4110508,
                "nome": "Ipiranga"
            },
            {
                "codigo_ibge": 4110607,
                "nome": "Iporã"
            },
            {
                "codigo_ibge": 4110656,
                "nome": "Iracema do Oeste"
            },
            {
                "codigo_ibge": 4110706,
                "nome": "Irati"
            },
            {
                "codigo_ibge": 4110805,
                "nome": "Iretama"
            },
            {
                "codigo_ibge": 4110904,
                "nome": "Itaguajé"
            },
            {
                "codigo_ibge": 4110953,
                "nome": "Itaipulândia"
            },
            {
                "codigo_ibge": 4111001,
                "nome": "Itambaracá"
            },
            {
                "codigo_ibge": 4111100,
                "nome": "Itambé"
            },
            {
                "codigo_ibge": 4111209,
                "nome": "Itapejara d'Oeste"
            },
            {
                "codigo_ibge": 4111258,
                "nome": "Itaperuçu"
            },
            {
                "codigo_ibge": 4111308,
                "nome": "Itaúna do Sul"
            },
            {
                "codigo_ibge": 4111407,
                "nome": "Ivaí"
            },
            {
                "codigo_ibge": 4111506,
                "nome": "Ivaiporã"
            },
            {
                "codigo_ibge": 4111555,
                "nome": "Ivaté"
            },
            {
                "codigo_ibge": 4111605,
                "nome": "Ivatuba"
            },
            {
                "codigo_ibge": 4111704,
                "nome": "Jaboti"
            },
            {
                "codigo_ibge": 4111803,
                "nome": "Jacarezinho"
            },
            {
                "codigo_ibge": 4111902,
                "nome": "Jaguapitã"
            },
            {
                "codigo_ibge": 4112009,
                "nome": "Jaguariaíva"
            },
            {
                "codigo_ibge": 4112108,
                "nome": "Jandaia do Sul"
            },
            {
                "codigo_ibge": 4112207,
                "nome": "Janiópolis"
            },
            {
                "codigo_ibge": 4112306,
                "nome": "Japira"
            },
            {
                "codigo_ibge": 4112405,
                "nome": "Japurá"
            },
            {
                "codigo_ibge": 4112504,
                "nome": "Jardim Alegre"
            },
            {
                "codigo_ibge": 4112603,
                "nome": "Jardim Olinda"
            },
            {
                "codigo_ibge": 4112702,
                "nome": "Jataizinho"
            },
            {
                "codigo_ibge": 4112751,
                "nome": "Jesuítas"
            },
            {
                "codigo_ibge": 4112801,
                "nome": "Joaquim Távora"
            },
            {
                "codigo_ibge": 4112900,
                "nome": "Jundiaí do Sul"
            },
            {
                "codigo_ibge": 4112959,
                "nome": "Juranda"
            },
            {
                "codigo_ibge": 4113007,
                "nome": "Jussara"
            },
            {
                "codigo_ibge": 4113106,
                "nome": "Kaloré"
            },
            {
                "codigo_ibge": 4113205,
                "nome": "Lapa"
            },
            {
                "codigo_ibge": 4113254,
                "nome": "Laranjal"
            },
            {
                "codigo_ibge": 4113304,
                "nome": "Laranjeiras do Sul"
            },
            {
                "codigo_ibge": 4113403,
                "nome": "Leópolis"
            },
            {
                "codigo_ibge": 4113429,
                "nome": "Lidianópolis"
            },
            {
                "codigo_ibge": 4113452,
                "nome": "Lindoeste"
            },
            {
                "codigo_ibge": 4113502,
                "nome": "Loanda"
            },
            {
                "codigo_ibge": 4113601,
                "nome": "Lobato"
            },
            {
                "codigo_ibge": 4113700,
                "nome": "Londrina"
            },
            {
                "codigo_ibge": 4113734,
                "nome": "Luiziana"
            },
            {
                "codigo_ibge": 4113759,
                "nome": "Lunardelli"
            },
            {
                "codigo_ibge": 4113809,
                "nome": "Lupionópolis"
            },
            {
                "codigo_ibge": 4113908,
                "nome": "Mallet"
            },
            {
                "codigo_ibge": 4114005,
                "nome": "Mamborê"
            },
            {
                "codigo_ibge": 4114104,
                "nome": "Mandaguaçu"
            },
            {
                "codigo_ibge": 4114203,
                "nome": "Mandaguari"
            },
            {
                "codigo_ibge": 4114302,
                "nome": "Mandirituba"
            },
            {
                "codigo_ibge": 4114351,
                "nome": "Manfrinópolis"
            },
            {
                "codigo_ibge": 4114401,
                "nome": "Mangueirinha"
            },
            {
                "codigo_ibge": 4114500,
                "nome": "Manoel Ribas"
            },
            {
                "codigo_ibge": 4114609,
                "nome": "Marechal Cândido Rondon"
            },
            {
                "codigo_ibge": 4114708,
                "nome": "Maria Helena"
            },
            {
                "codigo_ibge": 4114807,
                "nome": "Marialva"
            },
            {
                "codigo_ibge": 4114906,
                "nome": "Marilândia do Sul"
            },
            {
                "codigo_ibge": 4115002,
                "nome": "Marilena"
            },
            {
                "codigo_ibge": 4115101,
                "nome": "Mariluz"
            },
            {
                "codigo_ibge": 4115200,
                "nome": "Maringá"
            },
            {
                "codigo_ibge": 4115309,
                "nome": "Mariópolis"
            },
            {
                "codigo_ibge": 4115358,
                "nome": "Maripá"
            },
            {
                "codigo_ibge": 4115408,
                "nome": "Marmeleiro"
            },
            {
                "codigo_ibge": 4115457,
                "nome": "Marquinho"
            },
            {
                "codigo_ibge": 4115507,
                "nome": "Marumbi"
            },
            {
                "codigo_ibge": 4115606,
                "nome": "Matelândia"
            },
            {
                "codigo_ibge": 4115705,
                "nome": "Matinhos"
            },
            {
                "codigo_ibge": 4115739,
                "nome": "Mato Rico"
            },
            {
                "codigo_ibge": 4115754,
                "nome": "Mauá da Serra"
            },
            {
                "codigo_ibge": 4115804,
                "nome": "Medianeira"
            },
            {
                "codigo_ibge": 4115853,
                "nome": "Mercedes"
            },
            {
                "codigo_ibge": 4115903,
                "nome": "Mirador"
            },
            {
                "codigo_ibge": 4116000,
                "nome": "Miraselva"
            },
            {
                "codigo_ibge": 4116059,
                "nome": "Missal"
            },
            {
                "codigo_ibge": 4116109,
                "nome": "Moreira Sales"
            },
            {
                "codigo_ibge": 4116208,
                "nome": "Morretes"
            },
            {
                "codigo_ibge": 4116307,
                "nome": "Munhoz de Melo"
            },
            {
                "codigo_ibge": 4116406,
                "nome": "Nossa Senhora das Graças"
            },
            {
                "codigo_ibge": 4116505,
                "nome": "Nova Aliança do Ivaí"
            },
            {
                "codigo_ibge": 4116604,
                "nome": "Nova América da Colina"
            },
            {
                "codigo_ibge": 4116703,
                "nome": "Nova Aurora"
            },
            {
                "codigo_ibge": 4116802,
                "nome": "Nova Cantu"
            },
            {
                "codigo_ibge": 4116901,
                "nome": "Nova Esperança"
            },
            {
                "codigo_ibge": 4116950,
                "nome": "Nova Esperança do Sudoeste"
            },
            {
                "codigo_ibge": 4117008,
                "nome": "Nova Fátima"
            },
            {
                "codigo_ibge": 4117057,
                "nome": "Nova Laranjeiras"
            },
            {
                "codigo_ibge": 4117107,
                "nome": "Nova Londrina"
            },
            {
                "codigo_ibge": 4117206,
                "nome": "Nova Olímpia"
            },
            {
                "codigo_ibge": 4117255,
                "nome": "Nova Prata do Iguaçu"
            },
            {
                "codigo_ibge": 4117214,
                "nome": "Nova Santa Bárbara"
            },
            {
                "codigo_ibge": 4117222,
                "nome": "Nova Santa Rosa"
            },
            {
                "codigo_ibge": 4117271,
                "nome": "Nova Tebas"
            },
            {
                "codigo_ibge": 4117297,
                "nome": "Novo Itacolomi"
            },
            {
                "codigo_ibge": 4117305,
                "nome": "Ortigueira"
            },
            {
                "codigo_ibge": 4117404,
                "nome": "Ourizona"
            },
            {
                "codigo_ibge": 4117453,
                "nome": "Ouro Verde do Oeste"
            },
            {
                "codigo_ibge": 4117503,
                "nome": "Paiçandu"
            },
            {
                "codigo_ibge": 4117602,
                "nome": "Palmas"
            },
            {
                "codigo_ibge": 4117701,
                "nome": "Palmeira"
            },
            {
                "codigo_ibge": 4117800,
                "nome": "Palmital"
            },
            {
                "codigo_ibge": 4117909,
                "nome": "Palotina"
            },
            {
                "codigo_ibge": 4118006,
                "nome": "Paraíso do Norte"
            },
            {
                "codigo_ibge": 4118105,
                "nome": "Paranacity"
            },
            {
                "codigo_ibge": 4118204,
                "nome": "Paranaguá"
            },
            {
                "codigo_ibge": 4118303,
                "nome": "Paranapoema"
            },
            {
                "codigo_ibge": 4118402,
                "nome": "Paranavaí"
            },
            {
                "codigo_ibge": 4118451,
                "nome": "Pato Bragado"
            },
            {
                "codigo_ibge": 4118501,
                "nome": "Pato Branco"
            },
            {
                "codigo_ibge": 4118600,
                "nome": "Paula Freitas"
            },
            {
                "codigo_ibge": 4118709,
                "nome": "Paulo Frontin"
            },
            {
                "codigo_ibge": 4118808,
                "nome": "Peabiru"
            },
            {
                "codigo_ibge": 4118857,
                "nome": "Perobal"
            },
            {
                "codigo_ibge": 4118907,
                "nome": "Pérola"
            },
            {
                "codigo_ibge": 4119004,
                "nome": "Pérola d'Oeste"
            },
            {
                "codigo_ibge": 4119103,
                "nome": "Piên"
            },
            {
                "codigo_ibge": 4119152,
                "nome": "Pinhais"
            },
            {
                "codigo_ibge": 4119251,
                "nome": "Pinhal de São Bento"
            },
            {
                "codigo_ibge": 4119202,
                "nome": "Pinhalão"
            },
            {
                "codigo_ibge": 4119301,
                "nome": "Pinhão"
            },
            {
                "codigo_ibge": 4119400,
                "nome": "Piraí do Sul"
            },
            {
                "codigo_ibge": 4119509,
                "nome": "Piraquara"
            },
            {
                "codigo_ibge": 4119608,
                "nome": "Pitanga"
            },
            {
                "codigo_ibge": 4119657,
                "nome": "Pitangueiras"
            },
            {
                "codigo_ibge": 4119707,
                "nome": "Planaltina do Paraná"
            },
            {
                "codigo_ibge": 4119806,
                "nome": "Planalto"
            },
            {
                "codigo_ibge": 4119905,
                "nome": "Ponta Grossa"
            },
            {
                "codigo_ibge": 4119954,
                "nome": "Pontal do Paraná"
            },
            {
                "codigo_ibge": 4120002,
                "nome": "Porecatu"
            },
            {
                "codigo_ibge": 4120101,
                "nome": "Porto Amazonas"
            },
            {
                "codigo_ibge": 4120150,
                "nome": "Porto Barreiro"
            },
            {
                "codigo_ibge": 4120200,
                "nome": "Porto Rico"
            },
            {
                "codigo_ibge": 4120309,
                "nome": "Porto Vitória"
            },
            {
                "codigo_ibge": 4120333,
                "nome": "Prado Ferreira"
            },
            {
                "codigo_ibge": 4120358,
                "nome": "Pranchita"
            },
            {
                "codigo_ibge": 4120408,
                "nome": "Presidente Castelo Branco"
            },
            {
                "codigo_ibge": 4120507,
                "nome": "Primeiro de Maio"
            },
            {
                "codigo_ibge": 4120606,
                "nome": "Prudentópolis"
            },
            {
                "codigo_ibge": 4120655,
                "nome": "Quarto Centenário"
            },
            {
                "codigo_ibge": 4120705,
                "nome": "Quatiguá"
            },
            {
                "codigo_ibge": 4120804,
                "nome": "Quatro Barras"
            },
            {
                "codigo_ibge": 4120853,
                "nome": "Quatro Pontes"
            },
            {
                "codigo_ibge": 4120903,
                "nome": "Quedas do Iguaçu"
            },
            {
                "codigo_ibge": 4121000,
                "nome": "Querência do Norte"
            },
            {
                "codigo_ibge": 4121109,
                "nome": "Quinta do Sol"
            },
            {
                "codigo_ibge": 4121208,
                "nome": "Quitandinha"
            },
            {
                "codigo_ibge": 4121257,
                "nome": "Ramilândia"
            },
            {
                "codigo_ibge": 4121307,
                "nome": "Rancho Alegre"
            },
            {
                "codigo_ibge": 4121356,
                "nome": "Rancho Alegre D'Oeste"
            },
            {
                "codigo_ibge": 4121406,
                "nome": "Realeza"
            },
            {
                "codigo_ibge": 4121505,
                "nome": "Rebouças"
            },
            {
                "codigo_ibge": 4121604,
                "nome": "Renascença"
            },
            {
                "codigo_ibge": 4121703,
                "nome": "Reserva"
            },
            {
                "codigo_ibge": 4121752,
                "nome": "Reserva do Iguaçu"
            },
            {
                "codigo_ibge": 4121802,
                "nome": "Ribeirão Claro"
            },
            {
                "codigo_ibge": 4121901,
                "nome": "Ribeirão do Pinhal"
            },
            {
                "codigo_ibge": 4122008,
                "nome": "Rio Azul"
            },
            {
                "codigo_ibge": 4122107,
                "nome": "Rio Bom"
            },
            {
                "codigo_ibge": 4122156,
                "nome": "Rio Bonito do Iguaçu"
            },
            {
                "codigo_ibge": 4122172,
                "nome": "Rio Branco do Ivaí"
            },
            {
                "codigo_ibge": 4122206,
                "nome": "Rio Branco do Sul"
            },
            {
                "codigo_ibge": 4122305,
                "nome": "Rio Negro"
            },
            {
                "codigo_ibge": 4122404,
                "nome": "Rolândia"
            },
            {
                "codigo_ibge": 4122503,
                "nome": "Roncador"
            },
            {
                "codigo_ibge": 4122602,
                "nome": "Rondon"
            },
            {
                "codigo_ibge": 4122651,
                "nome": "Rosário do Ivaí"
            },
            {
                "codigo_ibge": 4122701,
                "nome": "Sabáudia"
            },
            {
                "codigo_ibge": 4122800,
                "nome": "Salgado Filho"
            },
            {
                "codigo_ibge": 4122909,
                "nome": "Salto do Itararé"
            },
            {
                "codigo_ibge": 4123006,
                "nome": "Salto do Lontra"
            },
            {
                "codigo_ibge": 4123105,
                "nome": "Santa Amélia"
            },
            {
                "codigo_ibge": 4123204,
                "nome": "Santa Cecília do Pavão"
            },
            {
                "codigo_ibge": 4123303,
                "nome": "Santa Cruz de Monte Castelo"
            },
            {
                "codigo_ibge": 4123402,
                "nome": "Santa Fé"
            },
            {
                "codigo_ibge": 4123501,
                "nome": "Santa Helena"
            },
            {
                "codigo_ibge": 4123600,
                "nome": "Santa Inês"
            },
            {
                "codigo_ibge": 4123709,
                "nome": "Santa Isabel do Ivaí"
            },
            {
                "codigo_ibge": 4123808,
                "nome": "Santa Izabel do Oeste"
            },
            {
                "codigo_ibge": 4123824,
                "nome": "Santa Lúcia"
            },
            {
                "codigo_ibge": 4123857,
                "nome": "Santa Maria do Oeste"
            },
            {
                "codigo_ibge": 4123907,
                "nome": "Santa Mariana"
            },
            {
                "codigo_ibge": 4123956,
                "nome": "Santa Mônica"
            },
            {
                "codigo_ibge": 4124020,
                "nome": "Santa Tereza do Oeste"
            },
            {
                "codigo_ibge": 4124053,
                "nome": "Santa Terezinha de Itaipu"
            },
            {
                "codigo_ibge": 4124004,
                "nome": "Santana do Itararé"
            },
            {
                "codigo_ibge": 4124103,
                "nome": "Santo Antônio da Platina"
            },
            {
                "codigo_ibge": 4124202,
                "nome": "Santo Antônio do Caiuá"
            },
            {
                "codigo_ibge": 4124301,
                "nome": "Santo Antônio do Paraíso"
            },
            {
                "codigo_ibge": 4124400,
                "nome": "Santo Antônio do Sudoeste"
            },
            {
                "codigo_ibge": 4124509,
                "nome": "Santo Inácio"
            },
            {
                "codigo_ibge": 4124608,
                "nome": "São Carlos do Ivaí"
            },
            {
                "codigo_ibge": 4124707,
                "nome": "São Jerônimo da Serra"
            },
            {
                "codigo_ibge": 4124806,
                "nome": "São João"
            },
            {
                "codigo_ibge": 4124905,
                "nome": "São João do Caiuá"
            },
            {
                "codigo_ibge": 4125001,
                "nome": "São João do Ivaí"
            },
            {
                "codigo_ibge": 4125100,
                "nome": "São João do Triunfo"
            },
            {
                "codigo_ibge": 4125209,
                "nome": "São Jorge d'Oeste"
            },
            {
                "codigo_ibge": 4125308,
                "nome": "São Jorge do Ivaí"
            },
            {
                "codigo_ibge": 4125357,
                "nome": "São Jorge do Patrocínio"
            },
            {
                "codigo_ibge": 4125407,
                "nome": "São José da Boa Vista"
            },
            {
                "codigo_ibge": 4125456,
                "nome": "São José das Palmeiras"
            },
            {
                "codigo_ibge": 4125506,
                "nome": "São José dos Pinhais"
            },
            {
                "codigo_ibge": 4125555,
                "nome": "São Manoel do Paraná"
            },
            {
                "codigo_ibge": 4125605,
                "nome": "São Mateus do Sul"
            },
            {
                "codigo_ibge": 4125704,
                "nome": "São Miguel do Iguaçu"
            },
            {
                "codigo_ibge": 4125753,
                "nome": "São Pedro do Iguaçu"
            },
            {
                "codigo_ibge": 4125803,
                "nome": "São Pedro do Ivaí"
            },
            {
                "codigo_ibge": 4125902,
                "nome": "São Pedro do Paraná"
            },
            {
                "codigo_ibge": 4126009,
                "nome": "São Sebastião da Amoreira"
            },
            {
                "codigo_ibge": 4126108,
                "nome": "São Tomé"
            },
            {
                "codigo_ibge": 4126207,
                "nome": "Sapopema"
            },
            {
                "codigo_ibge": 4126256,
                "nome": "Sarandi"
            },
            {
                "codigo_ibge": 4126272,
                "nome": "Saudade do Iguaçu"
            },
            {
                "codigo_ibge": 4126306,
                "nome": "Sengés"
            },
            {
                "codigo_ibge": 4126355,
                "nome": "Serranópolis do Iguaçu"
            },
            {
                "codigo_ibge": 4126405,
                "nome": "Sertaneja"
            },
            {
                "codigo_ibge": 4126504,
                "nome": "Sertanópolis"
            },
            {
                "codigo_ibge": 4126603,
                "nome": "Siqueira Campos"
            },
            {
                "codigo_ibge": 4126652,
                "nome": "Sulina"
            },
            {
                "codigo_ibge": 4126678,
                "nome": "Tamarana"
            },
            {
                "codigo_ibge": 4126702,
                "nome": "Tamboara"
            },
            {
                "codigo_ibge": 4126801,
                "nome": "Tapejara"
            },
            {
                "codigo_ibge": 4126900,
                "nome": "Tapira"
            },
            {
                "codigo_ibge": 4127007,
                "nome": "Teixeira Soares"
            },
            {
                "codigo_ibge": 4127106,
                "nome": "Telêmaco Borba"
            },
            {
                "codigo_ibge": 4127205,
                "nome": "Terra Boa"
            },
            {
                "codigo_ibge": 4127304,
                "nome": "Terra Rica"
            },
            {
                "codigo_ibge": 4127403,
                "nome": "Terra Roxa"
            },
            {
                "codigo_ibge": 4127502,
                "nome": "Tibagi"
            },
            {
                "codigo_ibge": 4127601,
                "nome": "Tijucas do Sul"
            },
            {
                "codigo_ibge": 4127700,
                "nome": "Toledo"
            },
            {
                "codigo_ibge": 4127809,
                "nome": "Tomazina"
            },
            {
                "codigo_ibge": 4127858,
                "nome": "Três Barras do Paraná"
            },
            {
                "codigo_ibge": 4127882,
                "nome": "Tunas do Paraná"
            },
            {
                "codigo_ibge": 4127908,
                "nome": "Tuneiras do Oeste"
            },
            {
                "codigo_ibge": 4127957,
                "nome": "Tupãssi"
            },
            {
                "codigo_ibge": 4127965,
                "nome": "Turvo"
            },
            {
                "codigo_ibge": 4128005,
                "nome": "Ubiratã"
            },
            {
                "codigo_ibge": 4128104,
                "nome": "Umuarama"
            },
            {
                "codigo_ibge": 4128203,
                "nome": "União da Vitória"
            },
            {
                "codigo_ibge": 4128302,
                "nome": "Uniflor"
            },
            {
                "codigo_ibge": 4128401,
                "nome": "Uraí"
            },
            {
                "codigo_ibge": 4128534,
                "nome": "Ventania"
            },
            {
                "codigo_ibge": 4128559,
                "nome": "Vera Cruz do Oeste"
            },
            {
                "codigo_ibge": 4128609,
                "nome": "Verê"
            },
            {
                "codigo_ibge": 4128658,
                "nome": "Virmond"
            },
            {
                "codigo_ibge": 4128708,
                "nome": "Vitorino"
            },
            {
                "codigo_ibge": 4128500,
                "nome": "Wenceslau Braz"
            },
            {
                "codigo_ibge": 4128807,
                "nome": "Xambrê"
            }
        ]
    },
    "RJ": {
        "nome": "Rio de Janeiro",
        "municipios": [
            {
                "codigo_ibge": 3300100,
                "nome": "Angra dos Reis"
            },
            {
                "codigo_ibge": 3300159,
                "nome": "Aperibé"
            },
            {
                "codigo_ibge": 3300209,
                "nome": "Araruama"
            },
            {
                "codigo_ibge": 3300225,
                "nome": "Areal"
            },
            {
                "codigo_ibge": 3300233,
                "nome": "Armação dos Búzios"
            },
            {
                "codigo_ibge": 3300258,
                "nome": "Arraial do Cabo"
            },
            {
                "codigo_ibge": 3300308,
                "nome": "Barra do Piraí"
            },
            {
                "codigo_ibge": 3300407,
                "nome": "Barra Mansa"
            },
            {
                "codigo_ibge": 3300456,
                "nome": "Belford Roxo"
            },
            {
                "codigo_ibge": 3300506,
                "nome": "Bom Jardim"
            },
            {
                "codigo_ibge": 3300605,
                "nome": "Bom Jesus do Itabapoana"
            },
            {
                "codigo_ibge": 3300704,
                "nome": "Cabo Frio"
            },
            {
                "codigo_ibge": 3300803,
                "nome": "Cachoeiras de Macacu"
            },
            {
                "codigo_ibge": 3300902,
                "nome": "Cambuci"
            },
            {
                "codigo_ibge": 3301009,
                "nome": "Campos dos Goytacazes"
            },
            {
                "codigo_ibge": 3301108,
                "nome": "Cantagalo"
            },
            {
                "codigo_ibge": 3300936,
                "nome": "Carapebus"
            },
            {
                "codigo_ibge": 3301157,
                "nome": "Cardoso Moreira"
            },
            {
                "codigo_ibge": 3301207,
                "nome": "Carmo"
            },
            {
                "codigo_ibge": 3301306,
                "nome": "Casimiro de Abreu"
            },
            {
                "codigo_ibge": 3300951,
                "nome": "Comendador Levy Gasparian"
            },
            {
                "codigo_ibge": 3301405,
                "nome": "Conceição de Macabu"
            },
            {
                "codigo_ibge": 3301504,
                "nome": "Cordeiro"
            },
            {
                "codigo_ibge": 3301603,
                "nome": "Duas Barras"
            },
            {
                "codigo_ibge": 3301702,
                "nome": "Duque de Caxias"
            },
            {
                "codigo_ibge": 3301801,
                "nome": "Engenheiro Paulo de Frontin"
            },
            {
                "codigo_ibge": 3301850,
                "nome": "Guapimirim"
            },
            {
                "codigo_ibge": 3301876,
                "nome": "Iguaba Grande"
            },
            {
                "codigo_ibge": 3301900,
                "nome": "Itaboraí"
            },
            {
                "codigo_ibge": 3302007,
                "nome": "Itaguaí"
            },
            {
                "codigo_ibge": 3302056,
                "nome": "Italva"
            },
            {
                "codigo_ibge": 3302106,
                "nome": "Itaocara"
            },
            {
                "codigo_ibge": 3302205,
                "nome": "Itaperuna"
            },
            {
                "codigo_ibge": 3302254,
                "nome": "Itatiaia"
            },
            {
                "codigo_ibge": 3302270,
                "nome": "Japeri"
            },
            {
                "codigo_ibge": 3302304,
                "nome": "Laje do Muriaé"
            },
            {
                "codigo_ibge": 3302403,
                "nome": "Macaé"
            },
            {
                "codigo_ibge": 3302452,
                "nome": "Macuco"
            },
            {
                "codigo_ibge": 3302502,
                "nome": "Magé"
            },
            {
                "codigo_ibge": 3302601,
                "nome": "Mangaratiba"
            },
            {
                "codigo_ibge": 3302700,
                "nome": "Maricá"
            },
            {
                "codigo_ibge": 3302809,
                "nome": "Mendes"
            },
            {
                "codigo_ibge": 3302858,
                "nome": "Mesquita"
            },
            {
                "codigo_ibge": 3302908,
                "nome": "Miguel Pereira"
            },
            {
                "codigo_ibge": 3303005,
                "nome": "Miracema"
            },
            {
                "codigo_ibge": 3303104,
                "nome": "Natividade"
            },
            {
                "codigo_ibge": 3303203,
                "nome": "Nilópolis"
            },
            {
                "codigo_ibge": 3303302,
                "nome": "Niterói"
            },
            {
                "codigo_ibge": 3303401,
                "nome": "Nova Friburgo"
            },
            {
                "codigo_ibge": 3303500,
                "nome": "Nova Iguaçu"
            },
            {
                "codigo_ibge": 3303609,
                "nome": "Paracambi"
            },
            {
                "codigo_ibge": 3303708,
                "nome": "Paraíba do Sul"
            },
            {
                "codigo_ibge": 3303807,
                "nome": "Paraty"
            },
            {
                "codigo_ibge": 3303856,
                "nome": "Paty do Alferes"
            },
            {
                "codigo_ibge": 3303906,
                "nome": "Petrópolis"
            },
            {
                "codigo_ibge": 3303955,
                "nome": "Pinheiral"
            },
            {
                "codigo_ibge": 3304003,
                "nome": "Piraí"
            },
            {
                "codigo_ibge": 3304102,
                "nome": "Porciúncula"
            },
            {
                "codigo_ibge": 3304110,
                "nome": "Porto Real"
            },
            {
                "codigo_ibge": 3304128,
                "nome": "Quatis"
            },
            {
                "codigo_ibge": 3304144,
                "nome": "Queimados"
            },
            {
                "codigo_ibge": 3304151,
                "nome": "Quissamã"
            },
            {
                "codigo_ibge": 3304201,
                "nome": "Resende"
            },
            {
                "codigo_ibge": 3304300,
                "nome": "Rio Bonito"
            },
            {
                "codigo_ibge": 3304409,
                "nome": "Rio Claro"
            },
            {
                "codigo_ibge": 3304508,
                "nome": "Rio das Flores"
            },
            {
                "codigo_ibge": 3304524,
                "nome": "Rio das Ostras"
            },
            {
                "codigo_ibge": 3304557,
                "nome": "Rio de Janeiro"
            },
            {
                "codigo_ibge": 3304607,
                "nome": "Santa Maria Madalena"
            },
            {
                "codigo_ibge": 3304706,
                "nome": "Santo Antônio de Pádua"
            },
            {
                "codigo_ibge": 3304805,
                "nome": "São Fidélis"
            },
            {
                "codigo_ibge": 3304755,
                "nome": "São Francisco de Itabapoana"
            },
            {
                "codigo_ibge": 3304904,
                "nome": "São Gonçalo"
            },
            {
                "codigo_ibge": 3305000,
                "nome": "São João da Barra"
            },
            {
                "codigo_ibge": 3305109,
                "nome": "São João de Meriti"
            },
            {
                "codigo_ibge": 3305133,
                "nome": "São José de Ubá"
            },
            {
                "codigo_ibge": 3305158,
                "nome": "São José do Vale do Rio Preto"
            },
            {
                "codigo_ibge": 3305208,
                "nome": "São Pedro da Aldeia"
            },
            {
                "codigo_ibge": 3305307,
                "nome": "São Sebastião do Alto"
            },
            {
                "codigo_ibge": 3305406,
                "nome": "Sapucaia"
            },
            {
                "codigo_ibge": 3305505,
                "nome": "Saquarema"
            },
            {
                "codigo_ibge": 3305554,
                "nome": "Seropédica"
            },
            {
                "codigo_ibge": 3305604,
                "nome": "Silva Jardim"
            },
            {
                "codigo_ibge": 3305703,
                "nome": "Sumidouro"
            },
            {
                "codigo_ibge": 3305752,
                "nome": "Tanguá"
            },
            {
                "codigo_ibge": 3305802,
                "nome": "Teresópolis"
            },
            {
                "codigo_ibge": 3305901,
                "nome": "Trajano de Moraes"
            },
            {
                "codigo_ibge": 3306008,
                "nome": "Três Rios"
            },
            {
                "codigo_ibge": 3306107,
                "nome": "Valença"
            },
            {
                "codigo_ibge": 3306156,
                "nome": "Varre-Sai"
            },
            {
                "codigo_ibge": 3306206,
                "nome": "Vassouras"
            },
            {
                "codigo_ibge": 3306305,
                "nome": "Volta Redonda"
            }
        ]
    },
    "RN": {
        "nome": "Rio Grande do Norte",
        "municipios": [
            {
                "codigo_ibge": 2400109,
                "nome": "Acari"
            },
            {
                "codigo_ibge": 2400208,
                "nome": "Açu"
            },
            {
                "codigo_ibge": 2400307,
                "nome": "Afonso Bezerra"
            },
            {
                "codigo_ibge": 2400406,
                "nome": "Água Nova"
            },
            {
                "codigo_ibge": 2400505,
                "nome": "Alexandria"
            },
            {
                "codigo_ibge": 2400604,
                "nome": "Almino Afonso"
            },
            {
                "codigo_ibge": 2400703,
                "nome": "Alto do Rodrigues"
            },
            {
                "codigo_ibge": 2400802,
                "nome": "Angicos"
            },
            {
                "codigo_ibge": 2400901,
                "nome": "Antônio Martins"
            },
            {
                "codigo_ibge": 2401008,
                "nome": "Apodi"
            },
            {
                "codigo_ibge": 2401107,
                "nome": "Areia Branca"
            },
            {
                "codigo_ibge": 2401206,
                "nome": "Arês"
            },
            {
                "codigo_ibge": 2401305,
                "nome": "Augusto Severo (Campo Grande)"
            },
            {
                "codigo_ibge": 2401404,
                "nome": "Baía Formosa"
            },
            {
                "codigo_ibge": 2401453,
                "nome": "Baraúna"
            },
            {
                "codigo_ibge": 2401503,
                "nome": "Barcelona"
            },
            {
                "codigo_ibge": 2401602,
                "nome": "Bento Fernandes"
            },
            {
                "codigo_ibge": 2401651,
                "nome": "Bodó"
            },
            {
                "codigo_ibge": 2401701,
                "nome": "Bom Jesus"
            },
            {
                "codigo_ibge": 2401800,
                "nome": "Brejinho"
            },
            {
                "codigo_ibge": 2401859,
                "nome": "Caiçara do Norte"
            },
            {
                "codigo_ibge": 2401909,
                "nome": "Caiçara do Rio do Vento"
            },
            {
                "codigo_ibge": 2402006,
                "nome": "Caicó"
            },
            {
                "codigo_ibge": 2402105,
                "nome": "Campo Redondo"
            },
            {
                "codigo_ibge": 2402204,
                "nome": "Canguaretama"
            },
            {
                "codigo_ibge": 2402303,
                "nome": "Caraúbas"
            },
            {
                "codigo_ibge": 2402402,
                "nome": "Carnaúba dos Dantas"
            },
            {
                "codigo_ibge": 2402501,
                "nome": "Carnaubais"
            },
            {
                "codigo_ibge": 2402600,
                "nome": "Ceará-Mirim"
            },
            {
                "codigo_ibge": 2402709,
                "nome": "Cerro Corá"
            },
            {
                "codigo_ibge": 2402808,
                "nome": "Coronel Ezequiel"
            },
            {
                "codigo_ibge": 2402907,
                "nome": "Coronel João Pessoa"
            },
            {
                "codigo_ibge": 2403004,
                "nome": "Cruzeta"
            },
            {
                "codigo_ibge": 2403103,
                "nome": "Currais Novos"
            },
            {
                "codigo_ibge": 2403202,
                "nome": "Doutor Severiano"
            },
            {
                "codigo_ibge": 2403301,
                "nome": "Encanto"
            },
            {
                "codigo_ibge": 2403400,
                "nome": "Equador"
            },
            {
                "codigo_ibge": 2403509,
                "nome": "Espírito Santo"
            },
            {
                "codigo_ibge": 2403608,
                "nome": "Extremoz"
            },
            {
                "codigo_ibge": 2403707,
                "nome": "Felipe Guerra"
            },
            {
                "codigo_ibge": 2403756,
                "nome": "Fernando Pedroza"
            },
            {
                "codigo_ibge": 2403806,
                "nome": "Florânia"
            },
            {
                "codigo_ibge": 2403905,
                "nome": "Francisco Dantas"
            },
            {
                "codigo_ibge": 2404002,
                "nome": "Frutuoso Gomes"
            },
            {
                "codigo_ibge": 2404101,
                "nome": "Galinhos"
            },
            {
                "codigo_ibge": 2404200,
                "nome": "Goianinha"
            },
            {
                "codigo_ibge": 2404309,
                "nome": "Governador Dix-Sept Rosado"
            },
            {
                "codigo_ibge": 2404408,
                "nome": "Grossos"
            },
            {
                "codigo_ibge": 2404507,
                "nome": "Guamaré"
            },
            {
                "codigo_ibge": 2404606,
                "nome": "Ielmo Marinho"
            },
            {
                "codigo_ibge": 2404705,
                "nome": "Ipanguaçu"
            },
            {
                "codigo_ibge": 2404804,
                "nome": "Ipueira"
            },
            {
                "codigo_ibge": 2404853,
                "nome": "Itajá"
            },
            {
                "codigo_ibge": 2404903,
                "nome": "Itaú"
            },
            {
                "codigo_ibge": 2405009,
                "nome": "Jaçanã"
            },
            {
                "codigo_ibge": 2405108,
                "nome": "Jandaíra"
            },
            {
                "codigo_ibge": 2405207,
                "nome": "Janduís"
            },
            {
                "codigo_ibge": 2405306,
                "nome": "Januário Cicco (Boa Saúde)"
            },
            {
                "codigo_ibge": 2405405,
                "nome": "Japi"
            },
            {
                "codigo_ibge": 2405504,
                "nome": "Jardim de Angicos"
            },
            {
                "codigo_ibge": 2405603,
                "nome": "Jardim de Piranhas"
            },
            {
                "codigo_ibge": 2405702,
                "nome": "Jardim do Seridó"
            },
            {
                "codigo_ibge": 2405801,
                "nome": "João Câmara"
            },
            {
                "codigo_ibge": 2405900,
                "nome": "João Dias"
            },
            {
                "codigo_ibge": 2406007,
                "nome": "José da Penha"
            },
            {
                "codigo_ibge": 2406106,
                "nome": "Jucurutu"
            },
            {
                "codigo_ibge": 2406155,
                "nome": "Jundiá"
            },
            {
                "codigo_ibge": 2406205,
                "nome": "Lagoa d'Anta"
            },
            {
                "codigo_ibge": 2406304,
                "nome": "Lagoa de Pedras"
            },
            {
                "codigo_ibge": 2406403,
                "nome": "Lagoa de Velhos"
            },
            {
                "codigo_ibge": 2406502,
                "nome": "Lagoa Nova"
            },
            {
                "codigo_ibge": 2406601,
                "nome": "Lagoa Salgada"
            },
            {
                "codigo_ibge": 2406700,
                "nome": "Lajes"
            },
            {
                "codigo_ibge": 2406809,
                "nome": "Lajes Pintadas"
            },
            {
                "codigo_ibge": 2406908,
                "nome": "Lucrécia"
            },
            {
                "codigo_ibge": 2407005,
                "nome": "Luís Gomes"
            },
            {
                "codigo_ibge": 2407104,
                "nome": "Macaíba"
            },
            {
                "codigo_ibge": 2407203,
                "nome": "Macau"
            },
            {
                "codigo_ibge": 2407252,
                "nome": "Major Sales"
            },
            {
                "codigo_ibge": 2407302,
                "nome": "Marcelino Vieira"
            },
            {
                "codigo_ibge": 2407401,
                "nome": "Martins"
            },
            {
                "codigo_ibge": 2407500,
                "nome": "Maxaranguape"
            },
            {
                "codigo_ibge": 2407609,
                "nome": "Messias Targino"
            },
            {
                "codigo_ibge": 2407708,
                "nome": "Montanhas"
            },
            {
                "codigo_ibge": 2407807,
                "nome": "Monte Alegre"
            },
            {
                "codigo_ibge": 2407906,
                "nome": "Monte das Gameleiras"
            },
            {
                "codigo_ibge": 2408003,
                "nome": "Mossoró"
            },
            {
                "codigo_ibge": 2408102,
                "nome": "Natal"
            },
            {
                "codigo_ibge": 2408201,
                "nome": "Nísia Floresta"
            },
            {
                "codigo_ibge": 2408300,
                "nome": "Nova Cruz"
            },
            {
                "codigo_ibge": 2408409,
                "nome": "Olho-d'Água do Borges"
            },
            {
                "codigo_ibge": 2408508,
                "nome": "Ouro Branco"
            },
            {
                "codigo_ibge": 2408607,
                "nome": "Paraná"
            },
            {
                "codigo_ibge": 2408706,
                "nome": "Paraú"
            },
            {
                "codigo_ibge": 2408805,
                "nome": "Parazinho"
            },
            {
                "codigo_ibge": 2408904,
                "nome": "Parelhas"
            },
            {
                "codigo_ibge": 2403251,
                "nome": "Parnamirim"
            },
            {
                "codigo_ibge": 2409100,
                "nome": "Passa e Fica"
            },
            {
                "codigo_ibge": 2409209,
                "nome": "Passagem"
            },
            {
                "codigo_ibge": 2409308,
                "nome": "Patu"
            },
            {
                "codigo_ibge": 2409407,
                "nome": "Pau dos Ferros"
            },
            {
                "codigo_ibge": 2409506,
                "nome": "Pedra Grande"
            },
            {
                "codigo_ibge": 2409605,
                "nome": "Pedra Preta"
            },
            {
                "codigo_ibge": 2409704,
                "nome": "Pedro Avelino"
            },
            {
                "codigo_ibge": 2409803,
                "nome": "Pedro Velho"
            },
            {
                "codigo_ibge": 2409902,
                "nome": "Pendências"
            },
            {
                "codigo_ibge": 2410009,
                "nome": "Pilões"
            },
            {
                "codigo_ibge": 2410108,
                "nome": "Poço Branco"
            },
            {
                "codigo_ibge": 2410207,
                "nome": "Portalegre"
            },
            {
                "codigo_ibge": 2410256,
                "nome": "Porto do Mangue"
            },
            {
                "codigo_ibge": 2410405,
                "nome": "Pureza"
            },
            {
                "codigo_ibge": 2410504,
                "nome": "Rafael Fernandes"
            },
            {
                "codigo_ibge": 2410603,
                "nome": "Rafael Godeiro"
            },
            {
                "codigo_ibge": 2410702,
                "nome": "Riacho da Cruz"
            },
            {
                "codigo_ibge": 2410801,
                "nome": "Riacho de Santana"
            },
            {
                "codigo_ibge": 2410900,
                "nome": "Riachuelo"
            },
            {
                "codigo_ibge": 2408953,
                "nome": "Rio do Fogo"
            },
            {
                "codigo_ibge": 2411007,
                "nome": "Rodolfo Fernandes"
            },
            {
                "codigo_ibge": 2411106,
                "nome": "Ruy Barbosa"
            },
            {
                "codigo_ibge": 2411205,
                "nome": "Santa Cruz"
            },
            {
                "codigo_ibge": 2409332,
                "nome": "Santa Maria"
            },
            {
                "codigo_ibge": 2411403,
                "nome": "Santana do Matos"
            },
            {
                "codigo_ibge": 2411429,
                "nome": "Santana do Seridó"
            },
            {
                "codigo_ibge": 2411502,
                "nome": "Santo Antônio"
            },
            {
                "codigo_ibge": 2411601,
                "nome": "São Bento do Norte"
            },
            {
                "codigo_ibge": 2411700,
                "nome": "São Bento do Trairí"
            },
            {
                "codigo_ibge": 2411809,
                "nome": "São Fernando"
            },
            {
                "codigo_ibge": 2411908,
                "nome": "São Francisco do Oeste"
            },
            {
                "codigo_ibge": 2412005,
                "nome": "São Gonçalo do Amarante"
            },
            {
                "codigo_ibge": 2412104,
                "nome": "São João do Sabugi"
            },
            {
                "codigo_ibge": 2412203,
                "nome": "São José de Mipibu"
            },
            {
                "codigo_ibge": 2412302,
                "nome": "São José do Campestre"
            },
            {
                "codigo_ibge": 2412401,
                "nome": "São José do Seridó"
            },
            {
                "codigo_ibge": 2412500,
                "nome": "São Miguel"
            },
            {
                "codigo_ibge": 2412559,
                "nome": "São Miguel do Gostoso"
            },
            {
                "codigo_ibge": 2412609,
                "nome": "São Paulo do Potengi"
            },
            {
                "codigo_ibge": 2412708,
                "nome": "São Pedro"
            },
            {
                "codigo_ibge": 2412807,
                "nome": "São Rafael"
            },
            {
                "codigo_ibge": 2412906,
                "nome": "São Tomé"
            },
            {
                "codigo_ibge": 2413003,
                "nome": "São Vicente"
            },
            {
                "codigo_ibge": 2413102,
                "nome": "Senador Elói de Souza"
            },
            {
                "codigo_ibge": 2413201,
                "nome": "Senador Georgino Avelino"
            },
            {
                "codigo_ibge": 2410306,
                "nome": "Serra Caiada"
            },
            {
                "codigo_ibge": 2413300,
                "nome": "Serra de São Bento"
            },
            {
                "codigo_ibge": 2413359,
                "nome": "Serra do Mel"
            },
            {
                "codigo_ibge": 2413409,
                "nome": "Serra Negra do Norte"
            },
            {
                "codigo_ibge": 2413508,
                "nome": "Serrinha"
            },
            {
                "codigo_ibge": 2413557,
                "nome": "Serrinha dos Pintos"
            },
            {
                "codigo_ibge": 2413607,
                "nome": "Severiano Melo"
            },
            {
                "codigo_ibge": 2413706,
                "nome": "Sítio Novo"
            },
            {
                "codigo_ibge": 2413805,
                "nome": "Taboleiro Grande"
            },
            {
                "codigo_ibge": 2413904,
                "nome": "Taipu"
            },
            {
                "codigo_ibge": 2414001,
                "nome": "Tangará"
            },
            {
                "codigo_ibge": 2414100,
                "nome": "Tenente Ananias"
            },
            {
                "codigo_ibge": 2414159,
                "nome": "Tenente Laurentino Cruz"
            },
            {
                "codigo_ibge": 2411056,
                "nome": "Tibau"
            },
            {
                "codigo_ibge": 2414209,
                "nome": "Tibau do Sul"
            },
            {
                "codigo_ibge": 2414308,
                "nome": "Timbaúba dos Batistas"
            },
            {
                "codigo_ibge": 2414407,
                "nome": "Touros"
            },
            {
                "codigo_ibge": 2414456,
                "nome": "Triunfo Potiguar"
            },
            {
                "codigo_ibge": 2414506,
                "nome": "Umarizal"
            },
            {
                "codigo_ibge": 2414605,
                "nome": "Upanema"
            },
            {
                "codigo_ibge": 2414704,
                "nome": "Várzea"
            },
            {
                "codigo_ibge": 2414753,
                "nome": "Venha-Ver"
            },
            {
                "codigo_ibge": 2414803,
                "nome": "Vera Cruz"
            },
            {
                "codigo_ibge": 2414902,
                "nome": "Viçosa"
            },
            {
                "codigo_ibge": 2415008,
                "nome": "Vila Flor"
            }
        ]
    },
    "RO": {
        "nome": "Rondônia",
        "municipios": [
            {
                "codigo_ibge": 1100015,
                "nome": "Alta Floresta D'Oeste"
            },
            {
                "codigo_ibge": 1100379,
                "nome": "Alto Alegre dos Parecis"
            },
            {
                "codigo_ibge": 1100403,
                "nome": "Alto Paraíso"
            },
            {
                "codigo_ibge": 1100346,
                "nome": "Alvorada D'Oeste"
            },
            {
                "codigo_ibge": 1100023,
                "nome": "Ariquemes"
            },
            {
                "codigo_ibge": 1100452,
                "nome": "Buritis"
            },
            {
                "codigo_ibge": 1100031,
                "nome": "Cabixi"
            },
            {
                "codigo_ibge": 1100601,
                "nome": "Cacaulândia"
            },
            {
                "codigo_ibge": 1100049,
                "nome": "Cacoal"
            },
            {
                "codigo_ibge": 1100700,
                "nome": "Campo Novo de Rondônia"
            },
            {
                "codigo_ibge": 1100809,
                "nome": "Candeias do Jamari"
            },
            {
                "codigo_ibge": 1100908,
                "nome": "Castanheiras"
            },
            {
                "codigo_ibge": 1100056,
                "nome": "Cerejeiras"
            },
            {
                "codigo_ibge": 1100924,
                "nome": "Chupinguaia"
            },
            {
                "codigo_ibge": 1100064,
                "nome": "Colorado do Oeste"
            },
            {
                "codigo_ibge": 1100072,
                "nome": "Corumbiara"
            },
            {
                "codigo_ibge": 1100080,
                "nome": "Costa Marques"
            },
            {
                "codigo_ibge": 1100940,
                "nome": "Cujubim"
            },
            {
                "codigo_ibge": 1100098,
                "nome": "Espigão D'Oeste"
            },
            {
                "codigo_ibge": 1101005,
                "nome": "Governador Jorge Teixeira"
            },
            {
                "codigo_ibge": 1100106,
                "nome": "Guajará-Mirim"
            },
            {
                "codigo_ibge": 1101104,
                "nome": "Itapuã do Oeste"
            },
            {
                "codigo_ibge": 1100114,
                "nome": "Jaru"
            },
            {
                "codigo_ibge": 1100122,
                "nome": "Ji-Paraná"
            },
            {
                "codigo_ibge": 1100130,
                "nome": "Machadinho D'Oeste"
            },
            {
                "codigo_ibge": 1101203,
                "nome": "Ministro Andreazza"
            },
            {
                "codigo_ibge": 1101302,
                "nome": "Mirante da Serra"
            },
            {
                "codigo_ibge": 1101401,
                "nome": "Monte Negro"
            },
            {
                "codigo_ibge": 1100148,
                "nome": "Nova Brasilândia D'Oeste"
            },
            {
                "codigo_ibge": 1100338,
                "nome": "Nova Mamoré"
            },
            {
                "codigo_ibge": 1101435,
                "nome": "Nova União"
            },
            {
                "codigo_ibge": 1100502,
                "nome": "Novo Horizonte do Oeste"
            },
            {
                "codigo_ibge": 1100155,
                "nome": "Ouro Preto do Oeste"
            },
            {
                "codigo_ibge": 1101450,
                "nome": "Parecis"
            },
            {
                "codigo_ibge": 1100189,
                "nome": "Pimenta Bueno"
            },
            {
                "codigo_ibge": 1101468,
                "nome": "Pimenteiras do Oeste"
            },
            {
                "codigo_ibge": 1100205,
                "nome": "Porto Velho"
            },
            {
                "codigo_ibge": 1100254,
                "nome": "Presidente Médici"
            },
            {
                "codigo_ibge": 1101476,
                "nome": "Primavera de Rondônia"
            },
            {
                "codigo_ibge": 1100262,
                "nome": "Rio Crespo"
            },
            {
                "codigo_ibge": 1100288,
                "nome": "Rolim de Moura"
            },
            {
                "codigo_ibge": 1100296,
                "nome": "Santa Luzia D'Oeste"
            },
            {
                "codigo_ibge": 1101484,
                "nome": "São Felipe D'Oeste"
            },
            {
                "codigo_ibge": 1101492,
                "nome": "São Francisco do Guaporé"
            },
            {
                "codigo_ibge": 1100320,
                "nome": "São Miguel do Guaporé"
            },
            {
                "codigo_ibge": 1101500,
                "nome": "Seringueiras"
            },
            {
                "codigo_ibge": 1101559,
                "nome": "Teixeirópolis"
            },
            {
                "codigo_ibge": 1101609,
                "nome": "Theobroma"
            },
            {
                "codigo_ibge": 1101708,
                "nome": "Urupá"
            },
            {
                "codigo_ibge": 1101757,
                "nome": "Vale do Anari"
            },
            {
                "codigo_ibge": 1101807,
                "nome": "Vale do Paraíso"
            },
            {
                "codigo_ibge": 1100304,
                "nome": "Vilhena"
            }
        ]
    },
    "RR": {
        "nome": "Roraima",
        "municipios": [
            {
                "codigo_ibge": 1400050,
                "nome": "Alto Alegre"
            },
            {
                "codigo_ibge": 1400027,
                "nome": "Amajari"
            },
            {
                "codigo_ibge": 1400100,
                "nome": "Boa Vista"
            },
            {
                "codigo_ibge": 1400159,
                "nome": "Bonfim"
            },
            {
                "codigo_ibge": 1400175,
                "nome": "Cantá"
            },
            {
                "codigo_ibge": 1400209,
                "nome": "Caracaraí"
            },
            {
                "codigo_ibge": 1400233,
                "nome": "Caroebe"
            },
            {
                "codigo_ibge": 1400282,
                "nome": "Iracema"
            },
            {
                "codigo_ibge": 1400308,
                "nome": "Mucajaí"
            },
            {
                "codigo_ibge": 1400407,
                "nome": "Normandia"
            },
            {
                "codigo_ibge": 1400456,
                "nome": "Pacaraima"
            },
            {
                "codigo_ibge": 1400472,
                "nome": "Rorainópolis"
            },
            {
                "codigo_ibge": 1400506,
                "nome": "São João da Baliza"
            },
            {
                "codigo_ibge": 1400605,
                "nome": "São Luiz"
            },
            {
                "codigo_ibge": 1400704,
                "nome": "Uiramutã"
            }
        ]
    },
    "RS": {
        "nome": "Rio Grande do Sul",
        "municipios": [
            {
                "codigo_ibge": 4300034,
                "nome": "Aceguá"
            },
            {
                "codigo_ibge": 4300059,
                "nome": "Água Santa"
            },
            {
                "codigo_ibge": 4300109,
                "nome": "Agudo"
            },
            {
                "codigo_ibge": 4300208,
                "nome": "Ajuricaba"
            },
            {
                "codigo_ibge": 4300307,
                "nome": "Alecrim"
            },
            {
                "codigo_ibge": 4300406,
                "nome": "Alegrete"
            },
            {
                "codigo_ibge": 4300455,
                "nome": "Alegria"
            },
            {
                "codigo_ibge": 4300471,
                "nome": "Almirante Tamandaré do Sul"
            },
            {
                "codigo_ibge": 4300505,
                "nome": "Alpestre"
            },
            {
                "codigo_ibge": 4300554,
                "nome": "Alto Alegre"
            },
            {
                "codigo_ibge": 4300570,
                "nome": "Alto Feliz"
            },
            {
                "codigo_ibge": 4300604,
                "nome": "Alvorada"
            },
            {
                "codigo_ibge": 4300638,
                "nome": "Amaral Ferrador"
            },
            {
                "codigo_ibge": 4300646,
                "nome": "Ametista do Sul"
            },
            {
                "codigo_ibge": 4300661,
                "nome": "André da Rocha"
            },
            {
                "codigo_ibge": 4300703,
                "nome": "Anta Gorda"
            },
            {
                "codigo_ibge": 4300802,
                "nome": "Antônio Prado"
            },
            {
                "codigo_ibge": 4300851,
                "nome": "Arambaré"
            },
            {
                "codigo_ibge": 4300877,
                "nome": "Araricá"
            },
            {
                "codigo_ibge": 4300901,
                "nome": "Aratiba"
            },
            {
                "codigo_ibge": 4301008,
                "nome": "Arroio do Meio"
            },
            {
                "codigo_ibge": 4301073,
                "nome": "Arroio do Padre"
            },
            {
                "codigo_ibge": 4301057,
                "nome": "Arroio do Sal"
            },
            {
                "codigo_ibge": 4301206,
                "nome": "Arroio do Tigre"
            },
            {
                "codigo_ibge": 4301107,
                "nome": "Arroio dos Ratos"
            },
            {
                "codigo_ibge": 4301305,
                "nome": "Arroio Grande"
            },
            {
                "codigo_ibge": 4301404,
                "nome": "Arvorezinha"
            },
            {
                "codigo_ibge": 4301503,
                "nome": "Augusto Pestana"
            },
            {
                "codigo_ibge": 4301552,
                "nome": "Áurea"
            },
            {
                "codigo_ibge": 4301602,
                "nome": "Bagé"
            },
            {
                "codigo_ibge": 4301636,
                "nome": "Balneário Pinhal"
            },
            {
                "codigo_ibge": 4301651,
                "nome": "Barão"
            },
            {
                "codigo_ibge": 4301701,
                "nome": "Barão de Cotegipe"
            },
            {
                "codigo_ibge": 4301750,
                "nome": "Barão do Triunfo"
            },
            {
                "codigo_ibge": 4301859,
                "nome": "Barra do Guarita"
            },
            {
                "codigo_ibge": 4301875,
                "nome": "Barra do Quaraí"
            },
            {
                "codigo_ibge": 4301909,
                "nome": "Barra do Ribeiro"
            },
            {
                "codigo_ibge": 4301925,
                "nome": "Barra do Rio Azul"
            },
            {
                "codigo_ibge": 4301958,
                "nome": "Barra Funda"
            },
            {
                "codigo_ibge": 4301800,
                "nome": "Barracão"
            },
            {
                "codigo_ibge": 4302006,
                "nome": "Barros Cassal"
            },
            {
                "codigo_ibge": 4302055,
                "nome": "Benjamin Constant do Sul"
            },
            {
                "codigo_ibge": 4302105,
                "nome": "Bento Gonçalves"
            },
            {
                "codigo_ibge": 4302154,
                "nome": "Boa Vista das Missões"
            },
            {
                "codigo_ibge": 4302204,
                "nome": "Boa Vista do Buricá"
            },
            {
                "codigo_ibge": 4302220,
                "nome": "Boa Vista do Cadeado"
            },
            {
                "codigo_ibge": 4302238,
                "nome": "Boa Vista do Incra"
            },
            {
                "codigo_ibge": 4302253,
                "nome": "Boa Vista do Sul"
            },
            {
                "codigo_ibge": 4302303,
                "nome": "Bom Jesus"
            },
            {
                "codigo_ibge": 4302352,
                "nome": "Bom Princípio"
            },
            {
                "codigo_ibge": 4302378,
                "nome": "Bom Progresso"
            },
            {
                "codigo_ibge": 4302402,
                "nome": "Bom Retiro do Sul"
            },
            {
                "codigo_ibge": 4302451,
                "nome": "Boqueirão do Leão"
            },
            {
                "codigo_ibge": 4302501,
                "nome": "Bossoroca"
            },
            {
                "codigo_ibge": 4302584,
                "nome": "Bozano"
            },
            {
                "codigo_ibge": 4302600,
                "nome": "Braga"
            },
            {
                "codigo_ibge": 4302659,
                "nome": "Brochier"
            },
            {
                "codigo_ibge": 4302709,
                "nome": "Butiá"
            },
            {
                "codigo_ibge": 4302808,
                "nome": "Caçapava do Sul"
            },
            {
                "codigo_ibge": 4302907,
                "nome": "Cacequi"
            },
            {
                "codigo_ibge": 4303004,
                "nome": "Cachoeira do Sul"
            },
            {
                "codigo_ibge": 4303103,
                "nome": "Cachoeirinha"
            },
            {
                "codigo_ibge": 4303202,
                "nome": "Cacique Doble"
            },
            {
                "codigo_ibge": 4303301,
                "nome": "Caibaté"
            },
            {
                "codigo_ibge": 4303400,
                "nome": "Caiçara"
            },
            {
                "codigo_ibge": 4303509,
                "nome": "Camaquã"
            },
            {
                "codigo_ibge": 4303558,
                "nome": "Camargo"
            },
            {
                "codigo_ibge": 4303608,
                "nome": "Cambará do Sul"
            },
            {
                "codigo_ibge": 4303673,
                "nome": "Campestre da Serra"
            },
            {
                "codigo_ibge": 4303707,
                "nome": "Campina das Missões"
            },
            {
                "codigo_ibge": 4303806,
                "nome": "Campinas do Sul"
            },
            {
                "codigo_ibge": 4303905,
                "nome": "Campo Bom"
            },
            {
                "codigo_ibge": 4304002,
                "nome": "Campo Novo"
            },
            {
                "codigo_ibge": 4304101,
                "nome": "Campos Borges"
            },
            {
                "codigo_ibge": 4304200,
                "nome": "Candelária"
            },
            {
                "codigo_ibge": 4304309,
                "nome": "Cândido Godói"
            },
            {
                "codigo_ibge": 4304358,
                "nome": "Candiota"
            },
            {
                "codigo_ibge": 4304408,
                "nome": "Canela"
            },
            {
                "codigo_ibge": 4304507,
                "nome": "Canguçu"
            },
            {
                "codigo_ibge": 4304606,
                "nome": "Canoas"
            },
            {
                "codigo_ibge": 4304614,
                "nome": "Canudos do Vale"
            },
            {
                "codigo_ibge": 4304622,
                "nome": "Capão Bonito do Sul"
            },
            {
                "codigo_ibge": 4304630,
                "nome": "Capão da Canoa"
            },
            {
                "codigo_ibge": 4304655,
                "nome": "Capão do Cipó"
            },
            {
                "codigo_ibge": 4304663,
                "nome": "Capão do Leão"
            },
            {
                "codigo_ibge": 4304689,
                "nome": "Capela de Santana"
            },
            {
                "codigo_ibge": 4304697,
                "nome": "Capitão"
            },
            {
                "codigo_ibge": 4304671,
                "nome": "Capivari do Sul"
            },
            {
                "codigo_ibge": 4304713,
                "nome": "Caraá"
            },
            {
                "codigo_ibge": 4304705,
                "nome": "Carazinho"
            },
            {
                "codigo_ibge": 4304804,
                "nome": "Carlos Barbosa"
            },
            {
                "codigo_ibge": 4304853,
                "nome": "Carlos Gomes"
            },
            {
                "codigo_ibge": 4304903,
                "nome": "Casca"
            },
            {
                "codigo_ibge": 4304952,
                "nome": "Caseiros"
            },
            {
                "codigo_ibge": 4305009,
                "nome": "Catuípe"
            },
            {
                "codigo_ibge": 4305108,
                "nome": "Caxias do Sul"
            },
            {
                "codigo_ibge": 4305116,
                "nome": "Centenário"
            },
            {
                "codigo_ibge": 4305124,
                "nome": "Cerrito"
            },
            {
                "codigo_ibge": 4305132,
                "nome": "Cerro Branco"
            },
            {
                "codigo_ibge": 4305157,
                "nome": "Cerro Grande"
            },
            {
                "codigo_ibge": 4305173,
                "nome": "Cerro Grande do Sul"
            },
            {
                "codigo_ibge": 4305207,
                "nome": "Cerro Largo"
            },
            {
                "codigo_ibge": 4305306,
                "nome": "Chapada"
            },
            {
                "codigo_ibge": 4305355,
                "nome": "Charqueadas"
            },
            {
                "codigo_ibge": 4305371,
                "nome": "Charrua"
            },
            {
                "codigo_ibge": 4305405,
                "nome": "Chiapetta"
            },
            {
                "codigo_ibge": 4305439,
                "nome": "Chuí"
            },
            {
                "codigo_ibge": 4305447,
                "nome": "Chuvisca"
            },
            {
                "codigo_ibge": 4305454,
                "nome": "Cidreira"
            },
            {
                "codigo_ibge": 4305504,
                "nome": "Ciríaco"
            },
            {
                "codigo_ibge": 4305587,
                "nome": "Colinas"
            },
            {
                "codigo_ibge": 4305603,
                "nome": "Colorado"
            },
            {
                "codigo_ibge": 4305702,
                "nome": "Condor"
            },
            {
                "codigo_ibge": 4305801,
                "nome": "Constantina"
            },
            {
                "codigo_ibge": 4305835,
                "nome": "Coqueiro Baixo"
            },
            {
                "codigo_ibge": 4305850,
                "nome": "Coqueiros do Sul"
            },
            {
                "codigo_ibge": 4305871,
                "nome": "Coronel Barros"
            },
            {
                "codigo_ibge": 4305900,
                "nome": "Coronel Bicaco"
            },
            {
                "codigo_ibge": 4305934,
                "nome": "Coronel Pilar"
            },
            {
                "codigo_ibge": 4305959,
                "nome": "Cotiporã"
            },
            {
                "codigo_ibge": 4305975,
                "nome": "Coxilha"
            },
            {
                "codigo_ibge": 4306007,
                "nome": "Crissiumal"
            },
            {
                "codigo_ibge": 4306056,
                "nome": "Cristal"
            },
            {
                "codigo_ibge": 4306072,
                "nome": "Cristal do Sul"
            },
            {
                "codigo_ibge": 4306106,
                "nome": "Cruz Alta"
            },
            {
                "codigo_ibge": 4306130,
                "nome": "Cruzaltense"
            },
            {
                "codigo_ibge": 4306205,
                "nome": "Cruzeiro do Sul"
            },
            {
                "codigo_ibge": 4306304,
                "nome": "David Canabarro"
            },
            {
                "codigo_ibge": 4306320,
                "nome": "Derrubadas"
            },
            {
                "codigo_ibge": 4306353,
                "nome": "Dezesseis de Novembro"
            },
            {
                "codigo_ibge": 4306379,
                "nome": "Dilermando de Aguiar"
            },
            {
                "codigo_ibge": 4306403,
                "nome": "Dois Irmãos"
            },
            {
                "codigo_ibge": 4306429,
                "nome": "Dois Irmãos das Missões"
            },
            {
                "codigo_ibge": 4306452,
                "nome": "Dois Lajeados"
            },
            {
                "codigo_ibge": 4306502,
                "nome": "Dom Feliciano"
            },
            {
                "codigo_ibge": 4306601,
                "nome": "Dom Pedrito"
            },
            {
                "codigo_ibge": 4306551,
                "nome": "Dom Pedro de Alcântara"
            },
            {
                "codigo_ibge": 4306700,
                "nome": "Dona Francisca"
            },
            {
                "codigo_ibge": 4306734,
                "nome": "Doutor Maurício Cardoso"
            },
            {
                "codigo_ibge": 4306759,
                "nome": "Doutor Ricardo"
            },
            {
                "codigo_ibge": 4306767,
                "nome": "Eldorado do Sul"
            },
            {
                "codigo_ibge": 4306809,
                "nome": "Encantado"
            },
            {
                "codigo_ibge": 4306908,
                "nome": "Encruzilhada do Sul"
            },
            {
                "codigo_ibge": 4306924,
                "nome": "Engenho Velho"
            },
            {
                "codigo_ibge": 4306957,
                "nome": "Entre Rios do Sul"
            },
            {
                "codigo_ibge": 4306932,
                "nome": "Entre-Ijuís"
            },
            {
                "codigo_ibge": 4306973,
                "nome": "Erebango"
            },
            {
                "codigo_ibge": 4307005,
                "nome": "Erechim"
            },
            {
                "codigo_ibge": 4307054,
                "nome": "Ernestina"
            },
            {
                "codigo_ibge": 4307203,
                "nome": "Erval Grande"
            },
            {
                "codigo_ibge": 4307302,
                "nome": "Erval Seco"
            },
            {
                "codigo_ibge": 4307401,
                "nome": "Esmeralda"
            },
            {
                "codigo_ibge": 4307450,
                "nome": "Esperança do Sul"
            },
            {
                "codigo_ibge": 4307500,
                "nome": "Espumoso"
            },
            {
                "codigo_ibge": 4307559,
                "nome": "Estação"
            },
            {
                "codigo_ibge": 4307609,
                "nome": "Estância Velha"
            },
            {
                "codigo_ibge": 4307708,
                "nome": "Esteio"
            },
            {
                "codigo_ibge": 4307807,
                "nome": "Estrela"
            },
            {
                "codigo_ibge": 4307815,
                "nome": "Estrela Velha"
            },
            {
                "codigo_ibge": 4307831,
                "nome": "Eugênio de Castro"
            },
            {
                "codigo_ibge": 4307864,
                "nome": "Fagundes Varela"
            },
            {
                "codigo_ibge": 4307906,
                "nome": "Farroupilha"
            },
            {
                "codigo_ibge": 4308003,
                "nome": "Faxinal do Soturno"
            },
            {
                "codigo_ibge": 4308052,
                "nome": "Faxinalzinho"
            },
            {
                "codigo_ibge": 4308078,
                "nome": "Fazenda Vilanova"
            },
            {
                "codigo_ibge": 4308102,
                "nome": "Feliz"
            },
            {
                "codigo_ibge": 4308201,
                "nome": "Flores da Cunha"
            },
            {
                "codigo_ibge": 4308250,
                "nome": "Floriano Peixoto"
            },
            {
                "codigo_ibge": 4308300,
                "nome": "Fontoura Xavier"
            },
            {
                "codigo_ibge": 4308409,
                "nome": "Formigueiro"
            },
            {
                "codigo_ibge": 4308433,
                "nome": "Forquetinha"
            },
            {
                "codigo_ibge": 4308458,
                "nome": "Fortaleza dos Valos"
            },
            {
                "codigo_ibge": 4308508,
                "nome": "Frederico Westphalen"
            },
            {
                "codigo_ibge": 4308607,
                "nome": "Garibaldi"
            },
            {
                "codigo_ibge": 4308656,
                "nome": "Garruchos"
            },
            {
                "codigo_ibge": 4308706,
                "nome": "Gaurama"
            },
            {
                "codigo_ibge": 4308805,
                "nome": "General Câmara"
            },
            {
                "codigo_ibge": 4308854,
                "nome": "Gentil"
            },
            {
                "codigo_ibge": 4308904,
                "nome": "Getúlio Vargas"
            },
            {
                "codigo_ibge": 4309001,
                "nome": "Giruá"
            },
            {
                "codigo_ibge": 4309050,
                "nome": "Glorinha"
            },
            {
                "codigo_ibge": 4309100,
                "nome": "Gramado"
            },
            {
                "codigo_ibge": 4309126,
                "nome": "Gramado dos Loureiros"
            },
            {
                "codigo_ibge": 4309159,
                "nome": "Gramado Xavier"
            },
            {
                "codigo_ibge": 4309209,
                "nome": "Gravataí"
            },
            {
                "codigo_ibge": 4309258,
                "nome": "Guabiju"
            },
            {
                "codigo_ibge": 4309308,
                "nome": "Guaíba"
            },
            {
                "codigo_ibge": 4309407,
                "nome": "Guaporé"
            },
            {
                "codigo_ibge": 4309506,
                "nome": "Guarani das Missões"
            },
            {
                "codigo_ibge": 4309555,
                "nome": "Harmonia"
            },
            {
                "codigo_ibge": 4307104,
                "nome": "Herval"
            },
            {
                "codigo_ibge": 4309571,
                "nome": "Herveiras"
            },
            {
                "codigo_ibge": 4309605,
                "nome": "Horizontina"
            },
            {
                "codigo_ibge": 4309654,
                "nome": "Hulha Negra"
            },
            {
                "codigo_ibge": 4309704,
                "nome": "Humaitá"
            },
            {
                "codigo_ibge": 4309753,
                "nome": "Ibarama"
            },
            {
                "codigo_ibge": 4309803,
                "nome": "Ibiaçá"
            },
            {
                "codigo_ibge": 4309902,
                "nome": "Ibiraiaras"
            },
            {
                "codigo_ibge": 4309951,
                "nome": "Ibirapuitã"
            },
            {
                "codigo_ibge": 4310009,
                "nome": "Ibirubá"
            },
            {
                "codigo_ibge": 4310108,
                "nome": "Igrejinha"
            },
            {
                "codigo_ibge": 4310207,
                "nome": "Ijuí"
            },
            {
                "codigo_ibge": 4310306,
                "nome": "Ilópolis"
            },
            {
                "codigo_ibge": 4310330,
                "nome": "Imbé"
            },
            {
                "codigo_ibge": 4310363,
                "nome": "Imigrante"
            },
            {
                "codigo_ibge": 4310405,
                "nome": "Independência"
            },
            {
                "codigo_ibge": 4310413,
                "nome": "Inhacorá"
            },
            {
                "codigo_ibge": 4310439,
                "nome": "Ipê"
            },
            {
                "codigo_ibge": 4310462,
                "nome": "Ipiranga do Sul"
            },
            {
                "codigo_ibge": 4310504,
                "nome": "Iraí"
            },
            {
                "codigo_ibge": 4310538,
                "nome": "Itaara"
            },
            {
                "codigo_ibge": 4310553,
                "nome": "Itacurubi"
            },
            {
                "codigo_ibge": 4310579,
                "nome": "Itapuca"
            },
            {
                "codigo_ibge": 4310603,
                "nome": "Itaqui"
            },
            {
                "codigo_ibge": 4310652,
                "nome": "Itati"
            },
            {
                "codigo_ibge": 4310702,
                "nome": "Itatiba do Sul"
            },
            {
                "codigo_ibge": 4310751,
                "nome": "Ivorá"
            },
            {
                "codigo_ibge": 4310801,
                "nome": "Ivoti"
            },
            {
                "codigo_ibge": 4310850,
                "nome": "Jaboticaba"
            },
            {
                "codigo_ibge": 4310876,
                "nome": "Jacuizinho"
            },
            {
                "codigo_ibge": 4310900,
                "nome": "Jacutinga"
            },
            {
                "codigo_ibge": 4311007,
                "nome": "Jaguarão"
            },
            {
                "codigo_ibge": 4311106,
                "nome": "Jaguari"
            },
            {
                "codigo_ibge": 4311122,
                "nome": "Jaquirana"
            },
            {
                "codigo_ibge": 4311130,
                "nome": "Jari"
            },
            {
                "codigo_ibge": 4311155,
                "nome": "Jóia"
            },
            {
                "codigo_ibge": 4311205,
                "nome": "Júlio de Castilhos"
            },
            {
                "codigo_ibge": 4311239,
                "nome": "Lagoa Bonita do Sul"
            },
            {
                "codigo_ibge": 4311270,
                "nome": "Lagoa dos Três Cantos"
            },
            {
                "codigo_ibge": 4311304,
                "nome": "Lagoa Vermelha"
            },
            {
                "codigo_ibge": 4311254,
                "nome": "Lagoão"
            },
            {
                "codigo_ibge": 4311403,
                "nome": "Lajeado"
            },
            {
                "codigo_ibge": 4311429,
                "nome": "Lajeado do Bugre"
            },
            {
                "codigo_ibge": 4311502,
                "nome": "Lavras do Sul"
            },
            {
                "codigo_ibge": 4311601,
                "nome": "Liberato Salzano"
            },
            {
                "codigo_ibge": 4311627,
                "nome": "Lindolfo Collor"
            },
            {
                "codigo_ibge": 4311643,
                "nome": "Linha Nova"
            },
            {
                "codigo_ibge": 4311718,
                "nome": "Maçambará"
            },
            {
                "codigo_ibge": 4311700,
                "nome": "Machadinho"
            },
            {
                "codigo_ibge": 4311734,
                "nome": "Mampituba"
            },
            {
                "codigo_ibge": 4311759,
                "nome": "Manoel Viana"
            },
            {
                "codigo_ibge": 4311775,
                "nome": "Maquiné"
            },
            {
                "codigo_ibge": 4311791,
                "nome": "Maratá"
            },
            {
                "codigo_ibge": 4311809,
                "nome": "Marau"
            },
            {
                "codigo_ibge": 4311908,
                "nome": "Marcelino Ramos"
            },
            {
                "codigo_ibge": 4311981,
                "nome": "Mariana Pimentel"
            },
            {
                "codigo_ibge": 4312005,
                "nome": "Mariano Moro"
            },
            {
                "codigo_ibge": 4312054,
                "nome": "Marques de Souza"
            },
            {
                "codigo_ibge": 4312104,
                "nome": "Mata"
            },
            {
                "codigo_ibge": 4312138,
                "nome": "Mato Castelhano"
            },
            {
                "codigo_ibge": 4312153,
                "nome": "Mato Leitão"
            },
            {
                "codigo_ibge": 4312179,
                "nome": "Mato Queimado"
            },
            {
                "codigo_ibge": 4312203,
                "nome": "Maximiliano de Almeida"
            },
            {
                "codigo_ibge": 4312252,
                "nome": "Minas do Leão"
            },
            {
                "codigo_ibge": 4312302,
                "nome": "Miraguaí"
            },
            {
                "codigo_ibge": 4312351,
                "nome": "Montauri"
            },
            {
                "codigo_ibge": 4312377,
                "nome": "Monte Alegre dos Campos"
            },
            {
                "codigo_ibge": 4312385,
                "nome": "Monte Belo do Sul"
            },
            {
                "codigo_ibge": 4312401,
                "nome": "Montenegro"
            },
            {
                "codigo_ibge": 4312427,
                "nome": "Mormaço"
            },
            {
                "codigo_ibge": 4312443,
                "nome": "Morrinhos do Sul"
            },
            {
                "codigo_ibge": 4312450,
                "nome": "Morro Redondo"
            },
            {
                "codigo_ibge": 4312476,
                "nome": "Morro Reuter"
            },
            {
                "codigo_ibge": 4312500,
                "nome": "Mostardas"
            },
            {
                "codigo_ibge": 4312609,
                "nome": "Muçum"
            },
            {
                "codigo_ibge": 4312617,
                "nome": "Muitos Capões"
            },
            {
                "codigo_ibge": 4312625,
                "nome": "Muliterno"
            },
            {
                "codigo_ibge": 4312658,
                "nome": "Não-Me-Toque"
            },
            {
                "codigo_ibge": 4312674,
                "nome": "Nicolau Vergueiro"
            },
            {
                "codigo_ibge": 4312708,
                "nome": "Nonoai"
            },
            {
                "codigo_ibge": 4312757,
                "nome": "Nova Alvorada"
            },
            {
                "codigo_ibge": 4312807,
                "nome": "Nova Araçá"
            },
            {
                "codigo_ibge": 4312906,
                "nome": "Nova Bassano"
            },
            {
                "codigo_ibge": 4312955,
                "nome": "Nova Boa Vista"
            },
            {
                "codigo_ibge": 4313003,
                "nome": "Nova Bréscia"
            },
            {
                "codigo_ibge": 4313011,
                "nome": "Nova Candelária"
            },
            {
                "codigo_ibge": 4313037,
                "nome": "Nova Esperança do Sul"
            },
            {
                "codigo_ibge": 4313060,
                "nome": "Nova Hartz"
            },
            {
                "codigo_ibge": 4313086,
                "nome": "Nova Pádua"
            },
            {
                "codigo_ibge": 4313102,
                "nome": "Nova Palma"
            },
            {
                "codigo_ibge": 4313201,
                "nome": "Nova Petrópolis"
            },
            {
                "codigo_ibge": 4313300,
                "nome": "Nova Prata"
            },
            {
                "codigo_ibge": 4313334,
                "nome": "Nova Ramada"
            },
            {
                "codigo_ibge": 4313359,
                "nome": "Nova Roma do Sul"
            },
            {
                "codigo_ibge": 4313375,
                "nome": "Nova Santa Rita"
            },
            {
                "codigo_ibge": 4313490,
                "nome": "Novo Barreiro"
            },
            {
                "codigo_ibge": 4313391,
                "nome": "Novo Cabrais"
            },
            {
                "codigo_ibge": 4313409,
                "nome": "Novo Hamburgo"
            },
            {
                "codigo_ibge": 4313425,
                "nome": "Novo Machado"
            },
            {
                "codigo_ibge": 4313441,
                "nome": "Novo Tiradentes"
            },
            {
                "codigo_ibge": 4313466,
                "nome": "Novo Xingu"
            },
            {
                "codigo_ibge": 4313508,
                "nome": "Osório"
            },
            {
                "codigo_ibge": 4313607,
                "nome": "Paim Filho"
            },
            {
                "codigo_ibge": 4313656,
                "nome": "Palmares do Sul"
            },
            {
                "codigo_ibge": 4313706,
                "nome": "Palmeira das Missões"
            },
            {
                "codigo_ibge": 4313805,
                "nome": "Palmitinho"
            },
            {
                "codigo_ibge": 4313904,
                "nome": "Panambi"
            },
            {
                "codigo_ibge": 4313953,
                "nome": "Pantano Grande"
            },
            {
                "codigo_ibge": 4314001,
                "nome": "Paraí"
            },
            {
                "codigo_ibge": 4314027,
                "nome": "Paraíso do Sul"
            },
            {
                "codigo_ibge": 4314035,
                "nome": "Pareci Novo"
            },
            {
                "codigo_ibge": 4314050,
                "nome": "Parobé"
            },
            {
                "codigo_ibge": 4314068,
                "nome": "Passa Sete"
            },
            {
                "codigo_ibge": 4314076,
                "nome": "Passo do Sobrado"
            },
            {
                "codigo_ibge": 4314100,
                "nome": "Passo Fundo"
            },
            {
                "codigo_ibge": 4314134,
                "nome": "Paulo Bento"
            },
            {
                "codigo_ibge": 4314159,
                "nome": "Paverama"
            },
            {
                "codigo_ibge": 4314175,
                "nome": "Pedras Altas"
            },
            {
                "codigo_ibge": 4314209,
                "nome": "Pedro Osório"
            },
            {
                "codigo_ibge": 4314308,
                "nome": "Pejuçara"
            },
            {
                "codigo_ibge": 4314407,
                "nome": "Pelotas"
            },
            {
                "codigo_ibge": 4314423,
                "nome": "Picada Café"
            },
            {
                "codigo_ibge": 4314456,
                "nome": "Pinhal"
            },
            {
                "codigo_ibge": 4314464,
                "nome": "Pinhal da Serra"
            },
            {
                "codigo_ibge": 4314472,
                "nome": "Pinhal Grande"
            },
            {
                "codigo_ibge": 4314498,
                "nome": "Pinheirinho do Vale"
            },
            {
                "codigo_ibge": 4314506,
                "nome": "Pinheiro Machado"
            },
            {
                "codigo_ibge": 4314548,
                "nome": "Pinto Bandeira"
            },
            {
                "codigo_ibge": 4314555,
                "nome": "Pirapó"
            },
            {
                "codigo_ibge": 4314605,
                "nome": "Piratini"
            },
            {
                "codigo_ibge": 4314704,
                "nome": "Planalto"
            },
            {
                "codigo_ibge": 4314753,
                "nome": "Poço das Antas"
            },
            {
                "codigo_ibge": 4314779,
                "nome": "Pontão"
            },
            {
                "codigo_ibge": 4314787,
                "nome": "Ponte Preta"
            },
            {
                "codigo_ibge": 4314803,
                "nome": "Portão"
            },
            {
                "codigo_ibge": 4314902,
                "nome": "Porto Alegre"
            },
            {
                "codigo_ibge": 4315008,
                "nome": "Porto Lucena"
            },
            {
                "codigo_ibge": 4315057,
                "nome": "Porto Mauá"
            },
            {
                "codigo_ibge": 4315073,
                "nome": "Porto Vera Cruz"
            },
            {
                "codigo_ibge": 4315107,
                "nome": "Porto Xavier"
            },
            {
                "codigo_ibge": 4315131,
                "nome": "Pouso Novo"
            },
            {
                "codigo_ibge": 4315149,
                "nome": "Presidente Lucena"
            },
            {
                "codigo_ibge": 4315156,
                "nome": "Progresso"
            },
            {
                "codigo_ibge": 4315172,
                "nome": "Protásio Alves"
            },
            {
                "codigo_ibge": 4315206,
                "nome": "Putinga"
            },
            {
                "codigo_ibge": 4315305,
                "nome": "Quaraí"
            },
            {
                "codigo_ibge": 4315313,
                "nome": "Quatro Irmãos"
            },
            {
                "codigo_ibge": 4315321,
                "nome": "Quevedos"
            },
            {
                "codigo_ibge": 4315354,
                "nome": "Quinze de Novembro"
            },
            {
                "codigo_ibge": 4315404,
                "nome": "Redentora"
            },
            {
                "codigo_ibge": 4315453,
                "nome": "Relvado"
            },
            {
                "codigo_ibge": 4315503,
                "nome": "Restinga Sêca"
            },
            {
                "codigo_ibge": 4315552,
                "nome": "Rio dos Índios"
            },
            {
                "codigo_ibge": 4315602,
                "nome": "Rio Grande"
            },
            {
                "codigo_ibge": 4315701,
                "nome": "Rio Pardo"
            },
            {
                "codigo_ibge": 4315750,
                "nome": "Riozinho"
            },
            {
                "codigo_ibge": 4315800,
                "nome": "Roca Sales"
            },
            {
                "codigo_ibge": 4315909,
                "nome": "Rodeio Bonito"
            },
            {
                "codigo_ibge": 4315958,
                "nome": "Rolador"
            },
            {
                "codigo_ibge": 4316006,
                "nome": "Rolante"
            },
            {
                "codigo_ibge": 4316105,
                "nome": "Ronda Alta"
            },
            {
                "codigo_ibge": 4316204,
                "nome": "Rondinha"
            },
            {
                "codigo_ibge": 4316303,
                "nome": "Roque Gonzales"
            },
            {
                "codigo_ibge": 4316402,
                "nome": "Rosário do Sul"
            },
            {
                "codigo_ibge": 4316428,
                "nome": "Sagrada Família"
            },
            {
                "codigo_ibge": 4316436,
                "nome": "Saldanha Marinho"
            },
            {
                "codigo_ibge": 4316451,
                "nome": "Salto do Jacuí"
            },
            {
                "codigo_ibge": 4316477,
                "nome": "Salvador das Missões"
            },
            {
                "codigo_ibge": 4316501,
                "nome": "Salvador do Sul"
            },
            {
                "codigo_ibge": 4316600,
                "nome": "Sananduva"
            },
            {
                "codigo_ibge": 4317103,
                "nome": "Sant'Ana do Livramento"
            },
            {
                "codigo_ibge": 4316709,
                "nome": "Santa Bárbara do Sul"
            },
            {
                "codigo_ibge": 4316733,
                "nome": "Santa Cecília do Sul"
            },
            {
                "codigo_ibge": 4316758,
                "nome": "Santa Clara do Sul"
            },
            {
                "codigo_ibge": 4316808,
                "nome": "Santa Cruz do Sul"
            },
            {
                "codigo_ibge": 4316972,
                "nome": "Santa Margarida do Sul"
            },
            {
                "codigo_ibge": 4316907,
                "nome": "Santa Maria"
            },
            {
                "codigo_ibge": 4316956,
                "nome": "Santa Maria do Herval"
            },
            {
                "codigo_ibge": 4317202,
                "nome": "Santa Rosa"
            },
            {
                "codigo_ibge": 4317251,
                "nome": "Santa Tereza"
            },
            {
                "codigo_ibge": 4317301,
                "nome": "Santa Vitória do Palmar"
            },
            {
                "codigo_ibge": 4317004,
                "nome": "Santana da Boa Vista"
            },
            {
                "codigo_ibge": 4317400,
                "nome": "Santiago"
            },
            {
                "codigo_ibge": 4317509,
                "nome": "Santo Ângelo"
            },
            {
                "codigo_ibge": 4317608,
                "nome": "Santo Antônio da Patrulha"
            },
            {
                "codigo_ibge": 4317707,
                "nome": "Santo Antônio das Missões"
            },
            {
                "codigo_ibge": 4317558,
                "nome": "Santo Antônio do Palma"
            },
            {
                "codigo_ibge": 4317756,
                "nome": "Santo Antônio do Planalto"
            },
            {
                "codigo_ibge": 4317806,
                "nome": "Santo Augusto"
            },
            {
                "codigo_ibge": 4317905,
                "nome": "Santo Cristo"
            },
            {
                "codigo_ibge": 4317954,
                "nome": "Santo Expedito do Sul"
            },
            {
                "codigo_ibge": 4318002,
                "nome": "São Borja"
            },
            {
                "codigo_ibge": 4318051,
                "nome": "São Domingos do Sul"
            },
            {
                "codigo_ibge": 4318101,
                "nome": "São Francisco de Assis"
            },
            {
                "codigo_ibge": 4318200,
                "nome": "São Francisco de Paula"
            },
            {
                "codigo_ibge": 4318309,
                "nome": "São Gabriel"
            },
            {
                "codigo_ibge": 4318408,
                "nome": "São Jerônimo"
            },
            {
                "codigo_ibge": 4318424,
                "nome": "São João da Urtiga"
            },
            {
                "codigo_ibge": 4318432,
                "nome": "São João do Polêsine"
            },
            {
                "codigo_ibge": 4318440,
                "nome": "São Jorge"
            },
            {
                "codigo_ibge": 4318457,
                "nome": "São José das Missões"
            },
            {
                "codigo_ibge": 4318465,
                "nome": "São José do Herval"
            },
            {
                "codigo_ibge": 4318481,
                "nome": "São José do Hortêncio"
            },
            {
                "codigo_ibge": 4318499,
                "nome": "São José do Inhacorá"
            },
            {
                "codigo_ibge": 4318507,
                "nome": "São José do Norte"
            },
            {
                "codigo_ibge": 4318606,
                "nome": "São José do Ouro"
            },
            {
                "codigo_ibge": 4318614,
                "nome": "São José do Sul"
            },
            {
                "codigo_ibge": 4318622,
                "nome": "São José dos Ausentes"
            },
            {
                "codigo_ibge": 4318705,
                "nome": "São Leopoldo"
            },
            {
                "codigo_ibge": 4318804,
                "nome": "São Lourenço do Sul"
            },
            {
                "codigo_ibge": 4318903,
                "nome": "São Luiz Gonzaga"
            },
            {
                "codigo_ibge": 4319000,
                "nome": "São Marcos"
            },
            {
                "codigo_ibge": 4319109,
                "nome": "São Martinho"
            },
            {
                "codigo_ibge": 4319125,
                "nome": "São Martinho da Serra"
            },
            {
                "codigo_ibge": 4319158,
                "nome": "São Miguel das Missões"
            },
            {
                "codigo_ibge": 4319208,
                "nome": "São Nicolau"
            },
            {
                "codigo_ibge": 4319307,
                "nome": "São Paulo das Missões"
            },
            {
                "codigo_ibge": 4319356,
                "nome": "São Pedro da Serra"
            },
            {
                "codigo_ibge": 4319364,
                "nome": "São Pedro das Missões"
            },
            {
                "codigo_ibge": 4319372,
                "nome": "São Pedro do Butiá"
            },
            {
                "codigo_ibge": 4319406,
                "nome": "São Pedro do Sul"
            },
            {
                "codigo_ibge": 4319505,
                "nome": "São Sebastião do Caí"
            },
            {
                "codigo_ibge": 4319604,
                "nome": "São Sepé"
            },
            {
                "codigo_ibge": 4319703,
                "nome": "São Valentim"
            },
            {
                "codigo_ibge": 4319711,
                "nome": "São Valentim do Sul"
            },
            {
                "codigo_ibge": 4319737,
                "nome": "São Valério do Sul"
            },
            {
                "codigo_ibge": 4319752,
                "nome": "São Vendelino"
            },
            {
                "codigo_ibge": 4319802,
                "nome": "São Vicente do Sul"
            },
            {
                "codigo_ibge": 4319901,
                "nome": "Sapiranga"
            },
            {
                "codigo_ibge": 4320008,
                "nome": "Sapucaia do Sul"
            },
            {
                "codigo_ibge": 4320107,
                "nome": "Sarandi"
            },
            {
                "codigo_ibge": 4320206,
                "nome": "Seberi"
            },
            {
                "codigo_ibge": 4320230,
                "nome": "Sede Nova"
            },
            {
                "codigo_ibge": 4320263,
                "nome": "Segredo"
            },
            {
                "codigo_ibge": 4320305,
                "nome": "Selbach"
            },
            {
                "codigo_ibge": 4320321,
                "nome": "Senador Salgado Filho"
            },
            {
                "codigo_ibge": 4320354,
                "nome": "Sentinela do Sul"
            },
            {
                "codigo_ibge": 4320404,
                "nome": "Serafina Corrêa"
            },
            {
                "codigo_ibge": 4320453,
                "nome": "Sério"
            },
            {
                "codigo_ibge": 4320503,
                "nome": "Sertão"
            },
            {
                "codigo_ibge": 4320552,
                "nome": "Sertão Santana"
            },
            {
                "codigo_ibge": 4320578,
                "nome": "Sete de Setembro"
            },
            {
                "codigo_ibge": 4320602,
                "nome": "Severiano de Almeida"
            },
            {
                "codigo_ibge": 4320651,
                "nome": "Silveira Martins"
            },
            {
                "codigo_ibge": 4320677,
                "nome": "Sinimbu"
            },
            {
                "codigo_ibge": 4320701,
                "nome": "Sobradinho"
            },
            {
                "codigo_ibge": 4320800,
                "nome": "Soledade"
            },
            {
                "codigo_ibge": 4320859,
                "nome": "Tabaí"
            },
            {
                "codigo_ibge": 4320909,
                "nome": "Tapejara"
            },
            {
                "codigo_ibge": 4321006,
                "nome": "Tapera"
            },
            {
                "codigo_ibge": 4321105,
                "nome": "Tapes"
            },
            {
                "codigo_ibge": 4321204,
                "nome": "Taquara"
            },
            {
                "codigo_ibge": 4321303,
                "nome": "Taquari"
            },
            {
                "codigo_ibge": 4321329,
                "nome": "Taquaruçu do Sul"
            },
            {
                "codigo_ibge": 4321352,
                "nome": "Tavares"
            },
            {
                "codigo_ibge": 4321402,
                "nome": "Tenente Portela"
            },
            {
                "codigo_ibge": 4321436,
                "nome": "Terra de Areia"
            },
            {
                "codigo_ibge": 4321451,
                "nome": "Teutônia"
            },
            {
                "codigo_ibge": 4321469,
                "nome": "Tio Hugo"
            },
            {
                "codigo_ibge": 4321477,
                "nome": "Tiradentes do Sul"
            },
            {
                "codigo_ibge": 4321493,
                "nome": "Toropi"
            },
            {
                "codigo_ibge": 4321501,
                "nome": "Torres"
            },
            {
                "codigo_ibge": 4321600,
                "nome": "Tramandaí"
            },
            {
                "codigo_ibge": 4321626,
                "nome": "Travesseiro"
            },
            {
                "codigo_ibge": 4321634,
                "nome": "Três Arroios"
            },
            {
                "codigo_ibge": 4321667,
                "nome": "Três Cachoeiras"
            },
            {
                "codigo_ibge": 4321709,
                "nome": "Três Coroas"
            },
            {
                "codigo_ibge": 4321808,
                "nome": "Três de Maio"
            },
            {
                "codigo_ibge": 4321832,
                "nome": "Três Forquilhas"
            },
            {
                "codigo_ibge": 4321857,
                "nome": "Três Palmeiras"
            },
            {
                "codigo_ibge": 4321907,
                "nome": "Três Passos"
            },
            {
                "codigo_ibge": 4321956,
                "nome": "Trindade do Sul"
            },
            {
                "codigo_ibge": 4322004,
                "nome": "Triunfo"
            },
            {
                "codigo_ibge": 4322103,
                "nome": "Tucunduva"
            },
            {
                "codigo_ibge": 4322152,
                "nome": "Tunas"
            },
            {
                "codigo_ibge": 4322186,
                "nome": "Tupanci do Sul"
            },
            {
                "codigo_ibge": 4322202,
                "nome": "Tupanciretã"
            },
            {
                "codigo_ibge": 4322251,
                "nome": "Tupandi"
            },
            {
                "codigo_ibge": 4322301,
                "nome": "Tuparendi"
            },
            {
                "codigo_ibge": 4322327,
                "nome": "Turuçu"
            },
            {
                "codigo_ibge": 4322343,
                "nome": "Ubiretama"
            },
            {
                "codigo_ibge": 4322350,
                "nome": "União da Serra"
            },
            {
                "codigo_ibge": 4322376,
                "nome": "Unistalda"
            },
            {
                "codigo_ibge": 4322400,
                "nome": "Uruguaiana"
            },
            {
                "codigo_ibge": 4322509,
                "nome": "Vacaria"
            },
            {
                "codigo_ibge": 4322533,
                "nome": "Vale do Sol"
            },
            {
                "codigo_ibge": 4322541,
                "nome": "Vale Real"
            },
            {
                "codigo_ibge": 4322525,
                "nome": "Vale Verde"
            },
            {
                "codigo_ibge": 4322558,
                "nome": "Vanini"
            },
            {
                "codigo_ibge": 4322608,
                "nome": "Venâncio Aires"
            },
            {
                "codigo_ibge": 4322707,
                "nome": "Vera Cruz"
            },
            {
                "codigo_ibge": 4322806,
                "nome": "Veranópolis"
            },
            {
                "codigo_ibge": 4322855,
                "nome": "Vespasiano Corrêa"
            },
            {
                "codigo_ibge": 4322905,
                "nome": "Viadutos"
            },
            {
                "codigo_ibge": 4323002,
                "nome": "Viamão"
            },
            {
                "codigo_ibge": 4323101,
                "nome": "Vicente Dutra"
            },
            {
                "codigo_ibge": 4323200,
                "nome": "Victor Graeff"
            },
            {
                "codigo_ibge": 4323309,
                "nome": "Vila Flores"
            },
            {
                "codigo_ibge": 4323358,
                "nome": "Vila Lângaro"
            },
            {
                "codigo_ibge": 4323408,
                "nome": "Vila Maria"
            },
            {
                "codigo_ibge": 4323457,
                "nome": "Vila Nova do Sul"
            },
            {
                "codigo_ibge": 4323507,
                "nome": "Vista Alegre"
            },
            {
                "codigo_ibge": 4323606,
                "nome": "Vista Alegre do Prata"
            },
            {
                "codigo_ibge": 4323705,
                "nome": "Vista Gaúcha"
            },
            {
                "codigo_ibge": 4323754,
                "nome": "Vitória das Missões"
            },
            {
                "codigo_ibge": 4323770,
                "nome": "Westfália"
            },
            {
                "codigo_ibge": 4323804,
                "nome": "Xangri-lá"
            }
        ]
    },
    "SC": {
        "nome": "Santa Catarina",
        "municipios": [
            {
                "codigo_ibge": 4200051,
                "nome": "Abdon Batista"
            },
            {
                "codigo_ibge": 4200101,
                "nome": "Abelardo Luz"
            },
            {
                "codigo_ibge": 4200200,
                "nome": "Agrolândia"
            },
            {
                "codigo_ibge": 4200309,
                "nome": "Agronômica"
            },
            {
                "codigo_ibge": 4200408,
                "nome": "Água Doce"
            },
            {
                "codigo_ibge": 4200507,
                "nome": "Águas de Chapecó"
            },
            {
                "codigo_ibge": 4200556,
                "nome": "Águas Frias"
            },
            {
                "codigo_ibge": 4200606,
                "nome": "Águas Mornas"
            },
            {
                "codigo_ibge": 4200705,
                "nome": "Alfredo Wagner"
            },
            {
                "codigo_ibge": 4200754,
                "nome": "Alto Bela Vista"
            },
            {
                "codigo_ibge": 4200804,
                "nome": "Anchieta"
            },
            {
                "codigo_ibge": 4200903,
                "nome": "Angelina"
            },
            {
                "codigo_ibge": 4201000,
                "nome": "Anita Garibaldi"
            },
            {
                "codigo_ibge": 4201109,
                "nome": "Anitápolis"
            },
            {
                "codigo_ibge": 4201208,
                "nome": "Antônio Carlos"
            },
            {
                "codigo_ibge": 4201257,
                "nome": "Apiúna"
            },
            {
                "codigo_ibge": 4201273,
                "nome": "Arabutã"
            },
            {
                "codigo_ibge": 4201307,
                "nome": "Araquari"
            },
            {
                "codigo_ibge": 4201406,
                "nome": "Araranguá"
            },
            {
                "codigo_ibge": 4201505,
                "nome": "Armazém"
            },
            {
                "codigo_ibge": 4201604,
                "nome": "Arroio Trinta"
            },
            {
                "codigo_ibge": 4201653,
                "nome": "Arvoredo"
            },
            {
                "codigo_ibge": 4201703,
                "nome": "Ascurra"
            },
            {
                "codigo_ibge": 4201802,
                "nome": "Atalanta"
            },
            {
                "codigo_ibge": 4201901,
                "nome": "Aurora"
            },
            {
                "codigo_ibge": 4201950,
                "nome": "Balneário Arroio do Silva"
            },
            {
                "codigo_ibge": 4202057,
                "nome": "Balneário Barra do Sul"
            },
            {
                "codigo_ibge": 4202008,
                "nome": "Balneário Camboriú"
            },
            {
                "codigo_ibge": 4202073,
                "nome": "Balneário Gaivota"
            },
            {
                "codigo_ibge": 4212809,
                "nome": "Balneário Piçarras"
            },
            {
                "codigo_ibge": 4220000,
                "nome": "Balneário Rincão"
            },
            {
                "codigo_ibge": 4202081,
                "nome": "Bandeirante"
            },
            {
                "codigo_ibge": 4202099,
                "nome": "Barra Bonita"
            },
            {
                "codigo_ibge": 4202107,
                "nome": "Barra Velha"
            },
            {
                "codigo_ibge": 4202131,
                "nome": "Bela Vista do Toldo"
            },
            {
                "codigo_ibge": 4202156,
                "nome": "Belmonte"
            },
            {
                "codigo_ibge": 4202206,
                "nome": "Benedito Novo"
            },
            {
                "codigo_ibge": 4202305,
                "nome": "Biguaçu"
            },
            {
                "codigo_ibge": 4202404,
                "nome": "Blumenau"
            },
            {
                "codigo_ibge": 4202438,
                "nome": "Bocaina do Sul"
            },
            {
                "codigo_ibge": 4202503,
                "nome": "Bom Jardim da Serra"
            },
            {
                "codigo_ibge": 4202537,
                "nome": "Bom Jesus"
            },
            {
                "codigo_ibge": 4202578,
                "nome": "Bom Jesus do Oeste"
            },
            {
                "codigo_ibge": 4202602,
                "nome": "Bom Retiro"
            },
            {
                "codigo_ibge": 4202453,
                "nome": "Bombinhas"
            },
            {
                "codigo_ibge": 4202701,
                "nome": "Botuverá"
            },
            {
                "codigo_ibge": 4202800,
                "nome": "Braço do Norte"
            },
            {
                "codigo_ibge": 4202859,
                "nome": "Braço do Trombudo"
            },
            {
                "codigo_ibge": 4202875,
                "nome": "Brunópolis"
            },
            {
                "codigo_ibge": 4202909,
                "nome": "Brusque"
            },
            {
                "codigo_ibge": 4203006,
                "nome": "Caçador"
            },
            {
                "codigo_ibge": 4203105,
                "nome": "Caibi"
            },
            {
                "codigo_ibge": 4203154,
                "nome": "Calmon"
            },
            {
                "codigo_ibge": 4203204,
                "nome": "Camboriú"
            },
            {
                "codigo_ibge": 4203303,
                "nome": "Campo Alegre"
            },
            {
                "codigo_ibge": 4203402,
                "nome": "Campo Belo do Sul"
            },
            {
                "codigo_ibge": 4203501,
                "nome": "Campo Erê"
            },
            {
                "codigo_ibge": 4203600,
                "nome": "Campos Novos"
            },
            {
                "codigo_ibge": 4203709,
                "nome": "Canelinha"
            },
            {
                "codigo_ibge": 4203808,
                "nome": "Canoinhas"
            },
            {
                "codigo_ibge": 4203253,
                "nome": "Capão Alto"
            },
            {
                "codigo_ibge": 4203907,
                "nome": "Capinzal"
            },
            {
                "codigo_ibge": 4203956,
                "nome": "Capivari de Baixo"
            },
            {
                "codigo_ibge": 4204004,
                "nome": "Catanduvas"
            },
            {
                "codigo_ibge": 4204103,
                "nome": "Caxambu do Sul"
            },
            {
                "codigo_ibge": 4204152,
                "nome": "Celso Ramos"
            },
            {
                "codigo_ibge": 4204178,
                "nome": "Cerro Negro"
            },
            {
                "codigo_ibge": 4204194,
                "nome": "Chapadão do Lageado"
            },
            {
                "codigo_ibge": 4204202,
                "nome": "Chapecó"
            },
            {
                "codigo_ibge": 4204251,
                "nome": "Cocal do Sul"
            },
            {
                "codigo_ibge": 4204301,
                "nome": "Concórdia"
            },
            {
                "codigo_ibge": 4204350,
                "nome": "Cordilheira Alta"
            },
            {
                "codigo_ibge": 4204400,
                "nome": "Coronel Freitas"
            },
            {
                "codigo_ibge": 4204459,
                "nome": "Coronel Martins"
            },
            {
                "codigo_ibge": 4204558,
                "nome": "Correia Pinto"
            },
            {
                "codigo_ibge": 4204509,
                "nome": "Corupá"
            },
            {
                "codigo_ibge": 4204608,
                "nome": "Criciúma"
            },
            {
                "codigo_ibge": 4204707,
                "nome": "Cunha Porã"
            },
            {
                "codigo_ibge": 4204756,
                "nome": "Cunhataí"
            },
            {
                "codigo_ibge": 4204806,
                "nome": "Curitibanos"
            },
            {
                "codigo_ibge": 4204905,
                "nome": "Descanso"
            },
            {
                "codigo_ibge": 4205001,
                "nome": "Dionísio Cerqueira"
            },
            {
                "codigo_ibge": 4205100,
                "nome": "Dona Emma"
            },
            {
                "codigo_ibge": 4205159,
                "nome": "Doutor Pedrinho"
            },
            {
                "codigo_ibge": 4205175,
                "nome": "Entre Rios"
            },
            {
                "codigo_ibge": 4205191,
                "nome": "Ermo"
            },
            {
                "codigo_ibge": 4205209,
                "nome": "Erval Velho"
            },
            {
                "codigo_ibge": 4205308,
                "nome": "Faxinal dos Guedes"
            },
            {
                "codigo_ibge": 4205357,
                "nome": "Flor do Sertão"
            },
            {
                "codigo_ibge": 4205407,
                "nome": "Florianópolis"
            },
            {
                "codigo_ibge": 4205431,
                "nome": "Formosa do Sul"
            },
            {
                "codigo_ibge": 4205456,
                "nome": "Forquilhinha"
            },
            {
                "codigo_ibge": 4205506,
                "nome": "Fraiburgo"
            },
            {
                "codigo_ibge": 4205555,
                "nome": "Frei Rogério"
            },
            {
                "codigo_ibge": 4205605,
                "nome": "Galvão"
            },
            {
                "codigo_ibge": 4205704,
                "nome": "Garopaba"
            },
            {
                "codigo_ibge": 4205803,
                "nome": "Garuva"
            },
            {
                "codigo_ibge": 4205902,
                "nome": "Gaspar"
            },
            {
                "codigo_ibge": 4206009,
                "nome": "Governador Celso Ramos"
            },
            {
                "codigo_ibge": 4206108,
                "nome": "Grão Pará"
            },
            {
                "codigo_ibge": 4206207,
                "nome": "Gravatal"
            },
            {
                "codigo_ibge": 4206306,
                "nome": "Guabiruba"
            },
            {
                "codigo_ibge": 4206405,
                "nome": "Guaraciaba"
            },
            {
                "codigo_ibge": 4206504,
                "nome": "Guaramirim"
            },
            {
                "codigo_ibge": 4206603,
                "nome": "Guarujá do Sul"
            },
            {
                "codigo_ibge": 4206652,
                "nome": "Guatambú"
            },
            {
                "codigo_ibge": 4206702,
                "nome": "Herval d'Oeste"
            },
            {
                "codigo_ibge": 4206751,
                "nome": "Ibiam"
            },
            {
                "codigo_ibge": 4206801,
                "nome": "Ibicaré"
            },
            {
                "codigo_ibge": 4206900,
                "nome": "Ibirama"
            },
            {
                "codigo_ibge": 4207007,
                "nome": "Içara"
            },
            {
                "codigo_ibge": 4207106,
                "nome": "Ilhota"
            },
            {
                "codigo_ibge": 4207205,
                "nome": "Imaruí"
            },
            {
                "codigo_ibge": 4207304,
                "nome": "Imbituba"
            },
            {
                "codigo_ibge": 4207403,
                "nome": "Imbuia"
            },
            {
                "codigo_ibge": 4207502,
                "nome": "Indaial"
            },
            {
                "codigo_ibge": 4207577,
                "nome": "Iomerê"
            },
            {
                "codigo_ibge": 4207601,
                "nome": "Ipira"
            },
            {
                "codigo_ibge": 4207650,
                "nome": "Iporã do Oeste"
            },
            {
                "codigo_ibge": 4207684,
                "nome": "Ipuaçu"
            },
            {
                "codigo_ibge": 4207700,
                "nome": "Ipumirim"
            },
            {
                "codigo_ibge": 4207759,
                "nome": "Iraceminha"
            },
            {
                "codigo_ibge": 4207809,
                "nome": "Irani"
            },
            {
                "codigo_ibge": 4207858,
                "nome": "Irati"
            },
            {
                "codigo_ibge": 4207908,
                "nome": "Irineópolis"
            },
            {
                "codigo_ibge": 4208005,
                "nome": "Itá"
            },
            {
                "codigo_ibge": 4208104,
                "nome": "Itaiópolis"
            },
            {
                "codigo_ibge": 4208203,
                "nome": "Itajaí"
            },
            {
                "codigo_ibge": 4208302,
                "nome": "Itapema"
            },
            {
                "codigo_ibge": 4208401,
                "nome": "Itapiranga"
            },
            {
                "codigo_ibge": 4208450,
                "nome": "Itapoá"
            },
            {
                "codigo_ibge": 4208500,
                "nome": "Ituporanga"
            },
            {
                "codigo_ibge": 4208609,
                "nome": "Jaborá"
            },
            {
                "codigo_ibge": 4208708,
                "nome": "Jacinto Machado"
            },
            {
                "codigo_ibge": 4208807,
                "nome": "Jaguaruna"
            },
            {
                "codigo_ibge": 4208906,
                "nome": "Jaraguá do Sul"
            },
            {
                "codigo_ibge": 4208955,
                "nome": "Jardinópolis"
            },
            {
                "codigo_ibge": 4209003,
                "nome": "Joaçaba"
            },
            {
                "codigo_ibge": 4209102,
                "nome": "Joinville"
            },
            {
                "codigo_ibge": 4209151,
                "nome": "José Boiteux"
            },
            {
                "codigo_ibge": 4209177,
                "nome": "Jupiá"
            },
            {
                "codigo_ibge": 4209201,
                "nome": "Lacerdópolis"
            },
            {
                "codigo_ibge": 4209300,
                "nome": "Lages"
            },
            {
                "codigo_ibge": 4209409,
                "nome": "Laguna"
            },
            {
                "codigo_ibge": 4209458,
                "nome": "Lajeado Grande"
            },
            {
                "codigo_ibge": 4209508,
                "nome": "Laurentino"
            },
            {
                "codigo_ibge": 4209607,
                "nome": "Lauro Muller"
            },
            {
                "codigo_ibge": 4209706,
                "nome": "Lebon Régis"
            },
            {
                "codigo_ibge": 4209805,
                "nome": "Leoberto Leal"
            },
            {
                "codigo_ibge": 4209854,
                "nome": "Lindóia do Sul"
            },
            {
                "codigo_ibge": 4209904,
                "nome": "Lontras"
            },
            {
                "codigo_ibge": 4210001,
                "nome": "Luiz Alves"
            },
            {
                "codigo_ibge": 4210035,
                "nome": "Luzerna"
            },
            {
                "codigo_ibge": 4210050,
                "nome": "Macieira"
            },
            {
                "codigo_ibge": 4210100,
                "nome": "Mafra"
            },
            {
                "codigo_ibge": 4210209,
                "nome": "Major Gercino"
            },
            {
                "codigo_ibge": 4210308,
                "nome": "Major Vieira"
            },
            {
                "codigo_ibge": 4210407,
                "nome": "Maracajá"
            },
            {
                "codigo_ibge": 4210506,
                "nome": "Maravilha"
            },
            {
                "codigo_ibge": 4210555,
                "nome": "Marema"
            },
            {
                "codigo_ibge": 4210605,
                "nome": "Massaranduba"
            },
            {
                "codigo_ibge": 4210704,
                "nome": "Matos Costa"
            },
            {
                "codigo_ibge": 4210803,
                "nome": "Meleiro"
            },
            {
                "codigo_ibge": 4210852,
                "nome": "Mirim Doce"
            },
            {
                "codigo_ibge": 4210902,
                "nome": "Modelo"
            },
            {
                "codigo_ibge": 4211009,
                "nome": "Mondaí"
            },
            {
                "codigo_ibge": 4211058,
                "nome": "Monte Carlo"
            },
            {
                "codigo_ibge": 4211108,
                "nome": "Monte Castelo"
            },
            {
                "codigo_ibge": 4211207,
                "nome": "Morro da Fumaça"
            },
            {
                "codigo_ibge": 4211256,
                "nome": "Morro Grande"
            },
            {
                "codigo_ibge": 4211306,
                "nome": "Navegantes"
            },
            {
                "codigo_ibge": 4211405,
                "nome": "Nova Erechim"
            },
            {
                "codigo_ibge": 4211454,
                "nome": "Nova Itaberaba"
            },
            {
                "codigo_ibge": 4211504,
                "nome": "Nova Trento"
            },
            {
                "codigo_ibge": 4211603,
                "nome": "Nova Veneza"
            },
            {
                "codigo_ibge": 4211652,
                "nome": "Novo Horizonte"
            },
            {
                "codigo_ibge": 4211702,
                "nome": "Orleans"
            },
            {
                "codigo_ibge": 4211751,
                "nome": "Otacílio Costa"
            },
            {
                "codigo_ibge": 4211801,
                "nome": "Ouro"
            },
            {
                "codigo_ibge": 4211850,
                "nome": "Ouro Verde"
            },
            {
                "codigo_ibge": 4211876,
                "nome": "Paial"
            },
            {
                "codigo_ibge": 4211892,
                "nome": "Painel"
            },
            {
                "codigo_ibge": 4211900,
                "nome": "Palhoça"
            },
            {
                "codigo_ibge": 4212007,
                "nome": "Palma Sola"
            },
            {
                "codigo_ibge": 4212056,
                "nome": "Palmeira"
            },
            {
                "codigo_ibge": 4212106,
                "nome": "Palmitos"
            },
            {
                "codigo_ibge": 4212205,
                "nome": "Papanduva"
            },
            {
                "codigo_ibge": 4212239,
                "nome": "Paraíso"
            },
            {
                "codigo_ibge": 4212254,
                "nome": "Passo de Torres"
            },
            {
                "codigo_ibge": 4212270,
                "nome": "Passos Maia"
            },
            {
                "codigo_ibge": 4212304,
                "nome": "Paulo Lopes"
            },
            {
                "codigo_ibge": 4212403,
                "nome": "Pedras Grandes"
            },
            {
                "codigo_ibge": 4212502,
                "nome": "Penha"
            },
            {
                "codigo_ibge": 4212601,
                "nome": "Peritiba"
            },
            {
                "codigo_ibge": 4212650,
                "nome": "Pescaria Brava"
            },
            {
                "codigo_ibge": 4212700,
                "nome": "Petrolândia"
            },
            {
                "codigo_ibge": 4212908,
                "nome": "Pinhalzinho"
            },
            {
                "codigo_ibge": 4213005,
                "nome": "Pinheiro Preto"
            },
            {
                "codigo_ibge": 4213104,
                "nome": "Piratuba"
            },
            {
                "codigo_ibge": 4213153,
                "nome": "Planalto Alegre"
            },
            {
                "codigo_ibge": 4213203,
                "nome": "Pomerode"
            },
            {
                "codigo_ibge": 4213302,
                "nome": "Ponte Alta"
            },
            {
                "codigo_ibge": 4213351,
                "nome": "Ponte Alta do Norte"
            },
            {
                "codigo_ibge": 4213401,
                "nome": "Ponte Serrada"
            },
            {
                "codigo_ibge": 4213500,
                "nome": "Porto Belo"
            },
            {
                "codigo_ibge": 4213609,
                "nome": "Porto União"
            },
            {
                "codigo_ibge": 4213708,
                "nome": "Pouso Redondo"
            },
            {
                "codigo_ibge": 4213807,
                "nome": "Praia Grande"
            },
            {
                "codigo_ibge": 4213906,
                "nome": "Presidente Castello Branco"
            },
            {
                "codigo_ibge": 4214003,
                "nome": "Presidente Getúlio"
            },
            {
                "codigo_ibge": 4214102,
                "nome": "Presidente Nereu"
            },
            {
                "codigo_ibge": 4214151,
                "nome": "Princesa"
            },
            {
                "codigo_ibge": 4214201,
                "nome": "Quilombo"
            },
            {
                "codigo_ibge": 4214300,
                "nome": "Rancho Queimado"
            },
            {
                "codigo_ibge": 4214409,
                "nome": "Rio das Antas"
            },
            {
                "codigo_ibge": 4214508,
                "nome": "Rio do Campo"
            },
            {
                "codigo_ibge": 4214607,
                "nome": "Rio do Oeste"
            },
            {
                "codigo_ibge": 4214805,
                "nome": "Rio do Sul"
            },
            {
                "codigo_ibge": 4214706,
                "nome": "Rio dos Cedros"
            },
            {
                "codigo_ibge": 4214904,
                "nome": "Rio Fortuna"
            },
            {
                "codigo_ibge": 4215000,
                "nome": "Rio Negrinho"
            },
            {
                "codigo_ibge": 4215059,
                "nome": "Rio Rufino"
            },
            {
                "codigo_ibge": 4215075,
                "nome": "Riqueza"
            },
            {
                "codigo_ibge": 4215109,
                "nome": "Rodeio"
            },
            {
                "codigo_ibge": 4215208,
                "nome": "Romelândia"
            },
            {
                "codigo_ibge": 4215307,
                "nome": "Salete"
            },
            {
                "codigo_ibge": 4215356,
                "nome": "Saltinho"
            },
            {
                "codigo_ibge": 4215406,
                "nome": "Salto Veloso"
            },
            {
                "codigo_ibge": 4215455,
                "nome": "Sangão"
            },
            {
                "codigo_ibge": 4215505,
                "nome": "Santa Cecília"
            },
            {
                "codigo_ibge": 4215554,
                "nome": "Santa Helena"
            },
            {
                "codigo_ibge": 4215604,
                "nome": "Santa Rosa de Lima"
            },
            {
                "codigo_ibge": 4215653,
                "nome": "Santa Rosa do Sul"
            },
            {
                "codigo_ibge": 4215679,
                "nome": "Santa Terezinha"
            },
            {
                "codigo_ibge": 4215687,
                "nome": "Santa Terezinha do Progresso"
            },
            {
                "codigo_ibge": 4215695,
                "nome": "Santiago do Sul"
            },
            {
                "codigo_ibge": 4215703,
                "nome": "Santo Amaro da Imperatriz"
            },
            {
                "codigo_ibge": 4215802,
                "nome": "São Bento do Sul"
            },
            {
                "codigo_ibge": 4215752,
                "nome": "São Bernardino"
            },
            {
                "codigo_ibge": 4215901,
                "nome": "São Bonifácio"
            },
            {
                "codigo_ibge": 4216008,
                "nome": "São Carlos"
            },
            {
                "codigo_ibge": 4216057,
                "nome": "São Cristovão do Sul"
            },
            {
                "codigo_ibge": 4216107,
                "nome": "São Domingos"
            },
            {
                "codigo_ibge": 4216206,
                "nome": "São Francisco do Sul"
            },
            {
                "codigo_ibge": 4216305,
                "nome": "São João Batista"
            },
            {
                "codigo_ibge": 4216354,
                "nome": "São João do Itaperiú"
            },
            {
                "codigo_ibge": 4216255,
                "nome": "São João do Oeste"
            },
            {
                "codigo_ibge": 4216404,
                "nome": "São João do Sul"
            },
            {
                "codigo_ibge": 4216503,
                "nome": "São Joaquim"
            },
            {
                "codigo_ibge": 4216602,
                "nome": "São José"
            },
            {
                "codigo_ibge": 4216701,
                "nome": "São José do Cedro"
            },
            {
                "codigo_ibge": 4216800,
                "nome": "São José do Cerrito"
            },
            {
                "codigo_ibge": 4216909,
                "nome": "São Lourenço do Oeste"
            },
            {
                "codigo_ibge": 4217006,
                "nome": "São Ludgero"
            },
            {
                "codigo_ibge": 4217105,
                "nome": "São Martinho"
            },
            {
                "codigo_ibge": 4217154,
                "nome": "São Miguel da Boa Vista"
            },
            {
                "codigo_ibge": 4217204,
                "nome": "São Miguel do Oeste"
            },
            {
                "codigo_ibge": 4217253,
                "nome": "São Pedro de Alcântara"
            },
            {
                "codigo_ibge": 4217303,
                "nome": "Saudades"
            },
            {
                "codigo_ibge": 4217402,
                "nome": "Schroeder"
            },
            {
                "codigo_ibge": 4217501,
                "nome": "Seara"
            },
            {
                "codigo_ibge": 4217550,
                "nome": "Serra Alta"
            },
            {
                "codigo_ibge": 4217600,
                "nome": "Siderópolis"
            },
            {
                "codigo_ibge": 4217709,
                "nome": "Sombrio"
            },
            {
                "codigo_ibge": 4217758,
                "nome": "Sul Brasil"
            },
            {
                "codigo_ibge": 4217808,
                "nome": "Taió"
            },
            {
                "codigo_ibge": 4217907,
                "nome": "Tangará"
            },
            {
                "codigo_ibge": 4217956,
                "nome": "Tigrinhos"
            },
            {
                "codigo_ibge": 4218004,
                "nome": "Tijucas"
            },
            {
                "codigo_ibge": 4218103,
                "nome": "Timbé do Sul"
            },
            {
                "codigo_ibge": 4218202,
                "nome": "Timbó"
            },
            {
                "codigo_ibge": 4218251,
                "nome": "Timbó Grande"
            },
            {
                "codigo_ibge": 4218301,
                "nome": "Três Barras"
            },
            {
                "codigo_ibge": 4218350,
                "nome": "Treviso"
            },
            {
                "codigo_ibge": 4218400,
                "nome": "Treze de Maio"
            },
            {
                "codigo_ibge": 4218509,
                "nome": "Treze Tílias"
            },
            {
                "codigo_ibge": 4218608,
                "nome": "Trombudo Central"
            },
            {
                "codigo_ibge": 4218707,
                "nome": "Tubarão"
            },
            {
                "codigo_ibge": 4218756,
                "nome": "Tunápolis"
            },
            {
                "codigo_ibge": 4218806,
                "nome": "Turvo"
            },
            {
                "codigo_ibge": 4218855,
                "nome": "União do Oeste"
            },
            {
                "codigo_ibge": 4218905,
                "nome": "Urubici"
            },
            {
                "codigo_ibge": 4218954,
                "nome": "Urupema"
            },
            {
                "codigo_ibge": 4219002,
                "nome": "Urussanga"
            },
            {
                "codigo_ibge": 4219101,
                "nome": "Vargeão"
            },
            {
                "codigo_ibge": 4219150,
                "nome": "Vargem"
            },
            {
                "codigo_ibge": 4219176,
                "nome": "Vargem Bonita"
            },
            {
                "codigo_ibge": 4219200,
                "nome": "Vidal Ramos"
            },
            {
                "codigo_ibge": 4219309,
                "nome": "Videira"
            },
            {
                "codigo_ibge": 4219358,
                "nome": "Vitor Meireles"
            },
            {
                "codigo_ibge": 4219408,
                "nome": "Witmarsum"
            },
            {
                "codigo_ibge": 4219507,
                "nome": "Xanxerê"
            },
            {
                "codigo_ibge": 4219606,
                "nome": "Xavantina"
            },
            {
                "codigo_ibge": 4219705,
                "nome": "Xaxim"
            },
            {
                "codigo_ibge": 4219853,
                "nome": "Zortéa"
            }
        ]
    },
    "SE": {
        "nome": "Sergipe",
        "municipios": [
            {
                "codigo_ibge": 2800100,
                "nome": "Amparo de São Francisco"
            },
            {
                "codigo_ibge": 2800209,
                "nome": "Aquidabã"
            },
            {
                "codigo_ibge": 2800308,
                "nome": "Aracaju"
            },
            {
                "codigo_ibge": 2800407,
                "nome": "Arauá"
            },
            {
                "codigo_ibge": 2800506,
                "nome": "Areia Branca"
            },
            {
                "codigo_ibge": 2800605,
                "nome": "Barra dos Coqueiros"
            },
            {
                "codigo_ibge": 2800670,
                "nome": "Boquim"
            },
            {
                "codigo_ibge": 2800704,
                "nome": "Brejo Grande"
            },
            {
                "codigo_ibge": 2801009,
                "nome": "Campo do Brito"
            },
            {
                "codigo_ibge": 2801108,
                "nome": "Canhoba"
            },
            {
                "codigo_ibge": 2801207,
                "nome": "Canindé de São Francisco"
            },
            {
                "codigo_ibge": 2801306,
                "nome": "Capela"
            },
            {
                "codigo_ibge": 2801405,
                "nome": "Carira"
            },
            {
                "codigo_ibge": 2801504,
                "nome": "Carmópolis"
            },
            {
                "codigo_ibge": 2801603,
                "nome": "Cedro de São João"
            },
            {
                "codigo_ibge": 2801702,
                "nome": "Cristinápolis"
            },
            {
                "codigo_ibge": 2801900,
                "nome": "Cumbe"
            },
            {
                "codigo_ibge": 2802007,
                "nome": "Divina Pastora"
            },
            {
                "codigo_ibge": 2802106,
                "nome": "Estância"
            },
            {
                "codigo_ibge": 2802205,
                "nome": "Feira Nova"
            },
            {
                "codigo_ibge": 2802304,
                "nome": "Frei Paulo"
            },
            {
                "codigo_ibge": 2802403,
                "nome": "Gararu"
            },
            {
                "codigo_ibge": 2802502,
                "nome": "General Maynard"
            },
            {
                "codigo_ibge": 2802601,
                "nome": "Gracho Cardoso"
            },
            {
                "codigo_ibge": 2802700,
                "nome": "Ilha das Flores"
            },
            {
                "codigo_ibge": 2802809,
                "nome": "Indiaroba"
            },
            {
                "codigo_ibge": 2802908,
                "nome": "Itabaiana"
            },
            {
                "codigo_ibge": 2803005,
                "nome": "Itabaianinha"
            },
            {
                "codigo_ibge": 2803104,
                "nome": "Itabi"
            },
            {
                "codigo_ibge": 2803203,
                "nome": "Itaporanga d'Ajuda"
            },
            {
                "codigo_ibge": 2803302,
                "nome": "Japaratuba"
            },
            {
                "codigo_ibge": 2803401,
                "nome": "Japoatã"
            },
            {
                "codigo_ibge": 2803500,
                "nome": "Lagarto"
            },
            {
                "codigo_ibge": 2803609,
                "nome": "Laranjeiras"
            },
            {
                "codigo_ibge": 2803708,
                "nome": "Macambira"
            },
            {
                "codigo_ibge": 2803807,
                "nome": "Malhada dos Bois"
            },
            {
                "codigo_ibge": 2803906,
                "nome": "Malhador"
            },
            {
                "codigo_ibge": 2804003,
                "nome": "Maruim"
            },
            {
                "codigo_ibge": 2804102,
                "nome": "Moita Bonita"
            },
            {
                "codigo_ibge": 2804201,
                "nome": "Monte Alegre de Sergipe"
            },
            {
                "codigo_ibge": 2804300,
                "nome": "Muribeca"
            },
            {
                "codigo_ibge": 2804409,
                "nome": "Neópolis"
            },
            {
                "codigo_ibge": 2804458,
                "nome": "Nossa Senhora Aparecida"
            },
            {
                "codigo_ibge": 2804508,
                "nome": "Nossa Senhora da Glória"
            },
            {
                "codigo_ibge": 2804607,
                "nome": "Nossa Senhora das Dores"
            },
            {
                "codigo_ibge": 2804706,
                "nome": "Nossa Senhora de Lourdes"
            },
            {
                "codigo_ibge": 2804805,
                "nome": "Nossa Senhora do Socorro"
            },
            {
                "codigo_ibge": 2804904,
                "nome": "Pacatuba"
            },
            {
                "codigo_ibge": 2805000,
                "nome": "Pedra Mole"
            },
            {
                "codigo_ibge": 2805109,
                "nome": "Pedrinhas"
            },
            {
                "codigo_ibge": 2805208,
                "nome": "Pinhão"
            },
            {
                "codigo_ibge": 2805307,
                "nome": "Pirambu"
            },
            {
                "codigo_ibge": 2805406,
                "nome": "Poço Redondo"
            },
            {
                "codigo_ibge": 2805505,
                "nome": "Poço Verde"
            },
            {
                "codigo_ibge": 2805604,
                "nome": "Porto da Folha"
            },
            {
                "codigo_ibge": 2805703,
                "nome": "Propriá"
            },
            {
                "codigo_ibge": 2805802,
                "nome": "Riachão do Dantas"
            },
            {
                "codigo_ibge": 2805901,
                "nome": "Riachuelo"
            },
            {
                "codigo_ibge": 2806008,
                "nome": "Ribeirópolis"
            },
            {
                "codigo_ibge": 2806107,
                "nome": "Rosário do Catete"
            },
            {
                "codigo_ibge": 2806206,
                "nome": "Salgado"
            },
            {
                "codigo_ibge": 2806305,
                "nome": "Santa Luzia do Itanhy"
            },
            {
                "codigo_ibge": 2806503,
                "nome": "Santa Rosa de Lima"
            },
            {
                "codigo_ibge": 2806404,
                "nome": "Santana do São Francisco"
            },
            {
                "codigo_ibge": 2806602,
                "nome": "Santo Amaro das Brotas"
            },
            {
                "codigo_ibge": 2806701,
                "nome": "São Cristóvão"
            },
            {
                "codigo_ibge": 2806800,
                "nome": "São Domingos"
            },
            {
                "codigo_ibge": 2806909,
                "nome": "São Francisco"
            },
            {
                "codigo_ibge": 2807006,
                "nome": "São Miguel do Aleixo"
            },
            {
                "codigo_ibge": 2807105,
                "nome": "Simão Dias"
            },
            {
                "codigo_ibge": 2807204,
                "nome": "Siriri"
            },
            {
                "codigo_ibge": 2807303,
                "nome": "Telha"
            },
            {
                "codigo_ibge": 2807402,
                "nome": "Tobias Barreto"
            },
            {
                "codigo_ibge": 2807501,
                "nome": "Tomar do Geru"
            },
            {
                "codigo_ibge": 2807600,
                "nome": "Umbaúba"
            }
        ]
    },
    "SP": {
        "nome": "São Paulo",
        "municipios": [
            {
                "codigo_ibge": 3500105,
                "nome": "Adamantina"
            },
            {
                "codigo_ibge": 3500204,
                "nome": "Adolfo"
            },
            {
                "codigo_ibge": 3500303,
                "nome": "Aguaí"
            },
            {
                "codigo_ibge": 3500402,
                "nome": "Águas da Prata"
            },
            {
                "codigo_ibge": 3500501,
                "nome": "Águas de Lindóia"
            },
            {
                "codigo_ibge": 3500550,
                "nome": "Águas de Santa Bárbara"
            },
            {
                "codigo_ibge": 3500600,
                "nome": "Águas de São Pedro"
            },
            {
                "codigo_ibge": 3500709,
                "nome": "Agudos"
            },
            {
                "codigo_ibge": 3500758,
                "nome": "Alambari"
            },
            {
                "codigo_ibge": 3500808,
                "nome": "Alfredo Marcondes"
            },
            {
                "codigo_ibge": 3500907,
                "nome": "Altair"
            },
            {
                "codigo_ibge": 3501004,
                "nome": "Altinópolis"
            },
            {
                "codigo_ibge": 3501103,
                "nome": "Alto Alegre"
            },
            {
                "codigo_ibge": 3501152,
                "nome": "Alumínio"
            },
            {
                "codigo_ibge": 3501202,
                "nome": "Álvares Florence"
            },
            {
                "codigo_ibge": 3501301,
                "nome": "Álvares Machado"
            },
            {
                "codigo_ibge": 3501400,
                "nome": "Álvaro de Carvalho"
            },
            {
                "codigo_ibge": 3501509,
                "nome": "Alvinlândia"
            },
            {
                "codigo_ibge": 3501608,
                "nome": "Americana"
            },
            {
                "codigo_ibge": 3501707,
                "nome": "Américo Brasiliense"
            },
            {
                "codigo_ibge": 3501806,
                "nome": "Américo de Campos"
            },
            {
                "codigo_ibge": 3501905,
                "nome": "Amparo"
            },
            {
                "codigo_ibge": 3502002,
                "nome": "Analândia"
            },
            {
                "codigo_ibge": 3502101,
                "nome": "Andradina"
            },
            {
                "codigo_ibge": 3502200,
                "nome": "Angatuba"
            },
            {
                "codigo_ibge": 3502309,
                "nome": "Anhembi"
            },
            {
                "codigo_ibge": 3502408,
                "nome": "Anhumas"
            },
            {
                "codigo_ibge": 3502507,
                "nome": "Aparecida"
            },
            {
                "codigo_ibge": 3502606,
                "nome": "Aparecida d'Oeste"
            },
            {
                "codigo_ibge": 3502705,
                "nome": "Apiaí"
            },
            {
                "codigo_ibge": 3502754,
                "nome": "Araçariguama"
            },
            {
                "codigo_ibge": 3502804,
                "nome": "Araçatuba"
            },
            {
                "codigo_ibge": 3502903,
                "nome": "Araçoiaba da Serra"
            },
            {
                "codigo_ibge": 3503000,
                "nome": "Aramina"
            },
            {
                "codigo_ibge": 3503109,
                "nome": "Arandu"
            },
            {
                "codigo_ibge": 3503158,
                "nome": "Arapeí"
            },
            {
                "codigo_ibge": 3503208,
                "nome": "Araraquara"
            },
            {
                "codigo_ibge": 3503307,
                "nome": "Araras"
            },
            {
                "codigo_ibge": 3503356,
                "nome": "Arco-Íris"
            },
            {
                "codigo_ibge": 3503406,
                "nome": "Arealva"
            },
            {
                "codigo_ibge": 3503505,
                "nome": "Areias"
            },
            {
                "codigo_ibge": 3503604,
                "nome": "Areiópolis"
            },
            {
                "codigo_ibge": 3503703,
                "nome": "Ariranha"
            },
            {
                "codigo_ibge": 3503802,
                "nome": "Artur Nogueira"
            },
            {
                "codigo_ibge": 3503901,
                "nome": "Arujá"
            },
            {
                "codigo_ibge": 3503950,
                "nome": "Aspásia"
            },
            {
                "codigo_ibge": 3504008,
                "nome": "Assis"
            },
            {
                "codigo_ibge": 3504107,
                "nome": "Atibaia"
            },
            {
                "codigo_ibge": 3504206,
                "nome": "Auriflama"
            },
            {
                "codigo_ibge": 3504305,
                "nome": "Avaí"
            },
            {
                "codigo_ibge": 3504404,
                "nome": "Avanhandava"
            },
            {
                "codigo_ibge": 3504503,
                "nome": "Avaré"
            },
            {
                "codigo_ibge": 3504602,
                "nome": "Bady Bassitt"
            },
            {
                "codigo_ibge": 3504701,
                "nome": "Balbinos"
            },
            {
                "codigo_ibge": 3504800,
                "nome": "Bálsamo"
            },
            {
                "codigo_ibge": 3504909,
                "nome": "Bananal"
            },
            {
                "codigo_ibge": 3505005,
                "nome": "Barão de Antonina"
            },
            {
                "codigo_ibge": 3505104,
                "nome": "Barbosa"
            },
            {
                "codigo_ibge": 3505203,
                "nome": "Bariri"
            },
            {
                "codigo_ibge": 3505302,
                "nome": "Barra Bonita"
            },
            {
                "codigo_ibge": 3505351,
                "nome": "Barra do Chapéu"
            },
            {
                "codigo_ibge": 3505401,
                "nome": "Barra do Turvo"
            },
            {
                "codigo_ibge": 3505500,
                "nome": "Barretos"
            },
            {
                "codigo_ibge": 3505609,
                "nome": "Barrinha"
            },
            {
                "codigo_ibge": 3505708,
                "nome": "Barueri"
            },
            {
                "codigo_ibge": 3505807,
                "nome": "Bastos"
            },
            {
                "codigo_ibge": 3505906,
                "nome": "Batatais"
            },
            {
                "codigo_ibge": 3506003,
                "nome": "Bauru"
            },
            {
                "codigo_ibge": 3506102,
                "nome": "Bebedouro"
            },
            {
                "codigo_ibge": 3506201,
                "nome": "Bento de Abreu"
            },
            {
                "codigo_ibge": 3506300,
                "nome": "Bernardino de Campos"
            },
            {
                "codigo_ibge": 3506359,
                "nome": "Bertioga"
            },
            {
                "codigo_ibge": 3506409,
                "nome": "Bilac"
            },
            {
                "codigo_ibge": 3506508,
                "nome": "Birigui"
            },
            {
                "codigo_ibge": 3506607,
                "nome": "Biritiba-Mirim"
            },
            {
                "codigo_ibge": 3506706,
                "nome": "Boa Esperança do Sul"
            },
            {
                "codigo_ibge": 3506805,
                "nome": "Bocaina"
            },
            {
                "codigo_ibge": 3506904,
                "nome": "Bofete"
            },
            {
                "codigo_ibge": 3507001,
                "nome": "Boituva"
            },
            {
                "codigo_ibge": 3507100,
                "nome": "Bom Jesus dos Perdões"
            },
            {
                "codigo_ibge": 3507159,
                "nome": "Bom Sucesso de Itararé"
            },
            {
                "codigo_ibge": 3507209,
                "nome": "Borá"
            },
            {
                "codigo_ibge": 3507308,
                "nome": "Boracéia"
            },
            {
                "codigo_ibge": 3507407,
                "nome": "Borborema"
            },
            {
                "codigo_ibge": 3507456,
                "nome": "Borebi"
            },
            {
                "codigo_ibge": 3507506,
                "nome": "Botucatu"
            },
            {
                "codigo_ibge": 3507605,
                "nome": "Bragança Paulista"
            },
            {
                "codigo_ibge": 3507704,
                "nome": "Braúna"
            },
            {
                "codigo_ibge": 3507753,
                "nome": "Brejo Alegre"
            },
            {
                "codigo_ibge": 3507803,
                "nome": "Brodowski"
            },
            {
                "codigo_ibge": 3507902,
                "nome": "Brotas"
            },
            {
                "codigo_ibge": 3508009,
                "nome": "Buri"
            },
            {
                "codigo_ibge": 3508108,
                "nome": "Buritama"
            },
            {
                "codigo_ibge": 3508207,
                "nome": "Buritizal"
            },
            {
                "codigo_ibge": 3508306,
                "nome": "Cabrália Paulista"
            },
            {
                "codigo_ibge": 3508405,
                "nome": "Cabreúva"
            },
            {
                "codigo_ibge": 3508504,
                "nome": "Caçapava"
            },
            {
                "codigo_ibge": 3508603,
                "nome": "Cachoeira Paulista"
            },
            {
                "codigo_ibge": 3508702,
                "nome": "Caconde"
            },
            {
                "codigo_ibge": 3508801,
                "nome": "Cafelândia"
            },
            {
                "codigo_ibge": 3508900,
                "nome": "Caiabu"
            },
            {
                "codigo_ibge": 3509007,
                "nome": "Caieiras"
            },
            {
                "codigo_ibge": 3509106,
                "nome": "Caiuá"
            },
            {
                "codigo_ibge": 3509205,
                "nome": "Cajamar"
            },
            {
                "codigo_ibge": 3509254,
                "nome": "Cajati"
            },
            {
                "codigo_ibge": 3509304,
                "nome": "Cajobi"
            },
            {
                "codigo_ibge": 3509403,
                "nome": "Cajuru"
            },
            {
                "codigo_ibge": 3509452,
                "nome": "Campina do Monte Alegre"
            },
            {
                "codigo_ibge": 3509502,
                "nome": "Campinas"
            },
            {
                "codigo_ibge": 3509601,
                "nome": "Campo Limpo Paulista"
            },
            {
                "codigo_ibge": 3509700,
                "nome": "Campos do Jordão"
            },
            {
                "codigo_ibge": 3509809,
                "nome": "Campos Novos Paulista"
            },
            {
                "codigo_ibge": 3509908,
                "nome": "Cananéia"
            },
            {
                "codigo_ibge": 3509957,
                "nome": "Canas"
            },
            {
                "codigo_ibge": 3510005,
                "nome": "Cândido Mota"
            },
            {
                "codigo_ibge": 3510104,
                "nome": "Cândido Rodrigues"
            },
            {
                "codigo_ibge": 3510153,
                "nome": "Canitar"
            },
            {
                "codigo_ibge": 3510203,
                "nome": "Capão Bonito"
            },
            {
                "codigo_ibge": 3510302,
                "nome": "Capela do Alto"
            },
            {
                "codigo_ibge": 3510401,
                "nome": "Capivari"
            },
            {
                "codigo_ibge": 3510500,
                "nome": "Caraguatatuba"
            },
            {
                "codigo_ibge": 3510609,
                "nome": "Carapicuíba"
            },
            {
                "codigo_ibge": 3510708,
                "nome": "Cardoso"
            },
            {
                "codigo_ibge": 3510807,
                "nome": "Casa Branca"
            },
            {
                "codigo_ibge": 3510906,
                "nome": "Cássia dos Coqueiros"
            },
            {
                "codigo_ibge": 3511003,
                "nome": "Castilho"
            },
            {
                "codigo_ibge": 3511102,
                "nome": "Catanduva"
            },
            {
                "codigo_ibge": 3511201,
                "nome": "Catiguá"
            },
            {
                "codigo_ibge": 3511300,
                "nome": "Cedral"
            },
            {
                "codigo_ibge": 3511409,
                "nome": "Cerqueira César"
            },
            {
                "codigo_ibge": 3511508,
                "nome": "Cerquilho"
            },
            {
                "codigo_ibge": 3511607,
                "nome": "Cesário Lange"
            },
            {
                "codigo_ibge": 3511706,
                "nome": "Charqueada"
            },
            {
                "codigo_ibge": 3557204,
                "nome": "Chavantes"
            },
            {
                "codigo_ibge": 3511904,
                "nome": "Clementina"
            },
            {
                "codigo_ibge": 3512001,
                "nome": "Colina"
            },
            {
                "codigo_ibge": 3512100,
                "nome": "Colômbia"
            },
            {
                "codigo_ibge": 3512209,
                "nome": "Conchal"
            },
            {
                "codigo_ibge": 3512308,
                "nome": "Conchas"
            },
            {
                "codigo_ibge": 3512407,
                "nome": "Cordeirópolis"
            },
            {
                "codigo_ibge": 3512506,
                "nome": "Coroados"
            },
            {
                "codigo_ibge": 3512605,
                "nome": "Coronel Macedo"
            },
            {
                "codigo_ibge": 3512704,
                "nome": "Corumbataí"
            },
            {
                "codigo_ibge": 3512803,
                "nome": "Cosmópolis"
            },
            {
                "codigo_ibge": 3512902,
                "nome": "Cosmorama"
            },
            {
                "codigo_ibge": 3513009,
                "nome": "Cotia"
            },
            {
                "codigo_ibge": 3513108,
                "nome": "Cravinhos"
            },
            {
                "codigo_ibge": 3513207,
                "nome": "Cristais Paulista"
            },
            {
                "codigo_ibge": 3513306,
                "nome": "Cruzália"
            },
            {
                "codigo_ibge": 3513405,
                "nome": "Cruzeiro"
            },
            {
                "codigo_ibge": 3513504,
                "nome": "Cubatão"
            },
            {
                "codigo_ibge": 3513603,
                "nome": "Cunha"
            },
            {
                "codigo_ibge": 3513702,
                "nome": "Descalvado"
            },
            {
                "codigo_ibge": 3513801,
                "nome": "Diadema"
            },
            {
                "codigo_ibge": 3513850,
                "nome": "Dirce Reis"
            },
            {
                "codigo_ibge": 3513900,
                "nome": "Divinolândia"
            },
            {
                "codigo_ibge": 3514007,
                "nome": "Dobrada"
            },
            {
                "codigo_ibge": 3514106,
                "nome": "Dois Córregos"
            },
            {
                "codigo_ibge": 3514205,
                "nome": "Dolcinópolis"
            },
            {
                "codigo_ibge": 3514304,
                "nome": "Dourado"
            },
            {
                "codigo_ibge": 3514403,
                "nome": "Dracena"
            },
            {
                "codigo_ibge": 3514502,
                "nome": "Duartina"
            },
            {
                "codigo_ibge": 3514601,
                "nome": "Dumont"
            },
            {
                "codigo_ibge": 3514700,
                "nome": "Echaporã"
            },
            {
                "codigo_ibge": 3514809,
                "nome": "Eldorado"
            },
            {
                "codigo_ibge": 3514908,
                "nome": "Elias Fausto"
            },
            {
                "codigo_ibge": 3514924,
                "nome": "Elisiário"
            },
            {
                "codigo_ibge": 3514957,
                "nome": "Embaúba"
            },
            {
                "codigo_ibge": 3515004,
                "nome": "Embu das Artes"
            },
            {
                "codigo_ibge": 3515103,
                "nome": "Embu-Guaçu"
            },
            {
                "codigo_ibge": 3515129,
                "nome": "Emilianópolis"
            },
            {
                "codigo_ibge": 3515152,
                "nome": "Engenheiro Coelho"
            },
            {
                "codigo_ibge": 3515186,
                "nome": "Espírito Santo do Pinhal"
            },
            {
                "codigo_ibge": 3515194,
                "nome": "Espírito Santo do Turvo"
            },
            {
                "codigo_ibge": 3557303,
                "nome": "Estiva Gerbi"
            },
            {
                "codigo_ibge": 3515202,
                "nome": "Estrela d'Oeste"
            },
            {
                "codigo_ibge": 3515301,
                "nome": "Estrela do Norte"
            },
            {
                "codigo_ibge": 3515350,
                "nome": "Euclides da Cunha Paulista"
            },
            {
                "codigo_ibge": 3515400,
                "nome": "Fartura"
            },
            {
                "codigo_ibge": 3515608,
                "nome": "Fernando Prestes"
            },
            {
                "codigo_ibge": 3515509,
                "nome": "Fernandópolis"
            },
            {
                "codigo_ibge": 3515657,
                "nome": "Fernão"
            },
            {
                "codigo_ibge": 3515707,
                "nome": "Ferraz de Vasconcelos"
            },
            {
                "codigo_ibge": 3515806,
                "nome": "Flora Rica"
            },
            {
                "codigo_ibge": 3515905,
                "nome": "Floreal"
            },
            {
                "codigo_ibge": 3516002,
                "nome": "Flórida Paulista"
            },
            {
                "codigo_ibge": 3516101,
                "nome": "Florínia"
            },
            {
                "codigo_ibge": 3516200,
                "nome": "Franca"
            },
            {
                "codigo_ibge": 3516309,
                "nome": "Francisco Morato"
            },
            {
                "codigo_ibge": 3516408,
                "nome": "Franco da Rocha"
            },
            {
                "codigo_ibge": 3516507,
                "nome": "Gabriel Monteiro"
            },
            {
                "codigo_ibge": 3516606,
                "nome": "Gália"
            },
            {
                "codigo_ibge": 3516705,
                "nome": "Garça"
            },
            {
                "codigo_ibge": 3516804,
                "nome": "Gastão Vidigal"
            },
            {
                "codigo_ibge": 3516853,
                "nome": "Gavião Peixoto"
            },
            {
                "codigo_ibge": 3516903,
                "nome": "General Salgado"
            },
            {
                "codigo_ibge": 3517000,
                "nome": "Getulina"
            },
            {
                "codigo_ibge": 3517109,
                "nome": "Glicério"
            },
            {
                "codigo_ibge": 3517208,
                "nome": "Guaiçara"
            },
            {
                "codigo_ibge": 3517307,
                "nome": "Guaimbê"
            },
            {
                "codigo_ibge": 3517406,
                "nome": "Guaíra"
            },
            {
                "codigo_ibge": 3517505,
                "nome": "Guapiaçu"
            },
            {
                "codigo_ibge": 3517604,
                "nome": "Guapiara"
            },
            {
                "codigo_ibge": 3517703,
                "nome": "Guará"
            },
            {
                "codigo_ibge": 3517802,
                "nome": "Guaraçaí"
            },
            {
                "codigo_ibge": 3517901,
                "nome": "Guaraci"
            },
            {
                "codigo_ibge": 3518008,
                "nome": "Guarani d'Oeste"
            },
            {
                "codigo_ibge": 3518107,
                "nome": "Guarantã"
            },
            {
                "codigo_ibge": 3518206,
                "nome": "Guararapes"
            },
            {
                "codigo_ibge": 3518305,
                "nome": "Guararema"
            },
            {
                "codigo_ibge": 3518404,
                "nome": "Guaratinguetá"
            },
            {
                "codigo_ibge": 3518503,
                "nome": "Guareí"
            },
            {
                "codigo_ibge": 3518602,
                "nome": "Guariba"
            },
            {
                "codigo_ibge": 3518701,
                "nome": "Guarujá"
            },
            {
                "codigo_ibge": 3518800,
                "nome": "Guarulhos"
            },
            {
                "codigo_ibge": 3518859,
                "nome": "Guatapará"
            },
            {
                "codigo_ibge": 3518909,
                "nome": "Guzolândia"
            },
            {
                "codigo_ibge": 3519006,
                "nome": "Herculândia"
            },
            {
                "codigo_ibge": 3519055,
                "nome": "Holambra"
            },
            {
                "codigo_ibge": 3519071,
                "nome": "Hortolândia"
            },
            {
                "codigo_ibge": 3519105,
                "nome": "Iacanga"
            },
            {
                "codigo_ibge": 3519204,
                "nome": "Iacri"
            },
            {
                "codigo_ibge": 3519253,
                "nome": "Iaras"
            },
            {
                "codigo_ibge": 3519303,
                "nome": "Ibaté"
            },
            {
                "codigo_ibge": 3519402,
                "nome": "Ibirá"
            },
            {
                "codigo_ibge": 3519501,
                "nome": "Ibirarema"
            },
            {
                "codigo_ibge": 3519600,
                "nome": "Ibitinga"
            },
            {
                "codigo_ibge": 3519709,
                "nome": "Ibiúna"
            },
            {
                "codigo_ibge": 3519808,
                "nome": "Icém"
            },
            {
                "codigo_ibge": 3519907,
                "nome": "Iepê"
            },
            {
                "codigo_ibge": 3520004,
                "nome": "Igaraçu do Tietê"
            },
            {
                "codigo_ibge": 3520103,
                "nome": "Igarapava"
            },
            {
                "codigo_ibge": 3520202,
                "nome": "Igaratá"
            },
            {
                "codigo_ibge": 3520301,
                "nome": "Iguape"
            },
            {
                "codigo_ibge": 3520426,
                "nome": "Ilha Comprida"
            },
            {
                "codigo_ibge": 3520442,
                "nome": "Ilha Solteira"
            },
            {
                "codigo_ibge": 3520400,
                "nome": "Ilhabela"
            },
            {
                "codigo_ibge": 3520509,
                "nome": "Indaiatuba"
            },
            {
                "codigo_ibge": 3520608,
                "nome": "Indiana"
            },
            {
                "codigo_ibge": 3520707,
                "nome": "Indiaporã"
            },
            {
                "codigo_ibge": 3520806,
                "nome": "Inúbia Paulista"
            },
            {
                "codigo_ibge": 3520905,
                "nome": "Ipaussu"
            },
            {
                "codigo_ibge": 3521002,
                "nome": "Iperó"
            },
            {
                "codigo_ibge": 3521101,
                "nome": "Ipeúna"
            },
            {
                "codigo_ibge": 3521150,
                "nome": "Ipiguá"
            },
            {
                "codigo_ibge": 3521200,
                "nome": "Iporanga"
            },
            {
                "codigo_ibge": 3521309,
                "nome": "Ipuã"
            },
            {
                "codigo_ibge": 3521408,
                "nome": "Iracemápolis"
            },
            {
                "codigo_ibge": 3521507,
                "nome": "Irapuã"
            },
            {
                "codigo_ibge": 3521606,
                "nome": "Irapuru"
            },
            {
                "codigo_ibge": 3521705,
                "nome": "Itaberá"
            },
            {
                "codigo_ibge": 3521804,
                "nome": "Itaí"
            },
            {
                "codigo_ibge": 3521903,
                "nome": "Itajobi"
            },
            {
                "codigo_ibge": 3522000,
                "nome": "Itaju"
            },
            {
                "codigo_ibge": 3522109,
                "nome": "Itanhaém"
            },
            {
                "codigo_ibge": 3522158,
                "nome": "Itaóca"
            },
            {
                "codigo_ibge": 3522208,
                "nome": "Itapecerica da Serra"
            },
            {
                "codigo_ibge": 3522307,
                "nome": "Itapetininga"
            },
            {
                "codigo_ibge": 3522406,
                "nome": "Itapeva"
            },
            {
                "codigo_ibge": 3522505,
                "nome": "Itapevi"
            },
            {
                "codigo_ibge": 3522604,
                "nome": "Itapira"
            },
            {
                "codigo_ibge": 3522653,
                "nome": "Itapirapuã Paulista"
            },
            {
                "codigo_ibge": 3522703,
                "nome": "Itápolis"
            },
            {
                "codigo_ibge": 3522802,
                "nome": "Itaporanga"
            },
            {
                "codigo_ibge": 3522901,
                "nome": "Itapuí"
            },
            {
                "codigo_ibge": 3523008,
                "nome": "Itapura"
            },
            {
                "codigo_ibge": 3523107,
                "nome": "Itaquaquecetuba"
            },
            {
                "codigo_ibge": 3523206,
                "nome": "Itararé"
            },
            {
                "codigo_ibge": 3523305,
                "nome": "Itariri"
            },
            {
                "codigo_ibge": 3523404,
                "nome": "Itatiba"
            },
            {
                "codigo_ibge": 3523503,
                "nome": "Itatinga"
            },
            {
                "codigo_ibge": 3523602,
                "nome": "Itirapina"
            },
            {
                "codigo_ibge": 3523701,
                "nome": "Itirapuã"
            },
            {
                "codigo_ibge": 3523800,
                "nome": "Itobi"
            },
            {
                "codigo_ibge": 3523909,
                "nome": "Itu"
            },
            {
                "codigo_ibge": 3524006,
                "nome": "Itupeva"
            },
            {
                "codigo_ibge": 3524105,
                "nome": "Ituverava"
            },
            {
                "codigo_ibge": 3524204,
                "nome": "Jaborandi"
            },
            {
                "codigo_ibge": 3524303,
                "nome": "Jaboticabal"
            },
            {
                "codigo_ibge": 3524402,
                "nome": "Jacareí"
            },
            {
                "codigo_ibge": 3524501,
                "nome": "Jaci"
            },
            {
                "codigo_ibge": 3524600,
                "nome": "Jacupiranga"
            },
            {
                "codigo_ibge": 3524709,
                "nome": "Jaguariúna"
            },
            {
                "codigo_ibge": 3524808,
                "nome": "Jales"
            },
            {
                "codigo_ibge": 3524907,
                "nome": "Jambeiro"
            },
            {
                "codigo_ibge": 3525003,
                "nome": "Jandira"
            },
            {
                "codigo_ibge": 3525102,
                "nome": "Jardinópolis"
            },
            {
                "codigo_ibge": 3525201,
                "nome": "Jarinu"
            },
            {
                "codigo_ibge": 3525300,
                "nome": "Jaú"
            },
            {
                "codigo_ibge": 3525409,
                "nome": "Jeriquara"
            },
            {
                "codigo_ibge": 3525508,
                "nome": "Joanópolis"
            },
            {
                "codigo_ibge": 3525607,
                "nome": "João Ramalho"
            },
            {
                "codigo_ibge": 3525706,
                "nome": "José Bonifácio"
            },
            {
                "codigo_ibge": 3525805,
                "nome": "Júlio Mesquita"
            },
            {
                "codigo_ibge": 3525854,
                "nome": "Jumirim"
            },
            {
                "codigo_ibge": 3525904,
                "nome": "Jundiaí"
            },
            {
                "codigo_ibge": 3526001,
                "nome": "Junqueirópolis"
            },
            {
                "codigo_ibge": 3526100,
                "nome": "Juquiá"
            },
            {
                "codigo_ibge": 3526209,
                "nome": "Juquitiba"
            },
            {
                "codigo_ibge": 3526308,
                "nome": "Lagoinha"
            },
            {
                "codigo_ibge": 3526407,
                "nome": "Laranjal Paulista"
            },
            {
                "codigo_ibge": 3526506,
                "nome": "Lavínia"
            },
            {
                "codigo_ibge": 3526605,
                "nome": "Lavrinhas"
            },
            {
                "codigo_ibge": 3526704,
                "nome": "Leme"
            },
            {
                "codigo_ibge": 3526803,
                "nome": "Lençóis Paulista"
            },
            {
                "codigo_ibge": 3526902,
                "nome": "Limeira"
            },
            {
                "codigo_ibge": 3527009,
                "nome": "Lindóia"
            },
            {
                "codigo_ibge": 3527108,
                "nome": "Lins"
            },
            {
                "codigo_ibge": 3527207,
                "nome": "Lorena"
            },
            {
                "codigo_ibge": 3527256,
                "nome": "Lourdes"
            },
            {
                "codigo_ibge": 3527306,
                "nome": "Louveira"
            },
            {
                "codigo_ibge": 3527405,
                "nome": "Lucélia"
            },
            {
                "codigo_ibge": 3527504,
                "nome": "Lucianópolis"
            },
            {
                "codigo_ibge": 3527603,
                "nome": "Luís Antônio"
            },
            {
                "codigo_ibge": 3527702,
                "nome": "Luiziânia"
            },
            {
                "codigo_ibge": 3527801,
                "nome": "Lupércio"
            },
            {
                "codigo_ibge": 3527900,
                "nome": "Lutécia"
            },
            {
                "codigo_ibge": 3528007,
                "nome": "Macatuba"
            },
            {
                "codigo_ibge": 3528106,
                "nome": "Macaubal"
            },
            {
                "codigo_ibge": 3528205,
                "nome": "Macedônia"
            },
            {
                "codigo_ibge": 3528304,
                "nome": "Magda"
            },
            {
                "codigo_ibge": 3528403,
                "nome": "Mairinque"
            },
            {
                "codigo_ibge": 3528502,
                "nome": "Mairiporã"
            },
            {
                "codigo_ibge": 3528601,
                "nome": "Manduri"
            },
            {
                "codigo_ibge": 3528700,
                "nome": "Marabá Paulista"
            },
            {
                "codigo_ibge": 3528809,
                "nome": "Maracaí"
            },
            {
                "codigo_ibge": 3528858,
                "nome": "Marapoama"
            },
            {
                "codigo_ibge": 3528908,
                "nome": "Mariápolis"
            },
            {
                "codigo_ibge": 3529005,
                "nome": "Marília"
            },
            {
                "codigo_ibge": 3529104,
                "nome": "Marinópolis"
            },
            {
                "codigo_ibge": 3529203,
                "nome": "Martinópolis"
            },
            {
                "codigo_ibge": 3529302,
                "nome": "Matão"
            },
            {
                "codigo_ibge": 3529401,
                "nome": "Mauá"
            },
            {
                "codigo_ibge": 3529500,
                "nome": "Mendonça"
            },
            {
                "codigo_ibge": 3529609,
                "nome": "Meridiano"
            },
            {
                "codigo_ibge": 3529658,
                "nome": "Mesópolis"
            },
            {
                "codigo_ibge": 3529708,
                "nome": "Miguelópolis"
            },
            {
                "codigo_ibge": 3529807,
                "nome": "Mineiros do Tietê"
            },
            {
                "codigo_ibge": 3530003,
                "nome": "Mira Estrela"
            },
            {
                "codigo_ibge": 3529906,
                "nome": "Miracatu"
            },
            {
                "codigo_ibge": 3530102,
                "nome": "Mirandópolis"
            },
            {
                "codigo_ibge": 3530201,
                "nome": "Mirante do Paranapanema"
            },
            {
                "codigo_ibge": 3530300,
                "nome": "Mirassol"
            },
            {
                "codigo_ibge": 3530409,
                "nome": "Mirassolândia"
            },
            {
                "codigo_ibge": 3530508,
                "nome": "Mococa"
            },
            {
                "codigo_ibge": 3530607,
                "nome": "Mogi das Cruzes"
            },
            {
                "codigo_ibge": 3530706,
                "nome": "Mogi Guaçu"
            },
            {
                "codigo_ibge": 3530805,
                "nome": "Mogi Mirim"
            },
            {
                "codigo_ibge": 3530904,
                "nome": "Mombuca"
            },
            {
                "codigo_ibge": 3531001,
                "nome": "Monções"
            },
            {
                "codigo_ibge": 3531100,
                "nome": "Mongaguá"
            },
            {
                "codigo_ibge": 3531209,
                "nome": "Monte Alegre do Sul"
            },
            {
                "codigo_ibge": 3531308,
                "nome": "Monte Alto"
            },
            {
                "codigo_ibge": 3531407,
                "nome": "Monte Aprazível"
            },
            {
                "codigo_ibge": 3531506,
                "nome": "Monte Azul Paulista"
            },
            {
                "codigo_ibge": 3531605,
                "nome": "Monte Castelo"
            },
            {
                "codigo_ibge": 3531803,
                "nome": "Monte Mor"
            },
            {
                "codigo_ibge": 3531704,
                "nome": "Monteiro Lobato"
            },
            {
                "codigo_ibge": 3531902,
                "nome": "Morro Agudo"
            },
            {
                "codigo_ibge": 3532009,
                "nome": "Morungaba"
            },
            {
                "codigo_ibge": 3532058,
                "nome": "Motuca"
            },
            {
                "codigo_ibge": 3532108,
                "nome": "Murutinga do Sul"
            },
            {
                "codigo_ibge": 3532157,
                "nome": "Nantes"
            },
            {
                "codigo_ibge": 3532207,
                "nome": "Narandiba"
            },
            {
                "codigo_ibge": 3532306,
                "nome": "Natividade da Serra"
            },
            {
                "codigo_ibge": 3532405,
                "nome": "Nazaré Paulista"
            },
            {
                "codigo_ibge": 3532504,
                "nome": "Neves Paulista"
            },
            {
                "codigo_ibge": 3532603,
                "nome": "Nhandeara"
            },
            {
                "codigo_ibge": 3532702,
                "nome": "Nipoã"
            },
            {
                "codigo_ibge": 3532801,
                "nome": "Nova Aliança"
            },
            {
                "codigo_ibge": 3532827,
                "nome": "Nova Campina"
            },
            {
                "codigo_ibge": 3532843,
                "nome": "Nova Canaã Paulista"
            },
            {
                "codigo_ibge": 3532868,
                "nome": "Nova Castilho"
            },
            {
                "codigo_ibge": 3532900,
                "nome": "Nova Europa"
            },
            {
                "codigo_ibge": 3533007,
                "nome": "Nova Granada"
            },
            {
                "codigo_ibge": 3533106,
                "nome": "Nova Guataporanga"
            },
            {
                "codigo_ibge": 3533205,
                "nome": "Nova Independência"
            },
            {
                "codigo_ibge": 3533304,
                "nome": "Nova Luzitânia"
            },
            {
                "codigo_ibge": 3533403,
                "nome": "Nova Odessa"
            },
            {
                "codigo_ibge": 3533254,
                "nome": "Novais"
            },
            {
                "codigo_ibge": 3533502,
                "nome": "Novo Horizonte"
            },
            {
                "codigo_ibge": 3533601,
                "nome": "Nuporanga"
            },
            {
                "codigo_ibge": 3533700,
                "nome": "Ocauçu"
            },
            {
                "codigo_ibge": 3533809,
                "nome": "Óleo"
            },
            {
                "codigo_ibge": 3533908,
                "nome": "Olímpia"
            },
            {
                "codigo_ibge": 3534005,
                "nome": "Onda Verde"
            },
            {
                "codigo_ibge": 3534104,
                "nome": "Oriente"
            },
            {
                "codigo_ibge": 3534203,
                "nome": "Orindiúva"
            },
            {
                "codigo_ibge": 3534302,
                "nome": "Orlândia"
            },
            {
                "codigo_ibge": 3534401,
                "nome": "Osasco"
            },
            {
                "codigo_ibge": 3534500,
                "nome": "Oscar Bressane"
            },
            {
                "codigo_ibge": 3534609,
                "nome": "Osvaldo Cruz"
            },
            {
                "codigo_ibge": 3534708,
                "nome": "Ourinhos"
            },
            {
                "codigo_ibge": 3534807,
                "nome": "Ouro Verde"
            },
            {
                "codigo_ibge": 3534757,
                "nome": "Ouroeste"
            },
            {
                "codigo_ibge": 3534906,
                "nome": "Pacaembu"
            },
            {
                "codigo_ibge": 3535002,
                "nome": "Palestina"
            },
            {
                "codigo_ibge": 3535101,
                "nome": "Palmares Paulista"
            },
            {
                "codigo_ibge": 3535200,
                "nome": "Palmeira d'Oeste"
            },
            {
                "codigo_ibge": 3535309,
                "nome": "Palmital"
            },
            {
                "codigo_ibge": 3535408,
                "nome": "Panorama"
            },
            {
                "codigo_ibge": 3535507,
                "nome": "Paraguaçu Paulista"
            },
            {
                "codigo_ibge": 3535606,
                "nome": "Paraibuna"
            },
            {
                "codigo_ibge": 3535705,
                "nome": "Paraíso"
            },
            {
                "codigo_ibge": 3535804,
                "nome": "Paranapanema"
            },
            {
                "codigo_ibge": 3535903,
                "nome": "Paranapuã"
            },
            {
                "codigo_ibge": 3536000,
                "nome": "Parapuã"
            },
            {
                "codigo_ibge": 3536109,
                "nome": "Pardinho"
            },
            {
                "codigo_ibge": 3536208,
                "nome": "Pariquera-Açu"
            },
            {
                "codigo_ibge": 3536257,
                "nome": "Parisi"
            },
            {
                "codigo_ibge": 3536307,
                "nome": "Patrocínio Paulista"
            },
            {
                "codigo_ibge": 3536406,
                "nome": "Paulicéia"
            },
            {
                "codigo_ibge": 3536505,
                "nome": "Paulínia"
            },
            {
                "codigo_ibge": 3536570,
                "nome": "Paulistânia"
            },
            {
                "codigo_ibge": 3536604,
                "nome": "Paulo de Faria"
            },
            {
                "codigo_ibge": 3536703,
                "nome": "Pederneiras"
            },
            {
                "codigo_ibge": 3536802,
                "nome": "Pedra Bela"
            },
            {
                "codigo_ibge": 3536901,
                "nome": "Pedranópolis"
            },
            {
                "codigo_ibge": 3537008,
                "nome": "Pedregulho"
            },
            {
                "codigo_ibge": 3537107,
                "nome": "Pedreira"
            },
            {
                "codigo_ibge": 3537156,
                "nome": "Pedrinhas Paulista"
            },
            {
                "codigo_ibge": 3537206,
                "nome": "Pedro de Toledo"
            },
            {
                "codigo_ibge": 3537305,
                "nome": "Penápolis"
            },
            {
                "codigo_ibge": 3537404,
                "nome": "Pereira Barreto"
            },
            {
                "codigo_ibge": 3537503,
                "nome": "Pereiras"
            },
            {
                "codigo_ibge": 3537602,
                "nome": "Peruíbe"
            },
            {
                "codigo_ibge": 3537701,
                "nome": "Piacatu"
            },
            {
                "codigo_ibge": 3537800,
                "nome": "Piedade"
            },
            {
                "codigo_ibge": 3537909,
                "nome": "Pilar do Sul"
            },
            {
                "codigo_ibge": 3538006,
                "nome": "Pindamonhangaba"
            },
            {
                "codigo_ibge": 3538105,
                "nome": "Pindorama"
            },
            {
                "codigo_ibge": 3538204,
                "nome": "Pinhalzinho"
            },
            {
                "codigo_ibge": 3538303,
                "nome": "Piquerobi"
            },
            {
                "codigo_ibge": 3538501,
                "nome": "Piquete"
            },
            {
                "codigo_ibge": 3538600,
                "nome": "Piracaia"
            },
            {
                "codigo_ibge": 3538709,
                "nome": "Piracicaba"
            },
            {
                "codigo_ibge": 3538808,
                "nome": "Piraju"
            },
            {
                "codigo_ibge": 3538907,
                "nome": "Pirajuí"
            },
            {
                "codigo_ibge": 3539004,
                "nome": "Pirangi"
            },
            {
                "codigo_ibge": 3539103,
                "nome": "Pirapora do Bom Jesus"
            },
            {
                "codigo_ibge": 3539202,
                "nome": "Pirapozinho"
            },
            {
                "codigo_ibge": 3539301,
                "nome": "Pirassununga"
            },
            {
                "codigo_ibge": 3539400,
                "nome": "Piratininga"
            },
            {
                "codigo_ibge": 3539509,
                "nome": "Pitangueiras"
            },
            {
                "codigo_ibge": 3539608,
                "nome": "Planalto"
            },
            {
                "codigo_ibge": 3539707,
                "nome": "Platina"
            },
            {
                "codigo_ibge": 3539806,
                "nome": "Poá"
            },
            {
                "codigo_ibge": 3539905,
                "nome": "Poloni"
            },
            {
                "codigo_ibge": 3540002,
                "nome": "Pompéia"
            },
            {
                "codigo_ibge": 3540101,
                "nome": "Pongaí"
            },
            {
                "codigo_ibge": 3540200,
                "nome": "Pontal"
            },
            {
                "codigo_ibge": 3540259,
                "nome": "Pontalinda"
            },
            {
                "codigo_ibge": 3540309,
                "nome": "Pontes Gestal"
            },
            {
                "codigo_ibge": 3540408,
                "nome": "Populina"
            },
            {
                "codigo_ibge": 3540507,
                "nome": "Porangaba"
            },
            {
                "codigo_ibge": 3540606,
                "nome": "Porto Feliz"
            },
            {
                "codigo_ibge": 3540705,
                "nome": "Porto Ferreira"
            },
            {
                "codigo_ibge": 3540754,
                "nome": "Potim"
            },
            {
                "codigo_ibge": 3540804,
                "nome": "Potirendaba"
            },
            {
                "codigo_ibge": 3540853,
                "nome": "Pracinha"
            },
            {
                "codigo_ibge": 3540903,
                "nome": "Pradópolis"
            },
            {
                "codigo_ibge": 3541000,
                "nome": "Praia Grande"
            },
            {
                "codigo_ibge": 3541059,
                "nome": "Pratânia"
            },
            {
                "codigo_ibge": 3541109,
                "nome": "Presidente Alves"
            },
            {
                "codigo_ibge": 3541208,
                "nome": "Presidente Bernardes"
            },
            {
                "codigo_ibge": 3541307,
                "nome": "Presidente Epitácio"
            },
            {
                "codigo_ibge": 3541406,
                "nome": "Presidente Prudente"
            },
            {
                "codigo_ibge": 3541505,
                "nome": "Presidente Venceslau"
            },
            {
                "codigo_ibge": 3541604,
                "nome": "Promissão"
            },
            {
                "codigo_ibge": 3541653,
                "nome": "Quadra"
            },
            {
                "codigo_ibge": 3541703,
                "nome": "Quatá"
            },
            {
                "codigo_ibge": 3541802,
                "nome": "Queiroz"
            },
            {
                "codigo_ibge": 3541901,
                "nome": "Queluz"
            },
            {
                "codigo_ibge": 3542008,
                "nome": "Quintana"
            },
            {
                "codigo_ibge": 3542107,
                "nome": "Rafard"
            },
            {
                "codigo_ibge": 3542206,
                "nome": "Rancharia"
            },
            {
                "codigo_ibge": 3542305,
                "nome": "Redenção da Serra"
            },
            {
                "codigo_ibge": 3542404,
                "nome": "Regente Feijó"
            },
            {
                "codigo_ibge": 3542503,
                "nome": "Reginópolis"
            },
            {
                "codigo_ibge": 3542602,
                "nome": "Registro"
            },
            {
                "codigo_ibge": 3542701,
                "nome": "Restinga"
            },
            {
                "codigo_ibge": 3542800,
                "nome": "Ribeira"
            },
            {
                "codigo_ibge": 3542909,
                "nome": "Ribeirão Bonito"
            },
            {
                "codigo_ibge": 3543006,
                "nome": "Ribeirão Branco"
            },
            {
                "codigo_ibge": 3543105,
                "nome": "Ribeirão Corrente"
            },
            {
                "codigo_ibge": 3543204,
                "nome": "Ribeirão do Sul"
            },
            {
                "codigo_ibge": 3543238,
                "nome": "Ribeirão dos Índios"
            },
            {
                "codigo_ibge": 3543253,
                "nome": "Ribeirão Grande"
            },
            {
                "codigo_ibge": 3543303,
                "nome": "Ribeirão Pires"
            },
            {
                "codigo_ibge": 3543402,
                "nome": "Ribeirão Preto"
            },
            {
                "codigo_ibge": 3543600,
                "nome": "Rifaina"
            },
            {
                "codigo_ibge": 3543709,
                "nome": "Rincão"
            },
            {
                "codigo_ibge": 3543808,
                "nome": "Rinópolis"
            },
            {
                "codigo_ibge": 3543907,
                "nome": "Rio Claro"
            },
            {
                "codigo_ibge": 3544004,
                "nome": "Rio das Pedras"
            },
            {
                "codigo_ibge": 3544103,
                "nome": "Rio Grande da Serra"
            },
            {
                "codigo_ibge": 3544202,
                "nome": "Riolândia"
            },
            {
                "codigo_ibge": 3543501,
                "nome": "Riversul"
            },
            {
                "codigo_ibge": 3544251,
                "nome": "Rosana"
            },
            {
                "codigo_ibge": 3544301,
                "nome": "Roseira"
            },
            {
                "codigo_ibge": 3544400,
                "nome": "Rubiácea"
            },
            {
                "codigo_ibge": 3544509,
                "nome": "Rubinéia"
            },
            {
                "codigo_ibge": 3544608,
                "nome": "Sabino"
            },
            {
                "codigo_ibge": 3544707,
                "nome": "Sagres"
            },
            {
                "codigo_ibge": 3544806,
                "nome": "Sales"
            },
            {
                "codigo_ibge": 3544905,
                "nome": "Sales Oliveira"
            },
            {
                "codigo_ibge": 3545001,
                "nome": "Salesópolis"
            },
            {
                "codigo_ibge": 3545100,
                "nome": "Salmourão"
            },
            {
                "codigo_ibge": 3545159,
                "nome": "Saltinho"
            },
            {
                "codigo_ibge": 3545209,
                "nome": "Salto"
            },
            {
                "codigo_ibge": 3545308,
                "nome": "Salto de Pirapora"
            },
            {
                "codigo_ibge": 3545407,
                "nome": "Salto Grande"
            },
            {
                "codigo_ibge": 3545506,
                "nome": "Sandovalina"
            },
            {
                "codigo_ibge": 3545605,
                "nome": "Santa Adélia"
            },
            {
                "codigo_ibge": 3545704,
                "nome": "Santa Albertina"
            },
            {
                "codigo_ibge": 3545803,
                "nome": "Santa Bárbara d'Oeste"
            },
            {
                "codigo_ibge": 3546009,
                "nome": "Santa Branca"
            },
            {
                "codigo_ibge": 3546108,
                "nome": "Santa Clara d'Oeste"
            },
            {
                "codigo_ibge": 3546207,
                "nome": "Santa Cruz da Conceição"
            },
            {
                "codigo_ibge": 3546256,
                "nome": "Santa Cruz da Esperança"
            },
            {
                "codigo_ibge": 3546306,
                "nome": "Santa Cruz das Palmeiras"
            },
            {
                "codigo_ibge": 3546405,
                "nome": "Santa Cruz do Rio Pardo"
            },
            {
                "codigo_ibge": 3546504,
                "nome": "Santa Ernestina"
            },
            {
                "codigo_ibge": 3546603,
                "nome": "Santa Fé do Sul"
            },
            {
                "codigo_ibge": 3546702,
                "nome": "Santa Gertrudes"
            },
            {
                "codigo_ibge": 3546801,
                "nome": "Santa Isabel"
            },
            {
                "codigo_ibge": 3546900,
                "nome": "Santa Lúcia"
            },
            {
                "codigo_ibge": 3547007,
                "nome": "Santa Maria da Serra"
            },
            {
                "codigo_ibge": 3547106,
                "nome": "Santa Mercedes"
            },
            {
                "codigo_ibge": 3547403,
                "nome": "Santa Rita d'Oeste"
            },
            {
                "codigo_ibge": 3547502,
                "nome": "Santa Rita do Passa Quatro"
            },
            {
                "codigo_ibge": 3547601,
                "nome": "Santa Rosa de Viterbo"
            },
            {
                "codigo_ibge": 3547650,
                "nome": "Santa Salete"
            },
            {
                "codigo_ibge": 3547205,
                "nome": "Santana da Ponte Pensa"
            },
            {
                "codigo_ibge": 3547304,
                "nome": "Santana de Parnaíba"
            },
            {
                "codigo_ibge": 3547700,
                "nome": "Santo Anastácio"
            },
            {
                "codigo_ibge": 3547809,
                "nome": "Santo André"
            },
            {
                "codigo_ibge": 3547908,
                "nome": "Santo Antônio da Alegria"
            },
            {
                "codigo_ibge": 3548005,
                "nome": "Santo Antônio de Posse"
            },
            {
                "codigo_ibge": 3548054,
                "nome": "Santo Antônio do Aracanguá"
            },
            {
                "codigo_ibge": 3548104,
                "nome": "Santo Antônio do Jardim"
            },
            {
                "codigo_ibge": 3548203,
                "nome": "Santo Antônio do Pinhal"
            },
            {
                "codigo_ibge": 3548302,
                "nome": "Santo Expedito"
            },
            {
                "codigo_ibge": 3548401,
                "nome": "Santópolis do Aguapeí"
            },
            {
                "codigo_ibge": 3548500,
                "nome": "Santos"
            },
            {
                "codigo_ibge": 3548609,
                "nome": "São Bento do Sapucaí"
            },
            {
                "codigo_ibge": 3548708,
                "nome": "São Bernardo do Campo"
            },
            {
                "codigo_ibge": 3548807,
                "nome": "São Caetano do Sul"
            },
            {
                "codigo_ibge": 3548906,
                "nome": "São Carlos"
            },
            {
                "codigo_ibge": 3549003,
                "nome": "São Francisco"
            },
            {
                "codigo_ibge": 3549102,
                "nome": "São João da Boa Vista"
            },
            {
                "codigo_ibge": 3549201,
                "nome": "São João das Duas Pontes"
            },
            {
                "codigo_ibge": 3549250,
                "nome": "São João de Iracema"
            },
            {
                "codigo_ibge": 3549300,
                "nome": "São João do Pau d'Alho"
            },
            {
                "codigo_ibge": 3549409,
                "nome": "São Joaquim da Barra"
            },
            {
                "codigo_ibge": 3549508,
                "nome": "São José da Bela Vista"
            },
            {
                "codigo_ibge": 3549607,
                "nome": "São José do Barreiro"
            },
            {
                "codigo_ibge": 3549706,
                "nome": "São José do Rio Pardo"
            },
            {
                "codigo_ibge": 3549805,
                "nome": "São José do Rio Preto"
            },
            {
                "codigo_ibge": 3549904,
                "nome": "São José dos Campos"
            },
            {
                "codigo_ibge": 3549953,
                "nome": "São Lourenço da Serra"
            },
            {
                "codigo_ibge": 3550001,
                "nome": "São Luiz do Paraitinga"
            },
            {
                "codigo_ibge": 3550100,
                "nome": "São Manuel"
            },
            {
                "codigo_ibge": 3550209,
                "nome": "São Miguel Arcanjo"
            },
            {
                "codigo_ibge": 3550308,
                "nome": "São Paulo"
            },
            {
                "codigo_ibge": 3550407,
                "nome": "São Pedro"
            },
            {
                "codigo_ibge": 3550506,
                "nome": "São Pedro do Turvo"
            },
            {
                "codigo_ibge": 3550605,
                "nome": "São Roque"
            },
            {
                "codigo_ibge": 3550704,
                "nome": "São Sebastião"
            },
            {
                "codigo_ibge": 3550803,
                "nome": "São Sebastião da Grama"
            },
            {
                "codigo_ibge": 3550902,
                "nome": "São Simão"
            },
            {
                "codigo_ibge": 3551009,
                "nome": "São Vicente"
            },
            {
                "codigo_ibge": 3551108,
                "nome": "Sarapuí"
            },
            {
                "codigo_ibge": 3551207,
                "nome": "Sarutaiá"
            },
            {
                "codigo_ibge": 3551306,
                "nome": "Sebastianópolis do Sul"
            },
            {
                "codigo_ibge": 3551405,
                "nome": "Serra Azul"
            },
            {
                "codigo_ibge": 3551603,
                "nome": "Serra Negra"
            },
            {
                "codigo_ibge": 3551504,
                "nome": "Serrana"
            },
            {
                "codigo_ibge": 3551702,
                "nome": "Sertãozinho"
            },
            {
                "codigo_ibge": 3551801,
                "nome": "Sete Barras"
            },
            {
                "codigo_ibge": 3551900,
                "nome": "Severínia"
            },
            {
                "codigo_ibge": 3552007,
                "nome": "Silveiras"
            },
            {
                "codigo_ibge": 3552106,
                "nome": "Socorro"
            },
            {
                "codigo_ibge": 3552205,
                "nome": "Sorocaba"
            },
            {
                "codigo_ibge": 3552304,
                "nome": "Sud Mennucci"
            },
            {
                "codigo_ibge": 3552403,
                "nome": "Sumaré"
            },
            {
                "codigo_ibge": 3552551,
                "nome": "Suzanápolis"
            },
            {
                "codigo_ibge": 3552502,
                "nome": "Suzano"
            },
            {
                "codigo_ibge": 3552601,
                "nome": "Tabapuã"
            },
            {
                "codigo_ibge": 3552700,
                "nome": "Tabatinga"
            },
            {
                "codigo_ibge": 3552809,
                "nome": "Taboão da Serra"
            },
            {
                "codigo_ibge": 3552908,
                "nome": "Taciba"
            },
            {
                "codigo_ibge": 3553005,
                "nome": "Taguaí"
            },
            {
                "codigo_ibge": 3553104,
                "nome": "Taiaçu"
            },
            {
                "codigo_ibge": 3553203,
                "nome": "Taiúva"
            },
            {
                "codigo_ibge": 3553302,
                "nome": "Tambaú"
            },
            {
                "codigo_ibge": 3553401,
                "nome": "Tanabi"
            },
            {
                "codigo_ibge": 3553500,
                "nome": "Tapiraí"
            },
            {
                "codigo_ibge": 3553609,
                "nome": "Tapiratiba"
            },
            {
                "codigo_ibge": 3553658,
                "nome": "Taquaral"
            },
            {
                "codigo_ibge": 3553708,
                "nome": "Taquaritinga"
            },
            {
                "codigo_ibge": 3553807,
                "nome": "Taquarituba"
            },
            {
                "codigo_ibge": 3553856,
                "nome": "Taquarivaí"
            },
            {
                "codigo_ibge": 3553906,
                "nome": "Tarabai"
            },
            {
                "codigo_ibge": 3553955,
                "nome": "Tarumã"
            },
            {
                "codigo_ibge": 3554003,
                "nome": "Tatuí"
            },
            {
                "codigo_ibge": 3554102,
                "nome": "Taubaté"
            },
            {
                "codigo_ibge": 3554201,
                "nome": "Tejupá"
            },
            {
                "codigo_ibge": 3554300,
                "nome": "Teodoro Sampaio"
            },
            {
                "codigo_ibge": 3554409,
                "nome": "Terra Roxa"
            },
            {
                "codigo_ibge": 3554508,
                "nome": "Tietê"
            },
            {
                "codigo_ibge": 3554607,
                "nome": "Timburi"
            },
            {
                "codigo_ibge": 3554656,
                "nome": "Torre de Pedra"
            },
            {
                "codigo_ibge": 3554706,
                "nome": "Torrinha"
            },
            {
                "codigo_ibge": 3554755,
                "nome": "Trabiju"
            },
            {
                "codigo_ibge": 3554805,
                "nome": "Tremembé"
            },
            {
                "codigo_ibge": 3554904,
                "nome": "Três Fronteiras"
            },
            {
                "codigo_ibge": 3554953,
                "nome": "Tuiuti"
            },
            {
                "codigo_ibge": 3555000,
                "nome": "Tupã"
            },
            {
                "codigo_ibge": 3555109,
                "nome": "Tupi Paulista"
            },
            {
                "codigo_ibge": 3555208,
                "nome": "Turiúba"
            },
            {
                "codigo_ibge": 3555307,
                "nome": "Turmalina"
            },
            {
                "codigo_ibge": 3555356,
                "nome": "Ubarana"
            },
            {
                "codigo_ibge": 3555406,
                "nome": "Ubatuba"
            },
            {
                "codigo_ibge": 3555505,
                "nome": "Ubirajara"
            },
            {
                "codigo_ibge": 3555604,
                "nome": "Uchoa"
            },
            {
                "codigo_ibge": 3555703,
                "nome": "União Paulista"
            },
            {
                "codigo_ibge": 3555802,
                "nome": "Urânia"
            },
            {
                "codigo_ibge": 3555901,
                "nome": "Uru"
            },
            {
                "codigo_ibge": 3556008,
                "nome": "Urupês"
            },
            {
                "codigo_ibge": 3556107,
                "nome": "Valentim Gentil"
            },
            {
                "codigo_ibge": 3556206,
                "nome": "Valinhos"
            },
            {
                "codigo_ibge": 3556305,
                "nome": "Valparaíso"
            },
            {
                "codigo_ibge": 3556354,
                "nome": "Vargem"
            },
            {
                "codigo_ibge": 3556404,
                "nome": "Vargem Grande do Sul"
            },
            {
                "codigo_ibge": 3556453,
                "nome": "Vargem Grande Paulista"
            },
            {
                "codigo_ibge": 3556503,
                "nome": "Várzea Paulista"
            },
            {
                "codigo_ibge": 3556602,
                "nome": "Vera Cruz"
            },
            {
                "codigo_ibge": 3556701,
                "nome": "Vinhedo"
            },
            {
                "codigo_ibge": 3556800,
                "nome": "Viradouro"
            },
            {
                "codigo_ibge": 3556909,
                "nome": "Vista Alegre do Alto"
            },
            {
                "codigo_ibge": 3556958,
                "nome": "Vitória Brasil"
            },
            {
                "codigo_ibge": 3557006,
                "nome": "Votorantim"
            },
            {
                "codigo_ibge": 3557105,
                "nome": "Votuporanga"
            },
            {
                "codigo_ibge": 3557154,
                "nome": "Zacarias"
            }
        ]
    },
    "TO": {
        "nome": "Tocantins",
        "municipios": [
            {
                "codigo_ibge": 1700251,
                "nome": "Abreulândia"
            },
            {
                "codigo_ibge": 1700301,
                "nome": "Aguiarnópolis"
            },
            {
                "codigo_ibge": 1700350,
                "nome": "Aliança do Tocantins"
            },
            {
                "codigo_ibge": 1700400,
                "nome": "Almas"
            },
            {
                "codigo_ibge": 1700707,
                "nome": "Alvorada"
            },
            {
                "codigo_ibge": 1701002,
                "nome": "Ananás"
            },
            {
                "codigo_ibge": 1701051,
                "nome": "Angico"
            },
            {
                "codigo_ibge": 1701101,
                "nome": "Aparecida do Rio Negro"
            },
            {
                "codigo_ibge": 1701309,
                "nome": "Aragominas"
            },
            {
                "codigo_ibge": 1701903,
                "nome": "Araguacema"
            },
            {
                "codigo_ibge": 1702000,
                "nome": "Araguaçu"
            },
            {
                "codigo_ibge": 1702109,
                "nome": "Araguaína"
            },
            {
                "codigo_ibge": 1702158,
                "nome": "Araguanã"
            },
            {
                "codigo_ibge": 1702208,
                "nome": "Araguatins"
            },
            {
                "codigo_ibge": 1702307,
                "nome": "Arapoema"
            },
            {
                "codigo_ibge": 1702406,
                "nome": "Arraias"
            },
            {
                "codigo_ibge": 1702554,
                "nome": "Augustinópolis"
            },
            {
                "codigo_ibge": 1702703,
                "nome": "Aurora do Tocantins"
            },
            {
                "codigo_ibge": 1702901,
                "nome": "Axixá do Tocantins"
            },
            {
                "codigo_ibge": 1703008,
                "nome": "Babaçulândia"
            },
            {
                "codigo_ibge": 1703057,
                "nome": "Bandeirantes do Tocantins"
            },
            {
                "codigo_ibge": 1703073,
                "nome": "Barra do Ouro"
            },
            {
                "codigo_ibge": 1703107,
                "nome": "Barrolândia"
            },
            {
                "codigo_ibge": 1703206,
                "nome": "Bernardo Sayão"
            },
            {
                "codigo_ibge": 1703305,
                "nome": "Bom Jesus do Tocantins"
            },
            {
                "codigo_ibge": 1703602,
                "nome": "Brasilândia do Tocantins"
            },
            {
                "codigo_ibge": 1703701,
                "nome": "Brejinho de Nazaré"
            },
            {
                "codigo_ibge": 1703800,
                "nome": "Buriti do Tocantins"
            },
            {
                "codigo_ibge": 1703826,
                "nome": "Cachoeirinha"
            },
            {
                "codigo_ibge": 1703842,
                "nome": "Campos Lindos"
            },
            {
                "codigo_ibge": 1703867,
                "nome": "Cariri do Tocantins"
            },
            {
                "codigo_ibge": 1703883,
                "nome": "Carmolândia"
            },
            {
                "codigo_ibge": 1703891,
                "nome": "Carrasco Bonito"
            },
            {
                "codigo_ibge": 1703909,
                "nome": "Caseara"
            },
            {
                "codigo_ibge": 1704105,
                "nome": "Centenário"
            },
            {
                "codigo_ibge": 1705102,
                "nome": "Chapada da Natividade"
            },
            {
                "codigo_ibge": 1704600,
                "nome": "Chapada de Areia"
            },
            {
                "codigo_ibge": 1705508,
                "nome": "Colinas do Tocantins"
            },
            {
                "codigo_ibge": 1716703,
                "nome": "Colméia"
            },
            {
                "codigo_ibge": 1705557,
                "nome": "Combinado"
            },
            {
                "codigo_ibge": 1705607,
                "nome": "Conceição do Tocantins"
            },
            {
                "codigo_ibge": 1706001,
                "nome": "Couto Magalhães"
            },
            {
                "codigo_ibge": 1706100,
                "nome": "Cristalândia"
            },
            {
                "codigo_ibge": 1706258,
                "nome": "Crixás do Tocantins"
            },
            {
                "codigo_ibge": 1706506,
                "nome": "Darcinópolis"
            },
            {
                "codigo_ibge": 1707009,
                "nome": "Dianópolis"
            },
            {
                "codigo_ibge": 1707108,
                "nome": "Divinópolis do Tocantins"
            },
            {
                "codigo_ibge": 1707207,
                "nome": "Dois Irmãos do Tocantins"
            },
            {
                "codigo_ibge": 1707306,
                "nome": "Dueré"
            },
            {
                "codigo_ibge": 1707405,
                "nome": "Esperantina"
            },
            {
                "codigo_ibge": 1707553,
                "nome": "Fátima"
            },
            {
                "codigo_ibge": 1707652,
                "nome": "Figueirópolis"
            },
            {
                "codigo_ibge": 1707702,
                "nome": "Filadélfia"
            },
            {
                "codigo_ibge": 1708205,
                "nome": "Formoso do Araguaia"
            },
            {
                "codigo_ibge": 1708254,
                "nome": "Fortaleza do Tabocão"
            },
            {
                "codigo_ibge": 1708304,
                "nome": "Goianorte"
            },
            {
                "codigo_ibge": 1709005,
                "nome": "Goiatins"
            },
            {
                "codigo_ibge": 1709302,
                "nome": "Guaraí"
            },
            {
                "codigo_ibge": 1709500,
                "nome": "Gurupi"
            },
            {
                "codigo_ibge": 1709807,
                "nome": "Ipueiras"
            },
            {
                "codigo_ibge": 1710508,
                "nome": "Itacajá"
            },
            {
                "codigo_ibge": 1710706,
                "nome": "Itaguatins"
            },
            {
                "codigo_ibge": 1710904,
                "nome": "Itapiratins"
            },
            {
                "codigo_ibge": 1711100,
                "nome": "Itaporã do Tocantins"
            },
            {
                "codigo_ibge": 1711506,
                "nome": "Jaú do Tocantins"
            },
            {
                "codigo_ibge": 1711803,
                "nome": "Juarina"
            },
            {
                "codigo_ibge": 1711902,
                "nome": "Lagoa da Confusão"
            },
            {
                "codigo_ibge": 1711951,
                "nome": "Lagoa do Tocantins"
            },
            {
                "codigo_ibge": 1712009,
                "nome": "Lajeado"
            },
            {
                "codigo_ibge": 1712157,
                "nome": "Lavandeira"
            },
            {
                "codigo_ibge": 1712405,
                "nome": "Lizarda"
            },
            {
                "codigo_ibge": 1712454,
                "nome": "Luzinópolis"
            },
            {
                "codigo_ibge": 1712504,
                "nome": "Marianópolis do Tocantins"
            },
            {
                "codigo_ibge": 1712702,
                "nome": "Mateiros"
            },
            {
                "codigo_ibge": 1712801,
                "nome": "Maurilândia do Tocantins"
            },
            {
                "codigo_ibge": 1713205,
                "nome": "Miracema do Tocantins"
            },
            {
                "codigo_ibge": 1713304,
                "nome": "Miranorte"
            },
            {
                "codigo_ibge": 1713601,
                "nome": "Monte do Carmo"
            },
            {
                "codigo_ibge": 1713700,
                "nome": "Monte Santo do Tocantins"
            },
            {
                "codigo_ibge": 1713957,
                "nome": "Muricilândia"
            },
            {
                "codigo_ibge": 1714203,
                "nome": "Natividade"
            },
            {
                "codigo_ibge": 1714302,
                "nome": "Nazaré"
            },
            {
                "codigo_ibge": 1714880,
                "nome": "Nova Olinda"
            },
            {
                "codigo_ibge": 1715002,
                "nome": "Nova Rosalândia"
            },
            {
                "codigo_ibge": 1715101,
                "nome": "Novo Acordo"
            },
            {
                "codigo_ibge": 1715150,
                "nome": "Novo Alegre"
            },
            {
                "codigo_ibge": 1715259,
                "nome": "Novo Jardim"
            },
            {
                "codigo_ibge": 1715507,
                "nome": "Oliveira de Fátima"
            },
            {
                "codigo_ibge": 1721000,
                "nome": "Palmas"
            },
            {
                "codigo_ibge": 1715705,
                "nome": "Palmeirante"
            },
            {
                "codigo_ibge": 1713809,
                "nome": "Palmeiras do Tocantins"
            },
            {
                "codigo_ibge": 1715754,
                "nome": "Palmeirópolis"
            },
            {
                "codigo_ibge": 1716109,
                "nome": "Paraíso do Tocantins"
            },
            {
                "codigo_ibge": 1716208,
                "nome": "Paranã"
            },
            {
                "codigo_ibge": 1716307,
                "nome": "Pau D'Arco"
            },
            {
                "codigo_ibge": 1716505,
                "nome": "Pedro Afonso"
            },
            {
                "codigo_ibge": 1716604,
                "nome": "Peixe"
            },
            {
                "codigo_ibge": 1716653,
                "nome": "Pequizeiro"
            },
            {
                "codigo_ibge": 1717008,
                "nome": "Pindorama do Tocantins"
            },
            {
                "codigo_ibge": 1717206,
                "nome": "Piraquê"
            },
            {
                "codigo_ibge": 1717503,
                "nome": "Pium"
            },
            {
                "codigo_ibge": 1717800,
                "nome": "Ponte Alta do Bom Jesus"
            },
            {
                "codigo_ibge": 1717909,
                "nome": "Ponte Alta do Tocantins"
            },
            {
                "codigo_ibge": 1718006,
                "nome": "Porto Alegre do Tocantins"
            },
            {
                "codigo_ibge": 1718204,
                "nome": "Porto Nacional"
            },
            {
                "codigo_ibge": 1718303,
                "nome": "Praia Norte"
            },
            {
                "codigo_ibge": 1718402,
                "nome": "Presidente Kennedy"
            },
            {
                "codigo_ibge": 1718451,
                "nome": "Pugmil"
            },
            {
                "codigo_ibge": 1718501,
                "nome": "Recursolândia"
            },
            {
                "codigo_ibge": 1718550,
                "nome": "Riachinho"
            },
            {
                "codigo_ibge": 1718659,
                "nome": "Rio da Conceição"
            },
            {
                "codigo_ibge": 1718709,
                "nome": "Rio dos Bois"
            },
            {
                "codigo_ibge": 1718758,
                "nome": "Rio Sono"
            },
            {
                "codigo_ibge": 1718808,
                "nome": "Sampaio"
            },
            {
                "codigo_ibge": 1718840,
                "nome": "Sandolândia"
            },
            {
                "codigo_ibge": 1718865,
                "nome": "Santa Fé do Araguaia"
            },
            {
                "codigo_ibge": 1718881,
                "nome": "Santa Maria do Tocantins"
            },
            {
                "codigo_ibge": 1718899,
                "nome": "Santa Rita do Tocantins"
            },
            {
                "codigo_ibge": 1718907,
                "nome": "Santa Rosa do Tocantins"
            },
            {
                "codigo_ibge": 1719004,
                "nome": "Santa Tereza do Tocantins"
            },
            {
                "codigo_ibge": 1720002,
                "nome": "Santa Terezinha do Tocantins"
            },
            {
                "codigo_ibge": 1720101,
                "nome": "São Bento do Tocantins"
            },
            {
                "codigo_ibge": 1720150,
                "nome": "São Félix do Tocantins"
            },
            {
                "codigo_ibge": 1720200,
                "nome": "São Miguel do Tocantins"
            },
            {
                "codigo_ibge": 1720259,
                "nome": "São Salvador do Tocantins"
            },
            {
                "codigo_ibge": 1720309,
                "nome": "São Sebastião do Tocantins"
            },
            {
                "codigo_ibge": 1720499,
                "nome": "São Valério"
            },
            {
                "codigo_ibge": 1720655,
                "nome": "Silvanópolis"
            },
            {
                "codigo_ibge": 1720804,
                "nome": "Sítio Novo do Tocantins"
            },
            {
                "codigo_ibge": 1720853,
                "nome": "Sucupira"
            },
            {
                "codigo_ibge": 1720903,
                "nome": "Taguatinga"
            },
            {
                "codigo_ibge": 1720937,
                "nome": "Taipas do Tocantins"
            },
            {
                "codigo_ibge": 1720978,
                "nome": "Talismã"
            },
            {
                "codigo_ibge": 1721109,
                "nome": "Tocantínia"
            },
            {
                "codigo_ibge": 1721208,
                "nome": "Tocantinópolis"
            },
            {
                "codigo_ibge": 1721257,
                "nome": "Tupirama"
            },
            {
                "codigo_ibge": 1721307,
                "nome": "Tupiratins"
            },
            {
                "codigo_ibge": 1722081,
                "nome": "Wanderlândia"
            },
            {
                "codigo_ibge": 1722107,
                "nome": "Xambioá"
            }
        ]
    }
};

for (let uf in ufs) {
    let municipios = ufs[uf].municipios;
    ufs[uf].municipioCodes = {};

    // Itera pelos municípios de cada UF e adiciona ao mapa
    municipios.forEach(municipio => {
        ufs[uf].municipioCodes[municipio.nome] = municipio.codigo_ibge;
    });
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: utils-v1.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let plans = {
    'BASIC': 'Basic',
    'VIP': 'Vip'
};

function getPlan() {
    let target_plan = getParameterByName('plano');
    if (target_plan) {
        target_plan = target_plan.toUpperCase();
    }
    return target_plan;
}

function getNext() {
    let next = getParameterByName('next');
    let url = window.dashboardURL;
    if (next && next.trim().length > 0) {
        if (url.endsWith('/')) {
            url += next;

        } else {
            url += '/' + next;

        }
    }
    return url;
}

function redirectToNext() {
    let url = getNext();
    setTimeout(() => document.location.href = url, 2000);
}

function validateName(name) {
    if (!name || name.trim().length < 10) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

function validateCPFCNPJ(cpf_cnpj) {
    const cleanDocument = cpf_cnpj.replace(/\D/g, '');
    if (cleanDocument.length === 11) {
        return validateCPF(cpf_cnpj);
    } else if (cleanDocument.length === 14) {
        return validateCNPJ(cpf_cnpj);
    } else {
        return false;
    }
}

function validateCPF(cpf) {
    // Check if the input consists of only numbers or a properly formatted CPF (XXX.XXX.XXX-XX)
    if (!/^\d{11}$/.test(cpf) && !/^\d{3}(\.\d{3}){2}-\d{2}$/.test(cpf)) {
        return false;
    }

    cpf = cpf.replace(/\D/g, ''); // Remove any non-numeric characters (dots, hyphens)

    // Check if CPF has 11 digits and is not composed of all identical digits
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    // Function to calculate the verification digit
    const calcDigit = (cpf, pos) => {
        let sum = 0, multiplier = pos;
        for (let i = 0; i < pos - 1; i++) sum += cpf[i] * multiplier--;
        return (sum % 11 < 2) ? 0 : 11 - (sum % 11);
    };

    // Validate the two verification digits
    if (parseInt(cpf[9]) !== calcDigit(cpf, 10) || parseInt(cpf[10]) !== calcDigit(cpf, 11)) return false;

    return true;
}

function validateCNPJ(cnpj) {
    // Check if the input is either numeric (14 digits) or in the correct format (XX.XXX.XXX/XXXX-XX)
    if (!/^\d{14}$/.test(cnpj) && !/^\d{2}(\.\d{3}){2}\/\d{4}-\d{2}$/.test(cnpj)) {
        return false;
    }

    cnpj = cnpj.replace(/\D/g, ''); // Remove non-numeric characters (dots, slashes, hyphens)

    // Check if CNPJ has 14 digits and is not composed of all identical digits
    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

    // Function to calculate the verification digit
    const calcDigit = (cnpj, weights) => {
        let sum = 0;
        for (let i = 0; i < weights.length; i++) {
            sum += cnpj[i] * weights[i];
        }
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    // Weights for the first and second check digits
    const firstDigitWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondDigitWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    // Validate the two check digits
    const firstCheckDigit = calcDigit(cnpj, firstDigitWeights);
    const secondCheckDigit = calcDigit(cnpj, secondDigitWeights);

    if (parseInt(cnpj[12]) !== firstCheckDigit || parseInt(cnpj[13]) !== secondCheckDigit) return false;

    return true;
}

function validateAddress(address) {
    if (!address || address.trim().length < 5) {
        return false;
    }
    return true;
}

function validateAddressNumber(address_number) {
    if (!address || address_number.trim().length < 1 || Number(address_number) < 0) {
        return false;
    }
    return true;
}

function validateNeighborhood(neighborhood) {
    if (!neighborhood || neighborhood.trim().length < 3) {
        return false;
    }
    return true;
}

function validateCEP(cep) {
    if (!/^\d{8}$/.test(cep) && !/^\d{5}-\d{3}$/.test(cep)) {
        return false;
    }

    if (/^\d{5}-\d{3}$/.test(cep)) {
        return true;
    }

    return true;
}

function validatePhone(phoneNumber) {
    // Regex for validating phone numbers
    const regex = /^(\(\d+\))?[\d\s\-]+(\d)$/;

    // Test if the input phone number matches the regex
    if (!regex.test(phoneNumber)) {
        return false;
    }

    phoneNumber = '+' + intl.getSelectedCountryData().dialCode + phoneNumber;

    return intlTelInputUtils.isValidNumber(
        phoneNumber,
        null,
        intlTelInputUtils.numberFormat.INTERNATIONAL
    );
}

function validateCreditCard(number) {
    number = number.replace(/\D/g, '');

    if (number.length < 13 || number.length > 19) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

function formatCPFCNPJ(cpf_cnpj) {
    if (cpf_cnpj.length <= 11) {
        return cpf_cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    } else {
        return cpf_cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
    }
}

function isEmpty(str) {
    if (!str || str.trim().length === 0) {
        return true;
    }
    return false;
}


function popupWindow(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

function dataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
}

function getImage(dataUrl) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = dataUrl;
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (el, err) => {
            reject(err.error);
        };
    });
}

async function downscaleImage(
    dataUrl,
    imageType,  // e.g. 'image/jpeg'
    resolution,  // max width/height in pixels
    quality   // e.g. 0.9 = 90% quality
) {

    // Create a temporary image so that we can compute the height of the image.
    const image = await this.getImage(dataUrl);
    const oldWidth = image.naturalWidth;
    const oldHeight = image.naturalHeight;

    const longestDimension = oldWidth > oldHeight ? 'width' : 'height';
    const currentRes = longestDimension == 'width' ? oldWidth : oldHeight;

    // Calculate new dimensions
    const newSize = longestDimension == 'width'
        ? Math.floor(oldHeight / oldWidth * resolution)
        : Math.floor(oldWidth / oldHeight * resolution);
    const newWidth = longestDimension == 'width' ? resolution : newSize;
    const newHeight = longestDimension == 'height' ? resolution : newSize;

    // Create a temporary canvas to draw the downscaled image on.
    const canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the downscaled image on the canvas and return the new data URL.
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, newWidth, newHeight);
    const newDataUrl = canvas.toDataURL(imageType, quality);
    return newDataUrl;
}
