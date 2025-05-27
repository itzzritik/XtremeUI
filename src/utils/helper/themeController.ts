import { defaultScheme, TThemeColor } from '#components/context/Theme/types';
import { defaultColorPreset, STORAGE } from '#utils/constants/theme';

type ThemeConfig = {
	scheme?: string;
	color?: TThemeColor;
	defScheme?: string;
	defColor?: TThemeColor;
};

export const themeController = ({
	scheme,
	color,
	defScheme = defaultScheme,
	defColor = defaultColorPreset,
}: ThemeConfig = {}) => {
	const schemeStr = scheme != null ? `'${scheme}'` : 'null';
	const colorStr = color ? JSON.stringify(color) : 'null';
	const defaultColorStr = JSON.stringify(defColor);

	return `(function() {
		try {
			let storedScheme = localStorage.getItem('${STORAGE.themeScheme}');
			const themeScheme = ${schemeStr} ?? storedScheme ?? '${defScheme}';

			const themeColorRaw = localStorage.getItem('${STORAGE.themeColor}');
			let { h, s, l } = ${defaultColorStr};

			const preferredColor = ${colorStr};

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

			const style = document.getElementById('${STORAGE.themeColor}') || 
				document.head.appendChild(Object.assign(document.createElement('style'), { id: '${STORAGE.themeColor}' }));
			style.textContent = \`:root{ --H: \${h}; --S: \${s}%; --L: \${l}% }\`;

			let meta = document.head.querySelector('meta[name="theme-color"]');
			if (!meta) {
				meta = document.createElement('meta');
				meta.name = 'theme-color';
				document.head.appendChild(meta);
			}
			meta.content = \`hsl(\${h},\${s}%,\${l}%)\`;

			localStorage.setItem('${STORAGE.themeScheme}', themeScheme);
			localStorage.setItem('${STORAGE.themeColor}', JSON.stringify({ h, s, l }));
		} catch {}
	})();`;
};
