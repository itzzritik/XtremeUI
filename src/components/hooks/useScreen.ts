import { useEffect, useState } from 'react';

export type TScreenType = 'mobile' | 'tablet' | 'desktop';

type Breakpoints = {
  mobile: number;
  tablet: number;
};

const defaultBreakpoints: Breakpoints = {
	mobile: 640,
	tablet: 1024,
};

const generateMediaQueries = (bp: Breakpoints) => ({
	mobile: `(max-width: ${bp.mobile - 1}px)`,
	tablet: `(min-width: ${bp.mobile}px) and (max-width: ${bp.tablet - 1}px)`,
});

export const useScreenType = (customBreakpoints?: Breakpoints) => {
	const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
	const mediaQueries = generateMediaQueries(breakpoints);
	const [screenType, setScreenType] = useState<TScreenType>('desktop');

	useEffect(() => {
		const queries = {
			mobile: window.matchMedia(mediaQueries.mobile),
			tablet: window.matchMedia(mediaQueries.tablet),
		};

		const update = () => {
			if (queries.mobile.matches) setScreenType('mobile');
			else if (queries.tablet.matches) setScreenType('tablet');
			else setScreenType('desktop');
		};

		update();
		Object.values(queries).forEach((q) => q.addEventListener('change', update));
		return () => Object.values(queries).forEach((q) => q.removeEventListener('change', update));
	}, [mediaQueries]);

	return {
		screenType,
		isMobile: screenType === 'mobile',
		isTablet: screenType === 'tablet',
		isDesktop: screenType === 'desktop',
	};
};
