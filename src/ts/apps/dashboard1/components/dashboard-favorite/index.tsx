
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GlobalStyle from '../../../../components/styles/GlobalStyle';
import FavIcon from '../../../../components/generic/favorite-comp/FavIcon';
import {removeDashboardFavorite,addDashboardFavorite} from '../../../../services/store/dashboardFavorite'
interface DFState {
	DFIds: Set<string>
};
interface DFProp {
	dashboardId: string
	Actions : any
};
class DashboardFavorite extends React.Component<DFProp, DFState> {
	state:DFState = {DFIds: new Set()}

	constructor(props: any) {
		super(props);

		this.toggleFavorite = this.toggleFavorite.bind(this);
	}


	toggleFavorite() {

		if(this.isFavorite()){
			this.props.Actions.removeDashboardFavorite(this.props.dashboardId);
			this.state.DFIds.delete(this.props.dashboardId);

		}
		else{
			this.props.Actions.addDashboardFavorite(this.props.dashboardId);
			this.state.DFIds.add(this.props.dashboardId);

		}

		//should not be needed
		this.forceUpdate();

	}
	componentDidMount(){
		
	}
	componentDidUpdate(prevProps:any, prevState:any) {
//		this.state.DFIds = prevState.DFIds;
		console.log(`this.state.clickCounts(☕♻️ componentDidUpdate)`,prevProps,prevState);
		//this.forceUpdate();
	  }

	isFavorite(): boolean {
		return this.state.DFIds != null && this.state.DFIds.has(this.props.dashboardId);
	}
	render() {
		console.log("sss");
		return (
			<React.Fragment>

				<GlobalStyle />
				<FavIcon
					onClick={this.toggleFavorite}
					isFav={this.isFavorite()}
					tooltip = "test"
				></FavIcon>

			</React.Fragment>
		)
	}

}
export default connect(
	(state: any) => {
		return {
			DFIds: state.DFReducer.DFIds,
			theme: state.settings.theme
		}
	},
	dispatch => {
		return {
			Actions: bindActionCreators(
				{
					addDashboardFavorite,
					removeDashboardFavorite
				},
				dispatch
			)
		}
	}
)(DashboardFavorite);