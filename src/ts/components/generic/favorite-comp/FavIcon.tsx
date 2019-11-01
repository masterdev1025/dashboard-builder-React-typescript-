import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import HoverIcon from '../hover-icon-comp/HoverIcon';
import { IGenericControl } from '../genericInterface';
import GlobalStyle from '../../styles/GlobalStyle';
import { IAppState } from '../../../services/store/reducersDef';

interface IFavIcon extends IGenericControl {
	tooltip: String;

	isFav: boolean;
	onClick?: React.MouseEventHandler;
}

class FavIcon extends React.Component<IFavIcon> {

	render() {
		console.log('inside option comp', this.props.theme)
		return (
			// <MuiThemeProvider theme={themes[this.props.theme]}>
			<React.Fragment>

				<GlobalStyle />
				<FavIconAppContainer>
					<HoverIcon
						onClick={this.props.onClick}
						faIcon={this.props.isFav ? "fa-star" : "fa-star-o"}
						tooltip={this.props.isFav ? "remove" : "add to favorite"}
					></HoverIcon>

				</FavIconAppContainer>
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

export default connect(mapStateToProps)(FavIcon);

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


const FavIconAppContainer = styled('span')`
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
