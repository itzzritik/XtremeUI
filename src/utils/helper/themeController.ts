import { defaultColor, defaultScheme } from '#components/context/Theme/type';
import { STORAGE } from '#utils/constants/commons';

export const themeController = (scheme: string = defaultScheme, color: string = defaultColor) => (`
	(function() {
      try {
        const themeScheme = localStorage.getItem('${STORAGE.themeScheme}') || '${scheme}';
        const themeColor = localStorage.getItem('${STORAGE.themeColor}') || '${color}';

        document.documentElement.setAttribute('${STORAGE.themeSchemeAttr}', themeScheme);
        document.documentElement.setAttribute('${STORAGE.themeColorAttr}', themeColor);
      } catch (e) {}
    })();
	`
);
