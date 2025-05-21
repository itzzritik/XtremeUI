import { defaultScheme as xDefaultScheme, TThemeColor } from '#components/context/Theme/types';
import { defaultColorPreset as xDefaultColorPreset, STORAGE } from '#utils/constants/theme';

export const themeController = (
	preferredScheme?: string | null,
	preferredColor?: TThemeColor | null,
	defaultScheme: string = xDefaultScheme,
	defaultColorPreset: TThemeColor = xDefaultColorPreset,
) => {
	const preferredSchemeStr = preferredScheme != null ? `'${preferredScheme}'` : 'null';
	const preferredColorStr = preferredColor ? JSON.stringify(preferredColor) : 'null';
	const defaultColorStr = JSON.stringify(defaultColorPreset);

	return `(function() {
		try {
			let storedScheme = localStorage.getItem('${STORAGE.themeScheme}');
			const themeScheme = ${preferredSchemeStr} ?? storedScheme ?? '${defaultScheme}';

			const themeColorRaw = localStorage.getItem('${STORAGE.themeColor}');
			let { h, s, l } = ${defaultColorStr};

			const preferredColor = ${preferredColorStr};

			if (preferredColor) {
				({ h, s, l } = preferredColor);
			} else {
				try {
					const parsed = JSON.parse(themeColorRaw);
					if (parsed && typeof parsed.h === 'number' && typeof parsed.s === 'number' && typeof parsed.l === 'number') {
						({ h, s, l } = parsed);
					}
				} catch {}
			}

			document.documentElement.setAttribute('${STORAGE.themeSchemeAttr}', themeScheme);
			document.documentElement.style.setProperty('--H', h.toString());
			document.documentElement.style.setProperty('--S', s + '%');
			document.documentElement.style.setProperty('--L', l + '%');

			localStorage.setItem('${STORAGE.themeScheme}', themeScheme);
			localStorage.setItem('${STORAGE.themeColor}', JSON.stringify({ h, s, l }));
		} catch {}
	})();`;
};
