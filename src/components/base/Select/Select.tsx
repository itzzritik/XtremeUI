import { useState } from 'react';

import clsx from 'clsx';
import XSelect, { ActionMeta, MultiValue, SingleValue } from 'react-select';

import { Icon } from '../Icon/Icon';

import './select.scss';
import { TSelectProps } from './types';

export function Select<TMulti extends boolean, TValue> (props: TSelectProps<TMulti, TValue>) {
	const {
		className,
		multi,
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

	const SelectClsx = clsx(
		'xtrSelectWrapper',
		multi ? 'multi' : 'single',
		icon && 'withIcon',
		!!value && 'withValue',
		open && 'open',
		className,
	);

	const onChangeHandler = (newValue: MultiValue<TValue> | SingleValue<TValue>, actionMeta: ActionMeta<TValue>) => {
		if (!newValue) return;
		const val = multi
			? newValue.map(({ value }) => value)
			: newValue.value;

		onChange(val, actionMeta);
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
				options={options}
				value={value}
				onChange={onChangeHandler}
			/>
			{placeholder && !multi && <p className='placeholder'>{placeholder}</p>}
			{icon && <Icon className='xtrSelectIcon' code={icon} type={iconType} />}
		</div>
	);
}
