const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const path = require('path')

	// With JSDoc @type annotations, IDEs can provide config autocompletion
	/** @type {import('@docusaurus/types').DocusaurusConfig} */
	; (module.exports = {
		title: 'CTDLCT177',
		tagline: 'Cấu trúc dữ liệu và giải thuật',
		url: 'https://your-docusaurus-test-site.com',
		baseUrl: '/',
		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',
		favicon: 'img/favicon.ico',
		organizationName: 'thangved', // Usually your GitHub org/user name.
		projectName: 'ctdlct177', // Usually your repo name.
		i18n: {
			defaultLocale: 'vi-VN',
			locales: ['vi-VN'],

		},
		plugins: [
			'docusaurus-plugin-2dlive',
			// path.resolve(__dirname, './plugins/2dlive'),
			path.resolve(__dirname, './plugins/gads'),
		],

		presets: [
			[
				'@docusaurus/preset-classic',
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve('./sidebars.js'),
						// Please change this to your repo.
						editUrl: 'https://github.com/thangved/datastructure',
					},
					blog: {
						showReadingTime: true,
						// Please change this to your repo.
						editUrl:
							'https://github.com/thangved/datastructure',
					},
					theme: {
						customCss: require.resolve('./src/css/custom.css'),
					},
				}),
			],
		],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				colorMode: {
					defaultMode: 'light',
					disableSwitch: true
				},
				navbar: {
					title: 'CTDLCT177',
					logo: {
						alt: 'Logo WS',
						src: 'img/logo.png',
					},
					hideOnScroll: true,
					items: [
						{
							type: 'search',
							position: 'right'
						},
						{
							type: 'doc',
							docId: 'intro',
							position: 'left',
							label: 'Tài liệu',
						},
						{
							to: '/docs/algorithm-complexity/intro',
							label: 'Độ phức tạp',
							position: 'right'
						},
						{
							type: 'dropdown',
							label: 'ADTs',
							position: 'right',
							items: [
								{
									label: 'Danh sách đặc',
									href: '/docs/adts-arraylist/intro',
								},
								{
									label: 'Danh sách liên kết',
									href: '/docs/adts-pointerlist/intro',
								},
							],
						},
						{
							href: 'https://github.com/thangved/datastructure',
							label: 'GitHub',
							position: 'right',
						},
					],
				},
				footer: {
					style: 'dark',
					links: [
						{
							title: 'Tài liệu',
							items: [
								{
									label: 'Giới thiệu',
									to: '/docs/intro',
								},
							],
						},
						{
							title: 'Cộng đồng',
							items: [
								{
									label: 'Facebook',
									href: 'https://www.facebook.com/minhthangD/',
								},
								{
									label: 'Instagram',
									href: 'https://www.instagram.com/minhthangdev/',
								},
							],
						},
						{
							title: 'Thêm...',
							items: [
								{
									label: 'Trang web',
									to: 'https://minhthangdev.pw',
								},
								{
									label: 'GitHub',
									href: 'https://github.com/thangved/',
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} WS, Minh Thắng`,
				},
				prism: {
					theme: darkCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}),
	})
