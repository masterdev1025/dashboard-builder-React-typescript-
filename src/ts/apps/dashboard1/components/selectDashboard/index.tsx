import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import actions
import { IDashboardConfigCollection, IDashboardConfig } from '../../../../services/store/DashboardConfig';
import { onDashboardSelect } from '../../../../services/store/CurrentDashboard';
interface ISelectDashboardProp{
		DashboardConfig: IDashboardConfigCollection
		stateAction:any
}
interface ISelectDashboardState{
	DashboardConfig: IDashboardConfigCollection


}

class SelectDashboard extends React.Component<ISelectDashboardProp,ISelectDashboardState> {
	constructor(props:any)
	{
		super(props);

		
	}
	handleChange = (_event:any) =>{
		console.log('todo review this')
		this.props.stateAction.onDashboardSelect(_event.target.value)
		// this.setState({
		// 	dashboardNumber: event.target.value
		// });
		// console.log(this.props.dashboards[this.state.dashboardNumber].id);
		// this.props.stateAction.changeDashboardId(this.props.dashboards[event.target.value].id);

	}
	componentDidUpdate(_prevProps:any){
		// if(prevProps.DashboardNumber != this.props.DashboardNumber)
		// {
		// 	this.setState({
		// 	dashboardNumber: this.props.DashboardNumber
		// 	})
		// }
	}

	render(){
		return (
			<form   autoComplete="off">
			  <FormControl  style = {{marginTop:"30px", width:"200px"}} >
				<InputLabel htmlFor="dashboard-select">Select Dashboard</InputLabel>
				<Select
				  value={this.props.DashboardConfig.dashboards}
				  onChange={this.handleChange}
				  inputProps={{
					name: 'dashboard',
					id: 'dashboard-select',
				  }}
				>
					{
						this.props.DashboardConfig.dashboards.map((dashboard:IDashboardConfig, _index:number) => (
								<MenuItem value={dashboard.id} key = {dashboard.id} >
									{dashboard.name}
								</MenuItem>
						))
					}
				</Select>
			  </FormControl>
			</form>
		  );
	}
}
export default connect(
	(state:any) => {
		return{
			DashboardConfig:state.DashboardConfig
				}
	},
	dispatch => {
		return {
			stateAction: bindActionCreators(
				{ onDashboardSelect },
				dispatch
			)
		}
	}
)(SelectDashboard);