import { useContext } from 'react';

import { DataContext, TDataDefaultType } from './DataContext';

export const useXData = (): TDataDefaultType => useContext(DataContext);
