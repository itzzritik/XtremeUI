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
	mini = 16,
	default = 24,
	large = 32,
}
