import { combineReducers } from 'redux';
import CurrentGoldenStateReducer from './CurrentStateReducer';
import GlobalStateReducer from './GolbalStateReducer';
import ModalReducer from '../../../apps/dashboard1/components/modals/modalReducer';
//import settings from '../../../services/store/settings/reducer'
import counter from '../../../services/store/counter/reducer';
import settings from '../../../services/store/settings/reducer';
import {DFReducer} from '../../../services/store/dashboardFavorite';
import {DashboardConfig} from '../../../services/store/DashboardConfig';
import {TabConfig} from '../../../services/store/TabConfig';
import {CurrentDashboard} from '../../../services/store/CurrentDashboard';
import {EditingDashboards} from '../../../services/store/EditingDashboards';


import {
  UPDATE_LAYOUT,
  UNDO_STATE, REDO_STATE, CHANGE_DASHBOARD_DESCRIPTION, CHANGE_DASHBOARD_NAME
} from '../actions'
import undoable, { includeAction } from 'redux-undo'

const rootReducer = combineReducers({
	CurrentState: undoable(CurrentGoldenStateReducer, {
	filter: includeAction([
						   UPDATE_LAYOUT,
						   CHANGE_DASHBOARD_DESCRIPTION,
						   CHANGE_DASHBOARD_NAME]
						  ),
    limit: 10,
    debug: true,
    undoType: UNDO_STATE,
	redoType: REDO_STATE
  }),
  GlobalState:GlobalStateReducer,
  Modal: ModalReducer,
  counter,
  settings,
  DFReducer,
  DashboardConfig,
  TabConfig,
  CurrentDashboard,
  EditingDashboards
})
export default rootReducer
