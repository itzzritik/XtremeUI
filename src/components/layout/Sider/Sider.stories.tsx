import { Navigation } from '../Navigation/Navigation';

import { Sider } from './Sider';

import type { StoryObj } from '@storybook/react';

const routeList = [
	{ name: 'Dashboard', href: '/dashboard', icon: 'e323' },
	{ name: 'Teams', href: '/teams', icon: 'e533' },
	{ name: 'Favorite', href: '/favorite', icon: 'f762' },
	{ name: 'Wallet', href: '/wallet', icon: 'f555' },
	{ name: 'Settings', href: '/settings', icon: 'f013' },
];

const meta = {
	title: 'Layouts/Sider',
	component: Sider,
	tags: [],
	argTypes: {
		className: { control: false },
		leftSider: { control: false },
		rightSider: { control: false },
		showMiniLeftSider: { defaultValue: { summary: true } },
		showMiniRightSider: { defaultValue: { summary: false } },
	},
	args: {
		leftSider: <Navigation as='span' pathname='/dashboard' routes={routeList}>🎲 XtremeUI</Navigation>,
		showMiniLeftSider: true,
	},
};

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
	},
};
