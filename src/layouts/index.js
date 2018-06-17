import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PageHeader from 'components/widgets/PageHeader';
import PageFooter from 'components/widgets/PageFooter';
import './index.css';
import styles from './index.module.css';

const Layout = ({ children, data }) => (
	<div className={styles.wrapper}>
		<Helmet
			meta={[
				{ name: 'title', content: data.site.siteMetadata.metaTitle },
				{ name: 'description', content: data.site.siteMetadata.metaDescription },
			]}
			link={[
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon.png',
				},
				{
					rel: 'apple-touch-icon',
					href: '/favicon.png',
				},
				{
					rel: 'manifest',
					href: '/manifest.json',
				},
			]}
		/>
		<PageHeader />
		<div className={styles.container}>{children()}</div>
		<PageFooter />
	</div>
);

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				metaTitle
				metaDescription
			}
		}
	}
`;
