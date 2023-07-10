import { Sider } from './Sider';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Layouts/Sider',
	component: Sider,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
	},
	args: {

	},
} satisfies Meta<typeof Sider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		open: 'left',
	},
};
