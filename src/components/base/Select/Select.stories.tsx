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

function SelectComponent<TValue> (props: TSelectProps<TValue>) {
	const [value, setValue] = useState<TValue>();
	return <Select {...props} value={value} onChange={setValue} />;
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

export const Default: StoryObj<typeof meta> = {
	args: {
		options,
		onChange: (value) => console.log('Selected value:', value),
	},
};
export const DefaultWithIcon: StoryObj<typeof meta> = {
	args: {
		icon: 'f002',
		options,
		onChange: (value) => console.log('Selected value:', value),
	},
};

export const Mini: StoryObj<typeof meta> = {
	args: {
		size: 'mini',
		options,
		onChange: (value) => console.log('Selected value:', value),
	},
};

export const MiniWithIcon: StoryObj<typeof meta> = {
	args: {
		size: 'mini',
		icon: 'f55d',
		searchable: false,
		options,
		onChange: (value) => console.log('Selected value:', value),
	},
};

export const Large: StoryObj<typeof meta> = {
	args: {
		size: 'large',
		options,
		onChange: (value) => console.log('Selected value:', value),
	},
};

export const LargeWithIcon: StoryObj<typeof meta> = {
	args: {
		size: 'large',
		icon: 'f55d',
		searchable: false,
		options,
		onChange: (value) => console.log('Selected value:', value),
	},
};
