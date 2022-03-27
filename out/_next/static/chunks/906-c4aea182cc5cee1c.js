(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [906],
  {
    8794: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return n;
        },
      });
      const n = "bignumber/5.6.0";
    },
    2593: function (t, e, r) {
      "use strict";
      r.d(e, {
        Zm: function () {
          return f;
        },
        O$: function () {
          return p;
        },
        g$: function () {
          return w;
        },
      });
      var n = r(3550),
        i = r.n(n),
        o = r(6441),
        s = r(1581),
        a = r(8794),
        u = i().BN;
      const h = new s.Yd(a.i),
        l = {},
        c = 9007199254740991;
      function f(t) {
        return (
          null != t &&
          (p.isBigNumber(t) ||
            ("number" === typeof t && t % 1 === 0) ||
            ("string" === typeof t && !!t.match(/^-?[0-9]+$/)) ||
            (0, o.A7)(t) ||
            "bigint" === typeof t ||
            (0, o._t)(t))
        );
      }
      let d = !1;
      class p {
        constructor(t, e) {
          h.checkNew(new.target, p),
            t !== l &&
              h.throwError("cannot call constructor directly; use BigNumber.from", s.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "new (BigNumber)",
              }),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(t) {
          return g(v(this).fromTwos(t));
        }
        toTwos(t) {
          return g(v(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0] ? p.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return g(v(this).add(v(t)));
        }
        sub(t) {
          return g(v(this).sub(v(t)));
        }
        div(t) {
          return p.from(t).isZero() && y("division-by-zero", "div"), g(v(this).div(v(t)));
        }
        mul(t) {
          return g(v(this).mul(v(t)));
        }
        mod(t) {
          const e = v(t);
          return e.isNeg() && y("division-by-zero", "mod"), g(v(this).umod(e));
        }
        pow(t) {
          const e = v(t);
          return e.isNeg() && y("negative-power", "pow"), g(v(this).pow(e));
        }
        and(t) {
          const e = v(t);
          return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "and"), g(v(this).and(e));
        }
        or(t) {
          const e = v(t);
          return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "or"), g(v(this).or(e));
        }
        xor(t) {
          const e = v(t);
          return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "xor"), g(v(this).xor(e));
        }
        mask(t) {
          return (this.isNegative() || t < 0) && y("negative-width", "mask"), g(v(this).maskn(t));
        }
        shl(t) {
          return (this.isNegative() || t < 0) && y("negative-width", "shl"), g(v(this).shln(t));
        }
        shr(t) {
          return (this.isNegative() || t < 0) && y("negative-width", "shr"), g(v(this).shrn(t));
        }
        eq(t) {
          return v(this).eq(v(t));
        }
        lt(t) {
          return v(this).lt(v(t));
        }
        lte(t) {
          return v(this).lte(v(t));
        }
        gt(t) {
          return v(this).gt(v(t));
        }
        gte(t) {
          return v(this).gte(v(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return v(this).isZero();
        }
        toNumber() {
          try {
            return v(this).toNumber();
          } catch (t) {
            y("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return h.throwError("this platform does not support BigInt", s.Yd.errors.UNSUPPORTED_OPERATION, {
            value: this.toString(),
          });
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? d || ((d = !0), h.warn("BigNumber.toString does not accept any parameters; base-10 is assumed"))
                : 16 === arguments[0]
                ? h.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    s.Yd.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : h.throwError("BigNumber.toString does not accept parameters", s.Yd.errors.UNEXPECTED_ARGUMENT, {})),
            v(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof p) return t;
          if ("string" === typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new p(l, m(t))
              : t.match(/^-?[0-9]+$/)
              ? new p(l, m(new u(t)))
              : h.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && y("underflow", "BigNumber.from", t),
              (t >= c || t <= -c) && y("overflow", "BigNumber.from", t),
              p.from(String(t))
            );
          const e = t;
          if ("bigint" === typeof e) return p.from(e.toString());
          if ((0, o._t)(e)) return p.from((0, o.Dv)(e));
          if (e)
            if (e.toHexString) {
              const t = e.toHexString();
              if ("string" === typeof t) return p.from(t);
            } else {
              let t = e._hex;
              if (
                (null == t && "BigNumber" === e.type && (t = e.hex),
                "string" === typeof t && ((0, o.A7)(t) || ("-" === t[0] && (0, o.A7)(t.substring(1)))))
              )
                return p.from(t);
            }
          return h.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber);
        }
      }
      function m(t) {
        if ("string" !== typeof t) return m(t.toString(16));
        if ("-" === t[0])
          return (
            "-" === (t = t.substring(1))[0] && h.throwArgumentError("invalid hex", "value", t),
            "0x00" === (t = m(t)) ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t)) return "0x00";
        for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4); )
          t = "0x" + t.substring(4);
        return t;
      }
      function g(t) {
        return p.from(m(t));
      }
      function v(t) {
        const e = p.from(t).toHexString();
        return "-" === e[0] ? new u("-" + e.substring(3), 16) : new u(e.substring(2), 16);
      }
      function y(t, e, r) {
        const n = { fault: t, operation: e };
        return null != r && (n.value = r), h.throwError(t, s.Yd.errors.NUMERIC_FAULT, n);
      }
      function w(t) {
        return new u(t, 36).toString(16);
      }
    },
    6441: function (t, e, r) {
      "use strict";
      r.d(e, {
        lE: function () {
          return h;
        },
        zo: function () {
          return l;
        },
        xs: function () {
          return v;
        },
        E1: function () {
          return m;
        },
        p3: function () {
          return g;
        },
        $P: function () {
          return y;
        },
        $m: function () {
          return w;
        },
        Dv: function () {
          return p;
        },
        _t: function () {
          return u;
        },
        Zq: function () {
          return s;
        },
        A7: function () {
          return f;
        },
        N: function () {
          return b;
        },
        G1: function () {
          return c;
        },
      });
      const n = new (r(1581).Yd)("bytes/5.6.1");
      function i(t) {
        return !!t.toHexString;
      }
      function o(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function s(t) {
        return (f(t) && !(t.length % 2)) || u(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function u(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function h(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          n.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === e.length && e.push(0), o(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t),
          i(t) && (t = t.toHexString()),
          f(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
              ? (r += "0")
              : n.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16));
          return o(new Uint8Array(i));
        }
        return u(t) ? o(new Uint8Array(t)) : n.throwArgumentError("invalid arrayify value", "value", t);
      }
      function l(t) {
        const e = t.map((t) => h(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          n = new Uint8Array(r);
        return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), o(n);
      }
      function c(t) {
        let e = h(t);
        if (0 === e.length) return e;
        let r = 0;
        for (; r < e.length && 0 === e[r]; ) r++;
        return r && (e = e.slice(r)), e;
      }
      function f(t, e) {
        return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e);
      }
      const d = "0123456789abcdef";
      function p(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          n.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          for (; t; ) (e = d[15 & t] + e), (t = Math.floor(t / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if ((e.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), i(t)))
          return t.toHexString();
        if (f(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                ? (t += "0")
                : n.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (u(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e += d[(240 & n) >> 4] + d[15 & n];
          }
          return e;
        }
        return n.throwArgumentError("invalid hexlify value", "value", t);
      }
      function m(t) {
        if ("string" !== typeof t) t = p(t);
        else if (!f(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function g(t, e, r) {
        return (
          "string" !== typeof t
            ? (t = p(t))
            : (!f(t) || t.length % 2) && n.throwArgumentError("invalid hexData", "value", t),
          (e = 2 + 2 * e),
          null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        );
      }
      function v(t) {
        let e = "0x";
        return (
          t.forEach((t) => {
            e += p(t).substring(2);
          }),
          e
        );
      }
      function y(t) {
        const e = (function (t) {
          "string" !== typeof t && (t = p(t));
          f(t) || n.throwArgumentError("invalid hex string", "value", t);
          t = t.substring(2);
          let e = 0;
          for (; e < t.length && "0" === t[e]; ) e++;
          return "0x" + t.substring(e);
        })(p(t, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function w(t, e) {
        for (
          "string" !== typeof t ? (t = p(t)) : f(t) || n.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * e + 2 && n.throwArgumentError("value out of range", "value", arguments[1]);
          t.length < 2 * e + 2;

        )
          t = "0x0" + t.substring(2);
        return t;
      }
      function b(t) {
        const e = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
        if (s(t)) {
          let r = h(t);
          64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)), (r[32] &= 127), (e.r = p(r.slice(0, 32))), (e.s = p(r.slice(32, 64))))
            : 65 === r.length
            ? ((e.r = p(r.slice(0, 32))), (e.s = p(r.slice(32, 64))), (e.v = r[64]))
            : n.throwArgumentError("invalid signature string", "signature", t),
            e.v < 27 &&
              (0 === e.v || 1 === e.v ? (e.v += 27) : n.throwArgumentError("signature invalid v byte", "signature", t)),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = p(r.slice(32, 64)));
        } else {
          if (
            ((e.r = t.r), (e.s = t.s), (e.v = t.v), (e.recoveryParam = t.recoveryParam), (e._vs = t._vs), null != e._vs)
          ) {
            const r = (function (t, e) {
              (t = h(t)).length > e && n.throwArgumentError("value out of range", "value", arguments[0]);
              const r = new Uint8Array(e);
              return r.set(t, e - t.length), o(r);
            })(h(e._vs), 32);
            e._vs = p(r);
            const i = r[0] >= 128 ? 1 : 0;
            null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t),
              (r[0] &= 127);
            const s = p(r);
            null == e.s ? (e.s = s) : e.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", t);
          }
          if (null == e.recoveryParam)
            null == e.v
              ? n.throwArgumentError("signature missing v and recoveryParam", "signature", t)
              : 0 === e.v || 1 === e.v
              ? (e.recoveryParam = e.v)
              : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r && n.throwArgumentError("signature recoveryParam mismatch v", "signature", t);
          }
          null != e.r && f(e.r)
            ? (e.r = w(e.r, 32))
            : n.throwArgumentError("signature missing or invalid r", "signature", t),
            null != e.s && f(e.s)
              ? (e.s = w(e.s, 32))
              : n.throwArgumentError("signature missing or invalid s", "signature", t);
          const r = h(e.s);
          r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128);
          const i = p(r);
          e._vs && (f(e._vs) || n.throwArgumentError("signature invalid _vs", "signature", t), (e._vs = w(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i && n.throwArgumentError("signature _vs mismatch v and s", "signature", t);
        }
        return (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e;
      }
    },
    8197: function (t, e, r) {
      "use strict";
      r.d(e, {
        w: function () {
          return s;
        },
      });
      var n = r(1094),
        i = r.n(n),
        o = r(6441);
      function s(t) {
        return "0x" + i().keccak_256((0, o.lE)(t));
      }
    },
    1581: function (t, e, r) {
      "use strict";
      r.d(e, {
        Yd: function () {
          return f;
        },
      });
      let n = !1,
        i = !1;
      const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = o.default,
        a = null;
      const u = (function () {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e)) throw new Error("bad normalize");
              } catch (r) {
                t.push(e);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      })();
      var h, l;
      !(function (t) {
        (t.DEBUG = "DEBUG"), (t.INFO = "INFO"), (t.WARNING = "WARNING"), (t.ERROR = "ERROR"), (t.OFF = "OFF");
      })(h || (h = {})),
        (function (t) {
          (t.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (t.NETWORK_ERROR = "NETWORK_ERROR"),
            (t.SERVER_ERROR = "SERVER_ERROR"),
            (t.TIMEOUT = "TIMEOUT"),
            (t.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (t.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (t.MISSING_NEW = "MISSING_NEW"),
            (t.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (t.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (t.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (t.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED");
        })(l || (l = {}));
      const c = "0123456789abcdef";
      class f {
        constructor(t) {
          Object.defineProperty(this, "version", { enumerable: !0, value: t, writable: !1 });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          null == o[r] && this.throwArgumentError("invalid log level name", "logLevel", t),
            s > o[r] || console.log.apply(console, e);
        }
        debug(...t) {
          this._log(f.levels.DEBUG, t);
        }
        info(...t) {
          this._log(f.levels.INFO, t);
        }
        warn(...t) {
          this._log(f.levels.WARNING, t);
        }
        makeError(t, e, r) {
          if (i) return this.makeError("censored error", e, {});
          e || (e = f.errors.UNKNOWN_ERROR), r || (r = {});
          const n = [];
          Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++) (r += c[e[t] >> 4]), (r += c[15 & e[t]]);
                n.push(t + "=Uint8Array(0x" + r + ")");
              } else n.push(t + "=" + JSON.stringify(e));
            } catch (a) {
              n.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const o = t;
          let s = "";
          switch (e) {
            case l.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case l.CALL_EXCEPTION:
            case l.INSUFFICIENT_FUNDS:
            case l.MISSING_NEW:
            case l.NONCE_EXPIRED:
            case l.REPLACEMENT_UNDERPRICED:
            case l.TRANSACTION_REPLACED:
            case l.UNPREDICTABLE_GAS_LIMIT:
              s = e;
          }
          s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (t += " (" + n.join(", ") + ")");
          const a = new Error(t);
          return (
            (a.reason = o),
            (a.code = e),
            Object.keys(r).forEach(function (t) {
              a[t] = r[t];
            }),
            a
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, f.errors.INVALID_ARGUMENT, { argument: e, value: r });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
          null == t && (t = "platform missing String.prototype.normalize"),
            u &&
              this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
                operation: "String.prototype.normalize",
                form: u,
              });
        }
        checkSafeUint53(t, e) {
          "number" === typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          (r = r ? ": " + r : ""),
            t < e && this.throwError("missing argument" + r, f.errors.MISSING_ARGUMENT, { count: t, expectedCount: e }),
            t > e &&
              this.throwError("too many arguments" + r, f.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: e });
        }
        checkNew(t, e) {
          (t !== Object && null != t) || this.throwError("missing new", f.errors.MISSING_NEW, { name: e.name });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class",
                f.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" }
              )
            : (t !== Object && null != t) || this.throwError("missing new", f.errors.MISSING_NEW, { name: e.name });
        }
        static globalLogger() {
          return a || (a = new f("logger/5.6.0")), a;
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship",
              }),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
              operation: "setCensorship",
            });
          }
          (i = !!t), (n = !!e);
        }
        static setLogLevel(t) {
          const e = o[t.toLowerCase()];
          null != e ? (s = e) : f.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new f(t);
        }
      }
      (f.errors = l), (f.levels = h);
    },
    4779: function (t, e, r) {
      "use strict";
      r.d(e, {
        Q: function () {
          return Hr;
        },
      });
      var n = r(1581);
      var i = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const o = new n.Yd("properties/5.6.0");
      function s(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function a(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function u(t) {
        return i(this, void 0, void 0, function* () {
          const e = Object.keys(t).map((e) => {
            const r = t[e];
            return Promise.resolve(r).then((t) => ({ key: e, value: t }));
          });
          return (yield Promise.all(e)).reduce((t, e) => ((t[e.key] = e.value), t), {});
        });
      }
      function h(t) {
        const e = {};
        for (const r in t) e[r] = t[r];
        return e;
      }
      const l = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
      function c(t) {
        if (void 0 === t || null === t || l[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const r = Object.keys(t);
          for (let n = 0; n < r.length; n++) {
            let i = null;
            try {
              i = t[r[n]];
            } catch (e) {
              continue;
            }
            if (!c(i)) return !1;
          }
          return !0;
        }
        return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function f(t) {
        if (c(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => d(t)));
        if ("object" === typeof t) {
          const e = {};
          for (const r in t) {
            const n = t[r];
            void 0 !== n && s(e, r, d(n));
          }
          return e;
        }
        return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function d(t) {
        return f(t);
      }
      const p = "providers/5.6.2";
      var m = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const g = new n.Yd("abstract-signer/5.6.0"),
        v = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        y = [n.Yd.errors.INSUFFICIENT_FUNDS, n.Yd.errors.NONCE_EXPIRED, n.Yd.errors.REPLACEMENT_UNDERPRICED];
      class w {
        constructor() {
          g.checkAbstract(new.target, w), s(this, "_isSigner", !0);
        }
        getBalance(t) {
          return m(this, void 0, void 0, function* () {
            return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t);
          });
        }
        getTransactionCount(t) {
          return m(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
            );
          });
        }
        estimateGas(t) {
          return m(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const e = yield u(this.checkTransaction(t));
            return yield this.provider.estimateGas(e);
          });
        }
        call(t, e) {
          return m(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const r = yield u(this.checkTransaction(t));
            return yield this.provider.call(r, e);
          });
        }
        sendTransaction(t) {
          return m(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const e = yield this.populateTransaction(t),
              r = yield this.signTransaction(e);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return m(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            return (yield this.provider.getNetwork()).chainId;
          });
        }
        getGasPrice() {
          return m(this, void 0, void 0, function* () {
            return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
          });
        }
        getFeeData() {
          return m(this, void 0, void 0, function* () {
            return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
          });
        }
        resolveName(t) {
          return m(this, void 0, void 0, function* () {
            return this._checkProvider("resolveName"), yield this.provider.resolveName(t);
          });
        }
        checkTransaction(t) {
          for (const r in t)
            -1 === v.indexOf(r) && g.throwArgumentError("invalid transaction key: " + r, "transaction", t);
          const e = h(t);
          return (
            null == e.from
              ? (e.from = this.getAddress())
              : (e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(
                  (e) => (
                    e[0].toLowerCase() !== e[1].toLowerCase() &&
                      g.throwArgumentError("from address mismatch", "transaction", t),
                    e[0]
                  )
                )),
            e
          );
        }
        populateTransaction(t) {
          return m(this, void 0, void 0, function* () {
            const e = yield u(this.checkTransaction(t));
            null != e.to &&
              ((e.to = Promise.resolve(e.to).then((t) =>
                m(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  const e = yield this.resolveName(t);
                  return null == e && g.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e;
                })
              )),
              e.to.catch((t) => {}));
            const r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
            if (
              (null == e.gasPrice || (2 !== e.type && !r)
                ? (0 !== e.type && 1 !== e.type) ||
                  !r ||
                  g.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    t
                  )
                : g.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t),
              (2 !== e.type && null != e.type) || null == e.maxFeePerGas || null == e.maxPriorityFeePerGas)
            )
              if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice());
              else {
                const t = yield this.getFeeData();
                if (null == e.type)
                  if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                    if (((e.type = 2), null != e.gasPrice)) {
                      const t = e.gasPrice;
                      delete e.gasPrice, (e.maxFeePerGas = t), (e.maxPriorityFeePerGas = t);
                    } else
                      null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                        null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                  else
                    null != t.gasPrice
                      ? (r &&
                          g.throwError("network does not support EIP-1559", n.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "populateTransaction",
                          }),
                        null == e.gasPrice && (e.gasPrice = t.gasPrice),
                        (e.type = 0))
                      : g.throwError("failed to get consistent fee data", n.Yd.errors.UNSUPPORTED_OPERATION, {
                          operation: "signer.getFeeData",
                        });
                else
                  2 === e.type &&
                    (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                    null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
              }
            else e.type = 2;
            return (
              null == e.nonce && (e.nonce = this.getTransactionCount("pending")),
              null == e.gasLimit &&
                (e.gasLimit = this.estimateGas(e).catch((t) => {
                  if (y.indexOf(t.code) >= 0) throw t;
                  return g.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    n.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: t, tx: e }
                  );
                })),
              null == e.chainId
                ? (e.chainId = this.getChainId())
                : (e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(
                    (e) => (
                      0 !== e[1] && e[0] !== e[1] && g.throwArgumentError("chainId address mismatch", "transaction", t),
                      e[0]
                    )
                  )),
              yield u(e)
            );
          });
        }
        _checkProvider(t) {
          this.provider ||
            g.throwError("missing provider", n.Yd.errors.UNSUPPORTED_OPERATION, { operation: t || "_checkProvider" });
        }
        static isSigner(t) {
          return !(!t || !t._isSigner);
        }
      }
      var b = r(2593),
        _ = r(6441),
        E = r(8197);
      const A = new n.Yd("rlp/5.6.0");
      function N(t) {
        const e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      function k(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function M(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (
            (t.forEach(function (t) {
              e = e.concat(M(t));
            }),
            e.length <= 55)
          )
            return e.unshift(192 + e.length), e;
          const r = N(e.length);
          return r.unshift(247 + r.length), r.concat(e);
        }
        (0, _.Zq)(t) || A.throwArgumentError("RLP object must be BytesLike", "object", t);
        const e = Array.prototype.slice.call((0, _.lE)(t));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return e.unshift(128 + e.length), e;
        const r = N(e.length);
        return r.unshift(183 + r.length), r.concat(e);
      }
      function P(t) {
        return (0, _.Dv)(M(t));
      }
      function x(t, e, r, i) {
        const o = [];
        for (; r < e + 1 + i; ) {
          const s = I(t, r);
          o.push(s.result),
            (r += s.consumed) > e + 1 + i && A.throwError("child data too short", n.Yd.errors.BUFFER_OVERRUN, {});
        }
        return { consumed: 1 + i, result: o };
      }
      function I(t, e) {
        if ((0 === t.length && A.throwError("data too short", n.Yd.errors.BUFFER_OVERRUN, {}), t[e] >= 248)) {
          const r = t[e] - 247;
          e + 1 + r > t.length && A.throwError("data short segment too short", n.Yd.errors.BUFFER_OVERRUN, {});
          const i = k(t, e + 1, r);
          return (
            e + 1 + r + i > t.length && A.throwError("data long segment too short", n.Yd.errors.BUFFER_OVERRUN, {}),
            x(t, e, e + 1 + r, r + i)
          );
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return (
            e + 1 + r > t.length && A.throwError("data array too short", n.Yd.errors.BUFFER_OVERRUN, {}),
            x(t, e, e + 1, r)
          );
        }
        if (t[e] >= 184) {
          const r = t[e] - 183;
          e + 1 + r > t.length && A.throwError("data array too short", n.Yd.errors.BUFFER_OVERRUN, {});
          const i = k(t, e + 1, r);
          e + 1 + r + i > t.length && A.throwError("data array too short", n.Yd.errors.BUFFER_OVERRUN, {});
          return { consumed: 1 + r + i, result: (0, _.Dv)(t.slice(e + 1 + r, e + 1 + r + i)) };
        }
        if (t[e] >= 128) {
          const r = t[e] - 128;
          e + 1 + r > t.length && A.throwError("data too short", n.Yd.errors.BUFFER_OVERRUN, {});
          return { consumed: 1 + r, result: (0, _.Dv)(t.slice(e + 1, e + 1 + r)) };
        }
        return { consumed: 1, result: (0, _.Dv)(t[e]) };
      }
      function R(t) {
        const e = (0, _.lE)(t),
          r = I(e, 0);
        return r.consumed !== e.length && A.throwArgumentError("invalid rlp data", "data", t), r.result;
      }
      const S = new n.Yd("address/5.6.0");
      function O(t) {
        (0, _.A7)(t, 20) || S.throwArgumentError("invalid address", "address", t);
        const e = (t = t.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let i = 0; i < 40; i++) r[i] = e[i].charCodeAt(0);
        const n = (0, _.lE)((0, E.w)(r));
        for (let i = 0; i < 40; i += 2)
          n[i >> 1] >> 4 >= 8 && (e[i] = e[i].toUpperCase()),
            (15 & n[i >> 1]) >= 8 && (e[i + 1] = e[i + 1].toUpperCase());
        return "0x" + e.join("");
      }
      const C = {};
      for (let Vr = 0; Vr < 10; Vr++) C[String(Vr)] = String(Vr);
      for (let Vr = 0; Vr < 26; Vr++) C[String.fromCharCode(65 + Vr)] = String(10 + Vr);
      const T = Math.floor(((B = 9007199254740991), Math.log10 ? Math.log10(B) : Math.log(B) / Math.LN10));
      var B;
      function F(t) {
        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
          .split("")
          .map((t) => C[t])
          .join("");
        for (; e.length >= T; ) {
          let t = e.substring(0, T);
          e = (parseInt(t, 10) % 97) + e.substring(t.length);
        }
        let r = String(98 - (parseInt(e, 10) % 97));
        for (; r.length < 2; ) r = "0" + r;
        return r;
      }
      function L(t) {
        let e = null;
        if (
          ("string" !== typeof t && S.throwArgumentError("invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== t.substring(0, 2) && (t = "0x" + t),
            (e = O(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== t &&
              S.throwArgumentError("bad address checksum", "address", t);
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            t.substring(2, 4) !== F(t) && S.throwArgumentError("bad icap checksum", "address", t),
              e = (0, b.g$)(t.substring(4));
            e.length < 40;

          )
            e = "0" + e;
          e = O("0x" + e);
        } else S.throwArgumentError("invalid address", "address", t);
        return e;
      }
      const U = "hash/5.6.0",
        D = new n.Yd("strings/5.6.0");
      var j, q;
      function z(t, e, r, n, i) {
        if (t === q.BAD_PREFIX || t === q.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 === 2; n++) t++;
          return t;
        }
        return t === q.OVERRUN ? r.length - e - 1 : 0;
      }
      !(function (t) {
        (t.current = ""), (t.NFC = "NFC"), (t.NFD = "NFD"), (t.NFKC = "NFKC"), (t.NFKD = "NFKD");
      })(j || (j = {})),
        (function (t) {
          (t.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (t.BAD_PREFIX = "bad codepoint prefix"),
            (t.OVERRUN = "string overrun"),
            (t.MISSING_CONTINUE = "missing continuation byte"),
            (t.OUT_OF_RANGE = "out of UTF-8 range"),
            (t.UTF16_SURROGATE = "UTF-16 surrogate"),
            (t.OVERLONG = "overlong representation");
        })(q || (q = {}));
      const $ = Object.freeze({
        error: function (t, e, r, n, i) {
          return D.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r);
        },
        ignore: z,
        replace: function (t, e, r, n, i) {
          return t === q.OVERLONG ? (n.push(i), 0) : (n.push(65533), z(t, e, r));
        },
      });
      function G(t, e) {
        null == e && (e = $.error), (t = (0, _.lE)(t));
        const r = [];
        let n = 0;
        for (; n < t.length; ) {
          const i = t[n++];
          if (i >> 7 === 0) {
            r.push(i);
            continue;
          }
          let o = null,
            s = null;
          if (192 === (224 & i)) (o = 1), (s = 127);
          else if (224 === (240 & i)) (o = 2), (s = 2047);
          else {
            if (240 !== (248 & i)) {
              n += e(128 === (192 & i) ? q.UNEXPECTED_CONTINUE : q.BAD_PREFIX, n - 1, t, r);
              continue;
            }
            (o = 3), (s = 65535);
          }
          if (n - 1 + o >= t.length) {
            n += e(q.OVERRUN, n - 1, t, r);
            continue;
          }
          let a = i & ((1 << (8 - o - 1)) - 1);
          for (let u = 0; u < o; u++) {
            let i = t[n];
            if (128 != (192 & i)) {
              (n += e(q.MISSING_CONTINUE, n, t, r)), (a = null);
              break;
            }
            (a = (a << 6) | (63 & i)), n++;
          }
          null !== a &&
            (a > 1114111
              ? (n += e(q.OUT_OF_RANGE, n - 1 - o, t, r, a))
              : a >= 55296 && a <= 57343
              ? (n += e(q.UTF16_SURROGATE, n - 1 - o, t, r, a))
              : a <= s
              ? (n += e(q.OVERLONG, n - 1 - o, t, r, a))
              : r.push(a));
        }
        return r;
      }
      function Y(t, e = j.current) {
        e != j.current && (D.checkNormalize(), (t = t.normalize(e)));
        let r = [];
        for (let n = 0; n < t.length; n++) {
          const e = t.charCodeAt(n);
          if (e < 128) r.push(e);
          else if (e < 2048) r.push((e >> 6) | 192), r.push((63 & e) | 128);
          else if (55296 == (64512 & e)) {
            n++;
            const i = t.charCodeAt(n);
            if (n >= t.length || 56320 !== (64512 & i)) throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & e) << 10) + (1023 & i);
            r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128);
          } else r.push((e >> 12) | 224), r.push(((e >> 6) & 63) | 128), r.push((63 & e) | 128);
        }
        return (0, _.lE)(r);
      }
      function H(t) {
        return t
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536), String.fromCharCode(55296 + ((t >> 10) & 1023), 56320 + (1023 & t)))
          )
          .join("");
      }
      function V(t, e) {
        return H(G(t, e));
      }
      function W(t, e = j.current) {
        return G(Y(t, e));
      }
      function K(t) {
        return (0, E.w)(Y(t));
      }
      var J = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const X = new n.Yd(U),
        Z = new Uint8Array(32);
      Z.fill(0);
      const Q = b.O$.from(-1),
        tt = b.O$.from(0),
        et = b.O$.from(1),
        rt = b.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      const nt = (0, _.$m)(et.toHexString(), 32),
        it = (0, _.$m)(tt.toHexString(), 32),
        ot = { name: "string", version: "string", chainId: "uint256", verifyingContract: "address", salt: "bytes32" },
        st = ["name", "version", "chainId", "verifyingContract", "salt"];
      function at(t) {
        return function (e) {
          return (
            "string" !== typeof e &&
              X.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e),
            e
          );
        };
      }
      const ut = {
        name: at("name"),
        version: at("version"),
        chainId: function (t) {
          try {
            return b.O$.from(t).toString();
          } catch (e) {}
          return X.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t);
        },
        verifyingContract: function (t) {
          try {
            return L(t).toLowerCase();
          } catch (e) {}
          return X.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t);
        },
        salt: function (t) {
          try {
            const e = (0, _.lE)(t);
            if (32 !== e.length) throw new Error("bad length");
            return (0, _.Dv)(e);
          } catch (e) {}
          return X.throwArgumentError('invalid domain value "salt"', "domain.salt", t);
        },
      };
      function ht(t) {
        {
          const e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            const r = "" === e[1],
              n = parseInt(e[2] || "256");
            (n % 8 !== 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
              X.throwArgumentError("invalid numeric width", "type", t);
            const i = rt.mask(r ? n - 1 : n),
              o = r ? i.add(et).mul(Q) : tt;
            return function (e) {
              const r = b.O$.from(e);
              return (
                (r.lt(o) || r.gt(i)) && X.throwArgumentError(`value out-of-bounds for ${t}`, "value", e),
                (0, _.$m)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          const e = t.match(/^bytes(\d+)$/);
          if (e) {
            const r = parseInt(e[1]);
            return (
              (0 === r || r > 32 || e[1] !== String(r)) && X.throwArgumentError("invalid bytes width", "type", t),
              function (e) {
                return (
                  (0, _.lE)(e).length !== r && X.throwArgumentError(`invalid length for ${t}`, "value", e),
                  (function (t) {
                    const e = (0, _.lE)(t),
                      r = e.length % 32;
                    return r ? (0, _.xs)([e, Z.slice(r)]) : (0, _.Dv)(e);
                  })(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, _.$m)(L(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? nt : it;
            };
          case "bytes":
            return function (t) {
              return (0, E.w)(t);
            };
          case "string":
            return function (t) {
              return K(t);
            };
        }
        return null;
      }
      function lt(t, e) {
        return `${t}(${e.map(({ name: t, type: e }) => e + " " + t).join(",")})`;
      }
      class ct {
        constructor(t) {
          s(this, "types", Object.freeze(d(t))), s(this, "_encoderCache", {}), s(this, "_types", {});
          const e = {},
            r = {},
            n = {};
          Object.keys(t).forEach((t) => {
            (e[t] = {}), (r[t] = []), (n[t] = {});
          });
          for (const o in t) {
            const n = {};
            t[o].forEach((i) => {
              n[i.name] &&
                X.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(o)}`,
                  "types",
                  t
                ),
                (n[i.name] = !0);
              const s = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === o && X.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t);
              ht(s) ||
                (r[s] || X.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", t),
                r[s].push(o),
                (e[o][s] = !0));
            });
          }
          const i = Object.keys(r).filter((t) => 0 === r[t].length);
          0 === i.length
            ? X.throwArgumentError("missing primary type", "types", t)
            : i.length > 1 &&
              X.throwArgumentError(
                `ambiguous primary types or unused types: ${i.map((t) => JSON.stringify(t)).join(", ")}`,
                "types",
                t
              ),
            s(this, "primaryType", i[0]),
            (function i(o, s) {
              s[o] && X.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", t),
                (s[o] = !0),
                Object.keys(e[o]).forEach((t) => {
                  r[t] &&
                    (i(t, s),
                    Object.keys(s).forEach((e) => {
                      n[e][t] = !0;
                    }));
                }),
                delete s[o];
            })(this.primaryType, {});
          for (const o in n) {
            const e = Object.keys(n[o]);
            e.sort(), (this._types[o] = lt(o, t[o]) + e.map((e) => lt(e, t[e])).join(""));
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t];
          return e || (e = this._encoderCache[t] = this._getEncoder(t)), e;
        }
        _getEncoder(t) {
          {
            const e = ht(t);
            if (e) return e;
          }
          const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            const t = e[1],
              r = this.getEncoder(t),
              n = parseInt(e[3]);
            return (e) => {
              n >= 0 &&
                e.length !== n &&
                X.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
              let i = e.map(r);
              return this._types[t] && (i = i.map(E.w)), (0, E.w)((0, _.xs)(i));
            };
          }
          const r = this.types[t];
          if (r) {
            const e = K(this._types[t]);
            return (t) => {
              const n = r.map(({ name: e, type: r }) => {
                const n = this.getEncoder(r)(t[e]);
                return this._types[r] ? (0, E.w)(n) : n;
              });
              return n.unshift(e), (0, _.xs)(n);
            };
          }
          return X.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        encodeType(t) {
          const e = this._types[t];
          return e || X.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), e;
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, E.w)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          if (ht(t)) return r(t, e);
          const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const t = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                e.length !== i &&
                X.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e),
              e.map((e) => this._visit(t, e, r))
            );
          }
          const i = this.types[t];
          return i
            ? i.reduce((t, { name: n, type: i }) => ((t[n] = this._visit(i, e[n], r)), t), {})
            : X.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new ct(t);
        }
        static getPrimaryType(t) {
          return ct.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return ct.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          const e = [];
          for (const r in t) {
            const n = ot[r];
            n || X.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t),
              e.push({ name: r, type: n });
          }
          return (
            e.sort((t, e) => st.indexOf(t.name) - st.indexOf(e.name)),
            ct.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, _.xs)(["0x1901", ct.hashDomain(t), ct.from(e).hash(r)]);
        }
        static hash(t, e, r) {
          return (0, E.w)(ct.encode(t, e, r));
        }
        static resolveNames(t, e, r, n) {
          return J(this, void 0, void 0, function* () {
            t = h(t);
            const i = {};
            t.verifyingContract && !(0, _.A7)(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
            const o = ct.from(e);
            o.visit(r, (t, e) => ("address" !== t || (0, _.A7)(e, 20) || (i[e] = "0x"), e));
            for (const t in i) i[t] = yield n(t);
            return (
              t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]),
              (r = o.visit(r, (t, e) => ("address" === t && i[e] ? i[e] : e))),
              { domain: t, value: r }
            );
          });
        }
        static getPayload(t, e, r) {
          ct.hashDomain(t);
          const n = {},
            i = [];
          st.forEach((e) => {
            const r = t[e];
            null != r && ((n[e] = ut[e](r)), i.push({ name: e, type: ot[e] }));
          });
          const o = ct.from(e),
            s = h(e);
          return (
            s.EIP712Domain
              ? X.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e)
              : (s.EIP712Domain = i),
            o.encode(r),
            {
              types: s,
              domain: n,
              primaryType: o.primaryType,
              message: o.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return (0, _.Dv)((0, _.lE)(e));
                if (t.match(/^u?int/)) return b.O$.from(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return "string" !== typeof e && X.throwArgumentError("invalid string", "value", e), e;
                }
                return X.throwArgumentError("unsupported type", "type", t);
              }),
            }
          );
        }
      }
      const ft = b.O$.from(0);
      var dt = r(3550),
        pt = r.n(dt),
        mt = r(3715),
        gt = r.n(mt);
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof r.g
        ? r.g
        : "undefined" !== typeof self && self;
      function vt(t, e, r) {
        return (
          (r = {
            path: e,
            exports: {},
            require: function (t, e) {
              return (function () {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
              })((void 0 === e || null === e) && r.path);
            },
          }),
          t(r, r.exports),
          r.exports
        );
      }
      var yt = wt;
      function wt(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      wt.equal = function (t, e, r) {
        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
      };
      var bt = vt(function (t, e) {
          var r = e;
          function n(t) {
            return 1 === t.length ? "0" + t : t;
          }
          function i(t) {
            for (var e = "", r = 0; r < t.length; r++) e += n(t[r].toString(16));
            return e;
          }
          (r.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" !== typeof t) {
              for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
              return r;
            }
            if ("hex" === e) {
              (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t);
              for (n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? r.push(o, s) : r.push(s);
              }
            return r;
          }),
            (r.zero2 = n),
            (r.toHex = i),
            (r.encode = function (t, e) {
              return "hex" === e ? i(t) : t;
            });
        }),
        _t = vt(function (t, e) {
          var r = e;
          (r.assert = yt),
            (r.toArray = bt.toArray),
            (r.zero2 = bt.zero2),
            (r.toHex = bt.toHex),
            (r.encode = bt.encode),
            (r.getNAF = function (t, e, r) {
              var n = new Array(Math.max(t.bitLength(), r) + 1);
              n.fill(0);
              for (var i = 1 << (e + 1), o = t.clone(), s = 0; s < n.length; s++) {
                var a,
                  u = o.andln(i - 1);
                o.isOdd() ? ((a = u > (i >> 1) - 1 ? (i >> 1) - u : u), o.isubn(a)) : (a = 0), (n[s] = a), o.iushrn(1);
              }
              return n;
            }),
            (r.getJSF = function (t, e) {
              var r = [[], []];
              (t = t.clone()), (e = e.clone());
              for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0; ) {
                var s,
                  a,
                  u = (t.andln(3) + i) & 3,
                  h = (e.andln(3) + o) & 3;
                3 === u && (u = -1),
                  3 === h && (h = -1),
                  (s = 0 === (1 & u) ? 0 : (3 !== (n = (t.andln(7) + i) & 7) && 5 !== n) || 2 !== h ? u : -u),
                  r[0].push(s),
                  (a = 0 === (1 & h) ? 0 : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== u ? h : -h),
                  r[1].push(a),
                  2 * i === s + 1 && (i = 1 - i),
                  2 * o === a + 1 && (o = 1 - o),
                  t.iushrn(1),
                  e.iushrn(1);
              }
              return r;
            }),
            (r.cachedProperty = function (t, e, r) {
              var n = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (r.parseBytes = function (t) {
              return "string" === typeof t ? r.toArray(t, "hex") : t;
            }),
            (r.intFromLE = function (t) {
              return new (pt())(t, "hex", "le");
            });
        }),
        Et = _t.getNAF,
        At = _t.getJSF,
        Nt = _t.assert;
      function kt(t, e) {
        (this.type = t),
          (this.p = new (pt())(e.p, 16)),
          (this.red = e.prime ? pt().red(e.prime) : pt().mont(this.p)),
          (this.zero = new (pt())(0).toRed(this.red)),
          (this.one = new (pt())(1).toRed(this.red)),
          (this.two = new (pt())(2).toRed(this.red)),
          (this.n = e.n && new (pt())(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? (this.redN = null) : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      var Mt = kt;
      function Pt(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (kt.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (kt.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (kt.prototype._fixedNafMul = function (t, e) {
          Nt(t.precomputed);
          var r = t._getDoubles(),
            n = Et(e, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
          i /= 3;
          var o,
            s,
            a = [];
          for (o = 0; o < n.length; o += r.step) {
            s = 0;
            for (var u = o + r.step - 1; u >= o; u--) s = (s << 1) + n[u];
            a.push(s);
          }
          for (var h = this.jpoint(null, null, null), l = this.jpoint(null, null, null), c = i; c > 0; c--) {
            for (o = 0; o < a.length; o++)
              (s = a[o]) === c ? (l = l.mixedAdd(r.points[o])) : s === -c && (l = l.mixedAdd(r.points[o].neg()));
            h = h.add(l);
          }
          return h.toP();
        }),
        (kt.prototype._wnafMul = function (t, e) {
          var r = 4,
            n = t._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points, o = Et(e, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
            if ((a >= 0 && u++, (s = s.dblp(u)), a < 0)) break;
            var h = o[a];
            Nt(0 !== h),
              (s =
                "affine" === t.type
                  ? h > 0
                    ? s.mixedAdd(i[(h - 1) >> 1])
                    : s.mixedAdd(i[(-h - 1) >> 1].neg())
                  : h > 0
                  ? s.add(i[(h - 1) >> 1])
                  : s.add(i[(-h - 1) >> 1].neg()));
          }
          return "affine" === t.type ? s.toP() : s;
        }),
        (kt.prototype._wnafMulAdd = function (t, e, r, n, i) {
          var o,
            s,
            a,
            u = this._wnafT1,
            h = this._wnafT2,
            l = this._wnafT3,
            c = 0;
          for (o = 0; o < n; o++) {
            var f = (a = e[o])._getNAFPoints(t);
            (u[o] = f.wnd), (h[o] = f.points);
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var d = o - 1,
              p = o;
            if (1 === u[d] && 1 === u[p]) {
              var m = [e[d], null, null, e[p]];
              0 === e[d].y.cmp(e[p].y)
                ? ((m[1] = e[d].add(e[p])), (m[2] = e[d].toJ().mixedAdd(e[p].neg())))
                : 0 === e[d].y.cmp(e[p].y.redNeg())
                ? ((m[1] = e[d].toJ().mixedAdd(e[p])), (m[2] = e[d].add(e[p].neg())))
                : ((m[1] = e[d].toJ().mixedAdd(e[p])), (m[2] = e[d].toJ().mixedAdd(e[p].neg())));
              var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = At(r[d], r[p]);
              for (c = Math.max(v[0].length, c), l[d] = new Array(c), l[p] = new Array(c), s = 0; s < c; s++) {
                var y = 0 | v[0][s],
                  w = 0 | v[1][s];
                (l[d][s] = g[3 * (y + 1) + (w + 1)]), (l[p][s] = 0), (h[d] = m);
              }
            } else
              (l[d] = Et(r[d], u[d], this._bitLength)),
                (l[p] = Et(r[p], u[p], this._bitLength)),
                (c = Math.max(l[d].length, c)),
                (c = Math.max(l[p].length, c));
          }
          var b = this.jpoint(null, null, null),
            _ = this._wnafT4;
          for (o = c; o >= 0; o--) {
            for (var E = 0; o >= 0; ) {
              var A = !0;
              for (s = 0; s < n; s++) (_[s] = 0 | l[s][o]), 0 !== _[s] && (A = !1);
              if (!A) break;
              E++, o--;
            }
            if ((o >= 0 && E++, (b = b.dblp(E)), o < 0)) break;
            for (s = 0; s < n; s++) {
              var N = _[s];
              0 !== N &&
                (N > 0 ? (a = h[s][(N - 1) >> 1]) : N < 0 && (a = h[s][(-N - 1) >> 1].neg()),
                (b = "affine" === a.type ? b.mixedAdd(a) : b.add(a)));
            }
          }
          for (o = 0; o < n; o++) h[o] = null;
          return i ? b : b.toP();
        }),
        (kt.BasePoint = Pt),
        (Pt.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (Pt.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (kt.prototype.decodePoint = function (t, e) {
          t = _t.toArray(t, e);
          var r = this.p.byteLength();
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 === 2 * r)
            return (
              6 === t[0] ? Nt(t[t.length - 1] % 2 === 0) : 7 === t[0] && Nt(t[t.length - 1] % 2 === 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw new Error("Unknown point format");
        }),
        (Pt.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (Pt.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e));
        }),
        (Pt.prototype.encode = function (t, e) {
          return _t.encode(this._encode(e), t);
        }),
        (Pt.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (Pt.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step);
        }),
        (Pt.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl();
            r.push(n);
          }
          return { step: t, points: r };
        }),
        (Pt.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
          for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
            e[i] = e[i - 1].add(n);
          return { wnd: t, points: e };
        }),
        (Pt.prototype._getBeta = function () {
          return null;
        }),
        (Pt.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
      var xt = vt(function (t) {
          "function" === typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
                }
              });
        }),
        It = _t.assert;
      function Rt(t) {
        Mt.call(this, "short", t),
          (this.a = new (pt())(t.a, 16).toRed(this.red)),
          (this.b = new (pt())(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      xt(Rt, Mt);
      var St = Rt;
      function Ot(t, e, r, n) {
        Mt.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (pt())(e, 16)),
              (this.y = new (pt())(r, 16)),
              n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function Ct(t, e, r, n) {
        Mt.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new (pt())(0)))
            : ((this.x = new (pt())(e, 16)), (this.y = new (pt())(r, 16)), (this.z = new (pt())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      (Rt.prototype._getEndomorphism = function (t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var e, r;
          if (t.beta) e = new (pt())(t.beta, 16).toRed(this.red);
          else {
            var n = this._getEndoRoots(this.p);
            e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (t.lambda) r = new (pt())(t.lambda, 16);
          else {
            var i = this._getEndoRoots(this.n);
            0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(e))
              ? (r = i[0])
              : ((r = i[1]), It(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
          }
          return {
            beta: e,
            lambda: r,
            basis: t.basis
              ? t.basis.map(function (t) {
                  return { a: new (pt())(t.a, 16), b: new (pt())(t.b, 16) };
                })
              : this._getEndoBasis(r),
          };
        }
      }),
        (Rt.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : pt().mont(t),
            r = new (pt())(2).toRed(e).redInvm(),
            n = r.redNeg(),
            i = new (pt())(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()];
        }),
        (Rt.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              h,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              c = t,
              f = this.n.clone(),
              d = new (pt())(1),
              p = new (pt())(0),
              m = new (pt())(0),
              g = new (pt())(1),
              v = 0;
            0 !== c.cmpn(0);

          ) {
            var y = f.div(c);
            (u = f.sub(y.mul(c))), (h = m.sub(y.mul(d)));
            var w = g.sub(y.mul(p));
            if (!n && u.cmp(l) < 0) (e = a.neg()), (r = d), (n = u.neg()), (i = h);
            else if (n && 2 === ++v) break;
            (a = u), (f = c), (c = u), (m = d), (d = h), (g = p), (p = w);
          }
          (o = u.neg()), (s = h);
          var b = n.sqr().add(i.sqr());
          return (
            o.sqr().add(s.sqr()).cmp(b) >= 0 && ((o = e), (s = r)),
            n.negative && ((n = n.neg()), (i = i.neg())),
            o.negative && ((o = o.neg()), (s = s.neg())),
            [
              { a: n, b: i },
              { a: o, b: s },
            ]
          );
        }),
        (Rt.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            u = i.mul(r.b),
            h = o.mul(n.b);
          return { k1: t.sub(s).sub(a), k2: u.add(h).neg() };
        }),
        (Rt.prototype.pointFromX = function (t, e) {
          (t = new (pt())(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
          var i = n.fromRed().isOdd();
          return ((e && !i) || (!e && i)) && (n = n.redNeg()), this.point(t, n);
        }),
        (Rt.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (Rt.prototype._endoWnafMulAdd = function (t, e, r) {
          for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
            var s = this._endoSplit(e[o]),
              a = t[o],
              u = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (u = u.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = u),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2);
          }
          for (var h = this._wnafMulAdd(1, n, i, 2 * o, r), l = 0; l < 2 * o; l++) (n[l] = null), (i[l] = null);
          return h;
        }),
        xt(Ot, Mt.BasePoint),
        (Rt.prototype.point = function (t, e, r) {
          return new Ot(this, t, e, r);
        }),
        (Rt.prototype.pointFromJSON = function (t, e) {
          return Ot.fromJSON(this, t, e);
        }),
        (Ot.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (t) {
              var r = this.curve,
                n = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n) },
                });
            }
            return e;
          }
        }),
        (Ot.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (Ot.fromJSON = function (t, e, r) {
          "string" === typeof e && (e = JSON.parse(e));
          var n = t.point(e[0], e[1], r);
          if (!e[2]) return n;
          function i(e) {
            return t.point(e[0], e[1], r);
          }
          var o = e[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && { step: o.doubles.step, points: [n].concat(o.doubles.points.map(i)) },
              naf: o.naf && { wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i)) },
            }),
            n
          );
        }),
        (Ot.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
        }),
        (Ot.prototype.isInfinity = function () {
          return this.inf;
        }),
        (Ot.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t)) return this.curve.point(null, null);
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (Ot.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (Ot.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (Ot.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (Ot.prototype.mul = function (t) {
          return (
            (t = new (pt())(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (Ot.prototype.mulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (Ot.prototype.jmulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (Ot.prototype.eq = function (t) {
          return this === t || (this.inf === t.inf && (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))));
        }),
        (Ot.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) },
            };
          }
          return e;
        }),
        (Ot.prototype.toJ = function () {
          return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        xt(Ct, Mt.BasePoint),
        (Rt.prototype.jpoint = function (t, e, r) {
          return new Ct(this, t, e, r);
        }),
        (Ct.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t);
          return this.curve.point(r, n);
        }),
        (Ct.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (Ct.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            s = t.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            u = o.redSub(s);
          if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var h = a.redSqr(),
            l = h.redMul(a),
            c = n.redMul(h),
            f = u.redSqr().redIAdd(l).redISub(c).redISub(c),
            d = u.redMul(c.redISub(f)).redISub(o.redMul(l)),
            p = this.z.redMul(t.z).redMul(a);
          return this.curve.jpoint(f, d, p);
        }),
        (Ct.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o);
          if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var u = s.redSqr(),
            h = u.redMul(s),
            l = r.redMul(u),
            c = a.redSqr().redIAdd(h).redISub(l).redISub(l),
            f = a.redMul(l.redISub(c)).redISub(i.redMul(h)),
            d = this.z.redMul(s);
          return this.curve.jpoint(c, f, d);
        }),
        (Ct.prototype.dblp = function (t) {
          if (0 === t) return this;
          if (this.isInfinity()) return this;
          if (!t) return this.dbl();
          var e;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            u = a.redSqr().redSqr(),
            h = s.redAdd(s);
          for (e = 0; e < t; e++) {
            var l = o.redSqr(),
              c = h.redSqr(),
              f = c.redSqr(),
              d = l.redAdd(l).redIAdd(l).redIAdd(n.redMul(u)),
              p = o.redMul(c),
              m = d.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(m),
              v = d.redMul(g);
            v = v.redIAdd(v).redISub(f);
            var y = h.redMul(a);
            e + 1 < t && (u = u.redMul(f)), (o = m), (a = y), (h = v);
          }
          return this.curve.jpoint(o, h.redMul(i), a);
        }),
        (Ct.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (Ct.prototype._zeroDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              u = a.redSqr().redISub(s).redISub(s),
              h = o.redIAdd(o);
            (h = (h = h.redIAdd(h)).redIAdd(h)),
              (t = u),
              (e = a.redMul(s.redISub(u)).redISub(h)),
              (r = this.y.redAdd(this.y));
          } else {
            var l = this.x.redSqr(),
              c = this.y.redSqr(),
              f = c.redSqr(),
              d = this.x.redAdd(c).redSqr().redISub(l).redISub(f);
            d = d.redIAdd(d);
            var p = l.redAdd(l).redIAdd(l),
              m = p.redSqr(),
              g = f.redIAdd(f);
            (g = (g = g.redIAdd(g)).redIAdd(g)),
              (t = m.redISub(d).redISub(d)),
              (e = p.redMul(d.redISub(t)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (Ct.prototype._threeDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              u = a.redSqr().redISub(s).redISub(s);
            t = u;
            var h = o.redIAdd(o);
            (h = (h = h.redIAdd(h)).redIAdd(h)), (e = a.redMul(s.redISub(u)).redISub(h)), (r = this.y.redAdd(this.y));
          } else {
            var l = this.z.redSqr(),
              c = this.y.redSqr(),
              f = this.x.redMul(c),
              d = this.x.redSub(l).redMul(this.x.redAdd(l));
            d = d.redAdd(d).redIAdd(d);
            var p = f.redIAdd(f),
              m = (p = p.redIAdd(p)).redAdd(p);
            (t = d.redSqr().redISub(m)), (r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(l));
            var g = c.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)), (e = d.redMul(p.redISub(t)).redISub(g));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (Ct.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            s = r.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
            u = e.redAdd(e),
            h = (u = u.redIAdd(u)).redMul(s),
            l = a.redSqr().redISub(h.redAdd(h)),
            c = h.redISub(l),
            f = s.redSqr();
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var d = a.redMul(c).redISub(f),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(l, d, p);
        }),
        (Ct.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
            u = n.redIAdd(n);
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
          var h = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
            l = e.redMul(h);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var c = this.x.redMul(a).redISub(l);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var f = this.y.redMul(h.redMul(u.redISub(h)).redISub(s.redMul(a)));
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(c, f, d);
        }),
        (Ct.prototype.mul = function (t, e) {
          return (t = new (pt())(t, e)), this.curve._wnafMul(this, t);
        }),
        (Ct.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var n = e.redMul(this.z),
            i = r.redMul(t.z);
          return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
        }),
        (Ct.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (Ct.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (Ct.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var Tt = vt(function (t, e) {
          var r = e;
          (r.base = Mt), (r.short = St), (r.mont = null), (r.edwards = null);
        }),
        Bt = vt(function (t, e) {
          var r,
            n = e,
            i = _t.assert;
          function o(t) {
            "short" === t.type
              ? (this.curve = new Tt.short(t))
              : "edwards" === t.type
              ? (this.curve = new Tt.edwards(t))
              : (this.curve = new Tt.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              i(this.g.validate(), "Invalid curve"),
              i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function s(t, e) {
            Object.defineProperty(n, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var r = new o(e);
                return Object.defineProperty(n, t, { configurable: !0, enumerable: !0, value: r }), r;
              },
            });
          }
          (n.PresetCurve = o),
            s("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: gt().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            s("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: gt().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            s("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: gt().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            s("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: gt().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            s("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: gt().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            s("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: gt().sha256,
              gRed: !1,
              g: ["9"],
            }),
            s("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: gt().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch (a) {
            r = void 0;
          }
          s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: gt().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              { a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" },
              { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function Ft(t) {
        if (!(this instanceof Ft)) return new Ft(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = bt.toArray(t.entropy, t.entropyEnc || "hex"),
          r = bt.toArray(t.nonce, t.nonceEnc || "hex"),
          n = bt.toArray(t.pers, t.persEnc || "hex");
        yt(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
          this._init(e, r, n);
      }
      var Lt = Ft;
      (Ft.prototype._init = function (t, e, r) {
        var n = t.concat(e).concat(r);
        (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++) (this.K[i] = 0), (this.V[i] = 1);
        this._update(n), (this._reseed = 1), (this.reseedInterval = 281474976710656);
      }),
        (Ft.prototype._hmac = function () {
          return new (gt().hmac)(this.hash, this.K);
        }),
        (Ft.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac().update(this.V).update([1]).update(t).digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (Ft.prototype.reseed = function (t, e, r, n) {
          "string" !== typeof e && ((n = r), (r = e), (e = null)),
            (t = bt.toArray(t, e)),
            (r = bt.toArray(r, n)),
            yt(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (Ft.prototype.generate = function (t, e, r, n) {
          if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
          "string" !== typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = bt.toArray(r, n || "hex")), this._update(r));
          for (var i = []; i.length < t; ) (this.V = this._hmac().update(this.V).digest()), (i = i.concat(this.V));
          var o = i.slice(0, t);
          return this._update(r), this._reseed++, bt.encode(o, e);
        });
      var Ut = _t.assert;
      function Dt(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      var jt = Dt;
      (Dt.fromPublic = function (t, e, r) {
        return e instanceof Dt ? e : new Dt(t, { pub: e, pubEnc: r });
      }),
        (Dt.fromPrivate = function (t, e, r) {
          return e instanceof Dt ? e : new Dt(t, { priv: e, privEnc: r });
        }),
        (Dt.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (Dt.prototype.getPublic = function (t, e) {
          return (
            "string" === typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (Dt.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (Dt.prototype._importPrivate = function (t, e) {
          (this.priv = new (pt())(t, e || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (Dt.prototype._importPublic = function (t, e) {
          if (t.x || t.y)
            return (
              "mont" === this.ec.curve.type
                ? Ut(t.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type) ||
                  Ut(t.x && t.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            );
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (Dt.prototype.derive = function (t) {
          return t.validate() || Ut(t.validate(), "public point not validated"), t.mul(this.priv).getX();
        }),
        (Dt.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (Dt.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (Dt.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var qt = _t.assert;
      function zt(t, e) {
        if (t instanceof zt) return t;
        this._importDER(t, e) ||
          (qt(t.r && t.s, "Signature without r or s"),
          (this.r = new (pt())(t.r, 16)),
          (this.s = new (pt())(t.s, 16)),
          void 0 === t.recoveryParam ? (this.recoveryParam = null) : (this.recoveryParam = t.recoveryParam));
      }
      var $t = zt;
      function Gt() {
        this.place = 0;
      }
      function Yt(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for (var i = 0, o = 0, s = e.place; o < n; o++, s++) (i <<= 8), (i |= t[s]), (i >>>= 0);
        return !(i <= 127) && ((e.place = s), i);
      }
      function Ht(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; ) e++;
        return 0 === e ? t : t.slice(e);
      }
      function Vt(t, e) {
        if (e < 128) t.push(e);
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
          t.push(e);
        }
      }
      (zt.prototype._importDER = function (t, e) {
        t = _t.toArray(t, e);
        var r = new Gt();
        if (48 !== t[r.place++]) return !1;
        var n = Yt(t, r);
        if (!1 === n) return !1;
        if (n + r.place !== t.length) return !1;
        if (2 !== t[r.place++]) return !1;
        var i = Yt(t, r);
        if (!1 === i) return !1;
        var o = t.slice(r.place, i + r.place);
        if (((r.place += i), 2 !== t[r.place++])) return !1;
        var s = Yt(t, r);
        if (!1 === s) return !1;
        if (t.length !== s + r.place) return !1;
        var a = t.slice(r.place, s + r.place);
        if (0 === o[0]) {
          if (!(128 & o[1])) return !1;
          o = o.slice(1);
        }
        if (0 === a[0]) {
          if (!(128 & a[1])) return !1;
          a = a.slice(1);
        }
        return (this.r = new (pt())(o)), (this.s = new (pt())(a)), (this.recoveryParam = null), !0;
      }),
        (zt.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = Ht(e), r = Ht(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          Vt(n, e.length), (n = n.concat(e)).push(2), Vt(n, r.length);
          var i = n.concat(r),
            o = [48];
          return Vt(o, i.length), (o = o.concat(i)), _t.encode(o, t);
        });
      var Wt = function () {
          throw new Error("unsupported");
        },
        Kt = _t.assert;
      function Jt(t) {
        if (!(this instanceof Jt)) return new Jt(t);
        "string" === typeof t && (Kt(Object.prototype.hasOwnProperty.call(Bt, t), "Unknown curve " + t), (t = Bt[t])),
          t instanceof Bt.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      var Xt = Jt;
      (Jt.prototype.keyPair = function (t) {
        return new jt(this, t);
      }),
        (Jt.prototype.keyFromPrivate = function (t, e) {
          return jt.fromPrivate(this, t, e);
        }),
        (Jt.prototype.keyFromPublic = function (t, e) {
          return jt.fromPublic(this, t, e);
        }),
        (Jt.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new Lt({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || Wt(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new (pt())(2));
            ;

          ) {
            var i = new (pt())(e.generate(r));
            if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i);
          }
        }),
        (Jt.prototype._truncateToN = function (t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength();
          return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
        }),
        (Jt.prototype.sign = function (t, e, r, n) {
          "object" === typeof r && ((n = r), (r = null)),
            n || (n = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new (pt())(t, 16)));
          for (
            var i = this.n.byteLength(),
              o = e.getPrivate().toArray("be", i),
              s = t.toArray("be", i),
              a = new Lt({ hash: this.hash, entropy: o, nonce: s, pers: n.pers, persEnc: n.persEnc || "utf8" }),
              u = this.n.sub(new (pt())(1)),
              h = 0;
            ;
            h++
          ) {
            var l = n.k ? n.k(h) : new (pt())(a.generate(this.n.byteLength()));
            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(u) >= 0)) {
              var c = this.g.mul(l);
              if (!c.isInfinity()) {
                var f = c.getX(),
                  d = f.umod(this.n);
                if (0 !== d.cmpn(0)) {
                  var p = l.invm(this.n).mul(d.mul(e.getPrivate()).iadd(t));
                  if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                    var m = (c.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(d) ? 2 : 0);
                    return (
                      n.canonical && p.cmp(this.nh) > 0 && ((p = this.n.sub(p)), (m ^= 1)),
                      new $t({ r: d, s: p, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (Jt.prototype.verify = function (t, e, r, n) {
          (t = this._truncateToN(new (pt())(t, 16))), (r = this.keyFromPublic(r, n));
          var i = (e = new $t(e, "hex")).r,
            o = e.s;
          if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          var s,
            a = o.invm(this.n),
            u = a.mul(t).umod(this.n),
            h = a.mul(i).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(u, r.getPublic(), h)).isInfinity() && s.eqXToP(i)
            : !(s = this.g.mulAdd(u, r.getPublic(), h)).isInfinity() && 0 === s.getX().umod(this.n).cmp(i);
        }),
        (Jt.prototype.recoverPubKey = function (t, e, r, n) {
          Kt((3 & r) === r, "The recovery param is more than two bits"), (e = new $t(e, n));
          var i = this.n,
            o = new (pt())(t),
            s = e.r,
            a = e.s,
            u = 1 & r,
            h = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw new Error("Unable to find sencond key candinate");
          s = h ? this.curve.pointFromX(s.add(this.curve.n), u) : this.curve.pointFromX(s, u);
          var l = e.r.invm(i),
            c = i.sub(o).mul(l).umod(i),
            f = a.mul(l).umod(i);
          return this.g.mulAdd(c, s, f);
        }),
        (Jt.prototype.getKeyRecoveryParam = function (t, e, r, n) {
          if (null !== (e = new $t(e, n)).recoveryParam) return e.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var o;
            try {
              o = this.recoverPubKey(t, e, i);
            } catch (t) {
              continue;
            }
            if (o.eq(r)) return i;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var Zt = vt(function (t, e) {
        var r = e;
        (r.version = "6.5.4"),
          (r.utils = _t),
          (r.rand = function () {
            throw new Error("unsupported");
          }),
          (r.curve = Tt),
          (r.curves = Bt),
          (r.ec = Xt),
          (r.eddsa = null);
      }).ec;
      const Qt = new n.Yd("signing-key/5.6.0");
      let te = null;
      function ee() {
        return te || (te = new Zt("secp256k1")), te;
      }
      class re {
        constructor(t) {
          s(this, "curve", "secp256k1"), s(this, "privateKey", (0, _.Dv)(t));
          const e = ee().keyFromPrivate((0, _.lE)(this.privateKey));
          s(this, "publicKey", "0x" + e.getPublic(!1, "hex")),
            s(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")),
            s(this, "_isSigningKey", !0);
        }
        _addPoint(t) {
          const e = ee().keyFromPublic((0, _.lE)(this.publicKey)),
            r = ee().keyFromPublic((0, _.lE)(t));
          return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          const e = ee().keyFromPrivate((0, _.lE)(this.privateKey)),
            r = (0, _.lE)(t);
          32 !== r.length && Qt.throwArgumentError("bad digest length", "digest", t);
          const n = e.sign(r, { canonical: !0 });
          return (0, _.N)({
            recoveryParam: n.recoveryParam,
            r: (0, _.$m)("0x" + n.r.toString(16), 32),
            s: (0, _.$m)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          const e = ee().keyFromPrivate((0, _.lE)(this.privateKey)),
            r = ee().keyFromPublic((0, _.lE)(ne(t)));
          return (0, _.$m)("0x" + e.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function ne(t, e) {
        const r = (0, _.lE)(t);
        if (32 === r.length) {
          const t = new re(r);
          return e ? "0x" + ee().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey;
        }
        return 33 === r.length
          ? e
            ? (0, _.Dv)(r)
            : "0x" + ee().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
          ? e
            ? "0x" + ee().keyFromPublic(r).getPublic(!0, "hex")
            : (0, _.Dv)(r)
          : Qt.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
      }
      const ie = new n.Yd("transactions/5.6.0");
      var oe;
      function se(t) {
        return "0x" === t ? null : L(t);
      }
      function ae(t) {
        return "0x" === t ? ft : b.O$.from(t);
      }
      !(function (t) {
        (t[(t.legacy = 0)] = "legacy"), (t[(t.eip2930 = 1)] = "eip2930"), (t[(t.eip1559 = 2)] = "eip1559");
      })(oe || (oe = {}));
      function ue(t, e) {
        return (function (t) {
          const e = ne(t);
          return L((0, _.p3)((0, E.w)((0, _.p3)(e, 1)), 12));
        })(
          (function (t, e) {
            const r = (0, _.N)(e),
              n = { r: (0, _.lE)(r.r), s: (0, _.lE)(r.s) };
            return (
              "0x" +
              ee()
                .recoverPubKey((0, _.lE)(t), n, r.recoveryParam)
                .encode("hex", !1)
            );
          })((0, _.lE)(t), e)
        );
      }
      function he(t, e) {
        const r = (0, _.G1)(b.O$.from(t).toHexString());
        return r.length > 32 && ie.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r;
      }
      function le(t, e) {
        return {
          address: L(t),
          storageKeys: (e || []).map(
            (e, r) => (
              32 !== (0, _.E1)(e) &&
                ie.throwArgumentError("invalid access list storageKey", `accessList[${t}:${r}]`, e),
              e.toLowerCase()
            )
          ),
        };
      }
      function ce(t) {
        if (Array.isArray(t))
          return t.map((t, e) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  ie.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${e}]`, t),
                le(t[0], t[1]))
              : le(t.address, t.storageKeys)
          );
        const e = Object.keys(t).map((e) => {
          const r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return le(e, Object.keys(r).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
      function fe(t) {
        return ce(t).map((t) => [t.address, t.storageKeys]);
      }
      function de(t, e) {
        if (null != t.gasPrice) {
          const e = b.O$.from(t.gasPrice),
            r = b.O$.from(t.maxFeePerGas || 0);
          e.eq(r) ||
            ie.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", { gasPrice: e, maxFeePerGas: r });
        }
        const r = [
          he(t.chainId || 0, "chainId"),
          he(t.nonce || 0, "nonce"),
          he(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          he(t.maxFeePerGas || 0, "maxFeePerGas"),
          he(t.gasLimit || 0, "gasLimit"),
          null != t.to ? L(t.to) : "0x",
          he(t.value || 0, "value"),
          t.data || "0x",
          fe(t.accessList || []),
        ];
        if (e) {
          const t = (0, _.N)(e);
          r.push(he(t.recoveryParam, "recoveryParam")), r.push((0, _.G1)(t.r)), r.push((0, _.G1)(t.s));
        }
        return (0, _.xs)(["0x02", P(r)]);
      }
      function pe(t, e) {
        const r = [
          he(t.chainId || 0, "chainId"),
          he(t.nonce || 0, "nonce"),
          he(t.gasPrice || 0, "gasPrice"),
          he(t.gasLimit || 0, "gasLimit"),
          null != t.to ? L(t.to) : "0x",
          he(t.value || 0, "value"),
          t.data || "0x",
          fe(t.accessList || []),
        ];
        if (e) {
          const t = (0, _.N)(e);
          r.push(he(t.recoveryParam, "recoveryParam")), r.push((0, _.G1)(t.r)), r.push((0, _.G1)(t.s));
        }
        return (0, _.xs)(["0x01", P(r)]);
      }
      function me(t, e, r) {
        try {
          const r = ae(e[0]).toNumber();
          if (0 !== r && 1 !== r) throw new Error("bad recid");
          t.v = r;
        } catch (n) {
          ie.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
        }
        (t.r = (0, _.$m)(e[1], 32)), (t.s = (0, _.$m)(e[2], 32));
        try {
          const e = (0, E.w)(r(t));
          t.from = ue(e, { r: t.r, s: t.s, recoveryParam: t.v });
        } catch (n) {
          console.log(n);
        }
      }
      function ge(t) {
        const e = (0, _.lE)(t);
        if (e[0] > 127)
          return (function (t) {
            const e = R(t);
            9 !== e.length && 6 !== e.length && ie.throwArgumentError("invalid raw transaction", "rawTransaction", t);
            const r = {
              nonce: ae(e[0]).toNumber(),
              gasPrice: ae(e[1]),
              gasLimit: ae(e[2]),
              to: se(e[3]),
              value: ae(e[4]),
              data: e[5],
              chainId: 0,
            };
            if (6 === e.length) return r;
            try {
              r.v = b.O$.from(e[6]).toNumber();
            } catch (n) {
              return console.log(n), r;
            }
            if (
              ((r.r = (0, _.$m)(e[7], 32)),
              (r.s = (0, _.$m)(e[8], 32)),
              b.O$.from(r.r).isZero() && b.O$.from(r.s).isZero())
            )
              (r.chainId = r.v), (r.v = 0);
            else {
              (r.chainId = Math.floor((r.v - 35) / 2)), r.chainId < 0 && (r.chainId = 0);
              let i = r.v - 27;
              const o = e.slice(0, 6);
              0 !== r.chainId && (o.push((0, _.Dv)(r.chainId)), o.push("0x"), o.push("0x"), (i -= 2 * r.chainId + 8));
              const s = (0, E.w)(P(o));
              try {
                r.from = ue(s, { r: (0, _.Dv)(r.r), s: (0, _.Dv)(r.s), recoveryParam: i });
              } catch (n) {
                console.log(n);
              }
              r.hash = (0, E.w)(t);
            }
            return (r.type = null), r;
          })(e);
        switch (e[0]) {
          case 1:
            return (function (t) {
              const e = R(t.slice(1));
              8 !== e.length &&
                11 !== e.length &&
                ie.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, _.Dv)(t));
              const r = {
                type: 1,
                chainId: ae(e[0]).toNumber(),
                nonce: ae(e[1]).toNumber(),
                gasPrice: ae(e[2]),
                gasLimit: ae(e[3]),
                to: se(e[4]),
                value: ae(e[5]),
                data: e[6],
                accessList: ce(e[7]),
              };
              return 8 === e.length || ((r.hash = (0, E.w)(t)), me(r, e.slice(8), pe)), r;
            })(e);
          case 2:
            return (function (t) {
              const e = R(t.slice(1));
              9 !== e.length &&
                12 !== e.length &&
                ie.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, _.Dv)(t));
              const r = ae(e[2]),
                n = ae(e[3]),
                i = {
                  type: 2,
                  chainId: ae(e[0]).toNumber(),
                  nonce: ae(e[1]).toNumber(),
                  maxPriorityFeePerGas: r,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: ae(e[4]),
                  to: se(e[5]),
                  value: ae(e[6]),
                  data: e[7],
                  accessList: ce(e[8]),
                };
              return 9 === e.length || ((i.hash = (0, E.w)(t)), me(i, e.slice(9), de)), i;
            })(e);
        }
        return ie.throwError(`unsupported transaction type: ${e[0]}`, n.Yd.errors.UNSUPPORTED_OPERATION, {
          operation: "parseTransaction",
          transactionType: e[0],
        });
      }
      function ve(t) {
        t = atob(t);
        const e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return (0, _.lE)(e);
      }
      function ye(t) {
        t = (0, _.lE)(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return btoa(e);
      }
      var we = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      function be(t, e) {
        return we(this, void 0, void 0, function* () {
          null == e && (e = {});
          const r = { method: e.method || "GET", headers: e.headers || {}, body: e.body || void 0 };
          !0 !== e.skipFetchSetup &&
            ((r.mode = "cors"),
            (r.cache = "no-cache"),
            (r.credentials = "same-origin"),
            (r.redirect = "follow"),
            (r.referrer = "client"));
          const n = yield fetch(t, r),
            i = yield n.arrayBuffer(),
            o = {};
          return (
            n.headers.forEach
              ? n.headers.forEach((t, e) => {
                  o[e.toLowerCase()] = t;
                })
              : n.headers.keys().forEach((t) => {
                  o[t.toLowerCase()] = n.headers.get(t);
                }),
            { headers: o, statusCode: n.status, statusMessage: n.statusText, body: (0, _.lE)(new Uint8Array(i)) }
          );
        });
      }
      var _e = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const Ee = new n.Yd("web/5.6.0");
      function Ae(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function Ne(t, e) {
        if (null == t) return null;
        if ("string" === typeof t) return t;
        if ((0, _.Zq)(t)) {
          if (e && ("text" === e.split("/")[0] || "application/json" === e.split(";")[0].trim()))
            try {
              return V(t);
            } catch (r) {}
          return (0, _.Dv)(t);
        }
        return t;
      }
      function ke(t, e, r) {
        let i = null;
        if (null != e) {
          i = Y(e);
          const r = "string" === typeof t ? { url: t } : h(t);
          if (r.headers) {
            0 !== Object.keys(r.headers).filter((t) => "content-type" === t.toLowerCase()).length ||
              ((r.headers = h(r.headers)), (r.headers["content-type"] = "application/json"));
          } else r.headers = { "content-type": "application/json" };
          t = r;
        }
        return (function (t, e, r) {
          const i = "object" === typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
          Ee.assertArgument(i > 0 && i % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", i);
          const o = "object" === typeof t ? t.throttleCallback : null,
            s = "object" === typeof t && "number" === typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
          Ee.assertArgument(
            s > 0 && s % 1 === 0,
            "invalid connection throttle slot interval",
            "connection.throttleSlotInterval",
            s
          );
          const a = "object" === typeof t && !!t.errorPassThrough,
            u = {};
          let h = null;
          const l = { method: "GET" };
          let c = !1,
            f = 12e4;
          if ("string" === typeof t) h = t;
          else if ("object" === typeof t) {
            if (
              ((null != t && null != t.url) || Ee.throwArgumentError("missing URL", "connection.url", t),
              (h = t.url),
              "number" === typeof t.timeout && t.timeout > 0 && (f = t.timeout),
              t.headers)
            )
              for (const e in t.headers)
                (u[e.toLowerCase()] = { key: e, value: String(t.headers[e]) }),
                  ["if-none-match", "if-modified-since"].indexOf(e.toLowerCase()) >= 0 && (c = !0);
            if (((l.allowGzip = !!t.allowGzip), null != t.user && null != t.password)) {
              "https:" !== h.substring(0, 6) &&
                !0 !== t.allowInsecureAuthentication &&
                Ee.throwError("basic authentication requires a secure https url", n.Yd.errors.INVALID_ARGUMENT, {
                  argument: "url",
                  url: h,
                  user: t.user,
                  password: "[REDACTED]",
                });
              const e = t.user + ":" + t.password;
              u.authorization = { key: "Authorization", value: "Basic " + ye(Y(e)) };
            }
            null != t.skipFetchSetup && (l.skipFetchSetup = !!t.skipFetchSetup);
          }
          const d = new RegExp("^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$", "i"),
            p = h ? h.match(d) : null;
          if (p)
            try {
              const t = { statusCode: 200, statusMessage: "OK", headers: { "content-type": p[1] }, body: ve(p[2]) };
              let e = t.body;
              return r && (e = r(t.body, t)), Promise.resolve(e);
            } catch (y) {
              Ee.throwError("processing response error", n.Yd.errors.SERVER_ERROR, {
                body: Ne(p[1], p[2]),
                error: y,
                requestBody: null,
                requestMethod: "GET",
                url: h,
              });
            }
          e &&
            ((l.method = "POST"),
            (l.body = e),
            null == u["content-type"] &&
              (u["content-type"] = { key: "Content-Type", value: "application/octet-stream" }),
            null == u["content-length"] && (u["content-length"] = { key: "Content-Length", value: String(e.length) }));
          const m = {};
          Object.keys(u).forEach((t) => {
            const e = u[t];
            m[e.key] = e.value;
          }),
            (l.headers = m);
          const g = (function () {
              let t = null;
              return {
                promise: new Promise(function (e, r) {
                  f &&
                    (t = setTimeout(() => {
                      null != t &&
                        ((t = null),
                        r(
                          Ee.makeError("timeout", n.Yd.errors.TIMEOUT, {
                            requestBody: Ne(l.body, m["content-type"]),
                            requestMethod: l.method,
                            timeout: f,
                            url: h,
                          })
                        ));
                    }, f));
                }),
                cancel: function () {
                  null != t && (clearTimeout(t), (t = null));
                },
              };
            })(),
            v = (function () {
              return _e(this, void 0, void 0, function* () {
                for (let t = 0; t < i; t++) {
                  let e = null;
                  try {
                    if (((e = yield be(h, l)), t < i))
                      if (301 === e.statusCode || 302 === e.statusCode) {
                        const t = e.headers.location || "";
                        if ("GET" === l.method && t.match(/^https:/)) {
                          h = e.headers.location;
                          continue;
                        }
                      } else if (429 === e.statusCode) {
                        let r = !0;
                        if ((o && (r = yield o(t, h)), r)) {
                          let r = 0;
                          const n = e.headers["retry-after"];
                          (r =
                            "string" === typeof n && n.match(/^[1-9][0-9]*$/)
                              ? 1e3 * parseInt(n)
                              : s * parseInt(String(Math.random() * Math.pow(2, t)))),
                            yield Ae(r);
                          continue;
                        }
                      }
                  } catch (y) {
                    (e = y.response),
                      null == e &&
                        (g.cancel(),
                        Ee.throwError("missing response", n.Yd.errors.SERVER_ERROR, {
                          requestBody: Ne(l.body, m["content-type"]),
                          requestMethod: l.method,
                          serverError: y,
                          url: h,
                        }));
                  }
                  let u = e.body;
                  if (
                    (c && 304 === e.statusCode
                      ? (u = null)
                      : !a &&
                        (e.statusCode < 200 || e.statusCode >= 300) &&
                        (g.cancel(),
                        Ee.throwError("bad response", n.Yd.errors.SERVER_ERROR, {
                          status: e.statusCode,
                          headers: e.headers,
                          body: Ne(u, e.headers ? e.headers["content-type"] : null),
                          requestBody: Ne(l.body, m["content-type"]),
                          requestMethod: l.method,
                          url: h,
                        })),
                    r)
                  )
                    try {
                      const t = yield r(u, e);
                      return g.cancel(), t;
                    } catch (y) {
                      if (y.throttleRetry && t < i) {
                        let e = !0;
                        if ((o && (e = yield o(t, h)), e)) {
                          const e = s * parseInt(String(Math.random() * Math.pow(2, t)));
                          yield Ae(e);
                          continue;
                        }
                      }
                      g.cancel(),
                        Ee.throwError("processing response error", n.Yd.errors.SERVER_ERROR, {
                          body: Ne(u, e.headers ? e.headers["content-type"] : null),
                          error: y,
                          requestBody: Ne(l.body, m["content-type"]),
                          requestMethod: l.method,
                          url: h,
                        });
                    }
                  return g.cancel(), u;
                }
                return Ee.throwError("failed response", n.Yd.errors.SERVER_ERROR, {
                  requestBody: Ne(l.body, m["content-type"]),
                  requestMethod: l.method,
                  url: h,
                });
              });
            })();
          return Promise.race([g.promise, v]);
        })(t, i, (t, e) => {
          let i = null;
          if (null != t)
            try {
              i = JSON.parse(V(t));
            } catch (o) {
              Ee.throwError("invalid JSON", n.Yd.errors.SERVER_ERROR, { body: t, error: o });
            }
          return r && (i = r(i, e)), i;
        });
      }
      function Me(t, e) {
        return (
          e || (e = {}),
          null == (e = h(e)).floor && (e.floor = 0),
          null == e.ceiling && (e.ceiling = 1e4),
          null == e.interval && (e.interval = 250),
          new Promise(function (r, n) {
            let i = null,
              o = !1;
            const s = () => !o && ((o = !0), i && clearTimeout(i), !0);
            e.timeout &&
              (i = setTimeout(() => {
                s() && n(new Error("timeout"));
              }, e.timeout));
            const a = e.retryLimit;
            let u = 0;
            !(function i() {
              return t().then(
                function (t) {
                  if (void 0 !== t) s() && r(t);
                  else if (e.oncePoll) e.oncePoll.once("poll", i);
                  else if (e.onceBlock) e.onceBlock.once("block", i);
                  else if (!o) {
                    if ((u++, u > a)) return void (s() && n(new Error("retry limit reached")));
                    let t = e.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                    t < e.floor && (t = e.floor), t > e.ceiling && (t = e.ceiling), setTimeout(i, t);
                  }
                  return null;
                },
                function (t) {
                  s() && n(t);
                }
              );
            })();
          })
        );
      }
      var Pe = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const xe = new n.Yd("abstract-provider/5.6.0");
      class Ie extends class {
        constructor(t) {
          for (const e in t) this[e] = d(t[e]);
        }
      } {
        static isForkEvent(t) {
          return !(!t || !t._isForkEvent);
        }
      }
      class Re {
        constructor() {
          xe.checkAbstract(new.target, Re), s(this, "_isProvider", !0);
        }
        getFeeData() {
          return Pe(this, void 0, void 0, function* () {
            const { block: t, gasPrice: e } = yield u({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch((t) => null),
            });
            let r = null,
              n = null;
            return (
              t && t.baseFeePerGas && ((n = b.O$.from("1500000000")), (r = t.baseFeePerGas.mul(2).add(n))),
              { maxFeePerGas: r, maxPriorityFeePerGas: n, gasPrice: e }
            );
          });
        }
        addListener(t, e) {
          return this.on(t, e);
        }
        removeListener(t, e) {
          return this.off(t, e);
        }
        static isProvider(t) {
          return !(!t || !t._isProvider);
        }
      }
      class Se {
        constructor(t) {
          s(this, "alphabet", t),
            s(this, "base", t.length),
            s(this, "_alphabetMap", {}),
            s(this, "_leader", t.charAt(0));
          for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
        }
        encode(t) {
          let e = (0, _.lE)(t);
          if (0 === e.length) return "";
          let r = [0];
          for (let i = 0; i < e.length; ++i) {
            let t = e[i];
            for (let e = 0; e < r.length; ++e) (t += r[e] << 8), (r[e] = t % this.base), (t = (t / this.base) | 0);
            for (; t > 0; ) r.push(t % this.base), (t = (t / this.base) | 0);
          }
          let n = "";
          for (let i = 0; 0 === e[i] && i < e.length - 1; ++i) n += this._leader;
          for (let i = r.length - 1; i >= 0; --i) n += this.alphabet[r[i]];
          return n;
        }
        decode(t) {
          if ("string" !== typeof t) throw new TypeError("Expected String");
          let e = [];
          if (0 === t.length) return new Uint8Array(e);
          e.push(0);
          for (let r = 0; r < t.length; r++) {
            let n = this._alphabetMap[t[r]];
            if (void 0 === n) throw new Error("Non-base" + this.base + " character");
            let i = n;
            for (let t = 0; t < e.length; ++t) (i += e[t] * this.base), (e[t] = 255 & i), (i >>= 8);
            for (; i > 0; ) e.push(255 & i), (i >>= 8);
          }
          for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0);
          return (0, _.lE)(new Uint8Array(e.reverse()));
        }
      }
      new Se("abcdefghijklmnopqrstuvwxyz234567");
      const Oe = new Se("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      function Ce(t, e) {
        e ||
          (e = function (t) {
            return [parseInt(t, 16)];
          });
        let r = 0,
          n = {};
        return (
          t.split(",").forEach((t) => {
            let i = t.split(":");
            (r += parseInt(i[0], 16)), (n[r] = e(i[1]));
          }),
          n
        );
      }
      function Te(t) {
        let e = 0;
        return t.split(",").map((t) => {
          let r = t.split("-");
          1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1");
          let n = e + parseInt(r[0], 16);
          return (e = parseInt(r[1], 16)), { l: n, h: e };
        });
      }
      function Be(t, e) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          if (((r += i.l), t >= r && t <= r + i.h && (t - r) % (i.d || 1) === 0)) {
            if (i.e && -1 !== i.e.indexOf(t - r)) continue;
            return i;
          }
        }
        return null;
      }
      const Fe = Te(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        Le = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((t) => parseInt(t, 16)),
        Ue = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        De = Ce(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        je = Ce(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        qe = Ce(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (t) {
            if (t.length % 4 !== 0) throw new Error("bad data");
            let e = [];
            for (let r = 0; r < t.length; r += 4) e.push(parseInt(t.substring(r, r + 4), 16));
            return e;
          }
        ),
        ze = Te(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      function $e(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase();
        let e = W(t);
        var r;
        (r = e.map((t) => {
          if (Le.indexOf(t) >= 0) return [];
          if (t >= 65024 && t <= 65039) return [];
          let e = (function (t) {
            let e = Be(t, Ue);
            if (e) return [t + e.s];
            let r = De[t];
            if (r) return r;
            let n = je[t];
            return n ? [t + n[0]] : qe[t] || null;
          })(t);
          return e || [t];
        })),
          (e = r.reduce(
            (t, e) => (
              e.forEach((e) => {
                t.push(e);
              }),
              t
            ),
            []
          )),
          (e = W(H(e), j.NFKC)),
          e.forEach((t) => {
            if (Be(t, ze)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          e.forEach((t) => {
            if (Be(t, Fe)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          });
        let n = H(e);
        if ("-" === n.substring(0, 1) || "--" === n.substring(2, 4) || "-" === n.substring(n.length - 1))
          throw new Error("invalid hyphen");
        if (n.length > 63) throw new Error("too long");
        return n;
      }
      const Ge = new n.Yd(U),
        Ye = new Uint8Array(32);
      Ye.fill(0);
      const He = new RegExp("^((.*)\\.)?([^.]+)$");
      function Ve(t) {
        "string" !== typeof t && Ge.throwArgumentError("invalid ENS name; not a string", "name", t);
        let e = t,
          r = Ye;
        for (; e.length; ) {
          const n = e.match(He);
          (null != n && "" !== n[2]) || Ge.throwArgumentError("invalid ENS address; missing component", "name", t);
          const i = Y($e(n[3]));
          (r = (0, E.w)((0, _.zo)([r, (0, E.w)(i)]))), (e = n[2] || "");
        }
        return (0, _.Dv)(r);
      }
      const We = new n.Yd("networks/5.6.1");
      function Ke(t) {
        const e = function (e, r) {
          null == r && (r = {});
          const n = [];
          if (e.InfuraProvider && "-" !== r.infura)
            try {
              n.push(new e.InfuraProvider(t, r.infura));
            } catch (i) {}
          if (e.EtherscanProvider && "-" !== r.etherscan)
            try {
              n.push(new e.EtherscanProvider(t, r.etherscan));
            } catch (i) {}
          if (e.AlchemyProvider && "-" !== r.alchemy)
            try {
              n.push(new e.AlchemyProvider(t, r.alchemy));
            } catch (i) {}
          if (e.PocketProvider && "-" !== r.pocket) {
            const r = ["goerli", "ropsten", "rinkeby"];
            try {
              const i = new e.PocketProvider(t);
              i.network && -1 === r.indexOf(i.network.name) && n.push(i);
            } catch (i) {}
          }
          if (e.CloudflareProvider && "-" !== r.cloudflare)
            try {
              n.push(new e.CloudflareProvider(t));
            } catch (i) {}
          if (e.AnkrProvider && "-" !== r.ankr)
            try {
              n.push(new e.AnkrProvider(t, r.ankr));
            } catch (i) {}
          if (0 === n.length) return null;
          if (e.FallbackProvider) {
            let i = 1;
            return null != r.quorum ? (i = r.quorum) : "homestead" === t && (i = 2), new e.FallbackProvider(n, i);
          }
          return n[0];
        };
        return (
          (e.renetwork = function (t) {
            return Ke(t);
          }),
          e
        );
      }
      function Je(t, e) {
        const r = function (r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null;
        };
        return (
          (r.renetwork = function (e) {
            return Je(t, e);
          }),
          r
        );
      }
      const Xe = {
          chainId: 1,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "homestead",
          _defaultProvider: Ke("homestead"),
        },
        Ze = {
          chainId: 3,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "ropsten",
          _defaultProvider: Ke("ropsten"),
        },
        Qe = {
          chainId: 63,
          name: "classicMordor",
          _defaultProvider: Je("https://www.ethercluster.com/mordor", "classicMordor"),
        },
        tr = {
          unspecified: { chainId: 0, name: "unspecified" },
          homestead: Xe,
          mainnet: Xe,
          morden: { chainId: 2, name: "morden" },
          ropsten: Ze,
          testnet: Ze,
          rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: Ke("rinkeby"),
          },
          kovan: { chainId: 42, name: "kovan", _defaultProvider: Ke("kovan") },
          goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: Ke("goerli"),
          },
          kintsugi: { chainId: 1337702, name: "kintsugi" },
          classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: Je("https://www.ethercluster.com/etc", "classic"),
          },
          classicMorden: { chainId: 62, name: "classicMorden" },
          classicMordor: Qe,
          classicTestnet: Qe,
          classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: Je("https://www.ethercluster.com/kotti", "classicKotti"),
          },
          xdai: { chainId: 100, name: "xdai" },
          matic: { chainId: 137, name: "matic" },
          maticmum: { chainId: 80001, name: "maticmum" },
          optimism: { chainId: 10, name: "optimism" },
          "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
          "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
          arbitrum: { chainId: 42161, name: "arbitrum" },
          "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
          bnb: { chainId: 56, name: "bnb" },
          bnbt: { chainId: 97, name: "bnbt" },
        };
      new n.Yd("sha2/5.6.0");
      function er(t) {
        return (
          "0x" +
          gt()
            .sha256()
            .update((0, _.lE)(t))
            .digest("hex")
        );
      }
      var rr = r(2882),
        nr = r.n(rr);
      const ir = new n.Yd(p);
      class or {
        constructor() {
          ir.checkNew(new.target, or), (this.formats = this.getDefaultFormats());
        }
        getDefaultFormats() {
          const t = {},
            e = this.address.bind(this),
            r = this.bigNumber.bind(this),
            n = this.blockTag.bind(this),
            i = this.data.bind(this),
            o = this.hash.bind(this),
            s = this.hex.bind(this),
            a = this.number.bind(this),
            u = this.type.bind(this);
          return (
            (t.transaction = {
              hash: o,
              type: u,
              accessList: or.allowNull(this.accessList.bind(this), null),
              blockHash: or.allowNull(o, null),
              blockNumber: or.allowNull(a, null),
              transactionIndex: or.allowNull(a, null),
              confirmations: or.allowNull(a, null),
              from: e,
              gasPrice: or.allowNull(r),
              maxPriorityFeePerGas: or.allowNull(r),
              maxFeePerGas: or.allowNull(r),
              gasLimit: r,
              to: or.allowNull(e, null),
              value: r,
              nonce: a,
              data: i,
              r: or.allowNull(this.uint256),
              s: or.allowNull(this.uint256),
              v: or.allowNull(a),
              creates: or.allowNull(e, null),
              raw: or.allowNull(i),
            }),
            (t.transactionRequest = {
              from: or.allowNull(e),
              nonce: or.allowNull(a),
              gasLimit: or.allowNull(r),
              gasPrice: or.allowNull(r),
              maxPriorityFeePerGas: or.allowNull(r),
              maxFeePerGas: or.allowNull(r),
              to: or.allowNull(e),
              value: or.allowNull(r),
              data: or.allowNull((t) => this.data(t, !0)),
              type: or.allowNull(a),
              accessList: or.allowNull(this.accessList.bind(this), null),
            }),
            (t.receiptLog = {
              transactionIndex: a,
              blockNumber: a,
              transactionHash: o,
              address: e,
              topics: or.arrayOf(o),
              data: i,
              logIndex: a,
              blockHash: o,
            }),
            (t.receipt = {
              to: or.allowNull(this.address, null),
              from: or.allowNull(this.address, null),
              contractAddress: or.allowNull(e, null),
              transactionIndex: a,
              root: or.allowNull(s),
              gasUsed: r,
              logsBloom: or.allowNull(i),
              blockHash: o,
              transactionHash: o,
              logs: or.arrayOf(this.receiptLog.bind(this)),
              blockNumber: a,
              confirmations: or.allowNull(a, null),
              cumulativeGasUsed: r,
              effectiveGasPrice: or.allowNull(r),
              status: or.allowNull(a),
              type: u,
            }),
            (t.block = {
              hash: or.allowNull(o),
              parentHash: o,
              number: a,
              timestamp: a,
              nonce: or.allowNull(s),
              difficulty: this.difficulty.bind(this),
              gasLimit: r,
              gasUsed: r,
              miner: or.allowNull(e),
              extraData: i,
              transactions: or.allowNull(or.arrayOf(o)),
              baseFeePerGas: or.allowNull(r),
            }),
            (t.blockWithTransactions = h(t.block)),
            (t.blockWithTransactions.transactions = or.allowNull(or.arrayOf(this.transactionResponse.bind(this)))),
            (t.filter = {
              fromBlock: or.allowNull(n, void 0),
              toBlock: or.allowNull(n, void 0),
              blockHash: or.allowNull(o, void 0),
              address: or.allowNull(e, void 0),
              topics: or.allowNull(this.topics.bind(this), void 0),
            }),
            (t.filterLog = {
              blockNumber: or.allowNull(a),
              blockHash: or.allowNull(o),
              transactionIndex: a,
              removed: or.allowNull(this.boolean.bind(this)),
              address: e,
              data: or.allowFalsish(i, "0x"),
              topics: or.arrayOf(o),
              transactionHash: o,
              logIndex: a,
            }),
            t
          );
        }
        accessList(t) {
          return ce(t || []);
        }
        number(t) {
          return "0x" === t ? 0 : b.O$.from(t).toNumber();
        }
        type(t) {
          return "0x" === t || null == t ? 0 : b.O$.from(t).toNumber();
        }
        bigNumber(t) {
          return b.O$.from(t);
        }
        boolean(t) {
          if ("boolean" === typeof t) return t;
          if ("string" === typeof t) {
            if ("true" === (t = t.toLowerCase())) return !0;
            if ("false" === t) return !1;
          }
          throw new Error("invalid boolean - " + t);
        }
        hex(t, e) {
          return "string" === typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), (0, _.A7)(t))
            ? t.toLowerCase()
            : ir.throwArgumentError("invalid hash", "value", t);
        }
        data(t, e) {
          const r = this.hex(t, e);
          if (r.length % 2 !== 0) throw new Error("invalid data; odd-length - " + t);
          return r;
        }
        address(t) {
          return L(t);
        }
        callAddress(t) {
          if (!(0, _.A7)(t, 32)) return null;
          const e = L((0, _.p3)(t, 12));
          return "0x0000000000000000000000000000000000000000" === e ? null : e;
        }
        contractAddress(t) {
          return (function (t) {
            let e = null;
            try {
              e = L(t.from);
            } catch (n) {
              S.throwArgumentError("missing from address", "transaction", t);
            }
            const r = (0, _.G1)((0, _.lE)(b.O$.from(t.nonce).toHexString()));
            return L((0, _.p3)((0, E.w)(P([e, r])), 12));
          })(t);
        }
        blockTag(t) {
          if (null == t) return "latest";
          if ("earliest" === t) return "0x0";
          if ("latest" === t || "pending" === t) return t;
          if ("number" === typeof t || (0, _.A7)(t)) return (0, _.$P)(t);
          throw new Error("invalid blockTag");
        }
        hash(t, e) {
          const r = this.hex(t, e);
          return 32 !== (0, _.E1)(r) ? ir.throwArgumentError("invalid hash", "value", t) : r;
        }
        difficulty(t) {
          if (null == t) return null;
          const e = b.O$.from(t);
          try {
            return e.toNumber();
          } catch (r) {}
          return null;
        }
        uint256(t) {
          if (!(0, _.A7)(t)) throw new Error("invalid uint256");
          return (0, _.$m)(t, 32);
        }
        _block(t, e) {
          null != t.author && null == t.miner && (t.miner = t.author);
          const r = null != t._difficulty ? t._difficulty : t.difficulty,
            n = or.check(e, t);
          return (n._difficulty = null == r ? null : b.O$.from(r)), n;
        }
        block(t) {
          return this._block(t, this.formats.block);
        }
        blockWithTransactions(t) {
          return this._block(t, this.formats.blockWithTransactions);
        }
        transactionRequest(t) {
          return or.check(this.formats.transactionRequest, t);
        }
        transactionResponse(t) {
          null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
            t.to && b.O$.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"),
            null != t.input && null == t.data && (t.data = t.input),
            null == t.to && null == t.creates && (t.creates = this.contractAddress(t)),
            (1 !== t.type && 2 !== t.type) || null != t.accessList || (t.accessList = []);
          const e = or.check(this.formats.transaction, t);
          if (null != t.chainId) {
            let r = t.chainId;
            (0, _.A7)(r) && (r = b.O$.from(r).toNumber()), (e.chainId = r);
          } else {
            let r = t.networkId;
            null == r && null == e.v && (r = t.chainId),
              (0, _.A7)(r) && (r = b.O$.from(r).toNumber()),
              "number" !== typeof r && null != e.v && ((r = (e.v - 35) / 2), r < 0 && (r = 0), (r = parseInt(r))),
              "number" !== typeof r && (r = 0),
              (e.chainId = r);
          }
          return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e;
        }
        transaction(t) {
          return ge(t);
        }
        receiptLog(t) {
          return or.check(this.formats.receiptLog, t);
        }
        receipt(t) {
          const e = or.check(this.formats.receipt, t);
          if (null != e.root)
            if (e.root.length <= 4) {
              const t = b.O$.from(e.root).toNumber();
              0 === t || 1 === t
                ? (null != e.status &&
                    e.status !== t &&
                    ir.throwArgumentError("alt-root-status/status mismatch", "value", {
                      root: e.root,
                      status: e.status,
                    }),
                  (e.status = t),
                  delete e.root)
                : ir.throwArgumentError("invalid alt-root-status", "value.root", e.root);
            } else 66 !== e.root.length && ir.throwArgumentError("invalid root hash", "value.root", e.root);
          return null != e.status && (e.byzantium = !0), e;
        }
        topics(t) {
          return Array.isArray(t) ? t.map((t) => this.topics(t)) : null != t ? this.hash(t, !0) : null;
        }
        filter(t) {
          return or.check(this.formats.filter, t);
        }
        filterLog(t) {
          return or.check(this.formats.filterLog, t);
        }
        static check(t, e) {
          const r = {};
          for (const i in t)
            try {
              const n = t[i](e[i]);
              void 0 !== n && (r[i] = n);
            } catch (n) {
              throw ((n.checkKey = i), (n.checkValue = e[i]), n);
            }
          return r;
        }
        static allowNull(t, e) {
          return function (r) {
            return null == r ? e : t(r);
          };
        }
        static allowFalsish(t, e) {
          return function (r) {
            return r ? t(r) : e;
          };
        }
        static arrayOf(t) {
          return function (e) {
            if (!Array.isArray(e)) throw new Error("not an array");
            const r = [];
            return (
              e.forEach(function (e) {
                r.push(t(e));
              }),
              r
            );
          };
        }
      }
      var sr = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const ar = new n.Yd(p);
      function ur(t) {
        return null == t
          ? "null"
          : (32 !== (0, _.E1)(t) && ar.throwArgumentError("invalid topic", "topic", t), t.toLowerCase());
      }
      function hr(t) {
        for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; ) t.pop();
        return t
          .map((t) => {
            if (Array.isArray(t)) {
              const e = {};
              t.forEach((t) => {
                e[ur(t)] = !0;
              });
              const r = Object.keys(e);
              return r.sort(), r.join("|");
            }
            return ur(t);
          })
          .join("&");
      }
      function lr(t) {
        if ("string" === typeof t) {
          if (((t = t.toLowerCase()), 32 === (0, _.E1)(t))) return "tx:" + t;
          if (-1 === t.indexOf(":")) return t;
        } else {
          if (Array.isArray(t)) return "filter:*:" + hr(t);
          if (Ie.isForkEvent(t)) throw (ar.warn("not implemented"), new Error("not implemented"));
          if (t && "object" === typeof t) return "filter:" + (t.address || "*") + ":" + hr(t.topics || []);
        }
        throw new Error("invalid event - " + t);
      }
      function cr() {
        return new Date().getTime();
      }
      function fr(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      const dr = ["block", "network", "pending", "poll"];
      class pr {
        constructor(t, e, r) {
          s(this, "tag", t),
            s(this, "listener", e),
            s(this, "once", r),
            (this._lastBlockNumber = -2),
            (this._inflight = !1);
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          const t = this.tag.split(":");
          return "tx" !== t[0] ? null : t[1];
        }
        get filter() {
          const t = this.tag.split(":");
          if ("filter" !== t[0]) return null;
          const e = t[1],
            r =
              "" === (n = t[2])
                ? []
                : n.split(/&/g).map((t) => {
                    if ("" === t) return [];
                    const e = t.split("|").map((t) => ("null" === t ? null : t));
                    return 1 === e.length ? e[0] : e;
                  });
          var n;
          const i = {};
          return r.length > 0 && (i.topics = r), e && "*" !== e && (i.address = e), i;
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || dr.indexOf(this.tag) >= 0;
        }
      }
      const mr = {
        0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
        2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
        3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
        60: { symbol: "eth", ilk: "eth" },
        61: { symbol: "etc", ilk: "eth" },
        700: { symbol: "xdai", ilk: "eth" },
      };
      function gr(t) {
        return (0, _.$m)(b.O$.from(t).toHexString(), 32);
      }
      function vr(t) {
        return Oe.encode((0, _.zo)([t, (0, _.p3)(er(er(t)), 0, 4)]));
      }
      const yr = new RegExp("^(ipfs)://(.*)$", "i"),
        wr = [
          new RegExp("^(https)://(.*)$", "i"),
          new RegExp("^(data):(.*)$", "i"),
          yr,
          new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      function br(t, e) {
        try {
          return V(_r(t, e));
        } catch (r) {}
        return null;
      }
      function _r(t, e) {
        if ("0x" === t) return null;
        const r = b.O$.from((0, _.p3)(t, e, e + 32)).toNumber(),
          n = b.O$.from((0, _.p3)(t, r, r + 32)).toNumber();
        return (0, _.p3)(t, r + 32, r + 32 + n);
      }
      function Er(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
            ? (t = t.substring(7))
            : ar.throwArgumentError("unsupported IPFS format", "link", t),
          `https://gateway.ipfs.io/ipfs/${t}`
        );
      }
      function Ar(t) {
        const e = (0, _.lE)(t);
        if (e.length > 32) throw new Error("internal; should not happen");
        const r = new Uint8Array(32);
        return r.set(e, 32 - e.length), r;
      }
      function Nr(t) {
        if (t.length % 32 === 0) return t;
        const e = new Uint8Array(32 * Math.ceil(t.length / 32));
        return e.set(t), e;
      }
      function kr(t) {
        const e = [];
        let r = 0;
        for (let n = 0; n < t.length; n++) e.push(null), (r += 32);
        for (let n = 0; n < t.length; n++) {
          const i = (0, _.lE)(t[n]);
          (e[n] = Ar(r)), e.push(Ar(i.length)), e.push(Nr(i)), (r += 32 + 32 * Math.ceil(i.length / 32));
        }
        return (0, _.xs)(e);
      }
      class Mr {
        constructor(t, e, r, n) {
          s(this, "provider", t),
            s(this, "name", r),
            s(this, "address", t.formatter.address(e)),
            s(this, "_resolvedAddress", n);
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
                })
                .then((t) => b.O$.from(t).eq(1))
                .catch((t) => {
                  if (t.code === n.Yd.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), t);
                })),
            this._supportsEip2544
          );
        }
        _fetch(t, e) {
          return sr(this, void 0, void 0, function* () {
            const r = { to: this.address, ccipReadEnabled: !0, data: (0, _.xs)([t, Ve(this.name), e || "0x"]) };
            let i = !1;
            var o;
            (yield this.supportsWildcard()) &&
              ((i = !0),
              (r.data = (0, _.xs)([
                "0x9061b923",
                kr([
                  ((o = this.name),
                  (0, _.Dv)(
                    (0, _.zo)(
                      o.split(".").map((t) => {
                        const e = Y("_" + $e(t));
                        return (e[0] = e.length - 1), e;
                      })
                    )
                  ) + "00"),
                  r.data,
                ]),
              ])));
            try {
              let t = yield this.provider.call(r);
              return (
                (0, _.lE)(t).length % 32 === 4 &&
                  ar.throwError("resolver threw error", n.Yd.errors.CALL_EXCEPTION, { transaction: r, data: t }),
                i && (t = _r(t, 0)),
                t
              );
            } catch (s) {
              if (s.code === n.Yd.errors.CALL_EXCEPTION) return null;
              throw s;
            }
          });
        }
        _fetchBytes(t, e) {
          return sr(this, void 0, void 0, function* () {
            const r = yield this._fetch(t, e);
            return null != r ? _r(r, 0) : null;
          });
        }
        _getAddress(t, e) {
          const r = mr[String(t)];
          if (
            (null == r &&
              ar.throwError(`unsupported coin type: ${t}`, n.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: `getAddress(${t})`,
              }),
            "eth" === r.ilk)
          )
            return this.provider.formatter.address(e);
          const i = (0, _.lE)(e);
          if (null != r.p2pkh) {
            const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (t) {
              const e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75) return vr((0, _.zo)([[r.p2pkh], "0x" + t[2]]));
            }
          }
          if (null != r.p2sh) {
            const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (t) {
              const e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75) return vr((0, _.zo)([[r.p2sh], "0x" + t[2]]));
            }
          }
          if (null != r.prefix) {
            const t = i[1];
            let e = i[0];
            if (
              (0 === e ? 20 !== t && 32 !== t && (e = -1) : (e = -1), e >= 0 && i.length === 2 + t && t >= 1 && t <= 75)
            ) {
              const t = nr().toWords(i.slice(2));
              return t.unshift(e), nr().encode(r.prefix, t);
            }
          }
          return null;
        }
        getAddress(t) {
          return sr(this, void 0, void 0, function* () {
            if ((null == t && (t = 60), 60 === t))
              try {
                const t = yield this._fetch("0x3b3b57de");
                return "0x" === t || "0x0000000000000000000000000000000000000000000000000000000000000000" === t
                  ? null
                  : this.provider.formatter.callAddress(t);
              } catch (i) {
                if (i.code === n.Yd.errors.CALL_EXCEPTION) return null;
                throw i;
              }
            const e = yield this._fetchBytes("0xf1cb7e06", gr(t));
            if (null == e || "0x" === e) return null;
            const r = this._getAddress(t, e);
            return (
              null == r &&
                ar.throwError("invalid or unsupported coin data", n.Yd.errors.UNSUPPORTED_OPERATION, {
                  operation: `getAddress(${t})`,
                  coinType: t,
                  data: e,
                }),
              r
            );
          });
        }
        getAvatar() {
          return sr(this, void 0, void 0, function* () {
            const t = [{ type: "name", content: this.name }];
            try {
              const e = yield this.getText("avatar");
              if (null == e) return null;
              for (let r = 0; r < wr.length; r++) {
                const n = e.match(wr[r]);
                if (null == n) continue;
                const i = n[1].toLowerCase();
                switch (i) {
                  case "https":
                    return t.push({ type: "url", content: e }), { linkage: t, url: e };
                  case "data":
                    return t.push({ type: "data", content: e }), { linkage: t, url: e };
                  case "ipfs":
                    return t.push({ type: "ipfs", content: e }), { linkage: t, url: Er(e) };
                  case "erc721":
                  case "erc1155": {
                    const r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";
                    t.push({ type: i, content: e });
                    const o = this._resolvedAddress || (yield this.getAddress()),
                      s = (n[2] || "").split("/");
                    if (2 !== s.length) return null;
                    const a = yield this.provider.formatter.address(s[0]),
                      u = (0, _.$m)(b.O$.from(s[1]).toHexString(), 32);
                    if ("erc721" === i) {
                      const e = this.provider.formatter.callAddress(
                        yield this.provider.call({ to: a, data: (0, _.xs)(["0x6352211e", u]) })
                      );
                      if (o !== e) return null;
                      t.push({ type: "owner", content: e });
                    } else if ("erc1155" === i) {
                      const e = b.O$.from(
                        yield this.provider.call({ to: a, data: (0, _.xs)(["0x00fdd58e", (0, _.$m)(o, 32), u]) })
                      );
                      if (e.isZero()) return null;
                      t.push({ type: "balance", content: e.toString() });
                    }
                    const h = { to: this.provider.formatter.address(s[0]), data: (0, _.xs)([r, u]) };
                    let l = br(yield this.provider.call(h), 0);
                    if (null == l) return null;
                    t.push({ type: "metadata-url-base", content: l }),
                      "erc1155" === i &&
                        ((l = l.replace("{id}", u.substring(2))),
                        t.push({ type: "metadata-url-expanded", content: l })),
                      l.match(/^ipfs:/i) && (l = Er(l)),
                      t.push({ type: "metadata-url", content: l });
                    const c = yield ke(l);
                    if (!c) return null;
                    t.push({ type: "metadata", content: JSON.stringify(c) });
                    let f = c.image;
                    if ("string" !== typeof f) return null;
                    if (f.match(/^(https:\/\/|data:)/i));
                    else {
                      if (null == f.match(yr)) return null;
                      t.push({ type: "url-ipfs", content: f }), (f = Er(f));
                    }
                    return t.push({ type: "url", content: f }), { linkage: t, url: f };
                  }
                }
              }
            } catch (e) {}
            return null;
          });
        }
        getContentHash() {
          return sr(this, void 0, void 0, function* () {
            const t = yield this._fetchBytes("0xbc1c58d1");
            if (null == t || "0x" === t) return null;
            const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (e) {
              const t = parseInt(e[3], 16);
              if (e[4].length === 2 * t) return "ipfs://" + Oe.encode("0x" + e[1]);
            }
            const r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (r) {
              const t = parseInt(r[3], 16);
              if (r[4].length === 2 * t) return "ipns://" + Oe.encode("0x" + r[1]);
            }
            const i = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            return i && 64 === i[1].length
              ? "bzz://" + i[1]
              : ar.throwError("invalid or unsupported content hash data", n.Yd.errors.UNSUPPORTED_OPERATION, {
                  operation: "getContentHash()",
                  data: t,
                });
          });
        }
        getText(t) {
          return sr(this, void 0, void 0, function* () {
            let e = Y(t);
            (e = (0, _.zo)([gr(64), gr(e.length), e])),
              e.length % 32 !== 0 && (e = (0, _.zo)([e, (0, _.$m)("0x", 32 - (t.length % 32))]));
            const r = yield this._fetchBytes("0x59d1d43c", (0, _.Dv)(e));
            return null == r || "0x" === r ? null : V(r);
          });
        }
      }
      let Pr = null,
        xr = 1;
      class Ir extends Re {
        constructor(t) {
          if (
            (ar.checkNew(new.target, Re),
            super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            s(this, "anyNetwork", "any" === t),
            this.anyNetwork && (t = this.detectNetwork()),
            t instanceof Promise)
          )
            (this._networkPromise = t), t.catch((t) => {}), this._ready().catch((t) => {});
          else {
            const e = a(new.target, "getNetwork")(t);
            e
              ? (s(this, "_network", e), this.emit("network", e, null))
              : ar.throwArgumentError("invalid network", "network", t);
          }
          (this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0);
        }
        _ready() {
          return sr(this, void 0, void 0, function* () {
            if (null == this._network) {
              let e = null;
              if (this._networkPromise)
                try {
                  e = yield this._networkPromise;
                } catch (t) {}
              null == e && (e = yield this.detectNetwork()),
                e || ar.throwError("no network detected", n.Yd.errors.UNKNOWN_ERROR, {}),
                null == this._network &&
                  (this.anyNetwork ? (this._network = e) : s(this, "_network", e), this.emit("network", e, null));
            }
            return this._network;
          });
        }
        get ready() {
          return Me(() =>
            this._ready().then(
              (t) => t,
              (t) => {
                if (t.code !== n.Yd.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t;
              }
            )
          );
        }
        static getFormatter() {
          return null == Pr && (Pr = new or()), Pr;
        }
        static getNetwork(t) {
          return (function (t) {
            if (null == t) return null;
            if ("number" === typeof t) {
              for (const e in tr) {
                const r = tr[e];
                if (r.chainId === t)
                  return {
                    name: r.name,
                    chainId: r.chainId,
                    ensAddress: r.ensAddress || null,
                    _defaultProvider: r._defaultProvider || null,
                  };
              }
              return { chainId: t, name: "unknown" };
            }
            if ("string" === typeof t) {
              const e = tr[t];
              return null == e
                ? null
                : {
                    name: e.name,
                    chainId: e.chainId,
                    ensAddress: e.ensAddress,
                    _defaultProvider: e._defaultProvider || null,
                  };
            }
            const e = tr[t.name];
            if (!e)
              return "number" !== typeof t.chainId && We.throwArgumentError("invalid network chainId", "network", t), t;
            0 !== t.chainId &&
              t.chainId !== e.chainId &&
              We.throwArgumentError("network chainId mismatch", "network", t);
            let r = t._defaultProvider || null;
            var n;
            return (
              null == r &&
                e._defaultProvider &&
                (r =
                  (n = e._defaultProvider) && "function" === typeof n.renetwork
                    ? e._defaultProvider.renetwork(t)
                    : e._defaultProvider),
              {
                name: t.name,
                chainId: e.chainId,
                ensAddress: t.ensAddress || e.ensAddress || null,
                _defaultProvider: r,
              }
            );
          })(null == t ? "homestead" : t);
        }
        ccipReadFetch(t, e, r) {
          return sr(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === r.length) return null;
            const i = t.to.toLowerCase(),
              o = e.toLowerCase(),
              s = [];
            for (let t = 0; t < r.length; t++) {
              const e = r[t],
                a = e.replace("{sender}", i).replace("{data}", o),
                u = e.indexOf("{data}") >= 0 ? null : JSON.stringify({ data: o, sender: i }),
                h = yield ke({ url: a, errorPassThrough: !0 }, u, (t, e) => ((t.status = e.statusCode), t));
              if (h.data) return h.data;
              const l = h.message || "unknown error";
              if (h.status >= 400 && h.status < 500)
                return ar.throwError(`response not found during CCIP fetch: ${l}`, n.Yd.errors.SERVER_ERROR, {
                  url: e,
                  errorMessage: l,
                });
              s.push(l);
            }
            return ar.throwError(
              `error encountered during CCIP fetch: ${s.map((t) => JSON.stringify(t)).join(", ")}`,
              n.Yd.errors.SERVER_ERROR,
              { urls: r, errorMessages: s }
            );
          });
        }
        _getInternalBlockNumber(t) {
          return sr(this, void 0, void 0, function* () {
            if ((yield this._ready(), t > 0))
              for (; this._internalBlockNumber; ) {
                const e = this._internalBlockNumber;
                try {
                  const r = yield e;
                  if (cr() - r.respTime <= t) return r.blockNumber;
                  break;
                } catch (n) {
                  if (this._internalBlockNumber === e) break;
                }
              }
            const e = cr(),
              r = u({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(
                  (t) => null,
                  (t) => t
                ),
              }).then(({ blockNumber: t, networkError: n }) => {
                if (n) throw (this._internalBlockNumber === r && (this._internalBlockNumber = null), n);
                const i = cr();
                return (
                  (t = b.O$.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = t),
                  this._setFastBlockNumber(t),
                  { blockNumber: t, reqTime: e, respTime: i }
                );
              });
            return (
              (this._internalBlockNumber = r),
              r.catch((t) => {
                this._internalBlockNumber === r && (this._internalBlockNumber = null);
              }),
              (yield r).blockNumber
            );
          });
        }
        poll() {
          return sr(this, void 0, void 0, function* () {
            const t = xr++,
              e = [];
            let r = null;
            try {
              r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
            } catch (i) {
              return void this.emit("error", i);
            }
            if ((this._setFastBlockNumber(r), this.emit("poll", t, r), r !== this._lastBlockNumber)) {
              if (
                (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3)
              )
                ar.warn(
                  `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`
                ),
                  this.emit(
                    "error",
                    ar.makeError("network block skew detected", n.Yd.errors.NETWORK_ERROR, {
                      blockNumber: r,
                      event: "blockSkew",
                      previousBlockNumber: this._emitted.block,
                    })
                  ),
                  this.emit("block", r);
              else for (let t = this._emitted.block + 1; t <= r; t++) this.emit("block", t);
              this._emitted.block !== r &&
                ((this._emitted.block = r),
                Object.keys(this._emitted).forEach((t) => {
                  if ("block" === t) return;
                  const e = this._emitted[t];
                  "pending" !== e && r - e > 12 && delete this._emitted[t];
                })),
                -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
                this._events.forEach((t) => {
                  switch (t.type) {
                    case "tx": {
                      const r = t.hash;
                      let n = this.getTransactionReceipt(r)
                        .then((t) =>
                          t && null != t.blockNumber
                            ? ((this._emitted["t:" + r] = t.blockNumber), this.emit(r, t), null)
                            : null
                        )
                        .catch((t) => {
                          this.emit("error", t);
                        });
                      e.push(n);
                      break;
                    }
                    case "filter":
                      if (!t._inflight) {
                        t._inflight = !0;
                        const n = t.filter;
                        (n.fromBlock = t._lastBlockNumber + 1),
                          (n.toBlock = r),
                          n.toBlock - this._maxFilterBlockRange > n.fromBlock &&
                            (n.fromBlock = n.toBlock - this._maxFilterBlockRange);
                        const i = this.getLogs(n)
                          .then((e) => {
                            (t._inflight = !1),
                              0 !== e.length &&
                                e.forEach((e) => {
                                  e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber),
                                    (this._emitted["b:" + e.blockHash] = e.blockNumber),
                                    (this._emitted["t:" + e.transactionHash] = e.blockNumber),
                                    this.emit(n, e);
                                });
                          })
                          .catch((e) => {
                            this.emit("error", e), (t._inflight = !1);
                          });
                        e.push(i);
                      }
                  }
                }),
                (this._lastBlockNumber = r),
                Promise.all(e)
                  .then(() => {
                    this.emit("didPoll", t);
                  })
                  .catch((t) => {
                    this.emit("error", t);
                  });
            } else this.emit("didPoll", t);
          });
        }
        resetEventsBlock(t) {
          (this._lastBlockNumber = t - 1), this.polling && this.poll();
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return sr(this, void 0, void 0, function* () {
            return ar.throwError("provider does not support network detection", n.Yd.errors.UNSUPPORTED_OPERATION, {
              operation: "provider.detectNetwork",
            });
          });
        }
        getNetwork() {
          return sr(this, void 0, void 0, function* () {
            const t = yield this._ready(),
              e = yield this.detectNetwork();
            if (t.chainId !== e.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = e),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit("network", e, t),
                  yield fr(0),
                  this._network
                );
              const r = ar.makeError("underlying network changed", n.Yd.errors.NETWORK_ERROR, {
                event: "changed",
                network: t,
                detectedNetwork: e,
              });
              throw (this.emit("error", r), r);
            }
            return t;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (t) => {
                this._setFastBlockNumber(t);
              },
              (t) => {}
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(t) {
          t && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      this._poller || this.poll(), (this._bootstrapPoll = null);
                    }, this.pollingInterval));
                }, 0)))
            : !t && this._poller && (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(t) {
          if ("number" !== typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
          (this._pollingInterval = t),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval)));
        }
        _getFastBlockNumber() {
          const t = cr();
          return (
            t - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = t),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (t) => (
                  (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t),
                  this._fastBlockNumber
                )
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(t) {
          (null != this._fastBlockNumber && t < this._fastBlockNumber) ||
            ((this._fastQueryDate = cr()),
            (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
              ((this._fastBlockNumber = t), (this._fastBlockNumberPromise = Promise.resolve(t))));
        }
        waitForTransaction(t, e, r) {
          return sr(this, void 0, void 0, function* () {
            return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null);
          });
        }
        _waitForTransaction(t, e, r, i) {
          return sr(this, void 0, void 0, function* () {
            const o = yield this.getTransactionReceipt(t);
            return (o ? o.confirmations : 0) >= e
              ? o
              : new Promise((o, s) => {
                  const a = [];
                  let u = !1;
                  const h = function () {
                      return (
                        !!u ||
                        ((u = !0),
                        a.forEach((t) => {
                          t();
                        }),
                        !1)
                      );
                    },
                    l = (t) => {
                      t.confirmations < e || h() || o(t);
                    };
                  if (
                    (this.on(t, l),
                    a.push(() => {
                      this.removeListener(t, l);
                    }),
                    i)
                  ) {
                    let r = i.startBlock,
                      o = null;
                    const l = (a) =>
                      sr(this, void 0, void 0, function* () {
                        u ||
                          (yield fr(1e3),
                          this.getTransactionCount(i.from).then(
                            (c) =>
                              sr(this, void 0, void 0, function* () {
                                if (!u) {
                                  if (c <= i.nonce) r = a;
                                  else {
                                    {
                                      const e = yield this.getTransaction(t);
                                      if (e && null != e.blockNumber) return;
                                    }
                                    for (null == o && ((o = r - 3), o < i.startBlock && (o = i.startBlock)); o <= a; ) {
                                      if (u) return;
                                      const r = yield this.getBlockWithTransactions(o);
                                      for (let o = 0; o < r.transactions.length; o++) {
                                        const a = r.transactions[o];
                                        if (a.hash === t) return;
                                        if (a.from === i.from && a.nonce === i.nonce) {
                                          if (u) return;
                                          const r = yield this.waitForTransaction(a.hash, e);
                                          if (h()) return;
                                          let o = "replaced";
                                          return (
                                            a.data === i.data && a.to === i.to && a.value.eq(i.value)
                                              ? (o = "repriced")
                                              : "0x" === a.data &&
                                                a.from === a.to &&
                                                a.value.isZero() &&
                                                (o = "cancelled"),
                                            void s(
                                              ar.makeError(
                                                "transaction was replaced",
                                                n.Yd.errors.TRANSACTION_REPLACED,
                                                {
                                                  cancelled: "replaced" === o || "cancelled" === o,
                                                  reason: o,
                                                  replacement: this._wrapTransaction(a),
                                                  hash: t,
                                                  receipt: r,
                                                }
                                              )
                                            )
                                          );
                                        }
                                      }
                                      o++;
                                    }
                                  }
                                  u || this.once("block", l);
                                }
                              }),
                            (t) => {
                              u || this.once("block", l);
                            }
                          ));
                      });
                    if (u) return;
                    this.once("block", l),
                      a.push(() => {
                        this.removeListener("block", l);
                      });
                  }
                  if ("number" === typeof r && r > 0) {
                    const t = setTimeout(() => {
                      h() || s(ar.makeError("timeout exceeded", n.Yd.errors.TIMEOUT, { timeout: r }));
                    }, r);
                    t.unref && t.unref(),
                      a.push(() => {
                        clearTimeout(t);
                      });
                  }
                });
          });
        }
        getBlockNumber() {
          return sr(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield this.perform("getGasPrice", {});
            try {
              return b.O$.from(t);
            } catch (e) {
              return ar.throwError("bad result from backend", n.Yd.errors.SERVER_ERROR, {
                method: "getGasPrice",
                result: t,
                error: e,
              });
            }
          });
        }
        getBalance(t, e) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield u({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
              i = yield this.perform("getBalance", r);
            try {
              return b.O$.from(i);
            } catch (o) {
              return ar.throwError("bad result from backend", n.Yd.errors.SERVER_ERROR, {
                method: "getBalance",
                params: r,
                result: i,
                error: o,
              });
            }
          });
        }
        getTransactionCount(t, e) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield u({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
              i = yield this.perform("getTransactionCount", r);
            try {
              return b.O$.from(i).toNumber();
            } catch (o) {
              return ar.throwError("bad result from backend", n.Yd.errors.SERVER_ERROR, {
                method: "getTransactionCount",
                params: r,
                result: i,
                error: o,
              });
            }
          });
        }
        getCode(t, e) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield u({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
              i = yield this.perform("getCode", r);
            try {
              return (0, _.Dv)(i);
            } catch (o) {
              return ar.throwError("bad result from backend", n.Yd.errors.SERVER_ERROR, {
                method: "getCode",
                params: r,
                result: i,
                error: o,
              });
            }
          });
        }
        getStorageAt(t, e, r) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const i = yield u({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r),
                position: Promise.resolve(e).then((t) => (0, _.$P)(t)),
              }),
              o = yield this.perform("getStorageAt", i);
            try {
              return (0, _.Dv)(o);
            } catch (s) {
              return ar.throwError("bad result from backend", n.Yd.errors.SERVER_ERROR, {
                method: "getStorageAt",
                params: i,
                result: o,
                error: s,
              });
            }
          });
        }
        _wrapTransaction(t, e, r) {
          if (null != e && 32 !== (0, _.E1)(e)) throw new Error("invalid response - sendTransaction");
          const i = t;
          return (
            null != e &&
              t.hash !== e &&
              ar.throwError("Transaction hash mismatch from Provider.sendTransaction.", n.Yd.errors.UNKNOWN_ERROR, {
                expectedHash: t.hash,
                returnedHash: e,
              }),
            (i.wait = (e, i) =>
              sr(this, void 0, void 0, function* () {
                let o;
                null == e && (e = 1),
                  null == i && (i = 0),
                  0 !== e &&
                    null != r &&
                    (o = { data: t.data, from: t.from, nonce: t.nonce, to: t.to, value: t.value, startBlock: r });
                const s = yield this._waitForTransaction(t.hash, e, i, o);
                return null == s && 0 === e
                  ? null
                  : ((this._emitted["t:" + t.hash] = s.blockNumber),
                    0 === s.status &&
                      ar.throwError("transaction failed", n.Yd.errors.CALL_EXCEPTION, {
                        transactionHash: t.hash,
                        transaction: t,
                        receipt: s,
                      }),
                    s);
              })),
            i
          );
        }
        sendTransaction(t) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield Promise.resolve(t).then((t) => (0, _.Dv)(t)),
              r = this.formatter.transaction(t);
            null == r.confirmations && (r.confirmations = 0);
            const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
            try {
              const t = yield this.perform("sendTransaction", { signedTransaction: e });
              return this._wrapTransaction(r, t, n);
            } catch (i) {
              throw ((i.transaction = r), (i.transactionHash = r.hash), i);
            }
          });
        }
        _getTransactionRequest(t) {
          return sr(this, void 0, void 0, function* () {
            const e = yield t,
              r = {};
            return (
              ["from", "to"].forEach((t) => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then((t) => (t ? this._getAddress(t) : null)));
              }),
              ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((t) => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then((t) => (t ? b.O$.from(t) : null)));
              }),
              ["type"].forEach((t) => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then((t) => (null != t ? t : null)));
              }),
              e.accessList && (r.accessList = this.formatter.accessList(e.accessList)),
              ["data"].forEach((t) => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then((t) => (t ? (0, _.Dv)(t) : null)));
              }),
              this.formatter.transactionRequest(yield u(r))
            );
          });
        }
        _getFilter(t) {
          return sr(this, void 0, void 0, function* () {
            t = yield t;
            const e = {};
            return (
              null != t.address && (e.address = this._getAddress(t.address)),
              ["blockHash", "topics"].forEach((r) => {
                null != t[r] && (e[r] = t[r]);
              }),
              ["fromBlock", "toBlock"].forEach((r) => {
                null != t[r] && (e[r] = this._getBlockTag(t[r]));
              }),
              this.formatter.filter(yield u(e))
            );
          });
        }
        _call(t, e, r) {
          return sr(this, void 0, void 0, function* () {
            r >= 10 &&
              ar.throwError("CCIP read exceeded maximum redirections", n.Yd.errors.SERVER_ERROR, {
                redirects: r,
                transaction: t,
              });
            const i = t.to,
              o = yield this.perform("call", { transaction: t, blockTag: e });
            if (r >= 0 && "latest" === e && null != i && "0x556f1830" === o.substring(0, 10) && (0, _.E1)(o) % 32 === 4)
              try {
                const s = (0, _.p3)(o, 4),
                  a = (0, _.p3)(s, 0, 32);
                b.O$.from(a).eq(i) ||
                  ar.throwError("CCIP Read sender did not match", n.Yd.errors.CALL_EXCEPTION, {
                    name: "OffchainLookup",
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    transaction: t,
                    data: o,
                  });
                const u = [],
                  h = b.O$.from((0, _.p3)(s, 32, 64)).toNumber(),
                  l = b.O$.from((0, _.p3)(s, h, h + 32)).toNumber(),
                  c = (0, _.p3)(s, h + 32);
                for (let e = 0; e < l; e++) {
                  const r = br(c, 32 * e);
                  null == r &&
                    ar.throwError("CCIP Read contained corrupt URL string", n.Yd.errors.CALL_EXCEPTION, {
                      name: "OffchainLookup",
                      signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: t,
                      data: o,
                    }),
                    u.push(r);
                }
                const f = _r(s, 64);
                b.O$.from((0, _.p3)(s, 100, 128)).isZero() ||
                  ar.throwError("CCIP Read callback selector included junk", n.Yd.errors.CALL_EXCEPTION, {
                    name: "OffchainLookup",
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    transaction: t,
                    data: o,
                  });
                const d = (0, _.p3)(s, 96, 100),
                  p = _r(s, 128),
                  m = yield this.ccipReadFetch(t, f, u);
                null == m &&
                  ar.throwError("CCIP Read disabled or provided no URLs", n.Yd.errors.CALL_EXCEPTION, {
                    name: "OffchainLookup",
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    transaction: t,
                    data: o,
                  });
                const g = { to: i, data: (0, _.xs)([d, kr([m, p])]) };
                return this._call(g, e, r + 1);
              } catch (s) {
                if (s.code === n.Yd.errors.SERVER_ERROR) throw s;
              }
            try {
              return (0, _.Dv)(o);
            } catch (s) {
              return ar.throwError("bad result from backend", n.Yd.errors.SERVER_ERROR, {
                method: "call",
                params: { transaction: t, blockTag: e },
                result: o,
                error: s,
              });
            }
          });
        }
        call(t, e) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield u({
              transaction: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(e),
              ccipReadEnabled: Promise.resolve(t.ccipReadEnabled),
            });
            return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1);
          });
        }
        estimateGas(t) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield u({ transaction: this._getTransactionRequest(t) }),
              r = yield this.perform("estimateGas", e);
            try {
              return b.O$.from(r);
            } catch (i) {
              return ar.throwError("bad result from backend", n.Yd.errors.SERVER_ERROR, {
                method: "estimateGas",
                params: e,
                result: r,
                error: i,
              });
            }
          });
        }
        _getAddress(t) {
          return sr(this, void 0, void 0, function* () {
            "string" !== typeof (t = yield t) && ar.throwArgumentError("invalid address or ENS name", "name", t);
            const e = yield this.resolveName(t);
            return (
              null == e &&
                ar.throwError("ENS name not configured", n.Yd.errors.UNSUPPORTED_OPERATION, {
                  operation: `resolveName(${JSON.stringify(t)})`,
                }),
              e
            );
          });
        }
        _getBlock(t, e) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let r = -128;
            const n = { includeTransactions: !!e };
            if ((0, _.A7)(t, 32)) n.blockHash = t;
            else
              try {
                (n.blockTag = yield this._getBlockTag(t)),
                  (0, _.A7)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16));
              } catch (i) {
                ar.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t);
              }
            return Me(
              () =>
                sr(this, void 0, void 0, function* () {
                  const t = yield this.perform("getBlock", n);
                  if (null == t)
                    return (null != n.blockHash && null == this._emitted["b:" + n.blockHash]) ||
                      (null != n.blockTag && r > this._emitted.block)
                      ? null
                      : void 0;
                  if (e) {
                    let e = null;
                    for (let n = 0; n < t.transactions.length; n++) {
                      const r = t.transactions[n];
                      if (null == r.blockNumber) r.confirmations = 0;
                      else if (null == r.confirmations) {
                        null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                        let t = e - r.blockNumber + 1;
                        t <= 0 && (t = 1), (r.confirmations = t);
                      }
                    }
                    const r = this.formatter.blockWithTransactions(t);
                    return (r.transactions = r.transactions.map((t) => this._wrapTransaction(t))), r;
                  }
                  return this.formatter.block(t);
                }),
              { oncePoll: this }
            );
          });
        }
        getBlock(t) {
          return this._getBlock(t, !1);
        }
        getBlockWithTransactions(t) {
          return this._getBlock(t, !0);
        }
        getTransaction(t) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            const e = { transactionHash: this.formatter.hash(t, !0) };
            return Me(
              () =>
                sr(this, void 0, void 0, function* () {
                  const r = yield this.perform("getTransaction", e);
                  if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                  const n = this.formatter.transactionResponse(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return this._wrapTransaction(n);
                }),
              { oncePoll: this }
            );
          });
        }
        getTransactionReceipt(t) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            const e = { transactionHash: this.formatter.hash(t, !0) };
            return Me(
              () =>
                sr(this, void 0, void 0, function* () {
                  const r = yield this.perform("getTransactionReceipt", e);
                  if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                  if (null == r.blockHash) return;
                  const n = this.formatter.receipt(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return n;
                }),
              { oncePoll: this }
            );
          });
        }
        getLogs(t) {
          return sr(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield u({ filter: this._getFilter(t) }),
              r = yield this.perform("getLogs", e);
            return (
              r.forEach((t) => {
                null == t.removed && (t.removed = !1);
              }),
              or.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
            );
          });
        }
        getEtherPrice() {
          return sr(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform("getEtherPrice", {});
          });
        }
        _getBlockTag(t) {
          return sr(this, void 0, void 0, function* () {
            if ("number" === typeof (t = yield t) && t < 0) {
              t % 1 && ar.throwArgumentError("invalid BlockTag", "blockTag", t);
              let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
              return (e += t), e < 0 && (e = 0), this.formatter.blockTag(e);
            }
            return this.formatter.blockTag(t);
          });
        }
        getResolver(t) {
          return sr(this, void 0, void 0, function* () {
            let e = t;
            for (;;) {
              if ("" === e || "." === e) return null;
              if ("eth" !== t && "eth" === e) return null;
              const r = yield this._getResolver(e, "getResolver");
              if (null != r) {
                const n = new Mr(this, r, t);
                return e === t || (yield n.supportsWildcard()) ? n : null;
              }
              e = e.split(".").slice(1).join(".");
            }
          });
        }
        _getResolver(t, e) {
          return sr(this, void 0, void 0, function* () {
            null == e && (e = "ENS");
            const r = yield this.getNetwork();
            r.ensAddress ||
              ar.throwError("network does not support ENS", n.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: e,
                network: r.name,
              });
            try {
              const e = yield this.call({ to: r.ensAddress, data: "0x0178b8bf" + Ve(t).substring(2) });
              return this.formatter.callAddress(e);
            } catch (i) {}
            return null;
          });
        }
        resolveName(t) {
          return sr(this, void 0, void 0, function* () {
            t = yield t;
            try {
              return Promise.resolve(this.formatter.address(t));
            } catch (r) {
              if ((0, _.A7)(t)) throw r;
            }
            "string" !== typeof t && ar.throwArgumentError("invalid ENS name", "name", t);
            const e = yield this.getResolver(t);
            return e ? yield e.getAddress() : null;
          });
        }
        lookupAddress(t) {
          return sr(this, void 0, void 0, function* () {
            t = yield t;
            const e = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse",
              r = yield this._getResolver(e, "lookupAddress");
            if (null == r) return null;
            const n = br(yield this.call({ to: r, data: "0x691f3431" + Ve(e).substring(2) }), 0);
            return (yield this.resolveName(n)) != t ? null : n;
          });
        }
        getAvatar(t) {
          return sr(this, void 0, void 0, function* () {
            let e = null;
            if ((0, _.A7)(t)) {
              const r = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse",
                o = yield this._getResolver(r, "getAvatar");
              if (!o) return null;
              e = new Mr(this, o, r);
              try {
                const t = yield e.getAvatar();
                if (t) return t.url;
              } catch (i) {
                if (i.code !== n.Yd.errors.CALL_EXCEPTION) throw i;
              }
              try {
                const t = br(yield this.call({ to: o, data: "0x691f3431" + Ve(r).substring(2) }), 0);
                e = yield this.getResolver(t);
              } catch (i) {
                if (i.code !== n.Yd.errors.CALL_EXCEPTION) throw i;
                return null;
              }
            } else if (((e = yield this.getResolver(t)), !e)) return null;
            const r = yield e.getAvatar();
            return null == r ? null : r.url;
          });
        }
        perform(t, e) {
          return ar.throwError(t + " not implemented", n.Yd.errors.NOT_IMPLEMENTED, { operation: t });
        }
        _startEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _stopEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _addEventListener(t, e, r) {
          const n = new pr(lr(t), e, r);
          return this._events.push(n), this._startEvent(n), this;
        }
        on(t, e) {
          return this._addEventListener(t, e, !1);
        }
        once(t, e) {
          return this._addEventListener(t, e, !0);
        }
        emit(t, ...e) {
          let r = !1,
            n = [],
            i = lr(t);
          return (
            (this._events = this._events.filter(
              (t) =>
                t.tag !== i ||
                (setTimeout(() => {
                  t.listener.apply(this, e);
                }, 0),
                (r = !0),
                !t.once || (n.push(t), !1))
            )),
            n.forEach((t) => {
              this._stopEvent(t);
            }),
            r
          );
        }
        listenerCount(t) {
          if (!t) return this._events.length;
          let e = lr(t);
          return this._events.filter((t) => t.tag === e).length;
        }
        listeners(t) {
          if (null == t) return this._events.map((t) => t.listener);
          let e = lr(t);
          return this._events.filter((t) => t.tag === e).map((t) => t.listener);
        }
        off(t, e) {
          if (null == e) return this.removeAllListeners(t);
          const r = [];
          let n = !1,
            i = lr(t);
          return (
            (this._events = this._events.filter(
              (t) => t.tag !== i || t.listener != e || !!n || ((n = !0), r.push(t), !1)
            )),
            r.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
        removeAllListeners(t) {
          let e = [];
          if (null == t) (e = this._events), (this._events = []);
          else {
            const r = lr(t);
            this._events = this._events.filter((t) => t.tag !== r || (e.push(t), !1));
          }
          return (
            e.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
      }
      var Rr = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const Sr = new n.Yd(p),
        Or = ["call", "estimateGas"];
      function Cr(t) {
        if (null == t) return null;
        if ("string" === typeof t.message && t.message.match("reverted") && (0, _.A7)(t.data))
          return { message: t.message, data: t.data };
        if ("object" === typeof t) {
          for (const e in t) {
            const r = Cr(t[e]);
            if (r) return r;
          }
          return null;
        }
        if ("string" === typeof t)
          try {
            return Cr(JSON.parse(t));
          } catch (e) {}
        return null;
      }
      function Tr(t, e, r) {
        if ("call" === t) {
          const t = Cr(e);
          if (t) return t.data;
          Sr.throwError("missing revert data in call exception", n.Yd.errors.CALL_EXCEPTION, { error: e, data: "0x" });
        }
        let i = e.message;
        e.code === n.Yd.errors.SERVER_ERROR && e.error && "string" === typeof e.error.message
          ? (i = e.error.message)
          : "string" === typeof e.body
          ? (i = e.body)
          : "string" === typeof e.responseText && (i = e.responseText),
          (i = (i || "").toLowerCase());
        const o = r.transaction || r.signedTransaction;
        throw (
          (i.match(/insufficient funds|base fee exceeds gas limit/) &&
            Sr.throwError("insufficient funds for intrinsic transaction cost", n.Yd.errors.INSUFFICIENT_FUNDS, {
              error: e,
              method: t,
              transaction: o,
            }),
          i.match(/nonce too low/) &&
            Sr.throwError("nonce has already been used", n.Yd.errors.NONCE_EXPIRED, {
              error: e,
              method: t,
              transaction: o,
            }),
          i.match(/replacement transaction underpriced/) &&
            Sr.throwError("replacement fee too low", n.Yd.errors.REPLACEMENT_UNDERPRICED, {
              error: e,
              method: t,
              transaction: o,
            }),
          i.match(/only replay-protected/) &&
            Sr.throwError("legacy pre-eip-155 transactions not supported", n.Yd.errors.UNSUPPORTED_OPERATION, {
              error: e,
              method: t,
              transaction: o,
            }),
          Or.indexOf(t) >= 0 &&
            i.match(/gas required exceeds allowance|always failing transaction|execution reverted/) &&
            Sr.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              n.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: e, method: t, transaction: o }
            ),
          e)
        );
      }
      function Br(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function Fr(t) {
        if (t.error) {
          const e = new Error(t.error.message);
          throw ((e.code = t.error.code), (e.data = t.error.data), e);
        }
        return t.result;
      }
      function Lr(t) {
        return t ? t.toLowerCase() : t;
      }
      const Ur = {};
      class Dr extends w {
        constructor(t, e, r) {
          if ((Sr.checkNew(new.target, Dr), super(), t !== Ur))
            throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
          s(this, "provider", e),
            null == r && (r = 0),
            "string" === typeof r
              ? (s(this, "_address", this.provider.formatter.address(r)), s(this, "_index", null))
              : "number" === typeof r
              ? (s(this, "_index", r), s(this, "_address", null))
              : Sr.throwArgumentError("invalid address or index", "addressOrIndex", r);
        }
        connect(t) {
          return Sr.throwError("cannot alter JSON-RPC Signer connection", n.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: "connect",
          });
        }
        connectUnchecked() {
          return new jr(Ur, this.provider, this._address || this._index);
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send("eth_accounts", [])
                .then(
                  (t) => (
                    t.length <= this._index &&
                      Sr.throwError("unknown account #" + this._index, n.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress",
                      }),
                    this.provider.formatter.address(t[this._index])
                  )
                );
        }
        sendUncheckedTransaction(t) {
          t = h(t);
          const e = this.getAddress().then((t) => (t && (t = t.toLowerCase()), t));
          if (null == t.gasLimit) {
            const r = h(t);
            (r.from = e), (t.gasLimit = this.provider.estimateGas(r));
          }
          return (
            null != t.to &&
              (t.to = Promise.resolve(t.to).then((t) =>
                Rr(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  const e = yield this.provider.resolveName(t);
                  return null == e && Sr.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e;
                })
              )),
            u({ tx: u(t), sender: e }).then(({ tx: e, sender: r }) => {
              null != e.from
                ? e.from.toLowerCase() !== r && Sr.throwArgumentError("from address mismatch", "transaction", t)
                : (e.from = r);
              const n = this.provider.constructor.hexlifyTransaction(e, { from: !0 });
              return this.provider.send("eth_sendTransaction", [n]).then(
                (t) => t,
                (t) => Tr("sendTransaction", t, n)
              );
            })
          );
        }
        signTransaction(t) {
          return Sr.throwError("signing transactions is unsupported", n.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: "signTransaction",
          });
        }
        sendTransaction(t) {
          return Rr(this, void 0, void 0, function* () {
            const e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval),
              r = yield this.sendUncheckedTransaction(t);
            try {
              return yield Me(
                () =>
                  Rr(this, void 0, void 0, function* () {
                    const t = yield this.provider.getTransaction(r);
                    if (null !== t) return this.provider._wrapTransaction(t, r, e);
                  }),
                { oncePoll: this.provider }
              );
            } catch (n) {
              throw ((n.transactionHash = r), n);
            }
          });
        }
        signMessage(t) {
          return Rr(this, void 0, void 0, function* () {
            const e = "string" === typeof t ? Y(t) : t,
              r = yield this.getAddress();
            return yield this.provider.send("personal_sign", [(0, _.Dv)(e), r.toLowerCase()]);
          });
        }
        _legacySignMessage(t) {
          return Rr(this, void 0, void 0, function* () {
            const e = "string" === typeof t ? Y(t) : t,
              r = yield this.getAddress();
            return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, _.Dv)(e)]);
          });
        }
        _signTypedData(t, e, r) {
          return Rr(this, void 0, void 0, function* () {
            const n = yield ct.resolveNames(t, e, r, (t) => this.provider.resolveName(t)),
              i = yield this.getAddress();
            return yield this.provider.send("eth_signTypedData_v4", [
              i.toLowerCase(),
              JSON.stringify(ct.getPayload(n.domain, e, n.value)),
            ]);
          });
        }
        unlock(t) {
          return Rr(this, void 0, void 0, function* () {
            const e = this.provider,
              r = yield this.getAddress();
            return e.send("personal_unlockAccount", [r.toLowerCase(), t, null]);
          });
        }
      }
      class jr extends Dr {
        sendTransaction(t) {
          return this.sendUncheckedTransaction(t).then((t) => ({
            hash: t,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (e) => this.provider.waitForTransaction(t, e),
          }));
        }
      }
      const qr = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class zr extends Ir {
        constructor(t, e) {
          Sr.checkNew(new.target, zr);
          let r = e;
          null == r &&
            (r = new Promise((t, e) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (e) => {
                    t(e);
                  },
                  (t) => {
                    e(t);
                  }
                );
              }, 0);
            })),
            super(r),
            t || (t = a(this.constructor, "defaultUrl")()),
            s(this, "connection", "string" === typeof t ? Object.freeze({ url: t }) : Object.freeze(h(t))),
            (this._nextId = 42);
        }
        get _cache() {
          return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache;
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return (
            this._cache.detectNetwork ||
              ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache.detectNetwork = null;
              }, 0)),
            this._cache.detectNetwork
          );
        }
        _uncachedDetectNetwork() {
          return Rr(this, void 0, void 0, function* () {
            yield Br(0);
            let t = null;
            try {
              t = yield this.send("eth_chainId", []);
            } catch (e) {
              try {
                t = yield this.send("net_version", []);
              } catch (e) {}
            }
            if (null != t) {
              const r = a(this.constructor, "getNetwork");
              try {
                return r(b.O$.from(t).toNumber());
              } catch (e) {
                return Sr.throwError("could not detect network", n.Yd.errors.NETWORK_ERROR, {
                  chainId: t,
                  event: "invalidNetwork",
                  serverError: e,
                });
              }
            }
            return Sr.throwError("could not detect network", n.Yd.errors.NETWORK_ERROR, { event: "noNetwork" });
          });
        }
        getSigner(t) {
          return new Dr(Ur, this, t);
        }
        getUncheckedSigner(t) {
          return this.getSigner(t).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((t) => t.map((t) => this.formatter.address(t)));
        }
        send(t, e) {
          const r = { method: t, params: e, id: this._nextId++, jsonrpc: "2.0" };
          this.emit("debug", { action: "request", request: d(r), provider: this });
          const n = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
          if (n && this._cache[t]) return this._cache[t];
          const i = ke(this.connection, JSON.stringify(r), Fr).then(
            (t) => (this.emit("debug", { action: "response", request: r, response: t, provider: this }), t),
            (t) => {
              throw (this.emit("debug", { action: "response", error: t, request: r, provider: this }), t);
            }
          );
          return (
            n &&
              ((this._cache[t] = i),
              setTimeout(() => {
                this._cache[t] = null;
              }, 0)),
            i
          );
        }
        prepareRequest(t, e) {
          switch (t) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [Lr(e.address), e.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [Lr(e.address), e.blockTag]];
            case "getCode":
              return ["eth_getCode", [Lr(e.address), e.blockTag]];
            case "getStorageAt":
              return ["eth_getStorageAt", [Lr(e.address), e.position, e.blockTag]];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [e.signedTransaction]];
            case "getBlock":
              return e.blockTag
                ? ["eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]]
                : e.blockHash
                ? ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]]
                : null;
            case "getTransaction":
              return ["eth_getTransactionByHash", [e.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [e.transactionHash]];
            case "call":
              return ["eth_call", [a(this.constructor, "hexlifyTransaction")(e.transaction, { from: !0 }), e.blockTag]];
            case "estimateGas":
              return ["eth_estimateGas", [a(this.constructor, "hexlifyTransaction")(e.transaction, { from: !0 })]];
            case "getLogs":
              return (
                e.filter && null != e.filter.address && (e.filter.address = Lr(e.filter.address)),
                ["eth_getLogs", [e.filter]]
              );
          }
          return null;
        }
        perform(t, e) {
          return Rr(this, void 0, void 0, function* () {
            if ("call" === t || "estimateGas" === t) {
              const t = e.transaction;
              if (
                t &&
                null != t.type &&
                b.O$.from(t.type).isZero() &&
                null == t.maxFeePerGas &&
                null == t.maxPriorityFeePerGas
              ) {
                const r = yield this.getFeeData();
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  (((e = h(e)).transaction = h(t)), delete e.transaction.type);
              }
            }
            const r = this.prepareRequest(t, e);
            null == r && Sr.throwError(t + " not implemented", n.Yd.errors.NOT_IMPLEMENTED, { operation: t });
            try {
              return yield this.send(r[0], r[1]);
            } catch (i) {
              return Tr(t, i, e);
            }
          });
        }
        _startEvent(t) {
          "pending" === t.tag && this._startPending(), super._startEvent(t);
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          const t = this,
            e = this.send("eth_newPendingTransactionFilter", []);
          (this._pendingFilter = e),
            e
              .then(function (r) {
                return (
                  (function n() {
                    t.send("eth_getFilterChanges", [r])
                      .then(function (r) {
                        if (t._pendingFilter != e) return null;
                        let n = Promise.resolve();
                        return (
                          r.forEach(function (e) {
                            (t._emitted["t:" + e.toLowerCase()] = "pending"),
                              (n = n.then(function () {
                                return t.getTransaction(e).then(function (e) {
                                  return t.emit("pending", e), null;
                                });
                              }));
                          }),
                          n.then(function () {
                            return Br(1e3);
                          })
                        );
                      })
                      .then(function () {
                        if (t._pendingFilter == e)
                          return (
                            setTimeout(function () {
                              n();
                            }, 0),
                            null
                          );
                        t.send("eth_uninstallFilter", [r]);
                      })
                      .catch((t) => {});
                  })(),
                  r
                );
              })
              .catch((t) => {});
        }
        _stopEvent(t) {
          "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null),
            super._stopEvent(t);
        }
        static hexlifyTransaction(t, e) {
          const r = h(qr);
          if (e) for (const o in e) e[o] && (r[o] = !0);
          var n, i;
          (i = r),
            ((n = t) && "object" === typeof n) || o.throwArgumentError("invalid object", "object", n),
            Object.keys(n).forEach((t) => {
              i[t] || o.throwArgumentError("invalid object key - " + t, "transaction:" + t, n);
            });
          const s = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach(function (e) {
              if (null == t[e]) return;
              const r = (0, _.$P)(t[e]);
              "gasLimit" === e && (e = "gas"), (s[e] = r);
            }),
            ["from", "to", "data"].forEach(function (e) {
              null != t[e] && (s[e] = (0, _.Dv)(t[e]));
            }),
            t.accessList && (s.accessList = ce(t.accessList)),
            s
          );
        }
      }
      const $r = new n.Yd(p);
      let Gr = 1;
      function Yr(t, e) {
        const r = "Web3LegacyFetcher";
        return function (t, n) {
          const i = { method: t, params: n, id: Gr++, jsonrpc: "2.0" };
          return new Promise((t, n) => {
            this.emit("debug", { action: "request", fetcher: r, request: d(i), provider: this }),
              e(i, (e, o) => {
                if (e)
                  return (
                    this.emit("debug", { action: "response", fetcher: r, error: e, request: i, provider: this }), n(e)
                  );
                if (
                  (this.emit("debug", { action: "response", fetcher: r, request: i, response: o, provider: this }),
                  o.error)
                ) {
                  const t = new Error(o.error.message);
                  return (t.code = o.error.code), (t.data = o.error.data), n(t);
                }
                t(o.result);
              });
          });
        };
      }
      class Hr extends zr {
        constructor(t, e) {
          $r.checkNew(new.target, Hr), null == t && $r.throwArgumentError("missing provider", "provider", t);
          let r = null,
            n = null,
            i = null;
          "function" === typeof t
            ? ((r = "unknown:"), (n = t))
            : ((r = t.host || t.path || ""),
              !r && t.isMetaMask && (r = "metamask"),
              (i = t),
              t.request
                ? ("" === r && (r = "eip-1193:"),
                  (n = (function (t) {
                    return function (e, r) {
                      null == r && (r = []);
                      const n = { method: e, params: r };
                      return (
                        this.emit("debug", {
                          action: "request",
                          fetcher: "Eip1193Fetcher",
                          request: d(n),
                          provider: this,
                        }),
                        t.request(n).then(
                          (t) => (
                            this.emit("debug", {
                              action: "response",
                              fetcher: "Eip1193Fetcher",
                              request: n,
                              response: t,
                              provider: this,
                            }),
                            t
                          ),
                          (t) => {
                            throw (
                              (this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: n,
                                error: t,
                                provider: this,
                              }),
                              t)
                            );
                          }
                        )
                      );
                    };
                  })(t)))
                : t.sendAsync
                ? (n = Yr(0, t.sendAsync.bind(t)))
                : t.send
                ? (n = Yr(0, t.send.bind(t)))
                : $r.throwArgumentError("unsupported provider", "provider", t),
              r || (r = "unknown:")),
            super(r, e),
            s(this, "jsonRpcFetchFunc", n),
            s(this, "provider", i);
        }
        send(t, e) {
          return this.jsonRpcFetchFunc(t, e);
        }
      }
    },
    5553: function (t, e, r) {
      "use strict";
      r.d(e, {
        dF: function () {
          return _;
        },
      });
      var n = r(6441),
        i = r(1581),
        o = r(8794),
        s = r(2593);
      const a = new i.Yd(o.i),
        u = {},
        h = s.O$.from(0),
        l = s.O$.from(-1);
      function c(t, e, r, n) {
        const o = { fault: e, operation: r };
        return void 0 !== n && (o.value = n), a.throwError(t, i.Yd.errors.NUMERIC_FAULT, o);
      }
      let f = "0";
      for (; f.length < 256; ) f += f;
      function d(t) {
        if ("number" !== typeof t)
          try {
            t = s.O$.from(t).toNumber();
          } catch (e) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + f.substring(0, t)
          : a.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function p(t, e) {
        null == e && (e = 0);
        const r = d(e),
          n = (t = s.O$.from(t)).lt(h);
        n && (t = t.mul(l));
        let i = t.mod(r).toString();
        for (; i.length < r.length - 1; ) i = "0" + i;
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(r).toString();
        return (t = 1 === r.length ? o : o + "." + i), n && (t = "-" + t), t;
      }
      function m(t, e) {
        null == e && (e = 0);
        const r = d(e);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) || a.throwArgumentError("invalid decimal value", "value", t);
        const n = "-" === t.substring(0, 1);
        n && (t = t.substring(1)), "." === t && a.throwArgumentError("missing value", "value", t);
        const i = t.split(".");
        i.length > 2 && a.throwArgumentError("too many decimal points", "value", t);
        let o = i[0],
          u = i[1];
        for (o || (o = "0"), u || (u = "0"); "0" === u[u.length - 1]; ) u = u.substring(0, u.length - 1);
        for (
          u.length > r.length - 1 && c("fractional component exceeds decimals", "underflow", "parseFixed"),
            "" === u && (u = "0");
          u.length < r.length - 1;

        )
          u += "0";
        const h = s.O$.from(o),
          f = s.O$.from(u);
        let p = h.mul(r).add(f);
        return n && (p = p.mul(l)), p;
      }
      class g {
        constructor(t, e, r, n) {
          t !== u &&
            a.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              i.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.signed = e),
            (this.width = r),
            (this.decimals = n),
            (this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(n)),
            (this._multiplier = d(n)),
            Object.freeze(this);
        }
        static from(t) {
          if (t instanceof g) return t;
          "number" === typeof t && (t = `fixed128x${t}`);
          let e = !0,
            r = 128,
            n = 18;
          if ("string" === typeof t)
            if ("fixed" === t);
            else if ("ufixed" === t) e = !1;
            else {
              const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              i || a.throwArgumentError("invalid fixed format", "format", t),
                (e = "u" !== i[1]),
                (r = parseInt(i[2])),
                (n = parseInt(i[3]));
            }
          else if (t) {
            const i = (e, r, n) =>
              null == t[e]
                ? n
                : (typeof t[e] !== r &&
                    a.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]),
                  t[e]);
            (e = i("signed", "boolean", e)), (r = i("width", "number", r)), (n = i("decimals", "number", n));
          }
          return (
            r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r),
            n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n),
            new g(u, e, r, n)
          );
        }
      }
      class v {
        constructor(t, e, r, n) {
          a.checkNew(new.target, v),
            t !== u &&
              a.throwError(
                "cannot use FixedNumber constructor; use FixedNumber.from",
                i.Yd.errors.UNSUPPORTED_OPERATION,
                { operation: "new FixedFormat" }
              ),
            (this.format = n),
            (this._hex = e),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this);
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals);
          return v.fromValue(e.add(r), this.format.decimals, this.format);
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals);
          return v.fromValue(e.sub(r), this.format.decimals, this.format);
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals);
          return v.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format);
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals);
          return v.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format);
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = v.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return this.isNegative() && r && (e = e.subUnsafe(y.toFormat(e.format))), e;
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = v.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return !this.isNegative() && r && (e = e.addUnsafe(y.toFormat(e.format))), e;
        }
        round(t) {
          null == t && (t = 0);
          const e = this.toString().split(".");
          if (
            (1 === e.length && e.push("0"),
            (t < 0 || t > 80 || t % 1) && a.throwArgumentError("invalid decimal count", "decimals", t),
            e[1].length <= t)
          )
            return this;
          const r = v.from("1" + f.substring(0, t), this.format),
            n = w.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r);
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value;
        }
        isNegative() {
          return "-" === this._value[0];
        }
        toString() {
          return this._value;
        }
        toHexString(t) {
          if (null == t) return this._hex;
          t % 8 && a.throwArgumentError("invalid byte width", "width", t);
          const e = s.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
          return (0, n.$m)(e, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return v.fromString(this._value, t);
        }
        static fromValue(t, e, r) {
          return (
            null != r || null == e || (0, s.Zm)(e) || ((r = e), (e = null)),
            null == e && (e = 0),
            null == r && (r = "fixed"),
            v.fromString(p(t, e), g.from(r))
          );
        }
        static fromString(t, e) {
          null == e && (e = "fixed");
          const r = g.from(e),
            i = m(t, r.decimals);
          !r.signed && i.lt(h) && c("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          r.signed ? (o = i.toTwos(r.width).toHexString()) : ((o = i.toHexString()), (o = (0, n.$m)(o, r.width / 8)));
          const s = p(i, r.decimals);
          return new v(u, o, s, r);
        }
        static fromBytes(t, e) {
          null == e && (e = "fixed");
          const r = g.from(e);
          if ((0, n.lE)(t).length > r.width / 8) throw new Error("overflow");
          let i = s.O$.from(t);
          r.signed && (i = i.fromTwos(r.width));
          const o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            a = p(i, r.decimals);
          return new v(u, o, a, r);
        }
        static from(t, e) {
          if ("string" === typeof t) return v.fromString(t, e);
          if ((0, n._t)(t)) return v.fromBytes(t, e);
          try {
            return v.fromValue(t, 0, e);
          } catch (r) {
            if (r.code !== i.Yd.errors.INVALID_ARGUMENT) throw r;
          }
          return a.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      const y = v.from(1),
        w = v.from("0.5"),
        b = (new i.Yd("units/5.6.0"), ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"]);
      function _(t) {
        return (function (t, e) {
          if ("string" === typeof e) {
            const t = b.indexOf(e);
            -1 !== t && (e = 3 * t);
          }
          return p(t, null != e ? e : 18);
        })(t, 18);
      }
    },
    6939: function (t, e, r) {
      "use strict";
      r.d(e, {
        Q: function () {
          return o;
        },
      });
      var n = r(7187),
        i = r(3653);
      var o = (function (t) {
        var e, r;
        function n(e) {
          var r,
            n = (void 0 === e ? {} : e).supportedChainIds;
          return ((r = t.call(this) || this).supportedChainIds = n), r;
        }
        (r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r);
        var o = n.prototype;
        return (
          (o.emitUpdate = function (t) {
            this.emit(i._.Update, t);
          }),
          (o.emitError = function (t) {
            this.emit(i._.Error, t);
          }),
          (o.emitDeactivate = function () {
            this.emit(i._.Deactivate);
          }),
          n
        );
      })(n.EventEmitter);
    },
    9795: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ht: function () {
          return P;
        },
        Ge: function () {
          return x;
        },
      });
      var n = r(7294),
        i = "Invariant failed";
      function o(t, e) {
        if (!t) throw new Error(i);
      }
      var s = r(3653),
        a = r(6441),
        u = r(8197);
      function h() {
        return (
          (h =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
          h.apply(this, arguments)
        );
      }
      function l(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), f(t, e);
      }
      function c(t) {
        return (
          (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          c(t)
        );
      }
      function f(t, e) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          f(t, e)
        );
      }
      function d() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function p(t, e, r) {
        return (
          (p = d()
            ? Reflect.construct
            : function (t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var i = new (Function.bind.apply(t, n))();
                return r && f(i, r.prototype), i;
              }),
          p.apply(null, arguments)
        );
      }
      function m(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (
          (m = function (t) {
            if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return p(t, arguments, c(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
              f(n, t)
            );
          }),
          m(t)
        );
      }
      "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" !== typeof Symbol &&
          (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      function g(t, e) {
        try {
          var r = t();
        } catch (n) {
          return e(n);
        }
        return r && r.then ? r.then(void 0, e) : r;
      }
      function v(t) {
        if ("string" === typeof t) {
          t = t.replace(/^Ox/, "0x");
          var e = Number.parseInt(t, "0x" === t.trim().substring(0, 2) ? 16 : 10);
          return Number.isNaN(e) && o(!1), e;
        }
        return Number.isInteger(t) || o(!1), t;
      }
      function y(t) {
        ("string" === typeof t && t.match(/^(0x)?[0-9a-fA-F]{40}$/)) || o(!1);
        for (
          var e = "0x" === t.substring(0, 2) ? t : "0x" + t,
            r = e.toLowerCase().substring(2).split(""),
            n = new Uint8Array(40),
            i = 0;
          i < 40;
          i++
        )
          n[i] = r[i].charCodeAt(0);
        for (var s = (0, a.lE)((0, u.w)(n)), h = 0; h < 40; h += 2)
          s[h >> 1] >> 4 >= 8 && (r[h] = r[h].toUpperCase()),
            (15 & s[h >> 1]) >= 8 && (r[h + 1] = r[h + 1].toUpperCase());
        var l = "0x" + r.join("");
        return e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== l && o(!1), l;
      }
      var w,
        b = function (t, e) {
          try {
            var r = function (r) {
                return Promise.resolve(
                  Promise.all([
                    void 0 === e.chainId ? t.getChainId() : e.chainId,
                    void 0 === e.account ? t.getAccount() : e.account,
                  ])
                ).then(function (e) {
                  var n = e[0],
                    i = e[1],
                    o = v(n);
                  if (t.supportedChainIds && !t.supportedChainIds.includes(o)) throw new E(o, t.supportedChainIds);
                  var s = null === i ? i : y(i);
                  return { provider: r, chainId: o, account: s };
                });
              },
              n = void 0 === e.provider;
            return Promise.resolve(n ? Promise.resolve(t.getProvider()).then(r) : r(e.provider));
          } catch (i) {
            return Promise.reject(i);
          }
        },
        _ = (function (t) {
          function e() {
            var e;
            return ((e = t.call(this) || this).name = e.constructor.name), e;
          }
          return l(e, t), e;
        })(m(Error)),
        E = (function (t) {
          function e(e, r) {
            var n;
            return (
              ((n = t.call(this) || this).name = n.constructor.name),
              (n.message = "Unsupported chain id: " + e + ". Supported chain ids are: " + r + "."),
              n
            );
          }
          return l(e, t), e;
        })(m(Error));
      function A(t, e) {
        var r = e.type,
          n = e.payload;
        switch (r) {
          case w.ACTIVATE_CONNECTOR:
            return {
              connector: n.connector,
              provider: n.provider,
              chainId: n.chainId,
              account: n.account,
              onError: n.onError,
            };
          case w.UPDATE:
            var i = n.provider,
              o = n.chainId,
              s = n.account;
            return h(
              {},
              t,
              void 0 === i ? {} : { provider: i },
              void 0 === o ? {} : { chainId: o },
              void 0 === s ? {} : { account: s }
            );
          case w.UPDATE_FROM_ERROR:
            var a = n.provider,
              u = n.chainId,
              l = n.account;
            return h(
              {},
              t,
              void 0 === a ? {} : { provider: a },
              void 0 === u ? {} : { chainId: u },
              void 0 === l ? {} : { account: l },
              { error: void 0 }
            );
          case w.ERROR:
            var c = n.error;
            return { connector: t.connector, error: c, onError: t.onError };
          case w.ERROR_FROM_ACTIVATION:
            return { connector: n.connector, error: n.error };
          case w.DEACTIVATE_CONNECTOR:
            return {};
        }
      }
      !(function (t) {
        (t[(t.ACTIVATE_CONNECTOR = 0)] = "ACTIVATE_CONNECTOR"),
          (t[(t.UPDATE = 1)] = "UPDATE"),
          (t[(t.UPDATE_FROM_ERROR = 2)] = "UPDATE_FROM_ERROR"),
          (t[(t.ERROR = 3)] = "ERROR"),
          (t[(t.ERROR_FROM_ACTIVATION = 4)] = "ERROR_FROM_ACTIVATION"),
          (t[(t.DEACTIVATE_CONNECTOR = 5)] = "DEACTIVATE_CONNECTOR");
      })(w || (w = {}));
      var N = "primary",
        k = {};
      function M(t) {
        k[t] && o(!1),
          (k[t] = (0, n.createContext)({
            activate: function () {
              try {
                return o(!1), Promise.resolve();
              } catch (t) {
                return Promise.reject(t);
              }
            },
            setError: function () {
              o(!1);
            },
            deactivate: function () {
              o(!1);
            },
            active: !1,
          })),
          (k[t].displayName = "Web3ReactContext - " + t);
        var e = k[t].Provider;
        return function (t) {
          var r = t.getLibrary,
            i = t.children,
            o = (function () {
              var t = (0, n.useReducer)(A, {}),
                e = t[0],
                r = t[1],
                i = e.connector,
                o = e.provider,
                a = e.chainId,
                u = e.account,
                l = e.onError,
                c = e.error,
                f = (0, n.useRef)(-1);
              f.current += 1;
              var d = (0, n.useCallback)(function (t, e, n) {
                  void 0 === n && (n = !1);
                  try {
                    var i = f.current,
                      o = !1;
                    return Promise.resolve(
                      g(
                        function () {
                          return Promise.resolve(
                            t.activate().then(function (t) {
                              return (o = !0), t;
                            })
                          ).then(function (n) {
                            return Promise.resolve(b(t, n)).then(function (n) {
                              if (f.current > i) throw new _();
                              r({ type: w.ACTIVATE_CONNECTOR, payload: h({ connector: t }, n, { onError: e }) });
                            });
                          });
                        },
                        function (i) {
                          if (i instanceof _) o && t.deactivate();
                          else {
                            if (n) throw (o && t.deactivate(), i);
                            e
                              ? (o && t.deactivate(), e(i))
                              : r({ type: w.ERROR_FROM_ACTIVATION, payload: { connector: t, error: i } });
                          }
                        }
                      )
                    );
                  } catch (s) {
                    return Promise.reject(s);
                  }
                }, []),
                p = (0, n.useCallback)(function (t) {
                  r({ type: w.ERROR, payload: { error: t } });
                }, []),
                m = (0, n.useCallback)(function () {
                  r({ type: w.DEACTIVATE_CONNECTOR });
                }, []),
                N = (0, n.useCallback)(
                  function (t) {
                    try {
                      if (!i) throw Error("This should never happen, it's just so Typescript stops complaining");
                      var e = f.current;
                      return Promise.resolve(
                        (function () {
                          if (c)
                            return g(
                              function () {
                                return Promise.resolve(b(i, t)).then(function (t) {
                                  if (f.current > e) throw new _();
                                  r({ type: w.UPDATE_FROM_ERROR, payload: t });
                                });
                              },
                              function (t) {
                                t instanceof _ || (l ? l(t) : r({ type: w.ERROR, payload: { error: t } }));
                              }
                            );
                          var n = void 0 === t.chainId ? void 0 : v(t.chainId);
                          if (void 0 !== n && i.supportedChainIds && !i.supportedChainIds.includes(n)) {
                            var o = new E(n, i.supportedChainIds);
                            l ? l(o) : r({ type: w.ERROR, payload: { error: o } });
                          } else {
                            var s = "string" === typeof t.account ? y(t.account) : t.account;
                            r({ type: w.UPDATE, payload: { provider: t.provider, chainId: n, account: s } });
                          }
                        })()
                      );
                    } catch (n) {
                      return Promise.reject(n);
                    }
                  },
                  [i, c, l]
                ),
                k = (0, n.useCallback)(
                  function (t) {
                    l ? l(t) : r({ type: w.ERROR, payload: { error: t } });
                  },
                  [l]
                ),
                M = (0, n.useCallback)(function () {
                  r({ type: w.DEACTIVATE_CONNECTOR });
                }, []);
              return (
                (0, n.useEffect)(
                  function () {
                    return function () {
                      i && i.deactivate();
                    };
                  },
                  [i]
                ),
                (0, n.useEffect)(
                  function () {
                    return (
                      i && i.on(s._.Update, N).on(s._.Error, k).on(s._.Deactivate, M),
                      function () {
                        i && i.off(s._.Update, N).off(s._.Error, k).off(s._.Deactivate, M);
                      }
                    );
                  },
                  [i, N, k, M]
                ),
                { connector: i, provider: o, chainId: a, account: u, activate: d, setError: p, deactivate: m, error: c }
              );
            })(),
            a = o.connector,
            u = o.provider,
            l = o.chainId,
            c = o.account,
            f = o.activate,
            d = o.setError,
            p = o.deactivate,
            m = o.error,
            N = void 0 !== a && void 0 !== l && void 0 !== c && !m,
            k = (0, n.useMemo)(
              function () {
                return N && void 0 !== l && Number.isInteger(l) && a ? r(u, a) : void 0;
              },
              [N, r, u, a, l]
            ),
            M = {
              connector: a,
              library: k,
              chainId: l,
              account: c,
              activate: f,
              setError: d,
              deactivate: p,
              active: N,
              error: m,
            };
          return n.createElement(e, { value: M }, i);
        };
      }
      var P = M(N);
      function x(t) {
        return (0, n.useContext)(
          (function (t) {
            return void 0 === t && (t = N), Object.keys(k).includes(t) || o(!1), k[t];
          })(t)
        );
      }
    },
    950: function (t, e, r) {
      "use strict";
      r.d(e, {
        _k: function () {
          return g;
        },
      });
      var n = r(6939);
      function i() {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
          i.apply(this, arguments)
        );
      }
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
      }
      function s(t) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          s(t)
        );
      }
      function a(t, e) {
        return (
          (a =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          a(t, e)
        );
      }
      function u() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function h(t, e, r) {
        return (
          (h = u()
            ? Reflect.construct
            : function (t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var i = new (Function.bind.apply(t, n))();
                return r && a(i, r.prototype), i;
              }),
          h.apply(null, arguments)
        );
      }
      function l(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (
          (l = function (t) {
            if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return h(t, arguments, s(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
              a(n, t)
            );
          }),
          l(t)
        );
      }
      function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" !== typeof Symbol &&
          (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      function f(t, e) {
        try {
          var r = t();
        } catch (n) {
          return e(n);
        }
        return r && r.then ? r.then(void 0, e) : r;
      }
      function d(t) {
        return t.hasOwnProperty("result") ? t.result : t;
      }
      var p = (function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).name = e.constructor.name),
              (e.message = "No Ethereum provider was found on window.ethereum."),
              e
            );
          }
          return o(e, t), e;
        })(l(Error)),
        m = (function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).name = e.constructor.name), (e.message = "The user rejected the request."), e
            );
          }
          return o(e, t), e;
        })(l(Error)),
        g = (function (t) {
          function e(e) {
            var r;
            return (
              ((r = t.call(this, e) || this).handleNetworkChanged = r.handleNetworkChanged.bind(c(r))),
              (r.handleChainChanged = r.handleChainChanged.bind(c(r))),
              (r.handleAccountsChanged = r.handleAccountsChanged.bind(c(r))),
              (r.handleClose = r.handleClose.bind(c(r))),
              r
            );
          }
          o(e, t);
          var r = e.prototype;
          return (
            (r.handleChainChanged = function (t) {
              this.emitUpdate({ chainId: t, provider: window.ethereum });
            }),
            (r.handleAccountsChanged = function (t) {
              0 === t.length ? this.emitDeactivate() : this.emitUpdate({ account: t[0] });
            }),
            (r.handleClose = function (t, e) {
              this.emitDeactivate();
            }),
            (r.handleNetworkChanged = function (t) {
              this.emitUpdate({ chainId: t, provider: window.ethereum });
            }),
            (r.activate = function () {
              try {
                var t,
                  e = function (e) {
                    if (r) return e;
                    function n() {
                      return i({ provider: window.ethereum }, t ? { account: t } : {});
                    }
                    var o = (function () {
                      if (!t)
                        return Promise.resolve(
                          window.ethereum.enable().then(function (t) {
                            return t && d(t)[0];
                          })
                        ).then(function (e) {
                          t = e;
                        });
                    })();
                    return o && o.then ? o.then(n) : n();
                  },
                  r = !1,
                  n = this;
                if (!window.ethereum) throw new p();
                window.ethereum.on &&
                  (window.ethereum.on("chainChanged", n.handleChainChanged),
                  window.ethereum.on("accountsChanged", n.handleAccountsChanged),
                  window.ethereum.on("close", n.handleClose),
                  window.ethereum.on("networkChanged", n.handleNetworkChanged)),
                  window.ethereum.isMetaMask && (window.ethereum.autoRefreshOnNetworkChange = !1);
                var o = f(
                  function () {
                    return Promise.resolve(
                      window.ethereum.send("eth_requestAccounts").then(function (t) {
                        return d(t)[0];
                      })
                    ).then(function (e) {
                      t = e;
                    });
                  },
                  function (t) {
                    if (4001 === t.code) throw new m();
                  }
                );
                return Promise.resolve(o && o.then ? o.then(e) : e(o));
              } catch (s) {
                return Promise.reject(s);
              }
            }),
            (r.getProvider = function () {
              try {
                return Promise.resolve(window.ethereum);
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.getChainId = function () {
              try {
                var t,
                  e = function () {
                    function e() {
                      if (!t)
                        try {
                          t = d(window.ethereum.send({ method: "net_version" }));
                        } catch (e) {}
                      return (
                        t ||
                          (t = window.ethereum.isDapper
                            ? d(window.ethereum.cachedResults.net_version)
                            : window.ethereum.chainId ||
                              window.ethereum.netVersion ||
                              window.ethereum.networkVersion ||
                              window.ethereum._chainId),
                        t
                      );
                    }
                    var r = (function () {
                      if (!t) {
                        var e = f(
                          function () {
                            return Promise.resolve(window.ethereum.send("net_version").then(d)).then(function (e) {
                              t = e;
                            });
                          },
                          function () {}
                        );
                        if (e && e.then) return e.then(function () {});
                      }
                    })();
                    return r && r.then ? r.then(e) : e();
                  };
                if (!window.ethereum) throw new p();
                var r = f(
                  function () {
                    return Promise.resolve(window.ethereum.send("eth_chainId").then(d)).then(function (e) {
                      t = e;
                    });
                  },
                  function () {}
                );
                return Promise.resolve(r && r.then ? r.then(e) : e());
              } catch (n) {
                return Promise.reject(n);
              }
            }),
            (r.getAccount = function () {
              try {
                var t,
                  e = function () {
                    function e() {
                      return t || (t = d(window.ethereum.send({ method: "eth_accounts" }))[0]), t;
                    }
                    var r = (function () {
                      if (!t) {
                        var e = f(
                          function () {
                            return Promise.resolve(
                              window.ethereum.enable().then(function (t) {
                                return d(t)[0];
                              })
                            ).then(function (e) {
                              t = e;
                            });
                          },
                          function () {}
                        );
                        if (e && e.then) return e.then(function () {});
                      }
                    })();
                    return r && r.then ? r.then(e) : e();
                  };
                if (!window.ethereum) throw new p();
                var r = f(
                  function () {
                    return Promise.resolve(
                      window.ethereum.send("eth_accounts").then(function (t) {
                        return d(t)[0];
                      })
                    ).then(function (e) {
                      t = e;
                    });
                  },
                  function () {}
                );
                return Promise.resolve(r && r.then ? r.then(e) : e());
              } catch (n) {
                return Promise.reject(n);
              }
            }),
            (r.deactivate = function () {
              window.ethereum &&
                window.ethereum.removeListener &&
                (window.ethereum.removeListener("chainChanged", this.handleChainChanged),
                window.ethereum.removeListener("accountsChanged", this.handleAccountsChanged),
                window.ethereum.removeListener("close", this.handleClose),
                window.ethereum.removeListener("networkChanged", this.handleNetworkChanged));
            }),
            (r.isAuthorized = function () {
              try {
                return window.ethereum
                  ? Promise.resolve(
                      f(
                        function () {
                          return Promise.resolve(
                            window.ethereum.send("eth_accounts").then(function (t) {
                              return d(t).length > 0;
                            })
                          );
                        },
                        function () {
                          return !1;
                        }
                      )
                    )
                  : Promise.resolve(!1);
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            e
          );
        })(n.Q);
    },
    3653: function (t, e, r) {
      "use strict";
      var n;
      r.d(e, {
        _: function () {
          return n;
        },
      }),
        (function (t) {
          (t.Update = "Web3ReactUpdate"), (t.Error = "Web3ReactError"), (t.Deactivate = "Web3ReactDeactivate");
        })(n || (n = {}));
    },
    3929: function (t, e, r) {
      "use strict";
      r.d(e, {
        zw: function () {
          return d;
        },
      });
      var n = r(6939);
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), s(t, e);
      }
      function o(t) {
        return (
          (o = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          o(t)
        );
      }
      function s(t, e) {
        return (
          (s =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          s(t, e)
        );
      }
      function a() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function u(t, e, r) {
        return (
          (u = a()
            ? Reflect.construct
            : function (t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var i = new (Function.bind.apply(t, n))();
                return r && s(i, r.prototype), i;
              }),
          u.apply(null, arguments)
        );
      }
      function h(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (
          (h = function (t) {
            if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return u(t, arguments, o(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
              s(n, t)
            );
          }),
          h(t)
        );
      }
      function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      var c = (function (t) {
        function e() {
          var e;
          return (
            ((e = t.call(this) || this).name = e.constructor.name), (e.message = "The user rejected the request."), e
          );
        }
        return i(e, t), e;
      })(h(Error));
      function f(t) {
        var e = t.supportedChainIds,
          r = t.rpc;
        return (
          e ||
          (r
            ? Object.keys(r).map(function (t) {
                return Number(t);
              })
            : void 0)
        );
      }
      var d = (function (t) {
        function e(e) {
          var r;
          return (
            ((r = t.call(this, { supportedChainIds: f(e) }) || this).config = e),
            (r.handleChainChanged = r.handleChainChanged.bind(l(r))),
            (r.handleAccountsChanged = r.handleAccountsChanged.bind(l(r))),
            (r.handleDisconnect = r.handleDisconnect.bind(l(r))),
            r
          );
        }
        i(e, t);
        var n = e.prototype;
        return (
          (n.handleChainChanged = function (t) {
            this.emitUpdate({ chainId: t });
          }),
          (n.handleAccountsChanged = function (t) {
            this.emitUpdate({ account: t[0] });
          }),
          (n.handleDisconnect = function () {
            this.walletConnectProvider &&
              (this.walletConnectProvider.removeListener("chainChanged", this.handleChainChanged),
              this.walletConnectProvider.removeListener("accountsChanged", this.handleAccountsChanged),
              (this.walletConnectProvider = void 0)),
              this.emitDeactivate();
          }),
          (n.activate = function () {
            try {
              var t = this,
                e = function () {
                  function e() {
                    var e;
                    return Promise.resolve(
                      new Promise(function (r, n) {
                        var i = function () {
                          (t.walletConnectProvider = void 0), n(new c());
                        };
                        t.walletConnectProvider.connector.on("disconnect", function () {
                          e || i();
                        }),
                          t.walletConnectProvider
                            .enable()
                            .then(function (t) {
                              return r(t[0]);
                            })
                            .catch(function (t) {
                              "User closed modal" !== t.message ? n(t) : i();
                            });
                      }).catch(function (t) {
                        throw t;
                      })
                    ).then(function (r) {
                      return (
                        (e = r),
                        t.walletConnectProvider.on("disconnect", t.handleDisconnect),
                        t.walletConnectProvider.on("chainChanged", t.handleChainChanged),
                        t.walletConnectProvider.on("accountsChanged", t.handleAccountsChanged),
                        { provider: t.walletConnectProvider, account: e }
                      );
                    });
                  }
                  var r = (function () {
                    if (!t.walletConnectProvider.connector.connected)
                      return Promise.resolve(
                        t.walletConnectProvider.connector.createSession(
                          t.config.chainId ? { chainId: t.config.chainId } : void 0
                        )
                      ).then(function () {
                        t.emit("URI_AVAILABLE", t.walletConnectProvider.connector.uri);
                      });
                  })();
                  return r && r.then ? r.then(e) : e();
                },
                n = (function () {
                  if (!t.walletConnectProvider)
                    return Promise.resolve(
                      Promise.all([r.e(70), r.e(563)])
                        .then(r.bind(r, 1070))
                        .then(function (t) {
                          var e;
                          return null != (e = null == t ? void 0 : t.default) ? e : t;
                        })
                    ).then(function (e) {
                      t.walletConnectProvider = new e(t.config);
                    });
                })();
              return Promise.resolve(n && n.then ? n.then(e) : e());
            } catch (i) {
              return Promise.reject(i);
            }
          }),
          (n.getProvider = function () {
            try {
              return Promise.resolve(this.walletConnectProvider);
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.getChainId = function () {
            try {
              return Promise.resolve(this.walletConnectProvider.chainId);
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.getAccount = function () {
            try {
              return Promise.resolve(this.walletConnectProvider.accounts).then(function (t) {
                return t[0];
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.deactivate = function () {
            this.walletConnectProvider &&
              (this.walletConnectProvider.removeListener("disconnect", this.handleDisconnect),
              this.walletConnectProvider.removeListener("chainChanged", this.handleChainChanged),
              this.walletConnectProvider.removeListener("accountsChanged", this.handleAccountsChanged),
              this.walletConnectProvider.disconnect());
          }),
          (n.close = function () {
            try {
              return this.emitDeactivate(), Promise.resolve();
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          e
        );
      })(n.Q);
    },
    2882: function (t) {
      "use strict";
      for (var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < e.length; n++) {
        var i = e.charAt(n);
        if (void 0 !== r[i]) throw new TypeError(i + " is ambiguous");
        r[i] = n;
      }
      function o(t) {
        var e = t >> 25;
        return (
          ((33554431 & t) << 5) ^
          (996825010 & -((e >> 0) & 1)) ^
          (642813549 & -((e >> 1) & 1)) ^
          (513874426 & -((e >> 2) & 1)) ^
          (1027748829 & -((e >> 3) & 1)) ^
          (705979059 & -((e >> 4) & 1))
        );
      }
      function s(t) {
        for (var e = 1, r = 0; r < t.length; ++r) {
          var n = t.charCodeAt(r);
          if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
          e = o(e) ^ (n >> 5);
        }
        for (e = o(e), r = 0; r < t.length; ++r) {
          var i = t.charCodeAt(r);
          e = o(e) ^ (31 & i);
        }
        return e;
      }
      function a(t, e) {
        if (((e = e || 90), t.length < 8)) return t + " too short";
        if (t.length > e) return "Exceeds length limit";
        var n = t.toLowerCase(),
          i = t.toUpperCase();
        if (t !== n && t !== i) return "Mixed-case string " + t;
        var a = (t = n).lastIndexOf("1");
        if (-1 === a) return "No separator character for " + t;
        if (0 === a) return "Missing prefix for " + t;
        var u = t.slice(0, a),
          h = t.slice(a + 1);
        if (h.length < 6) return "Data too short";
        var l = s(u);
        if ("string" === typeof l) return l;
        for (var c = [], f = 0; f < h.length; ++f) {
          var d = h.charAt(f),
            p = r[d];
          if (void 0 === p) return "Unknown character " + d;
          (l = o(l) ^ p), f + 6 >= h.length || c.push(p);
        }
        return 1 !== l ? "Invalid checksum for " + t : { prefix: u, words: c };
      }
      function u(t, e, r, n) {
        for (var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0; u < t.length; ++u)
          for (i = (i << e) | t[u], o += e; o >= r; ) (o -= r), a.push((i >> o) & s);
        if (n) o > 0 && a.push((i << (r - o)) & s);
        else {
          if (o >= e) return "Excess padding";
          if ((i << (r - o)) & s) return "Non-zero padding";
        }
        return a;
      }
      t.exports = {
        decodeUnsafe: function () {
          var t = a.apply(null, arguments);
          if ("object" === typeof t) return t;
        },
        decode: function (t) {
          var e = a.apply(null, arguments);
          if ("object" === typeof e) return e;
          throw new Error(e);
        },
        encode: function (t, r, n) {
          if (((n = n || 90), t.length + 7 + r.length > n)) throw new TypeError("Exceeds length limit");
          var i = s((t = t.toLowerCase()));
          if ("string" === typeof i) throw new Error(i);
          for (var a = t + "1", u = 0; u < r.length; ++u) {
            var h = r[u];
            if (h >> 5 !== 0) throw new Error("Non 5-bit word");
            (i = o(i) ^ h), (a += e.charAt(h));
          }
          for (u = 0; u < 6; ++u) i = o(i);
          for (i ^= 1, u = 0; u < 6; ++u) {
            a += e.charAt((i >> (5 * (5 - u))) & 31);
          }
          return a;
        },
        toWordsUnsafe: function (t) {
          var e = u(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
        },
        toWords: function (t) {
          var e = u(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        },
        fromWordsUnsafe: function (t) {
          var e = u(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
        },
        fromWords: function (t) {
          var e = u(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        },
      };
    },
    3550: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t && (("le" !== e && "be" !== e) || ((r = e), (e = 10)), this._init(t || 0, e || 10, r || "be"));
        }
        var s;
        "object" === typeof t ? (t.exports = o) : (e.BN = o), (o.BN = o), (o.wordSize = 26);
        try {
          s = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(6601).Buffer;
        } catch (k) {}
        function a(t, e) {
          var r = t.charCodeAt(e);
          return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : (r - 48) & 15;
        }
        function u(t, e, r) {
          var n = a(t, r);
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
        }
        function h(t, e, r, n) {
          for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
            var a = t.charCodeAt(s) - 48;
            (i *= n), (i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a);
          }
          return i;
        }
        (o.isBN = function (t) {
          return (
            t instanceof o ||
            (null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words))
          );
        }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]), (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" === typeof t.length), t.length <= 0)) return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)), (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              s,
              a = 0;
            if ("be" === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++);
            else if ("le" === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)), (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var i,
              o = 0,
              s = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8);
            else
              for (n = (t.length - e) % 2 === 0 ? e + 1 : e; n < t.length; n += 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8);
            this.strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, u = 0, l = r; l < a; l += n)
              (u = h(t, l, l + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
            if (0 !== s) {
              var c = 1;
              for (u = h(t, l, t.length, e), l = 0; l < s; l++) c *= e;
              this.imuln(c), this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
            }
            this.strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length), (t.negative = this.negative), (t.red = this.red);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
          }),
          (o.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var l = [
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
          c = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5,
          ],
          f = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171,
            35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632,
            6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393,
            45435424, 52521875, 60466176,
          ];
        function d(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          r.words[0] = a;
          for (var h = 1; h < n; h++) {
            for (
              var l = u >>> 26, c = 67108863 & u, f = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1);
              d <= f;
              d++
            ) {
              var p = (h - d) | 0;
              (l += ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864) | 0), (c = 67108863 & s);
            }
            (r.words[h] = 0 | c), (u = 0 | l);
          }
          return 0 !== u ? (r.words[h] = 0 | u) : r.length--, r.strip();
        }
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << i) | o)).toString(16);
              (r = 0 !== (o = (a >>> (24 - i)) & 16777215) || s !== this.length - 1 ? l[6 - u.length] + u + r : u + r),
                (i += 2) >= 26 && ((i -= 26), s--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; ) r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = c[t],
              d = f[t];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var m = p.modn(d).toString(t);
              r = (p = p.idivn(d)).isZero() ? m + r : l[h - m.length] + m + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; ) r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (t, e) {
            return n("undefined" !== typeof s), this.toArrayLike(s, t, e);
          }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
            var s,
              a,
              u = "le" === e,
              h = new t(o),
              l = this.clone();
            if (u) {
              for (a = 0; !l.isZero(); a++) (s = l.andln(255)), l.iushrn(8), (h[a] = s);
              for (; a < o; a++) h[a] = 0;
            } else {
              for (a = 0; a < o - i; a++) h[a] = 0;
              for (a = 0; !l.isZero(); a++) (s = l.andln(255)), l.iushrn(8), (h[o - a - 1] = s);
            }
            return h;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (o.prototype.ior = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.iand = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.ixor = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
            return r > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))), this.strip();
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e ? this.words[r] | (1 << i) : this.words[r] & ~(1 << i)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, n;
            if (0 !== this.negative && 0 === t.negative)
              return (this.negative = 0), (e = this.isub(t)), (this.negative ^= 1), this._normSign();
            if (0 === this.negative && 0 !== t.negative)
              return (t.negative = 0), (e = this.isub(t)), (t.negative = 1), e._normSign();
            this.length > t.length ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26);
            if (((this.length = r.length), 0 !== i)) (this.words[this.length] = i), this.length++;
            else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative) return (this.negative = 0), this.iadd(t), (this.negative = 1), this._normSign();
            var r,
              n,
              i = this.cmp(t);
            if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var o = 0, s = 0; s < n.length; s++)
              (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26), (this.words[s] = 67108863 & e);
            for (; 0 !== o && s < r.length; s++) (o = (e = (0 | r.words[s]) + o) >> 26), (this.words[s] = 67108863 & e);
            if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
            return (this.length = Math.max(this.length, s)), r !== this && (this.negative = 1), this.strip();
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var p = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            h = 0,
            l = 0 | s[0],
            c = 8191 & l,
            f = l >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            v = 8191 & g,
            y = g >>> 13,
            w = 0 | s[3],
            b = 8191 & w,
            _ = w >>> 13,
            E = 0 | s[4],
            A = 8191 & E,
            N = E >>> 13,
            k = 0 | s[5],
            M = 8191 & k,
            P = k >>> 13,
            x = 0 | s[6],
            I = 8191 & x,
            R = x >>> 13,
            S = 0 | s[7],
            O = 8191 & S,
            C = S >>> 13,
            T = 0 | s[8],
            B = 8191 & T,
            F = T >>> 13,
            L = 0 | s[9],
            U = 8191 & L,
            D = L >>> 13,
            j = 0 | a[0],
            q = 8191 & j,
            z = j >>> 13,
            $ = 0 | a[1],
            G = 8191 & $,
            Y = $ >>> 13,
            H = 0 | a[2],
            V = 8191 & H,
            W = H >>> 13,
            K = 0 | a[3],
            J = 8191 & K,
            X = K >>> 13,
            Z = 0 | a[4],
            Q = 8191 & Z,
            tt = Z >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | a[6],
            ot = 8191 & it,
            st = it >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ht = at >>> 13,
            lt = 0 | a[8],
            ct = 8191 & lt,
            ft = lt >>> 13,
            dt = 0 | a[9],
            pt = 8191 & dt,
            mt = dt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var gt =
            (((h + (n = Math.imul(c, q))) | 0) + ((8191 & (i = ((i = Math.imul(c, z)) + Math.imul(f, q)) | 0)) << 13)) |
            0;
          (h = ((((o = Math.imul(f, z)) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
            (gt &= 67108863),
            (n = Math.imul(p, q)),
            (i = ((i = Math.imul(p, z)) + Math.imul(m, q)) | 0),
            (o = Math.imul(m, z));
          var vt =
            (((h + (n = (n + Math.imul(c, G)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, Y)) | 0) + Math.imul(f, G)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, Y)) | 0) + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
            (vt &= 67108863),
            (n = Math.imul(v, q)),
            (i = ((i = Math.imul(v, z)) + Math.imul(y, q)) | 0),
            (o = Math.imul(y, z)),
            (n = (n + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(m, G)) | 0),
            (o = (o + Math.imul(m, Y)) | 0);
          var yt =
            (((h + (n = (n + Math.imul(c, V)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, W)) | 0) + Math.imul(f, V)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, W)) | 0) + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
            (yt &= 67108863),
            (n = Math.imul(b, q)),
            (i = ((i = Math.imul(b, z)) + Math.imul(_, q)) | 0),
            (o = Math.imul(_, z)),
            (n = (n + Math.imul(v, G)) | 0),
            (i = ((i = (i + Math.imul(v, Y)) | 0) + Math.imul(y, G)) | 0),
            (o = (o + Math.imul(y, Y)) | 0),
            (n = (n + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(m, V)) | 0),
            (o = (o + Math.imul(m, W)) | 0);
          var wt =
            (((h + (n = (n + Math.imul(c, J)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, X)) | 0) + Math.imul(f, J)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, X)) | 0) + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
            (wt &= 67108863),
            (n = Math.imul(A, q)),
            (i = ((i = Math.imul(A, z)) + Math.imul(N, q)) | 0),
            (o = Math.imul(N, z)),
            (n = (n + Math.imul(b, G)) | 0),
            (i = ((i = (i + Math.imul(b, Y)) | 0) + Math.imul(_, G)) | 0),
            (o = (o + Math.imul(_, Y)) | 0),
            (n = (n + Math.imul(v, V)) | 0),
            (i = ((i = (i + Math.imul(v, W)) | 0) + Math.imul(y, V)) | 0),
            (o = (o + Math.imul(y, W)) | 0),
            (n = (n + Math.imul(p, J)) | 0),
            (i = ((i = (i + Math.imul(p, X)) | 0) + Math.imul(m, J)) | 0),
            (o = (o + Math.imul(m, X)) | 0);
          var bt =
            (((h + (n = (n + Math.imul(c, Q)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(f, Q)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
            (bt &= 67108863),
            (n = Math.imul(M, q)),
            (i = ((i = Math.imul(M, z)) + Math.imul(P, q)) | 0),
            (o = Math.imul(P, z)),
            (n = (n + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, Y)) | 0) + Math.imul(N, G)) | 0),
            (o = (o + Math.imul(N, Y)) | 0),
            (n = (n + Math.imul(b, V)) | 0),
            (i = ((i = (i + Math.imul(b, W)) | 0) + Math.imul(_, V)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (n = (n + Math.imul(v, J)) | 0),
            (i = ((i = (i + Math.imul(v, X)) | 0) + Math.imul(y, J)) | 0),
            (o = (o + Math.imul(y, X)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, Q)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var _t =
            (((h + (n = (n + Math.imul(c, rt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, nt)) | 0) + Math.imul(f, rt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, nt)) | 0) + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
            (_t &= 67108863),
            (n = Math.imul(I, q)),
            (i = ((i = Math.imul(I, z)) + Math.imul(R, q)) | 0),
            (o = Math.imul(R, z)),
            (n = (n + Math.imul(M, G)) | 0),
            (i = ((i = (i + Math.imul(M, Y)) | 0) + Math.imul(P, G)) | 0),
            (o = (o + Math.imul(P, Y)) | 0),
            (n = (n + Math.imul(A, V)) | 0),
            (i = ((i = (i + Math.imul(A, W)) | 0) + Math.imul(N, V)) | 0),
            (o = (o + Math.imul(N, W)) | 0),
            (n = (n + Math.imul(b, J)) | 0),
            (i = ((i = (i + Math.imul(b, X)) | 0) + Math.imul(_, J)) | 0),
            (o = (o + Math.imul(_, X)) | 0),
            (n = (n + Math.imul(v, Q)) | 0),
            (i = ((i = (i + Math.imul(v, tt)) | 0) + Math.imul(y, Q)) | 0),
            (o = (o + Math.imul(y, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(m, rt)) | 0),
            (o = (o + Math.imul(m, nt)) | 0);
          var Et =
            (((h + (n = (n + Math.imul(c, ot)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, st)) | 0) + Math.imul(f, ot)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
            (Et &= 67108863),
            (n = Math.imul(O, q)),
            (i = ((i = Math.imul(O, z)) + Math.imul(C, q)) | 0),
            (o = Math.imul(C, z)),
            (n = (n + Math.imul(I, G)) | 0),
            (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(R, G)) | 0),
            (o = (o + Math.imul(R, Y)) | 0),
            (n = (n + Math.imul(M, V)) | 0),
            (i = ((i = (i + Math.imul(M, W)) | 0) + Math.imul(P, V)) | 0),
            (o = (o + Math.imul(P, W)) | 0),
            (n = (n + Math.imul(A, J)) | 0),
            (i = ((i = (i + Math.imul(A, X)) | 0) + Math.imul(N, J)) | 0),
            (o = (o + Math.imul(N, X)) | 0),
            (n = (n + Math.imul(b, Q)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (n = (n + Math.imul(v, rt)) | 0),
            (i = ((i = (i + Math.imul(v, nt)) | 0) + Math.imul(y, rt)) | 0),
            (o = (o + Math.imul(y, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(m, ot)) | 0),
            (o = (o + Math.imul(m, st)) | 0);
          var At =
            (((h + (n = (n + Math.imul(c, ut)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, ht)) | 0) + Math.imul(f, ut)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, ht)) | 0) + (i >>> 13)) | 0) + (At >>> 26)) | 0),
            (At &= 67108863),
            (n = Math.imul(B, q)),
            (i = ((i = Math.imul(B, z)) + Math.imul(F, q)) | 0),
            (o = Math.imul(F, z)),
            (n = (n + Math.imul(O, G)) | 0),
            (i = ((i = (i + Math.imul(O, Y)) | 0) + Math.imul(C, G)) | 0),
            (o = (o + Math.imul(C, Y)) | 0),
            (n = (n + Math.imul(I, V)) | 0),
            (i = ((i = (i + Math.imul(I, W)) | 0) + Math.imul(R, V)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (n = (n + Math.imul(M, J)) | 0),
            (i = ((i = (i + Math.imul(M, X)) | 0) + Math.imul(P, J)) | 0),
            (o = (o + Math.imul(P, X)) | 0),
            (n = (n + Math.imul(A, Q)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(N, Q)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(b, rt)) | 0),
            (i = ((i = (i + Math.imul(b, nt)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, nt)) | 0),
            (n = (n + Math.imul(v, ot)) | 0),
            (i = ((i = (i + Math.imul(v, st)) | 0) + Math.imul(y, ot)) | 0),
            (o = (o + Math.imul(y, st)) | 0),
            (n = (n + Math.imul(p, ut)) | 0),
            (i = ((i = (i + Math.imul(p, ht)) | 0) + Math.imul(m, ut)) | 0),
            (o = (o + Math.imul(m, ht)) | 0);
          var Nt =
            (((h + (n = (n + Math.imul(c, ct)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, ft)) | 0) + Math.imul(f, ct)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) + (Nt >>> 26)) | 0),
            (Nt &= 67108863),
            (n = Math.imul(U, q)),
            (i = ((i = Math.imul(U, z)) + Math.imul(D, q)) | 0),
            (o = Math.imul(D, z)),
            (n = (n + Math.imul(B, G)) | 0),
            (i = ((i = (i + Math.imul(B, Y)) | 0) + Math.imul(F, G)) | 0),
            (o = (o + Math.imul(F, Y)) | 0),
            (n = (n + Math.imul(O, V)) | 0),
            (i = ((i = (i + Math.imul(O, W)) | 0) + Math.imul(C, V)) | 0),
            (o = (o + Math.imul(C, W)) | 0),
            (n = (n + Math.imul(I, J)) | 0),
            (i = ((i = (i + Math.imul(I, X)) | 0) + Math.imul(R, J)) | 0),
            (o = (o + Math.imul(R, X)) | 0),
            (n = (n + Math.imul(M, Q)) | 0),
            (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(A, rt)) | 0),
            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(N, rt)) | 0),
            (o = (o + Math.imul(N, nt)) | 0),
            (n = (n + Math.imul(b, ot)) | 0),
            (i = ((i = (i + Math.imul(b, st)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, st)) | 0),
            (n = (n + Math.imul(v, ut)) | 0),
            (i = ((i = (i + Math.imul(v, ht)) | 0) + Math.imul(y, ut)) | 0),
            (o = (o + Math.imul(y, ht)) | 0),
            (n = (n + Math.imul(p, ct)) | 0),
            (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(m, ct)) | 0),
            (o = (o + Math.imul(m, ft)) | 0);
          var kt =
            (((h + (n = (n + Math.imul(c, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, mt)) | 0) + Math.imul(f, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(f, mt)) | 0) + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
            (kt &= 67108863),
            (n = Math.imul(U, G)),
            (i = ((i = Math.imul(U, Y)) + Math.imul(D, G)) | 0),
            (o = Math.imul(D, Y)),
            (n = (n + Math.imul(B, V)) | 0),
            (i = ((i = (i + Math.imul(B, W)) | 0) + Math.imul(F, V)) | 0),
            (o = (o + Math.imul(F, W)) | 0),
            (n = (n + Math.imul(O, J)) | 0),
            (i = ((i = (i + Math.imul(O, X)) | 0) + Math.imul(C, J)) | 0),
            (o = (o + Math.imul(C, X)) | 0),
            (n = (n + Math.imul(I, Q)) | 0),
            (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(M, rt)) | 0),
            (i = ((i = (i + Math.imul(M, nt)) | 0) + Math.imul(P, rt)) | 0),
            (o = (o + Math.imul(P, nt)) | 0),
            (n = (n + Math.imul(A, ot)) | 0),
            (i = ((i = (i + Math.imul(A, st)) | 0) + Math.imul(N, ot)) | 0),
            (o = (o + Math.imul(N, st)) | 0),
            (n = (n + Math.imul(b, ut)) | 0),
            (i = ((i = (i + Math.imul(b, ht)) | 0) + Math.imul(_, ut)) | 0),
            (o = (o + Math.imul(_, ht)) | 0),
            (n = (n + Math.imul(v, ct)) | 0),
            (i = ((i = (i + Math.imul(v, ft)) | 0) + Math.imul(y, ct)) | 0),
            (o = (o + Math.imul(y, ft)) | 0);
          var Mt =
            (((h + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(m, mt)) | 0) + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
            (Mt &= 67108863),
            (n = Math.imul(U, V)),
            (i = ((i = Math.imul(U, W)) + Math.imul(D, V)) | 0),
            (o = Math.imul(D, W)),
            (n = (n + Math.imul(B, J)) | 0),
            (i = ((i = (i + Math.imul(B, X)) | 0) + Math.imul(F, J)) | 0),
            (o = (o + Math.imul(F, X)) | 0),
            (n = (n + Math.imul(O, Q)) | 0),
            (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(C, Q)) | 0),
            (o = (o + Math.imul(C, tt)) | 0),
            (n = (n + Math.imul(I, rt)) | 0),
            (i = ((i = (i + Math.imul(I, nt)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, nt)) | 0),
            (n = (n + Math.imul(M, ot)) | 0),
            (i = ((i = (i + Math.imul(M, st)) | 0) + Math.imul(P, ot)) | 0),
            (o = (o + Math.imul(P, st)) | 0),
            (n = (n + Math.imul(A, ut)) | 0),
            (i = ((i = (i + Math.imul(A, ht)) | 0) + Math.imul(N, ut)) | 0),
            (o = (o + Math.imul(N, ht)) | 0),
            (n = (n + Math.imul(b, ct)) | 0),
            (i = ((i = (i + Math.imul(b, ft)) | 0) + Math.imul(_, ct)) | 0),
            (o = (o + Math.imul(_, ft)) | 0);
          var Pt =
            (((h + (n = (n + Math.imul(v, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(v, mt)) | 0) + Math.imul(y, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(y, mt)) | 0) + (i >>> 13)) | 0) + (Pt >>> 26)) | 0),
            (Pt &= 67108863),
            (n = Math.imul(U, J)),
            (i = ((i = Math.imul(U, X)) + Math.imul(D, J)) | 0),
            (o = Math.imul(D, X)),
            (n = (n + Math.imul(B, Q)) | 0),
            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(F, Q)) | 0),
            (o = (o + Math.imul(F, tt)) | 0),
            (n = (n + Math.imul(O, rt)) | 0),
            (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(C, rt)) | 0),
            (o = (o + Math.imul(C, nt)) | 0),
            (n = (n + Math.imul(I, ot)) | 0),
            (i = ((i = (i + Math.imul(I, st)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, st)) | 0),
            (n = (n + Math.imul(M, ut)) | 0),
            (i = ((i = (i + Math.imul(M, ht)) | 0) + Math.imul(P, ut)) | 0),
            (o = (o + Math.imul(P, ht)) | 0),
            (n = (n + Math.imul(A, ct)) | 0),
            (i = ((i = (i + Math.imul(A, ft)) | 0) + Math.imul(N, ct)) | 0),
            (o = (o + Math.imul(N, ft)) | 0);
          var xt =
            (((h + (n = (n + Math.imul(b, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(b, mt)) | 0) + Math.imul(_, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(_, mt)) | 0) + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
            (xt &= 67108863),
            (n = Math.imul(U, Q)),
            (i = ((i = Math.imul(U, tt)) + Math.imul(D, Q)) | 0),
            (o = Math.imul(D, tt)),
            (n = (n + Math.imul(B, rt)) | 0),
            (i = ((i = (i + Math.imul(B, nt)) | 0) + Math.imul(F, rt)) | 0),
            (o = (o + Math.imul(F, nt)) | 0),
            (n = (n + Math.imul(O, ot)) | 0),
            (i = ((i = (i + Math.imul(O, st)) | 0) + Math.imul(C, ot)) | 0),
            (o = (o + Math.imul(C, st)) | 0),
            (n = (n + Math.imul(I, ut)) | 0),
            (i = ((i = (i + Math.imul(I, ht)) | 0) + Math.imul(R, ut)) | 0),
            (o = (o + Math.imul(R, ht)) | 0),
            (n = (n + Math.imul(M, ct)) | 0),
            (i = ((i = (i + Math.imul(M, ft)) | 0) + Math.imul(P, ct)) | 0),
            (o = (o + Math.imul(P, ft)) | 0);
          var It =
            (((h + (n = (n + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(A, mt)) | 0) + Math.imul(N, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(N, mt)) | 0) + (i >>> 13)) | 0) + (It >>> 26)) | 0),
            (It &= 67108863),
            (n = Math.imul(U, rt)),
            (i = ((i = Math.imul(U, nt)) + Math.imul(D, rt)) | 0),
            (o = Math.imul(D, nt)),
            (n = (n + Math.imul(B, ot)) | 0),
            (i = ((i = (i + Math.imul(B, st)) | 0) + Math.imul(F, ot)) | 0),
            (o = (o + Math.imul(F, st)) | 0),
            (n = (n + Math.imul(O, ut)) | 0),
            (i = ((i = (i + Math.imul(O, ht)) | 0) + Math.imul(C, ut)) | 0),
            (o = (o + Math.imul(C, ht)) | 0),
            (n = (n + Math.imul(I, ct)) | 0),
            (i = ((i = (i + Math.imul(I, ft)) | 0) + Math.imul(R, ct)) | 0),
            (o = (o + Math.imul(R, ft)) | 0);
          var Rt =
            (((h + (n = (n + Math.imul(M, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(M, mt)) | 0) + Math.imul(P, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(P, mt)) | 0) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
            (Rt &= 67108863),
            (n = Math.imul(U, ot)),
            (i = ((i = Math.imul(U, st)) + Math.imul(D, ot)) | 0),
            (o = Math.imul(D, st)),
            (n = (n + Math.imul(B, ut)) | 0),
            (i = ((i = (i + Math.imul(B, ht)) | 0) + Math.imul(F, ut)) | 0),
            (o = (o + Math.imul(F, ht)) | 0),
            (n = (n + Math.imul(O, ct)) | 0),
            (i = ((i = (i + Math.imul(O, ft)) | 0) + Math.imul(C, ct)) | 0),
            (o = (o + Math.imul(C, ft)) | 0);
          var St =
            (((h + (n = (n + Math.imul(I, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(I, mt)) | 0) + Math.imul(R, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(R, mt)) | 0) + (i >>> 13)) | 0) + (St >>> 26)) | 0),
            (St &= 67108863),
            (n = Math.imul(U, ut)),
            (i = ((i = Math.imul(U, ht)) + Math.imul(D, ut)) | 0),
            (o = Math.imul(D, ht)),
            (n = (n + Math.imul(B, ct)) | 0),
            (i = ((i = (i + Math.imul(B, ft)) | 0) + Math.imul(F, ct)) | 0),
            (o = (o + Math.imul(F, ft)) | 0);
          var Ot =
            (((h + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(O, mt)) | 0) + Math.imul(C, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(C, mt)) | 0) + (i >>> 13)) | 0) + (Ot >>> 26)) | 0),
            (Ot &= 67108863),
            (n = Math.imul(U, ct)),
            (i = ((i = Math.imul(U, ft)) + Math.imul(D, ct)) | 0),
            (o = Math.imul(D, ft));
          var Ct =
            (((h + (n = (n + Math.imul(B, pt)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(B, mt)) | 0) + Math.imul(F, pt)) | 0)) << 13)) |
            0;
          (h = ((((o = (o + Math.imul(F, mt)) | 0) + (i >>> 13)) | 0) + (Ct >>> 26)) | 0), (Ct &= 67108863);
          var Tt =
            (((h + (n = Math.imul(U, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(U, mt)) + Math.imul(D, pt)) | 0)) << 13)) |
            0;
          return (
            (h = ((((o = Math.imul(D, mt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
            (Tt &= 67108863),
            (u[0] = gt),
            (u[1] = vt),
            (u[2] = yt),
            (u[3] = wt),
            (u[4] = bt),
            (u[5] = _t),
            (u[6] = Et),
            (u[7] = At),
            (u[8] = Nt),
            (u[9] = kt),
            (u[10] = Mt),
            (u[11] = Pt),
            (u[12] = xt),
            (u[13] = It),
            (u[14] = Rt),
            (u[15] = St),
            (u[16] = Ot),
            (u[17] = Ct),
            (u[18] = Tt),
            0 !== h && ((u[19] = h), r.length++),
            r
          );
        };
        function m(t, e, r) {
          return new g().mulp(t, e, r);
        }
        function g(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (p = d),
          (o.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return (
              (r =
                10 === this.length && 10 === t.length
                  ? p(this, t, e)
                  : n < 63
                  ? d(this, t, e)
                  : n < 1024
                  ? (function (t, e, r) {
                      (r.negative = e.negative ^ t.negative), (r.length = t.length + e.length);
                      for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                        var s = i;
                        i = 0;
                        for (
                          var a = 67108863 & n, u = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1);
                          h <= u;
                          h++
                        ) {
                          var l = o - h,
                            c = (0 | t.words[l]) * (0 | e.words[h]),
                            f = 67108863 & c;
                          (a = 67108863 & (f = (f + a) | 0)),
                            (i += (s = ((s = (s + ((c / 67108864) | 0)) | 0) + (f >>> 26)) | 0) >>> 26),
                            (s &= 67108863);
                        }
                        (r.words[o] = a), (n = s), (s = i);
                      }
                      return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                    })(this, t, e)
                  : m(this, t, e)),
              r
            );
          }),
          (g.prototype.makeRBT = function (t) {
            for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++)
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (g.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++) (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (g.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (g.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1, u = Math.cos((2 * Math.PI) / a), h = Math.sin((2 * Math.PI) / a), l = 0;
                l < i;
                l += a
              )
                for (var c = u, f = h, d = 0; d < s; d++) {
                  var p = r[l + d],
                    m = n[l + d],
                    g = r[l + d + s],
                    v = n[l + d + s],
                    y = c * g - f * v;
                  (v = c * v + f * g),
                    (g = y),
                    (r[l + d] = p + g),
                    (n[l + d] = m + v),
                    (r[l + d + s] = p - g),
                    (n[l + d + s] = m - v),
                    d !== a && ((y = u * c - h * f), (f = u * f + h * c), (c = y));
                }
          }),
          (g.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (g.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]), (t[r - n - 1] = i), (i = e[n]), (e[n] = -e[r - n - 1]), (e[r - n - 1] = -i);
              }
          }),
          (g.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
              (t[n] = 67108863 & i), (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (g.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]), (r[2 * s] = 8191 & o), (o >>>= 13), (r[2 * s + 1] = 8191 & o), (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n(0 === (-8192 & o));
          }),
          (g.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (g.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              h = new Array(n),
              l = new Array(n),
              c = new Array(n),
              f = r.words;
            (f.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, h, n),
              this.transform(s, o, a, u, n, i),
              this.transform(h, o, l, c, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * l[d] - u[d] * c[d];
              (u[d] = a[d] * c[d] + u[d] * l[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, f, o, n, i),
              this.conjugate(f, o, n),
              this.normalize13b(f, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r.strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), m(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            n("number" === typeof t), n(t < 67108864);
            for (var e = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * t,
                o = (67108863 & i) + (67108863 & e);
              (e >>= 26), (e += (i / 67108864) | 0), (e += o >>> 26), (this.words[r] = 67108863 & o);
            }
            return 0 !== e && ((this.words[r] = e), this.length++), this;
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] & (1 << i)) >>> i;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
            if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var i;
            n("number" === typeof t && t >= 0), (i = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o),
              u = r;
            if (((i -= s), (i = Math.max(0, i)), u)) {
              for (var h = 0; h < s; h++) u.words[h] = this.words[h];
              u.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
              var c = 0 | this.words[h];
              (this.words[h] = (l << (26 - o)) | (c >>> o)), (l = c & a);
            }
            return (
              u && 0 !== l && (u.words[u.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & i);
          }),
          (o.prototype.imaskn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if ((n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r)) return this;
            if ((0 !== e && r++, (this.length = Math.min(r, this.length)), 0 !== e)) {
              var i = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= i;
            }
            return this.strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              n("number" === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < t
                  ? ((this.words[0] = t - (0 | this.words[0])), (this.negative = 0), this)
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864), e === this.length - 1 ? (this.words[e + 1] = 1) : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" === typeof t), n(t < 67108864), t < 0)) return this.iaddn(-t);
            if (0 !== this.negative) return (this.negative = 0), this.iaddn(t), (this.negative = 1), this;
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)), (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26), (this.words[i + r] = 67108863 & o);
            if (0 === a) return this.strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26), (this.words[i] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1];
            0 !== (r = 26 - this._countBits(s)) && ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]));
            var a,
              u = n.length - i.length;
            if ("mod" !== e) {
              ((a = new o(null)).length = u + 1), (a.words = new Array(a.length));
              for (var h = 0; h < a.length; h++) a.words[h] = 0;
            }
            var l = n.clone()._ishlnsubmul(i, 1, u);
            0 === l.negative && ((n = l), a && (a.words[u] = 1));
            for (var c = u - 1; c >= 0; c--) {
              var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
              for (f = Math.min((f / s) | 0, 67108863), n._ishlnsubmul(i, f, c); 0 !== n.negative; )
                f--, (n.negative = 0), n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
              a && (a.words[c] = f);
            }
            return a && a.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), { div: a || null, mod: n };
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  "mod" !== e && (i = a.div.neg()),
                  "div" !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                  { div: i, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)), "mod" !== e && (i = a.div.neg()), { div: i, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  "div" !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modn(t.words[0])) }
                  : { div: this.divn(t.words[0]), mod: new o(this.modn(t.words[0])) }
                : this._wordDiv(t, e)
            );
            var i, s, a;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o) ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
          }),
          (o.prototype.modn = function (t) {
            n(t <= 67108863);
            for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
            return r;
          }),
          (o.prototype.idivn = function (t) {
            n(t <= 67108863);
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * e;
              (this.words[r] = (i / t) | 0), (e = i % t);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0; e.isEven() && r.isEven(); )
              e.iushrn(1), r.iushrn(1), ++h;
            for (var l = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (var f = 0, d = 1; 0 === (e.words[0] & d) && f < 26; ++f, d <<= 1);
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(c)), i.iushrn(1), s.iushrn(1);
              for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(c)), a.iushrn(1), u.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s));
            }
            return { a: a, b: u, gcd: r.iushln(h) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (var i, s = new o(1), a = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
              for (var h = 0, l = 1; 0 === (e.words[0] & l) && h < 26; ++h, l <<= 1);
              if (h > 0) for (e.iushrn(h); h-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1);
              for (var c = 0, f = 1; 0 === (r.words[0] & f) && c < 26; ++c, f <<= 1);
              if (c > 0) for (r.iushrn(c); c-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
            }
            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r) return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new A(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return n(!this.red, "Already a number in reduction context"), this._forceRed(t);
          }),
          (o.prototype.redAdd = function (t) {
            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
          }),
          (o.prototype.redIAdd = function (t) {
            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
          }),
          (o.prototype.redSub = function (t) {
            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
          }),
          (o.prototype.redISub = function (t) {
            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
          }),
          (o.prototype.redShl = function (t) {
            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
          }),
          (o.prototype.redMul = function (t) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
          }),
          (o.prototype.redISqr = function () {
            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
          }),
          (o.prototype.redSqrt = function () {
            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
          }),
          (o.prototype.redInvm = function () {
            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
          }),
          (o.prototype.redNeg = function () {
            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
          }),
          (o.prototype.redPow = function (t) {
            return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
          });
        var v = { k256: null, p224: null, p192: null, p25519: null };
        function y(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function w() {
          y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        function b() {
          y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        function _() {
          y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        function E() {
          y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        function A(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else n(t.gtn(1), "modulus must be greater than 1"), (this.m = t), (this.prime = null);
        }
        function N(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (y.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (y.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (y.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (y.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(w, y),
          (w.prototype.split = function (t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
            if (((e.length = n), t.length <= 9)) return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var s = 0 | t.words[i];
              (t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s);
            }
            (o >>>= 22), (t.words[i - 10] = o), 0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (w.prototype.imulK = function (t) {
            (t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n), (t.words[r] = 67108863 & e), (e = 64 * n + ((e / 67108864) | 0));
            }
            return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
          }),
          i(b, y),
          i(_, y),
          i(E, y),
          (E.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (v[t]) return v[t];
            var e;
            if ("k256" === t) e = new w();
            else if ("p224" === t) e = new b();
            else if ("p192" === t) e = new _();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new E();
            }
            return (v[t] = e), e;
          }),
          (A.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function (t, e) {
            n(0 === (t.negative | e.negative), "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function (t) {
            return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (A.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (A.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1); ) s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              h = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u); ) l.redIAdd(u);
            for (
              var c = this.pow(l, i), f = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var v = this.pow(c, new o(1).iushln(p - g - 1));
              (f = f.redMul(v)), (c = v.redSqr()), (d = d.redMul(c)), (p = g);
            }
            return f;
          }),
          (A.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative ? ((e.negative = 0), this.imod(e).redNeg()) : this.imod(e);
          }),
          (A.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var h = e.words[n], l = u - 1; l >= 0; l--) {
                var c = (h >> l) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== c || 0 !== s
                    ? ((s <<= 1),
                      (s |= c),
                      (4 === ++a || (0 === n && 0 === l)) && ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                    : (a = 0);
              }
              u = 26;
            }
            return i;
          }),
          (A.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (A.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new N(t);
          }),
          i(N, A),
          (N.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (N.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (N.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero()) return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return i.cmp(this.m) >= 0 ? (o = i.isub(this.m)) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
          }),
          (N.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return i.cmp(this.m) >= 0 ? (s = i.isub(this.m)) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
          }),
          (N.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    7187: function (t) {
      "use strict";
      var e,
        r = "object" === typeof Reflect ? Reflect : null,
        n =
          r && "function" === typeof r.apply
            ? r.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      e =
        r && "function" === typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var i =
        Number.isNaN ||
        function (t) {
          return t !== t;
        };
      function o() {
        o.init.call(this);
      }
      (t.exports = o),
        (t.exports.once = function (t, e) {
          return new Promise(function (r, n) {
            function i(r) {
              t.removeListener(e, o), n(r);
            }
            function o() {
              "function" === typeof t.removeListener && t.removeListener("error", i), r([].slice.call(arguments));
            }
            m(t, e, o, { once: !0 }),
              "error" !== e &&
                (function (t, e, r) {
                  "function" === typeof t.on && m(t, "error", e, r);
                })(t, i, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var s = 10;
      function a(t) {
        if ("function" !== typeof t)
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      }
      function u(t) {
        return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners;
      }
      function h(t, e, r, n) {
        var i, o, s, h;
        if (
          (a(r),
          void 0 === (o = t._events)
            ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), (o = t._events)),
              (s = o[e])),
          void 0 === s)
        )
          (s = o[e] = r), ++t._eventsCount;
        else if (
          ("function" === typeof s ? (s = o[e] = n ? [r, s] : [s, r]) : n ? s.unshift(r) : s.push(r),
          (i = u(t)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var l = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = t),
            (l.type = e),
            (l.count = s.length),
            (h = l),
            console && console.warn && console.warn(h);
        }
        return t;
      }
      function l() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
          );
      }
      function c(t, e, r) {
        var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          i = l.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function f(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var i = n[e];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (t) {
              for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
              return e;
            })(i)
          : p(i, i.length);
      }
      function d(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" === typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function p(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      function m(t, e, r, n) {
        if ("function" === typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
        else {
          if ("function" !== typeof t.addEventListener)
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
          t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o);
          });
        }
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          s = t;
        },
      }),
        (o.init = function () {
          (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' + t + "."
            );
          return (this._maxListeners = t), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return u(this);
        }),
        (o.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
          var i = "error" === t,
            o = this._events;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            var s;
            if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw ((a.context = s), a);
          }
          var u = o[t];
          if (void 0 === u) return !1;
          if ("function" === typeof u) n(u, this, e);
          else {
            var h = u.length,
              l = p(u, h);
            for (r = 0; r < h; ++r) n(l[r], this, e);
          }
          return !0;
        }),
        (o.prototype.addListener = function (t, e) {
          return h(this, t, e, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (t, e) {
          return h(this, t, e, !0);
        }),
        (o.prototype.once = function (t, e) {
          return a(e), this.on(t, c(this, t, e)), this;
        }),
        (o.prototype.prependOnceListener = function (t, e) {
          return a(e), this.prependListener(t, c(this, t, e)), this;
        }),
        (o.prototype.removeListener = function (t, e) {
          var r, n, i, o, s;
          if ((a(e), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[t])) return this;
          if (r === e || r.listener === e)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));
          else if ("function" !== typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === e || r[o].listener === e) {
                (s = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, i),
              1 === r.length && (n[t] = r[0]),
              void 0 !== n.removeListener && this.emit("removeListener", t, s || e);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (t) {
          var e, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== r[t] && (0 === --this._eventsCount ? (this._events = Object.create(null)) : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
          return this;
        }),
        (o.prototype.listeners = function (t) {
          return f(this, t, !0);
        }),
        (o.prototype.rawListeners = function (t) {
          return f(this, t, !1);
        }),
        (o.listenerCount = function (t, e) {
          return "function" === typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e);
        }),
        (o.prototype.listenerCount = d),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? e(this._events) : [];
        });
    },
    3715: function (t, e, r) {
      var n = e;
      (n.utils = r(6436)),
        (n.common = r(5772)),
        (n.sha = r(9041)),
        (n.ripemd = r(2949)),
        (n.hmac = r(2344)),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160);
    },
    5772: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(9746);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = o),
        (o.prototype.update = function (t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending ? (this.pending = this.pending.concat(t)) : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian));
            for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (t) {
          return this.update(this._pad()), i(null === this.pending), this._digest(t);
        }),
        (o.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = new Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (t >>> 24) & 255),
              (n[i++] = (t >>> 16) & 255),
              (n[i++] = (t >>> 8) & 255),
              (n[i++] = 255 & t);
          } else
            for (
              n[i++] = 255 & t,
                n[i++] = (t >>> 8) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              n[i++] = 0;
          return n;
        });
    },
    2344: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(9746);
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r));
      }
      (t.exports = o),
        (o.prototype._init = function (t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()), i(t.length <= this.blockSize);
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (o.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (o.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        });
    },
    2949: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(5772),
        o = n.rotl32,
        s = n.sum32,
        a = n.sum32_3,
        u = n.sum32_4,
        h = i.BlockHash;
      function l() {
        if (!(this instanceof l)) return new l();
        h.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.endian = "little");
      }
      function c(t, e, r, n) {
        return t <= 15
          ? e ^ r ^ n
          : t <= 31
          ? (e & r) | (~e & n)
          : t <= 47
          ? (e | ~r) ^ n
          : t <= 63
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n);
      }
      function f(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
      }
      function d(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
      }
      n.inherits(l, h),
        (e.ripemd160 = l),
        (l.blockSize = 512),
        (l.outSize = 160),
        (l.hmacStrength = 192),
        (l.padLength = 64),
        (l.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              h = this.h[3],
              l = this.h[4],
              y = r,
              w = n,
              b = i,
              _ = h,
              E = l,
              A = 0;
            A < 80;
            A++
          ) {
            var N = s(o(u(r, c(A, n, i, h), t[p[A] + e], f(A)), g[A]), l);
            (r = l),
              (l = h),
              (h = o(i, 10)),
              (i = n),
              (n = N),
              (N = s(o(u(y, c(79 - A, w, b, _), t[m[A] + e], d(A)), v[A]), E)),
              (y = E),
              (E = _),
              (_ = o(b, 10)),
              (b = w),
              (w = N);
          }
          (N = a(this.h[1], i, _)),
            (this.h[1] = a(this.h[2], h, E)),
            (this.h[2] = a(this.h[3], l, y)),
            (this.h[3] = a(this.h[4], r, w)),
            (this.h[4] = a(this.h[0], n, b)),
            (this.h[0] = N);
        }),
        (l.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little");
        });
      var p = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3,
          10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0,
          5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        m = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
          15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
          12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        g = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13,
          12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6,
          5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
        ],
        v = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13,
          11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5,
          15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    9041: function (t, e, r) {
      "use strict";
      (e.sha1 = r(4761)), (e.sha224 = r(799)), (e.sha256 = r(9344)), (e.sha384 = r(772)), (e.sha512 = r(5900));
    },
    4761: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(5772),
        o = r(7038),
        s = n.rotl32,
        a = n.sum32,
        u = n.sum32_5,
        h = o.ft_1,
        l = i.BlockHash,
        c = [1518500249, 1859775393, 2400959708, 3395469782];
      function f() {
        if (!(this instanceof f)) return new f();
        l.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = new Array(80));
      }
      n.inherits(f, l),
        (t.exports = f),
        (f.blockSize = 512),
        (f.outSize = 160),
        (f.hmacStrength = 80),
        (f.padLength = 64),
        (f.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            l = this.h[2],
            f = this.h[3],
            d = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              m = u(s(i, 5), h(p, o, l, f), d, r[n], c[p]);
            (d = f), (f = l), (l = s(o, 30)), (o = i), (i = m);
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], l)),
            (this.h[3] = a(this.h[3], f)),
            (this.h[4] = a(this.h[4], d));
        }),
        (f.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        });
    },
    799: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(9344);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big");
        });
    },
    9344: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(5772),
        o = r(7038),
        s = r(9746),
        a = n.sum32,
        u = n.sum32_4,
        h = n.sum32_5,
        l = o.ch32,
        c = o.maj32,
        f = o.s0_256,
        d = o.s1_256,
        p = o.g0_256,
        m = o.g1_256,
        g = i.BlockHash,
        v = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
          310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
          264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
          3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
          1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
          3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
          1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ];
      function y() {
        if (!(this instanceof y)) return new y();
        g.call(this),
          (this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
          (this.k = v),
          (this.W = new Array(64));
      }
      n.inherits(y, g),
        (t.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++) r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            o = this.h[1],
            g = this.h[2],
            v = this.h[3],
            y = this.h[4],
            w = this.h[5],
            b = this.h[6],
            _ = this.h[7];
          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var E = h(_, d(y), l(y, w, b), this.k[n], r[n]),
              A = a(f(i), c(i, o, g));
            (_ = b), (b = w), (w = y), (y = a(v, E)), (v = g), (g = o), (o = i), (i = a(E, A));
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], g)),
            (this.h[3] = a(this.h[3], v)),
            (this.h[4] = a(this.h[4], y)),
            (this.h[5] = a(this.h[5], w)),
            (this.h[6] = a(this.h[6], b)),
            (this.h[7] = a(this.h[7], _));
        }),
        (y.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        });
    },
    772: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(5900);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415,
            4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428,
          ]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big");
        });
    },
    5900: function (t, e, r) {
      "use strict";
      var n = r(6436),
        i = r(5772),
        o = r(9746),
        s = n.rotr64_hi,
        a = n.rotr64_lo,
        u = n.shr64_hi,
        h = n.shr64_lo,
        l = n.sum64,
        c = n.sum64_hi,
        f = n.sum64_lo,
        d = n.sum64_4_hi,
        p = n.sum64_4_lo,
        m = n.sum64_5_hi,
        g = n.sum64_5_lo,
        v = i.BlockHash,
        y = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163,
          4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
          310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206,
          991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
          264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692,
          3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
          3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
          1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921,
          1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
          3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616,
          1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
          1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452,
          2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271,
          4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470,
          3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function w() {
        if (!(this instanceof w)) return new w();
        v.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119,
            2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = y),
          (this.W = new Array(160));
      }
      function b(t, e, r, n, i) {
        var o = (t & r) ^ (~t & i);
        return o < 0 && (o += 4294967296), o;
      }
      function _(t, e, r, n, i, o) {
        var s = (e & n) ^ (~e & o);
        return s < 0 && (s += 4294967296), s;
      }
      function E(t, e, r, n, i) {
        var o = (t & r) ^ (t & i) ^ (r & i);
        return o < 0 && (o += 4294967296), o;
      }
      function A(t, e, r, n, i, o) {
        var s = (e & n) ^ (e & o) ^ (n & o);
        return s < 0 && (s += 4294967296), s;
      }
      function N(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function k(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function M(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function P(t, e) {
        var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function x(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function I(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ h(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function R(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function S(t, e) {
        var r = a(t, e, 19) ^ a(e, t, 29) ^ h(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      n.inherits(w, v),
        (t.exports = w),
        (w.blockSize = 1024),
        (w.outSize = 512),
        (w.hmacStrength = 192),
        (w.padLength = 128),
        (w.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
          for (; n < r.length; n += 2) {
            var i = R(r[n - 4], r[n - 3]),
              o = S(r[n - 4], r[n - 3]),
              s = r[n - 14],
              a = r[n - 13],
              u = x(r[n - 30], r[n - 29]),
              h = I(r[n - 30], r[n - 29]),
              l = r[n - 32],
              c = r[n - 31];
            (r[n] = d(i, o, s, a, u, h, l, c)), (r[n + 1] = p(i, o, s, a, u, h, l, c));
          }
        }),
        (w.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            s = this.h[2],
            a = this.h[3],
            u = this.h[4],
            h = this.h[5],
            d = this.h[6],
            p = this.h[7],
            v = this.h[8],
            y = this.h[9],
            w = this.h[10],
            x = this.h[11],
            I = this.h[12],
            R = this.h[13],
            S = this.h[14],
            O = this.h[15];
          o(this.k.length === r.length);
          for (var C = 0; C < r.length; C += 2) {
            var T = S,
              B = O,
              F = M(v, y),
              L = P(v, y),
              U = b(v, y, w, x, I),
              D = _(v, y, w, x, I, R),
              j = this.k[C],
              q = this.k[C + 1],
              z = r[C],
              $ = r[C + 1],
              G = m(T, B, F, L, U, D, j, q, z, $),
              Y = g(T, B, F, L, U, D, j, q, z, $);
            (T = N(n, i)), (B = k(n, i)), (F = E(n, i, s, a, u)), (L = A(n, i, s, a, u, h));
            var H = c(T, B, F, L),
              V = f(T, B, F, L);
            (S = I),
              (O = R),
              (I = w),
              (R = x),
              (w = v),
              (x = y),
              (v = c(d, p, G, Y)),
              (y = f(p, p, G, Y)),
              (d = u),
              (p = h),
              (u = s),
              (h = a),
              (s = n),
              (a = i),
              (n = c(G, Y, H, V)),
              (i = f(G, Y, H, V));
          }
          l(this.h, 0, n, i),
            l(this.h, 2, s, a),
            l(this.h, 4, u, h),
            l(this.h, 6, d, p),
            l(this.h, 8, v, y),
            l(this.h, 10, w, x),
            l(this.h, 12, I, R),
            l(this.h, 14, S, O);
        }),
        (w.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        });
    },
    7038: function (t, e, r) {
      "use strict";
      var n = r(6436).rotr32;
      function i(t, e, r) {
        return (t & e) ^ (~t & r);
      }
      function o(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      function s(t, e, r) {
        return t ^ e ^ r;
      }
      (e.ft_1 = function (t, e, r, n) {
        return 0 === t ? i(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? o(e, r, n) : void 0;
      }),
        (e.ch32 = i),
        (e.maj32 = o),
        (e.p32 = s),
        (e.s0_256 = function (t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22);
        }),
        (e.s1_256 = function (t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25);
        }),
        (e.g0_256 = function (t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function (t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
        });
    },
    6436: function (t, e, r) {
      "use strict";
      var n = r(9746),
        i = r(5717);
      function o(t, e) {
        return (
          55296 === (64512 & t.charCodeAt(e)) &&
          !(e < 0 || e + 1 >= t.length) &&
          56320 === (64512 & t.charCodeAt(e + 1))
        );
      }
      function s(t) {
        return ((t >>> 24) | ((t >>> 8) & 65280) | ((t << 8) & 16711680) | ((255 & t) << 24)) >>> 0;
      }
      function a(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function u(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (e.inherits = i),
        (e.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" === typeof t)
            if (e) {
              if ("hex" === e)
                for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t), i = 0; i < t.length; i += 2)
                  r.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < t.length; i++) {
                var s = t.charCodeAt(i);
                s < 128
                  ? (r[n++] = s)
                  : s < 2048
                  ? ((r[n++] = (s >> 6) | 192), (r[n++] = (63 & s) | 128))
                  : o(t, i)
                  ? ((s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i))),
                    (r[n++] = (s >> 18) | 240),
                    (r[n++] = ((s >> 12) & 63) | 128),
                    (r[n++] = ((s >> 6) & 63) | 128),
                    (r[n++] = (63 & s) | 128))
                  : ((r[n++] = (s >> 12) | 224), (r[n++] = ((s >> 6) & 63) | 128), (r[n++] = (63 & s) | 128));
              }
          else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
          return r;
        }),
        (e.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += a(t[r].toString(16));
          return e;
        }),
        (e.htonl = s),
        (e.toHex32 = function (t, e) {
          for (var r = "", n = 0; n < t.length; n++) {
            var i = t[n];
            "little" === e && (i = s(i)), (r += u(i.toString(16)));
          }
          return r;
        }),
        (e.zero2 = a),
        (e.zero8 = u),
        (e.join32 = function (t, e, r, i) {
          var o = r - e;
          n(o % 4 === 0);
          for (var s = new Array(o / 4), a = 0, u = e; a < s.length; a++, u += 4) {
            var h;
            (h =
              "big" === i
                ? (t[u] << 24) | (t[u + 1] << 16) | (t[u + 2] << 8) | t[u + 3]
                : (t[u + 3] << 24) | (t[u + 2] << 16) | (t[u + 1] << 8) | t[u]),
              (s[a] = h >>> 0);
          }
          return s;
        }),
        (e.split32 = function (t, e) {
          for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
            var o = t[n];
            "big" === e
              ? ((r[i] = o >>> 24), (r[i + 1] = (o >>> 16) & 255), (r[i + 2] = (o >>> 8) & 255), (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24), (r[i + 2] = (o >>> 16) & 255), (r[i + 1] = (o >>> 8) & 255), (r[i] = 255 & o));
          }
          return r;
        }),
        (e.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (e.sum32_4 = function (t, e, r, n) {
          return (t + e + r + n) >>> 0;
        }),
        (e.sum32_5 = function (t, e, r, n, i) {
          return (t + e + r + n + i) >>> 0;
        }),
        (e.sum64 = function (t, e, r, n) {
          var i = t[e],
            o = (n + t[e + 1]) >>> 0,
            s = (o < n ? 1 : 0) + r + i;
          (t[e] = s >>> 0), (t[e + 1] = o);
        }),
        (e.sum64_hi = function (t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (e.sum64_lo = function (t, e, r, n) {
          return (e + n) >>> 0;
        }),
        (e.sum64_4_hi = function (t, e, r, n, i, o, s, a) {
          var u = 0,
            h = e;
          return (
            (u += (h = (h + n) >>> 0) < e ? 1 : 0),
            (u += (h = (h + o) >>> 0) < o ? 1 : 0),
            (t + r + i + s + (u += (h = (h + a) >>> 0) < a ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_4_lo = function (t, e, r, n, i, o, s, a) {
          return (e + n + o + a) >>> 0;
        }),
        (e.sum64_5_hi = function (t, e, r, n, i, o, s, a, u, h) {
          var l = 0,
            c = e;
          return (
            (l += (c = (c + n) >>> 0) < e ? 1 : 0),
            (l += (c = (c + o) >>> 0) < o ? 1 : 0),
            (l += (c = (c + a) >>> 0) < a ? 1 : 0),
            (t + r + i + s + u + (l += (c = (c + h) >>> 0) < h ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_5_lo = function (t, e, r, n, i, o, s, a, u, h) {
          return (e + n + o + a + h) >>> 0;
        }),
        (e.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (e.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (e.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (e.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
    },
    5717: function (t) {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
            }
          });
    },
    1094: function (t, e, r) {
      var n,
        i = r(4155);
      !(function () {
        "use strict";
        var o = "input is invalid type",
          s = "object" === typeof window,
          a = s ? window : {};
        a.JS_SHA3_NO_WINDOW && (s = !1);
        var u = !s && "object" === typeof self;
        !a.JS_SHA3_NO_NODE_JS && "object" === typeof i && i.versions && i.versions.node ? (a = r.g) : u && (a = self);
        var h = !a.JS_SHA3_NO_COMMON_JS && t.exports,
          l = r.amdO,
          c = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
          f = "0123456789abcdef".split(""),
          d = [4, 1024, 262144, 67108864],
          p = [0, 8, 16, 24],
          m = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648,
            32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
            2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
            2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648,
          ],
          g = [224, 256, 384, 512],
          v = [128, 256],
          y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          w = { 128: 168, 256: 136 };
        (!a.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          !c ||
            (!a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function (t) {
              return "object" === typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;
            });
        for (
          var b = function (t, e, r) {
              return function (n) {
                return new B(t, e, t).update(n)[r]();
              };
            },
            _ = function (t, e, r) {
              return function (n, i) {
                return new B(t, e, i).update(n)[r]();
              };
            },
            E = function (t, e, r) {
              return function (e, n, i, o) {
                return P["cshake" + t].update(e, n, i, o)[r]();
              };
            },
            A = function (t, e, r) {
              return function (e, n, i, o) {
                return P["kmac" + t].update(e, n, i, o)[r]();
              };
            },
            N = function (t, e, r, n) {
              for (var i = 0; i < y.length; ++i) {
                var o = y[i];
                t[o] = e(r, n, o);
              }
              return t;
            },
            k = function (t, e) {
              var r = b(t, e, "hex");
              return (
                (r.create = function () {
                  return new B(t, e, t);
                }),
                (r.update = function (t) {
                  return r.create().update(t);
                }),
                N(r, b, t, e)
              );
            },
            M = [
              { name: "keccak", padding: [1, 256, 65536, 16777216], bits: g, createMethod: k },
              { name: "sha3", padding: [6, 1536, 393216, 100663296], bits: g, createMethod: k },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: v,
                createMethod: function (t, e) {
                  var r = _(t, e, "hex");
                  return (
                    (r.create = function (r) {
                      return new B(t, e, r);
                    }),
                    (r.update = function (t, e) {
                      return r.create(e).update(t);
                    }),
                    N(r, _, t, e)
                  );
                },
              },
              {
                name: "cshake",
                padding: d,
                bits: v,
                createMethod: function (t, e) {
                  var r = w[t],
                    n = E(t, 0, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return i || o ? new B(t, e, n).bytepad([i, o], r) : P["shake" + t].create(n);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(e, r, i).update(t);
                    }),
                    N(n, E, t, e)
                  );
                },
              },
              {
                name: "kmac",
                padding: d,
                bits: v,
                createMethod: function (t, e) {
                  var r = w[t],
                    n = A(t, 0, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return new F(t, e, i).bytepad(["KMAC", o], r).bytepad([n], r);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(t, r, i).update(e);
                    }),
                    N(n, A, t, e)
                  );
                },
              },
            ],
            P = {},
            x = [],
            I = 0;
          I < M.length;
          ++I
        )
          for (var R = M[I], S = R.bits, O = 0; O < S.length; ++O) {
            var C = R.name + "_" + S[O];
            if ((x.push(C), (P[C] = R.createMethod(S[O], R.padding)), "sha3" !== R.name)) {
              var T = R.name + S[O];
              x.push(T), (P[T] = P[C]);
            }
          }
        function B(t, e, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var n = 0; n < 50; ++n) this.s[n] = 0;
        }
        function F(t, e, r) {
          B.call(this, t, e, r);
        }
        (B.prototype.update = function (t) {
          if (this.finalized) throw new Error("finalize already called");
          var e,
            r = typeof t;
          if ("string" !== r) {
            if ("object" !== r) throw new Error(o);
            if (null === t) throw new Error(o);
            if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
            else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw new Error(o);
            e = !0;
          }
          for (
            var n, i, s = this.blocks, a = this.byteCount, u = t.length, h = this.blockCount, l = 0, f = this.s;
            l < u;

          ) {
            if (this.reset) for (this.reset = !1, s[0] = this.block, n = 1; n < h + 1; ++n) s[n] = 0;
            if (e) for (n = this.start; l < u && n < a; ++l) s[n >> 2] |= t[l] << p[3 & n++];
            else
              for (n = this.start; l < u && n < a; ++l)
                (i = t.charCodeAt(l)) < 128
                  ? (s[n >> 2] |= i << p[3 & n++])
                  : i < 2048
                  ? ((s[n >> 2] |= (192 | (i >> 6)) << p[3 & n++]), (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]))
                  : i < 55296 || i >= 57344
                  ? ((s[n >> 2] |= (224 | (i >> 12)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]))
                  : ((i = 65536 + (((1023 & i) << 10) | (1023 & t.charCodeAt(++l)))),
                    (s[n >> 2] |= (240 | (i >> 18)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | ((i >> 12) & 63)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]));
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = s[h], n = 0; n < h; ++n) f[n] ^= s[n];
              L(f), (this.reset = !0);
            } else this.start = n;
          }
          return this;
        }),
          (B.prototype.encode = function (t, e) {
            var r = 255 & t,
              n = 1,
              i = [r];
            for (r = 255 & (t >>= 8); r > 0; ) i.unshift(r), (r = 255 & (t >>= 8)), ++n;
            return e ? i.push(n) : i.unshift(n), this.update(i), i.length;
          }),
          (B.prototype.encodeString = function (t) {
            var e,
              r = typeof t;
            if ("string" !== r) {
              if ("object" !== r) throw new Error(o);
              if (null === t) throw new Error(o);
              if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
              else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw new Error(o);
              e = !0;
            }
            var n = 0,
              i = t.length;
            if (e) n = i;
            else
              for (var s = 0; s < t.length; ++s) {
                var a = t.charCodeAt(s);
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a = 65536 + (((1023 & a) << 10) | (1023 & t.charCodeAt(++s)))), (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(t), n;
          }),
          (B.prototype.bytepad = function (t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
            var i = e - (r % e),
              o = [];
            return (o.length = i), this.update(o), this;
          }),
          (B.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
              if (((t[e >> 2] |= this.padding[3 & e]), this.lastByteIndex === this.byteCount))
                for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
              for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
              L(n);
            }
          }),
          (B.prototype.toString = B.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  e = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  a = "";
                s < n;

              ) {
                for (o = 0; o < e && s < n; ++o, ++s)
                  (t = r[o]),
                    (a +=
                      f[(t >> 4) & 15] +
                      f[15 & t] +
                      f[(t >> 12) & 15] +
                      f[(t >> 8) & 15] +
                      f[(t >> 20) & 15] +
                      f[(t >> 16) & 15] +
                      f[(t >> 28) & 15] +
                      f[(t >> 24) & 15]);
                s % e === 0 && (L(r), (o = 0));
              }
              return (
                i &&
                  ((t = r[o]),
                  (a += f[(t >> 4) & 15] + f[15 & t]),
                  i > 1 && (a += f[(t >> 12) & 15] + f[(t >> 8) & 15]),
                  i > 2 && (a += f[(t >> 20) & 15] + f[(t >> 16) & 15])),
                a
              );
            }),
          (B.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              e = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              s = 0,
              a = this.outputBits >> 3;
            t = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a);
            for (var u = new Uint32Array(t); s < n; ) {
              for (o = 0; o < e && s < n; ++o, ++s) u[s] = r[o];
              s % e === 0 && L(r);
            }
            return i && ((u[o] = r[o]), (t = t.slice(0, a))), t;
          }),
          (B.prototype.buffer = B.prototype.arrayBuffer),
          (B.prototype.digest = B.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  e,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  u = [];
                a < i;

              ) {
                for (s = 0; s < r && a < i; ++s, ++a)
                  (t = a << 2),
                    (e = n[s]),
                    (u[t] = 255 & e),
                    (u[t + 1] = (e >> 8) & 255),
                    (u[t + 2] = (e >> 16) & 255),
                    (u[t + 3] = (e >> 24) & 255);
                a % r === 0 && L(n);
              }
              return (
                o &&
                  ((t = a << 2),
                  (e = n[s]),
                  (u[t] = 255 & e),
                  o > 1 && (u[t + 1] = (e >> 8) & 255),
                  o > 2 && (u[t + 2] = (e >> 16) & 255)),
                u
              );
            }),
          (F.prototype = new B()),
          (F.prototype.finalize = function () {
            return this.encode(this.outputBits, !0), B.prototype.finalize.call(this);
          });
        var L = function (t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            h,
            l,
            c,
            f,
            d,
            p,
            g,
            v,
            y,
            w,
            b,
            _,
            E,
            A,
            N,
            k,
            M,
            P,
            x,
            I,
            R,
            S,
            O,
            C,
            T,
            B,
            F,
            L,
            U,
            D,
            j,
            q,
            z,
            $,
            G,
            Y,
            H,
            V,
            W,
            K,
            J,
            X,
            Z,
            Q,
            tt,
            et,
            rt,
            nt,
            it,
            ot,
            st,
            at,
            ut,
            ht,
            lt;
          for (n = 0; n < 48; n += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (h = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (e = (f = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ ((s << 1) | (a >>> 31))),
              (r = (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ ((a << 1) | (s >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = i ^ ((u << 1) | (h >>> 31))),
              (r = o ^ ((h << 1) | (u >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = s ^ ((l << 1) | (c >>> 31))),
              (r = a ^ ((c << 1) | (l >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = u ^ ((f << 1) | (d >>> 31))),
              (r = h ^ ((d << 1) | (f >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = l ^ ((i << 1) | (o >>> 31))),
              (r = c ^ ((o << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (p = t[0]),
              (g = t[1]),
              (V = (t[11] << 4) | (t[10] >>> 28)),
              (W = (t[10] << 4) | (t[11] >>> 28)),
              (I = (t[20] << 3) | (t[21] >>> 29)),
              (R = (t[21] << 3) | (t[20] >>> 29)),
              (at = (t[31] << 9) | (t[30] >>> 23)),
              (ut = (t[30] << 9) | (t[31] >>> 23)),
              ($ = (t[40] << 18) | (t[41] >>> 14)),
              (G = (t[41] << 18) | (t[40] >>> 14)),
              (B = (t[2] << 1) | (t[3] >>> 31)),
              (F = (t[3] << 1) | (t[2] >>> 31)),
              (v = (t[13] << 12) | (t[12] >>> 20)),
              (y = (t[12] << 12) | (t[13] >>> 20)),
              (K = (t[22] << 10) | (t[23] >>> 22)),
              (J = (t[23] << 10) | (t[22] >>> 22)),
              (S = (t[33] << 13) | (t[32] >>> 19)),
              (O = (t[32] << 13) | (t[33] >>> 19)),
              (ht = (t[42] << 2) | (t[43] >>> 30)),
              (lt = (t[43] << 2) | (t[42] >>> 30)),
              (et = (t[5] << 30) | (t[4] >>> 2)),
              (rt = (t[4] << 30) | (t[5] >>> 2)),
              (L = (t[14] << 6) | (t[15] >>> 26)),
              (U = (t[15] << 6) | (t[14] >>> 26)),
              (w = (t[25] << 11) | (t[24] >>> 21)),
              (b = (t[24] << 11) | (t[25] >>> 21)),
              (X = (t[34] << 15) | (t[35] >>> 17)),
              (Z = (t[35] << 15) | (t[34] >>> 17)),
              (C = (t[45] << 29) | (t[44] >>> 3)),
              (T = (t[44] << 29) | (t[45] >>> 3)),
              (k = (t[6] << 28) | (t[7] >>> 4)),
              (M = (t[7] << 28) | (t[6] >>> 4)),
              (nt = (t[17] << 23) | (t[16] >>> 9)),
              (it = (t[16] << 23) | (t[17] >>> 9)),
              (D = (t[26] << 25) | (t[27] >>> 7)),
              (j = (t[27] << 25) | (t[26] >>> 7)),
              (_ = (t[36] << 21) | (t[37] >>> 11)),
              (E = (t[37] << 21) | (t[36] >>> 11)),
              (Q = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (Y = (t[8] << 27) | (t[9] >>> 5)),
              (H = (t[9] << 27) | (t[8] >>> 5)),
              (P = (t[18] << 20) | (t[19] >>> 12)),
              (x = (t[19] << 20) | (t[18] >>> 12)),
              (ot = (t[29] << 7) | (t[28] >>> 25)),
              (st = (t[28] << 7) | (t[29] >>> 25)),
              (q = (t[38] << 8) | (t[39] >>> 24)),
              (z = (t[39] << 8) | (t[38] >>> 24)),
              (A = (t[48] << 14) | (t[49] >>> 18)),
              (N = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = p ^ (~v & w)),
              (t[1] = g ^ (~y & b)),
              (t[10] = k ^ (~P & I)),
              (t[11] = M ^ (~x & R)),
              (t[20] = B ^ (~L & D)),
              (t[21] = F ^ (~U & j)),
              (t[30] = Y ^ (~V & K)),
              (t[31] = H ^ (~W & J)),
              (t[40] = et ^ (~nt & ot)),
              (t[41] = rt ^ (~it & st)),
              (t[2] = v ^ (~w & _)),
              (t[3] = y ^ (~b & E)),
              (t[12] = P ^ (~I & S)),
              (t[13] = x ^ (~R & O)),
              (t[22] = L ^ (~D & q)),
              (t[23] = U ^ (~j & z)),
              (t[32] = V ^ (~K & X)),
              (t[33] = W ^ (~J & Z)),
              (t[42] = nt ^ (~ot & at)),
              (t[43] = it ^ (~st & ut)),
              (t[4] = w ^ (~_ & A)),
              (t[5] = b ^ (~E & N)),
              (t[14] = I ^ (~S & C)),
              (t[15] = R ^ (~O & T)),
              (t[24] = D ^ (~q & $)),
              (t[25] = j ^ (~z & G)),
              (t[34] = K ^ (~X & Q)),
              (t[35] = J ^ (~Z & tt)),
              (t[44] = ot ^ (~at & ht)),
              (t[45] = st ^ (~ut & lt)),
              (t[6] = _ ^ (~A & p)),
              (t[7] = E ^ (~N & g)),
              (t[16] = S ^ (~C & k)),
              (t[17] = O ^ (~T & M)),
              (t[26] = q ^ (~$ & B)),
              (t[27] = z ^ (~G & F)),
              (t[36] = X ^ (~Q & Y)),
              (t[37] = Z ^ (~tt & H)),
              (t[46] = at ^ (~ht & et)),
              (t[47] = ut ^ (~lt & rt)),
              (t[8] = A ^ (~p & v)),
              (t[9] = N ^ (~g & y)),
              (t[18] = C ^ (~k & P)),
              (t[19] = T ^ (~M & x)),
              (t[28] = $ ^ (~B & L)),
              (t[29] = G ^ (~F & U)),
              (t[38] = Q ^ (~Y & V)),
              (t[39] = tt ^ (~H & W)),
              (t[48] = ht ^ (~et & nt)),
              (t[49] = lt ^ (~rt & it)),
              (t[0] ^= m[n]),
              (t[1] ^= m[n + 1]);
        };
        if (h) t.exports = P;
        else {
          for (I = 0; I < x.length; ++I) a[x[I]] = P[x[I]];
          l &&
            (void 0 ===
              (n = function () {
                return P;
              }.call(e, r, e, t)) ||
              (t.exports = n));
        }
      })();
    },
    2043: function (t, e, r) {
      var n, i;
      !(function (o, s) {
        "use strict";
        (n = function () {
          var t = function () {},
            e = "undefined",
            r =
              typeof window !== e &&
              typeof window.navigator !== e &&
              /Trident\/|MSIE /.test(window.navigator.userAgent),
            n = ["trace", "debug", "info", "warn", "error"];
          function i(t, e) {
            var r = t[e];
            if ("function" === typeof r.bind) return r.bind(t);
            try {
              return Function.prototype.bind.call(r, t);
            } catch (n) {
              return function () {
                return Function.prototype.apply.apply(r, [t, arguments]);
              };
            }
          }
          function o() {
            console.log &&
              (console.log.apply
                ? console.log.apply(console, arguments)
                : Function.prototype.apply.apply(console.log, [console, arguments])),
              console.trace && console.trace();
          }
          function s(n) {
            return (
              "debug" === n && (n = "log"),
              typeof console !== e &&
                ("trace" === n && r
                  ? o
                  : void 0 !== console[n]
                  ? i(console, n)
                  : void 0 !== console.log
                  ? i(console, "log")
                  : t)
            );
          }
          function a(e, r) {
            for (var i = 0; i < n.length; i++) {
              var o = n[i];
              this[o] = i < e ? t : this.methodFactory(o, e, r);
            }
            this.log = this.debug;
          }
          function u(t, r, n) {
            return function () {
              typeof console !== e && (a.call(this, r, n), this[t].apply(this, arguments));
            };
          }
          function h(t, e, r) {
            return s(t) || u.apply(this, arguments);
          }
          function l(t, r, i) {
            var o,
              s = this;
            r = null == r ? "WARN" : r;
            var u = "loglevel";
            function l(t) {
              var r = (n[t] || "silent").toUpperCase();
              if (typeof window !== e && u) {
                try {
                  return void (window.localStorage[u] = r);
                } catch (i) {}
                try {
                  window.document.cookie = encodeURIComponent(u) + "=" + r + ";";
                } catch (i) {}
              }
            }
            function c() {
              var t;
              if (typeof window !== e && u) {
                try {
                  t = window.localStorage[u];
                } catch (i) {}
                if (typeof t === e)
                  try {
                    var r = window.document.cookie,
                      n = r.indexOf(encodeURIComponent(u) + "=");
                    -1 !== n && (t = /^([^;]+)/.exec(r.slice(n))[1]);
                  } catch (i) {}
                return void 0 === s.levels[t] && (t = void 0), t;
              }
            }
            function f() {
              if (typeof window !== e && u) {
                try {
                  return void window.localStorage.removeItem(u);
                } catch (t) {}
                try {
                  window.document.cookie = encodeURIComponent(u) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                } catch (t) {}
              }
            }
            "string" === typeof t ? (u += ":" + t) : "symbol" === typeof t && (u = void 0),
              (s.name = t),
              (s.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
              (s.methodFactory = i || h),
              (s.getLevel = function () {
                return o;
              }),
              (s.setLevel = function (r, n) {
                if (
                  ("string" === typeof r && void 0 !== s.levels[r.toUpperCase()] && (r = s.levels[r.toUpperCase()]),
                  !("number" === typeof r && r >= 0 && r <= s.levels.SILENT))
                )
                  throw "log.setLevel() called with invalid level: " + r;
                if (((o = r), !1 !== n && l(r), a.call(s, r, t), typeof console === e && r < s.levels.SILENT))
                  return "No console available for logging";
              }),
              (s.setDefaultLevel = function (t) {
                (r = t), c() || s.setLevel(t, !1);
              }),
              (s.resetLevel = function () {
                s.setLevel(r, !1), f();
              }),
              (s.enableAll = function (t) {
                s.setLevel(s.levels.TRACE, t);
              }),
              (s.disableAll = function (t) {
                s.setLevel(s.levels.SILENT, t);
              });
            var d = c();
            null == d && (d = r), s.setLevel(d, !1);
          }
          var c = new l(),
            f = {};
          c.getLogger = function (t) {
            if (("symbol" !== typeof t && "string" !== typeof t) || "" === t)
              throw new TypeError("You must supply a name when creating a logger.");
            var e = f[t];
            return e || (e = f[t] = new l(t, c.getLevel(), c.methodFactory)), e;
          };
          var d = typeof window !== e ? window.log : void 0;
          return (
            (c.noConflict = function () {
              return typeof window !== e && window.log === c && (window.log = d), c;
            }),
            (c.getLoggers = function () {
              return f;
            }),
            (c.default = c),
            c
          );
        }),
          void 0 === (i = "function" === typeof n ? n.call(e, r, e, t) : n) || (t.exports = i);
      })();
    },
    9746: function (t) {
      function e(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      (t.exports = e),
        (e.equal = function (t, e, r) {
          if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
        });
    },
    4155: function (t) {
      var e,
        r,
        n = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (r) {
          try {
            return e.call(null, t, 0);
          } catch (r) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" === typeof setTimeout ? setTimeout : i;
        } catch (t) {
          e = i;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          r = o;
        }
      })();
      var a,
        u = [],
        h = !1,
        l = -1;
      function c() {
        h && a && ((h = !1), a.length ? (u = a.concat(u)) : (l = -1), u.length && f());
      }
      function f() {
        if (!h) {
          var t = s(c);
          h = !0;
          for (var e = u.length; e; ) {
            for (a = u, u = []; ++l < e; ) a && a[l].run();
            (l = -1), (e = u.length);
          }
          (a = null),
            (h = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function p() {}
      (n.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        u.push(new d(t, e)), 1 !== u.length || h || s(f);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = p),
        (n.addListener = p),
        (n.once = p),
        (n.off = p),
        (n.removeListener = p),
        (n.removeAllListeners = p),
        (n.emit = p),
        (n.prependListener = p),
        (n.prependOnceListener = p),
        (n.listeners = function (t) {
          return [];
        }),
        (n.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  },
]);
