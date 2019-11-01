import { Reducer } from 'redux';
import {
	TActions, DELETE_TAB, CREATE_NEW_TAB, CHANGE_TAB_NAME
} from './actions';
import _ from "underscore"

export interface ITabConfig {
	id: string, // uuid
	name: string
}
export interface ITabConfigCollection {
	tabs: Array<ITabConfig> //hold all tabs, delete or live
}

const initialState: ITabConfigCollection = {
	tabs: new Array()
};
const TAB_LIMIT:number = 5;
function onCreateNewTab(tabs: Array<ITabConfig>, id:string, name:string): Array<ITabConfig> {

	console.log('onCrateNewTab', tabs);
	let x: number
	if (tabs.length == 0) {
		x = -1;
	}
	else {
		x = _.max(_.pluck(tabs, "TabUniqueNumber"));
	}
	console.log('current max is : ', x);
	let tab: ITabConfig = {
		id: id,
		name:name
	};
	if(tabs.length >= TAB_LIMIT)
	{
		tabs.shift();
	}
	tabs.push(tab);
	return tabs;

}
function onChangeTabName(tabs: Array<ITabConfig>, id:string, name:string): Array<ITabConfig> {
	let CTab:ITabConfig | undefined = _.find(tabs, {id:id});
	if(CTab == null)
	{
		return tabs;
	} else {
		CTab.name = name;
	}
	return tabs;
}
function onDeleteTab(tabs:Array<ITabConfig>, id:string): Array<ITabConfig>{
	console.log("DeleteTAb");
	let resultTabs:Array<ITabConfig>;
	resultTabs = _.filter(tabs, function(tab){ return tab.id!= id});
	return resultTabs;
}
export const TabConfig: Reducer<ITabConfigCollection, TActions> = (state = initialState, action) => {
	console.log('--->TabConfig. Will keep track of all dashboard by add/delete. will help add new','background-color:yellow', state,action)
	let { payload } = action;
    console.log("TabConfig-Reducer:payload", payload);
	switch (action.type) {
		case CREATE_NEW_TAB:
			return { ...state, tabs: onCreateNewTab(state.tabs, payload.id, payload.name) }
		case CHANGE_TAB_NAME:
			return { ...state, tabs: onChangeTabName(state.tabs, payload.id, payload.name)}
		case DELETE_TAB:
			return { ...state, tabs: onDeleteTab(state.tabs, payload.id) }
			break;
		default:
			return state;
	}
};

// export default DFReducer;
