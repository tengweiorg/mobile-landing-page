import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
} from "react-icons/ri";

export const appData: AppData = {
	title: "FREE 记账",
	description:
		"免费记账，轻松管理你的财务，随时随地查看收支情况，让理财变得更简单。",
	logo: {
		type: "iframe",
		src: "https://api.bohd4n.me/embed/d92TevY2lQhnQnC/emoji1",
	},
	screenshots: {
		iphone: [
			"/assets/screenshots/iphone/1.png",
			"/assets/screenshots/iphone/2.png",
			"/assets/screenshots/iphone/3.png",
			// ...more Iphone screenshotsa
		],
		ipad: [
			"/assets/screenshots/ipad/1.png",
			"/assets/screenshots/ipad/2.png",
			"/assets/screenshots/ipad/3.png",
			// ...more iPad screenshots
		],
	},
	features: [
		{
			title: "免费记账",
			description: "免费记账，轻松管理你的财务，随时随地查看收支情况，让理财变得更简单。",
			icon: FiStar,
		},
		{
			title: "AI分析",
			description: "支持AI分析，帮助你更好地理解你的财务状况。",
			icon: FiZap,
		},
		{
			title: "操作简单",
			description: "简洁的操作界面，快速上手，理财更轻松。",
			icon: FiBox,
		},
	],
	faqs: [
		{
			question: "免费记账？",
			answer: "是的，免费记账，轻松管理你的财务，随时随地查看收支情况，让理财变得更简单。",
		},
		{
			question: "支持AI分析？",
			answer: "是的，支持AI分析，帮助你更好地理解你的财务状况。",
		},
		{
			question: "支持明细查询？",
			answer: "是的，支持明细查询，帮助你更好地理解你的财务状况。",
		},
	],
	storeLinks: {
		apple: "#", // Replace with your App Store link
		google: "#", // Replace with your Google Play link
	},
	socialLinks: [
		{
			url: "#",
			icon: RiInstagramFill,
			label: "Instagram",
		},
		{
			url: "#",
			icon: RiTelegram2Fill,
			label: "Telegram",
		},
		{
			url: "#",
			icon: RiTwitterXFill,
			label: "Twitter",
		},
	],
};
