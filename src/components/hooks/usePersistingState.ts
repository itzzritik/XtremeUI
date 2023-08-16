import { useEffect, useState } from 'react';

import { setLocalState } from '#utils/function/localStorage';

import { TStateHook } from './type';

export const usePersistingState = <T>(key: string, initialState: T): TStateHook<T> => {
	const [state, setState] = useState(initialState);

	useEffect(() => {
		const persist = () => setLocalState(key, state);
		window.addEventListener('beforeunload', persist);
		return () => window.removeEventListener('beforeunload', persist);
	}, [key, state]);

	return [state, setState];
};
