import { c as createComponent, b as createAstro, d as addAttribute, e as renderScript, f as renderHead, a as renderComponent, r as renderTemplate, F as Fragment, g as renderSlot } from './astro/server_BTCNBJOT.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { AnimatePresence, motion } from 'framer-motion';
import { FiStar, FiZap, FiBox } from 'react-icons/fi';
import { RiInstagramFill, RiTelegram2Fill, RiTwitterXFill } from 'react-icons/ri';

function PageAnimation(props) {
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "pageInitial",
      animate: "pageAnimate",
      exit: "pageExit",
      transition: { type: "linear" },
      className: "px-5",
      variants: {
        pageInitial: {
          opacity: 0,
          y: 10
        },
        pageAnimate: {
          opacity: 1,
          y: 0
        },
        pageExit: {
          opacity: 0,
          y: 10
        }
      },
      children: props.children
    }
  ) });
}

const appData = {
  title: "FREE 记账",
  description: "免费记账，轻松管理你的财务，随时随地查看收支情况，让理财变得更简单。",
  logo: {
    type: "iframe",
    src: "https://api.bohd4n.me/embed/d92TevY2lQhnQnC/emoji1"
  },
  screenshots: {
    iphone: [
      "/assets/screenshots/iphone/1.png",
      "/assets/screenshots/iphone/2.png",
      "/assets/screenshots/iphone/3.png"
      // ...more Iphone screenshotsa
    ],
    ipad: [
      "/assets/screenshots/ipad/1.png",
      "/assets/screenshots/ipad/2.png",
      "/assets/screenshots/ipad/3.png"
      // ...more iPad screenshots
    ]
  },
  features: [
    {
      title: "免费记账",
      description: "免费记账，轻松管理你的财务，随时随地查看收支情况，让理财变得更简单。",
      icon: FiStar
    },
    {
      title: "AI分析",
      description: "支持AI分析，帮助你更好地理解你的财务状况。",
      icon: FiZap
    },
    {
      title: "操作简单",
      description: "简洁的操作界面，快速上手，理财更轻松。",
      icon: FiBox
    }
  ],
  faqs: [
    {
      question: "免费记账？",
      answer: "是的，免费记账，轻松管理你的财务，随时随地查看收支情况，让理财变得更简单。"
    },
    {
      question: "支持AI分析？",
      answer: "是的，支持AI分析，帮助你更好地理解你的财务状况。"
    },
    {
      question: "支持明细查询？",
      answer: "是的，支持明细查询，帮助你更好地理解你的财务状况。"
    }
  ],
  storeLinks: {
    apple: "#",
    // Replace with your App Store link
    google: "#"
    // Replace with your Google Play link
  },
  socialLinks: [
    {
      url: "#",
      icon: RiInstagramFill,
      label: "Instagram"
    },
    {
      url: "#",
      icon: RiTelegram2Fill,
      label: "Telegram"
    },
    {
      url: "#",
      icon: RiTwitterXFill,
      label: "Twitter"
    }
  ]
};

const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "py-8 text-center space-y-4 border-t border-white/5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-6 text-sm text-gray-400", children: [
      /* @__PURE__ */ jsx("a", { href: "/privacy", className: "transition-colors hover:text-white", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("a", { href: "/terms", className: "transition-colors hover:text-white", children: "Terms of Service" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: appData.title }),
      /* @__PURE__ */ jsx("br", {}),
      "All rights reserved."
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { showFooter = true } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/assets/favicon.png"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url.href, "content")}>${description && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta name="description"${addAttribute(description, "content")}><meta property="og:description"${addAttribute(description, "content")}>` })}`}<meta name="theme-color" content="#000000"><title>${title}</title>${renderScript($$result, "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="bg-black font-sans text-white"> <div class="mx-auto min-h-screen max-w-[800px]"> ${renderComponent($$result, "PageAnimation", PageAnimation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/PageAnimation", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <main> ${renderSlot($$result2, $$slots["default"])} </main> ${showFooter && renderTemplate`${renderComponent($$result2, "Footer", Footer, {})}`}` })} </div> </body></html>`;
}, "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/layouts/Layout.astro", void 0);

export { $$Layout as $, appData as a };
