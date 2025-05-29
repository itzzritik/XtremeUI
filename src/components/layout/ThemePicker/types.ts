export enum EThemePickerSize {
	mini = 100,
	default = 130,
	large = 190,
}

export const EThemePickerGap = Object.fromEntries(
	Object.entries(EThemePickerSize).map(([key, value]) => [key, Math.round((value as number) / 8)]),
) as {
	[key in keyof typeof EThemePickerSize]: number;
};

export type TThemePickerProps = {
	className?: string;
	size?: keyof typeof EThemePickerSize;
}
