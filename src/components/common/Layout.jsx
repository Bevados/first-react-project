import React from 'react';
import Header from './Header/Header';

import styles from './Layout.module.scss';

const Layout = ({ children, height = '350px', bgImg }) => {
	return (
		<div className={styles.wrapper} style={{height: `${height}`, backgroundImage: `url(${bgImg})`}}>
			<Header />
			<div>
				{children}
			</div>
		</div>
	)
}

export default Layout;