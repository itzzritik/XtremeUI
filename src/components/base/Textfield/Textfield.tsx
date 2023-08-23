import { forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './textfield.module.scss';
import { TTextfieldProps } from './types';

export const Textfield = forwardRef<HTMLInputElement, TTextfieldProps>((props, ref) => {
	const {
		className,
		type = 'text',
		textarea,
		placeholder,
		autoComplete = 'off',
		autoFocus,
		icon,
		iconType = 'regular',
		value,
		onChange,
	} = props;

	const localIconName = useMemo(() => {
		if (textarea === true) return null;
		if (icon) return icon;
		if (type === 'number') return '23';
		if (type === 'search') return 'f002';
		if (type === 'password') return 'f30d';
	}, [textarea, icon, type]);

	const TextfieldClsx = clsx(
		styles.textfield,
		localIconName && styles.withIcon,
		textarea && styles.textarea,
		value && styles.hasValue,
		className,
	);

	return (
		<div
			ref={ref}
			className={TextfieldClsx}
			role='textbox'
		>
			{!!localIconName && !textarea && (
				<Icon className={styles.icon} code={localIconName} type={iconType} />
			)}
			{
				!textarea ?
					<input
						className={styles.input}
						type={type}
						autoFocus={autoFocus}
						autoComplete={autoComplete}
						value={value}
						onChange={onChange}
					/> :
					<textarea
						className={styles.input}
						autoFocus={autoFocus}
						autoComplete={autoComplete}
						value={value}
						onChange={onChange}
					/>
			}
			<span className={styles.placeholder}>{placeholder}</span>
		</div>
	);
});

Textfield.displayName = 'Textfield';
