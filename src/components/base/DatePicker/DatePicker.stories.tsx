import { useState } from 'react';

import { DatePicker } from './DatePicker';
import { TDatePickerProps } from './types';

import type { Meta, StoryObj } from '@storybook/react';

const DatePickerComponent = (props: Omit<TDatePickerProps, 'value' | 'onChange'>) => {
	const [date, setDate] = useState();
	return (
		<DatePicker {...props} value={date} onChange={setDate} />
	);
};

const meta = {
	title: 'Components/DatePicker',
	component: DatePickerComponent,
	tags: [],
	argTypes: {
		className: { control: false },
	},
	args: {
	},
} satisfies Meta<typeof DatePicker>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {

	},
};
