import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './actionCard.module.scss';
import { EActionCardSize, TActionCardProps } from './types';

export const ActionCard = forwardRef<HTMLDivElement, TActionCardProps>((props, ref) => {
	const {
		className,
		children,
		size = 'default',
	} = props;

	const cardSize = Array.isArray(size) ? size : [EActionCardSize[size], EActionCardSize[size]];

	const ActionCardClsx = clsx(
		styles.actionCard,
		'shadowRipple',
		className,
	);

	return (
		<div
			ref={ref}
			className={ActionCardClsx}
			style={{
				['--cardWidth' as string]: `${cardSize[0]}px`,
				['--cardHeight' as string]: `${cardSize[1]}px`,
			}}
			role='card'
		>
			{children}
		</div>
	);
});

ActionCard.displayName = 'ActionCard';
