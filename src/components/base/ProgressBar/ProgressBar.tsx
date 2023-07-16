import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './progressbar.module.scss';
import { IProgressBarProps } from './types';

export const ProgressBar = forwardRef<HTMLDivElement, IProgressBarProps>((props: IProgressBarProps, ref) => {
	const { className, progress = 100, intermediate = false } = props;

	const progressWidth = intermediate ? 150 : Math.min(Math.max(progress, 0), 100);

	const ProgressClsx = clsx(
		styles.progressBar,
		intermediate && styles.intermediate,
		className,
	);

	return (
		<div className={ProgressClsx} ref={ref}>
			<span className={styles.progress} style={{ width: `${progressWidth}%` }} />
		</div>
	);
});

ProgressBar.displayName = 'ProgressBar';
