import { useEffect, useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash/throttle';

import { setCssProperty } from '#utils/helper/domHelper';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './button.module.scss';

const duration = 600;
const throttleTime = 100;
let timeout: number;

export const Button = (props: IButtonProps) => {
	const { className, label, type, onClick } = props;
	const ref = useRef<HTMLButtonElement>(null);

	const ripple = throttle(() => {
		clearTimeout(timeout);
		ref.current?.classList.add(styles.clicked);
		timeout = window.setTimeout(() => {
			ref.current?.classList.remove(styles.clicked);
		}, duration + throttleTime);
	}, throttleTime);

	const onButtonClick = () => {
		onClick?.();
		if (!type.includes(EButtonTypes.link)) ripple();
	};

	const ButtonClsx = clsx(
		styles.button,
		styles[`${type}Type`],
		className,
	);

	useEffect(() => {
		setCssProperty('--duration', `${duration}ms`, ref);
	}, [ref]);

	return (
		<button className={ButtonClsx} ref={ref} onClick={onButtonClick}>
			<span className={styles.label}>{label}</span>
			{type.includes(EButtonTypes.link) && <ProgressBar className={styles.underline} />}
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
	primary = 'primary',
	primaryDanger = 'primaryDanger',
	secondary = 'secondary',
	secondaryDanger = 'secondaryDanger',
	link = 'link',
	linkDanger = 'linkDanger',
}
