import { defaultColor, defaultScheme } from '#components/context/Theme/type';

import { STORAGE } from '../constants/commons';

export const themeController = `
(function () {
	function setThemeScheme(newThemeScheme) {
		document.documentElement.setAttribute("data-theme-scheme", newThemeScheme);
		window.__themeScheme = newThemeScheme;
		window.__onThemeSchemeChange(newThemeScheme);
	}
	function setThemeColor(newThemeColor) {
		document.documentElement.setAttribute("data-theme-color", newThemeColor);
		window.__themeColor = newThemeColor;
		window.__onThemeColorChange(newThemeColor);
	}
	
	window.__onThemeSchemeChange = function () {};
	window.__onThemeColorChange = function () {};

	window.__setPreferredThemeScheme = function (newThemeScheme) {
		setThemeScheme(newThemeScheme);
		try {
			localStorage.setItem("${STORAGE.themeScheme}", JSON.stringify(window.__themeScheme));
		} catch (err) {}
	};
	window.__setPreferredThemeColor = function (newThemeColor) {
		setThemeColor(newThemeColor);
		try {
			localStorage.setItem("${STORAGE.themeColor}", JSON.stringify(window.__themeColor));
		} catch (err) {}
	};

	let themeScheme;
	let themeColor;
	
	try {
		themeScheme = JSON.parse(localStorage.getItem("${STORAGE.themeScheme}"));
		themeColor = JSON.parse(localStorage.getItem("${STORAGE.themeColor}"));
	} catch (err) {}  
	
	setThemeScheme(themeScheme || "${defaultScheme}"));
	setThemeColor(themeColor || "${defaultColor}");
})();
`;
