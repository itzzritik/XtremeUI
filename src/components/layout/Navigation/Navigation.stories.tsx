import { FC, useState } from 'react';

import clsx from 'clsx';
import noop from 'lodash/noop';

import { Icon } from '#components/base/Icon/Icon';

import { Navigation } from './Navigation';
import { TNavigationRoute } from './types';

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

						// href={route.href}
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
	title: 'Layouts/Navigation',
	component: Navigation,
	tags: [],
	argTypes: {
		className: { control: false },
	},
	args: {

	},
} satisfies Meta<typeof Navigation>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		Routes: Routes,
	},
};
