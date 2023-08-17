import { useState, createContext, ReactNode } from 'react';

import { TSiderModes, defaultSiderMode } from '#components/layout/Sider/types';

const DataDefault: TDataInitialType = {
	siderMode: defaultSiderMode,
	setSiderMode: () => null,
};

const DataContext = createContext(DataDefault);
const DataProvider = ({ children }: TDataProviderProps) => {
	const [siderMode, setSiderMode] = useState<TSiderModes>(defaultSiderMode);

	return (
		<DataContext.Provider value={{ siderMode, setSiderMode }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };

export type TDataInitialType = {
	siderMode: TSiderModes,
	setSiderMode: (mode: TSiderModes) => void,
}
export type TDataProviderProps = {
    children?: ReactNode
}
