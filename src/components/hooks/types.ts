import { Dispatch, SetStateAction } from 'react';

export type TStateHook<T> = [T, Dispatch<SetStateAction<T>>]
export type TScreenType = 'mobile' | 'tablet' | 'desktop';
