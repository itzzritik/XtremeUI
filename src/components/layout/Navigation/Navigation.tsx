import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './navigation.module.scss';
import { TNavigationProps } from './types';

export const Navigation = forwardRef<HTMLDivElement, TNavigationProps>((props: TNavigationProps, ref) => {
	const { className, Routes } = props;

	const NavigationClsx = clsx(
		styles.navigation,
		className,
	);

	return (
		<section className={NavigationClsx} ref={ref} role='navigation'>
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
});

Navigation.displayName = 'Navigation';
