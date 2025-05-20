import { forwardRef, useMemo, useRef, useState, useEffect, Ref } from 'react';

import {
	autoUpdate,
	flip,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useTransitionStyles,
} from '@floating-ui/react';
import clsx from 'clsx';
import { Colord, colord, getFormat } from 'colord';

import { ColorPicker } from '#components/base/ColorPicker/ColorPicker';
import { Icon } from '#components/base/Icon/Icon';
import { Textfield } from '#components/base/Textfield/Textfield';
import { mergeRefs } from '#utils/index';

import './colorPopper.scss';

import type { ExtractColorType, TColorPopperProps } from './types';
import type { AnyColor, HsvaColor, Input } from 'colord/types';

function ColorPopperInner<T extends AnyColor = AnyColor> (props: TColorPopperProps<T>, ref: Ref<HTMLDivElement>) {
	const {
		className,
		popperClassName,
		placeholder = 'Color Picker',
		showReset = true,
		alpha,
		shade,
		color,
		setColor,
	} = props;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const initialColor = useMemo(() => colord(color), []);
	const format = useMemo(() => getFormat(color as Input), [color]);

	const [localColor, setLocalColor] = useState<HsvaColor>(initialColor.toHsv());
	const [inputValue, setInputValue] = useState(initialColor.toHex());
	const internalChange = useRef(false);

	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			shift({ padding: 18 }),
			flip(),
			offset(({ placement }) => (placement === 'bottom' ? 10 : 16)),
		],
		whileElementsMounted: autoUpdate,
	});
	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		duration: 200,
		initial: ({ side }) => ({
			opacity: 0,
			scale: 0.9,
			translate: side === 'bottom' ? '0 12px' : '0 -12px',
		}),
	});
	const { getReferenceProps, getFloatingProps } = useInteractions([
		useClick(context),
		useDismiss(context),
	]);

	useEffect(() => {
		if (!internalChange.current) {
			const external = colord(color);
			setLocalColor(external.toHsv());
			setInputValue(external.toHex());
		}
		internalChange.current = false;
	}, [color]);

	const [hslThemeColor, iconColor] = useMemo(() => {
		const col = colord(localColor);
		const { h, s, l } = col.toHsl();
		return [`${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`, col.isLight() ? 'black' : 'white'];
	}, [localColor]);

	const emitColorChange = (c: Colord) => {
		internalChange.current = true;
		if (format === 'rgb') setColor(c.toRgb() as ExtractColorType<T>);
		else if (format === 'hex') setColor(c.toHex() as ExtractColorType<T>);
		else if (format === 'hsl') setColor(c.toHsl() as ExtractColorType<T>);
		else if (format === 'hsv') setColor(c.toHsv() as ExtractColorType<T>);
	};

	const handleTextChange = (val: string) => {
		setInputValue(val);
		const parsed = colord(val);
		if (parsed.isValid()) {
			setLocalColor(parsed.toHsv());
			emitColorChange(parsed);
		}
	};

	const handlePickerChange = (col: HsvaColor) => {
		setLocalColor(col);
		const parsed = colord(col);
		setInputValue(parsed.toHex());
		emitColorChange(parsed);
	};

	const handleReset = () => {
		const reset = initialColor.toHsv();
		setLocalColor(reset);
		setInputValue(initialColor.toHex());
		emitColorChange(initialColor);
	};

	return (
		<>
			<Textfield
				className={clsx('colorInput', className)}
				ref={refs.setReference}
				placeholder={placeholder}
				icon='f53f'
				value={inputValue}
				onChange={(e) => handleTextChange(e.target.value)}
				style={{
					['--colorBrandPrimary' as string]: hslThemeColor,
					['--iconColor' as string]: iconColor,
				}}
				onFocus={() => setIsOpen(true)}
				{...getReferenceProps()}
			/>
			{isMounted && (
				<div
					ref={mergeRefs([ref, refs.setFloating])}
					className={clsx('xtrColorPopper', popperClassName)}
					style={{ ...floatingStyles, ...transitionStyles, ['--colorBrandPrimary' as string]: hslThemeColor }}
					{...getFloatingProps()}
				>
					<div className='header'>
						<h1>Choose a color</h1>
						{showReset && <Icon code='f1da' onClick={handleReset} />}
					</div>
					<ColorPicker
						alpha={alpha}
						shade={shade}
						color={localColor}
						setColor={handlePickerChange}
					/>
				</div>
			)}
		</>
	);
}

export const ColorPopper = forwardRef(ColorPopperInner) as <T extends AnyColor = AnyColor>(
	props: TColorPopperProps<T> & { ref?: Ref<HTMLDivElement> }
) => ReturnType<typeof ColorPopperInner>;

ColorPopperInner.displayName = 'ColorPopper';
