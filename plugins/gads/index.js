const path = require("path");

module.exports = () => {
	return {
		name: "docusaurus-plugin-gads",
		getClientModules() {
			return [path.resolve(__dirname, "./config.js")];
		},
	};
};
