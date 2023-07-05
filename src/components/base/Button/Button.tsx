import { useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash/throttle';

import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './button.module.scss';

const throttleTime = 100;
let timeout: number;
const IconSize = {
	mini: 16,
	default: 24,
	large: 32,
};
export const Button = (props: IButtonProps) => {
	const {
		className,
		label,
		type = 'primary',
		size = 'default',
		iconName,
		iconFilled = false,
		iconPosition = 'left',
		onClick,
	} = props;
	const ref = useRef<HTMLButtonElement>(null);

	const ripple = throttle(() => {
		clearTimeout(timeout);
		ref.current?.classList.add(styles.clicked);
		timeout = window.setTimeout(() => {
			ref.current?.classList.remove(styles.clicked);
		}, 600 + throttleTime);
	}, throttleTime);

	const onButtonClick = () => {
		onClick?.();
		if (!type.includes(EButtonTypes.link)) ripple();
	};

	const IconComponent = () =>
		(iconName ? <Icon className={styles.icon} name={iconName} size={IconSize[size]} filled={iconFilled} /> : null);
	const ButtonClsx = clsx(
		styles.button,
		styles[`${type}Type`],
		styles[`${size}Size`],
		className,
	);

	return (
		<button className={ButtonClsx} ref={ref} onClick={onButtonClick}>
			{type.includes(EButtonTypes.link) && <ProgressBar className={styles.underline} />}
			{iconPosition === 'left' && <IconComponent />}
			{label && <span className={styles.label}>{label}</span>}
			{iconPosition === 'right' && <IconComponent />}
		</button>
	);
};
export interface IButtonProps {
	className?: string;
	label?: string;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	iconName?: string;
	iconFilled?: boolean;
	iconPosition?: 'left' | 'right';
	onClick: () => void;
}

enum EButtonTypes {
	primary = 'primary',
	primaryDanger = 'primaryDanger',
	secondary = 'secondary',
	secondaryDanger = 'secondaryDanger',
	link = 'link',
	linkDanger = 'linkDanger',
}
enum EButtonSize {
	mini = 'mini',
	default = 'default',
	large = 'large',
}
