
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Material ui components
import TypoGraphy from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from '@material-ui/core';
//import themes;
import { themes } from '../../../../components/styles/themes';
//import components
import DashboardFavorite from '../dashboard-favorite';
//import interfaces;
import { IDashboardConfig, IDashboardConfigCollection } from '../../../../services/store/DashboardConfig';
import { IEditingDashboards } from '../../../../services/store/EditingDashboards';
//import actions;
import { startDashboardEdit, endDashboardEdit } from '../../../../services/store/EditingDashboards'
import { updateDashboardDesc, updateDashboardTitle } from '../../../../services/store/DashboardConfig'
import { changeTabName } from '../../../../services/store/TabConfig/actions';
import _ from 'underscore'

interface IDashboardHeaderProp {
	editingDashboardIds: Array<String>
	thisDashboardId: string //must have id for this dashboard
	dashboardConfigs: Array<IDashboardConfig>
	Actions: any
}

interface IDashboardHeaderState {
	DashboardConfig: IDashboardConfigCollection
	EditingDashboards: IEditingDashboards
}

class DashboardDescription2 extends React.Component<IDashboardHeaderProp, IDashboardHeaderState> {

	constructor(props: any) {
		super(props);
	}
	componentDidMount() {
	}
	componentDidUpdate(_prevPros: any) {
	}
	isDashboardEditing(): boolean {
		return this.props.editingDashboardIds && this.props.editingDashboardIds.indexOf(this.props.thisDashboardId) != -1
	}
	onEdit = (_event: any):void =>{
		this.props.Actions.startDashboardEdit(this.props.thisDashboardId);
	}
	onInputKeyPress = (event: any, fieldType: string):void=> {
		console.log("key_event:", event.key);
		if (event.key === 'Enter') {
			console.log('enter press here! ')
			console.log('event.target', event.target);
			if(fieldType == "desc"){
				this.props.Actions.updateDashboardDesc(
					{
						dashboardId : this.props.thisDashboardId,
						description : event.target.value
					}
				)
			}else if (fieldType == "title"){
				this.props.Actions.updateDashboardTitle(
						{
							dashboardId : this.props.thisDashboardId,
							name        : event.target.value
						}
					);
				this.props.Actions.changeTabName({
					id   : this.props.thisDashboardId,
					name : event.target.value
				})
			}else{
				console.warn('unknown field type edited',fieldType)
			}
		}
		else if (event.key === 'Escape') {
			console.log('escape press here! ')
			this.props.Actions.endDashboardEdit(this.props.thisDashboardId)
		}
	}


	render_editing_header(_thisDashboardConfig: IDashboardConfig) {
		return (<div>i am editing</div>)
	}
	render_header(thisDashboardConfig: IDashboardConfig) {
		return (
			<div style={{ display: "flex" }}>
				<div style={{ margin: "10px", userSelect: "none", width: "50%" }}>
					<TypoGraphy variant="h5" component="h5" gutterBottom style={{ wordWrap: "break-word" }}
					>
						{this.render_title(thisDashboardConfig)}
					</TypoGraphy>
					<TypoGraphy variant="h6" component="h6" gutterBottom color="textSecondary" style={{ wordWrap: "break-word" }}
					>
						{this.render_description(thisDashboardConfig)}
					</TypoGraphy>

				</div>
				<div style={{ margin: "10px" }}>
					<div style={{ margin: "10px" }}>
						<DashboardFavorite dashboardId={this.props.thisDashboardId}></DashboardFavorite>
					</div>
				</div>
			</div>)
	}
	renderDashboard(thisDashboardConfig: IDashboardConfig) {
		return (
			<MuiThemeProvider theme={themes["light"]}>
				{thisDashboardConfig != null &&  this.render_header(thisDashboardConfig)}
			</MuiThemeProvider>
		)
	}
	render() {
		console.error('fix this component, dashboard config should never be null if id exist --> thisDashboardConfig:IDashboardConfig|undefined  ')
		let thisDashboardConfig: IDashboardConfig | undefined = GetDashboardConfig(this.props.dashboardConfigs, this.props.thisDashboardId)
		return (
			<React.Fragment>
				{thisDashboardConfig != null && this.renderDashboard(thisDashboardConfig)}
			</React.Fragment>
		)
	}

	render_title(thisDashboardConfig: IDashboardConfig) {
		if (this.isDashboardEditing()) {
			// input
			return (
				<TypoGraphy component="div" style={{ display: "flex" }} >
					<TextField
						id="outlined-name"
						label="DashboardName"
						defaultValue={thisDashboardConfig.name}
						margin="normal"
						variant="outlined"
						onKeyDown={(e) => this.onInputKeyPress(e, "title")}
						fullWidth
					/>
					<TypoGraphy component="div" style={{ display: "flex", flexDirection: "column" }}>
						<i className="fa fa-check-circle fa-lg"
							style={{ marginTop: "17px", marginLeft: "4px", color: "green", cursor: "pointer" }}
						></i>
						<i className="fa fa-close fa-lg"
							style={{ marginTop: "10px", marginLeft: "4px", color: "#a59b59", cursor: "pointer" }}
						></i>
					</TypoGraphy>
				</TypoGraphy>
			)

		} else {
			// Label
			return (<div onDoubleClick={this.onEdit}>{thisDashboardConfig.name}</div>);
		}
	}
	render_description(thisDashboardConfig: IDashboardConfig) {
		if (this.isDashboardEditing()) {
			return (
				<TypoGraphy component="div" style={{ display: "flex" }}>
					<TextField
						id="outlined-name"
						label="Description_Edit"
						defaultValue={thisDashboardConfig.description}
						margin="normal"
						variant="outlined"
						onKeyDown={(e) => this.onInputKeyPress(e, "desc")}
						multiline
						fullWidth
					/>
					<TypoGraphy component="div" style={{ display: "flex", flexDirection: "column" }}>
						<i className="fa fa-check-circle fa-lg"
							style={{ marginTop: "17px", marginLeft: "4px", color: "green", cursor: "pointer" }}
						></i>
						<i className="fa fa-close fa-lg"
							style={{ marginTop: "10px", marginLeft: "4px", color: "#a59b59", cursor: "pointer" }}
						></i>
					</TypoGraphy>
				</TypoGraphy>
			)
		} else {
			// Label
			return (<div onDoubleClick={this.onEdit}>{thisDashboardConfig.description}</div>);
		}
	}
}
function GetDashboardConfig(dashboards: Array<IDashboardConfig>, dashboardId: string): IDashboardConfig | undefined {

	let result: IDashboardConfig | undefined = _.find(dashboards, { id: dashboardId })
	return result;
}
const mapStateToProps = (state: IDashboardHeaderState) => {
	return {
		editingDashboardIds: state.EditingDashboards.editingDashboardIds
	};
};

export default connect(mapStateToProps, dispatch => {
	return {
		Actions: bindActionCreators(
			{
				startDashboardEdit,
				endDashboardEdit,
				updateDashboardTitle,
				updateDashboardDesc,
				changeTabName
			},
			dispatch
		)
	}
})(DashboardDescription2);

