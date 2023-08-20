import { ReactNode } from 'react';

export type TActionCardProps = {
	className?: string;
	children?: ReactNode;
	size?: TActionCardSize;
}
export type TActionCardSize = [number, number] | keyof typeof EActionCardSize;
export enum EActionCardSize {
	mini = 100,
	default = 164,
	large = 254,
}
