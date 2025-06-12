import { ThemeSwitch } from './ThemeSwitch';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Layouts/Theme Switch',
	component: ThemeSwitch,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		size: { defaultValue: { summary: 'default' } },
		type: { defaultValue: { summary: 'secondary' } },
		iconType: { defaultValue: { summary: 'solid' } },
	},
	args: {
		size: 'default',
		type: 'secondary',
		iconType: 'solid',
	},
} satisfies Meta<typeof ThemeSwitch>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		size: 'mini',
	},
};
