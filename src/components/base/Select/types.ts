import { ReactNode } from 'react';

import { EIconType } from '../Icon/types';

export enum ESelectSize {
	mini = 'mini',
	default = 'default',
	large = 'large',
}

export type Option<T> = { label: string; value: T };
type TCommonProps<T> = {
	className?: string;
	noOptionsMessage?: (obj: { inputValue: string }) => ReactNode;
	size?: keyof typeof ESelectSize;
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

// type MultiProps<T> = TCommonProps<T> & {
// 	multi: true;
// 	value?: T[];
// 	onChange: (value: T[]) => void;
// };

export type TSelectProps<T> = SingleProps<T>;

// export type TSelectProps<T> = SingleProps<T> | MultiProps<T>;
