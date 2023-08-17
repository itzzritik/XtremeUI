import { useContext } from 'react';

import { DataContext, TDataInitialType } from './DataContext';
import { ThemeContext } from './Theme/ThemeContext';
import { TThemeInitialType } from './Theme/type';

export const useXData = (): TDataInitialType => useContext(DataContext);
export const useTheme = (): TThemeInitialType => useContext(ThemeContext);
