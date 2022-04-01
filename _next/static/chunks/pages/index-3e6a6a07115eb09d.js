(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(9939);
        },
      ]);
    },
    9939: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var r = n(5893),
        i = n(9795),
        a = n(7294),
        o = n(4779),
        s = n(950),
        c = n(3929),
        l = n(4155),
        d = new s._k({ supportedChainIds: [1, 3, 4, 5, 42, 56, 88, 89, 97, 137, 1337, 80001] }),
        u = {
          1: l.env.NEXT_PUBLIC_RPC_URL_1,
          3: l.env.NEXT_PUBLIC_RPC_URL_3,
          4: l.env.NEXT_PUBLIC_RPC_URL_4,
          1337: "http://127.0.0.1:8545/",
        },
        h = new c.zw({ rpc: u, qrcode: !0 }),
        f = n(2043),
        m = n.n(f),
        v = {
          warn: m().warn,
          debug: m().debug,
          info: m().info,
          error: m().error,
          trace: m().trace,
          setLevel: m().setLevel,
        };
      var g = function () {
          var e = (0, i.Ge)().account;
          return (0, r.jsxs)("div", {
            className: "btn btn-ghost btn-sm rounded-btn vfont",
            style: { textTransform: "uppercase" },
            children: [
              (0, r.jsx)("span", { children: "Account" }),
              (0, r.jsx)("span", { role: "img", "aria-label": "robot", children: "\ud83e\udd16" }),
              (0, r.jsx)("span", {
                children:
                  null === e ? "-" : e ? "".concat(e.substring(0, 6), "...").concat(e.substring(e.length - 4)) : "",
              }),
            ],
          });
        },
        p = n(5553),
        y = function () {
          var e = (0, i.Ge)(),
            t = e.account,
            n = e.library,
            o = e.chainId,
            s = (0, a.useState)(),
            c = s[0],
            l = s[1];
          return (
            (0, a.useEffect)(
              function () {
                if (t && n) {
                  var e = !1;
                  return (
                    n
                      .getBalance(t)
                      .then(function (t) {
                        e || l(t);
                      })
                      .catch(function () {
                        e || l(null);
                      }),
                    function () {
                      (e = !0), l(void 0);
                    }
                  );
                }
                return function () {
                  v.warn("Balance component not initialized");
                };
              },
              [t, n, o]
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
      function b(e) {
        var t = new o.Q(e);
        return (t.pollingInterval = 12e3), t;
      }
      var E = function (e) {
          return (0, r.jsxs)("div", {
            className: "prj",
            style: { gridColumnStart: e.xStart, gridColumnEnd: e.xEnd, gridRowStart: e.yStart, gridRowEnd: e.yEnd },
            children: [
              (0, r.jsx)("h3", { children: e.category }),
              (0, r.jsx)("h1", { children: e.title }),
              (0, r.jsx)("p", { children: e.description }),
              (0, r.jsx)("h4", { children: e.date }),
            ],
          });
        },
        x = function (e) {
          return (0, r.jsxs)("div", {
            className: "prj",
            style: { gridColumnStart: e.xStart, gridColumnEnd: e.xEnd, gridRowStart: e.yStart, gridRowEnd: e.yEnd },
            children: [
              (0, r.jsx)("h3", { children: e.category }),
              (0, r.jsx)("h1", { children: e.title }),
              (0, r.jsx)("p", { children: e.description }),
              (0, r.jsx)("div", { style: { backgroundImage: "url(".concat(e.imgurl, ")") } }),
              (0, r.jsx)("h5", { style: { marginTop: "10px" }, children: e.date }),
            ],
          });
        };
      var w = function () {
        return (
          (0, a.useEffect)(function () {
            !(function () {
              var e = document.getElementsByClassName("typing");
              [].slice.call(e).forEach(function (e) {
                var t = e.textContent,
                  n = t.length + 1,
                  r = 0,
                  i = 0,
                  a = 0;
                switch (!0) {
                  case e.classList.contains("typing-1sd"):
                    i = 500;
                    break;
                  case e.classList.contains("typing-2sd"):
                  case e.classList.contains("typing-3sd"):
                    i = 1500;
                    break;
                  case e.classList.contains("typing-4sd"):
                    i = 5e3;
                }
                switch (!0) {
                  case e.classList.contains("typing-fast"):
                    a = 65;
                    break;
                  case e.classList.contains("typing-extra-fast"):
                    a = 80;
                }
                (e.textContent = t.substring(0, r)),
                  setTimeout(function () {
                    var i = setInterval(function () {
                      (e.textContent = t.substring(0, r)), ++r === n && clearInterval(i);
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
                        "I am an aspiring software engineer looking for a will to live. I am on a mission to create exoskeleton and prosthetic technology never done before. I've been developing software for 11 years, 3 with NodeJS, 5 with Unity. I am the head developer of the robotics team and teach kids how to code and use modern frameworks and technology.",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "hero-right",
                  children: (0, r.jsxs)("div", {
                    className: "project-box",
                    children: [
                      (0, r.jsx)(x, {
                        title: "EVS MIDDLEWARE",
                        category: "JAVASCRIPT | NPM | JEST",
                        description:
                          "Express video stream (EVS) is a middleware plugin I made that allows express to stream video. Statically feeding a whole video file can wreck bandwidth, so I built this to split a video into chunks display a video chunk by chunk. It includes a config where you can define video IDs and file paths and even dynamically add more videos. Project is fully unit tested with jest and uses Travis CI for testing on every commit.",
                        date: "SEPT. 12 2021",
                        link: "http://marreel.com",
                        imgurl: "/eng1.jpg",
                        yStart: "1",
                        yEnd: "3",
                      }),
                      (0, r.jsx)(E, {
                        title: "ROBOTICS (VEX)",
                        category: "EMBEDDED C++ | LEADERSHIP",
                        description:
                          "Repo for this years VEX Robotics team 75491. Primarily developed by me, but in the proccess I lead a team of people to create their own. These people joined with zero expirience coding and ended developing and contributing functional code on Github.",
                        date: "SEPT. 2019 - CURRENT",
                        link: "http://marreel.com",
                      }),
                      (0, r.jsx)(E, {
                        title: "EXO ARM",
                        category: "LINUX | C++ | FUSION",
                        description:
                          "An exoskeleton arm currently in development. Soft-body-nylon frame paired with a linear actuator for maximum comfort and mobility. Utilizes a hand built EMG circuit, and an Rasperry Pi running a C++ program to calculate output voltages.",
                        date: "MAR. 22 2022 - CURRENT",
                        link: "http://marreel.com",
                      }),
                      (0, r.jsx)(E, {
                        title: "ARC LANG",
                        category: "TYPESCRIPT | LLVM",
                        description:
                          "A compiler aimed at working like typescript, but compiling down to LLVM IR to have bare metal speed. Very very simple programs work, but still a work in progress.",
                        date: "Mar. 1 2020",
                        link: "http://marreel.com",
                      }),
                      (0, r.jsx)(E, {
                        title: "VEX CORE DRIVETRAIN",
                        category: "VEX C++",
                        description:
                          "Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards.",
                        date: "MAR. 1 2020",
                        link: "http://MARreel.com",
                        yStart: "3",
                        yEnd: "5",
                        xStart: "2",
                        xEnd: "2",
                      }),
                      (0, r.jsx)(E, {
                        title: "VEX CORE DRIVETRAIN",
                        category: "VEX C++",
                        description:
                          "Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards.",
                        date: "MAR. 1 2020",
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
      function j() {
        var e = (0, i.Ge)(),
          t = e.connector,
          n = (e.library, e.account, e.activate),
          o = (e.deactivate, e.active, e.error),
          s = (0, a.useState)(),
          c = s[0],
          l = s[1];
        (0, a.useEffect)(
          function () {
            c && c === t && l(void 0);
          },
          [c, t]
        );
        var u = (function () {
          var e = (0, i.Ge)(),
            t = e.activate,
            n = e.active,
            r = (0, a.useState)(!1),
            o = r[0],
            s = r[1];
          return (
            (0, a.useEffect)(function () {
              d.isAuthorized().then(function (e) {
                e
                  ? t(d, void 0, !0).catch(function () {
                      s(!0);
                    })
                  : s(!0);
              });
            }, []),
            (0, a.useEffect)(
              function () {
                !o && n && s(!0);
              },
              [o, n]
            ),
            o
          );
        })();
        !(function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, i.Ge)(),
            n = t.active,
            r = t.error,
            o = t.activate;
          (0, a.useEffect)(
            function () {
              var t = window.ethereum;
              if (t && t.on && !n && !r && !e) {
                var i = function () {
                    v.warn("Handling 'connect' event"), o(d);
                  },
                  a = function (e) {
                    v.warn("Handling 'chainChanged' event with payload", e), o(d);
                  },
                  s = function (e) {
                    v.warn("Handling 'accountsChanged' event with payload", e), e.length > 0 && o(d);
                  },
                  c = function (e) {
                    v.warn("Handling 'networkChanged' event with payload", e), o(d);
                  };
                return (
                  t.on("connect", i),
                  t.on("chainChanged", a),
                  t.on("accountsChanged", s),
                  t.on("networkChanged", c),
                  function () {
                    t.removeListener &&
                      (t.removeListener("connect", i),
                      t.removeListener("chainChanged", a),
                      t.removeListener("accountsChanged", s),
                      t.removeListener("networkChanged", c));
                  }
                );
              }
            },
            [n, r, e, o]
          );
        })(!u || !!c);
        var f,
          m = function (e) {
            return e === t;
          },
          g = !u || !!c || m(d) || m(h) || !!o;
        return (0, r.jsxs)("button", {
          type: "button",
          className: "btn btn-ghost btn-sm rounded-btn",
          disabled: g,
          onClick: function () {
            l(d), n(d);
          },
          children: [
            (0, r.jsxs)("div", {
              className: "",
              children: [
                ((f = d),
                f === c && (0, r.jsx)("p", { className: "btn btn-ghost btn-sm rounded-btn", children: "loading..." })),
                m(d) && (0, r.jsx)("span", { role: "img", "aria-label": "check", children: "\u2705" }),
              ],
            }),
            "Connect with MetaMask",
          ],
        });
      }
      var R = function () {
        return (0, r.jsxs)("div", {
          className: "header",
          children: [
            (0, r.jsx)("p", { className: "btn btn-ghost btn-sm rounded-btn vfont", children: "GITHUB" }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("p", { className: "btn btn-ghost btn-sm rounded-btn vfont", children: "INSTA" }),
            (0, r.jsxs)("div", {
              className: "flex items-stretch",
              children: [(0, r.jsx)(g, {}), (0, r.jsx)(y, {}), (0, r.jsx)(j, {})],
            }),
          ],
        });
      };
      function C(e, t, n) {
        var r = (0, a.useRef)();
        (0, a.useEffect)(
          function () {
            var i = (null === n || void 0 === n ? void 0 : n.current) || window;
            if (i && i.addEventListener) {
              r.current !== t && (r.current = t);
              var a = function (e) {
                (null === r || void 0 === r ? void 0 : r.current) && r.current(e);
              };
              return (
                i.addEventListener(e, a),
                function () {
                  i.removeEventListener(e, a);
                }
              );
            }
          },
          [e, n, t]
        );
      }
      var N = function (e, t) {
        var n = function () {
            try {
              var n = window.localStorage.getItem(e);
              return n
                ? (function (e) {
                    try {
                      return "undefined" === e ? void 0 : JSON.parse(null !== e && void 0 !== e ? e : "");
                    } catch (t) {
                      return void console.log("parsing error on", { value: e });
                    }
                  })(n)
                : t;
            } catch (r) {
              return console.warn("Error reading localStorage key \u201c".concat(e, "\u201d:"), r), t;
            }
          },
          r = (0, a.useState)(n),
          i = r[0],
          o = r[1];
        (0, a.useEffect)(function () {
          o(n());
        }, []);
        var s = function () {
          o(n());
        };
        return (
          C("storage", s),
          C("local-storage", s),
          [
            i,
            function (t) {
              try {
                var n =
                  ((r = t),
                  (
                    null != (a = Function) && "undefined" !== typeof Symbol && a[Symbol.hasInstance]
                      ? a[Symbol.hasInstance](r)
                      : r instanceof a
                  )
                    ? t(i)
                    : t);
                window.localStorage.setItem(e, JSON.stringify(n)),
                  o(n),
                  window.dispatchEvent(new Event("local-storage"));
              } catch (s) {
                console.warn("Error setting localStorage key \u201c".concat(e, "\u201d:"), s);
              }
              var r, a;
            },
          ]
        );
      };
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function I(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                i,
                a = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
              } catch (c) {
                (s = !0), (i = c);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return S(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var k = function () {
        var e = I(N("theme", "dark"), 2),
          t = e[0];
        e[1];
        (0, a.useEffect)(function () {
          document.documentElement.setAttribute("data-theme", t);
        }, []);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            style: { overflow: "hidden", height: "100vh" },
            children: (0, r.jsxs)(i.Ht, { getLibrary: b, children: [(0, r.jsx)(R, {}), (0, r.jsx)(w, {})] }),
          }),
        });
      };
    },
    6601: function () {},
  },
  function (e) {
    e.O(0, [906, 774, 888, 179], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
