import { createContext, useState } from "react";

import { defaultSiderMode, type TSiderModes } from "#components/layout/Sider/types";

import type { TDataInitialType, TDataProviderProps } from "./types";

const DataDefault: TDataInitialType = {
	siderMode: defaultSiderMode,
	setSiderMode: () => null,
};

const DataContext = createContext(DataDefault);
const DataProvider = ({ children }: TDataProviderProps) => {
	const [siderMode, setSiderMode] = useState<TSiderModes>(defaultSiderMode);

	return <DataContext.Provider value={{ siderMode, setSiderMode }}>{children}</DataContext.Provider>;
};

export { DataProvider, DataContext };
