import { Reducer } from 'redux';
import { GXActions, ON_DASHBOARD_SELECT } from './actions';
// import { string } from 'prop-types';
import _ from "underscore"


export interface ICurrentDashboard {

	dashboardId?: string // uuid
	focusStartTimeUTC:string|undefined

}
const initialState = {
	dashboardId :undefined,
	focusStartTimeUTC:undefined
}


function onSetCurrentDashboard(state:ICurrentDashboard,newId?:string){

	console.log('onSetCurrentDashboard state,payload',state,newId)
	if(state.dashboardId !=newId){
		state.dashboardId = newId;
		state.focusStartTimeUTC = (new Date).toUTCString();
	}
}


export const CurrentDashboard: Reducer<ICurrentDashboard, GXActions> = (state = initialState, action) => {
	console.log('--->CurrentDashboard. curr dashboard id and launch time reducer', state)
	const { payload } = action;
	switch (action.type) {
		case ON_DASHBOARD_SELECT:
			onSetCurrentDashboard(state,payload)
			if(state.dashboardId != payload)
			{
				return {
					...state,
					dashboardId: payload,
					focusStartTimeUTC:(new Date).toUTCString()
				}
			} else 
			{
				return {
					...state
				}
			}
		default:
			return state;
	}
};

// export default DFReducer;
