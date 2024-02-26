export type TImageEditorProps = {
	className?: string,
	file: Blob | undefined,
	clearFile?: () => void,
	minImageSize?: number,
	cropShape?: 'rect' | 'round',
	aspect?: number,
	zoomSpeed?: number,
	onChange: (image: TEditedImageType) => void
}

export type TEditedImageType = {
	blob?: Blob,
	base64?: string,
}
