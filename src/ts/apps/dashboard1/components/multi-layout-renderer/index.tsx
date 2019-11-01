import * as React from 'react';
import { connect } from 'react-redux';

// import { IGenericControl } from '../../../../components/generic/genericInterface';
import GlobalStyle from '../../../../components/styles/GlobalStyle';
import DashboardHeader from '../dashboard-header';
import GoldenLayoutWrapper from '../goldenLayoutView';
import { ICurrentDashboard } from '../../../../services/store/CurrentDashboard';
import { IDashboardConfigCollection, IDashboardConfig } from '../../../../services/store/DashboardConfig';
import { onDashboardSelect } from "../../../../services/store/CurrentDashboard";
import { bindActionCreators } from 'redux';
interface IMultiLayoutRendererProp {
	currentDashboardId?: string;
	firstInListDashboard?: IDashboardConfig
	dashboardConfigs?: any
	Actions:any

}
interface IMultiLayoutRendererState {
	CurrentDashboard: ICurrentDashboard
	DashboardConfig: IDashboardConfigCollection
}

class MultiLayoutRenderer extends React.Component<IMultiLayoutRendererProp, IMultiLayoutRendererState> {

	componentDidMount() {
		this.seeIfNothingSelected();
		
	}
	componentDidUpdate(){
		this.seeIfNothingSelected();
		
	}
	seeIfNothingSelected() {
		console.log('☑ MultiLayoutRenderer',this.props.currentDashboardId );
			if (this.props.currentDashboardId == undefined
				&& this.props.firstInListDashboard != undefined) {
					
					console.log('no previous selection force selecting dashboard');
	
					this.props.Actions.onDashboardSelect(this.props.firstInListDashboard.id)
	
			}
			else if (this.props.currentDashboardId !=null){
				console.log('%c ☑☑ selected dashboard-id','color:green',this.props.currentDashboardId)
			}
	}

	render() {
		console.log('%c ♕♕ render : multi-layout-renderer','color:green',this.props.currentDashboardId)
		console.log(this.props.currentDashboardId,'color:blue');
		console.log(this.props.dashboardConfigs,   'color:green');
		return (
			<React.Fragment>
				<GlobalStyle />
				{
					this.props.currentDashboardId?(
						<React.Fragment>
							<DashboardHeader     
								thisDashboardId = {this.props.currentDashboardId}
								dashboardConfigs = {this.props.dashboardConfigs}
							/>
							<GoldenLayoutWrapper 
								thisDashboardId={this.props.currentDashboardId}
								dashboardConfigs = {this.props.dashboardConfigs}
							/>
						</React.Fragment>
					):(
						<div></div>
					)
				}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: IMultiLayoutRendererState) => {
	return {
		currentDashboardId   : state.CurrentDashboard.dashboardId,
		dashboardConfigs      : state.DashboardConfig.dashboards,
		firstInListDashboard : state.DashboardConfig.dashboards.length == 0 ?
			undefined
			: state.DashboardConfig.dashboards[0]
	};
};

export default connect(mapStateToProps, dispatch => {
	return {
		Actions: bindActionCreators(
			{
				onDashboardSelect
			},
			dispatch
		)
	}
})(MultiLayoutRenderer);

