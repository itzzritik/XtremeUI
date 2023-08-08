import { Spinner } from './Spinner';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		size: {
			control: { type: 'range', min: 32, max: 512, step: 16 },
			defaultValue: { summary: 64 },
		},
	},
	args: {

	},
} satisfies Meta<typeof Spinner>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
	},
};
