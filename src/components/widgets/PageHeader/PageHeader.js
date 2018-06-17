import React from 'react';
import Link from 'gatsby-link';
import Navigation from 'react-feather/dist/icons/navigation-2';
import Twitter from 'react-feather/dist/icons/twitter';
import Facebook from 'react-feather/dist/icons/facebook';
import styles from './PageHeader.module.css';

const PageHeader = () => (
	<div className={styles.wrapper}>
		<div className={styles.container}>
			<div className={styles.logoItem}>
				<Link to="/" className={styles.logoLink}>
					<h1 className={styles.logo}>filip.se</h1>
				</Link>
			</div>
			<Link className={styles.menuItem}>
				<Navigation className={styles.menuItemIcon} /> Blogg
			</Link>
			<Link className={styles.menuItem}>
				<Navigation className={styles.menuItemIcon} /> Artiklar
			</Link>
			<Link className={styles.menuItem}>
				<Navigation className={styles.menuItemIcon} /> Hälsopaket
			</Link>
			<div className={styles.socialIcons}>
				<Twitter className={styles.socialIcon} />
				<Facebook className={styles.socialIcon} />
			</div>
		</div>
	</div>
);

export default PageHeader;
