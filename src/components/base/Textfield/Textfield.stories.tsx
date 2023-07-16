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
		autoComplete: {
			defaultValue: { summary: 'off' },
		},
		textarea: {
			defaultValue: { summary: false },
		},
	},
	args: {
		type: 'text',
		placeholder: 'Enter text here',
		textarea: false,
		autoComplete: 'off',
	},
} satisfies Meta<typeof Textfield>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		placeholder: 'Enter text here',
	},
};

export const Textarea: StoryObj<typeof meta> = {
	args: {
		placeholder: 'Enter paragraph here',
		textarea: true,
	},
};
