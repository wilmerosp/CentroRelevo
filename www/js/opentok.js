/*
  OpenTok JavaScript Library v2.2.9.5
 http://www.tokbox.com/

 Copyright (c) 2014 TokBox, Inc.

 Date: November 18 04:18:12 2014
  Common JS Helpers on OpenTok 0.2.0 3fa583f master
 http://www.tokbox.com/

 Copyright (c) 2014 TokBox, Inc.

 Date: August 08 12:31:42 2014

  TB Plugin 0.4.0.8 ec4bf97 HEAD
 http://www.tokbox.com/

 Copyright (c) 2014 TokBox, Inc.

 Date: November 18 04:18:25 2014

  Copyright 2014 Joshua Bell

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Original source: https://github.com/inexorabletash/text-encoding
*/
(function (b) {
	b.OT || (b.OT = {});
	OT.properties = {
		version: "v2.2.9.5",
		build: "ec4bf97",
		debug: "false",
		websiteURL: "http://www.tokbox.com",
		cdnURL: "http://static.opentok.com",
		loggingURL: "http://hlg.tokbox.com/prod",
		apiURL: "http://anvil.opentok.com",
		messagingProtocol: "wss",
		messagingPort: 443,
		supportSSL: "true",
		cdnURLSSL: "https://static.opentok.com",
		loggingURLSSL: "https://hlg.tokbox.com/prod",
		apiURLSSL: "https://anvil.opentok.com",
		minimumVersion: {
			firefox: parseFloat("29"),
			chrome: parseFloat("34")
		}
	}
})(window);
!
function (b, a) {
	var d = function (a) {
		return document.getElementById(a)
	},
		l = b.OTHelpers;
	b.OTHelpers = d;
	b.___othelpers = !0;
	d.keys = Object.keys ||
	function (a) {
		var c = [],
			e = Object.prototype.hasOwnProperty,
			b;
		for (b in a) e.call(a, b) && c.push(b);
		return c
	};
	var c = Array.prototype.forEach ||
	function (a, c) {
		for (var e = 0, b = this.length || 0; e < b; ++e) e in this && a.call(c, this[e], e)
	};
	d.forEach = function (a, e, b) {
		return c.call(a, e, b)
	};
	var k = Array.prototype.map ||
	function (a, e) {
		var b = [];
		c.call(this, function (c, f) {
			b.push(a.call(e, c, f))
		});
		return b
	};
	d.map = function (a, c) {
		return k.call(a, c)
	};
	var f = Array.prototype.filter ||
	function (a, e) {
		var b = [];
		c.call(this, function (c, f) {
			a.call(e, c, f) && b.push(c)
		});
		return b
	};
	d.filter = function (a, c, e) {
		return f.call(a, c, e)
	};
	var g = Array.prototype.some ||
	function (a, c) {
		for (var e = !1, b = 0, f = this.length || 0; b < f; ++b) if (b in this && a.call(c, this[b], b)) {
			e = !0;
			break
		}
		return e
	};
	d.some = function (a, c, e) {
		return g.call(a, c, e)
	};
	var h = Array.prototype.indexOf ||
	function (a, c) {
		var e;
		e = c ? c : 0;
		var b;
		if (!this) throw new TypeError;
		b = this.length;
		if (0 === b || e >= b) return -1;
		for (0 > e && (e = b - Math.abs(e)); e < b; e++) if (this[e] === a) return e;
		return -1
	};
	d.arrayIndexOf = function (a, c, e) {
		return h.call(a, c, e)
	};
	var m = Function.prototype.bind ||
	function () {
		var a = Array.prototype.slice.call(arguments),
			c = a.shift(),
			e = this;
		return function () {
			return e.apply(c, a.concat(Array.prototype.slice.call(arguments)))
		}
	};
	d.bind = function () {
		var a = Array.prototype.slice.call(arguments),
			c = a.shift();
		return m.apply(c, a)
	};
	var e = String.prototype.trim ||
	function () {
		return this.replace(/^\s+|\s+$/g, "")
	};
	d.trim = function (a) {
		return e.call(a)
	};
	d.noConflict = function () {
		d.noConflict = function () {
			return d
		};
		b.OTHelpers = l;
		return d
	};
	d.isNone = function (c) {
		return c === a || null === c
	};
	d.isObject = function (a) {
		return a === Object(a)
	};
	d.isFunction = function (a) {
		return !!a && (-1 !== a.toString().indexOf("()") || "[object Function]" === Object.prototype.toString.call(a))
	};
	d.isArray = d.isFunction(Array.isArray) && Array.isArray ||
	function (a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	};
	d.isEmpty = function (c) {
		if (null === c || c === a) return !0;
		if (d.isArray(c) || "string" === typeof c) return 0 === c.length;
		for (var e in c) if (c.hasOwnProperty(e)) return !1;
		return !0
	};
	d.extend = function () {
		var a = Array.prototype.slice.call(arguments),
			c = a.shift();
		d.forEach(a, function (a) {
			for (var e in a) c[e] = a[e]
		});
		return c
	};
	d.defaults = function () {
		var a = Array.prototype.slice.call(arguments),
			c = a.shift();
		d.forEach(a, function (a) {
			for (var e in a) void 0 === c[e] && (c[e] = a[e])
		});
		return c
	};
	d.clone = function (a) {
		return !d.isObject(a) ? a : d.isArray(a) ? a.slice() : d.extend({}, a)
	};
	d.noop =

	function () {};
	d.now = function () {
		var a = b.performance || {},
			c, e = a.now || a.mozNow || a.msNow || a.oNow || a.webkitNow;
		return e ? (e = d.bind(e, a), c = a.timing.navigationStart, function () {
			return c + e()
		}) : function () {
			return (new Date).getTime()
		}
	}();
	var n = function () {
		var a = b.navigator.userAgent.toLowerCase(),
			c = b.navigator.appName,
			e, f = "unknown",
			k = -1;
		if (-1 < a.indexOf("opera") || -1 < a.indexOf("opr")) f = "Opera", null !== /opr\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (k = parseFloat(RegExp.$1));
		else if (-1 < a.indexOf("firefox")) f = "Firefox", null !== /firefox\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (k = parseFloat(RegExp.$1));
		else if ("Microsoft Internet Explorer" === c) f = "IE", null !== /msie ([0-9]{1,}[\.0-9]{0,})/.exec(a) && (k = parseFloat(RegExp.$1));
		else if ("Netscape" === c && -1 < a.indexOf("trident")) f = "IE", null !== /trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(a) && (k = parseFloat(RegExp.$1));
		else if (-1 < a.indexOf("chrome")) f = "Chrome", null !== /chrome\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (k = parseFloat(RegExp.$1));
		else if ((e = b.navigator.vendor) && -1 < e.toLowerCase().indexOf("apple")) f = "Safari", null !== /version\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (k = parseFloat(RegExp.$1));
		return {
			browser: f,
			version: k,
			iframeNeedsLoad: 0 > a.indexOf("webkit")
		}
	}();
	d.browser = function () {
		return n.browser
	};
	d.browserVersion = function () {
		return n
	};
	d.canDefineProperty = !0;
	try {
		Object.defineProperty({}, "x", {})
	} catch (q) {
		d.canDefineProperty = !1
	}
	d.defineGetters = function (a, c, e) {
		var b = {};
		void 0 === e && (e = !1);
		for (var f in c) b[f] = {
			get: c[f],
			enumerable: e
		};
		d.defineProperties(a, b)
	};
	var r = function (a, c, e) {
		return c && !e ?
		function () {
			return c.call(a)
		} : c && e ?
		function (b) {
			void 0 !== b && e.call(a, b);
			return c.call(a)
		} : function (c) {
			void 0 !== c && e.call(a, c)
		}
	};
	d.defineProperties = function (a, c) {
		for (var e in c) a[e] = r(a, c[e].get, c[e].set)
	};
	Object.create || (Object.create = function (a) {
		function c() {}
		if (1 < arguments.length) throw Error("Object.create implementation only accepts the first parameter.");
		c.prototype = a;
		return new c
	});
	d.setCookie = function (a, c) {
		try {
			localStorage.setItem(a, c)
		} catch (e) {
			var b = new Date;
			b.setTime(b.getTime() + 31536E6);
			b = "; expires\x3d" + b.toGMTString();
			document.cookie = a + "\x3d" + c + b + "; path\x3d/"
		}
	};
	d.getCookie = function (a) {
		var c;
		try {
			return c = localStorage.getItem("opentok_client_id")
		} catch (e) {
			a += "\x3d";
			for (var b = document.cookie.split(";"), f = 0; f < b.length; f++) {
				for (var k = b[f];
				" " === k.charAt(0);) k = k.substring(1, k.length);
				0 === k.indexOf(a) && (c = k.substring(a.length, k.length))
			}
			if (c) return c
		}
		return null
	};
	d.invert = function (a) {
		var c = {},
			e;
		for (e in a) a.hasOwnProperty(e) && (c[a[e]] = e);
		return c
	};
	var p = {
		escape: {
			"\x26": "\x26amp;",
			"\x3c": "\x26lt;",
			"\x3e": "\x26gt;",
			'"': "\x26quot;",
			"'": "\x26#x27;",
			"/": "\x26#x2F;"
		}
	};
	p.unescape = d.invert(p.escape);
	var t = {
		escape: RegExp("[" + d.keys(p.escape).join("") + "]", "g"),
		unescape: RegExp("(" + d.keys(p.unescape).join("|") + ")", "g")
	};
	d.forEach(["escape", "unescape"], function (c) {
		d[c] = function (e) {
			return null === e || e === a ? "" : ("" + e).replace(t[c], function (a) {
				return p[c][a]
			})
		}
	});
	d.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var v = /(.)^/,
		s = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\t": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		u = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	d.template = function (a, c, e) {
		var b;
		e = d.defaults({}, e, d.templateSettings);
		var f = RegExp([(e.escape || v).source, (e.interpolate || v).source, (e.evaluate || v).source].join("|") + "|$", "g"),
			k = 0,
			g = "__p+\x3d'";
		a.replace(f, function (c, e, b, f, h) {
			g += a.slice(k, h).replace(u, function (a) {
				return "\\" + s[a]
			});
			e && (g += "'+\n((__t\x3d(" + e + "))\x3d\x3dnull?'':OTHelpers.escape(__t))+\n'");
			b && (g += "'+\n((__t\x3d(" + b + "))\x3d\x3dnull?'':__t)+\n'");
			f && (g += "';\n" + f + "\n__p+\x3d'");
			k = h + c.length;
			return c
		});
		g += "';\n";
		e.variable || (g = "with(obj||{}){\n" + g + "}\n");
		g = "var __t,__p\x3d'',__j\x3dArray.prototype.join,print\x3dfunction(){__p+\x3d__j.call(arguments,'');};\n" + g + "return __p;\n";
		try {
			b = new Function(e.variable || "obj", g)
		} catch (h) {
			throw h.source = g, h;
		}
		if (c) return b(c);
		c = function (a) {
			return b.call(this, a)
		};
		c.source = "function(" + (e.variable || "obj") + "){\n" + g + "}";
		return c
	}
}(window);
(function (b, a, d) {
	a.statable = function (b, c, k, f, g) {
		var h, d = b.currentState = k;
		b.is = function () {
			return -1 !== a.arrayIndexOf(arguments, d)
		};
		b.isNot = function () {
			return -1 === a.arrayIndexOf(arguments, d)
		};
		return function (e) {
			d !== e && (-1 === a.arrayIndexOf(c, e) ? g && a.isFunction(g) && g("invalidState", e) : (b.previousState = h = d, b.currentState = d = e, f && a.isFunction(f) && f(e, h)))
		}
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	function l(a, c) {
		var b = c || 0,
			f = e;
		return f[a[b++]] + f[a[b++]] + f[a[b++]] + f[a[b++]] + "-" + f[a[b++]] + f[a[b++]] + "-" + f[a[b++]] + f[a[b++]] + "-" + f[a[b++]] + f[a[b++]] + "-" + f[a[b++]] + f[a[b++]] + f[a[b++]] + f[a[b++]] + f[a[b++]] + f[a[b++]]
	}
	function c(a, c, e) {
		e = c && e || 0;
		"string" === typeof a && (c = "binary" === a ? new m(16) : null, a = null);
		a = a || {};
		a = a.random || (a.rng || h)();
		a[6] = a[6] & 15 | 64;
		a[8] = a[8] & 63 | 128;
		if (c) for (var b = 0; 16 > b; b++) c[e + b] = a[b];
		return c || l(a)
	}
	var k, f = Array(16);
	d = function () {
		for (var a, c = 0, c = 0; 16 > c; c++) 0 === (c & 3) && (a = 4294967296 * Math.random()), f[c] = a >>> ((c & 3) << 3) & 255;
		return f
	};
	if (b.crypto && crypto.getRandomValues) {
		var g = new Uint32Array(4);
		k = function () {
			crypto.getRandomValues(g);
			for (var a = 0; 16 > a; a++) f[a] = g[a >> 2] >>> 8 * (a & 3) & 255;
			return f
		}
	}
	var h = k || d,
		m = "function" === typeof Buffer ? Buffer : Array,
		e = [],
		n = {};
	for (b = 0; 256 > b; b++) e[b] = (b + 256).toString(16).substr(1), n[e[b]] = b;
	c.v4 = c;
	c.parse = function (a, c, e) {
		var b = c && e || 0,
			f = 0;
		c = c || [];
		for (a.toLowerCase().replace(/[0-9a-f]{2}/g, function (a) {
			16 > f && (c[b + f++] = n[a])
		}); 16 > f;) c[b + f++] =
		0;
		return c
	};
	c.unparse = l;
	c.BufferClass = m;
	c.mathRNG = d;
	c.whatwgRNG = k;
	a.uuid = c
})(window, window.OTHelpers);
(function (b, a, d) {
	a.useLogHelpers = function (d) {
		function c(a, c, f) {
			return function () {
				if (d.shouldLog(c)) {
					var h = b.console,
						n = q(arguments);
					if (h && h[a]) if (h[a].apply || e) h[a].apply || (h[a] = Function.prototype.bind.call(h[a], h)), h[a].apply(h, n);
					else h[a](n);
					else if (f) {
						f.apply(d, n);
						return
					}
					if (h = q(arguments)) h = g(h), 2 >= h.length || m.push([a, k(), h])
				}
			}
		}
		function k() {
			var a = new Date;
			return a.toLocaleTimeString() + a.getMilliseconds()
		}
		function f(a) {
			try {
				return JSON.stringify(a)
			} catch (c) {
				return a.toString()
			}
		}
		function g(c) {
			var e = [];
			if ("undefined" !== typeof c) if (null === c) e.push("NULL");
			else if (a.isArray(c)) for (var b = 0; b < c.length; ++b) e.push(f(c[b]));
			else if (a.isObject(c)) for (b in c) {
				var k;
				a.isFunction(c[b]) ? c.hasOwnProperty(b) && (k = "function " + b + "()") : k = f(c[b]);
				e.push(b + ": " + k)
			} else if (a.isFunction(c)) try {
				e.push(c.toString())
			} catch (d) {
				e.push("function()")
			} else e.push(c.toString());
			return e.join(", ")
		}
		d.DEBUG = 5;
		d.LOG = 4;
		d.INFO = 3;
		d.WARN = 2;
		d.ERROR = 1;
		d.NONE = 0;
		var h = d.NONE,
			m = [],
			e = !0;
		try {
			Function.prototype.bind.call(b.console.log, b.console)
		} catch (n) {
			e = !1
		}
		var q = function (a) {
			return a
		};
		"IE" === a.browser() && (q = function (a) {
			return [g(Array.prototype.slice.apply(a))]
		});
		d.log = c("log", d.LOG);
		d.debug = c("debug", d.DEBUG, d.log);
		d.info = c("info", d.INFO, d.log);
		d.warn = c("warn", d.WARN, d.log);
		d.error = c("error", d.ERROR, d.log);
		d.setLogLevel = function (a) {
			h = "number" === typeof a ? a : 0;
			d.debug("TB.setLogLevel(" + h + ")");
			return h
		};
		d.getLogs = function () {
			return m
		};
		d.shouldLog = function (a) {
			return h >= a
		}
	};
	a.useLogHelpers(a);
	a.setLogLevel(a.ERROR)
})(window, window.OTHelpers);
(function (b, a, d) {
	a.on = function (a, c, b) {
		if (a.addEventListener) a.addEventListener(c, b, !1);
		else if (a.attachEvent) a.attachEvent("on" + c, b);
		else {
			var f = a["on" + c];
			a["on" + c] = function () {
				b.apply(this, arguments);
				f && f.apply(this, arguments)
			}
		}
		return a
	};
	a.off = function (a, c, b) {
		a.removeEventListener ? a.removeEventListener(c, b, !1) : a.detachEvent && a.detachEvent("on" + c, b)
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	var l = "undefined" === typeof document || "complete" === document.readyState || "interactive" === document.readyState && document.body,
		c = [],
		k = [],
		f = !1,
		g = function () {
			l = !0;
			a.on(b, "unload", h);
			a.forEach(c, function (a) {
				a[0].call(a[1])
			});
			c = []
		},
		h = function () {
			f = !0;
			a.forEach(k, function (a) {
				a[0].call(a[1])
			});
			k = []
		};
	a.onDOMLoad = function (b, e) {
		a.isReady() ? b.call(e) : c.push([b, e])
	};
	a.onDOMUnload = function (a, c) {
		this.isDOMUnloaded() ? a.call(c) : k.push([a, c])
	};
	a.isReady = function () {
		return !f && l
	};
	a.isDOMUnloaded = function () {
		return f
	};
	l ? g() : "undefined" !== typeof document && (document.addEventListener ? document.addEventListener("DOMContentLoaded", g, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
		"complete" === document.readyState && g()
	}))
})(window, window.OTHelpers);
(function (b, a, d) {
	a.castToBoolean = function (a, c) {
		return a === d ? c : "true" === a || !0 === a
	};
	a.roundFloat = function (a, c) {
		return Number(a.toFixed(c))
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	var l = {};
	a.registerCapability = function (b, f) {
		var d = b.toLowerCase();
		l.hasOwnProperty(d) ? a.error("Attempted to register", b, "capability more than once") : a.isFunction(f) ? c(d, f) : a.error("Attempted to register", b, "capability with a callback that isn' a function")
	};
	var c = function (a, c) {
		l[a] = function () {
			var b = c();
			l[a] = function () {
				return b
			};
			return b
		}
	};
	a.hasCapabilities = function () {
		for (var c = Array.prototype.slice.call(arguments), b, d = 0; d < c.length; ++d) if (b = c[d].toLowerCase(), l.hasOwnProperty(b)) {
			if (!1 === l[b]()) return !1
		} else return a.error("hasCapabilities was called with an unknown capability: " + b), !1;
		return !0
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	a.registerCapability("websockets", function () {
		return "WebSocket" in b
	})
})(window, window.OTHelpers);
(function (b, a, d) {
	if (function () {
		if (b.postMessage) {
			var a = !0,
				c = b.onmessage;
			b.onmessage = function () {
				a = !1
			};
			b.postMessage("", "*");
			b.onmessage = c;
			return a
		}
	}()) {
		var l = [],
			c = "OTHelpers." + a.uuid.v4() + ".zero-timeout",
			k = function () {
				l = [];
				b.removeEventListener ? b.removeEventListener("message", f) : b.detachEvent && b.detachEvent("onmessage", f)
			},
			f = function (f) {
				f.source === b && f.data === c && (a.isFunction(f.stopPropagation) && f.stopPropagation(), f.cancelBubble = !0, b.___othelpers ? 0 < l.length && (f = l.shift(), f.shift().apply(null, f)) : k())
			};
		a.on(b, "unload", k);
		b.addEventListener ? b.addEventListener("message", f, !0) : b.attachEvent && b.attachEvent("onmessage", f);
		d = function () {
			l.push(Array.prototype.slice.call(arguments));
			b.postMessage(c, "*")
		}
	} else d = function () {
		var a = Array.prototype.slice.call(arguments),
			c = a.shift();
		setTimeout(function () {
			c.apply(null, a)
		}, 0)
	};
	a.callAsync = d;
	a.createAsyncHandler = function (c) {
		return function () {
			var b = Array.prototype.slice.call(arguments);
			a.callAsync(function () {
				c.apply(null, b)
			})
		}
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	a.eventing = function (b, c) {
		function d(c, b, e) {
			var f = g[c];
			if (f && 0 !== f.length) {
				var h = f.length;
				a.forEach(f, function (f) {
					function d(a) {
						return a.context === f.context && a.handler === f.handler
					}
					a.callAsync(function () {
						try {
							g[c] && a.some(g[c], d) && (f.closure || f.handler).apply(f.context || null, b)
						} finally {
							h--, 0 === h && e && e.apply(null, b.slice())
						}
					})
				})
			}
		}
		function f(c, b) {
			var e = g[c];
			e && 0 !== e.length && a.forEach(e, function (a) {
				(a.closure || a.handler).apply(a.context || null, b)
			})
		}
		var g = {},
			h = !0 === c ? f : d,
			m = function (c, b) {
				g[c] && (b ? g[c] = a.filter(g[c], function (a) {
					return a.context !== b
				}) : delete g[c])
			},
			e = a.bind(function (c, b, e, f) {
				var d = {
					handler: b
				};
				e && (d.context = e);
				f && (d.closure = f);
				a.forEach(c, function (a) {
					g[a] || (g[a] = []);
					g[a].push(d);
					var c = a + ":added";
					g[c] && h(c, [g[a].length])
				})
			}, b),
			n = function (c, e, f) {
				function d(a) {
					return !(a.handler === e && a.context === f)
				}
				a.forEach(c, a.bind(function (c) {
					if (g[c]) {
						g[c] = a.filter(g[c], d);
						0 === g[c].length && delete g[c];
						var b = c + ":removed";
						g[b] && h(b, [g[c] ? g[c].length : 0])
					}
				}, b))
			};
		b.dispatchEvent = function (c, b) {
			if (!c.type) throw a.error("OTHelpers.Eventing.dispatchEvent: Event has no type"), a.error(c), Error("OTHelpers.Eventing.dispatchEvent: Event has no type");
			c.target || (c.target = this);
			if (!g[c.type] || 0 === g[c.type].length) {
				var e = [c];
				b && b.apply(null, e.slice())
			} else return h(c.type, [c], b), this
		};
		b.trigger = function (a) {
			if (g[a] && 0 !== g[a].length) {
				var c = Array.prototype.slice.call(arguments);
				c.shift();
				h(a, c);
				return this
			}
		};
		b.on = function (a, c, b) {
			if ("string" === typeof a && c) e(a.split(" "), c, b);
			else for (var f in a) a.hasOwnProperty(f) && e([f], a[f], c);
			return this
		};
		b.off = function (c, b, e) {
			if ("string" === typeof c) b && a.isFunction(b) ? n(c.split(" "), b, e) : a.forEach(c.split(" "), function (a) {
				m(a, b)
			}, this);
			else if (c) for (var f in c) c.hasOwnProperty(f) && n([f], c[f], b);
			else g = {};
			return this
		};
		b.once = function (c, b, f) {
			var d = c.split(" ");
			c = a.bind(function () {
				var a = b.apply(f || null, arguments);
				n(d, b, f);
				return a
			}, this);
			e(d, b, f, c);
			return this
		};
		b.addEventListener = function (c, b, f) {
			a.warn("The addEventListener() method is deprecated. Use on() or once() instead.");
			e([c], b, f)
		};
		b.removeEventListener = function (c, b, e) {
			a.warn("The removeEventListener() method is deprecated. Use off() instead.");
			n([c], b, e)
		};
		return b
	};
	a.eventing.Event = function () {
		return function (b, c) {
			this.type = b;
			this.cancelable = c !== d ? c : !0;
			var k = !1;
			this.preventDefault = function () {
				this.cancelable ? k = !0 : a.warn("Event.preventDefault :: Trying to preventDefault on an Event that isn't cancelable")
			};
			this.isDefaultPrevented = function () {
				return k
			}
		}
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	function l(a) {
		for (var b in a) if (a.hasOwnProperty(b)) return !0;
		return !1
	}
	a.isElementNode = function (a) {
		return a && "object" === typeof a && 1 === a.nodeType
	};
	a.supportsClassList = function () {
		var c = "undefined" !== typeof document && "classList" in document.createElement("a");
		a.supportsClassList = function () {
			return c
		};
		return c
	};
	a.removeElement = function (a) {
		a && a.parentNode && a.parentNode.removeChild(a)
	};
	a.removeElementById = function (c) {
		this.removeElement(a(c))
	};
	a.removeElementsByType = function (a, b) {
		if (a) for (var f =
		a.getElementsByTagName(b); f.length;) a.removeChild(f[0])
	};
	a.emptyElement = function (a) {
		for (; a.firstChild;) a.removeChild(a.firstChild);
		return a
	};
	a.createElement = function (c, b, f, d) {
		var h = (d || document).createElement(c);
		if (b) for (var m in b) if ("object" === typeof b[m]) {
			h[m] || (h[m] = {});
			c = b[m];
			for (var e in c) h[m][e] = c[e]
		} else "className" === m ? h.className = b[m] : h.setAttribute(m, b[m]);
		b = function (a) {
			"string" === typeof a ? h.innerHTML += a : h.appendChild(a)
		};
		a.isArray(f) ? a.forEach(f, b) : f && b(f);
		return h
	};
	a.createButton = function (c, b, f) {
		c = a.createElement("button", b, c);
		if (f) {
			for (var d in f) if (f.hasOwnProperty(d)) a.on(c, d, f[d]);
			c._boundEvents = f
		}
		return c
	};
	a.isDisplayNone = function (c) {
		return (0 === c.offsetWidth || 0 === c.offsetHeight) && "none" === a.css(c, "display") ? !0 : c.parentNode && c.parentNode.style ? a.isDisplayNone(c.parentNode) : !1
	};
	a.findElementWithDisplayNone = function (c) {
		return (0 === c.offsetWidth || 0 === c.offsetHeight) && "none" === a.css(c, "display") ? c : c.parentNode && c.parentNode.style ? a.findElementWithDisplayNone(c.parentNode) : null
	};
	a.observeStyleChanges =

	function (c, b, f) {
		var d = {},
			h = function (b) {
				switch (b) {
				case "width":
					return a.width(c);
				case "height":
					return a.height(c);
				default:
					return a.css(c)
				}
			};
		a.forEach(b, function (a) {
			d[a] = h(a)
		});
		var m = new MutationObserver(function (e) {
			var m = {};
			a.forEach(e, function (e) {
				if ("style" === e.attributeName) {
					var f = a.isDisplayNone(c);
					a.forEach(b, function (a) {
						if (!f || !("width" === a || "height" === a)) {
							var c = h(a);
							c !== d[a] && (m[a] = [d[a], c], d[a] = c)
						}
					})
				}
			});
			l(m) && a.callAsync(function () {
				f.call(null, m)
			})
		});
		m.observe(c, {
			attributes: !0,
			attributeFilter: ["style"],
			childList: !1,
			characterData: !1,
			subtree: !1
		});
		return m
	};
	a.observeNodeOrChildNodeRemoval = function (c, b) {
		var f = new MutationObserver(function (c) {
			var f = [];
			a.forEach(c, function (a) {
				a.removedNodes.length && (f = f.concat(Array.prototype.slice.call(a.removedNodes)))
			});
			f.length && a.callAsync(function () {
				b(f)
			})
		});
		f.observe(c, {
			attributes: !1,
			childList: !0,
			characterData: !1,
			subtree: !0
		});
		return f
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	a.Modal = function (b) {
		a.eventing(this, !0);
		var c = arguments[arguments.length - 1];
		if (!a.isFunction(c)) throw Error("OTHelpers.Modal2 must be given a callback");
		2 > arguments.length && (b = {});
		var d = document.createElement("iframe");
		d.id = b.id || a.uuid();
		d.style.position = "absolute";
		d.style.position = "fixed";
		d.style.height = "100%";
		d.style.width = "100%";
		d.style.top = "0px";
		d.style.left = "0px";
		d.style.right = "0px";
		d.style.bottom = "0px";
		d.style.zIndex = 1E3;
		d.style.border = "0";
		try {
			d.style.backgroundColor = "rgba(0,0,0,0.2)"
		} catch (f) {
			d.style.backgroundColor = "transparent", d.setAttribute("allowTransparency", "true")
		}
		d.scrolling = "no";
		d.setAttribute("scrolling", "no");
		var g = function () {
			var b = d.contentDocument || d.contentWindow.document;
			a.browserVersion().iframeNeedsLoad && (b.body.style.backgroundColor = "transparent", b.body.style.border = "none", "IE" !== a.browser() && (b.open(), b.write('\x3c!DOCTYPE html\x3e\x3chtml\x3e\x3chead\x3e\x3cmeta http-equiv\x3d"x-ua-compatible" content\x3d"IE\x3dEdge"\x3e\x3cmeta http-equiv\x3d"Content-type" content\x3d"text/html; charset\x3dutf-8"\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e'), b.close()));
			c(d.contentWindow, b)
		};
		document.body.appendChild(d);
		a.browserVersion().iframeNeedsLoad ? ("IE" === a.browser() && (d.contentWindow.contents = '\x3c!DOCTYPE html\x3e\x3chtml\x3e\x3chead\x3e\x3cmeta http-equiv\x3d"x-ua-compatible" content\x3d"IE\x3dEdge"\x3e\x3cmeta http-equiv\x3d"Content-type" content\x3d"text/html; charset\x3dutf-8"\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e', d.src = 'javascript:window["contents"]'), a.on(d, "load", g)) : setTimeout(g);
		this.close =

		function () {
			a.removeElement(d);
			this.trigger("closed");
			this.element = d = null;
			return this
		};
		this.element = d
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	function l(a, c, b, d) {
		var e = c[b];
		c = parseFloat(e);
		e = e.split(/\d/)[0];
		d = null != d ? d : /%|em/.test(e) && a.parentElement ? l(a.parentElement, a.parentElement.currentStyle, "fontSize", null) : 16;
		a = "fontSize" === b ? d : /width/i.test(b) ? a.clientWidth : a.clientHeight;
		return "em" === e ? c * d : "in" === e ? 96 * c : "pt" === e ? 96 * c / 72 : "%" === e ? c / 100 * a : c
	}
	function c(a, c) {
		var b = "border" === c ? "Width" : "",
			d = c + "Top" + b,
			e = c + "Right" + b,
			k = c + "Bottom" + b,
			b = c + "Left" + b;
		a[c] = (a[d] === a[e] === a[k] === a[b] ? [a[d]] : a[d] === a[k] && a[b] === a[e] ? [a[d], a[e]] : a[b] === a[e] ? [a[d], a[e], a[k]] : [a[d], a[e], a[k], a[b]]).join(" ")
	}
	function k(a) {
		var b = a.currentStyle,
			d = l(a, b, "fontSize", null),
			k;
		for (k in b) / width | height | margin. | padding. | border. + W / .test(k) && "auto" !== this[k] ? this[k] = l(a, b, k, d) + "px" : "styleFloat" === k ? this["float"] = b[k] : this[k] = b[k];
		c(this, "margin");
		c(this, "padding");
		c(this, "border");
		this.fontSize = d + "px";
		return this
	}
	k.prototype = {
		constructor: k,
		getPropertyPriority: function () {},
		getPropertyValue: function (a) {
			return this[a] || ""
		},
		item: function () {},
		removeProperty: function () {},
		setProperty: function () {},
		getPropertyCSSValue: function () {}
	};
	a.getComputedStyle = function (a) {
		return a && a.ownerDocument && a.ownerDocument.defaultView && a.ownerDocument.defaultView.getComputedStyle ? a.ownerDocument.defaultView.getComputedStyle(a) : new k(a)
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	a.addClass = function (c, b) {
		if (1 === c.nodeType) {
			var d = a.trim(b).split(/\s+/),
				g, h;
			if (a.supportsClassList()) {
				g = 0;
				for (h = d.length; g < h; ++g) c.classList.add(d[g])
			} else {
				if (!c.className && 1 === d.length) c.className = b;
				else {
					var m = " " + c.className + " ";
					g = 0;
					for (h = d.length; g < h; ++g)~m.indexOf(" " + d[g] + " ") || (m += d[g] + " ");
					c.className = a.trim(m)
				}
				return this
			}
		}
	};
	a.removeClass = function (c, b) {
		if (b && 1 === c.nodeType) {
			var d = a.trim(b).split(/\s+/),
				g, h;
			if (a.supportsClassList()) {
				g = 0;
				for (h = d.length; g < h; ++g) c.classList.remove(d[g])
			} else {
				var m = (" " + c.className + " ").replace(/[\s+]/, " ");
				g = 0;
				for (h = d.length; g < h; ++g) m = m.replace(" " + d[g] + " ", " ");
				c.className = a.trim(m);
				return this
			}
		}
	};
	var l = function (c) {
		return 0 < c.offsetHeight ? c.offsetHeight + "px" : a.css(c, "height")
	};
	a.width = function (c, b) {
		return b ? (a.css(c, "width", b), this) : a.isDisplayNone(c) ? a.makeVisibleAndYield(c, function () {
			return 0 < c.offsetWidth ? c.offsetWidth + "px" : a.css(c, "width")
		}) : 0 < c.offsetWidth ? c.offsetWidth + "px" : a.css(c, "width")
	};
	a.height = function (c, b) {
		return b ? (a.css(c, "height", b), this) : a.isDisplayNone(c) ? a.makeVisibleAndYield(c, function () {
			return l(c)
		}) : l(c)
	};
	a.centerElement = function (c, b, d) {
		b || (b = parseInt(a.width(c), 10));
		d || (d = parseInt(a.height(c), 10));
		a.css(c, "margin", -0.5 * d + "px 0 0 " + (-0.5 * b + "px"));
		a.addClass(c, "OT_centered")
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	var l = {},
		c = {};
	a.show = function (b) {
		var d = b.style.display;
		if ("" === d || "none" === d) b.style.display = l[b] || "", delete l[b];
		if ("none" === a.getComputedStyle(b).getPropertyValue("display")) {
			l[b] = "none";
			d = b.style;
			if (c[b.ownerDocument] && c[b.ownerDocument][b.nodeName]) b = c[b.ownerDocument][b.nodeName];
			else {
				c[b.ownerDocument] || (c[b.ownerDocument] = {});
				var g = b.ownerDocument.createElement(b.nodeName);
				b.ownerDocument.body.appendChild(g);
				b = c[b.ownerDocument][b.nodeName] = a.css(g, "display");
				a.removeElement(g)
			}
			d.display =
			b
		}
		return this
	};
	a.hide = function (a) {
		if ("none" !== a.style.display) return l[a] = a.style.display, a.style.display = "none", this
	};
	a.css = function (c, b, g) {
		if ("string" !== typeof b) {
			c = c.style;
			for (var h in b) b.hasOwnProperty(h) && (c[h] = b[h]);
			return this
		}
		if (g !== d) return c.style[b] = g, this;
		b = b.replace(/([A-Z]|^ms)/g, "-$1").toLowerCase();
		h = a.getComputedStyle(c).getPropertyValue(b);
		"" === h && (h = c.style[b]);
		return h
	};
	a.applyCSS = function (c, b, d) {
		var h = {},
			m;
		for (m in b) b.hasOwnProperty(m) && (h[m] = c.style[m], a.css(c, m, b[m]));
		d = d();
		for (m in b) b.hasOwnProperty(m) && a.css(c, m, h[m] || "");
		return d
	};
	a.makeVisibleAndYield = function (c, b) {
		var d = a.findElementWithDisplayNone(c);
		if (d) return a.applyCSS(d, {
			display: "block",
			visibility: "hidden"
		}, b)
	}
})(window, window.OTHelpers);
(function (b, a, d) {
	if (d = b.requestAnimationFrame || b.mozRequestAnimationFrame || b.webkitRequestAnimationFrame || b.msRequestAnimationFrame) d = a.bind(d, b);
	else {
		var l = 0,
			c = a.now();
		d = function (d) {
			var f = a.now(),
				g = Math.max(0, 16 - (f - l)),
				h = b.setTimeout(function () {
					d(f - c)
				}, g);
			l = f + g;
			return h
		}
	}
	a.requestAnimationFrame = d
})(window, window.OTHelpers);
(function (b, a, d) {
	function l(a) {
		if ("string" === typeof a) return a;
		var b = [],
			d;
		for (d in a) b.push(encodeURIComponent(d) + "\x3d" + encodeURIComponent(a[d]));
		return b.join("\x26").replace(/\+/g, "%20")
	}
	a.getJSON = function (c, b, d) {
		b = b || {};
		var g = function (a, c) {
			if (a) d(a, c && c.target && c.target.responseText);
			else {
				var b;
				try {
					b = JSON.parse(c.target.responseText)
				} catch (h) {
					d(h, c && c.target && c.target.responseText);
					return
				}
				d(null, b, c)
			}
		};
		if (b.xdomainrequest) a.xdomainRequest(c, {
			method: "GET"
		}, g);
		else {
			var h = a.extend({
				Accept: "application/json"
			}, b.headers || {});
			a.get(c, a.extend(b || {}, {
				headers: h
			}), g)
		}
	};
	a.xdomainRequest = function (a, b, d) {
		function g(a, c) {
			h.onload = h.onerror = h.ontimeout = function () {};
			h = void 0;
			d(a, c)
		}
		var h = new XDomainRequest,
			m = (b || {}).method;
		m ? (m = m.toUpperCase(), "GET" === m || "POST" === m ? (h.onload = function () {
			g(null, {
				target: {
					responseText: h.responseText,
					headers: {
						"content-type": h.contentType
					}
				}
			})
		}, h.onerror = function () {
			g(Error("XDomainRequest of " + a + " failed"))
		}, h.ontimeout = function () {
			g(Error("XDomainRequest of " + a + " timed out"))
		}, h.open(m, a), h.send(b.body && l(b.body))) : d(Error("HTTP method can only be "))) : d(Error("No HTTP method specified in options"))
	};
	a.request = function (c, b, d) {
		var g = new XMLHttpRequest,
			h = b || {};
		if (h.method) {
			d && (a.on(g, "load", function (a) {
				var c = a.target.status;
				200 <= c && 300 > c || 304 === c ? d(null, a) : d(a)
			}), a.on(g, "error", d));
			g.open(b.method, c, !0);
			h.headers || (h.headers = {});
			for (var m in h.headers) g.setRequestHeader(m, h.headers[m]);
			g.send(b.body && l(b.body))
		} else d(Error("No HTTP method specified in options"))
	};
	a.get = function (c, b, d) {
		b = a.extend(b || {}, {
			method: "GET"
		});
		a.request(c, b, d)
	};
	a.post = function (c, b, d) {
		b = a.extend(b || {}, {
			method: "POST"
		});
		b.xdomainrequest ? a.xdomainRequest(c, b, d) : a.request(c, b, d)
	}
})(window, window.OTHelpers);
!
function (b) {
	b.OT || (b.OT = {});
	OT.$ = OTHelpers.noConflict();
	OT.$.eventing(OT);
	OT.$.defineGetters = function (a, c, b) {
		var d = {};
		void 0 === b && (b = !1);
		for (var g in c) c.hasOwnProperty(g) && (d[g] = {
			get: c[g],
			enumerable: b
		});
		Object.defineProperties(a, d)
	};
	OT.Modal = OT.$.Modal;
	OT.$.useLogHelpers(OT);
	var a = !1,
		d = OT.setLogLevel;
	OT.setLogLevel = function (b) {
		OT.$.setLogLevel(b);
		b = d.call(OT, b);
		OT.shouldLog(OT.DEBUG) && !a && (OT.debug("OpenTok JavaScript library " + OT.properties.version), OT.debug("Release notes: " + OT.properties.websiteURL + "/opentok/webrtc/docs/js/release-notes.html"), OT.debug("Known issues: " + OT.properties.websiteURL + "/opentok/webrtc/docs/js/release-notes.html#knownIssues"), a = !0);
		OT.debug("OT.setLogLevel(" + b + ")");
		return b
	};
	OT.setLogLevel("true" === OT.properties.debug || !0 === OT.properties.debug ? OT.DEBUG : OT.ERROR);
	OT.$.userAgent = function () {
		var a = navigator.userAgent;
		TBPlugin.isInstalled() && (a += "; TBPlugin " + TBPlugin.version());
		return a
	}
}(window);
!
function () {
	var b = function (a) {
		return function (c, b) {
			b.querySelector("html").style.height = b.body.style.height = "100%";
			a(c, b)
		}
	},
		a = function (a, c, b) {
			a = a.head || a.getElementsByTagName("head")[0];
			var d = OT.$.createElement("link", {
				type: "text/css",
				media: "screen",
				rel: "stylesheet",
				href: c
			});
			a.appendChild(d);
			OT.$.on(d, "error", function (a) {
				OT.error("Could not load CSS for dialog", c, a && a.message || a)
			});
			OT.$.on(d, "load", b)
		},
		d = function (c, b, d) {
			b = ["//fonts.googleapis.com/css?family\x3dDidact+Gothic", OT.properties.cssURL].concat(b);
			var k = b.length;
			OT.$.forEach(b, function (b) {
				a(c, b, function () {
					0 >= --k && d()
				})
			})
		},
		l = function (a, c, b) {
			a = OT.$.createElement(b || "div", {
				"class": a
			}, c, this);
			a.on = OT.$.bind(OT.$.on, OT.$, a);
			a.off = OT.$.bind(OT.$.off, OT.$, a);
			return a
		},
		c = function (a, c, b) {
			var d = l.call(this, "", null, "input").on("change", b);
			if ("IE" === OT.$.browser() && 8 >= OT.$.browserVersion().version) d.on("click", function () {
				d.blur();
				d.focus()
			});
			d.setAttribute("name", c);
			d.setAttribute("id", c);
			d.setAttribute("type", "checkbox");
			return d
		},
		k = function (a, c, b) {
			a =
			l.call(this, b || "", a, "a");
			a.setAttribute("href", c);
			return a
		};
	OT.Dialogs = {};
	OT.Dialogs.Plugin = {};
	OT.Dialogs.Plugin.promptToInstall = function () {
		var a = new OT.$.Modal(b(function (b, h) {
			function m() {
				a.trigger("download");
				setTimeout(function () {
					u.querySelector(".OT_dialog-messages-main").innerHTML = "Plugin installation successful";
					var a = u.querySelectorAll(".OT_dialog-section");
					OT.$.addClass(a[0], "OT_dialog-hidden");
					OT.$.removeClass(a[1], "OT_dialog-hidden")
				}, 3E3)
			}
			function e() {
				a.trigger("refresh")
			}
			var n = OT.$.bind(l, h),
				q = function (a, c) {
					var b = n("OT_dialog-button " + (c ? "OT_dialog-button-" + c : "OT_dialog-button-large"), a);
					b.enable = function () {
						OT.$.removeClass(this, "OT_dialog-button-disabled");
						return this
					};
					b.disable = function () {
						OT.$.addClass(this, "OT_dialog-button-disabled");
						return this
					};
					return b
				},
				r = q("Download plugin"),
				p = q("cancel", "small"),
				t = q("Refresh browser"),
				v, s, u;
			OT.$.addClass(p, "OT_dialog-no-natural-margin OT_dialog-button-block");
			OT.$.addClass(t, "OT_dialog-no-natural-margin");
			r.disable();
			t.disable();
			p.on("click", function () {
				a.trigger("cancelButtonClicked");
				a.close()
			});
			s = n("OT_closeButton", "\x26times;").on("click", function () {
				a.trigger("closeButtonClicked");
				a.close()
			});
			q = k.call(h, "end-user license agreement", "http://tokbox.com/support/ie-eula");
			v = c.call(h, null, "acceptEULA", function () {
				v.checked ? (r.enable(), r.on("click", m), t.enable(), t.on("click", e)) : (r.disable(), r.off("click", m), t.disable(), t.off("click", e))
			});
			u = n("OT_dialog-centering", [n("OT_dialog-centering-child", [n("OT_root OT_dialog OT_dialog-plugin-prompt", [s, n("OT_dialog-messages", [n("OT_dialog-messages-main", "This app requires real-time communication")]), n("OT_dialog-section", [n("OT_dialog-single-button-with-title", [n("OT_dialog-button-title", [v, function () {
				var a = n("", "accept", "label");
				a.setAttribute("for", v.id);
				a.style.margin = "0 5px";
				return a
			}(), q]), n("OT_dialog-actions-card", [r, p])])]), n("OT_dialog-section OT_dialog-hidden", [n("OT_dialog-button-title", ["You can now enjoy webRTC enabled video via Internet Explorer."]), t])])])]);
			d(h, [], function () {
				h.body.appendChild(u)
			})
		}));
		return a
	};
	OT.Dialogs.Plugin.promptToReinstall = function () {
		var a = new OT.$.Modal(b(function (c, b) {
			var k = OT.$.bind(l, b),
				e, n, q;
			e = k("OT_closeButton", "\x26times;");
			n = k("OT_dialog-button OT_dialog-button-large OT_dialog-no-natural-margin", "Okay");
			OT.$.on(n, "click", function () {
				a.trigger("okay")
			});
			OT.$.on(e, "click", function () {
				a.trigger("closeButtonClicked");
				a.close()
			});
			q = k("OT_dialog-centering", [k("OT_dialog-centering-child", [k("OT_ROOT OT_dialog OT_dialog-plugin-reinstall", [e, k("OT_dialog-messages", [k("OT_dialog-messages-main", "Reinstall Opentok Plugin"), k("OT_dialog-messages-minor", "Uh oh! Try reinstalling the OpenTok plugin again to enable real-time video communication for Internet Explorer.")]), k("OT_dialog-section", [k("OT_dialog-single-button", n)])])])]);
			d(b, [], function () {
				b.body.appendChild(q)
			})
		}));
		return a
	};
	OT.Dialogs.Plugin.updateInProgress = function () {
		var a, c, h = 0,
			k = new OT.$.Modal(b(function (b, n) {
				var q = OT.$.bind(l, n),
					r;
				c = q("OT_dialog-plugin-upgrade-percentage", "0%", "strong");
				a = q("OT_dialog-progress-bar-fill");
				r = q("OT_dialog-centering", [q("OT_dialog-centering-child", [q("OT_ROOT OT_dialog OT_dialog-plugin-upgrading", [q("OT_dialog-messages", [q("OT_dialog-messages-main", ["One moment please... ", c]), q("OT_dialog-progress-bar", a), q("OT_dialog-messages-minor OT_dialog-no-natural-margin", "Please wait while the OpenTok plugin is updated")])])])]);
				d(n, [], function () {
					n.body.appendChild(r);
					null != h && k.setUpdateProgress(h)
				})
			}));
		k.setUpdateProgress = function (b) {
			a && c ? 99 < b ? (OT.$.css(a, "width", ""), c.innerHTML = "100%") : 1 > b ? (OT.$.css(a, "width", "0%"), c.innerHTML = "0%") : (OT.$.css(a, "width", b + "%"), c.innerHTML = b + "%") : h = b
		};
		return k
	};
	OT.Dialogs.Plugin.updateComplete = function (a) {
		var c = new OT.$.Modal(b(function (b, k) {
			var e = OT.$.bind(l, k),
				n, q;
			n = e("OT_dialog-button OT_dialog-button-large OT_dialog-no-natural-margin", "Reload").on("click", function () {
				c.trigger("reload")
			});
			var r;
			r = a ? ["Update Failed.", a + "" || "NO ERROR"] : ["Update Complete.", "The OpenTok plugin has been succesfully updated. Please reload your browser."];
			q = e("OT_dialog-centering", [e("OT_dialog-centering-child", [e("OT_root OT_dialog OT_dialog-plugin-upgraded", [e("OT_dialog-messages", [e("OT_dialog-messages-main", r[0]), e("OT_dialog-messages-minor", r[1])]), e("OT_dialog-single-button", n)])])]);
			d(k, [], function () {
				k.body.appendChild(q)
			})
		}));
		return c
	}
}();
!
function (b) {
	b.OT || (b.OT = {});
	if (!OT.properties) throw Error("OT.properties does not exist, please ensure that you include a valid properties file.");
	OT.useSSL = function () {
		return OT.properties.supportSSL && (0 <= b.location.protocol.indexOf("https") || 0 <= b.location.protocol.indexOf("chrome-extension"))
	};
	OT.properties = function (a) {
		var d = OT.$.clone(a);
		d.debug = "true" === a.debug || !0 === a.debug;
		d.supportSSL = "true" === a.supportSSL || !0 === a.supportSSL;
		b.OTProperties && (b.OTProperties.cdnURL && (d.cdnURL = b.OTProperties.cdnURL), b.OTProperties.cdnURLSSL && (d.cdnURLSSL = b.OTProperties.cdnURLSSL), b.OTProperties.configURL && (d.configURL = b.OTProperties.configURL), b.OTProperties.assetURL && (d.assetURL = b.OTProperties.assetURL), b.OTProperties.cssURL && (d.cssURL = b.OTProperties.cssURL));
		d.assetURL || (OT.useSSL() ? d.assetURL = d.cdnURLSSL + "/webrtc/" + d.version : d.assetURL = d.cdnURL + "/webrtc/" + d.version);
		"IE" === OT.$.browser() && 9 >= OT.$.browserVersion().version && 0 > b.location.protocol.indexOf("https") || (d.apiURL = d.apiURLSSL, d.loggingURL = d.loggingURLSSL);
		d.configURL || (d.configURL = d.assetURL + "/js/dynamic_config.min.js");
		d.cssURL || (d.cssURL = d.assetURL + "/css/ot.min.css");
		return d
	}(OT.properties)
}(window);
!
function () {
	OT.Config = function () {
		var b = !1,
			a = {},
			d = {},
			l, c = document.head || document.getElementsByTagName("head")[0],
			k, f = function () {
				k && (clearTimeout(k), k = null);
				l && (l.onload = l.onreadystatechange = null, c && l.parentNode && c.removeChild(l), l = void 0)
			},
			g = function () {
				if (!l.readyState || /loaded|complete/.test(l.readyState)) k && (clearTimeout(k), k = null), b || h._onLoadTimeout()
			},
			h;
		h = {
			loadTimeout: 4E3,
			load: function (a) {
				if (!a) throw Error("You must pass a valid configUrl to Config.load");
				b = !1;
				setTimeout(function () {
					l = document.createElement("script");
					l.async = "async";
					l.src = a;
					l.onload = l.onreadystatechange = OT.$.bind(g, this);
					c.appendChild(l)
				}, 1);
				k = setTimeout(function () {
					h._onLoadTimeout()
				}, this.loadTimeout)
			},
			_onLoadTimeout: function () {
				f();
				OT.warn("TB DynamicConfig failed to load in " + h.loadTimeout + " ms");
				this.trigger("dynamicConfigLoadFailed")
			},
			isLoaded: function () {
				return b
			},
			reset: function () {
				f();
				b = !1;
				a = {};
				d = {}
			},
			replaceWith: function (c) {
				f();
				c || (c = {});
				a = c.global || {};
				d = c.partners || {};
				b || (b = !0);
				this.trigger("dynamicConfigChanged")
			},
			get: function (c, b, h) {
				c =
				h && d[h] && d[h][c] ? d[h][c] : a[c];
				return c ? c[b] : null
			}
		};
		OT.$.eventing(h);
		return h
	}()
}(window);
(function (b) {
	if (void 0 === b.TBPlugin && void 0 !== b.OT) {
		var a = OT.$.browserVersion(),
			d = "IE" === a.browser && 8 <= a.version,
			l = !1,
			c = {
				isSupported: function () {
					return d
				},
				isReady: function () {
					return l
				}
			};
		b.TBPlugin = c;
		if (c.isSupported()) {
			var k = function (a, c) {
				var b = !1,
					d;
				try {
					d = a._.RumorInit(c, "")
				} catch (e) {
					OT.error("Error creating the Rumor Socket: ", e.message)
				}
				if (!d) throw Error("Could not initialise plugin rumor connection");
				var h = {
					open: function () {
						b = !0;
						a._.RumorOpen(d)
					},
					close: function (c, e) {
						b && (b = !1, a._.RumorClose(d, c, e), a.removeRef(this))
					},
					destroy: function () {
						this.close()
					},
					send: function (c) {
						a._.RumorSend(d, c.type, c.toAddress, JSON.parse(JSON.stringify(c.headers)), c.data)
					},
					onOpen: function (c) {
						a._.SetOnRumorOpen(d, c)
					},
					onClose: function (c) {
						a._.SetOnRumorClose(d, c)
					},
					onError: function (c) {
						a._.SetOnRumorError(d, c)
					},
					onMessage: function (c) {
						a._.SetOnRumorMessage(d, c)
					}
				};
				a.addRef(h);
				return h
			},
				f = {},
				g, h = {},
				m = function (a) {
					return function () {
						var c = Array.prototype.slice.call(arguments);
						c.unshift(a);
						OT.$.callAsync.apply(OT.$, c)
					}
				},
				e = function (a) {
					if (a && (f[a] && (clearTimeout(f[a]), delete f[a]), b[a])) try {
						delete b[a]
					} catch (c) {
						b[a] = void 0
					}
				},
				n = function (a) {
					var c = a,
						b = [];
					this._ = c;
					this.addRef = function (a) {
						b.push(a);
						return this
					};
					this.removeRef = function (a) {
						if (0 !== b.length) return a = b.indexOf(a), -1 !== a && b.splice(a, 1), 0 === b.length && this.destroy(), this
					};
					this.isValid = function () {
						return c.valid
					};
					var d = {},
						f = OT.$.bind(m(function () {
							var a = Array.prototype.slice.call(arguments),
								c = a.shift();
							(d.hasOwnProperty(c) || !d[c].length) && OT.$.forEach(d[c], function (c) {
								c[0].apply(c[1], a)
							})
						}), this);
					this.on = function (a, c, b) {
						d.hasOwnProperty(a) || (d[a] = []);
						d[a].push([c, b]);
						return this
					};
					this.off = function (a, c, b) {
						if (d.hasOwnProperty(a) && 0 !== d[a].length) return OT.$.filter(d[a], function (a) {
							return a[0] === c && a[1] === b
						}), this
					};
					this.once = function (a, c, b) {
						var d = function () {
							this.off(a, d, this);
							return c.apply(b, arguments)
						};
						this.on(a, d, this);
						return this
					};
					this.onReady = function (a) {
						if (c.on) c.on(-1, {
							customEvent: m(f, this)
						});
						c.initialise ? (this.on("ready", OT.$.bind(m(a), this)), c.initialise()) : a.call(null)
					};
					this.destroy = function () {
						for (; b.length;) b.shift().destroy();
						var a = c;
						e(a.getAttribute("tb_callbackId"));
						g && g.id === a.id ? g = null : h.hasOwnProperty(a.id) && delete h[a.id];
						a.parentNode.removeChild(a);
						c = null
					};
					this.setStream = function (a, b) {
						if (b) if (a.hasVideo()) {
							var d = function () {
								0 < c.videoWidth ? setTimeout(b, 200) : setTimeout(d, 500)
							};
							setTimeout(d, 500)
						} else b();
						c.setStream(a)
					}
				},
				q = function (a, d, h, g) {
					var k = "TBPlugin_loaded_" + OT.$.uuid().replace(/\-+/g, "");
					h.onload = k;
					h.userAgent = window.navigator.userAgent.toLowerCase();
					b[k] = function () {
						e(k);
						t.setAttribute("id", "tb_plugin_" + t.uuid);
						t.removeAttribute("tb_callbackId");
						p.uuid = t.uuid;
						p.id = t.id;
						p.onReady(function (a) {
							a ? OT.error("Error while starting up plugin " + t.uuid + ": " + a) : (F("Plugin " + t.id + " is loaded"), g && OT.$.isFunction(g) && g.call(c, null, p))
						})
					};
					var l = document.createElement("div"),
						m = [],
						q = ['width\x3d"0" height\x3d"0"'],
						p, t;
					!0 !== d && q.push('visibility\x3d"hidden"');
					m.push('\x3cobject type\x3d"' + a + '" ' + q.join(" ") + "\x3e");
					for (var r in h) h.hasOwnProperty(r) && m.push('\x3cparam name\x3d"' + r + '" value\x3d"' + h[r] + '" /\x3e');
					m.push("\x3c/object\x3e");
					l.innerHTML = m.join("");
					A.body.appendChild(l);
					t = function (a) {
						if (a.firstElementChild) return a.firstElementChild;
						for (var c = 0, b = a.childNodes.length; c < b; ++c) if (1 === a.childNodes[c].nodeType) return a.childNodes[c];
						return null
					}(l);
					t.setAttribute("tb_callbackId", k);
					p = new n(t);
					A.body.appendChild(t);
					A.body.removeChild(l);
					f[k] = setTimeout(function () {
						e(k);
						g.call(c, "The object with the mimeType of " + a + " timed out while loading.");
						A.body.removeChild(t)
					}, 3E3);
					return p
				},
				r = function (a) {
					if (g) throw Error("TBPlugin.createMediaCaptureController called multiple times!");
					g = q(B.mimeType, !1, {
						windowless: !1
					}, a);
					g.selectSources = function () {
						return this._.selectSources.apply(this._, arguments)
					};
					return g
				},
				p = function (a) {
					return q(B.mimeType, !0, {
						windowless: !0
					}, function (b, d) {
						b ? a.call(c, b) : (h[d.id] = d, a.call(c, null, d))
					})
				},
				t = function (a, c) {
					this.domElement = a._;
					this.parentElement = a._.parentNode;
					a.addRef(this);
					this.appendTo = function (c) {
						c && a._.parentNode !== c && (F("VideoContainer appendTo", c), c.appendChild(a._), this.parentElement = c)
					};
					this.show = function (b) {
						F("VideoContainer show");
						a._.removeAttribute("width");
						a._.removeAttribute("height");
						a.setStream(c, b);
						OT.$.show(a._)
					};
					this.setWidth = function (c) {
						F("VideoContainer setWidth to " + c);
						a._.setAttribute("width", c)
					};
					this.setHeight = function (c) {
						F("VideoContainer setHeight to " + c);
						a._.setAttribute("height", c)
					};
					this.setVolume = function (a) {
						F("VideoContainer setVolume not implemented: called with " + a)
					};
					this.getVolume = function () {
						F("VideoContainer getVolume not implemented");
						return 0.5
					};
					this.getImgData = function () {
						return a._.getImgData("image/png")
					};
					this.getVideoWidth = function () {
						return a._.videoWidth
					};
					this.getVideoHeight = function () {
						return a._.videoHeight
					};
					this.destroy = function () {
						a._.setStream(null);
						a.removeRef(this)
					}
				},
				v = function (a) {
					this.forEach = function (c, b) {
						for (var d in a) c.call(b, a[d])
					}
				},
				s = function (a, b, d) {
					var e = OT.$.uuid(),
						h = !1,
						f = !1,
						g = [];
					d.addRef(this);
					var k = function () {},
						n = function (a) {
							OT.error("Failed to process candidate");
							OT.error(a)
						},
						l = function () {
							for (var a = 0; a < g.length; ++a) d._.addIceCandidate(e, g[a], k, n)
						},
						m = function () {
							var a = Array.prototype.slice.call(arguments),
								c = a.shift();
							setTimeout(function () {
								return c.apply(null, a)
							}, 0)
						};
					this.createOffer = function (a, b, h) {
						OT.debug("createOffer", h);
						d._.createOffer(e, function (b, d) {
							a(new c.RTCSessionDescription({
								type: b,
								sdp: d
							}))
						}, b, h || {})
					};
					this.createAnswer = function (a, b, h) {
						OT.debug("createAnswer", h);
						d._.createAnswer(e, function (b, d) {
							a(new c.RTCSessionDescription({
								type: b,
								sdp: d
							}))
						}, b, h || {})
					};
					this.setLocalDescription = function (a, c, b) {
						OT.debug("setLocalDescription");
						d._.setLocalDescription(e, a, function () {
							h = !0;
							f && l();
							c && c.call(null)
						}, b)
					};
					this.setRemoteDescription = function (a, c, b) {
						OT.debug("setRemoteDescription");
						d._.setRemoteDescription(e, a, function () {
							f = !0;
							h && l();
							c && c.call(null)
						}, b)
					};
					this.addIceCandidate = function (a) {
						OT.debug("addIceCandidate");
						h && f ? d._.addIceCandidate(e, a, k, n) : g.push(a)
					};
					this.addStream = function (a) {
						d._.addStream(e, a, {})
					};
					this.removeStream = function (a) {
						d._.removeStream(e, a)
					};
					this.getRemoteStreams = function () {
						return d._.getRemoteStreams(e).map(function (a) {
							return x.fromJson(a, d)
						})
					};
					this.getLocalStreams = function () {
						return d._.getLocalStreams(e).map(function (a) {
							return x.fromJson(a, d)
						})
					};
					this.getStreamById = function (a) {
						return x.fromJson(d._.getStreamById(e, a), d)
					};
					this.getStats = function (a, c, b) {
						d._.getStats(e, a || null, function (a) {
							a = new v(JSON.parse(a));
							m(c, a)
						}, b)
					};
					this.close = function () {
						d._.destroyPeerConnection(e);
						d.removeRef(this)
					};
					this.destroy = function () {
						this.close()
					};
					this.oniceconnectionstatechange = this.onsignalingstatechange = this.onicecandidate = this.onremovestream = this.onaddstream =
					null;
					OT.$.forEach(a.iceServers, function (a) {
						a.username || (a.username = "");
						a.credential || (a.credential = "")
					});
					if (d._.initPeerConnection(e, a, b)) d._.on(e, {
						addStream: function (a) {
							setTimeout(function () {
								if (this.onaddstream && OT.$.isFunction(this.onaddstream)) {
									var c = x.fromJson(a, d);
									m(this.onaddstream, {
										stream: c
									})
								}
							}.bind(this), 3E3)
						}.bind(this),
						removeStream: function (a) {
							this.onremovestream && OT.$.isFunction(this.onremovestream) && (a = x.fromJson(a, d), m(this.onremovestream, {
								stream: a
							}))
						}.bind(this),
						iceCandidate: function (a, b, d) {
							this.onicecandidate && OT.$.isFunction(this.onicecandidate) && (a = new c.RTCIceCandidate({
								candidate: a,
								sdpMid: b,
								sdpMLineIndex: d
							}), m(this.onicecandidate, {
								candidate: a
							}))
						}.bind(this),
						signalingStateChange: function (a) {
							this.onsignalingstatechange && OT.$.isFunction(this.onsignalingstatechange) && m(this.onsignalingstatechange, a)
						}.bind(this),
						iceConnectionChange: function (a) {
							this.oniceconnectionstatechange && OT.$.isFunction(this.oniceconnectionstatechange) && m(this.oniceconnectionstatechange, a)
						}.bind(this)
					});
					else OT.error("Failed to initialise PeerConnection")
				},
				u = function (a, c, b) {
					this.id = c.id;
					this.kind = c.kind;
					this.label = c.label;
					this.enabled = OT.$.castToBoolean(c.enabled);
					this.streamId = a;
					this.setEnabled = function (c) {
						(this.enabled = OT.$.castToBoolean(c)) ? b._.enableMediaStreamTrack(a, this.id) : b._.disableMediaStreamTrack(a, this.id)
					}
				},
				x = function (a, c) {
					var b = [],
						d = [];
					this.id = a.id;
					c.addRef(this);
					a.videoTracks && a.videoTracks.map(function (b) {
						d.push(new u(a.id, b, c))
					});
					a.audioTracks && a.audioTracks.map(function (d) {
						b.push(new u(a.id, d, c))
					});
					var e = function (a) {
						return OT.$.some("video" === a ? d : b, function (a) {
							return a.enabled
						})
					};
					this.getVideoTracks = function () {
						return d
					};
					this.getAudioTracks = function () {
						return b
					};
					this.getTrackById = function (a) {
						d.concat(b).forEach(function (c) {
							if (c.id === a) return c
						});
						return null
					};
					this.hasVideo = function () {
						return e("video")
					};
					this.hasAudio = function () {
						return e("audio")
					};
					this.addTrack = function () {};
					this.removeTrack = function () {};
					this.stop = function () {
						c._.stopMediaStream(this.id);
						c.removeRef(this)
					};
					this.destroy = function () {
						this.stop()
					};
					this._ = {
						plugin: c,
						render: OT.$.bind(function () {
							return new t(c, this)
						}, this)
					}
				};
			x.fromJson = function (a, c) {
				return !a ? null : new x(JSON.parse(a), c)
			};
			var E = function (a) {
				var c = OT.$.clone(a);
				this.hasVideo = void 0 !== c.video && !1 !== c.video;
				this.hasAudio = void 0 !== c.audio && !1 !== c.audio;
				!0 === c.video && (c.video = {});
				!0 === c.audio && (c.audio = {});
				this.hasVideo && !c.video.mandatory && (c.video.mandatory = {});
				this.hasAudio && !c.audio.mandatory && (c.audio.mandatory = {});
				this.screenSharing = this.hasVideo && ("screen" === c.video.mandatory.chromeMediaSource || "window" === c.video.mandatory.chromeMediaSource);
				this.audio = c.audio;
				this.video = c.video;
				this.setVideoSource = function (a) {
					void 0 !== a ? c.video.mandatory.sourceId = a : delete c.video
				};
				this.setAudioSource = function (a) {
					void 0 !== a ? c.audio.mandatory.sourceId = a : delete c.audio
				};
				this.toHash = function () {
					return c
				}
			},
				y;
			(function () {
				var a, b, d = -1,
					e = function (a, c) {
						if (a === c) return !1;
						var b = a.split("."),
							d = c.split("."),
							b = parseFloat(parseInt(b.shift(), 10) + "." + b.map(function (a) {
								return parseInt(a, 10)
							}).join("")),
							d = parseFloat(parseInt(d.shift(), 10) + "." + d.map(function (a) {
								return parseInt(a, 10)
							}).join(""));
						return b > d
					},
					h = function () {
						if (void 0 !== b) return b;
						var a = navigator.plugins["TokBox.otiePluginInstaller"];
						d = -1;
						if (a) for (var c = a.length, h = RegExp("application/x-otieplugininstaller".replace("-", "\\-") + ",version\x3d([0-9]+)", "i"), f, g = 0; g < c; ++g) {
							if ((f = a[g]) && f.enabledPlugin && f.enabledPlugin.name === a.name && -1 !== f.type.indexOf("application/x-otieplugininstaller")) f = h.exec(f.type), null !== f && e(f[1], d) && (d = f[1])
						} else try {
							a = new ActiveXObject("TokBox.otiePluginInstaller"), d = a.getMasterVersion()
						} catch (k) {}
						b = -1 !== d ? "application/x-otieplugininstaller,version\x3d" + d : null
					},
					f = function () {
						void 0 === b && h();
						return b
					},
					g = function () {
						void 0 === d && h();
						return d
					},
					k = function () {
						var a = !e(g(), "0.4.0.4");
						k = function () {
							return a
						};
						return a
					};
				y = function (a) {
					this.isOutOfDate = function () {
						return e(B.version, g())
					};
					this.autoUpdate = function () {
						var b = OT.Dialogs.Plugin.updateInProgress(),
							d = new OT.Analytics,
							e = {
								ieVersion: OT.$.browserVersion().version,
								pluginOldVersion: c.installedVersion(),
								pluginNewVersion: c.version()
							},
							h = m(function () {
								d.logEvent({
									action: "OTPluginAutoUpdate",
									variation: "Success",
									partnerId: OT.APIKEY,
									payload: JSON.stringify(e)
								});
								a.destroy();
								b.close();
								OT.Dialogs.Plugin.updateComplete().on({
									reload: function () {
										window.location.reload()
									}
								})
							}),
							f = m(function (c, h, f) {
								e.errorCode = c;
								e.systemErrorCode = f;
								d.logEvent({
									action: "OTPluginAutoUpdate",
									variation: "Failure",
									partnerId: OT.APIKEY,
									payload: JSON.stringify(e)
								});
								a.destroy();
								b.close();
								b = OT.Dialogs.Plugin.updateComplete(h + " (" + c + "). Please restart your browser and try again.").on({
									reload: function () {
										b.close()
									}
								});
								OT.error("autoUpdate failed: " + h + " (" + c + "). Please restart your browser and try again.")
							}),
							g = m(function (a) {
								b.setUpdateProgress(a.toFixed())
							});
						a._.updatePlugin(c.pathToInstaller(), h, f, g)
					};
					this.destroy = function () {
						a.destroy()
					}
				};
				y.get = function (c) {
					a ? c.call(null, void 0, a) : this.isinstalled() ? q(f(), !1, {
						windowless: !1
					}, function (b, d) {
						d && (a = new y(d));
						c.call(null, b, a)
					}) : c.call(null, "Plugin was not installed")
				};
				y.isinstalled = function () {
					return null !== f() && !k()
				};
				y.installedVersion = function () {
					return g()
				}
			})();
			var B = {
				mimeType: "application/x-opentokie,version\x3d0.4.0.8",
				activeXName: "TokBox.OpenTokIE.0.4.0.8",
				version: "0.4.0.8"
			},
				A = b.document,
				w = [],
				F = function (a, c) {
					c ? b.OT.info("TB Plugin - " + a + " \x3d\x3e ", c) : b.OT.info("TB Plugin - " + a)
				},
				G = function () {
					var a = function (a) {
						for (var b;
						(b = w.pop()) && OT.$.isFunction(b);) b.call(c, a)
					};
					y.get(function (c, b) {
						c ? (OT.error("Error while loading the AutoUpdater: " + c), a("Error while loading the AutoUpdater: " + c)) : b.isOutOfDate() ? b.autoUpdate() : r(function (c) {
							!c && (g && !g.isValid()) && (c = "The TB Plugin failed to load properly");
							l = !0;
							a(c);
							OT.onUnload(H)
						})
					})
				},
				H = function () {
					g && g.destroy();
					for (var a in h) h.hasOwnProperty(a) && h[a].destroy()
				};
			c.isInstalled = function () {
				return !this.isSupported() ? !1 : y.isinstalled()
			};
			c.version = function () {
				return B.version
			};
			c.installedVersion = function () {
				return y.installedVersion()
			};
			c.pathToInstaller = function () {
				return "https://s3.amazonaws.com/otplugin.tokbox.com/v" + B.version + "/otiePluginMain.msi"
			};
			c.ready = function (a) {
				if (c.isReady()) {
					var b;
					if (!g || !g.isValid()) b = "The TB Plugin failed to load properly";
					a.call(c, b)
				} else w.push(a)
			};
			var I =

			function (a, b, d) {
				p(function (e, h) {
					e ? d.call(c, e) : h._.getUserMedia(a.toHash(), function (a) {
						b.call(c, x.fromJson(a, h))
					}, d)
				})
			};
			c.getUserMedia = function (a, c, b) {
				var d = new E(a);
				d.screenSharing ? I(d, c, b) : (a = [], d.hasVideo && a.push("video"), d.hasAudio && a.push("audio"), g.selectSources(a, function (a) {
					for (var e in a) a.hasOwnProperty(e) && OT.debug(e + " Capture Device: " + a[e]);
					d.setVideoSource(a.video);
					d.setAudioSource(a.audio);
					I(d, c, b)
				}, b))
			};
			c.initRumorSocket = function (a, b) {
				c.ready(function (c) {
					c ? b(c) : b(null, new k(g, a))
				})
			};
			c.initPeerConnection = function (a, b, d, e) {
				var h = function (d, h) {
					if (d) e.call(c, d);
					else {
						F("Got PeerConnection for " + h.id);
						var f = new s(a, b, h);
						e.call(c, null, f)
					}
				};
				d && d._.plugin ? h(null, d._.plugin) : p(h)
			};
			c.RTCSessionDescription = function (a) {
				this.type = a.type;
				this.sdp = a.sdp
			};
			c.RTCIceCandidate = function (a) {
				this.sdpMid = a.sdpMid;
				this.sdpMLineIndex = parseInt(a.sdpMLineIndex, 10);
				this.candidate = a.candidate
			};
			c.debug = F;
			(function () {
				Function.prototype.bind || (Function.prototype.bind = function (a) {
					if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
					var c = Array.prototype.slice.call(arguments, 1),
						b = this,
						d = function () {},
						e = function () {
							return b.apply(this instanceof d && a ? this : a, c.concat(Array.prototype.slice.call(arguments)))
						};
					d.prototype = this.prototype;
					e.prototype = new d;
					return e
				});
				Array.isArray || (Array.isArray = function (a) {
					return "[object Array]" === Object.prototype.toString.call(a)
				});
				Array.prototype.indexOf || (Array.prototype.indexOf = function (a, c) {
					var b;
					b = c ? c : 0;
					var d;
					if (!this) throw new TypeError;
					d = this.length;
					if (0 === d || b >= d) return -1;
					for (0 > b && (b = d - Math.abs(b)); b < d; b++) if (this[b] === a) return b;
					return -1
				});
				Array.prototype.map || (Array.prototype.map = function (a) {
					if (void 0 === this || null === this) throw new TypeError;
					var c = Object(this),
						b = c.length >>> 0;
					if ("function" !== typeof a) throw new TypeError;
					for (var d = Array(b), e = 2 <= arguments.length ? arguments[1] : void 0, h = 0; h < b; h++) h in c && (d[h] = a.call(e, c[h], h, c));
					return d
				})
			})();
			(function () {
				"complete" === A.readyState || "interactive" === A.readyState && A.body ? G() : A.addEventListener ? A.addEventListener("DOMContentLoaded", G, !1) : A.attachEvent && A.attachEvent("onreadystatechange", function () {
					"complete" === A.readyState && G()
				})
			})()
		} else c.isInstalled = function () {
			return !1
		}
	}
})(this);
!
function () {
	function b(a, c, b, f, g) {
		if (TBPlugin.isInstalled()) OT.$.css(a, {
			width: "100%",
			height: "100%",
			left: 0,
			top: 0
		});
		else if (c = c ? parseInt(c, 10) : parseInt(OT.$.width(a.parentNode), 10), b = b ? parseInt(b, 10) : parseInt(OT.$.height(a.parentNode), 10), !(0 === c || 0 === b)) if (f || (f = d), b = (c + 0) / b, c = {
			width: "100%",
			height: "100%",
			left: 0,
			top: 0
		}, b > f ? (f = 100 * (b / f), c.height = f + "%", c.top = "-" + (f - 100) / 2 + "%") : b < f && (f = 100 * (f / b), c.width = f + "%", c.left = "-" + (f - 100) / 2 + "%"), OT.$.css(a, c), f = a.querySelector("video")) g ? (g = a.offsetWidth, a = a.offsetHeight, c = g - a, c = {
			width: a + "px",
			height: g + "px",
			marginTop: -(c / 2) + "px",
			marginLeft: c / 2 + "px"
		}, OT.$.css(f, c)) : OT.$.css(f, {
			width: "",
			height: "",
			marginTop: "",
			marginLeft: ""
		})
	}
	function a(a, b, d) {
		b = parseInt(b, 10);
		d = parseInt(d, 10);
		b < k || d < f ? OT.$.addClass(a, "OT_micro") : OT.$.removeClass(a, "OT_micro");
		b < l || d < c ? OT.$.addClass(a, "OT_mini") : OT.$.removeClass(a, "OT_mini")
	}
	var d = 4 / 3,
		l = 128,
		c = 128,
		k = 64,
		f = 64,
		g = function (a, c) {
			var b, d;
			a && a.nodeName ? (b = a, (!b.getAttribute("id") || 0 === b.getAttribute("id").length) && b.setAttribute("id", "OT_" + OT.$.uuid()), d = b.getAttribute("id")) : (b = OT.$(a), d = a || "OT_" + OT.$.uuid());
			b ? null == c || "replace" === c ? OT.$.emptyElement(b) : (d = document.createElement("div"), d.id = "OT_" + OT.$.uuid(), "append" === c ? (b.appendChild(d), b = d) : "before" === c ? (b.parentNode.insertBefore(d, b), b = d) : "after" === c && (b.parentNode.insertBefore(d, b.nextSibling), b = d)) : (b = OT.$.createElement("div", {
				id: d
			}), b.style.backgroundColor = "#000000", document.body.appendChild(b));
			return b
		};
	OT.WidgetView = function (c, d) {
		var e = g(c, d && d.insertMode),
			f = document.createElement("div"),
			k, l, p, t, v, s, u = !0,
			x = !1;
		d && (v = d.width, s = d.height, v && "number" === typeof v && (v += "px"), s && "number" === typeof s && (s += "px"), e.style.width = v ? v : "100%", e.style.height = s ? s : "50%", e.style.overflow = "hidden", a(e, v || "100%", s || "50%"), (void 0 === d.mirror || d.mirror) && OT.$.addClass(e, "OT_mirrored"));
		
		OT.$.addClass(e, "OT_loading");
		
		f.style.width = e.style.width;
		f.style.height = e.style.height;
		e.appendChild(f);
		b(f, e.offsetWidth, e.offsetHeight);
		v = document.createElement("div");
		OT.$.addClass(v, "OT_video-loading");
		f.appendChild(v);
		t = document.createElement("div");
		
		f.appendChild(t);
		TBPlugin.isInstalled() || (k = OT.$.observeStyleChanges(e, ["width", "height"], function (c) {
			var d = c.width ? c.width[1] : e.offsetWidth;
			c = c.height ? c.height[1] : e.offsetHeight;
			a(e, d, c);
			b(f, d, c, l ? l.aspectRatio() : null)
		}), p = OT.$.observeNodeOrChildNodeRemoval(e, function (a) {
			l && (OT.$.some(a, function (a) {
				return a === f || "VIDEO" === a.nodeName
			}) && (l.destroy(), l = null), f && (OT.$.removeElement(f), f = null), k && (k.disconnect(), k = null), p && (p.disconnect(), p = null))
		}));
		this.destroy = function () {
			k && (k.disconnect(), k = null);
			p && (p.disconnect(), p = null);
			l && (l.destroy(), l = null);
			e && (OT.$.removeElement(e), e = null)
		};
		this.setBackgroundImageURI = function (a) {
			"http:" !== a.substr(0, 5) && "https:" !== a.substr(0, 6) && "data:image/png;base64," !== a.substr(0, 22) && (a = "data:image/png;base64," + a);
			OT.$.css(t, "backgroundImage", "url(" + a + ")");
			OT.$.css(t, "backgroundSize", "contain");
			OT.$.css(t, "opacity", "1.0")
		};
		d && (d.style && d.style.backgroundImageURI) && this.setBackgroundImageURI(d.style.backgroundImageURI);
		this.bindVideo = function (a, c, d) {
			l && (l.destroy(), l = null);
			var h = c && c.error ? c.error : void 0;
			delete c.error;
			var g = new OT.VideoElement({
				attributes: c
			}, h);
			c.audioVolume && g.setAudioVolume(c.audioVolume);
			g.audioChannelType("telephony");
			g.appendTo(f).bindToStream(a, function (a) {
				if (a) g.destroy(), d(a);
				else {
					l = g;
					l.on({
						orientationChanged: function () {
							b(f, e.offsetWidth, e.offsetHeight, l.aspectRatio(), l.isRotated())
						}
					});
					a = function () {
						b(f, e.offsetWidth, e.offsetHeight, l ? l.aspectRatio() : null, l ? l.isRotated() : null)
					};
					if (isNaN(l.aspectRatio())) l.on("streamBound", a);
					else a();
					d(null, g)
				}
			});
			return g
		};
		this.video = function () {
			return l
		};
		OT.$.defineProperties(this, {
			showPoster: {
				get: function () {
					return !OT.$.isDisplayNone(t)
				},
				set: function (a) {
					a ? OT.$.show(t) : OT.$.hide(t)
				}
			},
			poster: {
				get: function () {
					return OT.$.css(t, "backgroundImage")
				},
				set: function (a) {
					OT.$.css(t, "backgroundImage", "url(" + a + ")")
				}
			},
			loading: {
				get: function () {
					return u
				},
				set: function (a) {
					(u =
					a) ? OT.$.addClass(e, "OT_loading") : OT.$.removeClass(e, "OT_loading")
				}
			},
			audioOnly: {
				get: function () {
					return x
				},
				set: function (a) {
					(x = a) ? OT.$.addClass(e, "OT_audio-only") : OT.$.removeClass(e, "OT_audio-only")
				}
			},
			domId: {
				get: function () {
					return e.getAttribute("id")
				}
			}
		});
		this.domElement = e;
		this.addError = function (a, c, b) {
			e.innerHTML = "\x3cp\x3e" + a + (c ? ' \x3cspan class\x3d"ot-help-message"\x3e' + c + "\x3c/span\x3e" : "") + "\x3c/p\x3e";
			OT.$.addClass(e, b || "OT_subscriber_error");
			e.querySelector("p").offsetHeight > e.offsetHeight && (e.querySelector("span").style.display = "none")
		}
	}
}(window);
!
function (b) {
	var a = b.webkitRTCPeerConnection || b.mozRTCPeerConnection;
	navigator.webkitGetUserMedia ? (webkitMediaStream.prototype.getVideoTracks || (webkitMediaStream.prototype.getVideoTracks = function () {
		return this.videoTracks
	}), webkitMediaStream.prototype.getAudioTracks || (webkitMediaStream.prototype.getAudioTracks = function () {
		return this.audioTracks
	}), webkitRTCPeerConnection.prototype.getLocalStreams || (webkitRTCPeerConnection.prototype.getLocalStreams = function () {
		return this.localStreams
	}), webkitRTCPeerConnection.prototype.getRemoteStreams || (webkitRTCPeerConnection.prototype.getRemoteStreams = function () {
		return this.remoteStreams
	})) : navigator.mozGetUserMedia && (MediaStream.prototype.getVideoTracks || (MediaStream.prototype.getVideoTracks = function () {
		return []
	}), MediaStream.prototype.getAudioTracks || (MediaStream.prototype.getAudioTracks = function () {
		return []
	}));
	"undefined" !== typeof b.MediaStreamTrack && !b.MediaStreamTrack.prototype.setEnabled && (b.MediaStreamTrack.prototype.setEnabled = function (a) {
		this.enabled = OT.$.castToBoolean(a)
	});
	OT.$.createPeerConnection =

	function (b, l, c, k) {
		if (TBPlugin.isInstalled()) TBPlugin.initPeerConnection(b, l, c, k);
		else {
			var f;
			try {
				f = new a(b, l)
			} catch (g) {
				k(g.message);
				return
			}
			k(null, f)
		}
	};
	OT.$.supportedCryptoScheme = function () {
		if (!OT.$.hasCapabilities("webrtc")) return "NONE";
		var a = b.navigator.userAgent.toLowerCase().match(/chrome\/([0-9\.]+)/i);
		return a && 25 > parseFloat(a[1], 10) ? "SDES_SRTP" : "DTLS_SRTP"
	}
}(window);
!
function (b) {
	OT.$.registerCapability("getUserMedia", function () {
		return !(!navigator.webkitGetUserMedia && !navigator.mozGetUserMedia && !TBPlugin.isInstalled())
	});
	OT.$.registerCapability("PeerConnection", function () {
		var a = OT.$.browserVersion();
		if (navigator.webkitGetUserMedia) return "function" === typeof b.webkitRTCPeerConnection && !! b.webkitRTCPeerConnection.prototype.addStream;
		if (navigator.mozGetUserMedia) {
			if ("function" === typeof b.mozRTCPeerConnection && 20 < a.version) try {
				return new b.mozRTCPeerConnection, !0
			} catch (d) {
				return !1
			}
		} else return TBPlugin.isInstalled()
	});
	OT.$.registerCapability("webrtc", function () {
		var a = OT.$.browserVersion(),
			b = (OT.properties.minimumVersion || {})[a.browser.toLowerCase()];
		return b && b > a.version ? (OT.debug("Support for", a.browser, "is disabled because we require", b, "but this is", a.version), !1) : OT.$.hasCapabilities("getUserMedia", "PeerConnection")
	});
	OT.$.registerCapability("bundle", function () {
		return OT.$.hasCapabilities("webrtc") && ("Chrome" === OT.$.browser() || TBPlugin.isInstalled())
	});
	OT.$.registerCapability("RTCPMux", function () {
		return OT.$.hasCapabilities("webrtc") && ("Chrome" === OT.$.browser() || TBPlugin.isInstalled())
	});
	OT.$.registerCapability("getMediaDevices", function () {
		return OT.$.isFunction(b.MediaStreamTrack) && OT.$.isFunction(b.MediaStreamTrack.getSources)
	})
}(window);
!
function () {
	var b, a, d, l, c, k;
	b = function () {
		if (navigator.getUserMedia) return OT.$.bind(navigator.getUserMedia, navigator);
		if (navigator.mozGetUserMedia) return OT.$.bind(navigator.mozGetUserMedia, navigator);
		if (navigator.webkitGetUserMedia) return OT.$.bind(navigator.webkitGetUserMedia, navigator);
		if (TBPlugin.isInstalled()) return OT.$.bind(TBPlugin.getUserMedia, TBPlugin)
	}();
	a = {
		PERMISSION_DENIED: "PermissionDeniedError",
		NOT_SUPPORTED_ERROR: "NotSupportedError",
		MANDATORY_UNSATISFIED_ERROR: " ConstraintNotSatisfiedError",
		NO_DEVICES_FOUND: "NoDevicesFoundError",
		HARDWARE_UNAVAILABLE: "HardwareUnavailableError",
		TrackStartError: "HardwareUnavailableError"
	};
	d = {
		PermissionDeniedError: "End-user denied permission to hardware devices",
		PermissionDismissedError: "End-user dismissed permission to hardware devices",
		NotSupportedError: "A constraint specified is not supported by the browser.",
		ConstraintNotSatisfiedError: "It's not possible to satisfy one or more constraints passed into the getUserMedia function",
		OverconstrainedError: "Due to changes in the environment, one or more mandatory constraints can no longer be satisfied.",
		NoDevicesFoundError: "No voice or video input devices are available on this machine.",
		HardwareUnavailableError: "The selected voice or video devices are unavailable. Verify that the chosen devices are not in use by another application."
	};
	l = function (a, c) {
		var b, k;
		b = c.hasOwnProperty(a) ? c[a] : a;
		k = d.hasOwnProperty(b) ? d[b] : "Unknown Error while getting user media";
		return {
			name: b,
			message: k
		}
	};
	c = function (c) {
		var b;
		OT.$.isObject(c) && c.name ? (b = l(c.name, a), b.constraintName = c.constraintName) : b = "string" === typeof c ? l(c, a) : {
			message: "Unknown Error type while getting media"
		};
		return b
	};
	k = function (a) {
		if (!a || !OT.$.isObject(a)) return !0;
		for (var c in a) if (a.hasOwnProperty(c) && a[c]) return !1;
		return !0
	};
	OT.$.getUserMedia = function (a, d, h, l, e, n, q) {
		var r = b;
		OT.$.isFunction(q) && (r = q);
		if (k(a)) OT.error("Couldn't get UserMedia: All constraints were false"), h.call(null, {
			name: "NO_VALID_CONSTRAINTS",
			message: "Video and Audio was disabled, you need to enabled at least one"
		});
		else {
			var p = null,
				t = !1;
			q = function () {
				p = null;
				t = !0;
				l && l()
			};
			var v = function (a) {
				p && clearTimeout(p);
				t && e && e();
				d.call(null, a)
			},
				s = function (a) {
					p && clearTimeout(p);
					t && e && e();
					a = c(a);
					"PermissionDeniedError" === a.name || "PermissionDismissedError" === a.name ? n.call(null, a) : h.call(null, a)
				};
			try {
				r(a, v, s)
			} catch (u) {
				OT.error("Couldn't get UserMedia: " + u.toString());
				s();
				return
			}
			p = -1 === location.protocol.indexOf("https") ? setTimeout(q, 100) : setTimeout(q, 500)
		}
	}
}();
!
function (b) {
	var a = {
		audio: "audioInput",
		video: "videoInput"
	};
	OT.$.shouldAskForDevices = function (a) {
		var l = b.MediaStreamTrack;
		null != l && OT.$.isFunction(l.getSources) ? b.MediaStreamTrack.getSources(function (c) {
			var b = c.some(function (a) {
				return "audio" === a.kind
			});
			c = c.some(function (a) {
				return "video" === a.kind
			});
			a.call(null, {
				video: c,
				audio: b
			})
		}) : (OT.$.shouldAskForDevices = function (a) {
			setTimeout(OT.$.bind(a, null, {
				video: !0,
				audio: !0
			}))
		}, OT.$.shouldAskForDevices(a))
	};
	OT.$.getMediaDevices = function (d) {
		OT.$.hasCapabilities("getMediaDevices") ? b.MediaStreamTrack.getSources(function (b) {
			b = OT.$.filter(b, function (c) {
				return null != a[c.kind]
			});
			d(void 0, OT.$.map(b, function (c) {
				return {
					deviceId: c.id,
					label: c.label,
					kind: a[c.kind]
				}
			}))
		}) : d(Error("This browser does not support getMediaDevices APIs"))
	}
}(window);
(function (b) {
	function a(a, c) {
		var b = document.createElement("video");
		b.setAttribute("autoplay", "");
		b.innerHTML = a;
		if (c) {
			!0 === c.muted && (delete c.muted, b.muted = "true");
			for (var d in c) c.hasOwnProperty(d) && b.setAttribute(d, c[d])
		}
		return b
	}
	function d(a) {
		return e[parseInt(a, 10)] || "An unknown error occurred."
	}
	function l(a, e, h) {
		var f, g, k, l, m, x = OT.$.browserVersion(),
			x = "Chrome" === x.browser && 36 > x.version;
		navigator.mozGetUserMedia || !x || !(0 < e.getVideoTracks().length && e.getVideoTracks()[0].enabled) ? (f = function () {
			clearTimeout(m);
			a.removeEventListener("loadedmetadata", g, !1);
			a.removeEventListener("error", k, !1);
			e.onended = null
		}, g = function () {
			f();
			h(null)
		}, k = function (b) {
			f();
			c(a);
			h("There was an unexpected problem with the Video Stream: " + d(b.target.error.code))
		}, l = function () {
			f();
			c(a);
			h("Stream ended while trying to bind it to a video element.")
		}, m = setTimeout(OT.$.bind(function () {
			0 === a.currentTime ? (f(), h("The video stream failed to connect. Please notify the site owner if this continues to happen.")) : !0 === e.ended ? l() : (OT.warn("Never got the loadedmetadata event but currentTime \x3e 0"), g(null))
		}, this), 3E4), a.addEventListener("loadedmetadata", g, !1), a.addEventListener("error", k, !1), e.onended = l) : OT.$.callAsync(h, null);
		void 0 !== a.srcObject ? a.srcObject = e : void 0 !== a.mozSrcObject ? a.mozSrcObject = e : a.src = b.URL.createObjectURL(e);
		a.play()
	}
	function c(a) {
		void 0 !== a.srcObject ? a.srcObject = null : void 0 !== a.mozSrcObject ? a.mozSrcObject = null : b.URL.revokeObjectURL(a.src)
	}
	var k = {
		"0": "rotate(0deg)",
		270: "rotate(90deg)",
		90: "rotate(-90deg)",
		180: "rotate(180deg)"
	};
	OT.VideoOrientation = {
		ROTATED_NORMAL: 0,
		ROTATED_LEFT: 270,
		ROTATED_RIGHT: 90,
		ROTATED_UPSIDE_DOWN: 180
	};
	var f = 2 * Math.PI / 360;
	OT.VideoElement = function (a) {
		var c = OT.$.defaults(a && !OT.$.isFunction(a) ? a : {}, {
			fallbackText: "Sorry, Web RTC is not available in your browser"
		}),
			b = OT.$.isFunction(arguments[arguments.length - 1]) ? arguments[arguments.length - 1] : void 0,
			d = OT.$.bind(function (a) {
				this.trigger("orientationChanged", a)
			}, this),
			e = TBPlugin.isInstalled() ? new g(c, b, d) : new h(c, b, d),
			f = !1,
			k, l;
		OT.$.eventing(this);
		OT.$.defineProperties(this, {
			domElement: {
				get: function () {
					return e.domElement()
				}
			},
			videoWidth: {
				get: function () {
					return e["video" + (this.isRotated() ? "Height" : "Width")]()
				}
			},
			videoHeight: {
				get: function () {
					return e["video" + (this.isRotated() ? "Width" : "Height")]()
				}
			},
			aspectRatio: {
				get: function () {
					return (this.videoWidth() + 0) / this.videoHeight()
				}
			},
			isRotated: {
				get: function () {
					return e.isRotated()
				}
			},
			orientation: {
				get: function () {
					return e.orientation()
				},
				set: function (a) {
					e.orientation(a)
				}
			},
			audioChannelType: {
				get: function () {
					return e.audioChannelType()
				},
				set: function (a) {
					e.audioChannelType(a)
				}
			}
		});
		this.imgData =

		function () {
			return e.imgData()
		};
		this.appendTo = function (a) {
			e.appendTo(a);
			return this
		};
		this.bindToStream = function (a, c) {
			f = !1;
			k = a;
			e.bindToStream(a, OT.$.bind(function (a) {
				a ? c(a) : (f = !0, l && (this.setAudioVolume(l), l = null), c(null))
			}, this));
			return this
		};
		this.unbindStream = function () {
			if (!k) return this;
			k = null;
			e.unbindStream();
			return this
		};
		this.setAudioVolume = function (a) {
			f ? e.setAudioVolume(OT.$.roundFloat(a / 100, 2)) : l = a;
			return this
		};
		this.getAudioVolume = function () {
			return f ? parseInt(100 * e.getAudioVolume(), 10) : l || 50
		};
		this.whenTimeIncrements = function (a, c) {
			e.whenTimeIncrements(a, c);
			return this
		};
		this.destroy = function () {
			this.off();
			e.destroy()
		}
	};
	var g = function (a, c, b) {
		var d, e;
		m(this, function () {
			return d.domElement
		}, b);
		this.domElement = function () {
			return d ? d.domElement : void 0
		};
		this.videoWidth = function () {
			return d ? d.getVideoWidth() : void 0
		};
		this.videoHeight = function () {
			return d ? d.getVideoHeight() : void 0
		};
		this.imgData = function () {
			return d ? d.getImgData() : null
		};
		this.appendTo = function (a) {
			e = a;
			return this
		};
		this.bindToStream = function (a, c) {
			if (e) return d = a._.render(), d.appendTo(e), d.show(c), this;
			c("The VideoElement must attached to a DOM node before a stream can be bound")
		};
		this.unbindStream = function () {
			d && (d.destroy(), d = e = null);
			return this
		};
		this.setAudioVolume = function (a) {
			d && d.setVolume(a)
		};
		this.getAudioVolume = function () {
			return d ? d.getVolume() : 50
		};
		this.audioChannelType = function () {
			return "unknown"
		};
		this.whenTimeIncrements = function (a, c) {
			OT.$.callAsync(OT.$.bind(a, c))
		};
		this.destroy = function () {
			this.unbindStream()
		}
	},
		h = function (b, e, h) {
			var f, g = !1,
				k = OT.$.bind(function (a) {
					a = "There was an unexpected problem with the Video Stream: " + d(a.target.error.code);
					e(a, this, "VideoElement")
				}, this),
				s = function () {
					g || (OT.warn("Video element paused, auto-resuming. If you intended to do this, use publishVideo(false) or subscribeToVideo(false) instead."), g = !0);
					f.play()
				};
			f = a(b.fallbackText, b.attributes);
			f.addEventListener("pause", s);
			m(this, function () {
				return f
			}, h);
			this.domElement = function () {
				return f
			};
			this.videoWidth = function () {
				return f.videoWidth
			};
			this.videoHeight =

			function () {
				return f.videoHeight
			};
			this.imgData = function () {
				var a = OT.$.createElement("canvas", {
					width: f.videoWidth,
					height: f.videoHeight,
					style: {
						display: "none"
					}
				});
				document.body.appendChild(a);
				try {
					a.getContext("2d").drawImage(f, 0, 0, a.width, a.height)
				} catch (c) {
					return OT.warn("Cannot get image data yet"), null
				}
				var b = a.toDataURL("image/png");
				OT.$.removeElement(a);
				return OT.$.trim(b.replace("data:image/png;base64,", ""))
			};
			this.appendTo = function (a) {
				a.appendChild(f);
				return this
			};
			this.bindToStream = function (a, c) {
				l(f, a, function (a) {
					a ? c(a) : (f.addEventListener("error", k, !1), c(null))
				});
				return this
			};
			this.unbindStream = function () {
				f && c(f);
				return this
			};
			this.setAudioVolume = function (a) {
				f && (f.volume = a)
			};
			this.getAudioVolume = function () {
				return f ? f.volume : 50
			};
			this.audioChannelType = function (a) {
				void 0 !== a && (f.mozAudioChannelType = a);
				return "mozAudioChannelType" in f ? f.mozAudioChannelType : "unknown"
			};
			this.whenTimeIncrements = function (a, c) {
				if (f) {
					var b, d;
					d = OT.$.bind(function () {
						!b || b >= f.currentTime ? b = f.currentTime : (f.removeEventListener("timeupdate", d, !1), a.call(c, this))
					}, this);
					f.addEventListener("timeupdate", d, !1)
				}
			};
			this.destroy = function () {
				this.unbindStream();
				f && (f.removeEventListener("pause", s), OT.$.removeElement(f), f = null)
			}
		},
		m = function (a, c, b, d) {
			var e = d;
			OT.$.defineProperties(a, {
				isRotated: {
					get: function () {
						return this.orientation() && (270 === this.orientation().videoOrientation || 90 === this.orientation().videoOrientation)
					}
				},
				orientation: {
					get: function () {
						return e
					},
					set: function (a) {
						e = a;
						var d = k[a.videoOrientation] || k.ROTATED_NORMAL;
						switch (OT.$.browser()) {
						case "Chrome":
						case "Safari":
							c().style.webkitTransform =
							d;
							break;
						case "IE":
							if (9 <= OT.$.browserVersion().version) c().style.msTransform = d;
							else {
								var h = a.videoOrientation * f;
								a = c();
								d = Math.cos(h);
								h = Math.sin(h);
								a.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11\x3d" + d + ",M12\x3d" + -h + ",M21\x3d" + h + ",M22\x3d" + d + ",SizingMethod\x3d'auto expand')"
							}
							break;
						default:
							c().style.transform = d
						}
						b(e)
					}
				},
				audioChannelType: {
					get: function () {
						return "mozAudioChannelType" in this.domElement ? this.domElement.mozAudioChannelType : "unknown"
					},
					set: function (a) {
						"mozAudioChannelType" in this.domElement && (this.domElement.mozAudioChannelType = a)
					}
				}
			})
		},
		e = {};
	b.MediaError && (e[b.MediaError.MEDIA_ERR_ABORTED] = "The fetching process for the media resource was aborted by the user agent at the user's request.", e[b.MediaError.MEDIA_ERR_NETWORK] = "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.", e[b.MediaError.MEDIA_ERR_DECODE] = "An error of some description occurred while decoding the media resource, after the resource was established to be  usable.", e[b.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED] = "The media resource indicated by the src attribute was not suitable.")
})(window);
!
function () {
	var b, a, d = function (d) {
		a ? d(null, a) : b.get(d)
	};
	OT.overrideGuidStorage = function (d) {
		if (!OT.$.isFunction(d.get) || !OT.$.isFunction(d.set)) throw Error("The storageInterface argument does not seem to be valid, it must implement get and set methods");
		b !== d && (b = d, a && b.set(a, function (c) {
			c && OT.error("Failed to send initial Guid value (" + a + ") to the newly assigned Guid Storage. The error was: " + c)
		}))
	};
	OT._ || (OT._ = {});
	OT._.getClientGuid = function (l) {
		d(function (c, d) {
			c ? l(c) : (d ? a || (a = d) : (d = OT.$.uuid(), b.set(d, function (c) {
				c ? l(c) : a = d
			})), l(null, a))
		})
	};
	OT.overrideGuidStorage({
		get: function (a) {
			a(null, OT.$.getCookie("opentok_client_id"))
		},
		set: function (a, c) {
			OT.$.setCookie("opentok_client_id", a);
			c(null)
		}
	})
}(window);
!
function (b) {
	var a = [],
		d = !1;
	OT.Analytics = function () {
		var l = OT.properties.loggingURL + "/logging/ClientEvent",
			c = OT.properties.loggingURL + "/logging/ClientQos",
			k = {},
			f, g = OT.$.browserVersion(),
			h = function (a, b, d) {
				OT.$.post((b ? c : l) + "?_\x3d" + OT.$.uuid.v4(), {
					body: a,
					xdomainrequest: "IE" === g.browser & 10 > g.version,
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					}
				}, d)
			},
			m = function () {
				if (!d && 0 < a.length) {
					d = !0;
					var c = a[0],
						b = function () {
							a.shift();
							d = !1;
							m()
						};
					c && h(c.data, c.isQos, function (a) {
						if (a) OT.debug("Failed to send ClientEvent, moving on to the next item.");
						else c.onComplete();
						setTimeout(b, 50)
					})
				}
			};
		f = {
			payloadType: "payload_type",
			partnerId: "partner_id",
			streamId: "stream_id",
			sessionId: "session_id",
			connectionId: "connection_id",
			widgetType: "widget_type",
			widgetId: "widget_id",
			avgAudioBitrate: "avg_audio_bitrate",
			avgVideoBitrate: "avg_video_bitrate",
			localCandidateType: "local_candidate_type",
			remoteCandidateType: "remote_candidate_type",
			transportType: "transport_type"
		};
		this.logError = function (a, c, b, d, f) {
			f || (f = {});
			b = f.partnerId;
			if (!0 === OT.Config.get("exceptionLogging", "enabled", b)) {
				var h;
				b ? (h = [b, c, a].join("_"), h = 100 >= (k[h] || 0)) : h = !1;
				if (!h) {
					b = [b, c, a].join("_");
					var g = this.escapePayload(OT.$.extend(d || {}, {
						message: g,
						userAgent: OT.$.userAgent()
					}));
					k[b] = "undefined" !== typeof k[b] ? k[b] + 1 : 1;
					return this.logEvent(OT.$.extend(f, {
						action: c + "." + a,
						payloadType: g[0],
						payload: g[1]
					}))
				}
			}
		};
		this.logEvent = function (c) {
			var d = c.partnerId;
			c || (c = {});
			OT._.getClientGuid(function (h, g) {
				if (!h) {
					var k = OT.$.extend({
						variation: "",
						guid: g,
						widget_id: "",
						session_id: "",
						connection_id: "",
						stream_id: "",
						partner_id: d,
						source: b.location.href,
						section: "",
						build: ""
					}, c),
						l;
					for (l in f) f.hasOwnProperty(l) && k[l] && (k[f[l]] = k[l], delete k[l]);
					a.push({
						data: k,
						onComplete: function () {},
						isQos: !1
					});
					m()
				}
			})
		};
		this.logQOS = function (c) {
			var d = c.partnerId;
			c || (c = {});
			OT._.getClientGuid(function (h, g) {
				if (!h) {
					var k = OT.$.extend({
						guid: g,
						widget_id: "",
						session_id: "",
						connection_id: "",
						stream_id: "",
						partner_id: d,
						source: b.location.href,
						build: "",
						duration: 0
					}, c),
						l;
					for (l in f) f.hasOwnProperty(l) && (k[l] && (k[f[l]] = k[l]), delete k[l]);
					a.push({
						data: k,
						onComplete: function () {},
						isQos: !0
					});
					m()
				}
			})
		};
		this.escapePayload = function (a) {
			var c = [],
				b = [],
				d;
			for (d in a) a.hasOwnProperty(d) && (null !== a[d] && void 0 !== a[d]) && (c.push(a[d] ? a[d].toString().replace("|", "\\|") : ""), b.push(d.toString().replace("|", "\\|")));
			return [b.join("|"), c.join("|")]
		}
	}
}(window);
!
function () {
	OT.$.registerCapability("audioOutputLevelStat", function () {
		return "Chrome" === OT.$.browserVersion().browser
	});
	OT.$.registerCapability("webAudioCapableRemoteStream", function () {
		return "Firefox" === OT.$.browserVersion().browser
	});
	OT.$.registerCapability("getStatsWithSingleParameter", function () {
		return "Chrome" === OT.$.browserVersion().browser
	});
	OT.$.registerCapability("webAudio", function () {
		return "AudioContext" in window
	})
}();
!
function (b) {
	"file:" === location.protocol && alert("You cannot test a page using WebRTC through the file system due to browser permissions. You must run it over a web server.");
	b.OT || (b.OT = {});
	!b.URL && b.webkitURL && (b.URL = b.webkitURL);
	var a = new OT.Analytics,
		d, l = document.location.hash;
	OT.initSession = function (a, b) {
		null == b && (b = a, a = null);
		var d = OT.sessions.get(b);
		d || (d = new OT.Session(a, b), OT.sessions.add(d));
		return d
	};
	OT.initPublisher = function (a, b, d, g) {
		OT.debug("OT.initPublisher(" + a + ")");
		if (null != a && !(OT.$.isElementNode(a) || "string" === typeof a && document.getElementById(a)) && "function" !== typeof a) a = b, b = d, d = g;
		"function" === typeof a && (d = a, a = b = void 0);
		"function" === typeof b && (d = b, b = void 0);
		var h = new OT.Publisher;
		OT.publishers.add(h);
		var l = function (a) {
			a ? OT.dispatchError(a.code, a.message, d, h.session) : d && OT.$.isFunction(d) && d.apply(null, arguments)
		},
			e = function (a) {
				h.off("publishComplete", n);
				l(a)
			},
			n = function (a) {
				h.off("initSuccess", e);
				a && l(a)
			};
		h.once("initSuccess", e);
		h.once("publishComplete", n);
		h.publish(a, b);
		return h
	};
	OT.getDevices =

	function (a) {
		OT.$.getMediaDevices(a)
	};
	OT.checkSystemRequirements = function () {
		OT.debug("OT.checkSystemRequirements()");
		var c = OT.$.hasCapabilities("websockets", "webrtc") || TBPlugin.isInstalled(),
			c = c ? this.HAS_REQUIREMENTS : this.NOT_HAS_REQUIREMENTS;
		OT.checkSystemRequirements = function () {
			OT.debug("OT.checkSystemRequirements()");
			return c
		};
		c === this.NOT_HAS_REQUIREMENTS && a.logEvent({
			action: "checkSystemRequirements",
			variation: "notHasRequirements",
			payload_type: "userAgent",
			partner_id: OT.APIKEY,
			payload: OT.$.userAgent()
		});
		return c
	};
	OT.upgradeSystemRequirements = function () {
		OT.onLoad(function () {
			if (TBPlugin.isSupported()) OT.Dialogs.Plugin.promptToInstall().on({
				download: function () {
					b.location = TBPlugin.pathToInstaller()
				},
				refresh: function () {
					location.reload()
				},
				closed: function () {}
			});
			else document.body.appendChild(function () {
				var a = document.createElement("iframe");
				a.id = "_upgradeFlash";
				a.style.position = "absolute";
				a.style.position = "fixed";
				a.style.height = "100%";
				a.style.width = "100%";
				a.style.top = "0px";
				a.style.left = "0px";
				a.style.right = "0px";
				a.style.bottom = "0px";
				a.style.zIndex = 1E3;
				try {
					a.style.backgroundColor = "rgba(0,0,0,0.2)"
				} catch (b) {
					a.style.backgroundColor = "transparent", a.setAttribute("allowTransparency", "true")
				}
				a.setAttribute("frameBorder", "0");
				a.frameBorder = "0";
				a.scrolling = "no";
				a.setAttribute("scrolling", "no");
				var d = OT.$.browserVersion(),
					d = OT.properties.minimumVersion[d.browser.toLowerCase()] > d.version;
				a.src = OT.properties.assetURL + "/html/upgrade.html#" + encodeURIComponent(d ? "true" : "false") + "," + encodeURIComponent(JSON.stringify(OT.properties.minimumVersion)) + "|" + encodeURIComponent(document.location.href);
				return a
			}()), d && clearInterval(d), d = setInterval(function () {
				var a = document.location.hash,
					b = /^#?\d+&/;
				a !== l && b.test(a) && (l = a, "close_window" === a.replace(b, "") && (document.body.removeChild(document.getElementById("_upgradeFlash")), document.location.hash = ""))
			}, 100)
		})
	};
	OT.reportIssue = function () {
		OT.warn("ToDo: haven't yet implemented OT.reportIssue")
	};
	OT.components = {};
	OT.sessions = {};
	OT.rtc = {};
	OT.APIKEY = function () {
		var a = document.getElementsByTagName("script"),
			a = a[a.length - 1],
			a = a.getAttribute("src") || a.src;
		return (a = a.match(/[\?\&]apikey=([^&]+)/i)) ? a[1] : ""
	}();
	OT.HAS_REQUIREMENTS = 1;
	OT.NOT_HAS_REQUIREMENTS = 0;
	b.OT || (b.OT = OT);
	b.TB || (b.TB = OT)
}(window);
!
function () {
	OT.Collection = function (b) {
		var a = [],
			d = {},
			l = b || "id";
		OT.$.eventing(this, !0);
		var c = function (a, c) {
			return OT.$.isFunction(a[c]) ? a[c]() : a[c]
		},
			k = OT.$.bind(function (a) {
				this.trigger("update", a);
				this.trigger("update:" + a.target.id, a)
			}, this),
			f = OT.$.bind(function (a) {
				this.remove(a.target, a.reason)
			}, this);
		this.reset = function () {
			OT.$.forEach(a, function (a) {
				a.off("updated", k, this);
				a.off("destroyed", f, this)
			}, this);
			a = [];
			d = {}
		};
		this.destroy = function (c) {
			OT.$.forEach(a, function (a) {
				a && "function" === typeof a.destroy && a.destroy(c, !0)
			});
			this.reset();
			this.off()
		};
		this.get = function (c) {
			return c && void 0 !== d[c] ? a[d[c]] : void 0
		};
		this.has = function (a) {
			return a && void 0 !== d[a]
		};
		this.toString = function () {
			return a.toString()
		};
		this.where = function (b, d) {
			return OT.$.isFunction(b) ? OT.$.filter(a, b, d) : OT.$.filter(a, function (a) {
				for (var d in b) if (b.hasOwnProperty(d) && c(a, d) !== b[d]) return !1;
				return !0
			})
		};
		this.find = function (b, d) {
			var f;
			f = OT.$.isFunction(b) ? b : function (a) {
				for (var d in b) if (b.hasOwnProperty(d) && c(a, d) !== b[d]) return !1;
				return !0
			};
			f = OT.$.bind(f, d);
			for (var e = 0; e < a.length; ++e) if (!0 === f(a[e])) return a[e];
			return null
		};
		this.add = function (b) {
			var h = c(b, l);
			if (this.has(h)) return OT.warn("Model " + h + " is already in the collection", a), this;
			d[h] = a.push(b) - 1;
			b.on("updated", k, this);
			b.on("destroyed", f, this);
			this.trigger("add", b);
			this.trigger("add:" + h, b);
			return this
		};
		this.remove = function (b, h) {
			var m = c(b, l);
			a.splice(d[m], 1);
			for (var e = d[m]; e < a.length; ++e) d[a[e][l]] = e;
			delete d[m];
			b.off("updated", k, this);
			b.off("destroyed", f, this);
			this.trigger("remove", b, h);
			this.trigger("remove:" + m, b, h);
			return this
		};
		this._triggerAddEvents = function () {
			var a = this.where.apply(this, arguments);
			OT.$.forEach(a, function (a) {
				this.trigger("add", a);
				this.trigger("add:" + c(a, l), a)
			}, this)
		};
		this.length = function () {
			return a.length
		}
	}
}(this);
!
function () {
	OT.Event = OT.$.eventing.Event();
	OT.Event.names = {
		ACTIVE: "active",
		INACTIVE: "inactive",
		UNKNOWN: "unknown",
		PER_SESSION: "perSession",
		PER_STREAM: "perStream",
		EXCEPTION: "exception",
		ISSUE_REPORTED: "issueReported",
		SESSION_CONNECTED: "sessionConnected",
		SESSION_DISCONNECTED: "sessionDisconnected",
		STREAM_CREATED: "streamCreated",
		STREAM_DESTROYED: "streamDestroyed",
		CONNECTION_CREATED: "connectionCreated",
		CONNECTION_DESTROYED: "connectionDestroyed",
		SIGNAL: "signal",
		STREAM_PROPERTY_CHANGED: "streamPropertyChanged",
		MICROPHONE_LEVEL_CHANGED: "microphoneLevelChanged",
		RESIZE: "resize",
		SETTINGS_BUTTON_CLICK: "settingsButtonClick",
		DEVICE_INACTIVE: "deviceInactive",
		INVALID_DEVICE_NAME: "invalidDeviceName",
		ACCESS_ALLOWED: "accessAllowed",
		ACCESS_DENIED: "accessDenied",
		ACCESS_DIALOG_OPENED: "accessDialogOpened",
		ACCESS_DIALOG_CLOSED: "accessDialogClosed",
		ECHO_CANCELLATION_MODE_CHANGED: "echoCancellationModeChanged",
		PUBLISHER_DESTROYED: "destroyed",
		SUBSCRIBER_DESTROYED: "destroyed",
		DEVICES_DETECTED: "devicesDetected",
		DEVICES_SELECTED: "devicesSelected",
		CLOSE_BUTTON_CLICK: "closeButtonClick",
		MICLEVEL: "microphoneActivityLevel",
		MICGAINCHANGED: "microphoneGainChanged",
		ENV_LOADED: "envLoaded",
		ENV_UNLOADED: "envUnloaded",
		AUDIO_LEVEL_UPDATED: "audioLevelUpdated"
	};
	OT.ExceptionCodes = {
		JS_EXCEPTION: 2E3,
		AUTHENTICATION_ERROR: 1004,
		INVALID_SESSION_ID: 1005,
		CONNECT_FAILED: 1006,
		CONNECT_REJECTED: 1007,
		CONNECTION_TIMEOUT: 1008,
		NOT_CONNECTED: 1010,
		P2P_CONNECTION_FAILED: 1013,
		API_RESPONSE_FAILURE: 1014,
		UNABLE_TO_PUBLISH: 1500,
		UNABLE_TO_SUBSCRIBE: 1501,
		UNABLE_TO_FORCE_DISCONNECT: 1520,
		UNABLE_TO_FORCE_UNPUBLISH: 1530
	};
	OT.ExceptionEvent = function (a, b, d, g, h, l) {
		OT.Event.call(this, a);
		this.message = b;
		this.title = d;
		this.code = g;
		this.component = h;
		this.target = l
	};
	OT.IssueReportedEvent = function (a, b) {
		OT.Event.call(this, a);
		this.issueId = b
	};
	OT.EnvLoadedEvent = function (a) {
		OT.Event.call(this, a)
	};
	var b = !1;
	OT.ConnectionEvent = function (a, d, f) {
		OT.Event.call(this, a, !1);
		OT.$.canDefineProperty ? Object.defineProperty(this, "connections", {
			get: function () {
				b || (OT.warn("OT.ConnectionEvent connections property is deprecated, use connection instead."), b = !0);
				return [d]
			}
		}) : this.connections = [d];
		this.connection = d;
		this.reason = f
	};
	var a = !1;
	OT.StreamEvent = function (b, d, f, g) {
		OT.Event.call(this, b, g);
		OT.$.canDefineProperty ? Object.defineProperty(this, "streams", {
			get: function () {
				a || (OT.warn("OT.StreamEvent streams property is deprecated, use stream instead."), a = !0);
				return [d]
			}
		}) : this.streams = [d];
		this.stream = d;
		this.reason = f
	};
	var d = !1,
		l = !1;
	OT.SessionConnectEvent = function (a) {
		OT.Event.call(this, a, !1);
		OT.$.canDefineProperty ? Object.defineProperties(this, {
			connections: {
				get: function () {
					d || (OT.warn("OT.SessionConnectedEvent no longer includes connections. Listen for connectionCreated events instead."), d = !0);
					return []
				}
			},
			streams: {
				get: function () {
					OT.warn("OT.SessionConnectedEvent no longer includes streams. Listen for streamCreated events instead.");
					d = !0;
					return []
				}
			},
			archives: {
				get: function () {
					l || (OT.warn("OT.SessionConnectedEvent no longer includes archives. Listen for archiveStarted events instead."), l = !0);
					return []
				}
			}
		}) : (this.connections = [], this.streams = [], this.archives = [])
	};
	OT.SessionDisconnectEvent =

	function (a, b, d) {
		OT.Event.call(this, a, d);
		this.reason = b
	};
	OT.StreamPropertyChangedEvent = function (a, b, d, g, h) {
		OT.Event.call(this, a, !1);
		this.type = a;
		this.stream = b;
		this.changedProperty = d;
		this.oldValue = g;
		this.newValue = h
	};
	OT.ArchiveEvent = function (a, b) {
		OT.Event.call(this, a, !1);
		this.type = a;
		this.id = b.id;
		this.name = b.name;
		this.status = b.status;
		this.archive = b
	};
	OT.ArchiveUpdatedEvent = function (a, b, d, g) {
		OT.Event.call(this, "updated", !1);
		this.target = a;
		this.changedProperty = b;
		this.oldValue = d;
		this.newValue = g
	};
	OT.SignalEvent =

	function (a, b, d) {
		OT.Event.call(this, a ? "signal:" + a : OT.Event.names.SIGNAL, !1);
		this.data = b;
		this.from = d
	};
	OT.StreamUpdatedEvent = function (a, b, d, g) {
		OT.Event.call(this, "updated", !1);
		this.target = a;
		this.changedProperty = b;
		this.oldValue = d;
		this.newValue = g
	};
	OT.DestroyedEvent = function (a, b, d) {
		OT.Event.call(this, a, !1);
		this.target = b;
		this.reason = d
	};
	OT.VideoEnabledChangedEvent = function (a, b) {
		OT.Event.call(this, a, !1);
		this.reason = b.reason
	};
	OT.VideoDisableWarningEvent = function (a) {
		OT.Event.call(this, a, !1)
	};
	OT.AudioLevelUpdatedEvent =

	function (a) {
		OT.Event.call(this, OT.Event.names.AUDIO_LEVEL_UPDATED, !1);
		this.audioLevel = a
	}
}(window);
(function (b) {
	function a(a, b, c) {
		return b <= a && a <= c
	}
	function d(a, b) {
		return Math.floor(a / b)
	}
	function l(a) {
		var b = 0;
		this.get = function () {
			return b >= a.length ? -1 : Number(a[b])
		};
		this.offset = function (c) {
			b += c;
			if (0 > b) throw Error("Seeking past start of the buffer");
			if (b > a.length) throw Error("Seeking past EOF");
		};
		this.match = function (c) {
			if (c.length > b + a.length) return !1;
			var d;
			for (d = 0; d < c.length; d += 1) if (Number(a[b + d]) !== c[d]) return !1;
			return !0
		}
	}
	function c(a) {
		var b = 0;
		this.emit = function (c) {
			var d = -1,
				e;
			for (e = 0; e < arguments.length; ++e) d =
			Number(arguments[e]), a[b++] = d;
			return d
		}
	}
	function k(b) {
		var c = 0,
			d = function (b) {
				for (var c = [], d = 0, e = b.length; d < b.length;) {
					var h = b.charCodeAt(d);
					if (a(h, 55296, 57343)) if (a(h, 56320, 57343)) c.push(65533);
					else if (d === e - 1) c.push(65533);
					else {
						var f = b.charCodeAt(d + 1);
						a(f, 56320, 57343) ? (h &= 1023, f &= 1023, d += 1, c.push(65536 + (h << 10) + f)) : c.push(65533)
					} else c.push(h);
					d += 1
				}
				return c
			}(b);
		this.offset = function (a) {
			c += a;
			if (0 > c) throw Error("Seeking past start of the buffer");
			if (c > d.length) throw Error("Seeking past EOF");
		};
		this.get =

		function () {
			return c >= d.length ? -1 : d[c]
		}
	}
	function f() {
		var a = "";
		this.string = function () {
			return a
		};
		this.emit = function (b) {
			65535 >= b ? a += String.fromCharCode(b) : (b -= 65536, a += String.fromCharCode(55296 + (b >> 10 & 1023)), a += String.fromCharCode(56320 + (b & 1023)))
		}
	}
	function g(a) {
		this.name = "EncodingError";
		this.message = a;
		this.code = 0
	}
	function h(a, b) {
		if (a) throw new g("Decoder error");
		return b || 65533
	}
	function m(a) {
		throw new g("The code point " + a + " could not be encoded.");
	}
	function e(a) {
		a = String(a).trim().toLowerCase();
		return Object.prototype.hasOwnProperty.call(R, a) ? R[a] : null
	}
	function n(a, b) {
		return (b || [])[a] || null
	}
	function q(a, b) {
		var c = b.indexOf(a);
		return -1 === c ? null : c
	}
	function r(b) {
		var c = b.fatal,
			d = 0,
			e = 0,
			f = 0,
			g = 0;
		this.decode = function (b) {
			var k = b.get();
			if (-1 === k) return 0 !== e ? h(c) : -1;
			b.offset(1);
			if (0 === e) {
				if (a(k, 0, 127)) return k;
				if (a(k, 194, 223)) e = 1, g = 128, d = k - 192;
				else if (a(k, 224, 239)) e = 2, g = 2048, d = k - 224;
				else if (a(k, 240, 244)) e = 3, g = 65536, d = k - 240;
				else return h(c);
				d *= Math.pow(64, e);
				return null
			}
			if (!a(k, 128, 191)) return g = f = e = d = 0, b.offset(-1), h(c);
			f += 1;
			d += (k - 128) * Math.pow(64, e - f);
			if (f !== e) return null;
			b = d;
			k = g;
			g = f = e = d = 0;
			return a(b, k, 1114111) && !a(b, 55296, 57343) ? b : h(c)
		}
	}
	function p(b) {
		this.encode = function (b, c) {
			var e = c.get();
			if (-1 === e) return -1;
			c.offset(1);
			if (a(e, 55296, 57343)) return m(e);
			if (a(e, 0, 127)) return b.emit(e);
			var h, f;
			a(e, 128, 2047) ? (h = 1, f = 192) : a(e, 2048, 65535) ? (h = 2, f = 224) : a(e, 65536, 1114111) && (h = 3, f = 240);
			for (f = b.emit(d(e, Math.pow(64, h)) + f); 0 < h;) f = d(e, Math.pow(64, h - 1)), f = b.emit(128 + f % 64), h -= 1;
			return f
		}
	}
	function t(b, c) {
		var d = c.fatal;
		this.decode = function (c) {
			var e = c.get();
			if (-1 === e) return -1;
			c.offset(1);
			if (a(e, 0, 127)) return e;
			c = b[e - 128];
			return null === c ? h(d) : c
		}
	}
	function v(b, c) {
		this.encode = function (c, d) {
			var e = d.get();
			if (-1 === e) return -1;
			d.offset(1);
			if (a(e, 0, 127)) return c.emit(e);
			var h = q(e, b);
			null === h && m(e);
			return c.emit(h + 128)
		}
	}
	function s(b, c) {
		var d = c.fatal,
			e = 0,
			f = 0,
			k = 0;
		this.decode = function (c) {
			var g = c.get();
			if (-1 === g && 0 === e && 0 === f && 0 === k) return -1;
			if (-1 === g && (0 !== e || 0 !== f || 0 !== k)) k = f = e = 0, h(d);
			c.offset(1);
			var l;
			if (0 !== k) {
				l = null;
				if (a(g, 48, 57)) if (g = 10 * (126 * (10 * (e - 129) + (f - 48)) + (k - 129)) + g - 48, 39419 < g && 189E3 > g || 1237575 < g) l = null;
				else {
					var m = 0;
					l = 0;
					var q = D.gb18030,
						p;
					for (p = 0; p < q.length; ++p) {
						var K = q[p];
						if (K[0] <= g) m = K[0], l = K[1];
						else break
					}
					l = l + g - m
				}
				k = f = e = 0;
				return null === l ? (c.offset(-3), h(d)) : l
			}
			if (0 !== f) {
				if (a(g, 129, 254)) return k = g, null;
				c.offset(-2);
				f = e = 0;
				return h(d)
			}
			if (0 !== e) {
				if (a(g, 48, 57) && b) return f = g, null;
				l = e;
				m = null;
				e = 0;
				q = 127 > g ? 64 : 65;
				if (a(g, 64, 126) || a(g, 128, 254)) m = 190 * (l - 129) + (g - q);
				l = null === m ? null : n(m, D.gbk);
				null === m && c.offset(-1);
				return null === l ? h(d) : l
			}
			return a(g, 0, 127) ? g : 128 === g ? 8364 : a(g, 129, 254) ? (e = g, null) : h(d)
		}
	}
	function u(b, c) {
		this.encode = function (c, e) {
			var f = e.get();
			if (-1 === f) return -1;
			e.offset(1);
			if (a(f, 0, 127)) return c.emit(f);
			var h = q(f, D.gbk);
			if (null !== h) return f = d(h, 190) + 129, h %= 190, c.emit(f, h + (63 > h ? 64 : 65));
			if (null === h && !b) return m(f);
			var g = h = 0,
				k = D.gb18030,
				l;
			for (l = 0; l < k.length; ++l) {
				var n = k[l];
				if (n[1] <= f) h = n[1], g = n[0];
				else break
			}
			h = g + f - h;
			f = d(d(d(h, 10), 126), 10);
			h -= 12600 * f;
			g = d(d(h, 10), 126);
			h -= 1260 * g;
			k = d(h, 10);
			return c.emit(f + 129, g + 48, k + 129, h - 10 * k + 48)
		}
	}
	function x(b) {
		var c =
		b.fatal,
			d = !1,
			e = 0;
		this.decode = function (b) {
			var f = b.get();
			if (-1 === f && 0 === e) return -1;
			if (-1 === f && 0 !== e) return e = 0, h(c);
			b.offset(1);
			if (126 === e) {
				e = 0;
				if (123 === f) return d = !0, null;
				if (125 === f) return d = !1, null;
				if (126 === f) return 126;
				if (10 === f) return null;
				b.offset(-1);
				return h(c)
			}
			if (0 !== e) {
				b = e;
				e = 0;
				var g = null;
				a(f, 33, 126) && (g = n(190 * (b - 1) + (f + 63), D.gbk));
				10 === f && (d = !1);
				return null === g ? h(c) : g
			}
			if (126 === f) return e = 126, null;
			if (d) {
				if (a(f, 32, 127)) return e = f, null;
				10 === f && (d = !1);
				return h(c)
			}
			return a(f, 0, 127) ? f : h(c)
		}
	}
	function E(b) {
		var c = !1;
		this.encode = function (b, e) {
			var f = e.get();
			if (-1 === f) return -1;
			e.offset(1);
			if (a(f, 0, 127) && c) return e.offset(-1), c = !1, b.emit(126, 125);
			if (126 === f) return b.emit(126, 126);
			if (a(f, 0, 127)) return b.emit(f);
			if (!c) return e.offset(-1), c = !0, b.emit(126, 123);
			var h = q(f, D.gbk);
			if (null === h) return m(f);
			var g = d(h, 190) + 1,
				h = h % 190 - 63;
			return !a(g, 33, 126) || !a(h, 33, 126) ? m(f) : b.emit(g, h)
		}
	}
	function y(b) {
		var c = b.fatal,
			d = 0,
			e = null;
		this.decode = function (b) {
			if (null !== e) return b = e, e = null, b;
			var f = b.get();
			if (-1 === f && 0 === d) return -1;
			if (-1 === f && 0 !== d) return d = 0, h(c);
			b.offset(1);
			if (0 !== d) {
				var g = d,
					k = null;
				d = 0;
				var l = 127 > f ? 64 : 98;
				if (a(f, 64, 126) || a(f, 161, 254)) k = 157 * (g - 129) + (f - l);
				if (1133 === k) return e = 772, 202;
				if (1135 === k) return e = 780, 202;
				if (1164 === k) return e = 772, 234;
				if (1166 === k) return e = 780, 234;
				f = null === k ? null : n(k, D.big5);
				null === k && b.offset(-1);
				return null === f ? h(c) : f
			}
			return a(f, 0, 127) ? f : a(f, 129, 254) ? (d = f, null) : h(c)
		}
	}
	function B(b) {
		this.encode = function (b, c) {
			var e = c.get();
			if (-1 === e) return -1;
			c.offset(1);
			if (a(e, 0, 127)) return b.emit(e);
			var f = q(e, D.big5);
			if (null === f) return m(e);
			e = d(f, 157) + 129;
			f %= 157;
			return b.emit(e, f + (63 > f ? 64 : 98))
		}
	}
	function A(b) {
		var c = b.fatal,
			d = 0,
			e = 0;
		this.decode = function (b) {
			var f = b.get();
			if (-1 === f) {
				if (0 === d && 0 === e) return -1;
				e = d = 0;
				return h(c)
			}
			b.offset(1);
			var g, k;
			return 0 !== e ? (g = e, e = 0, k = null, a(g, 161, 254) && a(f, 161, 254) && (k = n(94 * (g - 161) + f - 161, D.jis0212)), a(f, 161, 254) || b.offset(-1), null === k ? h(c) : k) : 142 === d && a(f, 161, 223) ? (d = 0, 65377 + f - 161) : 143 === d && a(f, 161, 254) ? (d = 0, e = f, null) : 0 !== d ? (g = d, d = 0, k = null, a(g, 161, 254) && a(f, 161, 254) && (k = n(94 * (g - 161) + f - 161, D.jis0208)), a(f, 161, 254) || b.offset(-1), null === k ? h(c) : k) : a(f, 0, 127) ? f : 142 === f || 143 === f || a(f, 161, 254) ? (d = f, null) : h(c)
		}
	}
	function w(b) {
		this.encode = function (b, c) {
			var e = c.get();
			if (-1 === e) return -1;
			c.offset(1);
			if (a(e, 0, 127)) return b.emit(e);
			if (165 === e) return b.emit(92);
			if (8254 === e) return b.emit(126);
			if (a(e, 65377, 65439)) return b.emit(142, e - 65377 + 161);
			var f = q(e, D.jis0208);
			if (null === f) return m(e);
			e = d(f, 94) + 161;
			return b.emit(e, f % 94 + 161)
		}
	}
	function F(b) {
		var c = b.fatal,
			d = 0,
			e = !1,
			f = 0;
		this.decode = function (b) {
			var g =
			b.get(); - 1 !== g && b.offset(1);
			switch (d) {
			default:
			case 0:
				return 27 === g ? (d = 1, null) : a(g, 0, 127) ? g : -1 === g ? -1 : h(c);
			case 1:
				if (36 === g || 40 === g) return f = g, d = 2, null; - 1 !== g && b.offset(-1);
				d = 0;
				return h(c);
			case 2:
				var k = f;
				f = 0;
				if (36 === k && (64 === g || 66 === g)) return e = !1, d = 4, null;
				if (36 === k && 40 === g) return d = 3, null;
				if (40 === k && (66 === g || 74 === g)) return d = 0, null;
				if (40 === k && 73 === g) return d = 6, null; - 1 === g ? b.offset(-1) : b.offset(-2);
				d = 0;
				return h(c);
			case 3:
				if (68 === g) return e = !0, d = 4, null; - 1 === g ? b.offset(-2) : b.offset(-3);
				d = 0;
				return h(c);
			case 4:
				if (10 === g) return d = 0, h(c, 10);
				if (27 === g) return d = 1, null;
				if (-1 === g) return -1;
				f = g;
				d = 5;
				return null;
			case 5:
				d = 4;
				if (-1 === g) return h(c);
				b = null;
				k = 94 * (f - 33) + g - 33;
				a(f, 33, 126) && a(g, 33, 126) && (b = !1 === e ? n(k, D.jis0208) : n(k, D.jis0212));
				return null === b ? h(c) : b;
			case 6:
				return 27 === g ? (d = 1, null) : a(g, 33, 95) ? 65377 + g - 33 : -1 === g ? -1 : h(c)
			}
		}
	}
	function G(b) {
		var c = 0;
		this.encode = function (b, e) {
			var f = e.get();
			if (-1 === f) return -1;
			e.offset(1);
			if ((a(f, 0, 127) || 165 === f || 8254 === f) && 0 !== c) return e.offset(-1), c = 0, b.emit(27, 40, 66);
			if (a(f, 0, 127)) return b.emit(f);
			if (165 === f) return b.emit(92);
			if (8254 === f) return b.emit(126);
			if (a(f, 65377, 65439) && 2 !== c) return e.offset(-1), c = 2, b.emit(27, 40, 73);
			if (a(f, 65377, 65439)) return b.emit(f - 65377 - 33);
			if (1 !== c) return e.offset(-1), c = 1, b.emit(27, 36, 66);
			var h = q(f, D.jis0208);
			if (null === h) return m(f);
			f = d(h, 94) + 33;
			return b.emit(f, h % 94 + 33)
		}
	}
	function H(b) {
		var c = b.fatal,
			d = 0;
		this.decode = function (b) {
			var e = b.get();
			if (-1 === e && 0 === d) return -1;
			if (-1 === e && 0 !== d) return d = 0, h(c);
			b.offset(1);
			if (0 !== d) {
				var f = d;
				d = 0;
				if (a(e, 64, 126) || a(e, 128, 252)) return b = n(188 * (f - (160 > f ? 129 : 193)) + e - (127 > e ? 64 : 65), D.jis0208), null === b ? h(c) : b;
				b.offset(-1);
				return h(c)
			}
			return a(e, 0, 128) ? e : a(e, 161, 223) ? 65377 + e - 161 : a(e, 129, 159) || a(e, 224, 252) ? (d = e, null) : h(c)
		}
	}
	function I(b) {
		this.encode = function (b, c) {
			var e = c.get();
			if (-1 === e) return -1;
			c.offset(1);
			if (a(e, 0, 128)) return b.emit(e);
			if (165 === e) return b.emit(92);
			if (8254 === e) return b.emit(126);
			if (a(e, 65377, 65439)) return b.emit(e - 65377 + 161);
			var f = q(e, D.jis0208);
			if (null === f) return m(e);
			e = d(f, 188);
			f %= 188;
			return b.emit(e + (31 > e ? 129 : 193), f + (63 > f ? 64 : 65))
		}
	}
	function C(b) {
		var c = b.fatal,
			d = 0;
		this.decode = function (b) {
			var e = b.get();
			if (-1 === e && 0 === d) return -1;
			if (-1 === e && 0 !== d) return d = 0, h(c);
			b.offset(1);
			if (0 !== d) {
				var f = d,
					g = null;
				d = 0;
				if (a(f, 129, 198)) {
					var k = 178 * (f - 129);
					a(e, 65, 90) ? g = k + e - 65 : a(e, 97, 122) ? g = k + 26 + e - 97 : a(e, 129, 254) && (g = k + 26 + 26 + e - 129)
				}
				a(f, 199, 253) && a(e, 161, 254) && (g = 12460 + 94 * (f - 199) + (e - 161));
				e = null === g ? null : n(g, D["euc-kr"]);
				null === g && b.offset(-1);
				return null === e ? h(c) : e
			}
			return a(e, 0, 127) ? e : a(e, 129, 253) ? (d = e, null) : h(c)
		}
	}
	function J(b) {
		this.encode =

		function (b, c) {
			var e = c.get();
			if (-1 === e) return -1;
			c.offset(1);
			if (a(e, 0, 127)) return b.emit(e);
			var f = q(e, D["euc-kr"]);
			if (null === f) return m(e);
			if (12460 > f) return e = d(f, 178) + 129, f %= 178, b.emit(e, f + (26 > f ? 65 : 52 > f ? 71 : 77));
			f -= 12460;
			e = d(f, 94) + 199;
			return b.emit(e, f % 94 + 161)
		}
	}
	function M(b) {
		var c = b.fatal,
			d = 0,
			e = 0;
		this.decode = function (b) {
			var f = b.get(); - 1 !== f && b.offset(1);
			switch (d) {
			default:
			case 0:
				return 14 === f ? (d = 4, null) : 15 === f ? null : 27 === f ? (d = 1, null) : a(f, 0, 127) ? f : -1 === f ? -1 : h(c);
			case 1:
				if (36 === f) return d = 2, null; - 1 !== f && b.offset(-1);
				d = 0;
				return h(c);
			case 2:
				if (41 === f) return d = 3, null; - 1 === f ? b.offset(-1) : b.offset(-2);
				d = 0;
				return h(c);
			case 3:
				if (67 === f) return d = 0, null; - 1 === f ? b.offset(-2) : b.offset(-3);
				d = 0;
				return h(c);
			case 4:
				if (10 === f) return d = 0, h(c, 10);
				if (14 === f) return null;
				if (15 === f) return d = 0, null;
				if (-1 === f) return -1;
				e = f;
				d = 5;
				return null;
			case 5:
				d = 4;
				if (-1 === f) return h(c);
				b = null;
				a(e, 33, 70) && a(f, 33, 126) ? b = n(178 * (e - 1) + 52 + f - 1, D["euc-kr"]) : a(e, 71, 126) && a(f, 33, 126) && (b = n(12460 + 94 * (e - 71) + (f - 33), D["euc-kr"]));
				return null !== b ? b : h(c)
			}
		}
	}

	function K(b) {
		var c = !1,
			e = 0;
		this.encode = function (b, f) {
			var h = f.get();
			if (-1 === h) return -1;
			c || (c = !0, b.emit(27, 36, 41, 67));
			f.offset(1);
			if (a(h, 0, 127) && 0 !== e) return f.offset(-1), e = 0, b.emit(15);
			if (a(h, 0, 127)) return b.emit(h);
			if (1 !== e) return f.offset(-1), e = 1, b.emit(14);
			var g = q(h, D["euc-kr"]);
			if (null === g) return m(h);
			var k;
			if (12460 > g) return k = d(g, 178) + 1, g = g % 178 - 26 - 26 + 1, !a(k, 33, 70) || !a(g, 33, 126) ? m(h) : b.emit(k, g);
			g -= 12460;
			k = d(g, 94) + 71;
			g = g % 94 + 33;
			return !a(k, 71, 126) || !a(g, 33, 126) ? m(h) : b.emit(k, g)
		}
	}
	function P(b, c) {
		var d =
		c.fatal,
			e = null,
			f = null;
		this.decode = function (c) {
			var g = c.get();
			if (-1 === g && null === e && null === f) return -1;
			if (-1 === g && (null !== e || null !== f)) return h(d);
			c.offset(1);
			if (null === e) return e = g, null;
			g = b ? (e << 8) + g : (g << 8) + e;
			e = null;
			if (null !== f) {
				var k = f;
				f = null;
				if (a(g, 56320, 57343)) return 65536 + 1024 * (k - 55296) + (g - 56320);
				c.offset(-2);
				return h(d)
			}
			return a(g, 55296, 56319) ? (f = g, null) : a(g, 56320, 57343) ? h(d) : g
		}
	}
	function O(b, c) {
		this.encode = function (c, e) {
			function f(a) {
				var d = a >> 8;
				a &= 255;
				return b ? c.emit(d, a) : c.emit(a, d)
			}
			var h = e.get();
			if (-1 === h) return -1;
			e.offset(1);
			a(h, 55296, 57343) && m(h);
			if (65535 >= h) return f(h);
			var g = d(h - 65536, 1024) + 55296,
				h = (h - 65536) % 1024 + 56320;
			f(g);
			return f(h)
		}
	}
	function L(a, c) {
		if (!this || this === b) return new L(a, c);
		a = a ? String(a) : "utf-8";
		c = Object(c);
		this._encoding = e(a);
		if (null === this._encoding || "utf-8" !== this._encoding.name && "utf-16" !== this._encoding.name && "utf-16be" !== this._encoding.name) throw new TypeError("Unknown encoding: " + a);
		this._streaming = !1;
		this._encoder = null;
		this._options = {
			fatal: Boolean(c.fatal)
		};
		Object.defineProperty ? Object.defineProperty(this, "encoding", {
			get: function () {
				return this._encoding.name
			}
		}) : this.encoding = this._encoding.name;
		return this
	}
	function N(a, c) {
		if (!this || this === b) return new N(a, c);
		a = a ? String(a) : "utf-8";
		c = Object(c);
		this._encoding = e(a);
		if (null === this._encoding) throw new TypeError("Unknown encoding: " + a);
		this._streaming = !1;
		this._decoder = null;
		this._options = {
			fatal: Boolean(c.fatal)
		};
		Object.defineProperty ? Object.defineProperty(this, "encoding", {
			get: function () {
				return this._encoding.name
			}
		}) : this.encoding =
		this._encoding.name;
		return this
	}
	var Q = OT.$.browserVersion();
	if ((!Q || !("IE" === Q.name && 10 > Q.version)) && !(void 0 !== b.TextEncoder && void 0 !== b.TextDecoder)) {
		g.prototype = Error.prototype;
		var z = {},
			R = {};
		[{
			encodings: [{
				labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
				name: "utf-8"
			}],
			heading: "The Encoding"
		},
		{
			encodings: [{
				labels: ["cp864", "ibm864"],
				name: "ibm864"
			},
			{
				labels: ["cp866", "ibm866"],
				name: "ibm866"
			},
			{
				labels: "csisolatin2 iso-8859-2 iso-ir-101 iso8859-2 iso_8859-2 l2 latin2".split(" "),
				name: "iso-8859-2"
			},
			{
				labels: "csisolatin3 iso-8859-3 iso_8859-3 iso-ir-109 l3 latin3".split(" "),
				name: "iso-8859-3"
			},
			{
				labels: "csisolatin4 iso-8859-4 iso_8859-4 iso-ir-110 l4 latin4".split(" "),
				name: "iso-8859-4"
			},
			{
				labels: ["csisolatincyrillic", "cyrillic", "iso-8859-5", "iso_8859-5", "iso-ir-144"],
				name: "iso-8859-5"
			},
			{
				labels: "arabic csisolatinarabic ecma-114 iso-8859-6 iso_8859-6 iso-ir-127".split(" "),
				name: "iso-8859-6"
			},
			{
				labels: "csisolatingreek ecma-118 elot_928 greek greek8 iso-8859-7 iso_8859-7 iso-ir-126".split(" "),
				name: "iso-8859-7"
			},
			{
				labels: "csisolatinhebrew hebrew iso-8859-8 iso-8859-8-i iso-ir-138 iso_8859-8 visual".split(" "),
				name: "iso-8859-8"
			},
			{
				labels: "csisolatin6 iso-8859-10 iso-ir-157 iso8859-10 l6 latin6".split(" "),
				name: "iso-8859-10"
			},
			{
				labels: ["iso-8859-13"],
				name: "iso-8859-13"
			},
			{
				labels: ["iso-8859-14", "iso8859-14"],
				name: "iso-8859-14"
			},
			{
				labels: ["iso-8859-15", "iso_8859-15"],
				name: "iso-8859-15"
			},
			{
				labels: ["iso-8859-16"],
				name: "iso-8859-16"
			},
			{
				labels: ["koi8-r", "koi8_r"],
				name: "koi8-r"
			},
			{
				labels: ["koi8-u"],
				name: "koi8-u"
			},
			{
				labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
				name: "macintosh"
			},
			{
				labels: ["iso-8859-11", "tis-620", "windows-874"],
				name: "windows-874"
			},
			{
				labels: ["windows-1250", "x-cp1250"],
				name: "windows-1250"
			},
			{
				labels: ["windows-1251", "x-cp1251"],
				name: "windows-1251"
			},
			{
				labels: "ascii ansi_x3.4-1968 csisolatin1 iso-8859-1 iso8859-1 iso_8859-1 l1 latin1 us-ascii windows-1252".split(" "),
				name: "windows-1252"
			},
			{
				labels: ["cp1253", "windows-1253"],
				name: "windows-1253"
			},
			{
				labels: "csisolatin5 iso-8859-9 iso-ir-148 l5 latin5 windows-1254".split(" "),
				name: "windows-1254"
			},
			{
				labels: ["cp1255", "windows-1255"],
				name: "windows-1255"
			},
			{
				labels: ["cp1256", "windows-1256"],
				name: "windows-1256"
			},
			{
				labels: ["windows-1257"],
				name: "windows-1257"
			},
			{
				labels: ["cp1258", "windows-1258"],
				name: "windows-1258"
			},
			{
				labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
				name: "x-mac-cyrillic"
			}],
			heading: "Legacy single-byte encodings"
		},
		{
			encodings: [{
				labels: "chinese csgb2312 csiso58gb231280 gb2312 gbk gb_2312 gb_2312-80 iso-ir-58 x-gbk".split(" "),
				name: "gbk"
			},
			{
				labels: ["gb18030"],
				name: "gb18030"
			},
			{
				labels: ["hz-gb-2312"],
				name: "hz-gb-2312"
			}],
			heading: "Legacy multi-byte Chinese (simplified) encodings"
		},
		{
			encodings: [{
				labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
				name: "big5"
			}],
			heading: "Legacy multi-byte Chinese (traditional) encodings"
		},
		{
			encodings: [{
				labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
				name: "euc-jp"
			},
			{
				labels: ["csiso2022jp", "iso-2022-jp"],
				name: "iso-2022-jp"
			},
			{
				labels: "csshiftjis ms_kanji shift-jis shift_jis sjis windows-31j x-sjis".split(" "),
				name: "shift_jis"
			}],
			heading: "Legacy multi-byte Japanese encodings"
		},
		{
			encodings: [{
				labels: "cseuckr csksc56011987 euc-kr iso-ir-149 korean ks_c_5601-1987 ks_c_5601-1989 ksc5601 ksc_5601 windows-949".split(" "),
				name: "euc-kr"
			},
			{
				labels: ["csiso2022kr", "iso-2022-kr"],
				name: "iso-2022-kr"
			}],
			heading: "Legacy multi-byte Korean encodings"
		},
		{
			encodings: [{
				labels: ["utf-16", "utf-16le"],
				name: "utf-16"
			},
			{
				labels: ["utf-16be"],
				name: "utf-16be"
			}],
			heading: "Legacy utf-16 encodings"
		}].forEach(function (a) {
			a.encodings.forEach(function (a) {
				z[a.name] = a;
				a.labels.forEach(function (b) {
					R[b] = a
				})
			})
		});
		var D = b["encoding-indexes"] || {};
		z["utf-8"].getEncoder = function (a) {
			return new p(a)
		};
		z["utf-8"].getDecoder = function (a) {
			return new r(a)
		};
		(function () {
			"ibm864 ibm866 iso-8859-2 iso-8859-3 iso-8859-4 iso-8859-5 iso-8859-6 iso-8859-7 iso-8859-8 iso-8859-10 iso-8859-13 iso-8859-14 iso-8859-15 iso-8859-16 koi8-r koi8-u macintosh windows-874 windows-1250 windows-1251 windows-1252 windows-1253 windows-1254 windows-1255 windows-1256 windows-1257 windows-1258 x-mac-cyrillic".split(" ").forEach(function (a) {
				var b =
				z[a],
					c = D[a];
				b.getDecoder = function (a) {
					return new t(c, a)
				};
				b.getEncoder = function (a) {
					return new v(c, a)
				}
			})
		})();
		z.gbk.getEncoder = function (a) {
			return new u(!1, a)
		};
		z.gbk.getDecoder = function (a) {
			return new s(!1, a)
		};
		z.gb18030.getEncoder = function (a) {
			return new u(!0, a)
		};
		z.gb18030.getDecoder = function (a) {
			return new s(!0, a)
		};
		z["hz-gb-2312"].getEncoder = function (a) {
			return new E(a)
		};
		z["hz-gb-2312"].getDecoder = function (a) {
			return new x(a)
		};
		z.big5.getEncoder = function (a) {
			return new B(a)
		};
		z.big5.getDecoder = function (a) {
			return new y(a)
		};
		z["euc-jp"].getEncoder = function (a) {
			return new w(a)
		};
		z["euc-jp"].getDecoder = function (a) {
			return new A(a)
		};
		z["iso-2022-jp"].getEncoder = function (a) {
			return new G(a)
		};
		z["iso-2022-jp"].getDecoder = function (a) {
			return new F(a)
		};
		z.shift_jis.getEncoder = function (a) {
			return new I(a)
		};
		z.shift_jis.getDecoder = function (a) {
			return new H(a)
		};
		z["euc-kr"].getEncoder = function (a) {
			return new J(a)
		};
		z["euc-kr"].getDecoder = function (a) {
			return new C(a)
		};
		z["iso-2022-kr"].getEncoder = function (a) {
			return new K(a)
		};
		z["iso-2022-kr"].getDecoder =

		function (a) {
			return new M(a)
		};
		z["utf-16"].getEncoder = function (a) {
			return new O(!1, a)
		};
		z["utf-16"].getDecoder = function (a) {
			return new P(!1, a)
		};
		z["utf-16be"].getEncoder = function (a) {
			return new O(!0, a)
		};
		z["utf-16be"].getDecoder = function (a) {
			return new P(!0, a)
		};
		L.prototype = {
			encode: function (a, b) {
				a = a ? String(a) : "";
				b = Object(b);
				this._streaming || (this._encoder = this._encoding.getEncoder(this._options));
				this._streaming = Boolean(b.stream);
				for (var d = [], e = new c(d), f = new k(a); - 1 !== f.get();) this._encoder.encode(e, f);
				if (!this._streaming) {
					var h;
					do h = this._encoder.encode(e, f);
					while (-1 !== h);
					this._encoder = null
				}
				return new Uint8Array(d)
			}
		};
		N.prototype = {
			decode: function (a, b) {
				if (a && !("buffer" in a && "byteOffset" in a && "byteLength" in a)) throw new TypeError("Expected ArrayBufferView");
				a || (a = new Uint8Array(0));
				b = Object(b);
				this._streaming || (this._decoder = this._encoding.getDecoder(this._options));
				this._streaming = Boolean(b.stream);
				var c = new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
					c = new l(c);
				if (!this._BOMseen) {
					this._BOMseen = !0;
					var d = this._encoding.name;
					c.match([255, 254]) && "utf-16" === d ? c.offset(2) : c.match([254, 255]) && "utf-16be" == d ? c.offset(2) : c.match([239, 187, 191]) && "utf-8" == d && c.offset(3)
				}
				for (var d = new f, e; - 1 !== c.get();) e = this._decoder.decode(c), null !== e && -1 !== e && d.emit(e);
				if (!this._streaming) {
					do e = this._decoder.decode(c), null !== e && -1 !== e && d.emit(e);
					while (-1 !== e && -1 != c.get());
					this._decoder = null
				}
				return d.string()
			}
		};
		b.TextEncoder = b.TextEncoder || L;
		b.TextDecoder = b.TextDecoder || N
	}
})(this);
!
function () {
	OT.Rumor = {
		MessageType: {
			SUBSCRIBE: 0,
			UNSUBSCRIBE: 1,
			MESSAGE: 2,
			CONNECT: 3,
			DISCONNECT: 4,
			PING: 7,
			PONG: 8,
			STATUS: 9
		}
	}
}(this);
!
function (b) {
	var a;
	a = {
		1002: "The endpoint is terminating the connection due to a protocol error. (CLOSE_PROTOCOL_ERROR)",
		1003: "The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data). (CLOSE_UNSUPPORTED)",
		1004: "The endpoint is terminating the connection because a data frame was received that is too large. (CLOSE_TOO_LARGE)",
		1005: "Indicates that no status code was provided even though one was expected. (CLOSE_NO_STATUS)",
		1006: "Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected. (CLOSE_ABNORMAL)",
		1007: "Indicates that an endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [RFC3629] data within a text message)",
		1008: "Indicates that an endpoint is terminating the connection because it has received a message that violates its policy.  This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy",
		1009: "Indicates that an endpoint is terminating the connection because it has received a message that is too big for it to process",
		1011: "Indicates that a server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request",
		4001: "Connectivity loss was detected as it was too long since the socket received the last PONG message"
	};
	b.Rumor.SocketError = function (a, b) {
		this.code = a;
		this.message = b
	};
	b.Rumor.Socket = function (d, l, c) {
		var k, f, g, h, m, e, n, q, r, p, t = b.$.statable(this, ["disconnected", "error", "connected", "connecting", "disconnecting"], "disconnected", function (c) {
			switch (c) {
			case "disconnected":
			case "error":
				if (k = null, m) {
					var d;
					if (!r ? 0 : 44900 <= b.$.now() - r) d = Error(a[4001]), d.code = 4001;
					m(d)
				}
			}
		}),
			v = function (a, c) {
				if (null === c || !b.$.isFunction(c)) throw Error("The Rumor.Socket " + a + " callback must be a valid function or null");
			},
			s = b.$.bind(function (a) {
				b.error("Rumor.Socket: " + a);
				a = new b.Rumor.SocketError(null, a || "Unknown Socket Error");
				q && clearTimeout(q);
				t("error");
				"connecting" === this.previousState && n && (n(a, null), n = null);
				h && h(a)
			}, this),
			u = b.$.bind(function () {
				this.is("connected") && ((!r ? 0 : 44900 <= b.$.now() - r) ? B({
					code: 4001
				}) : (k.send(b.Rumor.Message.Ping()), p = setTimeout(u, 9E3)))
			}, this),
			x = b.$.bind(function () {
				q && clearTimeout(q);
				this.isNot("connecting") ? b.debug("webSocketConnected reached in state other than connecting") : (k.send(b.Rumor.Message.Connect(f, l)), t("connected"), n && (n(null, f), n = null), g && g(f), p = setTimeout(function () {
					r = b.$.now();
					u()
				}, 9E3))
			}, this),
			E = function () {
				var a = k;
				s("Timed out while waiting for the Rumor socket to connect.");
				try {
					a.close()
				} catch (b) {}
			},
			y = function () {},
			B = b.$.bind(function (b) {
				q && clearTimeout(q);
				p && clearTimeout(p);
				if (window.OT) {
					if (1E3 !== b.code && 1001 !== b.code) {
						var c = b.reason || b.message;
						!c && a.hasOwnProperty(b.code) && (c = a[b.code]);
						s("Rumor Socket Disconnected: " + c)
					}
					this.isNot("error") && t("disconnected")
				}
			}, this),
			A = function (a) {
				r = b.$.now();
				e && a.type !== b.Rumor.MessageType.PONG && e(a)
			};
		this.publish = function (a, c, d) {
			k.send(b.Rumor.Message.Publish(a, c, d))
		};
		this.subscribe = function (a) {
			k.send(b.Rumor.Message.Subscribe(a))
		};
		this.unsubscribe = function (a) {
			k.send(b.Rumor.Message.Unsubscribe(a))
		};
		this.connect = function (a, e) {
			if (this.is("connecting", "connected")) e(new b.Rumor.SocketError(null, "Rumor.Socket cannot connect when it is already connecting or connected."));
			else {
				f = a;
				n = e;
				t("connecting");
				var h = c || window.WebSocket,
					g = {
						onOpen: x,
						onClose: B,
						onError: y,
						onMessage: A
					};
				try {
					k = "undefined" !== typeof h ? new b.Rumor.NativeSocket(h, d, g) : new b.Rumor.PluginSocket(d, g), q = setTimeout(E, b.Rumor.Socket.CONNECT_TIMEOUT)
				} catch (l) {
					b.error(l), s("Could not connect to the Rumor socket, possibly because of a blocked port.")
				}
			}
		};
		this.disconnect = function (a) {
			q && clearTimeout(q);
			p && clearTimeout(p);
			k ? k.isClosed() ? this.isNot("error") && t("disconnected") : (this.is("connected") && k.send(b.Rumor.Message.Disconnect()), k.close(a)) : this.isNot("error") && t("disconnected")
		};
		b.$.defineProperties(this, {
			id: {
				get: function () {
					return f
				}
			},
			onOpen: {
				set: function (a) {
					v("onOpen", a);
					g = a
				},
				get: function () {
					return g
				}
			},
			onError: {
				set: function (a) {
					v("onError", a);
					h = a
				},
				get: function () {
					return h
				}
			},
			onClose: {
				set: function (a) {
					v("onClose", a);
					m = a
				},
				get: function () {
					return m
				}
			},
			onMessage: {
				set: function (a) {
					v("onMessage", a);
					e = a
				},
				get: function () {
					return e
				}
			}
		})
	};
	b.Rumor.Socket.CONNECT_TIMEOUT = 15E3
}(window.OT, this);
!
function () {
	OT.Rumor.NativeSocket = function (b, a, d) {
		var l, c, k, f;
		l = new b(a);
		l.binaryType = "arraybuffer";
		l.onopen = d.onOpen;
		l.onclose = d.onClose;
		l.onerror = d.onError;
		l.onmessage = function (a) {
			OT && (a = OT.Rumor.Message.deserialize(a.data), d.onMessage(a))
		};
		c = function h(a) {
			l && (void 0 === a && (a = 0), k && clearTimeout(k), 0 < l.bufferedAmount && 10 >= a + 1 ? k = setTimeout(h, 100, a + 1) : f())
		};
		f = function () {
			l.close()
		};
		this.close = function (a) {
			a ? c() : f()
		};
		this.send = function (a) {
			l.send(a.serialize())
		};
		this.isClosed = function () {
			return 3 === l.readyState
		}
	}
}(this);
!
function () {
	OT.Rumor.PluginSocket = function (b, a) {
		var d, l = "initializing";
		TBPlugin.initRumorSocket(b, OT.$.bind(function (b, k) {
			b ? (l = "closed", a.onClose({
				code: 4999
			})) : "initializing" === l ? (d = k, d.onOpen(function () {
				l = "open";
				a.onOpen()
			}), d.onClose(function (b) {
				l = "closed";
				a.onClose({
					code: b
				})
			}), d.onError(function (b) {
				l = "closed";
				a.onError(b);
				a.onClose({
					code: b
				})
			}), d.onMessage(function (b, c, d, k) {
				b = new OT.Rumor.Message(b, c, d, k);
				a.onMessage(b)
			}), d.open()) : this.close()
		}, this));
		this.close = function () {
			"initializing" === l || "closed" === l ? l = "closed" : d.close(1E3, "")
		};
		this.send = function (a) {
			"open" === l && d.send(a)
		};
		this.isClosed = function () {
			return "closed" === l
		}
	}
}(this);
!
function () {
	OT.Rumor.Message = function (b, a, d, l) {
		this.type = b;
		this.toAddress = a;
		this.headers = d;
		this.data = l;
		this.transactionId = this.headers["TRANSACTION-ID"];
		this.status = this.headers.STATUS;
		this.isError = !(this.status && "2" === this.status[0])
	};
	OT.Rumor.Message.prototype.serialize = function () {
		var b = 8,
			a = 7,
			d = [],
			l = [],
			c = [],
			k, f, g;
		a++;
		for (f = 0; f < this.toAddress.length; f++) d.push((new TextEncoder("utf-8")).encode(this.toAddress[f])), a += 2, a += d[f].length;
		a++;
		f = 0;
		for (k in this.headers) this.headers.hasOwnProperty(k) && (l.push((new TextEncoder("utf-8")).encode(k)), c.push((new TextEncoder("utf-8")).encode(this.headers[k])), a += 4, a += l[f].length, a += c[f].length, f++);
		k = (new TextEncoder("utf-8")).encode(this.data);
		var a = a + k.length,
			h = new ArrayBuffer(a),
			m = new Uint8Array(h, 0, a),
			a = a - 4;
		m[0] = (a & 4278190080) >>> 24;
		m[1] = (a & 16711680) >>> 16;
		m[2] = (a & 65280) >>> 8;
		m[3] = (a & 255) >>> 0;
		m[4] = 0;
		m[5] = 0;
		m[6] = this.type;
		m[7] = this.toAddress.length;
		for (f = 0; f < d.length; f++) {
			a = d[f];
			m[b++] = a.length >> 8 & 255;
			m[b++] = a.length >> 0 & 255;
			for (g = 0; g < a.length; g++) m[b++] = a[g]
		}
		m[b++] = l.length;
		for (f = 0; f < l.length; f++) {
			a =
			l[f];
			m[b++] = a.length >> 8 & 255;
			m[b++] = a.length >> 0 & 255;
			for (g = 0; g < a.length; g++) m[b++] = a[g];
			a = c[f];
			m[b++] = a.length >> 8 & 255;
			m[b++] = a.length >> 0 & 255;
			for (g = 0; g < a.length; g++) m[b++] = a[g]
		}
		for (f = 0; f < k.length; f++) m[b++] = k[f];
		return h
	};
	OT.Rumor.Message.deserialize = function (b) {
		if ("undefined" !== typeof Buffer && Buffer.isBuffer(b)) {
			var a = b,
				d = new ArrayBuffer(a.length),
				l = new Uint8Array(d);
			for (b = 0; b < a.length; ++b) l[b] = a[b];
			b = d
		}
		var c = 8,
			k = new Uint8Array(b),
			f, g, h, m, e, a = k[6],
			l = [];
		for (e = 0; e < k[7]; e++) m = k[c++] << 8, m += k[c++], f = new Uint8Array(b, c, m), l[e] = (new TextDecoder("utf-8")).decode(f), c += m;
		g = k[c++];
		d = {};
		for (e = 0; e < g; e++) m = k[c++] << 8, m += k[c++], f = new Uint8Array(b, c, m), h = (new TextDecoder("utf-8")).decode(f), c += m, m = k[c++] << 8, m += k[c++], f = new Uint8Array(b, c, m), f = (new TextDecoder("utf-8")).decode(f), d[h] = f, c += m;
		b = new Uint8Array(b, c);
		b = (new TextDecoder("utf-8")).decode(b);
		return new OT.Rumor.Message(a, l, d, b)
	};
	OT.Rumor.Message.Connect = function (b, a) {
		return new OT.Rumor.Message(OT.Rumor.MessageType.CONNECT, [], {
			uniqueId: b,
			notifyDisconnectAddress: a
		}, "")
	};
	OT.Rumor.Message.Disconnect = function () {
		return new OT.Rumor.Message(OT.Rumor.MessageType.DISCONNECT, [], {}, "")
	};
	OT.Rumor.Message.Subscribe = function (b) {
		return new OT.Rumor.Message(OT.Rumor.MessageType.SUBSCRIBE, b, {}, "")
	};
	OT.Rumor.Message.Unsubscribe = function (b) {
		return new OT.Rumor.Message(OT.Rumor.MessageType.UNSUBSCRIBE, b, {}, "")
	};
	OT.Rumor.Message.Publish = function (b, a, d) {
		return new OT.Rumor.Message(OT.Rumor.MessageType.MESSAGE, b, d || {}, a || "")
	};
	OT.Rumor.Message.Ping = function () {
		return new OT.Rumor.Message(OT.Rumor.MessageType.PING, [], {}, "")
	}
}(this);
!
function () {
	OT.Raptor = {
		Actions: {
			CONNECT: 100,
			CREATE: 101,
			UPDATE: 102,
			DELETE: 103,
			STATE: 104,
			FORCE_DISCONNECT: 105,
			FORCE_UNPUBLISH: 106,
			SIGNAL: 107,
			CREATE_ARCHIVE: 108,
			CLOSE_ARCHIVE: 109,
			START_RECORDING_SESSION: 110,
			STOP_RECORDING_SESSION: 111,
			START_RECORDING_STREAM: 112,
			STOP_RECORDING_STREAM: 113,
			LOAD_ARCHIVE: 114,
			START_PLAYBACK: 115,
			STOP_PLAYBACK: 116,
			APPSTATE_PUT: 117,
			APPSTATE_DELETE: 118,
			OFFER: 119,
			ANSWER: 120,
			PRANSWER: 121,
			CANDIDATE: 122,
			SUBSCRIBE: 123,
			UNSUBSCRIBE: 124,
			QUERY: 125,
			SDP_ANSWER: 126,
			PONG: 127,
			REGISTER: 128,
			QUALITY_CHANGED: 129
		},
		Types: {
			RPC_REQUEST: 100,
			RPC_RESPONSE: 101,
			STREAM: 102,
			ARCHIVE: 103,
			CONNECTION: 104,
			APPSTATE: 105,
			CONNECTIONCOUNT: 106,
			MODERATION: 107,
			SIGNAL: 108,
			SUBSCRIBER: 110,
			JSEP: 109
		}
	}
}(this);
!
function () {
	OT.Raptor.serializeMessage = function (b) {
		return JSON.stringify(b)
	};
	OT.Raptor.deserializeMessage = function (b) {
		if (0 === b.length) return {};
		b = JSON.parse(b);
		var a = b.uri.substr(1).split("/");
		a.shift();
		"" === a[a.length - 1] && a.pop();
		b.params = {};
		for (var d = 0, l = a.length; d < l - 1; d += 2) b.params[a[d]] = a[d + 1];
		b.resource = 0 === a.length % 2 ? "channel" === a[a.length - 2] && 6 < a.length ? a[a.length - 4] + "_" + a[a.length - 2] : a[a.length - 2] : "channel" === a[a.length - 1] && 5 < a.length ? a[a.length - 3] + "_" + a[a.length - 1] : a[a.length - 1];
		b.signature =
		b.resource + "#" + b.method;
		return b
	};
	OT.Raptor.unboxFromRumorMessage = function (b) {
		var a = OT.Raptor.deserializeMessage(b.data);
		a.transactionId = b.transactionId;
		a.fromAddress = b.headers["X-TB-FROM-ADDRESS"];
		return a
	};
	OT.Raptor.parseIceServers = function (b) {
		try {
			return JSON.parse(b.data).content.iceServers
		} catch (a) {
			return []
		}
	};
	OT.Raptor.Message = {};
	OT.Raptor.Message.connections = {};
	OT.Raptor.Message.connections.create = function (b, a, d) {
		return OT.Raptor.serializeMessage({
			method: "create",
			uri: "/v2/partner/" + b + "/session/" + a + "/connection/" + d,
			content: {
				userAgent: OT.$.userAgent()
			}
		})
	};
	OT.Raptor.Message.connections.destroy = function (b, a, d) {
		return OT.Raptor.serializeMessage({
			method: "delete",
			uri: "/v2/partner/" + b + "/session/" + a + "/connection/" + d,
			content: {}
		})
	};
	OT.Raptor.Message.sessions = {};
	OT.Raptor.Message.sessions.get = function (b, a) {
		return OT.Raptor.serializeMessage({
			method: "read",
			uri: "/v2/partner/" + b + "/session/" + a,
			content: {}
		})
	};
	OT.Raptor.Message.streams = {};
	OT.Raptor.Message.streams.get = function (b, a, d) {
		return OT.Raptor.serializeMessage({
			method: "read",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d,
			content: {}
		})
	};
	OT.Raptor.Message.streams.create = function (b, a, d, l, c, k, f, g, h, m, e, n) {
		var q = [];
		void 0 !== g && q.push({
			id: "audio1",
			type: "audio",
			active: g
		});
		void 0 !== h && (c = {
			id: "video1",
			type: "video",
			active: h,
			width: k,
			height: f,
			orientation: c
		}, m && (c.frameRate = m), q.push(c));
		l = {
			id: d,
			name: l,
			channel: q
		};
		e && (l.minBitrate = e);
		n && (l.maxBitrate = n);
		return OT.Raptor.serializeMessage({
			method: "create",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d,
			content: l
		})
	};
	OT.Raptor.Message.streams.destroy =

	function (b, a, d) {
		return OT.Raptor.serializeMessage({
			method: "delete",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d,
			content: {}
		})
	};
	OT.Raptor.Message.streams.offer = function (b, a, d, l) {
		return OT.Raptor.serializeMessage({
			method: "offer",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d,
			content: {
				sdp: l
			}
		})
	};
	OT.Raptor.Message.streams.answer = function (b, a, d, l) {
		return OT.Raptor.serializeMessage({
			method: "answer",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d,
			content: {
				sdp: l
			}
		})
	};
	OT.Raptor.Message.streams.candidate =

	function (b, a, d, l) {
		return OT.Raptor.serializeMessage({
			method: "candidate",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d,
			content: l
		})
	};
	OT.Raptor.Message.streamChannels = {};
	OT.Raptor.Message.streamChannels.update = function (b, a, d, l, c) {
		return OT.Raptor.serializeMessage({
			method: "update",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/channel/" + l,
			content: c
		})
	};
	OT.Raptor.Message.subscribers = {};
	OT.Raptor.Message.subscribers.create = function (b, a, d, l, c, k) {
		c = {
			id: l,
			connection: c,
			keyManagementMethod: OT.$.supportedCryptoScheme(),
			bundleSupport: OT.$.hasCapabilities("bundle"),
			rtcpMuxSupport: OT.$.hasCapabilities("RTCPMux")
		};
		k && (c.channel = k);
		return OT.Raptor.serializeMessage({
			method: "create",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/subscriber/" + l,
			content: c
		})
	};
	OT.Raptor.Message.subscribers.destroy = function (b, a, d, l) {
		return OT.Raptor.serializeMessage({
			method: "delete",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/subscriber/" + l,
			content: {}
		})
	};
	OT.Raptor.Message.subscribers.update = function (b, a, d, l, c) {
		return OT.Raptor.serializeMessage({
			method: "update",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/subscriber/" + l,
			content: c
		})
	};
	OT.Raptor.Message.subscribers.candidate = function (b, a, d, l, c) {
		return OT.Raptor.serializeMessage({
			method: "candidate",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/subscriber/" + l,
			content: c
		})
	};
	OT.Raptor.Message.subscribers.offer = function (b, a, d, l, c) {
		return OT.Raptor.serializeMessage({
			method: "offer",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/subscriber/" + l,
			content: {
				sdp: c
			}
		})
	};
	OT.Raptor.Message.subscribers.answer = function (b, a, d, l, c) {
		return OT.Raptor.serializeMessage({
			method: "answer",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/subscriber/" + l,
			content: {
				sdp: c
			}
		})
	};
	OT.Raptor.Message.subscriberChannels = {};
	OT.Raptor.Message.subscriberChannels.update = function (b, a, d, l, c, k) {
		return OT.Raptor.serializeMessage({
			method: "update",
			uri: "/v2/partner/" + b + "/session/" + a + "/stream/" + d + "/subscriber/" + l + "/channel/" + c,
			content: k
		})
	};
	OT.Raptor.Message.signals = {};
	OT.Raptor.Message.signals.create = function (b, a, d, l, c) {
		var k = {};
		void 0 !== l && (k.type =
		l);
		void 0 !== c && (k.data = c);
		return OT.Raptor.serializeMessage({
			method: "signal",
			uri: "/v2/partner/" + b + "/session/" + a + (void 0 !== d ? "/connection/" + d : "") + "/signal/" + OT.$.uuid(),
			content: k
		})
	}
}(this);
!
function () {
	OT.Signal = function (b, a, d) {
		a = function (a) {
			var b = null;
			null === a || void 0 === a ? b = {
				code: 400,
				reason: "The signal type was null or undefined. Either set it to a String value or omit it"
			} : 128 < a.length ? b = {
				code: 413,
				reason: "The signal type was too long, the maximum length of it is 128 characters"
			} : /^[a-zA-Z0-9\-\._~]+$/.exec(a) || (b = {
				code: 400,
				reason: "The signal type was invalid, it can only contain letters, numbers, '-', '_', and '~'."
			});
			return b
		};
		var l = function (a) {
			var b = null;
			if (null === a || void 0 === a) b = {
				code: 400,
				reason: "The signal data was null or undefined. Either set it to a String value or omit it"
			};
			else try {
				8192 < JSON.stringify(a).length && (b = {
					code: 413,
					reason: "The data field was too long, the maximum size of it is 8192 characters"
				})
			} catch (d) {
				b = {
					code: 400,
					reason: "The data field was not valid JSON"
				}
			}
			return b
		};
		this.toRaptorMessage = function () {
			var a = this.to;
			a && "string" !== typeof a && (a = a.id);
			return OT.Raptor.Message.signals.create(OT.APIKEY, b, a, this.type, this.data)
		};
		this.toHash = function () {
			return d
		};
		this.error =
		null;
		d && (d.hasOwnProperty("data") && (this.data = OT.$.clone(d.data), this.error = l(this.data)), d.hasOwnProperty("to") && (this.to = d.to, this.error || (this.error = !this.to ? {
			code: 400,
			reason: "The signal type was null or an empty String. Either set it to a non-empty String value or omit it"
		} : !(this.to instanceof OT.Connection || this.to instanceof OT.Session) ? {
			code: 400,
			reason: "The To field was invalid"
		} : null)), d.hasOwnProperty("type") && (this.error || (this.error = a(d.type)), this.type = d.type));
		this.valid = null === this.error
	}
}(this);
!
function () {
	function b(a, b) {
		this.code = a;
		this.reason = b
	}
	OT.Raptor.Socket = function (a, d, l, c) {
		var k, f, g, h, m, e = OT.$.statable(this, ["disconnected", "connecting", "connected", "error", "disconnecting"], "disconnected"),
			n = function (a) {
				a ? e("error") : e("connected");
				m.apply(null, arguments)
			},
			q = OT.$.bind(function (a) {
				var b = this.is("disconnecting") ? "clientDisconnected" : "networkDisconnected";
				a && 4001 === a.code && (b = "networkTimedout");
				e("disconnected");
				h.onClose(b)
			}, this),
			r = function () {};
		this.connect = function (a, b, c) {
			if (this.is("disconnected", "error")) {
				e("connecting");
				k = b.sessionId;
				f = a;
				m = c;
				a = OT.$.uuid();
				var s = "/v2/partner/" + OT.APIKEY + "/session/" + k;
				g = new OT.Rumor.Socket(d, l);
				g.onClose(q);
				g.onMessage(OT.$.bind(h.dispatch, h));
				g.connect(a, OT.$.bind(function (a) {
					a ? (a.message = "WebSocketConnection:" + a.code + ":" + a.message, n(a)) : (g.onError(r), OT.debug("Raptor Socket connected. Subscribing to " + s + " on " + d), g.subscribe([s]), a = OT.Raptor.Message.connections.create(OT.APIKEY, k, g.id()), this.publish(a, {
						"X-TB-TOKEN-AUTH": f
					}, OT.$.bind(function (a) {
						a ? (a.message = "ConnectToSession:" + a.code + ":Received error response to connection create message.", n(a)) : this.publish(OT.Raptor.Message.sessions.get(OT.APIKEY, k), function (a) {
							a && (a.message = "GetSessionState:" + a.code + ":Received error response to session read");
							n.apply(null, arguments)
						})
					}, this)))
				}, this))
			} else OT.warn("Cannot connect the Raptor Socket as it is currently connected. You should disconnect first.")
		};
		this.disconnect = function (a) {
			this.is("disconnected") || (e("disconnecting"), g.disconnect(a))
		};
		this.publish = function (a, b, c) {
			if (g.isNot("connected")) OT.error("OT.Raptor.Socket: cannot publish until the socket is connected." + a);
			else {
				var d = OT.$.uuid(),
					e = {},
					f;
				b && (OT.$.isFunction(b) ? (e = {}, f = b) : e = b);
				!f && (c && OT.$.isFunction(c)) && (f = c);
				f && h.registerCallback(d, f);
				OT.debug("OT.Raptor.Socket Publish (ID:" + d + ") ");
				OT.debug(a);
				g.publish([l], a, OT.$.extend(e, {
					"Content-Type": "application/x-raptor+v2",
					"TRANSACTION-ID": d,
					"X-TB-FROM-ADDRESS": g.id()
				}));
				return d
			}
		};
		this.streamCreate = function (a, b, c, d, e, f, h, g, l, m) {
			var n = OT.$.uuid();
			a = OT.Raptor.Message.streams.create(OT.APIKEY, k, n, a, b, c, d, e, f, h, g, l);
			this.publish(a, function (a, b) {
				m(a, n, b)
			})
		};
		this.streamDestroy = function (a) {
			this.publish(OT.Raptor.Message.streams.destroy(OT.APIKEY, k, a))
		};
		this.streamChannelUpdate = function (a, b, c) {
			this.publish(OT.Raptor.Message.streamChannels.update(OT.APIKEY, k, a, b, c))
		};
		this.subscriberCreate = function (a, b, c, d) {
			this.publish(OT.Raptor.Message.subscribers.create(OT.APIKEY, k, a, b, g.id(), c), d)
		};
		this.subscriberDestroy = function (a, b) {
			this.publish(OT.Raptor.Message.subscribers.destroy(OT.APIKEY, k, a, b))
		};
		this.subscriberUpdate = function (a, b, c) {
			this.publish(OT.Raptor.Message.subscribers.update(OT.APIKEY, k, a, b, c))
		};
		this.subscriberChannelUpdate = function (a, b, c, d) {
			this.publish(OT.Raptor.Message.subscriberChannels.update(OT.APIKEY, k, a, b, c, d))
		};
		this.forceDisconnect = function (a, b) {
			this.publish(OT.Raptor.Message.connections.destroy(OT.APIKEY, k, a), b)
		};
		this.forceUnpublish = function (a, b) {
			this.publish(OT.Raptor.Message.streams.destroy(OT.APIKEY, k, a), b)
		};
		this.jsepCandidate = function (a, b) {
			this.publish(OT.Raptor.Message.streams.candidate(OT.APIKEY, k, a, b))
		};
		this.jsepCandidateP2p = function (a, b, c) {
			this.publish(OT.Raptor.Message.subscribers.candidate(OT.APIKEY, k, a, b, c))
		};
		this.jsepOffer = function (a, b) {
			this.publish(OT.Raptor.Message.streams.offer(OT.APIKEY, k, a, b))
		};
		this.jsepOfferP2p = function (a, b, c) {
			this.publish(OT.Raptor.Message.subscribers.offer(OT.APIKEY, k, a, b, c))
		};
		this.jsepAnswer = function (a, b) {
			this.publish(OT.Raptor.Message.streams.answer(OT.APIKEY, k, a, b))
		};
		this.jsepAnswerP2p = function (a, b, c) {
			this.publish(OT.Raptor.Message.subscribers.answer(OT.APIKEY, k, a, b, c))
		};
		this.signal = function (a, c) {
			var d = new OT.Signal(k, g.id(), a || {});
			d.valid ? this.publish(d.toRaptorMessage(), function (a) {
				var e;
				a && (e = new b(a.code, a.message));
				c && OT.$.isFunction(c) && c(e, d.toHash())
			}) : c && OT.$.isFunction(c) && c(new b(d.error.code, d.error.reason), d.toHash())
		};
		this.id = function () {
			return g && g.id()
		};
		null == c && (c = new OT.Raptor.Dispatcher);
		h = c
	}
}(this);
!
function () {
	OT.Raptor.Dispatcher = function () {
		OT.isNodeModule ? EventEmitter.call(this) : (OT.$.eventing(this, !0), this.emit = this.trigger);
		this.callbacks = {}
	};
	OT.isNodeModule && util.inherits(OT.Raptor.Dispatcher, EventEmitter);
	OT.Raptor.Dispatcher.prototype.registerCallback = function (b, a) {
		this.callbacks[b] = a
	};
	OT.Raptor.Dispatcher.prototype.triggerCallback = function (b) {
		if (b) {
			var a = this.callbacks[b];
			if (a && OT.$.isFunction(a)) {
				var d = Array.prototype.slice.call(arguments);
				d.shift();
				a.apply(null, d)
			}
			delete this.callbacks[b]
		}
	};
	OT.Raptor.Dispatcher.prototype.onClose = function (b) {
		this.emit("close", b)
	};
	OT.Raptor.Dispatcher.prototype.dispatch = function (b) {
		if (b.type === OT.Rumor.MessageType.STATUS) {
			OT.debug("OT.Raptor.dispatch: STATUS");
			OT.debug(b);
			var a;
			b.isError && (a = new OT.Error(b.status));
			this.triggerCallback(b.transactionId, a, b)
		} else switch (a = OT.Raptor.unboxFromRumorMessage(b), OT.debug("OT.Raptor.dispatch " + a.signature), OT.debug(b.data), a.resource) {
		case "session":
			this.dispatchSession(a);
			break;
		case "connection":
			this.dispatchConnection(a);
			break;
		case "stream":
			this.dispatchStream(a);
			break;
		case "stream_channel":
			this.dispatchStreamChannel(a);
			break;
		case "subscriber":
			this.dispatchSubscriber(a);
			break;
		case "subscriber_channel":
			this.dispatchSubscriberChannel(a);
			break;
		case "signal":
			this.dispatchSignal(a);
			break;
		case "archive":
			this.dispatchArchive(a);
			break;
		default:
			OT.warn("OT.Raptor.dispatch: Type " + a.resource + " is not currently implemented")
		}
	};
	OT.Raptor.Dispatcher.prototype.dispatchSession = function (b) {
		switch (b.method) {
		case "read":
			this.emit("session#read", b.content, b.transactionId);
			break;
		default:
			OT.warn("OT.Raptor.dispatch: " + b.signature + " is not currently implemented")
		}
	};
	OT.Raptor.Dispatcher.prototype.dispatchConnection = function (b) {
		switch (b.method) {
		case "created":
			this.emit("connection#created", b.content);
			break;
		case "deleted":
			this.emit("connection#deleted", b.params.connection, b.reason);
			break;
		default:
			OT.warn("OT.Raptor.dispatch: " + b.signature + " is not currently implemented")
		}
	};
	OT.Raptor.Dispatcher.prototype.dispatchStream = function (b) {
		switch (b.method) {
		case "created":
			this.emit("stream#created", b.content, b.transactionId);
			break;
		case "deleted":
			this.emit("stream#deleted", b.params.stream, b.reason);
			break;
		case "updated":
			this.emit("stream#updated", b.params.stream, b.content);
			break;
		case "generateoffer":
		case "answer":
		case "pranswer":
		case "offer":
		case "candidate":
			this.dispatchJsep(b.method, b);
			break;
		default:
			OT.warn("OT.Raptor.dispatch: " + b.signature + " is not currently implemented")
		}
	};
	OT.Raptor.Dispatcher.prototype.dispatchStreamChannel = function (b) {
		switch (b.method) {
		case "updated":
			this.emit("streamChannel#updated", b.params.stream, b.params.channel, b.content);
			break;
		default:
			OT.warn("OT.Raptor.dispatch: " + b.signature + " is not currently implemented")
		}
	};
	OT.Raptor.Dispatcher.prototype.dispatchJsep = function (b, a) {
		this.emit("jsep#" + b, a.params.stream, a.fromAddress, a)
	};
	OT.Raptor.Dispatcher.prototype.dispatchSubscriberChannel = function (b) {
		switch (b.method) {
		case "updated":
			this.emit("subscriberChannel#updated", b.params.stream, b.params.channel, b.content);
			break;
		case "update":
			this.emit("subscriberChannel#update", b.params.subscriber, b.params.stream, b.content);
			break;
		default:
			OT.warn("OT.Raptor.dispatch: " + b.signature + " is not currently implemented")
		}
	};
	OT.Raptor.Dispatcher.prototype.dispatchSubscriber = function (b) {
		switch (b.method) {
		case "created":
			this.emit("subscriber#created", b.params.stream, b.fromAddress, b.content.id);
			break;
		case "deleted":
			this.dispatchJsep("unsubscribe", b);
			this.emit("subscriber#deleted", b.params.stream, b.fromAddress);
			break;
		case "generateoffer":
		case "answer":
		case "pranswer":
		case "offer":
		case "candidate":
			this.dispatchJsep(b.method, b);
			break;
		default:
			OT.warn("OT.Raptor.dispatch: " + b.signature + " is not currently implemented")
		}
	};
	OT.Raptor.Dispatcher.prototype.dispatchSignal = function (b) {
		"signal" !== b.method ? OT.warn("OT.Raptor.dispatch: " + b.signature + " is not currently implemented") : this.emit("signal", b.fromAddress, b.content.type, b.content.data)
	};
	OT.Raptor.Dispatcher.prototype.dispatchArchive = function (b) {
		switch (b.method) {
		case "created":
			this.emit("archive#created", b.content);
			break;
		case "updated":
			this.emit("archive#updated", b.params.archive, b.content)
		}
	}
}(this);
(function (b) {
	function a(a, b) {
		var c = a.channel.map(function (a) {
			return new OT.StreamChannel(a)
		});
		return new OT.Stream(a.id, a.name, a.creationTime, b.connections.get(a.connectionId ? a.connectionId : a.connection.id), b, c)
	}
	function d(b, c) {
		if (!c.streams.has(b.id)) {
			var d = a(b, c);
			c.streams.add(d);
			return d
		}
	}
	function l(a, b) {
		if (!b.archives.has(a.id)) {
			var c = new OT.Archive(a.id, a.name, a.status);
			b.archives.add(c);
			return c
		}
	}
	OT.publishers = new OT.Collection("guid");
	OT.subscribers = new OT.Collection("widgetId");
	OT.sessions =
	new OT.Collection;
	var c, k = [],
		f = {};
	b.OT.SessionDispatcher = function (a) {
		var b = new OT.Raptor.Dispatcher;
		b.on("close", function (b) {
			var c = a.connection;
			c && (c.destroyedReason() ? OT.debug("OT.Raptor.Socket: Socket was closed but the connection had already been destroyed. Reason: " + c.destroyedReason()) : c.destroy(b))
		});
		b.on("session#read", function (e, f) {
			var m = {},
				r;
			m.streams = [];
			m.connections = [];
			m.archives = [];
			OT.$.forEach(e.connection, function (b) {
				r = OT.Connection.fromHash(b);
				m.connections.push(r);
				a.connections.add(r)
			});
			OT.$.forEach(e.stream, function (b) {
				m.streams.push(d(b, a))
			});
			OT.$.forEach(e.archive || e.archives, function (b) {
				m.archives.push(l(b, a))
			});
			a._.subscriberMap = {};
			b.triggerCallback(f, null, m);
			c = !0;
			for (var p = 0; p < k.length; ++p) b.trigger.apply(b, k[p]);
			k = []
		});
		b.on("connection#created", function (b) {
			b = OT.Connection.fromHash(b);
			a.connection && b.id !== a.connection.id && a.connections.add(b);
			OT.$.forEach(OT.$.keys(f), function (c) {
				if ((c = f[c]) && b.id === c.connection.id) d(c, a), delete f[c.id]
			})
		});
		b.on("connection#deleted", function (b, c) {
			b = a.connections.get(b);
			b.destroy(c)
		});
		b.on("stream#created", function (c, k) {
			a.connections.has(c.connectionId ? c.connectionId : c.connection.id) ? c = d(c, a) : f[c.id] = c;
			c.publisher && c.publisher.setStream(c);
			b.triggerCallback(k, null, c)
		});
		b.on("stream#deleted", function (b, c) {
			var d = a.streams.get(b);
			d ? d.destroy(c) : OT.error("OT.Raptor.dispatch: A stream does not exist with the id of " + b + ", for stream#deleted message!")
		});
		b.on("stream#updated", function (b, c) {
			var d = a.streams.get(b);
			d ? d._.update(c) : OT.error("OT.Raptor.dispatch: A stream does not exist with the id of " + b + ", for stream#updated message!")
		});
		b.on("streamChannel#updated", function (b, c, d) {
			var f;
			!b || !(f = a.streams.get(b)) ? OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for streamChannel message!") : f._.updateChannel(c, d)
		});
		var m = function (a, b, c, d) {
			var f, h;
			switch (a) {
			case "offer":
				h = [];
				(b = OT.subscribers.find({
					streamId: b
				})) && h.push(b);
				break;
			case "answer":
			case "pranswer":
			case "generateoffer":
			case "unsubscribe":
				h = OT.publishers.where({
					streamId: b
				});
				break;
			case "candidate":
				h =
				OT.publishers.where({
					streamId: b
				}).concat(OT.subscribers.where({
					streamId: b
				}));
				break;
			default:
				OT.warn("OT.Raptor.dispatch: jsep#" + a + " is not currently implemented");
				return
			}
			if (0 !== h.length) {
				f = h[0].session.connections.get(c);
				if (!f && c.match(/^symphony\./)) f = OT.Connection.fromHash({
					id: c,
					creationTime: Math.floor(OT.$.now())
				}), h[0].session.connections.add(f);
				else if (!f) {
					OT.warn("OT.Raptor.dispatch: Messsage comes from a connection (" + c + ") that we do not know about. The message was ignored.");
					return
				}
				OT.$.forEach(h, function (b) {
					b.processMessage(a, f, d)
				})
			}
		};
		b.on("jsep#offer", OT.$.bind(m, null, "offer"));
		b.on("jsep#answer", OT.$.bind(m, null, "answer"));
		b.on("jsep#pranswer", OT.$.bind(m, null, "pranswer"));
		b.on("jsep#generateoffer", OT.$.bind(m, null, "generateoffer"));
		b.on("jsep#unsubscribe", OT.$.bind(m, null, "unsubscribe"));
		b.on("jsep#candidate", OT.$.bind(m, null, "candidate"));
		b.on("subscriberChannel#updated", function (b, c, d) {
			!b || !a.streams.has(b) ? OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriberChannel#updated message!") : a.streams.get(b)._.updateChannel(c, d)
		});
		b.on("subscriberChannel#update", function (b, c, d) {
			!c || !a.streams.has(c) ? OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriberChannel#update message!") : OT.subscribers.has(b) ? OT.subscribers.get(b).disableVideo(d.active) : OT.error("OT.Raptor.dispatch: Unable to determine subscriberId, or the subscriber does not exist, for subscriberChannel#update message!")
		});
		b.on("subscriber#created", function (b, c, d) {
			(b = b ? a.streams.get(b) : null) ? a._.subscriberMap[c + "_" + b.id] = d : OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriber#created message!")
		});
		b.on("subscriber#deleted", function (b, c) {
			var d = b ? a.streams.get(b) : null;
			d ? delete a._.subscriberMap[c + "_" + d.id] : OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriber#created message!")
		});
		b.on("signal", function (b, d, f) {
			if (c) {
				var h = a.connections.get(b);
				a._.dispatchSignal(h, d, f)
			} else c || (h = ["signal"], h.push.apply(h, arguments), k.push(h))
		});
		b.on("archive#created", function (b) {
			l(b, a)
		});
		b.on("archive#updated", function (b, c) {
			var d = a.archives.get(b);
			d ? d._.update(c) : OT.error("OT.Raptor.dispatch: An archive does not exist with the id of " + b + ", for archive#updated message!")
		});
		return b
	}
})(window);
!
function () {
	var b = new
	function () {
		var a = !1,
			b = TBPlugin.isSupported(),
			l = b ? TBPlugin.isReady() : !0,
			c = function () {
				!OT.$.isDOMUnloaded() && (OT.$.isReady() && a && l) && OT.dispatchEvent(new OT.EnvLoadedEvent(OT.Event.names.ENV_LOADED))
			},
			k = function () {
				OT.publishers.destroy();
				OT.subscribers.destroy();
				OT.sessions.destroy("unloaded");
				OT.dispatchEvent(new OT.EnvLoadedEvent(OT.Event.names.ENV_UNLOADED))
			},
			f = function (a) {
				l = !0;
				a && OT.debug("TB Plugin failed to load or was not installed");
				c()
			},
			g = function () {
				a = !0;
				OT.Config.off("dynamicConfigChanged", g);
				OT.Config.off("dynamicConfigLoadFailed", h);
				c()
			},
			h = function () {
				g()
			};
		OT.Config.on("dynamicConfigChanged", g);
		OT.Config.on("dynamicConfigLoadFailed", h);
		OT.$.onDOMLoad(function () {
			OT.$.onDOMUnload(k);
			OT.Config.load(OT.properties.configURL);
			c()
		});
		b && TBPlugin.ready(f);
		this.onLoad = function (b, c) {
			if (!OT.$.isDOMUnloaded() && OT.$.isReady() && a && l) b.call(c);
			else OT.on(OT.Event.names.ENV_LOADED, b, c)
		};
		this.onUnload = function (a, b) {
			if (this.isUnloaded()) a.call(b);
			else OT.on(OT.Event.names.ENV_UNLOADED, a, b)
		};
		this.isUnloaded =

		function () {
			return OT.$.isDOMUnloaded()
		}
	};
	OT.onLoad = function (a, d) {
		b.onLoad(a, d)
	};
	OT.onUnload = function (a, d) {
		b.onUnload(a, d)
	};
	OT.isUnloaded = function () {
		return b.isUnloaded()
	}
}();
!
function () {
	OT.Error = function (a, b) {
		this.code = a;
		this.message = b
	};
	var b = {
		1004: "Authentication error",
		1005: "Invalid Session ID",
		1006: "Connect Failed",
		1007: "Connect Rejected",
		1008: "Connect Time-out",
		1009: "Security Error",
		1010: "Not Connected",
		1011: "Invalid Parameter",
		1012: "Peer-to-peer Stream Play Failed",
		1013: "Connection Failed",
		1014: "API Response Failure",
		1500: "Unable to Publish",
		1520: "Unable to Force Disconnect",
		1530: "Unable to Force Unpublish",
		2E3: "Internal Error",
		2001: "Embed Failed",
		4E3: "WebSocket Connection Failed",
		4001: "WebSocket Network Disconnected"
	},
		a;
	OT.handleJsException = function (d, l, c) {
		c = c || {};
		var k, f = c.session;
		f ? (k = {
			sessionId: f.sessionId
		}, f.isConnected() && (k.connectionId = f.connection.connectionId), c.target || (c.target = f)) : c.sessionId && (k = {
			sessionId: c.sessionId
		}, c.target || (c.target = null));
		c = c.target;
		f = b[l];
		k = k ? OT.$.clone(k) : {};
		OT.error("OT.exception :: title: " + f + " (" + l + ") msg: " + d);
		k.partnerId || (k.partnerId = OT.APIKEY);
		try {
			a || (a = new OT.Analytics), a.logError(l, "tb.exception", f, {
				details: d
			}, k), OT.dispatchEvent(new OT.ExceptionEvent(OT.Event.names.EXCEPTION, d, f, l, c, c))
		} catch (g) {
			OT.error("OT.exception :: Failed to dispatch exception - " + g.toString())
		}
	};
	OT.dispatchError = function (a, b, c, k) {
		OT.error(a, b);
		c && OT.$.isFunction(c) && c.call(null, new OT.Error(a, b));
		OT.handleJsException(b, a, {
			session: k
		})
	}
}(window);
!
function () {
	OT.ConnectionCapabilities = function (b) {
		b.supportsWebRTC = OT.$.castToBoolean(b.supportsWebRTC);
		this.supportsWebRTC = b.supportsWebRTC
	}
}(window);
!
function () {
	OT.Connection = function (b, a, d, l, c) {
		var k;
		this.id = this.connectionId = b;
		this.creationTime = a ? Number(a) : null;
		this.data = d;
		this.capabilities = new OT.ConnectionCapabilities(l);
		this.permissions = new OT.Capabilities(c);
		this.quality = null;
		OT.$.eventing(this);
		this.destroy = OT.$.bind(function (a, b) {
			k = a || "clientDisconnected";
			!0 !== b && this.dispatchEvent(new OT.DestroyedEvent("destroyed", this, k))
		}, this);
		this.destroyed = function () {
			return void 0 !== k
		};
		this.destroyedReason = function () {
			return k
		}
	};
	OT.Connection.fromHash =

	function (b) {
		return new OT.Connection(b.id, b.creationTime, b.data, OT.$.extend(b.capablities || {}, {
			supportsWebRTC: !0
		}), b.permissions || [])
	}
}(window);
!
function () {
	OT.StreamChannel = function (b) {
		this.id = b.id;
		this.type = b.type;
		this.active = OT.$.castToBoolean(b.active);
		this.orientation = b.orientation || OT.VideoOrientation.ROTATED_NORMAL;
		b.frameRate && (this.frameRate = parseFloat(b.frameRate, 10));
		this.width = parseInt(b.width, 10);
		this.height = parseInt(b.height, 10);
		OT.$.eventing(this, !0);
		this.update = function (a) {
			var b = {},
				l = {},
				c;
			for (c in a) if (a.hasOwnProperty(c)) {
				var k = this[c];
				switch (c) {
				case "active":
					this.active = OT.$.castToBoolean(a[c]);
					break;
				case "disableWarning":
					this.disableWarning =
					OT.$.castToBoolean(a[c]);
					break;
				case "frameRate":
					this.frameRate = parseFloat(a[c], 10);
					break;
				case "width":
				case "height":
					this[c] = parseInt(a[c], 10);
					b[c] = this[c];
					l[c] = k;
					break;
				case "orientation":
					this[c] = a[c];
					b[c] = this[c];
					l[c] = k;
					break;
				default:
					OT.warn("Tried to update unknown key " + c + " on " + this.type + " channel " + this.id);
					return
				}
				this.trigger("update", this, c, k, this[c])
			}
			OT.$.keys(b).length && this.trigger("update", this, "videoDimensions", l, b);
			return !0
		}
	}
}(window);
!
function () {
	var b = ["name", "archiving"];
	OT.Stream = function (a, d, l, c, k, f) {
		var g;
		this.id = this.streamId = a;
		this.name = d;
		this.creationTime = Number(l);
		this.connection = c;
		this.channel = f;
		this.publisher = OT.publishers.find({
			streamId: this.id
		});
		OT.$.eventing(this);
		a = OT.$.bind(function (a, b, c, d) {
			switch (b) {
			case "active":
				b = "audio" === a.type ? "hasAudio" : "hasVideo";
				this[b] = d;
				break;
			case "disableWarning":
				b = "audio" === a.type ? "audioDisableWarning" : "videoDisableWarning";
				this[b] = d;
				if (!this["audio" === a.type ? "hasAudio" : "hasVideo"]) return;
				break;
			case "orientation":
			case "width":
			case "height":
				this.videoDimensions = {
					width: a.width,
					height: a.height,
					orientation: a.orientation
				};
				return
			}
			this.dispatchEvent(new OT.StreamUpdatedEvent(this, b, c, d))
		}, this);
		var h = OT.$.bind(function () {
			return this.publisher ? this.publisher : OT.subscribers.find(function (a) {
				return a.stream.id === this.id && a.session.id === k.id
			})
		}, this);
		this.getChannelsOfType = function (a) {
			return OT.$.filter(this.channel, function (b) {
				return b.type === a
			})
		};
		this.getChannel = function (a) {
			for (var b = 0; b < this.channel.length; ++b) if (this.channel[b].id === a) return this.channel[b];
			return null
		};
		d = this.getChannelsOfType("audio")[0];
		l = this.getChannelsOfType("video")[0];
		this.hasAudio = null != d && d.active;
		this.hasVideo = null != l && l.active;
		this.videoDimensions = {};
		l && (this.videoDimensions.width = l.width, this.videoDimensions.height = l.height, this.videoDimensions.orientation = l.orientation, l.on("update", a), this.frameRate = l.frameRate);
		if (d) d.on("update", a);
		this.setChannelActiveState = function (a, b, c) {
			b = {
				active: b
			};
			c && (b.activeReason = c);
			m(a, b)
		};
		this.setRestrictFrameRate =

		function (a) {
			m("video", {
				restrictFrameRate: a
			})
		};
		var m = OT.$.bind(function (a, b) {
			var c;
			if (this.publisher) c = function (a) {
				k._.streamChannelUpdate(this, a, b)
			};
			else {
				var d = OT.subscribers.find(function (a) {
					return a.stream.id === this.id && a.session.id === k.id
				}, this);
				c = function (a) {
					k._.subscriberChannelUpdate(this, d, a, b)
				}
			}
			OT.$.forEach(this.getChannelsOfType(a), OT.$.bind(c, this))
		}, this);
		this.destroyed = !1;
		this.destroyedReason = void 0;
		this.destroy = function (a, b) {
			g = a || "clientDisconnected";
			this.destroyed = !0;
			this.destroyedReason =
			g;
			!0 !== b && this.dispatchEvent(new OT.DestroyedEvent("destroyed", this, g))
		};
		this._ = {};
		this._.updateProperty = OT.$.bind(function (a, c) {
			if (-1 === OT.$.arrayIndexOf(b, a)) OT.warn('Unknown stream property "' + a + '" was modified to "' + c + '".');
			else {
				var d = this[a];
				switch (a) {
				case "name":
					this[a] = c;
					break;
				case "archiving":
					var f = h();
					f && f._.archivingStatus(c);
					this[a] = c
				}
				d = new OT.StreamUpdatedEvent(this, a, d, c);
				this.dispatchEvent(d)
			}
		}, this);
		this._.update = OT.$.bind(function (a) {
			for (var b in a) a.hasOwnProperty(b) && this._.updateProperty(b, a[b])
		}, this);
		this._.updateChannel = OT.$.bind(function (a, b) {
			this.getChannel(a).update(b)
		}, this)
	}
}(window);
!
function () {
	OT.Archive = function (b, a, d) {
		this.id = b;
		this.name = a;
		this.status = d;
		this._ = {};
		OT.$.eventing(this);
		this._.update = OT.$.bind(function (a) {
			for (var b in a) if (a.hasOwnProperty(b)) {
				var d = this[b];
				this[b] = a[b];
				d = new OT.ArchiveUpdatedEvent(this, b, d, this[b]);
				this.dispatchEvent(d)
			}
		}, this);
		this.destroy = function () {}
	}
}(window);
!
function () {
	OT.audioContext = function () {
		var b = new window.AudioContext;
		OT.audioContext = function () {
			return b
		};
		return b
	}
}();
!
function () {
	OT.GetStatsAudioLevelSampler = function (b) {
		if (!OT.$.hasCapabilities("audioOutputLevelStat", "getStatsWithSingleParameter")) throw Error("The current platform does not provide the required capabilities");
		this.sample = function (a) {
			b.getStatsWithSingleParameter(function (b) {
				b = b.result();
				for (var l = 0; l < b.length; l++) {
					var c = b[l];
					if (c.local && (c = parseFloat(c.local.stat("audioOutputLevel")), !isNaN(c))) {
						a(c / 32768);
						return
					}
				}
				a(null)
			})
		}
	};
	OT.AnalyserAudioLevelSampler = function (b) {
		var a = this,
			d = null,
			l = null;
		this.webOTStream =
		null;
		this.sample = function (c) {
			if (!d && a.webOTStream) {
				var k = b.createMediaStreamSource(a.webOTStream),
					f = b.createAnalyser();
				k.connect(f);
				d = f;
				l = new Uint8Array(d.frequencyBinCount)
			}
			if (d) {
				d.getByteTimeDomainData(l);
				for (f = k = 0; f < l.length; f++) k = Math.max(k, Math.abs(l[f] - 128));
				c(k / 128)
			} else c(null)
		}
	};
	OT.AudioLevelTransformer = function () {
		var b = null;
		this.transform = function (a) {
			b = null === b || a >= b ? a : 0.3 * a + 0.7 * b;
			a = Math.log(b) / Math.LN10 / 1.5 + 1;
			return Math.min(Math.max(a, 0), 1)
		}
	}
}(window);
!
function () {
	OT.IntervalRunner = function (b, a) {
		var d = null;
		this.start = function () {
			d = window.setInterval(b, 1E3 / a)
		};
		this.stop = function () {
			window.clearInterval(d);
			d = null
		}
	}
}(window);
var findIndex = function (b, a, d) {
	if (!OT.$.isFunction(a)) throw new TypeError("iter must be a function");
	for (var l = 0, c = b.length || 0; l < c; ++l) if (l in b && a.call(d, b[l], l, b)) return l;
	return -1
},
	SDPHelpers = {
		getMLineIndex: function (b, a) {
			var d = "m\x3d" + a;
			return findIndex(b, function (a) {
				return -1 !== a.indexOf(d) ? !0 : !1
			})
		},
		getMLinePayloadTypes: function (b, a) {
			var d = b.match(RegExp("^m\x3d" + a + " \\d+(/\\d+)? [a-zA-Z0-9/]+(( [a-zA-Z0-9/]+)+)$", "i"));
			return !d || 2 > d.length ? [] : OT.$.trim(d[2]).split(" ")
		},
		removeTypesFromMLine: function (b, a) {
			return b.replace(RegExp(" " + a.join(" |"), "ig"), "").replace(/\s+/g, " ")
		},
		removeMediaEncoding: function (b, a, d) {
			b = b.split("\r\n");
			var l = SDPHelpers.getMLineIndex(b, a),
				c = -1 < l ? b[l] : void 0,
				k = [],
				f;
			if (-1 === l) return b.join("\r\n");
			a = SDPHelpers.getMLinePayloadTypes(c, a);
			if (0 === a.length) return b.join("\r\n");
			var g = RegExp("a\x3drtpmap:(" + a.join("|") + ") " + d + "\\/\\d+", "i");
			b = OT.$.filter(b, function (a, b) {
				f = a.match(g);
				if (null === f) return !0;
				k.push(f[1]);
				b < l && l--;
				return !1
			});
			0 < k.length && -1 < l && (b[l] = SDPHelpers.removeTypesFromMLine(c, k));
			return b.join("\r\n")
		},
		removeComfortNoise: function (b) {
			return SDPHelpers.removeMediaEncoding(b, "audio", "CN")
		},
		removeVideoCodec: function (b, a) {
			return SDPHelpers.removeMediaEncoding(b, "video", a)
		}
	};
!
function (b) {
	var a, d;
	TBPlugin.isInstalled() ? (a = TBPlugin.RTCSessionDescription, d = TBPlugin.RTCIceCandidate) : (a = b.mozRTCSessionDescription || b.RTCSessionDescription, d = b.mozRTCIceCandidate || b.RTCIceCandidate);
	var l = function (a) {
		return function (b) {
			b.candidate ? a(OT.Raptor.Actions.CANDIDATE, b.candidate) : OT.debug("IceCandidateForwarder: No more ICE candidates.")
		}
	},
		c = function () {
			var a = [],
				b = null;
			this.setPeerConnection = function (a) {
				b = a
			};
			this.process = function (c) {
				c = new d(c.content);
				b ? b.addIceCandidate(c) : a.push(c)
			};
			this.processPending = function () {
				for (; a.length;) b.addIceCandidate(a.shift())
			}
		},
		k = function (a, b, c, d) {
			var f, k;
			f = function (a, b) {
				return function (c) {
					OT.error(a);
					OT.error(c);
					d && d(a, c, b)
				}
			};
			k = function (b) {
				b.sdp = SDPHelpers.removeComfortNoise(b.sdp);
				b.sdp = SDPHelpers.removeVideoCodec(b.sdp, "ulpfec");
				b.sdp = SDPHelpers.removeVideoCodec(b.sdp, "red");
				a.setLocalDescription(b, function () {
					c(b)
				}, f("Error while setting LocalDescription", "SetLocalDescription"))
			}; - 1 === b.sdp.indexOf("a\x3dcrypto") && (b.sdp = b.sdp.replace(/^c=IN(.*)$/gmi, "c\x3dIN$1\r\na\x3dcrypto:1 AES_CM_128_HMAC_SHA1_80 inline:FakeFakeFakeFakeFakeFakeFakeFakeFakeFake\\r\\n")); - 1 === b.sdp.indexOf("a\x3drtcp-fb") && (b.sdp = b.sdp.replace(/^m=video(.*)$/gmi, "m\x3dvideo$1\r\na\x3drtcp-fb:* ccm fir\r\na\x3drtcp-fb:* nack "));
			a.setRemoteDescription(b, function () {
				a.createAnswer(k, f("Error while setting createAnswer", "CreateAnswer"), null, !1)
			}, f("Error while setting RemoteDescription", "SetRemoteDescription"))
		},
		f = function (a, b, c) {
			var d, f;
			d = {
				mandatory: {},
				optional: []
			};
			f = function (a, b) {
				return function (d) {
					OT.error(a);
					OT.error(d);
					c && c(a, d, b)
				}
			};
			navigator.mozGetUserMedia && (d.mandatory.MozDontOfferDataChannel = !0);
			a.createOffer(function (c) {
				c.sdp = SDPHelpers.removeComfortNoise(c.sdp);
				c.sdp = SDPHelpers.removeVideoCodec(c.sdp, "ulpfec");
				c.sdp = SDPHelpers.removeVideoCodec(c.sdp, "red");
				a.setLocalDescription(c, function () {
					b(c)
				}, f("Error while setting LocalDescription", "SetLocalDescription"))
			}, f("Error while creating Offer", "CreateOffer"), d)
		};
	OT.PeerConnection = function (b) {
		var d, m = [],
			e = new c,
			n, q, r = "new",
			p = [];
		OT.$.eventing(this);
		b.iceServers || (b.iceServers = []);
		var t = OT.$.bind(function (a, b) {
			if (p.length) p[0](a, b)
		}, this),
			v = OT.$.bind(function (a, c) {
				d ? a.call(null, null, d) : (m.push(a), 1 < m.length || (OT.debug('Creating peer connection config "' + JSON.stringify(b) + '".'), (!b.iceServers || 0 === b.iceServers.length) && OT.error("No ice servers present"), OT.$.createPeerConnection(b, {
					optional: [{
						DtlsSrtpKeyAgreement: !0
					}]
				}, c, OT.$.bind(s, this))))
			}, this),
			s = OT.$.bind(function (a, b) {
				if (a) G("Failed to create PeerConnection, exception: " + a.toString(), "NewPeerConnection"), m = [];
				else {
					OT.debug("OT attachEventsToPeerConnection");
					d = b;
					d.onicecandidate = l(t);
					d.onaddstream = OT.$.bind(y, this);
					d.onremovestream = OT.$.bind(B, this);
					void 0 !== d.onsignalingstatechange ? d.onsignalingstatechange = OT.$.bind(x, this) : void 0 !== d.onstatechange && (d.onstatechange = OT.$.bind(x, this));
					void 0 !== d.oniceconnectionstatechange && (d.oniceconnectionstatechange = function (a) {
						"failed" === a.target.iceConnectionState && setTimeout(function () {
							"failed" === a.target.iceConnectionState && G("The stream was unable to connect due to a network error. Make sure your connection isn't blocked by a firewall.", "ICEWorkflow")
						}, 5E3)
					});
					for (; m.length;) m.shift().call(null)
				}
			}, this),
			u = function () {
				e && e.setPeerConnection(null);
				H.stopCollecting();
				null !== d && (d.destroy && d.destroy(), d = null, this.trigger("close"))
			},
			x = function (a) {
				if ((a = "string" === typeof a ? a : a.target && a.target.signalingState ? a.target.signalingState : a.target.readyState) && a.toLowerCase() !== r) switch (r = a.toLowerCase(), OT.debug("PeerConnection.stateChange: " + r), r) {
				case "closed":
					u.call(this)
				}
			},
			E = OT.$.bind(function (a) {
				this.trigger("qos", a)
			}, this),
			y = function (a) {
				this.trigger("streamAdded", a.stream)
			},
			B = function (a) {
				this.trigger("streamRemoved", a.stream)
			},
			A = function (b) {
				var c = new a({
					type: "offer",
					sdp: b.content.sdp
				}),
					f = function (a) {
						e.setPeerConnection(d);
						e.processPending();
						t(OT.Raptor.Actions.ANSWER, a);
						H.startCollecting(d)
					},
					g = function (a, b, c) {
						G("PeerConnection.offerProcessor " + a + ": " + b, c)
					};
				v(function () {
					k(d, c, f, g)
				})
			},
			w = function (b) {
				b.content.sdp ? (q = new a({
					type: "answer",
					sdp: b.content.sdp
				}), d.setRemoteDescription(q, function () {
					OT.debug("setRemoteDescription Success")
				}, function (a) {
					G("Error while setting RemoteDescription " + a, "SetRemoteDescription")
				}), e.setPeerConnection(d), e.processPending(), H.startCollecting(d)) : OT.error("PeerConnection.processMessage: Weird answer message, no SDP.")
			},
			F = function () {
				OT.debug("PeerConnection.processSubscribe: Sending offer to subscriber.");
				if (!d) throw Error("PeerConnection broke!");
				v(function () {
					f(d, function (a) {
						n = a;
						t(OT.Raptor.Actions.OFFER, n)
					}, function (a, b, c) {
						G("PeerConnection.suscribeProcessor " + a + ": " + b, c)
					})
				})
			},
			G = OT.$.bind(function (a, b) {
				OT.error(a);
				this.trigger("error", a, b)
			}, this);
		this.addLocalStream = function (a) {
			v(function () {
				d.addStream(a)
			}, a)
		};
		this.disconnect = function () {
			e = null;
			if (d) {
				var a = d.signalingState || d.readyState;
				a && "closed" !== a.toLowerCase() && d.close();
				u.call(this)
			}
			this.off()
		};
		this.processMessage = function (a, b) {
			OT.debug("PeerConnection.processMessage: Received " + a + " from " + b.fromAddress);
			OT.debug(b);
			switch (a) {
			case "generateoffer":
				F.call(this, b);
				break;
			case "offer":
				A.call(this, b);
				break;
			case "answer":
			case "pranswer":
				w.call(this, b);
				break;
			case "candidate":
				e.process(b);
				break;
			default:
				OT.debug("PeerConnection.processMessage: Received an unexpected message of type " + a + " from " + b.fromAddress + ": " + JSON.stringify(b))
			}
			return this
		};
		this.setIceServers = function (a) {
			a && (b.iceServers = a)
		};
		this.registerMessageDelegate = function (a) {
			return p.push(a)
		};
		this.unregisterMessageDelegate = function (a) {
			a = OT.$.arrayIndexOf(p, a); - 1 !== a && p.splice(a, 1);
			return p.length
		};
		this.remoteStreams =

		function () {
			var a;
			if (d) {
				if (d.getRemoteStreams) a = d.getRemoteStreams();
				else if (d.remoteStreams) a = d.remoteStreams;
				else throw Error("Invalid Peer Connection object implements no method for retrieving remote streams");
				a = Array.prototype.slice.call(a)
			} else a = [];
			return a
		};
		this.getStatsWithSingleParameter = function (a) {
			OT.$.hasCapabilities("getStatsWithSingleParameter") && v(function () {
				d.getStats(a)
			})
		};
		var H = new OT.PeerConnection.QOS(E)
	}
}(window);
!
function () {
	var b = function (a, b, d, g) {
		a.getStats(function (a) {
			if (a.result) {
				a = a.result();
				for (var c = 0; c < a.length; c++) {
					var e = a[c];
					if (e.stat) {
						"true" === e.stat("googActiveConnection") && (d.localCandidateType = e.stat("googLocalCandidateType"), d.remoteCandidateType = e.stat("googRemoteCandidateType"), d.transportType = e.stat("googTransportType"));
						var l;
						a: {
							l = e;
							if (l.stat("googFrameHeightSent")) d.videoBytesTransferred = l.stat("bytesSent");
							else if (l.stat("googFrameHeightReceived")) d.videoBytesTransferred = l.stat("bytesReceived");
							else {
								l = NaN;
								break a
							}
							l = Math.round(8 * (d.videoBytesTransferred - (b.videoBytesTransferred || 0)) / d.deltaSecs)
						}
						isNaN(l) || (d.avgVideoBitrate = l);a: {
							l = e;
							if (l.stat("audioInputLevel")) d.audioBytesTransferred = l.stat("bytesSent");
							else if (l.stat("audioOutputLevel")) d.audioBytesTransferred = l.stat("bytesReceived");
							else {
								l = NaN;
								break a
							}
							l = Math.round(8 * (d.audioBytesTransferred - (b.audioBytesTransferred || 0)) / d.deltaSecs)
						}
						isNaN(l) || (d.avgAudioBitrate = l);e = e.stat("googFrameRateSent") ? e.stat("googFrameRateSent") : e.stat("googFrameRateReceived") ? e.stat("googFrameRateReceived") : null;null != e && (d.frameRate = e)
					}
				}
			}
			g(null, d)
		})
	},
		a = function (a, b, d, g) {
			a.getStats(null, function (a) {
				a.forEach(function (a) {
					if ("true" === a.googActiveConnection) d.localCandidateType = a.googLocalCandidateType, d.remoteCandidateType = a.googRemoteCandidateType, d.transportType = a.googTransportType;
					else if (void 0 !== a.googFrameHeightSent || void 0 !== a.googFrameHeightReceived || void 0 !== d.videoBytesTransferred || void 0 !== a.googFrameRateSent) {
						var c = b.videoBytesTransferred || 0;
						a.googFrameHeightSent ? d.videoBytesTransferred = a.bytesSent : a.googFrameHeightReceived && (d.videoBytesTransferred = a.bytesReceived);
						d.videoBytesTransferred && (c = d.videoBytesTransferred - c, d.avgVideoBitrate = Math.round(8 * c / d.deltaSecs));
						a.googFrameRateSent ? d.frameRate = a.googFrameRateSent : a.googFrameRateReceived && (d.frameRate = a.googFrameRateReceived)
					} else c = b.audioBytesTransferred || 0, a.audioInputLevel ? d.audioBytesTransferred = a.bytesSent : a.audioOutputLevel && (d.audioBytesTransferred = a.bytesReceived), d.audioBytesTransferred && (a = d.audioBytesTransferred - c, d.avgAudioBitrate = Math.round(8 * a / d.deltaSecs))
				});
				g(null, d)
			}, function (a) {
				g(a)
			})
		},
		d = function (a, b, d, g) {
			a.getStats(null, function (a) {
				for (var c in a) if (a.hasOwnProperty(c) && ("outboundrtp" === a[c].type || "inboundrtp" === a[c].type)) {
					var e = a[c]; - 1 !== e.id.indexOf("video") ? (e.bytesSent || e.bytesReceived ? (d.videoBytesTransferred = e.bytesSent || e.bytesReceived, e = Math.round(8 * (d.videoBytesTransferred - (b.videoBytesTransferred || 0)) / d.deltaSecs)) : e = NaN, isNaN(e) || (d.avgVideoBitrate = e)) : -1 !== e.id.indexOf("audio") && (e.bytesSent || e.bytesReceived ? (d.audioBytesTransferred = e.bytesSent || e.bytesReceived, e = Math.round(8 * (d.audioBytesTransferred - (b.audioBytesTransferred || 0)) / d.deltaSecs)) : e = NaN, isNaN(e) || (d.avgAudioBitrate = e))
				}
				g(null, d)
			}, function (a) {
				g(a)
			})
		},
		l = function (c, k, f, g) {
			var h = window.navigator.userAgent.toLowerCase().match(/Firefox\/([0-9\.]+)/i);
			if (TBPlugin.isInstalled()) return l = a, a(c, k, f, g);
			if (null !== h && 27 <= parseFloat(h[1], 10)) return l = d, d(c, k, f, g);
			l = b;
			return b(c, k, f, g)
		};
	OT.PeerConnection.QOS = function (a) {
		var b = OT.$.now(),
			d, g = OT.$.bind(function m(e) {
				if (d) {
					var g = OT.$.now(),
						g = {
							timeStamp: g,
							duration: Math.round(g - b),
							deltaSecs: (g - e.timeStamp) / 1E3
						};
					l(d, e, g, function (b, d) {
						b ? OT.error("Failed to Parse QOS Stats: " + JSON.stringify(b)) : (a(d, e), setTimeout(OT.$.bind(m, null, d), OT.PeerConnection.QOS.INTERVAL))
					})
				}
			}, this);
		this.startCollecting = function (a) {
			a && a.getStats && (d = a, g({
				timeStamp: OT.$.now()
			}))
		};
		this.stopCollecting = function () {
			d = null
		}
	};
	OT.PeerConnection.QOS.INTERVAL = 3E4
}();
!
function () {
	var b = {};
	OT.PeerConnections = {
		add: function (a, d, l) {
			a = a.id + "_" + d;
			(d = b[a]) || (d = b[a] = {
				count: 0,
				pc: new OT.PeerConnection(l)
			});
			d.count += 1;
			return d.pc
		},
		remove: function (a, d) {
			var l = a.id + "_" + d,
				c = b[l];
			c && (c.count -= 1, 0 === c.count && (c.pc.disconnect(), delete b[l]))
		}
	}
}(window);
!
function () {
	OT.PublisherPeerConnection = function (b, a, d, l) {
		var c, k = !1,
			f = a._.subscriberMap[b.id + "_" + d],
			g, h, m, e;
		g = function () {
			this.destroy();
			this.trigger("disconnected", this)
		};
		h = function (a, b) {
			this.trigger("error", null, a, this, b);
			this.destroy()
		};
		m = OT.$.bind(function (b, c) {
			if (!k && (b === OT.Raptor.Actions.CANDIDATE || b === OT.Raptor.Actions.OFFER || b === OT.Raptor.Actions.ANSWER || b === OT.Raptor.Actions.PRANSWER)) k = -1 !== (b === OT.Raptor.Actions.CANDIDATE ? c.candidate : c.sdp).indexOf("typ relay");
			switch (b) {
			case OT.Raptor.Actions.ANSWER:
			case OT.Raptor.Actions.PRANSWER:
				a.sessionInfo.p2pEnabled ? a._.jsepAnswerP2p(d, f, c.sdp) : a._.jsepAnswer(d, c.sdp);
				break;
			case OT.Raptor.Actions.OFFER:
				this.trigger("connected");
				a.sessionInfo.p2pEnabled ? a._.jsepOfferP2p(d, f, c.sdp) : a._.jsepOffer(d, c.sdp);
				break;
			case OT.Raptor.Actions.CANDIDATE:
				a.sessionInfo.p2pEnabled ? a._.jsepCandidateP2p(d, f, c) : a._.jsepCandidate(d, c)
			}
		}, this);
		e = OT.$.bind(function (a, c) {
			this.trigger("qos", b, a, c)
		}, this);
		OT.$.eventing(this);
		this.destroy = function () {
			c && (c.off(), OT.PeerConnections.remove(b, d));
			c = null
		};
		this.processMessage = function (a, b) {
			c.processMessage(a, b)
		};
		this.init = function (a) {
			c = OT.PeerConnections.add(b, d, {
				iceServers: a
			});
			c.on({
				close: g,
				error: h,
				qos: e
			}, this);
			c.registerMessageDelegate(m);
			c.addLocalStream(l);
			this.remoteConnection = function () {
				return b
			};
			this.hasRelayCandidates = function () {
				return k
			}
		}
	}
}(window);
!
function () {
	OT.SubscriberPeerConnection = function (b, a, d, l, c) {
		var k, f = !1,
			g = !1,
			h, m, e, n, q, r, p;
		h = function () {
			this.destroy();
			this.trigger("disconnected", this)
		};
		m = function (a) {
			this.trigger("remoteStreamAdded", a, this)
		};
		e = function (a) {
			this.trigger("remoteStreamRemoved", a, this)
		};
		n = function (a, b) {
			this.trigger("error", a, this, b)
		};
		q = OT.$.bind(function (b, c) {
			if (!g && (b === OT.Raptor.Actions.CANDIDATE || b === OT.Raptor.Actions.OFFER || b === OT.Raptor.Actions.ANSWER || b === OT.Raptor.Actions.PRANSWER)) g = -1 !== (b === OT.Raptor.Actions.CANDIDATE ? c.candidate : c.sdp).indexOf("typ relay");
			switch (b) {
			case OT.Raptor.Actions.ANSWER:
			case OT.Raptor.Actions.PRANSWER:
				this.trigger("connected");
				a._.jsepAnswerP2p(d.id, l.widgetId, c.sdp);
				break;
			case OT.Raptor.Actions.OFFER:
				a._.jsepOfferP2p(d.id, l.widgetId, c.sdp);
				break;
			case OT.Raptor.Actions.CANDIDATE:
				a._.jsepCandidateP2p(d.id, l.widgetId, c)
			}
		}, this);
		r = function (a) {
			var b = "get" + (a ? "Video" : "Audio") + "Tracks";
			return function (a) {
				var c = k.remoteStreams(),
					d;
				if (0 !== c.length && c[0][b]) for (var e = 0, f = c.length; e < f; ++e) {
					d = c[e];
					d = d[b]();
					for (var h = 0, g = d.length; h < g; ++h) d[h].enabled !== a && (d[h].enabled = a)
				}
			}
		};
		p = OT.$.bind(function (a, b) {
			this.trigger("qos", a, b)
		}, this);
		OT.$.eventing(this);
		this.destroy = function () {
			f || (f = !0, k && (0 === k.unregisterMessageDelegate(q) && (a && (a.isConnected() && d && !d.destroyed) && a._.subscriberDestroy(d, l), this.subscribeToAudio(!1)), OT.PeerConnections.remove(b, d.id)), k = null, this.off())
		};
		this.processMessage = function (a, b) {
			k.processMessage(a, b)
		};
		this.subscribeToAudio = r(!1);
		this.subscribeToVideo = r(!0);
		this.hasRelayCandidates =

		function () {
			return g
		};
		this.init = function () {
			k = OT.PeerConnections.add(b, d.streamId, {});
			k.on({
				close: h,
				streamAdded: m,
				streamRemoved: e,
				error: n,
				qos: p
			}, this);
			var f = k.registerMessageDelegate(q);
			if (0 < k.remoteStreams().length) OT.$.forEach(k.remoteStreams(), m, this);
			else if (1 === f) {
				var g;
				if (c.subscribeToVideo || c.subscribeToAudio) f = d.getChannelsOfType("audio"), g = d.getChannelsOfType("video"), g = OT.$.map(f, function (a) {
					return {
						id: a.id,
						type: a.type,
						active: c.subscribeToAudio
					}
				}).concat(OT.$.map(g, function (a) {
					return {
						id: a.id,
						type: a.type,
						active: c.subscribeToVideo,
						restrictFrameRate: void 0 !== c.restrictFrameRate ? c.restrictFrameRate : !1
					}
				}));
				a._.subscriberCreate(d, l, g, OT.$.bind(function (a, b) {
					a && this.trigger("error", a.message, this, "Subscribe");
					k.setIceServers(OT.Raptor.parseIceServers(b))
				}, this))
			}
		};
		this.getStatsWithSingleParameter = function (a) {
			k && k.getStatsWithSingleParameter(a)
		}
	}
}(window);
!
function () {
	OT.Chrome = function (b) {
		var a = {};
		b.parent && (OT.$.eventing(this), this.destroy = function () {
			this.off();
			this.hide();
			for (var b in a) a[b].destroy()
		}, this.show = function () {
			for (var b in a) a[b].show()
		}, this.hide = function () {
			for (var b in a) a[b].hide()
		}, this.set = function (d, l) {
			if ("string" === typeof d && l) l.parent = this, l.appendTo(b.parent), a[d] = l, this[d] = l;
			else for (var c in d) if (d.hasOwnProperty(c)) {
				var k = c,
					f = d[c];
				f.parent = this;
				f.appendTo(b.parent);
				a[k] = f;
				this[k] = f
			}
			return this
		})
	}
}(window);
!
function () {
	OT.Chrome.Behaviour || (OT.Chrome.Behaviour = {});
	OT.Chrome.Behaviour.Widget = function (b, a) {
		var d = a || {},
			l, c;
		b.setDisplayMode = function (a) {
			a = a || "auto";
			l !== a && (OT.$.removeClass(this.domElement, "OT_mode-" + l), OT.$.addClass(this.domElement, "OT_mode-" + a), c = l, l = a)
		};
		b.show = function () {
			this.setDisplayMode(c);
			if (d.onShow) d.onShow();
			return this
		};
		b.hide = function () {
			this.setDisplayMode("off");
			if (d.onHide) d.onHide();
			return this
		};
		b.destroy = function () {
			if (d.onDestroy) d.onDestroy(this.domElement);
			this.domElement && OT.$.removeElement(this.domElement);
			return b
		};
		b.appendTo = function (a) {
			this.domElement = OT.$.createElement(d.nodeName || "div", d.htmlAttributes, d.htmlContent);
			if (d.onCreate) d.onCreate(this.domElement);
			b.setDisplayMode(d.mode);
			"auto" === d.mode && (OT.$.addClass(b.domElement, "OT_mode-on-hold"), setTimeout(function () {
				OT.$.removeClass(b.domElement, "OT_mode-on-hold")
			}, 2E3));
			a.appendChild(this.domElement);
			return b
		}
	}
}(window);
!
function () {
	OT.Chrome.BackingBar = function (b) {
		function a() {
			return "on" === d || "on" === l ? "on" : "mini" === d || "mini" === l ? "mini" : "mini-auto" === d || "mini-auto" === l ? "mini-auto" : "auto" === d || "auto" === l ? "auto" : "off"
		}
		var d = b.nameMode,
			l = b.muteMode;
		OT.Chrome.Behaviour.Widget(this, {
			mode: a(),
			nodeName: "div",
			htmlContent: "",
			htmlAttributes: {
				className: "OT_bar OT_edge-bar-item"
			}
		});
		this.setNameMode = function (b) {
			d = b;
			this.setDisplayMode(a())
		};
		this.setMuteMode = function (b) {
			l = b;
			this.setDisplayMode(a())
		}
	}
}(window);
!
function () {
	OT.Chrome.NamePanel = function (b) {
		var a = b.name;
		if (!a || "" === OT.$.trim(a).length) a = null, b.mode = "off";
		this.setName = OT.$.bind(function (b) {
			a || this.setDisplayMode("auto");
			a = b;
			this.domElement.innerHTML = a
		});
		OT.Chrome.Behaviour.Widget(this, {
			mode: b.mode,
			nodeName: "h1",
			htmlContent: a,
			htmlAttributes: {
				className: "OT_name OT_edge-bar-item"
			}
		})
	}
}(window);
!
function () {
	OT.Chrome.MuteButton = function (b) {
		var a, d = b.muted || !1,
			l, c;
		l = OT.$.bind(function () {
			d ? OT.$.addClass(this.domElement, "OT_active") : OT.$.removeClass(this.domElement, "OT_active ")
		}, this);
		c = function () {
			d = !d;
			l();
			d ? this.parent.trigger("muted", this) : this.parent.trigger("unmuted", this);
			return !1
		};
		OT.$.defineProperties(this, {
			muted: {
				get: function () {
					return d
				},
				set: function (a) {
					d = a;
					l()
				}
			}
		});
		OT.Chrome.Behaviour.Widget(this, {
			mode: b.mode,
			nodeName: "button",
			htmlContent: "Mute",
			htmlAttributes: {
				className: d ? "OT_edge-bar-item OT_mute OT_active" : "OT_edge-bar-item OT_mute"
			},
			onCreate: OT.$.bind(function (b) {
				a = OT.$.bind(c, this);
				OT.$.on(b, "click", a)
			}, this),
			onDestroy: OT.$.bind(function (b) {
				a = null;
				OT.$.off(b, "click", a)
			}, this)
		})
	}
}(window);
!
function () {
	OT.Chrome.Archiving = function (b) {
		var a = b.archiving,
			d = b.archivingStarted || "Archiving on",
			l = b.archivingEnded || "Archiving off",
			c = !0,
			k, f, g, h, m, e, n;
		e = function (a) {
			h.nodeValue = a;
			k.setAttribute("title", a)
		};
		n = OT.$.bind(function () {
			m && (clearTimeout(m), m = null);
			a ? OT.$.addClass(f, "OT_active") : OT.$.removeClass(f, "OT_active");
			OT.$.removeClass(this.domElement, "OT_archiving-" + (!a ? "on" : "off"));
			OT.$.addClass(this.domElement, "OT_archiving-" + (a ? "on" : "off"));
			b.show && a ? (e(d), OT.$.addClass(g, "OT_mode-on"), OT.$.removeClass(g, "OT_mode-auto"), this.setDisplayMode("on"), m = setTimeout(function () {
				OT.$.addClass(g, "OT_mode-auto");
				OT.$.removeClass(g, "OT_mode-on")
			}, 5E3)) : b.show && !c ? (OT.$.addClass(g, "OT_mode-on"), OT.$.removeClass(g, "OT_mode-auto"), this.setDisplayMode("on"), e(l), m = setTimeout(OT.$.bind(function () {
				this.setDisplayMode("off")
			}, this), 5E3)) : this.setDisplayMode("off")
		}, this);
		OT.Chrome.Behaviour.Widget(this, {
			mode: a && b.show && "on" || "off",
			nodeName: "h1",
			htmlAttributes: {
				className: "OT_archiving OT_edge-bar-item OT_edge-bottom"
			},
			onCreate: OT.$.bind(function () {
				k = OT.$.createElement("div", {
					className: "OT_archiving-light-box"
				}, "");
				f = OT.$.createElement("div", {
					className: "OT_archiving-light"
				}, "");
				k.appendChild(f);
				g = OT.$.createElement("div", {
					className: "OT_archiving-status OT_mode-on OT_edge-bar-item OT_edge-bottom"
				}, "");
				h = document.createTextNode("");
				g.appendChild(h);
				this.domElement.appendChild(k);
				this.domElement.appendChild(g);
				n()
			}, this)
		});
		this.setShowArchiveStatus = OT.$.bind(function (a) {
			b.show = a;
			this.domElement && n.call(this)
		}, this);
		this.setArchiving = OT.$.bind(function (b) {
			a = b;
			c = !1;
			this.domElement && n.call(this)
		}, this)
	}
}(window);
!
function () {
	OT.Chrome.AudioLevelMeter = function (b) {
		var a = this,
			d, l, c, k, f = b.maxValue || 1,
			g = b.minValue || 0;
		OT.Chrome.Behaviour.Widget(this, {
			mode: b ? b.mode : "auto",
			nodeName: "div",
			htmlAttributes: {
				className: "OT_audio-level-meter"
			},
			onCreate: function () {
				d = OT.$.createElement("div", {
					className: "OT_audio-level-meter__bar"
				}, "");
				c = OT.$.createElement("div", {
					className: "OT_audio-level-meter__value"
				}, "");
				l = OT.$.createElement("div", {
					className: "OT_audio-level-meter__audio-only-img"
				}, "");
				a.domElement.appendChild(d);
				a.domElement.appendChild(l);
				a.domElement.appendChild(c)
			}
		});
		var h = OT.$.bind(a.setDisplayMode, a);
		a.setDisplayMode = function (a) {
			h(a);
			if ("off" === a) {
				if (b.onPassivate) b.onPassivate()
			} else if (b.onActivate) b.onActivate()
		};
		a.setValue = function (a) {
			k = a;
			a = 100 * k / (f - g);
			c.style.width = c.style.height = 2 * a + "%";
			c.style.top = c.style.right = -a + "%"
		}
	}
}(window);
!
function () {
	OT.Chrome.VideoDisabledIndicator = function (b) {
		var a, d = !1,
			l = !1,
			c;
		a = b.mode || "auto";
		c = function (b) {
			d ? OT.$.addClass(b, "OT_video-disabled") : OT.$.removeClass(b, "OT_video-disabled");
			l ? OT.$.addClass(b, "OT_video-disabled-warning") : OT.$.removeClass(b, "OT_video-disabled-warning");
			(d || l) && ("auto" === a || "on" === a) ? OT.$.addClass(b, "OT_active") : OT.$.removeClass(b, "OT_active")
		};
		this.disableVideo = function (a) {
			d = a;
			!0 === a && (l = !1);
			c(this.domElement)
		};
		this.setWarning = function (a) {
			l = a;
			c(this.domElement)
		};
		OT.Chrome.Behaviour.Widget(this, {
			mode: a,
			nodeName: "div",
			htmlAttributes: {
				className: "OT_video-disabled-indicator"
			}
		});
		this.setDisplayMode = function (b) {
			a = b;
			c(this.domElement)
		}
	}
}(window);
(function () {
	OT.StylableComponent = function (a, d) {
		if (!a.trigger) throw Error("OT.StylableComponent is dependent on the mixin OT.$.eventing. Ensure that this is included in the object before StylableComponent.");
		var l = new b(d, function (b, d, f) {
			f ? a.trigger("styleValueChanged", b, d, f) : a.trigger("styleValueChanged", b, d)
		});
		a.getStyle = function (a) {
			return l.get(a)
		};
		a.setStyle = function (a, b, d) {
			"string" !== typeof a ? l.setAll(a, d) : l.set(a, b);
			return this
		}
	};
	var b = function (a, b) {
		var l = {},
			c, k, f, g;
		c = ["showMicButton", "showSpeakerButton", "nameDisplayMode", "buttonDisplayMode", "backgroundImageURI"];
		k = {
			buttonDisplayMode: ["auto", "mini", "mini-auto", "off", "on"],
			nameDisplayMode: ["auto", "off", "on"],
			audioLevelDisplayMode: ["auto", "off", "on"],
			showSettingsButton: [!0, !1],
			showMicButton: [!0, !1],
			backgroundImageURI: null,
			showControlBar: [!0, !1],
			showArchiveStatus: [!0, !1],
			videoDisabledDisplayMode: ["auto", "off", "on"]
		};
		f = function (a, b) {
			return "backgroundImageURI" === a || k.hasOwnProperty(a) && -1 !== OT.$.arrayIndexOf(k[a], b)
		};
		g = function (a) {
			switch (a) {
			case "true":
				return !0;
			case "false":
				return !1;
			default:
				return a
			}
		};
		this.getAll = function () {
			var a = OT.$.clone(l),
				b;
			for (b in a) a.hasOwnProperty(b) && 0 > OT.$.arrayIndexOf(c, b) && delete a[b];
			return a
		};
		this.get = function (a) {
			return a ? l[a] : this.getAll()
		};
		this.setAll = function (a, c) {
			var e, k, q;
			for (q in a) a.hasOwnProperty(q) && (k = g(a[q]), f(q, k) ? (e = l[q], k !== e && (l[q] = k, c || b(q, k, e))) : OT.warn("Style.setAll::Invalid style property passed " + q + " : " + k));
			return this
		};
		this.set = function (a, c) {
			OT.debug("setStyle: " + a.toString());
			var e = g(c),
				k;
			if (!f(a, e)) return OT.warn("Style.set::Invalid style property passed " + a + " : " + e), this;
			k = l[a];
			e !== k && (l[a] = e, b(a, c, k));
			return this
		};
		a && this.setAll(a, !0)
	}
})(window);
!
function () {
	OT.Microphone = function (b, a) {
		var d;
		OT.$.defineProperties(this, {
			muted: {
				get: function () {
					return d
				},
				set: function (a) {
					if (d !== a) {
						d = a;
						a = b.getAudioTracks();
						for (var c = 0, k = a.length; c < k; ++c) a[c].setEnabled(!d)
					}
				}
			}
		});
		void 0 !== a ? this.muted(!0 === a) : b.getAudioTracks().length ? this.muted(!b.getAudioTracks()[0].enabled) : this.muted(!1)
	}
}(window);
!
function (b, a) {
	a.generateSimpleStateMachine = function (b, l, c) {
		var k = l.slice(),
			f = a.$.clone(c);
		return function (c) {
			function h(a, b) {
				c({
					message: a,
					newState: b,
					currentState: l,
					previousState: e
				})
			}
			var l = b,
				e = null;
			this.current = l;
			this.set = function (b) {
				var c; - 1 !== a.$.arrayIndexOf(k, b) ? f[l] && -1 !== a.$.arrayIndexOf(f[l], b) ? c = !0 : (h("'" + l + "' cannot transition to '" + b + "'", b), c = !1) : (h("'" + b + "' is not a valid state", b), c = !1);
				c && (e = l, this.current = l = b)
			}
		}
	}
}(window, window.OT);
!
function () {
	OT.SubscribingState = OT.generateSimpleStateMachine("NotSubscribing", "NotSubscribing Init ConnectingToPeer BindingRemoteStream Subscribing Failed Destroyed".split(" "), {
		NotSubscribing: ["NotSubscribing", "Init", "Destroyed"],
		Init: ["NotSubscribing", "ConnectingToPeer", "BindingRemoteStream", "Destroyed"],
		ConnectingToPeer: ["NotSubscribing", "BindingRemoteStream", "Failed", "Destroyed"],
		BindingRemoteStream: ["NotSubscribing", "Subscribing", "Failed", "Destroyed"],
		Subscribing: ["NotSubscribing", "Failed", "Destroyed"],
		Failed: ["Destroyed"],
		Destroyed: []
	});
	OT.SubscribingState.prototype.isDestroyed = function () {
		return "Destroyed" === this.current
	};
	OT.SubscribingState.prototype.isFailed = function () {
		return "Failed" === this.current
	};
	OT.SubscribingState.prototype.isSubscribing = function () {
		return "Subscribing" === this.current
	};
	OT.SubscribingState.prototype.isAttemptingToSubscribe = function () {
		return -1 !== OT.$.arrayIndexOf(["Init", "ConnectingToPeer", "BindingRemoteStream"], this.current)
	}
}(window);
!
function () {
	OT.PublishingState = OT.generateSimpleStateMachine("NotPublishing", "NotPublishing GetUserMedia BindingMedia MediaBound PublishingToSession Publishing Failed Destroyed".split(" "), {
		NotPublishing: ["NotPublishing", "GetUserMedia", "Destroyed"],
		GetUserMedia: ["BindingMedia", "Failed", "NotPublishing", "Destroyed"],
		BindingMedia: ["MediaBound", "Failed", "NotPublishing", "Destroyed"],
		MediaBound: ["NotPublishing", "PublishingToSession", "Failed", "Destroyed"],
		PublishingToSession: ["NotPublishing", "Publishing", "Failed", "Destroyed"],
		Publishing: ["NotPublishing", "MediaBound", "Failed", "Destroyed"],
		Failed: ["Destroyed"],
		Destroyed: []
	});
	OT.PublishingState.prototype.isDestroyed = function () {
		return "Destroyed" === this.current
	};
	OT.PublishingState.prototype.isAttemptingToPublish = function () {
		return -1 !== OT.$.arrayIndexOf(["GetUserMedia", "BindingMedia", "MediaBound", "PublishingToSession"], this.current)
	};
	OT.PublishingState.prototype.isPublishing = function () {
		return "Publishing" === this.current
	}
}(window);
!
function () {
	var b = {
		audio: !0,
		video: !0
	};
	OT.Publisher = function () {
		if (OT.checkSystemRequirements()) {
			var a = OT.Publisher.nextId(),
				d, l, c, k, f, g, h = {},
				m = !1,
				e, n, q, r, p, t = new OT.Analytics,
				v, s = [1, 7, 15, 30],
				u, x, E = OT.$.hasCapabilities("webAudio"),
				y, B = this;
			v = {
				"320x240": {
					width: 320,
					height: 240
				},
				"640x480": {
					width: 640,
					height: 480
				},
				"1280x720": {
					width: 1280,
					height: 720
				}
			};
			OT.$.now();
			OT.$.eventing(this);
			if (E) {
				y = new OT.AnalyserAudioLevelSampler(OT.audioContext());
				var A = new OT.IntervalRunner(function () {
					y.sample(function (a) {
						OT.$.requestAnimationFrame(function () {
							B.dispatchEvent(new OT.AudioLevelUpdatedEvent(a))
						})
					})
				}, 60);
				this.on({
					"audioLevelUpdated:added": function (a) {
						1 === a && A.start()
					},
					"audioLevelUpdated:removed": function (a) {
						0 === a && A.stop()
					}
				})
			}
			OT.StylableComponent(this, {
				showArchiveStatus: !0,
				nameDisplayMode: "auto",
				buttonDisplayMode: "auto",
				audioLevelDisplayMode: "auto",
				backgroundImageURI: null
			});
			var w = function (b, d, e, f) {
				t.logEvent({
					action: b,
					variation: d,
					payload_type: e,
					payload: f,
					session_id: g ? g.sessionId : null,
					connection_id: g && g.isConnected() ? g.connection.connectionId : null,
					partner_id: g ? g.apiKey : OT.APIKEY,
					streamId: c ? c.id : null,
					widget_id: a,
					widget_type: "Publisher"
				})
			},
				F = OT.$.bind(function (b, e) {
					if (u.isPublishing()) {
						var f = {
							widget_type: "Publisher",
							stream_type: "WebRTC",
							sessionId: g ? g.sessionId : null,
							connectionId: g && g.isConnected() ? g.connection.connectionId : null,
							partnerId: g ? g.apiKey : OT.APIKEY,
							streamId: c ? c.id : null,
							width: d ? OT.$.width(d.domElement) : void 0,
							height: d ? OT.$.height(d.domElement) : void 0,
							widgetId: a,
							version: OT.properties.version,
							media_server_name: g ? g.sessionInfo.messagingServer : null,
							p2pFlag: g ? g.sessionInfo.p2pEnabled : !1,
							duration: n ? (new Date).getTime() - n.getTime() : 0,
							remote_connection_id: b.id
						};
						t.logQOS(OT.$.extend(f, e));
						this.trigger("qos", e)
					}
				}, this),
				G = function (a) {
					OT.debug("OT.Publisher.onStreamAvailable");
					u.set("BindingMedia");
					f && (f.stop(), f = null);
					f = a;
					q = new OT.Microphone(f, !e.publishAudio);
					this.publishVideo(e.publishVideo && 0 < f.getVideoTracks().length);
					this.accessAllowed = !0;
					this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_ALLOWED, !1));
					var b = {
						muted: !0,
						error: OT.$.bind(M, this)
					};
					l = d.bindVideo(f, b, OT.$.bind(function (a) {
						a ? (w("publish", "Failure", "reason", "Publisher PeerConnection Error: " + a), u.set("Failed"), this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.P2P_CONNECTION_FAILED, "Publisher PeerConnection Error: " + a)), OT.handleJsException("Publisher PeerConnection Error: " + a, OT.ExceptionCodes.P2P_CONNECTION_FAILED, {
							session: g,
							target: this
						})) : u.isDestroyed() || (OT.debug("OT.Publisher.onLoaded"), u.set("MediaBound"), d.loading(this.session ? !c : !1), m = !0, Q.call(this), this.trigger("initSuccess"), this.trigger("loaded", this))
					}, this));
					y && 0 < a.getAudioTracks().length && (y.webOTStream = a)
				},
				H = function (a) {
					OT.error("OT.Publisher.onStreamAvailableError " + a.name + ": " + a.message);
					u.set("Failed");
					this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, a.message));
					d && d.destroy();
					w("publish", "Failure", "reason", "GetUserMedia:Publisher failed to access camera/mic: " + a.message);
					OT.handleJsException("Publisher failed to access camera/mic: " + a.message, OT.ExceptionCodes.UNABLE_TO_PUBLISH, {
						session: g,
						target: this
					})
				},
				I = function (a) {
					OT.error("OT.Publisher.onStreamAvailableError Permission Denied");
					u.set("Failed");
					this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "Publisher Access Denied: Permission Denied" + (a.message ? ": " + a.message : "")));
					w("publish", "Failure", "reason", "GetUserMedia:Publisher Access Denied: Permission Denied");
					this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DENIED))
				},
				C = function () {
					w("accessDialog", "Opened", "", "");
					this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DIALOG_OPENED, !0))
				},
				J = function () {
					w("accessDialog", "Closed", "", "");
					this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DIALOG_CLOSED, !1))
				},
				M = function (a, b) {
					OT.error("OT.Publisher.onVideoError");
					var c = b + (a ? " (" + a + ")" : "");
					w("stream", null, "reason", "Publisher while playing stream: " + c);
					u.set("Failed");
					u.isAttemptingToPublish() ? this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, c)) : this.trigger("error", c);
					OT.handleJsException("Publisher error playing stream: " + c, OT.ExceptionCodes.UNABLE_TO_PUBLISH, {
						session: g,
						target: this
					})
				},
				K = function (a) {
					OT.debug("OT.Subscriber has been disconnected from the Publisher's PeerConnection");
					this.cleanupSubscriber(a.remoteConnection().id)
				},
				P = function (a, b, c, d) {
					w("publish", "Failure", "reason|hasRelayCandidates", (d ? d : "") + [":Publisher PeerConnection with connection " + (c && c.remoteConnection && c.remoteConnection().id) + " failed: " + b, c.hasRelayCandidates()].join("|"));
					OT.handleJsException("Publisher PeerConnection Error: " + b, OT.ExceptionCodes.UNABLE_TO_PUBLISH, {
						session: g,
						target: this
					});
					delete h[c.remoteConnection().id]
				},
				O = OT.$.bind(function (a) {
					this.stream = c = a;
					c.on("destroyed", this.disconnect, this);
					u.set("Publishing");
					d.loading(!m);
					n = new Date;
					this.trigger("publishComplete", null, this);
					this.dispatchEvent(new OT.StreamEvent("streamCreated", a, null, !1));
					w("publish", "Success", "streamType:streamId", "WebRTC:" + k)
				}, this),
				L = function (a) {
					var b = h[a.id];
					if (!b) {
						var c = OT.$.now();
						w("createPeerConnection", "Attempt", "", "");
						a.on("destroyed", OT.$.bind(this.cleanupSubscriber, this, a.id));
						b = h[a.id] = new OT.PublisherPeerConnection(a, g, k, f);
						b.on({
							connected: function () {
								w("createPeerConnection", "Success", "pcc|hasRelayCandidates", [parseInt(OT.$.now() - c, 10), b.hasRelayCandidates()].join("|"))
							},
							disconnected: K,
							error: P,
							qos: F
						}, this);
						b.init(x)
					}
					return b
				},
				N = function (a) {
					if (!1 === a) return "off";
					a = this.getStyle("buttonDisplayMode");
					return !1 === a ? "on" : a
				},
				Q = function () {
					this.getStyle("showArchiveStatus") || w("showArchiveStatus", "createChrome", "mode", "off");
					var a = {
						backingBar: new OT.Chrome.BackingBar({
							nameMode: !e.name ? "off" : this.getStyle("nameDisplayMode"),
							muteMode: N.call(this, this.getStyle("buttonDisplayMode"))
						}),
						name: new OT.Chrome.NamePanel({
							name: e.name,
							mode: this.getStyle("nameDisplayMode")
						}),
						muteButton: new OT.Chrome.MuteButton({
							muted: !1 === e.publishAudio,
							mode: N.call(this, this.getStyle("buttonDisplayMode"))
						}),
						archive: new OT.Chrome.Archiving({
							show: this.getStyle("showArchiveStatus"),
							archiving: !1
						})
					};
					if (E) {
						var b = new OT.AudioLevelTransformer,
							c = function (a) {
								p.setValue(b.transform(a.audioLevel))
							};
						p = new OT.Chrome.AudioLevelMeter({
							mode: this.getStyle("audioLevelDisplayMode"),
							onActivate: function () {
								B.on("audioLevelUpdated", c)
							},
							onPassivate: function () {
								B.off("audioLevelUpdated", c)
							}
						});
						a.audioLevel = p
					}
					r = (new OT.Chrome({
						parent: d.domElement
					})).set(a).on({
						muted: OT.$.bind(this.publishAudio, this, !1),
						unmuted: OT.$.bind(this.publishAudio, this, !0)
					});
					if (p) p[d.audioOnly() ? "show" : "hide"]()
				},
				z = OT.$.bind(function () {
					r && (r.destroy(), r = null);
					this.disconnect();
					q = null;
					l && (l.destroy(), l = null);
					f && (f.stop(), f = null);
					d && (d.destroy(), d = null);
					g && this._.unpublishFromSession(g, "reset");
					this.stream = c = this.id =
					null;
					m = !1;
					this.session = g = null;
					u.isDestroyed() || u.set("NotPublishing")
				}, this);
			this.publish = function (a, c) {
				OT.debug("OT.Publisher: publish");
				(u.isAttemptingToPublish() || u.isPublishing()) && z();
				u.set("GetUserMedia");
				e = OT.$.defaults(c || {}, {
					publishAudio: !0,
					publishVideo: !0,
					mirror: !0
				});
				e.constraints ? OT.warn("You have passed your own constraints not using ours") : (e.constraints = OT.$.clone(b), null === e.audioSource || !1 === e.audioSource ? (e.constraints.audio = !1, e.publishAudio = !1) : ("object" === typeof e.audioSource && (null != e.audioSource.deviceId ? e.audioSource = e.audioSource.deviceId : OT.warn("Invalid audioSource passed to Publisher. Expected either a device ID")), e.audioSource && ("object" !== typeof e.constraints.audio && (e.constraints.audio = {}), e.constraints.audio.mandatory || (e.constraints.audio.mandatory = {}), e.constraints.audio.optional || (e.constraints.audio.optional = []), e.constraints.audio.mandatory.sourceId = e.audioSource)), null === e.videoSource || !1 === e.videoSource ? (e.constraints.video = !1, e.publishVideo = !1) : ("object" === typeof e.videoSource && (null != e.videoSource.deviceId ? e.videoSource = e.videoSource.deviceId : OT.warn("Invalid videoSource passed to Publisher. Expected either a device ID")), e.videoSource && ("object" !== typeof e.constraints.video && (e.constraints.video = {}), e.constraints.video.mandatory || (e.constraints.video.mandatory = {}), e.constraints.video.optional || (e.constraints.video.optional = []), e.constraints.video.mandatory.sourceId = e.videoSource), e.resolution && (void 0 !== e.resolution && !v.hasOwnProperty(e.resolution) ? OT.warn("Invalid resolution passed to the Publisher. Got: " + e.resolution + ' expecting one of "' + OT.$.keys(v).join('","') + '"') : (e.videoDimensions = v[e.resolution], "object" !== typeof e.constraints.video && (e.constraints.video = {}), e.constraints.video.mandatory || (e.constraints.video.mandatory = {}), e.constraints.video.optional || (e.constraints.video.optional = []), e.constraints.video.optional = e.constraints.video.optional.concat([{
					minWidth: e.videoDimensions.width
				},
				{
					maxWidth: e.videoDimensions.width
				},
				{
					minHeight: e.videoDimensions.height
				},
				{
					maxHeight: e.videoDimensions.height
				}]))), void 0 !== e.frameRate && -1 === OT.$.arrayIndexOf(s, e.frameRate) ? (OT.warn("Invalid frameRate passed to the publisher got: " + e.frameRate + " expecting one of " + s.join(",")), delete e.frameRate) : e.frameRate && ("object" !== typeof e.constraints.video && (e.constraints.video = {}), e.constraints.video.mandatory || (e.constraints.video.mandatory = {}), e.constraints.video.optional || (e.constraints.video.optional = []), e.constraints.video.optional = e.constraints.video.optional.concat([{
					minFrameRate: e.frameRate
				},
				{
					maxFrameRate: e.frameRate
				}]))));
				e.style && this.setStyle(e.style, null, !0);
				e.name && (e.name = e.name.toString());
				e.classNames = "OT_root ";
				OT.onLoad(function () {
					d = new OT.WidgetView(a, e);
					this.id = d.domId();
					this.element = d.domElement;
					OT.$.shouldAskForDevices(OT.$.bind(function (a) {
						a.video || (OT.warn("Setting video constraint to false, there are no video sources"), e.constraints.video = !1);
						a.audio || (OT.warn("Setting audio constraint to false, there are no audio sources"), e.constraints.audio = !1);
						OT.$.getUserMedia(e.constraints, OT.$.bind(G, this), OT.$.bind(H, this), OT.$.bind(C, this), OT.$.bind(J, this), OT.$.bind(I, this))
					}, this))
				}, this);
				return this
			};
			this.publishAudio = function (a) {
				e.publishAudio = a;
				q && q.muted(!a);
				r && r.muteButton.muted(!a);
				g && c && c.setChannelActiveState("audio", a);
				return this
			};
			this.publishVideo = function (a) {
				var b = e.publishVideo;
				e.publishVideo = a;
				g && (c && e.publishVideo !== b) && c.setChannelActiveState("video", a);
				if (f) for (var b = f.getVideoTracks(), h = 0, k = b.length; h < k; ++h) b[h].setEnabled(a);
				a = !a;
				d && (d.audioOnly(a), d.showPoster(a));
				if (p) p[a ? "show" : "hide"]();
				return this
			};
			this.destroy = function (a, b) {
				if (!u.isDestroyed()) return u.set("Destroyed"), z(), !0 !== b && this.dispatchEvent(new OT.DestroyedEvent(OT.Event.names.PUBLISHER_DESTROYED, this, a), OT.$.bind(this.off, this)), this
			};
			this.disconnect = function () {
				for (var a in h) this.cleanupSubscriber(a)
			};
			this.cleanupSubscriber = function (a) {
				var b = h[a];
				b && (b.destroy(), delete h[a], w("disconnect", "PeerConnection", "subscriberConnection", a))
			};
			this.processMessage = function (a, b, c) {
				OT.debug("OT.Publisher.processMessage: Received " + a + " from " + b.id);
				OT.debug(c);
				switch (a) {
				case "unsubscribe":
					this.cleanupSubscriber(c.content.connection.id);
					break;
				default:
					L.call(this, b).processMessage(a, c)
				}
			};
			this.getImgData = function () {
				return !m ? (OT.error("OT.Publisher.getImgData: Cannot getImgData before the Publisher is publishing."), null) : l.imgData()
			};
			this._ = {
				publishToSession: OT.$.bind(function (a) {
					this.session = g = a;
					var b = function () {
						var b, c;
						if (g) {
							u.set("PublishingToSession");
							var d = OT.$.bind(function (a, b, c) {
								a ? (w("publish", "Failure", "reason", "Publish:" + OT.ExceptionCodes.UNABLE_TO_PUBLISH + ":" + a.message), u.isAttemptingToPublish() && this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, a.message))) : (this.streamId = k = b, x = OT.Raptor.parseIceServers(c))
							}, this);
							e.videoDimensions ? (b = Math.min(e.videoDimensions.width, l.videoWidth() || 640), c = Math.min(e.videoDimensions.height, l.videoHeight() || 480)) : (b = l.videoWidth() || 640, c = l.videoHeight() || 480);
							a._.streamCreate(e && e.name ? e.name : "", OT.VideoOrientation.ROTATED_NORMAL, b, c, e.publishAudio, e.publishVideo, e.frameRate, d)
						}
					};
					if (m) b.call(this);
					else this.on("initSuccess", b, this);
					w("publish", "Attempt", "streamType", "WebRTC");
					return this
				}, this),
				unpublishFromSession: OT.$.bind(function (b, c) {
					if (!g || b.id !== g.id) return OT.warn("The publisher " + a + " is trying to unpublish from a session " + b.id + " it is not attached to (it is attached to " + (g && g.id || "no session") + ")"), this;
					b.isConnected() && this.stream && b._.streamDestroy(this.stream.id);
					this.disconnect();
					this.session = g = null;
					u.isDestroyed() || u.set("MediaBound");
					w("unpublish", "Success", "sessionId", b.id);
					this._.streamDestroyed(c);
					return this
				}, this),
				streamDestroyed: OT.$.bind(function (a) {
					if (0 > OT.$.arrayIndexOf(["reset"], a)) {
						var b = new OT.StreamEvent("streamDestroyed", c, a, !0);
						a = OT.$.bind(function () {
							b.isDefaultPrevented() || this.destroy()
						}, this);
						this.dispatchEvent(b, a)
					}
				}, this),
				archivingStatus: OT.$.bind(function (a) {
					r && r.archive.setArchiving(a);
					return a
				}, this),
				webRtcStream: function () {
					return f
				}
			};
			this.detectDevices = function () {
				OT.warn("Fixme: Haven't implemented detectDevices")
			};
			this.detectMicActivity = function () {
				OT.warn("Fixme: Haven't implemented detectMicActivity")
			};
			this.getEchoCancellationMode = function () {
				OT.warn("Fixme: Haven't implemented getEchoCancellationMode");
				return "fullDuplex"
			};
			this.setMicrophoneGain = function () {
				OT.warn("Fixme: Haven't implemented setMicrophoneGain")
			};
			this.getMicrophoneGain = function () {
				OT.warn("Fixme: Haven't implemented getMicrophoneGain");
				return 0.5
			};
			this.setCamera = function () {
				OT.warn("Fixme: Haven't implemented setCamera")
			};
			this.setMicrophone = function () {
				OT.warn("Fixme: Haven't implemented setMicrophone")
			};
			this.guid = function () {
				return a
			};
			this.videoElement = function () {
				return l.domElement()
			};
			this.setStream = O;
			this.isWebRTC = !0;
			this.isLoading = function () {
				return d && d.loading()
			};
			this.videoWidth = function () {
				return l.videoWidth()
			};
			this.videoHeight = function () {
				return l.videoHeight()
			};
			this.on("styleValueChanged", function (a, b) {
				if (r) switch (a) {
				case "nameDisplayMode":
					r.name.setDisplayMode(b);
					r.backingBar.setNameMode(b);
					break;
				case "showArchiveStatus":
					w("showArchiveStatus", "styleChange", "mode", b ? "on" : "off");
					r.archive.setShowArchiveStatus(b);
					break;
				case "buttonDisplayMode":
					r.muteButton.setDisplayMode(b);
					r.backingBar.setMuteMode(b);
					break;
				case "audioLevelDisplayMode":
					r.audioLevel.setDisplayMode(b);
					break;
				case "backgroundImageURI":
					d.setBackgroundImageURI(b)
				}
			}, this);
			u = new OT.PublishingState(function (a) {
				OT.error("Publisher State Change Failed: ", a.message);
				OT.debug(a)
			});
			this.accessAllowed = !1
		} else OT.upgradeSystemRequirements()
	};
	OT.Publisher.nextId = OT.$.uuid
}(window);
!
function () {
	OT.Subscriber = function (b, a) {
		var d = OT.$.uuid(),
			l = b || d,
			c, k, f, g, h, m, e, n = a.session,
			q, r, p = OT.$.clone(a),
			t = new OT.Analytics,
			v = 100,
			s, u, x = OT.$.hasCapabilities("audioOutputLevelStat") || OT.$.hasCapabilities("webAudioCapableRemoteStream"),
			E, y, B = !1,
			A = this;
		this.id = l;
		this.widgetId = d;
		this.session = n;
		OT.$.now();
		if (n) {
			OT.$.eventing(this, !1);
			if (x) this.on({
				"audioLevelUpdated:added": function (a) {
					1 === a && y && y.start()
				},
				"audioLevelUpdated:removed": function (a) {
					0 === a && y && y.stop()
				}
			});
			OT.StylableComponent(this, {
				nameDisplayMode: "auto",
				buttonDisplayMode: "auto",
				audioLevelDisplayMode: "auto",
				videoDisabledIndicatorDisplayMode: "auto",
				backgroundImageURI: null,
				showArchiveStatus: !0,
				showMicButton: !0
			});
			var w = function (a, b, c, e) {
				t.logEvent({
					action: a,
					variation: b,
					payload_type: c,
					payload: e,
					stream_id: h ? h.id : null,
					session_id: n ? n.sessionId : null,
					connection_id: n && n.isConnected() ? n.connection.connectionId : null,
					partner_id: n && n.isConnected() ? n.sessionInfo.partnerId : null,
					widget_id: d,
					widget_type: "Subscriber"
				})
			},
				F = OT.$.bind(function (a) {
					if (s.isSubscribing() && n && n.isConnected()) {
						var b = {
							widget_type: "Subscriber",
							stream_type: "WebRTC",
							width: c ? OT.$.width(c.domElement) : void 0,
							height: c ? OT.$.height(c.domElement) : void 0,
							session_id: n ? n.sessionId : null,
							connectionId: n ? n.connection.connectionId : null,
							media_server_name: n ? n.sessionInfo.messagingServer : null,
							p2pFlag: n ? n.sessionInfo.p2pEnabled : !1,
							partner_id: n ? n.apiKey : null,
							stream_id: h.id,
							widget_id: d,
							version: OT.properties.version,
							duration: parseInt(OT.$.now() - q, 10),
							remote_connection_id: h.connection.connectionId
						};
						t.logQOS(OT.$.extend(b, a));
						this.trigger("qos", a)
					}
				}, this),
				G = function () {
					OT.debug("OT.Subscriber has been disconnected from the Publisher's PeerConnection");
					s.isAttemptingToSubscribe() ? (s.set("Failed"), this.trigger("subscribeComplete", new OT.Error(null, "ClientDisconnected"))) : s.isSubscribing() && s.set("Failed");
					this.disconnect()
				},
				H = OT.$.bind(function (a, b, d) {
					s.isAttemptingToSubscribe() ? (w("createPeerConnection", "Failure", "reason|hasRelayCandidates", ["Subscriber PeerConnection Error: " + a, e && e.hasRelayCandidates()].join("|")), s.set("Failed"), this.trigger("subscribeComplete", new OT.Error(null, a))) : s.isSubscribing() && (s.set("Failed"), this.trigger("error", a));
					this.disconnect();
					w("subscribe", "Failure", "reason", (d ? d : "") + ":Subscriber PeerConnection Error: " + a);
					OT.handleJsException("Subscriber PeerConnection Error: " + a, OT.ExceptionCodes.P2P_CONNECTION_FAILED, {
						session: n,
						target: this
					});
					c && c.addError("The stream was unable to connect due to a network error.", "Make sure your connection isn't blocked by a firewall.")
				}, this),
				I = function (a) {
					OT.debug("OT.Subscriber.onRemoteStreamAdded");
					s.set("BindingRemoteStream");
					this.subscribeToAudio(p.subscribeToAudio);
					u = "loading";
					this.subscribeToVideo(p.subscribeToVideo, "loading");
					var b = {
						error: H,
						audioVolume: v
					},
						d = OT.$.browserVersion(),
						f = !1;
					!h.hasVideo && ("Chrome" === d.browser && 35 <= d.version) && (d = a.getVideoTracks(), 0 < d.length && (d[0].enabled = !1, f = d[0]));
					k = c.bindVideo(a, b, OT.$.bind(function (a) {
						a ? H(a.message || a, e, "VideoElement") : (null != f && p.subscribeToVideo && (f.enabled = !0), k.orientation({
							width: h.videoDimensions.width,
							height: h.videoDimensions.height,
							videoOrientation: h.videoDimensions.orientation
						}), !s.isSubscribing() && k && (OT.debug("OT.Subscriber.onLoaded"), s.set("Subscribing"), q = OT.$.now(), w("createPeerConnection", "Success", "pcc|hasRelayCandidates", [parseInt(q - r, 10), e && e.hasRelayCandidates()].join("|")), c.loading(!1), P.call(this), B && h.setRestrictFrameRate(!0), this.trigger("subscribeComplete", null, this), this.trigger("loaded", this), w("subscribe", "Success", "streamId", h.id)))
					}, this));
					OT.$.hasCapabilities("webAudioCapableRemoteStream") && (E && 0 < a.getAudioTracks().length) && (E.webOTStream = a);
					w("createPeerConnection", "StreamAdded", "", "");
					this.trigger("streamAdded", this)
				},
				C = function (a) {
					OT.debug("OT.Subscriber.onStreamRemoved");
					k.stream === a && (k.destroy(), k = null);
					this.trigger("streamRemoved", this)
				},
				J = function () {
					this.disconnect()
				},
				M = function (a) {
					switch (a.changedProperty) {
					case "videoDimensions":
						if (!k) break;
						k.orientation({
							width: a.newValue.width,
							height: a.newValue.height,
							videoOrientation: a.newValue.orientation
						});
						break;
					case "videoDisableWarning":
						f.videoDisabledIndicator.setWarning(a.newValue);
						this.dispatchEvent(new OT.VideoDisableWarningEvent(a.newValue ? "videoDisableWarning" : "videoDisableWarningLifted"));
						break;
					case "hasVideo":
						O(!(h.hasVideo && p.subscribeToVideo)), this.dispatchEvent(new OT.VideoEnabledChangedEvent(h.hasVideo ? "videoEnabled" : "videoDisabled", {
							reason: "publishVideo"
						}))
					}
				},
				K = function (a) {
					if (!1 === a) return "off";
					a = this.getStyle("buttonDisplayMode");
					return !1 === a ? "on" : a
				},
				P = function () {
					var a = {
						backingBar: new OT.Chrome.BackingBar({
							nameMode: !p.name ? "off" : this.getStyle("nameDisplayMode"),
							muteMode: K.call(this, this.getStyle("showMuteButton"))
						}),
						name: new OT.Chrome.NamePanel({
							name: p.name,
							mode: this.getStyle("nameDisplayMode")
						}),
						muteButton: new OT.Chrome.MuteButton({
							muted: p.muted,
							mode: K.call(this, this.getStyle("showMuteButton"))
						}),
						archive: new OT.Chrome.Archiving({
							show: this.getStyle("showArchiveStatus"),
							archiving: !1
						})
					};
					if (x) {
						var b = new OT.AudioLevelTransformer,
							d = function (a) {
								g.setValue(b.transform(a.audioLevel))
							};
						g = new OT.Chrome.AudioLevelMeter({
							mode: this.getStyle("audioLevelDisplayMode"),
							onActivate: function () {
								A.on("audioLevelUpdated", d)
							},
							onPassivate: function () {
								A.off("audioLevelUpdated", d)
							}
						});
						a.audioLevel = g
					}
					a.videoDisabledIndicator = new OT.Chrome.VideoDisabledIndicator({
						mode: this.getStyle("videoDisabledDisplayMode")
					});
					f = (new OT.Chrome({
						parent: c.domElement
					})).set(a).on({
						muted: function () {
							L.call(this, !0)
						},
						unmuted: function () {
							L.call(this, !1)
						}
					}, this);
					if (g) g[c.audioOnly() ? "show" : "hide"]()
				},
				O = function (a) {
					c && (c.audioOnly(a), c.showPoster(a));
					if (g) g[a ? "show" : "hide"]()
				};
			this.subscribe = function (a) {
				OT.debug("OT.Subscriber: subscribe to " + a.id);
				if (s.isSubscribing()) return OT.error("OT.Subscriber.Subscribe: Cannot subscribe, already subscribing."), !1;
				s.set("Init");
				if (!a) return OT.error("OT.Subscriber: No stream parameter."), !1;
				if (h) return OT.error("OT.Subscriber: Already subscribed"), !1;
				this.stream = h = a;
				this.streamId = h.id;
				h.on({
					updated: M,
					destroyed: J
				}, this);
				m = a.connection.id;
				p.name = p.name || h.name;
				p.classNames = "OT_root OT_subscriber";
				p.style && this.setStyle(p.style, null, !0);
				p.audioVolume && this.setAudioVolume(p.audioVolume);
				p.subscribeToAudio =
				OT.$.castToBoolean(p.subscribeToAudio, !0);
				p.subscribeToVideo = OT.$.castToBoolean(p.subscribeToVideo, !0);
				c = new OT.WidgetView(b, p);
				this.id = l = c.domId();
				this.element = c.domElement;
				r = OT.$.now();
				if (h.connection.id !== n.connection.id) w("createPeerConnection", "Attempt", "", ""), s.set("ConnectingToPeer"), e = new OT.SubscriberPeerConnection(h.connection, n, h, this, p), e.on({
					disconnected: G,
					error: H,
					remoteStreamAdded: I,
					remoteStreamRemoved: C,
					qos: F
				}, this), e.init(), OT.$.hasCapabilities("audioOutputLevelStat") ? E = new OT.GetStatsAudioLevelSampler(e, "out") : OT.$.hasCapabilities("webAudioCapableRemoteStream") && (E = new OT.AnalyserAudioLevelSampler(OT.audioContext())), E && (y = new OT.IntervalRunner(function () {
					E.sample(function (a) {
						null !== a && OT.$.requestAnimationFrame(function () {
							A.dispatchEvent(new OT.AudioLevelUpdatedEvent(a))
						})
					})
				}, 60));
				else {
					w("createPeerConnection", "Attempt", "", "");
					a = n.getPublisherForStream(h);
					if (!a || !a._.webRtcStream()) return this.trigger("subscribeComplete", new OT.Error(null, "InvalidStreamID")), this;
					I.call(this, a._.webRtcStream())
				}
				w("subscribe", "Attempt", "streamId", h.id);
				return this
			};
			this.destroy = function (a, b) {
				if (!s.isDestroyed()) return "streamDestroyed" === a && s.isAttemptingToSubscribe() && this.trigger("subscribeComplete", new OT.Error(null, "InvalidStreamID")), s.set("Destroyed"), y && y.stop(), this.disconnect(), f && (f.destroy(), f = null), c && (c.destroy(), this.element = c = null), h && !h.destroyed && w("unsubscribe", null, "streamId", h.id), p = this.session = n = this.streamId = this.stream = h = this.id = l = null, !0 !== b && this.dispatchEvent(new OT.DestroyedEvent(OT.Event.names.SUBSCRIBER_DESTROYED, this, a), OT.$.bind(this.off, this)), this
			};
			this.disconnect = function () {
				!s.isDestroyed() && !s.isFailed() && s.set("NotSubscribing");
				k && (k.destroy(), k = null);
				e && (e.destroy(), e = null, w("disconnect", "PeerConnection", "streamId", h.id))
			};
			this.processMessage = function (a, b, c) {
				OT.debug("OT.Subscriber.processMessage: Received " + a + " message from " + b.id);
				OT.debug(c);
				m !== b.id && (m = b.id);
				e && e.processMessage(a, c)
			};
			this.disableVideo = function (a) {
				if (a) if ("auto" === u) OT.info("Video has been re-enabled"), f.videoDisabledIndicator.disableVideo(!1);
				else {
					OT.info("Video was not re-enabled because it was manually disabled");
					return
				} else OT.warn("Due to high packet loss and low bandwidth, video has been disabled");
				this.subscribeToVideo(a, "auto");
				a || f.videoDisabledIndicator.disableVideo(!0);
				w("updateQuality", "video", a ? "videoEnabled" : "videoDisabled", !0)
			};
			this.getImgData = function () {
				return !this.isSubscribing() ? (OT.error("OT.Subscriber.getImgData: Cannot getImgData before the Subscriber is subscribing."), null) : k.imgData()
			};
			this.setAudioVolume = function (a) {
				a =
				parseInt(a, 10);
				if (isNaN(a)) return OT.error("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100"), this;
				v = Math.max(0, Math.min(100, a));
				v !== a && OT.warn("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100");
				p.muted && 0 < v && (p.premuteVolume = a, L.call(this, !1));
				k && k.setAudioVolume(v);
				return this
			};
			this.getAudioVolume = function () {
				return p.muted ? 0 : k ? k.getAudioVolume() : v
			};
			this.subscribeToAudio = function (a) {
				a = OT.$.castToBoolean(a, !0);
				e && (e.subscribeToAudio(a && !p.subscribeMute), n && (h && a !== p.subscribeToAudio) && h.setChannelActiveState("audio", a && !p.subscribeMute));
				p.subscribeToAudio = a;
				return this
			};
			var L = function (a) {
				f.muteButton.muted(a);
				if (a !== p.mute) {
					if ("Chrome" === OT.$.browser() || TBPlugin.isInstalled()) p.subscribeMute = p.muted = a, this.subscribeToAudio(p.subscribeToAudio);
					else if (a) p.premuteVolume = this.getAudioVolume(), p.muted = !0, this.setAudioVolume(0);
					else if (p.premuteVolume || p.audioVolume) p.muted = !1, this.setAudioVolume(p.premuteVolume || p.audioVolume);
					p.mute = p.mute
				}
			},
				N = {
					auto: "quality",
					publishVideo: "publishVideo",
					subscribeToVideo: "subscribeToVideo"
				};
			this.subscribeToVideo = function (a, b) {
				var d = OT.$.castToBoolean(a, !0);
				O(!(d && h.hasVideo));
				d && (c && c.video()) && (c.loading(d), c.video().whenTimeIncrements(function () {
					c.loading(!1)
				}, this));
				f && f.videoDisabledIndicator && f.videoDisabledIndicator.disableVideo(!1);
				e && (e.subscribeToVideo(d), n && (h && (d !== p.subscribeToVideo || b !== u)) && h.setChannelActiveState("video", d, b));
				p.subscribeToVideo = d;
				u = b;
				"loading" !== b && this.dispatchEvent(new OT.VideoEnabledChangedEvent(d ? "videoEnabled" : "videoDisabled", {
					reason: N[b] || "subscribeToVideo"
				}));
				return this
			};
			this.isSubscribing = function () {
				return s.isSubscribing()
			};
			this.isWebRTC = !0;
			this.isLoading = function () {
				return c && c.loading()
			};
			this.videoWidth = function () {
				return k.videoWidth()
			};
			this.videoHeight = function () {
				return k.videoHeight()
			};
			this.restrictFrameRate = function (a) {
				OT.debug("OT.Subscriber.restrictFrameRate(" + a + ")");
				w("restrictFrameRate", a.toString(), "streamId", h.id);
				n.sessionInfo.p2pEnabled && OT.warn("OT.Subscriber.restrictFrameRate: Cannot restrictFrameRate on a P2P session");
				"boolean" !== typeof a ? OT.error("OT.Subscriber.restrictFrameRate: expected a boolean value got a " + typeof a) : (B = a, h.setRestrictFrameRate(a));
				return this
			};
			this.on("styleValueChanged", function (a, b) {
				if (f) switch (a) {
				case "nameDisplayMode":
					f.name.setDisplayMode(b);
					f.backingBar.setNameMode(b);
					break;
				case "videoDisabledDisplayMode":
					f.videoDisabledIndicator.setDisplayMode(b);
					break;
				case "showArchiveStatus":
					f.archive.setShowArchiveStatus(b);
					break;
				case "buttonDisplayMode":
					f.muteButton.setDisplayMode(b);
					f.backingBar.setMuteMode(b);
					break;
				case "audioLevelDisplayMode":
					f.audioLevel.setDisplayMode(b);
					break;
				case "backgroundImageURI":
					c.setBackgroundImageURI(b)
				}
			}, this);
			this._ = {
				archivingStatus: function (a) {
					f && f.archive.setArchiving(a)
				}
			};
			s = new OT.SubscribingState(function (a) {
				OT.error("Subscriber State Change Failed: ", a.message);
				OT.debug(a)
			})
		} else OT.handleJsException("Subscriber must be passed a session option", 2E3, {
			session: n,
			target: this
		})
	}
}(window);
!
function () {
	var b, a, d;
	OT.SessionInfo = function (a) {
		var b = a[0];
		OT.log("SessionInfo Response:");
		OT.log(a);
		this.sessionId = b.session_id;
		this.partnerId = b.partner_id;
		this.sessionStatus = b.session_status;
		this.messagingServer = b.messaging_server_url;
		this.messagingURL = b.messaging_url;
		this.symphonyAddress = b.symphony_address;
		this.p2pEnabled = !(!b.properties || !b.properties.p2p || !(b.properties.p2p.preference && "enabled" === b.properties.p2p.preference.value))
	};
	OT.SessionInfo.get = function (c, k, f) {
		var g = OT.properties.apiURL + "/session/" + c.id + "?extended\x3dtrue",
			h = OT.$.browserVersion(),
			l = OT.$.now();
		"IE" === h.browser && 10 > h.version ? (g = g + "\x26format\x3djson\x26token\x3d" + encodeURIComponent(c.token) + "\x26version\x3d1\x26cache\x3d" + OT.$.uuid(), h = {
			xdomainrequest: !0
		}) : h = {
			headers: {
				"X-TB-TOKEN-AUTH": c.token,
				"X-TB-VERSION": 1
			}
		};
		c.logEvent("getSessionInfo", "Attempt", "api_url", OT.properties.apiURL);
		OT.$.getJSON(g, h, function (e, g) {
			if (e) d(c, f, new OT.Error(e.target && e.target.status || e.code, e.message || "Could not connect to the OpenTok API Server."), g);
			else {
				c.logEvent("Instrumentation", null, "gsi", OT.$.now() - l);
				var h = b(g);
				!1 === h ? a(c, k, g) : d(c, f, h, JSON.stringify(g))
			}
		})
	};
	var l = {};
	l["404"] = OT.ExceptionCodes.INVALID_SESSION_ID;
	l["409"] = OT.ExceptionCodes.INVALID_SESSION_ID;
	l["400"] = OT.ExceptionCodes.INVALID_SESSION_ID;
	l["403"] = OT.ExceptionCodes.AUTHENTICATION_ERROR;
	b = function (a) {
		if (OT.$.isArray(a)) {
			a = OT.$.filter(a, function (a) {
				return null != a.error
			});
			if (0 === a.length) return !1;
			var b = a[0].error.code;
			l[b.toString()] && (b = l[b]);
			return {
				code: b,
				message: a[0].error.errorMessage && a[0].error.errorMessage.message
			}
		}
		return {
			code: null,
			message: "Unknown error: getSessionInfo JSON response was badly formed"
		}
	};
	a = function (a, b, d) {
		a.logEvent("getSessionInfo", "Success", "api_url", OT.properties.apiURL);
		b(new OT.SessionInfo(d))
	};
	d = function (a, b, d, g) {
		a.logEvent("Connect", "Failure", "errorMessage", "GetSessionInfo:" + (d.code || "No code") + ":" + d.message + ":" + (g || "Empty responseText from API server"));
		b(d, a)
	}
}(window);
!
function () {
	OT.Capabilities = function (b) {
		this.publish = -1 !== OT.$.arrayIndexOf(b, "publish") ? 1 : 0;
		this.subscribe = -1 !== OT.$.arrayIndexOf(b, "subscribe") ? 1 : 0;
		this.forceUnpublish = -1 !== OT.$.arrayIndexOf(b, "forceunpublish") ? 1 : 0;
		this.forceDisconnect = -1 !== OT.$.arrayIndexOf(b, "forcedisconnect") ? 1 : 0;
		this.supportsWebRTC = OT.$.hasCapabilities("webrtc") ? 1 : 0;
		this.permittedTo = function (a) {
			return this.hasOwnProperty(a) && 1 === this[a]
		}
	}
}(window);
!
function (b) {
	OT.Session = function (a, d) {
		OT.$.eventing(this);
		if (OT.checkSystemRequirements()) {
			null == d && (d = a, a = null);
			this.id = this.sessionId = d;
			var l = !0,
				c = a,
				k, f = d,
				g, h = OT.$.uuid(),
				m, e = new OT.Analytics,
				n, q, r, p, t, v, s, u, x, E, y, B, A, w, F, G, H, I, C, J = OT.$.statable(this, ["disconnected", "connecting", "connected", "disconnecting"], "disconnected");
			this.connection = null;
			this.connections = new OT.Collection;
			this.streams = new OT.Collection;
			this.archives = new OT.Collection;
			n = function (a, b) {
				J("disconnected");
				OT.error(a);
				this.trigger("sessionConnectFailed", new OT.Error(b || OT.ExceptionCodes.CONNECT_FAILED, a));
				OT.handleJsException(a, b || OT.ExceptionCodes.CONNECT_FAILED, {
					session: this
				})
			};
			q = function (a) {
				var b = a.reason;
				"networkTimedout" === b ? (b = "networkDisconnected", this.logEvent("Connect", "TimeOutDisconnect", "reason", a.reason)) : this.logEvent("Connect", "Disconnected", "reason", a.reason);
				var c = new OT.SessionDisconnectEvent("sessionDisconnected", b);
				y.call(this);
				B.call(this, b);
				a = OT.$.bind(function () {
					A.call(this, c.reason);
					c.isDefaultPrevented() || w.call(this, c.reason)
				}, this);
				this.dispatchEvent(c, a)
			};
			r = function (a) {
				a.id.match(/^symphony\./) || this.dispatchEvent(new OT.ConnectionEvent(OT.Event.names.CONNECTION_CREATED, a))
			};
			p = function (a, b) {
				a.id.match(/^symphony\./) || a.id !== g.id() && this.dispatchEvent(new OT.ConnectionEvent(OT.Event.names.CONNECTION_DESTROYED, a, b))
			};
			t = function (a) {
				a.connection.id !== this.connection.id && this.dispatchEvent(new OT.StreamEvent(OT.Event.names.STREAM_CREATED, a, null, !1))
			};
			v = function (a) {
				var b = a.target,
					c = a.changedProperty,
					d = a.newValue;
				"videoDisableWarning" === c || "audioDisableWarning" === c || ("orientation" === c && (c = "videoDimensions", d = {
					width: d.width,
					height: d.height
				}), this.dispatchEvent(new OT.StreamPropertyChangedEvent(OT.Event.names.STREAM_PROPERTY_CHANGED, b, c, a.oldValue, d)))
			};
			s = function (a, b) {
				if (a.connection.id === this.connection.id) OT.$.forEach(OT.publishers.where({
					streamId: a.id
				}), OT.$.bind(function (a) {
					a._.unpublishFromSession(this, b)
				}, this));
				else {
					var c = new OT.StreamEvent("streamDestroyed", a, b, !0),
						d = OT.$.bind(function () {
							c.isDefaultPrevented() || OT.$.forEach(OT.subscribers.where({
								streamId: a.id
							}), function (a) {
								a.session.id === this.id && a.stream && a.destroy("streamDestroyed")
							}, this)
						}, this);
					this.dispatchEvent(c, d)
				}
			};
			u = function (a) {
				this.dispatchEvent(new OT.ArchiveEvent("archiveStarted", a))
			};
			x = function (a) {
				this.dispatchEvent(new OT.ArchiveEvent("archiveDestroyed", a))
			};
			E = function (a) {
				var b = a.target,
					c = a.newValue;
				"status" === a.changedProperty && "stopped" === c ? this.dispatchEvent(new OT.ArchiveEvent("archiveStopped", b)) : this.dispatchEvent(new OT.ArchiveEvent("archiveUpdated", b))
			};
			y = function () {
				this.token = k = null;
				J("disconnected");
				this.connection = null;
				this.capabilities = new OT.Capabilities([]);
				this.connections.destroy();
				this.streams.destroy();
				this.archives.destroy()
			};
			B = function (a) {
				OT.$.forEach(OT.publishers.where({
					session: this
				}), function (b) {
					b.disconnect(a)
				});
				OT.$.forEach(OT.subscribers.where({
					session: this
				}), function (a) {
					a.disconnect()
				})
			};
			A = function (a) {
				OT.$.forEach(OT.publishers.where({
					session: this
				}), function (b) {
					b._.streamDestroyed(a)
				})
			};
			w = function (a) {
				OT.$.forEach(OT.subscribers.where({
					session: this
				}), function (b) {
					b.destroy(a)
				})
			};
			F = function () {
				OT.debug("OT.Session: connecting to Raptor");
				var a = this.sessionInfo.messagingURL;
				g = new OT.Raptor.Socket(h, a, OT.properties.symphonyAddresss || this.sessionInfo.symphonyAddress, OT.SessionDispatcher(this));
				var c = [a, OT.$.userAgent(), OT.properties.version, b.externalHost ? "yes" : "no"];
				g.connect(k, this.sessionInfo, OT.$.bind(function (a, b) {
					if (a) g = void 0, c.splice(0, 0, a.message), this.logEvent("Connect", "Failure", "reason|webSocketServerUrl|userAgent|sdkVersion|chromeFrame", c.map(function (a) {
						return a.replace("|", "\\|")
					}).join("|")), n.call(this, a.message, a.code);
					else {
						OT.debug("OT.Session: Received session state from Raptor", b);
						if (this.connection = this.connections.get(g.id())) this.capabilities = this.connection.permissions;
						J("connected");
						this.logEvent("Connect", "Success", "webSocketServerUrl|userAgent|sdkVersion|chromeFrame", OT.$.map(c, function (a) {
							return a.replace("|", "\\|")
						}).join("|"), {
							connectionId: this.connection.id
						});
						this.connection.on("destroyed", q, this);
						this.connections.on({
							add: r,
							remove: p
						}, this);
						this.streams.on({
							add: t,
							remove: s,
							update: v
						}, this);
						this.archives.on({
							add: u,
							remove: x,
							update: E
						}, this);
						this.dispatchEvent(new OT.SessionConnectEvent(OT.Event.names.SESSION_CONNECTED), OT.$.bind(function () {
							this.connections._triggerAddEvents();
							this.streams._triggerAddEvents();
							this.archives._triggerAddEvents()
						}, this))
					}
				}, this))
			};
			G = function () {
				this.is("connecting") && OT.SessionInfo.get(this, OT.$.bind(H, this), OT.$.bind(function (a) {
					n.call(this, a.message + (a.code ? " (" + a.code + ")" : ""), a.code)
				}, this))
			};
			H = function (a) {
				if (this.is("connecting")) {
					var b =
					OT.properties.sessionInfoOverrides;
					this.sessionInfo = a;
					null != b && "object" === typeof b && (this.sessionInfo = OT.$.defaults(b, this.sessionInfo), console.log("is", this.sessionInfo));
					this.sessionInfo.partnerId && this.sessionInfo.partnerId !== c ? (this.apiKey = c = this.sessionInfo.partnerId, this.logEvent("Connect", "Failure", "reason", "GetSessionInfo:" + OT.ExceptionCodes.AUTHENTICATION_ERROR + ":Authentication Error: The API key does not match the token or session."), n.call(this, "Authentication Error: The API key does not match the token or session.", OT.ExceptionCodes.AUTHENTICATION_ERROR)) : F.call(this)
				}
			};
			I = OT.$.bind(function (a) {
				return this.capabilities.permittedTo(a)
			}, this);
			C = OT.$.bind(function (a, b, c) {
				OT.dispatchError(a, b, c, this)
			}, this);
			this.logEvent = function (a, b, d, g, k) {
				a = {
					action: a,
					variation: b,
					payload_type: d,
					payload: g,
					session_id: f,
					partner_id: c,
					widget_id: h,
					widget_type: "Controller"
				};
				this.connection && this.connection.id ? m = a.connection_id = this.connection.id : m && (a.connection_id = m);
				k && (a = OT.$.extend(k, a));
				e.logEvent(a)
			};
			this.connect = function (d) {
				if (null == a && 1 < arguments.length && ("string" === typeof arguments[0] || "number" === typeof arguments[0]) && "string" === typeof arguments[1]) c = d.toString(), d = arguments[1];
				var e = arguments[arguments.length - 1];
				if (this.is("connecting", "connected")) return OT.warn("OT.Session: Cannot connect, the session is already " + this.state), this;
				y.call(this);
				J("connecting");
				this.token = k = !OT.$.isFunction(d) && d;
				l ? l = !1 : h = OT.$.uuid();
				e && OT.$.isFunction(e) && (this.once("sessionConnected", OT.$.bind(e, null, null)), this.once("sessionConnectFailed", e));
				if (null == c || OT.$.isFunction(c)) return setTimeout(OT.$.bind(n, this, "API Key is undefined. You must pass an API Key to initSession.", OT.ExceptionCodes.AUTHENTICATION_ERROR)), this;
				if (!f) return setTimeout(OT.$.bind(n, this, "SessionID is undefined. You must pass a sessionID to initSession.", OT.ExceptionCodes.INVALID_SESSION_ID)), this;
				this.apiKey = c = c.toString();
				0 === OT.APIKEY.length && (OT.APIKEY = c);
				e = [OT.$.userAgent(), OT.properties.version, b.externalHost ? "yes" : "no"];
				this.logEvent("Connect", "Attempt", "userAgent|sdkVersion|chromeFrame", e.map(function (a) {
					return a.replace("|", "\\|")
				}).join("|"));
				G.call(this);
				return this
			};
			var M = OT.$.bind(function (a) {
				g && g.isNot("disconnected") ? g.isNot("disconnecting") && (J("disconnecting"), g.disconnect(a)) : y.call(this)
			}, this);
			this.disconnect = function (a) {
				M(void 0 !== a ? a : !0)
			};
			this.destroy = function (a) {
				this.streams.destroy();
				this.connections.destroy();
				this.archives.destroy();
				M("unloaded" !== a)
			};
			this.publish = function (a, b, d) {
				"function" === typeof a && (d = a, a = void 0);
				"function" === typeof b && (d = b, b = void 0);
				if (this.isNot("connected")) return e.logError(1010, "OT.exception", "We need to be connected before you can publish", null, {
					action: "publish",
					variation: "Failure",
					payload_type: "reason",
					payload: "We need to be connected before you can publish",
					session_id: f,
					partner_id: c,
					widgetId: h,
					widget_type: "Controller"
				}), d && OT.$.isFunction(d) && C(OT.ExceptionCodes.NOT_CONNECTED, "We need to be connected before you can publish", d), null;
				if (!I("publish")) return this.logEvent("publish", "Failure", "reason", "This token does not allow publishing. The role must be at least `publisher` to enable this functionality"), C(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "This token does not allow publishing. The role must be at least `publisher` to enable this functionality", d), null;
				if (!a || "string" === typeof a || OT.$.isElementNode(a)) a = OT.initPublisher(a, b);
				else if (a instanceof OT.Publisher)"session" in a && (a.session && "sessionId" in a.session) && (a.session.sessionId === this.sessionId ? OT.warn("Cannot publish " + a.guid() + " again to " + this.sessionId + ". Please call session.unpublish(publisher) first.") : OT.warn("Cannot publish " + a.guid() + " publisher already attached to " + a.session.sessionId + ". Please call session.unpublish(publisher) first."));
				else {
					C(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "Session.publish :: First parameter passed in is neither a string nor an instance of the Publisher", d);
					return
				}
				a.once("publishComplete", function (a) {
					a ? C(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "Session.publish :: " + a.message, d) : d && OT.$.isFunction(d) && d.apply(null, arguments)
				});
				a._.publishToSession(this);
				return a
			};
			this.unpublish = function (a) {
				a ? a._.unpublishFromSession(this, "unpublished") : OT.error("OT.Session.unpublish: publisher parameter missing.")
			};
			this.subscribe = function (a, b, c, d) {
				if (!this.connection || !this.connection.connectionId) C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: Connection required to subscribe", d);
				else if (a) {
					if (a.hasOwnProperty("streamId")) return "function" === typeof b && (d = b, b = void 0), "function" === typeof c && (d = c, c = void 0), b = new OT.Subscriber(b, OT.$.extend(c || {}, {
						session: this
					})), b.once("subscribeComplete", function (a) {
						a ? C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: " + a.message, d) : d && OT.$.isFunction(d) && d.apply(null, arguments)
					}), OT.subscribers.add(b), b.subscribe(a), b;
					C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: invalid stream object", d)
				} else C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: stream cannot be null", d)
			};
			this.unsubscribe = function (a) {
				if (!a) throw OT.error("OT.Session.unsubscribe: subscriber cannot be null"), Error("OT.Session.unsubscribe: subscriber cannot be null");
				if (!a.stream) return OT.warn("OT.Session.unsubscribe:: tried to unsubscribe a subscriber that had no stream"), !1;
				OT.debug("OT.Session.unsubscribe: subscriber " + a.id);
				a.destroy();
				return !0
			};
			this.getSubscribersForStream = function (a) {
				return OT.subscribers.where({
					streamId: a.id
				})
			};
			this.getPublisherForStream = function (a) {
				if ("string" !== typeof a) if ("object" === typeof a && a && a.hasOwnProperty("id")) a = a.id;
				else throw OT.error("Session.getPublisherForStream :: Invalid stream type"), Error("Session.getPublisherForStream :: Invalid stream type");
				return OT.publishers.where({
					streamId: a
				})[0]
			};
			this._ = {
				jsepCandidateP2p: function (a, b, c) {
					return g.jsepCandidateP2p(a, b, c)
				},
				jsepCandidate: function (a, b) {
					return g.jsepCandidate(a, b)
				},
				jsepOffer: function (a, b) {
					return g.jsepOffer(a, b)
				},
				jsepOfferP2p: function (a, b, c) {
					return g.jsepOfferP2p(a, b, c)
				},
				jsepAnswer: function (a, b) {
					return g.jsepAnswer(a, b)
				},
				jsepAnswerP2p: function (a, b, c) {
					return g.jsepAnswerP2p(a, b, c)
				},
				dispatchSignal: OT.$.bind(function (a, b, c) {
					a = new OT.SignalEvent(b, c, a);
					a.target = this;
					this.trigger(OT.Event.names.SIGNAL, a);
					b && this.dispatchEvent(a)
				}, this),
				subscriberCreate: function (a, b, c, d) {
					return g.subscriberCreate(a.id, b.widgetId, c, d)
				},
				subscriberDestroy: function (a, b) {
					return g.subscriberDestroy(a.id, b.widgetId)
				},
				subscriberUpdate: function (a, b, c) {
					return g.subscriberUpdate(a.id, b.widgetId, c)
				},
				subscriberChannelUpdate: function (a, b, c, d) {
					return g.subscriberChannelUpdate(a.id, b.widgetId, c.id, d)
				},
				streamCreate: OT.$.bind(function (a, b, c, d, e, f, h, k) {
					g.streamCreate(a, b, c, d, e, f, h, OT.Config.get("bitrates", "min", OT.APIKEY), OT.Config.get("bitrates", "max", OT.APIKEY), k)
				}, this),
				streamDestroy: function (a) {
					g.streamDestroy(a)
				},
				streamChannelUpdate: function (a, b, c) {
					g.streamChannelUpdate(a.id, b.id, c)
				}
			};
			this.signal = function (a, b) {
				var c = a,
					d = b;
				OT.$.isFunction(c) && (d = c, c = null);
				this.isNot("connected") ? C(500, "Unable to send signal - you are not connected to the session.", d) : (g.signal(c, d), a && (a.data && "string" !== typeof a.data) && OT.warn("Signaling of anything other than Strings is deprecated. Please update the data property to be a string."), this.logEvent("signal", "send", "type", a && a.data ? typeof a.data : "null"))
			};
			this.forceDisconnect =

			function (a, b) {
				this.isNot("connected") ? C(OT.ExceptionCodes.NOT_CONNECTED, "Cannot call forceDisconnect(). You are not connected to the session.", b) : I("forceDisconnect") ? g.forceDisconnect("string" === typeof a ? a : a.id, function (a) {
					a ? C(OT.ExceptionCodes.UNABLE_TO_FORCE_DISCONNECT, "This token does not allow forceDisconnect. The role must be at least `moderator` to enable this functionality", b) : b && OT.$.isFunction(b) && b.apply(null, arguments)
				}) : C(OT.ExceptionCodes.UNABLE_TO_FORCE_DISCONNECT, "This token does not allow forceDisconnect. The role must be at least `moderator` to enable this functionality", b)
			};
			this.forceUnpublish = function (a, b) {
				if (this.isNot("connected")) C(OT.ExceptionCodes.NOT_CONNECTED, "Cannot call forceUnpublish(). You are not connected to the session.", b);
				else if (I("forceUnpublish")) {
					var c = "string" === typeof a ? this.streams.get(a) : a;
					g.forceUnpublish(c.id, function (a) {
						a ? C(OT.ExceptionCodes.UNABLE_TO_FORCE_UNPUBLISH, "This token does not allow forceUnpublish. The role must be at least `moderator` to enable this functionality", b) : b && OT.$.isFunction(b) && b.apply(null, arguments)
					})
				} else C(OT.ExceptionCodes.UNABLE_TO_FORCE_UNPUBLISH, "This token does not allow forceUnpublish. The role must be at least `moderator` to enable this functionality", b)
			};
			this.getStateManager = function () {
				OT.warn("Fixme: Have not implemented session.getStateManager")
			};
			this.isConnected = function () {
				return this.is("connected")
			};
			this.capabilities = new OT.Capabilities([])
		} else OT.upgradeSystemRequirements()
	}
}(window);
(function () {
	function b(b) {
		var l, c, k;
		this.change = OT.$.bind(function () {
			l();
			var a;
			(this.pickedDevice = k[b.selectTag.value]) ? (a = {
				insertMode: "append",
				name: this.pickedDevice.label,
				audioSource: null,
				videoSource: null,
				width: 220,
				height: 165
			}, a[b.mode] = this.pickedDevice.deviceId, console.log("initPublisher", b.previewTag, a), a = OT.initPublisher(b.previewTag, a), a.on({
				accessDialogOpened: function (a) {
					a.preventDefault()
				},
				accessDialogClosed: function () {},
				accessAllowed: function () {},
				accessDenied: function (a) {
					a.preventDefault()
				}
			}), c = a) : console.log("No device for", b.mode, b.selectTag.value)
		}, this);
		this.cleanup = l = function () {
			c && (c.destroy(), c = void 0)
		};
		var f = function (b, c) {
			b.innerHTML = "";
			b.appendChild(a({}, document.createTextNode(c), "option"));
			b.setAttribute("disabled", "")
		},
			g = function (b) {
				k[b.deviceId] = b;
				return a({
					value: b.deviceId
				}, document.createTextNode(b.label), "option")
			};
		this.setDeviceList = OT.$.bind(function (a) {
			b.selectTag.innerHTML = "";
			k = {};
			0 < a.length ? (a.map(g).map(OT.$.bind(b.selectTag.appendChild, b.selectTag)), b.selectTag.removeAttribute("disabled")) : f(b.selectTag, "No devices");
			this.change()
		}, this);
		this.setLoading = function () {
			f(b.selectTag, "Loading...")
		};
		OT.$.on(b.selectTag, "change", this.change)
	}
	var a = function (a, b, c) {
		a = OT.$.createElement(c || "div", a, b);
		a.on = OT.$.bind(OT.$.on, OT.$, a);
		return a
	};
	OT.HardwareSetup = function (d, l, c) {
		var k, f, g, h;
		h = OT.$.statable(this, ["getDevices", "chooseDevices", "destroyed"], "getDevices");
		this.audioSource = function () {
			return f && f.pickedDevice
		};
		this.videoSource = function () {
			return k && k.pickedDevice
		};
		this.destroy = OT.$.bind(function () {
			this.is("destroyed") || (k && k.cleanup(), f && f.cleanup(), this.is("chooseDevices") && d.parentNode.removeChild(d), h("destroyed"))
		}, this);
		if (null == d) c(Error("You must provide a targetElement"));
		else if (OT.$.hasCapabilities("getMediaDevices")) {
			var m, e, n, q, r;
			m = a({
				style: "width: 100%"
			}, "", "select");
			e = a({
				style: "background-color: #000; margin-left: 100px; width: 220px; height: 165px;"
			}, "");
			n = a({
				style: "width: 100%"
			}, "", "select");
			q = a({
				style: "background-color: #000; margin-left: 100px; width: 220px; height: 165px;"
			}, "");
			r = a({
				id: "OT_" + OT.$.uuid(),
				style: "border: 1px solid #000; padding: 10px; width: 320px;"
			}, [a({
				style: "padding: 0 0 10px; overflow: auto; text-align: right; "
			}, [a({
				style: "float: left; width: 90px; padding-right: 10px; line-height: 160%;"
			}, "Camera"), a({
				style: "margin-left: 100px; "
			}, m), e]), a({
				style: "overflow: auto; text-align: right;"
			}, [a({
				style: "float: left; width: 90px; padding-right: 10px; line-height: 160%;"
			}, "Microphone"), a({
				style: "margin-left: 100px; "
			}, n), q])]);
			k = new b({
				selectTag: m,
				previewTag: e,
				mode: "videoSource"
			});
			f = new b({
				selectTag: n,
				previewTag: q,
				mode: "audioSource"
			});
			k.setLoading();
			f.setLoading();
			OT.getDevices(OT.$.bind(function (a, b) {
				a ? c(a) : this.is("destroyed") || (g(), k.setDeviceList(b.filter(function (a) {
					return "videoinput" === a.kind
				})), f.setDeviceList(b.filter(function (a) {
					return "audioinput" === a.kind
				})), h("chooseDevices"))
			}, this));
			g = function () {
				var a = l.insertMode;
				if (null == a || "replace" === a) {
					OT.$.emptyElement(d);
					null == d.getAttribute("id") && d.setAttribute("id", r.getAttribute("id"));
					for (var b in r.style) d.style[b] =
					r.style[b];
					for (; 0 < r.childNodes.length;) d.appendChild(r.firstChild)
				} else "append" === a ? (d.appendChild(r), d = r) : "before" === a ? (d.parentNode.insertBefore(r, d), d = r) : "after" === a && (d.parentNode.insertBefore(r, d.nextSibling), d = r)
			}
		} else c(Error("This browser does not support getMediaDevices APIs"))
	};
	OT.initHardwareSetup = function (a, b, c) {
		return new OT.HardwareSetup(a, b, c)
	}
})();
!
function () {
	var b = document.createElement("link");
	b.type = "text/css";
	b.media = "screen";
	b.rel = "stylesheet";
	b.href = OT.properties.cssURL;
	(document.head || document.getElementsByTagName("head")[0]).appendChild(b)
}(window);
!
function () {
	"function" === typeof define && define.amd && define("TB", [], function () {
		return TB
	})
}(window);