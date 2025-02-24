import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_DLQ9An-E.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BC-gzRZC.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/","cacheDir":"file:///D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/node_modules/.astro/","outDir":"file:///D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/dist/","srcDir":"file:///D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/","publicDir":"file:///D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/public/","buildClientDir":"file:///D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/dist/client/","buildServerDir":"file:///D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.DyYfxnbc.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.DyYfxnbc.css"}],"routeData":{"route":"/content/privacy","isIndex":false,"type":"page","pattern":"^\\/content\\/privacy\\/?$","segments":[[{"content":"content","dynamic":false,"spread":false}],[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/content/privacy.md","pathname":"/content/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.DyYfxnbc.css"}],"routeData":{"route":"/content/terms","isIndex":false,"type":"page","pattern":"^\\/content\\/terms\\/?$","segments":[[{"content":"content","dynamic":false,"spread":false}],[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/content/terms.md","pathname":"/content/terms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".prose{--tw-prose-invert-headings: #fff;--tw-prose-invert-links: #60a5fa;--tw-prose-invert-bold: #fff}.prose a{text-decoration:none}.prose a:hover{text-decoration:underline}\n"},{"type":"external","src":"/_astro/privacy.DyYfxnbc.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".prose{--tw-prose-invert-headings: #fff;--tw-prose-invert-links: #60a5fa;--tw-prose-invert-bold: #fff}.prose a{text-decoration:none}.prose a:hover{text-decoration:underline}\n"},{"type":"external","src":"/_astro/privacy.DyYfxnbc.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.DyYfxnbc.css"},{"type":"inline","content":".screenshots-scroll{scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none}.screenshots-scroll::-webkit-scrollbar{display:none}.scroll-progress{width:var(--scroll-width, 0%);transition:width .1s ease-out}.store-button{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.store-button:hover{transform:translateY(-1px);box-shadow:0 4px 20px -4px #ffffff0d}.store-button:active{transform:translateY(0)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/content/privacy@_@md":"pages/content/privacy.astro.mjs","\u0000@astro-page:src/pages/content/terms@_@md":"pages/content/terms.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DZQFsjEO.mjs","\u0000@astrojs-manifest":"manifest_DdSU90cF.mjs","@components/sections/Screenshots":"_astro/Screenshots.DLURP85q.js","@components/ui/Lightbox":"_astro/Lightbox.BfFBYHHM.js","@components/ui/PageAnimation":"_astro/PageAnimation.BpSQ3OXn.js","@astrojs/react/client.js":"_astro/client.dqIoCOJE.js","D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DI3Z4r9i.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","history.scrollRestoration=\"manual\";window.addEventListener(\"load\",()=>{window.scrollTo(0,0)});"]],"assets":["/_astro/privacy.DyYfxnbc.css","/assets/favicon.png","/_astro/client.dqIoCOJE.js","/_astro/index.ai7qpRr1.js","/_astro/Lightbox.BfFBYHHM.js","/_astro/PageAnimation.BpSQ3OXn.js","/_astro/proxy.C_cMSjEQ.js","/_astro/Screenshots.DLURP85q.js","/assets/screenshots/ipad/1.png","/assets/screenshots/ipad/2.png","/assets/screenshots/ipad/3.png","/assets/screenshots/iphone/1.png","/assets/screenshots/iphone/2.png","/assets/screenshots/iphone/3.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"1xW7K5wUZ4YM+bLPiam01ZLcZDF+BC9vMfMSSuJDzN4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
