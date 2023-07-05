import { Icon } from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		filled: {
			defaultValue: { summary: false },
		},
		size: {
			control: { type: 'range', min: 16, max: 256, step: 8 },
			defaultValue: { summary: 24 },
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'favorite',
		size: 48,
	},
};
export const Filled: Story = {
	args: {
		name: 'favorite',
		filled: true,
	},
};
export const Large: Story = {
	args: {
		name: 'favorite',
		size: 64,
	},
};
