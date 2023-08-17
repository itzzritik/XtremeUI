import { ThemePicker } from './ThemePicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Layouts/Theme Picker',
	component: ThemePicker,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },

	},
	args: {

	},
} satisfies Meta<typeof ThemePicker>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
	},
};
