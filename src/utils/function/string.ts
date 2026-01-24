export const safeStringFromCodePoint = (codePoint: number) => {
	if (Number.isNaN(codePoint) || codePoint < 0 || codePoint > 0x10ffff || Math.floor(codePoint) !== codePoint) return "";

	return String.fromCodePoint(codePoint);
};

export const unicodeToString = (unicode: string) => {
	return safeStringFromCodePoint(parseInt(`0x${unicode}`, 16));
};

export const capitalize = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
