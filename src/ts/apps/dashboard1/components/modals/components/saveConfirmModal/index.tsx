import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import Button from '@material-ui/core/Button';
import { generateUUIDv4 } from "@bitjourney/uuid-v4";
import { Button} from 'reactstrap';
import {hideModal} from '../../modalAction';
import {changeDashboardId} from "../../../../../../services/dashboard1/actions";
class SaveConfirmModal extends React.Component<any,any> {
	MainState:any;
	constructor(props:any)
	{
		super(props);
		this.state = {
			open:true
		}
		this.handleClose = this.handleClose.bind(this);
		this.MainState = null;
	}
	handleClose(){
		this.setState({
			open:false
		});
		this.props.modalAction.hideModal();
	}
	render(){
		console.log("params",this.props.modal.params);
		this.MainState = this.props.modal.params;
		return (
			<div>
			  <Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				style ={{display:"flex", alignItems:"center", justifyContent:"center"}}
				open={this.state.open}
				onClose={this.handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
				  timeout: 500,
				}}
			  >
				<Fade in={this.state.open}>
				<div style = {{backgroundColor:"white", border: '2px solid #000',padding:"10px 30px"}}>
					<h2 id="transition-modal-title" style={{textAlign:"center"}}>Are you sure?</h2>
					<p id="transition-modal-description" style = {{textAlign:"center"}}>want to save to sdfsdf</p>
					<Button onClick = {()=>{
						this.MainState.save();
						this.props.toolAction.changeDashboardId(generateUUIDv4());
						this.props.modalAction.hideModal();
					}}>Save</Button>
					<Button onClick = {()=>{
						this.props.toolAction.changeDashboardId(generateUUIDv4());
						this.props.modalAction.hideModal();
					}}>Don't Save</Button>
					<Button onClick = {this.handleClose}>Cancel</Button>
				  </div>
				</Fade>
			  </Modal>
			</div>
		  );
	}	
}
export default connect(
	(state:any) => {
		return{
			modal: state.Modal
		}
	},
	dispatch => {
		return {
			modalAction: bindActionCreators(
				{ hideModal },
				dispatch
			),
			toolAction:bindActionCreators(
				{changeDashboardId},
				dispatch
			)
		}
	}
)(SaveConfirmModal);