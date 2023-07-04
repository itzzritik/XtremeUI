import { useEffect, useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash/throttle';

import { setCssProperty } from '#utils/helper/domHelper';

import styles from './button.module.scss';

const duration = 600;
export const Button = (props: IButtonProps) => {
	const { className, label, type, onClick } = props;
	const ref = useRef<HTMLButtonElement>(null);

	const ripple = throttle(() => {
		ref.current?.classList.add(styles.clicked);
		setTimeout(() => {
			ref.current?.classList.remove(styles.clicked);
		}, duration + 100);
	}, duration + 100);

	const onButtonClick = () => {
		onClick?.();
		ripple();
	};

	const ButtonClsx = clsx(
		styles.button,
		styles[`${type}Type`],
		className,
	);

	useEffect(() => {
		console.log('ref changed');
		setCssProperty('--duration', `${duration}ms`, ref);
	}, [ref]);

	return (
		<button className={ButtonClsx} ref={ref} onClick={onButtonClick}>
			<span className={styles.label}>{label}</span>
		</button>
	);
};
export interface IButtonProps {
	className?: string;
	label: string;
	type: keyof typeof EButtonTypes;
	onClick: () => void;
}

enum EButtonTypes {
	'primary',
	'primary-danger',
	'secondary',
	'secondary-danger',
	'link',
	'link-danger',
}
