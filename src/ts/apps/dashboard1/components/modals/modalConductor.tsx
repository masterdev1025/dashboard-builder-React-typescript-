import React from 'react';
import { connect } from 'react-redux';
import SaveConfirmModal from './components/saveConfirmModal';
class ModalConductor extends React.Component<any, any>{
	constructor(props:any)
	{
		super(props);
	}
	render(){
		console.log(this.props.modal);
		switch( this.props.modal.modalType ){
			case "SAVE_CONFIRM_MODAL":
				return( <SaveConfirmModal/> )
			default:
				return null;
		}
	}
}

export default connect(
	(state:any) => {
		return{
			modal: state.Modal
		}
	},
	null
)(ModalConductor);
