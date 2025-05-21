import { useEffect, useState } from 'react';

export type TScreenType = 'mobile' | 'tablet' | 'desktop';

type Breakpoints = {
  mobile?: string;
  tablet?: string;
};

const defaultBreakpoints: Required<Breakpoints> = {
	mobile: '(max-width: 639px)',
	tablet: '(min-width: 640px) and (max-width: 1023px)',
};

export const useScreenType = (customBreakpoints?: Breakpoints) => {
	const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };

	const [screenType, setScreenType] = useState<TScreenType>('desktop');

	useEffect(() => {
		const queries = {
			mobile: window.matchMedia(breakpoints.mobile),
			tablet: window.matchMedia(breakpoints.tablet),
		};
		const update = () =>
			setScreenType(queries.mobile.matches ? 'mobile' : queries.tablet.matches ? 'tablet' : 'desktop');

		update();
		Object.values(queries).forEach((q) => q.addEventListener('change', update));
		return () => Object.values(queries).forEach((q) => q.removeEventListener('change', update));
	}, [breakpoints.mobile, breakpoints.tablet]);

	return {
		screenType,
		isMobile: screenType === 'mobile',
		isTablet: screenType === 'tablet',
		isDesktop: screenType === 'desktop',
	};
};
