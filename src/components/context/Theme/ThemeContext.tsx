import { createContext, useEffect, useState } from 'react';

import { win } from '#utils/index';

import { TThemeColor, TThemeInitialType, TThemeProviderProps, TThemeScheme, defaultColor, defaultScheme } from './type';

const ThemeDefault: TThemeInitialType = {
	themeScheme: win?.__themeScheme ?? defaultScheme,
	setThemeScheme: () => null,
	themeColor: win?.__themeColor ?? defaultColor,
	setThemeColor: () => null,
};

const ThemeContext = createContext(ThemeDefault);
const ThemeProvider = ({ children }: TThemeProviderProps) => {
	const [themeScheme, setScheme] = useState<TThemeScheme>(ThemeDefault.themeScheme);
	const [themeColor, setColor] = useState<TThemeColor>(ThemeDefault.themeColor);

	const setThemeScheme = (val: TThemeScheme) => win?.__setPreferredThemeScheme?.(val);
	const setThemeColor = (val: TThemeColor) => win?.__setPreferredThemeColor?.(val);

	useEffect(() => {
		if (win) {
			win.__onThemeSchemeChange = setScheme;
			win.__onThemeColorChange = setColor;
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ themeScheme, setThemeScheme, themeColor, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
