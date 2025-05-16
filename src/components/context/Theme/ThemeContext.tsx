import { createContext, useEffect, useState } from 'react';

import { STORAGE } from '#utils/index';

import { TThemeColor, TThemeInitialType, TThemeProviderProps, TThemeScheme } from './types';

const ThemeDefault: TThemeInitialType = {
	themeScheme: undefined,
	setThemeScheme: () => null,
	themeColor: undefined,
	setThemeColor: () => null,
};

const ThemeContext = createContext(ThemeDefault);
const ThemeProvider = ({ children }: TThemeProviderProps) => {
	const [themeScheme, setScheme] = useState<TThemeScheme>(ThemeDefault.themeScheme);
	const [themeColor, setColor] = useState<TThemeColor>(ThemeDefault.themeColor);

	useEffect(() => {
		let storedScheme = localStorage.getItem(STORAGE.themeScheme) as TThemeScheme;
		let storedColor = localStorage.getItem(STORAGE.themeColor) as TThemeColor;

		if (!storedScheme)
			storedScheme = document?.documentElement.getAttribute(STORAGE.themeSchemeAttr) as TThemeScheme ?? undefined;
		if (!storedColor)
			storedColor = document?.documentElement.getAttribute(STORAGE.themeColorAttr) as TThemeColor ?? undefined;

		if (storedScheme) setScheme(storedScheme);
		if (storedColor) setColor(storedColor);
	}, []);

	useEffect(() => {
		if (!themeScheme || !themeColor) return;
		document.documentElement.setAttribute(STORAGE.themeSchemeAttr, themeScheme);
		document.documentElement.setAttribute(STORAGE.themeColorAttr, themeColor);
		localStorage.setItem(STORAGE.themeScheme, themeScheme);
		localStorage.setItem(STORAGE.themeColor, themeColor);
	}, [themeScheme, themeColor]);

	return (
		<ThemeContext.Provider value={{ themeScheme, setThemeScheme: setScheme, themeColor, setThemeColor: setColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
