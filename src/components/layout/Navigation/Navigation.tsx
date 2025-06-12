import { forwardRef, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Icon } from '#components/base/Icon/Icon';

import './navigation.scss';
import { TNavigationProps } from './types';

export const Navigation = forwardRef<HTMLDivElement, TNavigationProps>((props, ref) => {
	const { className, children, hrefPropName = 'href', routes = [], pathname = '', as: Tag = 'a' as const } = props;
	const [loading, setLoading] = useState<string>('/');

	const NavigationClsx = clsx(
		'xtrNavigation',
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
			<div className='brand'>{children}</div>
			<div className='routeList'>
				{
					routes.map((route, i) => (
						<Tag
							key={`route-${route?.href}-${i}`}
							className={clsx(
								'route',
								route?.href === loading && 'loading',
								route?.href === pathname && 'active',
							)}
							{...({ [hrefPropName]: route?.href })}
							onClick={() => {
								setTimeout(() => { if (loading !== pathname) setLoading(route?.href); }, 150);
							}}
						>
							{
								route?.icon &&
								<Icon
									code={route?.icon}
									type={route?.href === pathname ? 'duotone' : 'light'}
								/>
							}
							<span className='label'>{route?.name}</span>
						</Tag>
					))
				}
			</div>
		</nav>
	);
});

Navigation.displayName = 'Navigation';
