import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './icon.module.scss';
import { EIconSize, IIconProps } from './types';

export const Icon = forwardRef<HTMLSpanElement, IIconProps>((props: IIconProps, ref) => {
	const { className, code, type = 'light', size } = props;

	const fontSize = size ? `${typeof size === 'number' ? size : EIconSize[size]}px` : undefined;

	const IconClsx = clsx(
		styles.icon,
		'fontAwesome',
		className,
		type,
	);

	return (
		<span className={IconClsx} ref={ref} style={{ fontSize }} data-content={code} />
	);
});

Icon.displayName = 'Icon';
