import clsx from 'clsx';
import DateTimePicker from 'react-datetime-picker';

import { Icon } from '#components/base/Icon/Icon';

import './datePicker.scss';
import { TDatePickerProps } from './types';

const DefaultDateFormat = {
	date: 'dd-MM-yyyy',
	dateRange: 'dd-MM-yyyy',
	time: 'h:mm:ss a',
	timeRange: 'h:mm:ss a',
	dateTime: 'dd-MM-yyyy h:mm:ss a',
	dateTimeRange: 'dd-MM-yyyy h:mm:ss a',
};

const DateComponentList = {
	date: DateTimePicker,
	dateRange: DateTimePicker,
	time: DateTimePicker,
	timeRange: DateTimePicker,
	dateTime: DateTimePicker,
	dateTimeRange: DateTimePicker,
};

export const DatePicker = (props: TDatePickerProps) => {
	const {
		className,
		type = 'date',
		format,
		dayPlaceholder = 'dd',
		monthPlaceholder = 'mm',
		yearPlaceholder = 'yyyy',
		hourPlaceholder = 'hh',
		minutePlaceholder = 'mm',
		secondPlaceholder = 'ss',
		placeholder = 'Select a Date',
		icon = 'f784',
		value,
		onChange,
	} = props;

	const DatePickerClsx = clsx(
		'xtrDatePicker',
		className,
	);

	const commonProps = {
		className: DatePickerClsx,
		calendarIcon: <Icon code={icon} type='regular' />,
		clearIcon: <Icon code='e59b' type='solid' />,
		format: format ?? DefaultDateFormat[type],
		dayPlaceholder,
		monthPlaceholder,
		yearPlaceholder,
		hourPlaceholder,
		minutePlaceholder,
		secondPlaceholder,
		placeholder,
		value,
		onChange,
	};

	const DateComponent = DateComponentList[type];

	return (
		<DateComponent data-testid={placeholder} {...commonProps} />
	);
};
