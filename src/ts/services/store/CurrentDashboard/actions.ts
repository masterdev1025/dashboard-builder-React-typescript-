import { Action } from 'redux';

export const ON_DASHBOARD_SELECT:string		 = "ON_DASHBOARD_SELECT";


export type ActionType = "ON_DASHBOARD_SELECT";

export type Payload = string;

export type GXActions = Action<ActionType, Payload>;

export const onDashboardSelect = (payload: Payload ) => ({ type: 'ON_DASHBOARD_SELECT', payload });
