import { ProgressBar } from './ProgressBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Progress Bar',
	component: ProgressBar,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
		intermediate: {
			defaultValue: { summary: false },
		},
	},
	args: {
		progress: 50,
		intermediate: false,
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		progress: 50,
	},
};
export const Intermediate: StoryObj<typeof meta> = {
	args: {
		progress: 50,
		intermediate: true,
	},
};
