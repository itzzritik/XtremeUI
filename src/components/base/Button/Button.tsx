import { MouseEvent, useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash/throttle';

import { Icon, IconSize } from '../Icon/Icon';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './button.module.scss';

const throttleTime = 100;
let timeout: number;

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

	const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		onClick?.(e);
		if (!type.includes(EButtonTypes.link)) ripple();
	};

	const IconComponent = () =>
		(
			iconName
				? <Icon className={clsx(styles.icon, iconFilled && styles.filled)} name={iconName} size={IconSize[size]} />
				: null
		);

	const ButtonClsx = clsx(
		styles.button,
		styles[`${type}Type`],
		styles[`${size}Size`],
		!label && styles.iconOnly,
		className,
	);

	if (!label && !iconName) return null;

	return (
		<button className={ButtonClsx} ref={ref} onClick={onButtonClick}>
			{type.includes(EButtonTypes.link) && <ProgressBar className={styles.underline} />}
			{iconPosition === 'left' && <IconComponent />}
			{label && <span className={styles.label}>{label}</span>}
			{iconPosition === 'right' && <IconComponent />}
		</button>
	);
};
export type IButtonProps = ({
	label: string;
	iconName?: string;
} | {
	label?: string;
	iconName: string;
}) & {
	className?: string;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	iconFilled?: boolean;
	iconPosition?: 'left' | 'right';
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
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
