import { SchemeSwitch } from './SchemeSwitch';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Layouts/Scheme Picker',
	component: SchemeSwitch,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		size: { defaultValue: { summary: 'default' } },
		type: { defaultValue: { summary: 'secondary' } },
		iconType: { defaultValue: { summary: 'solid' } },
		withLabel: { defaultValue: { summary: false } },
	},
	args: {
		size: 'default',
		type: 'secondary',
		iconType: 'solid',
		withLabel: false,
	},
} satisfies Meta<typeof SchemeSwitch>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {},
};
