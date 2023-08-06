import { ReactNode } from 'react';

export type TSiderProps = {
	className?: string;
	children?: ReactNode;
	leftSider?: ReactNode;
	showMiniLeftSider?: boolean;
	rightSider?: ReactNode;
	showMiniRightSider?: boolean;
	open?: TSiderModes;
	setOpen?: (open: boolean) => void;
}

export type TSiderModes = keyof typeof EOpenModes;
enum EOpenModes {
	left = 'left',
	right = 'right',
	closed = 'closed',
}
