import { forwardRef } from 'react';

import Alpha from '@uiw/react-color-alpha';
import ShadeSlider from '@uiw/react-color-shade-slider';
import Wheel from '@uiw/react-color-wheel';
import clsx from 'clsx';

import './colorPicker.scss';
import { TColorPickerProps } from './types';

const WHEEL_SIZE = 180;
export const ColorPicker = forwardRef<HTMLDivElement, TColorPickerProps>((props, ref) => {
	const { className, shade = true, alpha = true, color = { h: 0, s: 0, v: 100, a: 1 }, setColor } = props;

	const ColorPickerClsx = clsx('xtrColorPicker', className);

	return (
		<div
			ref={ref}
			className={ColorPickerClsx}
		>
			<Wheel
				className='wheel'
				color={color}
				width={WHEEL_SIZE} height={WHEEL_SIZE}
				onChange={(col) => setColor(col.hsva)}
			/>
			{
				shade &&
				<ShadeSlider
					className='shade'
					hsva={color}
					onChange={({ v }) => setColor({ ...color, v })}
				/>
			}
			{
				alpha &&
				<Alpha
					className='alpha'
					hsva={color}
					onChange={({ a }) => setColor({ ...color, a })}
				/>
			}
		</div>
	);
});

ColorPicker.displayName = 'ColorPicker';
