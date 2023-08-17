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
	function saveToStore() {
		try {
			localStorage.setItem("${STORAGE.themeScheme}", JSON.stringify(window.__themeScheme));
		} catch (err) {}
		try {
			localStorage.setItem("${STORAGE.themeColor}", JSON.stringify(window.__themeColor));
		} catch (err) {}
	}
	
	window.__onThemeSchemeChange = function () {};
	window.__onThemeColorChange = function () {};

	window.__setPreferredThemeScheme = function (newThemeScheme) {
		setThemeScheme(newThemeScheme);
		saveToStore();
	};
	window.__setPreferredThemeColor = function (newThemeColor) {
		setThemeColor(newThemeColor);
		saveToStore();
	};

	let themeScheme;
	let themeColor;
	
	try {
		themeScheme = JSON.parse(localStorage.getItem("${STORAGE.themeScheme}"));
	} catch (err) {}
	try {
		themeColor = JSON.parse(localStorage.getItem("${STORAGE.themeColor}"));
	} catch (err) {} 
	
	setThemeScheme(themeScheme || "${defaultScheme}");
	setThemeColor(themeColor || "${defaultColor}");
})();
`;
