type DateValueShort = string | Date | null;
export type TDateValue = DateValueShort | [DateValueShort, DateValueShort];

export type TDatePickerProps = {
	className?: string,
	type?: keyof typeof EDatePickerTypes,
	format?: string,
	dayPlaceholder?: string,
	monthPlaceholder?: string,
	yearPlaceholder?: string,
	hourPlaceholder?: string,
	minutePlaceholder?: string,
	secondPlaceholder?: string,
	placeholder?: string,
	icon?: string,
	value?: TDateValue,
	onChange: (value: TDateValue) => void
}

export enum EDatePickerTypes {
	date = 'date',
	dateRange = 'dateRange',
	time = 'time',
	timeRange = 'timeRange',
	dateTime = 'dateTime',
	dateTimeRange = 'dateTimeRange',
}
