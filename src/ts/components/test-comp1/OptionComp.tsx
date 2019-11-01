import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { IAppState } from '../../services/store/reducersDef';
import GlobalStyle from '../styles/GlobalStyle';
import {  ThemeTypes } from '../styles/themes';
import Counter from '../../components/Counter';
import {  Button } from '@material-ui/core';

interface IOptionsApp {
	theme: ThemeTypes;
	dispatch: Dispatch;
}

class OptionsComp extends React.Component<IOptionsApp> {

	render() {
		console.log('inside option comp',this.props.theme)
		return (
			// <MuiThemeProvider theme={themes[this.props.theme]}>
				<React.Fragment>
				<Button variant="contained" color="primary" >
        x Primary
      </Button>
	  <Button variant="contained" color="secondary" >
	  x secondary
      </Button>
					<GlobalStyle />
					<OptionsAppContainer>
						<Counter/>
					</OptionsAppContainer>
				</React.Fragment>
			// </MuiThemeProvider>
		);
	}
}

const mapStateToProps = (state: IAppState) => {
	return {
		theme: state.settings.theme
	};
};

export default connect(mapStateToProps)(OptionsComp);

const OptionsAppContainer = styled('div')`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-items: center;
	align-items: center;
	height: 90vh;
	width: 90vw;
	left: 5vw;
	top: 5vh;
	background-color: ${p => p.theme.backgroundColor};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
