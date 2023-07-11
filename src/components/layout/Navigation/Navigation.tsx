import { FC } from 'react';

import clsx from 'clsx';

import styles from './navigation.module.scss';
import { TNavigationRoute } from './types';

export const Navigation = (props: TNavigationProps) => {
	const { className, Routes } = props;

	const NavigationClsx = clsx(
		styles.navigation,
		className,
	);

	return (
		<section className={NavigationClsx} role='navigation'>
			<div className={styles.brand}>🎲 XtremeUI</div>
			<div className={styles.routeList}>
				{
					!!Routes &&
					<Routes
						className={styles.route}
						activeClassName={styles.active}
						iconClassName={styles.icon}
						labelClassName={styles.label}
					/>
				}
			</div>
		</section>
	);
};

export type TNavigationProps = {
	className?: string;
	Routes?: FC<TNavigationRoute>;
}
