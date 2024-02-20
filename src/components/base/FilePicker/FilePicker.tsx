import React, { useState, useCallback } from 'react';

import Cropper from 'react-easy-crop';

import { getIconMask } from '../../../functions/client/index.js';
import Loader from '../Base/Loader.jsx';

import { getCroppedImg, getImageSize } from './utils';

const FilePicker = (props) => {
	const [imageSelected, setImageSelected] = useState(false);
	const [imageSrc, setImageSrc] = useState();
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState();

	const fileType = { image: 'image/*' }[props.type];

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);
	const readFile = (file) => {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.addEventListener('load', () => resolve(reader.result), false);
			reader.readAsDataURL(file);
		});
	};
	const clearFilePicker = () => {
		props.useRef.current.value = null; // Clearing input file value
		setImageSrc();
		setCrop({ x: 0, y: 0 });
		setZoom(1);
		setRotation(0);
		setCroppedAreaPixels();
		setImageSelected();
	};
	const onFile = async (event) => {
		const file = event.target.files[0];

		if (file.type.replace(/\/.*/, '') !== fileType.replace(/\/.*/, '')) {
			return console.log('Expected filetype of', fileType.replace(/\/.*/, ''));
		}

		if (props.edit) {
			setImageSelected(true);
			const imageSrc = await readFile(file);
			const imageSize = await getImageSize(imageSrc);

			if (props.minImageSize && Math.min(imageSize.width, imageSize.height) < props.minImageSize) {
				clearFilePicker();
				return console.log(`Image should be at least ${props.minImageSize}x${props.minImageSize}`);
			}

			setImageSrc(imageSrc);
		}
	};
	const rotateLeft = () => {
		setRotation((rotation) => rotation - 90);
	};
	const rotateRight = () => {
		setRotation((rotation) => rotation + 90);
	};
	const cancel = () => {
		clearFilePicker();
	};
	const accept = useCallback(async () => {
		try {
			const croppedImageFile = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
			props.onCrop(croppedImageFile);
		} catch (e) {
			console.error(e);
		}
		clearFilePicker();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [imageSrc, croppedAreaPixels, rotation]);

	let classList = 'filePicker ';
	props.className && (classList += `${props.className.trim()} `);

	return (
		<>
			<input className={classList} type='file'
				ref={props.useRef}
				onChange={onFile}
				accept={fileType ?? props.type}
			/>
			{
				imageSelected && <div className='imageEditOverlay'>
					{
						!imageSrc
							? <Loader />
							: <>
								<Cropper image={imageSrc} aspect={1}
									zoomSpeed={0.2}
									zoom={zoom} onZoomChange={setZoom}
									rotation={rotation} onRotationChange={() => {}}
									crop={crop} onCropChange={setCrop}
									onCropComplete={onCropComplete}
								/>

								<div className='editorControls'>
									<div className='cancel' onClick={cancel}>
										<span style={getIconMask('/icons/Base/cross.svg')} />
									</div>
									<div className='rotateLeft' onClick={rotateLeft}>
										<span style={getIconMask('/icons/Base/rotateLeft.svg')} />
									</div>
									<div className='rotateRight' onClick={rotateRight}>
										<span style={getIconMask('/icons/Base/rotateRight.svg')} />
									</div>
									<div className='accept' onClick={accept}>
										<span style={getIconMask('/icons/Base/tick.svg')} />
									</div>
								</div>
							</>
					}
				</div>
			}
		</>
	);
};

export default FilePicker;
