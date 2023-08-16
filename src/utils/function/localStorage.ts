import { localStore } from '../helper/domHelper';

export const getLocalState = <T>(key: string, fallback?: T): T => {
	try {
		const value = localStore?.getItem(key);
		return value ? JSON.parse(value) : fallback ?? '' as T;
	}
	catch (e) {
		console.log(e);
		return fallback ?? '' as T;
	}
};

export const setLocalState = <T>(key: string, value: T) => {
	try {
		localStore?.setItem(key, JSON.stringify(value));
	}
	catch (e) {
		console.log(e);
	}
};
