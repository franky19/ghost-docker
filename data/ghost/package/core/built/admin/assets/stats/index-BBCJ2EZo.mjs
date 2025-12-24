import { a as me, j as e, u as X, b as le, d as ie, O as Te, t as Se, n as J, g as d, i as K, T as $, V as ee, k as G, o as ue, m as Me, p as te, R as be, e as fe } from "./index-DbGvSTMe.mjs";
import { E as he, aP as Pe, B as xe, aO as se, j as Be, au as Ee, av as Ye, aw as Oe, ax as ae, k as pe, aQ as Ve, aR as Fe, aS as Ge, aT as Re, aU as Ae, aV as $e, aW as je, aX as ze, aY as Le, m as ne, S as _e, F as Ie, aD as Ke, aZ as Ue, y as We, z as He, N as Qe, D as qe, A as Xe, a as ge, e as ve, b as Je, c as Ze, d as es, J as ss } from "./stats-CJ7fhUyT.mjs";
import { T as ce, a as de, K as re, c as R, d as as, b as U, e as ye } from "./tabs-CkbxYgOE.mjs";
import { B as rs, T as q, a as S, b as N, c as ts, d as we, e as Ce, f as A, S as W } from "./sort-button-D76rcldr.mjs";
import { k as ns, S as ls, a as is, b as os, c as cs, d as ds, f as ms, g as us, C as I, h as hs, l as xs, j as bs } from "./url-helpers-DICtqCrE.mjs";
import { g as oe, u as fs } from "./use-growth-stats-DzO7zEy4.mjs";
import { g as ps } from "./audience-select-DNAWmT7R.mjs";
const ke = ({ className: o }) => {
  const p = me();
  return /* @__PURE__ */ e.jsx(
    he,
    {
      actions: /* @__PURE__ */ e.jsx(xe, { variant: "outline", onClick: () => p("/settings/analytics", { crossApp: !0 }), children: "Open settings" }),
      className: o,
      description: "Enable member source tracking in settings to see which content drives member growth.",
      title: "Member sources have been disabled",
      children: /* @__PURE__ */ e.jsx(Pe, {})
    }
  );
}, js = ({ chartData: o, subscriptionData: p, totals: T, initialTab: u = "total-members", currencySymbol: j, isLoading: f }) => {
  const [a, x] = X(u), [m, z] = X("total"), { range: r } = le(), { appSettings: b } = ie(), H = me(), [M] = Te();
  Se(() => {
    x(u);
  }, [u]);
  const w = (s) => {
    x(s);
    const n = new URLSearchParams(M);
    n.set("tab", s), H(`?${n.toString()}`, { replace: !0 });
  }, { totalMembers: P, freeMembers: O, paidMembers: V, mrr: B, percentChanges: C, directions: t } = T, _ = (s, n) => {
    if (n === 1) {
      const k = $().format("YYYY-MM-DD"), D = s.find((Z) => Z.date === k);
      return [{
        date: k,
        signups: (D == null ? void 0 : D.signups) || 0,
        cancellations: (D == null ? void 0 : D.cancellations) || 0
      }];
    }
    const { startDate: i, endDate: h } = ue(n), c = $(h).diff($(i), "days"), g = ze(n, c, "sum"), F = new Map(s.map((k) => [k.date, k])), L = [], Q = $(i), De = $(h);
    for (; Q.isSameOrBefore(De); ) {
      let k, D;
      switch (g) {
        case "weekly":
          k = Q.startOf("week").format("YYYY-MM-DD"), D = "week";
          break;
        case "monthly":
          k = Q.startOf("month").format("YYYY-MM-DD"), D = "month";
          break;
        default:
          k = Q.format("YYYY-MM-DD"), D = "day";
      }
      const Z = F.get(k);
      Z ? L.push(Z) : L.push({
        date: k,
        signups: 0,
        cancellations: 0
      }), Q.add(1, D);
    }
    return L;
  }, v = J(() => {
    if (!o || o.length === 0)
      return [];
    let s = [], n = "value";
    switch (a) {
      case "free-members":
        n = "free";
        break;
      case "paid-members":
        n = "paid";
        break;
      case "mrr": {
        n = "mrr";
        break;
      }
      default:
        n = "value";
    }
    s = se(o, r, n, "exact");
    let i = [];
    switch (a) {
      case "free-members":
        i = s.map((h) => ({
          ...h,
          value: h.free,
          formattedValue: d(h.free),
          label: "Free members"
        }));
        break;
      case "paid-members":
        i = s.map((h) => ({
          ...h,
          value: h.paid,
          formattedValue: d(h.paid),
          label: "Paid members"
        }));
        break;
      case "mrr":
        i = s.map((h) => ({
          ...h,
          value: K(h.mrr),
          formattedValue: `${j}${d(K(h.mrr))}`,
          label: "MRR"
        }));
        break;
      default:
        i = s.map((h) => {
          const c = h.free + h.paid;
          return {
            ...h,
            value: c,
            formattedValue: d(c),
            label: "Total members"
          };
        });
    }
    return i;
  }, [a, o, r, j]), y = {
    "total-members": {
      color: "hsl(var(--chart-darkblue))"
    },
    "free-members": {
      color: "hsl(var(--chart-blue))"
    },
    "paid-members": {
      color: "hsl(var(--chart-purple))"
    },
    mrr: {
      color: "hsl(var(--chart-teal))"
    }
  }, E = J(() => {
    if (a !== "paid-members")
      return [];
    if (p && p.length > 0) {
      if (r === 1) {
        const c = $().format("YYYY-MM-DD"), g = p.find((F) => F.date === c);
        return [{
          date: ee(c, r),
          new: (g == null ? void 0 : g.signups) || 0,
          cancelled: -((g == null ? void 0 : g.cancellations) || 0)
          // Negative for the stacked bar chart
        }];
      }
      const s = se(p, r, "signups", "sum"), n = se(p, r, "cancellations", "sum"), i = s.map((c) => {
        var g;
        return {
          date: c.date,
          signups: c.signups || 0,
          cancellations: ((g = n.find((F) => F.date === c.date)) == null ? void 0 : g.cancellations) || 0
        };
      });
      return n.forEach((c) => {
        i.find((g) => g.date === c.date) || i.push({
          date: c.date,
          signups: 0,
          cancellations: c.cancellations || 0
        });
      }), i.sort((c, g) => new Date(c.date).getTime() - new Date(g.date).getTime()), _(i, r).map((c) => ({
        date: ee(c.date, r),
        new: c.signups || 0,
        cancelled: -(c.cancellations || 0)
        // Negative for the stacked bar chart
      }));
    } else {
      if (!o || o.length === 0)
        return [];
      if (r === 1) {
        const n = $().format("YYYY-MM-DD"), i = o.find((h) => h.date === n);
        return [{
          date: ee(n, r),
          new: (i == null ? void 0 : i.paid_subscribed) || 0,
          cancelled: -((i == null ? void 0 : i.paid_canceled) || 0)
          // Negative for the stacked bar chart
        }];
      }
      return se(o, r, "paid", "exact").map((n) => ({
        date: ee(n.date, r),
        new: n.paid_subscribed || 0,
        cancelled: -(n.paid_canceled || 0)
        // Negative for the stacked bar chart
      }));
    }
  }, [a, o, p, r]), Y = {
    new: {
      label: "New",
      color: "hsl(var(--chart-teal))"
    },
    cancelled: {
      label: "Cancelled",
      color: "hsl(var(--chart-rose))"
    }
  };
  if (f)
    return /* @__PURE__ */ e.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ e.jsx(Be, {}) });
  const l = "-mb-3 h-[16vw] max-h-[320px] w-full min-h-[180px]";
  return /* @__PURE__ */ e.jsxs(ce, { defaultValue: u, variant: "kpis", children: [
    /* @__PURE__ */ e.jsxs(de, { className: `-mx-6 ${b != null && b.paidMembersEnabled ? "hidden grid-cols-4 lg:!visible lg:!grid" : "grid grid-cols-4"}`, children: [
      /* @__PURE__ */ e.jsx(re, { className: b != null && b.paidMembersEnabled ? "" : "cursor-auto after:hidden", value: "total-members", onClick: () => {
        b != null && b.paidMembersEnabled && w("total-members");
      }, children: /* @__PURE__ */ e.jsx(
        R,
        {
          color: "hsl(var(--chart-darkblue))",
          diffDirection: r === G.allTime.value ? "hidden" : t.total,
          diffValue: C.total,
          label: "Total members",
          value: d(P)
        }
      ) }),
      (b == null ? void 0 : b.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(re, { value: "free-members", onClick: () => {
          w("free-members");
        }, children: /* @__PURE__ */ e.jsx(
          R,
          {
            color: "hsl(var(--chart-blue))",
            diffDirection: r === G.allTime.value ? "hidden" : t.free,
            diffValue: C.free,
            label: "Free members",
            value: d(O)
          }
        ) }),
        /* @__PURE__ */ e.jsx(re, { value: "paid-members", onClick: () => {
          w("paid-members");
        }, children: /* @__PURE__ */ e.jsx(
          R,
          {
            color: "hsl(var(--chart-purple))",
            diffDirection: r === G.allTime.value ? "hidden" : t.paid,
            diffValue: C.paid,
            label: "Paid members",
            value: d(V)
          }
        ) }),
        /* @__PURE__ */ e.jsx(re, { value: "mrr", onClick: () => {
          w("mrr");
        }, children: /* @__PURE__ */ e.jsx(
          R,
          {
            color: "hsl(var(--chart-teal))",
            diffDirection: r === G.allTime.value ? "hidden" : t.mrr,
            diffValue: C.mrr,
            label: "MRR",
            value: `${j}${d(K(B))}`
          }
        ) })
      ] })
    ] }),
    (b == null ? void 0 : b.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(Ee, { children: [
      /* @__PURE__ */ e.jsx(Ye, { className: "lg:hidden", asChild: !0, children: /* @__PURE__ */ e.jsxs(as, { children: [
        a === "total-members" && /* @__PURE__ */ e.jsx(
          R,
          {
            color: "hsl(var(--chart-darkblue))",
            diffDirection: r === G.allTime.value ? "hidden" : t.total,
            diffValue: C.total,
            label: "Total members",
            value: d(P)
          }
        ),
        a === "free-members" && /* @__PURE__ */ e.jsx(
          R,
          {
            color: "hsl(var(--chart-blue))",
            diffDirection: r === G.allTime.value ? "hidden" : t.free,
            diffValue: C.free,
            label: "Free members",
            value: d(O)
          }
        ),
        a === "paid-members" && /* @__PURE__ */ e.jsx(
          R,
          {
            color: "hsl(var(--chart-purple))",
            diffDirection: r === G.allTime.value ? "hidden" : t.paid,
            diffValue: C.paid,
            label: "Paid members",
            value: d(V)
          }
        ),
        a === "mrr" && /* @__PURE__ */ e.jsx(
          R,
          {
            color: "hsl(var(--chart-teal))",
            diffDirection: r === G.allTime.value ? "hidden" : t.mrr,
            diffValue: C.mrr,
            label: "MRR",
            value: `${j}${d(K(B))}`
          }
        )
      ] }) }),
      /* @__PURE__ */ e.jsxs(Oe, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ e.jsx(ae, { onClick: () => w("total-members"), children: "Total members" }),
        /* @__PURE__ */ e.jsx(ae, { onClick: () => w("free-members"), children: "Free members" }),
        /* @__PURE__ */ e.jsx(ae, { onClick: () => w("paid-members"), children: "Paid members" }),
        /* @__PURE__ */ e.jsx(ae, { onClick: () => w("mrr"), children: "MRR" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: a === "paid-members" ? /* @__PURE__ */ e.jsxs(
      ce,
      {
        defaultValue: m,
        variant: "button-sm",
        onValueChange: (s) => {
          z(s);
        },
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "mb-4 mt-2 flex w-full items-center justify-start", children: /* @__PURE__ */ e.jsxs(de, { className: "flex items-center", children: [
            /* @__PURE__ */ e.jsx(U, { value: "total", children: "Total" }),
            /* @__PURE__ */ e.jsx(U, { value: "change", children: "Change" })
          ] }) }),
          /* @__PURE__ */ e.jsx(ye, { value: "total", children: /* @__PURE__ */ e.jsx(
            pe,
            {
              className: l,
              color: y[a].color,
              data: v,
              dataFormatter: d,
              id: "paid-members",
              range: r
            }
          ) }),
          /* @__PURE__ */ e.jsxs(ye, { value: "change", children: [
            /* @__PURE__ */ e.jsx(Ve, { className: "mt-6 aspect-auto h-[200px] w-full md:h-[220px] xl:h-[260px]", config: Y, children: /* @__PURE__ */ e.jsxs(
              rs,
              {
                data: E,
                stackOffset: "sign",
                children: [
                  /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "tealGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                    /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "var(--color-new)", stopOpacity: 0.8 }),
                    /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "var(--color-new)", stopOpacity: 0.6 })
                  ] }) }),
                  /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "roseGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                    /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "var(--color-cancelled)", stopOpacity: 0.6 }),
                    /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "var(--color-cancelled)", stopOpacity: 0.8 })
                  ] }) }),
                  /* @__PURE__ */ e.jsx(Fe, { vertical: !1 }),
                  /* @__PURE__ */ e.jsx(
                    Ge,
                    {
                      axisLine: !1,
                      dataKey: "date",
                      tickFormatter: () => "",
                      tickLine: !1,
                      tickMargin: 10
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      axisLine: !1,
                      tickFormatter: (s) => s < 0 ? d(s * -1) : d(s),
                      tickLine: !1
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Ae,
                    {
                      content: /* @__PURE__ */ e.jsx(
                        $e,
                        {
                          className: "!min-w-[120px] px-3 py-2",
                          formatter: (s, n, i, h) => {
                            var F, L;
                            const c = Number(s);
                            let g = "0";
                            return c === 0 ? g = "0" : g = c < 0 ? d(c * -1) : d(c), /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-col", children: [
                              h === 0 && /* @__PURE__ */ e.jsx("div", { className: "mb-1 text-sm font-medium text-foreground", children: (F = i == null ? void 0 : i.payload) == null ? void 0 : F.date }),
                              /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center justify-between gap-4", children: [
                                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ e.jsx(
                                    "div",
                                    {
                                      className: "size-2 shrink-0 rounded-full bg-[var(--color-bg)] opacity-50",
                                      style: {
                                        "--color-bg": `var(--color-${n})`
                                      }
                                    }
                                  ),
                                  /* @__PURE__ */ e.jsx("span", { className: "text-sm text-muted-foreground", children: ((L = Y[n]) == null ? void 0 : L.label) || n })
                                ] }),
                                /* @__PURE__ */ e.jsx("div", { className: "ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground", children: g })
                              ] })
                            ] });
                          },
                          hideLabel: !0
                        }
                      ),
                      cursor: !1,
                      isAnimationActive: !1,
                      position: { y: 10 }
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    je,
                    {
                      activeBar: { fillOpacity: 1 },
                      dataKey: "new",
                      fill: "url(#tealGradient)",
                      fillOpacity: 0.75,
                      maxBarSize: 32,
                      minPointSize: 3,
                      radius: [4, 4, 0, 0],
                      stackId: "a"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    je,
                    {
                      activeBar: { fillOpacity: 1 },
                      dataKey: "cancelled",
                      fill: "url(#roseGradient)",
                      fillOpacity: 0.75,
                      maxBarSize: 32,
                      radius: [4, 4, 0, 0],
                      stackId: "a"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-6 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: "size-2 rounded-full opacity-50",
                    style: {
                      backgroundColor: Y.new.color
                    }
                  }
                ),
                "New"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: "size-2 rounded-full opacity-50",
                    style: {
                      backgroundColor: Y.cancelled.color
                    }
                  }
                ),
                "Cancelled"
              ] })
            ] })
          ] })
        ]
      }
    ) : /* @__PURE__ */ e.jsx(
      pe,
      {
        className: l,
        color: y[a].color,
        data: v,
        dataFormatter: a === "mrr" ? (s) => `${j}${d(s)}` : d,
        id: "mrr",
        range: r
      }
    ) })
  ] });
}, gs = Me({
  dataType: "TopSourcesGrowthResponseType",
  path: "/stats/top-sources-growth"
}), vs = (o, p = "signups desc", T = 50) => {
  const { audience: u } = le(), { startDate: j, endDate: f, timezone: a } = ue(o), x = {
    date_from: te(j),
    date_to: te(f),
    member_status: ps(u),
    order: p,
    limit: T.toString()
  };
  return a && (x.timezone = a), gs({ searchParams: x });
}, Ne = ({ data: o, currencySymbol: p, limit: T, defaultSourceIconUrl: u }) => {
  const j = T ? o.slice(0, T) : o, { appSettings: f } = ie();
  return /* @__PURE__ */ e.jsx(q, { children: j.map((a) => /* @__PURE__ */ e.jsxs(S, { className: "last:border-none", children: [
    /* @__PURE__ */ e.jsx(N, { className: "font-medium", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(
        us,
        {
          defaultSourceIconUrl: u,
          displayName: a.displayName,
          iconSrc: a.iconSrc
        }
      ),
      a.linkUrl ? /* @__PURE__ */ e.jsx(
        "a",
        {
          className: "hover:underline",
          href: a.linkUrl,
          rel: "noreferrer",
          target: "_blank",
          children: a.displayName
        }
      ) : /* @__PURE__ */ e.jsx("span", { children: a.displayName })
    ] }) }),
    /* @__PURE__ */ e.jsxs(N, { className: "text-right font-mono text-sm", children: [
      "+",
      d(a.free_members)
    ] }),
    (f == null ? void 0 : f.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(N, { className: "text-right font-mono text-sm", children: [
        "+",
        d(a.paid_members)
      ] }),
      /* @__PURE__ */ e.jsxs(N, { className: "text-right font-mono text-sm", children: [
        "+",
        p,
        d(K(a.mrr))
      ] })
    ] })
  ] }, a.source)) });
}, ys = ({
  range: o,
  limit: p = 20,
  showViewAll: T = !1,
  sortBy: u,
  setSortBy: j
}) => {
  const { data: f } = le(), { data: a } = Le(), { appSettings: x } = ie(), [m, z] = X("free_members desc"), r = u || m, b = j || z, H = r.replace("free_members", "signups").replace("paid_members", "paid_conversions"), { data: M, isLoading: w } = vs(o, H, p), P = f == null ? void 0 : f.url, O = "https://www.google.com/s2/favicons?domain=ghost.org&sz=64", V = be.useMemo(() => {
    var _;
    if (a != null && a.stats && ((_ = a == null ? void 0 : a.meta) != null && _.totals)) {
      const v = a.meta.totals;
      let y = v[0];
      if (!y)
        return oe("usd");
      for (const E of v)
        E.mrr > y.mrr && (y = E);
      return oe(y.currency);
    }
    return oe("usd");
  }, [a]), B = be.useMemo(() => M != null && M.stats ? M.stats.map((_) => {
    const v = _.source || "Direct", { domain: y } = ns(v, P), E = y ? `https://www.faviconextractor.com/favicon/${y}?larger=true` : O, Y = y && v !== "Direct" ? `https://${y}` : void 0;
    return {
      source: v,
      free_members: _.signups,
      // Backend returns 'signups', we map to 'free_members' for display
      paid_members: _.paid_conversions,
      // Backend returns 'paid_conversions', we map to 'paid_members' for display
      mrr: _.mrr,
      iconSrc: E,
      displayName: v,
      linkUrl: Y
    };
  }) : [], [M, P]), C = "Top sources", t = `Where did your growth come from ${ne(o)}`;
  return x != null && x.analytics.membersTrackSources ? w ? /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsx(S, { className: "last:border-none", children: /* @__PURE__ */ e.jsx(N, { className: "border-none py-2", colSpan: 1, children: /* @__PURE__ */ e.jsx(_e, { containerClassName: "space-y-2", count: 5, maxWidth: 75, randomize: !0 }) }) }) }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    B.length > 0 ? /* @__PURE__ */ e.jsx(
      Ne,
      {
        currencySymbol: V,
        data: B,
        defaultSourceIconUrl: O,
        limit: p
      }
    ) : /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsx(S, { className: "last:border-none", children: /* @__PURE__ */ e.jsx(N, { className: "border-none py-12 group-hover:!bg-transparent", colSpan: x != null && x.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ e.jsx(
      he,
      {
        description: "Try adjusting your date range to see more data.",
        title: `No conversions ${ne(o)}`,
        children: /* @__PURE__ */ e.jsx(Ie, { strokeWidth: 1.5 })
      }
    ) }) }) }),
    T && B.length > p && /* @__PURE__ */ e.jsx(ts, { className: "border-none bg-transparent hover:!bg-transparent", children: /* @__PURE__ */ e.jsx(S, { children: /* @__PURE__ */ e.jsx(N, { className: "border-none bg-transparent px-0 pb-0 hover:!bg-transparent", colSpan: 4, children: /* @__PURE__ */ e.jsxs(ls, { children: [
      /* @__PURE__ */ e.jsx(is, { asChild: !0, children: /* @__PURE__ */ e.jsxs(xe, { variant: "outline", children: [
        "View all ",
        /* @__PURE__ */ e.jsx(Ke, {})
      ] }) }),
      /* @__PURE__ */ e.jsxs(os, { className: "overflow-y-auto pt-0 sm:max-w-[600px]", children: [
        /* @__PURE__ */ e.jsxs(cs, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: [
          /* @__PURE__ */ e.jsx(ds, { children: C }),
          /* @__PURE__ */ e.jsx(ms, { children: t })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "group/datalist", children: /* @__PURE__ */ e.jsxs(we, { children: [
          /* @__PURE__ */ e.jsx(Ce, { children: /* @__PURE__ */ e.jsxs(S, { children: [
            /* @__PURE__ */ e.jsx(A, { children: "Source" }),
            /* @__PURE__ */ e.jsx(A, { className: "w-[110px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: r, setSortBy: b, sortBy: "free_members desc", children: "Free members" }) }),
            (x == null ? void 0 : x.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(A, { className: "w-[110px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: r, setSortBy: b, sortBy: "paid_members desc", children: "Paid members" }) }),
              /* @__PURE__ */ e.jsx(A, { className: "w-[110px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: r, setSortBy: b, sortBy: "mrr desc", children: "MRR impact" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx(
            Ne,
            {
              currencySymbol: V,
              data: B,
              defaultSourceIconUrl: O
            }
          )
        ] }) })
      ] })
    ] }) }) }) })
  ] }) : /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsx(S, { className: "last:border-none", children: /* @__PURE__ */ e.jsx(N, { className: "border-none py-12 group-hover:!bg-transparent", colSpan: x != null && x.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ e.jsx(ke, {}) }) }) });
}, Ns = (o, p, T) => {
  const u = o ?? 30, j = p ?? "mrr desc", { startDate: f, endDate: a } = J(() => ue(u), [u]), x = J(() => {
    const r = {
      date_from: te(f),
      date_to: te(a),
      order: j
    };
    return T === "posts" ? r.post_type = "post" : T === "pages" && (r.post_type = "page"), r;
  }, [f, a, j, T]), m = Object.fromEntries(
    Object.entries(x).filter(([, r]) => r !== void 0)
  );
  return Ue({ searchParams: m });
}, Ms = () => {
  const { range: o, site: p } = le(), T = me(), [u, j] = X("free_members desc"), [f, a] = X(I.POSTS_AND_PAGES), [x] = Te(), { appSettings: m } = ie(), z = x.get("tab") || "total-members", { isLoading: r, chartData: b, totals: H, currencySymbol: M, subscriptionData: w } = fs(o), { data: P, isLoading: O } = Ns(
    o,
    u,
    f
  ), V = J(() => {
    const _ = ((P == null ? void 0 : P.stats) || []).reduce((l, s) => {
      const n = s.post_id || (s.title && s.title.trim() !== "" ? s.title : s.attribution_url);
      if (!n)
        return l;
      if (!l.has(n))
        l.set(n, s);
      else {
        const i = l.get(n);
        i.free_members += s.free_members, i.paid_members += s.paid_members, i.mrr += s.mrr, l.set(n, i);
      }
      return l;
    }, /* @__PURE__ */ new Map()), v = Array.from(_.values()), y = v.reduce((l, s) => l + s.free_members, 0), E = v.reduce((l, s) => l + s.paid_members, 0), Y = v.reduce((l, s) => l + s.mrr, 0);
    return v.map((l) => {
      let s = 0;
      return u.includes("free_members") && y > 0 ? s = l.free_members / y : u.includes("paid_members") && E > 0 ? s = l.paid_members / E : u.includes("mrr") && Y > 0 && (s = l.mrr / Y), {
        title: l.title || l.attribution_url,
        post_id: l.post_id,
        attribution_url: l.attribution_url,
        attribution_type: l.attribution_type,
        attribution_id: l.attribution_id,
        free_members: l.free_members,
        paid_members: l.paid_members,
        mrr: l.mrr,
        percentage: s,
        published_at: l.published_at,
        url_exists: l.url_exists ?? !0
      };
    });
  }, [P, u]), B = r, C = r || O;
  return /* @__PURE__ */ e.jsxs(We, { children: [
    /* @__PURE__ */ e.jsx(He, { children: /* @__PURE__ */ e.jsx(Qe, { children: /* @__PURE__ */ e.jsx(qe, {}) }) }),
    /* @__PURE__ */ e.jsxs(Xe, { data: B ? void 0 : b, isLoading: !1, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: [
      /* @__PURE__ */ e.jsx(ge, { "data-testid": "total-members-card", children: /* @__PURE__ */ e.jsx(ve, { children: /* @__PURE__ */ e.jsx(
        js,
        {
          chartData: b,
          currencySymbol: M,
          initialTab: z,
          isLoading: B,
          subscriptionData: w,
          totals: H
        }
      ) }) }),
      /* @__PURE__ */ e.jsxs(ge, { className: "w-full overflow-x-auto", "data-testid": "top-content-card", children: [
        /* @__PURE__ */ e.jsxs(Je, { children: [
          /* @__PURE__ */ e.jsx(Ze, { children: hs(f) }),
          /* @__PURE__ */ e.jsx(es, { children: xs(f, o, ne) })
        ] }),
        /* @__PURE__ */ e.jsx(ve, { children: /* @__PURE__ */ e.jsxs(we, { children: [
          /* @__PURE__ */ e.jsx(Ce, { children: /* @__PURE__ */ e.jsxs(S, { className: "[&>th]:h-auto [&>th]:pb-2 [&>th]:pt-0", children: [
            /* @__PURE__ */ e.jsx(A, { className: "min-w-[320px] pl-0", children: /* @__PURE__ */ e.jsx(ce, { defaultValue: f, variant: "button-sm", onValueChange: (t) => {
              a(t);
            }, children: /* @__PURE__ */ e.jsxs(de, { children: [
              /* @__PURE__ */ e.jsx(U, { value: I.POSTS_AND_PAGES, children: "Posts & pages" }),
              /* @__PURE__ */ e.jsx(U, { value: I.POSTS, children: "Posts" }),
              /* @__PURE__ */ e.jsx(U, { value: I.PAGES, children: "Pages" }),
              /* @__PURE__ */ e.jsx(U, { value: I.SOURCES, children: "Sources" })
            ] }) }) }),
            /* @__PURE__ */ e.jsx(A, { className: "w-[140px] text-right", children: m != null && m.paidMembersEnabled ? /* @__PURE__ */ e.jsx(W, { activeSortBy: u, setSortBy: j, sortBy: "free_members desc", children: "Free members" }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: "Free members" }) }),
            (m == null ? void 0 : m.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(A, { className: "w-[140px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: u, setSortBy: j, sortBy: "paid_members desc", children: "Paid members" }) }),
              /* @__PURE__ */ e.jsx(A, { className: "w-[140px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: u, setSortBy: j, sortBy: "mrr desc", children: "MRR impact" }) })
            ] })
          ] }) }),
          f === I.SOURCES ? /* @__PURE__ */ e.jsx(
            ys,
            {
              limit: 20,
              range: o,
              setSortBy: (t) => j(t),
              showViewAll: !0,
              sortBy: u
            }
          ) : /* @__PURE__ */ e.jsx(q, { children: C ? /* @__PURE__ */ e.jsx(S, { className: "last:border-none", children: /* @__PURE__ */ e.jsx(N, { className: "border-none py-2", colSpan: 1, children: /* @__PURE__ */ e.jsx(_e, { containerClassName: "space-y-2", count: 5, maxWidth: 75, randomize: !0 }) }) }) : m != null && m.analytics.membersTrackSources ? V.length > 0 ? V.map((t, _) => /* @__PURE__ */ e.jsxs(S, { className: "last:border-none", children: [
            /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsxs("div", { className: "group/link inline-flex flex-col items-start gap-px", children: [
              t.post_id && t.attribution_type === "post" ? /* @__PURE__ */ e.jsx(
                xe,
                {
                  className: "h-auto whitespace-normal p-0 text-left font-medium leading-tight hover:!underline",
                  title: "View post analytics",
                  variant: "link",
                  onClick: bs(t.attribution_url, t.post_id, p.url || "", T, t.attribution_type),
                  children: t.title
                }
              ) : /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: t.title }),
              t.published_at && fe && new Date(t.published_at).getTime() > 0 && /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
                "Published on ",
                fe(t.published_at)
              ] })
            ] }) }),
            /* @__PURE__ */ e.jsxs(N, { className: "text-right font-mono text-sm", children: [
              t.free_members > 0 && "+",
              d(t.free_members)
            ] }),
            (m == null ? void 0 : m.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsxs(N, { className: "text-right font-mono text-sm", children: [
                t.paid_members > 0 && "+",
                d(t.paid_members)
              ] }),
              /* @__PURE__ */ e.jsxs(N, { className: "text-right font-mono text-sm", children: [
                t.mrr > 0 && "+",
                M,
                d(K(t.mrr))
              ] })
            ] })
          ] }, `${f}-${t.post_id || `${t.title}-${_}`}`)) : /* @__PURE__ */ e.jsx(S, { className: "border-none", children: /* @__PURE__ */ e.jsx(N, { className: "py-12 group-hover:!bg-transparent", colSpan: m != null && m.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ e.jsx(
            he,
            {
              description: "Try adjusting your date range to see more data.",
              title: `No conversions ${ne(o)}`,
              children: /* @__PURE__ */ e.jsx(ss, { strokeWidth: 1.5 })
            }
          ) }) }) : /* @__PURE__ */ e.jsx(S, { className: "last:border-none", children: /* @__PURE__ */ e.jsx(N, { className: "border-none py-12 group-hover:!bg-transparent", colSpan: m != null && m.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ e.jsx(ke, {}) }) }) })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  Ms as default
};
//# sourceMappingURL=index-BBCJ2EZo.mjs.map
