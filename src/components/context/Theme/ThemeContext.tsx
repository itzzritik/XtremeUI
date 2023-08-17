import { createContext, useEffect, useState } from 'react';

import { win } from '#utils/index';

import { TThemeColor, TThemeInitialType, TThemeProviderProps, TThemeScheme, defaultColor, defaultScheme } from './type';

const ThemeDefault: TThemeInitialType = {
	scheme: win?.__themeScheme ?? defaultScheme,
	setThemeScheme: () => null,
	color: win?.__themeColor ?? defaultColor,
	setThemeColor: () => null,
};

const ThemeContext = createContext(ThemeDefault);
const ThemeProvider = ({ children }: TThemeProviderProps) => {
	const [scheme, setScheme] = useState<TThemeScheme>(ThemeDefault.scheme);
	const [color, setColor] = useState<TThemeColor>(ThemeDefault.color);

	const setThemeScheme = (val: TThemeScheme) => win?.__setPreferredThemeScheme?.(val);
	const setThemeColor = (val: TThemeColor) => win?.__setPreferredThemeColor?.(val);

	useEffect(() => {
		if (win) {
			win.__onThemeSchemeChange = setScheme;
			win.__onThemeColorChange = setColor;
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ scheme, setThemeScheme, color, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
