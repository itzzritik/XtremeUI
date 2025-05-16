import { useContext } from 'react';

import { DataContext } from './Data/DataContext';
import { TDataInitialType } from './Data/types';
import { ThemeContext } from './Theme/ThemeContext';
import { TThemeInitialType } from './Theme/types';

export const useXData = (): TDataInitialType => useContext(DataContext);
export const useXTheme = (): TThemeInitialType => useContext(ThemeContext);
