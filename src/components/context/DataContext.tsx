import { useState, createContext, ReactNode } from 'react';

import { ETheme, TTheme, useTheme } from '#components/hooks/useTheme';
import { EThemeColor, TThemeColor, useThemeColor } from '#components/hooks/useThemeColor';
import { TSiderModes, defaultSiderMode } from '#components/layout/Sider/types';
import { STORAGE } from '#utils/constants/commons';
import { getLocalState } from '#utils/function/localStorage';

const DataDefault: TDataDefaultType = {
	siderMode: defaultSiderMode,
	setSiderMode: () => null,
	theme: getLocalState(STORAGE.theme, ETheme.system),
	setTheme: () => null,
	themeColor: getLocalState(STORAGE.themeColor, EThemeColor.violet),
	setThemeColor: () => null,
};

const DataContext = createContext(DataDefault);
const DataProvider = ({ children }: TDataProviderProps) => {
	const [siderMode, setSiderMode] = useState<TSiderModes>(defaultSiderMode);
	const [theme, setTheme] = useTheme(DataDefault.theme);
	const [themeColor, setThemeColor] = useThemeColor(DataDefault.themeColor);

	return (
		<DataContext.Provider value={{ siderMode, setSiderMode, theme, setTheme, themeColor, setThemeColor }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };

export type TDataDefaultType = {
	siderMode: TSiderModes,
	setSiderMode: (mode: TSiderModes) => void,
	theme: TTheme,
	setTheme: (theme: TTheme) => void,
	themeColor: TThemeColor,
	setThemeColor: (themeColor: TThemeColor) => void,
}
export type TDataProviderProps = {
    children?: ReactNode
}
