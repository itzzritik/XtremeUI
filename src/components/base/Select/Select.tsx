import { useMemo, useState } from 'react';

import clsx from 'clsx';
import XSelect, { ActionMeta, GroupBase, MultiValue, OptionsOrGroups, PropsValue, SingleValue } from 'react-select';

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
		iconType = 'regular',
		clearable = true,
		searchable = true,
		disabled = false,
		loading = false,
		options,
		value,
		onChange,
	} = props;

	const [open, setOpen] = useState(false);
	const localValue = useMemo(() => options.find((option) => option.value === value) as unknown as PropsValue<T> ,[value])

	const SelectClsx = clsx(
		'xtrSelectWrapper',
		multi ? 'multi' : 'single',
		icon && 'withIcon',
		!!value && 'withValue',
		open && 'open',
		className,
	);

	const onChangeHandler = (newValue: MultiValue<T> | SingleValue<T>, actionMeta: ActionMeta<T>) => {
		const val = multi
			? (newValue as Array<Option<T>>)?.map(({ value }) => value)
			: (newValue as unknown as Option<T>)?.value;

		onChange(val as any);
	};

	return (
		<div className={SelectClsx}>
			<XSelect
				className='xtrSelect'
				classNamePrefix='xtrSelect'
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
				options={options as unknown as OptionsOrGroups<T, GroupBase<T>>}
				value={localValue}
				onChange={onChangeHandler}
			/>
			{placeholder && !multi && <p className='placeholder'>{placeholder}</p>}
			{icon && <Icon className='xtrSelectIcon' code={icon} type={iconType} />}
		</div>
	);
}
