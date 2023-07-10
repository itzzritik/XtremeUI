import { Navigation } from './Navigation';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Layouts/Navigation',
	component: Navigation,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },

	},
	args: {

	},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {

	},
};
