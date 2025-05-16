import { useEffect, useState } from 'react';

import { TScreenType } from './types';

const breakpoints = {
	mobile: '(max-width: 639px)',
	tablet: '(min-width: 640px) and (max-width: 1023px)',
};

export const useScreenType = () => {
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
	}, []);

	return {
		screenType,
		isMobile: screenType === 'mobile',
		isTablet: screenType === 'tablet',
		isDesktop: screenType === 'desktop',
	};
};
