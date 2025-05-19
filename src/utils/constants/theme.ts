import { EThemeScheme, TThemeColor } from '#components/context/Theme/types';

export const STORAGE = {
	themeSchemeAttr: 'data-theme-scheme',
	themeScheme: 'xThemeScheme',
	themeColor: 'xThemeColor',
};

export const THEME_SCHEME = [
	{ name: EThemeScheme.auto, icon: 'e2ca' },
	{ name: EThemeScheme.light, icon: 'f763' },
	{ name: EThemeScheme.dark, icon: 'f754' },
] as const;

export const ThemeColorsPreset: Record<string, TThemeColor> = {
	red: { h: 352, s: 100, l: 61 },														// hsl(352 100 61)
	pink: { h: 342, s: 100, l: 67 },													// hsl(342 100 67)
	orange: { h: 2, s: 100, l: 70 },													// hsl(2 100 70)
	blue: { h: 207, s: 90, l: 54 },														// hsl(207 90 54)
	green: { h: 147, s: 20, l: 58 },													// hsl(147 20 58)
	violet: { h: 256, s: 100, l: 66 },													// hsl(256 100 66)
};
export const defaultColorPreset = ThemeColorsPreset.orange;
