/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, EffectCallback, useEffect } from 'react';

export const useDebouncedEffect = (effect: EffectCallback, deps: DependencyList, delay: number) => {
	useEffect(() => {
		const handler = setTimeout(() => effect(), delay);
		return () => clearTimeout(handler);
	}, [...(deps || []), delay]);
};
