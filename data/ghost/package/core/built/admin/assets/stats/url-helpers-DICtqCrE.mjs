import { f as p, j as o, S as k, c as m, E as A } from "./index-DbGvSTMe.mjs";
import { R as E, T as $, P as O, C as S, c as C, a as b, D, O as N } from "./audience-select-DNAWmT7R.mjs";
import { X as j, b0 as P } from "./stats-CJ7fhUyT.mjs";
const G = {
  Reddit: "reddit.com",
  "www.reddit.com": "reddit.com",
  Facebook: "facebook.com",
  Twitter: "twitter.com",
  Bluesky: "bsky.app",
  "go.bsky.app": "bsky.app",
  Instagram: "instagram.com",
  LinkedIn: "linkedin.com",
  Threads: "threads.net",
  "Brave Search": "search.brave.com",
  Ecosia: "ecosia.org",
  Gmail: "gmail.com",
  Outlook: "outlook.com",
  "Yahoo!": "yahoo.com",
  "AOL Mail": "aol.com",
  Flipboard: "flipboard.com",
  Substack: "substack.com",
  Ghost: "ghost.org",
  "Ghost Explore": "ghost.org",
  Buffer: "buffer.com",
  Taboola: "taboola.com",
  AppNexus: "appnexus.com",
  Wikipedia: "wikipedia.org",
  Mastodon: "mastodon.social",
  Memeorandum: "memeorandum.com",
  "Ground News": "ground.news",
  "Apple News": "apple.com",
  SmartNews: "smartnews.com",
  "Hacker News": "news.ycombinator.com",
  // Search engines
  Google: "google.com",
  "Google News": "news.google.com",
  Bing: "bing.com",
  DuckDuckGo: "duckduckgo.com",
  // Email/Newsletter
  "newsletter-email": "static.ghost.org",
  newsletter: "static.ghost.org"
}, g = (t) => {
  try {
    return new URL(t.startsWith("http") ? t : `https://${t}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function K({
  processedData: t,
  totalVisitors: e,
  mode: s
}) {
  return t.map((a) => ({
    ...a,
    percentage: e > 0 ? a.visits / e : 0
  }));
}
const w = (t, e) => t === e ? !0 : t.endsWith(`.${e}`), _ = (t, e) => {
  if (!t || typeof t != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (t === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const s = e ? g(e) : null;
  if (s) {
    const r = g(t);
    if (r && w(r, s))
      return { domain: s, isDirectTraffic: !0 };
    if (w(t, s))
      return { domain: s, isDirectTraffic: !0 };
  }
  const a = G[t];
  return a ? { domain: a, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) ? { domain: t.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function X({
  data: t,
  mode: e,
  siteUrl: s,
  siteIcon: a,
  defaultSourceIconUrl: n
}) {
  if (!t)
    return [];
  const r = /* @__PURE__ */ new Map();
  let f = 0;
  if (t.forEach((c) => {
    const { domain: d, isDirectTraffic: x } = _(c.source, s), u = Number(c.visits || 0);
    if (x || !c.source || c.source === "")
      f += u;
    else {
      const l = String(c.source), v = d ? `https://www.faviconextractor.com/favicon/${d}?larger=true` : n, T = d ? `https://${d}` : void 0;
      if (r.has(l)) {
        const h = r.get(l);
        h.visits += u;
      } else {
        const h = {
          source: l,
          visits: u,
          isDirectTraffic: !1,
          iconSrc: v,
          displayName: l,
          linkUrl: T
        };
        r.set(l, h);
      }
    }
  }), f > 0) {
    const c = {
      source: "Direct",
      visits: f,
      isDirectTraffic: !0,
      iconSrc: a || n,
      displayName: "Direct",
      linkUrl: void 0
    };
    r.set("Direct", c);
  }
  return Array.from(r.values()).sort((c, d) => d.visits - c.visits);
}
const q = E, J = $, z = O, y = p(({ className: t, ...e }, s) => /* @__PURE__ */ o.jsx(
  N,
  {
    className: m(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: s
  }
));
y.displayName = N.displayName;
const R = A(
  "fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), W = p(({ side: t = "right", className: e, children: s, ...a }, n) => /* @__PURE__ */ o.jsx(z, { children: /* @__PURE__ */ o.jsxs("div", { className: k, children: [
  /* @__PURE__ */ o.jsx(y, {}),
  /* @__PURE__ */ o.jsxs(
    S,
    {
      ref: n,
      className: m(R({ side: t }), e),
      ...a,
      children: [
        /* @__PURE__ */ o.jsxs(C, { className: "fixed right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ o.jsx(j, { className: "size-4" }),
          /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        s
      ]
    }
  )
] }) }));
W.displayName = S.displayName;
const M = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: m(
      "flex flex-col space-y-1 text-center sm:text-left",
      t
    ),
    ...e
  }
);
M.displayName = "SheetHeader";
const H = p(({ className: t, ...e }, s) => /* @__PURE__ */ o.jsx(
  b,
  {
    ref: s,
    className: m("text-xl font-semibold text-foreground", t),
    ...e
  }
));
H.displayName = b.displayName;
const Y = p(({ className: t, ...e }, s) => /* @__PURE__ */ o.jsx(
  D,
  {
    ref: s,
    className: m("text-sm text-muted-foreground", t),
    ...e
  }
));
Y.displayName = D.displayName;
const Q = ({ defaultSourceIconUrl: t, displayName: e, iconSrc: s }) => /* @__PURE__ */ o.jsx(o.Fragment, { children: e.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ o.jsx(P, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ o.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: s,
    onError: (a) => {
      a.currentTarget.src = t;
    }
  }
) }), i = {
  POSTS: "posts",
  PAGES: "pages",
  POSTS_AND_PAGES: "posts_and_pages",
  SOURCES: "sources"
}, V = (t) => {
  switch (t) {
    case i.POSTS:
      return "Top posts";
    case i.PAGES:
      return "Top pages";
    case i.SOURCES:
      return "Top sources";
    default:
      return "Top content";
  }
}, tt = (t, e, s) => {
  switch (t) {
    case i.POSTS:
      return `Your highest viewed posts ${s(e)}`;
    case i.PAGES:
      return `Your highest viewed pages ${s(e)}`;
    case i.POSTS_AND_PAGES:
      return `Your highest viewed posts or pages ${s(e)}`;
    case i.SOURCES:
      return `How readers found your site ${s(e)}`;
    default:
      return `Your highest viewed posts or pages ${s(e)}`;
  }
}, et = (t, e, s) => {
  switch (t) {
    case i.POSTS:
      return `Which posts drove the most growth ${s(e)}`;
    case i.PAGES:
      return `Which pages drove the most growth ${s(e)}`;
    case i.POSTS_AND_PAGES:
      return `Which posts or pages drove the most growth ${s(e)}`;
    case i.SOURCES:
      return `How readers found your site ${s(e)}`;
    default:
      return `Which posts drove the most growth ${s(e)}`;
  }
};
function Z(t, e) {
  if (!t || !e)
    return "";
  try {
    const s = new URL(e), a = s.pathname.endsWith("/") ? s.pathname : `${s.pathname}/`, n = t.replace(/^\//, ""), r = `${a}${n}`;
    return `${s.origin}${r}`;
  } catch {
    return "";
  }
}
function st(t, e, s, a, n) {
  return () => {
    if (e && t && n === "post") {
      a(`/posts/analytics/${e}`, { crossApp: !0 });
      return;
    }
    if (t && s) {
      const r = Z(t, s);
      r && window.open(r, "_blank", "noopener,noreferrer");
    }
  };
}
export {
  i as C,
  q as S,
  J as a,
  W as b,
  M as c,
  H as d,
  K as e,
  Y as f,
  Q as g,
  V as h,
  tt as i,
  st as j,
  _ as k,
  et as l,
  X as p
};
//# sourceMappingURL=url-helpers-DICtqCrE.mjs.map
