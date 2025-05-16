import { EThemeScheme } from '#components/context/Theme/types';

export const STORAGE = {
	themeSchemeAttr: 'data-theme-scheme',
	themeColorAttr: 'data-theme-color',
	themeScheme: 'xThemeScheme',
	themeColor: 'xThemeColor',
};

export const THEME_SCHEME = [
	{ name: EThemeScheme.system, icon: 'f390' },
	{ name: EThemeScheme.light, icon: 'f185' },
	{ name: EThemeScheme.dark, icon: 'f6c3' },
] as const;
