import { CSSProperties, ReactNode } from 'react';

import { EIconType } from '../Icon/types';

export type TActionCardProps = {
	className?: string;
	children?: ReactNode;
	style?: CSSProperties;
	size?: TActionCardSize;
	icon?: string;
	iconType?: keyof typeof EIconType;
	title?: string;
	onClick?: () => void;
}
export type TActionCardSize = [number, number] | keyof typeof EActionCardSize;
export enum EActionCardSize {
	mini = 100,
	default = 164,
	large = 254,
}
