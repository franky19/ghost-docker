import { u as q, b as J, a as re, O as ne, d as Y, n as x, g as T, t as le, j as e, h as w, X as fe, e as ie, Y as ge, o as Z, p as I, P as be, R as ee } from "./index-DbGvSTMe.mjs";
import { aO as je, j as ae, au as ve, av as ke, aw as Ne, ax as U, k as we, aQ as _e, aR as ye, aS as Ce, aT as Te, aU as Se, b4 as Re, aW as Le, E as oe, m as se, b0 as ce, b5 as De, b6 as Me, b7 as Pe, b8 as Oe, b9 as Be, ba as Ee, bb as Ae, bc as Ve, bd as We, be as $e, bf as ze, y as He, z as Ke, N as Fe, D as Ge, A as Ie, a as de, e as ue, b as Ye, c as Qe, d as Ue, q as Xe, B as qe } from "./stats-CJ7fhUyT.mjs";
import { T as Je, a as Ze, K as X, c as O, d as es } from "./tabs-CkbxYgOE.mjs";
import { B as ss, d as ts, T as as, e as rs, a as G, f as W, S as F, b as M } from "./sort-button-D76rcldr.mjs";
const ns = ({ active: a, payload: s }) => {
  if (!a || !(s != null && s.length))
    return null;
  const r = s[0].payload, l = r.send_date;
  return /* @__PURE__ */ e.jsxs("div", { className: "min-w-[220px] max-w-[240px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-2 flex w-full flex-col border-b pb-2", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-sm font-semibold leading-tight", children: r.post_title }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "Sent on ",
        ie(l)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Sent" }),
      /* @__PURE__ */ e.jsx("div", { className: "ml-2 w-full text-right font-mono", children: T(r.sent_to) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Opens" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          T(r.total_opens),
          " / "
        ] }),
        w(r.open_rate)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Clicks" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          T(r.total_clicks),
          " / "
        ] }),
        w(r.click_rate)
      ] })
    ] })
  ] });
}, ls = ({
  subscribersData: a,
  avgsData: s,
  totals: r,
  isLoading: l,
  isAvgsLoading: t,
  initialTab: n = "total-subscribers"
}) => {
  const [i, g] = q(n), [d, b] = q(!1), { range: c } = J(), _ = re(), [y] = ne(), { appSettings: v } = Y(), { emailTrackClicks: p, emailTrackOpens: o } = (v == null ? void 0 : v.analytics) || {}, { totalSubscribers: $, avgOpenRate: L, avgClickRate: m } = r, k = x(() => {
    if (!a || a.length === 0)
      return [];
    let u = [];
    return u = je(a, c, "value", "exact"), u.map((R) => ({
      ...R,
      formattedValue: T(R.value),
      label: "Total Subscribers"
    }));
  }, [a, c]), S = x(() => {
    var H, V;
    if (!k || k.length <= 1)
      return {
        direction: "same",
        value: "0%"
      };
    const u = ((H = k[0]) == null ? void 0 : H.value) ?? 0, N = ((V = k[k.length - 1]) == null ? void 0 : V.value) ?? 0;
    let R = "same";
    N > u ? R = "up" : N < u && (R = "down");
    let A;
    if (u === 0)
      A = N === 0 ? "0%" : "+100%";
    else {
      const D = (N - u) / u * 100, K = Math.round(D * 10) / 10;
      A = `${D >= 0 ? "+" : ""}${K}%`;
    }
    return { direction: R, value: A };
  }, [k]);
  le(() => {
    g(n);
  }, [n]);
  const j = (u) => {
    g(u);
    const N = new URLSearchParams(y);
    N.set("tab", u), _(`?${N.toString()}`, { replace: !0 });
  }, C = {
    open_rate: {
      label: "Open rate"
    }
  }, h = x(() => ({
    "total-subscribers": {
      color: "hsl(var(--chart-darkblue))",
      datakey: "value"
    },
    "avg-open-rate": {
      color: "hsl(var(--chart-blue))",
      datakey: "open_rate"
    },
    "avg-click-rate": {
      color: "hsl(var(--chart-teal))",
      datakey: "click_rate"
    }
  }), []), { barDomain: f, barTicks: z } = x(() => {
    var te;
    if (!s || s.length === 0 || i === "total-subscribers")
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const u = (te = h[i]) == null ? void 0 : te.datakey;
    if (!u)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const N = s.map((Q) => Q[u]).filter((Q) => typeof Q == "number");
    if (N.length === 0)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const R = Math.min(...N), A = Math.max(...N), H = Math.floor(R * 10) / 10, V = Math.ceil(A * 10) / 10, D = Math.max(0, H), K = V === D ? D + 0.1 : V;
    return {
      barDomain: [D, K],
      barTicks: [D, K]
    };
  }, [s, i, h]);
  if (l)
    return /* @__PURE__ */ e.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ e.jsx(ae, {}) });
  let B = "grid-cols-3";
  (!p || !o) && (B = "grid-cols-2"), !p && !o && (B = "grid-cols-1");
  const E = i === "avg-open-rate" && L > f[0] && L < f[1] || i === "avg-click-rate" && m > f[0] && m < f[1], P = i === "avg-open-rate" ? L : m;
  return /* @__PURE__ */ e.jsxs(Je, { defaultValue: n, variant: "kpis", children: [
    /* @__PURE__ */ e.jsxs(Ze, { className: `-mx-6 hidden grid-cols-3 md:!visible md:!grid ${B}`, children: [
      /* @__PURE__ */ e.jsx(X, { className: `${!o && !p && "cursor-auto after:hidden"}`, value: "total-subscribers", onClick: () => {
        j("total-subscribers");
      }, children: /* @__PURE__ */ e.jsx(
        O,
        {
          color: h["total-subscribers"].color,
          "data-testid": "total-subscribers-value",
          diffDirection: S.direction,
          diffValue: S.value,
          label: "Total subscribers",
          value: T($)
        }
      ) }),
      o && /* @__PURE__ */ e.jsx(X, { value: "avg-open-rate", onClick: () => {
        j("avg-open-rate");
      }, children: /* @__PURE__ */ e.jsx(
        O,
        {
          className: t ? "opacity-50" : "",
          color: h["avg-open-rate"].color,
          label: "Avg. open rate",
          value: w(L)
        }
      ) }),
      p && /* @__PURE__ */ e.jsx(X, { value: "avg-click-rate", onClick: () => {
        j("avg-click-rate");
      }, children: /* @__PURE__ */ e.jsx(
        O,
        {
          className: t ? "opacity-50" : "",
          color: h["avg-click-rate"].color,
          label: "Avg. click rate",
          value: w(m)
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs(ve, { children: [
      /* @__PURE__ */ e.jsx(ke, { className: "md:hidden", asChild: !0, children: /* @__PURE__ */ e.jsxs(es, { children: [
        i === "total-subscribers" && /* @__PURE__ */ e.jsx(
          O,
          {
            color: h["total-subscribers"].color,
            label: "Total subscribers",
            value: T($)
          }
        ),
        i === "avg-open-rate" && o && /* @__PURE__ */ e.jsx(
          O,
          {
            className: t ? "opacity-50" : "",
            color: h["avg-open-rate"].color,
            label: "Avg. open rate",
            value: w(L)
          }
        ),
        i === "avg-click-rate" && p && /* @__PURE__ */ e.jsx(
          O,
          {
            className: t ? "opacity-50" : "",
            color: h["avg-click-rate"].color,
            label: "Avg. click rate",
            value: w(m)
          }
        )
      ] }) }),
      /* @__PURE__ */ e.jsxs(Ne, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ e.jsx(U, { onClick: () => j("total-subscribers"), children: "Total subscribers" }),
        o && /* @__PURE__ */ e.jsx(U, { onClick: () => j("avg-open-rate"), children: "Avg. open rate" }),
        p && /* @__PURE__ */ e.jsx(U, { onClick: () => j("avg-click-rate"), children: "Avg. click rate" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: [
      i === "total-subscribers" && /* @__PURE__ */ e.jsx(
        we,
        {
          className: "-mb-3 h-[16vw] max-h-[320px] min-h-[180px] w-full",
          color: h["total-subscribers"].color,
          data: k,
          id: "mrr",
          range: c
        }
      ),
      (i === "avg-open-rate" && o || i === "avg-click-rate" && p) && /* @__PURE__ */ e.jsx(e.Fragment, { children: t ? /* @__PURE__ */ e.jsx("div", { className: "h-[320px] w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, {}) }) : s && s.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(_e, { className: "aspect-auto h-[200px] w-full md:h-[220px] xl:h-[320px]", config: C, children: /* @__PURE__ */ e.jsxs(
          ss,
          {
            className: d ? "!cursor-pointer" : "",
            data: s,
            margin: {
              top: 20
            },
            onClick: (u) => {
              u.activePayload && u.activePayload[0].payload.post_id && _(`/posts/analytics/${u.activePayload[0].payload.post_id}`, { crossApp: !0 });
            },
            onMouseLeave: () => b(!1),
            onMouseMove: (u) => {
              b(!!(u.activePayload && u.activePayload[0].payload.post_id));
            },
            children: [
              /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "barGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: h[i].color, stopOpacity: 0.8 }),
                /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: h[i].color, stopOpacity: 0.6 })
              ] }) }),
              /* @__PURE__ */ e.jsx(ye, { horizontal: !0, stroke: "hsl(var(--border))", vertical: !1 }),
              /* @__PURE__ */ e.jsx(
                Ce,
                {
                  axisLine: { stroke: "hsl(var(--border))", strokeWidth: 1 },
                  dataKey: "post_id",
                  interval: 0,
                  stroke: "hsl(var(--border))",
                  tickFormatter: () => "",
                  tickLine: !1,
                  tickMargin: 10
                }
              ),
              /* @__PURE__ */ e.jsx(
                Te,
                {
                  axisLine: !1,
                  domain: f,
                  tickFormatter: (u) => w(u),
                  tickLine: !1,
                  ticks: z,
                  width: fe(z, (u) => w(u))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Se,
                {
                  content: /* @__PURE__ */ e.jsx(ns, {}),
                  cursor: !1,
                  isAnimationActive: !1,
                  position: { y: 10 }
                }
              ),
              E && /* @__PURE__ */ e.jsx(Re, { label: { value: `${w(P)}`, position: "left", offset: 8, fill: "hsl(var(--muted-foreground))" }, opacity: 0.5, stroke: "hsl(var(--muted-foreground))", strokeDasharray: "4 4", y: P }),
              /* @__PURE__ */ e.jsx(
                Le,
                {
                  activeBar: { fillOpacity: 1 },
                  dataKey: h[i].datakey,
                  fill: "url(#barGradient)",
                  fillOpacity: 0.6,
                  isAnimationActive: !1,
                  maxBarSize: 32,
                  minPointSize: 3,
                  radius: 4
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { className: "-mt-4 text-center text-sm text-muted-foreground", children: [
          "Newsletters ",
          i === "avg-open-rate" ? "opens" : "clicks",
          " in this period"
        ] })
      ] }) : /* @__PURE__ */ e.jsx(
        oe,
        {
          className: "size-full py-20",
          title: `No newsletters ${se(c)}`,
          children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
        }
      ) })
    ] })
  ] });
}, is = ({ newsletters: a }) => {
  const { selectedNewsletterId: s, setSelectedNewsletterId: r } = J(), l = x(() => (a == null ? void 0 : a.filter((t) => t.status === "active")) || [], [a]);
  return le(() => {
    if (l.length > 0 && !s) {
      const t = l.find((n) => n.sort_order === 0);
      r(t ? t.id : l[0].id);
    }
  }, [l, s, r]), l.length <= 1 ? null : /* @__PURE__ */ e.jsxs(
    De,
    {
      value: s || "",
      onValueChange: (t) => {
        r(t);
      },
      children: [
        /* @__PURE__ */ e.jsxs(Me, { className: "w-auto", children: [
          /* @__PURE__ */ e.jsx(Pe, { className: "mr-2", size: 16, strokeWidth: 1.5 }),
          /* @__PURE__ */ e.jsx(Oe, { placeholder: "Select a newsletter" })
        ] }),
        /* @__PURE__ */ e.jsx(Be, { align: "end", children: /* @__PURE__ */ e.jsxs(Ee, { children: [
          /* @__PURE__ */ e.jsx(Ae, { children: "Newsletters" }),
          l.map((t) => /* @__PURE__ */ e.jsx(Ve, { value: t.id, children: t.name }, t.id))
        ] }) })
      ]
    }
  );
}, os = "NewslettersResponseType", cs = ge({
  dataType: os,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (a, s) => {
    var r;
    return {
      ...s,
      page: (((r = a.meta) == null ? void 0 : r.pagination.next) || 1).toString()
    };
  },
  returnData: (a) => {
    const { pages: s } = a, r = s.flatMap((t) => t.newsletters), l = s[s.length - 1].meta;
    return {
      newsletters: r,
      meta: l,
      isEnd: l ? l.pagination.pages === l.pagination.page : !0
    };
  }
}), ds = (a, s, r = !0) => {
  const l = a ?? 30, { startDate: t, endDate: n } = x(() => Z(l), [l]), i = x(() => {
    const d = {
      date_from: I(t),
      date_to: I(n)
    };
    return s && (d.newsletter_id = s), d;
  }, [t, n, s]), g = We({ searchParams: i, enabled: r });
  return r ? g : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: g.refetch
  };
}, us = (a, s, r, l = !0) => {
  const t = a ?? 30, n = s ?? "date desc", { startDate: i, endDate: g } = x(() => Z(t), [t]), d = x(() => {
    const c = {
      date_from: I(i),
      date_to: I(g),
      order: n
    };
    return r && (c.newsletter_id = r), c;
  }, [i, g, n, r]), b = $e({ searchParams: d, enabled: l });
  return l ? b : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: b.refetch
  };
}, ms = (a, s = [], r = !0) => {
  const l = x(() => {
    const n = {};
    return a && (n.newsletter_id = a), s.length > 0 && (n.post_ids = s.join(",")), n;
  }, [a, s]), t = ze({ searchParams: l, enabled: r });
  return r ? t : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: t.refetch
  };
}, me = (a, s, r, l = !0) => {
  const t = us(a, s, r, l), n = x(() => {
    var d;
    return (d = t.data) != null && d.stats ? t.data.stats.map((b) => b.post_id) : [];
  }, [t.data]), i = ms(
    r,
    n,
    l && n.length > 0
  );
  return {
    data: x(() => {
      var y, v;
      if (!((y = t.data) != null && y.stats))
        return;
      const d = t.data.stats, b = ((v = i.data) == null ? void 0 : v.stats) || [], c = /* @__PURE__ */ new Map();
      b.forEach((p) => {
        c.set(p.post_id, p);
      });
      const _ = d.map((p) => {
        const o = c.get(p.post_id);
        return {
          ...p,
          total_clicks: (o == null ? void 0 : o.total_clicks) || 0,
          click_rate: (o == null ? void 0 : o.click_rate) || 0
        };
      });
      return {
        ...t.data,
        stats: _
      };
    }, [t.data, i.data]),
    isLoading: t.isLoading,
    isClicksLoading: i.isLoading,
    error: t.error || i.error,
    isError: t.isError || i.isError,
    refetch: () => {
      t.refetch(), i.refetch();
    }
  };
}, he = ee.memo(({ range: a, selectedNewsletterId: s, shouldFetchStats: r, sortBy: l }) => {
  const t = re(), { data: n, isLoading: i, isClicksLoading: g } = me(
    a,
    l,
    // Reactive to sort changes, but only affects this component
    s || void 0,
    !!r
  ), { appSettings: d } = Y(), { emailTrackClicks: b, emailTrackOpens: c } = (d == null ? void 0 : d.analytics) || {}, _ = x(() => (n == null ? void 0 : n.stats) || [], [n]), y = c && b ? 5 : c || b ? 4 : 3, v = x(() => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(G, { className: "last:border-none [&>td]:py-2.5", children: /* @__PURE__ */ e.jsx(M, { className: "font-medium", colSpan: y, children: /* @__PURE__ */ e.jsx(Xe, { className: "mt-5" }) }) }) }), [y]), p = x(() => _.length > 0 ? /* @__PURE__ */ e.jsx(e.Fragment, { children: _.map((o) => /* @__PURE__ */ e.jsxs(G, { className: "last:border-none [&>td]:py-2.5", children: [
    /* @__PURE__ */ e.jsx(M, { className: "font-medium", children: /* @__PURE__ */ e.jsx("div", { className: "group/link inline-flex items-center gap-2", children: o.post_id ? /* @__PURE__ */ e.jsx(qe, { className: "h-auto whitespace-normal p-0 text-left hover:!underline", title: "View post analytics", variant: "link", onClick: () => {
      t(`/posts/analytics/${o.post_id}/`, { crossApp: !0 });
    }, children: o.post_title }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: o.post_title }) }) }),
    /* @__PURE__ */ e.jsx(M, { className: "whitespace-nowrap text-sm", children: ie(o.send_date) }),
    /* @__PURE__ */ e.jsx(M, { className: "text-right font-mono text-sm", children: T(o.sent_to) }),
    c && /* @__PURE__ */ e.jsxs(M, { className: "text-right font-mono text-sm", children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: w(o.open_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:!visible group-hover:!block", children: T(o.total_opens) })
    ] }),
    b && /* @__PURE__ */ e.jsx(M, { className: "text-right font-mono text-sm", children: g ? /* @__PURE__ */ e.jsx("span", { className: "inline-block h-4 w-8 animate-pulse rounded bg-gray-200" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: w(o.click_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:!visible group-hover:!block", children: T(o.total_clicks) })
    ] }) })
  ] }, o.post_id)) }) : /* @__PURE__ */ e.jsx(G, { className: "border-none hover:bg-transparent", children: /* @__PURE__ */ e.jsx(M, { className: "text-center group-hover:!bg-transparent", colSpan: 5, children: /* @__PURE__ */ e.jsx(
    oe,
    {
      className: "size-full py-20",
      title: `No newsletters ${se(a)}`,
      children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
    }
  ) }) }), [_, g, t, b, c, a]);
  return i || !n ? v : p;
});
he.displayName = "NewsletterTableRows";
const xe = ee.memo(({ sortBy: a, setSortBy: s, range: r }) => {
  const l = x(() => /* @__PURE__ */ e.jsxs(Ye, { children: [
    /* @__PURE__ */ e.jsx(Qe, { children: "Top newsletters" }),
    /* @__PURE__ */ e.jsxs(Ue, { children: [
      " Your best performing newsletters ",
      se(r)
    ] })
  ] }), [r]), { appSettings: t } = Y(), { emailTrackClicks: n, emailTrackOpens: i } = (t == null ? void 0 : t.analytics) || {};
  return /* @__PURE__ */ e.jsx(rs, { children: /* @__PURE__ */ e.jsxs(G, { children: [
    /* @__PURE__ */ e.jsx(W, { className: "min-w-[320px]", variant: "cardhead", children: l }),
    /* @__PURE__ */ e.jsx(W, { className: "w-[65px]", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "date desc", children: "Date" }) }),
    /* @__PURE__ */ e.jsx(W, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "sent_to desc", children: "Sent" }) }),
    i && /* @__PURE__ */ e.jsx(W, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "open_rate desc", children: "Opens" }) }),
    n && /* @__PURE__ */ e.jsx(W, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "click_rate desc", children: "Clicks" }) })
  ] }) });
});
xe.displayName = "NewsletterTableHeader";
const pe = ee.memo(({ range: a, selectedNewsletterId: s, shouldFetchStats: r }) => {
  const [l, t] = q("open_rate desc");
  return /* @__PURE__ */ e.jsx(de, { className: "w-full max-w-[calc(100vw-64px)] overflow-x-auto sidebar:max-w-[calc(100vw-64px-280px)]", "data-testid": "top-newsletters-card", children: /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(ts, { children: [
    /* @__PURE__ */ e.jsx(xe, { range: a, setSortBy: t, sortBy: l }),
    /* @__PURE__ */ e.jsx(as, { children: /* @__PURE__ */ e.jsx(
      he,
      {
        range: a,
        selectedNewsletterId: s,
        shouldFetchStats: r,
        sortBy: l
      }
    ) })
  ] }) }) });
});
pe.displayName = "TopNewslettersTable";
const gs = () => {
  const { range: a, selectedNewsletterId: s } = J(), [r] = ne(), { appSettings: l } = Y(), t = r.get("tab") || "total-subscribers", { data: n, isLoading: i } = cs({
    searchParams: {
      limit: "50"
    }
  }), g = !i && n && n.newsletters.length > 0 && !!s, { data: d, isLoading: b } = ds(
    a,
    s || void 0,
    g || !1
  ), { data: c, isLoading: _, isClicksLoading: y } = me(
    a,
    "date asc",
    s || void 0,
    g || !1
  ), v = x(() => !(n != null && n.newsletters) || !s ? null : n.newsletters.find((m) => m.id === s) || null, [n, s]), p = x(() => {
    var j, C, h;
    const m = ((j = v == null ? void 0 : v.count) == null ? void 0 : j.active_members) || ((h = (C = d == null ? void 0 : d.stats) == null ? void 0 : C[0]) == null ? void 0 : h.total) || 0;
    let k = 0, S = 0;
    if (c != null && c.stats && c.stats.length > 0) {
      const f = c.stats, z = f.reduce((E, P) => E + (P.open_rate || 0), 0), B = f.reduce((E, P) => E + (P.click_rate || 0), 0);
      k = z / f.length, S = B / f.length;
    }
    return {
      totalSubscribers: m,
      avgOpenRate: k,
      avgClickRate: S
    };
  }, [v, d, c]), o = x(() => {
    var k, S;
    if (!((S = (k = d == null ? void 0 : d.stats) == null ? void 0 : k[0]) != null && S.values) || d.stats[0].values.length === 0) {
      const { startDate: j, endDate: C } = Z(a), h = [], f = new Date(j);
      for (; f <= C; )
        h.push({
          date: f.toISOString().split("T")[0],
          value: 0
        }), f.setDate(f.getDate() + 1);
      return h;
    }
    const m = d.stats[0].values;
    if (m.length === 1) {
      const j = m[0], C = /* @__PURE__ */ new Date(), h = a, f = new Date(C.getTime() - h * 24 * 60 * 60 * 1e3);
      return [
        {
          ...j,
          date: f.toISOString().split("T")[0]
          // Start of range
        },
        {
          ...j,
          date: C.toISOString().split("T")[0]
          // End of range (today)
        }
      ];
    }
    return m;
  }, [d, a]), $ = x(() => c != null && c.stats ? c.stats.map((m) => ({
    post_id: m.post_id,
    post_title: m.post_title,
    send_date: m.send_date,
    sent_to: m.sent_to,
    total_opens: m.total_opens,
    open_rate: m.open_rate,
    total_clicks: m.total_clicks || 0,
    click_rate: m.click_rate || 0
  })) : [], [c]), L = b || y || _;
  return l != null && l.newslettersEnabled ? /* @__PURE__ */ e.jsxs(He, { children: [
    /* @__PURE__ */ e.jsx(Ke, { children: /* @__PURE__ */ e.jsxs(Fe, { children: [
      /* @__PURE__ */ e.jsx(is, { newsletters: n == null ? void 0 : n.newsletters }),
      /* @__PURE__ */ e.jsx(Ge, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(Ie, { isLoading: !1, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(de, { "data-testid": "newsletters-card", children: /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsx(
        ls,
        {
          avgsData: $,
          initialTab: t,
          isAvgsLoading: !1,
          isLoading: L,
          subscribersData: o,
          totals: p
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(
        pe,
        {
          range: a,
          selectedNewsletterId: s,
          shouldFetchStats: !!g
        }
      )
    ] }) })
  ] }) : /* @__PURE__ */ e.jsx(be, { to: "/" });
};
export {
  gs as default
};
//# sourceMappingURL=index-BS3KMSy9.mjs.map
