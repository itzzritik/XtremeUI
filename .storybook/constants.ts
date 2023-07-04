const LightTheme = {
	"light-red": "#ffffff",
	"light-pink": "#fffffe",
	"light-orange": "#fffeff",
	"light-blue": "#feffff",
	"light-violet": "#fffffd",
	"light-black": "#fffdff",
}

const DarkTheme = {
	"dark-red": "#000000",
	"dark-pink": "#000001",
	"dark-orange": "#000100",
	"dark-blue": "#010000",
	"dark-violet": "#000002",
	"dark-black": "#000200",
}

export const ColorList = [
	...Object.keys(LightTheme).map((color) => ({name: color, value: LightTheme[color]})),
	...Object.keys(DarkTheme).map((color) => ({name: color, value: DarkTheme[color]})),
]