import { Ref, RefCallback } from 'react';

export function assignRef<T> (
	ref: Ref<T> | undefined | null,
	value: T | null,
): void {
	if (typeof ref === 'function') {
		ref(value);
	} else if (ref != null) {
		try {
			ref.current = value;
		} catch {
			throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
		}
	}
}

export function mergeRefs<T> (refs: (Ref<T> | undefined | null)[]): RefCallback<T> {
	return (value) => {
		refs.forEach((ref) => assignRef(ref, value));
	};
}
