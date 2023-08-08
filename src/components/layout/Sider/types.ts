import { ReactNode } from 'react';

export type TSiderProps = {
	className?: string;
	children?: ReactNode;
	leftSider?: ReactNode;
	showMiniLeftSider?: boolean;
	rightSider?: ReactNode;
	showMiniRightSider?: boolean;
}

export type TSiderModes = keyof typeof EOpenModes;
enum EOpenModes {
	left = 'left',
	right = 'right',
	closed = 'closed',
}
