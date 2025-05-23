import { CSSProperties } from 'react';

export type IIconProps = {
	className?: string;
	style?: CSSProperties;
	code: string;
	type?: keyof typeof EIconType;
	size?: number | keyof typeof EIconSize;
	onClick?: () => void;
}
export enum EIconType {
	thin = 'thin',
	light = 'light',
	regular = 'regular',
	solid = 'solid',
	duotone = 'duotone',
	sharpSolid = 'sharpSolid',
	sharpRegular = 'sharpRegular',
	sharpLight = 'sharpLight',
	brand = 'brand',
}

export enum EIconSize {
	mini = 12,
	default = 18,
	large = 24,
}
