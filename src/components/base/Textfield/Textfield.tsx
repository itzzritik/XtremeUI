import { KeyboardEvent, forwardRef, useId, useMemo } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import './textfield.scss';
import { TTextfieldProps } from './types';

export const Textfield = forwardRef<HTMLInputElement, TTextfieldProps>((props, ref) => {
	const {
		className,
		style,
		type = 'text',
		textarea,
		placeholder,
		autoComplete = 'off',
		active,
		autoFocus,
		icon,
		iconType = 'regular',
		value,
		onChange,
		onFocus,
		onBlur,
		onKeyUp,
		onKeyDown,
		onEnterKey,
	} = props;

	const generatedId = useId();
	const id = props.id ?? generatedId;

	const localIconName = useMemo(() => {
		if (textarea === true) return null;
		if (icon) return icon;
		if (type === 'number') return '23';
		if (type === 'search') return 'f002';
		if (type === 'password') return 'f30d';
	}, [textarea, icon, type]);

	const localPlaceholder = useMemo(() => {
		if (placeholder) return placeholder;
		if (type === 'number') return 'Enter a number';
		if (type === 'search') return 'Search';
		if (type === 'password') return 'Enter password';
		if (type === 'phone') return 'Enter phone number';
	}, [placeholder, type]);

	const localType = useMemo(() => {
		if (type === 'phone') return 'number';
		return type;
	}, [type]);

	const onLocalKeyUp = (event: KeyboardEvent) => {
		onKeyUp?.(event);
	};
	const onLocalKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') onEnterKey?.(event);
		onKeyDown?.(event);
	};

	const TextfieldClsx = clsx(
		'xtrTextfield',
		localIconName && 'withIcon',
		textarea && 'textarea',
		value && 'hasValue',
		(type === 'phone') && 'phone',
		active && 'active',
		className,
	);

	return (
		<div
			ref={ref}
			className={TextfieldClsx}
			role='textbox'
			style={style}
		>
			<label className='placeholder' htmlFor={id}>{localPlaceholder}</label>
			{localIconName && !textarea &&
				<Icon code={localIconName} type={iconType} />
			}
			{type === 'phone' &&
				<div className='dialCode'>
					<span style={{ backgroundImage: 'url(https://flagcdn.com/in.svg)' }} />
					<p>+91</p>
				</div>
			}
			{!textarea ?
				<input
					className='input'
					id={id}
					type={localType}
					autoFocus={autoFocus}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onKeyUp={onLocalKeyUp}
					onKeyDown={onLocalKeyDown}
					aria-label={localPlaceholder}
				/>
				:
				<textarea
					className='input'
					id={id}
					autoFocus={autoFocus}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onKeyUp={onLocalKeyUp}
					onKeyDown={onLocalKeyDown}
					aria-label={localPlaceholder}
				/>
			}
		</div>
	);
});

Textfield.displayName = 'Textfield';
