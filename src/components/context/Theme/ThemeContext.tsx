import { createContext, useEffect, useState } from 'react';

import { defaultColorPreset, STORAGE } from '#utils/index';

import { TThemeColor, TThemeInitialType, TThemeProviderProps, TThemeScheme } from './types';

const ThemeDefault: TThemeInitialType = {
	isDarkTheme: undefined,
	themeScheme: undefined,
	setThemeScheme: () => null,
	themeColor: undefined,
	setThemeColor: () => null,
};

const ThemeContext = createContext(ThemeDefault);
const ThemeProvider = ({ children }: TThemeProviderProps) => {
	const [themeScheme, setThemeScheme] = useState<TThemeScheme | undefined>(ThemeDefault.themeScheme);
	const [themeColor, setThemeColor] = useState<TThemeColor | undefined>(ThemeDefault.themeColor);

	const getSystemPref = () => matchMedia('(prefers-color-scheme: dark)').matches;
	const [isDarkTheme, setIsDark] = useState(themeScheme === 'auto' ? getSystemPref() : themeScheme === 'dark');

	useEffect(() => {
		let storedScheme = localStorage.getItem(STORAGE.themeScheme) as TThemeScheme;
		let storedColor: TThemeColor | undefined;

		try {
			storedColor = JSON.parse(localStorage.getItem(STORAGE.themeColor) || 'null') || defaultColorPreset;
		} catch {
			storedColor = defaultColorPreset;
		}

		if (!storedScheme)
			storedScheme = document?.documentElement.getAttribute(STORAGE.themeSchemeAttr) as TThemeScheme ?? undefined;

		if (storedScheme) setThemeScheme(storedScheme);
		if (storedColor) setThemeColor(storedColor);
	}, []);

	useEffect(() => {
		if (!themeScheme || !themeColor) return;
		const { h, s, l } = themeColor;
		document.documentElement.setAttribute(STORAGE.themeSchemeAttr, themeScheme);
		document.documentElement.style.setProperty('--H', `${h}`);
		document.documentElement.style.setProperty('--S', `${s}%`);
		document.documentElement.style.setProperty('--L', `${l}%`);

		let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
		if (!meta) {
			meta = document.createElement('meta') as HTMLMetaElement;
			meta.name = 'theme-color';
			document.head.appendChild(meta);
		}
		meta.content = `hsl(${h},${s}%,${l}%)`;

		localStorage.setItem(STORAGE.themeScheme, themeScheme);
		localStorage.setItem(STORAGE.themeColor, JSON.stringify(themeColor));
	}, [themeScheme, themeColor]);

	useEffect(() => {
		if (themeScheme !== 'auto') return setIsDark(themeScheme === 'dark');

		const media = matchMedia('(prefers-color-scheme: dark)');
		const update = () => setIsDark(media.matches);
		update();
		media.addEventListener('change', update);
		return () => media.removeEventListener('change', update);
	}, [themeScheme]);

	return (
		<ThemeContext.Provider value={{ isDarkTheme, themeScheme, setThemeScheme, themeColor, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
