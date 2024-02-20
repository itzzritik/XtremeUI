import { useState } from 'react';

import { Select } from './Select';
import { TSelectProps } from './types';

import type { Meta, StoryObj } from '@storybook/react';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'caramel', label: 'Caramel' },
	{ value: 'mint', label: 'Mint' },
	{ value: 'blueberry', label: 'Blueberry' },
	{ value: 'cookies-n-cream', label: 'Cookies and Cream' },
	{ value: 'peach', label: 'Peach' },
	{ value: 'raspberry', label: 'Raspberry' },
	{ value: 'lemon', label: 'Lemon' },
	{ value: 'watermelon', label: 'Watermelon' },
	{ value: 'mango', label: 'Mango' },
	{ value: 'pistachio', label: 'Pistachio' },
	{ value: 'butterscotch', label: 'Butterscotch' },
	{ value: 'coffee', label: 'Coffee' },
	{ value: 'hazelnut', label: 'Hazelnut' },
	{ value: 'blackberry', label: 'Blackberry' },
	{ value: 'toffee', label: 'Toffee' },
];

function SelectComponent <TMulti extends boolean, TValue> (props: TSelectProps<TMulti, TValue>) {
	const [value, setValue] = useState<TValue>();
	return (
		<Select {...props} multi={false} value={value} options={options} onChange={(v) => setValue(v)} />
	);
}

const meta = {
	title: 'Components/Select',
	component: SelectComponent,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
	},
	args: {
		options,
		clearable: true,
		searchable: true,
		disabled: false,
		loading: false,
	},
} satisfies Meta<typeof Select>;

export default meta;

export const Single: StoryObj<typeof meta> = {
	args: {
		icon: 'f002',
	},
};

export const Multiple: StoryObj<typeof meta> = {
	args: {
		type: 'multi',
		icon: 'f002',
	},
};
