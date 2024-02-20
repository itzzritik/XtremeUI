import { ReactNode } from 'react';

import { ActionMeta } from 'react-select';

import { EIconType } from '../Icon/types';

export type Option<T> = { label: string; value: T };
type TCommonProps<T> = {
	className?: string;
	noOptionsMessage?: (obj: { inputValue: string }) => ReactNode;
	icon?: string;
	iconType?: keyof typeof EIconType;
	placeholder?: string;
	clearable?: boolean;
	searchable?: boolean;
	disabled?: boolean;
	loading?: boolean;
	options: Option<T>[];
};
type SingleProps<T> = TCommonProps<T> & {
	multi?: false;
	value?: T;
	onChange: (value: T) => void;
};
type MultiProps<T> = TCommonProps<T> & {
	multi: true;
	value?: T[];
	onChange: (value: T[]) => void;
};

export type TSelectProps<T> = SingleProps<T> | MultiProps<T>;
