import { ChangeEvent, useMemo } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './textfield.module.scss';
import { ETextfieldAutoComplete } from './types';

export const Textfield = (props: ITextfieldProps) => {
	const {
		className,
		type = 'text',
		textarea,
		placeholder,
		autoComplete = 'off',
		autoFocus,
		iconName,
		iconFilled = false,
		value,
		onChange,
	} = props;

	const localIconName = useMemo(() => {
		if (textarea === true) return null;
		if (iconName) return iconName;
		if (type === 'number') return 'numbers';
		if (type === 'search') return 'search';
		if (type === 'password') return 'shield';
	}, [textarea, iconName, type]);

	const TextfieldClsx = clsx(
		styles.textfield,
		localIconName && styles.withIcon,
		textarea && styles.textarea,
		className,
	);

	return (
		<div className={TextfieldClsx}>
			{!!localIconName && !textarea && (
				<Icon
					className={clsx(styles.icon, iconFilled && styles.filled)}
					name={localIconName}
					size={20}
					filled={iconFilled}
				/>
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
};

export type ITextfieldProps = {
	className?: string;
	type?: keyof typeof ETextfieldType;
	textarea?: boolean;
	placeholder: string;
	autoFocus?: boolean;
	autoComplete?: keyof typeof ETextfieldAutoComplete;
	iconName?: string;
	iconFilled?: boolean;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

enum ETextfieldType {
	text = 'text',
	number = 'number',
	password = 'password',
	search = 'search',
}
