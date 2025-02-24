/* empty css                                   */
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DLQ9An-E.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D11ZhMY8.mjs';
import { B as Breadcrumbs } from '../chunks/Breadcrumbs_B00IiloX.mjs';
import { marked } from 'marked';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Privacy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const privacyContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"./content/privacy.md": () => import('../chunks/privacy_BX8UaGWh.mjs').then(n => n._)}), () => "./content/privacy.md");
  const htmlContent = marked(privacyContent[0].rawContent());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy", "description": "Privacy Policy for the application" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen max-w-3xl mx-auto px-4 py-8"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, { "items": [{ label: "Privacy Policy" }] })} <div class="prose prose-invert prose-sm sm:prose-base max-w-none"> <div>${unescapeHTML(htmlContent)}</div> </div> </main> ` })} `;
}, "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/privacy.astro", void 0);

const $$file = "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
