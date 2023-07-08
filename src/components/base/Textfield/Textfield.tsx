import { ChangeEvent } from 'react';

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
		autoComplete,
		autoFocus,
		iconName,
		iconFilled = false,
		value,
		onChange,
	} = props;

	const TextfieldClsx = clsx(
		styles.textfield,
		iconName && styles.withIcon,
		className,
	);

	return (
		<div className={TextfieldClsx}>
			{!!iconName && !textarea && <Icon className={styles.icon} name={iconName} size={20} filled={iconFilled} />}
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

export interface ITextfieldProps {
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
}
