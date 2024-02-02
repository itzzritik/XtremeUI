import XDateRangePicker from '@wojtekmaj/react-daterange-picker';
import clsx from 'clsx';
import XDatePicker from 'react-date-picker';
import XDateTimePicker from 'react-datetime-picker';
import XTimePicker from 'react-time-picker';

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
	date: XDatePicker,
	dateRange: XDateRangePicker,
	time: XTimePicker,
	timeRange: XDatePicker,
	dateTime: XDateTimePicker,
	dateTimeRange: XDateTimePicker,
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
		value,
		onChange,
	} = props;

	const DatePickerClsx = clsx(
		'xtrDatePicker',
		className,
	);

	const commonProps = {
		className: DatePickerClsx,
		calendarIcon: <Icon code='f784' type='solid' />,
		clearIcon: <Icon code='f00d' type='solid' />,
		format: format ?? DefaultDateFormat[type],
		dayPlaceholder,
		monthPlaceholder,
		yearPlaceholder,
		hourPlaceholder,
		minutePlaceholder,
		secondPlaceholder,
		value,
		onChange,
	};

	const DateComponent = DateComponentList[type];

	return (
		<DateComponent {...commonProps} />
	);
};
