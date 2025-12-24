import { f as v, A as J, B as Ae, u as W, t as h, j as c, q as g, C as H, x as xe, r as ee, G as Ne, W as f, b as Oe, d as Ie } from "./index-DbGvSTMe.mjs";
import { W as A, ab as Re, P as C, ac as te, ad as Te, an as Y, Q as _e, T as Me, V as S, ap as Le, $ as Fe, a0 as Se, a1 as we, a3 as je, b1 as We, au as Ue, av as Be, B as ke, b2 as Ge, aw as $e, b3 as w } from "./stats-CJ7fhUyT.mjs";
function b(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(n) {
    if (e == null || e(n), r === !1 || !n.defaultPrevented)
      return t == null ? void 0 : t(n);
  };
}
var ze = "DismissableLayer", U = "dismissableLayer.update", qe = "dismissableLayer.pointerDownOutside", Ve = "dismissableLayer.focusOutside", Q, ne = Ae({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), re = v(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: n,
      onFocusOutside: s,
      onInteractOutside: l,
      onDismiss: i,
      ...u
    } = e, a = J(ne), [d, D] = W(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, P] = W({}), M = A(t, (m) => D(m)), x = Array.from(a.layers), [L] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), be = x.indexOf(L), $ = d ? x.indexOf(d) : -1, ye = a.layersWithOutsidePointerEventsDisabled.size > 0, z = $ >= be, Ce = Ke((m) => {
      const N = m.target, V = [...a.branches].some((F) => F.contains(N));
      !z || V || (n == null || n(m), l == null || l(m), m.defaultPrevented || i == null || i());
    }, p), q = Xe((m) => {
      const N = m.target;
      [...a.branches].some((F) => F.contains(N)) || (s == null || s(m), l == null || l(m), m.defaultPrevented || i == null || i());
    }, p);
    return Re((m) => {
      $ === a.layers.size - 1 && (o == null || o(m), !m.defaultPrevented && i && (m.preventDefault(), i()));
    }, p), h(() => {
      if (d)
        return r && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Q = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(d)), a.layers.add(d), K(), () => {
          r && a.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Q);
        };
    }, [d, p, r, a]), h(() => () => {
      d && (a.layers.delete(d), a.layersWithOutsidePointerEventsDisabled.delete(d), K());
    }, [d, a]), h(() => {
      const m = () => P({});
      return document.addEventListener(U, m), () => document.removeEventListener(U, m);
    }, []), /* @__PURE__ */ c.jsx(
      C.div,
      {
        ...u,
        ref: M,
        style: {
          pointerEvents: ye ? z ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: b(e.onFocusCapture, q.onFocusCapture),
        onBlurCapture: b(e.onBlurCapture, q.onBlurCapture),
        onPointerDownCapture: b(
          e.onPointerDownCapture,
          Ce.onPointerDownCapture
        )
      }
    );
  }
);
re.displayName = ze;
var Ye = "DismissableLayerBranch", Qe = v((e, t) => {
  const r = J(ne), o = g(null), n = A(t, o);
  return h(() => {
    const s = o.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ c.jsx(C.div, { ...e, ref: n });
});
Qe.displayName = Ye;
function Ke(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = te(e), o = g(!1), n = g(() => {
  });
  return h(() => {
    const s = (i) => {
      if (i.target && !o.current) {
        let u = function() {
          oe(
            qe,
            r,
            a,
            { discrete: !0 }
          );
        };
        const a = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", n.current), n.current = u, t.addEventListener("click", n.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", n.current);
      o.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", s), t.removeEventListener("click", n.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Xe(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = te(e), o = g(!1);
  return h(() => {
    const n = (s) => {
      s.target && !o.current && oe(Ve, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", n), () => t.removeEventListener("focusin", n);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function K() {
  const e = new CustomEvent(U);
  document.dispatchEvent(e);
}
function oe(e, t, r, { discrete: o }) {
  const n = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && n.addEventListener(e, t, { once: !0 }), o ? Te(n, s) : n.dispatchEvent(s);
}
function Ze(e, t) {
  return Ne((r, o) => t[r][o] ?? r, e);
}
var T = (e) => {
  const { present: t, children: r } = e, o = Je(t), n = typeof r == "function" ? r({ present: o.isPresent }) : H.only(r), s = A(o.ref, He(n));
  return typeof r == "function" || o.isPresent ? xe(n, { ref: s }) : null;
};
T.displayName = "Presence";
function Je(e) {
  const [t, r] = W(), o = g(null), n = g(e), s = g("none"), l = e ? "mounted" : "unmounted", [i, u] = Ze(l, {
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
  return h(() => {
    const a = O(o.current);
    s.current = i === "mounted" ? a : "none";
  }, [i]), Y(() => {
    const a = o.current, d = n.current;
    if (d !== e) {
      const p = s.current, P = O(a);
      e ? u("MOUNT") : P === "none" || (a == null ? void 0 : a.display) === "none" ? u("UNMOUNT") : u(d && p !== P ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e;
    }
  }, [e, u]), Y(() => {
    if (t) {
      let a;
      const d = t.ownerDocument.defaultView ?? window, D = (P) => {
        const x = O(o.current).includes(CSS.escape(P.animationName));
        if (P.target === t && x && (u("ANIMATION_END"), !n.current)) {
          const L = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", a = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = L);
          });
        }
      }, p = (P) => {
        P.target === t && (s.current = O(o.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", D), t.addEventListener("animationend", D), () => {
        d.clearTimeout(a), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", D), t.removeEventListener("animationend", D);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: ee((a) => {
      o.current = a ? getComputedStyle(a) : null, r(a);
    }, [])
  };
}
function O(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function He(e) {
  var o, n;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (n = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var j = 0;
function et() {
  h(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? X()), document.body.insertAdjacentElement("beforeend", e[1] ?? X()), j++, () => {
      j === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), j--;
    };
  }, []);
}
function X() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var _ = "Dialog", [se] = Me(_), [tt, E] = se(_), ie = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: o,
    defaultOpen: n,
    onOpenChange: s,
    modal: l = !0
  } = e, i = g(null), u = g(null), [a, d] = _e({
    prop: o,
    defaultProp: n ?? !1,
    onChange: s,
    caller: _
  });
  return /* @__PURE__ */ c.jsx(
    tt,
    {
      scope: t,
      triggerRef: i,
      contentRef: u,
      contentId: S(),
      titleId: S(),
      descriptionId: S(),
      open: a,
      onOpenChange: d,
      onOpenToggle: ee(() => d((D) => !D), [d]),
      modal: l,
      children: r
    }
  );
};
ie.displayName = _;
var ae = "DialogTrigger", ce = v(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, n = E(ae, r), s = A(t, n.triggerRef);
    return /* @__PURE__ */ c.jsx(
      C.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": n.open,
        "aria-controls": n.contentId,
        "data-state": G(n.open),
        ...o,
        ref: s,
        onClick: b(e.onClick, n.onOpenToggle)
      }
    );
  }
);
ce.displayName = ae;
var B = "DialogPortal", [nt, le] = se(B, {
  forceMount: void 0
}), ue = (e) => {
  const { __scopeDialog: t, forceMount: r, children: o, container: n } = e, s = E(B, t);
  return /* @__PURE__ */ c.jsx(nt, { scope: t, forceMount: r, children: H.map(o, (l) => /* @__PURE__ */ c.jsx(T, { present: r || s.open, children: /* @__PURE__ */ c.jsx(Le, { asChild: !0, container: n, children: l }) })) });
};
ue.displayName = B;
var R = "DialogOverlay", de = v(
  (e, t) => {
    const r = le(R, e.__scopeDialog), { forceMount: o = r.forceMount, ...n } = e, s = E(R, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ c.jsx(T, { present: o || s.open, children: /* @__PURE__ */ c.jsx(ot, { ...n, ref: t }) }) : null;
  }
);
de.displayName = R;
var rt = we("DialogOverlay.RemoveScroll"), ot = v(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, n = E(R, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Se, { as: rt, allowPinchZoom: !0, shards: [n.contentRef], children: /* @__PURE__ */ c.jsx(
        C.div,
        {
          "data-state": G(n.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), y = "DialogContent", fe = v(
  (e, t) => {
    const r = le(y, e.__scopeDialog), { forceMount: o = r.forceMount, ...n } = e, s = E(y, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(T, { present: o || s.open, children: s.modal ? /* @__PURE__ */ c.jsx(st, { ...n, ref: t }) : /* @__PURE__ */ c.jsx(it, { ...n, ref: t }) });
  }
);
fe.displayName = y;
var st = v(
  (e, t) => {
    const r = E(y, e.__scopeDialog), o = g(null), n = A(t, r.contentRef, o);
    return h(() => {
      const s = o.current;
      if (s) return Fe(s);
    }, []), /* @__PURE__ */ c.jsx(
      me,
      {
        ...e,
        ref: n,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: b(e.onCloseAutoFocus, (s) => {
          var l;
          s.preventDefault(), (l = r.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: b(e.onPointerDownOutside, (s) => {
          const l = s.detail.originalEvent, i = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: b(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), it = v(
  (e, t) => {
    const r = E(y, e.__scopeDialog), o = g(!1), n = g(!1);
    return /* @__PURE__ */ c.jsx(
      me,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var l, i;
          (l = e.onCloseAutoFocus) == null || l.call(e, s), s.defaultPrevented || (o.current || (i = r.triggerRef.current) == null || i.focus(), s.preventDefault()), o.current = !1, n.current = !1;
        },
        onInteractOutside: (s) => {
          var u, a;
          (u = e.onInteractOutside) == null || u.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (n.current = !0));
          const l = s.target;
          ((a = r.triggerRef.current) == null ? void 0 : a.contains(l)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && n.current && s.preventDefault();
        }
      }
    );
  }
), me = v(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: n, onCloseAutoFocus: s, ...l } = e, i = E(y, r), u = g(null), a = A(t, u);
    return et(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        je,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: n,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ c.jsx(
            re,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": G(i.open),
              ...l,
              ref: a,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(at, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(lt, { contentRef: u, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), k = "DialogTitle", ge = v(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, n = E(k, r);
    return /* @__PURE__ */ c.jsx(C.h2, { id: n.titleId, ...o, ref: t });
  }
);
ge.displayName = k;
var pe = "DialogDescription", ve = v(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, n = E(pe, r);
    return /* @__PURE__ */ c.jsx(C.p, { id: n.descriptionId, ...o, ref: t });
  }
);
ve.displayName = pe;
var he = "DialogClose", Ee = v(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, n = E(he, r);
    return /* @__PURE__ */ c.jsx(
      C.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: b(e.onClick, () => n.onOpenChange(!1))
      }
    );
  }
);
Ee.displayName = he;
function G(e) {
  return e ? "open" : "closed";
}
var De = "DialogTitleWarning", [ft, Pe] = We(De, {
  contentName: y,
  titleName: k,
  docsSlug: "dialog"
}), at = ({ titleId: e }) => {
  const t = Pe(De), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return h(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, ct = "DialogDescriptionWarning", lt = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Pe(ct).contentName}}.`;
  return h(() => {
    var s;
    const n = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && n && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, mt = ie, gt = ce, pt = ue, vt = de, ht = fe, Et = ge, Dt = ve, Pt = Ee;
const I = [
  { name: "Public visitors", value: "undefined", bit: f.PUBLIC },
  { name: "Free members", value: "free", bit: f.FREE },
  { name: "Paid members", value: "paid", bit: f.PAID }
], Z = f.PUBLIC | f.FREE | f.PAID, bt = (e) => !e || e.length === 0 ? Z : I.filter((t) => e.includes(t.value)).reduce((t, r) => t | r.bit, 0) || Z, yt = (e) => {
  const t = [];
  return e & f.PUBLIC && t.push(I[0].value), e & f.FREE && t.push(I[1].value), e & f.PAID && t.push(I[2].value), t.join(",");
}, Ct = () => {
  const { audience: e, setAudience: t } = Oe(), { appSettings: r } = Ie(), o = (i) => {
    t(e ^ i);
  }, n = (i) => (e & i) !== 0, s = (i, u) => {
    i.preventDefault(), o(u);
  }, l = () => {
    const i = [];
    if (n(f.PUBLIC) && i.push("Public visitors"), n(f.FREE) && i.push("Free members"), !(r != null && r.paidMembersEnabled)) {
      if (i.length === 2)
        return "All audiences";
      if (i.length === 1)
        return n(f.FREE) ? "Free members" : "Public visitors";
      if (i.length === 0)
        return "Select audience";
    }
    return n(f.PAID) && i.push("Paid members"), i.length === 0 ? "Select audience" : i.length === 3 ? "All audiences" : n(f.FREE) && n(f.PAID) && !n(f.PUBLIC) ? "All members" : i.join(" & ");
  };
  return /* @__PURE__ */ c.jsxs(Ue, { children: [
    /* @__PURE__ */ c.jsx(Be, { asChild: !0, children: /* @__PURE__ */ c.jsxs(ke, { variant: "dropdown", children: [
      /* @__PURE__ */ c.jsx(Ge, {}),
      /* @__PURE__ */ c.jsx("span", { className: "lowercase first-letter:capitalize", children: l() })
    ] }) }),
    /* @__PURE__ */ c.jsxs($e, { align: "end", className: "w-full min-w-48", children: [
      /* @__PURE__ */ c.jsx(
        w,
        {
          checked: n(f.PUBLIC),
          onSelect: (i) => s(i, f.PUBLIC),
          children: "Public visitors"
        }
      ),
      /* @__PURE__ */ c.jsx(
        w,
        {
          checked: n(f.FREE),
          onSelect: (i) => s(i, f.FREE),
          children: "Free members"
        }
      ),
      (r == null ? void 0 : r.paidMembersEnabled) && /* @__PURE__ */ c.jsx(
        w,
        {
          checked: n(f.PAID),
          onSelect: (i) => s(i, f.PAID),
          children: "Paid members"
        }
      )
    ] })
  ] });
};
export {
  Ct as A,
  ht as C,
  Dt as D,
  vt as O,
  pt as P,
  mt as R,
  gt as T,
  Et as a,
  bt as b,
  Pt as c,
  yt as g
};
//# sourceMappingURL=audience-select-DNAWmT7R.mjs.map
