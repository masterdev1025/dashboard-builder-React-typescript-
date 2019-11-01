import { 
	SHOW_MODAL,
	HIDE_MODAL
} from './modalAction'

export default function ModalReducer (
state = { 
	modalType:"",
	params:[]
}, action:any) {
switch (action.type) {
	case SHOW_MODAL:
		return{
			...state, modalType:action.modalType, params:action.params
		}
	case HIDE_MODAL:
		return{
			...state,modalType:""
		}
	default:
		return state
	}
}
