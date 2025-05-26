import { useId, useMemo, useState } from 'react';

import clsx from 'clsx';
import XSelect, {
	GroupBase,
	MultiValue,
	OptionsOrGroups,
	PropsValue,
	SingleValue,
} from 'react-select';

import { isEqual } from '#utils/function/common';

import { Icon } from '../Icon/Icon';

import './select.scss';
import { Option, TSelectProps } from './types';

export function Select<T> (props: TSelectProps<T>) {
	const {
		className,
		multi = false,
		placeholder = 'Select an option',
		noOptionsMessage,
		icon,
		size = 'default',
		iconType = 'regular',
		clearable = true,
		searchable = true,
		disabled = false,
		loading = false,
		options,
		value,
		onChange,
	} = props;

	const id = useId();
	const [open, setOpen] = useState(false);

	const localValue = useMemo(() => {
		if (multi) {
			const vals = (value ?? []) as T[];
			return options.filter((option) => vals.some((v) => isEqual(option.value, v)));
		} else {
			return options.find((option) => isEqual(option.value, value)) || null;
		}
	}, [multi, options, value]);

	const SelectClsx = clsx(
		'xtrSelectWrapper',
		size && `${size}Size`,
		multi ? 'multi' : 'single',
		icon && 'withIcon',
		!!value && 'withValue',
		open && 'open',
		!searchable && 'noSearch',
		className,
	);

	const onChangeHandler = (
		newValue: MultiValue<Option<T>> | SingleValue<Option<T>> | null,
	) => {
		if (multi) {
			const vals = (newValue as MultiValue<Option<T>>)?.map((opt) => opt.value) ?? [];
			(onChange as (value: T[]) => void)(vals);
		} else {
			const val = (newValue as SingleValue<Option<T>>)?.value ?? null;
			(onChange as (value: T | null) => void)(val);
		}
	};

	return (
		<div className={SelectClsx}>
			<XSelect
				className='xtrSelect'
				classNamePrefix='xtrSelect'
				id={id}
				isMulti={multi}
				menuIsOpen={open}
				onMenuOpen={() => setOpen(true)}
				onMenuClose={() => setOpen(false)}
				noOptionsMessage={noOptionsMessage}
				placeholder={placeholder}
				isClearable={clearable}
				isSearchable={searchable}
				isDisabled={disabled}
				isLoading={loading}
				options={options as unknown as OptionsOrGroups<Option<T>, GroupBase<Option<T>>>}
				value={localValue as unknown as PropsValue<Option<T>>}
				onChange={onChangeHandler}
			/>
			{placeholder && !multi && <label className='placeholder' htmlFor={id}>{placeholder}</label>}
			{icon && <Icon className='xtrSelectIcon' code={icon} type={iconType} />}
		</div>
	);
}
