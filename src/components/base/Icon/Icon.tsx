import { forwardRef } from 'react';

import clsx from 'clsx';

import { unicodeToString } from '#utils/index';

import './icon.scss';
import { EIconSize, IIconProps } from './types';

export const Icon = forwardRef<HTMLSpanElement, IIconProps>((props, ref) => {
	const { className, code, type = 'light', size = 'default', onClick } = props;

	const iconSize = `${typeof size === 'number' ? size : EIconSize[size]}px`;
	const IconClsx = clsx(
		'xtrIcon',
		'fontAwesome',
		type,
		onClick && 'iconButton',
		className,
	);

	return (
		<i
			ref={ref}
			className={IconClsx}
			style={{ ['--iconSize' as string]: iconSize }}
			data-content={unicodeToString(code)}
			role='img'
			onClick={onClick}
		/>
	);
});

Icon.displayName = 'Icon';
