export type IIconProps = {
	className?: string;
	code: string;
	type?: keyof typeof EIconType;
	size?: number | keyof typeof EIconSize;
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
