import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
/**import components */
import DashboardToolBar from './components/dashboardToolBar';
import GoldenLayoutWrapper from './components/goldenLayoutView';
import TabView from './components/tabView';
import ModalConductor from './components/modals/modalConductor';
import Selector from './components/selector';
import { themes } from '../../components/styles/themes';
import { MuiThemeProvider } from '@material-ui/core';
	import DashboardHeader from './components/dashboard-header';
import DashboardSelectSection from './components/dashboard-select-section';
class Dashboard1 extends React.Component<any,any> {
	constructor(props:any)
	{
		super(props);
		this.renderSelectD = this.renderSelectD.bind(this);
	}
	renderSelectD(){
		if(this.props.viewMode == "ListView")
		{
			return <DashboardSelectSection/>
		} else {
			return <div></div>
		}
	}
	renderTabView()
	{
		if(this.props.viewMode == "TabView")
		{
			return(
				<Grid container>
							<TabView />
				</Grid>
			)
		} else {
			return "";
		}
	}
	render(){
		if(this.props.id == "")
		{
			return (
				<div>
					<ModalConductor/>
					<Selector/>
					<div>
						<Grid container>
							<DashboardToolBar />
						</Grid>
					</div>
				</div>
			)
		}else{
			return (
				<MuiThemeProvider theme={themes["dark"]}>
				<div>
					<ModalConductor/>
					<div>
						<Grid container>
							<DashboardToolBar />
						</Grid>
						{
							this.renderTabView()
						}
						<div>
							<Selector/>
							<Grid container>
								<Grid item xs = {9}>
									<DashboardHeader></DashboardHeader>
								</Grid>
								<GoldenLayoutWrapper />
							</Grid>
						</div>
					</div>
				</div>
				</MuiThemeProvider>
				);
		}
		
	}
}
export default  connect(
	(state:any) => {
		return{
			id: state.CurrentState.present.id,
			theme: state.settings.theme,
			viewMode: state.GlobalState.viewMode
		}
	},
	null
)(Dashboard1);