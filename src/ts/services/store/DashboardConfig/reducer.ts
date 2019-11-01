import { Reducer } from 'redux';
import {
	DDCActions, DELETE_DASHBOARD, CREATE_NEW_DASHBOARD,
	UPDATE_DASHBOARD_DESCRIPTION,
	UPDATE_DASHBOARD_TITLE,
	DASHBOARD_LAYOUT_CHANGE,
	DEFAULT_LAYOUT_CHANGE
} from './actions';
// import { string } from 'prop-types';
import _ from "underscore"
import short from "short-uuid"


export interface IDashboardConfig {
	id: string // uuid
	name: string //name , may change. must be unique
	description: string // may change
	layout: Object //layout config
	revision: number //update revision to indicate a change.
	softDelete: boolean  //archive it
	dashboardUniqueNumber: number;
	createdOn: string;
	UtcCreatedOn: number;
}
const default_title = "Dashboard";
const default_description = "This is your dashboard description, double click to edit it.Or edit dashboard title to suit your need";
const default_layout = { "settings": { 
							   "hasHeaders": true, 
							   "constrainDragToContainer": false, 
							   "reorderEnabled": true, 
							   "selectionEnabled": false,
							   "popoutWholeStack": false, 
							   "blockedPopoutsThrowError": true,
							   "closePopoutsOnUnload": true,
							   "showPopoutIcon": false, 
							   "showMaximiseIcon": false,
							   "showCloseIcon": true,
							   "responsiveMode": "onload",
							   "tabOverlapAllowance": 0, 
							   "reorderOnTabMenuClick": true, 
							   "tabControlOffset": 10
							 }, 
						"dimensions": { 
							"borderWidth": 5,
							"borderGrabWidth": 15,
							"minItemHeight": 10,
							"minItemWidth": 10, 
							"headerHeight": 20, 
							"dragProxyWidth": 300,
							"dragProxyHeight": 200 
						},
						"labels": {
							 "close": "close",
							 "maximise": "maximise",
							 "minimise": "minimise",
							 "popout": "open in new window", 
							 "popin": "pop in", 
							 "tabDropdown": "additional tabs" 
							},
						 "content":[{
							type: 'row',
							content:[{
								type: 'component',
								componentName: 'component1',
								componentState: { text: 'Welcome' }
							},{
								type: 'component',
								componentName: 'component2',
								componentState: { text: 'Welcome' }
							}]
						}],
						 "isClosable": true, 
						 "reorderEnabled": true,
						 "title": "",
						 "openPopouts": [],
						 "maximisedItemId": null 
					};

export interface IDashboardConfigCollection {
	dashboards: Array<IDashboardConfig>, //hold all dashboards, delete or live
	defaultLayout: any
}

const initialState: IDashboardConfigCollection = {
	dashboards: new Array(),
	defaultLayout: default_layout
};

function onCrateNewDashboard(dashboards: Array<IDashboardConfig>, defaultLayout:any): Array<IDashboardConfig> {

	console.log('onCrateNewDashboard', dashboards);
	let x: number

	if (dashboards.length == 0) {
		x = -1;
	}
	else {
		x = _.max(_.pluck(dashboards, "dashboardUniqueNumber"));

	}
	console.log('current max is : ', x);


	let date: Date = (new Date());
	let dashboard: IDashboardConfig = {
		id: short.generate(),
		name: dashboards.length == 0 ? 'First dashboard' : `${default_title}-${x + 1}`,
		dashboardUniqueNumber: x + 1,
		layout: defaultLayout,
		description: default_description,
		UtcCreatedOn: date.getUTCDate(),
		createdOn: date.toUTCString(),
		revision: 0,
		softDelete: false

	};

	dashboards.push(dashboard);

	return dashboards;

}



function onDashboardDescChange(dashboards: Array<IDashboardConfig>,id:string,description:string): Array<IDashboardConfig> {

	
	let dashboard2:IDashboardConfig|undefined = _.find(dashboards,{id:id});

	if(dashboard2 == null){
		console.warn('cant find dashboard to update description',id,description)

		return dashboards
	}

	dashboard2.description = description;
	console.warn(' i should be updating existing object, i should do it in new object and new array')

	return dashboards
	
}
function onDashboardTitleChange(dashboards: Array<IDashboardConfig>,id:string,name:string): Array<IDashboardConfig> {

	
	let dashboard2:IDashboardConfig|undefined = _.find(dashboards,{id:id});

	if(dashboard2 == null){
		console.warn('cant find dashboard to update name',id,name)

		return dashboards
	}

	dashboard2.name = name;
	console.warn(' i should be updating existing object, i should do it in new object and new array')

	return dashboards
	
}
function onDashboardLayoutChange(dashboards: Array<IDashboardConfig>,id:string,layout:any): Array<IDashboardConfig> {

	
	let dashboard2:IDashboardConfig|undefined = _.find(dashboards,{id:id});
	if(dashboard2 == null){
		console.warn('cant find dashboard to update name',id,name)
		return dashboards
	}
	dashboard2.layout = layout;
	dashboard2.revision = dashboard2.revision + 1;
	console.warn(' i should be updating existing object, i should do it in new object and new array')
	console.log("dashboards:", dashboards);
	return dashboards
}


export const DashboardConfig: Reducer<IDashboardConfigCollection, DDCActions> = (state = initialState, action) => {
	console.log('--->DashboardConfig. Will keep track of all dashboard by add/delete. will help add new','background-color:yellow', state,action)
	let { payload } = action;
    console.log("DashboardConfig-Reducer:payload", payload);
	switch (action.type) {
		case CREATE_NEW_DASHBOARD:
			return { ...state, dashboards: onCrateNewDashboard(state.dashboards, state.defaultLayout) }
		case DELETE_DASHBOARD:
			throw new Error("not implemented");
			break;
		case DASHBOARD_LAYOUT_CHANGE:
			return { ...state, dashboards: onDashboardLayoutChange(state.dashboards, payload.dashboardId,payload.layout) }
			break;
		case DEFAULT_LAYOUT_CHANGE:
			return { ...state, defaultLayout: payload}
			break;
		case UPDATE_DASHBOARD_TITLE:
			return { ...state, dashboards: onDashboardTitleChange(state.dashboards, payload.dashboardId,payload.name) }
		case UPDATE_DASHBOARD_DESCRIPTION:
			return { ...state, dashboards: onDashboardDescChange(state.dashboards,payload.dashboardId,payload.description) }
		default:
			return state;
	}
};

// export default DFReducer;
