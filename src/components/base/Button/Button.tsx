import { forwardRef } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import './button.scss';
import { EButtonTypes, TButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
	const {
		className,
		style = {},
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

	const IconComponent = () =>
		(
			icon
				? <Icon className='icon' code={icon} type={iconType} size={size} />
				: null
		);

	const ButtonClsx = clsx(
		'xtrButton',
		'shadowRipple',
		`${type}Type`,
		`${size}Size`,
		!label && 'iconOnly',
		loading && 'loading',
		className,
	);

	if (!label && !icon) return null;

	return (
		<button
			ref={ref}
			className={ButtonClsx}
			style={style}
			onClick={onClick}
			disabled={disabled}
			role='button'
		>
			{type.includes(EButtonTypes.link) && <ProgressBar className={'underline'} intermediate={loading} />}
			{iconPosition === 'left' && <IconComponent />}
			{label && <span className={'label'}>{label}</span>}
			{iconPosition === 'right' && <IconComponent />}
		</button>
	);
});

Button.displayName = 'Button';
