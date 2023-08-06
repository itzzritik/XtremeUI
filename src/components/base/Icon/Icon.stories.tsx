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
		code: 'e409',
		size: 64,
		type: 'light',
	},
} satisfies Meta<typeof Icon>;

export default meta;

export const Duotone: StoryObj<typeof meta> = {
	args: {
		type: 'duotone',
	},
};

export const Solid: StoryObj<typeof meta> = {
	args: {
		type: 'solid',
	},
};

export const Thin: StoryObj<typeof meta> = {
	args: {
		type: 'thin',
	},
};

export const Light: StoryObj<typeof meta> = {
	args: {
		type: 'light',
	},
};

export const Regular: StoryObj<typeof meta> = {
	args: {
		type: 'regular',
	},
};

export const SharpLight: StoryObj<typeof meta> = {
	args: {
		type: 'sharpLight',
	},
};

export const SharpRegular: StoryObj<typeof meta> = {
	args: {
		type: 'sharpRegular',
	},
};

export const SharpSolid: StoryObj<typeof meta> = {
	args: {
		type: 'sharpSolid',
	},
};

export const Brand: StoryObj<typeof meta> = {
	args: {
		code: 'f3b9',
		type: 'brand',
		size: 74,
	},
};
