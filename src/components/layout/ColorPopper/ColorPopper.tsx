import { forwardRef, useEffect, useMemo, useState } from 'react';

import {
	FloatingFocusManager,
	autoUpdate,
	flip,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
} from '@floating-ui/react';
import clsx from 'clsx';
import { Colord, colord, getFormat } from 'colord';

import { ColorPicker } from '#components/base/ColorPicker/ColorPicker';
import { Textfield } from '#components/base/Textfield/Textfield';
import { mergeRefs } from '#utils/index';

import styles from './colorPopper.module.scss';
import { TColorPopperProps } from './types';

import type { Input } from 'colord/types';

export const ColorPopper = forwardRef<HTMLDivElement, TColorPopperProps>((props, ref) => {
	const { className, placeholder = 'Color Picker', color, setColor } = props;

	const localColor = useMemo(() => colord(color), [color]);
	const format = useMemo(() => getFormat(color as Input), [color]);
	const [textColor, setTextColor] = useState<string>();

	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(10), flip(), shift()],
		whileElementsMounted: autoUpdate,
	});

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useClick(context),
		useDismiss(context),
	]);

	const ColorPopperClsx = clsx(
		styles.colorPopper,
		className,
	);

	const onColorChange = (col: Colord) => {
		if (format === 'rgb') setColor?.(col.toRgb());
		if (format === 'hex') setColor?.(col.toHex());
		else if (format === 'hsl') setColor?.(col.toHsl());
		else if (format === 'hsv') setColor?.(col.toHsl());
	};

	const onTextChange = (color: string) => {
		const format = getFormat(color as Input);
		setTextColor(color);
		if (format && ((format === 'hex' && color.length > 6) || format !== 'hex')) onColorChange(colord(color));
	};

	useEffect(() => {
		setTextColor(localColor.toHex());
	}, [localColor]);

	return (
		<>
			<Textfield
				className={styles.colorInput}
				ref={refs.setReference}
				placeholder={placeholder}
				icon='color'
				value={textColor}
				onChange={(e) => onTextChange(e.target.value)}
				style={{ ['--chipColor' as string]: localColor.toHex() }}
				onFocus={() => setIsOpen(true)}
				{...getReferenceProps()}
			/>
			{
				isOpen &&
				<FloatingFocusManager context={context} modal={false}>
					<div
						ref={mergeRefs([ref, refs.setFloating])}
						className={ColorPopperClsx}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						<ColorPicker
							color={color}
							setColor={setColor}
						/>
					</div>
				</FloatingFocusManager>
			}
		</>
	);
});

ColorPopper.displayName = 'ColorPopper';
