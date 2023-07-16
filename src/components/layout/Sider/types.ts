import { ReactNode } from 'react';

export type TSiderProps = {
	className?: string;
	children?: ReactNode;
	leftSider?: ReactNode;
	showMiniLeftSider?: boolean;
	rightSider?: ReactNode;
	showMiniRightSider?: boolean;
	open?: keyof typeof EOpenModes;
	setOpen?: (open: boolean) => void;
}
enum EOpenModes {
	left = 'left',
	right = 'right',
	closed = 'closed',
}
