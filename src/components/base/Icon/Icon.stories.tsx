import { Icon } from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		type: {
			defaultValue: { summary: 'light' },
		},
		size: {
			control: { type: 'range', min: 16, max: 256, step: 8 },
			defaultValue: { summary: 24 },
		},
	},
	args: {
		code: 'f004',
		size: 24,
		type: 'light',
	},
} satisfies Meta<typeof Icon>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		code: 'f004',
		size: 48,
	},
};
export const Filled: StoryObj<typeof meta> = {
	args: {
		code: 'f004',
		type: 'light',
	},
};
export const Large: StoryObj<typeof meta> = {
	args: {
		code: 'f004',
		size: 64,
	},
};
