(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(5423);
        },
      ]);
    },
    5423: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          default: function () {
            return I;
          },
        });
      var r = e(5893),
        i = e(9795),
        a = e(7294),
        o = e(4779),
        s = e(950),
        c = e(3929),
        l = e(4155),
        d = new s._k({ supportedChainIds: [1, 3, 4, 5, 42, 56, 88, 89, 97, 137, 1337, 80001] }),
        u = {
          1: l.env.NEXT_PUBLIC_RPC_URL_1,
          3: l.env.NEXT_PUBLIC_RPC_URL_3,
          4: l.env.NEXT_PUBLIC_RPC_URL_4,
          1337: "http://127.0.0.1:8545/",
        },
        h = new c.zw({ rpc: u, qrcode: !0 }),
        f = e(2043),
        v = e.n(f),
        m = {
          warn: v().warn,
          debug: v().debug,
          info: v().info,
          error: v().error,
          trace: v().trace,
          setLevel: v().setLevel,
        };
      var g = function () {
          var t = (0, i.Ge)().account;
          return (0, r.jsxs)("div", {
            className: "btn btn-ghost btn-sm rounded-btn vfont",
            style: { textTransform: "uppercase" },
            children: [
              (0, r.jsx)("span", { children: "Account" }),
              (0, r.jsx)("span", { role: "img", "aria-label": "robot", children: "\ud83e\udd16" }),
              (0, r.jsx)("span", {
                children:
                  null === t ? "-" : t ? "".concat(t.substring(0, 6), "...").concat(t.substring(t.length - 4)) : "",
              }),
            ],
          });
        },
        p = e(5553),
        y = function () {
          var t = (0, i.Ge)(),
            n = t.account,
            e = t.library,
            o = t.chainId,
            s = (0, a.useState)(),
            c = s[0],
            l = s[1];
          return (
            (0, a.useEffect)(
              function () {
                if (n && e) {
                  var t = !1;
                  return (
                    e
                      .getBalance(n)
                      .then(function (n) {
                        t || l(n);
                      })
                      .catch(function () {
                        t || l(null);
                      }),
                    function () {
                      (t = !0), l(void 0);
                    }
                  );
                }
                return function () {
                  m.warn("Balance component not initialized");
                };
              },
              [n, e, o]
            ),
            (0, r.jsxs)("div", {
              className: "btn btn-ghost btn-sm rounded-btn vfont",
              children: [
                (0, r.jsx)("span", { children: "Balance" }),
                (0, r.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-6 h-6 hover:text-blue-400",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, r.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                  }),
                }),
                (0, r.jsx)("span", {
                  children: null === c ? "Error" : c ? "\u039e".concat(parseFloat((0, p.dF)(c)).toFixed(3)) : "",
                }),
              ],
            })
          );
        };
      function E(t) {
        var n = new o.Q(t);
        return (n.pollingInterval = 12e3), n;
      }
      var b = function (t) {
        return (0, r.jsxs)("div", {
          className: "prj",
          style: { gridColumnStart: t.xStart, gridColumnEnd: t.xEnd, gridRowStart: t.yStart, gridRowEnd: t.yEnd },
          children: [
            (0, r.jsx)("h3", { children: t.category }),
            (0, r.jsx)("h1", { children: t.title }),
            (0, r.jsx)("p", { children: t.description }),
            (0, r.jsx)("button", { className: "btn", children: "  LINK  " }),
          ],
        });
      };
      var x = function () {
        return (
          (0, a.useEffect)(function () {
            !(function () {
              var t = document.getElementsByClassName("typing");
              [].slice.call(t).forEach(function (t) {
                var n = t.textContent,
                  e = n.length + 1,
                  r = 0,
                  i = 0,
                  a = 0;
                switch (!0) {
                  case t.classList.contains("typing-1sd"):
                    i = 500;
                    break;
                  case t.classList.contains("typing-2sd"):
                  case t.classList.contains("typing-3sd"):
                    i = 1500;
                    break;
                  case t.classList.contains("typing-4sd"):
                    i = 5e3;
                }
                switch (!0) {
                  case t.classList.contains("typing-fast"):
                    a = 65;
                    break;
                  case t.classList.contains("typing-extra-fast"):
                    a = 80;
                }
                (t.textContent = n.substring(0, r)),
                  setTimeout(function () {
                    var i = setInterval(function () {
                      (t.textContent = n.substring(0, r)), ++r === e && clearInterval(i);
                    }, 100 - a);
                  }, i);
              });
            })();
          }),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: "hero-container",
              children: [
                (0, r.jsxs)("div", {
                  className: "hero-left",
                  children: [
                    (0, r.jsx)("h1", { className: "hero-title typing", children: "ETHAN" }),
                    (0, r.jsx)("h1", { className: "hero-title typing typing-1sd", children: "MARREEL" }),
                    (0, r.jsx)("h2", {
                      className: "hero-subtitle typing typing-2sd typing-fast",
                      children: " ROBOTICS ENGINEER  SOFTWARE DEVELOPER  WATER POLO PLAYER ",
                    }),
                    (0, r.jsx)("p", {
                      className: "hero-desc typing typing-4sd typing-extra-fast",
                      children:
                        "I am an aspiring software engineer looking for a will to live. I am on a mission to create exoskeleton and prosthetic technology never done before.",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "hero-right",
                  children: (0, r.jsxs)("div", {
                    className: "project-box",
                    children: [
                      (0, r.jsx)(b, {
                        title: "EVS MIDDLEWARE",
                        category: "TYPESCRIPT ",
                        description: "This is a project description",
                        date: "Mar. 1 2020",
                        link: "http://marreel.com",
                        yStart: "1",
                        yEnd: "3",
                      }),
                      (0, r.jsx)(b, {
                        title: "EXO OS",
                        category: "EMBEDDED C++",
                        description: "This is a project description",
                        date: "Mar. 1 2020",
                        link: "http://marreel.com",
                      }),
                      (0, r.jsx)(b, {
                        title: "VCRYPT DEV ENV",
                        category: "JAVSCRIPT",
                        description:
                          "A distributed decentralized file system. Utilizes AES-128 encryption paired with breaking files into thousands of parts for maximum security.",
                        date: "Mar. 1 2020",
                        link: "http://marreel.com",
                      }),
                      (0, r.jsx)(b, {
                        title: "VEX CORE DRIVETRAIN",
                        category: "VEX C++",
                        description:
                          "Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards.",
                        date: "Mar. 1 2020",
                        link: "http://marreel.com",
                      }),
                      (0, r.jsx)(b, {
                        title: "VEX CORE DRIVETRAIN",
                        category: "VEX C++",
                        description:
                          "Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards.",
                        date: "Mar. 1 2020",
                        link: "http://marreel.com",
                        yStart: "3",
                        yEnd: "5",
                        xStart: "2",
                        xEnd: "2",
                      }),
                      (0, r.jsx)(b, {
                        title: "VEX CORE DRIVETRAIN",
                        category: "VEX C++",
                        description:
                          "Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards.",
                        date: "Mar. 1 2020",
                        link: "http://marreel.com",
                      }),
                      (0, r.jsx)("div", { className: "prj-space" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
      function w() {
        var t = (0, i.Ge)(),
          n = t.connector,
          e = (t.library, t.account, t.activate),
          o = (t.deactivate, t.active, t.error),
          s = (0, a.useState)(),
          c = s[0],
          l = s[1];
        (0, a.useEffect)(
          function () {
            c && c === n && l(void 0);
          },
          [c, n]
        );
        var u = (function () {
          var t = (0, i.Ge)(),
            n = t.activate,
            e = t.active,
            r = (0, a.useState)(!1),
            o = r[0],
            s = r[1];
          return (
            (0, a.useEffect)(function () {
              d.isAuthorized().then(function (t) {
                t
                  ? n(d, void 0, !0).catch(function () {
                      s(!0);
                    })
                  : s(!0);
              });
            }, []),
            (0, a.useEffect)(
              function () {
                !o && e && s(!0);
              },
              [o, e]
            ),
            o
          );
        })();
        !(function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, i.Ge)(),
            e = n.active,
            r = n.error,
            o = n.activate;
          (0, a.useEffect)(
            function () {
              var n = window.ethereum;
              if (n && n.on && !e && !r && !t) {
                var i = function () {
                    m.warn("Handling 'connect' event"), o(d);
                  },
                  a = function (t) {
                    m.warn("Handling 'chainChanged' event with payload", t), o(d);
                  },
                  s = function (t) {
                    m.warn("Handling 'accountsChanged' event with payload", t), t.length > 0 && o(d);
                  },
                  c = function (t) {
                    m.warn("Handling 'networkChanged' event with payload", t), o(d);
                  };
                return (
                  n.on("connect", i),
                  n.on("chainChanged", a),
                  n.on("accountsChanged", s),
                  n.on("networkChanged", c),
                  function () {
                    n.removeListener &&
                      (n.removeListener("connect", i),
                      n.removeListener("chainChanged", a),
                      n.removeListener("accountsChanged", s),
                      n.removeListener("networkChanged", c));
                  }
                );
              }
            },
            [e, r, t, o]
          );
        })(!u || !!c);
        var f,
          v = function (t) {
            return t === n;
          },
          g = !u || !!c || v(d) || v(h) || !!o;
        return (0, r.jsxs)("button", {
          type: "button",
          className: "btn btn-ghost btn-sm rounded-btn",
          disabled: g,
          onClick: function () {
            l(d), e(d);
          },
          children: [
            (0, r.jsxs)("div", {
              className: "",
              children: [
                ((f = d),
                f === c && (0, r.jsx)("p", { className: "btn btn-ghost btn-sm rounded-btn", children: "loading..." })),
                v(d) && (0, r.jsx)("span", { role: "img", "aria-label": "check", children: "\u2705" }),
              ],
            }),
            "Connect with MetaMask",
          ],
        });
      }
      var j = function () {
        return (0, r.jsxs)("div", {
          className: "header",
          children: [
            (0, r.jsx)("p", { className: "btn btn-ghost btn-sm rounded-btn vfont", children: "GITHUB" }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", { className: "btn btn-ghost btn-sm rounded-btn vfont", children: "INSTA" }),
            (0, r.jsxs)("div", {
              className: "flex items-stretch",
              children: [(0, r.jsx)(g, {}), (0, r.jsx)(y, {}), (0, r.jsx)(w, {})],
            }),
          ],
        });
      };
      function C(t, n, e) {
        var r = (0, a.useRef)();
        (0, a.useEffect)(
          function () {
            var i = (null === e || void 0 === e ? void 0 : e.current) || window;
            if (i && i.addEventListener) {
              r.current !== n && (r.current = n);
              var a = function (t) {
                (null === r || void 0 === r ? void 0 : r.current) && r.current(t);
              };
              return (
                i.addEventListener(t, a),
                function () {
                  i.removeEventListener(t, a);
                }
              );
            }
          },
          [t, e, n]
        );
      }
      var N = function (t, n) {
        var e = function () {
            try {
              var e = window.localStorage.getItem(t);
              return e
                ? (function (t) {
                    try {
                      return "undefined" === t ? void 0 : JSON.parse(null !== t && void 0 !== t ? t : "");
                    } catch (n) {
                      return void console.log("parsing error on", { value: t });
                    }
                  })(e)
                : n;
            } catch (r) {
              return console.warn("Error reading localStorage key \u201c".concat(t, "\u201d:"), r), n;
            }
          },
          r = (0, a.useState)(e),
          i = r[0],
          o = r[1];
        (0, a.useEffect)(function () {
          o(e());
        }, []);
        var s = function () {
          o(e());
        };
        return (
          C("storage", s),
          C("local-storage", s),
          [
            i,
            function (n) {
              try {
                var e =
                  ((r = n),
                  (
                    null != (a = Function) && "undefined" !== typeof Symbol && a[Symbol.hasInstance]
                      ? a[Symbol.hasInstance](r)
                      : r instanceof a
                  )
                    ? n(i)
                    : n);
                window.localStorage.setItem(t, JSON.stringify(e)),
                  o(e),
                  window.dispatchEvent(new Event("local-storage"));
              } catch (s) {
                console.warn("Error setting localStorage key \u201c".concat(t, "\u201d:"), s);
              }
              var r, a;
            },
          ]
        );
      };
      function R(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      function S(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            var e = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
            if (null != e) {
              var r,
                i,
                a = [],
                o = !0,
                s = !1;
              try {
                for (e = e.call(t); !(o = (r = e.next()).done) && (a.push(r.value), !n || a.length !== n); o = !0);
              } catch (c) {
                (s = !0), (i = c);
              } finally {
                try {
                  o || null == e.return || e.return();
                } finally {
                  if (s) throw i;
                }
              }
              return a;
            }
          })(t, n) ||
          (function (t, n) {
            if (!t) return;
            if ("string" === typeof t) return R(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(e);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return R(t, n);
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var I = function () {
        var t = S(N("theme", "dark"), 2),
          n = t[0];
        t[1];
        (0, a.useEffect)(function () {
          document.documentElement.setAttribute("data-theme", n);
        }, []);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            style: { overflow: "hidden", height: "100vh" },
            children: (0, r.jsxs)(i.Ht, { getLibrary: E, children: [(0, r.jsx)(j, {}), (0, r.jsx)(x, {})] }),
          }),
        });
      };
    },
    6601: function () {},
  },
  function (t) {
    t.O(0, [906, 774, 888, 179], function () {
      return (n = 5301), t((t.s = n));
      var n;
    });
    var n = t.O();
    _N_E = n;
  },
]);
