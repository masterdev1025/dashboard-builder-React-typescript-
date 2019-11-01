import { Action } from 'redux';

export const CREATE_NEW_DASHBOARD:string		 = "CREATE_NEW_DASHBOARD";
export const DELETE_DASHBOARD:string			 = "DELETE_DASHBOARD";

export const DASHBOARD_LAYOUT_CHANGE:string			 		= "DASHBOARD_LAYOUT_CHANGE";
export const DEFAULT_LAYOUT_CHANGE:string			 		= "DEFAULT_LAYOUT_CHANGE";
export const UPDATE_DASHBOARD_TITLE:string			 		= "UPDATE_DASHBOARD_TITLE";
export const UPDATE_DASHBOARD_DESCRIPTION:string			= "UPDATE_DASHBOARD_DESCRIPTION";



export type DDCActionType = 
			"CREATE_NEW_DASHBOARD" | 
			"DELETE_DASHBOARD" | 
			"UPDATE_DASHBOARD_DESCRIPTION" | 
			"UPDATE_DASHBOARD_TITLE" | 
			"DASHBOARD_LAYOUT_CHANGE" |
			"DEFAULT_LAYOUT_CHANGE";

export type DFPayload = any;

export type DDCActions = Action<DDCActionType, DFPayload>;

export const createNewDashboard    = (payload: DFPayload ) => ({ type: 'CREATE_NEW_DASHBOARD', payload });
export const deleteDashboard       = (payload: DFPayload ) => ({ type: 'DELETE_DASHBOARD', payload });
export const updateDashboardDesc   = (payload: DFPayload ) => ({ type: 'UPDATE_DASHBOARD_DESCRIPTION', payload });
export const updateDashboardTitle  = (payload: DFPayload ) => ({ type: 'UPDATE_DASHBOARD_TITLE', payload });
export const dashboardLayoutChange = (payload: DFPayload ) => ({ type: 'DASHBOARD_LAYOUT_CHANGE', payload });
export const defaultLayoutChange   = (payload: DFPayload ) => ({ type: 'DEFAULT_LAYOUT_CHANGE', payload });
