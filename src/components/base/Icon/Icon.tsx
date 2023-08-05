import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './icon.module.scss';
import { EIconSize, IIconProps } from './types';

export const Icon = forwardRef<HTMLSpanElement, IIconProps>((props: IIconProps, ref) => {
	const { className, code, type = 'light', size } = props;

	const iconSize = size ? `${typeof size === 'number' ? size : EIconSize[size]}px` : undefined;

	const IconClsx = clsx(
		styles.icon,
		className,
		type && styles[type],
	);

	return (
		<span
			className={IconClsx}
			ref={ref}
			style={{ ['--iconSize'as string]: iconSize }}
			data-content={String.fromCodePoint(parseInt(`0x${code}`, 16))}
		/>
	);
});

Icon.displayName = 'Icon';
