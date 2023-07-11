import { FC, useState } from 'react';

import clsx from 'clsx';
import noop from 'lodash/noop';

import { Icon } from '#components/base/Icon/Icon';

import { TNavigationRoute } from './types';

const routes = [
	{ name: 'Dashboard', href: '/dashboard', icon: 'grid_view', View: noop as FC },
	{ name: 'Transactions', href: '/transactions', icon: 'attach_money', View: noop as FC },
	{ name: 'Schedules', href: '/schedules', icon: 'schedule', View: noop as FC },
	{ name: 'Users', href: '/users', icon: 'account_circle', View: noop as FC },
	{ name: 'Settings', href: '/settings', icon: 'settings', View: noop as FC },
];

export const Routes = (props: TNavigationRoute) => {
	const { className, activeClassName, iconClassName, labelClassName } = props;
	const [active, setActive] = useState(0);
	return (
		<>
			{
				routes.map((route, i) => (
					<a
						key={`Route${i}`}
						className={clsx(className, i === active && activeClassName)}
						onClick={() => setActive(i)}

						// href={route.href}
					>
						{route.icon && <Icon className={iconClassName} name={route.icon} />}
						<span className={labelClassName}>{route.name}</span>
					</a>
				))
			}
		</>
	);
};
