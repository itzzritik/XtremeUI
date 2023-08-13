export type ISpinnerProps = {
	className?: string;
	label?: string;
	size?: number | keyof typeof ESpinnerSize;
	fullpage?: boolean;
}

export enum ESpinnerSize {
	mini = 64,
	default = 96,
	large = 128,
}
