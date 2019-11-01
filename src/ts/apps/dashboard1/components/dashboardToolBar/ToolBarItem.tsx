import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { generateUUIDv4 } from "@bitjourney/uuid-v4";
//---import Material Ui components--
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';

//--- import Actions----
import {undo, redo} from '../../../../services/dashboard1/actions';
import {createNewDashboard} from '../../../../services/store/DashboardConfig'
import {showModal, hideModal} from '../modals/modalAction';
import { onDashboardSelect } from '../../../../services/store/CurrentDashboard/actions';
import { startDashboardEdit, endDashboardEdit } from '../../../../services/store/EditingDashboards'

//----------------------
interface ToolBarItemState {
	hover: any;
};
class ToolBarItem extends React.Component<any,ToolBarItemState>{
	constructor(props:any)
	{
		super(props);
		this.state = {
			hover:false
		}
	}
	
	onClickItem = (_actionName:any) => {
		if(_actionName == "undoAction")
		{
			if(this.props.pastState.length > 1)
			{
				this.props.undoRedoAction.undo();
			}
		}else if(_actionName == "redoAction")
		{
			if(this.props.futureState.length > 0)
			{
				this.props.undoRedoAction.redo();
			}
		}else if(_actionName == "saveAction"){

		}else if(_actionName == "createDashboardAction"){
			this.props.toolAction.createNewDashboard();
			this.props.toolAction.onDashboardSelect(this.props.dashboards[this.props.dashboards.length - 1].id);
		} else if(_actionName == "editAction") {
			if(this.isDashboardEditing()) this.props.toolAction.endDashboardEdit(this.props.currentDashboardId);
			else this.props.toolAction.startDashboardEdit(this.props.currentDashboardId);
		}
	}
	isDashboardEditing(): boolean {
		return this.props.editingDashboardIds && this.props.editingDashboardIds.indexOf(this.props.currentDashboardId) != -1
	}
	render_color = (_label:any) =>{
	
		if(_label == "Edit"){
			if(this.isDashboardEditing()) return "#ffc400";
			else return "black";
		} else {
			return "black";
		}

	}

	render()
	{
		const { Label } = this.props; //toolbar item label from config : example "undo", "redo"
		if(this.state.hover == true)
		{
			return(
				<ListItemText  inset style = {{ paddingLeft:"25px"}}>
					<TypoGraphy onClick = {() => this.onClickItem(this.props.actionName)}
						style = {{
							cursor:"pointer",
							userSelect:"none",
							color:"#ffc400"	
						}}
						onMouseLeave = {()=>{
							this.setState({
								hover:false
							})
						}}
					>
						<i className = {this.props.iconName} style = {{marginRight:"5px"}}></i>{Label}
					</TypoGraphy>
				</ListItemText>
			)
		}else{
			return(
				<ListItemText inset style = {{ paddingLeft:"25px"}}>
					<TypoGraphy 
					    onClick = {() => this.onClickItem(this.props.iconName)}
						style = {{
							cursor:"pointer",
							userSelect:"none",
							color:this.render_color(Label)	
						}}
						onMouseEnter = {()=>{
							this.setState({
								hover: true
							})
						}}
					>
						<i className = {this.props.iconName} style = {{marginRight:"5px"}}></i>{Label}
					</TypoGraphy>
				</ListItemText>
			)
		}
	}
};

export default connect(
	(state:any) => {
		return{

			currentDashboardId: state.CurrentDashboard.dashboardId,
			dashboards:         state.DashboardConfig.dashboards,
			editingDashboardIds: state.EditingDashboards.editingDashboardIds
		}
	},
	dispatch => {
		return {
			undoRedoAction: bindActionCreators(
				{ undo, redo },
				dispatch
			),
			toolAction:bindActionCreators(
				{ createNewDashboard , onDashboardSelect, startDashboardEdit, endDashboardEdit},
				dispatch
			),
			modalAction:bindActionCreators(
				{showModal, hideModal},
				dispatch
			)
		}
	}
)(ToolBarItem);