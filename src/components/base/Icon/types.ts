export type IIconProps = {
	className?: string;
	name: string;
	size?: number | keyof typeof EIconSize;
	filled?: boolean;
}

export enum EIconSize {
	mini = 16,
	default = 24,
	large = 32,
}
