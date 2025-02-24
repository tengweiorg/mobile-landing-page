import { c as createComponent, b as createAstro, e as addAttribute, f as renderScript, g as renderHead, a as renderComponent, r as renderTemplate, F as Fragment$1, h as renderSlot } from './astro/server_DLQ9An-E.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
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

function GithubCorner({ href }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href,
        className: "github-corner",
        "aria-label": "View source on GitHub",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "80",
            height: "80",
            viewBox: "0 0 250 250",
            className: "absolute top-0 right-0 border-0",
            style: { fill: "#151513", color: "#fff" },
            "aria-labelledby": "github-corner-title",
            role: "img",
            children: [
              /* @__PURE__ */ jsx("title", { id: "github-corner-title", children: "View source code on GitHub" }),
              /* @__PURE__ */ jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                  fill: "currentColor",
                  className: "octo-arm",
                  style: { transformOrigin: "130px 106px" }
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                  fill: "currentColor",
                  className: "octo-body"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        .github-corner:hover .octo-arm {
          animation: octocat-wave 560ms ease-in-out;
        }
        @keyframes octocat-wave {
          0%, 100% { transform: rotate(0); }
          20%, 60% { transform: rotate(-25deg); }
          40%, 80% { transform: rotate(10deg); }
        }
        @media (max-width: 500px) {
          .github-corner:hover .octo-arm {
            animation: none;
          }
          .github-corner .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
          }
        }
      ` })
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { showFooter = true } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/assets/favicon.png"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url.href, "content")}>${description && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`<meta name="description"${addAttribute(description, "content")}><meta property="og:description"${addAttribute(description, "content")}>` })}`}<meta name="theme-color" content="#000000"><title>${title}</title>${renderScript($$result, "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="bg-black font-sans text-white"> ${renderComponent($$result, "GithubCorner", GithubCorner, { "href": "https://github.com/bohd4nx/mobile-landing-page" })} <div class="mx-auto min-h-screen max-w-[800px]"> ${renderComponent($$result, "PageAnimation", PageAnimation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/PageAnimation", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <main> ${renderSlot($$result2, $$slots["default"])} </main> ${showFooter && renderTemplate`${renderComponent($$result2, "Footer", Footer, {})}`}` })} </div> </body></html>`;
}, "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/layouts/Layout.astro", void 0);

export { $$Layout as $, appData as a };
