import clsx from 'clsx';

import styles from './progressbar.module.scss';

export const ProgressBar = (props: IProgressBarProps) => {
	const { className, progress } = props;

	const ProgressClsx = clsx(
		styles.progressBar,
		className,
	);

	return (
		<div className={ProgressClsx}>
			<span className={styles.progress} style={{ width: `${progress && Math.min(Math.max(progress, 0), 100)}%` }} />
		</div>
	);
};

export interface IProgressBarProps {
	className?: string;
	progress?: number;
}
