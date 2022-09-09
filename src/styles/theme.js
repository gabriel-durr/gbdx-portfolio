/* Estyles global ChakraUI */

import {extendTheme} from "@chakra-ui/react";

import {mode} from "@chakra-ui/theme-tools";

const styles = {
	global: props => ({
		body: {
			fontFamily: "body",
			color: mode("gray.100", "gray.900")(props),
			bg: mode("darkblue.500", "light.500")(props),
			lineHeight: "base",
			overflowX: "hidden",
		},
		a: {
			color: "gray.900",
			fontFamily: "DM Sans",
			_hover: {
				transition: "all 0.4s",
				color: "gray.400",
				textDecoration: "none !important",
			},
		},

		"*::placeholder": {
			color: mode("light.500", "darkblue.400")(props),
		},
		"*, *::before, &::after": {
			borderColor: "darkblue.50",
			wordWrap: "break-word",
		},
	}),
};

const colors = {
	gray: {
		900: "#181B23",
		800: "#1F2029",
		700: "#353646",
		600: "#4B4D63",
		500: "linear-gradient(90deg, #232526 0%, #414345 100%)",
		400: "#797D9A",
		300: "#9699B0",
		200: "#B3B5C6",
		100: "#D1D2DC",
		50: "#EEEEF2",
	},
	light: {
		900: "#FEFEFE",
		800: "#ffffff",
		700: "#E7E7E7",
		600: "#D1D1D1",
		500: "linear-gradient(90deg, #ffffff 20%, #fafcff 90%)",
		400: "#FDFCFC",
		300: "#FFFFF7",
		200: "#f6f5f0",
		100: "#f4ede3",
		50: "#efe7da",
	},

	darkblue: {
		900: "#060912",
		800: "#020410",
		700: "#05193e",
		600: "#182a42",
		500: "linear-gradient(90deg, #242b42 60%, #859398 800%)",
		400: "#152238",
		300: "#192841",
		200: "#1c2e4a",
		100: "#203354",
		50: "#b3ccf3",
	},

	orangeblue: {
		600: "#034d72",
		500: "linear-gradient(90deg, #0b486b 0%, #f56217 100%)",
		400: "#e61101",
		300: "#6d898d",
		200: "#6a0e03",
		100: "#00232f",
		50: "#f56217 ",
	},
};

const theme = extendTheme({
	styles,
	colors,
	fonts: {
		heading: "DM Sans, sans-serif",
		body: "Raleway, sans-serif",
	},
});

export default theme;