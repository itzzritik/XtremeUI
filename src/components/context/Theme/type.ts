import { ReactNode } from 'react';

export type TThemeInitialType = {
	scheme: TThemeScheme,
	setThemeScheme: (scheme: TThemeScheme) => void,
	color: TThemeColor,
	setThemeColor: (color: TThemeColor) => void,
}
export type TThemeProviderProps = {
    children?: ReactNode
}

enum EThemeScheme {
	light = 'light',
	dark = 'dark',
	system = 'system',
}
export type TThemeScheme = keyof typeof EThemeScheme;
export const defaultScheme = EThemeScheme.system;

enum EThemeColor {
	red = 'red',
	pink = 'pink',
	orange = 'orange',
	blue = 'blue',
	violet = 'violet',
	black = 'black',
}
export type TThemeColor = keyof typeof EThemeColor;
export const defaultColor = EThemeColor.violet;
