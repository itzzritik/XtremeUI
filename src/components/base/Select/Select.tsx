import clsx from 'clsx';
import XSelect from 'react-select';

import './select.scss';
import { TSelectProps } from './types';

export function Select <TValue = string> (props: TSelectProps<TValue>) {
	const { className,
		type = 'single',
		placeholder = 'Select an option',
		noOptionsMessage,
		clearable = true,
		searchable = true,
		disabled = false,
		loading = false,
		options, value, onChange } = props;

	const SelectClsx = clsx(
		'xtrSelect',
		className,
	);

	return (
		<XSelect
			className={SelectClsx}
			classNamePrefix='xtrSelect'
			isMulti={type === 'multi'}
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
	);
}
