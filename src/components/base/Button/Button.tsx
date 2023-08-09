import { MouseEvent, forwardRef, useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash/throttle';

import { mergeRefs } from '#utils/function/mergeRefs';

import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './button.module.scss';
import { EButtonTypes, TButtonProps } from './types';

const throttleTime = 100;
let timeout: number;

export const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
	const {
		className,
		label,
		type = 'primary',
		size = 'default',
		disabled = false,
		loading = false,
		icon,
		iconType,
		iconPosition = 'left',
		onClick,
	} = props;
	const innerRef = useRef<HTMLButtonElement>(null);

	const ripple = throttle(() => {
		clearTimeout(timeout);
		innerRef.current?.classList.add(styles.clicked);
		timeout = window.setTimeout(() => {
			innerRef.current?.classList.remove(styles.clicked);
		}, 600 + throttleTime);
	}, throttleTime);

	const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		onClick?.(e);
		if (!type.includes(EButtonTypes.link)) ripple();
	};

	const IconComponent = () =>
		(
			icon
				? <Icon className={styles.icon} code={icon} type={iconType} size={size} />
				: null
		);

	const ButtonClsx = clsx(
		styles.button,
		styles[`${type}Type`],
		styles[`${size}Size`],
		!label && styles.iconOnly,
		loading && styles.loading,
		className,
	);

	if (!label && !icon) return null;

	return (
		<button className={ButtonClsx} ref={mergeRefs([innerRef, ref])} onClick={onButtonClick} disabled={disabled}>
			{type.includes(EButtonTypes.link) && <ProgressBar className={styles.underline} intermediate={loading} />}
			{iconPosition === 'left' && <IconComponent />}
			{label && <span className={styles.label}>{label}</span>}
			{iconPosition === 'right' && <IconComponent />}
		</button>
	);
});

Button.displayName = 'Button';
