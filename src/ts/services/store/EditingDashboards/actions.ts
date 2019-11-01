import { Action } from 'redux';

export const START_DASHBOARD_EDIT:string		 = "START_DASHBOARD_EDIT";
export const END_DASHBOARD_EDIT:string			 = "END_DASHBOARD_EDIT";




export type GXActionType = "START_DASHBOARD_EDIT"  | "END_DASHBOARD_EDIT";

export type GXPayload = string;

export type GXActions = Action<GXActionType, GXPayload>;

export const startDashboardEdit = (payload: GXPayload ) => ({ type: 'START_DASHBOARD_EDIT', payload });
export const endDashboardEdit = (payload: GXPayload ) => ({ type: 'END_DASHBOARD_EDIT', payload });

