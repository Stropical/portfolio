(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [70],
  {
    6886: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          detectEnv: function () {
            return v;
          },
          detectOS: function () {
            return y;
          },
          formatIOSMobile: function () {
            return W;
          },
          formatMobileRegistry: function () {
            return G;
          },
          formatMobileRegistryEntry: function () {
            return X;
          },
          getClientMeta: function () {
            return N;
          },
          getCrypto: function () {
            return P;
          },
          getCryptoOrThrow: function () {
            return B;
          },
          getDappRegistryUrl: function () {
            return Z;
          },
          getDocument: function () {
            return C;
          },
          getDocumentOrThrow: function () {
            return S;
          },
          getFromWindow: function () {
            return k;
          },
          getFromWindowOrThrow: function () {
            return R;
          },
          getLocal: function () {
            return J;
          },
          getLocalStorage: function () {
            return U;
          },
          getLocalStorageOrThrow: function () {
            return L;
          },
          getLocation: function () {
            return T;
          },
          getLocationOrThrow: function () {
            return O;
          },
          getMobileLinkRegistry: function () {
            return Y;
          },
          getMobileRegistryEntry: function () {
            return K;
          },
          getNavigator: function () {
            return I;
          },
          getNavigatorOrThrow: function () {
            return A;
          },
          getWalletRegistryUrl: function () {
            return Q;
          },
          isAndroid: function () {
            return w;
          },
          isBrowser: function () {
            return x;
          },
          isIOS: function () {
            return b;
          },
          isMobile: function () {
            return M;
          },
          isNode: function () {
            return E;
          },
          mobileLinkChoiceKey: function () {
            return H;
          },
          removeLocal: function () {
            return z;
          },
          safeJsonParse: function () {
            return j;
          },
          safeJsonStringify: function () {
            return D;
          },
          saveMobileLinkInfo: function () {
            return $;
          },
          setLocal: function () {
            return F;
          },
        });
      var r = n(5755),
        o = n(2873),
        i = n(4155),
        s = function () {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
          var r = Array(t),
            o = 0;
          for (e = 0; e < n; e++) for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
          return r;
        },
        a = function (t, e, n) {
          (this.name = t), (this.version = e), (this.os = n), (this.type = "browser");
        },
        u = function (t) {
          (this.version = t), (this.type = "node"), (this.name = "node"), (this.os = i.platform);
        },
        c = function (t, e, n, r) {
          (this.name = t), (this.version = e), (this.os = n), (this.bot = r), (this.type = "bot-device");
        },
        h = function () {
          (this.type = "bot"), (this.bot = !0), (this.name = "bot"), (this.version = null), (this.os = null);
        },
        l = function () {
          (this.type = "react-native"), (this.name = "react-native"), (this.version = null), (this.os = null);
        },
        f = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        d = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FBAV\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        p = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function g(t) {
        return t
          ? _(t)
          : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
          ? new l()
          : "undefined" !== typeof navigator
          ? _(navigator.userAgent)
          : "undefined" !== typeof i && i.version
          ? new u(i.version.slice(1))
          : null;
      }
      function m(t) {
        return (
          "" !== t &&
          d.reduce(function (e, n) {
            var r = n[0],
              o = n[1];
            if (e) return e;
            var i = o.exec(t);
            return !!i && [r, i];
          }, !1)
        );
      }
      function _(t) {
        var e = m(t);
        if (!e) return null;
        var n = e[0],
          r = e[1];
        if ("searchbot" === n) return new h();
        var o = r[1] && r[1].split(/[._]/).slice(0, 3);
        o
          ? o.length < 3 &&
            (o = s(
              o,
              (function (t) {
                for (var e = [], n = 0; n < t; n++) e.push("0");
                return e;
              })(3 - o.length)
            ))
          : (o = []);
        var i = o.join("."),
          u = (function (t) {
            for (var e = 0, n = p.length; e < n; e++) {
              var r = p[e],
                o = r[0];
              if (r[1].exec(t)) return o;
            }
            return null;
          })(t),
          l = f.exec(t);
        return l && l[1] ? new c(n, i, u, l[1]) : new a(n, i, u);
      }
      function v(t) {
        return g(t);
      }
      function y() {
        const t = v();
        return t && t.os ? t.os : void 0;
      }
      function w() {
        const t = y();
        return !!t && t.toLowerCase().includes("android");
      }
      function b() {
        const t = y();
        return (
          !!t && (t.toLowerCase().includes("ios") || (t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1))
        );
      }
      function M() {
        return !!y() && (w() || b());
      }
      function E() {
        const t = v();
        return !(!t || !t.name) && "node" === t.name.toLowerCase();
      }
      function x() {
        return !E() && !!I();
      }
      const k = o.getFromWindow,
        R = o.getFromWindowOrThrow,
        S = o.getDocumentOrThrow,
        C = o.getDocument,
        A = o.getNavigatorOrThrow,
        I = o.getNavigator,
        O = o.getLocationOrThrow,
        T = o.getLocation,
        B = o.getCryptoOrThrow,
        P = o.getCrypto,
        L = o.getLocalStorageOrThrow,
        U = o.getLocalStorage;
      function N() {
        return r.D();
      }
      var q = n(5094);
      const j = q.D,
        D = q.u;
      function F(t, e) {
        const n = D(e),
          r = U();
        r && r.setItem(t, n);
      }
      function J(t) {
        let e = null,
          n = null;
        const r = U();
        return r && (n = r.getItem(t)), (e = n ? j(n) : n), e;
      }
      function z(t) {
        const e = U();
        e && e.removeItem(t);
      }
      const H = "WALLETCONNECT_DEEPLINK_CHOICE";
      function W(t, e) {
        const n = encodeURIComponent(t);
        return e.universalLink
          ? `${e.universalLink}/wc?uri=${n}`
          : e.deepLink
          ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${n}`
          : "";
      }
      function $(t) {
        const e = t.href.split("?")[0];
        F(H, Object.assign(Object.assign({}, t), { href: e }));
      }
      function K(t, e) {
        return t.filter((t) => t.name.toLowerCase().includes(e.toLowerCase()))[0];
      }
      function Y(t, e) {
        let n = t;
        return e && (n = e.map((e) => K(t, e)).filter(Boolean)), n;
      }
      const V = "https://registry.walletconnect.com";
      function Q() {
        return V + "/api/v2/wallets";
      }
      function Z() {
        return V + "/api/v2/dapps";
      }
      function X(t, e = "mobile") {
        var n;
        return {
          name: t.name || "",
          shortName: t.metadata.shortName || "",
          color: t.metadata.colors.primary || "",
          logo: null !== (n = t.image_url.sm) && void 0 !== n ? n : "",
          universalLink: t[e].universal || "",
          deepLink: t[e].native || "",
        };
      }
      function G(t, e = "mobile") {
        return Object.values(t)
          .filter((t) => !!t[e].universal || !!t[e].native)
          .map((t) => X(t, e));
      }
    },
    926: function (t, e, n) {
      "use strict";
      function r() {
        return (
          (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) ||
          (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) ||
          {}
        );
      }
      function o() {
        const t = r();
        return t.subtle || t.webkitSubtle;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0),
        (e.getBrowerCrypto = r),
        (e.getSubtleCrypto = o),
        (e.isBrowserCryptoAvailable = function () {
          return !!r() && !!o();
        });
    },
    8618: function (t, e, n) {
      "use strict";
      var r = n(4155);
      function o() {
        return (
          "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
        );
      }
      function i() {
        return "undefined" !== typeof r && "undefined" !== typeof r.versions && "undefined" !== typeof r.versions.node;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowser = e.isNode = e.isReactNative = void 0),
        (e.isReactNative = o),
        (e.isNode = i),
        (e.isBrowser = function () {
          return !o() && !i();
        });
    },
    1468: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t) "default" === n || e.hasOwnProperty(n) || r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), o(n(926), e), o(n(8618), e);
    },
    1070: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return qt;
          },
        });
      var r = {};
      n.r(r),
        n.d(r, {
          decrypt: function () {
            return Tt;
          },
          encrypt: function () {
            return Ot;
          },
          generateKey: function () {
            return At;
          },
          verifyHmac: function () {
            return It;
          },
        });
      var o = n(8404),
        i = n.n(o),
        s = n(7187),
        a = n(6186);
      class u extends a.IJsonRpcProvider {
        constructor(t) {
          super(t),
            (this.events = new s.EventEmitter()),
            (this.connection = this.setConnection(t)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(t = this.connection) {
          await this.open(t);
        }
        async disconnect() {
          await this.close();
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async request(t, e) {
          return this.requestStrict((0, a.formatJsonRpcRequest)(t.method, t.params || []), e);
        }
        async requestStrict(t, e) {
          return new Promise(async (n, r) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (o) {
                r(o);
              }
            this.events.on(`${t.id}`, (t) => {
              (0, a.isJsonRpcError)(t) ? r(t.error.message) : n(t.result);
            });
            try {
              await this.connection.send(t, e);
            } catch (o) {
              r(o);
            }
          });
        }
        setConnection(t = this.connection) {
          return t;
        }
        onPayload(t) {
          this.events.emit("payload", t),
            (0, a.isJsonRpcResponse)(t)
              ? this.events.emit(`${t.id}`, t)
              : this.events.emit("message", { type: t.method, data: t.params });
        }
        async open(t = this.connection) {
          (this.connection === t && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" === typeof t && (await this.connection.open(t), (t = this.connection)),
            (this.connection = this.setConnection(t)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close(), this.events.emit("disconnect");
        }
        registerEventListeners() {
          this.connection.on("payload", (t) => this.onPayload(t)),
            this.connection.on("close", () => this.events.emit("disconnect")),
            this.connection.on("error", (t) => this.events.emit("error", t));
        }
      }
      var c = n(699),
        h = n.n(c),
        l = n(5094);
      const f = { headers: { Accept: "application/json", "Content-Type": "application/json" }, method: "POST" };
      class d {
        constructor(t) {
          if (
            ((this.url = t),
            (this.events = new s.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !(0, a.isHttpUrl)(t))
          )
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
          this.url = t;
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open(t = this.url) {
          await this.register(t);
        }
        async close() {
          if (!this.isAvailable) throw new Error("Connection already closed");
          this.onClose();
        }
        async send(t, e) {
          this.isAvailable || (await this.register());
          try {
            const e = (0, l.u)(t),
              n = await h()(this.url, Object.assign(Object.assign({}, f), { body: e })),
              r = await n.json();
            this.onPayload({ data: r });
          } catch (n) {
            this.onError(t.id, n);
          }
        }
        async register(t = this.url) {
          if (!(0, a.isHttpUrl)(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
          if (this.registering)
            return new Promise((t, e) => {
              this.events.once("register_error", (t) => {
                e(t);
              }),
                this.events.once("open", () => {
                  if ("undefined" === typeof this.isAvailable)
                    return e(new Error("HTTP connection is missing or invalid"));
                  t();
                });
            });
          (this.url = t), (this.registering = !0);
          try {
            const e = (0, l.u)({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
            await h()(t, Object.assign(Object.assign({}, f), { body: e })), this.onOpen();
          } catch (e) {
            const t = this.parseError(e);
            throw (this.events.emit("register_error", t), this.onClose(), t);
          }
        }
        onOpen() {
          (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
        }
        onPayload(t) {
          if ("undefined" === typeof t.data) return;
          const e = "string" === typeof t.data ? (0, l.D)(t.data) : t.data;
          this.events.emit("payload", e);
        }
        onError(t, e) {
          const n = this.parseError(e),
            r = n.message || n.toString(),
            o = (0, a.formatJsonRpcError)(t, r);
          this.events.emit("payload", o);
        }
        parseError(t, e = this.url) {
          return (0, a.parseConnectionError)(t, e, "HTTP");
        }
      }
      var p = n(6886);
      const g = [
          "session_request",
          "session_update",
          "exchange_key",
          "connect",
          "disconnect",
          "display_uri",
          "modal_closed",
          "transport_open",
          "transport_close",
          "transport_error",
        ],
        m = [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "eth_signTypedData",
          "eth_signTypedData_v1",
          "eth_signTypedData_v2",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "personal_sign",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        _ = { 1: "mainnet", 3: "ropsten", 4: "rinkeby", 5: "goerli", 42: "kovan" };
      var v = n(1460),
        y = n.n(v),
        w = (n(4501), n(5054)),
        b = n.n(w),
        M = n(8764).Buffer;
      const E = "hex",
        x = "utf8",
        k = "0";
      function R(t) {
        return new Uint8Array(t);
      }
      function S(t, e = !1) {
        const n = t.toString(E);
        return e ? D(n) : n;
      }
      function C(t) {
        return t.toString(x);
      }
      function A(t) {
        return b()(t);
      }
      function I(t, e = !1) {
        return S(A(t), e);
      }
      function O(t) {
        return C(A(t));
      }
      function T(t) {
        return M.from(j(t), E);
      }
      function B(t) {
        return R(T(t));
      }
      function P(t) {
        return M.from(t, x);
      }
      function L(t) {
        return R(P(t));
      }
      function U(t, e) {
        return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e);
      }
      function N(...t) {
        let e = [];
        return t.forEach((t) => (e = e.concat(Array.from(t)))), new Uint8Array([...e]);
      }
      function q(t, e = 8, n = "0") {
        return (function (t, e, n = "0") {
          return J(t, e, !0, n);
        })(
          t,
          (function (t, e = 8) {
            const n = t % e;
            return n ? ((t - n) / e) * e + e : t;
          })(t.length, e),
          n
        );
      }
      function j(t) {
        return t.replace(/^0x/, "");
      }
      function D(t) {
        return t.startsWith("0x") ? t : `0x${t}`;
      }
      function F(t) {
        return (t = q((t = j(t)), 2)) && (t = D(t)), t;
      }
      function J(t, e, n, r = "0") {
        const o = e - t.length;
        let i = t;
        if (o > 0) {
          const e = r.repeat(o);
          i = n ? e + t : t + e;
        }
        return i;
      }
      function z(t) {
        return A(new Uint8Array(t));
      }
      function H(t, e) {
        return (function (t, e = !1) {
          return S(P(t), e);
        })(t, !e);
      }
      function W(t, e) {
        const n = j(F(new (y())(t).toString(16)));
        return e ? n : D(n);
      }
      var $ = n(1094);
      function K(t) {
        return F(t);
      }
      function Y(t) {
        return (function (t) {
          const e = t.startsWith("0x");
          return (t = (t = j(t)).startsWith(k) ? t.substring(1) : t), e ? D(t) : t;
        })(D(t));
      }
      const V = a.payloadId;
      function Q() {
        return ((t, e) => {
          for (
            e = t = "";
            t++ < 36;
            e += (51 * t) & 52 ? (15 ^ t ? 8 ^ (Math.random() * (20 ^ t ? 16 : 4)) : 4).toString(16) : "-"
          );
          return e;
        })();
      }
      function Z(t, e) {
        let n;
        const r = (function (t, e) {
          let n;
          const r = _[t];
          return r && (n = `https://${r}.infura.io/v3/${e}`), n;
        })(t, e.infuraId);
        return e.custom && e.custom[t] ? (n = e.custom[t]) : r && (n = r), n;
      }
      function X(t, e) {
        return U(t, e);
      }
      function G(t) {
        return "undefined" !== typeof t.result;
      }
      function tt(t) {
        return "undefined" !== typeof t.error;
      }
      function et(t) {
        return "undefined" !== typeof t.event;
      }
      function nt(t) {
        t = j(t.toLowerCase());
        const e = j((0, $.keccak_256)(P(t)));
        let n = "";
        for (let r = 0; r < t.length; r++) parseInt(e[r], 16) > 7 ? (n += t[r].toUpperCase()) : (n += t[r]);
        return D(n);
      }
      function rt(t) {
        var e;
        return (e = t) && e.length && !X(t[0]) && (t[0] = H(t[0])), t;
      }
      function ot(t) {
        if ("undefined" !== typeof t.type && "0" !== t.type) return t;
        if (
          "undefined" === typeof t.from ||
          !(e = t.from) ||
          "0x" !== e.toLowerCase().substring(0, 2) ||
          !/^(0x)?[0-9a-f]{40}$/i.test(e) ||
          (!/^(0x)?[0-9a-f]{40}$/.test(e) && !/^(0x)?[0-9A-F]{40}$/.test(e) && e !== nt(e))
        )
          throw new Error("Transaction object must include a valid 'from' value.");
        var e;
        function n(t) {
          let e = t;
          return (
            ("number" === typeof t ||
              ("string" === typeof t &&
                !(function (t) {
                  return "" === t || ("string" === typeof t && "" === t.trim());
                })(t))) &&
              (X(t) ? "string" === typeof t && (e = K(t)) : (e = W(t))),
            "string" === typeof e && (e = Y(e)),
            e
          );
        }
        const r = {
            from: K(t.from),
            to: "undefined" === typeof t.to ? "" : K(t.to),
            gasPrice: "undefined" === typeof t.gasPrice ? "" : n(t.gasPrice),
            gas: "undefined" === typeof t.gas ? ("undefined" === typeof t.gasLimit ? "" : n(t.gasLimit)) : n(t.gas),
            value: "undefined" === typeof t.value ? "" : n(t.value),
            nonce: "undefined" === typeof t.nonce ? "" : n(t.nonce),
            data: "undefined" === typeof t.data ? "" : K(t.data) || "0x",
          },
          o = ["gasPrice", "gas", "value", "nonce"];
        return (
          Object.keys(r).forEach((t) => {
            !r[t].trim().length && o.includes(t) && delete r[t];
          }),
          r
        );
      }
      var it = n(7563);
      function st(t, e) {
        let n = at(t);
        return (
          (n = Object.assign(Object.assign({}, n), e)),
          (t = (function (t) {
            return it.stringify(t);
          })(n)),
          t
        );
      }
      function at(t) {
        return it.parse(t);
      }
      var ut = n(8178),
        ct = n.n(ut);
      var ht = class {
        constructor() {
          (this._eventEmitters = []),
            "undefined" !== typeof window &&
              "undefined" !== typeof window.addEventListener &&
              (window.addEventListener("online", () => this.trigger("online")),
              window.addEventListener("offline", () => this.trigger("offline")));
        }
        on(t, e) {
          this._eventEmitters.push({ event: t, callback: e });
        }
        trigger(t) {
          let e = [];
          t && (e = this._eventEmitters.filter((e) => e.event === t)),
            e.forEach((t) => {
              t.callback();
            });
        }
      };
      const lt = "undefined" !== typeof n.g.WebSocket ? n.g.WebSocket : n(8007);
      var ft = class {
        constructor(t) {
          if (
            ((this.opts = t),
            (this._queue = []),
            (this._events = []),
            (this._subscriptions = []),
            (this._protocol = t.protocol),
            (this._version = t.version),
            (this._url = ""),
            (this._netMonitor = null),
            (this._socket = null),
            (this._nextSocket = null),
            (this._subscriptions = t.subscriptions || []),
            (this._netMonitor = t.netMonitor || new ht()),
            !t.url || "string" !== typeof t.url)
          )
            throw new Error("Missing or invalid WebSocket url");
          (this._url = t.url), this._netMonitor.on("online", () => this._socketCreate());
        }
        set readyState(t) {}
        get readyState() {
          return this._socket ? this._socket.readyState : -1;
        }
        set connecting(t) {}
        get connecting() {
          return 0 === this.readyState;
        }
        set connected(t) {}
        get connected() {
          return 1 === this.readyState;
        }
        set closing(t) {}
        get closing() {
          return 2 === this.readyState;
        }
        set closed(t) {}
        get closed() {
          return 3 === this.readyState;
        }
        open() {
          this._socketCreate();
        }
        close() {
          this._socketClose();
        }
        send(t, e, n) {
          if (!e || "string" !== typeof e) throw new Error("Missing or invalid topic field");
          this._socketSend({ topic: e, type: "pub", payload: t, silent: !!n });
        }
        subscribe(t) {
          this._socketSend({ topic: t, type: "sub", payload: "", silent: !0 });
        }
        on(t, e) {
          this._events.push({ event: t, callback: e });
        }
        _socketCreate() {
          if (this._nextSocket) return;
          const t = (function (t, e, n) {
            var r, o;
            const i = (
                t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t
              ).split("?"),
              s = (0, p.isBrowser)()
                ? {
                    protocol: e,
                    version: n,
                    env: "browser",
                    host: (null === (r = (0, p.getLocation)()) || void 0 === r ? void 0 : r.host) || "",
                  }
                : {
                    protocol: e,
                    version: n,
                    env: (null === (o = (0, p.detectEnv)()) || void 0 === o ? void 0 : o.name) || "",
                  },
              a = st(
                (function (t) {
                  const e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
                  return "undefined" !== typeof e ? t.substr(e) : "";
                })(i[1] || ""),
                s
              );
            return i[0] + "?" + a;
          })(this._url, this._protocol, this._version);
          if (((this._nextSocket = new lt(t)), !this._nextSocket)) throw new Error("Failed to create socket");
          (this._nextSocket.onmessage = (t) => this._socketReceive(t)),
            (this._nextSocket.onopen = () => this._socketOpen()),
            (this._nextSocket.onerror = (t) => this._socketError(t)),
            (this._nextSocket.onclose = () => {
              setTimeout(() => {
                (this._nextSocket = null), this._socketCreate();
              }, 1e3);
            });
        }
        _socketOpen() {
          this._socketClose(),
            (this._socket = this._nextSocket),
            (this._nextSocket = null),
            this._queueSubscriptions(),
            this._pushQueue();
        }
        _socketClose() {
          this._socket && ((this._socket.onclose = () => {}), this._socket.close());
        }
        _socketSend(t) {
          const e = JSON.stringify(t);
          this._socket && 1 === this._socket.readyState
            ? this._socket.send(e)
            : (this._setToQueue(t), this._socketCreate());
        }
        async _socketReceive(t) {
          let e;
          try {
            e = JSON.parse(t.data);
          } catch (n) {
            return;
          }
          if (
            (this._socketSend({ topic: e.topic, type: "ack", payload: "", silent: !0 }),
            this._socket && 1 === this._socket.readyState)
          ) {
            const t = this._events.filter((t) => "message" === t.event);
            t && t.length && t.forEach((t) => t.callback(e));
          }
        }
        _socketError(t) {
          const e = this._events.filter((t) => "error" === t.event);
          e && e.length && e.forEach((e) => e.callback(t));
        }
        _queueSubscriptions() {
          this._subscriptions.forEach((t) => this._queue.push({ topic: t, type: "sub", payload: "", silent: !0 })),
            (this._subscriptions = this.opts.subscriptions || []);
        }
        _setToQueue(t) {
          this._queue.push(t);
        }
        _pushQueue() {
          this._queue.forEach((t) => this._socketSend(t)), (this._queue = []);
        }
      };
      const dt = "Session currently connected",
        pt = "Session currently disconnected",
        gt = "JSON RPC response format is invalid",
        mt = "User close QRCode Modal";
      var _t = class {
        constructor() {
          this._eventEmitters = [];
        }
        subscribe(t) {
          this._eventEmitters.push(t);
        }
        unsubscribe(t) {
          this._eventEmitters = this._eventEmitters.filter((e) => e.event !== t);
        }
        trigger(t) {
          let e,
            n = [];
          (e = "undefined" !== typeof t.method ? t.method : G(t) || tt(t) ? `response:${t.id}` : et(t) ? t.event : ""),
            e && (n = this._eventEmitters.filter((t) => t.event === e)),
            (n && n.length) ||
              (function (t) {
                return g.includes(t) || t.startsWith("wc_");
              })(e) ||
              et(e) ||
              (n = this._eventEmitters.filter((t) => "call_request" === t.event)),
            n.forEach((e) => {
              if (tt(t)) {
                const n = new Error(t.error.message);
                e.callback(n, null);
              } else e.callback(null, t);
            });
        }
      };
      var vt = class {
        constructor(t = "walletconnect") {
          this.storageId = t;
        }
        getSession() {
          let t = null;
          const e = (0, p.getLocal)(this.storageId);
          return e && "undefined" !== typeof e.bridge && (t = e), t;
        }
        setSession(t) {
          return (0, p.setLocal)(this.storageId, t), t;
        }
        removeSession() {
          (0, p.removeLocal)(this.storageId);
        }
      };
      const yt = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map((t) => `https://${t}.bridge.walletconnect.org`);
      function wt() {
        return yt[Math.floor(Math.random() * yt.length)];
      }
      var bt = class {
          constructor(t) {
            if (
              ((this.protocol = "wc"),
              (this.version = 1),
              (this._bridge = ""),
              (this._key = null),
              (this._clientId = ""),
              (this._clientMeta = null),
              (this._peerId = ""),
              (this._peerMeta = null),
              (this._handshakeId = 0),
              (this._handshakeTopic = ""),
              (this._connected = !1),
              (this._accounts = []),
              (this._chainId = 0),
              (this._networkId = 0),
              (this._rpcUrl = ""),
              (this._eventManager = new _t()),
              (this._clientMeta = (0, p.getClientMeta)() || t.connectorOpts.clientMeta || null),
              (this._cryptoLib = t.cryptoLib),
              (this._sessionStorage = t.sessionStorage || new vt(t.connectorOpts.storageId)),
              (this._qrcodeModal = t.connectorOpts.qrcodeModal),
              (this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions),
              (this._signingMethods = [...m, ...(t.connectorOpts.signingMethods || [])]),
              !t.connectorOpts.bridge && !t.connectorOpts.uri && !t.connectorOpts.session)
            )
              throw new Error("Missing one of the required parameters: bridge / uri / session");
            var e;
            t.connectorOpts.bridge &&
              (this.bridge = (function (t) {
                return (
                  "walletconnect.org" ===
                  (function (t) {
                    return (function (t) {
                      let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
                      return (e = e.split(":")[0]), (e = e.split("?")[0]), e;
                    })(t)
                      .split(".")
                      .slice(-2)
                      .join(".");
                  })(t)
                );
              })((e = t.connectorOpts.bridge))
                ? wt()
                : e),
              t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
            const n = t.connectorOpts.session || this._getStorageSession();
            n && (this.session = n),
              this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"),
              (this._transport =
                t.transport ||
                new ft({
                  protocol: this.protocol,
                  version: this.version,
                  url: this.bridge,
                  subscriptions: [this.clientId],
                })),
              this._subscribeToInternalEvents(),
              this._initTransport(),
              t.connectorOpts.uri && this._subscribeToSessionRequest(),
              t.pushServerOpts && this._registerPushServer(t.pushServerOpts);
          }
          set bridge(t) {
            t && (this._bridge = t);
          }
          get bridge() {
            return this._bridge;
          }
          set key(t) {
            if (!t) return;
            const e = B(t).buffer;
            this._key = e;
          }
          get key() {
            if (this._key) {
              return (t = this._key), (e = !0), I(new Uint8Array(t), !e);
            }
            var t, e;
            return "";
          }
          set clientId(t) {
            t && (this._clientId = t);
          }
          get clientId() {
            let t = this._clientId;
            return t || (t = this._clientId = Q()), this._clientId;
          }
          set peerId(t) {
            t && (this._peerId = t);
          }
          get peerId() {
            return this._peerId;
          }
          set clientMeta(t) {}
          get clientMeta() {
            let t = this._clientMeta;
            return t || (t = this._clientMeta = (0, p.getClientMeta)()), t;
          }
          set peerMeta(t) {
            this._peerMeta = t;
          }
          get peerMeta() {
            return this._peerMeta;
          }
          set handshakeTopic(t) {
            t && (this._handshakeTopic = t);
          }
          get handshakeTopic() {
            return this._handshakeTopic;
          }
          set handshakeId(t) {
            t && (this._handshakeId = t);
          }
          get handshakeId() {
            return this._handshakeId;
          }
          get uri() {
            return this._formatUri();
          }
          set uri(t) {
            if (!t) return;
            const { handshakeTopic: e, bridge: n, key: r } = this._parseUri(t);
            (this.handshakeTopic = e), (this.bridge = n), (this.key = r);
          }
          set chainId(t) {
            this._chainId = t;
          }
          get chainId() {
            return this._chainId;
          }
          set networkId(t) {
            this._networkId = t;
          }
          get networkId() {
            return this._networkId;
          }
          set accounts(t) {
            this._accounts = t;
          }
          get accounts() {
            return this._accounts;
          }
          set rpcUrl(t) {
            this._rpcUrl = t;
          }
          get rpcUrl() {
            return this._rpcUrl;
          }
          set connected(t) {}
          get connected() {
            return this._connected;
          }
          set pending(t) {}
          get pending() {
            return !!this._handshakeTopic;
          }
          get session() {
            return {
              connected: this.connected,
              accounts: this.accounts,
              chainId: this.chainId,
              bridge: this.bridge,
              key: this.key,
              clientId: this.clientId,
              clientMeta: this.clientMeta,
              peerId: this.peerId,
              peerMeta: this.peerMeta,
              handshakeId: this.handshakeId,
              handshakeTopic: this.handshakeTopic,
            };
          }
          set session(t) {
            t &&
              ((this._connected = t.connected),
              (this.accounts = t.accounts),
              (this.chainId = t.chainId),
              (this.bridge = t.bridge),
              (this.key = t.key),
              (this.clientId = t.clientId),
              (this.clientMeta = t.clientMeta),
              (this.peerId = t.peerId),
              (this.peerMeta = t.peerMeta),
              (this.handshakeId = t.handshakeId),
              (this.handshakeTopic = t.handshakeTopic));
          }
          on(t, e) {
            const n = { event: t, callback: e };
            this._eventManager.subscribe(n);
          }
          off(t) {
            this._eventManager.unsubscribe(t);
          }
          async createInstantRequest(t) {
            this._key = await this._generateKey();
            const e = this._formatRequest({
              method: "wc_instantRequest",
              params: [{ peerId: this.clientId, peerMeta: this.clientMeta, request: this._formatRequest(t) }],
            });
            (this.handshakeId = e.id),
              (this.handshakeTopic = Q()),
              this._eventManager.trigger({ event: "display_uri", params: [this.uri] }),
              this.on("modal_closed", () => {
                throw new Error(mt);
              });
            const n = () => {
              this.killSession();
            };
            try {
              const t = await this._sendCallRequest(e);
              return t && n(), t;
            } catch (r) {
              throw (n(), r);
            }
          }
          async connect(t) {
            if (!this._qrcodeModal) throw new Error("QRCode Modal not provided");
            return this.connected
              ? { chainId: this.chainId, accounts: this.accounts }
              : (await this.createSession(t),
                new Promise(async (t, e) => {
                  this.on("modal_closed", () => e(new Error(mt))),
                    this.on("connect", (n, r) => {
                      if (n) return e(n);
                      t(r.params[0]);
                    });
                }));
          }
          async createSession(t) {
            if (this._connected) throw new Error(dt);
            if (this.pending) return;
            this._key = await this._generateKey();
            const e = this._formatRequest({
              method: "wc_sessionRequest",
              params: [
                { peerId: this.clientId, peerMeta: this.clientMeta, chainId: t && t.chainId ? t.chainId : null },
              ],
            });
            (this.handshakeId = e.id),
              (this.handshakeTopic = Q()),
              this._sendSessionRequest(e, "Session update rejected", { topic: this.handshakeTopic }),
              this._eventManager.trigger({ event: "display_uri", params: [this.uri] });
          }
          approveSession(t) {
            if (this._connected) throw new Error(dt);
            (this.chainId = t.chainId),
              (this.accounts = t.accounts),
              (this.networkId = t.networkId || 0),
              (this.rpcUrl = t.rpcUrl || "");
            const e = {
                approved: !0,
                chainId: this.chainId,
                networkId: this.networkId,
                accounts: this.accounts,
                rpcUrl: this.rpcUrl,
                peerId: this.clientId,
                peerMeta: this.clientMeta,
              },
              n = { id: this.handshakeId, jsonrpc: "2.0", result: e };
            this._sendResponse(n),
              (this._connected = !0),
              this._setStorageSession(),
              this._eventManager.trigger({
                event: "connect",
                params: [
                  { peerId: this.peerId, peerMeta: this.peerMeta, chainId: this.chainId, accounts: this.accounts },
                ],
              });
          }
          rejectSession(t) {
            if (this._connected) throw new Error(dt);
            const e = t && t.message ? t.message : "Session Rejected",
              n = this._formatResponse({ id: this.handshakeId, error: { message: e } });
            this._sendResponse(n),
              (this._connected = !1),
              this._eventManager.trigger({ event: "disconnect", params: [{ message: e }] }),
              this._removeStorageSession();
          }
          updateSession(t) {
            if (!this._connected) throw new Error(pt);
            (this.chainId = t.chainId),
              (this.accounts = t.accounts),
              (this.networkId = t.networkId || 0),
              (this.rpcUrl = t.rpcUrl || "");
            const e = {
                approved: !0,
                chainId: this.chainId,
                networkId: this.networkId,
                accounts: this.accounts,
                rpcUrl: this.rpcUrl,
              },
              n = this._formatRequest({ method: "wc_sessionUpdate", params: [e] });
            this._sendSessionRequest(n, "Session update rejected"),
              this._eventManager.trigger({
                event: "session_update",
                params: [{ chainId: this.chainId, accounts: this.accounts }],
              }),
              this._manageStorageSession();
          }
          async killSession(t) {
            const e = t ? t.message : "Session Disconnected",
              n = this._formatRequest({
                method: "wc_sessionUpdate",
                params: [{ approved: !1, chainId: null, networkId: null, accounts: null }],
              });
            await this._sendRequest(n), this._handleSessionDisconnect(e);
          }
          async sendTransaction(t) {
            if (!this._connected) throw new Error(pt);
            const e = ot(t),
              n = this._formatRequest({ method: "eth_sendTransaction", params: [e] });
            return await this._sendCallRequest(n);
          }
          async signTransaction(t) {
            if (!this._connected) throw new Error(pt);
            const e = ot(t),
              n = this._formatRequest({ method: "eth_signTransaction", params: [e] });
            return await this._sendCallRequest(n);
          }
          async signMessage(t) {
            if (!this._connected) throw new Error(pt);
            const e = this._formatRequest({ method: "eth_sign", params: t });
            return await this._sendCallRequest(e);
          }
          async signPersonalMessage(t) {
            if (!this._connected) throw new Error(pt);
            t = rt(t);
            const e = this._formatRequest({ method: "personal_sign", params: t });
            return await this._sendCallRequest(e);
          }
          async signTypedData(t) {
            if (!this._connected) throw new Error(pt);
            const e = this._formatRequest({ method: "eth_signTypedData", params: t });
            return await this._sendCallRequest(e);
          }
          async updateChain(t) {
            if (!this._connected) throw new Error("Session currently disconnected");
            const e = this._formatRequest({ method: "wallet_updateChain", params: [t] });
            return await this._sendCallRequest(e);
          }
          unsafeSend(t, e) {
            return (
              this._sendRequest(t, e),
              this._eventManager.trigger({ event: "call_request_sent", params: [{ request: t, options: e }] }),
              new Promise((e, n) => {
                this._subscribeToResponse(t.id, (t, r) => {
                  if (t) n(t);
                  else {
                    if (!r) throw new Error("Missing JSON RPC response");
                    e(r);
                  }
                });
              })
            );
          }
          async sendCustomRequest(t, e) {
            if (!this._connected) throw new Error(pt);
            switch (t.method) {
              case "eth_accounts":
                return this.accounts;
              case "eth_chainId":
                return W(this.chainId);
              case "eth_sendTransaction":
              case "eth_signTransaction":
                t.params && (t.params[0] = ot(t.params[0]));
                break;
              case "personal_sign":
                t.params && (t.params = rt(t.params));
            }
            const n = this._formatRequest(t);
            return await this._sendCallRequest(n, e);
          }
          approveRequest(t) {
            if (!G(t)) throw new Error('JSON-RPC success response must include "result" field');
            {
              const e = this._formatResponse(t);
              this._sendResponse(e);
            }
          }
          rejectRequest(t) {
            if (!tt(t)) throw new Error('JSON-RPC error response must include "error" field');
            {
              const e = this._formatResponse(t);
              this._sendResponse(e);
            }
          }
          transportClose() {
            this._transport.close();
          }
          async _sendRequest(t, e) {
            const n = this._formatRequest(t),
              r = await this._encrypt(n),
              o = "undefined" !== typeof (null === e || void 0 === e ? void 0 : e.topic) ? e.topic : this.peerId,
              i = JSON.stringify(r),
              s =
                "undefined" !== typeof (null === e || void 0 === e ? void 0 : e.forcePushNotification)
                  ? !e.forcePushNotification
                  : (function (t) {
                      return !!t.method.startsWith("wc_") || !m.includes(t.method);
                    })(n);
            this._transport.send(i, o, s);
          }
          async _sendResponse(t) {
            const e = await this._encrypt(t),
              n = this.peerId,
              r = JSON.stringify(e);
            this._transport.send(r, n, !0);
          }
          async _sendSessionRequest(t, e, n) {
            this._sendRequest(t, n), this._subscribeToSessionResponse(t.id, e);
          }
          _sendCallRequest(t, e) {
            return (
              this._sendRequest(t, e),
              this._eventManager.trigger({ event: "call_request_sent", params: [{ request: t, options: e }] }),
              this._subscribeToCallResponse(t.id)
            );
          }
          _formatRequest(t) {
            if ("undefined" === typeof t.method) throw new Error('JSON RPC request must have valid "method" value');
            return {
              id: "undefined" === typeof t.id ? V() : t.id,
              jsonrpc: "2.0",
              method: t.method,
              params: "undefined" === typeof t.params ? [] : t.params,
            };
          }
          _formatResponse(t) {
            if ("undefined" === typeof t.id) throw new Error('JSON RPC request must have valid "id" value');
            const e = { id: t.id, jsonrpc: "2.0" };
            if (tt(t)) {
              const n = (function (t) {
                const e = t.message || "Failed or Rejected Request";
                let n = -32e3;
                if (t && !t.code)
                  switch (e) {
                    case "Parse error":
                      n = -32700;
                      break;
                    case "Invalid request":
                      n = -32600;
                      break;
                    case "Method not found":
                      n = -32601;
                      break;
                    case "Invalid params":
                      n = -32602;
                      break;
                    case "Internal error":
                      n = -32603;
                      break;
                    default:
                      n = -32e3;
                  }
                return { code: n, message: e };
              })(t.error);
              return Object.assign(Object.assign(Object.assign({}, e), t), { error: n });
            }
            if (G(t)) {
              return Object.assign(Object.assign({}, e), t);
            }
            throw new Error(gt);
          }
          _handleSessionDisconnect(t) {
            const e = t || "Session Disconnected";
            this._connected ||
              (this._qrcodeModal && this._qrcodeModal.close(), (0, p.removeLocal)(p.mobileLinkChoiceKey)),
              this._connected && (this._connected = !1),
              this._handshakeId && (this._handshakeId = 0),
              this._handshakeTopic && (this._handshakeTopic = ""),
              this._peerId && (this._peerId = ""),
              this._eventManager.trigger({ event: "disconnect", params: [{ message: e }] }),
              this._removeStorageSession(),
              this.transportClose();
          }
          _handleSessionResponse(t, e) {
            e && e.approved
              ? (this._connected
                  ? (e.chainId && (this.chainId = e.chainId),
                    e.accounts && (this.accounts = e.accounts),
                    this._eventManager.trigger({
                      event: "session_update",
                      params: [{ chainId: this.chainId, accounts: this.accounts }],
                    }))
                  : ((this._connected = !0),
                    e.chainId && (this.chainId = e.chainId),
                    e.accounts && (this.accounts = e.accounts),
                    e.peerId && !this.peerId && (this.peerId = e.peerId),
                    e.peerMeta && !this.peerMeta && (this.peerMeta = e.peerMeta),
                    this._eventManager.trigger({
                      event: "connect",
                      params: [
                        {
                          peerId: this.peerId,
                          peerMeta: this.peerMeta,
                          chainId: this.chainId,
                          accounts: this.accounts,
                        },
                      ],
                    })),
                this._manageStorageSession())
              : this._handleSessionDisconnect(t);
          }
          async _handleIncomingMessages(t) {
            if (![this.clientId, this.handshakeTopic].includes(t.topic)) return;
            let e;
            try {
              e = JSON.parse(t.payload);
            } catch (r) {
              return;
            }
            const n = await this._decrypt(e);
            n && this._eventManager.trigger(n);
          }
          _subscribeToSessionRequest() {
            this._transport.subscribe(this.handshakeTopic);
          }
          _subscribeToResponse(t, e) {
            this.on(`response:${t}`, e);
          }
          _subscribeToSessionResponse(t, e) {
            this._subscribeToResponse(t, (t, n) => {
              t
                ? this._handleSessionResponse(t.message)
                : n.result
                ? this._handleSessionResponse(e, n.result)
                : n.error && n.error.message
                ? this._handleSessionResponse(n.error.message)
                : this._handleSessionResponse(e);
            });
          }
          _subscribeToCallResponse(t) {
            return new Promise((e, n) => {
              this._subscribeToResponse(t, (t, r) => {
                t
                  ? n(t)
                  : r.result
                  ? e(r.result)
                  : r.error && r.error.message
                  ? n(new Error(r.error.message))
                  : n(new Error(gt));
              });
            });
          }
          _subscribeToInternalEvents() {
            this.on("display_uri", () => {
              this._qrcodeModal &&
                this._qrcodeModal.open(
                  this.uri,
                  () => {
                    this._eventManager.trigger({ event: "modal_closed", params: [] });
                  },
                  this._qrcodeModalOptions
                );
            }),
              this.on("connect", () => {
                this._qrcodeModal && this._qrcodeModal.close();
              }),
              this.on("call_request_sent", (t, e) => {
                const { request: n } = e.params[0];
                if ((0, p.isMobile)() && this._signingMethods.includes(n.method)) {
                  const t = (0, p.getLocal)(p.mobileLinkChoiceKey);
                  t && (window.location.href = t.href);
                }
              }),
              this.on("wc_sessionRequest", (t, e) => {
                t &&
                  this._eventManager.trigger({
                    event: "error",
                    params: [{ code: "SESSION_REQUEST_ERROR", message: t.toString() }],
                  }),
                  (this.handshakeId = e.id),
                  (this.peerId = e.params[0].peerId),
                  (this.peerMeta = e.params[0].peerMeta);
                const n = Object.assign(Object.assign({}, e), { method: "session_request" });
                this._eventManager.trigger(n);
              }),
              this.on("wc_sessionUpdate", (t, e) => {
                t && this._handleSessionResponse(t.message),
                  this._handleSessionResponse("Session disconnected", e.params[0]);
              });
          }
          _initTransport() {
            this._transport.on("message", (t) => this._handleIncomingMessages(t)),
              this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] })),
              this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] })),
              this._transport.on("error", () =>
                this._eventManager.trigger({ event: "transport_error", params: ["Websocket connection failed"] })
              ),
              this._transport.open();
          }
          _formatUri() {
            return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(
              this.bridge
            )}&key=${this.key}`;
          }
          _parseUri(t) {
            const e = (function (t) {
              const e = t.indexOf(":"),
                n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                r = t.substring(0, e),
                o = (function (t) {
                  const e = t.split("@");
                  return { handshakeTopic: e[0], version: parseInt(e[1], 10) };
                })(t.substring(e + 1, n)),
                i = (function (t) {
                  const e = at(t);
                  return { key: e.key || "", bridge: e.bridge || "" };
                })("undefined" !== typeof n ? t.substr(n) : "");
              return Object.assign(Object.assign({ protocol: r }, o), i);
            })(t);
            if (e.protocol === this.protocol) {
              if (!e.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
              const t = e.handshakeTopic;
              if (!e.bridge) throw Error("Invalid or missing bridge url parameter value");
              const n = decodeURIComponent(e.bridge);
              if (!e.key) throw Error("Invalid or missing key parameter value");
              return { handshakeTopic: t, bridge: n, key: e.key };
            }
            throw new Error("URI format is invalid");
          }
          async _generateKey() {
            if (this._cryptoLib) {
              return await this._cryptoLib.generateKey();
            }
            return null;
          }
          async _encrypt(t) {
            const e = this._key;
            if (this._cryptoLib && e) {
              return await this._cryptoLib.encrypt(t, e);
            }
            return null;
          }
          async _decrypt(t) {
            const e = this._key;
            if (this._cryptoLib && e) {
              return await this._cryptoLib.decrypt(t, e);
            }
            return null;
          }
          _getStorageSession() {
            let t = null;
            return this._sessionStorage && (t = this._sessionStorage.getSession()), t;
          }
          _setStorageSession() {
            this._sessionStorage && this._sessionStorage.setSession(this.session);
          }
          _removeStorageSession() {
            this._sessionStorage && this._sessionStorage.removeSession();
          }
          _manageStorageSession() {
            this._connected ? this._setStorageSession() : this._removeStorageSession();
          }
          _registerPushServer(t) {
            if (!t.url || "string" !== typeof t.url)
              throw Error("Invalid or missing pushServerOpts.url parameter value");
            if (!t.type || "string" !== typeof t.type)
              throw Error("Invalid or missing pushServerOpts.type parameter value");
            if (!t.token || "string" !== typeof t.token)
              throw Error("Invalid or missing pushServerOpts.token parameter value");
            const e = {
              bridge: this.bridge,
              topic: this.clientId,
              type: t.type,
              token: t.token,
              peerName: "",
              language: t.language || "",
            };
            this.on("connect", async (n, r) => {
              if (n) throw n;
              if (t.peerMeta) {
                const t = r.params[0].peerMeta.name;
                e.peerName = t;
              }
              try {
                const n = await fetch(`${t.url}/new`, {
                  method: "POST",
                  headers: { Accept: "application/json", "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                });
                if (!(await n.json()).success) throw Error("Failed to register in Push Server");
              } catch (n) {
                throw Error("Failed to register in Push Server");
              }
            });
          }
        },
        Mt = n(1468);
      const Et = "AES-CBC",
        xt = "HMAC";
      async function kt(t, e = "AES-CBC") {
        return Mt.getSubtleCrypto().importKey(
          "raw",
          t,
          (function (t) {
            return t === Et ? { length: 256, name: Et } : { hash: { name: "SHA-256" }, name: xt };
          })(e),
          !0,
          (function (t) {
            return t === Et ? ["encrypt", "decrypt"] : ["sign", "verify"];
          })(e)
        );
      }
      function Rt(t, e, n) {
        return (async function (t, e, n) {
          const r = Mt.getSubtleCrypto(),
            o = await kt(e, Et),
            i = await r.encrypt({ iv: t, name: Et }, o, n);
          return new Uint8Array(i);
        })(t, e, n);
      }
      function St(t, e, n) {
        return (async function (t, e, n) {
          const r = Mt.getSubtleCrypto(),
            o = await kt(e, Et),
            i = await r.decrypt({ iv: t, name: Et }, o, n);
          return new Uint8Array(i);
        })(t, e, n);
      }
      async function Ct(t, e) {
        const n = await (async function (t, e) {
          const n = Mt.getSubtleCrypto(),
            r = await kt(t, xt),
            o = await n.sign({ length: 256, name: xt }, r, e);
          return new Uint8Array(o);
        })(t, e);
        return n;
      }
      async function At(t) {
        const e = (function (t) {
          return Mt.getBrowerCrypto().getRandomValues(new Uint8Array(t));
        })((t || 256) / 8);
        return R(A(e)).buffer;
      }
      async function It(t, e) {
        const n = B(t.data),
          r = B(t.iv),
          o = I(B(t.hmac), !1),
          i = N(n, r),
          s = I(await Ct(e, i), !1);
        return j(o) === j(s);
      }
      async function Ot(t, e, n) {
        const r = R(z(e)),
          o = R(z(n || (await At(128)))),
          i = I(o, !1),
          s = L(JSON.stringify(t)),
          a = await Rt(o, r, s),
          u = I(a, !1),
          c = N(a, o);
        return { data: u, hmac: I(await Ct(r, c), !1), iv: i };
      }
      async function Tt(t, e) {
        const n = R(z(e));
        if (!n) throw new Error("Missing key: required for decryption");
        if (!(await It(t, n))) return null;
        const r = B(t.data),
          o = B(t.iv),
          i = O(await St(o, n, r));
        let s;
        try {
          s = JSON.parse(i);
        } catch (a) {
          return null;
        }
        return s;
      }
      var Bt = class extends bt {
          constructor(t, e) {
            super({ cryptoLib: r, connectorOpts: t, pushServerOpts: e });
          }
        },
        Pt = n(4337),
        Lt = n.n(Pt),
        Ut = n(3416);
      class Nt extends Ut.XR {
        constructor(t) {
          super(),
            (this.events = new (ct())()),
            (this.accounts = []),
            (this.chainId = 1),
            (this.pending = !1),
            (this.bridge = "https://bridge.walletconnect.org"),
            (this.qrcode = !0),
            (this.qrcodeModalOptions = void 0),
            (this.opts = t),
            (this.chainId = (null === t || void 0 === t ? void 0 : t.chainId) || this.chainId),
            (this.wc = this.register(t));
        }
        get connected() {
          return "undefined" !== typeof this.wc && this.wc.connected;
        }
        get connecting() {
          return this.pending;
        }
        get connector() {
          return (this.wc = this.register(this.opts)), this.wc;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open(t) {
          if (!this.connected)
            return new Promise((e, n) => {
              this.on("error", (t) => {
                n(t);
              }),
                this.on("open", () => {
                  e();
                }),
                this.create(t);
            });
          this.onOpen();
        }
        async close() {
          "undefined" !== typeof this.wc && (this.wc.connected && this.wc.killSession(), this.onClose());
        }
        async send(t) {
          (this.wc = this.register(this.opts)),
            this.connected || (await this.open()),
            this.sendPayload(t)
              .then((t) => this.events.emit("payload", t))
              .catch((e) => this.events.emit("payload", (0, a.formatJsonRpcError)(t.id, e.message)));
        }
        register(t) {
          if (this.wc) return this.wc;
          (this.opts = t || this.opts),
            (this.bridge = (null === t || void 0 === t ? void 0 : t.connector)
              ? t.connector.bridge
              : (null === t || void 0 === t ? void 0 : t.bridge) || "https://bridge.walletconnect.org"),
            (this.qrcode = "undefined" === typeof (null === t || void 0 === t ? void 0 : t.qrcode) || !1 !== t.qrcode),
            (this.chainId =
              "undefined" !== typeof (null === t || void 0 === t ? void 0 : t.chainId) ? t.chainId : this.chainId),
            (this.qrcodeModalOptions = null === t || void 0 === t ? void 0 : t.qrcodeModalOptions);
          const e = {
            bridge: this.bridge,
            qrcodeModal: this.qrcode ? Lt() : void 0,
            qrcodeModalOptions: this.qrcodeModalOptions,
            storageId: null === t || void 0 === t ? void 0 : t.storageId,
            signingMethods: null === t || void 0 === t ? void 0 : t.signingMethods,
            clientMeta: null === t || void 0 === t ? void 0 : t.clientMeta,
          };
          if (
            ((this.wc =
              "undefined" !== typeof (null === t || void 0 === t ? void 0 : t.connector) ? t.connector : new Bt(e)),
            "undefined" === typeof this.wc)
          )
            throw new Error("Failed to register WalletConnect connector");
          return (
            this.wc.accounts.length && (this.accounts = this.wc.accounts),
            this.wc.chainId && (this.chainId = this.wc.chainId),
            this.registerConnectorEvents(),
            this.wc
          );
        }
        onOpen(t) {
          (this.pending = !1), t && (this.wc = t), this.events.emit("open");
        }
        onClose() {
          (this.pending = !1), this.wc && (this.wc = void 0), this.events.emit("close");
        }
        onError(t, e = "Failed or Rejected Request", n = -32e3) {
          const r = { id: t.id, jsonrpc: t.jsonrpc, error: { code: n, message: e } };
          return this.events.emit("payload", r), r;
        }
        create(t) {
          (this.wc = this.register(this.opts)),
            (this.chainId = t || this.chainId),
            this.connected ||
              this.pending ||
              ((this.pending = !0),
              this.registerConnectorEvents(),
              this.wc
                .createSession({ chainId: this.chainId })
                .then(() => this.events.emit("created"))
                .catch((t) => this.events.emit("error", t)));
        }
        registerConnectorEvents() {
          (this.wc = this.register(this.opts)),
            this.wc.on("connect", (t) => {
              var e, n;
              t
                ? this.events.emit("error", t)
                : ((this.accounts = (null === (e = this.wc) || void 0 === e ? void 0 : e.accounts) || []),
                  (this.chainId = (null === (n = this.wc) || void 0 === n ? void 0 : n.chainId) || this.chainId),
                  this.onOpen());
            }),
            this.wc.on("disconnect", (t) => {
              t ? this.events.emit("error", t) : this.onClose();
            }),
            this.wc.on("modal_closed", () => {
              this.events.emit("error", new Error("User closed modal"));
            }),
            this.wc.on("session_update", (t, e) => {
              const { accounts: n, chainId: r } = e.params[0];
              (!this.accounts || (n && this.accounts !== n)) &&
                ((this.accounts = n), this.events.emit("accountsChanged", n)),
                (!this.chainId || (r && this.chainId !== r)) &&
                  ((this.chainId = r), this.events.emit("chainChanged", r));
            });
        }
        async sendPayload(t) {
          this.wc = this.register(this.opts);
          try {
            const e = await this.wc.unsafeSend(t);
            return this.sanitizeResponse(e);
          } catch (e) {
            return this.onError(t, e.message);
          }
        }
        sanitizeResponse(t) {
          return "undefined" !== typeof t.error && "undefined" === typeof t.error.code
            ? (0, a.formatJsonRpcError)(t.id, t.error.message)
            : t;
        }
      }
      var qt = class {
        constructor(t) {
          (this.events = new (i())()),
            (this.rpc = {
              infuraId: null === t || void 0 === t ? void 0 : t.infuraId,
              custom: null === t || void 0 === t ? void 0 : t.rpc,
            }),
            (this.signer = new u(new Nt(t)));
          const e = this.signer.connection.chainId || (null === t || void 0 === t ? void 0 : t.chainId) || 1;
          (this.http = this.setHttpProvider(e)), this.registerEventListeners();
        }
        get connected() {
          return this.signer.connection.connected;
        }
        get connector() {
          return this.signer.connection.connector;
        }
        get accounts() {
          return this.signer.connection.accounts;
        }
        get chainId() {
          return this.signer.connection.chainId;
        }
        get rpcUrl() {
          var t;
          return (null === (t = this.http) || void 0 === t ? void 0 : t.connection).url || "";
        }
        async request(t) {
          switch (t.method) {
            case "eth_requestAccounts":
              return await this.connect(), this.signer.connection.accounts;
            case "eth_accounts":
              return this.signer.connection.accounts;
            case "eth_chainId":
              return this.signer.connection.chainId;
          }
          if (m.includes(t.method)) return this.signer.request(t);
          if ("undefined" === typeof this.http)
            throw new Error(`Cannot request JSON-RPC method (${t.method}) without provided rpc url`);
          return this.http.request(t);
        }
        sendAsync(t, e) {
          this.request(t)
            .then((t) => e(null, t))
            .catch((t) => e(t, void 0));
        }
        async enable() {
          return await this.request({ method: "eth_requestAccounts" });
        }
        async connect() {
          this.signer.connection.connected || (await this.signer.connect());
        }
        async disconnect() {
          this.signer.connection.connected && (await this.signer.disconnect());
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        get isWalletConnect() {
          return !0;
        }
        registerEventListeners() {
          this.signer.connection.on("accountsChanged", (t) => {
            this.events.emit("accountsChanged", t);
          }),
            this.signer.connection.on("chainChanged", (t) => {
              (this.http = this.setHttpProvider(t)), this.events.emit("chainChanged", t);
            }),
            this.signer.on("disconnect", () => {
              this.events.emit("disconnect");
            });
        }
        setHttpProvider(t) {
          const e = Z(t, this.rpc);
          if ("undefined" === typeof e) return;
          return new u(new d(e));
        }
      };
    },
    8404: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function i(t, e, r, i, s) {
        if ("function" !== typeof r) throw new TypeError("The listener must be a function");
        var a = new o(r, i || t, s),
          u = n ? n + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 === --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function a() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (a.prototype.eventNames = function () {
          var t,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (t = this._events)) e.call(t, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o;
        }),
        (a.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, s = new Array(i); o < i; o++) s[o] = r[o].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (a.prototype.emit = function (t, e, r, o, i, s) {
          var a = n ? n + t : t;
          if (!this._events[a]) return !1;
          var u,
            c,
            h = this._events[a],
            l = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(t, h.fn, void 0, !0), l)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, e), !0;
              case 3:
                return h.fn.call(h.context, e, r), !0;
              case 4:
                return h.fn.call(h.context, e, r, o), !0;
              case 5:
                return h.fn.call(h.context, e, r, o, i), !0;
              case 6:
                return h.fn.call(h.context, e, r, o, i, s), !0;
            }
            for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
            h.fn.apply(h.context, u);
          } else {
            var f,
              d = h.length;
            for (c = 0; c < d; c++)
              switch ((h[c].once && this.removeListener(t, h[c].fn, void 0, !0), l)) {
                case 1:
                  h[c].fn.call(h[c].context);
                  break;
                case 2:
                  h[c].fn.call(h[c].context, e);
                  break;
                case 3:
                  h[c].fn.call(h[c].context, e, r);
                  break;
                case 4:
                  h[c].fn.call(h[c].context, e, r, o);
                  break;
                default:
                  if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) u[f - 1] = arguments[f];
                  h[c].fn.apply(h[c].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, n) {
          return i(this, t, e, n, !1);
        }),
        (a.prototype.once = function (t, e, n) {
          return i(this, t, e, n, !0);
        }),
        (a.prototype.removeListener = function (t, e, r, o) {
          var i = n ? n + t : t;
          if (!this._events[i]) return this;
          if (!e) return s(this, i), this;
          var a = this._events[i];
          if (a.fn) a.fn !== e || (o && !a.once) || (r && a.context !== r) || s(this, i);
          else {
            for (var u = 0, c = [], h = a.length; u < h; u++)
              (a[u].fn !== e || (o && !a[u].once) || (r && a[u].context !== r)) && c.push(a[u]);
            c.length ? (this._events[i] = 1 === c.length ? c[0] : c) : s(this, i);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && s(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = n),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    699: function (t, e) {
      var n = "undefined" !== typeof self ? self : this,
        r = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (t.prototype = n), new t();
        })();
      !(function (t) {
        !(function (e) {
          var n = "URLSearchParams" in t,
            r = "Symbol" in t && "iterator" in Symbol,
            o =
              "FileReader" in t &&
              "Blob" in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            i = "FormData" in t,
            s = "ArrayBuffer" in t;
          if (s)
            var a = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              u =
                ArrayBuffer.isView ||
                function (t) {
                  return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function c(t) {
            if (("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)))
              throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
          }
          function h(t) {
            return "string" !== typeof t && (t = String(t)), t;
          }
          function l(t) {
            var e = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              r &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function f(t) {
            (this.map = {}),
              t instanceof f
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function d(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function p(t) {
            return new Promise(function (e, n) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  n(t.error);
                });
            });
          }
          function g(t) {
            var e = new FileReader(),
              n = p(e);
            return e.readAsArrayBuffer(t), n;
          }
          function m(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function _() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                var e;
                (this._bodyInit = t),
                  t
                    ? "string" === typeof t
                      ? (this._bodyText = t)
                      : o && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : i && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : n && URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : s && o && (e = t) && DataView.prototype.isPrototypeOf(e)
                      ? ((this._bodyArrayBuffer = m(t.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : s && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t))
                      ? (this._bodyArrayBuffer = m(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" === typeof t
                      ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : n &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
              }),
              o &&
                ((this.blob = function () {
                  var t = d(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? d(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(g);
                })),
              (this.text = function () {
                var t = d(this);
                if (t) return t;
                if (this._bodyBlob)
                  return (function (t) {
                    var e = new FileReader(),
                      n = p(e);
                    return e.readAsText(t), n;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (t) {
                      for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                        n[r] = String.fromCharCode(e[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              i &&
                (this.formData = function () {
                  return this.text().then(w);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (f.prototype.append = function (t, e) {
            (t = c(t)), (e = h(e));
            var n = this.map[t];
            this.map[t] = n ? n + ", " + e : e;
          }),
            (f.prototype.delete = function (t) {
              delete this.map[c(t)];
            }),
            (f.prototype.get = function (t) {
              return (t = c(t)), this.has(t) ? this.map[t] : null;
            }),
            (f.prototype.has = function (t) {
              return this.map.hasOwnProperty(c(t));
            }),
            (f.prototype.set = function (t, e) {
              this.map[c(t)] = h(e);
            }),
            (f.prototype.forEach = function (t, e) {
              for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
            }),
            (f.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push(n);
                }),
                l(t)
              );
            }),
            (f.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                l(t)
              );
            }),
            (f.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push([n, e]);
                }),
                l(t)
              );
            }),
            r && (f.prototype[Symbol.iterator] = f.prototype.entries);
          var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function y(t, e) {
            var n = (e = e || {}).body;
            if (t instanceof y) {
              if (t.bodyUsed) throw new TypeError("Already read");
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new f(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials = e.credentials || this.credentials || "same-origin"),
              (!e.headers && this.headers) || (this.headers = new f(e.headers)),
              (this.method = (function (t) {
                var e = t.toUpperCase();
                return v.indexOf(e) > -1 ? e : t;
              })(e.method || this.method || "GET")),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && n)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n);
          }
          function w(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var n = t.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o));
                  }
                }),
              e
            );
          }
          function b(t) {
            var e = new f();
            return (
              t
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (t) {
                  var n = t.split(":"),
                    r = n.shift().trim();
                  if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o);
                  }
                }),
              e
            );
          }
          function M(t, e) {
            e || (e = {}),
              (this.type = "default"),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in e ? e.statusText : "OK"),
              (this.headers = new f(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t);
          }
          (y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit });
          }),
            _.call(y.prototype),
            _.call(M.prototype),
            (M.prototype.clone = function () {
              return new M(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new f(this.headers),
                url: this.url,
              });
            }),
            (M.error = function () {
              var t = new M(null, { status: 0, statusText: "" });
              return (t.type = "error"), t;
            });
          var E = [301, 302, 303, 307, 308];
          (M.redirect = function (t, e) {
            if (-1 === E.indexOf(e)) throw new RangeError("Invalid status code");
            return new M(null, { status: e, headers: { location: t } });
          }),
            (e.DOMException = t.DOMException);
          try {
            new e.DOMException();
          } catch (k) {
            (e.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var n = Error(t);
              this.stack = n.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function x(t, n) {
            return new Promise(function (r, i) {
              var s = new y(t, n);
              if (s.signal && s.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function u() {
                a.abort();
              }
              (a.onload = function () {
                var t = { status: a.status, statusText: a.statusText, headers: b(a.getAllResponseHeaders() || "") };
                t.url = "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
                var e = "response" in a ? a.response : a.responseText;
                r(new M(e, t));
              }),
                (a.onerror = function () {
                  i(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  i(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  i(new e.DOMException("Aborted", "AbortError"));
                }),
                a.open(s.method, s.url, !0),
                "include" === s.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === s.credentials && (a.withCredentials = !1),
                "responseType" in a && o && (a.responseType = "blob"),
                s.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                }),
                s.signal &&
                  (s.signal.addEventListener("abort", u),
                  (a.onreadystatechange = function () {
                    4 === a.readyState && s.signal.removeEventListener("abort", u);
                  })),
                a.send("undefined" === typeof s._bodyInit ? null : s._bodyInit);
            });
          }
          (x.polyfill = !0),
            t.fetch || ((t.fetch = x), (t.Headers = f), (t.Request = y), (t.Response = M)),
            (e.Headers = f),
            (e.Request = y),
            (e.Response = M),
            (e.fetch = x),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })({});
      })(r),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill;
      var o = r;
      ((e = o.fetch).default = o.fetch),
        (e.fetch = o.fetch),
        (e.Headers = o.Headers),
        (e.Request = o.Request),
        (e.Response = o.Response),
        (t.exports = e);
    },
    5885: function (t, e, n) {
      "use strict";
      n.d(e, {
        IJsonRpcProvider: function () {
          return o.x0;
        },
      });
      var r = n(4057);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return r.IJsonRpcProvider;
          },
        }),
        n.o(r, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return r.isHttpUrl;
            },
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return r.isJsonRpcError;
            },
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return r.isJsonRpcResponse;
            },
          });
      var o = n(3416),
        i = n(1948);
      n.o(i, "isHttpUrl") &&
        n.d(e, {
          isHttpUrl: function () {
            return i.isHttpUrl;
          },
        }),
        n.o(i, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return i.isJsonRpcError;
            },
          }),
        n.o(i, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return i.isJsonRpcResponse;
            },
          });
    },
    4057: function () {},
    3416: function (t, e, n) {
      "use strict";
      n.d(e, {
        XR: function () {
          return o;
        },
        x0: function () {
          return s;
        },
      });
      class r {}
      class o extends r {
        constructor(t) {
          super();
        }
      }
      class i extends r {
        constructor() {
          super();
        }
      }
      class s extends i {
        constructor(t) {
          super();
        }
      }
    },
    1948: function () {},
    9806: function (t, e, n) {
      "use strict";
      n.d(e, {
        O4: function () {
          return r;
        },
        CA: function () {
          return o;
        },
        dQ: function () {
          return i;
        },
        xK: function () {
          return s;
        },
      });
      const r = "INTERNAL_ERROR",
        o = "SERVER_ERROR",
        i = [-32700, -32600, -32601, -32602, -32603],
        s = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [r]: { code: -32603, message: "Internal error" },
          [o]: { code: -32e3, message: "Server error" },
        };
    },
    9698: function (t, e, n) {
      "use strict";
      var r = n(1468);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return r.IJsonRpcProvider;
          },
        }),
        n.o(r, "formatJsonRpcError") &&
          n.d(e, {
            formatJsonRpcError: function () {
              return r.formatJsonRpcError;
            },
          }),
        n.o(r, "formatJsonRpcRequest") &&
          n.d(e, {
            formatJsonRpcRequest: function () {
              return r.formatJsonRpcRequest;
            },
          }),
        n.o(r, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return r.isHttpUrl;
            },
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return r.isJsonRpcError;
            },
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return r.isJsonRpcResponse;
            },
          }),
        n.o(r, "payloadId") &&
          n.d(e, {
            payloadId: function () {
              return r.payloadId;
            },
          });
    },
    110: function (t, e, n) {
      "use strict";
      n.d(e, {
        i5: function () {
          return o;
        },
        by: function () {
          return i;
        },
        L2: function () {
          return s;
        },
        CX: function () {
          return a;
        },
      });
      var r = n(9806);
      function o(t) {
        return r.dQ.includes(t);
      }
      function i(t) {
        return Object.keys(r.xK).includes(t) ? r.xK[t] : r.xK[r.O4];
      }
      function s(t) {
        const e = Object.values(r.xK).find((e) => e.code === t);
        return e || r.xK[r.O4];
      }
      function a(t, e, n) {
        return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED")
          ? new Error(`Unavailable ${n} RPC url at ${e}`)
          : t;
      }
    },
    1937: function (t, e, n) {
      "use strict";
      n.d(e, {
        o0: function () {
          return i;
        },
        sT: function () {
          return s;
        },
        RI: function () {
          return a;
        },
      });
      var r = n(110),
        o = n(9806);
      function i() {
        return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3));
      }
      function s(t, e, n) {
        return { id: n || i(), jsonrpc: "2.0", method: t, params: e };
      }
      function a(t, e) {
        return { id: t, jsonrpc: "2.0", error: u(e) };
      }
      function u(t) {
        return "undefined" === typeof t
          ? (0, r.by)(o.O4)
          : ("string" === typeof t && (t = Object.assign(Object.assign({}, (0, r.by)(o.CA)), { message: t })),
            (0, r.i5)(t.code) && (t = (0, r.L2)(t.code)),
            t);
      }
    },
    6186: function (t, e, n) {
      "use strict";
      n.d(e, {
        parseConnectionError: function () {
          return r.CX;
        },
        formatJsonRpcError: function () {
          return i.RI;
        },
        formatJsonRpcRequest: function () {
          return i.sT;
        },
        payloadId: function () {
          return i.o0;
        },
        isHttpUrl: function () {
          return a.jK;
        },
        isJsonRpcError: function () {
          return u.jg;
        },
        isJsonRpcResponse: function () {
          return u.u;
        },
      });
      n(9806);
      var r = n(110),
        o = n(9698);
      n.o(o, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return o.IJsonRpcProvider;
          },
        }),
        n.o(o, "formatJsonRpcError") &&
          n.d(e, {
            formatJsonRpcError: function () {
              return o.formatJsonRpcError;
            },
          }),
        n.o(o, "formatJsonRpcRequest") &&
          n.d(e, {
            formatJsonRpcRequest: function () {
              return o.formatJsonRpcRequest;
            },
          }),
        n.o(o, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return o.isHttpUrl;
            },
          }),
        n.o(o, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return o.isJsonRpcError;
            },
          }),
        n.o(o, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return o.isJsonRpcResponse;
            },
          }),
        n.o(o, "payloadId") &&
          n.d(e, {
            payloadId: function () {
              return o.payloadId;
            },
          });
      var i = n(1937),
        s = n(6043);
      n.o(s, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return s.IJsonRpcProvider;
          },
        }),
        n.o(s, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return s.isHttpUrl;
            },
          }),
        n.o(s, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return s.isJsonRpcError;
            },
          }),
        n.o(s, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return s.isJsonRpcResponse;
            },
          });
      var a = n(6119),
        u = n(4733);
    },
    6043: function (t, e, n) {
      "use strict";
      n.d(e, {
        IJsonRpcProvider: function () {
          return r.IJsonRpcProvider;
        },
      });
      var r = n(5885);
      n.o(r, "isHttpUrl") &&
        n.d(e, {
          isHttpUrl: function () {
            return r.isHttpUrl;
          },
        }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return r.isJsonRpcError;
            },
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return r.isJsonRpcResponse;
            },
          });
    },
    6119: function (t, e, n) {
      "use strict";
      n.d(e, {
        jK: function () {
          return o;
        },
      });
      function r(t, e) {
        const n = (function (t) {
          const e = t.match(new RegExp(/^\w+:/, "gi"));
          if (e && e.length) return e[0];
        })(t);
        return "undefined" !== typeof n && new RegExp(e).test(n);
      }
      function o(t) {
        return r(t, "^https?:");
      }
    },
    4733: function (t, e, n) {
      "use strict";
      function r(t) {
        return "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc;
      }
      function o(t) {
        return (
          r(t) &&
          ((function (t) {
            return "result" in t;
          })(t) ||
            i(t))
        );
      }
      function i(t) {
        return "error" in t;
      }
      n.d(e, {
        u: function () {
          return o;
        },
        jg: function () {
          return i;
        },
      });
    },
    4337: function (t, e, n) {
      var r = n(4155);
      function o(t) {
        return t && "object" === typeof t && "default" in t ? t.default : t;
      }
      var i = n(6886),
        s = o(n(2592)),
        a = o(n(640)),
        u = n(7423);
      "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" !== typeof Symbol &&
          (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      var c = "walletconnect-wrapper",
        h = "walletconnect-style-sheet",
        l = "walletconnect-qrcode-modal",
        f = "walletconnect-qrcode-text";
      function d(t) {
        return u.createElement(
          "div",
          { className: "walletconnect-modal__header" },
          u.createElement("img", {
            src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
            className: "walletconnect-modal__headerLogo",
          }),
          u.createElement("p", null, "WalletConnect"),
          u.createElement(
            "div",
            { className: "walletconnect-modal__close__wrapper", onClick: t.onClose },
            u.createElement(
              "div",
              { id: "walletconnect-qrcode-close", className: "walletconnect-modal__close__icon" },
              u.createElement("div", { className: "walletconnect-modal__close__line1" }),
              u.createElement("div", { className: "walletconnect-modal__close__line2" })
            )
          )
        );
      }
      function p(t) {
        return u.createElement(
          "a",
          {
            className: "walletconnect-connect__button",
            href: t.href,
            id: "walletconnect-connect-button-" + t.name,
            onClick: t.onClick,
            rel: "noopener noreferrer",
            style: { backgroundColor: t.color },
            target: "_blank",
          },
          t.name
        );
      }
      function g(t) {
        var e = t.color,
          n = t.href,
          r = t.name,
          o = t.logo,
          i = t.onClick;
        return u.createElement(
          "a",
          {
            className: "walletconnect-modal__base__row",
            href: n,
            onClick: i,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          u.createElement("h3", { className: "walletconnect-modal__base__row__h3" }, r),
          u.createElement(
            "div",
            { className: "walletconnect-modal__base__row__right" },
            u.createElement("div", {
              className: "walletconnect-modal__base__row__right__app-icon",
              style: { background: "url('" + o + "') " + e, backgroundSize: "100%" },
            }),
            u.createElement("img", {
              src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
              className: "walletconnect-modal__base__row__right__caret",
            })
          )
        );
      }
      function m(t) {
        var e = t.color,
          n = t.href,
          r = t.name,
          o = t.logo,
          i = t.onClick,
          s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
        return u.createElement(
          "a",
          {
            className: "walletconnect-connect__button__icon_anchor",
            href: n,
            onClick: i,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          u.createElement("div", {
            className: "walletconnect-connect__button__icon",
            style: { background: "url('" + o + "') " + e, backgroundSize: "100%" },
          }),
          u.createElement("div", { style: { fontSize: s }, className: "walletconnect-connect__button__text" }, r)
        );
      }
      function _(t) {
        var e = i.isAndroid(),
          n = u.useState(""),
          r = n[0],
          o = n[1],
          s = u.useState(""),
          a = s[0],
          c = s[1],
          h = u.useState(1),
          l = h[0],
          d = h[1],
          _ = a
            ? t.links.filter(function (t) {
                return t.name.toLowerCase().includes(a.toLowerCase());
              })
            : t.links,
          v = t.errorMessage,
          y = a || _.length > 5,
          w = Math.ceil(_.length / 12),
          b = [12 * (l - 1) + 1, 12 * l],
          M = _.length
            ? _.filter(function (t, e) {
                return e + 1 >= b[0] && e + 1 <= b[1];
              })
            : [],
          E = !(e || !(w > 1)),
          x = void 0;
        return u.createElement(
          "div",
          null,
          u.createElement(
            "p",
            { id: f, className: "walletconnect-qrcode__text" },
            e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet
          ),
          !e &&
            u.createElement("input", {
              className: "walletconnect-search__input",
              placeholder: "Search",
              value: r,
              onChange: function (t) {
                o(t.target.value),
                  clearTimeout(x),
                  t.target.value
                    ? (x = setTimeout(function () {
                        c(t.target.value), d(1);
                      }, 1e3))
                    : (o(""), c(""), d(1));
              },
            }),
          u.createElement(
            "div",
            {
              className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : y && _.length ? "__wrap" : ""),
            },
            e
              ? u.createElement(p, {
                  name: t.text.connect,
                  color: "rgb(64, 153, 255)",
                  href: t.uri,
                  onClick: u.useCallback(function () {
                    i.saveMobileLinkInfo({ name: "Unknown", href: t.uri });
                  }, []),
                })
              : M.length
              ? M.map(function (e) {
                  var n = e.color,
                    r = e.name,
                    o = e.shortName,
                    s = e.logo,
                    a = i.formatIOSMobile(t.uri, e),
                    c = u.useCallback(
                      function () {
                        i.saveMobileLinkInfo({ name: r, href: a });
                      },
                      [M]
                    );
                  return y
                    ? u.createElement(m, { color: n, href: a, name: o || r, logo: s, onClick: c })
                    : u.createElement(g, { color: n, href: a, name: r, logo: s, onClick: c });
                })
              : u.createElement(
                  u.Fragment,
                  null,
                  u.createElement(
                    "p",
                    null,
                    v.length ? t.errorMessage : t.links.length && !_.length ? t.text.no_wallets_found : t.text.loading
                  )
                )
          ),
          E &&
            u.createElement(
              "div",
              { className: "walletconnect-modal__footer" },
              Array(w)
                .fill(0)
                .map(function (t, e) {
                  var n = e + 1,
                    r = l === n;
                  return u.createElement(
                    "a",
                    {
                      style: { margin: "auto 10px", fontWeight: r ? "bold" : "normal" },
                      onClick: function () {
                        return d(n);
                      },
                    },
                    n
                  );
                })
            )
        );
      }
      function v(t) {
        var e = !!t.message.trim();
        return u.createElement(
          "div",
          { className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "") },
          t.message
        );
      }
      function y(t) {
        var e = u.useState(""),
          n = e[0],
          r = e[1],
          o = u.useState(""),
          i = o[0],
          c = o[1];
        u.useEffect(function () {
          try {
            return Promise.resolve(
              (function (t) {
                try {
                  var e = "";
                  return Promise.resolve(s.toString(t, { margin: 0, type: "svg" })).then(function (t) {
                    return (
                      "string" === typeof t && (e = t.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e
                    );
                  });
                } catch (n) {
                  return Promise.reject(n);
                }
              })(t.uri)
            ).then(function (t) {
              c(t);
            });
          } catch (e) {
            Promise.reject(e);
          }
        }, []);
        return u.createElement(
          "div",
          null,
          u.createElement("p", { id: f, className: "walletconnect-qrcode__text" }, t.text.scan_qrcode_with_wallet),
          u.createElement("div", { dangerouslySetInnerHTML: { __html: i } }),
          u.createElement(
            "div",
            { className: "walletconnect-modal__footer" },
            u.createElement(
              "a",
              {
                onClick: function () {
                  a(t.uri)
                    ? (r(t.text.copied_to_clipboard),
                      setInterval(function () {
                        return r("");
                      }, 1200))
                    : (r("Error"),
                      setInterval(function () {
                        return r("");
                      }, 1200));
                },
              },
              t.text.copy_to_clipboard
            )
          ),
          u.createElement(v, { message: n })
        );
      }
      function w(t) {
        var e = i.isAndroid(),
          n = i.isMobile(),
          r = n
            ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks
              ? t.qrcodeModalOptions.mobileLinks
              : void 0
            : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks
            ? t.qrcodeModalOptions.desktopLinks
            : void 0,
          o = u.useState(!1),
          s = o[0],
          a = o[1],
          c = u.useState(!1),
          h = c[0],
          f = c[1],
          p = u.useState(!n),
          g = p[0],
          m = p[1],
          v = { mobile: n, text: t.text, uri: t.uri, qrcodeModalOptions: t.qrcodeModalOptions },
          w = u.useState(""),
          b = w[0],
          M = w[1],
          E = u.useState(!1),
          x = E[0],
          k = E[1],
          R = u.useState([]),
          S = R[0],
          C = R[1],
          A = u.useState(""),
          I = A[0],
          O = A[1],
          T = function () {
            h ||
              s ||
              (r && !r.length) ||
              S.length > 0 ||
              u.useEffect(function () {
                !(function () {
                  try {
                    if (e) return Promise.resolve();
                    a(!0);
                    var o = (function (t, e) {
                      try {
                        var n = t();
                      } catch (r) {
                        return e(r);
                      }
                      return n && n.then ? n.then(void 0, e) : n;
                    })(
                      function () {
                        var e =
                          t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl
                            ? t.qrcodeModalOptions.registryUrl
                            : i.getWalletRegistryUrl();
                        return Promise.resolve(fetch(e)).then(function (e) {
                          return Promise.resolve(e.json()).then(function (e) {
                            var o = e.listings,
                              s = n ? "mobile" : "desktop",
                              u = i.getMobileLinkRegistry(i.formatMobileRegistry(o, s), r);
                            a(!1), f(!0), O(u.length ? "" : t.text.no_supported_wallets), C(u);
                            var c = 1 === u.length;
                            c && (M(i.formatIOSMobile(t.uri, u[0])), m(!0)), k(c);
                          });
                        });
                      },
                      function (e) {
                        a(!1), f(!0), O(t.text.something_went_wrong), console.error(e);
                      }
                    );
                    Promise.resolve(o && o.then ? o.then(function () {}) : void 0);
                  } catch (s) {
                    return Promise.reject(s);
                  }
                })();
              });
          };
        T();
        var B = n ? g : !g;
        return u.createElement(
          "div",
          { id: l, className: "walletconnect-qrcode__base animated fadeIn" },
          u.createElement(
            "div",
            { className: "walletconnect-modal__base" },
            u.createElement(d, { onClose: t.onClose }),
            x && g
              ? u.createElement(
                  "div",
                  { className: "walletconnect-modal__single_wallet" },
                  u.createElement(
                    "a",
                    {
                      onClick: function () {
                        return i.saveMobileLinkInfo({ name: S[0].name, href: b });
                      },
                      href: b,
                      rel: "noopener noreferrer",
                      target: "_blank",
                    },
                    t.text.connect_with + " " + (x ? S[0].name : "") + " \u203a"
                  )
                )
              : e || s || (!s && S.length)
              ? u.createElement(
                  "div",
                  { className: "walletconnect-modal__mobile__toggle" + (B ? " right__selected" : "") },
                  u.createElement("div", { className: "walletconnect-modal__mobile__toggle_selector" }),
                  n
                    ? u.createElement(
                        u.Fragment,
                        null,
                        u.createElement(
                          "a",
                          {
                            onClick: function () {
                              return m(!1), T();
                            },
                          },
                          t.text.mobile
                        ),
                        u.createElement(
                          "a",
                          {
                            onClick: function () {
                              return m(!0);
                            },
                          },
                          t.text.qrcode
                        )
                      )
                    : u.createElement(
                        u.Fragment,
                        null,
                        u.createElement(
                          "a",
                          {
                            onClick: function () {
                              return m(!0);
                            },
                          },
                          t.text.qrcode
                        ),
                        u.createElement(
                          "a",
                          {
                            onClick: function () {
                              return m(!1), T();
                            },
                          },
                          t.text.desktop
                        )
                      )
                )
              : null,
            u.createElement(
              "div",
              null,
              g || (!e && !s && !S.length)
                ? u.createElement(y, Object.assign({}, v))
                : u.createElement(_, Object.assign({}, v, { links: S, errorMessage: I }))
            )
          )
        );
      }
      var b = {
        de: {
          choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
          connect_mobile_wallet: "Verbinde mit Mobile Wallet",
          scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
          connect: "Verbinden",
          qrcode: "QR-Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "In die Zwischenablage kopieren",
          copied_to_clipboard: "In die Zwischenablage kopiert!",
          connect_with: "Verbinden mit Hilfe von",
          loading: "Laden...",
          something_went_wrong: "Etwas ist schief gelaufen",
          no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
          no_wallets_found: "keine Wallet gefunden",
        },
        en: {
          choose_preferred_wallet: "Choose your preferred wallet",
          connect_mobile_wallet: "Connect to Mobile Wallet",
          scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
          connect: "Connect",
          qrcode: "QR Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "Copy to clipboard",
          copied_to_clipboard: "Copied to clipboard!",
          connect_with: "Connect with",
          loading: "Loading...",
          something_went_wrong: "Something went wrong",
          no_supported_wallets: "There are no supported wallets yet",
          no_wallets_found: "No wallets found",
        },
        es: {
          choose_preferred_wallet: "Elige tu billetera preferida",
          connect_mobile_wallet: "Conectar a billetera m\xf3vil",
          scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
          connect: "Conectar",
          qrcode: "C\xf3digo QR",
          mobile: "M\xf3vil",
          desktop: "Desktop",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          connect_with: "Conectar mediante",
          loading: "Cargando...",
          something_went_wrong: "Algo sali\xf3 mal",
          no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
          no_wallets_found: "No se encontraron billeteras",
        },
        fr: {
          choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
          connect_mobile_wallet: "Se connecter au portefeuille mobile",
          scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
          connect: "Se connecter",
          qrcode: "QR Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "Copier",
          copied_to_clipboard: "Copi\xe9!",
          connect_with: "Connectez-vous \xe0 l'aide de",
          loading: "Chargement...",
          something_went_wrong: "Quelque chose a mal tourn\xe9",
          no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
          no_wallets_found: "Aucun portefeuille trouv\xe9",
        },
        ko: {
          choose_preferred_wallet: "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
          connect_mobile_wallet: "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
          scan_qrcode_with_wallet:
            "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
          connect: "\uc5f0\uacb0",
          qrcode: "QR \ucf54\ub4dc",
          mobile: "\ubaa8\ubc14\uc77c",
          desktop: "\ub370\uc2a4\ud06c\ud0d1",
          copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
          copied_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
          connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
          loading: "\ub85c\ub4dc \uc911...",
          something_went_wrong: "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
          no_supported_wallets: "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
          no_wallets_found: "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
        },
        pt: {
          choose_preferred_wallet: "Escolha sua carteira preferida",
          connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
          scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
          connect: "Conectar",
          qrcode: "C\xf3digo QR",
          mobile: "M\xf3vel",
          desktop: "Desktop",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          connect_with: "Ligar por meio de",
          loading: "Carregamento...",
          something_went_wrong: "Algo correu mal",
          no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
          no_wallets_found: "Nenhuma carteira encontrada",
        },
        zh: {
          choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
          connect_mobile_wallet: "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
          scan_qrcode_with_wallet:
            "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
          connect: "\u8fde\u63a5",
          qrcode: "\u4e8c\u7ef4\u7801",
          mobile: "\u79fb\u52a8",
          desktop: "\u684c\u9762",
          copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
          copied_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
          connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
          loading: "\u6b63\u5728\u52a0\u8f7d...",
          something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
          no_supported_wallets: "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
          no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305",
        },
        fa: {
          choose_preferred_wallet:
            "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
          connect_mobile_wallet:
            "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
          scan_qrcode_with_wallet:
            "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
          connect: "\u0627\u062a\u0635\u0627\u0644",
          qrcode: "\u06a9\u062f QR",
          mobile: "\u0633\u06cc\u0627\u0631",
          desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
          copy_to_clipboard: "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
          copied_to_clipboard:
            "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
          connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
          loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
          something_went_wrong: "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
          no_supported_wallets:
            "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
          no_wallets_found:
            "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f",
        },
      };
      function M() {
        var t = i.getDocumentOrThrow(),
          e = t.getElementById(l);
        e &&
          ((e.className = e.className.replace("fadeIn", "fadeOut")),
          setTimeout(function () {
            var e = t.getElementById(c);
            e && t.body.removeChild(e);
          }, 300));
      }
      function E(t) {
        return function () {
          M(), t && t();
        };
      }
      function x() {
        var t = i.getNavigatorOrThrow().language.split("-")[0] || "en";
        return b[t] || b.en;
      }
      function k(t, e, n) {
        !(function () {
          var t = i.getDocumentOrThrow(),
            e = t.getElementById(h);
          e && t.head.removeChild(e);
          var n = t.createElement("style");
          n.setAttribute("id", h),
            (n.innerText =
              ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n'),
            t.head.appendChild(n);
        })();
        var r = (function () {
          var t = i.getDocumentOrThrow(),
            e = t.createElement("div");
          return e.setAttribute("id", c), t.body.appendChild(e), e;
        })();
        u.render(u.createElement(w, { text: x(), uri: t, onClose: E(e), qrcodeModalOptions: n }), r);
      }
      var R = function () {
        return "undefined" !== typeof r && "undefined" !== typeof r.versions && "undefined" !== typeof r.versions.node;
      };
      var S = {
        open: function (t, e, n) {
          console.log(t),
            R()
              ? (function (t) {
                  s.toString(t, { type: "terminal" }).then(console.log);
                })(t)
              : k(t, e, n);
        },
        close: function () {
          R() || M();
        },
      };
      t.exports = S;
    },
    5094: function (t, e, n) {
      "use strict";
      function r(t) {
        if ("string" !== typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function o(t) {
        return "string" === typeof t ? t : JSON.stringify(t);
      }
      n.d(e, {
        D: function () {
          return r;
        },
        u: function () {
          return o;
        },
      });
    },
    8178: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function i(t, e, r, i, s) {
        if ("function" !== typeof r) throw new TypeError("The listener must be a function");
        var a = new o(r, i || t, s),
          u = n ? n + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 === --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function a() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (a.prototype.eventNames = function () {
          var t,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (t = this._events)) e.call(t, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o;
        }),
        (a.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, s = new Array(i); o < i; o++) s[o] = r[o].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (a.prototype.emit = function (t, e, r, o, i, s) {
          var a = n ? n + t : t;
          if (!this._events[a]) return !1;
          var u,
            c,
            h = this._events[a],
            l = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(t, h.fn, void 0, !0), l)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, e), !0;
              case 3:
                return h.fn.call(h.context, e, r), !0;
              case 4:
                return h.fn.call(h.context, e, r, o), !0;
              case 5:
                return h.fn.call(h.context, e, r, o, i), !0;
              case 6:
                return h.fn.call(h.context, e, r, o, i, s), !0;
            }
            for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
            h.fn.apply(h.context, u);
          } else {
            var f,
              d = h.length;
            for (c = 0; c < d; c++)
              switch ((h[c].once && this.removeListener(t, h[c].fn, void 0, !0), l)) {
                case 1:
                  h[c].fn.call(h[c].context);
                  break;
                case 2:
                  h[c].fn.call(h[c].context, e);
                  break;
                case 3:
                  h[c].fn.call(h[c].context, e, r);
                  break;
                case 4:
                  h[c].fn.call(h[c].context, e, r, o);
                  break;
                default:
                  if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) u[f - 1] = arguments[f];
                  h[c].fn.apply(h[c].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, n) {
          return i(this, t, e, n, !1);
        }),
        (a.prototype.once = function (t, e, n) {
          return i(this, t, e, n, !0);
        }),
        (a.prototype.removeListener = function (t, e, r, o) {
          var i = n ? n + t : t;
          if (!this._events[i]) return this;
          if (!e) return s(this, i), this;
          var a = this._events[i];
          if (a.fn) a.fn !== e || (o && !a.once) || (r && a.context !== r) || s(this, i);
          else {
            for (var u = 0, c = [], h = a.length; u < h; u++)
              (a[u].fn !== e || (o && !a[u].once) || (r && a[u].context !== r)) && c.push(a[u]);
            c.length ? (this._events[i] = 1 === c.length ? c[0] : c) : s(this, i);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && s(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = n),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    8007: function (t) {
      "use strict";
      t.exports = function () {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
      };
    },
    1460: function (t, e, n) {
      !(function (t, e) {
        "use strict";
        function r(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function o(t, e) {
          t.super_ = e;
          var n = function () {};
          (n.prototype = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
        }
        function i(t, e, n) {
          if (i.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t && (("le" !== e && "be" !== e) || ((n = e), (e = 10)), this._init(t || 0, e || 10, n || "be"));
        }
        var s;
        "object" === typeof t ? (t.exports = i) : (e.BN = i), (i.BN = i), (i.wordSize = 26);
        try {
          s = n(6563).Buffer;
        } catch (x) {}
        function a(t, e, n) {
          for (var r = 0, o = Math.min(t.length, n), i = e; i < o; i++) {
            var s = t.charCodeAt(i) - 48;
            (r <<= 4), (r |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s);
          }
          return r;
        }
        function u(t, e, n, r) {
          for (var o = 0, i = Math.min(t.length, n), s = e; s < i; s++) {
            var a = t.charCodeAt(s) - 48;
            (o *= r), (o += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a);
          }
          return o;
        }
        (i.isBN = function (t) {
          return (
            t instanceof i ||
            (null !== t && "object" === typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words))
          );
        }),
          (i.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (i.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (i.prototype._init = function (t, e, n) {
            if ("number" === typeof t) return this._initNumber(t, e, n);
            if ("object" === typeof t) return this._initArray(t, e, n);
            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
            var o = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && o++,
              16 === e ? this._parseHex(t, o) : this._parseBase(t, e, o),
              "-" === t[0] && (this.negative = 1),
              this.strip(),
              "le" === n && this._initArray(this.toArray(), e, n);
          }),
          (i.prototype._initNumber = function (t, e, n) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]), (this.length = 2))
                : (r(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === n && this._initArray(this.toArray(), e, n);
          }),
          (i.prototype._initArray = function (t, e, n) {
            if ((r("number" === typeof t.length), t.length <= 0)) return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)), (this.words = new Array(this.length));
            for (var o = 0; o < this.length; o++) this.words[o] = 0;
            var i,
              s,
              a = 0;
            if ("be" === n)
              for (o = t.length - 1, i = 0; o >= 0; o -= 3)
                (s = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                  (this.words[i] |= (s << a) & 67108863),
                  (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ("le" === n)
              for (o = 0, i = 0; o < t.length; o += 3)
                (s = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                  (this.words[i] |= (s << a) & 67108863),
                  (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this.strip();
          }),
          (i.prototype._parseHex = function (t, e) {
            (this.length = Math.ceil((t.length - e) / 6)), (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var r,
              o,
              i = 0;
            for (n = t.length - 6, r = 0; n >= e; n -= 6)
              (o = a(t, n, n + 6)),
                (this.words[r] |= (o << i) & 67108863),
                (this.words[r + 1] |= (o >>> (26 - i)) & 4194303),
                (i += 24) >= 26 && ((i -= 26), r++);
            n + 6 !== e &&
              ((o = a(t, e, n + 6)),
              (this.words[r] |= (o << i) & 67108863),
              (this.words[r + 1] |= (o >>> (26 - i)) & 4194303)),
              this.strip();
          }),
          (i.prototype._parseBase = function (t, e, n) {
            (this.words = [0]), (this.length = 1);
            for (var r = 0, o = 1; o <= 67108863; o *= e) r++;
            r--, (o = (o / e) | 0);
            for (var i = t.length - n, s = i % r, a = Math.min(i, i - s) + n, c = 0, h = n; h < a; h += r)
              (c = u(t, h, h + r, e)),
                this.imuln(o),
                this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
            if (0 !== s) {
              var l = 1;
              for (c = u(t, h, t.length, e), h = 0; h < s; h++) l *= e;
              this.imuln(l), this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
            }
          }),
          (i.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length), (t.negative = this.negative), (t.red = this.red);
          }),
          (i.prototype.clone = function () {
            var t = new i(null);
            return this.copy(t), t;
          }),
          (i.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (i.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
            return this._normSign();
          }),
          (i.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
          }),
          (i.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          h = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5,
          ],
          l = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171,
            35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632,
            6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393,
            45435424, 52521875, 60466176,
          ];
        function f(t, e, n) {
          n.negative = e.negative ^ t.negative;
          var r = (t.length + e.length) | 0;
          (n.length = r), (r = (r - 1) | 0);
          var o = 0 | t.words[0],
            i = 0 | e.words[0],
            s = o * i,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          n.words[0] = a;
          for (var c = 1; c < r; c++) {
            for (
              var h = u >>> 26, l = 67108863 & u, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1);
              d <= f;
              d++
            ) {
              var p = (c - d) | 0;
              (h += ((s = (o = 0 | t.words[p]) * (i = 0 | e.words[d]) + l) / 67108864) | 0), (l = 67108863 & s);
            }
            (n.words[c] = 0 | l), (u = 0 | h);
          }
          return 0 !== u ? (n.words[c] = 0 | u) : n.length--, n.strip();
        }
        (i.prototype.toString = function (t, e) {
          var n;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            n = "";
            for (var o = 0, i = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << o) | i)).toString(16);
              (n = 0 !== (i = (a >>> (24 - o)) & 16777215) || s !== this.length - 1 ? c[6 - u.length] + u + n : u + n),
                (o += 2) >= 26 && ((o -= 26), s--);
            }
            for (0 !== i && (n = i.toString(16) + n); n.length % e !== 0; ) n = "0" + n;
            return 0 !== this.negative && (n = "-" + n), n;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var f = h[t],
              d = l[t];
            n = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var g = p.modn(d).toString(t);
              n = (p = p.idivn(d)).isZero() ? g + n : c[f - g.length] + g + n;
            }
            for (this.isZero() && (n = "0" + n); n.length % e !== 0; ) n = "0" + n;
            return 0 !== this.negative && (n = "-" + n), n;
          }
          r(!1, "Base should be between 2 and 36");
        }),
          (i.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (i.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (i.prototype.toBuffer = function (t, e) {
            return r("undefined" !== typeof s), this.toArrayLike(s, t, e);
          }),
          (i.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (i.prototype.toArrayLike = function (t, e, n) {
            var o = this.byteLength(),
              i = n || Math.max(1, o);
            r(o <= i, "byte array longer than desired length"), r(i > 0, "Requested array length <= 0"), this.strip();
            var s,
              a,
              u = "le" === e,
              c = new t(i),
              h = this.clone();
            if (u) {
              for (a = 0; !h.isZero(); a++) (s = h.andln(255)), h.iushrn(8), (c[a] = s);
              for (; a < i; a++) c[a] = 0;
            } else {
              for (a = 0; a < i - o; a++) c[a] = 0;
              for (a = 0; !h.isZero(); a++) (s = h.andln(255)), h.iushrn(8), (c[i - a - 1] = s);
            }
            return c;
          }),
          Math.clz32
            ? (i.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (i.prototype._countBits = function (t) {
                var e = t,
                  n = 0;
                return (
                  e >= 4096 && ((n += 13), (e >>>= 13)),
                  e >= 64 && ((n += 7), (e >>>= 7)),
                  e >= 8 && ((n += 4), (e >>>= 4)),
                  e >= 2 && ((n += 2), (e >>>= 2)),
                  n + e
                );
              }),
          (i.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              n = 0;
            return (
              0 === (8191 & e) && ((n += 13), (e >>>= 13)),
              0 === (127 & e) && ((n += 7), (e >>>= 7)),
              0 === (15 & e) && ((n += 4), (e >>>= 4)),
              0 === (3 & e) && ((n += 2), (e >>>= 2)),
              0 === (1 & e) && n++,
              n
            );
          }),
          (i.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (i.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var n = this._zeroBits(this.words[e]);
              if (((t += n), 26 !== n)) break;
            }
            return t;
          }),
          (i.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (i.prototype.toTwos = function (t) {
            return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
          }),
          (i.prototype.fromTwos = function (t) {
            return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
          }),
          (i.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (i.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (i.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (i.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (i.prototype.ior = function (t) {
            return r(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (i.prototype.or = function (t) {
            return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
          }),
          (i.prototype.uor = function (t) {
            return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
          }),
          (i.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] & t.words[n];
            return (this.length = e.length), this.strip();
          }),
          (i.prototype.iand = function (t) {
            return r(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (i.prototype.and = function (t) {
            return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
          }),
          (i.prototype.uand = function (t) {
            return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
          }),
          (i.prototype.iuxor = function (t) {
            var e, n;
            this.length > t.length ? ((e = this), (n = t)) : ((e = t), (n = this));
            for (var r = 0; r < n.length; r++) this.words[r] = e.words[r] ^ n.words[r];
            if (this !== e) for (; r < e.length; r++) this.words[r] = e.words[r];
            return (this.length = e.length), this.strip();
          }),
          (i.prototype.ixor = function (t) {
            return r(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (i.prototype.xor = function (t) {
            return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
          }),
          (i.prototype.uxor = function (t) {
            return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
          }),
          (i.prototype.inotn = function (t) {
            r("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              n = t % 26;
            this._expand(e), n > 0 && e--;
            for (var o = 0; o < e; o++) this.words[o] = 67108863 & ~this.words[o];
            return n > 0 && (this.words[o] = ~this.words[o] & (67108863 >> (26 - n))), this.strip();
          }),
          (i.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (i.prototype.setn = function (t, e) {
            r("number" === typeof t && t >= 0);
            var n = (t / 26) | 0,
              o = t % 26;
            return (
              this._expand(n + 1),
              (this.words[n] = e ? this.words[n] | (1 << o) : this.words[n] & ~(1 << o)),
              this.strip()
            );
          }),
          (i.prototype.iadd = function (t) {
            var e, n, r;
            if (0 !== this.negative && 0 === t.negative)
              return (this.negative = 0), (e = this.isub(t)), (this.negative ^= 1), this._normSign();
            if (0 === this.negative && 0 !== t.negative)
              return (t.negative = 0), (e = this.isub(t)), (t.negative = 1), e._normSign();
            this.length > t.length ? ((n = this), (r = t)) : ((n = t), (r = this));
            for (var o = 0, i = 0; i < r.length; i++)
              (e = (0 | n.words[i]) + (0 | r.words[i]) + o), (this.words[i] = 67108863 & e), (o = e >>> 26);
            for (; 0 !== o && i < n.length; i++)
              (e = (0 | n.words[i]) + o), (this.words[i] = 67108863 & e), (o = e >>> 26);
            if (((this.length = n.length), 0 !== o)) (this.words[this.length] = o), this.length++;
            else if (n !== this) for (; i < n.length; i++) this.words[i] = n.words[i];
            return this;
          }),
          (i.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (i.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative) return (this.negative = 0), this.iadd(t), (this.negative = 1), this._normSign();
            var n,
              r,
              o = this.cmp(t);
            if (0 === o) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
            o > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
            for (var i = 0, s = 0; s < r.length; s++)
              (i = (e = (0 | n.words[s]) - (0 | r.words[s]) + i) >> 26), (this.words[s] = 67108863 & e);
            for (; 0 !== i && s < n.length; s++) (i = (e = (0 | n.words[s]) + i) >> 26), (this.words[s] = 67108863 & e);
            if (0 === i && s < n.length && n !== this) for (; s < n.length; s++) this.words[s] = n.words[s];
            return (this.length = Math.max(this.length, s)), n !== this && (this.negative = 1), this.strip();
          }),
          (i.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var d = function (t, e, n) {
          var r,
            o,
            i,
            s = t.words,
            a = e.words,
            u = n.words,
            c = 0,
            h = 0 | s[0],
            l = 8191 & h,
            f = h >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            g = d >>> 13,
            m = 0 | s[2],
            _ = 8191 & m,
            v = m >>> 13,
            y = 0 | s[3],
            w = 8191 & y,
            b = y >>> 13,
            M = 0 | s[4],
            E = 8191 & M,
            x = M >>> 13,
            k = 0 | s[5],
            R = 8191 & k,
            S = k >>> 13,
            C = 0 | s[6],
            A = 8191 & C,
            I = C >>> 13,
            O = 0 | s[7],
            T = 8191 & O,
            B = O >>> 13,
            P = 0 | s[8],
            L = 8191 & P,
            U = P >>> 13,
            N = 0 | s[9],
            q = 8191 & N,
            j = N >>> 13,
            D = 0 | a[0],
            F = 8191 & D,
            J = D >>> 13,
            z = 0 | a[1],
            H = 8191 & z,
            W = z >>> 13,
            $ = 0 | a[2],
            K = 8191 & $,
            Y = $ >>> 13,
            V = 0 | a[3],
            Q = 8191 & V,
            Z = V >>> 13,
            X = 0 | a[4],
            G = 8191 & X,
            tt = X >>> 13,
            et = 0 | a[5],
            nt = 8191 & et,
            rt = et >>> 13,
            ot = 0 | a[6],
            it = 8191 & ot,
            st = ot >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ct = at >>> 13,
            ht = 0 | a[8],
            lt = 8191 & ht,
            ft = ht >>> 13,
            dt = 0 | a[9],
            pt = 8191 & dt,
            gt = dt >>> 13;
          (n.negative = t.negative ^ e.negative), (n.length = 19);
          var mt =
            (((c + (r = Math.imul(l, F))) | 0) + ((8191 & (o = ((o = Math.imul(l, J)) + Math.imul(f, F)) | 0)) << 13)) |
            0;
          (c = ((((i = Math.imul(f, J)) + (o >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (r = Math.imul(p, F)),
            (o = ((o = Math.imul(p, J)) + Math.imul(g, F)) | 0),
            (i = Math.imul(g, J));
          var _t =
            (((c + (r = (r + Math.imul(l, H)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, W)) | 0) + Math.imul(f, H)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, W)) | 0) + (o >>> 13)) | 0) + (_t >>> 26)) | 0),
            (_t &= 67108863),
            (r = Math.imul(_, F)),
            (o = ((o = Math.imul(_, J)) + Math.imul(v, F)) | 0),
            (i = Math.imul(v, J)),
            (r = (r + Math.imul(p, H)) | 0),
            (o = ((o = (o + Math.imul(p, W)) | 0) + Math.imul(g, H)) | 0),
            (i = (i + Math.imul(g, W)) | 0);
          var vt =
            (((c + (r = (r + Math.imul(l, K)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, Y)) | 0) + Math.imul(f, K)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, Y)) | 0) + (o >>> 13)) | 0) + (vt >>> 26)) | 0),
            (vt &= 67108863),
            (r = Math.imul(w, F)),
            (o = ((o = Math.imul(w, J)) + Math.imul(b, F)) | 0),
            (i = Math.imul(b, J)),
            (r = (r + Math.imul(_, H)) | 0),
            (o = ((o = (o + Math.imul(_, W)) | 0) + Math.imul(v, H)) | 0),
            (i = (i + Math.imul(v, W)) | 0),
            (r = (r + Math.imul(p, K)) | 0),
            (o = ((o = (o + Math.imul(p, Y)) | 0) + Math.imul(g, K)) | 0),
            (i = (i + Math.imul(g, Y)) | 0);
          var yt =
            (((c + (r = (r + Math.imul(l, Q)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, Z)) | 0) + Math.imul(f, Q)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, Z)) | 0) + (o >>> 13)) | 0) + (yt >>> 26)) | 0),
            (yt &= 67108863),
            (r = Math.imul(E, F)),
            (o = ((o = Math.imul(E, J)) + Math.imul(x, F)) | 0),
            (i = Math.imul(x, J)),
            (r = (r + Math.imul(w, H)) | 0),
            (o = ((o = (o + Math.imul(w, W)) | 0) + Math.imul(b, H)) | 0),
            (i = (i + Math.imul(b, W)) | 0),
            (r = (r + Math.imul(_, K)) | 0),
            (o = ((o = (o + Math.imul(_, Y)) | 0) + Math.imul(v, K)) | 0),
            (i = (i + Math.imul(v, Y)) | 0),
            (r = (r + Math.imul(p, Q)) | 0),
            (o = ((o = (o + Math.imul(p, Z)) | 0) + Math.imul(g, Q)) | 0),
            (i = (i + Math.imul(g, Z)) | 0);
          var wt =
            (((c + (r = (r + Math.imul(l, G)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, tt)) | 0) + Math.imul(f, G)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, tt)) | 0) + (o >>> 13)) | 0) + (wt >>> 26)) | 0),
            (wt &= 67108863),
            (r = Math.imul(R, F)),
            (o = ((o = Math.imul(R, J)) + Math.imul(S, F)) | 0),
            (i = Math.imul(S, J)),
            (r = (r + Math.imul(E, H)) | 0),
            (o = ((o = (o + Math.imul(E, W)) | 0) + Math.imul(x, H)) | 0),
            (i = (i + Math.imul(x, W)) | 0),
            (r = (r + Math.imul(w, K)) | 0),
            (o = ((o = (o + Math.imul(w, Y)) | 0) + Math.imul(b, K)) | 0),
            (i = (i + Math.imul(b, Y)) | 0),
            (r = (r + Math.imul(_, Q)) | 0),
            (o = ((o = (o + Math.imul(_, Z)) | 0) + Math.imul(v, Q)) | 0),
            (i = (i + Math.imul(v, Z)) | 0),
            (r = (r + Math.imul(p, G)) | 0),
            (o = ((o = (o + Math.imul(p, tt)) | 0) + Math.imul(g, G)) | 0),
            (i = (i + Math.imul(g, tt)) | 0);
          var bt =
            (((c + (r = (r + Math.imul(l, nt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, rt)) | 0) + Math.imul(f, nt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, rt)) | 0) + (o >>> 13)) | 0) + (bt >>> 26)) | 0),
            (bt &= 67108863),
            (r = Math.imul(A, F)),
            (o = ((o = Math.imul(A, J)) + Math.imul(I, F)) | 0),
            (i = Math.imul(I, J)),
            (r = (r + Math.imul(R, H)) | 0),
            (o = ((o = (o + Math.imul(R, W)) | 0) + Math.imul(S, H)) | 0),
            (i = (i + Math.imul(S, W)) | 0),
            (r = (r + Math.imul(E, K)) | 0),
            (o = ((o = (o + Math.imul(E, Y)) | 0) + Math.imul(x, K)) | 0),
            (i = (i + Math.imul(x, Y)) | 0),
            (r = (r + Math.imul(w, Q)) | 0),
            (o = ((o = (o + Math.imul(w, Z)) | 0) + Math.imul(b, Q)) | 0),
            (i = (i + Math.imul(b, Z)) | 0),
            (r = (r + Math.imul(_, G)) | 0),
            (o = ((o = (o + Math.imul(_, tt)) | 0) + Math.imul(v, G)) | 0),
            (i = (i + Math.imul(v, tt)) | 0),
            (r = (r + Math.imul(p, nt)) | 0),
            (o = ((o = (o + Math.imul(p, rt)) | 0) + Math.imul(g, nt)) | 0),
            (i = (i + Math.imul(g, rt)) | 0);
          var Mt =
            (((c + (r = (r + Math.imul(l, it)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, st)) | 0) + Math.imul(f, it)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, st)) | 0) + (o >>> 13)) | 0) + (Mt >>> 26)) | 0),
            (Mt &= 67108863),
            (r = Math.imul(T, F)),
            (o = ((o = Math.imul(T, J)) + Math.imul(B, F)) | 0),
            (i = Math.imul(B, J)),
            (r = (r + Math.imul(A, H)) | 0),
            (o = ((o = (o + Math.imul(A, W)) | 0) + Math.imul(I, H)) | 0),
            (i = (i + Math.imul(I, W)) | 0),
            (r = (r + Math.imul(R, K)) | 0),
            (o = ((o = (o + Math.imul(R, Y)) | 0) + Math.imul(S, K)) | 0),
            (i = (i + Math.imul(S, Y)) | 0),
            (r = (r + Math.imul(E, Q)) | 0),
            (o = ((o = (o + Math.imul(E, Z)) | 0) + Math.imul(x, Q)) | 0),
            (i = (i + Math.imul(x, Z)) | 0),
            (r = (r + Math.imul(w, G)) | 0),
            (o = ((o = (o + Math.imul(w, tt)) | 0) + Math.imul(b, G)) | 0),
            (i = (i + Math.imul(b, tt)) | 0),
            (r = (r + Math.imul(_, nt)) | 0),
            (o = ((o = (o + Math.imul(_, rt)) | 0) + Math.imul(v, nt)) | 0),
            (i = (i + Math.imul(v, rt)) | 0),
            (r = (r + Math.imul(p, it)) | 0),
            (o = ((o = (o + Math.imul(p, st)) | 0) + Math.imul(g, it)) | 0),
            (i = (i + Math.imul(g, st)) | 0);
          var Et =
            (((c + (r = (r + Math.imul(l, ut)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, ct)) | 0) + Math.imul(f, ut)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, ct)) | 0) + (o >>> 13)) | 0) + (Et >>> 26)) | 0),
            (Et &= 67108863),
            (r = Math.imul(L, F)),
            (o = ((o = Math.imul(L, J)) + Math.imul(U, F)) | 0),
            (i = Math.imul(U, J)),
            (r = (r + Math.imul(T, H)) | 0),
            (o = ((o = (o + Math.imul(T, W)) | 0) + Math.imul(B, H)) | 0),
            (i = (i + Math.imul(B, W)) | 0),
            (r = (r + Math.imul(A, K)) | 0),
            (o = ((o = (o + Math.imul(A, Y)) | 0) + Math.imul(I, K)) | 0),
            (i = (i + Math.imul(I, Y)) | 0),
            (r = (r + Math.imul(R, Q)) | 0),
            (o = ((o = (o + Math.imul(R, Z)) | 0) + Math.imul(S, Q)) | 0),
            (i = (i + Math.imul(S, Z)) | 0),
            (r = (r + Math.imul(E, G)) | 0),
            (o = ((o = (o + Math.imul(E, tt)) | 0) + Math.imul(x, G)) | 0),
            (i = (i + Math.imul(x, tt)) | 0),
            (r = (r + Math.imul(w, nt)) | 0),
            (o = ((o = (o + Math.imul(w, rt)) | 0) + Math.imul(b, nt)) | 0),
            (i = (i + Math.imul(b, rt)) | 0),
            (r = (r + Math.imul(_, it)) | 0),
            (o = ((o = (o + Math.imul(_, st)) | 0) + Math.imul(v, it)) | 0),
            (i = (i + Math.imul(v, st)) | 0),
            (r = (r + Math.imul(p, ut)) | 0),
            (o = ((o = (o + Math.imul(p, ct)) | 0) + Math.imul(g, ut)) | 0),
            (i = (i + Math.imul(g, ct)) | 0);
          var xt =
            (((c + (r = (r + Math.imul(l, lt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, ft)) | 0) + Math.imul(f, lt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, ft)) | 0) + (o >>> 13)) | 0) + (xt >>> 26)) | 0),
            (xt &= 67108863),
            (r = Math.imul(q, F)),
            (o = ((o = Math.imul(q, J)) + Math.imul(j, F)) | 0),
            (i = Math.imul(j, J)),
            (r = (r + Math.imul(L, H)) | 0),
            (o = ((o = (o + Math.imul(L, W)) | 0) + Math.imul(U, H)) | 0),
            (i = (i + Math.imul(U, W)) | 0),
            (r = (r + Math.imul(T, K)) | 0),
            (o = ((o = (o + Math.imul(T, Y)) | 0) + Math.imul(B, K)) | 0),
            (i = (i + Math.imul(B, Y)) | 0),
            (r = (r + Math.imul(A, Q)) | 0),
            (o = ((o = (o + Math.imul(A, Z)) | 0) + Math.imul(I, Q)) | 0),
            (i = (i + Math.imul(I, Z)) | 0),
            (r = (r + Math.imul(R, G)) | 0),
            (o = ((o = (o + Math.imul(R, tt)) | 0) + Math.imul(S, G)) | 0),
            (i = (i + Math.imul(S, tt)) | 0),
            (r = (r + Math.imul(E, nt)) | 0),
            (o = ((o = (o + Math.imul(E, rt)) | 0) + Math.imul(x, nt)) | 0),
            (i = (i + Math.imul(x, rt)) | 0),
            (r = (r + Math.imul(w, it)) | 0),
            (o = ((o = (o + Math.imul(w, st)) | 0) + Math.imul(b, it)) | 0),
            (i = (i + Math.imul(b, st)) | 0),
            (r = (r + Math.imul(_, ut)) | 0),
            (o = ((o = (o + Math.imul(_, ct)) | 0) + Math.imul(v, ut)) | 0),
            (i = (i + Math.imul(v, ct)) | 0),
            (r = (r + Math.imul(p, lt)) | 0),
            (o = ((o = (o + Math.imul(p, ft)) | 0) + Math.imul(g, lt)) | 0),
            (i = (i + Math.imul(g, ft)) | 0);
          var kt =
            (((c + (r = (r + Math.imul(l, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(l, gt)) | 0) + Math.imul(f, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(f, gt)) | 0) + (o >>> 13)) | 0) + (kt >>> 26)) | 0),
            (kt &= 67108863),
            (r = Math.imul(q, H)),
            (o = ((o = Math.imul(q, W)) + Math.imul(j, H)) | 0),
            (i = Math.imul(j, W)),
            (r = (r + Math.imul(L, K)) | 0),
            (o = ((o = (o + Math.imul(L, Y)) | 0) + Math.imul(U, K)) | 0),
            (i = (i + Math.imul(U, Y)) | 0),
            (r = (r + Math.imul(T, Q)) | 0),
            (o = ((o = (o + Math.imul(T, Z)) | 0) + Math.imul(B, Q)) | 0),
            (i = (i + Math.imul(B, Z)) | 0),
            (r = (r + Math.imul(A, G)) | 0),
            (o = ((o = (o + Math.imul(A, tt)) | 0) + Math.imul(I, G)) | 0),
            (i = (i + Math.imul(I, tt)) | 0),
            (r = (r + Math.imul(R, nt)) | 0),
            (o = ((o = (o + Math.imul(R, rt)) | 0) + Math.imul(S, nt)) | 0),
            (i = (i + Math.imul(S, rt)) | 0),
            (r = (r + Math.imul(E, it)) | 0),
            (o = ((o = (o + Math.imul(E, st)) | 0) + Math.imul(x, it)) | 0),
            (i = (i + Math.imul(x, st)) | 0),
            (r = (r + Math.imul(w, ut)) | 0),
            (o = ((o = (o + Math.imul(w, ct)) | 0) + Math.imul(b, ut)) | 0),
            (i = (i + Math.imul(b, ct)) | 0),
            (r = (r + Math.imul(_, lt)) | 0),
            (o = ((o = (o + Math.imul(_, ft)) | 0) + Math.imul(v, lt)) | 0),
            (i = (i + Math.imul(v, ft)) | 0);
          var Rt =
            (((c + (r = (r + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(p, gt)) | 0) + Math.imul(g, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(g, gt)) | 0) + (o >>> 13)) | 0) + (Rt >>> 26)) | 0),
            (Rt &= 67108863),
            (r = Math.imul(q, K)),
            (o = ((o = Math.imul(q, Y)) + Math.imul(j, K)) | 0),
            (i = Math.imul(j, Y)),
            (r = (r + Math.imul(L, Q)) | 0),
            (o = ((o = (o + Math.imul(L, Z)) | 0) + Math.imul(U, Q)) | 0),
            (i = (i + Math.imul(U, Z)) | 0),
            (r = (r + Math.imul(T, G)) | 0),
            (o = ((o = (o + Math.imul(T, tt)) | 0) + Math.imul(B, G)) | 0),
            (i = (i + Math.imul(B, tt)) | 0),
            (r = (r + Math.imul(A, nt)) | 0),
            (o = ((o = (o + Math.imul(A, rt)) | 0) + Math.imul(I, nt)) | 0),
            (i = (i + Math.imul(I, rt)) | 0),
            (r = (r + Math.imul(R, it)) | 0),
            (o = ((o = (o + Math.imul(R, st)) | 0) + Math.imul(S, it)) | 0),
            (i = (i + Math.imul(S, st)) | 0),
            (r = (r + Math.imul(E, ut)) | 0),
            (o = ((o = (o + Math.imul(E, ct)) | 0) + Math.imul(x, ut)) | 0),
            (i = (i + Math.imul(x, ct)) | 0),
            (r = (r + Math.imul(w, lt)) | 0),
            (o = ((o = (o + Math.imul(w, ft)) | 0) + Math.imul(b, lt)) | 0),
            (i = (i + Math.imul(b, ft)) | 0);
          var St =
            (((c + (r = (r + Math.imul(_, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(_, gt)) | 0) + Math.imul(v, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(v, gt)) | 0) + (o >>> 13)) | 0) + (St >>> 26)) | 0),
            (St &= 67108863),
            (r = Math.imul(q, Q)),
            (o = ((o = Math.imul(q, Z)) + Math.imul(j, Q)) | 0),
            (i = Math.imul(j, Z)),
            (r = (r + Math.imul(L, G)) | 0),
            (o = ((o = (o + Math.imul(L, tt)) | 0) + Math.imul(U, G)) | 0),
            (i = (i + Math.imul(U, tt)) | 0),
            (r = (r + Math.imul(T, nt)) | 0),
            (o = ((o = (o + Math.imul(T, rt)) | 0) + Math.imul(B, nt)) | 0),
            (i = (i + Math.imul(B, rt)) | 0),
            (r = (r + Math.imul(A, it)) | 0),
            (o = ((o = (o + Math.imul(A, st)) | 0) + Math.imul(I, it)) | 0),
            (i = (i + Math.imul(I, st)) | 0),
            (r = (r + Math.imul(R, ut)) | 0),
            (o = ((o = (o + Math.imul(R, ct)) | 0) + Math.imul(S, ut)) | 0),
            (i = (i + Math.imul(S, ct)) | 0),
            (r = (r + Math.imul(E, lt)) | 0),
            (o = ((o = (o + Math.imul(E, ft)) | 0) + Math.imul(x, lt)) | 0),
            (i = (i + Math.imul(x, ft)) | 0);
          var Ct =
            (((c + (r = (r + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(w, gt)) | 0) + Math.imul(b, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(b, gt)) | 0) + (o >>> 13)) | 0) + (Ct >>> 26)) | 0),
            (Ct &= 67108863),
            (r = Math.imul(q, G)),
            (o = ((o = Math.imul(q, tt)) + Math.imul(j, G)) | 0),
            (i = Math.imul(j, tt)),
            (r = (r + Math.imul(L, nt)) | 0),
            (o = ((o = (o + Math.imul(L, rt)) | 0) + Math.imul(U, nt)) | 0),
            (i = (i + Math.imul(U, rt)) | 0),
            (r = (r + Math.imul(T, it)) | 0),
            (o = ((o = (o + Math.imul(T, st)) | 0) + Math.imul(B, it)) | 0),
            (i = (i + Math.imul(B, st)) | 0),
            (r = (r + Math.imul(A, ut)) | 0),
            (o = ((o = (o + Math.imul(A, ct)) | 0) + Math.imul(I, ut)) | 0),
            (i = (i + Math.imul(I, ct)) | 0),
            (r = (r + Math.imul(R, lt)) | 0),
            (o = ((o = (o + Math.imul(R, ft)) | 0) + Math.imul(S, lt)) | 0),
            (i = (i + Math.imul(S, ft)) | 0);
          var At =
            (((c + (r = (r + Math.imul(E, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(E, gt)) | 0) + Math.imul(x, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(x, gt)) | 0) + (o >>> 13)) | 0) + (At >>> 26)) | 0),
            (At &= 67108863),
            (r = Math.imul(q, nt)),
            (o = ((o = Math.imul(q, rt)) + Math.imul(j, nt)) | 0),
            (i = Math.imul(j, rt)),
            (r = (r + Math.imul(L, it)) | 0),
            (o = ((o = (o + Math.imul(L, st)) | 0) + Math.imul(U, it)) | 0),
            (i = (i + Math.imul(U, st)) | 0),
            (r = (r + Math.imul(T, ut)) | 0),
            (o = ((o = (o + Math.imul(T, ct)) | 0) + Math.imul(B, ut)) | 0),
            (i = (i + Math.imul(B, ct)) | 0),
            (r = (r + Math.imul(A, lt)) | 0),
            (o = ((o = (o + Math.imul(A, ft)) | 0) + Math.imul(I, lt)) | 0),
            (i = (i + Math.imul(I, ft)) | 0);
          var It =
            (((c + (r = (r + Math.imul(R, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(R, gt)) | 0) + Math.imul(S, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(S, gt)) | 0) + (o >>> 13)) | 0) + (It >>> 26)) | 0),
            (It &= 67108863),
            (r = Math.imul(q, it)),
            (o = ((o = Math.imul(q, st)) + Math.imul(j, it)) | 0),
            (i = Math.imul(j, st)),
            (r = (r + Math.imul(L, ut)) | 0),
            (o = ((o = (o + Math.imul(L, ct)) | 0) + Math.imul(U, ut)) | 0),
            (i = (i + Math.imul(U, ct)) | 0),
            (r = (r + Math.imul(T, lt)) | 0),
            (o = ((o = (o + Math.imul(T, ft)) | 0) + Math.imul(B, lt)) | 0),
            (i = (i + Math.imul(B, ft)) | 0);
          var Ot =
            (((c + (r = (r + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(A, gt)) | 0) + Math.imul(I, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(I, gt)) | 0) + (o >>> 13)) | 0) + (Ot >>> 26)) | 0),
            (Ot &= 67108863),
            (r = Math.imul(q, ut)),
            (o = ((o = Math.imul(q, ct)) + Math.imul(j, ut)) | 0),
            (i = Math.imul(j, ct)),
            (r = (r + Math.imul(L, lt)) | 0),
            (o = ((o = (o + Math.imul(L, ft)) | 0) + Math.imul(U, lt)) | 0),
            (i = (i + Math.imul(U, ft)) | 0);
          var Tt =
            (((c + (r = (r + Math.imul(T, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(T, gt)) | 0) + Math.imul(B, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(B, gt)) | 0) + (o >>> 13)) | 0) + (Tt >>> 26)) | 0),
            (Tt &= 67108863),
            (r = Math.imul(q, lt)),
            (o = ((o = Math.imul(q, ft)) + Math.imul(j, lt)) | 0),
            (i = Math.imul(j, ft));
          var Bt =
            (((c + (r = (r + Math.imul(L, pt)) | 0)) | 0) +
              ((8191 & (o = ((o = (o + Math.imul(L, gt)) | 0) + Math.imul(U, pt)) | 0)) << 13)) |
            0;
          (c = ((((i = (i + Math.imul(U, gt)) | 0) + (o >>> 13)) | 0) + (Bt >>> 26)) | 0), (Bt &= 67108863);
          var Pt =
            (((c + (r = Math.imul(q, pt))) | 0) +
              ((8191 & (o = ((o = Math.imul(q, gt)) + Math.imul(j, pt)) | 0)) << 13)) |
            0;
          return (
            (c = ((((i = Math.imul(j, gt)) + (o >>> 13)) | 0) + (Pt >>> 26)) | 0),
            (Pt &= 67108863),
            (u[0] = mt),
            (u[1] = _t),
            (u[2] = vt),
            (u[3] = yt),
            (u[4] = wt),
            (u[5] = bt),
            (u[6] = Mt),
            (u[7] = Et),
            (u[8] = xt),
            (u[9] = kt),
            (u[10] = Rt),
            (u[11] = St),
            (u[12] = Ct),
            (u[13] = At),
            (u[14] = It),
            (u[15] = Ot),
            (u[16] = Tt),
            (u[17] = Bt),
            (u[18] = Pt),
            0 !== c && ((u[19] = c), n.length++),
            n
          );
        };
        function p(t, e, n) {
          return new g().mulp(t, e, n);
        }
        function g(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (d = f),
          (i.prototype.mulTo = function (t, e) {
            var n,
              r = this.length + t.length;
            return (
              (n =
                10 === this.length && 10 === t.length
                  ? d(this, t, e)
                  : r < 63
                  ? f(this, t, e)
                  : r < 1024
                  ? (function (t, e, n) {
                      (n.negative = e.negative ^ t.negative), (n.length = t.length + e.length);
                      for (var r = 0, o = 0, i = 0; i < n.length - 1; i++) {
                        var s = o;
                        o = 0;
                        for (
                          var a = 67108863 & r, u = Math.min(i, e.length - 1), c = Math.max(0, i - t.length + 1);
                          c <= u;
                          c++
                        ) {
                          var h = i - c,
                            l = (0 | t.words[h]) * (0 | e.words[c]),
                            f = 67108863 & l;
                          (a = 67108863 & (f = (f + a) | 0)),
                            (o += (s = ((s = (s + ((l / 67108864) | 0)) | 0) + (f >>> 26)) | 0) >>> 26),
                            (s &= 67108863);
                        }
                        (n.words[i] = a), (r = s), (s = o);
                      }
                      return 0 !== r ? (n.words[i] = r) : n.length--, n.strip();
                    })(this, t, e)
                  : p(this, t, e)),
              n
            );
          }),
          (g.prototype.makeRBT = function (t) {
            for (var e = new Array(t), n = i.prototype._countBits(t) - 1, r = 0; r < t; r++)
              e[r] = this.revBin(r, n, t);
            return e;
          }),
          (g.prototype.revBin = function (t, e, n) {
            if (0 === t || t === n - 1) return t;
            for (var r = 0, o = 0; o < e; o++) (r |= (1 & t) << (e - o - 1)), (t >>= 1);
            return r;
          }),
          (g.prototype.permute = function (t, e, n, r, o, i) {
            for (var s = 0; s < i; s++) (r[s] = e[t[s]]), (o[s] = n[t[s]]);
          }),
          (g.prototype.transform = function (t, e, n, r, o, i) {
            this.permute(i, t, e, n, r, o);
            for (var s = 1; s < o; s <<= 1)
              for (
                var a = s << 1, u = Math.cos((2 * Math.PI) / a), c = Math.sin((2 * Math.PI) / a), h = 0;
                h < o;
                h += a
              )
                for (var l = u, f = c, d = 0; d < s; d++) {
                  var p = n[h + d],
                    g = r[h + d],
                    m = n[h + d + s],
                    _ = r[h + d + s],
                    v = l * m - f * _;
                  (_ = l * _ + f * m),
                    (m = v),
                    (n[h + d] = p + m),
                    (r[h + d] = g + _),
                    (n[h + d + s] = p - m),
                    (r[h + d + s] = g - _),
                    d !== a && ((v = u * l - c * f), (f = u * f + c * l), (l = v));
                }
          }),
          (g.prototype.guessLen13b = function (t, e) {
            var n = 1 | Math.max(e, t),
              r = 1 & n,
              o = 0;
            for (n = (n / 2) | 0; n; n >>>= 1) o++;
            return 1 << (o + 1 + r);
          }),
          (g.prototype.conjugate = function (t, e, n) {
            if (!(n <= 1))
              for (var r = 0; r < n / 2; r++) {
                var o = t[r];
                (t[r] = t[n - r - 1]), (t[n - r - 1] = o), (o = e[r]), (e[r] = -e[n - r - 1]), (e[n - r - 1] = -o);
              }
          }),
          (g.prototype.normalize13b = function (t, e) {
            for (var n = 0, r = 0; r < e / 2; r++) {
              var o = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + n;
              (t[r] = 67108863 & o), (n = o < 67108864 ? 0 : (o / 67108864) | 0);
            }
            return t;
          }),
          (g.prototype.convert13b = function (t, e, n, o) {
            for (var i = 0, s = 0; s < e; s++)
              (i += 0 | t[s]), (n[2 * s] = 8191 & i), (i >>>= 13), (n[2 * s + 1] = 8191 & i), (i >>>= 13);
            for (s = 2 * e; s < o; ++s) n[s] = 0;
            r(0 === i), r(0 === (-8192 & i));
          }),
          (g.prototype.stub = function (t) {
            for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
            return e;
          }),
          (g.prototype.mulp = function (t, e, n) {
            var r = 2 * this.guessLen13b(t.length, e.length),
              o = this.makeRBT(r),
              i = this.stub(r),
              s = new Array(r),
              a = new Array(r),
              u = new Array(r),
              c = new Array(r),
              h = new Array(r),
              l = new Array(r),
              f = n.words;
            (f.length = r),
              this.convert13b(t.words, t.length, s, r),
              this.convert13b(e.words, e.length, c, r),
              this.transform(s, i, a, u, r, o),
              this.transform(c, i, h, l, r, o);
            for (var d = 0; d < r; d++) {
              var p = a[d] * h[d] - u[d] * l[d];
              (u[d] = a[d] * l[d] + u[d] * h[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, r),
              this.transform(a, u, f, i, r, o),
              this.conjugate(f, i, r),
              this.normalize13b(f, r),
              (n.negative = t.negative ^ e.negative),
              (n.length = t.length + e.length),
              n.strip()
            );
          }),
          (i.prototype.mul = function (t) {
            var e = new i(null);
            return (e.words = new Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (i.prototype.mulf = function (t) {
            var e = new i(null);
            return (e.words = new Array(this.length + t.length)), p(this, t, e);
          }),
          (i.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (i.prototype.imuln = function (t) {
            r("number" === typeof t), r(t < 67108864);
            for (var e = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                i = (67108863 & o) + (67108863 & e);
              (e >>= 26), (e += (o / 67108864) | 0), (e += i >>> 26), (this.words[n] = 67108863 & i);
            }
            return 0 !== e && ((this.words[n] = e), this.length++), this;
          }),
          (i.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (i.prototype.sqr = function () {
            return this.mul(this);
          }),
          (i.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (i.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
                var r = (n / 26) | 0,
                  o = n % 26;
                e[n] = (t.words[r] & (1 << o)) >>> o;
              }
              return e;
            })(t);
            if (0 === e.length) return new i(1);
            for (var n = this, r = 0; r < e.length && 0 === e[r]; r++, n = n.sqr());
            if (++r < e.length) for (var o = n.sqr(); r < e.length; r++, o = o.sqr()) 0 !== e[r] && (n = n.mul(o));
            return n;
          }),
          (i.prototype.iushln = function (t) {
            r("number" === typeof t && t >= 0);
            var e,
              n = t % 26,
              o = (t - n) / 26,
              i = (67108863 >>> (26 - n)) << (26 - n);
            if (0 !== n) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & i,
                  u = ((0 | this.words[e]) - a) << n;
                (this.words[e] = u | s), (s = a >>> (26 - n));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== o) {
              for (e = this.length - 1; e >= 0; e--) this.words[e + o] = this.words[e];
              for (e = 0; e < o; e++) this.words[e] = 0;
              this.length += o;
            }
            return this.strip();
          }),
          (i.prototype.ishln = function (t) {
            return r(0 === this.negative), this.iushln(t);
          }),
          (i.prototype.iushrn = function (t, e, n) {
            var o;
            r("number" === typeof t && t >= 0), (o = e ? (e - (e % 26)) / 26 : 0);
            var i = t % 26,
              s = Math.min((t - i) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> i) << i),
              u = n;
            if (((o -= s), (o = Math.max(0, o)), u)) {
              for (var c = 0; c < s; c++) u.words[c] = this.words[c];
              u.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s];
            else (this.words[0] = 0), (this.length = 1);
            var h = 0;
            for (c = this.length - 1; c >= 0 && (0 !== h || c >= o); c--) {
              var l = 0 | this.words[c];
              (this.words[c] = (h << (26 - i)) | (l >>> i)), (h = l & a);
            }
            return (
              u && 0 !== h && (u.words[u.length++] = h),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (i.prototype.ishrn = function (t, e, n) {
            return r(0 === this.negative), this.iushrn(t, e, n);
          }),
          (i.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (i.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (i.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (i.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (i.prototype.testn = function (t) {
            r("number" === typeof t && t >= 0);
            var e = t % 26,
              n = (t - e) / 26,
              o = 1 << e;
            return !(this.length <= n) && !!(this.words[n] & o);
          }),
          (i.prototype.imaskn = function (t) {
            r("number" === typeof t && t >= 0);
            var e = t % 26,
              n = (t - e) / 26;
            if ((r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n)) return this;
            if ((0 !== e && n++, (this.length = Math.min(n, this.length)), 0 !== e)) {
              var o = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= o;
            }
            return this.strip();
          }),
          (i.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (i.prototype.iaddn = function (t) {
            return (
              r("number" === typeof t),
              r(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < t
                  ? ((this.words[0] = t - (0 | this.words[0])), (this.negative = 0), this)
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
                : this._iaddn(t)
            );
          }),
          (i.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864), e === this.length - 1 ? (this.words[e + 1] = 1) : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (i.prototype.isubn = function (t) {
            if ((r("number" === typeof t), r(t < 67108864), t < 0)) return this.iaddn(-t);
            if (0 !== this.negative) return (this.negative = 0), this.iaddn(t), (this.negative = 1), this;
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (i.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (i.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (i.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (i.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (i.prototype._ishlnsubmul = function (t, e, n) {
            var o,
              i,
              s = t.length + n;
            this._expand(s);
            var a = 0;
            for (o = 0; o < t.length; o++) {
              i = (0 | this.words[o + n]) + a;
              var u = (0 | t.words[o]) * e;
              (a = ((i -= 67108863 & u) >> 26) - ((u / 67108864) | 0)), (this.words[o + n] = 67108863 & i);
            }
            for (; o < this.length - n; o++)
              (a = (i = (0 | this.words[o + n]) + a) >> 26), (this.words[o + n] = 67108863 & i);
            if (0 === a) return this.strip();
            for (r(-1 === a), a = 0, o = 0; o < this.length; o++)
              (a = (i = -(0 | this.words[o]) + a) >> 26), (this.words[o] = 67108863 & i);
            return (this.negative = 1), this.strip();
          }),
          (i.prototype._wordDiv = function (t, e) {
            var n = (this.length, t.length),
              r = this.clone(),
              o = t,
              s = 0 | o.words[o.length - 1];
            0 !== (n = 26 - this._countBits(s)) && ((o = o.ushln(n)), r.iushln(n), (s = 0 | o.words[o.length - 1]));
            var a,
              u = r.length - o.length;
            if ("mod" !== e) {
              ((a = new i(null)).length = u + 1), (a.words = new Array(a.length));
              for (var c = 0; c < a.length; c++) a.words[c] = 0;
            }
            var h = r.clone()._ishlnsubmul(o, 1, u);
            0 === h.negative && ((r = h), a && (a.words[u] = 1));
            for (var l = u - 1; l >= 0; l--) {
              var f = 67108864 * (0 | r.words[o.length + l]) + (0 | r.words[o.length + l - 1]);
              for (f = Math.min((f / s) | 0, 67108863), r._ishlnsubmul(o, f, l); 0 !== r.negative; )
                f--, (r.negative = 0), r._ishlnsubmul(o, 1, l), r.isZero() || (r.negative ^= 1);
              a && (a.words[l] = f);
            }
            return a && a.strip(), r.strip(), "div" !== e && 0 !== n && r.iushrn(n), { div: a || null, mod: r };
          }),
          (i.prototype.divmod = function (t, e, n) {
            return (
              r(!t.isZero()),
              this.isZero()
                ? { div: new i(0), mod: new i(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  "mod" !== e && (o = a.div.neg()),
                  "div" !== e && ((s = a.mod.neg()), n && 0 !== s.negative && s.iadd(t)),
                  { div: o, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)), "mod" !== e && (o = a.div.neg()), { div: o, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  "div" !== e && ((s = a.mod.neg()), n && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new i(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new i(this.modn(t.words[0])) }
                  : { div: this.divn(t.words[0]), mod: new i(this.modn(t.words[0])) }
                : this._wordDiv(t, e)
            );
            var o, s, a;
          }),
          (i.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (i.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (i.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (i.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              r = t.ushrn(1),
              o = t.andln(1),
              i = n.cmp(r);
            return i < 0 || (1 === o && 0 === i) ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
          }),
          (i.prototype.modn = function (t) {
            r(t <= 67108863);
            for (var e = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (e * n + (0 | this.words[o])) % t;
            return n;
          }),
          (i.prototype.idivn = function (t) {
            r(t <= 67108863);
            for (var e = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 67108864 * e;
              (this.words[n] = (o / t) | 0), (e = o % t);
            }
            return this.strip();
          }),
          (i.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (i.prototype.egcd = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
              n = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (var o = new i(1), s = new i(0), a = new i(0), u = new i(1), c = 0; e.isEven() && n.isEven(); )
              e.iushrn(1), n.iushrn(1), ++c;
            for (var h = n.clone(), l = e.clone(); !e.isZero(); ) {
              for (var f = 0, d = 1; 0 === (e.words[0] & d) && f < 26; ++f, d <<= 1);
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (o.isOdd() || s.isOdd()) && (o.iadd(h), s.isub(l)), o.iushrn(1), s.iushrn(1);
              for (var p = 0, g = 1; 0 === (n.words[0] & g) && p < 26; ++p, g <<= 1);
              if (p > 0)
                for (n.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(l)), a.iushrn(1), u.iushrn(1);
              e.cmp(n) >= 0 ? (e.isub(n), o.isub(a), s.isub(u)) : (n.isub(e), a.isub(o), u.isub(s));
            }
            return { a: a, b: u, gcd: n.iushln(c) };
          }),
          (i.prototype._invmp = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
              n = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (var o, s = new i(1), a = new i(0), u = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0; ) {
              for (var c = 0, h = 1; 0 === (e.words[0] & h) && c < 26; ++c, h <<= 1);
              if (c > 0) for (e.iushrn(c); c-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1);
              for (var l = 0, f = 1; 0 === (n.words[0] & f) && l < 26; ++l, f <<= 1);
              if (l > 0) for (n.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1);
              e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
            }
            return (o = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && o.iadd(t), o;
          }),
          (i.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              n = t.clone();
            (e.negative = 0), (n.negative = 0);
            for (var r = 0; e.isEven() && n.isEven(); r++) e.iushrn(1), n.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; n.isEven(); ) n.iushrn(1);
              var o = e.cmp(n);
              if (o < 0) {
                var i = e;
                (e = n), (n = i);
              } else if (0 === o || 0 === n.cmpn(1)) break;
              e.isub(n);
            }
            return n.iushln(r);
          }),
          (i.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (i.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (i.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (i.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (i.prototype.bincn = function (t) {
            r("number" === typeof t);
            var e = t % 26,
              n = (t - e) / 26,
              o = 1 << e;
            if (this.length <= n) return this._expand(n + 1), (this.words[n] |= o), this;
            for (var i = o, s = n; 0 !== i && s < this.length; s++) {
              var a = 0 | this.words[s];
              (i = (a += i) >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== i && ((this.words[s] = i), this.length++), this;
          }),
          (i.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (i.prototype.cmpn = function (t) {
            var e,
              n = t < 0;
            if (0 !== this.negative && !n) return -1;
            if (0 === this.negative && n) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              n && (t = -t), r(t <= 67108863, "Number is too big");
              var o = 0 | this.words[0];
              e = o === t ? 0 : o < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (i.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (i.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, n = this.length - 1; n >= 0; n--) {
              var r = 0 | this.words[n],
                o = 0 | t.words[n];
              if (r !== o) {
                r < o ? (e = -1) : r > o && (e = 1);
                break;
              }
            }
            return e;
          }),
          (i.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (i.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (i.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (i.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (i.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (i.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (i.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (i.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (i.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (i.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (i.red = function (t) {
            return new M(t);
          }),
          (i.prototype.toRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              r(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (i.prototype.fromRed = function () {
            return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
          }),
          (i.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (i.prototype.forceRed = function (t) {
            return r(!this.red, "Already a number in reduction context"), this._forceRed(t);
          }),
          (i.prototype.redAdd = function (t) {
            return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
          }),
          (i.prototype.redIAdd = function (t) {
            return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
          }),
          (i.prototype.redSub = function (t) {
            return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
          }),
          (i.prototype.redISub = function (t) {
            return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
          }),
          (i.prototype.redShl = function (t) {
            return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
          }),
          (i.prototype.redMul = function (t) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
          }),
          (i.prototype.redIMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
            );
          }),
          (i.prototype.redSqr = function () {
            return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
          }),
          (i.prototype.redISqr = function () {
            return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
          }),
          (i.prototype.redSqrt = function () {
            return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
          }),
          (i.prototype.redInvm = function () {
            return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
          }),
          (i.prototype.redNeg = function () {
            return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
          }),
          (i.prototype.redPow = function (t) {
            return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
          });
        var m = { k256: null, p224: null, p192: null, p25519: null };
        function _(t, e) {
          (this.name = t),
            (this.p = new i(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new i(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function v() {
          _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        function y() {
          _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        function w() {
          _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        function b() {
          _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        function M(t) {
          if ("string" === typeof t) {
            var e = i._prime(t);
            (this.m = e.p), (this.prime = e);
          } else r(t.gtn(1), "modulus must be greater than 1"), (this.m = t), (this.prime = null);
        }
        function E(t) {
          M.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new i(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (_.prototype._tmp = function () {
          var t = new i(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (_.prototype.ireduce = function (t) {
            var e,
              n = t;
            do {
              this.split(n, this.tmp), (e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var r = e < this.n ? -1 : n.ucmp(this.p);
            return 0 === r ? ((n.words[0] = 0), (n.length = 1)) : r > 0 ? n.isub(this.p) : n.strip(), n;
          }),
          (_.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (_.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          o(v, _),
          (v.prototype.split = function (t, e) {
            for (var n = 4194303, r = Math.min(t.length, 9), o = 0; o < r; o++) e.words[o] = t.words[o];
            if (((e.length = r), t.length <= 9)) return (t.words[0] = 0), void (t.length = 1);
            var i = t.words[9];
            for (e.words[e.length++] = i & n, o = 10; o < t.length; o++) {
              var s = 0 | t.words[o];
              (t.words[o - 10] = ((s & n) << 4) | (i >>> 22)), (i = s);
            }
            (i >>>= 22), (t.words[o - 10] = i), 0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (v.prototype.imulK = function (t) {
            (t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2);
            for (var e = 0, n = 0; n < t.length; n++) {
              var r = 0 | t.words[n];
              (e += 977 * r), (t.words[n] = 67108863 & e), (e = 64 * r + ((e / 67108864) | 0));
            }
            return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
          }),
          o(y, _),
          o(w, _),
          o(b, _),
          (b.prototype.imulK = function (t) {
            for (var e = 0, n = 0; n < t.length; n++) {
              var r = 19 * (0 | t.words[n]) + e,
                o = 67108863 & r;
              (r >>>= 26), (t.words[n] = o), (e = r);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (i._prime = function (t) {
            if (m[t]) return m[t];
            var e;
            if ("k256" === t) e = new v();
            else if ("p224" === t) e = new y();
            else if ("p192" === t) e = new w();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new b();
            }
            return (m[t] = e), e;
          }),
          (M.prototype._verify1 = function (t) {
            r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers");
          }),
          (M.prototype._verify2 = function (t, e) {
            r(0 === (t.negative | e.negative), "red works only with positives"),
              r(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (M.prototype.imod = function (t) {
            return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
          }),
          (M.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (M.prototype.add = function (t, e) {
            this._verify2(t, e);
            var n = t.add(e);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
          }),
          (M.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var n = t.iadd(e);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n;
          }),
          (M.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var n = t.sub(e);
            return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
          }),
          (M.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var n = t.isub(e);
            return n.cmpn(0) < 0 && n.iadd(this.m), n;
          }),
          (M.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (M.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (M.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (M.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (M.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (M.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((r(e % 2 === 1), 3 === e)) {
              var n = this.m.add(new i(1)).iushrn(2);
              return this.pow(t, n);
            }
            for (var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1); ) s++, o.iushrn(1);
            r(!o.isZero());
            var a = new i(1).toRed(this),
              u = a.redNeg(),
              c = this.m.subn(1).iushrn(1),
              h = this.m.bitLength();
            for (h = new i(2 * h * h).toRed(this); 0 !== this.pow(h, c).cmp(u); ) h.redIAdd(u);
            for (
              var l = this.pow(h, o), f = this.pow(t, o.addn(1).iushrn(1)), d = this.pow(t, o), p = s;
              0 !== d.cmp(a);

            ) {
              for (var g = d, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
              r(m < p);
              var _ = this.pow(l, new i(1).iushln(p - m - 1));
              (f = f.redMul(_)), (l = _.redSqr()), (d = d.redMul(l)), (p = m);
            }
            return f;
          }),
          (M.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative ? ((e.negative = 0), this.imod(e).redNeg()) : this.imod(e);
          }),
          (M.prototype.pow = function (t, e) {
            if (e.isZero()) return new i(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var n = new Array(16);
            (n[0] = new i(1).toRed(this)), (n[1] = t);
            for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
            var o = n[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), r = e.length - 1; r >= 0; r--) {
              for (var c = e.words[r], h = u - 1; h >= 0; h--) {
                var l = (c >> h) & 1;
                o !== n[0] && (o = this.sqr(o)),
                  0 !== l || 0 !== s
                    ? ((s <<= 1),
                      (s |= l),
                      (4 === ++a || (0 === r && 0 === h)) && ((o = this.mul(o, n[s])), (a = 0), (s = 0)))
                    : (a = 0);
              }
              u = 26;
            }
            return o;
          }),
          (M.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (M.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (i.mont = function (t) {
            return new E(t);
          }),
          o(E, M),
          (E.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (E.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (E.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero()) return (t.words[0] = 0), (t.length = 1), t;
            var n = t.imul(e),
              r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              o = n.isub(r).iushrn(this.shift),
              i = o;
            return o.cmp(this.m) >= 0 ? (i = o.isub(this.m)) : o.cmpn(0) < 0 && (i = o.iadd(this.m)), i._forceRed(this);
          }),
          (E.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new i(0)._forceRed(this);
            var n = t.mul(e),
              r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              o = n.isub(r).iushrn(this.shift),
              s = o;
            return o.cmp(this.m) >= 0 ? (s = o.isub(this.m)) : o.cmpn(0) < 0 && (s = o.iadd(this.m)), s._forceRed(this);
          }),
          (E.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = n.nmd(t)), this);
    },
    2873: function (t, e) {
      "use strict";
      function n(t) {
        let e;
        return "undefined" !== typeof window && "undefined" !== typeof window[t] && (e = window[t]), e;
      }
      function r(t) {
        const e = n(t);
        if (!e) throw new Error(`${t} is not defined in Window`);
        return e;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLocalStorage =
          e.getLocalStorageOrThrow =
          e.getCrypto =
          e.getCryptoOrThrow =
          e.getLocation =
          e.getLocationOrThrow =
          e.getNavigator =
          e.getNavigatorOrThrow =
          e.getDocument =
          e.getDocumentOrThrow =
          e.getFromWindowOrThrow =
          e.getFromWindow =
            void 0),
        (e.getFromWindow = n),
        (e.getFromWindowOrThrow = r),
        (e.getDocumentOrThrow = function () {
          return r("document");
        }),
        (e.getDocument = function () {
          return n("document");
        }),
        (e.getNavigatorOrThrow = function () {
          return r("navigator");
        }),
        (e.getNavigator = function () {
          return n("navigator");
        }),
        (e.getLocationOrThrow = function () {
          return r("location");
        }),
        (e.getLocation = function () {
          return n("location");
        }),
        (e.getCryptoOrThrow = function () {
          return r("crypto");
        }),
        (e.getCrypto = function () {
          return n("crypto");
        }),
        (e.getLocalStorageOrThrow = function () {
          return r("localStorage");
        }),
        (e.getLocalStorage = function () {
          return n("localStorage");
        });
    },
    5755: function (t, e, n) {
      "use strict";
      e.D = void 0;
      const r = n(2873);
      e.D = function () {
        let t, e;
        try {
          (t = r.getDocumentOrThrow()), (e = r.getLocationOrThrow());
        } catch (i) {
          return null;
        }
        function n(...e) {
          const n = t.getElementsByTagName("meta");
          for (let t = 0; t < n.length; t++) {
            const r = n[t],
              o = ["itemprop", "property", "name"].map((t) => r.getAttribute(t)).filter((t) => !!t && e.includes(t));
            if (o.length && o) {
              const t = r.getAttribute("content");
              if (t) return t;
            }
          }
          return "";
        }
        const o = (function () {
          let e = n("name", "og:site_name", "og:title", "twitter:title");
          return e || (e = t.title), e;
        })();
        return {
          description: n("description", "og:description", "twitter:description", "keywords"),
          url: e.origin,
          icons: (function () {
            const n = t.getElementsByTagName("link"),
              r = [];
            for (let t = 0; t < n.length; t++) {
              const o = n[t],
                i = o.getAttribute("rel");
              if (i && i.toLowerCase().indexOf("icon") > -1) {
                const t = o.getAttribute("href");
                if (t)
                  if (
                    -1 === t.toLowerCase().indexOf("https:") &&
                    -1 === t.toLowerCase().indexOf("http:") &&
                    0 !== t.indexOf("//")
                  ) {
                    let n = e.protocol + "//" + e.host;
                    if (0 === t.indexOf("/")) n += t;
                    else {
                      const r = e.pathname.split("/");
                      r.pop();
                      n += r.join("/") + "/" + t;
                    }
                    r.push(n);
                  } else if (0 === t.indexOf("//")) {
                    const n = e.protocol + t;
                    r.push(n);
                  } else r.push(t);
              }
            }
            return r;
          })(),
          name: o,
        };
      };
    },
    9742: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            i = u(t),
            s = i[0],
            a = i[1],
            c = new o(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, s, a)
            ),
            h = 0,
            l = a > 0 ? s - 4 : s;
          for (n = 0; n < l; n += 4)
            (e =
              (r[t.charCodeAt(n)] << 18) |
              (r[t.charCodeAt(n + 1)] << 12) |
              (r[t.charCodeAt(n + 2)] << 6) |
              r[t.charCodeAt(n + 3)]),
              (c[h++] = (e >> 16) & 255),
              (c[h++] = (e >> 8) & 255),
              (c[h++] = 255 & e);
          2 === a && ((e = (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)), (c[h++] = 255 & e));
          1 === a &&
            ((e = (r[t.charCodeAt(n)] << 10) | (r[t.charCodeAt(n + 1)] << 4) | (r[t.charCodeAt(n + 2)] >> 2)),
            (c[h++] = (e >> 8) & 255),
            (c[h++] = 255 & e));
          return c;
        }),
        (e.fromByteArray = function (t) {
          for (var e, r = t.length, o = r % 3, i = [], s = 16383, a = 0, u = r - o; a < u; a += s)
            i.push(c(t, a, a + s > u ? u : a + s));
          1 === o
            ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
            : 2 === o &&
              ((e = (t[r - 2] << 8) + t[r - 1]), i.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
          return i.join("");
        });
      for (
        var n = [],
          r = [],
          o = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = i.length;
        s < a;
        ++s
      )
        (n[s] = i[s]), (r[i.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function c(t, e, r) {
        for (var o, i, s = [], a = e; a < r; a += 3)
          (o = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])),
            s.push(n[((i = o) >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
        return s.join("");
      }
      (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
    },
    8764: function (t, e, n) {
      "use strict";
      var r = n(9742),
        o = n(645),
        i =
          "function" === typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (e.Buffer = u),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return u.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50);
      var s = 2147483647;
      function a(t) {
        if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
        var e = new Uint8Array(t);
        return Object.setPrototypeOf(e, u.prototype), e;
      }
      function u(t, e, n) {
        if ("number" === typeof t) {
          if ("string" === typeof e)
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return l(t);
        }
        return c(t, e, n);
      }
      function c(t, e, n) {
        if ("string" === typeof t)
          return (function (t, e) {
            ("string" === typeof e && "" !== e) || (e = "utf8");
            if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
            var n = 0 | g(t, e),
              r = a(n),
              o = r.write(t, e);
            o !== n && (r = r.slice(0, o));
            return r;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (F(t, Uint8Array)) {
              var e = new Uint8Array(t);
              return d(e.buffer, e.byteOffset, e.byteLength);
            }
            return f(t);
          })(t);
        if (null == t)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer))) return d(t, e, n);
        if (
          "undefined" !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return d(t, e, n);
        if ("number" === typeof t)
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        var r = t.valueOf && t.valueOf();
        if (null != r && r !== t) return u.from(r, e, n);
        var o = (function (t) {
          if (u.isBuffer(t)) {
            var e = 0 | p(t.length),
              n = a(e);
            return 0 === n.length || t.copy(n, 0, 0, e), n;
          }
          if (void 0 !== t.length) return "number" !== typeof t.length || J(t.length) ? a(0) : f(t);
          if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data);
        })(t);
        if (o) return o;
        if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive])
          return u.from(t[Symbol.toPrimitive]("string"), e, n);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function h(t) {
        if ("number" !== typeof t) throw new TypeError('"size" argument must be of type number');
        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      }
      function l(t) {
        return h(t), a(t < 0 ? 0 : 0 | p(t));
      }
      function f(t) {
        for (var e = t.length < 0 ? 0 : 0 | p(t.length), n = a(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
        return n;
      }
      function d(t, e, n) {
        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var r;
        return (
          (r =
            void 0 === e && void 0 === n
              ? new Uint8Array(t)
              : void 0 === n
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, n)),
          Object.setPrototypeOf(r, u.prototype),
          r
        );
      }
      function p(t) {
        if (t >= s)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
        return 0 | t;
      }
      function g(t, e) {
        if (u.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength;
        if ("string" !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t
          );
        var n = t.length,
          r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === n) return 0;
        for (var o = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
              return q(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return j(t).length;
            default:
              if (o) return r ? -1 : q(t).length;
              (e = ("" + e).toLowerCase()), (o = !0);
          }
      }
      function m(t, e, n) {
        var r = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
        if ((n >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return I(this, e, n);
            case "utf8":
            case "utf-8":
              return R(this, e, n);
            case "ascii":
              return C(this, e, n);
            case "latin1":
            case "binary":
              return A(this, e, n);
            case "base64":
              return k(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return O(this, e, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (r = !0);
          }
      }
      function _(t, e, n) {
        var r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function v(t, e, n, r, o) {
        if (0 === t.length) return -1;
        if (
          ("string" === typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          J((n = +n)) && (n = o ? 0 : t.length - 1),
          n < 0 && (n = t.length + n),
          n >= t.length)
        ) {
          if (o) return -1;
          n = t.length - 1;
        } else if (n < 0) {
          if (!o) return -1;
          n = 0;
        }
        if (("string" === typeof e && (e = u.from(e, r)), u.isBuffer(e))) return 0 === e.length ? -1 : y(t, e, n, r, o);
        if ("number" === typeof e)
          return (
            (e &= 255),
            "function" === typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, n)
                : Uint8Array.prototype.lastIndexOf.call(t, e, n)
              : y(t, [e], n, r, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function y(t, e, n, r, o) {
        var i,
          s = 1,
          a = t.length,
          u = e.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (n /= 2);
        }
        function c(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (o) {
          var h = -1;
          for (i = n; i < a; i++)
            if (c(t, i) === c(e, -1 === h ? 0 : i - h)) {
              if ((-1 === h && (h = i), i - h + 1 === u)) return h * s;
            } else -1 !== h && (i -= i - h), (h = -1);
        } else
          for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
            for (var l = !0, f = 0; f < u; f++)
              if (c(t, i + f) !== c(e, f)) {
                l = !1;
                break;
              }
            if (l) return i;
          }
        return -1;
      }
      function w(t, e, n, r) {
        n = Number(n) || 0;
        var o = t.length - n;
        r ? (r = Number(r)) > o && (r = o) : (r = o);
        var i = e.length;
        r > i / 2 && (r = i / 2);
        for (var s = 0; s < r; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);
          if (J(a)) return s;
          t[n + s] = a;
        }
        return s;
      }
      function b(t, e, n, r) {
        return D(q(e, t.length - n), t, n, r);
      }
      function M(t, e, n, r) {
        return D(
          (function (t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
            return e;
          })(e),
          t,
          n,
          r
        );
      }
      function E(t, e, n, r) {
        return D(j(e), t, n, r);
      }
      function x(t, e, n, r) {
        return D(
          (function (t, e) {
            for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
              (r = (n = t.charCodeAt(s)) >> 8), (o = n % 256), i.push(o), i.push(r);
            return i;
          })(e, t.length - n),
          t,
          n,
          r
        );
      }
      function k(t, e, n) {
        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
      }
      function R(t, e, n) {
        n = Math.min(t.length, n);
        for (var r = [], o = e; o < n; ) {
          var i,
            s,
            a,
            u,
            c = t[o],
            h = null,
            l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + l <= n)
            switch (l) {
              case 1:
                c < 128 && (h = c);
                break;
              case 2:
                128 === (192 & (i = t[o + 1])) && (u = ((31 & c) << 6) | (63 & i)) > 127 && (h = u);
                break;
              case 3:
                (i = t[o + 1]),
                  (s = t[o + 2]),
                  128 === (192 & i) &&
                    128 === (192 & s) &&
                    (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) > 2047 &&
                    (u < 55296 || u > 57343) &&
                    (h = u);
                break;
              case 4:
                (i = t[o + 1]),
                  (s = t[o + 2]),
                  (a = t[o + 3]),
                  128 === (192 & i) &&
                    128 === (192 & s) &&
                    128 === (192 & a) &&
                    (u = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (h = u);
            }
          null === h
            ? ((h = 65533), (l = 1))
            : h > 65535 && ((h -= 65536), r.push(((h >>> 10) & 1023) | 55296), (h = 56320 | (1023 & h))),
            r.push(h),
            (o += l);
        }
        return (function (t) {
          var e = t.length;
          if (e <= S) return String.fromCharCode.apply(String, t);
          var n = "",
            r = 0;
          for (; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, (r += S)));
          return n;
        })(r);
      }
      (e.kMaxLength = s),
        (u.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
          } catch (n) {
            return !1;
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          "undefined" === typeof console ||
          "function" !== typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(u.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(u.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.byteOffset;
          },
        }),
        (u.poolSize = 8192),
        (u.from = function (t, e, n) {
          return c(t, e, n);
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function (t, e, n) {
          return (function (t, e, n) {
            return h(t), t <= 0 ? a(t) : void 0 !== e ? ("string" === typeof n ? a(t).fill(e, n) : a(t).fill(e)) : a(t);
          })(t, e, n);
        }),
        (u.allocUnsafe = function (t) {
          return l(t);
        }),
        (u.allocUnsafeSlow = function (t) {
          return l(t);
        }),
        (u.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype;
        }),
        (u.compare = function (t, e) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (t === e) return 0;
          for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
            if (t[o] !== e[o]) {
              (n = t[o]), (r = e[o]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (u.isEncoding = function (t) {
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
        (u.concat = function (t, e) {
          if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          var n;
          if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var r = u.allocUnsafe(e),
            o = 0;
          for (n = 0; n < t.length; ++n) {
            var i = t[n];
            if (F(i, Uint8Array))
              o + i.length > r.length ? u.from(i).copy(r, o) : Uint8Array.prototype.set.call(r, i, o);
            else {
              if (!u.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
              i.copy(r, o);
            }
            o += i.length;
          }
          return r;
        }),
        (u.byteLength = g),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) _(this, e, e + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4) _(this, e, e + 3), _(this, e + 1, e + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            _(this, e, e + 7), _(this, e + 1, e + 6), _(this, e + 2, e + 5), _(this, e + 3, e + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          var t = this.length;
          return 0 === t ? "" : 0 === arguments.length ? R(this, 0, t) : m.apply(this, arguments);
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }),
        (u.prototype.inspect = function () {
          var t = "",
            n = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, n)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > n && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        i && (u.prototype[i] = u.prototype.inspect),
        (u.prototype.compare = function (t, e, n, r, o) {
          if ((F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)))
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = t ? t.length : 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = this.length),
            e < 0 || n > t.length || r < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= o && e >= n) return 0;
          if (r >= o) return -1;
          if (e >= n) return 1;
          if (this === t) return 0;
          for (
            var i = (o >>>= 0) - (r >>>= 0),
              s = (n >>>= 0) - (e >>>= 0),
              a = Math.min(i, s),
              c = this.slice(r, o),
              h = t.slice(e, n),
              l = 0;
            l < a;
            ++l
          )
            if (c[l] !== h[l]) {
              (i = c[l]), (s = h[l]);
              break;
            }
          return i < s ? -1 : s < i ? 1 : 0;
        }),
        (u.prototype.includes = function (t, e, n) {
          return -1 !== this.indexOf(t, e, n);
        }),
        (u.prototype.indexOf = function (t, e, n) {
          return v(this, t, e, n, !0);
        }),
        (u.prototype.lastIndexOf = function (t, e, n) {
          return v(this, t, e, n, !1);
        }),
        (u.prototype.write = function (t, e, n, r) {
          if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
          else if (void 0 === n && "string" === typeof e) (r = e), (n = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            (e >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
          }
          var o = this.length - e;
          if (((void 0 === n || n > o) && (n = o), (t.length > 0 && (n < 0 || e < 0)) || e > this.length))
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var i = !1; ; )
            switch (r) {
              case "hex":
                return w(this, t, e, n);
              case "utf8":
              case "utf-8":
                return b(this, t, e, n);
              case "ascii":
              case "latin1":
              case "binary":
                return M(this, t, e, n);
              case "base64":
                return E(this, t, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return x(this, t, e, n);
              default:
                if (i) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (i = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        });
      var S = 4096;
      function C(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
        return r;
      }
      function A(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
        return r;
      }
      function I(t, e, n) {
        var r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
        for (var o = "", i = e; i < n; ++i) o += z[t[i]];
        return o;
      }
      function O(t, e, n) {
        for (var r = t.slice(e, n), o = "", i = 0; i < r.length - 1; i += 2)
          o += String.fromCharCode(r[i] + 256 * r[i + 1]);
        return o;
      }
      function T(t, e, n) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
      }
      function B(t, e, n, r, o, i) {
        if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range");
      }
      function P(t, e, n, r, o, i) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function L(t, e, n, r, i) {
        return (e = +e), (n >>>= 0), i || P(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4;
      }
      function U(t, e, n, r, i) {
        return (e = +e), (n >>>= 0), i || P(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8;
      }
      (u.prototype.slice = function (t, e) {
        var n = this.length;
        (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          e < t && (e = t);
        var r = this.subarray(t, e);
        return Object.setPrototypeOf(r, u.prototype), r;
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE =
          function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || T(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
            return r;
          }),
        (u.prototype.readUintBE = u.prototype.readUIntBE =
          function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || T(t, e, this.length);
            for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); ) r += this[t + --e] * o;
            return r;
          }),
        (u.prototype.readUint8 = u.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || T(t, 1, this.length), this[t];
          }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE =
          function (t, e) {
            return (t >>>= 0), e || T(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE =
          function (t, e) {
            return (t >>>= 0), e || T(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || T(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
            );
          }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || T(t, 4, this.length),
              16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (u.prototype.readIntLE = function (t, e, n) {
          (t >>>= 0), (e >>>= 0), n || T(t, e, this.length);
          for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
          return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
        }),
        (u.prototype.readIntBE = function (t, e, n) {
          (t >>>= 0), (e >>>= 0), n || T(t, e, this.length);
          for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); ) i += this[t + --r] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
        }),
        (u.prototype.readInt8 = function (t, e) {
          return (t >>>= 0), e || T(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
        }),
        (u.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || T(t, 2, this.length);
          var n = this[t] | (this[t + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || T(t, 2, this.length);
          var n = this[t + 1] | (this[t] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || T(t, 4, this.length),
            this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || T(t, 4, this.length),
            (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
          );
        }),
        (u.prototype.readFloatLE = function (t, e) {
          return (t >>>= 0), e || T(t, 4, this.length), o.read(this, t, !0, 23, 4);
        }),
        (u.prototype.readFloatBE = function (t, e) {
          return (t >>>= 0), e || T(t, 4, this.length), o.read(this, t, !1, 23, 4);
        }),
        (u.prototype.readDoubleLE = function (t, e) {
          return (t >>>= 0), e || T(t, 8, this.length), o.read(this, t, !0, 52, 8);
        }),
        (u.prototype.readDoubleBE = function (t, e) {
          return (t >>>= 0), e || T(t, 8, this.length), o.read(this, t, !1, 52, 8);
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE =
          function (t, e, n, r) {
            ((t = +t), (e >>>= 0), (n >>>= 0), r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < n && (o *= 256); ) this[e + i] = (t / o) & 255;
            return e + n;
          }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE =
          function (t, e, n, r) {
            ((t = +t), (e >>>= 0), (n >>>= 0), r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); ) this[e + o] = (t / i) & 255;
            return e + n;
          }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 =
          function (t, e, n) {
            return (t = +t), (e >>>= 0), n || B(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
          }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
          function (t, e, n) {
            return (
              (t = +t), (e >>>= 0), n || B(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2
            );
          }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
          function (t, e, n) {
            return (
              (t = +t), (e >>>= 0), n || B(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2
            );
          }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || B(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || B(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeIntLE = function (t, e, n, r) {
          if (((t = +t), (e >>>= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            B(this, t, e, n, o - 1, -o);
          }
          var i = 0,
            s = 1,
            a = 0;
          for (this[e] = 255 & t; ++i < n && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), (this[e + i] = (((t / s) >> 0) - a) & 255);
          return e + n;
        }),
        (u.prototype.writeIntBE = function (t, e, n, r) {
          if (((t = +t), (e >>>= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            B(this, t, e, n, o - 1, -o);
          }
          var i = n - 1,
            s = 1,
            a = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), (this[e + i] = (((t / s) >> 0) - a) & 255);
          return e + n;
        }),
        (u.prototype.writeInt8 = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (u.prototype.writeInt16LE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (u.prototype.writeInt16BE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (u.prototype.writeInt32LE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (u.prototype.writeInt32BE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (u.prototype.writeFloatLE = function (t, e, n) {
          return L(this, t, e, !0, n);
        }),
        (u.prototype.writeFloatBE = function (t, e, n) {
          return L(this, t, e, !1, n);
        }),
        (u.prototype.writeDoubleLE = function (t, e, n) {
          return U(this, t, e, !0, n);
        }),
        (u.prototype.writeDoubleBE = function (t, e, n) {
          return U(this, t, e, !1, n);
        }),
        (u.prototype.copy = function (t, e, n, r) {
          if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
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
          if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
          var o = r - n;
          return (
            this === t && "function" === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, n, r)
              : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
            o
          );
        }),
        (u.prototype.fill = function (t, e, n, r) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((r = e), (e = 0), (n = this.length))
                : "string" === typeof n && ((r = n), (n = this.length)),
              void 0 !== r && "string" !== typeof r)
            )
              throw new TypeError("encoding must be a string");
            if ("string" === typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
            if (1 === t.length) {
              var o = t.charCodeAt(0);
              (("utf8" === r && o < 128) || "latin1" === r) && (t = o);
            }
          } else "number" === typeof t ? (t &= 255) : "boolean" === typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
          if (n <= e) return this;
          var i;
          if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" === typeof t))
            for (i = e; i < n; ++i) this[i] = t;
          else {
            var s = u.isBuffer(t) ? t : u.from(t, r),
              a = s.length;
            if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (i = 0; i < n - e; ++i) this[i + e] = s[i % a];
          }
          return this;
        });
      var N = /[^+/0-9A-Za-z-_]/g;
      function q(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
          if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
          }
        }
        return i;
      }
      function j(t) {
        return r.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(N, "")).length < 2) return "";
            for (; t.length % 4 !== 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function D(t, e, n, r) {
        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
        return o;
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name)
        );
      }
      function J(t) {
        return t !== t;
      }
      var z = (function () {
        for (var t = "0123456789abcdef", e = new Array(256), n = 0; n < 16; ++n)
          for (var r = 16 * n, o = 0; o < 16; ++o) e[r + o] = t[n] + t[o];
        return e;
      })();
    },
    640: function (t, e, n) {
      "use strict";
      var r = n(1742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      t.exports = function (t, e) {
        var n,
          i,
          s,
          a,
          u,
          c,
          h = !1;
        e || (e = {}), (n = e.debug || !1);
        try {
          if (
            ((s = r()),
            (a = document.createRange()),
            (u = document.getSelection()),
            ((c = document.createElement("span")).textContent = t),
            (c.style.all = "unset"),
            (c.style.position = "fixed"),
            (c.style.top = 0),
            (c.style.clip = "rect(0, 0, 0, 0)"),
            (c.style.whiteSpace = "pre"),
            (c.style.webkitUserSelect = "text"),
            (c.style.MozUserSelect = "text"),
            (c.style.msUserSelect = "text"),
            (c.style.userSelect = "text"),
            c.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), e.format))
                if ((r.preventDefault(), "undefined" === typeof r.clipboardData)) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = o[e.format] || o.default;
                  window.clipboardData.setData(i, t);
                } else r.clipboardData.clearData(), r.clipboardData.setData(e.format, t);
              e.onCopy && (r.preventDefault(), e.onCopy(r.clipboardData));
            }),
            document.body.appendChild(c),
            a.selectNodeContents(c),
            u.addRange(a),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          h = !0;
        } catch (l) {
          n && console.error("unable to copy using execCommand: ", l), n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), (h = !0);
          } catch (l) {
            n && console.error("unable to copy using clipboardData: ", l),
              n && console.error("falling back to prompt"),
              (i = (function (t) {
                var e = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                return t.replace(/#{\s*key\s*}/g, e);
              })("message" in e ? e.message : "Copy to clipboard: #{key}, Enter")),
              window.prompt(i, t);
          }
        } finally {
          u && ("function" == typeof u.removeRange ? u.removeRange(a) : u.removeAllRanges()),
            c && document.body.removeChild(c),
            s();
        }
        return h;
      };
    },
    4020: function (t) {
      "use strict";
      var e = "%[a-f0-9]{2}",
        n = new RegExp(e, "gi"),
        r = new RegExp("(" + e + ")+", "gi");
      function o(t, e) {
        try {
          return decodeURIComponent(t.join(""));
        } catch (i) {}
        if (1 === t.length) return t;
        e = e || 1;
        var n = t.slice(0, e),
          r = t.slice(e);
        return Array.prototype.concat.call([], o(n), o(r));
      }
      function i(t) {
        try {
          return decodeURIComponent(t);
        } catch (i) {
          for (var e = t.match(n), r = 1; r < e.length; r++) e = (t = o(e, r).join("")).match(n);
          return t;
        }
      }
      t.exports = function (t) {
        if ("string" !== typeof t)
          throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
        try {
          return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
        } catch (e) {
          return (function (t) {
            for (var n = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" }, o = r.exec(t); o; ) {
              try {
                n[o[0]] = decodeURIComponent(o[0]);
              } catch (e) {
                var s = i(o[0]);
                s !== o[0] && (n[o[0]] = s);
              }
              o = r.exec(t);
            }
            n["%C2"] = "\ufffd";
            for (var a = Object.keys(n), u = 0; u < a.length; u++) {
              var c = a[u];
              t = t.replace(new RegExp(c, "g"), n[c]);
            }
            return t;
          })(t);
        }
      };
    },
    5987: function (t) {
      "use strict";
      var e = {
        single_source_shortest_paths: function (t, n, r) {
          var o = {},
            i = {};
          i[n] = 0;
          var s,
            a,
            u,
            c,
            h,
            l,
            f,
            d = e.PriorityQueue.make();
          for (d.push(n, 0); !d.empty(); )
            for (u in ((a = (s = d.pop()).value), (c = s.cost), (h = t[a] || {})))
              h.hasOwnProperty(u) &&
                ((l = c + h[u]),
                (f = i[u]),
                ("undefined" === typeof i[u] || f > l) && ((i[u] = l), d.push(u, l), (o[u] = a)));
          if ("undefined" !== typeof r && "undefined" === typeof i[r]) {
            var p = ["Could not find a path from ", n, " to ", r, "."].join("");
            throw new Error(p);
          }
          return o;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var n = [], r = e; r; ) n.push(r), t[r], (r = t[r]);
          return n.reverse(), n;
        },
        find_path: function (t, n, r) {
          var o = e.single_source_shortest_paths(t, n, r);
          return e.extract_shortest_path_from_predecessor_list(o, r);
        },
        PriorityQueue: {
          make: function (t) {
            var n,
              r = e.PriorityQueue,
              o = {};
            for (n in ((t = t || {}), r)) r.hasOwnProperty(n) && (o[n] = r[n]);
            return (o.queue = []), (o.sorter = t.sorter || r.default_sorter), o;
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
      t.exports = e;
    },
    645: function (t, e) {
      (e.read = function (t, e, n, r, o) {
        var i,
          s,
          a = 8 * o - r - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          h = -7,
          l = n ? o - 1 : 0,
          f = n ? -1 : 1,
          d = t[e + l];
        for (l += f, i = d & ((1 << -h) - 1), d >>= -h, h += a; h > 0; i = 256 * i + t[e + l], l += f, h -= 8);
        for (s = i & ((1 << -h) - 1), i >>= -h, h += r; h > 0; s = 256 * s + t[e + l], l += f, h -= 8);
        if (0 === i) i = 1 - c;
        else {
          if (i === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, r)), (i -= c);
        }
        return (d ? -1 : 1) * s * Math.pow(2, i - r);
      }),
        (e.write = function (t, e, n, r, o, i) {
          var s,
            a,
            u,
            c = 8 * i - o - 1,
            h = (1 << c) - 1,
            l = h >> 1,
            f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : i - 1,
            p = r ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = h))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (e += s + l >= 1 ? f / u : f * Math.pow(2, 1 - l)) * u >= 2 && (s++, (u /= 2)),
                  s + l >= h
                    ? ((a = 0), (s = h))
                    : s + l >= 1
                    ? ((a = (e * u - 1) * Math.pow(2, o)), (s += l))
                    : ((a = e * Math.pow(2, l - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            t[n + d] = 255 & a, d += p, a /= 256, o -= 8
          );
          for (s = (s << o) | a, c += o; c > 0; t[n + d] = 255 & s, d += p, s /= 256, c -= 8);
          t[n + d - p] |= 128 * g;
        });
    },
    4501: function (t) {
      (t.exports = r), (r.strict = o), (r.loose = i);
      var e = Object.prototype.toString,
        n = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
        };
      function r(t) {
        return o(t) || i(t);
      }
      function o(t) {
        return (
          t instanceof Int8Array ||
          t instanceof Int16Array ||
          t instanceof Int32Array ||
          t instanceof Uint8Array ||
          t instanceof Uint8ClampedArray ||
          t instanceof Uint16Array ||
          t instanceof Uint32Array ||
          t instanceof Float32Array ||
          t instanceof Float64Array
        );
      }
      function i(t) {
        return n[e.call(t)];
      }
    },
    7423: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Children: function () {
            return vt;
          },
          Component: function () {
            return y;
          },
          Fragment: function () {
            return v;
          },
          PureComponent: function () {
            return dt;
          },
          Suspense: function () {
            return bt;
          },
          SuspenseList: function () {
            return xt;
          },
          cloneElement: function () {
            return Dt;
          },
          createContext: function () {
            return q;
          },
          createElement: function () {
            return g;
          },
          createFactory: function () {
            return qt;
          },
          createPortal: function () {
            return Ct;
          },
          createRef: function () {
            return _;
          },
          default: function () {
            return Ht;
          },
          findDOMNode: function () {
            return Jt;
          },
          forwardRef: function () {
            return mt;
          },
          hydrate: function () {
            return Tt;
          },
          isValidElement: function () {
            return jt;
          },
          lazy: function () {
            return Et;
          },
          memo: function () {
            return pt;
          },
          render: function () {
            return Ot;
          },
          unmountComponentAtNode: function () {
            return Ft;
          },
          unstable_batchedUpdates: function () {
            return zt;
          },
          useCallback: function () {
            return nt;
          },
          useContext: function () {
            return rt;
          },
          useDebugValue: function () {
            return ot;
          },
          useEffect: function () {
            return Z;
          },
          useErrorBoundary: function () {
            return it;
          },
          useImperativeHandle: function () {
            return tt;
          },
          useLayoutEffect: function () {
            return X;
          },
          useMemo: function () {
            return et;
          },
          useReducer: function () {
            return Q;
          },
          useRef: function () {
            return G;
          },
          useState: function () {
            return V;
          },
          version: function () {
            return Nt;
          },
        });
      var r,
        o,
        i,
        s,
        a,
        u,
        c,
        h = {},
        l = [],
        f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function d(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function p(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function g(t, e, n) {
        var r,
          o = arguments,
          i = {};
        for (r in e) "key" !== r && "ref" !== r && (i[r] = e[r]);
        if (arguments.length > 3) for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
        if ((null != n && (i.children = n), "function" == typeof t && null != t.defaultProps))
          for (r in t.defaultProps) void 0 === i[r] && (i[r] = t.defaultProps[r]);
        return m(t, i, e && e.key, e && e.ref, null);
      }
      function m(t, e, n, o, i) {
        var s = {
          type: t,
          props: e,
          key: n,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: i,
        };
        return null == i && (s.__v = s), r.vnode && r.vnode(s), s;
      }
      function _() {
        return {};
      }
      function v(t) {
        return t.children;
      }
      function y(t, e) {
        (this.props = t), (this.context = e);
      }
      function w(t, e) {
        if (null == e) return t.__ ? w(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++) if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? w(t) : null;
      }
      function b(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return b(t);
        }
      }
      function M(t) {
        ((!t.__d && (t.__d = !0) && o.push(t) && !i++) || a !== r.debounceRendering) &&
          ((a = r.debounceRendering) || s)(E);
      }
      function E() {
        for (var t; (i = o.length); )
          (t = o.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (o = []),
            t.some(function (t) {
              var e, n, r, o, i, s, a;
              t.__d &&
                ((s = (i = (e = t).__v).__e),
                (a = e.__P) &&
                  ((n = []),
                  ((r = d({}, i)).__v = r),
                  (o = A(a, i, r, e.__n, void 0 !== a.ownerSVGElement, null, n, null == s ? w(i) : s)),
                  I(n, i),
                  o != s && b(i)));
            });
      }
      function x(t, e, n, r, o, i, s, a, u) {
        var c,
          f,
          d,
          g,
          m,
          _,
          v,
          y = (n && n.__k) || l,
          b = y.length;
        if (
          (a == h && (a = null != i ? i[0] : b ? w(n, 0) : null),
          (c = 0),
          (e.__k = k(e.__k, function (n) {
            if (null != n) {
              if (((n.__ = e), (n.__b = e.__b + 1), null === (d = y[c]) || (d && n.key == d.key && n.type === d.type)))
                y[c] = void 0;
              else
                for (f = 0; f < b; f++) {
                  if ((d = y[f]) && n.key == d.key && n.type === d.type) {
                    y[f] = void 0;
                    break;
                  }
                  d = null;
                }
              if (
                ((g = A(t, n, (d = d || h), r, o, i, s, a, u)),
                (f = n.ref) && d.ref != f && (v || (v = []), d.ref && v.push(d.ref, null, n), v.push(f, n.__c || g, n)),
                null != g)
              ) {
                var l;
                if ((null == _ && (_ = g), void 0 !== n.__d)) (l = n.__d), (n.__d = void 0);
                else if (i == d || g != a || null == g.parentNode) {
                  t: if (null == a || a.parentNode !== t) t.appendChild(g), (l = null);
                  else {
                    for (m = a, f = 0; (m = m.nextSibling) && f < b; f += 2) if (m == g) break t;
                    t.insertBefore(g, a), (l = a);
                  }
                  "option" == e.type && (t.value = "");
                }
                (a = void 0 !== l ? l : g.nextSibling), "function" == typeof e.type && (e.__d = a);
              } else a && d.__e == a && a.parentNode != t && (a = w(d));
            }
            return c++, n;
          })),
          (e.__e = _),
          null != i && "function" != typeof e.type)
        )
          for (c = i.length; c--; ) null != i[c] && p(i[c]);
        for (c = b; c--; ) null != y[c] && B(y[c], y[c]);
        if (v) for (c = 0; c < v.length; c++) T(v[c], v[++c], v[++c]);
      }
      function k(t, e, n) {
        if ((null == n && (n = []), null == t || "boolean" == typeof t)) e && n.push(e(null));
        else if (Array.isArray(t)) for (var r = 0; r < t.length; r++) k(t[r], e, n);
        else
          n.push(
            e
              ? e(
                  "string" == typeof t || "number" == typeof t
                    ? m(null, t, null, null, t)
                    : null != t.__e || null != t.__c
                    ? m(t.type, t.props, t.key, null, t.__v)
                    : t
                )
              : t
          );
        return n;
      }
      function R(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, n)
          : (t[e] = "number" == typeof n && !1 === f.test(e) ? n + "px" : null == n ? "" : n);
      }
      function S(t, e, n, r, o) {
        var i, s, a, u, c;
        if ((o ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e))
          if (((i = t.style), "string" == typeof n)) i.cssText = n;
          else {
            if (("string" == typeof r && ((i.cssText = ""), (r = null)), r)) for (u in r) (n && u in n) || R(i, u, "");
            if (n) for (c in n) (r && n[c] === r[c]) || R(i, c, n[c]);
          }
        else
          "o" === e[0] && "n" === e[1]
            ? ((s = e !== (e = e.replace(/Capture$/, ""))),
              (a = e.toLowerCase()),
              (e = (a in t ? a : e).slice(2)),
              n ? (r || t.addEventListener(e, C, s), ((t.l || (t.l = {}))[e] = n)) : t.removeEventListener(e, C, s))
            : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !o && e in t
            ? (t[e] = null == n ? "" : n)
            : "function" != typeof n &&
              "dangerouslySetInnerHTML" !== e &&
              (e !== (e = e.replace(/^xlink:?/, ""))
                ? null == n || !1 === n
                  ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase())
                  : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n)
                : null == n || (!1 === n && !/^ar/.test(e))
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
      }
      function C(t) {
        this.l[t.type](r.event ? r.event(t) : t);
      }
      function A(t, e, n, o, i, s, a, u, c) {
        var h,
          l,
          f,
          p,
          g,
          m,
          _,
          w,
          b,
          M,
          E = e.type;
        if (void 0 !== e.constructor) return null;
        (h = r.__b) && h(e);
        try {
          t: if ("function" == typeof E) {
            if (
              ((w = e.props),
              (b = (h = E.contextType) && o[h.__c]),
              (M = h ? (b ? b.props.value : h.__) : o),
              n.__c
                ? (_ = (l = e.__c = n.__c).__ = l.__E)
                : ("prototype" in E && E.prototype.render
                    ? (e.__c = l = new E(w, M))
                    : ((e.__c = l = new y(w, M)), (l.constructor = E), (l.render = P)),
                  b && b.sub(l),
                  (l.props = w),
                  l.state || (l.state = {}),
                  (l.context = M),
                  (l.__n = o),
                  (f = l.__d = !0),
                  (l.__h = [])),
              null == l.__s && (l.__s = l.state),
              null != E.getDerivedStateFromProps &&
                (l.__s == l.state && (l.__s = d({}, l.__s)), d(l.__s, E.getDerivedStateFromProps(w, l.__s))),
              (p = l.props),
              (g = l.state),
              f)
            )
              null == E.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(),
                null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
              if (
                (null == E.getDerivedStateFromProps &&
                  w !== p &&
                  null != l.componentWillReceiveProps &&
                  l.componentWillReceiveProps(w, M),
                (!l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(w, l.__s, M)) ||
                  (e.__v === n.__v && !l.__))
              ) {
                for (
                  l.props = w,
                    l.state = l.__s,
                    e.__v !== n.__v && (l.__d = !1),
                    l.__v = e,
                    e.__e = n.__e,
                    e.__k = n.__k,
                    l.__h.length && a.push(l),
                    h = 0;
                  h < e.__k.length;
                  h++
                )
                  e.__k[h] && (e.__k[h].__ = e);
                break t;
              }
              null != l.componentWillUpdate && l.componentWillUpdate(w, l.__s, M),
                null != l.componentDidUpdate &&
                  l.__h.push(function () {
                    l.componentDidUpdate(p, g, m);
                  });
            }
            (l.context = M),
              (l.props = w),
              (l.state = l.__s),
              (h = r.__r) && h(e),
              (l.__d = !1),
              (l.__v = e),
              (l.__P = t),
              (h = l.render(l.props, l.state, l.context)),
              (e.__k = null != h && h.type == v && null == h.key ? h.props.children : Array.isArray(h) ? h : [h]),
              null != l.getChildContext && (o = d(d({}, o), l.getChildContext())),
              f || null == l.getSnapshotBeforeUpdate || (m = l.getSnapshotBeforeUpdate(p, g)),
              x(t, e, n, o, i, s, a, u, c),
              (l.base = e.__e),
              l.__h.length && a.push(l),
              _ && (l.__E = l.__ = null),
              (l.__e = !1);
          } else
            null == s && e.__v === n.__v ? ((e.__k = n.__k), (e.__e = n.__e)) : (e.__e = O(n.__e, e, n, o, i, s, a, c));
          (h = r.diffed) && h(e);
        } catch (t) {
          (e.__v = null), r.__e(t, e, n);
        }
        return e.__e;
      }
      function I(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function O(t, e, n, r, o, i, s, a) {
        var u,
          c,
          f,
          d,
          p,
          g = n.props,
          m = e.props;
        if (((o = "svg" === e.type || o), null != i))
          for (u = 0; u < i.length; u++)
            if (null != (c = i[u]) && ((null === e.type ? 3 === c.nodeType : c.localName === e.type) || t == c)) {
              (t = c), (i[u] = null);
              break;
            }
        if (null == t) {
          if (null === e.type) return document.createTextNode(m);
          (t = o
            ? document.createElementNS("http://www.w3.org/2000/svg", e.type)
            : document.createElement(e.type, m.is && { is: m.is })),
            (i = null),
            (a = !1);
        }
        if (null === e.type) g !== m && t.data != m && (t.data = m);
        else {
          if (
            (null != i && (i = l.slice.call(t.childNodes)),
            (f = (g = n.props || h).dangerouslySetInnerHTML),
            (d = m.dangerouslySetInnerHTML),
            !a)
          ) {
            if (g === h)
              for (g = {}, p = 0; p < t.attributes.length; p++) g[t.attributes[p].name] = t.attributes[p].value;
            (d || f) && ((d && f && d.__html == f.__html) || (t.innerHTML = (d && d.__html) || ""));
          }
          (function (t, e, n, r, o) {
            var i;
            for (i in n) "children" === i || "key" === i || i in e || S(t, i, null, n[i], r);
            for (i in e)
              (o && "function" != typeof e[i]) ||
                "children" === i ||
                "key" === i ||
                "value" === i ||
                "checked" === i ||
                n[i] === e[i] ||
                S(t, i, e[i], n[i], r);
          })(t, m, g, o, a),
            d ? (e.__k = []) : ((e.__k = e.props.children), x(t, e, n, r, "foreignObject" !== e.type && o, i, s, h, a)),
            a ||
              ("value" in m && void 0 !== (u = m.value) && u !== t.value && S(t, "value", u, g.value, !1),
              "checked" in m && void 0 !== (u = m.checked) && u !== t.checked && S(t, "checked", u, g.checked, !1));
        }
        return t;
      }
      function T(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function B(t, e, n) {
        var o, i, s;
        if (
          (r.unmount && r.unmount(t),
          (o = t.ref) && ((o.current && o.current !== t.__e) || T(o, null, e)),
          n || "function" == typeof t.type || (n = null != (i = t.__e)),
          (t.__e = t.__d = void 0),
          null != (o = t.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          o.base = o.__P = null;
        }
        if ((o = t.__k)) for (s = 0; s < o.length; s++) o[s] && B(o[s], e, n);
        null != i && p(i);
      }
      function P(t, e, n) {
        return this.constructor(t, n);
      }
      function L(t, e, n) {
        var o, i, s;
        r.__ && r.__(t, e),
          (i = (o = n === u) ? null : (n && n.__k) || e.__k),
          (t = g(v, null, [t])),
          (s = []),
          A(
            e,
            ((o ? e : n || e).__k = t),
            i || h,
            h,
            void 0 !== e.ownerSVGElement,
            n && !o ? [n] : i ? null : l.slice.call(e.childNodes),
            s,
            n || h,
            o
          ),
          I(s, t);
      }
      function U(t, e) {
        L(t, e, u);
      }
      function N(t, e) {
        var n, r;
        for (r in ((e = d(d({}, t.props), e)),
        arguments.length > 2 && (e.children = l.slice.call(arguments, 2)),
        (n = {}),
        e))
          "key" !== r && "ref" !== r && (n[r] = e[r]);
        return m(t.type, n, e.key || t.key, e.ref || t.ref, null);
      }
      function q(t) {
        var e = {},
          n = {
            __c: "__cC" + c++,
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var r,
                o = this;
              return (
                this.getChildContext ||
                  ((r = []),
                  (this.getChildContext = function () {
                    return (e[n.__c] = o), e;
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    o.props.value !== t.value &&
                      r.some(function (e) {
                        (e.context = t.value), M(e);
                      });
                  }),
                  (this.sub = function (t) {
                    r.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function () {
                      r.splice(r.indexOf(t), 1), e && e.call(t);
                    };
                  })),
                t.children
              );
            },
          };
        return (n.Consumer.contextType = n), (n.Provider.__ = n), n;
      }
      (r = {
        __e: function (t, e) {
          for (var n, r; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  (n.constructor &&
                    null != n.constructor.getDerivedStateFromError &&
                    ((r = !0), n.setState(n.constructor.getDerivedStateFromError(t))),
                  null != n.componentDidCatch && ((r = !0), n.componentDidCatch(t)),
                  r)
                )
                  return M((n.__E = n));
              } catch (e) {
                t = e;
              }
          throw t;
        },
      }),
        (y.prototype.setState = function (t, e) {
          var n;
          (n = this.__s !== this.state ? this.__s : (this.__s = d({}, this.state))),
            "function" == typeof t && (t = t(n, this.props)),
            t && d(n, t),
            null != t && this.__v && (e && this.__h.push(e), M(this));
        }),
        (y.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), M(this));
        }),
        (y.prototype.render = v),
        (o = []),
        (i = 0),
        (s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
        (u = h),
        (c = 0);
      var j,
        D,
        F,
        J = 0,
        z = [],
        H = r.__r,
        W = r.diffed,
        $ = r.__c,
        K = r.unmount;
      function Y(t, e) {
        r.__h && r.__h(D, t, J || e), (J = 0);
        var n = D.__H || (D.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({}), n.__[t];
      }
      function V(t) {
        return (J = 1), Q(ht, t);
      }
      function Q(t, e, n) {
        var r = Y(j++, 2);
        return (
          r.__c ||
            ((r.__c = D),
            (r.__ = [
              n ? n(e) : ht(void 0, e),
              function (e) {
                var n = t(r.__[0], e);
                r.__[0] !== n && ((r.__[0] = n), r.__c.setState({}));
              },
            ])),
          r.__
        );
      }
      function Z(t, e) {
        var n = Y(j++, 3);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), D.__H.__h.push(n));
      }
      function X(t, e) {
        var n = Y(j++, 4);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), D.__h.push(n));
      }
      function G(t) {
        return (
          (J = 5),
          et(function () {
            return { current: t };
          }, [])
        );
      }
      function tt(t, e, n) {
        (J = 6),
          X(
            function () {
              "function" == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t)
          );
      }
      function et(t, e) {
        var n = Y(j++, 7);
        return ct(n.__H, e) ? ((n.__H = e), (n.__h = t), (n.__ = t())) : n.__;
      }
      function nt(t, e) {
        return (
          (J = 8),
          et(function () {
            return t;
          }, e)
        );
      }
      function rt(t) {
        var e = D.context[t.__c],
          n = Y(j++, 9);
        return (n.__c = t), e ? (null == n.__ && ((n.__ = !0), e.sub(D)), e.props.value) : t.__;
      }
      function ot(t, e) {
        r.useDebugValue && r.useDebugValue(e ? e(t) : t);
      }
      function it(t) {
        var e = Y(j++, 10),
          n = V();
        return (
          (e.__ = t),
          D.componentDidCatch ||
            (D.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function st() {
        z.some(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(at), t.__H.__h.forEach(ut), (t.__H.__h = []);
            } catch (o) {
              return (t.__H.__h = []), r.__e(o, t.__v), !0;
            }
        }),
          (z = []);
      }
      function at(t) {
        t.t && t.t();
      }
      function ut(t) {
        var e = t.__();
        "function" == typeof e && (t.t = e);
      }
      function ct(t, e) {
        return (
          !t ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function ht(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
      function lt(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function ft(t, e) {
        for (var n in t) if ("__source" !== n && !(n in e)) return !0;
        for (var r in e) if ("__source" !== r && t[r] !== e[r]) return !0;
        return !1;
      }
      (r.__r = function (t) {
        H && H(t), (j = 0), (D = t.__c).__H && (D.__H.__h.forEach(at), D.__H.__h.forEach(ut), (D.__H.__h = []));
      }),
        (r.diffed = function (t) {
          W && W(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            n &&
              n.__h.length &&
              ((1 !== z.push(e) && F === r.requestAnimationFrame) ||
                (
                  (F = r.requestAnimationFrame) ||
                  function (t) {
                    var e,
                      n = function () {
                        clearTimeout(r), cancelAnimationFrame(e), setTimeout(t);
                      },
                      r = setTimeout(n, 100);
                    "undefined" != typeof window && (e = requestAnimationFrame(n));
                  }
                )(st));
          }
        }),
        (r.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(at),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || ut(t);
                }));
            } catch (a) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                r.__e(a, t.__v);
            }
          }),
            $ && $(t, e);
        }),
        (r.unmount = function (t) {
          K && K(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            if (n)
              try {
                n.__.forEach(function (t) {
                  return t.t && t.t();
                });
              } catch (t) {
                r.__e(t, e.__v);
              }
          }
        });
      var dt = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return ((n = t.call(this, e) || this).isPureReactComponent = !0), n;
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (r.prototype.shouldComponentUpdate = function (t, e) {
            return ft(this.props, t) || ft(this.state, e);
          }),
          r
        );
      })(y);
      function pt(t, e) {
        function n(t) {
          var n = this.props.ref,
            r = n == t.ref;
          return !r && n && (n.call ? n(null) : (n.current = null)), e ? !e(this.props, t) || !r : ft(this.props, t);
        }
        function r(e) {
          return (this.shouldComponentUpdate = n), g(t, lt({}, e));
        }
        return (
          (r.prototype.isReactComponent = !0),
          (r.displayName = "Memo(" + (t.displayName || t.name) + ")"),
          (r.t = !0),
          r
        );
      }
      var gt = r.__b;
      function mt(t) {
        function e(e) {
          var n = lt({}, e);
          return delete n.ref, t(n, e.ref);
        }
        return (
          (e.prototype.isReactComponent = e.t = !0),
          (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
          e
        );
      }
      r.__b = function (t) {
        t.type && t.type.t && t.ref && ((t.props.ref = t.ref), (t.ref = null)), gt && gt(t);
      };
      var _t = function (t, e) {
          return t
            ? k(t).reduce(function (t, n, r) {
                return t.concat(e(n, r));
              }, [])
            : null;
        },
        vt = {
          map: _t,
          forEach: _t,
          count: function (t) {
            return t ? k(t).length : 0;
          },
          only: function (t) {
            if (1 !== (t = k(t)).length) throw new Error("Children.only() expects only one child.");
            return t[0];
          },
          toArray: k,
        },
        yt = r.__e;
      function wt(t) {
        return t && (((t = lt({}, t)).__c = null), (t.__k = t.__k && t.__k.map(wt))), t;
      }
      function bt() {
        (this.__u = 0), (this.o = null), (this.__b = null);
      }
      function Mt(t) {
        var e = t.__.__c;
        return e && e.u && e.u(t);
      }
      function Et(t) {
        var e, n, r;
        function o(o) {
          if (
            (e ||
              (e = t()).then(
                function (t) {
                  n = t.default || t;
                },
                function (t) {
                  r = t;
                }
              ),
            r)
          )
            throw r;
          if (!n) throw e;
          return g(n, o);
        }
        return (o.displayName = "Lazy"), (o.t = !0), o;
      }
      function xt() {
        (this.i = null), (this.l = null);
      }
      (r.__e = function (t, e, n) {
        if (t.then) for (var r, o = e; (o = o.__); ) if ((r = o.__c) && r.__c) return r.__c(t, e.__c);
        yt(t, e, n);
      }),
        ((bt.prototype = new y()).__c = function (t, e) {
          var n = this;
          null == n.o && (n.o = []), n.o.push(e);
          var r = Mt(n.__v),
            o = !1,
            i = function () {
              o || ((o = !0), r ? r(s) : s());
            };
          (e.__c = e.componentWillUnmount),
            (e.componentWillUnmount = function () {
              i(), e.__c && e.__c();
            });
          var s = function () {
            var t;
            if (!--n.__u)
              for (n.__v.__k[0] = n.state.u, n.setState({ u: (n.__b = null) }); (t = n.o.pop()); ) t.forceUpdate();
          };
          n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }), t.then(i, i);
        }),
        (bt.prototype.render = function (t, e) {
          return (
            this.__b && ((this.__v.__k[0] = wt(this.__b)), (this.__b = null)),
            [g(y, null, e.u ? null : t.children), e.u && t.fallback]
          );
        });
      var kt = function (t, e, n) {
        if ((++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size)))
          for (n = t.i; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            t.i = n = n[2];
          }
      };
      ((xt.prototype = new y()).u = function (t) {
        var e = this,
          n = Mt(e.__v),
          r = e.l.get(t);
        return (
          r[0]++,
          function (o) {
            var i = function () {
              e.props.revealOrder ? (r.push(o), kt(e, t, r)) : o();
            };
            n ? n(i) : i();
          }
        );
      }),
        (xt.prototype.render = function (t) {
          (this.i = null), (this.l = new Map());
          var e = k(t.children);
          t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
          for (var n = e.length; n--; ) this.l.set(e[n], (this.i = [1, 0, this.i]));
          return t.children;
        }),
        (xt.prototype.componentDidUpdate = xt.prototype.componentDidMount =
          function () {
            var t = this;
            t.l.forEach(function (e, n) {
              kt(t, n, e);
            });
          });
      var Rt = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.getChildContext = function () {
            return this.props.context;
          }),
          (e.render = function (t) {
            return t.children;
          }),
          t
        );
      })();
      function St(t) {
        var e = this,
          n = t.container,
          r = g(Rt, { context: e.context }, t.vnode);
        return (
          e.s && e.s !== n && (e.v.parentNode && e.s.removeChild(e.v), B(e.h), (e.p = !1)),
          t.vnode
            ? e.p
              ? ((n.__k = e.__k), L(r, n), (e.__k = n.__k))
              : ((e.v = document.createTextNode("")),
                U("", n),
                n.appendChild(e.v),
                (e.p = !0),
                (e.s = n),
                L(r, n, e.v),
                (e.__k = e.v.__k))
            : e.p && (e.v.parentNode && e.s.removeChild(e.v), B(e.h)),
          (e.h = r),
          (e.componentWillUnmount = function () {
            e.v.parentNode && e.s.removeChild(e.v), B(e.h);
          }),
          null
        );
      }
      function Ct(t, e) {
        return g(St, { vnode: t, container: e });
      }
      var At =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      y.prototype.isReactComponent = {};
      var It = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103;
      function Ot(t, e, n) {
        if (null == e.__k) for (; e.firstChild; ) e.removeChild(e.firstChild);
        return L(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      function Tt(t, e, n) {
        return U(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      var Bt = r.event;
      function Pt(t, e) {
        t["UNSAFE_" + e] &&
          !t[e] &&
          Object.defineProperty(t, e, {
            configurable: !1,
            get: function () {
              return this["UNSAFE_" + e];
            },
            set: function (t) {
              this["UNSAFE_" + e] = t;
            },
          });
      }
      r.event = function (t) {
        Bt && (t = Bt(t)), (t.persist = function () {});
        var e = !1,
          n = !1,
          r = t.stopPropagation;
        t.stopPropagation = function () {
          r.call(t), (e = !0);
        };
        var o = t.preventDefault;
        return (
          (t.preventDefault = function () {
            o.call(t), (n = !0);
          }),
          (t.isPropagationStopped = function () {
            return e;
          }),
          (t.isDefaultPrevented = function () {
            return n;
          }),
          (t.nativeEvent = t)
        );
      };
      var Lt = {
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        Ut = r.vnode;
      r.vnode = function (t) {
        t.$$typeof = It;
        var e = t.type,
          n = t.props;
        if (e) {
          if (
            (n.class != n.className &&
              ((Lt.enumerable = "className" in n),
              null != n.className && (n.class = n.className),
              Object.defineProperty(n, "className", Lt)),
            "function" != typeof e)
          ) {
            var r, o, i;
            for (i in (n.defaultValue &&
              void 0 !== n.value &&
              (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue),
            Array.isArray(n.value) &&
              n.multiple &&
              "select" === e &&
              (k(n.children).forEach(function (t) {
                -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0);
              }),
              delete n.value),
            n))
              if ((r = At.test(i))) break;
            if (r)
              for (i in ((o = t.props = {}), n)) o[At.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = n[i];
          }
          !(function (e) {
            var n = t.type,
              r = t.props;
            if (r && "string" == typeof n) {
              var o = {};
              for (var i in r)
                /^on(Ani|Tra|Tou)/.test(i) && ((r[i.toLowerCase()] = r[i]), delete r[i]), (o[i.toLowerCase()] = i);
              if (
                (o.ondoubleclick && ((r.ondblclick = r[o.ondoubleclick]), delete r[o.ondoubleclick]),
                o.onbeforeinput && ((r.onbeforeinput = r[o.onbeforeinput]), delete r[o.onbeforeinput]),
                o.onchange && ("textarea" === n || ("input" === n.toLowerCase() && !/^fil|che|ra/i.test(r.type))))
              ) {
                var s = o.oninput || "oninput";
                r[s] || ((r[s] = r[o.onchange]), delete r[o.onchange]);
              }
            }
          })(),
            "function" == typeof e &&
              !e.m &&
              e.prototype &&
              (Pt(e.prototype, "componentWillMount"),
              Pt(e.prototype, "componentWillReceiveProps"),
              Pt(e.prototype, "componentWillUpdate"),
              (e.m = !0));
        }
        Ut && Ut(t);
      };
      var Nt = "16.8.0";
      function qt(t) {
        return g.bind(null, t);
      }
      function jt(t) {
        return !!t && t.$$typeof === It;
      }
      function Dt(t) {
        return jt(t) ? N.apply(null, arguments) : t;
      }
      function Ft(t) {
        return !!t.__k && (L(null, t), !0);
      }
      function Jt(t) {
        return (t && (t.base || (1 === t.nodeType && t))) || null;
      }
      var zt = function (t, e) {
          return t(e);
        },
        Ht = {
          useState: V,
          useReducer: Q,
          useEffect: Z,
          useLayoutEffect: X,
          useRef: G,
          useImperativeHandle: tt,
          useMemo: et,
          useCallback: nt,
          useContext: rt,
          useDebugValue: ot,
          version: "16.8.0",
          Children: vt,
          render: Ot,
          hydrate: Ot,
          unmountComponentAtNode: Ft,
          createPortal: Ct,
          createElement: g,
          createContext: q,
          createFactory: qt,
          cloneElement: Dt,
          createRef: _,
          Fragment: v,
          isValidElement: jt,
          findDOMNode: Jt,
          Component: y,
          PureComponent: dt,
          memo: pt,
          forwardRef: mt,
          unstable_batchedUpdates: zt,
          Suspense: bt,
          SuspenseList: xt,
          lazy: Et,
        };
    },
    2592: function (t, e, n) {
      var r = n(7138),
        o = n(5115),
        i = n(6907),
        s = n(3776);
      function a(t, e, n, i, s) {
        var a = [].slice.call(arguments, 1),
          u = a.length,
          c = "function" === typeof a[u - 1];
        if (!c && !r()) throw new Error("Callback required as last argument");
        if (!c) {
          if (u < 1) throw new Error("Too few arguments provided");
          return (
            1 === u ? ((n = e), (e = i = void 0)) : 2 !== u || e.getContext || ((i = n), (n = e), (e = void 0)),
            new Promise(function (r, s) {
              try {
                var a = o.create(n, i);
                r(t(a, e, i));
              } catch (u) {
                s(u);
              }
            })
          );
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u
          ? ((s = n), (n = e), (e = i = void 0))
          : 3 === u &&
            (e.getContext && "undefined" === typeof s
              ? ((s = i), (i = void 0))
              : ((s = i), (i = n), (n = e), (e = void 0)));
        try {
          var h = o.create(n, i);
          s(null, t(h, e, i));
        } catch (l) {
          s(l);
        }
      }
      (e.create = o.create),
        (e.toCanvas = a.bind(null, i.render)),
        (e.toDataURL = a.bind(null, i.renderToDataURL)),
        (e.toString = a.bind(null, function (t, e, n) {
          return s.render(t, n);
        }));
    },
    7138: function (t) {
      t.exports = function () {
        return "function" === typeof Promise && Promise.prototype && Promise.prototype.then;
      };
    },
    1845: function (t, e, n) {
      var r = n(242).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        for (
          var e = Math.floor(t / 7) + 2,
            n = r(t),
            o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
            i = [n - 7],
            s = 1;
          s < e - 1;
          s++
        )
          i[s] = i[s - 1] - o;
        return i.push(6), i.reverse();
      }),
        (e.getPositions = function (t) {
          for (var n = [], r = e.getRowColCoords(t), o = r.length, i = 0; i < o; i++)
            for (var s = 0; s < o; s++)
              (0 === i && 0 === s) || (0 === i && s === o - 1) || (i === o - 1 && 0 === s) || n.push([r[i], r[s]]);
          return n;
        });
    },
    8260: function (t, e, n) {
      var r = n(6910),
        o = [
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
      function i(t) {
        (this.mode = r.ALPHANUMERIC), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            var n = 45 * o.indexOf(this.data[e]);
            (n += o.indexOf(this.data[e + 1])), t.put(n, 11);
          }
          this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
        }),
        (t.exports = i);
    },
    7245: function (t) {
      function e() {
        (this.buffer = []), (this.length = 0);
      }
      (e.prototype = {
        get: function (t) {
          var e = Math.floor(t / 8);
          return 1 === ((this.buffer[e] >>> (7 - (t % 8))) & 1);
        },
        put: function (t, e) {
          for (var n = 0; n < e; n++) this.putBit(1 === ((t >>> (e - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          var e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = e);
    },
    3280: function (t, e, n) {
      var r = n(9131);
      function o(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = t), (this.data = r.alloc(t * t)), (this.reservedBit = r.alloc(t * t));
      }
      (o.prototype.set = function (t, e, n, r) {
        var o = t * this.size + e;
        (this.data[o] = n), r && (this.reservedBit[o] = !0);
      }),
        (o.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (o.prototype.xor = function (t, e, n) {
          this.data[t * this.size + e] ^= n;
        }),
        (o.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = o);
    },
    3424: function (t, e, n) {
      var r = n(9131),
        o = n(6910);
      function i(t) {
        (this.mode = o.BYTE), (this.data = r.from(t));
      }
      (i.getBitsLength = function (t) {
        return 8 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8);
        }),
        (t.exports = i);
    },
    5393: function (t, e, n) {
      var r = n(4908),
        o = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4,
          5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19,
          6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12,
          21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51,
          17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62,
          74, 24, 47, 65, 77, 25, 49, 68, 81,
        ],
        i = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108,
          130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
          288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588,
          196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560,
          810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784,
          1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036,
          1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720,
          1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
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
      }),
        (e.getTotalCodewordsCount = function (t, e) {
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
        });
    },
    4908: function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" !== typeof t) throw new Error("Param is not a string");
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
          } catch (r) {
            return n;
          }
        });
    },
    6526: function (t, e, n) {
      var r = n(242).getSymbolSize;
      e.getPositions = function (t) {
        var e = r(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    1642: function (t, e, n) {
      var r = n(242),
        o = r.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        for (var n = (t.bit << 3) | e, i = n << 10; r.getBCHDigit(i) - o >= 0; ) i ^= 1335 << (r.getBCHDigit(i) - o);
        return 21522 ^ ((n << 10) | i);
      };
    },
    9729: function (t, e, n) {
      var r = n(9131),
        o = r.alloc(512),
        i = r.alloc(256);
      !(function () {
        for (var t = 1, e = 0; e < 255; e++) (o[e] = t), (i[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (e = 255; e < 512; e++) o[e] = o[e - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw new Error("log(" + t + ")");
          return i[t];
        }),
        (e.exp = function (t) {
          return o[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : o[i[t] + i[e]];
        });
    },
    5442: function (t, e, n) {
      var r = n(6910),
        o = n(242);
      function i(t) {
        (this.mode = r.KANJI), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 13 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e < this.data.length; e++) {
            var n = o.toSJIS(this.data[e]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else {
              if (!(n >= 57408 && n <= 60351))
                throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
              n -= 49472;
            }
            (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
          }
        }),
        (t.exports = i);
    },
    7126: function (t, e) {
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
        o = 40,
        i = 10;
      function s(t, n, r) {
        switch (t) {
          case e.Patterns.PATTERN000:
            return (n + r) % 2 === 0;
          case e.Patterns.PATTERN001:
            return n % 2 === 0;
          case e.Patterns.PATTERN010:
            return r % 3 === 0;
          case e.Patterns.PATTERN011:
            return (n + r) % 3 === 0;
          case e.Patterns.PATTERN100:
            return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
          case e.Patterns.PATTERN101:
            return ((n * r) % 2) + ((n * r) % 3) === 0;
          case e.Patterns.PATTERN110:
            return (((n * r) % 2) + ((n * r) % 3)) % 2 === 0;
          case e.Patterns.PATTERN111:
            return (((n * r) % 3) + ((n + r) % 2)) % 2 === 0;
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
          for (var e = t.size, r = 0, o = 0, i = 0, s = null, a = null, u = 0; u < e; u++) {
            (o = i = 0), (s = a = null);
            for (var c = 0; c < e; c++) {
              var h = t.get(u, c);
              h === s ? o++ : (o >= 5 && (r += n + (o - 5)), (s = h), (o = 1)),
                (h = t.get(c, u)) === a ? i++ : (i >= 5 && (r += n + (i - 5)), (a = h), (i = 1));
            }
            o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5));
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          for (var e = t.size, n = 0, o = 0; o < e - 1; o++)
            for (var i = 0; i < e - 1; i++) {
              var s = t.get(o, i) + t.get(o, i + 1) + t.get(o + 1, i) + t.get(o + 1, i + 1);
              (4 !== s && 0 !== s) || n++;
            }
          return n * r;
        }),
        (e.getPenaltyN3 = function (t) {
          for (var e = t.size, n = 0, r = 0, i = 0, s = 0; s < e; s++) {
            r = i = 0;
            for (var a = 0; a < e; a++)
              (r = ((r << 1) & 2047) | t.get(s, a)),
                a >= 10 && (1488 === r || 93 === r) && n++,
                (i = ((i << 1) & 2047) | t.get(a, s)),
                a >= 10 && (1488 === i || 93 === i) && n++;
          }
          return n * o;
        }),
        (e.getPenaltyN4 = function (t) {
          for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
          return Math.abs(Math.ceil((100 * e) / n / 5) - 10) * i;
        }),
        (e.applyMask = function (t, e) {
          for (var n = e.size, r = 0; r < n; r++)
            for (var o = 0; o < n; o++) e.isReserved(o, r) || e.xor(o, r, s(t, o, r));
        }),
        (e.getBestMask = function (t, n) {
          for (var r = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, s = 0; s < r; s++) {
            n(s), e.applyMask(s, t);
            var a = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
            e.applyMask(s, t), a < i && ((i = a), (o = s));
          }
          return o;
        });
    },
    6910: function (t, e, n) {
      var r = n(3114),
        o = n(7007);
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
          return o.testNumeric(t)
            ? e.NUMERIC
            : o.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : o.testKanji(t)
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
              if ("string" !== typeof t) throw new Error("Param is not a string");
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
          } catch (r) {
            return n;
          }
        });
    },
    1085: function (t, e, n) {
      var r = n(6910);
      function o(t) {
        (this.mode = r.NUMERIC), (this.data = t.toString());
      }
      (o.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          var e, n, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (n = this.data.substr(e, 3)), (r = parseInt(n, 10)), t.put(r, 10);
          var o = this.data.length - e;
          o > 0 && ((n = this.data.substr(e)), (r = parseInt(n, 10)), t.put(r, 3 * o + 1));
        }),
        (t.exports = o);
    },
    6143: function (t, e, n) {
      var r = n(9131),
        o = n(9729);
      (e.mul = function (t, e) {
        for (var n = r.alloc(t.length + e.length - 1), i = 0; i < t.length; i++)
          for (var s = 0; s < e.length; s++) n[i + s] ^= o.mul(t[i], e[s]);
        return n;
      }),
        (e.mod = function (t, e) {
          for (var n = r.from(t); n.length - e.length >= 0; ) {
            for (var i = n[0], s = 0; s < e.length; s++) n[s] ^= o.mul(e[s], i);
            for (var a = 0; a < n.length && 0 === n[a]; ) a++;
            n = n.slice(a);
          }
          return n;
        }),
        (e.generateECPolynomial = function (t) {
          for (var n = r.from([1]), i = 0; i < t; i++) n = e.mul(n, [1, o.exp(i)]);
          return n;
        });
    },
    5115: function (t, e, n) {
      var r = n(9131),
        o = n(242),
        i = n(4908),
        s = n(7245),
        a = n(3280),
        u = n(1845),
        c = n(6526),
        h = n(7126),
        l = n(5393),
        f = n(6291),
        d = n(3103),
        p = n(1642),
        g = n(6910),
        m = n(6130),
        _ = n(5147);
      function v(t, e, n) {
        var r,
          o,
          i = t.size,
          s = p.getEncodedBits(e, n);
        for (r = 0; r < 15; r++)
          (o = 1 === ((s >> r) & 1)),
            r < 6 ? t.set(r, 8, o, !0) : r < 8 ? t.set(r + 1, 8, o, !0) : t.set(i - 15 + r, 8, o, !0),
            r < 8 ? t.set(8, i - r - 1, o, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, o, !0) : t.set(8, 15 - r - 1, o, !0);
        t.set(i - 8, 8, 1, !0);
      }
      function y(t, e, n) {
        var i = new s();
        n.forEach(function (e) {
          i.put(e.mode.bit, 4), i.put(e.getLength(), g.getCharCountIndicator(e.mode, t)), e.write(i);
        });
        var a = 8 * (o.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, e));
        for (i.getLengthInBits() + 4 <= a && i.put(0, 4); i.getLengthInBits() % 8 !== 0; ) i.putBit(0);
        for (var u = (a - i.getLengthInBits()) / 8, c = 0; c < u; c++) i.put(c % 2 ? 17 : 236, 8);
        return (function (t, e, n) {
          for (
            var i = o.getSymbolTotalCodewords(e),
              s = l.getTotalCodewordsCount(e, n),
              a = i - s,
              u = l.getBlocksCount(e, n),
              c = u - (i % u),
              h = Math.floor(i / u),
              d = Math.floor(a / u),
              p = d + 1,
              g = h - d,
              m = new f(g),
              _ = 0,
              v = new Array(u),
              y = new Array(u),
              w = 0,
              b = r.from(t.buffer),
              M = 0;
            M < u;
            M++
          ) {
            var E = M < c ? d : p;
            (v[M] = b.slice(_, _ + E)), (y[M] = m.encode(v[M])), (_ += E), (w = Math.max(w, E));
          }
          var x,
            k,
            R = r.alloc(i),
            S = 0;
          for (x = 0; x < w; x++) for (k = 0; k < u; k++) x < v[k].length && (R[S++] = v[k][x]);
          for (x = 0; x < g; x++) for (k = 0; k < u; k++) R[S++] = y[k][x];
          return R;
        })(i, t, e);
      }
      function w(t, e, n, r) {
        var i;
        if (_(t)) i = m.fromArray(t);
        else {
          if ("string" !== typeof t) throw new Error("Invalid data");
          var s = e;
          if (!s) {
            var l = m.rawSplit(t);
            s = d.getBestVersionForData(l, n);
          }
          i = m.fromString(t, s || 40);
        }
        var f = d.getBestVersionForData(i, n);
        if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (e) {
          if (e < f)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                f +
                ".\n"
            );
        } else e = f;
        var p = y(e, n, i),
          g = o.getSymbolSize(e),
          w = new a(g);
        return (
          (function (t, e) {
            for (var n = t.size, r = c.getPositions(e), o = 0; o < r.length; o++)
              for (var i = r[o][0], s = r[o][1], a = -1; a <= 7; a++)
                if (!(i + a <= -1 || n <= i + a))
                  for (var u = -1; u <= 7; u++)
                    s + u <= -1 ||
                      n <= s + u ||
                      ((a >= 0 && a <= 6 && (0 === u || 6 === u)) ||
                      (u >= 0 && u <= 6 && (0 === a || 6 === a)) ||
                      (a >= 2 && a <= 4 && u >= 2 && u <= 4)
                        ? t.set(i + a, s + u, !0, !0)
                        : t.set(i + a, s + u, !1, !0));
          })(w, e),
          (function (t) {
            for (var e = t.size, n = 8; n < e - 8; n++) {
              var r = n % 2 === 0;
              t.set(n, 6, r, !0), t.set(6, n, r, !0);
            }
          })(w),
          (function (t, e) {
            for (var n = u.getPositions(e), r = 0; r < n.length; r++)
              for (var o = n[r][0], i = n[r][1], s = -2; s <= 2; s++)
                for (var a = -2; a <= 2; a++)
                  -2 === s || 2 === s || -2 === a || 2 === a || (0 === s && 0 === a)
                    ? t.set(o + s, i + a, !0, !0)
                    : t.set(o + s, i + a, !1, !0);
          })(w, e),
          v(w, n, 0),
          e >= 7 &&
            (function (t, e) {
              for (var n, r, o, i = t.size, s = d.getEncodedBits(e), a = 0; a < 18; a++)
                (n = Math.floor(a / 3)),
                  (r = (a % 3) + i - 8 - 3),
                  (o = 1 === ((s >> a) & 1)),
                  t.set(n, r, o, !0),
                  t.set(r, n, o, !0);
            })(w, e),
          (function (t, e) {
            for (var n = t.size, r = -1, o = n - 1, i = 7, s = 0, a = n - 1; a > 0; a -= 2)
              for (6 === a && a--; ; ) {
                for (var u = 0; u < 2; u++)
                  if (!t.isReserved(o, a - u)) {
                    var c = !1;
                    s < e.length && (c = 1 === ((e[s] >>> i) & 1)), t.set(o, a - u, c), -1 === --i && (s++, (i = 7));
                  }
                if ((o += r) < 0 || n <= o) {
                  (o -= r), (r = -r);
                  break;
                }
              }
          })(w, p),
          isNaN(r) && (r = h.getBestMask(w, v.bind(null, w, n))),
          h.applyMask(r, w),
          v(w, n, r),
          { modules: w, version: e, errorCorrectionLevel: n, maskPattern: r, segments: i }
        );
      }
      e.create = function (t, e) {
        if ("undefined" === typeof t || "" === t) throw new Error("No input text");
        var n,
          r,
          s = i.M;
        return (
          "undefined" !== typeof e &&
            ((s = i.from(e.errorCorrectionLevel, i.M)),
            (n = d.from(e.version)),
            (r = h.from(e.maskPattern)),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
          w(t, n, s, r)
        );
      };
    },
    6291: function (t, e, n) {
      var r = n(9131),
        o = n(6143),
        i = n(8764).Buffer;
      function s(t) {
        (this.genPoly = void 0), (this.degree = t), this.degree && this.initialize(this.degree);
      }
      (s.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
      }),
        (s.prototype.encode = function (t) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var e = r.alloc(this.degree),
            n = i.concat([t, e], t.length + this.degree),
            s = o.mod(n, this.genPoly),
            a = this.degree - s.length;
          if (a > 0) {
            var u = r.alloc(this.degree);
            return s.copy(u, a), u;
          }
          return s;
        }),
        (t.exports = s);
    },
    7007: function (t, e) {
      var n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
      (e.KANJI = new RegExp(r, "g")),
        (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = new RegExp(o, "g")),
        (e.NUMERIC = new RegExp(n, "g")),
        (e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var i = new RegExp("^" + r + "$"),
        s = new RegExp("^[0-9]+$"),
        a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return i.test(t);
      }),
        (e.testNumeric = function (t) {
          return s.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return a.test(t);
        });
    },
    6130: function (t, e, n) {
      var r = n(6910),
        o = n(1085),
        i = n(8260),
        s = n(3424),
        a = n(5442),
        u = n(7007),
        c = n(242),
        h = n(5987);
      function l(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function f(t, e, n) {
        for (var r, o = []; null !== (r = t.exec(n)); )
          o.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
        return o;
      }
      function d(t) {
        var e,
          n,
          o = f(u.NUMERIC, r.NUMERIC, t),
          i = f(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
        return (
          c.isKanjiModeEnabled()
            ? ((e = f(u.BYTE, r.BYTE, t)), (n = f(u.KANJI, r.KANJI, t)))
            : ((e = f(u.BYTE_KANJI, r.BYTE, t)), (n = [])),
          o
            .concat(i, e, n)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function p(t, e) {
        switch (e) {
          case r.NUMERIC:
            return o.getBitsLength(t);
          case r.ALPHANUMERIC:
            return i.getBitsLength(t);
          case r.KANJI:
            return a.getBitsLength(t);
          case r.BYTE:
            return s.getBitsLength(t);
        }
      }
      function g(t, e) {
        var n,
          u = r.getBestModeForData(t);
        if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit)
          throw new Error(
            '"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u)
          );
        switch ((n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new o(t);
          case r.ALPHANUMERIC:
            return new i(t);
          case r.KANJI:
            return new a(t);
          case r.BYTE:
            return new s(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return "string" === typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)), t;
        }, []);
      }),
        (e.fromString = function (t, n) {
          for (
            var o = (function (t) {
                for (var e = [], n = 0; n < t.length; n++) {
                  var o = t[n];
                  switch (o.mode) {
                    case r.NUMERIC:
                      e.push([
                        o,
                        { data: o.data, mode: r.ALPHANUMERIC, length: o.length },
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      e.push([o, { data: o.data, mode: r.BYTE, length: o.length }]);
                      break;
                    case r.KANJI:
                      e.push([o, { data: o.data, mode: r.BYTE, length: l(o.data) }]);
                      break;
                    case r.BYTE:
                      e.push([{ data: o.data, mode: r.BYTE, length: l(o.data) }]);
                  }
                }
                return e;
              })(d(t, c.isKanjiModeEnabled())),
              i = (function (t, e) {
                for (var n = {}, o = { start: {} }, i = ["start"], s = 0; s < t.length; s++) {
                  for (var a = t[s], u = [], c = 0; c < a.length; c++) {
                    var h = a[c],
                      l = "" + s + c;
                    u.push(l), (n[l] = { node: h, lastCount: 0 }), (o[l] = {});
                    for (var f = 0; f < i.length; f++) {
                      var d = i[f];
                      n[d] && n[d].node.mode === h.mode
                        ? ((o[d][l] = p(n[d].lastCount + h.length, h.mode) - p(n[d].lastCount, h.mode)),
                          (n[d].lastCount += h.length))
                        : (n[d] && (n[d].lastCount = h.length),
                          (o[d][l] = p(h.length, h.mode) + 4 + r.getCharCountIndicator(h.mode, e)));
                    }
                  }
                  i = u;
                }
                for (f = 0; f < i.length; f++) o[i[f]].end = 0;
                return { map: o, table: n };
              })(o, n),
              s = h.find_path(i.map, "start", "end"),
              a = [],
              u = 1;
            u < s.length - 1;
            u++
          )
            a.push(i.table[s[u]].node);
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
          return e.fromArray(d(t, c.isKanjiModeEnabled()));
        });
    },
    242: function (t, e) {
      var n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156,
          1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
          3706,
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
          if ("function" !== typeof t) throw new Error('"toSJISFunc" is not a valid function.');
          n = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return "undefined" !== typeof n;
        }),
        (e.toSJIS = function (t) {
          return n(t);
        });
    },
    3114: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    3103: function (t, e, n) {
      var r = n(242),
        o = n(5393),
        i = n(4908),
        s = n(6910),
        a = n(3114),
        u = n(5147),
        c = r.getBCHDigit(7973);
      function h(t, e) {
        return s.getCharCountIndicator(t, e) + 4;
      }
      function l(t, e) {
        var n = 0;
        return (
          t.forEach(function (t) {
            var r = h(t.mode, e);
            n += r + t.getBitsLength();
          }),
          n
        );
      }
      (e.from = function (t, e) {
        return a.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, n) {
          if (!a.isValid(t)) throw new Error("Invalid QR Code version");
          "undefined" === typeof n && (n = s.BYTE);
          var i = 8 * (r.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e));
          if (n === s.MIXED) return i;
          var u = i - h(n, t);
          switch (n) {
            case s.NUMERIC:
              return Math.floor((u / 10) * 3);
            case s.ALPHANUMERIC:
              return Math.floor((u / 11) * 2);
            case s.KANJI:
              return Math.floor(u / 13);
            case s.BYTE:
            default:
              return Math.floor(u / 8);
          }
        }),
        (e.getBestVersionForData = function (t, n) {
          var r,
            o = i.from(n, i.M);
          if (u(t)) {
            if (t.length > 1)
              return (function (t, n) {
                for (var r = 1; r <= 40; r++) if (l(t, r) <= e.getCapacity(r, n, s.MIXED)) return r;
              })(t, o);
            if (0 === t.length) return 1;
            r = t[0];
          } else r = t;
          return (function (t, n, r) {
            for (var o = 1; o <= 40; o++) if (n <= e.getCapacity(o, r, t)) return o;
          })(r.mode, r.getLength(), o);
        }),
        (e.getEncodedBits = function (t) {
          if (!a.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
          for (var e = t << 12; r.getBCHDigit(e) - c >= 0; ) e ^= 7973 << (r.getBCHDigit(e) - c);
          return (t << 12) | e;
        });
    },
    6907: function (t, e, n) {
      var r = n(9653);
      (e.render = function (t, e, n) {
        var o = n,
          i = e;
        "undefined" !== typeof o || (e && e.getContext) || ((o = e), (e = void 0)),
          e ||
            (i = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (o = r.getOptions(o));
        var s = r.getImageWidth(t.modules.size, o),
          a = i.getContext("2d"),
          u = a.createImageData(s, s);
        return (
          r.qrToImageData(u.data, t, o),
          (function (t, e, n) {
            t.clearRect(0, 0, e.width, e.height),
              e.style || (e.style = {}),
              (e.height = n),
              (e.width = n),
              (e.style.height = n + "px"),
              (e.style.width = n + "px");
          })(a, i, s),
          a.putImageData(u, 0, 0),
          i
        );
      }),
        (e.renderToDataURL = function (t, n, r) {
          var o = r;
          "undefined" !== typeof o || (n && n.getContext) || ((o = n), (n = void 0)), o || (o = {});
          var i = e.render(t, n, o),
            s = o.type || "image/png",
            a = o.rendererOpts || {};
          return i.toDataURL(s, a.quality);
        });
    },
    3776: function (t, e, n) {
      var r = n(9653);
      function o(t, e) {
        var n = t.a / 255,
          r = e + '="' + t.hex + '"';
        return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
      }
      function i(t, e, n) {
        var r = t + e;
        return "undefined" !== typeof n && (r += " " + n), r;
      }
      e.render = function (t, e, n) {
        var s = r.getOptions(e),
          a = t.modules.size,
          u = t.modules.data,
          c = a + 2 * s.margin,
          h = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
          l =
            "<path " +
            o(s.color.dark, "stroke") +
            ' d="' +
            (function (t, e, n) {
              for (var r = "", o = 0, s = !1, a = 0, u = 0; u < t.length; u++) {
                var c = Math.floor(u % e),
                  h = Math.floor(u / e);
                c || s || (s = !0),
                  t[u]
                    ? (a++,
                      (u > 0 && c > 0 && t[u - 1]) ||
                        ((r += s ? i("M", c + n, 0.5 + h + n) : i("m", o, 0)), (o = 0), (s = !1)),
                      (c + 1 < e && t[u + 1]) || ((r += i("h", a)), (a = 0)))
                    : o++;
              }
              return r;
            })(u, a, s.margin) +
            '"/>',
          f = 'viewBox="0 0 ' + c + " " + c + '"',
          d =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") +
            f +
            ' shape-rendering="crispEdges">' +
            h +
            l +
            "</svg>\n";
        return "function" === typeof n && n(null, d), d;
      };
    },
    9653: function (t, e) {
      function n(t) {
        if (("number" === typeof t && (t = t.toString()), "string" !== typeof t))
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
        var e = "undefined" === typeof t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          o = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : o,
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
            var o = n.modules.size,
              i = n.modules.data,
              s = e.getScale(o, r),
              a = Math.floor((o + 2 * r.margin) * s),
              u = r.margin * s,
              c = [r.color.light, r.color.dark],
              h = 0;
            h < a;
            h++
          )
            for (var l = 0; l < a; l++) {
              var f = 4 * (h * a + l),
                d = r.color.light;
              if (h >= u && l >= u && h < a - u && l < a - u)
                d = c[i[Math.floor((h - u) / s) * o + Math.floor((l - u) / s)] ? 1 : 0];
              (t[f++] = d.r), (t[f++] = d.g), (t[f++] = d.b), (t[f] = d.a);
            }
        });
    },
    9131: function (t, e, n) {
      "use strict";
      var r = n(5147);
      i.TYPED_ARRAY_SUPPORT = (function () {
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
        } catch (e) {
          return !1;
        }
      })();
      var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      function i(t, e, n) {
        return i.TYPED_ARRAY_SUPPORT || this instanceof i
          ? "number" === typeof t
            ? u(this, t)
            : (function (t, e, n, r) {
                if ("number" === typeof e) throw new TypeError('"value" argument must not be a number');
                if ("undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer)
                  return (function (t, e, n, r) {
                    if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    var o;
                    o =
                      void 0 === n && void 0 === r
                        ? new Uint8Array(e)
                        : void 0 === r
                        ? new Uint8Array(e, n)
                        : new Uint8Array(e, n, r);
                    i.TYPED_ARRAY_SUPPORT ? (o.__proto__ = i.prototype) : (o = c(t, o));
                    return o;
                  })(t, e, n, r);
                if ("string" === typeof e)
                  return (function (t, e) {
                    var n = 0 | l(e),
                      r = a(t, n),
                      o = r.write(e);
                    o !== n && (r = r.slice(0, o));
                    return r;
                  })(t, e);
                return (function (t, e) {
                  if (i.isBuffer(e)) {
                    var n = 0 | s(e.length),
                      r = a(t, n);
                    return 0 === r.length || e.copy(r, 0, 0, n), r;
                  }
                  if (e) {
                    if (("undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e)
                      return "number" !== typeof e.length || (o = e.length) !== o ? a(t, 0) : c(t, e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return c(t, e.data);
                  }
                  var o;
                  throw new TypeError(
                    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                  );
                })(t, e);
              })(this, t, e, n)
          : new i(t, e, n);
      }
      function s(t) {
        if (t >= o)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
        return 0 | t;
      }
      function a(t, e) {
        var n;
        return (
          i.TYPED_ARRAY_SUPPORT
            ? ((n = new Uint8Array(e)).__proto__ = i.prototype)
            : (null === (n = t) && (n = new i(e)), (n.length = e)),
          n
        );
      }
      function u(t, e) {
        var n = a(t, e < 0 ? 0 : 0 | s(e));
        if (!i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
        return n;
      }
      function c(t, e) {
        for (var n = e.length < 0 ? 0 : 0 | s(e.length), r = a(t, n), o = 0; o < n; o += 1) r[o] = 255 & e[o];
        return r;
      }
      function h(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
          if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
          }
        }
        return i;
      }
      function l(t) {
        return i.isBuffer(t)
          ? t.length
          : "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          ? t.byteLength
          : ("string" !== typeof t && (t = "" + t), 0 === t.length ? 0 : h(t).length);
      }
      i.TYPED_ARRAY_SUPPORT &&
        ((i.prototype.__proto__ = Uint8Array.prototype),
        (i.__proto__ = Uint8Array),
        "undefined" !== typeof Symbol &&
          Symbol.species &&
          i[Symbol.species] === i &&
          Object.defineProperty(i, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 })),
        (i.prototype.write = function (t, e, n) {
          void 0 === e || (void 0 === n && "string" === typeof e)
            ? ((n = this.length), (e = 0))
            : isFinite(e) && ((e |= 0), isFinite(n) ? (n |= 0) : (n = void 0));
          var r = this.length - e;
          if (((void 0 === n || n > r) && (n = r), (t.length > 0 && (n < 0 || e < 0)) || e > this.length))
            throw new RangeError("Attempt to write outside buffer bounds");
          return (function (t, e, n, r) {
            return (function (t, e, n, r) {
              for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
              return o;
            })(h(e, t.length - n), t, n, r);
          })(this, t, e, n);
        }),
        (i.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t),
            i.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = i.prototype;
          else {
            var o = e - t;
            n = new i(o, void 0);
            for (var s = 0; s < o; ++s) n[s] = this[s + t];
          }
          return n;
        }),
        (i.prototype.copy = function (t, e, n, r) {
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
          var o,
            s = r - n;
          if (this === t && n < e && e < r) for (o = s - 1; o >= 0; --o) t[o + e] = this[o + n];
          else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (o = 0; o < s; ++o) t[o + e] = this[o + n];
          else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
          return s;
        }),
        (i.prototype.fill = function (t, e, n) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e ? ((e = 0), (n = this.length)) : "string" === typeof n && (n = this.length),
              1 === t.length)
            ) {
              var r = t.charCodeAt(0);
              r < 256 && (t = r);
            }
          } else "number" === typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
          if (n <= e) return this;
          var o;
          if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" === typeof t))
            for (o = e; o < n; ++o) this[o] = t;
          else {
            var s = i.isBuffer(t) ? t : new i(t),
              a = s.length;
            for (o = 0; o < n - e; ++o) this[o + e] = s[o % a];
          }
          return this;
        }),
        (i.concat = function (t, e) {
          if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a(null, 0);
          var n;
          if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var o = u(null, e),
            s = 0;
          for (n = 0; n < t.length; ++n) {
            var c = t[n];
            if (!i.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
            c.copy(o, s), (s += c.length);
          }
          return o;
        }),
        (i.byteLength = l),
        (i.prototype._isBuffer = !0),
        (i.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (t.exports.alloc = function (t) {
          var e = new i(t);
          return e.fill(0), e;
        }),
        (t.exports.from = function (t) {
          return new i(t);
        });
    },
    5147: function (t) {
      var e = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == e.call(t);
        };
    },
    7563: function (t, e, n) {
      "use strict";
      const r = n(9264),
        o = n(4020),
        i = n(500);
      function s(t) {
        if ("string" !== typeof t || 1 !== t.length)
          throw new TypeError("arrayFormatSeparator must be single character string");
      }
      function a(t, e) {
        return e.encode ? (e.strict ? r(t) : encodeURIComponent(t)) : t;
      }
      function u(t, e) {
        return e.decode ? o(t) : t;
      }
      function c(t) {
        return Array.isArray(t)
          ? t.sort()
          : "object" === typeof t
          ? c(Object.keys(t))
              .sort((t, e) => Number(t) - Number(e))
              .map((e) => t[e])
          : t;
      }
      function h(t) {
        const e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function l(t) {
        const e = (t = h(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function f(t, e) {
        return (
          e.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ("true" !== t.toLowerCase() && "false" !== t.toLowerCase()) ||
              (t = "true" === t.toLowerCase()),
          t
        );
      }
      function d(t, e) {
        s(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e
          )).arrayFormatSeparator
        );
        const n = (function (t) {
            let e;
            switch (t.arrayFormat) {
              case "index":
                return (t, n, r) => {
                  (e = /\[(\d*)\]$/.exec(t)),
                    (t = t.replace(/\[\d*\]$/, "")),
                    e ? (void 0 === r[t] && (r[t] = {}), (r[t][e[1]] = n)) : (r[t] = n);
                };
              case "bracket":
                return (t, n, r) => {
                  (e = /(\[\])$/.exec(t)),
                    (t = t.replace(/\[\]$/, "")),
                    e ? (void 0 !== r[t] ? (r[t] = [].concat(r[t], n)) : (r[t] = [n])) : (r[t] = n);
                };
              case "comma":
              case "separator":
                return (e, n, r) => {
                  const o =
                    "string" === typeof n && n.split("").indexOf(t.arrayFormatSeparator) > -1
                      ? n.split(t.arrayFormatSeparator).map((e) => u(e, t))
                      : null === n
                      ? n
                      : u(n, t);
                  r[e] = o;
                };
              default:
                return (t, e, n) => {
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], e)) : (n[t] = e);
                };
            }
          })(e),
          r = Object.create(null);
        if ("string" !== typeof t) return r;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return r;
        for (const o of t.split("&")) {
          let [t, s] = i(e.decode ? o.replace(/\+/g, " ") : o, "=");
          (s = void 0 === s ? null : ["comma", "separator"].includes(e.arrayFormat) ? s : u(s, e)), n(u(t, e), s, r);
        }
        for (const o of Object.keys(r)) {
          const t = r[o];
          if ("object" === typeof t && null !== t) for (const n of Object.keys(t)) t[n] = f(t[n], e);
          else r[o] = f(t, e);
        }
        return !1 === e.sort
          ? r
          : (!0 === e.sort ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce((t, e) => {
              const n = r[e];
              return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? (t[e] = c(n)) : (t[e] = n), t;
            }, Object.create(null));
      }
      (e.extract = l),
        (e.parse = d),
        (e.stringify = (t, e) => {
          if (!t) return "";
          s(
            (e = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, e))
              .arrayFormatSeparator
          );
          const n = (n) => {
              return (e.skipNull && (null === (r = t[n]) || void 0 === r)) || (e.skipEmptyString && "" === t[n]);
              var r;
            },
            r = (function (t) {
              switch (t.arrayFormat) {
                case "index":
                  return (e) => (n, r) => {
                    const o = n.length;
                    return void 0 === r || (t.skipNull && null === r) || (t.skipEmptyString && "" === r)
                      ? n
                      : null === r
                      ? [...n, [a(e, t), "[", o, "]"].join("")]
                      : [...n, [a(e, t), "[", a(o, t), "]=", a(r, t)].join("")];
                  };
                case "bracket":
                  return (e) => (n, r) =>
                    void 0 === r || (t.skipNull && null === r) || (t.skipEmptyString && "" === r)
                      ? n
                      : null === r
                      ? [...n, [a(e, t), "[]"].join("")]
                      : [...n, [a(e, t), "[]=", a(r, t)].join("")];
                case "comma":
                case "separator":
                  return (e) => (n, r) =>
                    null === r || void 0 === r || 0 === r.length
                      ? n
                      : 0 === n.length
                      ? [[a(e, t), "=", a(r, t)].join("")]
                      : [[n, a(r, t)].join(t.arrayFormatSeparator)];
                default:
                  return (e) => (n, r) =>
                    void 0 === r || (t.skipNull && null === r) || (t.skipEmptyString && "" === r)
                      ? n
                      : null === r
                      ? [...n, a(e, t)]
                      : [...n, [a(e, t), "=", a(r, t)].join("")];
              }
            })(e),
            o = {};
          for (const s of Object.keys(t)) n(s) || (o[s] = t[s]);
          const i = Object.keys(o);
          return (
            !1 !== e.sort && i.sort(e.sort),
            i
              .map((n) => {
                const o = t[n];
                return void 0 === o
                  ? ""
                  : null === o
                  ? a(n, e)
                  : Array.isArray(o)
                  ? o.reduce(r(n), []).join("&")
                  : a(n, e) + "=" + a(o, e);
              })
              .filter((t) => t.length > 0)
              .join("&")
          );
        }),
        (e.parseUrl = (t, e) => {
          e = Object.assign({ decode: !0 }, e);
          const [n, r] = i(t, "#");
          return Object.assign(
            { url: n.split("?")[0] || "", query: d(l(t), e) },
            e && e.parseFragmentIdentifier && r ? { fragmentIdentifier: u(r, e) } : {}
          );
        }),
        (e.stringifyUrl = (t, n) => {
          n = Object.assign({ encode: !0, strict: !0 }, n);
          const r = h(t.url).split("?")[0] || "",
            o = e.extract(t.url),
            i = e.parse(o, { sort: !1 }),
            s = Object.assign(i, t.query);
          let u = e.stringify(s, n);
          u && (u = `?${u}`);
          let c = (function (t) {
            let e = "";
            const n = t.indexOf("#");
            return -1 !== n && (e = t.slice(n)), e;
          })(t.url);
          return t.fragmentIdentifier && (c = `#${a(t.fragmentIdentifier, n)}`), `${r}${u}${c}`;
        });
    },
    9264: function (t) {
      "use strict";
      t.exports = (t) =>
        encodeURIComponent(t).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`);
    },
    500: function (t) {
      "use strict";
      t.exports = (t, e) => {
        if ("string" !== typeof t || "string" !== typeof e)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === e) return [t];
        const n = t.indexOf(e);
        return -1 === n ? [t] : [t.slice(0, n), t.slice(n + e.length)];
      };
    },
    1742: function (t) {
      t.exports = function () {
        var t = document.getSelection();
        if (!t.rangeCount) return function () {};
        for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++) n.push(t.getRangeAt(r));
        switch (e.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            e.blur();
            break;
          default:
            e = null;
        }
        return (
          t.removeAllRanges(),
          function () {
            "Caret" === t.type && t.removeAllRanges(),
              t.rangeCount ||
                n.forEach(function (e) {
                  t.addRange(e);
                }),
              e && e.focus();
          }
        );
      };
    },
    5054: function (t, e, n) {
      var r = n(8764).Buffer,
        o = n(4501).strict;
      t.exports = function (t) {
        if (o(t)) {
          var e = r.from(t.buffer);
          return t.byteLength !== t.buffer.byteLength && (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)), e;
        }
        return r.from(t);
      };
    },
  },
]);
