import { Navigation } from './Navigation';
import { Routes } from './Routes';

import type { Meta, StoryObj } from '@storybook/react';

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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		Routes: Routes,
	},
};
