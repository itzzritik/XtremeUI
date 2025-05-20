import { ThemeSelect } from './ThemeSelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Layouts/Theme Select',
	component: ThemeSelect,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		size: { defaultValue: { summary: 'default' } },
		type: { defaultValue: { summary: 'secondary' } },
		iconType: { defaultValue: { summary: 'solid' } },
	},
	args: {
		size: 'default',
	},
} satisfies Meta<typeof ThemeSelect>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		size: 'mini',
	},
};
