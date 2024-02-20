import { ReactNode } from 'react';

import { ActionMeta, Options } from 'react-select';

import { EIconType } from '../Icon/types';

type TCommonProps<TValue = string> = {
	className?: string,
	noOptionsMessage?: (obj: { inputValue: string }) => ReactNode,
	icon?: string,
	iconType?: keyof typeof EIconType,
	placeholder?: string,
	clearable?: boolean,
	searchable?: boolean,
	disabled?: boolean,
	loading?: boolean,
	options: Options<TValue>,
}

export type TSelectProps<TMulti extends boolean, TValue> = TMulti extends true
  ? {
	multi: true;
	value?: TValue[],
	onChange: (value: TValue[], actionMeta: ActionMeta<TValue>) => void,
} & TCommonProps<TValue>
  : {
	multi: false;
	value?: TValue
	onChange: (value: TValue, actionMeta: ActionMeta<TValue>) => void,
} & TCommonProps<TValue>;
