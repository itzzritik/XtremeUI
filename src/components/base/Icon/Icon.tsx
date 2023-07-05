import clsx from 'clsx';

import styles from './icon.module.scss';

export const Icon = (props: IIconProps) => {
	const { className, name, size, filled } = props;

	const IconClsx = clsx(
		styles.icon,
		className,
		filled && styles.filled,
	);

	return (
		<span className={IconClsx}
			style={{
				fontSize: `${size}px`,
			}}
		>{name}</span>
	);
};

export interface IIconProps {
	className?: string;
	name: string;
	size?: number;
	filled?: boolean;
}
