import { Reducer} from 'redux';
import { DDCActions, A,B } from './actions';
// import { string } from 'prop-types';


export interface IDashboardData {
}
export interface IDashboardDataCollection {
}

const initialState: IDashboardDataCollection = {
};



export const DashboardData: Reducer<IDashboardDataCollection, DDCActions> = (state = initialState, action) => {
	console.log('--->DashboardData',state)
	const { payload } = action; 
	switch (action.type) {
		case A:
			console.log(`--> HANDEL ${action.type} with payload ${payload}`)

		case B:
			console.log(`--> HANDEL ${action.type} with payload ${payload}`)

		default:
			return state;
	}
};

// export default DFReducer;


