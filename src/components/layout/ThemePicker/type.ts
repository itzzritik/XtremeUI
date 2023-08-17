enum EThemePickerSize {
	mini = 'mini',
	default = 'default',
	large = 'large',
}

export type TThemePickerProps = {
	className?: string;
	size?: keyof typeof EThemePickerSize;
}
