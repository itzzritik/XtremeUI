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
import { getColorLabel } from '#utils/helper/colorHelper';
import { mergeRefs, THEME_SCHEME } from '#utils/index';

import { Button } from '../Button/Button';

import './colorPopper.scss';

import type { ExtractColorType, TColorPopperProps } from './types';
import type { AnyColor, HsvaColor, Input } from 'colord/types';

function ColorPopperInner<T extends AnyColor = AnyColor> (props: TColorPopperProps<T>, ref: Ref<HTMLDivElement>) {
	const {
		className,
		popperClassName,
		input = 'textfield',
		size = 'default',
		placeholder = 'Color Picker',
		colorHeading = 'Pick color',
		schemeHeading,
		themeScheme,
		setThemeScheme,
		showReset = true,
		alpha,
		shade,
		swatch,
		hideWheel = false,
		color,
		setColor,
	} = props;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const initialColor = useMemo(() => colord(color), []);
	const format = useMemo(() => getFormat(color as Input), [color]);

	const [localColor, setLocalColor] = useState<HsvaColor>(initialColor.toHsv());
	const [inputValue, setInputValue] = useState(initialColor.toHex());
	const [heading, setHeading] = useState(colorHeading);
	const internalChange = useRef(false);

	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			shift({ crossAxis: true, padding: 18 }),
			flip(),
			offset(({ placement }) => (placement === 'bottom' ? 10 : 16)),
		],
		whileElementsMounted: autoUpdate,
	});
	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		duration: 200,
		initial: ({ side }) => ({
			opacity: 0,
			translate: side === 'bottom' ? '0px 8px' : '0px -8px',
		}),
	});
	const { getReferenceProps, getFloatingProps } = useInteractions([
		useClick(context),
		useDismiss(context),
	]);

	const [hslThemeColor, hslResetColor, iconColor] = useMemo(() => {
		const col = colord(localColor);
		const c1 = col.toHsl();
		const c2 = initialColor.toHsl();
		return [
			`${Math.round(c1.h)} ${Math.round(c1.s)}% ${Math.round(c1.l)}%`,
			`${Math.round(c2.h)} ${Math.round(c2.s)}% ${Math.round(c2.l)}%`,
			col.isLight() ? 'black' : 'white',
		];
	}, [initialColor, localColor]);

	const emitColorChange = (c: Colord) => {
		internalChange.current = true;
		if (format === 'rgb') setColor(c.toRgb() as ExtractColorType<T>);
		else if (format === 'hex') setColor(c.toHex() as ExtractColorType<T>);
		else if (format === 'hsl') setColor(c.toHsl() as ExtractColorType<T>);
		else if (format === 'hsv') setColor(c.toHsv() as ExtractColorType<T>);
	};

	const handleTextChange = (c: string) => {
		setInputValue(c);
		const parsed = colord(c);
		if (parsed.isValid()) {
			setLocalColor(parsed.toHsv());
			emitColorChange(parsed);
		}
	};

	const handlePickerChange = (c: HsvaColor) => {
		const parsed = colord(c);
		setLocalColor(c);
		setInputValue(parsed.toHex());
		emitColorChange(parsed);
	};

	const handleSwatchChange = (c: AnyColor) => {
		const parsed = colord(c);
		setLocalColor(parsed.toHsv());
		setInputValue(parsed.toHex());
		emitColorChange(parsed);
	};

	const handleReset = () => {
		setLocalColor(initialColor.toHsv());
		setInputValue(initialColor.toHex());
		emitColorChange(initialColor);
	};

	useEffect(() => {
		if (!internalChange.current) {
			const external = colord(color);
			setLocalColor(external.toHsv());
			setInputValue(external.toHex());
		}
		internalChange.current = false;
	}, [color]);

	useEffect(() => {
		setHeading(getColorLabel(colord(inputValue).toHsl()) ?? colorHeading);
	}, [colorHeading, inputValue]);

	return (
		<>
			{
				input === 'button' ?
					<Button
						className='xtrColorButton'
						ref={refs.setReference}
						size={size}
						icon='f53f'
						iconType='solid'
						style={{
							['--themeColor' as string]: hslThemeColor,
							['--iconColor' as string]: iconColor,
						}}
						onClick={() => setIsOpen(true)} {...getReferenceProps()}
					/>
					:
					<Textfield
						className={clsx('xtrColorInput', className)}
						ref={refs.setReference}
						placeholder={placeholder}
						icon='f53f'
						iconType='solid'
						active={isOpen}
						value={inputValue}
						onChange={(e) => handleTextChange(e.target.value)}
						style={{
							['--colorBrandPrimary' as string]: hslThemeColor,
							['--iconColor' as string]: iconColor,
						}}
						onFocus={() => setIsOpen(true)}
						{...getReferenceProps()}
					/>
			}

			{isMounted && (
				<div
					ref={mergeRefs([ref, refs.setFloating])}
					className={clsx('xtrColorPopper', popperClassName)}
					style={{ ...floatingStyles, ...transitionStyles, ['--colorBrandPrimary' as string]: hslThemeColor }}
					{...getFloatingProps()}
				>
					{
						(swatch || !hideWheel) &&
						<div className={clsx('header', input === 'button' && 'withInput')}>
							<div className='heading'>
								<div>
									<h1>{heading}</h1>
									{
										input === 'button' &&
										<input
											placeholder='#Hex'
											className={clsx('popperInput', className)}
											autoFocus
											value={inputValue}
											onChange={(e) => handleTextChange(e.target.value)}
										/>
									}
								</div>
								<h1>{colorHeading}</h1>
							</div>
							{
								showReset &&
								<Icon code='f1da' type='solid' style={{ ['--colorBrandPrimary' as string]: hslResetColor }}
									onClick={handleReset}
								/>
							}
						</div>
					}
					{
						swatch &&
							<div className='swatch'>
								{swatch.map((item, i) => {
									const isActive = colord(inputValue).isEqual(item);
									const c = colord(item).toHsl();
									const themeColorValue = `${c.h} ${c.s}% ${c.l}%`;

									return (
										<Button
											className='swatchItem'
											key={`ThemeColor-${c.h}${c.s}${c.l}-${i}`}
											icon='f00c'
											iconType='solid'
											size='mini'
											style={{
												['--themeColor' as string]: themeColorValue,
												color: isActive ? 'white' : 'transparent',
											}}
											onClick={() => handleSwatchChange(c)}
										/>
									);
								})}
							</div>
					}
					{
						!hideWheel &&
						<ColorPicker
							className='colorPicker'
							alpha={alpha}
							shade={shade}
							color={localColor}
							setColor={handlePickerChange}
						/>
					}
					{
						schemeHeading &&
						<div className='themeScheme'>
							<div className='header'>
								<div className='heading'>
									<div><h1>{themeScheme}</h1></div>
									<h1>{schemeHeading}</h1>
								</div>
							</div>
							<div className='schemeSelector'>
								{
									THEME_SCHEME.map(({ name, icon }, i) => (
										<Button
											key={`ThemeScheme-${name}-${i}`}
											icon={icon}
											iconType='solid'
											disabled={themeScheme === name}
											type={themeScheme === name ? 'primary' : 'secondary'}
											onClick={() => setThemeScheme?.(name)}
										/>
									))
								}
							</div>
						</div>
					}
				</div>
			)}
		</>
	);
}

export const ColorPopper = forwardRef(ColorPopperInner) as <T extends AnyColor = AnyColor>(
	props: TColorPopperProps<T> & { ref?: Ref<HTMLDivElement> }
) => ReturnType<typeof ColorPopperInner>;

ColorPopperInner.displayName = 'ColorPopper';
