import { ReactNode } from 'react';

import { ActionMeta, GroupBase, MultiValue, PropsValue, SingleValue } from 'react-select';

import { EIconType } from '../Icon/types';

export type TSelectProps<T = string> = {
	className?: string,
	type?: keyof typeof ESelectTypes,
	noOptionsMessage?: (obj: { inputValue: string }) => ReactNode,
	icon?: string,
	iconType?: keyof typeof EIconType,
	placeholder?: string,
	clearable?: boolean,
	searchable?: boolean,
	disabled?: boolean,
	loading?: boolean,
	options: (T | GroupBase<T>)[],
	value?: PropsValue<T>,
	onChange?: (newValue: SingleValue<T> | MultiValue<T>, actionMeta: ActionMeta<T>) => void,
}

export enum ESelectTypes {
	single = 'single',
	multi = 'multi',
}
