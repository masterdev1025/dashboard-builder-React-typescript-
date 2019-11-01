import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import styled from 'styled-components';
import { IAppState } from '../../../services/store/reducersDef';
import GlobalStyle from '../../styles/GlobalStyle';
// import {  ThemeTypes } from '../styles/themes';
//import Counter from '../../components/Counter';
import {  Tooltip } from '@material-ui/core';
import { IGenericControl } from '../genericInterface';

interface IHoverIcon extends IGenericControl {
	tooltip: String;
	faIcon: String;
	onClick?: React.MouseEventHandler;
}

class HoverIcon extends React.Component<IHoverIcon> {

	render() {
		console.log('inside option comp', this.props.theme)
		return (
			// <MuiThemeProvider theme={themes[this.props.theme]}>
			<React.Fragment>
				{/* <Button variant="contained" color="primary" >
					x Primary
      </Button>
				<Button variant="contained" color="secondary" >
					x secondary
      </Button> */}
				<GlobalStyle />
				<HoverIconAppContainer>	
					<Tooltip title={this.props.tooltip}>


						<span className="fa-stack fa-lg" style={{ cursor: "pointer" }} onClick={this.props.onClick}>
							<i className="fa fa-circle fa-stack-2x"
								style={{ color: "red" }}></i>
							<i
								className={"fa "+this.props.faIcon+" fa-stack-1x fa-inverse"}
							></i>
						</span>
					</Tooltip>
					{/* <Counter /> */}
				</HoverIconAppContainer>
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

export default connect(mapStateToProps)(HoverIcon);

// const OptionsAppContainer = styled('div')`
// 	position: absolute;
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: center;
// 	justify-items: center;
// 	align-items: center;
// 	height: 90vh;
// 	width: 90vw;
// 	left: 5vw;
// 	top: 5vh;
// 	background-color: ${p => p.theme.backgroundColor};
// 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// `;


const HoverIconAppContainer = styled('span')`
	height: 20px;
	width: 20px;
	color: ${p => p.theme.color};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	:hover {
		color: ${p => p.theme.backgroundColor};
		opacity: 0.5;
		background-color: ${p => p.theme.secondary};
	  }
`;
