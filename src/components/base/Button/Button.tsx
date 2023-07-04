import { useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash/throttle';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './button.module.scss';

const throttleTime = 100;
let timeout: number;

export const Button = (props: IButtonProps) => {
	const { className, label, type = 'primary', size = 'default', onClick } = props;
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

	const ButtonClsx = clsx(
		styles.button,
		styles[`${type}Type`],
		styles[`${size}Size`],
		className,
	);

	return (
		<button className={ButtonClsx} ref={ref} onClick={onButtonClick}>
			<span className={styles.label}>{label}</span>
			{type.includes(EButtonTypes.link) && <ProgressBar className={styles.underline} />}
		</button>
	);
};
export interface IButtonProps {
	className?: string;
	label?: string;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
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
