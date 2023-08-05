import { FC, useState } from 'react';

import clsx from 'clsx';
import noop from 'lodash/noop';

import { Icon } from '#components/base/Icon/Icon';

import { Navigation } from '../Navigation/Navigation';
import { TNavigationRoute } from '../Navigation/types';

import { Sider } from './Sider';

import type { Meta, StoryObj } from '@storybook/react';

const routeList = [
	{ name: 'Dashboard', href: '/dashboard', icon: 'grid_view', View: noop as FC },
	{ name: 'Transactions', href: '/transactions', icon: 'attach_money', View: noop as FC },
	{ name: 'Schedules', href: '/schedules', icon: 'schedule', View: noop as FC },
	{ name: 'Users', href: '/users', icon: 'account_circle', View: noop as FC },
	{ name: 'Settings', href: '/settings', icon: 'settings', View: noop as FC },
];
const Routes = (props: TNavigationRoute) => {
	const { className, activeClassName, iconClassName, labelClassName } = props;
	const [active, setActive] = useState(0);
	return (
		<>
			{
				routeList.map((route, i) => (
					<a
						key={`Route${i}`}
						className={clsx(className, i === active && activeClassName)}
						onClick={() => setActive(i)}

						// href={route.href}
					>
						{route.icon && <Icon className={iconClassName} code={route.icon} />}
						<span className={labelClassName}>{route.name}</span>
					</a>
				))
			}
		</>
	);
};

const meta = {
	title: 'Layouts/Sider',
	component: Sider,
	tags: [],
	argTypes: {
		className: { control: false },
		leftSider: { control: false },
		rightSider: { control: false },
		open: { defaultValue: { summary: 'closed' } },
		showMiniLeftSider: { defaultValue: { summary: true } },
		showMiniRightSider: { defaultValue: { summary: false } },
	},
	args: {
		leftSider: <Navigation Routes={Routes} />,
		open: 'closed',
		showMiniLeftSider: true,
	},
} satisfies Meta<typeof Sider>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		open: 'left',
	},
};
