import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// import { red, yellow } from '@material-ui/core/colors';

let theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: green,
	},
	typography: {
		fontSize: 9,
		htmlFontSize: 10,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	shape: {
		borderRadius: 2
	},
	// https://material-ui.com/customization/z-index/
	zIndex: {

		mobileStepper: 1000 * 1000,
		appBar: 1100 * 1000,
		drawer: 1200 * 1000,
		modal: 1300 * 1000,
		snackbar: 1400 * 1000,
		tooltip: 1500 * 1000
	},
	props: {
		// Name of the component ⚛️
		MuiButtonBase: {
			// The default props to change
			disableRipple: true, // No more ripple, on the whole application 💣!
		}
	},
	overrides: {
		MuiIconButton: {
			root: {
				fontSize: '1rem',
			},
		}
	}
});

theme = responsiveFontSizes(theme);
export const customTheme = theme;