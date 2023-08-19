export enum EThemePickerSize {
	mini = 128,
	default = 180,
	large = 254,
}

export enum EThemePickerGap {
	mini = 16,
	default = 24,
	large = 36,
}

export type TThemePickerProps = {
	className?: string;
	size?: keyof typeof EThemePickerSize;
}
