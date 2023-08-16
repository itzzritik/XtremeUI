import { useEffect } from 'react';

import { STORAGE } from '#utils/constants/commons';

import { TStateHook } from './type';
import { usePersistingState } from './usePersistingState';

export const useTheme = (defaultTheme: TTheme): TStateHook<TTheme> => {
	const [theme, setTheme] = usePersistingState<TTheme>(STORAGE.theme, defaultTheme);

	useEffect(() => {
		const body = document.querySelector('body');
		if (body) body.setAttribute('data-theme', theme);
	}, [theme]);

	return [theme, setTheme];
};

export enum ETheme {
	light = 'light',
	dark = 'dark',
	system = 'system',
}
export type TTheme = keyof typeof ETheme;
