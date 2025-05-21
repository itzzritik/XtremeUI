import { ThemeSelect } from './ThemeSelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Layouts/Theme Select',
	component: ThemeSelect,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		iconType: { defaultValue: { summary: 'solid' } },
	},
	args: {
	},
} satisfies Meta<typeof ThemeSelect>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {

	},
};

export const WithSwatch: StoryObj<typeof meta> = {
	args: {
		withSwatch: true,
	},
};

export const withScheme: StoryObj<typeof meta> = {
	args: {
		withSwatch: true,
		withScheme: true,
	},
};
