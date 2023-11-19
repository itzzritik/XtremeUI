import { KeyboardEvent, forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './textfield.module.scss';
import { TTextfieldProps } from './types';

export const Textfield = forwardRef<HTMLInputElement, TTextfieldProps>((props, ref) => {
	const {
		className,
		style,
		type = 'text',
		textarea,
		placeholder,
		autoComplete = 'off',
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
		styles.textfield,
		localIconName && styles.withIcon,
		textarea && styles.textarea,
		value && styles.hasValue,
		type === 'phone' && styles.phone,
		className,
	);

	return (
		<div
			ref={ref}
			className={TextfieldClsx}
			role='textbox'
			style={style}
		>
			{localIconName && !textarea &&
				<Icon className={styles.icon} code={localIconName} type={iconType} />
			}
			{type === 'phone' &&
				<div className={styles.dialCode}>
					<span style={{ backgroundImage: 'url(https://flagcdn.com/in.svg)' }} />
					<p>+91</p>
				</div>
			}
			{!textarea ?
				<input
					className={styles.input}
					type={localType}
					autoFocus={autoFocus}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onKeyUp={onLocalKeyUp}
					onKeyDown={onLocalKeyDown}
				/> :
				<textarea
					className={styles.input}
					autoFocus={autoFocus}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onKeyUp={onLocalKeyUp}
					onKeyDown={onLocalKeyDown}
				/>
			}
			<span className={styles.placeholder}>{localPlaceholder}</span>
		</div>
	);
});

Textfield.displayName = 'Textfield';
