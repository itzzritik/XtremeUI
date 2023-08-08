import { Navigation } from './Navigation';

import type { Meta, StoryObj } from '@storybook/react';

const routeList = [
	{ name: 'Dashboard', href: '/dashboard', icon: 'e323' },
	{ name: 'Teams', href: '/teams', icon: 'e533' },
	{ name: 'Favorite', href: '/favorite', icon: 'f762' },
	{ name: 'Wallet', href: '/wallet', icon: 'f555' },
	{ name: 'Settings', href: '/settings', icon: 'f013' },
];

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
		as: 'span',
		routes: routeList,
		pathname: '/dashboard',
		children: '🎲 XtremeUI',
	},
};
