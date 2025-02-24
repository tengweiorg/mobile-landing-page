import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DYtKknwd.mjs';
import { manifest } from './manifest_DAdkUpea.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/content/privacy.astro.mjs');
const _page3 = () => import('./pages/content/terms.astro.mjs');
const _page4 = () => import('./pages/privacy.astro.mjs');
const _page5 = () => import('./pages/terms.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/content/privacy.md", _page2],
    ["src/pages/content/terms.md", _page3],
    ["src/pages/privacy.astro", _page4],
    ["src/pages/terms.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1a73ce8a-5ff9-4bfd-a876-c73250953783",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
