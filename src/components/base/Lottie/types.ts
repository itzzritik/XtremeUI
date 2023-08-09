import { PlayMode } from '@dotlottie/react-player';

export type TLottieProps = {
	className?: string;
	src: string;
	size?: number | keyof typeof ELottieSize;
	controls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	speed?: number;
	direction?: 1 | -1;
	playMode?: PlayMode;
	renderer?: 'canvas' | 'html' | 'svg';
}

export enum ELottieSize {
	mini = 64,
	default = 128,
	large = 256,
}
