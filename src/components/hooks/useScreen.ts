import { useEffect, useState } from 'react';

const defaultBreakpoints = {
	mobile: 640,
	tablet: 1024,
};

const capitalize = <S extends string>(s: S) => (s.charAt(0).toUpperCase() + s.slice(1)) as Capitalize<S>;

export function useScreenType<
	B extends Record<string, number> = typeof defaultBreakpoints,
	K extends keyof B = keyof B
> (
	breakpointsArg?: B,
): {
	screenType: K | 'largest';
	isLargest: boolean;
} & {
	[P in K as `is${Capitalize<string & P>}`]: boolean;
} {
	const breakpoints = (breakpointsArg ?? defaultBreakpoints) as B;
	const keys = Object.keys(breakpoints) as K[];
	const sorted = keys.map((k) => [k, breakpoints[k]] as [K, number]).sort((a, b) => a[1] - b[1]);

	const queries = sorted.map(([k, v], i) => (
		i === 0
			? { key: k, query: `(max-width: ${v - 1}px)` }
			: { key: k, query: `(min-width: ${sorted[i - 1][1]}px) and (max-width: ${v - 1}px)` }
	));

	const lastValue = sorted[sorted.length - 1][1];
	const largestKey = 'largest';
	queries.push({ key: largestKey as K, query: `(min-width: ${lastValue}px)` });

	const [screenType, setScreenType] = useState<K | 'largest'>(largestKey as 'largest');

	useEffect(() => {
		const mediaQueries = queries.map((q) => window.matchMedia(q.query));
		const update = () => {
			for (let i = 0; i < mediaQueries.length; i++) {
				if (mediaQueries[i].matches) {
					setScreenType(queries[i].key as K | 'largest');
					break;
				}
			}
		};
		update();
		mediaQueries.forEach((mq) => mq.addEventListener('change', update));
		return () => mediaQueries.forEach((mq) => mq.removeEventListener('change', update));
	}, [queries]);

	return {
		screenType,
		...Object.fromEntries(keys.map((k) => [`is${capitalize(k as string)}`, screenType === k])),
		isLargest: screenType === largestKey,
	} as {
		screenType: K | 'largest';
		isLargest: boolean;
	} & {
		[P in K as `is${Capitalize<string & P>}`]: boolean;
	};
}
