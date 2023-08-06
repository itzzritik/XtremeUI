import { forwardRef } from 'react';

import clsx from 'clsx';

import { unicodeToString } from '#utils/index';

import styles from './icon.module.scss';
import { EIconSize, IIconProps } from './types';

export const Icon = forwardRef<HTMLSpanElement, IIconProps>((props: IIconProps, ref) => {
	const { className, code, type = 'light', size } = props;

	const iconSize = size ? `${typeof size === 'number' ? size : EIconSize[size]}px` : undefined;

	const IconClsx = clsx(
		styles.icon,
		type && styles[type],
		className,
	);

	return (
		<span className={IconClsx} ref={ref} style={{ ['--iconSize'as string]: iconSize }} data-content={unicodeToString(code)} />
	);
});

Icon.displayName = 'Icon';
