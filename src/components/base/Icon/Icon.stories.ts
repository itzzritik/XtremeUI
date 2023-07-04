import { Icon } from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
	},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'favorite',
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
