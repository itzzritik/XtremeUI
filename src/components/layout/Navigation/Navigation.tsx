import { forwardRef } from 'react';

import clsx from 'clsx';

import { Icon } from '#components/base/Icon/Icon';

import styles from './navigation.module.scss';
import { TNavigationProps } from './types';

export const Navigation = forwardRef<HTMLDivElement, TNavigationProps>((props: TNavigationProps, ref) => {
	const { className, children, routes = [], pathname = '', as: Tag = 'a' as const } = props;

	const NavigationClsx = clsx(
		styles.navigation,
		className,
	);

	return (
		<section className={NavigationClsx} ref={ref} role='navigation'>
			<div className={styles.brand}>{children}</div>
			<div className={styles.routeList}>
				{
					routes.map((route, i) => (
						<Tag
							key={`route-${route?.href}-${i}`}
							className={clsx(styles.route, route?.href === pathname && styles.active)}
							href={route?.href}
						>
							{
								route?.icon &&
								<Icon
									className={styles?.icon}
									code={route?.icon}
									type={route?.href === pathname ? 'duotone' : 'thin'}
								/>
							}
							<span className={styles.label}>{route?.name}</span>
						</Tag>
					))
				}
			</div>
		</section>
	);
});

Navigation.displayName = 'Navigation';
