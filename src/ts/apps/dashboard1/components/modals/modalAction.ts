export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export function showModal(_modalType:any, _params:any){
	return{
		type:SHOW_MODAL,
		modalType:_modalType,
		params:_params
	}
}

export function hideModal(){
	return{
		type:HIDE_MODAL
	}
}