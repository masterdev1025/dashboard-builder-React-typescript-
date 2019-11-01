import { Reducer } from 'redux';
import { GXActions, START_DASHBOARD_EDIT, END_DASHBOARD_EDIT } from './actions';
// import { string } from 'prop-types';
import _ from "underscore"


export interface IEditingDashboards {

	editingDashboardIds:Array<string>; //Set would have been much better to add and remove, but i cant convert it to json on storing state in localStore
}

const initialState: IEditingDashboards = {
	editingDashboardIds : new Array()
};

function onAddRemove(editingDashboardIds:Array<string>, adding:boolean, dashboardId?:string):Array<string>{

	console.log('onAddRemove starting',editingDashboardIds);

	if(dashboardId == null) return editingDashboardIds;

	let dashboardId2:string = dashboardId;

	if(adding)
	{
		if(editingDashboardIds.indexOf(dashboardId2) != -1) return editingDashboardIds;

		editingDashboardIds.push(dashboardId2);

		return editingDashboardIds

	}
	else
	{
		if( editingDashboardIds.length == 0) return editingDashboardIds;
		return editingDashboardIds.filter((val)=> val !=dashboardId2 );
	}


}


export const EditingDashboards: Reducer<IEditingDashboards, GXActions> = (state = initialState, action) => {
	console.log('--->DashboardConfig. Will keep track of all dashboard by add/delete. will help add new', state)
	const { payload } = action;
	switch (action.type) {
		case START_DASHBOARD_EDIT:
			return { ...state, editingDashboardIds: [...onAddRemove(state.editingDashboardIds,true,payload)]}
		case END_DASHBOARD_EDIT:
			return { ...state, editingDashboardIds: [...onAddRemove(state.editingDashboardIds,false,payload)]}
		default:
			return state;
	}
};

// export default DFReducer;
