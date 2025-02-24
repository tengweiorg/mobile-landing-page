/* empty css                                   */
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BTCNBJOT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CpvxoaoK.mjs';
import { B as Breadcrumbs } from '../chunks/Breadcrumbs_B00IiloX.mjs';
import { marked } from 'marked';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Terms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  const termsContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"./content/terms.md": () => import('../chunks/terms_-Lh-MXvp.mjs').then(n => n._)}), () => "./content/terms.md");
  const htmlContent = marked(termsContent[0].rawContent());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of Service", "description": "Terms of Service for the application" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen max-w-3xl mx-auto px-4 py-8"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, { "items": [{ label: "Terms of Service" }] })} <div class="prose prose-invert prose-sm sm:prose-base max-w-none"> <div>${unescapeHTML(htmlContent)}</div> </div> </main> ` })} `;
}, "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/terms.astro", void 0);

const $$file = "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
