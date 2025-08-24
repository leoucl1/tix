/** [Ticketmaster]  Build version: 1.0.8 - Wednesday, June 17th, 2020, 5:48:16 PM */
var Presence = (function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 31))
  );
})([
  function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return A;
    }),
      n.d(e, "b", function () {
        return s;
      }),
      n.d(e, "d", function () {
        return c;
      }),
      n.d(e, "a", function () {
        return l;
      }),
      n.d(e, "e", function () {
        return g;
      });
    var r = n(12);
    function i(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })
          )),
          r.forEach(function (e) {
            o(t, e, n[e]);
          });
      }
      return t;
    }
    function o(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      );
    }
    function a(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var u = "Ticketmaster Presence SDK v1.0.8: ",
      A = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          i = document.createElement(t);
        return (
          e &&
            Object.keys(e).forEach(function (t) {
              this[t] = e[t];
            }, i),
          n &&
            Object.keys(n).forEach(function (t) {
              this[t] = n[t];
            }, i.style),
          r.forEach(function (t) {
            i.appendChild(t);
          }),
          i
        );
      },
      s = function (t, e) {
        e &&
          Object.keys(e).forEach(function (t) {
            this[t] = e[t];
          }, t.style);
      };
    function c() {
      return Math.round(1e10 * Math.random());
    }
    var l = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: "log",
              value: function (t) {
                console.log("".concat(u).concat(t));
              },
            },
            {
              key: "error",
              value: function (t) {
                console.error("".concat(u).concat(t));
              },
            },
            { key: "debug", value: function (t) {} },
          ]),
          (n = null) && a(e.prototype, n),
          r && a(e, r),
          t
        );
      })(),
      g = function (t, e, n, o) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "easeOutBack",
          u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 300,
          A = r.timeline({ easing: a, duration: u, complete: o }),
          s = { targets: t, offset: 0 },
          c = { targets: e, offset: 0 };
        n.forEach(function (n) {
          var r = [e.style[n], t.style[n]];
          (c[n] = r), (s[n] = r.concat().reverse());
        }),
          A.add(i({}, s)),
          A.add(i({}, c));
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return a;
      }),
      n.d(e, "e", function () {
        return u;
      }),
      n.d(e, "d", function () {
        return A;
      }),
      n.d(e, "c", function () {
        return s;
      });
    var r = { w: 216, h: 160 };
    function i(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = { minWidth: t.w, minHeight: t.h, ratio: t.h / t.w };
      return (
        e &&
          ((n.paddingPercentage = (r.w - t.w) / r.w),
          (n.verticalPaddingPercentage = (r.h - t.h) / r.h),
          (n.horizontalPaddingPercentage = (r.w - t.w) / r.w),
          t.font && (n.fontPercentage = t.font / r.h),
          t.iconWidth && t.iconHeight && ((n.iconWidth = t.iconWidth), (n.iconHeight = t.iconHeight)),
          t.boundsPadding &&
            ((n.boundsPaddingPercentage = t.boundsPadding / r.w),
            (n.internalPaddingPercentage = t.internalPadding / r.w))),
        n
      );
    }
    var o = i(r),
      a = i({ w: 278, h: 127 }),
      u = i({ w: 200, h: 50 }, !0),
      A = i({ w: 200, h: 120, iconWidth: 36, iconHeight: 32, font: 11, boundsPadding: 10, internalPadding: 8 }, !0),
      s = { SIZE_216x160: "216x160", SIZE_278x127: "278x127" };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    });
    var r = n(10);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var o = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      var e, n, o;
      return (
        (e = t),
        (o = [
          {
            key: "rjust",
            value: function (t, e) {
              for (var n = t, r = n.toString().length; r < e; ) (n = "0".concat(n)), (r += 1);
              return n;
            },
          },
          {
            key: "arr_rjust",
            value: function (t, e) {
              var n = t;
              if (e <= n.length) return (n = n.splice(n.length - 1 - e));
              for (var r = e - n.length, i = 0; i < r; i += 1) n.unshift(String.fromCharCode(0));
              return n;
            },
          },
          {
            key: "byte_secret",
            value: function (t) {
              return r.a.decode(t.toUpperCase());
            },
          },
          {
            key: "int_to_bytestring",
            value: function (e) {
              for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8, r = e, i = []; 0 !== r; )
                i.push(String.fromCharCode(255 & r)), (r >>= 8);
              return (i = i.reverse()), (i = t.arr_rjust(i, n).join(""));
            },
          },
          {
            key: "timecode",
            value: function (t, e) {
              var n = Date.parse(t).toString(),
                r = n.substring(0, n.length - 3);
              return parseInt(parseInt(r) / e);
            },
          },
          {
            key: "byteStringToHex",
            value: function (t) {
              return t.split("").reduce(function (t, e) {
                var n = parseInt(e.charCodeAt()).toString(16);
                return (t += n = n.length % 2 ? "0".concat(n) : n);
              }, "");
            },
          },
          {
            key: "hexToByteString",
            value: function (t) {
              for (var e = t.toString(), n = "", r = 0; r < e.length; r += 2)
                n += String.fromCharCode(parseInt(e.substr(r, 2), 16));
              return n;
            },
          },
          {
            key: "rightPadByteString",
            value: function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              if (t.length > Math.abs(e)) return t;
              for (
                var r = this.hexToByteString(n).repeat(e), i = t.split(""), o = r.split(""), a = 0;
                a < i.length;
                a++
              )
                o[a] = i[a];
              return o.join("");
            },
          },
        ]),
        (n = null) && i(e.prototype, n),
        o && i(e, o),
        t
      );
    })();
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    });
    var r = n(0);
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var a = (function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, t),
          (this._idPrefix = e.idPrefix),
          (this._id = e.id),
          (this._containerEl = Object(r.c)(
            "div",
            { id: this.generateElementId("div") },
            {
              position: "absolute",
              boxSizing: "border-box",
              fontFamily:
                'Averta-Semibold, -apple-system, BlinkMacSystemFont, "Roboto", "Fira Sans", "Helvetica Neue", sans-serif',
            }
          )),
          (this._color = e.color);
      }
      var e, n, a;
      return (
        (e = t),
        (n = [
          {
            key: "generateElementId",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
              return [this._idPrefix, t, this._id].join(e);
            },
          },
          { key: "render", value: function (t) {} },
          { key: "setSize", value: function (t) {} },
          {
            key: "_setContainerSize",
            value: function (t, e, n, r) {
              var i = this._containerEl.style;
              (i.width = "".concat(t, "px")), (i.height = "".concat(e, "px")), (i.margin = n), r && (i.padding = r);
            },
          },
          {
            key: "_setCanvasSize",
            value: function (t, e, n) {
              var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "0px",
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "0px";
              (t.width = e), (t.height = n), Object(r.b)(t, { margin: i, padding: o });
            },
          },
          {
            key: "el",
            get: function () {
              return this._containerEl;
            },
          },
        ]) && o(e.prototype, n),
        a && o(e, a),
        t
      );
    })();
  },
  function (t, e) {
    var n,
      r = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258,
        1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
      ];
    (e.getSymbolSize = function (t) {
      if (!t) throw new Error('"version" cannot be null or undefined');
      if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
      return 4 * t + 17;
    }),
      (e.getSymbolTotalCodewords = function (t) {
        return r[t];
      }),
      (e.getBCHDigit = function (t) {
        for (var e = 0; 0 !== t; ) e++, (t >>>= 1);
        return e;
      }),
      (e.setToSJISFunction = function (t) {
        if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
        n = t;
      }),
      (e.isKanjiModeEnabled = function () {
        return void 0 !== n;
      }),
      (e.toSJIS = function (t) {
        return n(t);
      });
  },
  function (t, e, n) {
    var r = n(19),
      i = n(20);
    (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
      (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
      (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
      (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
      (e.MIXED = { bit: -1 }),
      (e.getCharCountIndicator = function (t, e) {
        if (!t.ccBits) throw new Error("Invalid mode: " + t);
        if (!r.isValid(e)) throw new Error("Invalid version: " + e);
        return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2];
      }),
      (e.getBestModeForData = function (t) {
        return i.testNumeric(t)
          ? e.NUMERIC
          : i.testAlphanumeric(t)
          ? e.ALPHANUMERIC
          : i.testKanji(t)
          ? e.KANJI
          : e.BYTE;
      }),
      (e.toString = function (t) {
        if (t && t.id) return t.id;
        throw new Error("Invalid mode");
      }),
      (e.isValid = function (t) {
        return t && t.bit && t.ccBits;
      }),
      (e.from = function (t, n) {
        if (e.isValid(t)) return t;
        try {
          return (function (t) {
            if ("string" != typeof t) throw new Error("Param is not a string");
            switch (t.toLowerCase()) {
              case "numeric":
                return e.NUMERIC;
              case "alphanumeric":
                return e.ALPHANUMERIC;
              case "kanji":
                return e.KANJI;
              case "byte":
                return e.BYTE;
              default:
                throw new Error("Unknown mode: " + t);
            }
          })(t);
        } catch (t) {
          return n;
        }
      });
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "c", function () {
        return A;
      }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n(0),
        i = !1,
        o = function (t, e) {
          return t + e;
        },
        a = function (t, e) {
          return t * e;
        },
        u = t.localStorage,
        A = function t(e, n) {
          if ((r.a.debug("syncTime: Initiated"), "number" == typeof e))
            return (
              r.a.debug("syncTime: Using provided time delta: ".concat(e)), g(e), void ("function" == typeof n && n(e))
            );
          var o = h();
          return null !== o
            ? (r.a.debug("syncTime: Using cached time delta of ".concat(o)), void ("function" == typeof n && n(o)))
            : i
            ? (r.a.debug(
                "syncTime: Network request for time is already in flight. Will try to load from cache in ".concat(
                  500,
                  " ms"
                )
              ),
              void setTimeout(function () {
                t(e, n);
              }, 500))
            : ((i = !0),
              void f(function (t) {
                i = !1;
                var e = p(t, new Date());
                g(e),
                  r.a.debug(
                    "syncTime: Completed server request with returned time of '"
                      .concat(t.toISOString(), "' and time delta of '")
                      .concat(e, "'")
                  ),
                  "function" == typeof n && n(e);
              }));
        },
        s = function () {
          return h() || 0;
        },
        c = function (t, e) {
          var n = new Date(e);
          return l(n) || (n = new Date()), new Date(n.getTime() + t);
        },
        l = function (t) {
          return t instanceof Date && "Invalid Date" !== "".concat(t);
        },
        g = function (t) {
          var e = { td: t, ts: new Date().getTime() + 6e4 };
          u.setItem("pse-td", JSON.stringify(e));
        },
        h = function () {
          var t = u.getItem("pse-td"),
            e = {};
          try {
            e = JSON.parse(t) || {};
          } catch (t) {
            return null;
          }
          var n = new Date(e.ts);
          if (new Date() > n) return null;
          var r = e.td;
          return isNaN(r) ? null : r;
        },
        f = function (t) {
          r.a.debug("fetchServerTime: Starting network request for server time");
          var e = new window.XMLHttpRequest();
          e.open(
            "GET",
            "".concat("https://app.ticketmaster.com/safetix/configuration/v1/config", "?cb=").concat(Object(r.d)())
          ),
            (e.onreadystatechange = function () {
              if (4 === e.readyState) {
                var n = new Date();
                if (e.status >= 200 && e.status < 300) {
                  var i = JSON.parse(e.response);
                  (n = new Date(i.serverTime)),
                    r.a.debug("fetchServerTime: Server response succeeded using server time: ".concat(n.toISOString()));
                } else
                  n.setUTCFullYear(o(76, 23) + a(10, 190)),
                    r.a.debug("fetchServerTime: Server response failed using device time: ".concat(n.toISOString()));
                t(n);
              }
            }),
            (e.timeout = 1e4),
            (e.ontimeout = function () {
              var e = new Date();
              e.setUTCFullYear(o(45, 54) + a(190, 10)),
                r.a.debug(
                  "fetchServerTime: Server exceeded timed out of "
                    .concat(1e4, ", using device time: ")
                    .concat(e.toISOString())
                ),
                t(e);
            }),
            e.send();
        },
        p = function (t, e) {
          return t.getTime() - e.getTime();
        };
    }.call(this, n(3)));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return l;
      }),
        n.d(e, "b", function () {
          return w;
        });
      var r = n(30),
        i = n(11),
        o = n(2);
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var u = /^[0-9]{12,18}[A-Za-z]?$/,
        A = "BARCODE",
        s = "ROTATING_SYMBOLOGY",
        c = "UNKNOWN",
        l = { INVALID: "INVALID", STATIC_QR: "STATIC_QR", STATIC_PDF: "STATIC_PDF", ROTATING: "ROTATING" },
        g = new WeakMap(),
        h = new WeakMap(),
        f = new WeakMap(),
        p = new WeakMap(),
        d = new WeakMap(),
        m = new WeakMap(),
        w = (function () {
          function e(n) {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var r = { b: "errorbarcode", rt: c };
            try {
              var i = t.atob(n);
              (r = JSON.parse(i)).rt && (r.rt = r.rt.toUpperCase());
            } catch (t) {
              var o = n && n.match(u);
              o && (r = { b: o[0], rt: A });
            }
            r.t && r.ck && (h.set(this, r.t), f.set(this, r.ck), p.set(this, r.ek)),
              g.set(this, r.b),
              d.set(this, r.rt);
            var a = l.INVALID;
            r.rt === A ? (a = l.STATIC_QR) : (r.rt !== s && r.rt) || (a = r.t ? l.ROTATING : l.STATIC_PDF),
              m.set(this, a);
          }
          var n, w, C;
          return (
            (n = e),
            (w = [
              {
                key: "generateSignedToken",
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  if (this.displayType === l.ROTATING) {
                    var n = [this.eventKey, this.customerKey],
                      a = t;
                    if (this.eventKey) {
                      var u = new Date(a);
                      a = u instanceof Date && "Invalid Date" !== "".concat(u) ? u : new Date();
                    }
                    var A = n.reduce(
                      function (t, n) {
                        if (n) {
                          var u;
                          try {
                            u = i.b32encode(o.a.hexToByteString(n));
                          } catch (t) {
                            u = "";
                          }
                          var A = r.a(u, 15).now(a, e);
                          t.push(A);
                        }
                        return t;
                      },
                      [this.rawToken]
                    );
                    if (this.eventKey) {
                      var s = Math.floor(a.getTime() / 1e3);
                      A.push(s);
                    }
                    return A.join("::");
                  }
                  return this.barcode;
                },
              },
              {
                key: "barcode",
                get: function () {
                  return g.get(this);
                },
              },
              {
                key: "rawToken",
                get: function () {
                  return h.get(this);
                },
              },
              {
                key: "customerKey",
                get: function () {
                  return f.get(this);
                },
              },
              {
                key: "eventKey",
                get: function () {
                  return p.get(this);
                },
              },
              {
                key: "renderType",
                get: function () {
                  return d.get(this);
                },
              },
              {
                key: "displayType",
                get: function () {
                  return m.get(this);
                },
              },
            ]) && a(n.prototype, w),
            C && a(n, C),
            e
          );
        })();
    }.call(this, n(3)));
  },
  function (t, e, n) {
    "use strict";
    var r = n(14);
    o.TYPED_ARRAY_SUPPORT = (function () {
      try {
        var t = new Uint8Array(1);
        return (
          (t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function () {
              return 42;
            },
          }),
          42 === t.foo()
        );
      } catch (t) {
        return !1;
      }
    })();
    var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    function o(t, e, n) {
      return o.TYPED_ARRAY_SUPPORT || this instanceof o
        ? "number" == typeof t
          ? A(this, t)
          : (function (t, e, n, r) {
              if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
              if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer)
                return (function (t, e, n, r) {
                  if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                  if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                  var i;
                  i =
                    void 0 === n && void 0 === r
                      ? new Uint8Array(e)
                      : void 0 === r
                      ? new Uint8Array(e, n)
                      : new Uint8Array(e, n, r);
                  o.TYPED_ARRAY_SUPPORT ? (i.__proto__ = o.prototype) : (i = s(t, i));
                  return i;
                })(t, e, n, r);
              if ("string" == typeof e)
                return (function (t, e) {
                  var n = 0 | l(e),
                    r = u(t, n),
                    i = r.write(e);
                  i !== n && (r = r.slice(0, i));
                  return r;
                })(t, e);
              return (function (t, e) {
                if (o.isBuffer(e)) {
                  var n = 0 | a(e.length),
                    r = u(t, n);
                  return 0 === r.length || e.copy(r, 0, 0, n), r;
                }
                if (e) {
                  if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e)
                    return "number" != typeof e.length || (i = e.length) != i ? u(t, 0) : s(t, e);
                  if ("Buffer" === e.type && Array.isArray(e.data)) return s(t, e.data);
                }
                var i;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
            })(this, t, e, n)
        : new o(t, e, n);
    }
    function a(t) {
      if (t >= i)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
      return 0 | t;
    }
    function u(t, e) {
      var n;
      return (
        o.TYPED_ARRAY_SUPPORT
          ? ((n = new Uint8Array(e)).__proto__ = o.prototype)
          : (null === (n = t) && (n = new o(e)), (n.length = e)),
        n
      );
    }
    function A(t, e) {
      var n = u(t, e < 0 ? 0 : 0 | a(e));
      if (!o.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
      return n;
    }
    function s(t, e) {
      for (var n = e.length < 0 ? 0 : 0 | a(e.length), r = u(t, n), i = 0; i < n; i += 1) r[i] = 255 & e[i];
      return r;
    }
    function c(t, e) {
      var n;
      e = e || 1 / 0;
      for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
        if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            if (a + 1 === r) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = n;
            continue;
          }
          if (n < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
            continue;
          }
          n = 65536 + (((i - 55296) << 10) | (n - 56320));
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
        if (((i = null), n < 128)) {
          if ((e -= 1) < 0) break;
          o.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0) break;
          o.push((n >> 6) | 192, (63 & n) | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0) break;
          o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
        }
      }
      return o;
    }
    function l(t) {
      return o.isBuffer(t)
        ? t.length
        : "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        ? t.byteLength
        : ("string" != typeof t && (t = "" + t), 0 === t.length ? 0 : c(t).length);
    }
    o.TYPED_ARRAY_SUPPORT &&
      ((o.prototype.__proto__ = Uint8Array.prototype),
      (o.__proto__ = Uint8Array),
      "undefined" != typeof Symbol &&
        Symbol.species &&
        o[Symbol.species] === o &&
        Object.defineProperty(o, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 })),
      (o.prototype.write = function (t, e, n) {
        void 0 === e || (void 0 === n && "string" == typeof e)
          ? ((n = this.length), (e = 0))
          : isFinite(e) && ((e |= 0), isFinite(n) ? (n |= 0) : (n = void 0));
        var r = this.length - e;
        if (((void 0 === n || n > r) && (n = r), (t.length > 0 && (n < 0 || e < 0)) || e > this.length))
          throw new RangeError("Attempt to write outside buffer bounds");
        return (function (t, e, n, r) {
          return (function (t, e, n, r) {
            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
            return i;
          })(c(e, t.length - n), t, n, r);
        })(this, t, e, n);
      }),
      (o.prototype.slice = function (t, e) {
        var n,
          r = this.length;
        if (
          ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          e < t && (e = t),
          o.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(t, e)).__proto__ = o.prototype;
        else {
          var i = e - t;
          n = new o(i, void 0);
          for (var a = 0; a < i; ++a) n[a] = this[a + t];
        }
        return n;
      }),
      (o.prototype.copy = function (t, e, n, r) {
        if (
          (n || (n = 0),
          r || 0 === r || (r = this.length),
          e >= t.length && (e = t.length),
          e || (e = 0),
          r > 0 && r < n && (r = n),
          r === n)
        )
          return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
        var i,
          a = r - n;
        if (this === t && n < e && e < r) for (i = a - 1; i >= 0; --i) t[i + e] = this[i + n];
        else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (i = 0; i < a; ++i) t[i + e] = this[i + n];
        else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
        return a;
      }),
      (o.prototype.fill = function (t, e, n) {
        if ("string" == typeof t) {
          if (
            ("string" == typeof e ? ((e = 0), (n = this.length)) : "string" == typeof n && (n = this.length),
            1 === t.length)
          ) {
            var r = t.charCodeAt(0);
            r < 256 && (t = r);
          }
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        var i;
        if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" == typeof t))
          for (i = e; i < n; ++i) this[i] = t;
        else {
          var a = o.isBuffer(t) ? t : new o(t),
            u = a.length;
          for (i = 0; i < n - e; ++i) this[i + e] = a[i % u];
        }
        return this;
      }),
      (o.concat = function (t, e) {
        if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return u(null, 0);
        var n;
        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        var i = A(null, e),
          a = 0;
        for (n = 0; n < t.length; ++n) {
          var s = t[n];
          if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
          s.copy(i, a), (a += s.length);
        }
        return i;
      }),
      (o.byteLength = l),
      (o.prototype._isBuffer = !0),
      (o.isBuffer = function (t) {
        return !(null == t || !t._isBuffer);
      }),
      (t.exports.alloc = function (t) {
        var e = new o(t);
        return e.fill(0), e;
      }),
      (t.exports.from = function (t) {
        return new o(t);
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    });
    var r = n(11),
      i = n.n(r);
    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var a = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      var e, n, r;
      return (
        (e = t),
        (r = [
          {
            key: "decode",
            value: function (t) {
              return i.a.b32decode(t);
            },
          },
          {
            key: "random_gen",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
                e = Math.random().toString(36);
              return (e = i.a.b32encode(e)).substring(0, t);
            },
          },
        ]),
        (n = null) && o(e.prototype, n),
        r && o(e, r),
        t
      );
    })();
  },
  function (t, e) {
    var n = function (t) {
        var e, n, r, i, o, a, u, A, s, c, l, g, h;
        (e = function () {
          var e, l, g;
          for (
            n = t.pad || "",
              r = t.dataBits,
              i = t.codeBits,
              o = t.keyString,
              a = t.arrayData,
              l = Math.max(r, i),
              g = 0,
              u = [],
              e = 0;
            e < l;
            e += 1
          )
            u.push(g), (g += g + 1);
          (s = g), (A = r / c(r, i));
        }),
          (c = function (t, e) {
            for (var n; 0 !== e; ) (n = e), (e = t % e), (t = n);
            return t;
          }),
          (l = function (t, e, r, i) {
            var c, l, g, h, f, p, d, m;
            for (
              m = function (t) {
                i ? (a ? d.push(t) : d.push(String.fromCharCode(t))) : d.push(o.charAt(t));
              },
                f = 0,
                p = 0,
                d = [],
                l = t.length,
                c = 0;
              c < l;
              c += 1
            ) {
              if (((p += e), i)) {
                if (((g = t.charAt(c)), (h = o.indexOf(g)), g === n)) break;
                if (h < 0) throw 'the character "'.concat(g, '" is not a member of ').concat(o);
              } else if (((h = a ? t[c] : t.charCodeAt(c)) | s) !== s)
                throw "".concat(h, " is outside the range 0-").concat(s);
              for (f = (f << e) | h; p >= r; ) m(f >> (p -= r)), (f &= u[p]);
            }
            if (!i && p > 0) for (m(f << (r - p)), l = d.length % A, c = 0; c < l; c += 1) d.push(n);
            return a && i ? d : d.join("");
          }),
          (g = function (t) {
            return l(t, r, i, !1);
          }),
          (h = function (t) {
            return l(t, i, r, !0);
          }),
          (this.encode = g),
          (this.decode = h),
          e();
      },
      r = new n({ dataBits: 8, codeBits: 5, keyString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", pad: "=" }),
      i = new n({
        dataBits: 8,
        codeBits: 6,
        keyString: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        pad: "=",
      });
    (e.Nibbler = n),
      (e.b32encode = r.encode),
      (e.b32decode = r.decode),
      (e.b64encode = i.encode),
      (e.b64decode = i.decode);
  },
  function (t, e, n) {
    (function (n) {
      var r,
        i,
        o,
        a = { scope: {} };
      (a.defineProperty =
        "function" == typeof Object.defineProperties
          ? Object.defineProperty
          : function (t, e, n) {
              if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
              t != Array.prototype && t != Object.prototype && (t[e] = n.value);
            }),
        (a.getGlobal = function (t) {
          return "undefined" != typeof window && window === t ? t : void 0 !== n && null != n ? n : t;
        }),
        (a.global = a.getGlobal(this)),
        (a.SYMBOL_PREFIX = "jscomp_symbol_"),
        (a.initSymbol = function () {
          (a.initSymbol = function () {}), a.global.Symbol || (a.global.Symbol = a.Symbol);
        }),
        (a.symbolCounter_ = 0),
        (a.Symbol = function (t) {
          return a.SYMBOL_PREFIX + (t || "") + a.symbolCounter_++;
        }),
        (a.initSymbolIterator = function () {
          a.initSymbol();
          var t = a.global.Symbol.iterator;
          t || (t = a.global.Symbol.iterator = a.global.Symbol("iterator")),
            "function" != typeof Array.prototype[t] &&
              a.defineProperty(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function () {
                  return a.arrayIterator(this);
                },
              }),
            (a.initSymbolIterator = function () {});
        }),
        (a.arrayIterator = function (t) {
          var e = 0;
          return a.iteratorPrototype(function () {
            return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
          });
        }),
        (a.iteratorPrototype = function (t) {
          return (
            a.initSymbolIterator(),
            ((t = { next: t })[a.global.Symbol.iterator] = function () {
              return this;
            }),
            t
          );
        }),
        (a.array = a.array || {}),
        (a.iteratorFromArray = function (t, e) {
          a.initSymbolIterator(), t instanceof String && (t += "");
          var n = 0,
            r = {
              next: function () {
                if (n < t.length) {
                  var i = n++;
                  return { value: e(i, t[i]), done: !1 };
                }
                return (
                  (r.next = function () {
                    return { done: !0, value: void 0 };
                  }),
                  r.next()
                );
              },
            };
          return (
            (r[Symbol.iterator] = function () {
              return r;
            }),
            r
          );
        }),
        (a.polyfill = function (t, e, n, r) {
          if (e) {
            for (n = a.global, t = t.split("."), r = 0; r < t.length - 1; r++) {
              var i = t[r];
              i in n || (n[i] = {}), (n = n[i]);
            }
            (e = e((r = n[(t = t[t.length - 1])]))) != r &&
              null != e &&
              a.defineProperty(n, t, { configurable: !0, writable: !0, value: e });
          }
        }),
        a.polyfill(
          "Array.prototype.keys",
          function (t) {
            return (
              t ||
              function () {
                return a.iteratorFromArray(this, function (t) {
                  return t;
                });
              }
            );
          },
          "es6-impl",
          "es3"
        );
      var u = this;
      (i = []),
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              function t(t) {
                if (!Y.col(t))
                  try {
                    return document.querySelectorAll(t);
                  } catch (t) {}
              }
              function e(t, e) {
                for (var n = t.length, r = 2 <= arguments.length ? arguments[1] : void 0, i = [], o = 0; o < n; o++)
                  if (o in t) {
                    var a = t[o];
                    e.call(r, a, o, t) && i.push(a);
                  }
                return i;
              }
              function n(t) {
                return t.reduce(function (t, e) {
                  return t.concat(Y.arr(e) ? n(e) : e);
                }, []);
              }
              function r(e) {
                return Y.arr(e)
                  ? e
                  : (Y.str(e) && (e = t(e) || e),
                    e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
              }
              function i(t, e) {
                return t.some(function (t) {
                  return t === e;
                });
              }
              function o(t) {
                var e,
                  n = {};
                for (e in t) n[e] = t[e];
                return n;
              }
              function a(t, e) {
                var n,
                  r = o(t);
                for (n in t) r[n] = e.hasOwnProperty(n) ? e[n] : t[n];
                return r;
              }
              function A(t, e) {
                var n,
                  r = o(t);
                for (n in e) r[n] = Y.und(t[n]) ? e[n] : t[n];
                return r;
              }
              function s(t) {
                if ((t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)))
                  return t[2];
              }
              function c(t, e) {
                return Y.fnc(t) ? t(e.target, e.id, e.total) : t;
              }
              function l(t, e) {
                if (e in t.style)
                  return (
                    getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
                  );
              }
              function g(t, e) {
                return Y.dom(t) && i(K, e)
                  ? "transform"
                  : Y.dom(t) && (t.getAttribute(e) || (Y.svg(t) && t[e]))
                  ? "attribute"
                  : Y.dom(t) && "transform" !== e && l(t, e)
                  ? "css"
                  : null != t[e]
                  ? "object"
                  : void 0;
              }
              function h(t, n) {
                switch (g(t, n)) {
                  case "transform":
                    return (function (t, n) {
                      var r = (function (t) {
                        return -1 < t.indexOf("translate") || "perspective" === t
                          ? "px"
                          : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew")
                          ? "deg"
                          : void 0;
                      })(n);
                      if (((r = -1 < n.indexOf("scale") ? 1 : 0 + r), !(t = t.style.transform))) return r;
                      for (var i = [], o = [], a = [], u = /(\w+)\((.+?)\)/g; (i = u.exec(t)); )
                        o.push(i[1]), a.push(i[2]);
                      return (t = e(a, function (t, e) {
                        return o[e] === n;
                      })).length
                        ? t[0]
                        : r;
                    })(t, n);
                  case "css":
                    return l(t, n);
                  case "attribute":
                    return t.getAttribute(n);
                }
                return t[n] || 0;
              }
              function f(t, e) {
                var n = /^(\*=|\+=|-=)/.exec(t);
                if (!n) return t;
                var r = s(t) || 0;
                switch (((e = parseFloat(e)), (t = parseFloat(t.replace(n[0], ""))), n[0][0])) {
                  case "+":
                    return e + t + r;
                  case "-":
                    return e - t + r;
                  case "*":
                    return e * t + r;
                }
              }
              function p(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
              }
              function d(t) {
                t = t.points;
                for (var e, n = 0, r = 0; r < t.numberOfItems; r++) {
                  var i = t.getItem(r);
                  0 < r && (n += p(e, i)), (e = i);
                }
                return n;
              }
              function m(t) {
                if (t.getTotalLength) return t.getTotalLength();
                switch (t.tagName.toLowerCase()) {
                  case "circle":
                    return 2 * Math.PI * t.getAttribute("r");
                  case "rect":
                    return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
                  case "line":
                    return p(
                      { x: t.getAttribute("x1"), y: t.getAttribute("y1") },
                      { x: t.getAttribute("x2"), y: t.getAttribute("y2") }
                    );
                  case "polyline":
                    return d(t);
                  case "polygon":
                    var e = t.points;
                    return d(t) + p(e.getItem(e.numberOfItems - 1), e.getItem(0));
                }
              }
              function w(t, e) {
                function n(n) {
                  return (n = void 0 === n ? 0 : n), t.el.getPointAtLength(1 <= e + n ? e + n : 0);
                }
                var r = n(),
                  i = n(-1),
                  o = n(1);
                switch (t.property) {
                  case "x":
                    return r.x;
                  case "y":
                    return r.y;
                  case "angle":
                    return (180 * Math.atan2(o.y - i.y, o.x - i.x)) / Math.PI;
                }
              }
              function C(t, e) {
                var n,
                  r = /-?\d*\.?\d+/g;
                if (((n = Y.pth(t) ? t.totalLength : t), Y.col(n)))
                  if (Y.rgb(n)) {
                    var i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                    n = i ? "rgba(" + i[1] + ",1)" : n;
                  } else
                    n = Y.hex(n)
                      ? (function (t) {
                          t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, r) {
                            return e + e + n + n + r + r;
                          });
                          var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                          return (
                            "rgba(" +
                            (t = parseInt(e[1], 16)) +
                            "," +
                            parseInt(e[2], 16) +
                            "," +
                            (e = parseInt(e[3], 16)) +
                            ",1)"
                          );
                        })(n)
                      : Y.hsl(n)
                      ? (function (t) {
                          function e(t, e, n) {
                            return (
                              0 > n && (n += 1),
                              1 < n && --n,
                              n < 1 / 6
                                ? t + 6 * (e - t) * n
                                : 0.5 > n
                                ? e
                                : n < 2 / 3
                                ? t + (e - t) * (2 / 3 - n) * 6
                                : t
                            );
                          }
                          var n =
                            /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                            /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                          t = parseInt(n[1]) / 360;
                          var r = parseInt(n[2]) / 100,
                            i = parseInt(n[3]) / 100;
                          if (((n = n[4] || 1), 0 == r)) i = r = t = i;
                          else {
                            var o = 0.5 > i ? i * (1 + r) : i + r - i * r,
                              a = 2 * i - o;
                            (i = e(a, o, t + 1 / 3)), (r = e(a, o, t)), (t = e(a, o, t - 1 / 3));
                          }
                          return "rgba(" + 255 * i + "," + 255 * r + "," + 255 * t + "," + n + ")";
                        })(n)
                      : void 0;
                else (i = (i = s(n)) ? n.substr(0, n.length - i.length) : n), (n = e && !/\s/g.test(n) ? i + e : i);
                return {
                  original: (n += ""),
                  numbers: n.match(r) ? n.match(r).map(Number) : [0],
                  strings: Y.str(t) || e ? n.split(r) : [],
                };
              }
              function v(t) {
                return e((t = t ? n(Y.arr(t) ? t.map(r) : r(t)) : []), function (t, e, n) {
                  return n.indexOf(t) === e;
                });
              }
              function y(t, e) {
                var n = o(e);
                if (Y.arr(t)) {
                  var i = t.length;
                  2 !== i || Y.obj(t[0]) ? Y.fnc(e.duration) || (n.duration = e.duration / i) : (t = { value: t });
                }
                return r(t)
                  .map(function (t, n) {
                    return (
                      (n = n ? 0 : e.delay),
                      (t = Y.obj(t) && !Y.pth(t) ? t : { value: t }),
                      Y.und(t.delay) && (t.delay = n),
                      t
                    );
                  })
                  .map(function (t) {
                    return A(t, n);
                  });
              }
              function b(t, e) {
                var n;
                return t.tweens.map(function (r) {
                  var i = (r = (function (t, e) {
                      var n,
                        r = {};
                      for (n in t) {
                        var i = c(t[n], e);
                        Y.arr(i) &&
                          1 ===
                            (i = i.map(function (t) {
                              return c(t, e);
                            })).length &&
                          (i = i[0]),
                          (r[n] = i);
                      }
                      return (r.duration = parseFloat(r.duration)), (r.delay = parseFloat(r.delay)), r;
                    })(r, e)).value,
                    o = h(e.target, t.name),
                    a = n ? n.to.original : o,
                    u = ((a = Y.arr(i) ? i[0] : a), f(Y.arr(i) ? i[1] : i, a));
                  return (
                    (o = s(u) || s(a) || s(o)),
                    (r.from = C(a, o)),
                    (r.to = C(u, o)),
                    (r.start = n ? n.end : t.offset),
                    (r.end = r.start + r.delay + r.duration),
                    (r.easing = (function (t) {
                      return Y.arr(t) ? Q.apply(this, t) : k[t];
                    })(r.easing)),
                    (r.elasticity = (1e3 - Math.min(Math.max(r.elasticity, 1), 999)) / 1e3),
                    (r.isPath = Y.pth(i)),
                    (r.isColor = Y.col(r.from.original)),
                    r.isColor && (r.round = 1),
                    (n = r)
                  );
                });
              }
              function I(t, e, n, r) {
                var i = "delay" === t;
                return e.length
                  ? (i ? Math.min : Math.max).apply(
                      Math,
                      e.map(function (e) {
                        return e[t];
                      })
                    )
                  : i
                  ? r.delay
                  : n.offset + r.delay + r.duration;
              }
              function q(t) {
                var r,
                  i = a(S, t),
                  o = a(M, t),
                  u = (function (t) {
                    var e = v(t);
                    return e.map(function (t, n) {
                      return { target: t, id: n, total: e.length };
                    });
                  })(t.targets),
                  s = [],
                  c = A(i, o);
                for (r in t)
                  c.hasOwnProperty(r) || "targets" === r || s.push({ name: r, offset: c.offset, tweens: y(t[r], o) });
                return (
                  (t = (function (t, r) {
                    return e(
                      n(
                        t.map(function (t) {
                          return r.map(function (e) {
                            var n = g(t.target, e.name);
                            if (n) {
                              var r = b(e, t);
                              e = {
                                type: n,
                                property: e.name,
                                animatable: t,
                                tweens: r,
                                duration: r[r.length - 1].end,
                                delay: r[0].delay,
                              };
                            } else e = void 0;
                            return e;
                          });
                        })
                      ),
                      function (t) {
                        return !Y.und(t);
                      }
                    );
                  })(u, s)),
                  A(i, {
                    children: [],
                    animatables: u,
                    animations: t,
                    duration: I("duration", t, i, o),
                    delay: I("delay", t, i, o),
                  })
                );
              }
              function E(t) {
                function n() {
                  return (
                    window.Promise &&
                    new Promise(function (t) {
                      return (g = t);
                    })
                  );
                }
                function r(t) {
                  return f.reversed ? f.duration - t : t;
                }
                function i(t) {
                  for (var n = 0, r = {}, i = f.animations, o = i.length; n < o; ) {
                    var a = i[n],
                      u = a.animatable,
                      A = (s = a.tweens)[(h = s.length - 1)];
                    h &&
                      (A =
                        e(s, function (e) {
                          return t < e.end;
                        })[0] || A);
                    for (
                      var s = Math.min(Math.max(t - A.start - A.delay, 0), A.duration) / A.duration,
                        c = isNaN(s) ? 1 : A.easing(s, A.elasticity),
                        g = ((s = A.to.strings), A.round),
                        h = [],
                        p = void 0,
                        d = ((p = A.to.numbers.length), 0);
                      d < p;
                      d++
                    ) {
                      var m = void 0,
                        C = ((m = A.to.numbers[d]), A.from.numbers[d]);
                      (m = A.isPath ? w(A.value, c * m) : C + c * (m - C)),
                        g && ((A.isColor && 2 < d) || (m = Math.round(m * g) / g)),
                        h.push(m);
                    }
                    if ((A = s.length))
                      for (p = s[0], c = 0; c < A; c++)
                        (g = s[c + 1]), (d = h[c]), isNaN(d) || (p = g ? p + (d + g) : p + (d + " "));
                    else p = h[0];
                    G[a.type](u.target, a.property, p, r, u.id), (a.currentValue = p), n++;
                  }
                  if ((n = Object.keys(r).length))
                    for (i = 0; i < n; i++)
                      B || (B = l(document.body, "transform") ? "transform" : "-webkit-transform"),
                        (f.animatables[i].target.style[B] = r[i].join(" "));
                  (f.currentTime = t), (f.progress = (t / f.duration) * 100);
                }
                function o(t) {
                  f[t] && f[t](f);
                }
                function a() {
                  f.remaining && !0 !== f.remaining && f.remaining--;
                }
                function u(t) {
                  var e = f.duration,
                    u = f.offset,
                    l = u + f.delay,
                    p = f.currentTime,
                    d = f.reversed,
                    m = r(t);
                  if (f.children.length) {
                    var w = f.children,
                      C = w.length;
                    if (m >= f.currentTime) for (var v = 0; v < C; v++) w[v].seek(m);
                    else for (; C--; ) w[C].seek(m);
                  }
                  (m >= l || !e) && (f.began || ((f.began = !0), o("begin")), o("run")),
                    m > u && m < e
                      ? i(m)
                      : (m <= u && 0 !== p && (i(0), d && a()), ((m >= e && p !== e) || !e) && (i(e), d || a())),
                    o("update"),
                    t >= e &&
                      (f.remaining
                        ? ((s = A), "alternate" === f.direction && (f.reversed = !f.reversed))
                        : (f.pause(),
                          f.completed || ((f.completed = !0), o("complete"), "Promise" in window && (g(), (h = n())))),
                      (c = 0));
                }
                t = void 0 === t ? {} : t;
                var A,
                  s,
                  c = 0,
                  g = null,
                  h = n(),
                  f = q(t);
                return (
                  (f.reset = function () {
                    var t = f.direction,
                      e = f.loop;
                    for (
                      f.currentTime = 0,
                        f.progress = 0,
                        f.paused = !0,
                        f.began = !1,
                        f.completed = !1,
                        f.reversed = "reverse" === t,
                        f.remaining = "alternate" === t && 1 === e ? 2 : e,
                        i(0),
                        t = f.children.length;
                      t--;

                    )
                      f.children[t].reset();
                  }),
                  (f.tick = function (t) {
                    (A = t), s || (s = A), u((c + A - s) * E.speed);
                  }),
                  (f.seek = function (t) {
                    u(r(t));
                  }),
                  (f.pause = function () {
                    var t = F.indexOf(f);
                    -1 < t && F.splice(t, 1), (f.paused = !0);
                  }),
                  (f.play = function () {
                    f.paused && ((f.paused = !1), (s = 0), (c = r(f.currentTime)), F.push(f), Z || O());
                  }),
                  (f.reverse = function () {
                    (f.reversed = !f.reversed), (s = 0), (c = r(f.currentTime));
                  }),
                  (f.restart = function () {
                    f.pause(), f.reset(), f.play();
                  }),
                  (f.finished = h),
                  f.reset(),
                  f.autoplay && f.play(),
                  f
                );
              }
              var B,
                S = {
                  update: void 0,
                  begin: void 0,
                  run: void 0,
                  complete: void 0,
                  loop: 1,
                  direction: "normal",
                  autoplay: !0,
                  offset: 0,
                },
                M = { duration: 1e3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
                K =
                  "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(
                    " "
                  ),
                Y = {
                  arr: function (t) {
                    return Array.isArray(t);
                  },
                  obj: function (t) {
                    return -1 < Object.prototype.toString.call(t).indexOf("Object");
                  },
                  pth: function (t) {
                    return Y.obj(t) && t.hasOwnProperty("totalLength");
                  },
                  svg: function (t) {
                    return t instanceof SVGElement;
                  },
                  dom: function (t) {
                    return t.nodeType || Y.svg(t);
                  },
                  str: function (t) {
                    return "string" == typeof t;
                  },
                  fnc: function (t) {
                    return "function" == typeof t;
                  },
                  und: function (t) {
                    return void 0 === t;
                  },
                  hex: function (t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
                  },
                  rgb: function (t) {
                    return /^rgb/.test(t);
                  },
                  hsl: function (t) {
                    return /^hsl/.test(t);
                  },
                  col: function (t) {
                    return Y.hex(t) || Y.rgb(t) || Y.hsl(t);
                  },
                },
                Q = (function () {
                  function t(t, e, n) {
                    return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
                  }
                  return function (e, n, r, i) {
                    if (0 <= e && 1 >= e && 0 <= r && 1 >= r) {
                      var o = new Float32Array(11);
                      if (e !== n || r !== i) for (var a = 0; 11 > a; ++a) o[a] = t(0.1 * a, e, r);
                      return function (a) {
                        if (e === n && r === i) return a;
                        if (0 === a) return 0;
                        if (1 === a) return 1;
                        for (var u = 0, A = 1; 10 !== A && o[A] <= a; ++A) u += 0.1;
                        --A, (A = u + ((a - o[A]) / (o[A + 1] - o[A])) * 0.1);
                        var s = 3 * (1 - 3 * r + 3 * e) * A * A + 2 * (3 * r - 6 * e) * A + 3 * e;
                        if (0.001 <= s) {
                          for (
                            u = 0;
                            4 > u && 0 != (s = 3 * (1 - 3 * r + 3 * e) * A * A + 2 * (3 * r - 6 * e) * A + 3 * e);
                            ++u
                          ) {
                            var c = t(A, e, r) - a;
                            A -= c / s;
                          }
                          a = A;
                        } else if (0 === s) a = A;
                        else {
                          (A = u), (u += 0.1);
                          var l = 0;
                          do {
                            0 < (s = t((c = A + (u - A) / 2), e, r) - a) ? (u = c) : (A = c);
                          } while (1e-7 < Math.abs(s) && 10 > ++l);
                          a = c;
                        }
                        return t(a, n, i);
                      };
                    }
                  };
                })(),
                k = (function () {
                  function t(t, e) {
                    return 0 === t || 1 === t
                      ? t
                      : -Math.pow(2, 10 * (t - 1)) *
                          Math.sin((2 * (t - 1 - (e / (2 * Math.PI)) * Math.asin(1)) * Math.PI) / e);
                  }
                  var e,
                    n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                    r = {
                      In: [
                        [0.55, 0.085, 0.68, 0.53],
                        [0.55, 0.055, 0.675, 0.19],
                        [0.895, 0.03, 0.685, 0.22],
                        [0.755, 0.05, 0.855, 0.06],
                        [0.47, 0, 0.745, 0.715],
                        [0.95, 0.05, 0.795, 0.035],
                        [0.6, 0.04, 0.98, 0.335],
                        [0.6, -0.28, 0.735, 0.045],
                        t,
                      ],
                      Out: [
                        [0.25, 0.46, 0.45, 0.94],
                        [0.215, 0.61, 0.355, 1],
                        [0.165, 0.84, 0.44, 1],
                        [0.23, 1, 0.32, 1],
                        [0.39, 0.575, 0.565, 1],
                        [0.19, 1, 0.22, 1],
                        [0.075, 0.82, 0.165, 1],
                        [0.175, 0.885, 0.32, 1.275],
                        function (e, n) {
                          return 1 - t(1 - e, n);
                        },
                      ],
                      InOut: [
                        [0.455, 0.03, 0.515, 0.955],
                        [0.645, 0.045, 0.355, 1],
                        [0.77, 0, 0.175, 1],
                        [0.86, 0, 0.07, 1],
                        [0.445, 0.05, 0.55, 0.95],
                        [1, 0, 0, 1],
                        [0.785, 0.135, 0.15, 0.86],
                        [0.68, -0.55, 0.265, 1.55],
                        function (e, n) {
                          return 0.5 > e ? t(2 * e, n) / 2 : 1 - t(-2 * e + 2, n) / 2;
                        },
                      ],
                    },
                    i = { linear: Q(0.25, 0.25, 0.75, 0.75) },
                    o = {};
                  for (e in r)
                    (o.type = e),
                      r[o.type].forEach(
                        (function (t) {
                          return function (e, r) {
                            i["ease" + t.type + n[r]] = Y.fnc(e) ? e : Q.apply(u, e);
                          };
                        })(o)
                      ),
                      (o = { type: o.type });
                  return i;
                })(),
                G = {
                  css: function (t, e, n) {
                    return (t.style[e] = n);
                  },
                  attribute: function (t, e, n) {
                    return t.setAttribute(e, n);
                  },
                  object: function (t, e, n) {
                    return (t[e] = n);
                  },
                  transform: function (t, e, n, r, i) {
                    r[i] || (r[i] = []), r[i].push(e + "(" + n + ")");
                  },
                },
                F = [],
                Z = 0,
                O = (function () {
                  function t() {
                    Z = requestAnimationFrame(e);
                  }
                  function e(e) {
                    var n = F.length;
                    if (n) {
                      for (var r = 0; r < n; ) F[r] && F[r].tick(e), r++;
                      t();
                    } else cancelAnimationFrame(Z), (Z = 0);
                  }
                  return t;
                })();
              return (
                (E.version = "2.2.0"),
                (E.speed = 1),
                (E.running = F),
                (E.remove = function (t) {
                  t = v(t);
                  for (var e = F.length; e--; )
                    for (var n = F[e], r = n.animations, o = r.length; o--; )
                      i(t, r[o].animatable.target) && (r.splice(o, 1), r.length || n.pause());
                }),
                (E.getValue = h),
                (E.path = function (e, n) {
                  var r = Y.str(e) ? t(e)[0] : e,
                    i = n || 100;
                  return function (t) {
                    return { el: r, property: t, totalLength: m(r) * (i / 100) };
                  };
                }),
                (E.setDashoffset = function (t) {
                  var e = m(t);
                  return t.setAttribute("stroke-dasharray", e), e;
                }),
                (E.bezier = Q),
                (E.easings = k),
                (E.timeline = function (t) {
                  var e = E(t);
                  return (
                    e.pause(),
                    (e.duration = 0),
                    (e.add = function (n) {
                      return (
                        e.children.forEach(function (t) {
                          (t.began = !0), (t.completed = !0);
                        }),
                        r(n).forEach(function (n) {
                          var r = A(n, a(M, t || {}));
                          (r.targets = r.targets || t.targets), (n = e.duration);
                          var i = r.offset;
                          (r.autoplay = !1),
                            (r.direction = e.direction),
                            (r.offset = Y.und(i) ? n : f(i, n)),
                            (e.began = !0),
                            (e.completed = !0),
                            e.seek(r.offset),
                            ((r = E(r)).began = !0),
                            (r.completed = !0),
                            r.duration > n && (e.duration = r.duration),
                            e.children.push(r);
                        }),
                        e.seek(0),
                        e.reset(),
                        e.autoplay && e.restart(),
                        e
                      );
                    }),
                    e
                  );
                }),
                (E.random = function (t, e) {
                  return Math.floor(Math.random() * (e - t + 1)) + t;
                }),
                E
              );
            })
              ? r.apply(e, i)
              : r) || (t.exports = o);
    }.call(this, n(3)));
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      i = n(8),
      o = n(23),
      a = n(25),
      u = n(4);
    function A(t) {
      return (A =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })
          )),
          r.forEach(function (e) {
            c(t, e, n[e]);
          });
      }
      return t;
    }
    function c(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      );
    }
    function l(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function g(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function h(t, e) {
      return !e || ("object" !== A(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
          })(t)
        : e;
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function p(t, e) {
      return (p =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var d = (function (t) {
        function e() {
          var t,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            l(this, e),
            (t = h(this, f(e).call(this, s({ idPrefix: "psebarcodeview" }, n)))),
            Object(r.b)(t.el, { fontSize: "0px", lineHeight: "0px", backgroundColor: "#fff", borderRadius: "4px" }),
            (t._canvasEl = Object(r.c)("canvas", { id: t.generateElementId("canvas") }, { boxSizing: "border-box" })),
            t.el.appendChild(t._canvasEl),
            (t._subtitleEl = Object(r.c)(
              "p",
              { id: t.generateElementId("subtitle") },
              {
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: n.useBrandingColorForSubtitle ? n.color : "#262626",
              }
            )),
            (t.subtitle = n.subtitle),
            (t.w = n.w),
            (t.h = n.h),
            t.setSize({ containerWidth: n.w, containerHeight: n.h }),
            t
          );
        }
        var n, i, o;
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && p(t, e);
          })(e, t),
          (n = e),
          (i = [
            {
              key: "setSize",
              value: function (t) {
                var e = t.containerWidth,
                  n = t.containerHeight,
                  i = n,
                  o = i,
                  a = 0,
                  u = 0.5 * (e - o);
                this.subtitle &&
                  ((o -= 24),
                  (a = 12),
                  Object(r.b)(this._subtitleEl, {
                    margin: "0px",
                    padding: "0px",
                    width: "".concat(i, "px"),
                    height: "".concat(24, "px"),
                    fontSize: "".concat(12, "px"),
                    lineHeight: "".concat(12, "px"),
                  })),
                  this._setContainerSize(i, n, "0px ".concat(u, "px")),
                  this._setCanvasSize(this._canvasEl, o, o, "0px ".concat(a, "px"), "".concat(12, "px"));
              },
            },
            {
              key: "render",
              value: function (t) {
                this.setSize({ containerWidth: this.w, containerHeight: this.h }),
                  a.toCanvas(this._canvasEl, t, { margin: 0, width: this._canvasEl.width });
              },
            },
            {
              key: "subtitle",
              get: function () {
                return this._subtitle;
              },
              set: function (t) {
                (this._subtitle = t),
                  t && "string" == typeof t
                    ? ((this._subtitleEl.innerText = t), this.el.appendChild(this._subtitleEl))
                    : this._subtitleEl.remove();
              },
            },
          ]) && g(n.prototype, i),
          o && g(n, o),
          e
        );
      })(u.a),
      m = n(26),
      w = n(1),
      C = n(29),
      v = n.n(C);
    function y(t) {
      return (y =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })
          )),
          r.forEach(function (e) {
            I(t, e, n[e]);
          });
      }
      return t;
    }
    function I(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      );
    }
    function q(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function E(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function B(t, e) {
      return !e || ("object" !== y(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
          })(t)
        : e;
    }
    function S(t) {
      return (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function M(t, e) {
      return (M =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var K = (function (t) {
        function e() {
          var t,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            q(this, e),
            (t = B(this, S(e).call(this, b({ idPrefix: "pseloadingview" }, n)))).el.appendChild(
              Object(r.c)("img", { src: v.a }, { width: "100%" })
            ),
            t.setSize({ containerWidth: n.w, containerHeight: n.h }),
            t
          );
        }
        var n, i, o;
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && M(t, e);
          })(e, t),
          (n = e),
          (i = [
            {
              key: "setSize",
              value: function (t) {
                var e = t.containerWidth,
                  n = t.containerHeight,
                  r = e,
                  i = 2 * Math.floor(r * w.e.paddingPercentage * 0.5),
                  o = (r - i) * w.e.ratio + i,
                  a = "".concat(Math.floor(0.5 * (n - o)), "px auto");
                this._setContainerSize(r, o, a);
              },
            },
          ]) && E(n.prototype, i),
          o && E(n, o),
          e
        );
      })(u.a),
      Y = n(7);
    function Q(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      );
    }
    function k(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function G(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    n.d(e, "b", function () {
      return W;
    }),
      n.d(e, "a", function () {
        return R;
      });
    var F = /(#\w{6})\w{2}$/,
      Z = /(#\w{3})\w$/,
      O = /(\w+?)a?\((.+?)\)$/,
      W = { IMMEDIATE: "immediate", DEFERRED: "deferred" },
      J = new WeakMap(),
      L = new WeakMap(),
      R = (function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          k(this, t),
            J.set(this, r.d()),
            L.set(this, e.renderMode || W.DEFERRED),
            (this._rootEl = r.c("div", { id: "pseview-".concat(J.get(this)) })),
            (this._loadingView = null),
            (this._barcodeView = null),
            (this._secureTokenView = null),
            (this._brandingColor = "#076CD9"),
            (this.isBrandingColoredSubtitleEnabled = !1),
            (this.pdf417Subtitle = "Screenshots won't get you in."),
            (this.qrCodeSubtitle = "Screenshots won't get you in."),
            (this._entryData = null),
            this.setConfiguration(e);
        }
        var e, n, a;
        return (
          (e = t),
          (n = [
            {
              key: "setConfiguration",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (this._useNewSpec = w.c.hasOwnProperty("SIZE_".concat(t.containerSize))),
                  (this._containerNode = t.containerNode),
                  this.updateBarcodeContainerSize(),
                  (this._token = t.token),
                  (this._entryData = new i.b(this._token)),
                  (this.parseErrorText = t.parseErrorText || t.errorText),
                  (this.brandingColor = t.brandingColor || this.brandingColor),
                  L.get(this) === W.IMMEDIATE && this.isRenderable && this.render();
              },
            },
            {
              key: "teardown",
              value: function () {
                clearInterval(this._tokenRefreshIntervalID);
              },
            },
            {
              key: "updateBarcodeContainerSize",
              value: function () {
                if (this._containerNode) {
                  this.mode === W.IMMEDIATE && this._containerNode.appendChild(this._rootEl);
                  var t = this._useNewSpec ? w.b : w.a,
                    e = Math.max(this._containerNode.clientWidth, t.minWidth),
                    n = Math.ceil(e * t.ratio);
                  r.b(this._rootEl, {
                    width: "".concat(e, "px"),
                    height: "".concat(n, "px"),
                    display: "inline-block",
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    overflow: "hidden",
                  }),
                    this._loadingView ||
                      ((this._loadingView = new K({
                        id: J.get(this),
                        w: this._rootEl.clientWidth,
                        h: this._rootEl.clientHeight,
                      })),
                      r.b(this._loadingView.el, { opacity: 1 }),
                      this._rootEl.appendChild(this._loadingView.el));
                }
              },
            },
            {
              key: "render",
              value: function () {
                if (this.isRenderable)
                  if (
                    (r.a.log(
                      "'render' called on '".concat("pseview-".concat(J.get(this)), "' with token '", this.token, "'")
                    ),
                    this._containerNode)
                  ) {
                    this._containerNode.appendChild(this._rootEl);
                    var t = {
                      id: J.get(this),
                      w: this._rootEl.clientWidth,
                      h: this._rootEl.clientHeight,
                      color: this.brandingColor || "#076CD9",
                      errorText: this.parseErrorText,
                      useBrandingColorForSubtitle: this.isBrandingColoredSubtitleEnabled,
                      useNewSpec: this._useNewSpec,
                    };
                    switch (
                      (this.error && ((t.errorText = this.error.text), (t.iconURL = this.error.iconURL)),
                      this._entryData.displayType)
                    ) {
                      case i.a.STATIC_QR:
                        this.setupSimpleView(d, t);
                        break;
                      case i.a.ROTATING:
                      case i.a.STATIC_PDF:
                        this.setupSafeTixView(t);
                        break;
                      default:
                        this.setupSimpleView(o.a, t);
                    }
                  } else
                    r.a.error("'render' called on '".concat("pseview-".concat(J.get(this)), "' with no container"));
              },
            },
            {
              key: "setupSimpleView",
              value: function (t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                (this._barcodeView = new t(e)),
                  r.b(this._barcodeView.el, { opacity: 0 }),
                  this._barcodeView.render(this._entryData.barcode),
                  this._rootEl.appendChild(this._barcodeView.el),
                  n && r.e(this._loadingView.el, this._barcodeView.el, ["opacity"]);
              },
            },
            {
              key: "setupSafeTixView",
              value: function (t) {
                var e = this;
                (this._secureTokenView = new m.a(
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                          })
                        )),
                        r.forEach(function (e) {
                          Q(t, e, n[e]);
                        });
                    }
                    return t;
                  })({ subtitle: this.pdf417Subtitle }, t)
                )),
                  Y.c(null, function (t) {
                    var n = Y.a(t);
                    e._secureTokenView.render(e._entryData.generateSignedToken(n)),
                      e._entryData.displayType === i.a.ROTATING &&
                        (e._tokenRefreshIntervalID = setInterval(function () {
                          r.a.debug("pseview-".concat(J.get(e), " refreshed token at ").concat(new Date()));
                          var t = Y.a(Y.b());
                          e._secureTokenView.render(e._entryData.generateSignedToken(t));
                        }, 15e3)),
                      r.b(e._secureTokenView.el, { top: "0px", opacity: 0 }),
                      e._rootEl.appendChild(e._secureTokenView.el),
                      r.e(e._loadingView.el, e._secureTokenView.el, ["opacity"]);
                  });
              },
            },
            {
              key: "id",
              get: function () {
                return J.get(this);
              },
            },
            {
              key: "mode",
              get: function () {
                return L.get(this);
              },
              set: function (t) {
                var e = W[t.toUpperCase()];
                e && L.set(this, e);
              },
            },
            {
              key: "containerNode",
              get: function () {
                return this._containerNode;
              },
              set: function (t) {
                (this._containerNode = t),
                  this.updateBarcodeContainerSize(),
                  this.mode === W.IMMEDIATE && this.render();
              },
            },
            {
              key: "token",
              get: function () {
                return this._token;
              },
              set: function (t) {
                var e,
                  n = [t, this._token];
                (this._token = n[0]),
                  (e = n[1]),
                  (this._entryData = new i.b(this._token)),
                  this.mode !== W.IMMEDIATE || e || this.render();
              },
            },
            {
              key: "error",
              get: function () {
                return this._error;
              },
              set: function (t) {
                (this._error = t), this.mode === W.IMMEDIATE && this.render();
              },
            },
            {
              key: "brandingColor",
              get: function () {
                return this._brandingColor;
              },
              set: function (t) {
                if ("transparent" !== t) {
                  var e,
                    n = t;
                  if (((e = t.match(F)) && (n = e[1]), (e = t.match(Z)) && (n = e[1]), (e = t.match(O)))) {
                    var r = e[2].replace(/[/,]/g, " ").split(/\s+/).slice(0, 3);
                    n = "".concat(e[1], "(").concat(r.join(), ")");
                  }
                  this._brandingColor = n;
                }
              },
            },
            {
              key: "isRenderable",
              get: function () {
                return !(!this._containerNode || (!this.token && !this.error));
              },
            },
          ]) && G(e.prototype, n),
          a && G(e, a),
          t
        );
      })();
  },
  function (t, e) {
    var n = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == n.call(t);
      };
  },
  function (t, e) {
    (e.L = { bit: 1 }),
      (e.M = { bit: 0 }),
      (e.Q = { bit: 3 }),
      (e.H = { bit: 2 }),
      (e.isValid = function (t) {
        return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
      }),
      (e.from = function (t, n) {
        if (e.isValid(t)) return t;
        try {
          return (function (t) {
            if ("string" != typeof t) throw new Error("Param is not a string");
            switch (t.toLowerCase()) {
              case "l":
              case "low":
                return e.L;
              case "m":
              case "medium":
                return e.M;
              case "q":
              case "quartile":
                return e.Q;
              case "h":
              case "high":
                return e.H;
              default:
                throw new Error("Unknown EC Level: " + t);
            }
          })(t);
        } catch (t) {
          return n;
        }
      });
  },
  function (t, e, n) {
    "use strict";
    var r = {
      PLUS: "+",
      MINUS: "-",
      BASE: 10,
      scale: 0,
      bc_num: function () {
        (this.n_sign = null),
          (this.n_len = null),
          (this.n_scale = null),
          (this.n_value = null),
          (this.toString = function () {
            var t, e;
            return (
              (e = this.n_value.join("")),
              (t = (this.n_sign == r.PLUS ? "" : this.n_sign) + e.substr(0, this.n_len)),
              this.n_scale > 0 && (t += "." + e.substr(this.n_len, this.n_scale)),
              t
            );
          }),
          (this.setScale = function (t) {
            for (; this.n_scale < t; ) this.n_value.push(0), this.n_scale++;
            for (; this.n_scale > t; ) this.n_value.pop(), this.n_scale--;
            return this;
          });
      },
      bc_new_num: function (t, e) {
        var n;
        return (
          ((n = new r.bc_num()).n_sign = r.PLUS),
          (n.n_len = t),
          (n.n_scale = e),
          (n.n_value = r.safe_emalloc(1, t + e, 0)),
          r.memset(n.n_value, 0, 0, t + e),
          n
        );
      },
      safe_emalloc: function (t, e, n) {
        return Array(t * e + n);
      },
      bc_init_num: function () {
        return new r.bc_new_num(1, 0);
      },
      _bc_rm_leading_zeros: function (t) {
        for (; 0 === t.n_value[0] && t.n_len > 1; ) t.n_value.shift(), t.n_len--;
      },
      php_str2num: function (t) {
        var e;
        return -1 == (e = t.indexOf(".")) ? r.bc_str2num(t, 0) : r.bc_str2num(t, t.length - e);
      },
      CH_VAL: function (t) {
        return t - "0";
      },
      BCD_CHAR: function (t) {
        return t + "0";
      },
      isdigit: function (t) {
        return !isNaN(parseInt(t, 10));
      },
      bc_str2num: function (t, e) {
        var n, i, o, a, u, A, s;
        for (a = 0, u = 0, A = !1, ("+" !== (n = t.split(""))[(o = 0)] && "-" !== n[o]) || o++; "0" === n[o]; ) o++;
        for (; n[o] % 1 == 0; ) o++, a++;
        for ("." === n[o] && o++; n[o] % 1 == 0; ) o++, u++;
        if (n[o] || a + u === 0) return r.bc_init_num();
        for (
          u = r.MIN(u, e),
            0 === a && ((A = !0), (a = 1)),
            i = r.bc_new_num(a, u),
            "-" === n[(o = 0)] ? ((i.n_sign = r.MINUS), o++) : ((i.n_sign = r.PLUS), "+" === n[o] && o++);
          "0" === n[o];

        )
          o++;
        for (s = 0, A && ((i.n_value[s++] = 0), (a = 0)); a > 0; a--) i.n_value[s++] = r.CH_VAL(n[o++]);
        if (u > 0) for (o++; u > 0; u--) i.n_value[s++] = r.CH_VAL(n[o++]);
        return i;
      },
      cint: function (t) {
        void 0 === t && (t = 0);
        var e = parseInt(t, 10);
        return isNaN(e) && (e = 0), e;
      },
      MIN: function (t, e) {
        return t > e ? e : t;
      },
      MAX: function (t, e) {
        return t > e ? t : e;
      },
      ODD: function (t) {
        return 1 & t;
      },
      memset: function (t, e, n, r) {
        var i;
        for (i = 0; i < r; i++) t[e + i] = n;
      },
      memcpy: function (t, e, n, r, i) {
        var o;
        for (o = 0; o < i; o++) t[e + o] = n[r + o];
        return !0;
      },
      bc_is_zero: function (t) {
        var e, n;
        for (e = t.n_len + t.n_scale, n = 0; e > 0 && 0 === t.n_value[n++]; ) e--;
        return 0 === e;
      },
      bc_out_of_memory: function () {
        throw new Error("(BC) Out of memory");
      },
    };
    function i(t, e, n) {
      var i, o, a;
      return (
        void 0 === n && (n = r.scale),
        (n = n < 0 ? 0 : n),
        (i = r.bc_init_num()),
        (o = r.bc_init_num()),
        (a = r.bc_init_num()),
        (i = r.php_str2num(t.toString())),
        (o = r.php_str2num(e.toString())),
        i.n_scale > o.n_scale && o.setScale(i.n_scale),
        o.n_scale > i.n_scale && i.setScale(o.n_scale),
        (a = r.bc_add(i, o, n)).n_scale > n && (a.n_scale = n),
        a.toString()
      );
    }
    function o(t, e, n) {
      var i, o, a;
      if (
        (void 0 === n && (n = r.scale),
        (n = n < 0 ? 0 : n),
        (i = r.bc_init_num()),
        (o = r.bc_init_num()),
        (a = r.bc_init_num()),
        (i = r.php_str2num(t.toString())),
        (o = r.php_str2num(e.toString())),
        i.n_scale > o.n_scale && o.setScale(i.n_scale),
        o.n_scale > i.n_scale && i.setScale(o.n_scale),
        -1 === (a = r.bc_divide(i, o, n)))
      )
        throw new Error(11, "(BC) Division by zero");
      return a.n_scale > n && (a.n_scale = n), a.toString();
    }
    function a(t, e, n) {
      var i, o, a;
      return (
        void 0 === n && (n = r.scale),
        (n = n < 0 ? 0 : n),
        (i = r.bc_init_num()),
        (o = r.bc_init_num()),
        (a = r.bc_init_num()),
        (i = r.php_str2num(t.toString())),
        (o = r.php_str2num(e.toString())),
        i.n_scale > o.n_scale && o.setScale(i.n_scale),
        o.n_scale > i.n_scale && i.setScale(o.n_scale),
        (a = r.bc_multiply(i, o, n)).n_scale > n && (a.n_scale = n),
        a.toString()
      );
    }
    (r.bc_add = function (t, e, n) {
      var i, o;
      if (t.n_sign === e.n_sign) (i = r._bc_do_add(t, e, n)).n_sign = t.n_sign;
      else
        switch (r._bc_do_compare(t, e, !1, !1)) {
          case -1:
            (i = r._bc_do_sub(e, t, n)).n_sign = e.n_sign;
            break;
          case 0:
            (o = r.MAX(n, r.MAX(t.n_scale, e.n_scale))), (i = r.bc_new_num(1, o)), r.memset(i.n_value, 0, 0, o + 1);
            break;
          case 1:
            (i = r._bc_do_sub(t, e, n)).n_sign = t.n_sign;
        }
      return i;
    }),
      (r.bc_compare = function (t, e) {
        return r._bc_do_compare(t, e, !0, !1);
      }),
      (r._bc_do_compare = function (t, e, n, i) {
        var o, a, u;
        if (n && t.n_sign != e.n_sign) return t.n_sign == r.PLUS ? 1 : -1;
        if (t.n_len != e.n_len)
          return t.n_len > e.n_len ? (n && t.n_sign != r.PLUS ? -1 : 1) : n && t.n_sign != r.PLUS ? 1 : -1;
        for (u = t.n_len + Math.min(t.n_scale, e.n_scale), o = 0, a = 0; u > 0 && t.n_value[o] == e.n_value[a]; )
          o++, a++, u--;
        if (i && 1 == u && t.n_scale == e.n_scale) return 0;
        if (0 !== u)
          return t.n_value[o] > e.n_value[a] ? (n && t.n_sign != r.PLUS ? -1 : 1) : n && t.n_sign != r.PLUS ? 1 : -1;
        if (t.n_scale != e.n_scale)
          if (t.n_scale > e.n_scale) {
            for (u = t.n_scale - e.n_scale; u > 0; u--)
              if (0 !== t.n_value[o++]) return n && t.n_sign != r.PLUS ? -1 : 1;
          } else
            for (u = e.n_scale - t.n_scale; u > 0; u--)
              if (0 !== e.n_value[a++]) return n && t.n_sign != r.PLUS ? 1 : -1;
        return 0;
      }),
      (r._one_mult = function (t, e, n, i, o, a) {
        var u, A, s, c;
        if (0 === i) r.memset(o, 0, 0, n);
        else if (1 == i) r.memcpy(o, a, t, e, n);
        else {
          for (s = e + n - 1, c = a + n - 1, u = 0; n-- > 0; )
            (A = t[s--] * i + u), (o[c--] = A % r.BASE), (u = Math.floor(A / r.BASE));
          0 != u && (o[c] = u);
        }
      }),
      (r.bc_divide = function (t, e, n) {
        var i, o, a, u, A, s, c, l, g, h, f, p, d, m, w, C, v, y, b, I, q, E;
        if (r.bc_is_zero(e)) return -1;
        if (r.bc_is_zero(t)) return r.bc_new_num(1, n);
        for (
          0 === e.n_scale &&
            1 === e.n_len &&
            1 === e.n_value[0] &&
            (((i = r.bc_new_num(t.n_len, n)).n_sign = t.n_sign == e.n_sign ? r.PLUS : r.MINUS),
            r.memset(i.n_value, t.n_len, 0, n),
            r.memcpy(i.n_value, 0, t.n_value, 0, t.n_len + r.MIN(t.n_scale, n))),
            p = e.n_scale,
            s = e.n_len + p - 1;
          p > 0 && 0 === e.n_value[s--];

        )
          p--;
        for (
          h = t.n_len + p,
            m = (l = t.n_scale - p) < n ? n - l : 0,
            null === (o = r.safe_emalloc(1, t.n_len + t.n_scale, m + 2)) && r.bc_out_of_memory(),
            r.memset(o, 0, 0, t.n_len + t.n_scale + m + 2),
            r.memcpy(o, 1, t.n_value, 0, t.n_len + t.n_scale),
            f = e.n_len + p,
            null === (a = r.safe_emalloc(1, f, 1)) && r.bc_out_of_memory(),
            r.memcpy(a, 0, e.n_value, 0, f),
            a[f] = 0,
            s = 0;
          0 === a[s];

        )
          s++, f--;
        if (
          (f > h + n ? ((d = n + 1), (q = !0)) : ((q = !1), (d = f > h ? n + 1 : h - f + n + 1)),
          (i = r.bc_new_num(d - n, n)),
          r.memset(i.n_value, 0, 0, d),
          null === (I = r.safe_emalloc(1, f, 1)) && r.bc_out_of_memory(),
          !q)
        )
          for (
            1 != (E = Math.floor(10 / (e.n_value[s] + 1))) &&
              (r._one_mult(o, 0, h + l + m + 1, E, o, 0), r._one_mult(e.n_value, s, f, E, e.n_value, s)),
              C = 0,
              c = f > h ? f - h : 0;
            C <= h + n - f;

          ) {
            if (
              ((v = e.n_value[s] == o[C] ? 9 : Math.floor((10 * o[C] + o[C + 1]) / e.n_value[s])),
              e.n_value[s + 1] * v > 10 * (10 * o[C] + o[C + 1] - e.n_value[s] * v) + o[C + 2] &&
                (v--, e.n_value[s + 1] * v > 10 * (10 * o[C] + o[C + 1] - e.n_value[s] * v) + o[C + 2] && v--),
              (y = 0),
              0 !== v)
            )
              for (I[0] = 0, r._one_mult(e.n_value, s, f, v, I, 1), u = C + f, A = f, w = 0; w < f + 1; w++)
                (g = A < 0 ? o[u] - 0 - y : o[u] - I[A--] - y) < 0 ? ((g += 10), (y = 1)) : (y = 0), (o[u--] = g);
            if (1 == y) {
              for (v--, u = C + f, A = f - 1, b = 0, w = 0; w < f; w++)
                (g = A < 0 ? o[u] + 0 + b : o[u] + e.n_value[A--] + b) > 9 ? ((g -= 10), (b = 1)) : (b = 0),
                  (o[u--] = g);
              1 == b && (o[u] = (o[u] + 1) % 10);
            }
            (i.n_value[c++] = v), C++;
          }
        return (
          (i.n_sign = t.n_sign == e.n_sign ? r.PLUS : r.MINUS),
          r.bc_is_zero(i) && (i.n_sign = r.PLUS),
          r._bc_rm_leading_zeros(i),
          i
        );
      }),
      (r._bc_do_add = function (t, e, n) {
        var i, o, a, u, A, s, c, l, g, h;
        if (
          ((o = r.MAX(t.n_scale, e.n_scale)),
          (a = r.MAX(t.n_len, e.n_len) + 1),
          (i = r.bc_new_num(a, r.MAX(o, n))),
          (l = t.n_scale),
          (g = e.n_scale),
          (u = t.n_len + l - 1),
          (A = e.n_len + g - 1),
          (s = o + a - 1),
          l != g)
        )
          if (l > g) for (; l > g; ) (i.n_value[s--] = t.n_value[u--]), l--;
          else for (; g > l; ) (i.n_value[s--] = e.n_value[A--]), g--;
        for (l += t.n_len, g += e.n_len, c = 0; l > 0 && g > 0; )
          (h = t.n_value[u--] + e.n_value[A--] + c) >= r.BASE ? ((c = 1), (h -= r.BASE)) : (c = 0),
            (i.n_value[s] = h),
            s--,
            l--,
            g--;
        if (0 === l)
          for (; g-- > 0; )
            (h = e.n_value[A--] + c) >= r.BASE ? ((c = 1), (h -= r.BASE)) : (c = 0), (i.n_value[s--] = h);
        else
          for (; l-- > 0; )
            (h = t.n_value[u--] + c) >= r.BASE ? ((c = 1), (h -= r.BASE)) : (c = 0), (i.n_value[s--] = h);
        return 1 == c && (i.n_value[s] += 1), r._bc_rm_leading_zeros(i), i;
      }),
      (r._bc_do_sub = function (t, e, n) {
        var i, o, a, u, A, s, c, l, g, h, f;
        if (
          ((a = r.MAX(t.n_len, e.n_len)),
          (o = r.MAX(t.n_scale, e.n_scale)),
          (A = r.MIN(t.n_len, e.n_len)),
          (u = r.MIN(t.n_scale, e.n_scale)),
          (i = r.bc_new_num(a, r.MAX(o, n))),
          (s = t.n_len + t.n_scale - 1),
          (c = e.n_len + e.n_scale - 1),
          (l = a + o - 1),
          (g = 0),
          t.n_scale != u)
        )
          for (h = t.n_scale - u; h > 0; h--) i.n_value[l--] = t.n_value[s--];
        else
          for (h = e.n_scale - u; h > 0; h--)
            (f = 0 - e.n_value[c--] - g) < 0 ? ((f += r.BASE), (g = 1)) : ((g = 0), (i.n_value[l--] = f));
        for (h = 0; h < A + u; h++)
          (f = t.n_value[s--] - e.n_value[c--] - g) < 0 ? ((f += r.BASE), (g = 1)) : (g = 0), (i.n_value[l--] = f);
        if (a != A)
          for (h = a - A; h > 0; h--)
            (f = t.n_value[s--] - g) < 0 ? ((f += r.BASE), (g = 1)) : (g = 0), (i.n_value[l--] = f);
        return r._bc_rm_leading_zeros(i), i;
      }),
      (r.MUL_BASE_DIGITS = 80),
      (r.MUL_SMALL_DIGITS = r.MUL_BASE_DIGITS / 4),
      (r.bc_multiply = function (t, e, n) {
        var i, o, a, u, A;
        return (
          (o = t.n_len + t.n_scale),
          (a = e.n_len + e.n_scale),
          (u = t.n_scale + e.n_scale),
          (A = r.MIN(u, r.MAX(n, r.MAX(t.n_scale, e.n_scale)))),
          ((i = r._bc_rec_mul(t, o, e, a, u)).n_sign = t.n_sign == e.n_sign ? r.PLUS : r.MINUS),
          (i.n_len = a + o + 1 - u),
          (i.n_scale = A),
          r._bc_rm_leading_zeros(i),
          r.bc_is_zero(i) && (i.n_sign = r.PLUS),
          i
        );
      }),
      (r.new_sub_num = function (t, e, n) {
        var i = new r.bc_num();
        return (i.n_sign = r.PLUS), (i.n_len = t), (i.n_scale = e), (i.n_value = n), i;
      }),
      (r._bc_simp_mul = function (t, e, n, i, o) {
        var a, u, A, s, c, l, g, h, f;
        for (f = e + i + 1, a = r.bc_new_num(f, 0), c = e - 1, l = i - 1, s = f - 1, h = 0, g = 0; g < f - 1; g++) {
          for (u = c - r.MAX(0, g - i + 1), A = l - r.MIN(g, i - 1); u >= 0 && A <= l; )
            h += t.n_value[u--] * n.n_value[A++];
          (a.n_value[s--] = Math.floor(h % r.BASE)), (h = Math.floor(h / r.BASE));
        }
        return (a.n_value[s] = h), a;
      }),
      (r._bc_shift_addsub = function (t, e, n, i) {
        var o, a, u, A;
        if (((u = e.n_len), 0 === e.n_value[0] && u--, !(t.n_len + t.n_scale >= n + u)))
          throw new Error("len + scale < shift + count");
        if (((o = t.n_len + t.n_scale - n - 1), (a = e.n_len = 1), (A = 0), i)) {
          for (; u--; )
            (t.n_value[o] -= e.n_value[a--] + A),
              t.n_value[o] < 0 ? ((A = 1), (t.n_value[o--] += r.BASE)) : ((A = 0), o--);
          for (; A; ) (t.n_value[o] -= A), t.n_value[o] < 0 ? (t.n_value[o--] += r.BASE) : (A = 0);
        } else {
          for (; u--; )
            (t.n_value[o] += e.n_value[a--] + A),
              t.n_value[o] > r.BASE - 1 ? ((A = 1), (t.n_value[o--] -= r.BASE)) : ((A = 0), o--);
          for (; A; ) (t.n_value[o] += A), t.n_value[o] > r.BASE - 1 ? (t.n_value[o--] -= r.BASE) : (A = 0);
        }
        return !0;
      }),
      (r._bc_rec_mul = function (t, e, n, i, o) {
        var a, u, A, s, c, l, g, h, f, p, d, m, w, C, v;
        return e + i < r.MUL_BASE_DIGITS || e < r.MUL_SMALL_DIGITS || i < r.MUL_SMALL_DIGITS
          ? r._bc_simp_mul(t, e, n, i, o)
          : (e < (d = Math.floor((r.MAX(e, i) + 1) / 2))
              ? ((A = r.bc_init_num()), (u = r.new_sub_num(e, 0, t.n_value)))
              : ((A = r.new_sub_num(e - d, 0, t.n_value)), (u = r.new_sub_num(d, 0, t.n_value + e - d))),
            i < d
              ? ((c = r.bc_init_num()), (s = r.new_sub_num(i, 0, n.n_value)))
              : ((c = r.new_sub_num(i - d, 0, n.n_value)), (s = r.new_sub_num(d, 0, n.n_value + i - d))),
            r._bc_rm_leading_zeros(A),
            r._bc_rm_leading_zeros(u),
            u.n_len,
            r._bc_rm_leading_zeros(c),
            r._bc_rm_leading_zeros(s),
            s.n_len,
            (w = r.bc_is_zero(A) || r.bc_is_zero(c)),
            r.bc_init_num(),
            r.bc_init_num(),
            (C = (f = r.bc_sub(A, u, 0)).n_len),
            (v = (p = r.bc_sub(s, c, 0)).n_len),
            (l = w ? r.bc_init_num() : r._bc_rec_mul(A, A.n_len, c, c.n_len, 0)),
            (g = r.bc_is_zero(f) || r.bc_is_zero(p) ? r.bc_init_num() : r._bc_rec_mul(f, C, p, v, 0)),
            (h = r.bc_is_zero(u) || r.bc_is_zero(s) ? r.bc_init_num() : r._bc_rec_mul(u, u.n_len, s, s.n_len, 0)),
            (m = e + i + 1),
            (a = r.bc_new_num(m, 0)),
            w || (r._bc_shift_addsub(a, l, 2 * d, 0), r._bc_shift_addsub(a, l, d, 0)),
            r._bc_shift_addsub(a, h, d, 0),
            r._bc_shift_addsub(a, h, 0, 0),
            r._bc_shift_addsub(a, g, d, f.n_sign != p.n_sign),
            a);
      }),
      (r.bc_sub = function (t, e, n) {
        var i, o;
        if (t.n_sign != e.n_sign) (i = r._bc_do_add(t, e, n)).n_sign = t.n_sign;
        else
          switch (r._bc_do_compare(t, e, !1, !1)) {
            case -1:
              (i = r._bc_do_sub(e, t, n)).n_sign = e.n_sign == r.PLUS ? r.MINUS : r.PLUS;
              break;
            case 0:
              (o = r.MAX(n, r.MAX(t.n_scale, e.n_scale))), (i = r.bc_new_num(1, o)), r.memset(i.n_value, 0, 0, o + 1);
              break;
            case 1:
              (i = r._bc_do_sub(t, e, n)).n_sign = t.n_sign;
          }
        return i;
      }),
      n.d(e, "a", function () {
        return u;
      });
    var u = {
      ROWHEIGHT: 4,
      QUIETH: 2,
      QUIETV: 2,
      barcode_array: {},
      start_pattern: "11111111010101000",
      stop_pattern: "111111101000101001",
      textsubmodes: [
        [
          65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 32,
          253, 254, 255,
        ],
        [
          97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
          119, 120, 121, 122, 32, 253, 254, 255,
        ],
        [
          48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 38, 13, 9, 44, 58, 35, 45, 46, 36, 47, 43, 37, 42, 61, 94, 251, 32,
          253, 254, 255,
        ],
        [
          59, 60, 62, 64, 91, 92, 93, 95, 96, 126, 33, 13, 9, 44, 58, 10, 45, 46, 36, 47, 34, 124, 42, 40, 41, 63, 123,
          125, 39, 255,
        ],
      ],
      textlatch: {
        "01": [27],
        "02": [28],
        "03": [28, 25],
        10: [28, 28],
        12: [28],
        13: [28, 25],
        20: [28],
        21: [27],
        23: [25],
        30: [29],
        31: [29, 27],
        32: [29, 28],
      },
      clusters: [
        [
          120256, 125680, 128380, 120032, 125560, 128318, 108736, 119920, 108640, 86080, 108592, 86048, 110016, 120560,
          125820, 109792, 120440, 125758, 88256, 109680, 88160, 89536, 110320, 120700, 89312, 110200, 120638, 89200,
          110140, 89840, 110460, 89720, 110398, 89980, 128506, 119520, 125304, 128190, 107712, 119408, 125244, 107616,
          119352, 84032, 107568, 119324, 84e3, 107544, 83984, 108256, 119672, 125374, 85184, 108144, 119612, 85088,
          108088, 119582, 85040, 108060, 85728, 108408, 119742, 85616, 108348, 85560, 108318, 85880, 108478, 85820,
          85790, 107200, 119152, 125116, 107104, 119096, 125086, 83008, 107056, 119068, 82976, 107032, 82960, 82952,
          83648, 107376, 119228, 83552, 107320, 119198, 83504, 107292, 83480, 83468, 83824, 107452, 83768, 107422,
          83740, 83900, 106848, 118968, 125022, 82496, 106800, 118940, 82464, 106776, 118926, 82448, 106764, 82440,
          106758, 82784, 106936, 119006, 82736, 106908, 82712, 106894, 82700, 82694, 106974, 82830, 82240, 106672,
          118876, 82208, 106648, 118862, 82192, 106636, 82184, 106630, 82180, 82352, 82328, 82316, 82080, 118830,
          106572, 106566, 82050, 117472, 124280, 127678, 103616, 117360, 124220, 103520, 117304, 124190, 75840, 103472,
          75808, 104160, 117624, 124350, 76992, 104048, 117564, 76896, 103992, 76848, 76824, 77536, 104312, 117694,
          77424, 104252, 77368, 77340, 77688, 104382, 77628, 77758, 121536, 126320, 128700, 121440, 126264, 128670,
          111680, 121392, 126236, 111648, 121368, 126222, 111632, 121356, 103104, 117104, 124092, 112320, 103008,
          117048, 124062, 112224, 121656, 126366, 93248, 74784, 102936, 117006, 93216, 112152, 93200, 75456, 103280,
          117180, 93888, 75360, 103224, 117150, 93792, 112440, 121758, 93744, 75288, 93720, 75632, 103356, 94064, 75576,
          103326, 94008, 112542, 93980, 75708, 94140, 75678, 94110, 121184, 126136, 128606, 111168, 121136, 126108,
          111136, 121112, 126094, 111120, 121100, 111112, 111108, 102752, 116920, 123998, 111456, 102704, 116892, 91712,
          74272, 121244, 116878, 91680, 74256, 102668, 91664, 111372, 102662, 74244, 74592, 102840, 116958, 92e3, 74544,
          102812, 91952, 111516, 102798, 91928, 74508, 74502, 74680, 102878, 92088, 74652, 92060, 74638, 92046, 92126,
          110912, 121008, 126044, 110880, 120984, 126030, 110864, 120972, 110856, 120966, 110852, 110850, 74048, 102576,
          116828, 90944, 74016, 102552, 116814, 90912, 111e3, 121038, 90896, 73992, 102534, 90888, 110982, 90884, 74160,
          102620, 91056, 74136, 102606, 91032, 111054, 91020, 74118, 91014, 91100, 91086, 110752, 120920, 125998,
          110736, 120908, 110728, 120902, 110724, 110722, 73888, 102488, 116782, 90528, 73872, 102476, 90512, 110796,
          102470, 90504, 73860, 90500, 73858, 73944, 90584, 90572, 90566, 120876, 120870, 110658, 102444, 73800, 90312,
          90308, 90306, 101056, 116080, 123580, 100960, 116024, 70720, 100912, 115996, 70688, 100888, 70672, 70664,
          71360, 101232, 116156, 71264, 101176, 116126, 71216, 101148, 71192, 71180, 71536, 101308, 71480, 101278,
          71452, 71612, 71582, 118112, 124600, 127838, 105024, 118064, 124572, 104992, 118040, 124558, 104976, 118028,
          104968, 118022, 100704, 115896, 123486, 105312, 100656, 115868, 79424, 70176, 118172, 115854, 79392, 105240,
          100620, 79376, 70152, 79368, 70496, 100792, 115934, 79712, 70448, 118238, 79664, 105372, 100750, 79640, 70412,
          79628, 70584, 100830, 79800, 70556, 79772, 70542, 70622, 79838, 122176, 126640, 128860, 122144, 126616,
          128846, 122128, 126604, 122120, 126598, 122116, 104768, 117936, 124508, 113472, 104736, 126684, 124494,
          113440, 122264, 126670, 113424, 104712, 117894, 113416, 122246, 104706, 69952, 100528, 115804, 78656, 69920,
          100504, 115790, 96064, 78624, 104856, 117966, 96032, 113560, 122318, 100486, 96016, 78600, 104838, 96008,
          69890, 70064, 100572, 78768, 70040, 100558, 96176, 78744, 104910, 96152, 113614, 70022, 78726, 70108, 78812,
          70094, 96220, 78798, 122016, 126552, 128814, 122e3, 126540, 121992, 126534, 121988, 121986, 104608, 117848,
          124462, 113056, 104592, 126574, 113040, 122060, 117830, 113032, 104580, 113028, 104578, 113026, 69792, 100440,
          115758, 78240, 69776, 100428, 95136, 78224, 104652, 100422, 95120, 113100, 69764, 95112, 78212, 69762, 78210,
          69848, 100462, 78296, 69836, 95192, 78284, 69830, 95180, 78278, 69870, 95214, 121936, 126508, 121928, 126502,
          121924, 121922, 104528, 117804, 112848, 104520, 117798, 112840, 121958, 112836, 104514, 112834, 69712, 100396,
          78032, 69704, 100390, 94672, 78024, 104550, 94664, 112870, 69698, 94660, 78018, 94658, 78060, 94700, 94694,
          126486, 121890, 117782, 104484, 104482, 69672, 77928, 94440, 69666, 77922, 99680, 68160, 99632, 68128, 99608,
          115342, 68112, 99596, 68104, 99590, 68448, 99768, 115422, 68400, 99740, 68376, 99726, 68364, 68358, 68536,
          99806, 68508, 68494, 68574, 101696, 116400, 123740, 101664, 116376, 101648, 116364, 101640, 116358, 101636,
          67904, 99504, 115292, 72512, 67872, 116444, 115278, 72480, 101784, 116430, 72464, 67848, 99462, 72456, 101766,
          67842, 68016, 99548, 72624, 67992, 99534, 72600, 101838, 72588, 67974, 68060, 72668, 68046, 72654, 118432,
          124760, 127918, 118416, 124748, 118408, 124742, 118404, 118402, 101536, 116312, 105888, 101520, 116300,
          105872, 118476, 116294, 105864, 101508, 105860, 101506, 105858, 67744, 99416, 72096, 67728, 116334, 80800,
          72080, 101580, 99398, 80784, 105932, 67716, 80776, 72068, 67714, 72066, 67800, 99438, 72152, 67788, 80856,
          72140, 67782, 80844, 72134, 67822, 72174, 80878, 126800, 128940, 126792, 128934, 126788, 126786, 118352,
          124716, 122576, 126828, 124710, 122568, 126822, 122564, 118338, 122562, 101456, 116268, 105680, 101448,
          116262, 114128, 105672, 118374, 114120, 122598, 101442, 114116, 105666, 114114, 67664, 99372, 71888, 67656,
          99366, 80336, 71880, 101478, 97232, 80328, 105702, 67650, 97224, 114150, 71874, 97220, 67692, 71916, 67686,
          80364, 71910, 97260, 80358, 97254, 126760, 128918, 126756, 126754, 118312, 124694, 122472, 126774, 122468,
          118306, 122466, 101416, 116246, 105576, 101412, 113896, 105572, 101410, 113892, 105570, 113890, 67624, 99350,
          71784, 101430, 80104, 71780, 67618, 96744, 80100, 71778, 96740, 80098, 96738, 71798, 96758, 126738, 122420,
          122418, 105524, 113780, 113778, 71732, 79988, 96500, 96498, 66880, 66848, 98968, 66832, 66824, 66820, 66992,
          66968, 66956, 66950, 67036, 67022, 1e5, 99984, 115532, 99976, 115526, 99972, 99970, 66720, 98904, 69024,
          100056, 98892, 69008, 100044, 69e3, 100038, 68996, 66690, 68994, 66776, 98926, 69080, 100078, 69068, 66758,
          69062, 66798, 69102, 116560, 116552, 116548, 116546, 99920, 102096, 116588, 115494, 102088, 116582, 102084,
          99906, 102082, 66640, 68816, 66632, 98854, 73168, 68808, 66628, 73160, 68804, 66626, 73156, 68802, 66668,
          68844, 66662, 73196, 68838, 73190, 124840, 124836, 124834, 116520, 118632, 124854, 118628, 116514, 118626,
          99880, 115478, 101992, 116534, 106216, 101988, 99874, 106212, 101986, 106210, 66600, 98838, 68712, 99894,
          72936, 68708, 66594, 81384, 72932, 68706, 81380, 72930, 66614, 68726, 72950, 81398, 128980, 128978, 124820,
          126900, 124818, 126898, 116500, 118580, 116498, 122740, 118578, 122738, 99860, 101940, 99858, 106100, 101938,
          114420,
        ],
        [
          128352, 129720, 125504, 128304, 129692, 125472, 128280, 129678, 125456, 128268, 125448, 128262, 125444,
          125792, 128440, 129758, 120384, 125744, 128412, 120352, 125720, 128398, 120336, 125708, 120328, 125702,
          120324, 120672, 125880, 128478, 110144, 120624, 125852, 110112, 120600, 125838, 110096, 120588, 110088,
          120582, 110084, 110432, 120760, 125918, 89664, 110384, 120732, 89632, 110360, 120718, 89616, 110348, 89608,
          110342, 89952, 110520, 120798, 89904, 110492, 89880, 110478, 89868, 90040, 110558, 90012, 89998, 125248,
          128176, 129628, 125216, 128152, 129614, 125200, 128140, 125192, 128134, 125188, 125186, 119616, 125360,
          128220, 119584, 125336, 128206, 119568, 125324, 119560, 125318, 119556, 119554, 108352, 119728, 125404,
          108320, 119704, 125390, 108304, 119692, 108296, 119686, 108292, 108290, 85824, 108464, 119772, 85792, 108440,
          119758, 85776, 108428, 85768, 108422, 85764, 85936, 108508, 85912, 108494, 85900, 85894, 85980, 85966, 125088,
          128088, 129582, 125072, 128076, 125064, 128070, 125060, 125058, 119200, 125144, 128110, 119184, 125132,
          119176, 125126, 119172, 119170, 107424, 119256, 125166, 107408, 119244, 107400, 119238, 107396, 107394, 83872,
          107480, 119278, 83856, 107468, 83848, 107462, 83844, 83842, 83928, 107502, 83916, 83910, 83950, 125008,
          128044, 125e3, 128038, 124996, 124994, 118992, 125036, 118984, 125030, 118980, 118978, 106960, 119020, 106952,
          119014, 106948, 106946, 82896, 106988, 82888, 106982, 82884, 82882, 82924, 82918, 124968, 128022, 124964,
          124962, 118888, 124982, 118884, 118882, 106728, 118902, 106724, 106722, 82408, 106742, 82404, 82402, 124948,
          124946, 118836, 118834, 106612, 106610, 124224, 127664, 129372, 124192, 127640, 129358, 124176, 127628,
          124168, 127622, 124164, 124162, 117568, 124336, 127708, 117536, 124312, 127694, 117520, 124300, 117512,
          124294, 117508, 117506, 104256, 117680, 124380, 104224, 117656, 124366, 104208, 117644, 104200, 117638,
          104196, 104194, 77632, 104368, 117724, 77600, 104344, 117710, 77584, 104332, 77576, 104326, 77572, 77744,
          104412, 77720, 104398, 77708, 77702, 77788, 77774, 128672, 129880, 93168, 128656, 129868, 92664, 128648,
          129862, 92412, 128644, 128642, 124064, 127576, 129326, 126368, 124048, 129902, 126352, 128716, 127558, 126344,
          124036, 126340, 124034, 126338, 117152, 124120, 127598, 121760, 117136, 124108, 121744, 126412, 124102,
          121736, 117124, 121732, 117122, 121730, 103328, 117208, 124142, 112544, 103312, 117196, 112528, 121804,
          117190, 112520, 103300, 112516, 103298, 112514, 75680, 103384, 117230, 94112, 75664, 103372, 94096, 112588,
          103366, 94088, 75652, 94084, 75650, 75736, 103406, 94168, 75724, 94156, 75718, 94150, 75758, 128592, 129836,
          91640, 128584, 129830, 91388, 128580, 91262, 128578, 123984, 127532, 126160, 123976, 127526, 126152, 128614,
          126148, 123970, 126146, 116944, 124012, 121296, 116936, 124006, 121288, 126182, 121284, 116930, 121282,
          102864, 116972, 111568, 102856, 116966, 111560, 121318, 111556, 102850, 111554, 74704, 102892, 92112, 74696,
          102886, 92104, 111590, 92100, 74690, 92098, 74732, 92140, 74726, 92134, 128552, 129814, 90876, 128548, 90750,
          128546, 123944, 127510, 126056, 128566, 126052, 123938, 126050, 116840, 123958, 121064, 116836, 121060,
          116834, 121058, 102632, 116854, 111080, 121078, 111076, 102626, 111074, 74216, 102646, 91112, 74212, 91108,
          74210, 91106, 74230, 91126, 128532, 90494, 128530, 123924, 126004, 123922, 126002, 116788, 120948, 116786,
          120946, 102516, 110836, 102514, 110834, 73972, 90612, 73970, 90610, 128522, 123914, 125978, 116762, 120890,
          102458, 110714, 123552, 127320, 129198, 123536, 127308, 123528, 127302, 123524, 123522, 116128, 123608,
          127342, 116112, 123596, 116104, 123590, 116100, 116098, 101280, 116184, 123630, 101264, 116172, 101256,
          116166, 101252, 101250, 71584, 101336, 116206, 71568, 101324, 71560, 101318, 71556, 71554, 71640, 101358,
          71628, 71622, 71662, 127824, 129452, 79352, 127816, 129446, 79100, 127812, 78974, 127810, 123472, 127276,
          124624, 123464, 127270, 124616, 127846, 124612, 123458, 124610, 115920, 123500, 118224, 115912, 123494,
          118216, 124646, 118212, 115906, 118210, 100816, 115948, 105424, 100808, 115942, 105416, 118246, 105412,
          100802, 105410, 70608, 100844, 79824, 70600, 100838, 79816, 105446, 79812, 70594, 79810, 70636, 79852, 70630,
          79846, 129960, 95728, 113404, 129956, 95480, 113278, 129954, 95356, 95294, 127784, 129430, 78588, 128872,
          129974, 95996, 78462, 128868, 127778, 95870, 128866, 123432, 127254, 124520, 123428, 126696, 128886, 123426,
          126692, 124514, 126690, 115816, 123446, 117992, 115812, 122344, 117988, 115810, 122340, 117986, 122338,
          100584, 115830, 104936, 100580, 113640, 104932, 100578, 113636, 104930, 113634, 70120, 100598, 78824, 70116,
          96232, 78820, 70114, 96228, 78818, 96226, 70134, 78838, 129940, 94968, 113022, 129938, 94844, 94782, 127764,
          78206, 128820, 127762, 95102, 128818, 123412, 124468, 123410, 126580, 124466, 126578, 115764, 117876, 115762,
          122100, 117874, 122098, 100468, 104692, 100466, 113140, 104690, 113138, 69876, 78324, 69874, 95220, 78322,
          95218, 129930, 94588, 94526, 127754, 128794, 123402, 124442, 126522, 115738, 117818, 121978, 100410, 104570,
          112890, 69754, 78074, 94714, 94398, 123216, 127148, 123208, 127142, 123204, 123202, 115408, 123244, 115400,
          123238, 115396, 115394, 99792, 115436, 99784, 115430, 99780, 99778, 68560, 99820, 68552, 99814, 68548, 68546,
          68588, 68582, 127400, 129238, 72444, 127396, 72318, 127394, 123176, 127126, 123752, 123172, 123748, 123170,
          123746, 115304, 123190, 116456, 115300, 116452, 115298, 116450, 99560, 115318, 101864, 99556, 101860, 99554,
          101858, 68072, 99574, 72680, 68068, 72676, 68066, 72674, 68086, 72694, 129492, 80632, 105854, 129490, 80508,
          80446, 127380, 72062, 127924, 127378, 80766, 127922, 123156, 123700, 123154, 124788, 123698, 124786, 115252,
          116340, 115250, 118516, 116338, 118514, 99444, 101620, 99442, 105972, 101618, 105970, 67828, 72180, 67826,
          80884, 72178, 80882, 97008, 114044, 96888, 113982, 96828, 96798, 129482, 80252, 130010, 97148, 80190, 97086,
          127370, 127898, 128954, 123146, 123674, 124730, 126842, 115226, 116282, 118394, 122618, 99386, 101498, 105722,
          114170, 67706, 71930, 80378, 96632, 113854, 96572, 96542, 80062, 96702, 96444, 96414, 96350, 123048, 123044,
          123042, 115048, 123062, 115044, 115042, 99048, 115062, 99044, 99042, 67048, 99062, 67044, 67042, 67062,
          127188, 68990, 127186, 123028, 123316, 123026, 123314, 114996, 115572, 114994, 115570, 98932, 100084, 98930,
          100082, 66804, 69108, 66802, 69106, 129258, 73084, 73022, 127178, 127450, 123018, 123290, 123834, 114970,
          115514, 116602, 98874, 99962, 102138, 66682, 68858, 73210, 81272, 106174, 81212, 81182, 72894, 81342, 97648,
          114364, 97592, 114334, 97564, 97550, 81084, 97724, 81054, 97694, 97464, 114270, 97436, 97422, 80990, 97502,
          97372, 97358, 97326, 114868, 114866, 98676, 98674, 66292, 66290, 123098, 114842, 115130, 98618, 99194, 66170,
          67322, 69310, 73404, 73374, 81592, 106334, 81564, 81550, 73310, 81630, 97968, 114524, 97944, 114510, 97932,
          97926, 81500, 98012, 81486, 97998, 97880, 114478, 97868, 97862, 81454, 97902, 97836, 97830, 69470, 73564,
          73550, 81752, 106414, 81740, 81734, 73518, 81774, 81708, 81702,
        ],
        [
          109536, 120312, 86976, 109040, 120060, 86496, 108792, 119934, 86256, 108668, 86136, 129744, 89056, 110072,
          129736, 88560, 109820, 129732, 88312, 109694, 129730, 88188, 128464, 129772, 89592, 128456, 129766, 89340,
          128452, 89214, 128450, 125904, 128492, 125896, 128486, 125892, 125890, 120784, 125932, 120776, 125926, 120772,
          120770, 110544, 120812, 110536, 120806, 110532, 84928, 108016, 119548, 84448, 107768, 119422, 84208, 107644,
          84088, 107582, 84028, 129640, 85488, 108284, 129636, 85240, 108158, 129634, 85116, 85054, 128232, 129654,
          85756, 128228, 85630, 128226, 125416, 128246, 125412, 125410, 119784, 125430, 119780, 119778, 108520, 119798,
          108516, 108514, 83424, 107256, 119166, 83184, 107132, 83064, 107070, 83004, 82974, 129588, 83704, 107390,
          129586, 83580, 83518, 128116, 83838, 128114, 125172, 125170, 119284, 119282, 107508, 107506, 82672, 106876,
          82552, 106814, 82492, 82462, 129562, 82812, 82750, 128058, 125050, 119034, 82296, 106686, 82236, 82206, 82366,
          82108, 82078, 76736, 103920, 117500, 76256, 103672, 117374, 76016, 103548, 75896, 103486, 75836, 129384,
          77296, 104188, 129380, 77048, 104062, 129378, 76924, 76862, 127720, 129398, 77564, 127716, 77438, 127714,
          124392, 127734, 124388, 124386, 117736, 124406, 117732, 117730, 104424, 117750, 104420, 104418, 112096,
          121592, 126334, 92608, 111856, 121468, 92384, 111736, 121406, 92272, 111676, 92216, 111646, 92188, 75232,
          103160, 117118, 93664, 74992, 103036, 93424, 112252, 102974, 93304, 74812, 93244, 74782, 93214, 129332, 75512,
          103294, 129908, 129330, 93944, 75388, 129906, 93820, 75326, 93758, 127604, 75646, 128756, 127602, 94078,
          128754, 124148, 126452, 124146, 126450, 117236, 121844, 117234, 121842, 103412, 103410, 91584, 111344, 121212,
          91360, 111224, 121150, 91248, 111164, 91192, 111134, 91164, 91150, 74480, 102780, 91888, 74360, 102718, 91768,
          111422, 91708, 74270, 91678, 129306, 74620, 129850, 92028, 74558, 91966, 127546, 128634, 124026, 126202,
          116986, 121338, 102906, 90848, 110968, 121022, 90736, 110908, 90680, 110878, 90652, 90638, 74104, 102590,
          91e3, 74044, 90940, 74014, 90910, 74174, 91070, 90480, 110780, 90424, 110750, 90396, 90382, 73916, 90556,
          73886, 90526, 90296, 110686, 90268, 90254, 73822, 90334, 90204, 90190, 71136, 101112, 116094, 70896, 100988,
          70776, 100926, 70716, 70686, 129204, 71416, 101246, 129202, 71292, 71230, 127348, 71550, 127346, 123636,
          123634, 116212, 116210, 101364, 101362, 79296, 105200, 118140, 79072, 105080, 118078, 78960, 105020, 78904,
          104990, 78876, 78862, 70384, 100732, 79600, 70264, 100670, 79480, 105278, 79420, 70174, 79390, 129178, 70524,
          129466, 79740, 70462, 79678, 127290, 127866, 123514, 124666, 115962, 118266, 100858, 113376, 122232, 126654,
          95424, 113264, 122172, 95328, 113208, 122142, 95280, 113180, 95256, 113166, 95244, 78560, 104824, 117950,
          95968, 78448, 104764, 95856, 113468, 104734, 95800, 78364, 95772, 78350, 95758, 70008, 100542, 78712, 69948,
          96120, 78652, 69918, 96060, 78622, 96030, 70078, 78782, 96190, 94912, 113008, 122044, 94816, 112952, 122014,
          94768, 112924, 94744, 112910, 94732, 94726, 78192, 104636, 95088, 78136, 104606, 95032, 113054, 95004, 78094,
          94990, 69820, 78268, 69790, 95164, 78238, 95134, 94560, 112824, 121950, 94512, 112796, 94488, 112782, 94476,
          94470, 78008, 104542, 94648, 77980, 94620, 77966, 94606, 69726, 78046, 94686, 94384, 112732, 94360, 112718,
          94348, 94342, 77916, 94428, 77902, 94414, 94296, 112686, 94284, 94278, 77870, 94318, 94252, 94246, 68336,
          99708, 68216, 99646, 68156, 68126, 68476, 68414, 127162, 123258, 115450, 99834, 72416, 101752, 116414, 72304,
          101692, 72248, 101662, 72220, 72206, 67960, 99518, 72568, 67900, 72508, 67870, 72478, 68030, 72638, 80576,
          105840, 118460, 80480, 105784, 118430, 80432, 105756, 80408, 105742, 80396, 80390, 72048, 101564, 80752,
          71992, 101534, 80696, 71964, 80668, 71950, 80654, 67772, 72124, 67742, 80828, 72094, 80798, 114016, 122552,
          126814, 96832, 113968, 122524, 96800, 113944, 122510, 96784, 113932, 96776, 113926, 96772, 80224, 105656,
          118366, 97120, 80176, 105628, 97072, 114076, 105614, 97048, 80140, 97036, 80134, 97030, 71864, 101470, 80312,
          71836, 97208, 80284, 71822, 97180, 80270, 97166, 67678, 71902, 80350, 97246, 96576, 113840, 122460, 96544,
          113816, 122446, 96528, 113804, 96520, 113798, 96516, 96514, 80048, 105564, 96688, 80024, 105550, 96664,
          113870, 96652, 80006, 96646, 71772, 80092, 71758, 96732, 80078, 96718, 96416, 113752, 122414, 96400, 113740,
          96392, 113734, 96388, 96386, 79960, 105518, 96472, 79948, 96460, 79942, 96454, 71726, 79982, 96494, 96336,
          113708, 96328, 113702, 96324, 96322, 79916, 96364, 79910, 96358, 96296, 113686, 96292, 96290, 79894, 96310,
          66936, 99006, 66876, 66846, 67006, 68976, 100028, 68920, 99998, 68892, 68878, 66748, 69052, 66718, 69022,
          73056, 102072, 116574, 73008, 102044, 72984, 102030, 72972, 72966, 68792, 99934, 73144, 68764, 73116, 68750,
          73102, 66654, 68830, 73182, 81216, 106160, 118620, 81184, 106136, 118606, 81168, 106124, 81160, 106118, 81156,
          81154, 72880, 101980, 81328, 72856, 101966, 81304, 106190, 81292, 72838, 81286, 68700, 72924, 68686, 81372,
          72910, 81358, 114336, 122712, 126894, 114320, 122700, 114312, 122694, 114308, 114306, 81056, 106072, 118574,
          97696, 81040, 106060, 97680, 114380, 106054, 97672, 81028, 97668, 81026, 97666, 72792, 101934, 81112, 72780,
          97752, 81100, 72774, 97740, 81094, 97734, 68654, 72814, 81134, 97774, 114256, 122668, 114248, 122662, 114244,
          114242, 80976, 106028, 97488, 80968, 106022, 97480, 114278, 97476, 80962, 97474, 72748, 81004, 72742, 97516,
          80998, 97510, 114216, 122646, 114212, 114210, 80936, 106006, 97384, 80932, 97380, 80930, 97378, 72726, 80950,
          97398, 114196, 114194, 80916, 97332, 80914, 97330, 66236, 66206, 67256, 99166, 67228, 67214, 66142, 67294,
          69296, 100188, 69272, 100174, 69260, 69254, 67164, 69340, 67150, 69326, 73376, 102232, 116654, 73360, 102220,
          73352, 102214, 73348, 73346, 69208, 100142, 73432, 102254, 73420, 69190, 73414, 67118, 69230, 73454, 106320,
          118700, 106312, 118694, 106308, 106306, 73296, 102188, 81616, 106348, 102182, 81608, 73284, 81604, 73282,
          81602, 69164, 73324, 69158, 81644, 73318, 81638, 122792, 126934, 122788, 122786, 106280, 118678, 114536,
          106276, 114532, 106274, 114530, 73256, 102166, 81512, 73252, 98024, 81508, 73250, 98020, 81506, 98018, 69142,
          73270, 81526, 98038, 122772, 122770, 106260, 114484, 106258, 114482, 73236, 81460, 73234, 97908, 81458, 97906,
          122762, 106250, 114458, 73226, 81434, 97850, 66396, 66382, 67416, 99246, 67404, 67398, 66350, 67438, 69456,
          100268, 69448, 100262, 69444, 69442, 67372, 69484, 67366, 69478, 102312, 116694, 102308, 102306, 69416,
          100246, 73576, 102326, 73572, 69410, 73570, 67350, 69430, 73590, 118740, 118738, 102292, 106420, 102290,
          106418, 69396, 73524, 69394, 81780, 73522, 81778, 118730, 102282, 106394, 69386, 73498, 81722, 66476, 66470,
          67496, 99286, 67492, 67490, 66454, 67510, 100308, 100306, 67476, 69556, 67474, 69554, 116714,
        ],
      ],
      rsfactors: [
        [27, 917],
        [522, 568, 723, 809],
        [237, 308, 436, 284, 646, 653, 428, 379],
        [274, 562, 232, 755, 599, 524, 801, 132, 295, 116, 442, 428, 295, 42, 176, 65],
        [
          361, 575, 922, 525, 176, 586, 640, 321, 536, 742, 677, 742, 687, 284, 193, 517, 273, 494, 263, 147, 593, 800,
          571, 320, 803, 133, 231, 390, 685, 330, 63, 410,
        ],
        [
          539, 422, 6, 93, 862, 771, 453, 106, 610, 287, 107, 505, 733, 877, 381, 612, 723, 476, 462, 172, 430, 609,
          858, 822, 543, 376, 511, 400, 672, 762, 283, 184, 440, 35, 519, 31, 460, 594, 225, 535, 517, 352, 605, 158,
          651, 201, 488, 502, 648, 733, 717, 83, 404, 97, 280, 771, 840, 629, 4, 381, 843, 623, 264, 543,
        ],
        [
          521, 310, 864, 547, 858, 580, 296, 379, 53, 779, 897, 444, 400, 925, 749, 415, 822, 93, 217, 208, 928, 244,
          583, 620, 246, 148, 447, 631, 292, 908, 490, 704, 516, 258, 457, 907, 594, 723, 674, 292, 272, 96, 684, 432,
          686, 606, 860, 569, 193, 219, 129, 186, 236, 287, 192, 775, 278, 173, 40, 379, 712, 463, 646, 776, 171, 491,
          297, 763, 156, 732, 95, 270, 447, 90, 507, 48, 228, 821, 808, 898, 784, 663, 627, 378, 382, 262, 380, 602,
          754, 336, 89, 614, 87, 432, 670, 616, 157, 374, 242, 726, 600, 269, 375, 898, 845, 454, 354, 130, 814, 587,
          804, 34, 211, 330, 539, 297, 827, 865, 37, 517, 834, 315, 550, 86, 801, 4, 108, 539,
        ],
        [
          524, 894, 75, 766, 882, 857, 74, 204, 82, 586, 708, 250, 905, 786, 138, 720, 858, 194, 311, 913, 275, 190,
          375, 850, 438, 733, 194, 280, 201, 280, 828, 757, 710, 814, 919, 89, 68, 569, 11, 204, 796, 605, 540, 913,
          801, 700, 799, 137, 439, 418, 592, 668, 353, 859, 370, 694, 325, 240, 216, 257, 284, 549, 209, 884, 315, 70,
          329, 793, 490, 274, 877, 162, 749, 812, 684, 461, 334, 376, 849, 521, 307, 291, 803, 712, 19, 358, 399, 908,
          103, 511, 51, 8, 517, 225, 289, 470, 637, 731, 66, 255, 917, 269, 463, 830, 730, 433, 848, 585, 136, 538, 906,
          90, 2, 290, 743, 199, 655, 903, 329, 49, 802, 580, 355, 588, 188, 462, 10, 134, 628, 320, 479, 130, 739, 71,
          263, 318, 374, 601, 192, 605, 142, 673, 687, 234, 722, 384, 177, 752, 607, 640, 455, 193, 689, 707, 805, 641,
          48, 60, 732, 621, 895, 544, 261, 852, 655, 309, 697, 755, 756, 60, 231, 773, 434, 421, 726, 528, 503, 118, 49,
          795, 32, 144, 500, 238, 836, 394, 280, 566, 319, 9, 647, 550, 73, 914, 342, 126, 32, 681, 331, 792, 620, 60,
          609, 441, 180, 791, 893, 754, 605, 383, 228, 749, 760, 213, 54, 297, 134, 54, 834, 299, 922, 191, 910, 532,
          609, 829, 189, 20, 167, 29, 872, 449, 83, 402, 41, 656, 505, 579, 481, 173, 404, 251, 688, 95, 497, 555, 642,
          543, 307, 159, 924, 558, 648, 55, 497, 10,
        ],
        [
          352, 77, 373, 504, 35, 599, 428, 207, 409, 574, 118, 498, 285, 380, 350, 492, 197, 265, 920, 155, 914, 299,
          229, 643, 294, 871, 306, 88, 87, 193, 352, 781, 846, 75, 327, 520, 435, 543, 203, 666, 249, 346, 781, 621,
          640, 268, 794, 534, 539, 781, 408, 390, 644, 102, 476, 499, 290, 632, 545, 37, 858, 916, 552, 41, 542, 289,
          122, 272, 383, 800, 485, 98, 752, 472, 761, 107, 784, 860, 658, 741, 290, 204, 681, 407, 855, 85, 99, 62, 482,
          180, 20, 297, 451, 593, 913, 142, 808, 684, 287, 536, 561, 76, 653, 899, 729, 567, 744, 390, 513, 192, 516,
          258, 240, 518, 794, 395, 768, 848, 51, 610, 384, 168, 190, 826, 328, 596, 786, 303, 570, 381, 415, 641, 156,
          237, 151, 429, 531, 207, 676, 710, 89, 168, 304, 402, 40, 708, 575, 162, 864, 229, 65, 861, 841, 512, 164,
          477, 221, 92, 358, 785, 288, 357, 850, 836, 827, 736, 707, 94, 8, 494, 114, 521, 2, 499, 851, 543, 152, 729,
          771, 95, 248, 361, 578, 323, 856, 797, 289, 51, 684, 466, 533, 820, 669, 45, 902, 452, 167, 342, 244, 173, 35,
          463, 651, 51, 699, 591, 452, 578, 37, 124, 298, 332, 552, 43, 427, 119, 662, 777, 475, 850, 764, 364, 578,
          911, 283, 711, 472, 420, 245, 288, 594, 394, 511, 327, 589, 777, 699, 688, 43, 408, 842, 383, 721, 521, 560,
          644, 714, 559, 62, 145, 873, 663, 713, 159, 672, 729, 624, 59, 193, 417, 158, 209, 563, 564, 343, 693, 109,
          608, 563, 365, 181, 772, 677, 310, 248, 353, 708, 410, 579, 870, 617, 841, 632, 860, 289, 536, 35, 777, 618,
          586, 424, 833, 77, 597, 346, 269, 757, 632, 695, 751, 331, 247, 184, 45, 787, 680, 18, 66, 407, 369, 54, 492,
          228, 613, 830, 922, 437, 519, 644, 905, 789, 420, 305, 441, 207, 300, 892, 827, 141, 537, 381, 662, 513, 56,
          252, 341, 242, 797, 838, 837, 720, 224, 307, 631, 61, 87, 560, 310, 756, 665, 397, 808, 851, 309, 473, 795,
          378, 31, 647, 915, 459, 806, 590, 731, 425, 216, 548, 249, 321, 881, 699, 535, 673, 782, 210, 815, 905, 303,
          843, 922, 281, 73, 469, 791, 660, 162, 498, 308, 155, 422, 907, 817, 187, 62, 16, 425, 535, 336, 286, 437,
          375, 273, 610, 296, 183, 923, 116, 667, 751, 353, 62, 366, 691, 379, 687, 842, 37, 357, 720, 742, 330, 5, 39,
          923, 311, 424, 242, 749, 321, 54, 669, 316, 342, 299, 534, 105, 667, 488, 640, 672, 576, 540, 316, 486, 721,
          610, 46, 656, 447, 171, 616, 464, 190, 531, 297, 321, 762, 752, 533, 175, 134, 14, 381, 433, 717, 45, 111, 20,
          596, 284, 736, 138, 646, 411, 877, 669, 141, 919, 45, 780, 407, 164, 332, 899, 165, 726, 600, 325, 498, 655,
          357, 752, 768, 223, 849, 647, 63, 310, 863, 251, 366, 304, 282, 738, 675, 410, 389, 244, 31, 121, 303, 263,
        ],
      ],
      init: function (t, e, n) {
        if (((t = unescape(encodeURIComponent(t))), (e = e || -1), (n = n || 2), (this.barcode_array = {}), "" === t))
          return !1;
        for (var r = this.getInputSequences(t), i = [], o = 0; o < r.length; o++) {
          var a = this.getCompaction(r[o][0], r[o][1], !0);
          i = i.concat(a);
        }
        900 == i[0] && i.shift();
        var u = i.length;
        if (u > 925) return !1;
        var A = 2 << (e = this.getErrorCorrectionLevel(e, u)),
          s = u + A + 1,
          c = Math.round((Math.sqrt(4761 + 68 * n * this.ROWHEIGHT * s) - 69) / 34);
        c < 1 ? (c = 1) : c > 30 && (c = 30);
        var l = Math.ceil(s / c),
          g = c * l;
        (l < 3 || l > 90) && (l < 3 ? (l = 3) : l > 90 && (l = 90), (g = (c = Math.ceil(g / l)) * l)),
          g > 928 &&
            (Math.abs(n - 493 / 32) < Math.abs(n - 272 / 58) ? ((c = 29), (l = 32)) : ((c = 16), (l = 58)), (g = 928));
        var h = g - s;
        h > 0 && (g - l == s ? (g -= --l) : (i = i.concat(this._array_fill(0, h, 900))));
        var f = g - A;
        i.unshift(f);
        var p = this.getErrorCorrection(i, e);
        i = i.concat(p);
        var d,
          m,
          w = this._str_repeat("0", this.QUIETH) + this.start_pattern,
          C = this.stop_pattern + "" + this._str_repeat("0", this.QUIETH);
        if (
          ((this.barcode_array.num_rows = l * this.ROWHEIGHT + 2 * this.QUIETV),
          (this.barcode_array.num_cols = 17 * (c + 2) + 35 + 2 * this.QUIETH),
          (this.barcode_array.bcode = []),
          this.QUIETV > 0)
        ) {
          d = this._array_fill(0, this.barcode_array.num_cols, 0);
          for (o = 0; o < this.QUIETV; ++o) this.barcode_array.bcode.push(d);
        }
        for (var v = 0, y = 0, b = 0; b < l; ++b) {
          var I = w;
          switch (y) {
            case 0:
              m = 30 * this._intval(b / 3) + this._intval((l - 1) / 3);
              break;
            case 1:
              m = 30 * this._intval(b / 3) + 3 * e + ((l - 1) % 3);
              break;
            case 2:
              m = 30 * this._intval(b / 3) + (c - 1);
          }
          I += this._sprintf("%17b", this.clusters[y][m]);
          for (var q = 0; q < c; ++q) (I += this._sprintf("%17b", this.clusters[y][i[v]])), ++v;
          switch (y) {
            case 0:
              m = 30 * this._intval(b / 3) + (c - 1);
              break;
            case 1:
              m = 30 * this._intval(b / 3) + this._intval((l - 1) / 3);
              break;
            case 2:
              m = 30 * this._intval(b / 3) + 3 * e + ((l - 1) % 3);
          }
          (I += this._sprintf("%17b", this.clusters[y][m])), (I += C);
          for (var E = this._preg_split("//", I, -1, "PREG_SPLIT_NO_EMPTY"), B = 0; B < this.ROWHEIGHT; ++B)
            this.barcode_array.bcode.push(E);
          ++y > 2 && (y = 0);
        }
        if (this.QUIETV > 0) for (o = 0; o < this.QUIETV; ++o) this.barcode_array.bcode.push(d);
      },
      getInputSequences: function (t) {
        var e = [],
          n = [];
        if (null == (n = t.match(/([0-9]{13,44})/g))) n = [];
        else
          for (var r = 0, i = 0; r < n.length; r++) (i = t.indexOf(n[r], i)), (n[r] = [n[r], i]), (i += n[r][0].length);
        n.push(["", t.length]);
        i = 0;
        for (var o = 0; o < n.length; o++) {
          var a = n[o],
            u = a[0].length;
          if (a[1] > 0) {
            var A = t.substr(i, a[1] - i),
              s = [];
            if (null == (s = A.match(/([\x09\x0a\x0d\x20-\x7e]{5,})/g))) s = [];
            else
              for (r = 0; r < s.length; r++) {
                i = A.indexOf(s[r]);
                s[r] = [s[r], i];
              }
            s.push(["", A.length]);
            for (var c = 0, l = 0; l < s.length; l++) {
              var g = s[l],
                h = g[0].length;
              if (g[1] > 0) {
                var f = A.substr(c, g[1] - c);
                f.length > 0 &&
                  (1 == f.length && e.length > 0 && 900 == e[e.length - 1][0]
                    ? e.push([913, f])
                    : f.length % 6 == 0
                    ? e.push([924, f])
                    : e.push([901, f]));
              }
              h > 0 && e.push([900, g[0]]), (c = g[1] + h);
            }
          }
          u > 0 && e.push([902, a[0]]), (i = a[1] + u);
        }
        return e;
      },
      getCompaction: function (t, e, n) {
        n = n || !0;
        var r = [];
        switch (t) {
          case 900:
            for (var u = 0, A = [], s = e.length, c = 0; c < s; ++c) {
              var l,
                g = this._ord(e.charAt(c));
              if (!1 !== (l = this._array_search(g, this.textsubmodes[u]))) A.push(l);
              else
                for (var h = 0; h < 4; ++h)
                  if (h != u && !1 !== (l = this._array_search(g, this.textsubmodes[h]))) {
                    (c + 1 == s ||
                      (c + 1 < s && !1 !== this._array_search(this._ord(e.charAt(c + 1)), this.textsubmodes[u]))) &&
                    (3 == h || (0 == h && 1 == u))
                      ? 3 == h
                        ? A.push(29)
                        : A.push(27)
                      : ((A = A.concat(this.textlatch["" + u + h])), (u = h)),
                      A.push(l);
                    break;
                  }
            }
            var f = A.length;
            f % 2 != 0 && (A.push(29), ++f);
            for (c = 0; c < f; c += 2) r.push(30 * parseInt(A[c]) + parseInt(A[c + 1]));
            break;
          case 901:
          case 924:
            for (var p; (s = e.length) > 0; ) {
              if (
                (s > 6 ? ((w = e.substring(6)), (e = e.substring(0, 6)), (p = 6)) : ((w = ""), (p = e.length)), 6 == p)
              ) {
                (C = i(
                  (C = a("" + this._ord(e.charAt(0)), "1099511627776")),
                  a("" + this._ord(e.charAt(1)), "4294967296")
                )),
                  (C = i(C, a("" + this._ord(e.charAt(2)), "16777216"))),
                  (C = i(C, a("" + this._ord(e.charAt(3)), "65536"))),
                  (C = i(C, a("" + this._ord(e.charAt(4)), "256"))),
                  (C = i(C, "" + this._ord(e.charAt(5))));
                var d = [];
                do {
                  var m = this._my_bcmod(C, "900");
                  (C = o(C, "900")), d.unshift(m);
                } while ("0" != C);
                r = r.concat(d);
              } else for (c = 0; c < p; ++c) r.push(this._ord(e.charAt(c)));
              e = w;
            }
            break;
          case 902:
            for (var w; (s = e.length) > 0; ) {
              s > 44 ? ((w = e.substring(44)), (e = e.substring(0, 44))) : (w = "");
              var C = "1" + e;
              do {
                m = this._my_bcmod(C, "900");
                (C = o(C, "900")), r.unshift(m);
              } while ("0" != C);
              e = w;
            }
            break;
          case 913:
            r.push(this._ord(e));
        }
        return n && r.unshift(t), r;
      },
      getErrorCorrectionLevel: function (t, e) {
        for (var n = 8, r = 928 - e; n > 0; ) {
          if (r >= 2 << t) break;
          --n;
        }
        return (t < 0 || t > 8) && (t = e < 41 ? 2 : e < 161 ? 3 : e < 321 ? 4 : e < 864 ? 5 : n), t > n && (t = n), t;
      },
      getErrorCorrection: function (t, e) {
        for (
          var n = this.rsfactors[e], r = 2 << e, i = r - 1, o = this._array_fill(0, r, 0), a = 0;
          a < t.length;
          a++
        ) {
          for (var u = (t[a] + o[i]) % 929, A = i; A > 0; --A) {
            var s = (u * n[A]) % 929,
              c = 929 - s;
            o[A] = (o[A - 1] + c) % 929;
          }
          (c = 929 - (s = (u * n[0]) % 929)), (o[0] = c % 929);
        }
        for (A = 0; A < o.length; A++) 0 != o[A] && (o[A] = 929 - o[A]);
        return (o = o.reverse());
      },
      getBarcodeArray: function () {
        return this.barcode_array;
      },
      _array_fill: function (t, e, n) {
        var r,
          i = {};
        if (0 == t) {
          for (var o = [], a = 0; a < e; a++) o.push(n);
          return o;
        }
        if (!isNaN(t) && !isNaN(e)) for (r = 0; r < e; r++) i[r + t] = n;
        return i;
      },
      _str_repeat: function (t, e) {
        for (var n = ""; 1 & e && (n += t), (e >>= 1); ) t += t;
        return n;
      },
      _intval: function (t, e) {
        var n,
          r = typeof t;
        return "boolean" === r
          ? +t
          : "string" === r
          ? ((n = parseInt(t, e || 10)), isNaN(n) || !isFinite(n) ? 0 : n)
          : "number" === r && isFinite(t)
          ? 0 | t
          : 0;
      },
      _sprintf: function () {
        var t = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
          e = arguments,
          n = 0,
          r = e[n++],
          i = function (t, e, n, r) {
            n || (n = " ");
            var i = t.length >= e ? "" : Array((1 + e - t.length) >>> 0).join(n);
            return r ? t + i : i + t;
          },
          o = function (t, e, n, r, o, a) {
            var u = r - t.length;
            return (
              u > 0 && (t = n || !o ? i(t, r, a, n) : t.slice(0, e.length) + i("", u, "0", !0) + t.slice(e.length)), t
            );
          },
          a = function (t, e, n, r, a, u, A) {
            var s = t >>> 0;
            return (
              (t = (n = (n && s && { 2: "0b", 8: "0", 16: "0x" }[e]) || "") + i(s.toString(e), u || 0, "0", !1)),
              o(t, n, r, a, A)
            );
          },
          u = function (t, e, n, r, i, a) {
            return null != r && (t = t.slice(0, r)), o(t, "", e, n, i, a);
          },
          A = function (t, r, A, s, c, l, g) {
            var h, f, p, d, m;
            if ("%%" == t) return "%";
            for (var w = !1, C = "", v = !1, y = !1, b = " ", I = A.length, q = 0; A && q < I; q++)
              switch (A.charAt(q)) {
                case " ":
                  C = " ";
                  break;
                case "+":
                  C = "+";
                  break;
                case "-":
                  w = !0;
                  break;
                case "'":
                  b = A.charAt(q + 1);
                  break;
                case "0":
                  v = !0;
                  break;
                case "#":
                  y = !0;
              }
            if (
              ((s = s ? ("*" == s ? +e[n++] : "*" == s.charAt(0) ? +e[s.slice(1, -1)] : +s) : 0) < 0 &&
                ((s = -s), (w = !0)),
              !isFinite(s))
            )
              throw new Error("sprintf: (minimum-)width must be finite");
            switch (
              ((l = l
                ? "*" == l
                  ? +e[n++]
                  : "*" == l.charAt(0)
                  ? +e[l.slice(1, -1)]
                  : +l
                : "fFeE".indexOf(g) > -1
                ? 6
                : "d" == g
                ? 0
                : void 0),
              (m = r ? e[r.slice(0, -1)] : e[n++]),
              g)
            ) {
              case "s":
                return u(String(m), w, s, l, v, b);
              case "c":
                return u(String.fromCharCode(+m), w, s, l, v);
              case "b":
                return a(m, 2, y, w, s, l, v);
              case "o":
                return a(m, 8, y, w, s, l, v);
              case "x":
                return a(m, 16, y, w, s, l, v);
              case "X":
                return a(m, 16, y, w, s, l, v).toUpperCase();
              case "u":
                return a(m, 10, y, w, s, l, v);
              case "i":
              case "d":
                return (
                  (h = +m || 0),
                  (m = (f = (h = Math.round(h - (h % 1))) < 0 ? "-" : C) + i(String(Math.abs(h)), l, "0", !1)),
                  o(m, f, w, s, v)
                );
              case "e":
              case "E":
              case "f":
              case "F":
              case "g":
              case "G":
                return (
                  (f = (h = +m) < 0 ? "-" : C),
                  (p = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(g.toLowerCase())]),
                  (d = ["toString", "toUpperCase"]["eEfFgG".indexOf(g) % 2]),
                  (m = f + Math.abs(h)[p](l)),
                  o(m, f, w, s, v)[d]()
                );
              default:
                return t;
            }
          };
        return r.replace(t, A);
      },
      _preg_split: function (t, e, n, r) {
        (n = n || 0), (r = r || "");
        var i,
          o,
          a,
          u,
          A,
          s = [],
          c = 0,
          l = 0,
          g = 0,
          h = /^\/(.*)\/\w*$/.exec(t.toString())[1],
          f = /^\/.*\/(\w*)$/.exec(t.toString())[1];
        if (
          ((t = t.global && "string" != typeof t ? t : new RegExp(h, f + (-1 !== f.indexOf("g") ? "" : "g"))),
          (A = { PREG_SPLIT_NO_EMPTY: 1, PREG_SPLIT_DELIM_CAPTURE: 2, PREG_SPLIT_OFFSET_CAPTURE: 4 }),
          "number" != typeof r)
        ) {
          for (r = [].concat(r), l = 0; l < r.length; l++) A[r[l]] && (g |= A[r[l]]);
          r = g;
        }
        (o = r & A.PREG_SPLIT_NO_EMPTY), (a = r & A.PREG_SPLIT_DELIM_CAPTURE), (u = r & A.PREG_SPLIT_OFFSET_CAPTURE);
        var p = function (t, e) {
          (o && !t.length) || (u && (t = [t, e]), s.push(t));
        };
        if (!h) {
          for (i = e.split(""), l = 0; l < i.length; l++) p(i[l], l);
          return s;
        }
        for (; (i = t.exec(e)) && 1 !== n; ) {
          if ((p(e.slice(c, i.index), c), (c = i.index + i[0].length), a)) {
            var d = Array.prototype.slice.call(i);
            for (l = 1; l < d.length; l++) void 0 !== i[l] && p(i[l], i.index + i[0].indexOf(i[l]));
          }
          n--;
        }
        return p(e.slice(c, e.length), c), s;
      },
      _ord: function (t) {
        return t.charCodeAt(0);
      },
      _array_search: function (t, e, n) {
        var r = !!n,
          i = "";
        if (e && "object" == typeof e && e.change_key_case) return e.search(t, n);
        if ("object" == typeof t && t.exec) {
          if (!r) {
            var o = "i" + (t.global ? "g" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "");
            t = new RegExp(t.source, o);
          }
          for (i in e) if (t.test(e[i])) return i;
          return !1;
        }
        for (i in e) if ((r && e[i] === t) || (!r && e[i] == t)) return i;
        return !1;
      },
      _my_bcmod: function (t, e) {
        var n = "";
        do {
          var r = parseInt(n + "" + t.substring(0, 5));
          (t = t.substring(5)), (n = r % e);
        } while (t.length);
        return parseInt(n);
      },
    };
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return A;
      });
      var r = n(13);
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        );
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var a = new WeakMap(),
        u = function (e) {
          return e instanceof t.Node ? e : document.querySelector(e);
        },
        A = (function () {
          function t(e, n) {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
              e && e.selector && (e.containerNode = u(e.selector)),
              n instanceof r.a
                ? (a.set(this, n), a.get(this).setConfiguration(e))
                : a.set(
                    this,
                    new r.a(
                      (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                              })
                            )),
                            r.forEach(function (e) {
                              i(t, e, n[e]);
                            });
                        }
                        return t;
                      })({ renderMode: r.b.IMMEDIATE }, e)
                    )
                  );
          }
          var e, n, A;
          return (
            (e = t),
            (n = [
              {
                key: "setSelector",
                value: function (t) {
                  a.get(this).containerNode = u(t);
                },
              },
              {
                key: "setToken",
                value: function (t, e) {
                  var n = a.get(this);
                  (n.parseErrorText = e), (n.token = t);
                },
              },
              {
                key: "setBrandingColor",
                value: function (t) {
                  a.get(this).brandingColor = t;
                },
              },
              {
                key: "setErrorText",
                value: function (t) {
                  a.get(this).parseErrorText = t;
                },
              },
              {
                key: "showError",
                value: function (t) {
                  a.get(this).error = t;
                },
              },
              {
                key: "enableBrandedSubtitle",
                value: function (t) {
                  a.get(this).isBrandingColoredSubtitleEnabled = !!t;
                },
              },
              {
                key: "setPDF417Subtitle",
                value: function (t) {
                  a.get(this).pdf417Subtitle = t;
                },
              },
              {
                key: "setQRCodeSubtitle",
                value: function (t) {
                  a.get(this).qrCodeSubtitle = t;
                },
              },
              {
                key: "teardown",
                value: function () {
                  a.get(this).teardown();
                },
              },
            ]) && o(e.prototype, n),
            A && o(e, A),
            t
          );
        })();
    }.call(this, n(3)));
  },
  function (t, e, n) {
    var r = n(15),
      i = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4,
        5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
        13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21,
        29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33,
        45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47,
        65, 77, 25, 49, 68, 81,
      ],
      o = [
        7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108,
        130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
        288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588,
        196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560,
        810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
        1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
        1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316,
        1950, 2310, 750, 1372, 2040, 2430,
      ];
    (e.getBlocksCount = function (t, e) {
      switch (e) {
        case r.L:
          return i[4 * (t - 1) + 0];
        case r.M:
          return i[4 * (t - 1) + 1];
        case r.Q:
          return i[4 * (t - 1) + 2];
        case r.H:
          return i[4 * (t - 1) + 3];
        default:
          return;
      }
    }),
      (e.getTotalCodewordsCount = function (t, e) {
        switch (e) {
          case r.L:
            return o[4 * (t - 1) + 0];
          case r.M:
            return o[4 * (t - 1) + 1];
          case r.Q:
            return o[4 * (t - 1) + 2];
          case r.H:
            return o[4 * (t - 1) + 3];
          default:
            return;
        }
      });
  },
  function (t, e) {
    e.isValid = function (t) {
      return !isNaN(t) && t >= 1 && t <= 40;
    };
  },
  function (t, e) {
    var n =
        "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
      r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
    (e.KANJI = new RegExp(n, "g")),
      (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
      (e.BYTE = new RegExp(r, "g")),
      (e.NUMERIC = new RegExp("[0-9]+", "g")),
      (e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
    var i = new RegExp("^" + n + "$"),
      o = new RegExp("^[0-9]+$"),
      a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    (e.testKanji = function (t) {
      return i.test(t);
    }),
      (e.testNumeric = function (t) {
        return o.test(t);
      }),
      (e.testAlphanumeric = function (t) {
        return a.test(t);
      });
  },
  function (t, e) {
    function n(t) {
      if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
        throw new Error("Color should be defined as hex string");
      var e = t.slice().replace("#", "").split("");
      if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
      (3 !== e.length && 4 !== e.length) ||
        (e = Array.prototype.concat.apply(
          [],
          e.map(function (t) {
            return [t, t];
          })
        )),
        6 === e.length && e.push("F", "F");
      var n = parseInt(e.join(""), 16);
      return {
        r: (n >> 24) & 255,
        g: (n >> 16) & 255,
        b: (n >> 8) & 255,
        a: 255 & n,
        hex: "#" + e.slice(0, 6).join(""),
      };
    }
    (e.getOptions = function (t) {
      t || (t = {}), t.color || (t.color = {});
      var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
        r = t.width && t.width >= 21 ? t.width : void 0,
        i = t.scale || 4;
      return {
        width: r,
        scale: r ? 4 : i,
        margin: e,
        color: { dark: n(t.color.dark || "#000000ff"), light: n(t.color.light || "#ffffffff") },
        type: t.type,
        rendererOpts: t.rendererOpts || {},
      };
    }),
      (e.getScale = function (t, e) {
        return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale;
      }),
      (e.getImageWidth = function (t, n) {
        var r = e.getScale(t, n);
        return Math.floor((t + 2 * n.margin) * r);
      }),
      (e.qrToImageData = function (t, n, r) {
        for (
          var i = n.modules.size,
            o = n.modules.data,
            a = e.getScale(i, r),
            u = Math.floor((i + 2 * r.margin) * a),
            A = r.margin * a,
            s = [r.color.light, r.color.dark],
            c = 0;
          c < u;
          c++
        )
          for (var l = 0; l < u; l++) {
            var g = 4 * (c * u + l),
              h = r.color.light;
            if (c >= A && l >= A && c < u - A && l < u - A)
              h = s[o[Math.floor((c - A) / a) * i + Math.floor((l - A) / a)] ? 1 : 0];
            (t[g++] = h.r), (t[g++] = h.g), (t[g++] = h.b), (t[g] = h.a);
          }
      });
  },
  function (t, e, n) {
    "use strict";
    var r;
    !(function (i) {
      function o(t, e, n) {
        var r,
          i,
          o,
          a,
          h,
          f,
          p,
          d,
          m,
          w = 0,
          C = [],
          v = 0,
          y = !1,
          b = [],
          I = [],
          q = !1,
          E = !1,
          B = -1;
        if (((r = (n = n || {}).encoding || "UTF8"), (m = n.numRounds || 1) !== parseInt(m, 10) || 1 > m))
          throw Error("numRounds must a integer >= 1");
        if ("SHA-1" === t)
          (h = 512),
            (f = J),
            (p = L),
            (a = 160),
            (d = function (t) {
              return t.slice();
            });
        else if (0 === t.lastIndexOf("SHA-", 0))
          if (
            ((f = function (e, n) {
              return R(e, n, t);
            }),
            (p = function (e, n, r, i) {
              var o, a;
              if ("SHA-224" === t || "SHA-256" === t) (o = 15 + (((n + 65) >>> 9) << 4)), (a = 16);
              else {
                if ("SHA-384" !== t && "SHA-512" !== t) throw Error("Unexpected error in SHA-2 implementation");
                (o = 31 + (((n + 129) >>> 10) << 5)), (a = 32);
              }
              for (; e.length <= o; ) e.push(0);
              for (
                e[n >>> 5] |= 128 << (24 - (n % 32)),
                  n += r,
                  e[o] = 4294967295 & n,
                  e[o - 1] = (n / 4294967296) | 0,
                  r = e.length,
                  n = 0;
                n < r;
                n += a
              )
                i = R(e.slice(n, n + a), i, t);
              if ("SHA-224" === t) e = [i[0], i[1], i[2], i[3], i[4], i[5], i[6]];
              else if ("SHA-256" === t) e = i;
              else if ("SHA-384" === t)
                e = [i[0].a, i[0].b, i[1].a, i[1].b, i[2].a, i[2].b, i[3].a, i[3].b, i[4].a, i[4].b, i[5].a, i[5].b];
              else {
                if ("SHA-512" !== t) throw Error("Unexpected error in SHA-2 implementation");
                e = [
                  i[0].a,
                  i[0].b,
                  i[1].a,
                  i[1].b,
                  i[2].a,
                  i[2].b,
                  i[3].a,
                  i[3].b,
                  i[4].a,
                  i[4].b,
                  i[5].a,
                  i[5].b,
                  i[6].a,
                  i[6].b,
                  i[7].a,
                  i[7].b,
                ];
              }
              return e;
            }),
            (d = function (t) {
              return t.slice();
            }),
            "SHA-224" === t)
          )
            (h = 512), (a = 224);
          else if ("SHA-256" === t) (h = 512), (a = 256);
          else if ("SHA-384" === t) (h = 1024), (a = 384);
          else {
            if ("SHA-512" !== t) throw Error("Chosen SHA variant is not supported");
            (h = 1024), (a = 512);
          }
        else {
          if (0 !== t.lastIndexOf("SHA3-", 0) && 0 !== t.lastIndexOf("SHAKE", 0))
            throw Error("Chosen SHA variant is not supported");
          var S = 6;
          if (
            ((f = D),
            (d = function (t) {
              var e,
                n = [];
              for (e = 0; 5 > e; e += 1) n[e] = t[e].slice();
              return n;
            }),
            (B = 1),
            "SHA3-224" === t)
          )
            (h = 1152), (a = 224);
          else if ("SHA3-256" === t) (h = 1088), (a = 256);
          else if ("SHA3-384" === t) (h = 832), (a = 384);
          else if ("SHA3-512" === t) (h = 576), (a = 512);
          else if ("SHAKE128" === t) (h = 1344), (a = -1), (S = 31), (E = !0);
          else {
            if ("SHAKE256" !== t) throw Error("Chosen SHA variant is not supported");
            (h = 1088), (a = -1), (S = 31), (E = !0);
          }
          p = function (t, e, n, r, i) {
            var o,
              a = S,
              u = [],
              A = (n = h) >>> 5,
              s = 0,
              c = e >>> 5;
            for (o = 0; o < c && e >= n; o += A) (r = D(t.slice(o, o + A), r)), (e -= n);
            for (t = t.slice(o), e %= n; t.length < A; ) t.push(0);
            for (
              t[(o = e >>> 3) >> 2] ^= a << ((o % 4) * 8), t[A - 1] ^= 2147483648, r = D(t, r);
              32 * u.length < i && ((t = r[s % 5][(s / 5) | 0]), u.push(t.b), !(32 * u.length >= i));

            )
              u.push(t.a), 0 == (64 * (s += 1)) % n && D(null, r);
            return u;
          };
        }
        (o = g(e, r, B)),
          (i = W(t)),
          (this.setHMACKey = function (e, n, o) {
            var u;
            if (!0 === y) throw Error("HMAC key already set");
            if (!0 === q) throw Error("Cannot set HMAC key after calling update");
            if (!0 === E) throw Error("SHAKE is not supported for HMAC");
            if (
              ((e = (n = g(n, (r = (o || {}).encoding || "UTF8"), B)(e)).binLen),
              (n = n.value),
              (o = (u = h >>> 3) / 4 - 1),
              u < e / 8)
            ) {
              for (n = p(n, e, 0, W(t), a); n.length <= o; ) n.push(0);
              n[o] &= 4294967040;
            } else if (u > e / 8) {
              for (; n.length <= o; ) n.push(0);
              n[o] &= 4294967040;
            }
            for (e = 0; e <= o; e += 1) (b[e] = 909522486 ^ n[e]), (I[e] = 1549556828 ^ n[e]);
            (i = f(b, i)), (w = h), (y = !0);
          }),
          (this.update = function (t) {
            var e,
              n,
              r,
              a = 0,
              u = h >>> 5;
            for (t = (e = o(t, C, v)).binLen, n = e.value, e = t >>> 5, r = 0; r < e; r += u)
              a + h <= t && ((i = f(n.slice(r, r + u), i)), (a += h));
            (w += a), (C = n.slice(a >>> 5)), (v = t % h), (q = !0);
          }),
          (this.getHash = function (e, n) {
            var r, o, g, h;
            if (!0 === y) throw Error("Cannot call getHash after setting HMAC key");
            if (((g = l(n)), !0 === E)) {
              if (-1 === g.shakeLen) throw Error("shakeLen must be specified in options");
              a = g.shakeLen;
            }
            switch (e) {
              case "HEX":
                r = function (t) {
                  return u(t, a, B, g);
                };
                break;
              case "B64":
                r = function (t) {
                  return A(t, a, B, g);
                };
                break;
              case "BYTES":
                r = function (t) {
                  return s(t, a, B);
                };
                break;
              case "ARRAYBUFFER":
                try {
                  o = new ArrayBuffer(0);
                } catch (t) {
                  throw Error("ARRAYBUFFER not supported by this environment");
                }
                r = function (t) {
                  return c(t, a, B);
                };
                break;
              default:
                throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            for (h = p(C.slice(), v, w, d(i), a), o = 1; o < m; o += 1)
              !0 === E && 0 != a % 32 && (h[h.length - 1] &= 16777215 >>> (24 - (a % 32))), (h = p(h, a, 0, W(t), a));
            return r(h);
          }),
          (this.getHMAC = function (e, n) {
            var r, o, g, m;
            if (!1 === y) throw Error("Cannot call getHMAC without first setting HMAC key");
            switch (((g = l(n)), e)) {
              case "HEX":
                r = function (t) {
                  return u(t, a, B, g);
                };
                break;
              case "B64":
                r = function (t) {
                  return A(t, a, B, g);
                };
                break;
              case "BYTES":
                r = function (t) {
                  return s(t, a, B);
                };
                break;
              case "ARRAYBUFFER":
                try {
                  r = new ArrayBuffer(0);
                } catch (t) {
                  throw Error("ARRAYBUFFER not supported by this environment");
                }
                r = function (t) {
                  return c(t, a, B);
                };
                break;
              default:
                throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            return (o = p(C.slice(), v, w, d(i), a)), (m = f(I, W(t))), r((m = p(o, a, h, m, a)));
          });
      }
      function a(t, e) {
        (this.a = t), (this.b = e);
      }
      function u(t, e, n, r) {
        var i,
          o,
          a,
          u = "";
        for (e /= 8, a = -1 === n ? 3 : 0, i = 0; i < e; i += 1)
          (o = t[i >>> 2] >>> (8 * (a + (i % 4) * n))),
            (u += "0123456789abcdef".charAt((o >>> 4) & 15) + "0123456789abcdef".charAt(15 & o));
        return r.outputUpper ? u.toUpperCase() : u;
      }
      function A(t, e, n, r) {
        var i,
          o,
          a,
          u,
          A = "",
          s = e / 8;
        for (u = -1 === n ? 3 : 0, i = 0; i < s; i += 3)
          for (
            o = i + 1 < s ? t[(i + 1) >>> 2] : 0,
              a = i + 2 < s ? t[(i + 2) >>> 2] : 0,
              a =
                (((t[i >>> 2] >>> (8 * (u + (i % 4) * n))) & 255) << 16) |
                (((o >>> (8 * (u + ((i + 1) % 4) * n))) & 255) << 8) |
                ((a >>> (8 * (u + ((i + 2) % 4) * n))) & 255),
              o = 0;
            4 > o;
            o += 1
          )
            A +=
              8 * i + 6 * o <= e
                ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((a >>> (6 * (3 - o))) & 63)
                : r.b64Pad;
        return A;
      }
      function s(t, e, n) {
        var r,
          i,
          o,
          a = "";
        for (e /= 8, o = -1 === n ? 3 : 0, r = 0; r < e; r += 1)
          (i = (t[r >>> 2] >>> (8 * (o + (r % 4) * n))) & 255), (a += String.fromCharCode(i));
        return a;
      }
      function c(t, e, n) {
        e /= 8;
        var r,
          i,
          o,
          a = new ArrayBuffer(e);
        for (o = new Uint8Array(a), i = -1 === n ? 3 : 0, r = 0; r < e; r += 1)
          o[r] = (t[r >>> 2] >>> (8 * (i + (r % 4) * n))) & 255;
        return a;
      }
      function l(t) {
        var e = { outputUpper: !1, b64Pad: "=", shakeLen: -1 };
        if (
          ((t = t || {}),
          (e.outputUpper = t.outputUpper || !1),
          !0 === t.hasOwnProperty("b64Pad") && (e.b64Pad = t.b64Pad),
          !0 === t.hasOwnProperty("shakeLen"))
        ) {
          if (0 != t.shakeLen % 8) throw Error("shakeLen must be a multiple of 8");
          e.shakeLen = t.shakeLen;
        }
        if ("boolean" != typeof e.outputUpper) throw Error("Invalid outputUpper formatting option");
        if ("string" != typeof e.b64Pad) throw Error("Invalid b64Pad formatting option");
        return e;
      }
      function g(t, e, n) {
        switch (e) {
          case "UTF8":
          case "UTF16BE":
          case "UTF16LE":
            break;
          default:
            throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
        }
        switch (t) {
          case "HEX":
            t = function (t, e, r) {
              var i,
                o,
                a,
                u,
                A,
                s,
                c = t.length;
              if (0 != c % 2) throw Error("String of HEX type must be in byte increments");
              for (e = e || [0], A = (r = r || 0) >>> 3, s = -1 === n ? 3 : 0, i = 0; i < c; i += 2) {
                if (((o = parseInt(t.substr(i, 2), 16)), isNaN(o)))
                  throw Error("String of HEX type contains invalid characters");
                for (a = (u = (i >>> 1) + A) >>> 2; e.length <= a; ) e.push(0);
                e[a] |= o << (8 * (s + (u % 4) * n));
              }
              return { value: e, binLen: 4 * c + r };
            };
            break;
          case "TEXT":
            t = function (t, r, i) {
              var o,
                a,
                u,
                A,
                s,
                c,
                l,
                g,
                h = 0;
              if (((r = r || [0]), (s = (i = i || 0) >>> 3), "UTF8" === e))
                for (g = -1 === n ? 3 : 0, u = 0; u < t.length; u += 1)
                  for (
                    a = [],
                      128 > (o = t.charCodeAt(u))
                        ? a.push(o)
                        : 2048 > o
                        ? (a.push(192 | (o >>> 6)), a.push(128 | (63 & o)))
                        : 55296 > o || 57344 <= o
                        ? a.push(224 | (o >>> 12), 128 | ((o >>> 6) & 63), 128 | (63 & o))
                        : ((u += 1),
                          (o = 65536 + (((1023 & o) << 10) | (1023 & t.charCodeAt(u)))),
                          a.push(240 | (o >>> 18), 128 | ((o >>> 12) & 63), 128 | ((o >>> 6) & 63), 128 | (63 & o))),
                      A = 0;
                    A < a.length;
                    A += 1
                  ) {
                    for (c = (l = h + s) >>> 2; r.length <= c; ) r.push(0);
                    (r[c] |= a[A] << (8 * (g + (l % 4) * n))), (h += 1);
                  }
              else if ("UTF16BE" === e || "UTF16LE" === e)
                for (
                  g = -1 === n ? 2 : 0, a = ("UTF16LE" === e && 1 !== n) || ("UTF16LE" !== e && 1 === n), u = 0;
                  u < t.length;
                  u += 1
                ) {
                  for (
                    o = t.charCodeAt(u), !0 === a && (o = ((A = 255 & o) << 8) | (o >>> 8)), c = (l = h + s) >>> 2;
                    r.length <= c;

                  )
                    r.push(0);
                  (r[c] |= o << (8 * (g + (l % 4) * n))), (h += 2);
                }
              return { value: r, binLen: 8 * h + i };
            };
            break;
          case "B64":
            t = function (t, e, r) {
              var i,
                o,
                a,
                u,
                A,
                s,
                c,
                l,
                g = 0;
              if (-1 === t.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
              if (((o = t.indexOf("=")), (t = t.replace(/\=/g, "")), -1 !== o && o < t.length))
                throw Error("Invalid '=' found in base-64 string");
              for (e = e || [0], s = (r = r || 0) >>> 3, l = -1 === n ? 3 : 0, o = 0; o < t.length; o += 4) {
                for (A = t.substr(o, 4), a = u = 0; a < A.length; a += 1)
                  u |=
                    (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(A[a])) <<
                    (18 - 6 * a);
                for (a = 0; a < A.length - 1; a += 1) {
                  for (i = (c = g + s) >>> 2; e.length <= i; ) e.push(0);
                  (e[i] |= ((u >>> (16 - 8 * a)) & 255) << (8 * (l + (c % 4) * n))), (g += 1);
                }
              }
              return { value: e, binLen: 8 * g + r };
            };
            break;
          case "BYTES":
            t = function (t, e, r) {
              var i, o, a, u, A, s;
              for (e = e || [0], a = (r = r || 0) >>> 3, s = -1 === n ? 3 : 0, o = 0; o < t.length; o += 1)
                (i = t.charCodeAt(o)),
                  (u = (A = o + a) >>> 2),
                  e.length <= u && e.push(0),
                  (e[u] |= i << (8 * (s + (A % 4) * n)));
              return { value: e, binLen: 8 * t.length + r };
            };
            break;
          case "ARRAYBUFFER":
            try {
              t = new ArrayBuffer(0);
            } catch (t) {
              throw Error("ARRAYBUFFER not supported by this environment");
            }
            t = function (t, e, r) {
              var i, o, a, u, A, s;
              for (
                e = e || [0], o = (r = r || 0) >>> 3, A = -1 === n ? 3 : 0, s = new Uint8Array(t), i = 0;
                i < t.byteLength;
                i += 1
              )
                (a = (u = i + o) >>> 2), e.length <= a && e.push(0), (e[a] |= s[i] << (8 * (A + (u % 4) * n)));
              return { value: e, binLen: 8 * t.byteLength + r };
            };
            break;
          default:
            throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
        }
        return t;
      }
      function h(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function f(t, e) {
        return 32 < e
          ? ((e -= 32), new a((t.b << e) | (t.a >>> (32 - e)), (t.a << e) | (t.b >>> (32 - e))))
          : 0 !== e
          ? new a((t.a << e) | (t.b >>> (32 - e)), (t.b << e) | (t.a >>> (32 - e)))
          : t;
      }
      function p(t, e) {
        return (t >>> e) | (t << (32 - e));
      }
      function d(t, e) {
        var n = null;
        n = new a(t.a, t.b);
        return 32 >= e
          ? new a((n.a >>> e) | ((n.b << (32 - e)) & 4294967295), (n.b >>> e) | ((n.a << (32 - e)) & 4294967295))
          : new a(
              (n.b >>> (e - 32)) | ((n.a << (64 - e)) & 4294967295),
              (n.a >>> (e - 32)) | ((n.b << (64 - e)) & 4294967295)
            );
      }
      function m(t, e) {
        return 32 >= e ? new a(t.a >>> e, (t.b >>> e) | ((t.a << (32 - e)) & 4294967295)) : new a(0, t.a >>> (e - 32));
      }
      function w(t, e, n) {
        return (t & e) ^ (~t & n);
      }
      function C(t, e, n) {
        return new a((t.a & e.a) ^ (~t.a & n.a), (t.b & e.b) ^ (~t.b & n.b));
      }
      function v(t, e, n) {
        return (t & e) ^ (t & n) ^ (e & n);
      }
      function y(t, e, n) {
        return new a((t.a & e.a) ^ (t.a & n.a) ^ (e.a & n.a), (t.b & e.b) ^ (t.b & n.b) ^ (e.b & n.b));
      }
      function b(t) {
        return p(t, 2) ^ p(t, 13) ^ p(t, 22);
      }
      function I(t) {
        var e = d(t, 28),
          n = d(t, 34);
        return (t = d(t, 39)), new a(e.a ^ n.a ^ t.a, e.b ^ n.b ^ t.b);
      }
      function q(t) {
        return p(t, 6) ^ p(t, 11) ^ p(t, 25);
      }
      function E(t) {
        var e = d(t, 14),
          n = d(t, 18);
        return (t = d(t, 41)), new a(e.a ^ n.a ^ t.a, e.b ^ n.b ^ t.b);
      }
      function B(t) {
        return p(t, 7) ^ p(t, 18) ^ (t >>> 3);
      }
      function S(t) {
        var e = d(t, 1),
          n = d(t, 8);
        return (t = m(t, 7)), new a(e.a ^ n.a ^ t.a, e.b ^ n.b ^ t.b);
      }
      function M(t) {
        return p(t, 17) ^ p(t, 19) ^ (t >>> 10);
      }
      function K(t) {
        var e = d(t, 19),
          n = d(t, 61);
        return (t = m(t, 6)), new a(e.a ^ n.a ^ t.a, e.b ^ n.b ^ t.b);
      }
      function Y(t, e) {
        var n = (65535 & t) + (65535 & e);
        return ((((t >>> 16) + (e >>> 16) + (n >>> 16)) & 65535) << 16) | (65535 & n);
      }
      function Q(t, e, n, r) {
        var i = (65535 & t) + (65535 & e) + (65535 & n) + (65535 & r);
        return ((((t >>> 16) + (e >>> 16) + (n >>> 16) + (r >>> 16) + (i >>> 16)) & 65535) << 16) | (65535 & i);
      }
      function k(t, e, n, r, i) {
        var o = (65535 & t) + (65535 & e) + (65535 & n) + (65535 & r) + (65535 & i);
        return (
          ((((t >>> 16) + (e >>> 16) + (n >>> 16) + (r >>> 16) + (i >>> 16) + (o >>> 16)) & 65535) << 16) | (65535 & o)
        );
      }
      function G(t, e) {
        var n, r, i;
        return (
          (n = (65535 & t.b) + (65535 & e.b)),
          (i = ((65535 & (r = (t.b >>> 16) + (e.b >>> 16) + (n >>> 16))) << 16) | (65535 & n)),
          (n = (65535 & t.a) + (65535 & e.a) + (r >>> 16)),
          new a(((65535 & (r = (t.a >>> 16) + (e.a >>> 16) + (n >>> 16))) << 16) | (65535 & n), i)
        );
      }
      function F(t, e, n, r) {
        var i, o, u;
        return (
          (i = (65535 & t.b) + (65535 & e.b) + (65535 & n.b) + (65535 & r.b)),
          (u =
            ((65535 & (o = (t.b >>> 16) + (e.b >>> 16) + (n.b >>> 16) + (r.b >>> 16) + (i >>> 16))) << 16) |
            (65535 & i)),
          (i = (65535 & t.a) + (65535 & e.a) + (65535 & n.a) + (65535 & r.a) + (o >>> 16)),
          new a(
            ((65535 & (o = (t.a >>> 16) + (e.a >>> 16) + (n.a >>> 16) + (r.a >>> 16) + (i >>> 16))) << 16) |
              (65535 & i),
            u
          )
        );
      }
      function Z(t, e, n, r, i) {
        var o, u, A;
        return (
          (o = (65535 & t.b) + (65535 & e.b) + (65535 & n.b) + (65535 & r.b) + (65535 & i.b)),
          (A =
            ((65535 & (u = (t.b >>> 16) + (e.b >>> 16) + (n.b >>> 16) + (r.b >>> 16) + (i.b >>> 16) + (o >>> 16))) <<
              16) |
            (65535 & o)),
          (o = (65535 & t.a) + (65535 & e.a) + (65535 & n.a) + (65535 & r.a) + (65535 & i.a) + (u >>> 16)),
          new a(
            ((65535 & (u = (t.a >>> 16) + (e.a >>> 16) + (n.a >>> 16) + (r.a >>> 16) + (i.a >>> 16) + (o >>> 16))) <<
              16) |
              (65535 & o),
            A
          )
        );
      }
      function O(t, e) {
        return new a(t.a ^ e.a, t.b ^ e.b);
      }
      function W(t) {
        var e,
          n = [];
        if ("SHA-1" === t) n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        else if (0 === t.lastIndexOf("SHA-", 0))
          switch (
            ((n = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]),
            (e = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
            t)
          ) {
            case "SHA-224":
              break;
            case "SHA-256":
              n = e;
              break;
            case "SHA-384":
              n = [
                new a(3418070365, n[0]),
                new a(1654270250, n[1]),
                new a(2438529370, n[2]),
                new a(355462360, n[3]),
                new a(1731405415, n[4]),
                new a(41048885895, n[5]),
                new a(3675008525, n[6]),
                new a(1203062813, n[7]),
              ];
              break;
            case "SHA-512":
              n = [
                new a(e[0], 4089235720),
                new a(e[1], 2227873595),
                new a(e[2], 4271175723),
                new a(e[3], 1595750129),
                new a(e[4], 2917565137),
                new a(e[5], 725511199),
                new a(e[6], 4215389547),
                new a(e[7], 327033209),
              ];
              break;
            default:
              throw Error("Unknown SHA variant");
          }
        else {
          if (0 !== t.lastIndexOf("SHA3-", 0) && 0 !== t.lastIndexOf("SHAKE", 0))
            throw Error("No SHA variants supported");
          for (t = 0; 5 > t; t += 1) n[t] = [new a(0, 0), new a(0, 0), new a(0, 0), new a(0, 0), new a(0, 0)];
        }
        return n;
      }
      function J(t, e) {
        var n,
          r,
          i,
          o,
          a,
          u,
          A,
          s = [];
        for (n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], A = 0; 80 > A; A += 1)
          (s[A] = 16 > A ? t[A] : h(s[A - 3] ^ s[A - 8] ^ s[A - 14] ^ s[A - 16], 1)),
            (u =
              20 > A
                ? k(h(n, 5), (r & i) ^ (~r & o), a, 1518500249, s[A])
                : 40 > A
                ? k(h(n, 5), r ^ i ^ o, a, 1859775393, s[A])
                : 60 > A
                ? k(h(n, 5), v(r, i, o), a, 2400959708, s[A])
                : k(h(n, 5), r ^ i ^ o, a, 3395469782, s[A])),
            (a = o),
            (o = i),
            (i = h(r, 30)),
            (r = n),
            (n = u);
        return (
          (e[0] = Y(n, e[0])), (e[1] = Y(r, e[1])), (e[2] = Y(i, e[2])), (e[3] = Y(o, e[3])), (e[4] = Y(a, e[4])), e
        );
      }
      function L(t, e, n, r) {
        var i;
        for (i = 15 + (((e + 65) >>> 9) << 4); t.length <= i; ) t.push(0);
        for (
          t[e >>> 5] |= 128 << (24 - (e % 32)),
            e += n,
            t[i] = 4294967295 & e,
            t[i - 1] = (e / 4294967296) | 0,
            e = t.length,
            i = 0;
          i < e;
          i += 16
        )
          r = J(t.slice(i, i + 16), r);
        return r;
      }
      function R(t, e, n) {
        var r,
          i,
          o,
          u,
          A,
          s,
          c,
          l,
          g,
          h,
          f,
          p,
          d,
          m,
          O,
          W,
          J,
          L,
          R,
          D,
          V,
          T,
          z,
          H = [];
        if ("SHA-224" === n || "SHA-256" === n)
          (h = 64),
            (p = 1),
            (T = Number),
            (d = Y),
            (m = Q),
            (O = k),
            (W = B),
            (J = M),
            (L = b),
            (R = q),
            (V = v),
            (D = w),
            (z = j);
        else {
          if ("SHA-384" !== n && "SHA-512" !== n) throw Error("Unexpected error in SHA-2 implementation");
          (h = 80),
            (p = 2),
            (T = a),
            (d = G),
            (m = F),
            (O = Z),
            (W = S),
            (J = K),
            (L = I),
            (R = E),
            (V = y),
            (D = C),
            (z = U);
        }
        for (n = e[0], r = e[1], i = e[2], o = e[3], u = e[4], A = e[5], s = e[6], c = e[7], f = 0; f < h; f += 1)
          16 > f
            ? ((g = f * p),
              (l = t.length <= g ? 0 : t[g]),
              (g = t.length <= g + 1 ? 0 : t[g + 1]),
              (H[f] = new T(l, g)))
            : (H[f] = m(J(H[f - 2]), H[f - 7], W(H[f - 15]), H[f - 16])),
            (l = O(c, R(u), D(u, A, s), z[f], H[f])),
            (g = d(L(n), V(n, r, i))),
            (c = s),
            (s = A),
            (A = u),
            (u = d(o, l)),
            (o = i),
            (i = r),
            (r = n),
            (n = d(l, g));
        return (
          (e[0] = d(n, e[0])),
          (e[1] = d(r, e[1])),
          (e[2] = d(i, e[2])),
          (e[3] = d(o, e[3])),
          (e[4] = d(u, e[4])),
          (e[5] = d(A, e[5])),
          (e[6] = d(s, e[6])),
          (e[7] = d(c, e[7])),
          e
        );
      }
      function D(t, e) {
        var n,
          r,
          i,
          o,
          u = [],
          A = [];
        if (null !== t)
          for (r = 0; r < t.length; r += 2)
            e[(r >>> 1) % 5][((r >>> 1) / 5) | 0] = O(e[(r >>> 1) % 5][((r >>> 1) / 5) | 0], new a(t[r + 1], t[r]));
        for (n = 0; 24 > n; n += 1) {
          for (o = W("SHA3-"), r = 0; 5 > r; r += 1) {
            i = e[r][0];
            var s = e[r][1],
              c = e[r][2],
              l = e[r][3],
              g = e[r][4];
            u[r] = new a(i.a ^ s.a ^ c.a ^ l.a ^ g.a, i.b ^ s.b ^ c.b ^ l.b ^ g.b);
          }
          for (r = 0; 5 > r; r += 1) A[r] = O(u[(r + 4) % 5], f(u[(r + 1) % 5], 1));
          for (r = 0; 5 > r; r += 1) for (i = 0; 5 > i; i += 1) e[r][i] = O(e[r][i], A[r]);
          for (r = 0; 5 > r; r += 1) for (i = 0; 5 > i; i += 1) o[i][(2 * r + 3 * i) % 5] = f(e[r][i], V[r][i]);
          for (r = 0; 5 > r; r += 1)
            for (i = 0; 5 > i; i += 1)
              e[r][i] = O(
                o[r][i],
                new a(~o[(r + 1) % 5][i].a & o[(r + 2) % 5][i].a, ~o[(r + 1) % 5][i].b & o[(r + 2) % 5][i].b)
              );
          e[0][0] = O(e[0][0], T[n]);
        }
        return e;
      }
      var j, U, V, T;
      (U = [
        new a(
          (j = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
            310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
            264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
            3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
            1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
            3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
            1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ])[0],
          3609767458
        ),
        new a(j[1], 602891725),
        new a(j[2], 3964484399),
        new a(j[3], 2173295548),
        new a(j[4], 4081628472),
        new a(j[5], 3053834265),
        new a(j[6], 2937671579),
        new a(j[7], 3664609560),
        new a(j[8], 2734883394),
        new a(j[9], 1164996542),
        new a(j[10], 1323610764),
        new a(j[11], 3590304994),
        new a(j[12], 4068182383),
        new a(j[13], 991336113),
        new a(j[14], 633803317),
        new a(j[15], 3479774868),
        new a(j[16], 2666613458),
        new a(j[17], 944711139),
        new a(j[18], 2341262773),
        new a(j[19], 2007800933),
        new a(j[20], 1495990901),
        new a(j[21], 1856431235),
        new a(j[22], 3175218132),
        new a(j[23], 2198950837),
        new a(j[24], 3999719339),
        new a(j[25], 766784016),
        new a(j[26], 2566594879),
        new a(j[27], 3203337956),
        new a(j[28], 1034457026),
        new a(j[29], 2466948901),
        new a(j[30], 3758326383),
        new a(j[31], 168717936),
        new a(j[32], 1188179964),
        new a(j[33], 1546045734),
        new a(j[34], 1522805485),
        new a(j[35], 2643833823),
        new a(j[36], 2343527390),
        new a(j[37], 1014477480),
        new a(j[38], 1206759142),
        new a(j[39], 344077627),
        new a(j[40], 1290863460),
        new a(j[41], 3158454273),
        new a(j[42], 3505952657),
        new a(j[43], 106217008),
        new a(j[44], 3606008344),
        new a(j[45], 1432725776),
        new a(j[46], 1467031594),
        new a(j[47], 851169720),
        new a(j[48], 3100823752),
        new a(j[49], 1363258195),
        new a(j[50], 3750685593),
        new a(j[51], 3785050280),
        new a(j[52], 3318307427),
        new a(j[53], 3812723403),
        new a(j[54], 2003034995),
        new a(j[55], 3602036899),
        new a(j[56], 1575990012),
        new a(j[57], 1125592928),
        new a(j[58], 2716904306),
        new a(j[59], 442776044),
        new a(j[60], 593698344),
        new a(j[61], 3733110249),
        new a(j[62], 2999351573),
        new a(j[63], 3815920427),
        new a(3391569614, 3928383900),
        new a(3515267271, 566280711),
        new a(3940187606, 3454069534),
        new a(4118630271, 4000239992),
        new a(116418474, 1914138554),
        new a(174292421, 2731055270),
        new a(289380356, 3203993006),
        new a(460393269, 320620315),
        new a(685471733, 587496836),
        new a(852142971, 1086792851),
        new a(1017036298, 365543100),
        new a(1126000580, 2618297676),
        new a(1288033470, 3409855158),
        new a(1501505948, 4234509866),
        new a(1607167915, 987167468),
        new a(1816402316, 1246189591),
      ]),
        (T = [
          new a(0, 1),
          new a(0, 32898),
          new a(2147483648, 32906),
          new a(2147483648, 2147516416),
          new a(0, 32907),
          new a(0, 2147483649),
          new a(2147483648, 2147516545),
          new a(2147483648, 32777),
          new a(0, 138),
          new a(0, 136),
          new a(0, 2147516425),
          new a(0, 2147483658),
          new a(0, 2147516555),
          new a(2147483648, 139),
          new a(2147483648, 32905),
          new a(2147483648, 32771),
          new a(2147483648, 32770),
          new a(2147483648, 128),
          new a(0, 32778),
          new a(2147483648, 2147483658),
          new a(2147483648, 2147516545),
          new a(2147483648, 32896),
          new a(0, 2147483649),
          new a(2147483648, 2147516424),
        ]),
        (V = [
          [0, 36, 3, 41, 18],
          [1, 44, 10, 45, 2],
          [62, 6, 43, 15, 61],
          [28, 55, 25, 21, 56],
          [27, 20, 39, 8, 14],
        ]),
        void 0 ===
          (r = function () {
            return o;
          }.call(e, n, e, t)) || (t.exports = r);
    })();
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return m;
      });
      var r = n(4),
        i = n(1),
        o = n(0),
        a = n(24),
        u = n.n(a);
      function A(t) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              c(t, e, n[e]);
            });
        }
        return t;
      }
      function c(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        );
      }
      function l(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function g(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function h(t, e) {
        return !e || ("object" !== A(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            })(t)
          : e;
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function p(t, e) {
        return (p =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var d = "data:image/svg+xml;base64,".concat(t.btoa(u.a)),
        m = (function (t) {
          function e() {
            var t,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l(this, e);
            var r = { idPrefix: "pseerrorview", errorText: "Reload ticket", iconURL: d },
              i = s({}, r, n);
            return (
              ((t = h(this, f(e).call(this, i)))._useNewSpec = n.useNewSpec),
              t.setSize({ containerWidth: n.w, containerHeight: n.h }),
              (t._errorMessage = w(i.errorText) ? i.errorText : "Reload ticket"),
              (t._iconURL = C(i.iconURL) ? i.iconURL : d),
              (t._icon.src = t._iconURL),
              t
            );
          }
          var n, r, a;
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && p(t, e);
            })(e, t),
            (n = e),
            (r = [
              {
                key: "setSize",
                value: function (t) {
                  var e = t.containerWidth,
                    n = t.containerHeight,
                    r = e * i.d.boundsPaddingPercentage,
                    a = Math.floor(e * (i.d.minWidth / i.a.minWidth)) - 2 * r,
                    u = Math.floor(n * (i.d.minHeight / i.a.minHeight)) - 2 * r;
                  this._setContainerSize(a, u, "", "".concat(r, "px")),
                    Object(o.b)(this.el, {
                      top: "50%",
                      left: "50%",
                      transform: "translateY(-50%) translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      color: "#7A7A7A",
                      fontSize: "".concat(n * i.d.fontPercentage, "px"),
                      fontFamily:
                        'Averta, -apple-system, BlinkMacSystemFont, "Roboto", "Fira Sans", "Helvetica Neue", sans-serif',
                    }),
                    (this._icon = Object(o.c)(
                      "img",
                      { src: this._iconURL, width: i.d.iconWidth, height: i.d.iconHeight },
                      { margin: "auto auto ".concat(e * i.d.internalPaddingPercentage, "px auto") }
                    )),
                    this.el.appendChild(this._icon);
                  var A = Object(o.c)("p", null, {
                    margin: "0px auto auto auto",
                    textAlign: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  });
                  this._useNewSpec &&
                    (Object(o.b)(this.el, { flexDirection: "row", fontSize: "12px", lineHeight: "16px" }),
                    Object(o.b)(this._icon, { flex: "0 0 auto", margin: "auto", marginRight: "7px" }),
                    Object(o.b)(A, {
                      flex: "0 1 auto",
                      textAlign: "left",
                      verticalAlign: "middle",
                      margin: "auto",
                      marginLeft: "7px",
                    })),
                    this.el.appendChild(A),
                    (this._textEl = A);
                },
              },
              {
                key: "render",
                value: function () {
                  this._textEl.innerText = this._errorMessage;
                },
              },
            ]) && g(n.prototype, r),
            a && g(n, a),
            e
          );
        })(r.a),
        w = function (t) {
          return "string" == typeof t && t.length <= 60;
        },
        C = function (t) {
          return "string" == typeof t && "" !== t;
        };
    }.call(this, n(3)));
  },
  function (t, e) {
    t.exports =
      '<svg viewBox="0 0 36 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Icons/Feedback/Alert/Alert-Filled-36</title><desc>Created with Sketch.</desc><g id="Error-States" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Barcode-error-state---example-1" transform="translate(-170.000000, -384.000000)"><g id="Error" transform="translate(87.000000, 353.000000)"><g id="Icons/Feedback/Alert/Alert-Filled-36" transform="translate(83.000000, 29.000000)"><path d="M1.10716259,31.5039407 L17.1316203,3.45516883 C17.4055863,2.97562625 18.0164257,2.80897351 18.4959683,3.0829395 C18.6510617,3.17154546 18.7795916,3.30007539 18.8681976,3.45516883 L34.8926553,31.5039407 C35.1666213,31.9834833 34.9999685,32.5943226 34.520426,32.8682886 C34.3693473,32.9546009 34.1983625,33 34.0243667,33 L1.97545123,33 C1.42316648,33 0.975451229,32.5522847 0.975451229,32 C0.975451229,31.8260042 1.02085033,31.6550193 1.10716259,31.5039407 Z" id="alert" stroke-opacity="0.65" stroke="#262626" fill="#FFFFFF" stroke-linecap="round"></path><ellipse id="Oval-2" fill-opacity="0.65" fill="#262626" cx="17.9999089" cy="28.340301" rx="1.56595195" ry="1.55323299"></ellipse><path d="M17.9999089,24.7160907 L17.9999089,24.7160907 C18.8647603,24.7160907 19.5658609,24.0149901 19.5658609,23.1501388 L19.5658609,12.8206901 C19.5658609,11.9558387 18.8647603,11.2547381 17.9999089,11.2547381 L17.9999089,11.2547381 C17.1350576,11.2547381 16.433957,11.9558387 16.433957,12.8206901 L16.433957,23.1501388 C16.433957,24.0149901 17.1350576,24.7160907 17.9999089,24.7160907 Z" id="exclamation-copy" fill-opacity="0.65" fill="#262626"></path></g></g></g></g></svg>';
  },
  function (t, e, n) {
    var r = n(32),
      i = n(33),
      o = n(54),
      a = n(55);
    function u(t, e, n, o, a) {
      var u = [].slice.call(arguments, 1),
        A = u.length,
        s = "function" == typeof u[A - 1];
      if (!s && !r()) throw new Error("Callback required as last argument");
      if (!s) {
        if (A < 1) throw new Error("Too few arguments provided");
        return (
          1 === A ? ((n = e), (e = o = void 0)) : 2 !== A || e.getContext || ((o = n), (n = e), (e = void 0)),
          new Promise(function (r, a) {
            try {
              var u = i.create(n, o);
              r(t(u, e, o));
            } catch (t) {
              a(t);
            }
          })
        );
      }
      if (A < 2) throw new Error("Too few arguments provided");
      2 === A
        ? ((a = n), (n = e), (e = o = void 0))
        : 3 === A &&
          (e.getContext && void 0 === a ? ((a = o), (o = void 0)) : ((a = o), (o = n), (n = e), (e = void 0)));
      try {
        var c = i.create(n, o);
        a(null, t(c, e, o));
      } catch (t) {
        a(t);
      }
    }
    (e.create = i.create),
      (e.toCanvas = u.bind(null, o.render)),
      (e.toDataURL = u.bind(null, o.renderToDataURL)),
      (e.toString = u.bind(null, function (t, e, n) {
        return a.render(t, n);
      }));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return d;
      });
      var r = n(4),
        i = n(27),
        o = n(28),
        a = n(1),
        u = n(0);
      function A(t) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              c(t, e, n[e]);
            });
        }
        return t;
      }
      function c(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        );
      }
      function l(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function g(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function h(t, e) {
        return !e || ("object" !== A(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            })(t)
          : e;
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function p(t, e) {
        return (p =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var d = (function (e) {
        function n() {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          l(this, n), (t = h(this, f(n).call(this, s({ idPrefix: "psetokenview" }, e))));
          var r = "#fff",
            i = "4px";
          return (
            Object(u.b)(t.el, { fontSize: "0px", lineHeight: "0px", backgroundColor: r, borderRadius: i }),
            (t._canvasEl = Object(u.c)("canvas", { id: t.generateElementId("canvas") }, { boxSizing: "border-box" })),
            t.el.appendChild(t._canvasEl),
            (t._scale = -1),
            (t._subtitleEl = Object(u.c)(
              "p",
              { id: t.generateElementId("subtitle") },
              {
                margin: "0px",
                padding: "0px",
                backgroundColor: r,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: e.useBrandingColorForSubtitle ? e.color : "#262626",
              }
            )),
            (t.subtitle = e.subtitle),
            t.setSize({ containerWidth: e.w, containerHeight: e.h }),
            t
          );
        }
        var r, A, c;
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && p(t, e);
          })(n, e),
          (r = n),
          (A = [
            {
              key: "setSize",
              value: function (e) {
                var n = e.containerWidth,
                  r = e.containerHeight,
                  i = n,
                  A = Math.floor(i * a.e.paddingPercentage * 0.5),
                  s = 2 * A,
                  c = i - s,
                  l = c * a.e.ratio,
                  g = t.devicePixelRatio || 1;
                this._setCanvasSize(this._canvasEl, c * g, l * g, "".concat(A, "px")),
                  Object(u.b)(this._canvasEl, { width: "".concat(c, "px"), height: "".concat(l, "px") });
                var h = 0;
                this.subtitle &&
                  ((h = 38),
                  Object(u.b)(this._subtitleEl, {
                    width: "100%",
                    marginTop: "".concat(12 - 0.5 * A, "px"),
                    height: "".concat(16, "px"),
                    fontSize: "".concat(14, "px"),
                    lineHeight: "".concat(14, "px"),
                  }));
                var f = l + s + h,
                  p = Math.floor(0.5 * (r - f));
                this._setContainerSize(i, f, "".concat(p, "px auto"));
                var d = new o.a(this._color, i, l + s, A);
                this._containerEl.appendChild(d.el), d.playAnimation();
              },
            },
            {
              key: "render",
              value: function (t) {
                (this._canvasEl.style.transform = "scaleY(".concat((this._scale = -this._scale), ")")),
                  i.a(this._canvasEl.getContext("2d"), t);
              },
            },
            {
              key: "subtitle",
              get: function () {
                return this._subtitle;
              },
              set: function (t) {
                (this._subtitle = t),
                  t && "string" == typeof t
                    ? ((this._subtitleEl.innerText = t), this.el.appendChild(this._subtitleEl))
                    : this._subtitleEl.remove();
              },
            },
          ]) && g(r.prototype, A),
          c && g(r, c),
          n
        );
      })(r.a);
    }.call(this, n(3)));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n(16),
        i = n(0);
      function o(t) {
        r.a.init(t);
        var e = r.a.getBarcodeArray();
        return { columnLength: e.num_cols, rowLength: e.num_rows, dataMatrix: e.bcode };
      }
      function a(e, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          u = o(n),
          A = t.devicePixelRadius || 1,
          s = Object(i.c)("canvas", { width: r * u.columnLength * A, height: r * u.rowLength * A }),
          c = s.getContext("2d");
        c.clearRect(0, 0, c.canvas.width, c.canvas.height);
        for (var l = r * a, g = 0, h = 0; h < u.rowLength; ++h) {
          for (var f = 0, p = 0; p < u.columnLength; ++p)
            "1" === u.dataMatrix[h][p] && c.fillRect(f, g, r, l), (f += r);
          g += l;
        }
        var d = new window.Image();
        (d.onload = function () {
          e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.drawImage(this, 0, 0, e.canvas.width, e.canvas.height);
        }),
          (d.src = s.toDataURL());
      }
    }.call(this, n(3)));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return g;
    });
    var r = n(12),
      i = n.n(r),
      o = n(0);
    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })
          )),
          r.forEach(function (e) {
            u(t, e, n[e]);
          });
      }
      return t;
    }
    function u(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      );
    }
    function A(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var s = new WeakMap(),
      c = new WeakMap(),
      l = new WeakMap(),
      g = (function () {
        function t(e, n, r, u) {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var A = { position: "absolute", display: "inline-block" },
            g = Object(o.c)(
              "div",
              null,
              a(
                {
                  backgroundColor: e,
                  width: "".concat(0.5 * u, "px"),
                  height: "".concat(r - u, "px"),
                  left: "2px",
                  top: "".concat(0.5 * u, "px"),
                },
                A
              )
            ),
            h = r - 2 * u,
            f = Object(o.c)(
              "div",
              null,
              a(
                {
                  backgroundColor: e,
                  opacity: 0.5,
                  width: "".concat(u, "px"),
                  height: "".concat(h, "px"),
                  left: "0px",
                  top: "".concat(u, "px"),
                },
                A
              )
            ),
            p = Object(o.c)(
              "div",
              null,
              a({ width: "".concat(n, "px"), height: "".concat(r, "px"), top: "0px", left: "0px" }, A),
              [g, f]
            );
          s.set(this, p),
            c.set(this, e),
            l.set(
              this,
              (function (t, e, n) {
                var r = "-=".concat(1400),
                  o = i.a.timeline({ loop: !0, autoplay: !1, easing: [0.42, 0, 0.58, 1], duration: 1500 });
                return (
                  o.add({ targets: t, translateX: n - parseInt(t.style.width) - 2 * parseInt(t.style.left) }),
                  o.add({ targets: e, translateX: n - parseInt(e.style.width), offset: r }),
                  o.add({ targets: t, translateX: 0 }),
                  o.add({ targets: e, translateX: 0, offset: r }),
                  o
                );
              })(g, f, n)
            );
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "pauseAnimation",
              value: function () {
                l.get(this).pause();
              },
            },
            {
              key: "playAnimation",
              value: function () {
                l.get(this).play();
              },
            },
            {
              key: "el",
              get: function () {
                return s.get(this);
              },
            },
            {
              key: "color",
              get: function () {
                return c.get(this);
              },
              set: function (t) {
                c.set(this, t),
                  s.get(this).childNodes.forEach(function (e) {
                    e.style.backgroundColor = t;
                  });
              },
            },
          ]) && A(e.prototype, n),
          r && A(e, r),
          t
        );
      })();
  },
  function (t, e) {
    t.exports =
      "data:image/gif;base64,R0lGODlhiALGAMQVAPr6+vb29vj4+Pv7+/7+/vf39/z8/P39/fn5+fPz8+7u7vDw8Ozs7PLy8u/v7/T09PHx8e3t7fX19evr6////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkE5QTkwNzMyMTAwMTFFOUJFNTZGQ0FFRkY2M0VENTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkE5QTkwNzQyMTAwMTFFOUJFNTZGQ0FFRkY2M0VENTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQTlBOTA3MTIxMDAxMUU5QkU1NkZDQUVGRjYzRUQ1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQTlBOTA3MjIxMDAxMUU5QkU1NkZDQUVGRjYzRUQ1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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AQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgAh+QQFAgAVACwAAAAAAQABAAAFA2AVAgA7";
  },
  function (t, e, n) {
    "use strict";
    var r = n(22),
      i = n.n(r),
      o = (n(10), n(2));
    function a(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function u(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var A = (function () {
      function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "SHA-1";
        a(this, t), (this.secret = e), (this.digits = n), (this.digest = r);
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: "generate_otp",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = new i.a(this.digest, "BYTES"),
                r = o.a.byte_secret(this.secret);
              n.setHMACKey(r, "BYTES");
              var a = o.a.int_to_bytestring(t);
              e && (a = o.a.rightPadByteString(a, r.length)), n.update(a);
              var u = n.getHMAC("BYTES"),
                A = u.split(""),
                s = A[A.length - 1].charCodeAt(),
                c = 0 == s ? 0 : 15 & s,
                l =
                  ((127 & A[c].charCodeAt()) << 24) |
                  ((255 & A[c + 1].charCodeAt()) << 16) |
                  ((255 & A[c + 2].charCodeAt()) << 8) |
                  (255 & A[c + 3].charCodeAt()),
                g = (l % Math.pow(10, this.digits)).toString();
              return (g = o.a.rjust(g, this.digits));
            },
          },
          {
            key: "url_gen",
            value: function (t, e) {
              return "otpauth://".concat(e, "/SK?secret=").concat(this.secret, "&issuer=").concat(t);
            },
          },
        ]) && u(e.prototype, n),
        r && u(e, r),
        t
      );
    })();
    function s(t) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function c(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function g(t, e) {
      return !e || ("object" !== s(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
          })(t)
        : e;
    }
    function h(t, e, n) {
      return (h =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)); );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function p(t, e) {
      return (p =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var d = (function (t) {
      function e(t) {
        var n,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30;
        return c(this, e), ((n = g(this, f(e).call(this, t))).interval = r), n;
      }
      var n, r, i;
      return (
        (function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && p(t, e);
        })(e, t),
        (n = e),
        (r = [
          {
            key: "now",
            value: function (t) {
              var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                r = o.a.timecode(t ? new Date(t) : new Date(), this.interval),
                i = h(f(e.prototype), "generate_otp", this).call(this, r, n);
              return i;
            },
          },
          {
            key: "verify",
            value: function (t) {
              var n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return (
                null == r && (r = new Date()),
                (n = h(f(e.prototype), "generate_otp", this).call(this, o.a.timecode(r, this.interval))),
                "number" == typeof t && (t = t.toString()),
                t === n
              );
            },
          },
          {
            key: "url_gen",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return h(f(e.prototype), "url_gen", this).call(this, t, "totp");
            },
          },
        ]) && l(n.prototype, r),
        i && l(n, i),
        e
      );
    })(A);
    function m(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        n = new d(t, e);
      return n;
    }
    n.d(e, "a", function () {
      return m;
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "init", function () {
        return u;
      });
    var r = n(17);
    n.d(e, "SecureEntryView", function () {
      return r.a;
    });
    var i = n(0),
      o = n(7),
      a = n(1);
    n.d(e, "containerSizes", function () {
      return a.c;
    }),
      i.a.log("Running in ".concat("production", " mode"));
    var u = function (t) {
      Object(o.c)((t && t.timeDelta) || null);
    };
  },
  function (t, e) {
    t.exports = function () {
      return "function" == typeof Promise && Promise.prototype && Promise.prototype.then;
    };
  },
  function (t, e, n) {
    var r = n(9),
      i = n(5),
      o = n(15),
      a = n(34),
      u = n(35),
      A = n(36),
      s = n(37),
      c = n(38),
      l = n(18),
      g = n(39),
      h = n(46),
      f = n(47),
      p = n(6),
      d = n(48),
      m = n(14);
    function w(t, e, n) {
      var r,
        i,
        o = t.size,
        a = f.getEncodedBits(e, n);
      for (r = 0; r < 15; r++)
        (i = 1 == ((a >> r) & 1)),
          r < 6 ? t.set(r, 8, i, !0) : r < 8 ? t.set(r + 1, 8, i, !0) : t.set(o - 15 + r, 8, i, !0),
          r < 8 ? t.set(8, o - r - 1, i, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, i, !0) : t.set(8, 15 - r - 1, i, !0);
      t.set(o - 8, 8, 1, !0);
    }
    function C(t, e, n) {
      var o = new a();
      n.forEach(function (e) {
        o.put(e.mode.bit, 4), o.put(e.getLength(), p.getCharCountIndicator(e.mode, t)), e.write(o);
      });
      var u = 8 * (i.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, e));
      for (o.getLengthInBits() + 4 <= u && o.put(0, 4); o.getLengthInBits() % 8 != 0; ) o.putBit(0);
      for (var A = (u - o.getLengthInBits()) / 8, s = 0; s < A; s++) o.put(s % 2 ? 17 : 236, 8);
      return (function (t, e, n) {
        for (
          var o = i.getSymbolTotalCodewords(e),
            a = l.getTotalCodewordsCount(e, n),
            u = o - a,
            A = l.getBlocksCount(e, n),
            s = A - (o % A),
            c = Math.floor(o / A),
            h = Math.floor(u / A),
            f = h + 1,
            p = c - h,
            d = new g(p),
            m = 0,
            w = new Array(A),
            C = new Array(A),
            v = 0,
            y = r.from(t.buffer),
            b = 0;
          b < A;
          b++
        ) {
          var I = b < s ? h : f;
          (w[b] = y.slice(m, m + I)), (C[b] = d.encode(w[b])), (m += I), (v = Math.max(v, I));
        }
        var q,
          E,
          B = r.alloc(o),
          S = 0;
        for (q = 0; q < v; q++) for (E = 0; E < A; E++) q < w[E].length && (B[S++] = w[E][q]);
        for (q = 0; q < p; q++) for (E = 0; E < A; E++) B[S++] = C[E][q];
        return B;
      })(o, t, e);
    }
    function v(t, e, n, r) {
      var o;
      if (m(t)) o = d.fromArray(t);
      else {
        if ("string" != typeof t) throw new Error("Invalid data");
        var a = e;
        if (!a) {
          var l = d.rawSplit(t);
          a = h.getBestVersionForData(l, n);
        }
        o = d.fromString(t, a || 40);
      }
      var g = h.getBestVersionForData(o, n);
      if (!g) throw new Error("The amount of data is too big to be stored in a QR Code");
      if (e) {
        if (e < g)
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
              g +
              ".\n"
          );
      } else e = g;
      var f = C(e, n, o),
        p = i.getSymbolSize(e),
        v = new u(p);
      return (
        (function (t, e) {
          for (var n = t.size, r = s.getPositions(e), i = 0; i < r.length; i++)
            for (var o = r[i][0], a = r[i][1], u = -1; u <= 7; u++)
              if (!(o + u <= -1 || n <= o + u))
                for (var A = -1; A <= 7; A++)
                  a + A <= -1 ||
                    n <= a + A ||
                    ((u >= 0 && u <= 6 && (0 === A || 6 === A)) ||
                    (A >= 0 && A <= 6 && (0 === u || 6 === u)) ||
                    (u >= 2 && u <= 4 && A >= 2 && A <= 4)
                      ? t.set(o + u, a + A, !0, !0)
                      : t.set(o + u, a + A, !1, !0));
        })(v, e),
        (function (t) {
          for (var e = t.size, n = 8; n < e - 8; n++) {
            var r = n % 2 == 0;
            t.set(n, 6, r, !0), t.set(6, n, r, !0);
          }
        })(v),
        (function (t, e) {
          for (var n = A.getPositions(e), r = 0; r < n.length; r++)
            for (var i = n[r][0], o = n[r][1], a = -2; a <= 2; a++)
              for (var u = -2; u <= 2; u++)
                -2 === a || 2 === a || -2 === u || 2 === u || (0 === a && 0 === u)
                  ? t.set(i + a, o + u, !0, !0)
                  : t.set(i + a, o + u, !1, !0);
        })(v, e),
        w(v, n, 0),
        e >= 7 &&
          (function (t, e) {
            for (var n, r, i, o = t.size, a = h.getEncodedBits(e), u = 0; u < 18; u++)
              (n = Math.floor(u / 3)),
                (r = (u % 3) + o - 8 - 3),
                (i = 1 == ((a >> u) & 1)),
                t.set(n, r, i, !0),
                t.set(r, n, i, !0);
          })(v, e),
        (function (t, e) {
          for (var n = t.size, r = -1, i = n - 1, o = 7, a = 0, u = n - 1; u > 0; u -= 2)
            for (6 === u && u--; ; ) {
              for (var A = 0; A < 2; A++)
                if (!t.isReserved(i, u - A)) {
                  var s = !1;
                  a < e.length && (s = 1 == ((e[a] >>> o) & 1)), t.set(i, u - A, s), -1 === --o && (a++, (o = 7));
                }
              if ((i += r) < 0 || n <= i) {
                (i -= r), (r = -r);
                break;
              }
            }
        })(v, f),
        isNaN(r) && (r = c.getBestMask(v, w.bind(null, v, n))),
        c.applyMask(r, v),
        w(v, n, r),
        { modules: v, version: e, errorCorrectionLevel: n, maskPattern: r, segments: o }
      );
    }
    e.create = function (t, e) {
      if (void 0 === t || "" === t) throw new Error("No input text");
      var n,
        r,
        a = o.M;
      return (
        void 0 !== e &&
          ((a = o.from(e.errorCorrectionLevel, o.M)),
          (n = h.from(e.version)),
          (r = c.from(e.maskPattern)),
          e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)),
        v(t, n, a, r)
      );
    };
  },
  function (t, e) {
    function n() {
      (this.buffer = []), (this.length = 0);
    }
    (n.prototype = {
      get: function (t) {
        var e = Math.floor(t / 8);
        return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
      },
      put: function (t, e) {
        for (var n = 0; n < e; n++) this.putBit(1 == ((t >>> (e - n - 1)) & 1));
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
      },
    }),
      (t.exports = n);
  },
  function (t, e, n) {
    var r = n(9);
    function i(t) {
      if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
      (this.size = t), (this.data = r.alloc(t * t)), (this.reservedBit = r.alloc(t * t));
    }
    (i.prototype.set = function (t, e, n, r) {
      var i = t * this.size + e;
      (this.data[i] = n), r && (this.reservedBit[i] = !0);
    }),
      (i.prototype.get = function (t, e) {
        return this.data[t * this.size + e];
      }),
      (i.prototype.xor = function (t, e, n) {
        this.data[t * this.size + e] ^= n;
      }),
      (i.prototype.isReserved = function (t, e) {
        return this.reservedBit[t * this.size + e];
      }),
      (t.exports = i);
  },
  function (t, e, n) {
    var r = n(5).getSymbolSize;
    (e.getRowColCoords = function (t) {
      if (1 === t) return [];
      for (
        var e = Math.floor(t / 7) + 2,
          n = r(t),
          i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
          o = [n - 7],
          a = 1;
        a < e - 1;
        a++
      )
        o[a] = o[a - 1] - i;
      return o.push(6), o.reverse();
    }),
      (e.getPositions = function (t) {
        for (var n = [], r = e.getRowColCoords(t), i = r.length, o = 0; o < i; o++)
          for (var a = 0; a < i; a++)
            (0 === o && 0 === a) || (0 === o && a === i - 1) || (o === i - 1 && 0 === a) || n.push([r[o], r[a]]);
        return n;
      });
  },
  function (t, e, n) {
    var r = n(5).getSymbolSize;
    e.getPositions = function (t) {
      var e = r(t);
      return [
        [0, 0],
        [e - 7, 0],
        [0, e - 7],
      ];
    };
  },
  function (t, e) {
    e.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7,
    };
    var n = 3,
      r = 3,
      i = 40,
      o = 10;
    function a(t, n, r) {
      switch (t) {
        case e.Patterns.PATTERN000:
          return (n + r) % 2 == 0;
        case e.Patterns.PATTERN001:
          return n % 2 == 0;
        case e.Patterns.PATTERN010:
          return r % 3 == 0;
        case e.Patterns.PATTERN011:
          return (n + r) % 3 == 0;
        case e.Patterns.PATTERN100:
          return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
        case e.Patterns.PATTERN101:
          return ((n * r) % 2) + ((n * r) % 3) == 0;
        case e.Patterns.PATTERN110:
          return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
        case e.Patterns.PATTERN111:
          return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + t);
      }
    }
    (e.isValid = function (t) {
      return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
    }),
      (e.from = function (t) {
        return e.isValid(t) ? parseInt(t, 10) : void 0;
      }),
      (e.getPenaltyN1 = function (t) {
        for (var e = t.size, r = 0, i = 0, o = 0, a = null, u = null, A = 0; A < e; A++) {
          (i = o = 0), (a = u = null);
          for (var s = 0; s < e; s++) {
            var c = t.get(A, s);
            c === a ? i++ : (i >= 5 && (r += n + (i - 5)), (a = c), (i = 1)),
              (c = t.get(s, A)) === u ? o++ : (o >= 5 && (r += n + (o - 5)), (u = c), (o = 1));
          }
          i >= 5 && (r += n + (i - 5)), o >= 5 && (r += n + (o - 5));
        }
        return r;
      }),
      (e.getPenaltyN2 = function (t) {
        for (var e = t.size, n = 0, i = 0; i < e - 1; i++)
          for (var o = 0; o < e - 1; o++) {
            var a = t.get(i, o) + t.get(i, o + 1) + t.get(i + 1, o) + t.get(i + 1, o + 1);
            (4 !== a && 0 !== a) || n++;
          }
        return n * r;
      }),
      (e.getPenaltyN3 = function (t) {
        for (var e = t.size, n = 0, r = 0, o = 0, a = 0; a < e; a++) {
          r = o = 0;
          for (var u = 0; u < e; u++)
            (r = ((r << 1) & 2047) | t.get(a, u)),
              u >= 10 && (1488 === r || 93 === r) && n++,
              (o = ((o << 1) & 2047) | t.get(u, a)),
              u >= 10 && (1488 === o || 93 === o) && n++;
        }
        return n * i;
      }),
      (e.getPenaltyN4 = function (t) {
        for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
        return Math.abs(Math.ceil((100 * e) / n / 5) - 10) * o;
      }),
      (e.applyMask = function (t, e) {
        for (var n = e.size, r = 0; r < n; r++)
          for (var i = 0; i < n; i++) e.isReserved(i, r) || e.xor(i, r, a(t, i, r));
      }),
      (e.getBestMask = function (t, n) {
        for (var r = Object.keys(e.Patterns).length, i = 0, o = 1 / 0, a = 0; a < r; a++) {
          n(a), e.applyMask(a, t);
          var u = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
          e.applyMask(a, t), u < o && ((o = u), (i = a));
        }
        return i;
      });
  },
  function (t, e, n) {
    var r = n(9),
      i = n(40),
      o = n(42).Buffer;
    function a(t) {
      (this.genPoly = void 0), (this.degree = t), this.degree && this.initialize(this.degree);
    }
    (a.prototype.initialize = function (t) {
      (this.degree = t), (this.genPoly = i.generateECPolynomial(this.degree));
    }),
      (a.prototype.encode = function (t) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        var e = r.alloc(this.degree),
          n = o.concat([t, e], t.length + this.degree),
          a = i.mod(n, this.genPoly),
          u = this.degree - a.length;
        if (u > 0) {
          var A = r.alloc(this.degree);
          return a.copy(A, u), A;
        }
        return a;
      }),
      (t.exports = a);
  },
  function (t, e, n) {
    var r = n(9),
      i = n(41);
    (e.mul = function (t, e) {
      for (var n = r.alloc(t.length + e.length - 1), o = 0; o < t.length; o++)
        for (var a = 0; a < e.length; a++) n[o + a] ^= i.mul(t[o], e[a]);
      return n;
    }),
      (e.mod = function (t, e) {
        for (var n = r.from(t); n.length - e.length >= 0; ) {
          for (var o = n[0], a = 0; a < e.length; a++) n[a] ^= i.mul(e[a], o);
          for (var u = 0; u < n.length && 0 === n[u]; ) u++;
          n = n.slice(u);
        }
        return n;
      }),
      (e.generateECPolynomial = function (t) {
        for (var n = r.from([1]), o = 0; o < t; o++) n = e.mul(n, [1, i.exp(o)]);
        return n;
      });
  },
  function (t, e, n) {
    var r = n(9),
      i = r.alloc(512),
      o = r.alloc(256);
    !(function () {
      for (var t = 1, e = 0; e < 255; e++) (i[e] = t), (o[t] = e), 256 & (t <<= 1) && (t ^= 285);
      for (e = 255; e < 512; e++) i[e] = i[e - 255];
    })(),
      (e.log = function (t) {
        if (t < 1) throw new Error("log(" + t + ")");
        return o[t];
      }),
      (e.exp = function (t) {
        return i[t];
      }),
      (e.mul = function (t, e) {
        return 0 === t || 0 === e ? 0 : i[o[t] + o[e]];
      });
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var r = n(43),
        i = n(44),
        o = n(45);
      function a() {
        return A.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function u(t, e) {
        if (a() < e) throw new RangeError("Invalid typed array length");
        return (
          A.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)).__proto__ = A.prototype)
            : (null === t && (t = new A(e)), (t.length = e)),
          t
        );
      }
      function A(t, e, n) {
        if (!(A.TYPED_ARRAY_SUPPORT || this instanceof A)) return new A(t, e, n);
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw new Error("If encoding is specified then the first argument must be a string");
          return l(this, t);
        }
        return s(this, t, e, n);
      }
      function s(t, e, n, r) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
          ? (function (t, e, n, r) {
              if ((e.byteLength, n < 0 || e.byteLength < n)) throw new RangeError("'offset' is out of bounds");
              if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
              e =
                void 0 === n && void 0 === r
                  ? new Uint8Array(e)
                  : void 0 === r
                  ? new Uint8Array(e, n)
                  : new Uint8Array(e, n, r);
              A.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = A.prototype) : (t = g(t, e));
              return t;
            })(t, e, n, r)
          : "string" == typeof e
          ? (function (t, e, n) {
              ("string" == typeof n && "" !== n) || (n = "utf8");
              if (!A.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
              var r = 0 | f(e, n),
                i = (t = u(t, r)).write(e, n);
              i !== r && (t = t.slice(0, i));
              return t;
            })(t, e, n)
          : (function (t, e) {
              if (A.isBuffer(e)) {
                var n = 0 | h(e.length);
                return 0 === (t = u(t, n)).length || e.copy(t, 0, 0, n), t;
              }
              if (e) {
                if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e)
                  return "number" != typeof e.length || (r = e.length) != r ? u(t, 0) : g(t, e);
                if ("Buffer" === e.type && o(e.data)) return g(t, e.data);
              }
              var r;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            })(t, e);
      }
      function c(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function l(t, e) {
        if ((c(e), (t = u(t, e < 0 ? 0 : 0 | h(e))), !A.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < e; ++n) t[n] = 0;
        return t;
      }
      function g(t, e) {
        var n = e.length < 0 ? 0 : 0 | h(e.length);
        t = u(t, n);
        for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
        return t;
      }
      function h(t) {
        if (t >= a())
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
        return 0 | t;
      }
      function f(t, e) {
        if (A.isBuffer(t)) return t.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var n = t.length;
        if (0 === n) return 0;
        for (var r = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return R(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return D(t).length;
            default:
              if (r) return R(t).length;
              (e = ("" + e).toLowerCase()), (r = !0);
          }
      }
      function p(t, e, n) {
        var r = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
        if ((n >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return K(this, e, n);
            case "utf8":
            case "utf-8":
              return B(this, e, n);
            case "ascii":
              return S(this, e, n);
            case "latin1":
            case "binary":
              return M(this, e, n);
            case "base64":
              return E(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Y(this, e, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (r = !0);
          }
      }
      function d(t, e, n) {
        var r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function m(t, e, n, r, i) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = i ? 0 : t.length - 1),
          n < 0 && (n = t.length + n),
          n >= t.length)
        ) {
          if (i) return -1;
          n = t.length - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }
        if (("string" == typeof e && (e = A.from(e, r)), A.isBuffer(e))) return 0 === e.length ? -1 : w(t, e, n, r, i);
        if ("number" == typeof e)
          return (
            (e &= 255),
            A.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, n)
                : Uint8Array.prototype.lastIndexOf.call(t, e, n)
              : w(t, [e], n, r, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function w(t, e, n, r, i) {
        var o,
          a = 1,
          u = t.length,
          A = e.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (a = 2), (u /= 2), (A /= 2), (n /= 2);
        }
        function s(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (i) {
          var c = -1;
          for (o = n; o < u; o++)
            if (s(t, o) === s(e, -1 === c ? 0 : o - c)) {
              if ((-1 === c && (c = o), o - c + 1 === A)) return c * a;
            } else -1 !== c && (o -= o - c), (c = -1);
        } else
          for (n + A > u && (n = u - A), o = n; o >= 0; o--) {
            for (var l = !0, g = 0; g < A; g++)
              if (s(t, o + g) !== s(e, g)) {
                l = !1;
                break;
              }
            if (l) return o;
          }
        return -1;
      }
      function C(t, e, n, r) {
        n = Number(n) || 0;
        var i = t.length - n;
        r ? (r = Number(r)) > i && (r = i) : (r = i);
        var o = e.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);
        for (var a = 0; a < r; ++a) {
          var u = parseInt(e.substr(2 * a, 2), 16);
          if (isNaN(u)) return a;
          t[n + a] = u;
        }
        return a;
      }
      function v(t, e, n, r) {
        return j(R(e, t.length - n), t, n, r);
      }
      function y(t, e, n, r) {
        return j(
          (function (t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
            return e;
          })(e),
          t,
          n,
          r
        );
      }
      function b(t, e, n, r) {
        return y(t, e, n, r);
      }
      function I(t, e, n, r) {
        return j(D(e), t, n, r);
      }
      function q(t, e, n, r) {
        return j(
          (function (t, e) {
            for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
              (n = t.charCodeAt(a)), (r = n >> 8), (i = n % 256), o.push(i), o.push(r);
            return o;
          })(e, t.length - n),
          t,
          n,
          r
        );
      }
      function E(t, e, n) {
        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
      }
      function B(t, e, n) {
        n = Math.min(t.length, n);
        for (var r = [], i = e; i < n; ) {
          var o,
            a,
            u,
            A,
            s = t[i],
            c = null,
            l = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
          if (i + l <= n)
            switch (l) {
              case 1:
                s < 128 && (c = s);
                break;
              case 2:
                128 == (192 & (o = t[i + 1])) && (A = ((31 & s) << 6) | (63 & o)) > 127 && (c = A);
                break;
              case 3:
                (o = t[i + 1]),
                  (a = t[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    (A = ((15 & s) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 &&
                    (A < 55296 || A > 57343) &&
                    (c = A);
                break;
              case 4:
                (o = t[i + 1]),
                  (a = t[i + 2]),
                  (u = t[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    128 == (192 & u) &&
                    (A = ((15 & s) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & u)) > 65535 &&
                    A < 1114112 &&
                    (c = A);
            }
          null === c
            ? ((c = 65533), (l = 1))
            : c > 65535 && ((c -= 65536), r.push(((c >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))),
            r.push(c),
            (i += l);
        }
        return (function (t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          var n = "",
            r = 0;
          for (; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, (r += 4096)));
          return n;
        })(r);
      }
      (e.Buffer = A),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return A.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (A.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              })()),
        (e.kMaxLength = a()),
        (A.poolSize = 8192),
        (A._augment = function (t) {
          return (t.__proto__ = A.prototype), t;
        }),
        (A.from = function (t, e, n) {
          return s(null, t, e, n);
        }),
        A.TYPED_ARRAY_SUPPORT &&
          ((A.prototype.__proto__ = Uint8Array.prototype),
          (A.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            A[Symbol.species] === A &&
            Object.defineProperty(A, Symbol.species, { value: null, configurable: !0 })),
        (A.alloc = function (t, e, n) {
          return (function (t, e, n, r) {
            return (
              c(e),
              e <= 0 ? u(t, e) : void 0 !== n ? ("string" == typeof r ? u(t, e).fill(n, r) : u(t, e).fill(n)) : u(t, e)
            );
          })(null, t, e, n);
        }),
        (A.allocUnsafe = function (t) {
          return l(null, t);
        }),
        (A.allocUnsafeSlow = function (t) {
          return l(null, t);
        }),
        (A.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (A.compare = function (t, e) {
          if (!A.isBuffer(t) || !A.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
          if (t === e) return 0;
          for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
            if (t[i] !== e[i]) {
              (n = t[i]), (r = e[i]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (A.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (A.concat = function (t, e) {
          if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return A.alloc(0);
          var n;
          if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var r = A.allocUnsafe(e),
            i = 0;
          for (n = 0; n < t.length; ++n) {
            var a = t[n];
            if (!A.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
            a.copy(r, i), (i += a.length);
          }
          return r;
        }),
        (A.byteLength = f),
        (A.prototype._isBuffer = !0),
        (A.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) d(this, e, e + 1);
          return this;
        }),
        (A.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4) d(this, e, e + 3), d(this, e + 1, e + 2);
          return this;
        }),
        (A.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            d(this, e, e + 7), d(this, e + 1, e + 6), d(this, e + 2, e + 5), d(this, e + 3, e + 4);
          return this;
        }),
        (A.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 === t ? "" : 0 === arguments.length ? B(this, 0, t) : p.apply(this, arguments);
        }),
        (A.prototype.equals = function (t) {
          if (!A.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === A.compare(this, t);
        }),
        (A.prototype.inspect = function () {
          var t = "",
            n = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((t = this.toString("hex", 0, n).match(/.{2}/g).join(" ")), this.length > n && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (A.prototype.compare = function (t, e, n, r, i) {
          if (!A.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = t ? t.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            e < 0 || n > t.length || r < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= i && e >= n) return 0;
          if (r >= i) return -1;
          if (e >= n) return 1;
          if (this === t) return 0;
          for (
            var o = (i >>>= 0) - (r >>>= 0),
              a = (n >>>= 0) - (e >>>= 0),
              u = Math.min(o, a),
              s = this.slice(r, i),
              c = t.slice(e, n),
              l = 0;
            l < u;
            ++l
          )
            if (s[l] !== c[l]) {
              (o = s[l]), (a = c[l]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (A.prototype.includes = function (t, e, n) {
          return -1 !== this.indexOf(t, e, n);
        }),
        (A.prototype.indexOf = function (t, e, n) {
          return m(this, t, e, n, !0);
        }),
        (A.prototype.lastIndexOf = function (t, e, n) {
          return m(this, t, e, n, !1);
        }),
        (A.prototype.write = function (t, e, n, r) {
          if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
          else if (void 0 === n && "string" == typeof e) (r = e), (n = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            (e |= 0), isFinite(n) ? ((n |= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
          }
          var i = this.length - e;
          if (((void 0 === n || n > i) && (n = i), (t.length > 0 && (n < 0 || e < 0)) || e > this.length))
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var o = !1; ; )
            switch (r) {
              case "hex":
                return C(this, t, e, n);
              case "utf8":
              case "utf-8":
                return v(this, t, e, n);
              case "ascii":
                return y(this, t, e, n);
              case "latin1":
              case "binary":
                return b(this, t, e, n);
              case "base64":
                return I(this, t, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return q(this, t, e, n);
              default:
                if (o) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (o = !0);
            }
        }),
        (A.prototype.toJSON = function () {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        });
      function S(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
        return r;
      }
      function M(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
        return r;
      }
      function K(t, e, n) {
        var r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = "", o = e; o < n; ++o) i += L(t[o]);
        return i;
      }
      function Y(t, e, n) {
        for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2)
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return i;
      }
      function Q(t, e, n) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
      }
      function k(t, e, n, r, i, o) {
        if (!A.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range");
      }
      function G(t, e, n, r) {
        e < 0 && (e = 65535 + e + 1);
        for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i)
          t[n + i] = (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
      }
      function F(t, e, n, r) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
      }
      function Z(t, e, n, r, i, o) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function O(t, e, n, r, o) {
        return o || Z(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
      }
      function W(t, e, n, r, o) {
        return o || Z(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
      }
      (A.prototype.slice = function (t, e) {
        var n,
          r = this.length;
        if (
          ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          e < t && (e = t),
          A.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(t, e)).__proto__ = A.prototype;
        else {
          var i = e - t;
          n = new A(i, void 0);
          for (var o = 0; o < i; ++o) n[o] = this[o + t];
        }
        return n;
      }),
        (A.prototype.readUIntLE = function (t, e, n) {
          (t |= 0), (e |= 0), n || Q(t, e, this.length);
          for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
          return r;
        }),
        (A.prototype.readUIntBE = function (t, e, n) {
          (t |= 0), (e |= 0), n || Q(t, e, this.length);
          for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); ) r += this[t + --e] * i;
          return r;
        }),
        (A.prototype.readUInt8 = function (t, e) {
          return e || Q(t, 1, this.length), this[t];
        }),
        (A.prototype.readUInt16LE = function (t, e) {
          return e || Q(t, 2, this.length), this[t] | (this[t + 1] << 8);
        }),
        (A.prototype.readUInt16BE = function (t, e) {
          return e || Q(t, 2, this.length), (this[t] << 8) | this[t + 1];
        }),
        (A.prototype.readUInt32LE = function (t, e) {
          return (
            e || Q(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
          );
        }),
        (A.prototype.readUInt32BE = function (t, e) {
          return (
            e || Q(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (A.prototype.readIntLE = function (t, e, n) {
          (t |= 0), (e |= 0), n || Q(t, e, this.length);
          for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
          return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
        }),
        (A.prototype.readIntBE = function (t, e, n) {
          (t |= 0), (e |= 0), n || Q(t, e, this.length);
          for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); ) o += this[t + --r] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (A.prototype.readInt8 = function (t, e) {
          return e || Q(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
        }),
        (A.prototype.readInt16LE = function (t, e) {
          e || Q(t, 2, this.length);
          var n = this[t] | (this[t + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (A.prototype.readInt16BE = function (t, e) {
          e || Q(t, 2, this.length);
          var n = this[t + 1] | (this[t] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (A.prototype.readInt32LE = function (t, e) {
          return e || Q(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
        }),
        (A.prototype.readInt32BE = function (t, e) {
          return e || Q(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
        }),
        (A.prototype.readFloatLE = function (t, e) {
          return e || Q(t, 4, this.length), i.read(this, t, !0, 23, 4);
        }),
        (A.prototype.readFloatBE = function (t, e) {
          return e || Q(t, 4, this.length), i.read(this, t, !1, 23, 4);
        }),
        (A.prototype.readDoubleLE = function (t, e) {
          return e || Q(t, 8, this.length), i.read(this, t, !0, 52, 8);
        }),
        (A.prototype.readDoubleBE = function (t, e) {
          return e || Q(t, 8, this.length), i.read(this, t, !1, 52, 8);
        }),
        (A.prototype.writeUIntLE = function (t, e, n, r) {
          ((t = +t), (e |= 0), (n |= 0), r) || k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
          var i = 1,
            o = 0;
          for (this[e] = 255 & t; ++o < n && (i *= 256); ) this[e + o] = (t / i) & 255;
          return e + n;
        }),
        (A.prototype.writeUIntBE = function (t, e, n, r) {
          ((t = +t), (e |= 0), (n |= 0), r) || k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
          var i = n - 1,
            o = 1;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = (t / o) & 255;
          return e + n;
        }),
        (A.prototype.writeUInt8 = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 1, 255, 0),
            A.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (A.prototype.writeUInt16LE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 2, 65535, 0),
            A.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : G(this, t, e, !0),
            e + 2
          );
        }),
        (A.prototype.writeUInt16BE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 2, 65535, 0),
            A.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : G(this, t, e, !1),
            e + 2
          );
        }),
        (A.prototype.writeUInt32LE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 4, 4294967295, 0),
            A.TYPED_ARRAY_SUPPORT
              ? ((this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t))
              : F(this, t, e, !0),
            e + 4
          );
        }),
        (A.prototype.writeUInt32BE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 4, 4294967295, 0),
            A.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
              : F(this, t, e, !1),
            e + 4
          );
        }),
        (A.prototype.writeIntLE = function (t, e, n, r) {
          if (((t = +t), (e |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            k(this, t, e, n, i - 1, -i);
          }
          var o = 0,
            a = 1,
            u = 0;
          for (this[e] = 255 & t; ++o < n && (a *= 256); )
            t < 0 && 0 === u && 0 !== this[e + o - 1] && (u = 1), (this[e + o] = (((t / a) >> 0) - u) & 255);
          return e + n;
        }),
        (A.prototype.writeIntBE = function (t, e, n, r) {
          if (((t = +t), (e |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            k(this, t, e, n, i - 1, -i);
          }
          var o = n - 1,
            a = 1,
            u = 0;
          for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
            t < 0 && 0 === u && 0 !== this[e + o + 1] && (u = 1), (this[e + o] = (((t / a) >> 0) - u) & 255);
          return e + n;
        }),
        (A.prototype.writeInt8 = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 1, 127, -128),
            A.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (A.prototype.writeInt16LE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 2, 32767, -32768),
            A.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : G(this, t, e, !0),
            e + 2
          );
        }),
        (A.prototype.writeInt16BE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 2, 32767, -32768),
            A.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : G(this, t, e, !1),
            e + 2
          );
        }),
        (A.prototype.writeInt32LE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 4, 2147483647, -2147483648),
            A.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24))
              : F(this, t, e, !0),
            e + 4
          );
        }),
        (A.prototype.writeInt32BE = function (t, e, n) {
          return (
            (t = +t),
            (e |= 0),
            n || k(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            A.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
              : F(this, t, e, !1),
            e + 4
          );
        }),
        (A.prototype.writeFloatLE = function (t, e, n) {
          return O(this, t, e, !0, n);
        }),
        (A.prototype.writeFloatBE = function (t, e, n) {
          return O(this, t, e, !1, n);
        }),
        (A.prototype.writeDoubleLE = function (t, e, n) {
          return W(this, t, e, !0, n);
        }),
        (A.prototype.writeDoubleBE = function (t, e, n) {
          return W(this, t, e, !1, n);
        }),
        (A.prototype.copy = function (t, e, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
          var i,
            o = r - n;
          if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
          else if (o < 1e3 || !A.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + n];
          else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
          return o;
        }),
        (A.prototype.fill = function (t, e, n, r) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((r = e), (e = 0), (n = this.length))
                : "string" == typeof n && ((r = n), (n = this.length)),
              1 === t.length)
            ) {
              var i = t.charCodeAt(0);
              i < 256 && (t = i);
            }
            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !A.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
          } else "number" == typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
          if (n <= e) return this;
          var o;
          if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" == typeof t))
            for (o = e; o < n; ++o) this[o] = t;
          else {
            var a = A.isBuffer(t) ? t : R(new A(t, r).toString()),
              u = a.length;
            for (o = 0; o < n - e; ++o) this[o + e] = a[o % u];
          }
          return this;
        });
      var J = /[^+\/0-9A-Za-z-_]/g;
      function L(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function R(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
              continue;
            }
            n = 65536 + (((i - 55296) << 10) | (n - 56320));
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), n < 128)) {
            if ((e -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
          }
        }
        return o;
      }
      function D(t) {
        return r.toByteArray(
          (function (t) {
            if (
              (t = (function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              })(t).replace(J, "")).length < 2
            )
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function j(t, e, n, r) {
        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
        return i;
      }
    }.call(this, n(3)));
  },
  function (t, e, n) {
    "use strict";
    (e.byteLength = function (t) {
      var e = s(t),
        n = e[0],
        r = e[1];
      return (3 * (n + r)) / 4 - r;
    }),
      (e.toByteArray = function (t) {
        for (
          var e,
            n = s(t),
            r = n[0],
            a = n[1],
            u = new o(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, r, a)
            ),
            A = 0,
            c = a > 0 ? r - 4 : r,
            l = 0;
          l < c;
          l += 4
        )
          (e =
            (i[t.charCodeAt(l)] << 18) |
            (i[t.charCodeAt(l + 1)] << 12) |
            (i[t.charCodeAt(l + 2)] << 6) |
            i[t.charCodeAt(l + 3)]),
            (u[A++] = (e >> 16) & 255),
            (u[A++] = (e >> 8) & 255),
            (u[A++] = 255 & e);
        2 === a && ((e = (i[t.charCodeAt(l)] << 2) | (i[t.charCodeAt(l + 1)] >> 4)), (u[A++] = 255 & e));
        1 === a &&
          ((e = (i[t.charCodeAt(l)] << 10) | (i[t.charCodeAt(l + 1)] << 4) | (i[t.charCodeAt(l + 2)] >> 2)),
          (u[A++] = (e >> 8) & 255),
          (u[A++] = 255 & e));
        return u;
      }),
      (e.fromByteArray = function (t) {
        for (var e, n = t.length, i = n % 3, o = [], a = 0, u = n - i; a < u; a += 16383)
          o.push(c(t, a, a + 16383 > u ? u : a + 16383));
        1 === i
          ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
          : 2 === i &&
            ((e = (t[n - 2] << 8) + t[n - 1]), o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var r = [],
        i = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        u = 0,
        A = a.length;
      u < A;
      ++u
    )
      (r[u] = a[u]), (i[a.charCodeAt(u)] = u);
    function s(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = t.indexOf("=");
      return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
    }
    function c(t, e, n) {
      for (var i, o, a = [], u = e; u < n; u += 3)
        (i = ((t[u] << 16) & 16711680) + ((t[u + 1] << 8) & 65280) + (255 & t[u + 2])),
          a.push(r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
      return a.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  function (t, e) {
    (e.read = function (t, e, n, r, i) {
      var o,
        a,
        u = 8 * i - r - 1,
        A = (1 << u) - 1,
        s = A >> 1,
        c = -7,
        l = n ? i - 1 : 0,
        g = n ? -1 : 1,
        h = t[e + l];
      for (l += g, o = h & ((1 << -c) - 1), h >>= -c, c += u; c > 0; o = 256 * o + t[e + l], l += g, c -= 8);
      for (a = o & ((1 << -c) - 1), o >>= -c, c += r; c > 0; a = 256 * a + t[e + l], l += g, c -= 8);
      if (0 === o) o = 1 - s;
      else {
        if (o === A) return a ? NaN : (1 / 0) * (h ? -1 : 1);
        (a += Math.pow(2, r)), (o -= s);
      }
      return (h ? -1 : 1) * a * Math.pow(2, o - r);
    }),
      (e.write = function (t, e, n, r, i, o) {
        var a,
          u,
          A,
          s = 8 * o - i - 1,
          c = (1 << s) - 1,
          l = c >> 1,
          g = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = r ? 0 : o - 1,
          f = r ? 1 : -1,
          p = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((u = isNaN(e) ? 1 : 0), (a = c))
              : ((a = Math.floor(Math.log(e) / Math.LN2)),
                e * (A = Math.pow(2, -a)) < 1 && (a--, (A *= 2)),
                (e += a + l >= 1 ? g / A : g * Math.pow(2, 1 - l)) * A >= 2 && (a++, (A /= 2)),
                a + l >= c
                  ? ((u = 0), (a = c))
                  : a + l >= 1
                  ? ((u = (e * A - 1) * Math.pow(2, i)), (a += l))
                  : ((u = e * Math.pow(2, l - 1) * Math.pow(2, i)), (a = 0)));
          i >= 8;
          t[n + h] = 255 & u, h += f, u /= 256, i -= 8
        );
        for (a = (a << i) | u, s += i; s > 0; t[n + h] = 255 & a, h += f, a /= 256, s -= 8);
        t[n + h - f] |= 128 * p;
      });
  },
  function (t, e) {
    var n = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == n.call(t);
      };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(18),
      o = n(15),
      a = n(6),
      u = n(19),
      A = n(14),
      s = r.getBCHDigit(7973);
    function c(t, e) {
      return a.getCharCountIndicator(t, e) + 4;
    }
    function l(t, e) {
      var n = 0;
      return (
        t.forEach(function (t) {
          var r = c(t.mode, e);
          n += r + t.getBitsLength();
        }),
        n
      );
    }
    (e.from = function (t, e) {
      return u.isValid(t) ? parseInt(t, 10) : e;
    }),
      (e.getCapacity = function (t, e, n) {
        if (!u.isValid(t)) throw new Error("Invalid QR Code version");
        void 0 === n && (n = a.BYTE);
        var o = 8 * (r.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e));
        if (n === a.MIXED) return o;
        var A = o - c(n, t);
        switch (n) {
          case a.NUMERIC:
            return Math.floor((A / 10) * 3);
          case a.ALPHANUMERIC:
            return Math.floor((A / 11) * 2);
          case a.KANJI:
            return Math.floor(A / 13);
          case a.BYTE:
          default:
            return Math.floor(A / 8);
        }
      }),
      (e.getBestVersionForData = function (t, n) {
        var r,
          i = o.from(n, o.M);
        if (A(t)) {
          if (t.length > 1)
            return (function (t, n) {
              for (var r = 1; r <= 40; r++) {
                if (l(t, r) <= e.getCapacity(r, n, a.MIXED)) return r;
              }
            })(t, i);
          if (0 === t.length) return 1;
          r = t[0];
        } else r = t;
        return (function (t, n, r) {
          for (var i = 1; i <= 40; i++) if (n <= e.getCapacity(i, r, t)) return i;
        })(r.mode, r.getLength(), i);
      }),
      (e.getEncodedBits = function (t) {
        if (!u.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
        for (var e = t << 12; r.getBCHDigit(e) - s >= 0; ) e ^= 7973 << (r.getBCHDigit(e) - s);
        return (t << 12) | e;
      });
  },
  function (t, e, n) {
    var r = n(5),
      i = r.getBCHDigit(1335);
    e.getEncodedBits = function (t, e) {
      for (var n = (t.bit << 3) | e, o = n << 10; r.getBCHDigit(o) - i >= 0; ) o ^= 1335 << (r.getBCHDigit(o) - i);
      return 21522 ^ ((n << 10) | o);
    };
  },
  function (t, e, n) {
    var r = n(6),
      i = n(49),
      o = n(50),
      a = n(51),
      u = n(52),
      A = n(20),
      s = n(5),
      c = n(53);
    function l(t) {
      return unescape(encodeURIComponent(t)).length;
    }
    function g(t, e, n) {
      for (var r, i = []; null !== (r = t.exec(n)); )
        i.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
      return i;
    }
    function h(t) {
      var e,
        n,
        i = g(A.NUMERIC, r.NUMERIC, t),
        o = g(A.ALPHANUMERIC, r.ALPHANUMERIC, t);
      return (
        s.isKanjiModeEnabled()
          ? ((e = g(A.BYTE, r.BYTE, t)), (n = g(A.KANJI, r.KANJI, t)))
          : ((e = g(A.BYTE_KANJI, r.BYTE, t)), (n = [])),
        i
          .concat(o, e, n)
          .sort(function (t, e) {
            return t.index - e.index;
          })
          .map(function (t) {
            return { data: t.data, mode: t.mode, length: t.length };
          })
      );
    }
    function f(t, e) {
      switch (e) {
        case r.NUMERIC:
          return i.getBitsLength(t);
        case r.ALPHANUMERIC:
          return o.getBitsLength(t);
        case r.KANJI:
          return u.getBitsLength(t);
        case r.BYTE:
          return a.getBitsLength(t);
      }
    }
    function p(t, e) {
      var n,
        A = r.getBestModeForData(t);
      if ((n = r.from(e, A)) !== r.BYTE && n.bit < A.bit)
        throw new Error(
          '"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(A)
        );
      switch ((n !== r.KANJI || s.isKanjiModeEnabled() || (n = r.BYTE), n)) {
        case r.NUMERIC:
          return new i(t);
        case r.ALPHANUMERIC:
          return new o(t);
        case r.KANJI:
          return new u(t);
        case r.BYTE:
          return new a(t);
      }
    }
    (e.fromArray = function (t) {
      return t.reduce(function (t, e) {
        return "string" == typeof e ? t.push(p(e, null)) : e.data && t.push(p(e.data, e.mode)), t;
      }, []);
    }),
      (e.fromString = function (t, n) {
        for (
          var i = (function (t, e) {
              for (var n = {}, i = { start: {} }, o = ["start"], a = 0; a < t.length; a++) {
                for (var u = t[a], A = [], s = 0; s < u.length; s++) {
                  var c = u[s],
                    l = "" + a + s;
                  A.push(l), (n[l] = { node: c, lastCount: 0 }), (i[l] = {});
                  for (var g = 0; g < o.length; g++) {
                    var h = o[g];
                    n[h] && n[h].node.mode === c.mode
                      ? ((i[h][l] = f(n[h].lastCount + c.length, c.mode) - f(n[h].lastCount, c.mode)),
                        (n[h].lastCount += c.length))
                      : (n[h] && (n[h].lastCount = c.length),
                        (i[h][l] = f(c.length, c.mode) + 4 + r.getCharCountIndicator(c.mode, e)));
                  }
                }
                o = A;
              }
              for (g = 0; g < o.length; g++) i[o[g]].end = 0;
              return { map: i, table: n };
            })(
              (function (t) {
                for (var e = [], n = 0; n < t.length; n++) {
                  var i = t[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      e.push([
                        i,
                        { data: i.data, mode: r.ALPHANUMERIC, length: i.length },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      e.push([i, { data: i.data, mode: r.BYTE, length: i.length }]);
                      break;
                    case r.KANJI:
                      e.push([i, { data: i.data, mode: r.BYTE, length: l(i.data) }]);
                      break;
                    case r.BYTE:
                      e.push([{ data: i.data, mode: r.BYTE, length: l(i.data) }]);
                  }
                }
                return e;
              })(h(t, s.isKanjiModeEnabled())),
              n
            ),
            o = c.find_path(i.map, "start", "end"),
            a = [],
            u = 1;
          u < o.length - 1;
          u++
        )
          a.push(i.table[o[u]].node);
        return e.fromArray(
          (function (t) {
            return t.reduce(function (t, e) {
              var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
              return n && n.mode === e.mode ? ((t[t.length - 1].data += e.data), t) : (t.push(e), t);
            }, []);
          })(a)
        );
      }),
      (e.rawSplit = function (t) {
        return e.fromArray(h(t, s.isKanjiModeEnabled()));
      });
  },
  function (t, e, n) {
    var r = n(6);
    function i(t) {
      (this.mode = r.NUMERIC), (this.data = t.toString());
    }
    (i.getBitsLength = function (t) {
      return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
    }),
      (i.prototype.getLength = function () {
        return this.data.length;
      }),
      (i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length);
      }),
      (i.prototype.write = function (t) {
        var e, n, r;
        for (e = 0; e + 3 <= this.data.length; e += 3)
          (n = this.data.substr(e, 3)), (r = parseInt(n, 10)), t.put(r, 10);
        var i = this.data.length - e;
        i > 0 && ((n = this.data.substr(e)), (r = parseInt(n, 10)), t.put(r, 3 * i + 1));
      }),
      (t.exports = i);
  },
  function (t, e, n) {
    var r = n(6),
      i = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":",
      ];
    function o(t) {
      (this.mode = r.ALPHANUMERIC), (this.data = t);
    }
    (o.getBitsLength = function (t) {
      return 11 * Math.floor(t / 2) + (t % 2) * 6;
    }),
      (o.prototype.getLength = function () {
        return this.data.length;
      }),
      (o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length);
      }),
      (o.prototype.write = function (t) {
        var e;
        for (e = 0; e + 2 <= this.data.length; e += 2) {
          var n = 45 * i.indexOf(this.data[e]);
          (n += i.indexOf(this.data[e + 1])), t.put(n, 11);
        }
        this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6);
      }),
      (t.exports = o);
  },
  function (t, e, n) {
    var r = n(9),
      i = n(6);
    function o(t) {
      (this.mode = i.BYTE), (this.data = r.from(t));
    }
    (o.getBitsLength = function (t) {
      return 8 * t;
    }),
      (o.prototype.getLength = function () {
        return this.data.length;
      }),
      (o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length);
      }),
      (o.prototype.write = function (t) {
        for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8);
      }),
      (t.exports = o);
  },
  function (t, e, n) {
    var r = n(6),
      i = n(5);
    function o(t) {
      (this.mode = r.KANJI), (this.data = t);
    }
    (o.getBitsLength = function (t) {
      return 13 * t;
    }),
      (o.prototype.getLength = function () {
        return this.data.length;
      }),
      (o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length);
      }),
      (o.prototype.write = function (t) {
        var e;
        for (e = 0; e < this.data.length; e++) {
          var n = i.toSJIS(this.data[e]);
          if (n >= 33088 && n <= 40956) n -= 33088;
          else {
            if (!(n >= 57408 && n <= 60351))
              throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
            n -= 49472;
          }
          (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
        }
      }),
      (t.exports = o);
  },
  function (t, e, n) {
    "use strict";
    var r = {
      single_source_shortest_paths: function (t, e, n) {
        var i = {},
          o = {};
        o[e] = 0;
        var a,
          u,
          A,
          s,
          c,
          l,
          g,
          h = r.PriorityQueue.make();
        for (h.push(e, 0); !h.empty(); )
          for (A in ((u = (a = h.pop()).value), (s = a.cost), (c = t[u] || {})))
            c.hasOwnProperty(A) &&
              ((l = s + c[A]), (g = o[A]), (void 0 === o[A] || g > l) && ((o[A] = l), h.push(A, l), (i[A] = u)));
        if (void 0 !== n && void 0 === o[n]) {
          var f = ["Could not find a path from ", e, " to ", n, "."].join("");
          throw new Error(f);
        }
        return i;
      },
      extract_shortest_path_from_predecessor_list: function (t, e) {
        for (var n = [], r = e; r; ) n.push(r), t[r], (r = t[r]);
        return n.reverse(), n;
      },
      find_path: function (t, e, n) {
        var i = r.single_source_shortest_paths(t, e, n);
        return r.extract_shortest_path_from_predecessor_list(i, n);
      },
      PriorityQueue: {
        make: function (t) {
          var e,
            n = r.PriorityQueue,
            i = {};
          for (e in ((t = t || {}), n)) n.hasOwnProperty(e) && (i[e] = n[e]);
          return (i.queue = []), (i.sorter = t.sorter || n.default_sorter), i;
        },
        default_sorter: function (t, e) {
          return t.cost - e.cost;
        },
        push: function (t, e) {
          var n = { value: t, cost: e };
          this.queue.push(n), this.queue.sort(this.sorter);
        },
        pop: function () {
          return this.queue.shift();
        },
        empty: function () {
          return 0 === this.queue.length;
        },
      },
    };
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(21);
    (e.render = function (t, e, n) {
      var i = n,
        o = e;
      void 0 !== i || (e && e.getContext) || ((i = e), (e = void 0)),
        e ||
          (o = (function () {
            try {
              return document.createElement("canvas");
            } catch (t) {
              throw new Error("You need to specify a canvas element");
            }
          })()),
        (i = r.getOptions(i));
      var a = r.getImageWidth(t.modules.size, i),
        u = o.getContext("2d"),
        A = u.createImageData(a, a);
      return (
        r.qrToImageData(A.data, t, i),
        (function (t, e, n) {
          t.clearRect(0, 0, e.width, e.height),
            e.style || (e.style = {}),
            (e.height = n),
            (e.width = n),
            (e.style.height = n + "px"),
            (e.style.width = n + "px");
        })(u, o, a),
        u.putImageData(A, 0, 0),
        o
      );
    }),
      (e.renderToDataURL = function (t, n, r) {
        var i = r;
        void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)), i || (i = {});
        var o = e.render(t, n, i),
          a = i.type || "image/png",
          u = i.rendererOpts || {};
        return o.toDataURL(a, u.quality);
      });
  },
  function (t, e, n) {
    var r = n(21);
    function i(t, e) {
      var n = t.a / 255,
        r = e + '="' + t.hex + '"';
      return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
    }
    function o(t, e, n) {
      var r = t + e;
      return void 0 !== n && (r += " " + n), r;
    }
    e.render = function (t, e, n) {
      var a = r.getOptions(e),
        u = t.modules.size,
        A = t.modules.data,
        s = u + 2 * a.margin,
        c = a.color.light.a ? "<path " + i(a.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "",
        l =
          "<path " +
          i(a.color.dark, "stroke") +
          ' d="' +
          (function (t, e, n) {
            for (var r = "", i = 0, a = !1, u = 0, A = 0; A < t.length; A++) {
              var s = Math.floor(A % e),
                c = Math.floor(A / e);
              s || a || (a = !0),
                t[A]
                  ? (u++,
                    (A > 0 && s > 0 && t[A - 1]) ||
                      ((r += a ? o("M", s + n, 0.5 + c + n) : o("m", i, 0)), (i = 0), (a = !1)),
                    (s + 1 < e && t[A + 1]) || ((r += o("h", u)), (u = 0)))
                  : i++;
            }
            return r;
          })(A, u, a.margin) +
          '"/>',
        g = 'viewBox="0 0 ' + s + " " + s + '"',
        h =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") +
          g +
          ' shape-rendering="crispEdges">' +
          c +
          l +
          "</svg>\n";
      return "function" == typeof n && n(null, h), h;
    };
  },
]);
//# sourceMappingURL=presence-secure-entry.min.js.map
