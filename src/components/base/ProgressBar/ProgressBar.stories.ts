import { ProgressBar } from './ProgressBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Progress Bar',
	component: ProgressBar,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
	},
	args: {
		progress: 50,
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		progress: 50,
	},
};
