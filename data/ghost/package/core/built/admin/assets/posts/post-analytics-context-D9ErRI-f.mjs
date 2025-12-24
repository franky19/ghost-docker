import { N as B, Q as R, c as U, u as h, j as x } from "./index-BR6l00Zc.mjs";
import { a as r } from "./hooks-DsxHNwJh.mjs";
import { u as Y } from "./posts-Cv1Rfk_z.mjs";
const G = "TinybirdTokenResponseType", Q = {
  refetchInterval: 120 * 60 * 1e3,
  // 2 hours — tokens expire after 3 hours
  refetchIntervalInBackground: !0,
  staleTime: 110 * 60 * 1e3
  // 110 minutes - shorter than refetch interval so automatic refresh works
}, j = r({
  dataType: G,
  path: "/tinybird/token/"
}), M = (t = {}) => j({
  ...Q,
  ...t
});
let L = !1;
const W = (t = {}) => {
  var n, s;
  const { enabled: e = !0 } = t, o = M({ enabled: e }), a = (s = (n = o.data) == null ? void 0 : n.tinybird) == null ? void 0 : s.token, i = o.error;
  return !o.isLoading && e && o.data && !a && !L && (console.warn("Tinybird analytics: No valid token received. Check your Tinybird configuration (workspaceId and adminToken must be non-empty strings)."), L = !0), {
    token: a && typeof a == "string" ? a : void 0,
    isLoading: o.isLoading,
    error: i,
    refetch: o.refetch
  };
}, $ = "ConfigResponseType", q = r({
  dataType: $,
  path: "/config/"
}), F = {
  TODAY: { name: "Today", value: 1 },
  LAST_7_DAYS: { name: "Last 7 days", value: 7 },
  LAST_30_DAYS: { name: "Last 30 days", value: 31 },
  LAST_3_MONTHS: { name: "Last 3 months", value: 91 },
  YEAR_TO_DATE: { name: "Year to date", value: 366 },
  LAST_12_MONTHS: { name: "Last 12 months", value: 12 * 31 },
  ALL_TIME: { name: "All time", value: 1e3 }
}, ot = {
  // Countries
  US: "United States",
  TWN: "Taiwan",
  TW: "Taiwan",
  CN: "China",
  // Technical
  "mobile-ios": "iOS",
  "mobile-android": "Android",
  macos: "macOS",
  // Sources
  "google.com": "Google",
  "ghost.org": "Ghost",
  "bing.com": "Bing",
  "bsky.app": "Bluesky",
  "yahoo.com": "Yahoo",
  "duckduckgo.com": "DuckDuckGo"
}, st = ["NULL", "ᴺᵁᴸᴸ", "", "Others", "Other"], l = {
  PUBLIC: 1,
  // 1
  FREE: 2,
  // 2
  PAID: 4
  // 4
}, nt = l.PUBLIC | l.FREE | l.PAID, H = "SettingsResponseType", z = r({
  dataType: H,
  path: "/settings/",
  defaultSearchParams: {
    group: "site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore"
  }
}), K = "SiteResponseType", V = r({
  dataType: K,
  path: "/site/"
}), _ = R(void 0), J = () => {
  const t = B(_);
  if (!t)
    throw new Error("useGlobalData must be used within a PostAnalyticsProvider");
  return t;
}, X = ({ children: t }) => {
  var p, y, m, f, b, S, A;
  const { postId: n } = U();
  if (!n)
    throw new Error("Post ID is required for PostAnalyticsProvider");
  const s = q(), e = V(), [o, a] = h(F.LAST_30_DAYS.value), i = z(), c = !!((y = (p = s.data) == null ? void 0 : p.config) != null && y.stats), d = W({ enabled: c }), [v, k] = h(7), { data: { posts: [P] } = { posts: [] }, isLoading: E } = Y({
    searchParams: {
      filter: `id:${n}`,
      include: "email,authors,tags,tiers,count.clicks,count.signups,count.paid_conversions,count.positive_feedback,count.negative_feedback,newsletter"
    }
  }), g = [s, e, i], I = g.map((u) => u.error).find(Boolean), w = c ? d.error : null, T = I || w, C = g.some((u) => u.isLoading), N = c ? d.isLoading : !1, D = C || N;
  if (T)
    throw T;
  const O = (m = e.data) != null && m.site ? {
    url: e.data.site.url,
    icon: e.data.site.icon,
    title: e.data.site.title
  } : void 0;
  return /* @__PURE__ */ x.jsx(_.Provider, { value: {
    data: (f = s.data) == null ? void 0 : f.config,
    site: O,
    statsConfig: (S = (b = s.data) == null ? void 0 : b.config) == null ? void 0 : S.stats,
    tinybirdToken: d.token,
    isLoading: D,
    range: o,
    setRange: a,
    audience: v,
    setAudience: k,
    settings: ((A = i.data) == null ? void 0 : A.settings) || [],
    postId: n,
    post: P,
    isPostLoading: E
  }, children: t });
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X,
  useGlobalData: J
}, Symbol.toStringTag, { value: "Module" }));
export {
  nt as A,
  F as S,
  st as U,
  l as a,
  ot as b,
  W as c,
  at as p,
  J as u
};
//# sourceMappingURL=post-analytics-context-D9ErRI-f.mjs.map
