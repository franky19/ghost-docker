import { e as G, d as de, P as L, b as W, g as xe, k as dt, u as ft, c as vt, a as re, f as ht, m as mt } from "./heading-6EJY_NKi.mjs";
import { b as w, o as D, u as I, a2 as pt, j as g, p as S, q as M, U as gt, x as R, _ as Me, M as Re, K as he, a as yt, N as Ie, Q as Et, a0 as bt } from "./index-BR6l00Zc.mjs";
var A = function() {
  return A = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, A.apply(this, arguments);
};
function Le(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Un(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(c) {
      c(a);
    });
  }
  return new (n || (n = Promise))(function(a, c) {
    function i(l) {
      try {
        u(r.next(l));
      } catch (d) {
        c(d);
      }
    }
    function f(l) {
      try {
        u(r.throw(l));
      } catch (d) {
        c(d);
      }
    }
    function u(l) {
      l.done ? a(l.value) : o(l.value).then(i, f);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Ct(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function St(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = G(e);
  w(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var wt = "Portal", _e = D((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = I(!1);
  de(() => a(!0), []);
  const c = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return c ? pt.createPortal(/* @__PURE__ */ g.jsx(L.div, { ...r, ref: t }), c) : null;
});
_e.displayName = wt;
var oe = "focusScope.autoFocusOnMount", ae = "focusScope.autoFocusOnUnmount", ye = { bubbles: !1, cancelable: !0 }, Nt = "FocusScope", Fe = D((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...c
  } = e, [i, f] = I(null), u = G(o), l = G(a), d = S(null), h = W(t, (s) => f(s)), m = S({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w(() => {
    if (r) {
      let s = function(E) {
        if (m.paused || !i) return;
        const b = E.target;
        i.contains(b) ? d.current = b : _(d.current, { select: !0 });
      }, v = function(E) {
        if (m.paused || !i) return;
        const b = E.relatedTarget;
        b !== null && (i.contains(b) || _(d.current, { select: !0 }));
      }, p = function(E) {
        if (document.activeElement === document.body)
          for (const C of E)
            C.removedNodes.length > 0 && _(i);
      };
      document.addEventListener("focusin", s), document.addEventListener("focusout", v);
      const N = new MutationObserver(p);
      return i && N.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", s), document.removeEventListener("focusout", v), N.disconnect();
      };
    }
  }, [r, i, m.paused]), w(() => {
    if (i) {
      be.add(m);
      const s = document.activeElement;
      if (!i.contains(s)) {
        const p = new CustomEvent(oe, ye);
        i.addEventListener(oe, u), i.dispatchEvent(p), p.defaultPrevented || (Pt(xt(ke(i)), { select: !0 }), document.activeElement === s && _(i));
      }
      return () => {
        i.removeEventListener(oe, u), setTimeout(() => {
          const p = new CustomEvent(ae, ye);
          i.addEventListener(ae, l), i.dispatchEvent(p), p.defaultPrevented || _(s ?? document.body, { select: !0 }), i.removeEventListener(ae, l), be.remove(m);
        }, 0);
      };
    }
  }, [i, u, l, m]);
  const P = M(
    (s) => {
      if (!n && !r || m.paused) return;
      const v = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, p = document.activeElement;
      if (v && p) {
        const N = s.currentTarget, [E, b] = Dt(N);
        E && b ? !s.shiftKey && p === b ? (s.preventDefault(), n && _(E, { select: !0 })) : s.shiftKey && p === E && (s.preventDefault(), n && _(b, { select: !0 })) : p === N && s.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ g.jsx(L.div, { tabIndex: -1, ...c, ref: h, onKeyDown: P });
});
Fe.displayName = Nt;
function Pt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (_(r, { select: t }), document.activeElement !== n) return;
}
function Dt(e) {
  const t = ke(e), n = Ee(t, e), r = Ee(t.reverse(), e);
  return [n, r];
}
function ke(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ee(e, t) {
  for (const n of e)
    if (!Ot(n, { upTo: t })) return n;
}
function Ot(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function At(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function _(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && At(e) && t && e.select();
  }
}
var be = Tt();
function Tt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ce(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ce(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ce(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function xt(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Mt = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, j = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Y = {}, ie = 0, We = function(e) {
  return e && (e.host || We(e.parentNode));
}, Rt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = We(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, It = function(e, t, n, r) {
  var o = Rt(t, Array.isArray(e) ? e : [e]);
  Y[n] || (Y[n] = /* @__PURE__ */ new WeakMap());
  var a = Y[n], c = [], i = /* @__PURE__ */ new Set(), f = new Set(o), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        l(h);
      else
        try {
          var m = h.getAttribute(r), P = m !== null && m !== "false", s = (j.get(h) || 0) + 1, v = (a.get(h) || 0) + 1;
          j.set(h, s), a.set(h, v), c.push(h), s === 1 && P && X.set(h, !0), v === 1 && h.setAttribute(n, "true"), P || h.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", h, p);
        }
    });
  };
  return l(t), i.clear(), ie++, function() {
    c.forEach(function(d) {
      var h = j.get(d) - 1, m = a.get(d) - 1;
      j.set(d, h), a.set(d, m), h || (X.has(d) || d.removeAttribute(r), X.delete(d)), m || d.removeAttribute(n);
    }), ie--, ie || (j = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Y = {});
  };
}, Lt = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Mt(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), It(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Z = "right-scroll-bar-position", q = "width-before-scroll-bar", _t = "with-scroll-bars-hidden", Ft = "--removed-body-scroll-bar-size";
function ce(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function kt(e, t) {
  var n = I(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Wt = typeof window < "u" ? gt : w, Se = /* @__PURE__ */ new WeakMap();
function jt(e, t) {
  var n = kt(null, function(r) {
    return e.forEach(function(o) {
      return ce(o, r);
    });
  });
  return Wt(function() {
    var r = Se.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(i) {
        a.has(i) || ce(i, null);
      }), a.forEach(function(i) {
        o.has(i) || ce(i, c);
      });
    }
    Se.set(n, e);
  }, [e]), n;
}
function Bt(e) {
  return e;
}
function Ut(e, t) {
  t === void 0 && (t = Bt);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, r);
      return n.push(c), function() {
        n = n.filter(function(i) {
          return i !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var c = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), c = n;
      }
      var f = function() {
        var l = c;
        c = [], l.forEach(a);
      }, u = function() {
        return Promise.resolve().then(f);
      };
      u(), n = {
        push: function(l) {
          c.push(l), u();
        },
        filter: function(l) {
          return c = c.filter(l), n;
        }
      };
    }
  };
  return o;
}
function Kt(e) {
  e === void 0 && (e = {});
  var t = Ut(null);
  return t.options = A({ async: !0, ssr: !1 }, e), t;
}
var je = function(e) {
  var t = e.sideCar, n = Le(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return R(r, A({}, n));
};
je.isSideCarExport = !0;
function Vt(e, t) {
  return e.useMedium(t), je;
}
var Be = Kt(), se = function() {
}, J = D(function(e, t) {
  var n = S(null), r = I({
    onScrollCapture: se,
    onWheelCapture: se,
    onTouchMoveCapture: se
  }), o = r[0], a = r[1], c = e.forwardProps, i = e.children, f = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, h = e.sideCar, m = e.noIsolation, P = e.inert, s = e.allowPinchZoom, v = e.as, p = v === void 0 ? "div" : v, N = e.gapMode, E = Le(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = h, C = jt([n, t]), T = A(A({}, E), o);
  return R(
    Me,
    null,
    l && R(b, { sideCar: Be, removeScrollBar: u, shards: d, noIsolation: m, inert: P, setCallbacks: a, allowPinchZoom: !!s, lockRef: n, gapMode: N }),
    c ? Re(he.only(i), A(A({}, T), { ref: C })) : R(p, A({}, T, { className: f, ref: C }), i)
  );
});
J.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
J.classNames = {
  fullWidth: q,
  zeroRight: Z
};
var Gt = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Xt() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Gt();
  return t && e.setAttribute("nonce", t), e;
}
function Yt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function $t(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var zt = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Xt()) && (Yt(t, n), $t(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ht = function() {
  var e = zt();
  return function(t, n) {
    w(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ue = function() {
  var e = Ht(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Zt = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ue = function(e) {
  return parseInt(e || "", 10) || 0;
}, qt = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ue(n), ue(r), ue(o)];
}, Qt = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zt;
  var t = qt(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Jt = Ue(), K = "data-scroll-locked", en = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(_t, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(K, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Z, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(q, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Z, " .").concat(Z, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(q, " .").concat(q, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(K, `] {
    `).concat(Ft, ": ").concat(i, `px;
  }
`);
}, we = function() {
  var e = parseInt(document.body.getAttribute(K) || "0", 10);
  return isFinite(e) ? e : 0;
}, tn = function() {
  w(function() {
    return document.body.setAttribute(K, (we() + 1).toString()), function() {
      var e = we() - 1;
      e <= 0 ? document.body.removeAttribute(K) : document.body.setAttribute(K, e.toString());
    };
  }, []);
}, nn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  tn();
  var a = yt(function() {
    return Qt(o);
  }, [o]);
  return R(Jt, { styles: en(a, !t, o, n ? "" : "!important") });
}, fe = !1;
if (typeof window < "u")
  try {
    var $ = Object.defineProperty({}, "passive", {
      get: function() {
        return fe = !0, !0;
      }
    });
    window.addEventListener("test", $, $), window.removeEventListener("test", $, $);
  } catch {
    fe = !1;
  }
var B = fe ? { passive: !1 } : !1, rn = function(e) {
  return e.tagName === "TEXTAREA";
}, Ke = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rn(e) && n[t] === "visible")
  );
}, on = function(e) {
  return Ke(e, "overflowY");
}, an = function(e) {
  return Ke(e, "overflowX");
}, Ne = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ve(e, r);
    if (o) {
      var a = Ge(e, r), c = a[1], i = a[2];
      if (c > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, cn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, sn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ve = function(e, t) {
  return e === "v" ? on(t) : an(t);
}, Ge = function(e, t) {
  return e === "v" ? cn(t) : sn(t);
}, un = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ln = function(e, t, n, r, o) {
  var a = un(e, window.getComputedStyle(t).direction), c = a * r, i = n.target, f = t.contains(i), u = !1, l = c > 0, d = 0, h = 0;
  do {
    var m = Ge(e, i), P = m[0], s = m[1], v = m[2], p = s - v - a * P;
    (P || p) && Ve(e, i) && (d += p, h += P), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(h) < 1) && (u = !0), u;
}, z = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Pe = function(e) {
  return [e.deltaX, e.deltaY];
}, De = function(e) {
  return e && "current" in e ? e.current : e;
}, dn = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, fn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, vn = 0, U = [];
function hn(e) {
  var t = S([]), n = S([0, 0]), r = S(), o = I(vn++)[0], a = I(Ue)[0], c = S(e);
  w(function() {
    c.current = e;
  }, [e]), w(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var s = Ct([e.lockRef.current], (e.shards || []).map(De), !0).filter(Boolean);
      return s.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), s.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = M(function(s, v) {
    if ("touches" in s && s.touches.length === 2 || s.type === "wheel" && s.ctrlKey)
      return !c.current.allowPinchZoom;
    var p = z(s), N = n.current, E = "deltaX" in s ? s.deltaX : N[0] - p[0], b = "deltaY" in s ? s.deltaY : N[1] - p[1], C, T = s.target, y = Math.abs(E) > Math.abs(b) ? "h" : "v";
    if ("touches" in s && y === "h" && T.type === "range")
      return !1;
    var x = Ne(y, T);
    if (!x)
      return !0;
    if (x ? C = y : (C = y === "v" ? "h" : "v", x = Ne(y, T)), !x)
      return !1;
    if (!r.current && "changedTouches" in s && (E || b) && (r.current = C), !C)
      return !0;
    var V = r.current || C;
    return ln(V, v, s, V === "h" ? E : b);
  }, []), f = M(function(s) {
    var v = s;
    if (!(!U.length || U[U.length - 1] !== a)) {
      var p = "deltaY" in v ? Pe(v) : z(v), N = t.current.filter(function(C) {
        return C.name === v.type && (C.target === v.target || v.target === C.shadowParent) && dn(C.delta, p);
      })[0];
      if (N && N.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!N) {
        var E = (c.current.shards || []).map(De).filter(Boolean).filter(function(C) {
          return C.contains(v.target);
        }), b = E.length > 0 ? i(v, E[0]) : !c.current.noIsolation;
        b && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = M(function(s, v, p, N) {
    var E = { name: s, delta: v, target: p, should: N, shadowParent: mn(p) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== E;
      });
    }, 1);
  }, []), l = M(function(s) {
    n.current = z(s), r.current = void 0;
  }, []), d = M(function(s) {
    u(s.type, Pe(s), s.target, i(s, e.lockRef.current));
  }, []), h = M(function(s) {
    u(s.type, z(s), s.target, i(s, e.lockRef.current));
  }, []);
  w(function() {
    return U.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", f, B), document.addEventListener("touchmove", f, B), document.addEventListener("touchstart", l, B), function() {
      U = U.filter(function(s) {
        return s !== a;
      }), document.removeEventListener("wheel", f, B), document.removeEventListener("touchmove", f, B), document.removeEventListener("touchstart", l, B);
    };
  }, []);
  var m = e.removeScrollBar, P = e.inert;
  return R(
    Me,
    null,
    P ? R(a, { styles: fn(o) }) : null,
    m ? R(nn, { gapMode: e.gapMode }) : null
  );
}
function mn(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const pn = Vt(Be, hn);
var Xe = D(function(e, t) {
  return R(J, A({}, e, { ref: t, sideCar: pn }));
});
Xe.classNames = J.classNames;
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Kn = xe("check", gn);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Vn = xe("x", yn);
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var En = "DismissableLayer", ve = "dismissableLayer.update", bn = "dismissableLayer.pointerDownOutside", Cn = "dismissableLayer.focusOutside", Oe, Ye = Et({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $e = D(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: i,
      ...f
    } = e, u = Ie(Ye), [l, d] = I(null), h = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = I({}), P = W(t, (y) => d(y)), s = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = s.indexOf(v), N = l ? s.indexOf(l) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, b = N >= p, C = Nn((y) => {
      const x = y.target, V = [...u.branches].some((ne) => ne.contains(x));
      !b || V || (o == null || o(y), c == null || c(y), y.defaultPrevented || i == null || i());
    }, h), T = Pn((y) => {
      const x = y.target;
      [...u.branches].some((ne) => ne.contains(x)) || (a == null || a(y), c == null || c(y), y.defaultPrevented || i == null || i());
    }, h);
    return St((y) => {
      N === u.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, h), w(() => {
      if (l)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Oe = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), Ae(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Oe);
        };
    }, [l, h, n, u]), w(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), Ae());
    }, [l, u]), w(() => {
      const y = () => m({});
      return document.addEventListener(ve, y), () => document.removeEventListener(ve, y);
    }, []), /* @__PURE__ */ g.jsx(
      L.div,
      {
        ...f,
        ref: P,
        style: {
          pointerEvents: E ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
$e.displayName = En;
var Sn = "DismissableLayerBranch", wn = D((e, t) => {
  const n = Ie(Ye), r = S(null), o = W(t, r);
  return w(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ g.jsx(L.div, { ...e, ref: o });
});
wn.displayName = Sn;
function Nn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = G(e), r = S(!1), o = S(() => {
  });
  return w(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          ze(
            bn,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Pn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = G(e), r = S(!1);
  return w(() => {
    const o = (a) => {
      a.target && !r.current && ze(Cn, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ae() {
  const e = new CustomEvent(ve);
  document.dispatchEvent(e);
}
function ze(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? dt(o, a) : o.dispatchEvent(a);
}
function Dn(e, t) {
  return bt((n, r) => t[n][r] ?? n, e);
}
var ee = (e) => {
  const { present: t, children: n } = e, r = On(t), o = typeof n == "function" ? n({ present: r.isPresent }) : he.only(n), a = W(r.ref, An(o));
  return typeof n == "function" || r.isPresent ? Re(o, { ref: a }) : null;
};
ee.displayName = "Presence";
function On(e) {
  const [t, n] = I(), r = S(null), o = S(e), a = S("none"), c = e ? "mounted" : "unmounted", [i, f] = Dn(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return w(() => {
    const u = H(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), de(() => {
    const u = r.current, l = o.current;
    if (l !== e) {
      const h = a.current, m = H(u);
      e ? f("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? f("UNMOUNT") : f(l && h !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), de(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (m) => {
        const s = H(r.current).includes(CSS.escape(m.animationName));
        if (m.target === t && s && (f("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (m) => {
        m.target === t && (a.current = H(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: M((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function H(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function An(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var le = 0;
function Tn() {
  w(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Te()), document.body.insertAdjacentElement("beforeend", e[1] ?? Te()), le++, () => {
      le === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), le--;
    };
  }, []);
}
function Te() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var te = "Dialog", [He] = vt(te), [xn, O] = He(te), Ze = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: c = !0
  } = e, i = S(null), f = S(null), [u, l] = ft({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: te
  });
  return /* @__PURE__ */ g.jsx(
    xn,
    {
      scope: t,
      triggerRef: i,
      contentRef: f,
      contentId: re(),
      titleId: re(),
      descriptionId: re(),
      open: u,
      onOpenChange: l,
      onOpenToggle: M(() => l((d) => !d), [l]),
      modal: c,
      children: n
    }
  );
};
Ze.displayName = te;
var qe = "DialogTrigger", Qe = D(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = O(qe, n), a = W(t, o.triggerRef);
    return /* @__PURE__ */ g.jsx(
      L.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ge(o.open),
        ...r,
        ref: a,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Qe.displayName = qe;
var me = "DialogPortal", [Mn, Je] = He(me, {
  forceMount: void 0
}), et = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = O(me, t);
  return /* @__PURE__ */ g.jsx(Mn, { scope: t, forceMount: n, children: he.map(r, (c) => /* @__PURE__ */ g.jsx(ee, { present: n || a.open, children: /* @__PURE__ */ g.jsx(_e, { asChild: !0, container: o, children: c }) })) });
};
et.displayName = me;
var Q = "DialogOverlay", tt = D(
  (e, t) => {
    const n = Je(Q, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = O(Q, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ g.jsx(ee, { present: r || a.open, children: /* @__PURE__ */ g.jsx(In, { ...o, ref: t }) }) : null;
  }
);
tt.displayName = Q;
var Rn = ht("DialogOverlay.RemoveScroll"), In = D(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = O(Q, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ g.jsx(Xe, { as: Rn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ g.jsx(
        L.div,
        {
          "data-state": ge(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), k = "DialogContent", nt = D(
  (e, t) => {
    const n = Je(k, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = O(k, e.__scopeDialog);
    return /* @__PURE__ */ g.jsx(ee, { present: r || a.open, children: a.modal ? /* @__PURE__ */ g.jsx(Ln, { ...o, ref: t }) : /* @__PURE__ */ g.jsx(_n, { ...o, ref: t }) });
  }
);
nt.displayName = k;
var Ln = D(
  (e, t) => {
    const n = O(k, e.__scopeDialog), r = S(null), o = W(t, n.contentRef, r);
    return w(() => {
      const a = r.current;
      if (a) return Lt(a);
    }, []), /* @__PURE__ */ g.jsx(
      rt,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (a) => {
          var c;
          a.preventDefault(), (c = n.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: F(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), _n = D(
  (e, t) => {
    const n = O(k, e.__scopeDialog), r = S(!1), o = S(!1);
    return /* @__PURE__ */ g.jsx(
      rt,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var c, i;
          (c = e.onCloseAutoFocus) == null || c.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var f, u;
          (f = e.onInteractOutside) == null || f.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const c = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), rt = D(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...c } = e, i = O(k, n), f = S(null), u = W(t, f);
    return Tn(), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(
        Fe,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ g.jsx(
            $e,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": ge(i.open),
              ...c,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx(Fn, { titleId: i.titleId }),
        /* @__PURE__ */ g.jsx(Wn, { contentRef: f, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), pe = "DialogTitle", ot = D(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = O(pe, n);
    return /* @__PURE__ */ g.jsx(L.h2, { id: o.titleId, ...r, ref: t });
  }
);
ot.displayName = pe;
var at = "DialogDescription", it = D(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = O(at, n);
    return /* @__PURE__ */ g.jsx(L.p, { id: o.descriptionId, ...r, ref: t });
  }
);
it.displayName = at;
var ct = "DialogClose", st = D(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = O(ct, n);
    return /* @__PURE__ */ g.jsx(
      L.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
st.displayName = ct;
function ge(e) {
  return e ? "open" : "closed";
}
var ut = "DialogTitleWarning", [Gn, lt] = mt(ut, {
  contentName: k,
  titleName: pe,
  docsSlug: "dialog"
}), Fn = ({ titleId: e }) => {
  const t = lt(ut), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return w(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, kn = "DialogDescriptionWarning", Wn = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${lt(kn).contentName}}.`;
  return w(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Xn = Ze, Yn = Qe, $n = et, zn = tt, Hn = nt, Zn = ot, qn = it, Qn = st;
export {
  Kn as C,
  qn as D,
  Fe as F,
  zn as O,
  _e as P,
  Xe as R,
  Yn as T,
  Vn as X,
  Un as _,
  Xn as a,
  $n as b,
  Hn as c,
  Qn as d,
  Zn as e,
  Le as f,
  Lt as h,
  St as u
};
//# sourceMappingURL=index-CIzzct1W.mjs.map
