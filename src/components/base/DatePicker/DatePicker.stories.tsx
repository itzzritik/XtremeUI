import { useState } from 'react';

import { DatePicker } from './DatePicker';
import { TDatePickerProps, TDateValue } from './types';

import type { Meta, StoryObj } from '@storybook/react';

const DatePickerComponent = (props: Omit<TDatePickerProps, 'value' | 'onChange'>) => {
	const [date, setDate] = useState<TDateValue>();
	return (
		<DatePicker {...props} value={date} onChange={setDate} />
	);
};

const meta = {
	title: 'Components/DatePicker',
	component: DatePickerComponent,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		type: {
			defaultValue: { summary: 'date' },
		},
	},
	args: {
	},
} satisfies Meta<typeof DatePicker>;

export default meta;

export const Date: StoryObj<typeof meta> = {
	args: {
		type: 'date',
	},
};

export const Time: StoryObj<typeof meta> = {
	args: {
		type: 'time',
	},
};

export const DateTime: StoryObj<typeof meta> = {
	args: {
		type: 'dateTime',
	},
};
