import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
/**import components */
import DashboardToolBar from '../dashboardToolBar';
import ModalConductor from '../modals/modalConductor';
import Selector from '../selector';
import { themes } from '../../../../components/styles/themes';
import { MuiThemeProvider } from '@material-ui/core';
import { ICurrentDashboard } from '../../../../services/store/CurrentDashboard/reducer';
import _ from 'underscore'
import TabView2 from '../tabView2';
import MultiLayoutRenderer from '../multi-layout-renderer';

//we want to make our component typed. so interface is must
interface IGxAppViewProp {
	currentDashboardId?: string;

}

//sub-set of actual state object. this says we are not going to read anything else.
interface IAppViewState {
	//these names match what we have in reducer
	CurrentDashboard: ICurrentDashboard;
}

class GxAppView extends React.Component<IGxAppViewProp> {
	constructor(props: any) {
		super(props);
		// this.renderSelectD = this.renderSelectD.bind(this);
	}
	// renderSelectD() {
	// 	if (this.props.viewMode == "ListView") {
	// 		return <DashboardSelectSection />
	// 	} else {
	// 		return <div></div>
	// 	}
	// }
	renderTabView() {
		return (
			<Grid container>
				<TabView2 />
			</Grid>
		)
	}
	render() {
		return (
			<MuiThemeProvider theme={themes["dark"]}>

				<div>
					{/* model dialogs */}
					<ModalConductor />
					<Selector />
					<div>
						<Grid container>
							<DashboardToolBar />
						</Grid>
						<Grid container>
							{
								this.renderTabView()
							}
						</Grid>
						<Grid container style ={{padding:"20px"}}>
							<MultiLayoutRenderer/>
						</Grid>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
	// render2() {
	// 	if (this.props.id == "") {
	// 		return (
	// 			<div>
	// 				<ModalConductor />
	// 				<Selector />
	// 				<div>
	// 					<Grid container>
	// 						<DashboardToolBar />
	// 					</Grid>
	// 				</div>
	// 			</div>
	// 		)
	// 	} else {
	// 		return (
	// 			<MuiThemeProvider theme={themes["dark"]}>
	// 				<div>
	// 					<ModalConductor />
	// 					<div>
	// 						<Grid container>
	// 							<DashboardToolBar />
	// 						</Grid>
	// 						{
	// 							this.renderTabView()
	// 						}
	// 						<div>
	// 							<Selector />
	// 							<Grid container>
	// 								<Grid item xs={9}>
	// 									<DashboardHeader></DashboardHeader>
	// 								</Grid>
	// 								<Grid item xs={3}>
	// 									{
	// 										this.renderSelectD()
	// 									}
	// 								</Grid>
	// 							</Grid>
	// 							<GoldenLayoutWrapper />
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</MuiThemeProvider>
	// 		);
	// 	}

	// }
}
export default connect(
	(state: IAppViewState) => {
		return {
			currentDashboardId: state.CurrentDashboard.dashboardId
		}
	},
	null
)(GxAppView);