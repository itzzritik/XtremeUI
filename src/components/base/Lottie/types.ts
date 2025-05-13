export type TLottieProps = {
	className?: string;
	src: string;
	size?: number | keyof typeof ELottieSize;
	controls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	speed?: number;
}

export enum ELottieSize {
	mini = 64,
	default = 128,
	large = 256,
}
