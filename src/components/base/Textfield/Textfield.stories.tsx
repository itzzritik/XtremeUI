import { useState } from 'react';

import { Textfield } from './Textfield';
import { TTextfieldProps } from './types';

import type { Meta, StoryObj } from '@storybook/react';

const TextFieldComponent = (
	props: Omit<TTextfieldProps, 'value' | 'setValue'>,
) => {
	const [value, setValue] = useState<string>();
	return (
		<Textfield
			{...props}
			value={value}
			onChange={(e) => setValue(e?.target?.value)}
		/>
	);
};

const meta = {
	title: 'Components/Textfield',
	component: TextFieldComponent,
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
		textarea: false,
		placeholder: 'Enter a text',
		autoComplete: 'off',
	},
} satisfies Meta<typeof Textfield>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {},
};

export const Textarea: StoryObj<typeof meta> = {
	args: {
		textarea: true,
	},
};
