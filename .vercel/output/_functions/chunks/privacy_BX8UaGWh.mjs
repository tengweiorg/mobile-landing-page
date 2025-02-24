/* empty css                           */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_DLQ9An-E.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"privacy-policy\">Privacy Policy</h1>\n<p><strong>Last updated:</strong> February 1, 2025</p>\n<h2 id=\"information-we-collect\">Information We Collect</h2>\n<h3 id=\"usage-data\">Usage Data</h3>\n<p>We collect anonymous usage data to improve our service, including:</p>\n<ul>\n<li>App performance metrics</li>\n<li>Feature usage statistics</li>\n<li>Device type and operating system</li>\n<li>Crash reports</li>\n</ul>\n<h3 id=\"user-content\">User Content</h3>\n<p>We store only the content you explicitly create and save within the app.</p>\n<h2 id=\"how-we-use-your-information\">How We Use Your Information</h2>\n<h3 id=\"service-improvement\">Service Improvement</h3>\n<ul>\n<li>Analyzing app performance</li>\n<li>Identifying and fixing bugs</li>\n<li>Developing new features</li>\n<li>Optimizing user experience</li>\n</ul>\n<h3 id=\"security\">Security</h3>\n<p>We implement industry-standard security measures to protect your data:</p>\n<ul>\n<li>End-to-end encryption</li>\n<li>Regular security audits</li>\n<li>Secure data storage</li>\n</ul>\n<h2 id=\"data-sharing\">Data Sharing</h2>\n<p>We <strong>do not</strong> sell your personal information to third parties. Data sharing is limited to:</p>\n<ul>\n<li>Essential service providers</li>\n<li>Legal requirements</li>\n<li>User-initiated sharing</li>\n</ul>\n<h2 id=\"your-rights\">Your Rights</h2>\n<p>You have the right to:</p>\n<ul>\n<li>Access your data</li>\n<li>Request data deletion</li>\n<li>Opt out of analytics</li>\n<li>Export your data</li>\n</ul>\n<h2 id=\"changes-to-this-policy\">Changes to This Policy</h2>\n<p>We may update this privacy policy from time to time. Changes will be notified through the app or via email.</p>\n<h2 id=\"contact-us\">Contact Us</h2>\n<p>If you have questions about this privacy policy, please contact us at:</p>\n<ul>\n<li>Email: <a href=\"mailto:privacy@example.com\">privacy@example.com</a></li>\n<li>Support: help.example.com</li>\n</ul>";

				const frontmatter = {};
				const file = "D:/004-tengwei/001-code/001-frontend/004-react/mobile-landing-page/src/pages/content/privacy.md";
				const url = "/content/privacy";
				function rawContent() {
					return "# Privacy Policy\r\n\r\n**Last updated:** February 1, 2025\r\n\r\n## Information We Collect\r\n\r\n### Usage Data\r\n\r\nWe collect anonymous usage data to improve our service, including:\r\n\r\n- App performance metrics\r\n- Feature usage statistics\r\n- Device type and operating system\r\n- Crash reports\r\n\r\n### User Content\r\n\r\nWe store only the content you explicitly create and save within the app.\r\n\r\n## How We Use Your Information\r\n\r\n### Service Improvement\r\n\r\n- Analyzing app performance\r\n- Identifying and fixing bugs\r\n- Developing new features\r\n- Optimizing user experience\r\n\r\n### Security\r\n\r\nWe implement industry-standard security measures to protect your data:\r\n\r\n- End-to-end encryption\r\n- Regular security audits\r\n- Secure data storage\r\n\r\n## Data Sharing\r\n\r\nWe **do not** sell your personal information to third parties. Data sharing is limited to:\r\n\r\n- Essential service providers\r\n- Legal requirements\r\n- User-initiated sharing\r\n\r\n## Your Rights\r\n\r\nYou have the right to:\r\n\r\n- Access your data\r\n- Request data deletion\r\n- Opt out of analytics\r\n- Export your data\r\n\r\n## Changes to This Policy\r\n\r\nWe may update this privacy policy from time to time. Changes will be notified through the app or via email.\r\n\r\n## Contact Us\r\n\r\nIf you have questions about this privacy policy, please contact us at:\r\n\r\n- Email: privacy@example.com\r\n- Support: help.example.com\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"privacy-policy","text":"Privacy Policy"},{"depth":2,"slug":"information-we-collect","text":"Information We Collect"},{"depth":3,"slug":"usage-data","text":"Usage Data"},{"depth":3,"slug":"user-content","text":"User Content"},{"depth":2,"slug":"how-we-use-your-information","text":"How We Use Your Information"},{"depth":3,"slug":"service-improvement","text":"Service Improvement"},{"depth":3,"slug":"security","text":"Security"},{"depth":2,"slug":"data-sharing","text":"Data Sharing"},{"depth":2,"slug":"your-rights","text":"Your Rights"},{"depth":2,"slug":"changes-to-this-policy","text":"Changes to This Policy"},{"depth":2,"slug":"contact-us","text":"Contact Us"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
