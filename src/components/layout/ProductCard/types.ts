import { ReactNode } from 'react';

import { EIconType } from '#components/base/Icon/types';

export type TProductCardProps = {
	className?: string;
	children?: ReactNode;
	size?: [number, number] | keyof typeof EProductCardSize;
	icon?: string;
	iconType?: keyof typeof EIconType;
	title?: string;
}

export enum EProductCardSize {
	mini = 100,
	default = 164,
	large = 254,
}
