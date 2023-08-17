import { forwardRef } from 'react';

import clsx from 'clsx';

import { unicodeToString } from '#utils/index';

import styles from './icon.module.scss';
import { EIconSize, IIconProps } from './types';

export const Icon = forwardRef<HTMLSpanElement, IIconProps>((props, ref) => {
	const { className, code, type = 'light', size = 'default' } = props;

	const iconSize = `${typeof size === 'number' ? size : EIconSize[size]}px`;
	const IconClsx = clsx(
		styles.icon,
		type && styles[type],
		className,
	);

	return (
		<span
			ref={ref}
			className={IconClsx}
			style={{ ['--iconSize'as string]: iconSize }}
			data-content={unicodeToString(code)}
			role='icon'
		/>
	);
});

Icon.displayName = 'Icon';
