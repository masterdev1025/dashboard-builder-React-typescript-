import { Action } from 'redux';

export const A:string		 = "A";
export const B:string	 = "B";


export type DDCActionType = 'A' | 'B';
export type DFPayload = string;

export type DDCActions = Action<DDCActionType, DFPayload>;

export const addDashboardFavorite = (payload: DFPayload ) => ({ type: 'A', payload });
export const removeDashboardFavorite = (payload: DFPayload ) => ({ type: 'B', payload });
