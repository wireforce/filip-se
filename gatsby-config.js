const path = require('path');

module.exports = {
	siteMetadata: {
		metaTitle: 'filip.se',
		metaDescription: 'filip.se - Blogs and articles about diet, exercise and health',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				root: path.join(__dirname, 'src'),
			},
		},
	],
};
