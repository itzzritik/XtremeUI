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
	args: {
		name: 'favorite',
		size: 24,
		filled: false,
	},
} satisfies Meta<typeof Icon>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		name: 'favorite',
		size: 48,
	},
};
export const Filled: StoryObj<typeof meta> = {
	args: {
		name: 'favorite',
		filled: true,
	},
};
export const Large: StoryObj<typeof meta> = {
	args: {
		name: 'favorite',
		size: 64,
	},
};
