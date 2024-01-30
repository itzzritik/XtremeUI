import clsx from 'clsx';
import DateTimePicker from 'react-datetime-picker';

import './datePicker.scss';
import { TDatePickerProps } from './types';

export const DatePicker = (props: TDatePickerProps) => {
	const { className, value, onChange } = props;

	const DatePickerClsx = clsx(
		'xtrDatePicker',
		className,
	);

	return (
		<DateTimePicker
			className={DatePickerClsx}
			value={value}
			onChange={onChange}
		/>
	);
};
