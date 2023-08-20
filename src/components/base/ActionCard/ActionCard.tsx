import { forwardRef } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './actionCard.module.scss';
import { EActionCardSize, TActionCardProps } from './types';

export const ActionCard = forwardRef<HTMLDivElement, TActionCardProps>((props, ref) => {
	const {
		className,
		children,
		style,
		size = 'default',
		title,
		icon,
		iconType = 'brand',
		onClick,
	} = props;

	const cardSize = Array.isArray(size) ? size : [EActionCardSize[size], EActionCardSize[size]];

	const ActionCardClsx = clsx(
		styles.actionCard,
		'shadowRipple',
		styles[`${size}Size`],
		title && styles.withHeader,
		className,
	);

	return (
		<div
			ref={ref}
			className={ActionCardClsx}
			style={{
				['--cardWidth' as string]: `${cardSize[0]}px`,
				['--cardHeight' as string]: `${cardSize[1]}px`,
				...style,
			}}
			onClick={onClick}
			role='card'
		>
			{title && <div className={styles.header}>
				{icon && <Icon className={styles.icon} code={icon} type={iconType} />}
				<span className={styles.title}>{title}</span>
			</div>}
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
});

ActionCard.displayName = 'ActionCard';
