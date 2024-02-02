import { ReactNode } from 'react';

import { ActionMeta, GroupBase, MultiValue, OptionsOrGroups, SingleValue } from 'react-select';

export type TSelectProps<T = string> = {
	className?: string,
	type?: keyof typeof ESelectTypes,
	noOptionsMessage?: (obj: { inputValue: string }) => ReactNode,
	placeholder?: string,
	clearable?: boolean,
	searchable?: boolean,
	disabled?: boolean,
	loading?: boolean,
	options: OptionsOrGroups<T, GroupBase<T>>,
	value?: T,
	onChange?: (newValue: SingleValue<T> | MultiValue<T>, actionMeta: ActionMeta<T>) => void,
}

export enum ESelectTypes {
	single = 'single',
	multi = 'multi',
}
