import { ReactNode } from 'react';

export type TFilePickerProps = {
	className?: string,
	children?: ReactNode,
	accept?: string,
	draggable?: boolean,
	multiple?: boolean,
	onChange: (file: File[]) => void,
}

export enum EFilePickerAccept {
	all = '*/*',
	text = '.txt',
	image = 'image/*',
	audio = 'audio/*',
	video = 'video/*',
	compressed = '.zip, .rar, 7z',
	pdf = '.pdf',
	doc = '.doc, .docx',
	xls = '.xls, .xlsx',
	ppt = '.ppt, .pptx',
	csv = '.csv',
	json = '.json',
	html = '.html, .htm',
}

export const FilePickerIcon = {
	file: 'f15b',
	multimedia: 'f86d',

	image: 'f1c5',
	jpg: 'e646',
	jpeg: 'e646',
	png: 'e666',
	gif: 'e645',
	svg: 'e64b',
	eps: 'e644',

	audio: 'f1c7',
	mp3: 'e648',
	wav: 'f478',

	video: 'f1c8',
	mp4: 'e649',
	mov: 'e647',

	pdf: 'f1c1',
	doc: 'e5ed',
	docx: 'e5ed',
	xls: 'e64d',
	xlsx: 'e64d',
	ppt: 'e64a',
	pptx: 'e64a',

	csv: 'f6dd',
	html: 'f1c9',

	zip: 'e5ee',
	rar: 'f1c6',
	'7z': 'f1c6',
} as const;
