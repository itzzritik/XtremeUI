import { forwardRef } from 'react';

import clsx from 'clsx';

import { useXData } from '#components/context/useContext';

import styles from './sider.module.scss';
import { TSiderProps } from './types';

export const Sider = forwardRef<HTMLDivElement, TSiderProps>((props, ref) => {
	const {
		className,
		children,
		leftSider,
		showMiniLeftSider = true,
		rightSider,
		showMiniRightSider = false,
	} = props;

	const { siderMode } = useXData();

	const SiderClsx = clsx(
		styles.sider,
		siderMode === 'left' && styles.leftOpen,
		showMiniLeftSider && styles.miniLeftSider,
		siderMode === 'right' && styles.rightOpen,
		showMiniRightSider && styles.miniRightSider,
		className,
	);

	return (
		<section
			ref={ref}
			className={SiderClsx}
			role='sider'
		>
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
