export type ISpinnerProps = {
	className?: string;
	size?: number | keyof typeof ESpinnerSize;
}

export enum ESpinnerSize {
	mini = 64,
	default = 96,
	large = 128,
}
