/* empty css                                   */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DLQ9An-E.mjs';
import 'kleur/colors';
import { FiArrowLeft } from 'react-icons/fi';
import { $ as $$Layout } from '../chunks/Layout_D11ZhMY8.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found", "description": "The page you're looking for doesn't exist", "showFooter": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen items-center justify-center px-4"> <div class="w-full max-w-md text-center"> <h1 class="mb-8 text-9xl font-bold tracking-tight text-white/90">
404
</h1> <div class="mb-8 space-y-4"> <h2 class="text-xl font-medium">Page not found</h2> <p class="text-gray-400">
The page you're looking for doesn't exist or has been moved.
</p> </div> <div class="flex justify-center pt-4"> <a href="/" class="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition-all duration-200 hover:bg-white/[0.08]"> ${renderComponent($$result2, "FiArrowLeft", FiArrowLeft, { "className": "h-5 w-5" })} <span class="font-medium">Back to Home</span> </a> </div> </div> </main> ` })}`;
}, "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/404.astro", void 0);

const $$file = "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
