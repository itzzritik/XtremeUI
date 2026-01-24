import { type DependencyList, type EffectCallback, useEffect } from "react";

export const useDebouncedEffect = (effect: EffectCallback, deps: DependencyList, delay: number) => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: custom hook logic
	useEffect(() => {
		const handler = setTimeout(() => effect(), delay);
		return () => clearTimeout(handler);
	}, [...(deps || []), delay]);
};
