import { ReactNode } from 'react';

export type TThemeInitialType = {
	themeScheme: TThemeScheme | undefined;
	setThemeScheme: (scheme: TThemeScheme | undefined) => void;
	themeColor: TThemeColor | undefined;
	setThemeColor: (color: TThemeColor | undefined) => void;
};
export type TThemeProviderProps = {
	children?: ReactNode;
};

export enum EThemeScheme {
	light = 'light',
	dark = 'dark',
	auto = 'auto',
}
export type TThemeScheme = keyof typeof EThemeScheme;
export const defaultScheme = EThemeScheme.auto;

export type TThemeColor = {
	h: number;
	s: number;
	l: number;
};
