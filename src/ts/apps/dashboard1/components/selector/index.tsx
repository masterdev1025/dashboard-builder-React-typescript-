import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {
// 	initGlobal,
// 	changeViewMode
// } from '../../../../services/dashboard1/actions';

import {createNewDashboard} from '../../../../services/store/DashboardConfig'

import  './selector.scss';
// import {Label, Button} from 'reactstrap';
class Selector extends React.Component<any,any>{
	// firstRender:any;
	// upDatedCount:any;
	// SavedDashboards:any;
	// SavedTabs:any;
	// SavedFavoriteDashboards:any;
	// SavedFavoriteTabs:any;
	// currentDashboardName:any;
	// currentDashboardId: any;
	// currentDashboardDescription:any;
	// currentDashboardLayout:any;
	// currentDashboardFavorite:any;
	// savedDashboardIs:any;
	constructor(props:any)
	{
		super(props);
		this.toggle = this.toggle.bind(this);
		// this.viewModeBtnText = this.viewModeBtnText.bind(this);
		// this.toggleView = this.toggleView.bind(this);
		//load saved dashboards as string;
		// const savedState = localStorage.getItem( 'savedDashboard1State' );
		// this.SavedDashboards = [];
		// this.SavedTabs       = [];
		// this.SavedFavoriteDashboards = [];
		// this.SavedFavoriteTabs       = [];
		// this.firstRender = true;
		// this.upDatedCount = 0;

		this.state = {
			sideBarToggle:false,
			// viewMode:"ListView"
		}
		// if( savedState ==  null || savedState == "" || savedState.length == 0)
		// {
			// this.currentDashboardId          = null;
			// this.currentDashboardName        = null;
			// this.currentDashboardLayout      = null;
			// this.currentDashboardDescription = null;
			// this.currentDashboardFavorite    = false;
			// this.savedDashboardIs            = false;
		// } else {
			//convert json from string of savedDashboard;
			// this.SavedDashboards         = JSON.parse(savedState).dashboards;
			// this.SavedTabs               = JSON.parse(savedState).tabs;
			// this.SavedFavoriteDashboards = JSON.parse(savedState).favoriteDashboards;
			// this.SavedFavoriteTabs       = JSON.parse(savedState).favoriteTabs;
			//set current dashboard(id, name, description, layout)
			// this.currentDashboardId          = this.SavedDashboards[0].id;
			// this.currentDashboardName        = this.SavedDashboards[0].name;
			// this.currentDashboardDescription = this.SavedDashboards[0].description;
			// this.currentDashboardLayout      = this.SavedDashboards[0].layout;
			// this.currentDashboardFavorite    = this.SavedDashboards[0].favorite;
			// this.savedDashboardIs            = true;

		// }
		// this.props.Actions.initGlobal(this.SavedDashboards,
		// 	this.SavedTabs,
		// 	this.SavedFavoriteDashboards,
		// 	this.SavedFavoriteTabs);
	}
	toggle(){
		console.log("sfsdfsdfsdf");
		this.setState({
			sideBarToggle: !this.state.sideBarToggle
		})
	}
	componentDidMount(){

	}
	componentDidUpdate(_prevPros:any)
	{
		// this.upDatedCount++;
		// if(this.upDatedCount <= 1 && this.savedDashboardIs == true) return;
		// else if( this.upDatedCount > 100){
		// 	this.upDatedCount = 2;
		// }
		// if(prevPros.id != this.props.id && this.firstRender == false)
		// {
		// 	console.log("ddd");
		// 	var idIs = false;
		// 	var idIndex = 0;
		// 	for(var i = 0; i < this.props.dashboards.length; i++)
		// 	{
		// 		if(this.props.dashboards[i].id == this.props.id)
		// 		{
		// 			idIs = true;
		// 			idIndex = i;
		// 		}
		// 	}
		// 	if(idIs == true)
		// 	{
				
		// 	} else {
				// console.log("new Dashboard");
				// this.props.Actions.createNewDashboard()
		// 	}
		// }
	}
	// viewModeBtnText()
	// {
	// 	console.log("sfdsdfsdf");
	// 	if(this.props.viewMode == "ListView") return "TabView";
	// 	else return "ListView";
	// }
	// toggleView(){
	// 	if(this.props.viewMode == "ListView")
	// 	{
	// 		this.props.Actions.changeViewMode("TabView");
	// 	} else {
	// 		this.props.Actions.changeViewMode("ListView");
	// 	}
	// }
	render(){
		var SideClassName = "";
		if(this.state.sideBarToggle == true)
		{
			SideClassName = "customizer open";
		} else {
			SideClassName = "customizer";
		}
		return(
			<div className = {SideClassName}>

				<div className = "handle"
					onClick = {this.toggle}
				>
							<i className = "fa fa-gear fa-spin"></i>
				</div>
				<div className = "customizer-body">
					 {/* <Label style ={{marginRight:"10px"}}>View Mode </Label> */}
					 {/* <Button outline color="primary" size = "sm" onClick = {this.toggleView}>{ */}
						 {/* this.viewModeBtnText() */}
					 {/* }</Button> */}
				</div>
			</div>
		)
	}

}

export default  connect(
	null,
	dispatch => {
		return {
			Actions: bindActionCreators(
				{ 
					createNewDashboard
					// initGlobal,
					// changeViewMode
				 },
				dispatch
			)
		}
	}
)(Selector);