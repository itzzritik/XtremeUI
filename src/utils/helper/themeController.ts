import { defaultScheme, defaultColorPreset, TThemeColor } from '#components/context/Theme/types';
import { STORAGE } from '#utils/constants/commons';

export const themeController = (
	scheme: string = defaultScheme,
	color: TThemeColor = defaultColorPreset,
) => (`
	(function() {
		try {
			const themeScheme = localStorage.getItem('${STORAGE.themeScheme}') || '${scheme}';
			const themeColorRaw = localStorage.getItem('${STORAGE.themeColor}');
			let h = ${color.h}, s = ${color.s}, l = ${color.l};

			try {
				const parsed = JSON.parse(themeColorRaw);
				if (parsed && typeof parsed.h === 'number' && typeof parsed.s === 'number' && typeof parsed.l === 'number') {
					h = parsed.h;
					s = parsed.s;
					l = parsed.l;
				}
			} catch (e) {}

			document.documentElement.setAttribute('${STORAGE.themeSchemeAttr}', themeScheme);
			document.documentElement.style.setProperty('--H', h.toString());
			document.documentElement.style.setProperty('--S', s + '%');
			document.documentElement.style.setProperty('--L', l + '%');
		} catch (e) {}
	})();
`);
