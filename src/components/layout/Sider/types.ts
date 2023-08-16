import { ReactNode } from 'react';

export type TSiderProps = {
	className?: string;
	children?: ReactNode;
	leftSider?: ReactNode;
	showMiniLeftSider?: boolean;
	rightSider?: ReactNode;
	showMiniRightSider?: boolean;
}

export enum ESiderModes {
	left = 'left',
	right = 'right',
	closed = 'closed',
}
export type TSiderModes = keyof typeof ESiderModes;
export const defaultSiderMode = ESiderModes.closed;
