import { Action } from 'redux';

export const CREATE_NEW_TAB:string		 = "CREATE_NEW_TAB";
export const CHANGE_TAB_NAME:string      = "CHANGE_TAB_NAME";
export const DELETE_TAB:string			 = "DELETE_TAB";

export type TActionType = 
			"CREATE_NEW_TAB" | 
			"DELETE_TAB"     |
			"CHANGE_TAB_NAME";

export type TPayload = any;

export type TActions = Action<TActionType, TPayload>;

export const createNewTab     = (payload: TPayload ) => ({ type: 'CREATE_NEW_TAB', payload });
export const changeTabName    = (payload: TPayload ) => ({ type: 'CHANGE_TAB_NAME', payload });
export const deleteTab        = (payload: TPayload ) => ({ type: 'DELETE_TAB', payload });
