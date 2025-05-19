import { createContext, useEffect, useState } from 'react';

import { defaultColorPreset, STORAGE } from '#utils/index';

import { TThemeColor, TThemeInitialType, TThemeProviderProps, TThemeScheme } from './types';

const ThemeDefault: TThemeInitialType = {
	themeScheme: undefined,
	setThemeScheme: () => null,
	themeColor: undefined,
	setThemeColor: () => null,
};

const ThemeContext = createContext(ThemeDefault);
const ThemeProvider = ({ children }: TThemeProviderProps) => {
	const [themeScheme, setScheme] = useState<TThemeScheme | undefined>(ThemeDefault.themeScheme);
	const [themeColor, setColor] = useState<TThemeColor | undefined>(ThemeDefault.themeColor);

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

		if (storedScheme) setScheme(storedScheme);
		if (storedColor) setColor(storedColor);
	}, []);

	useEffect(() => {
		if (!themeScheme || !themeColor) return;
		document.documentElement.setAttribute(STORAGE.themeSchemeAttr, themeScheme);
		document.documentElement.style.setProperty('--H', `${themeColor?.h}`);
		document.documentElement.style.setProperty('--S', `${themeColor?.s}%`);
		document.documentElement.style.setProperty('--L', `${themeColor?.l}%`);
		localStorage.setItem(STORAGE.themeScheme, themeScheme);
		localStorage.setItem(STORAGE.themeColor, JSON.stringify(themeColor));
	}, [themeScheme, themeColor]);

	return (
		<ThemeContext.Provider value={{ themeScheme, setThemeScheme: setScheme, themeColor, setThemeColor: setColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
