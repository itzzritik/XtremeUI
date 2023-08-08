import { useContext } from 'react';

import { DataContext, DataDefaultType } from './DataContext';

export const useXData = (): DataDefaultType => useContext(DataContext);
