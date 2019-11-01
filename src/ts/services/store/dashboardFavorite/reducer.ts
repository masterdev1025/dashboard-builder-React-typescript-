import { Reducer} from 'redux';
import { DFActions, ADD_DASHBOARD_TO_FAVORITE,REMOVE_DASHBOARD_FROM_FAVORITE } from './actions';
// import { string } from 'prop-types';

export interface IDashboardFavorite {
	DFIds: Set<string>;
}

const initialState: IDashboardFavorite = {
	DFIds:  new Set()
};

function AddRemoveFromSet(set:Set<string>,value?:string,addOperation:boolean = true):Set<string>{
	if(!set) return set;
	if(value == undefined) return set;
	if(addOperation){
		return set.add(value);
	}else{
		set.delete(value);
		return set;

	}

}


export const DFReducer: Reducer<IDashboardFavorite, DFActions> = (state = initialState, action) => {
	console.log('df state reducer',state)
	const { payload } = action;
	switch (action.type) {
		case ADD_DASHBOARD_TO_FAVORITE:
			return { ...state, DFIds: AddRemoveFromSet(state.DFIds,payload,true) };

		case REMOVE_DASHBOARD_FROM_FAVORITE:
				return { ...state, DFIds: AddRemoveFromSet(state.DFIds,payload,false) };

		default:
			return state;
	}
};

// export default DFReducer;
