import { Navigation } from '../Navigation/Navigation';
import { Routes } from '../Navigation/Routes';

import { Sider } from './Sider';

import type { Meta, StoryObj } from '@storybook/react';

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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		open: 'left',
	},
};
