import { ReactNode } from 'react';

import { DataProvider } from './DataContext';

export const XProvider = ({ children }: XProviderProps) => {
	return (
		<DataProvider>
			{children}
		</DataProvider>
	);
};

interface XProviderProps {
    children?: ReactNode
}
