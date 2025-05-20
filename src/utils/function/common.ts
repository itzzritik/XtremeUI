export const isEqual = (a: unknown, b: unknown): boolean => {
	if (typeof a === 'string' && typeof b === 'string') return a === b;
	if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null)
		return Object.entries(a).every(([key, val]) => (b as Record<string, unknown>)[key] === val);
	return false;
};
