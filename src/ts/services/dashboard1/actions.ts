//---------------CURRENT_STATE_ACTION_DEFINE----------------------
	export const UNDO_STATE = 'UNDO_STATE'
	export const REDO_STATE = 'REDO_STATE'
			//initializing part
	export const INIT_LAYOUT                = 'INIT_LAYOUT'
	export const INIT_DASHBOARD_ID          = "INIT_DASHBOARD_ID";
	export const INIT_DASHBOARD_NAME        = 'INIT_DASHBOARD_NAME';
	export const INIT_DASHBOARD_DESCRIPTION = 'INIT_DESCRIPTION';
			//-----------------
			//updating part
	export const UPDATE_LAYOUT                = 'UPDATE_LAYOUT'
	export const CHANGE_DASHBOARD_ID          = "CHANGE_DASHBOARD_ID";
	export const CHANGE_DASHBOARD_NAME        = 'CHANGE_DASHBOARD_NAME';
	export const CHANGE_DASHBOARD_DESCRIPTION = 'CHANGE_DESCRIPTION';
			//--------------
//--------------GLOBAL_STATE_ACTION_DEFINE------------------------
	export const CALL_ACTION                = "CALL_ACTION";
	export const INIT_GLOBAL                = "INIT_GLOBAL";
	export const UPDATE_DASHBOARDS          = "UPDATE_DASHBOARDS";
	export const UPDATE_TABS                = "UPDATE_TABS";
	export const UPDATE_FAVORITE_TABS       = "UPDATE_FAVORITE_TABS";
	export const CHANGE_VIEW_MODE           = "CHANGE_VIEW_MODE";

//------------------CURRENT_STATE_ACTIONS-------------------------



export function undo () {
  return {
    type: UNDO_STATE
  }
}

export function redo () {
  return {
    type: REDO_STATE
  }
}


export function changeDashboardId(_id:any){
	return{
		type:CHANGE_DASHBOARD_ID,
		id:_id
	}
}
export function changeDashboardName(_name:any){
	return{
		type:CHANGE_DASHBOARD_NAME,
		name:_name
	}
}
export function changeDashboardDescription(_description:any){
	return{
		type:CHANGE_DASHBOARD_DESCRIPTION,
		description:_description
	}
}
export function updateLayout (newLayout:any) {
	return {
	  type: UPDATE_LAYOUT,
	  Layout: newLayout
	}
  }

//-----------------------initial part------------------------------------------------------------
// export function init(_id:any, _name:any, _description:any, _layout:any, _favorite:any)
// {
// 	return{
// 		type:INIT,
// 		id:_id,
// 		name:_name,
// 		description:_description,
// 		layout:_layout,
// 		favorite:_favorite
// 	}
// }
export function initDashboardId(_id:any){
	return{
		type:INIT_DASHBOARD_ID,
		id:_id
	}
}
export function initDashboardName(_id:any){
	return{
		type:INIT_DASHBOARD_NAME,
		id:_id
	}
}
export function initDashboardDescription(_description:any){
	return{
		type:INIT_DASHBOARD_DESCRIPTION,
		description:_description
	}
}
export function initLayout (newLayout:any) {
	return {
		type: INIT_LAYOUT,
		Layout: newLayout
	}
	}

//-----------------------------GLOBAL_STATE_ACTIONS-----------------------------
export function callAction (_actionName:any) {
	return {
	  type: CALL_ACTION,
	  actionName: _actionName
	}
}
export function initGlobal(_dashboards:any, _tabs:any, _favoriteDashboards:any, _favoriteTabs:any)
{
	return{
		type:INIT_GLOBAL,
		dashboards:_dashboards,
		tabs:_tabs,
		favoriteDashboards:_favoriteDashboards,
		favoriteTabs:_favoriteTabs
	}
}
export function updateDashboards(_dashboards:any)
{
	return{
		type:UPDATE_DASHBOARDS,
		dashboards:_dashboards
	}
}
export function updateTabs(_tabs:any)
{
	return{
		type:UPDATE_TABS,
		tabs:_tabs
	}
}

export function updateFavoriteTabs(_favoriteTabs:any)
{
	return{
		type:UPDATE_FAVORITE_TABS,
		favoriteTabs:_favoriteTabs
	}
}
export function changeViewMode(_mode:any)
{
	return{
		type:CHANGE_VIEW_MODE,
		viewMode:_mode
	}
}