import { forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './textfield.module.scss';
import { TTextfieldProps } from './types';

export const Textfield = forwardRef<HTMLInputElement, TTextfieldProps>((props: TTextfieldProps, ref) => {
	const {
		className,
		type = 'text',
		textarea,
		placeholder,
		autoComplete = 'off',
		autoFocus,
		icon,
		iconType,
		value,
		onChange,
	} = props;

	const localIconName = useMemo(() => {
		if (textarea === true) return null;
		if (icon) return icon;
		if (type === 'number') return '23';
		if (type === 'search') return 'f002';
		if (type === 'password') return 'f023';
	}, [textarea, icon, type]);

	const TextfieldClsx = clsx(
		styles.textfield,
		localIconName && styles.withIcon,
		textarea && styles.textarea,
		className,
	);

	return (
		<div className={TextfieldClsx} ref={ref}>
			{!!localIconName && !textarea && (
				<Icon className={styles.icon} code={localIconName} type={iconType} />
			)}
			{
				!textarea ?
					<input
						className={styles.input}
						type={type}
						autoFocus={autoFocus}
						placeholder={placeholder}
						autoComplete={autoComplete}
						value={value}
						onChange={onChange}
					/> :
					<textarea
						className={styles.input}
						autoFocus={autoFocus}
						placeholder={placeholder}
						autoComplete={autoComplete}
						value={value}
						onChange={onChange}
					/>
			}
		</div>
	);
});

Textfield.displayName = 'Textfield';
