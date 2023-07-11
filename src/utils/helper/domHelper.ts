import { RefObject } from 'react';

export const isClient = typeof window !== 'undefined';
export const dom = isClient ? window : undefined;

export const getCssProperty = (property: string, element: RefObject<HTMLElement>) => {
	return isClient ? getComputedStyle(element?.current || document.documentElement).getPropertyValue(property) : '';
};

export const getCssPropertyPx = (property: string, element: RefObject<HTMLElement>) => {
	return parseInt(getCssProperty(property, element).replace(/px/g, ''));
};

export const getCssPropertyVh = (property: string, element: RefObject<HTMLElement>) => {
	const height = parseInt(getCssProperty(property, element).replace(/vh/g, ''));
	return [(dom?.innerHeight ?? 0) * height / 100, height];
};

export const getCssPropertyVw = (property: string, element: RefObject<HTMLElement>) => {
	const width = parseInt(getCssProperty(property, element).replace(/vw/g, ''));
	return [(dom?.innerWidth ?? 0) * width / 100, width];
};

export const setCssProperty = (property: string, value: string, element: RefObject<HTMLElement>) => {
	return isClient ? (element?.current || document.documentElement).style.setProperty(property, value) : '';
};

export const waitForElement = (selector: string) => {
	return new Promise<HTMLElement>((resolve) => {
		let element = document.querySelector(selector) as HTMLElement;
		if (element) return resolve(element);

		const observer = new MutationObserver(() => {
			element = document.querySelector(selector) as HTMLElement;
			if (element) {
				resolve(element);
				observer.disconnect();
			}
		});
		observer.observe(document.body, { childList: true, subtree: true });
	});
};

export const elementObserver = (cb: ElementObserverCallback, selectors: string[]) => {
	selectors?.forEach?.((selector) => {
		let target: HTMLElement;
		const observer = new MutationObserver((records) => {
			const selectedElement = document.querySelector(selector);
			if (selectedElement) target = document.querySelector(selector) as HTMLElement;

			records?.forEach?.((record) => {
				if (record.type === 'childList') {
					const added = Array.from(record.addedNodes);
					if (added.indexOf(target) > -1) cb(target, 'added', record);
					const removed = Array.from(record.removedNodes);
					if (removed.indexOf(target) > -1) cb(target, 'removed', record);
				}
			});
		});
		observer.observe(document.body, { childList: true, subtree: true });
	});
};

type ElementObserverCallback = (element: HTMLElement, event: keyof typeof EElementObserverEvent, record: MutationRecord) => void
enum EElementObserverEvent {
	added = 'added',
	removed = 'removed',
}
