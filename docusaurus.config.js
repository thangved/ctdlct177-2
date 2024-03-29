const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const path = require("path");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "CTDLCT177",
	tagline: "Cấu trúc dữ liệu và giải thuật",
	url: "https://ctdl.thangved.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "thangved", // Usually your GitHub org/user name.
	projectName: "ctdlct177", // Usually your repo name.
	themes: ["@docusaurus/theme-live-codeblock"],
	i18n: {
		defaultLocale: "vi-VN",
		locales: ["vi-VN"],
	},
	plugins: [
		// path.resolve(__dirname, "./plugins/2dlive"),
		path.resolve(__dirname, "./plugins/gads"),
		[
			require.resolve("@cmfcmf/docusaurus-search-local"),
			{
				indexDocs: true,
				indexDocSidebarParentCategories: 0,

				indexBlog: true,
				indexPages: true,
				language: "vi",
				style: undefined,
				maxSearchResults: 8,
				lunr: {
					tokenizerSeparator: /[\s-]+/,
					k1: 1.2,
					titleBoost: 5,
					contentBoost: 1,
					tagsBoost: 3,
					parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
				},
			},
		],
	],

	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/thangved/datastructure",
					remarkPlugins: [math],
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/thangved/datastructure",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				googleAnalytics: {
					trackingID: "UA-169242940-3",
				},
			}),
		],
	],
	stylesheets: [
		{
			href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
			integrity:
				"sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
			crossorigin: "anonymous",
		},
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "light",
				disableSwitch: false,
			},

			navbar: {
				title: "CTDLCT177",
				logo: {
					alt: "Logo W5",
					src: "img/logo.png",
				},
				hideOnScroll: true,
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Tài liệu",
					},
					{
						to: "/blog",
						label: "Blog",
						position: "left",
					},
					{
						to: "/docs/algorithm-complexity/intro",
						label: "Độ phức tạp",
						position: "right",
					},
					{
						type: "dropdown",
						label: "ADTs",
						position: "right",
						items: [
							{
								label: "Danh sách đặc",
								href: "/docs/adts-arraylist/intro",
							},
							{
								label: "Danh sách liên kết",
								href: "/docs/adts-pointerlist/intro",
							},
							{
								label: "Ngăn xếp",
								href: "/docs/adts-stack/intro",
							},
							{
								label: "Hàng đợi",
								href: "/docs/adts-queue/intro",
							},
							{
								label: "Cây nhị phân",
								href: "/docs/adts-binary-tree/intro",
							},
							{
								label: "Cây tìm kiếm nhị phân",
								href: "/docs/adts-binary-search-tree/intro",
							},
						],
					},
					{
						label: "Git cơ bản",
						to: "/docs/git-tutorial/intro",
						position: "right",
					},
					{
						href: "https://github.com/thangved/datastructure",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Tài liệu",
						items: [
							{
								label: "Giới thiệu",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Kết nối",
						items: [
							{
								label: "Facebook",
								href: "https://www.facebook.com/minhthangD/",
							},
							{
								label: "Instagram",
								href: "https://www.instagram.com/minhthangdev/",
							},
						],
					},
					{
						title: "Thêm...",
						items: [
							{
								label: "Trang web",
								href: "https://w5team.web.app",
							},
							{
								label: "GitHub",
								href: "https://github.com/thangved/",
							},
							{
								label: "Donate",
								href: "https://www.paypal.com/paypalme/minhthangpay",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} W5, Minh Thắng`,
			},
			prism: {
				theme: darkCodeTheme,
				darkTheme: darkCodeTheme,
			},
			image: "https://github.com/thangved.png",
		}),
};
