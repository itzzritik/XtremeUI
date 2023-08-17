import { ReactNode } from 'react';

export type TThemeInitialType = {
	themeScheme: TThemeScheme,
	setThemeScheme: (scheme: TThemeScheme) => void,
	themeColor: TThemeColor,
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

export enum EThemeColor {
	red = 'red',
	pink = 'pink',
	orange = 'orange',
	blue = 'blue',
	violet = 'violet',
	black = 'black',
}
export type TThemeColor = keyof typeof EThemeColor;
export const defaultColor = EThemeColor.violet;
