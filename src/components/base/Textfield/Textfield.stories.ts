import { Textfield } from './Textfield';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Textfield',
	component: Textfield,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		type: {
			defaultValue: { summary: 'text' },
		},
		textarea: {
			defaultValue: { summary: false },
		},
	},
	args: {
		type: 'text',
		placeholder: 'Enter text here',
		textarea: false,
	},
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Enter text here',
	},
};

export const Textarea: Story = {
	args: {
		placeholder: 'Enter paragraph here',
		textarea: true,
	},
};
