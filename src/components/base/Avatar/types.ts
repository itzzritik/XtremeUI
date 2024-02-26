export type TAvatarProps = {
	className?: string;
	src?: string;
	file?: Blob;
	alt?: string;
	placeholderIcon?: string;
	size?: number | keyof typeof EAvatarSize;
	onClick?: () => void;
}

export enum EAvatarSize {
	mini = 64,
	default = 96,
	large = 128,
}
