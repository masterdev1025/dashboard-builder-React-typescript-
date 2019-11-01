import { 
	CALL_ACTION,
	INIT_GLOBAL,
	UPDATE_DASHBOARDS,
	UPDATE_TABS,
	UPDATE_FAVORITE_TABS,
	CHANGE_VIEW_MODE
 } from '../actions'

export default function GoldenStateReducer (
	state = {
		tabs:              new Array(),
		dashboards:        new Array(),
		favoriteDashboards:new Array(),
		favoriteTabs:      new Array(),
		currentAction:     "",
		viewMode:          "ListView"
	}, action:any) {
  switch (action.type) {
    //-----------------------------
	case CALL_ACTION:
		return{
			...state,
			currentAction:action.actionName
		}
	//-----------------------------
	case INIT_GLOBAL:
		return{
			...state,
			dashboards         :action.dashboards,
			tabs               :action.tabs,
			favoriteDashboards :action.favoriteDashboards,
			favoriteTabs       :action.favoriteTabs
		}
	case UPDATE_DASHBOARDS:
		return{
			...state,
			dashboards:action.dashboards
		}
	case UPDATE_TABS:
		return{
			...state,
			tabs: action.tabs
		}
	case UPDATE_FAVORITE_TABS:
		return{
			...state,
			favoriteTabs: action.favoriteTabs
		}
	case CHANGE_VIEW_MODE:
		return{
			...state,
			viewMode:action.viewMode
		}
    default:
      return state
  }
}
