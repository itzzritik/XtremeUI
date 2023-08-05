export type IIconProps = {
	className?: string;
	code: string;
	type?: keyof typeof EIconType;
	size?: number | keyof typeof EIconSize;
}
export enum EIconType {
	solid = 'solid',
	regular = 'regular',
	light = 'light',
	thin = 'thin',
	sharp = 'sharp',
	brands = 'brands',
	duotone = 'duotone',
}

export enum EIconSize {
	mini = 16,
	default = 24,
	large = 32,
}
