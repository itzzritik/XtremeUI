import { ReactNode } from 'react';

import { DataProvider } from './DataContext';
import { ThemeProvider } from './Theme/ThemeContext';

export const XProvider = ({ children }: XProviderProps) => {
	return (
		<ThemeProvider>
			<DataProvider>
				{children}
			</DataProvider>
		</ThemeProvider>
	);
};

interface XProviderProps {
    children?: ReactNode
}
