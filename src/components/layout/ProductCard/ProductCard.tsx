import { forwardRef } from 'react';

import clsx from 'clsx';

import { Icon } from '#components/base/Icon/Icon';

import styles from './productCard.module.scss';
import { EProductCardSize, TProductCardProps } from './types';

export const ProductCard = forwardRef<HTMLDivElement, TProductCardProps>((props, ref) => {
	const {
		className,
		children,
		size = 'default',
		icon,
		iconType = 'brand',
		title,
	} = props;

	const cardSize = Array.isArray(size) ? size : [EProductCardSize[size], EProductCardSize[size]];

	const ProductCardClsx = clsx(
		styles.productCard,
		className,
	);

	return (
		<div
			ref={ref}
			className={ProductCardClsx}
			style={{
				['--cardWidth' as string]: `${cardSize[0]}px`,
				['--cardHeight' as string]: `${cardSize[1]}px`,
			}}
			role='card'
		>
			<div className={styles.header}>
				{icon && <Icon code={icon} type={iconType} />}
				<span>{title}</span>
			</div>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
});

ProductCard.displayName = 'ProductCard';
