import { useState, createContext, ReactNode } from 'react';

import { TColor, TScheme, TTheme, defaultTheme, applyTheme, useTheme } from '#components/hooks/useTheme';
import { TSiderModes, defaultSiderMode } from '#components/layout/Sider/types';
import { STORAGE } from '#utils/constants/commons';
import { getLocalState } from '#utils/function/localStorage';

const DataDefault: TDataDefaultType = {
	siderMode: defaultSiderMode,
	setSiderMode: () => null,
	theme: getLocalState(STORAGE.theme, defaultTheme),
	setScheme: () => null,
	setThemeColor: () => null,
};

applyTheme(DataDefault.theme);

const DataContext = createContext(DataDefault);
const DataProvider = ({ children }: TDataProviderProps) => {
	const [siderMode, setSiderMode] = useState<TSiderModes>(defaultSiderMode);
	const [theme, setTheme] = useTheme(DataDefault.theme);

	const setScheme = (scheme: TScheme) => setTheme((theme) => ({ ...theme, scheme }));
	const setThemeColor = (color: TColor) => setTheme((theme) => ({ ...theme, color }));

	return (
		<DataContext.Provider value={{ siderMode, setSiderMode, theme, setScheme, setThemeColor }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };

export type TDataDefaultType = {
	siderMode: TSiderModes,
	setSiderMode: (mode: TSiderModes) => void,
	theme: TTheme,
	setScheme: (scheme: TScheme) => void,
	setThemeColor: (color: TColor) => void,
}
export type TDataProviderProps = {
    children?: ReactNode
}
