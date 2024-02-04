import { useState } from 'react';

import clsx from 'clsx';
import XSelect from 'react-select';

import { Icon } from '../Icon/Icon';

import './select.scss';
import { TSelectProps } from './types';

export function Select<TValue = string> (props: TSelectProps<TValue>) {
	const {
		className,
		type = 'single',
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

	console.log(value);

	const [open, setOpen] = useState(false);

	const SelectClsx = clsx(
		'xtrSelectWrapper',
		type,
		icon && 'withIcon',
		!!value && 'withValue',
		open && 'open',
		className,
	);

	return (
		<div className={SelectClsx}>
			<XSelect
				className='xtrSelect'
				classNamePrefix='xtrSelect'
				isMulti={type === 'multi'}
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
				onChange={onChange}
			/>
			{placeholder && type === 'single' && <p className='placeholder'>{placeholder}</p>}
			{icon && <Icon className='xtrSelectIcon' code={icon} type={iconType} />}
		</div>
	);
}
