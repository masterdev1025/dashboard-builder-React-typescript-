
import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import {
// 	changeDashboardId,
// 	changeDashboardName,
// 	changeDashboardDescription,
// 	//--
// 	initDashboardName,
// 	initDashboardDescription
// } from '../../../../services/dashboard1/actions';

import SelectDashboard from '../selectDashboard';

interface DSState {
	DFIds: Set<string>
};
interface DSSProp {
	// dashboardId: string
	// Actions : any
};
class DashboardSelectorSection extends React.Component<DSSProp, DSState> {
	state:DSState = {DFIds: new Set()}

	constructor(props: any) {
		super(props);

		// this.toggleFavorite = this.toggleFavorite.bind(this);
	}


	componentDidUpdate(prevProps:any, prevState:any) {
		console.log(`componentDidUpdate)`,prevProps,prevState);
	  }

	render() {
		console.log("sss");
		return (
			<React.Fragment>

				
				<ContainerDSS>
				<div >
					<SelectDashboard/>
				</div>
				</ContainerDSS>
				{/* <FavIcon
					onClick={this.toggleFavorite}
					isFav={this.isFavorite()}
					tooltip = "test"
				></FavIcon> */}

			</React.Fragment>
		)
	}

}
export default connect(
	(state: any) => {
		return {
			DFIds: state.DFReducer.DFIds,
			// name: state.CurrentState.present.name,
			// description: state.CurrentState.present.description,
			theme: state.settings.theme
		}
	},
	// dispatch => {
	// 	return {
	// 		Actions: bindActionCreators(
	// 			{
	// 				changeDashboardId,
	// 				changeDashboardDescription,
	// 				changeDashboardName,
	// 				//init;
	// 				initDashboardName,
	// 				initDashboardDescription
	// 			},
	// 			dispatch
	// 		)
	// 	}
	// }
	null
)(DashboardSelectorSection);

const ContainerDSS = styled('div')`
	min-height: 50px;
	min-width: 300px;
	position:absolute;
	top: 35px;
	right:0px;
	background-color:#6975d0;
	color: ${p => p.theme.color};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	:hover {
		color: ${p => p.theme.backgroundColor};
		opacity: 0.5;
		background-color: ${p => p.theme.secondary};
	  }
`;
