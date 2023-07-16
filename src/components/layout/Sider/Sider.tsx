import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './sider.module.scss';
import { TSiderProps } from './types';

export const Sider = forwardRef<HTMLDivElement, TSiderProps>((props: TSiderProps, ref) => {
	const {
		className,
		children,
		leftSider,
		showMiniLeftSider = true,
		rightSider,
		showMiniRightSider = false,
		open = 'closed',

		// setOpen,
	} = props;

	const SiderClsx = clsx(
		styles.sider,
		open === 'left' && styles.leftOpen,
		showMiniLeftSider && styles.miniLeftSider,
		open === 'right' && styles.rightOpen,
		showMiniRightSider && styles.miniRightSider,
		className,
	);

	return (
		<section className={SiderClsx} ref={ref} role='sider'>
			<div className={styles.leftSiderContainer}>
				{leftSider}
			</div>
			<div className={styles.rightSiderContainer}>
				{rightSider}
			</div>
			<div className={styles.content}>
				{children}
			</div>
		</section>
	);
});

Sider.displayName = 'Sider';
