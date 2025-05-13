import { EThemeScheme } from "#components/context/Theme/type";

export const STORAGE = {
	themeScheme: 'xThemeScheme',
	themeColor: 'xThemeColor',
};

export const THEME_SCHEME = [
	{ name: EThemeScheme.system, icon: 'f390' },
	{ name: EThemeScheme.light, icon: 'f185' },
	{ name: EThemeScheme.dark, icon: 'f6c3' },
] as const;