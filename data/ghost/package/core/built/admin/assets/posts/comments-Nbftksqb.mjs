import { j as e, n as W, u as F, q as M, a as E, p as v, b as z, Y as ie, o as ce, H as ue, e as q, v as de } from "./index-BR6l00Zc.mjs";
import { B as y, C as me } from "./heading-6EJY_NKi.mjs";
import { F as he, T as I, a as H, b as O, d as U, c as pe } from "./filters-BEIsAoPJ.mjs";
import { a as fe, d as xe, b as Y } from "./hooks-DsxHNwJh.mjs";
import { u as ge } from "./posts-Cv1Rfk_z.mjs";
import { U as V, i as be, b as ve, d as je, E as we, e as Ne, g as Z, j as Ce, m as ye, n as Te, o as ke, p as Se, q as _e, r as Pe, s as De, t as Fe } from "./dropdown-menu-BUXYqImN.mjs";
import { f as Me, h as Ee, c as Re, a as $e, F as ze, g as Le, b as Ae, D as ee, e as Ie, E as He, R as Oe, H as Ue, T as qe, C as Ve, M as Be } from "./triangle-alert-93yKDrk6.mjs";
import { H as te, g as Qe, u as We } from "./use-infinite-virtual-scroll-BM_6BYfS.mjs";
import { M as Ye } from "./main-layout-DLbrnVWZ.mjs";
import { T as Ke, a as Xe, b as B, c as se, d as Ge, e as Q } from "./table-B2N7IQBu.mjs";
import { E as Je } from "./empty-indicator-CjUOjmUn.mjs";
import { L as Ze } from "./loading-indicator-DRklhKee.mjs";
const et = ({ children: r, className: t, ...s }) => /* @__PURE__ */ e.jsx("section", { className: W("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...s, children: r });
function re({
  knownItems: r,
  useSearch: t,
  filters: s,
  filterFieldName: a,
  searchFieldName: n,
  toOption: l
}) {
  const [o, c] = F(""), { data: u, isLoading: h } = t(o), m = (u == null ? void 0 : u[n]) ?? [], x = M((f) => l(f), [l]);
  return {
    options: E(() => {
      const f = {};
      for (const d of r)
        f[d.id] = x(d);
      for (const d of m ?? [])
        f[d.id] = x(d);
      const g = s.find((d) => d.field === a);
      if (g && g.values[0]) {
        const d = String(g.values[0]);
        d in f || (f[d] = { value: d, label: `ID: ${d}` });
      }
      return Object.values(f);
    }, [r, m, s, a, x]),
    isLoading: h,
    searchValue: o,
    onSearchChange: c
  };
}
const tt = "MembersResponseType", st = fe({
  dataType: tt,
  path: "/members/"
});
function rt(r, t, s, a) {
  var n = this, l = v(null), o = v(0), c = v(0), u = v(null), h = v([]), m = v(), x = v(), w = v(r), f = v(!0);
  w.current = r;
  var g = typeof window < "u", d = !t && t !== 0 && g;
  if (typeof r != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var N = !!(s = s || {}).leading, j = !("trailing" in s) || !!s.trailing, C = "maxWait" in s, i = "debounceOnServer" in s && !!s.debounceOnServer, _ = C ? Math.max(+s.maxWait || 0, t) : null;
  z(function() {
    return f.current = !0, function() {
      f.current = !1;
    };
  }, []);
  var K = E(function() {
    var P = function(p) {
      var b = h.current, S = m.current;
      return h.current = m.current = null, o.current = p, c.current = c.current || p, x.current = w.current.apply(S, b);
    }, T = function(p, b) {
      d && cancelAnimationFrame(u.current), u.current = d ? requestAnimationFrame(p) : setTimeout(p, b);
    }, R = function(p) {
      if (!f.current) return !1;
      var b = p - l.current;
      return !l.current || b >= t || b < 0 || C && p - o.current >= _;
    }, $ = function(p) {
      return u.current = null, j && h.current ? P(p) : (h.current = m.current = null, x.current);
    }, D = function p() {
      var b = Date.now();
      if (N && c.current === o.current && L(), R(b)) return $(b);
      if (f.current) {
        var S = t - (b - l.current), A = C ? Math.min(S, _ - (b - o.current)) : S;
        T(p, A);
      }
    }, L = function() {
      a && a({});
    }, k = function() {
      if (g || i) {
        var p = Date.now(), b = R(p);
        if (h.current = [].slice.call(arguments), m.current = n, l.current = p, b) {
          if (!u.current && f.current) return o.current = l.current, T(D, t), N ? P(l.current) : x.current;
          if (C) return T(D, t), P(l.current);
        }
        return u.current || T(D, t), x.current;
      }
    };
    return k.cancel = function() {
      var p = u.current;
      p && (d ? cancelAnimationFrame(u.current) : clearTimeout(u.current)), o.current = 0, h.current = l.current = m.current = u.current = null, p && a && a({});
    }, k.isPending = function() {
      return !!u.current;
    }, k.flush = function() {
      return u.current ? $(Date.now()) : x.current;
    }, k;
  }, [N, C, t, _, j, d, g, i, a]);
  return K;
}
function nt(r, t) {
  return r === t;
}
function oe(r, t, s) {
  var a = nt, n = v(r), l = F({})[1], o = rt(M(function(u) {
    n.current = u, l({});
  }, [l]), t, s, l), c = v(r);
  return a(c.current, r) || (o(r), c.current = r), [n.current, o];
}
function at(r) {
  const [t] = oe(r, 200);
  return st({
    searchParams: {
      ...t && { search: t },
      limit: "100",
      order: "created_at DESC"
    }
  });
}
function ot(r) {
  const [t] = oe(r, 200), s = t ? `title:~'${t.replace(/'/g, "\\'")}'` : "";
  return ge({
    searchParams: {
      ...s && { filter: s },
      limit: "100",
      fields: "id,title",
      order: "published_at DESC"
    }
  });
}
const lt = ({
  knownPosts: r,
  knownMembers: t,
  filters: s,
  onFiltersChange: a
}) => {
  const n = re({
    knownItems: r,
    useSearch: ot,
    searchFieldName: "posts",
    filters: s,
    filterFieldName: "post",
    toOption: (m) => ({
      value: m.id,
      label: m.title || "(Untitled)"
    })
  }), l = re({
    knownItems: t,
    useSearch: at,
    searchFieldName: "members",
    filters: s,
    filterFieldName: "author",
    toOption: (m) => ({
      value: m.id,
      label: m.name || "Unknown name",
      detail: m.email ?? "(Unknown email)"
    })
  }), o = E(
    () => [
      {
        key: "author",
        label: "Author",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(V, { className: "size-4" }),
        options: l.options,
        isLoading: l.options.length === 0 && l.isLoading,
        onSearchChange: l.onSearchChange,
        searchValue: l.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "post",
        label: "Post",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Me, { className: "size-4" }),
        options: n.options,
        isLoading: n.options.length === 0 && n.isLoading,
        onSearchChange: n.onSearchChange,
        searchValue: n.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "body",
        label: "Text",
        type: "text",
        icon: /* @__PURE__ */ e.jsx(Ee, { className: "size-4" }),
        placeholder: "Search comment text...",
        operators: [
          { value: "contains", label: "contains" },
          { value: "not_contains", label: "does not contain" }
        ],
        defaultOperator: "contains",
        className: "w-48",
        popoverContentClassName: "w-48"
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(be, { className: "size-4" }),
        options: [
          { value: "published", label: "Published" },
          { value: "hidden", label: "Hidden" }
        ]
      },
      {
        key: "reported",
        label: "Reported",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Re, { className: "size-4" }),
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ]
      },
      {
        key: "created_at",
        label: "Date",
        type: "date",
        className: "w-32",
        icon: /* @__PURE__ */ e.jsx($e, { className: "size-4" }),
        operators: [
          { value: "is", label: "is" },
          { value: "before", label: "before" },
          { value: "after", label: "after" }
        ]
      }
    ],
    [n, l]
  ), c = s.length > 0, u = M(() => {
    a([]);
  }, [a]), h = W(
    "flex flex-row justify-between",
    !c && "[grid-area:actions] ",
    c && "col-start-1 col-end-4 row-start-3 pt-7 "
  );
  return /* @__PURE__ */ e.jsxs("div", { className: h, children: [
    /* @__PURE__ */ e.jsx(
      he,
      {
        addButtonIcon: c ? /* @__PURE__ */ e.jsx(ze, {}) : /* @__PURE__ */ e.jsx(Le, {}),
        addButtonText: c ? "Add filter" : "Filter",
        className: `[&>button]:order-last ${c && "[&>button]:border-none"}`,
        fields: o,
        filters: s,
        keyboardShortcut: "f",
        popoverAlign: c ? "start" : "end",
        onChange: a
      }
    ),
    c && /* @__PURE__ */ e.jsxs(
      y,
      {
        className: "font-normal text-muted-foreground",
        variant: "ghost",
        onClick: u,
        children: [
          /* @__PURE__ */ e.jsx(Ae, {}),
          "Clear"
        ]
      }
    )
  ] });
}, it = ({ children: r }) => /* @__PURE__ */ e.jsxs(te, { className: "!pb-6", variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(te.Title, { children: "Comments" }),
  r
] }), ct = ({ children: r }) => /* @__PURE__ */ e.jsx(Ye, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: r }) }) }), ut = "CommentsResponseType", dt = xe({
  dataType: ut,
  path: "/comments/",
  defaultNextPageParams: (r, t) => {
    var s, a;
    return (s = r.meta) != null && s.pagination.next ? {
      ...t,
      page: (((a = r.meta) == null ? void 0 : a.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (r) => {
    const { pages: t } = r, s = t.flatMap((n) => n.comments), a = t[t.length - 1].meta;
    return {
      comments: s,
      meta: a,
      isEnd: a ? a.pagination.pages === a.pagination.page : !0
    };
  }
}), mt = (r) => dt({
  ...r,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post",
    ...r == null ? void 0 : r.searchParams
  }
}), ht = Y({
  method: "PUT",
  path: ({ id: r }) => `/comments/${r}/`,
  body: ({ id: r }) => ({
    comments: [{
      id: r,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), pt = Y({
  method: "PUT",
  path: ({ id: r }) => `/comments/${r}/`,
  body: ({ id: r }) => ({
    comments: [{
      id: r,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), ft = Y({
  method: "PUT",
  path: ({ id: r }) => `/comments/${r}/`,
  body: ({ id: r }) => ({
    comments: [{
      id: r,
      status: "deleted"
    }]
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), ne = /* @__PURE__ */ new Map();
function xt({ parentRef: r, enabled: t = !0, isLoading: s = !1 }) {
  const a = ie(), [n, l] = F(null), o = v(null);
  z(() => {
    if (!t || !r.current)
      return;
    const c = Qe(r.current);
    l(c);
  }, [t, r]), z(() => {
    if (!t || !n)
      return;
    const c = a.pathname + a.search, u = () => {
      const h = n.scrollTop;
      ne.set(c, h);
    };
    return n.addEventListener("scroll", u), () => n.removeEventListener("scroll", u);
  }, [t, a.pathname, a.search, n]), z(() => {
    const c = a.pathname + a.search, u = ne.get(c);
    if (!(!t || !n || s)) {
      if (u !== void 0 && o.current !== c) {
        let h = 0;
        const m = 3, x = () => {
          if (h += 1, !n)
            return;
          const f = n.scrollTop, g = n.scrollHeight, d = n.clientHeight, N = g - d;
          if (u > N && h < m) {
            setTimeout(x, 100);
            return;
          }
          if (Math.abs(u - f) > 5) {
            const j = Math.min(u, N);
            n.scrollTop = j;
          }
        }, w = setTimeout(x, 150);
        return () => clearTimeout(w);
      }
      o.current = c;
    }
  }, [t, a.pathname, a.search, n, s]);
}
const ae = ({ height: r }) => /* @__PURE__ */ e.jsx("tr", { "aria-hidden": "true", className: "flex lg:table-row", children: /* @__PURE__ */ e.jsx("td", { className: "flex lg:table-cell", style: { height: r } }) }), gt = ce(function(t, s) {
  return /* @__PURE__ */ e.jsx(
    B,
    {
      ref: s,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col lg:table-row",
      children: /* @__PURE__ */ e.jsx(Q, { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function bt(r) {
  const t = new Date(r);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function vt({ onClick: r, expanded: t }) {
  return /* @__PURE__ */ e.jsxs(
    y,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-muted-foreground hover:bg-transparent",
      size: "sm",
      variant: "ghost",
      onClick: r,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ e.jsx(Ve, {}) : /* @__PURE__ */ e.jsx(me, {})
      ]
    }
  );
}
function jt({ item: r }) {
  const t = v(null), [s, a] = F(!1), [n, l] = F(!1);
  return z(() => {
    const o = () => {
      t.current && a(t.current.scrollHeight > t.current.clientHeight);
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [r.html]), /* @__PURE__ */ e.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex max-w-[720px] flex-col items-start", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: r.html || "" },
        ref: t,
        className: W(
          "prose flex-1 text-base leading-[1.45em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          n ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1",
          r.status === "hidden" && "text-muted-foreground [&_blockquote]:border-foreground-muted"
        )
      }
    ),
    s && /* @__PURE__ */ e.jsx(vt, { expanded: n, onClick: () => l(!n) })
  ] }) });
}
function wt({
  items: r,
  totalItems: t,
  hasNextPage: s,
  isFetchingNextPage: a,
  fetchNextPage: n,
  onAddFilter: l,
  isLoading: o
}) {
  const c = v(null);
  xt({ parentRef: c, isLoading: o });
  const { visibleItems: u, spaceBefore: h, spaceAfter: m } = We({
    items: r,
    totalItems: t,
    hasNextPage: s,
    isFetchingNextPage: a,
    fetchNextPage: n,
    parentRef: c
  }), { mutate: x } = ht(), { mutate: w } = pt(), { mutate: f } = ft(), [g, d] = F(null), N = () => {
    g && (f({ id: g.id }), d(null));
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: c, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs(
      Ke,
      {
        className: "flex table-fixed flex-col lg:table",
        "data-testid": "comments-list",
        children: [
          /* @__PURE__ */ e.jsx(Xe, { className: "hidden lg:!visible lg:!table-header-group", children: /* @__PURE__ */ e.jsxs(B, { children: [
            /* @__PURE__ */ e.jsx(se, { className: "h-0 px-4 py-0" }),
            /* @__PURE__ */ e.jsx(se, { className: "h-0 w-36 px-4 py-0" })
          ] }) }),
          /* @__PURE__ */ e.jsxs(Ge, { className: "flex flex-col lg:table-row-group", children: [
            /* @__PURE__ */ e.jsx(ae, { height: h }),
            u.map(({ key: j, virtualItem: C, item: i, props: _ }) => {
              var P, T, R, $, D, L, k, p, b, S, A, X, G, J;
              return C.index > r.length - 1 ? /* @__PURE__ */ e.jsx(gt, { ..._ }, j) : /* @__PURE__ */ e.jsxs(
                B,
                {
                  ..._,
                  className: "grid w-full grid-cols-[1fr_5rem] items-center gap-x-4 p-2 hover:bg-muted/50 md:grid-cols-[1fr_auto_5rem] lg:table-row lg:p-0 [&.group:hover_td]:bg-transparent",
                  "data-testid": "comment-list-row",
                  children: [
                    /* @__PURE__ */ e.jsx(Q, { className: "static col-start-1 col-end-1 row-start-1 row-end-1 flex min-w-0 flex-col p-4 md:relative lg:table-cell", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3", children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center", children: [
                        (P = i.member) != null && P.id ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(
                          y,
                          {
                            className: `flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70 ${i.status === "hidden" && "text-muted-foreground"}`,
                            variant: "link",
                            onClick: () => {
                              l("author", i.member.id);
                            },
                            children: [
                              /* @__PURE__ */ e.jsxs("div", { className: "relative flex size-5 items-center justify-center overflow-hidden rounded-full bg-accent", children: [
                                i.member.avatar_image && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ e.jsx("img", { src: i.member.avatar_image }) }),
                                /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(V, { className: "!size-3 text-muted-foreground", size: 12 }) })
                              ] }),
                              i.member.name || "Unknown"
                            ]
                          }
                        ) }) : /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold", children: ((T = i.member) == null ? void 0 : T.name) || "Unknown" }),
                        /* @__PURE__ */ e.jsx(ee, { className: "text-muted-foreground/50", size: 16 }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-baseline gap-1 text-muted-foreground", children: [
                          i.created_at && /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsxs(H, { children: [
                            /* @__PURE__ */ e.jsx(O, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: ue(i.created_at) }) }),
                            /* @__PURE__ */ e.jsx(U, { children: bt(i.created_at) })
                          ] }) }),
                          /* @__PURE__ */ e.jsx("span", { children: "on" }),
                          (R = i.post) != null && R.id && (($ = i.post) != null && $.title) && l ? /* @__PURE__ */ e.jsx(
                            y,
                            {
                              className: "block h-auto truncate p-0 font-medium  text-primary hover:opacity-70",
                              variant: "link",
                              onClick: () => l("post", i.post.id),
                              children: i.post.title
                            }
                          ) : /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Unknown post" })
                        ] }),
                        i.status === "hidden" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                          /* @__PURE__ */ e.jsx(ee, { className: "text-muted-foreground/50", size: 16 }),
                          /* @__PURE__ */ e.jsx("div", { className: "mr-2 flex items-center gap-1 text-muted-foreground", children: "Hidden from members" })
                        ] })
                      ] }),
                      /* @__PURE__ */ e.jsx(jt, { item: i }),
                      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row flex-nowrap items-center gap-2", children: [
                        i.status === "published" && /* @__PURE__ */ e.jsxs(y, { size: "sm", variant: "outline", onClick: () => x({ id: i.id }), children: [
                          /* @__PURE__ */ e.jsx(Ie, {}),
                          "Hide"
                        ] }),
                        i.status === "hidden" && /* @__PURE__ */ e.jsxs(y, { size: "sm", variant: "outline", onClick: () => w({ id: i.id }), children: [
                          /* @__PURE__ */ e.jsx(He, {}),
                          "Show"
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "ml-4 flex items-center gap-3", children: [
                          /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsxs(H, { children: [
                            /* @__PURE__ */ e.jsx(O, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: `ml-2 flex items-center gap-1 text-xs ${!((D = i.count) != null && D.replies) && "text-muted-foreground/70"}`, children: [
                              /* @__PURE__ */ e.jsx(Oe, { size: 16, strokeWidth: 1.5 }),
                              /* @__PURE__ */ e.jsx("span", { children: q((L = i.count) == null ? void 0 : L.replies) })
                            ] }) }),
                            /* @__PURE__ */ e.jsx(U, { children: "Replies" })
                          ] }) }),
                          /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsxs(H, { children: [
                            /* @__PURE__ */ e.jsx(O, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: `ml-2 flex items-center gap-1 text-xs ${!((k = i.count) != null && k.likes) && "text-muted-foreground/70"}`, children: [
                              /* @__PURE__ */ e.jsx(Ue, { size: 16, strokeWidth: 1.5 }),
                              /* @__PURE__ */ e.jsx("span", { children: q((p = i.count) == null ? void 0 : p.likes) })
                            ] }) }),
                            /* @__PURE__ */ e.jsx(U, { children: "Likes" })
                          ] }) }),
                          /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsxs(H, { children: [
                            /* @__PURE__ */ e.jsx(O, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: `ml-2 flex items-center gap-1 text-xs ${(b = i.count) != null && b.reports ? "font-medium text-yellow-600 dark:text-yellow" : "text-muted-foreground/70"}`, children: [
                              /* @__PURE__ */ e.jsx(qe, { size: 16, strokeWidth: (S = i.count) != null && S.reports ? 1.75 : 1.5 }),
                              /* @__PURE__ */ e.jsx("span", { children: q((A = i.count) == null ? void 0 : A.reports) })
                            ] }) }),
                            /* @__PURE__ */ e.jsx(U, { children: "Reports" })
                          ] }) })
                        ] }),
                        /* @__PURE__ */ e.jsxs(ve, { children: [
                          /* @__PURE__ */ e.jsx(je, { asChild: !0, children: /* @__PURE__ */ e.jsx(
                            y,
                            {
                              className: "relative z-10 ml-1",
                              size: "sm",
                              variant: "ghost",
                              children: /* @__PURE__ */ e.jsx(we, {})
                            }
                          ) }),
                          /* @__PURE__ */ e.jsxs(Ne, { align: "start", children: [
                            ((X = i.post) == null ? void 0 : X.url) && /* @__PURE__ */ e.jsx(Z, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: i.post.url, rel: "noopener noreferrer", target: "_blank", children: [
                              /* @__PURE__ */ e.jsx(Ce, { className: "mr-2 size-4" }),
                              "View post"
                            ] }) }),
                            ((G = i.member) == null ? void 0 : G.id) && /* @__PURE__ */ e.jsx(Z, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `#/members/${i.member.id}`, children: [
                              /* @__PURE__ */ e.jsx(V, { className: "mr-2 size-4" }),
                              "View member"
                            ] }) })
                          ] })
                        ] })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ e.jsx(Q, { className: "col-start-2 col-end-2 row-start-2 row-end-3 p-0 text-right align-top md:col-start-3 md:col-end-3 lg:table-cell lg:p-4", children: (J = i.post) != null && J.feature_image ? /* @__PURE__ */ e.jsx(
                      "img",
                      {
                        alt: i.post.title || "Post feature image",
                        className: "hidden aspect-video w-32 rounded object-cover lg:block",
                        src: i.post.feature_image
                      }
                    ) : null })
                  ]
                },
                j
              );
            }),
            /* @__PURE__ */ e.jsx(ae, { height: m })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(ye, { open: !!g, onOpenChange: (j) => !j && d(null), children: /* @__PURE__ */ e.jsxs(Te, { children: [
      /* @__PURE__ */ e.jsxs(ke, { children: [
        /* @__PURE__ */ e.jsx(Se, { children: "Delete comment?" }),
        /* @__PURE__ */ e.jsx(_e, { children: "This comment will be permanently deleted and cannot be recovered." })
      ] }),
      /* @__PURE__ */ e.jsxs(Pe, { children: [
        /* @__PURE__ */ e.jsx(De, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(
          Fe,
          {
            className: "hover:bg-red-700 bg-red-600 text-white",
            onClick: N,
            children: "Delete"
          }
        )
      ] })
    ] }) })
  ] });
}
const le = ["status", "created_at", "body", "post", "author", "reported"];
function Nt(r) {
  const t = [];
  for (const s of r)
    if (s.values[0])
      switch (s.field) {
        case "status":
          t.push(`status:${s.values[0]}`);
          break;
        case "created_at":
          if (s.operator === "before" && s.values[0])
            t.push(`created_at:<'${s.values[0]}'`);
          else if (s.operator === "after" && s.values[0])
            t.push(`created_at:>'${s.values[0]}'`);
          else if (s.operator === "is" && s.values[0]) {
            const l = String(s.values[0]), o = (/* @__PURE__ */ new Date(l + "T00:00:00")).toISOString(), c = (/* @__PURE__ */ new Date(l + "T23:59:59.999")).toISOString();
            t.push(`created_at:>='${o}'+created_at:<='${c}'`);
          }
          break;
        case "body":
          const n = s.values[0].replace(/'/g, "\\'");
          s.operator === "contains" ? t.push(`html:~'${n}'`) : s.operator === "not_contains" && t.push(`html:-~'${n}'`);
          break;
        case "post":
          s.operator === "is_not" ? t.push(`post_id:-${s.values[0]}`) : t.push(`post_id:${s.values[0]}`);
          break;
        case "author":
          s.operator === "is_not" ? t.push(`member_id:-${s.values[0]}`) : t.push(`member_id:${s.values[0]}`);
          break;
        case "reported":
          s.values[0] === "true" ? t.push("count.reports:>0") : s.values[0] === "false" && t.push("count.reports:0");
          break;
      }
  return t.length ? t.join("+") : void 0;
}
function Ct(r) {
  if (!r)
    return null;
  const t = r.indexOf(":");
  return t <= 0 ? null : {
    operator: r.substring(0, t),
    value: r.substring(t + 1)
  };
}
function yt(r) {
  const t = [];
  for (const s of le) {
    const a = r.get(s);
    if (!a)
      continue;
    const n = Ct(a);
    n && t.push({
      id: s,
      field: s,
      operator: n.operator,
      values: [n.value]
    });
  }
  return t;
}
function Tt(r) {
  const t = new URLSearchParams();
  for (const s of r)
    if (le.includes(s.field) && s.values[0] !== void 0) {
      const a = `${s.operator}:${String(s.values[0])}`;
      t.set(s.field, a);
    }
  return t;
}
function kt() {
  const [r, t] = de(), s = E(() => yt(r), [r]), a = M((o, c = {}) => {
    const u = typeof o == "function" ? o(s) : o, h = Tt(u), m = c.replace ?? !0;
    t(h, { replace: m });
  }, [s, t]), n = M(() => {
    t(new URLSearchParams(), { replace: !0 });
  }, [t]), l = E(() => Nt(s), [s]);
  return { filters: s, nql: l, setFilters: a, clearFilters: n };
}
function St({ comments: r }) {
  return E(() => {
    var a, n, l;
    const t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
    for (const o of r)
      (a = o.post) != null && a.id && ((n = o.post) != null && n.title) && t.set(o.post.id, {
        id: o.post.id,
        title: o.post.title
      }), (l = o.member) != null && l.id && s.set(o.member.id, {
        id: o.member.id,
        name: o.member.name,
        email: o.member.email
      });
    return {
      knownPosts: Array.from(t.values()),
      knownMembers: Array.from(s.values())
    };
  }, [r]);
}
const Ht = () => {
  var w, f;
  const { filters: r, nql: t, setFilters: s } = kt(), a = M((g, d, N = "is") => {
    s((j) => [...j.filter((i) => i.field !== g), pe(g, N, [d])], { replace: !1 });
  }, [s]), {
    data: n,
    isError: l,
    isFetching: o,
    isFetchingNextPage: c,
    fetchNextPage: u,
    hasNextPage: h
  } = mt({
    searchParams: t ? { filter: t } : {},
    keepPreviousData: !0
  }), { knownPosts: m, knownMembers: x } = St({ comments: (n == null ? void 0 : n.comments) ?? [] });
  return /* @__PURE__ */ e.jsxs(ct, { children: [
    /* @__PURE__ */ e.jsx(it, { children: /* @__PURE__ */ e.jsx(
      lt,
      {
        filters: r,
        knownMembers: x,
        knownPosts: m,
        onFiltersChange: s
      }
    ) }),
    /* @__PURE__ */ e.jsx(et, { children: o && !c ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(Ze, { size: "lg" }) }) : l ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(y, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : n != null && n.comments.length ? /* @__PURE__ */ e.jsx(
      wt,
      {
        fetchNextPage: u,
        hasNextPage: h,
        isFetchingNextPage: c,
        isLoading: o && !c,
        items: (n == null ? void 0 : n.comments) ?? [],
        totalItems: ((f = (w = n == null ? void 0 : n.meta) == null ? void 0 : w.pagination) == null ? void 0 : f.total) ?? 0,
        onAddFilter: a
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      Je,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ e.jsx(Be, {})
      }
    ) }) })
  ] });
};
export {
  Ht as default
};
//# sourceMappingURL=comments-Nbftksqb.mjs.map
