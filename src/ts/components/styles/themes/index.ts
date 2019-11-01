import { createMuiTheme } from '@material-ui/core';
// import { indigo, deepPurple } from '@material-ui/core/colors';

export type ThemeTypes = 'light' | 'dark';


const lightTheme = createMuiTheme({
	palette: {
		
		primary: {
		light: '#ffff5a',
		main: '#ffff00',
		dark: '#c7cc00',
		contrastText: '#000000',
	  },
	  secondary: {
		light: '#f4f4f4',
		main: '#949494',
		dark: '#888',
		contrastText: '#000000',
	  }
	},
	// overrides:{
	// 	MuiTooltip:{}
	// }
	// tooltip: {
	// 	color: '#f1f1f1',
	// 	rippleBackgroundColor: 'blue'
	//   },
  });


export const darkTheme  = createMuiTheme( {
	palette: {
		// primary: indigo,
		// secondary: deepPurple,
		primary: {
			light: '#ff7367',
			main: '#ff393c',
			dark: '#c40014',
			contrastText: '#000',
		  },
		  secondary: {
			light: '#c38334',
			main: '#8e5600',
			dark: '#5d2c00',
			contrastText: '#fff',
		  }
	  }
});

export const themes = {
	light: lightTheme,
	dark: darkTheme,
};
