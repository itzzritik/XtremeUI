import { ReactNode } from 'react';

export type TThemeInitialType = {
	themeScheme: TThemeScheme | undefined;
	setThemeScheme: (scheme: TThemeScheme) => void;
	themeColor: TThemeColor | undefined;
	setThemeColor: (color: TThemeColor) => void;
};
export type TThemeProviderProps = {
	children?: ReactNode;
};

export enum EThemeScheme {
	light = 'light',
	dark = 'dark',
	system = 'system',
}
export type TThemeScheme = keyof typeof EThemeScheme;
export const defaultScheme = EThemeScheme.system;

export type TThemeColor = {
	h: number;
	s: number;
	l: number;
};

export const ThemeColorsPreset: Record<string, TThemeColor> = {
	red: { h: 352, s: 100, l: 61 },														// hsl(352 100 61)
	pink: { h: 342, s: 100, l: 67 },													// hsl(342 100 67)
	orange: { h: 2, s: 100, l: 70 },													// hsl(2 100 70)
	blue: { h: 207, s: 90, l: 54 },														// hsl(207 90 54)
	green: { h: 147, s: 20, l: 58 },													// hsl(147 20 58)
	violet: { h: 256, s: 100, l: 66 },													// hsl(256 100 66)
};
export const defaultColorPreset = ThemeColorsPreset.orange;
