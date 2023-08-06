export const safeStringFromCodePoint = (codePoint: number) => {
	if (isNaN(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || Math.floor(codePoint) !== codePoint) return '';

	return String.fromCodePoint(codePoint);
};

export const unicodeToString = (unicode: string) => {
	return safeStringFromCodePoint(parseInt(`0x${unicode}`, 16));
};
