import { UPDATE_LAYOUT,
         CHANGE_DASHBOARD_ID,
	     CHANGE_DASHBOARD_DESCRIPTION,
	     CHANGE_DASHBOARD_NAME,
		 //--init part--
		//  INIT,
		 INIT_LAYOUT,
		 INIT_DASHBOARD_ID,
		 INIT_DASHBOARD_NAME,
		 INIT_DASHBOARD_DESCRIPTION,
		 //--------------
} from '../actions'

export default function CurrentStateReducer (
	state = { 
		 Layout: "", 
		 id:"",
		 name:"",
		 description:"",
		 favorite:false
	}, action:any) {
  switch (action.type) {
    case UPDATE_LAYOUT:
		 return { ...state, Layout: action.Layout }
	case CHANGE_DASHBOARD_ID:
		 return { ...state, id: action.id }
	case CHANGE_DASHBOARD_NAME:
		 return { ...state, name: action.name }
	case CHANGE_DASHBOARD_DESCRIPTION:
		 return { ...state, description: action.description }

	case INIT_LAYOUT:
		 return { ...state, Layout: action.Layout }
	case INIT_DASHBOARD_ID:
		 return { ...state, id: action.id }
	case INIT_DASHBOARD_NAME:
		 return { ...state, name: action.name }
	case INIT_DASHBOARD_DESCRIPTION:
		 return { ...state, description: action.description }
    default:
         return state
  }
}
