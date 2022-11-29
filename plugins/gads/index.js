const path = require("path");

module.exports = (_context, _options) => {
	return {
		name: "docusaurus-plugin-gads",
		getClientModules() {
			return [path.resolve(__dirname, "./config.js")];
		},
	};
};
