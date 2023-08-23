import { forwardRef, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Icon } from '#components/base/Icon/Icon';

import styles from './navigation.module.scss';
import { TNavigationProps } from './types';

export const Navigation = forwardRef<HTMLDivElement, TNavigationProps>((props, ref) => {
	const { className, children, hrefPropName = 'href', routes = [], pathname = '', as: Tag = 'a' as const } = props;
	const [loading, setLoading] = useState<string>('/');

	const NavigationClsx = clsx(
		styles.navigation,
		className,
	);

	useEffect(() => {
		if (loading === pathname)
			setLoading('/');
	}, [loading, pathname]);

	return (
		<nav
			ref={ref}
			className={NavigationClsx}
			role='navigation'
		>
			<div className={styles.brand}>{children}</div>
			<div className={styles.routeList}>
				{
					routes.map((route, i) => (
						<Tag
							key={`route-${route?.href}-${i}`}
							className={clsx(
								styles.route,
								route?.href === loading && styles.loading,
								route?.href === pathname && styles.active,
							)}
							{...({ [hrefPropName]: route?.href })}
							onClick={() => {
								setTimeout(() => { if (loading !== pathname) setLoading(route?.href); }, 150);
							}}
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
		</nav>
	);
});

Navigation.displayName = 'Navigation';
