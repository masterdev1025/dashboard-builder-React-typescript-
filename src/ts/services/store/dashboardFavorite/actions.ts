import { Action } from 'redux';

export const ADD_DASHBOARD_TO_FAVORITE:string		 = "ADD_DASHBOARD_TO_FAVORITE";
export const REMOVE_DASHBOARD_FROM_FAVORITE:string	 = "REMOVE_DASHBOARD_FROM_FAVORITE";


export type DFActionTypes = 'ADD_DASHBOARD_TO_FAVORITE' | 'REMOVE_DASHBOARD_FROM_FAVORITE';
export type DFPayload = string;

export type DFActions = Action<DFActionTypes, DFPayload>;

export const addDashboardFavorite = (payload: DFPayload ) => ({ type: 'ADD_DASHBOARD_TO_FAVORITE', payload });
export const removeDashboardFavorite = (payload: DFPayload ) => ({ type: 'REMOVE_DASHBOARD_FROM_FAVORITE', payload });
