import React from 'react';
import styles from './PageFooter.module.css';

const PageFooter = () => (
	<div className={styles.wrapper}>
		<div className={styles.container}>
			<svg className={styles.svg} viewBox="0 0 960 16" xmlns="http://www.w3.org/2000/svg">
				<g>
					<rect height="16" width="425" y="0" x="0" fill="#935347" />
					<rect height="16" width="335" y="0" x="425" fill="#64706c" />
					<rect height="16" width="200" y="0" x="760" fill="#c7ad88" />
				</g>
			</svg>
		</div>
	</div>
);

export default PageFooter;
