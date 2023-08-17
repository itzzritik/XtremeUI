import { createContext, useEffect, useState } from 'react';

import { win } from '#utils/helper/domHelper';

import { TThemeColor, TThemeInitialType, TThemeProviderProps, TThemeScheme } from './type';

const ThemeDefault: TThemeInitialType = {
	scheme: window.__themeScheme,
	setThemeScheme: () => null,
	color: window.__themeColor,
	setThemeColor: () => null,
};

const ThemeContext = createContext(ThemeDefault);
const ThemeProvider = ({ children }: TThemeProviderProps) => {
	const [scheme, setScheme] = useState<TThemeScheme>(window.__themeScheme);
	const [color, setColor] = useState<TThemeColor>(window.__themeColor);

	const setThemeScheme = (val: TThemeScheme) => {
		window.__setPreferredThemeScheme?.(val);
	};
	const setThemeColor = (val: TThemeColor) => {
		window.__setPreferredThemeColor?.(val);
	};

	useEffect(() => {
		if (win) {
			window.__onThemeSchemeChange = setScheme;
			window.__onThemeColorChange = setColor;
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ scheme, setThemeScheme, color, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
