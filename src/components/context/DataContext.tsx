import { useState, createContext, ReactNode } from 'react';

import noop from 'lodash/noop';

import { TSiderModes } from '#components/layout/Sider/types';

const DataDefault: DataDefaultType = {
	siderMode: 'closed',
	setSiderMode: noop,
};

const DataContext = createContext(DataDefault);
const DataProvider = ({ children }: DataProviderProps) => {
	const [siderMode, setSiderMode] = useState<TSiderModes>('closed');

	return (
		<DataContext.Provider value={{ siderMode, setSiderMode }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };

export interface DataDefaultType {
	siderMode: TSiderModes,
	setSiderMode: (mode: TSiderModes) => void,
}
interface DataProviderProps {
    children?: ReactNode
}
