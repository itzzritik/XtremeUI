import clsx from 'clsx';

import styles from './progressbar.module.scss';

export const ProgressBar = (props: IProgressBarProps) => {
	const { className, progress = 100, intermediate = false } = props;

	const progressWidth = intermediate ? 150 : Math.min(Math.max(progress, 0), 100);

	const ProgressClsx = clsx(
		styles.progressBar,
		intermediate && styles.intermediate,
		className,
	);

	return (
		<div className={ProgressClsx}>
			<span className={styles.progress} style={{ width: `${progressWidth}%` }} />
		</div>
	);
};

export interface IProgressBarProps {
	className?: string;
	progress?: number;
	intermediate?: boolean;
}
