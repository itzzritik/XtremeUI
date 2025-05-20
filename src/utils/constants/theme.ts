import { EThemeScheme, TThemeColor } from '#components/context/Theme/types';

export const STORAGE = {
	themeSchemeAttr: 'data-theme-scheme',
	themeScheme: 'xThemeScheme',
	themeColor: 'xThemeColor',
};

export const THEME_SCHEME = [
	{ name: EThemeScheme.auto, icon: 'e163' },
	{ name: EThemeScheme.light, icon: 'f763' },
	{ name: EThemeScheme.dark, icon: 'f754' },
] as const;

export const ThemeColorsPreset: Record<string, TThemeColor> = {
	cherry: { h: 350, s: 70, l: 50 },
	blush: { h: 335, s: 75, l: 55 },
	saffron: { h: 19, s: 100, l: 56 },
	sunset: { h: 28, s: 80, l: 55 },
	mango: { h: 45, s: 80, l: 50 },
	clay: { h: 20, s: 25, l: 50 },
	mint: { h: 135, s: 45, l: 50 },
	ocean: { h: 170, s: 60, l: 55 },
	sky: { h: 205, s: 75, l: 50 },
	plum: { h: 280, s: 40, l: 55 },
};

export const defaultColorPreset = ThemeColorsPreset.orange;
