import { useEffect, useState } from 'react';

import { getLocalState, setLocalState } from '#utils/function/localStorage';

import { TStateHook } from './type';

export const usePersistingState = <T>(key: string, initialState?: T): TStateHook<T> => {
	const [state, setState] = useState(initialState ?? getLocalState<T>(key));

	useEffect(() => {
		const persist = () => setLocalState(key, state);
		window.addEventListener('beforeunload', persist);
		return () => window.removeEventListener('beforeunload', persist);
	}, [key, state]);

	return [state, setState];
};
