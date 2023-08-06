import { FC, useState } from 'react';

import clsx from 'clsx';
import noop from 'lodash/noop';

import { Icon } from '#components/base/Icon/Icon';

import { Navigation } from '../Navigation/Navigation';
import { TNavigationRoute } from '../Navigation/types';

import { Sider } from './Sider';

import type { Meta, StoryObj } from '@storybook/react';

const routeList = [
	{ name: 'Dashboard', href: '/dashboard', icon: 'e323', View: noop as FC },
	{ name: 'Teams', href: '/teams', icon: 'e533', View: noop as FC },
	{ name: 'Favorite', href: '/favorite', icon: 'f762', View: noop as FC },
	{ name: 'Wallet', href: '/wallet', icon: 'f555', View: noop as FC },
	{ name: 'Settings', href: '/settings', icon: 'f013', View: noop as FC },
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
					>
						{
							route.icon &&
							<Icon
								className={iconClassName}
								code={route.icon}
								type={i === active ? 'duotone' : 'thin'}
							/>
						}
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
