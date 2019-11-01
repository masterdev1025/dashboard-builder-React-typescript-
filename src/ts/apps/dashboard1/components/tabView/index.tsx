import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import {  Nav, NavItem, NavLink,Button } from 'reactstrap';
import classnames from 'classnames';
import * as TabViewStyle from './tabView.scss';
//import actions
import { changeDashboardId, updateDashboards } from '../../../../services/dashboard1/actions';

class TabView extends React.Component<any,any> {
	constructor(props:any) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.deleteDashboard = this.deleteDashboard.bind(this);
		this.state = {
		  activeTab: 0
		};
	  }
	
	  toggle(tab:any, id:any) {
		this.props.stateAction.changeDashboardId(id);
		if (this.state.activeTab !== tab) {
		  this.setState({
			activeTab: tab
		  });
		}
	  }
	  deleteDashboard(id:any){
		   var newDashbards = new Array();
		   for(var i = 0; i < this.props.dashboards.length; i++)
		   {
				if(this.props.dashboards[i].id == id)
				{

				} else {
					newDashbards.push(this.props.dashboards[i]);
				}
		   }
		   this.props.stateAction.updateDashboards(newDashbards);
		   this.props.stateAction.changeDashboardId(this.props.dashboards[0].id);
	  }
	  render(){
		return (
			<div className = {TabViewStyle.tabView}>
			 <Nav tabs>
				{
					this.props.dashboards.map((dashboard:any, index:any) => {
						return(
							<NavItem key = {index} className = {TabViewStyle.TabItem}>
								<NavLink
									className={classnames({ active: this.state.activeTab == index })}
									onClick={() => { this.toggle(index, dashboard.id); }}
									>
									{dashboard.name}
									<Button className = {TabViewStyle.closeBtn}
										size="sm"
										color="link"
										onClick = {()=>{
											Swal.fire({
												title: 'Are you sure?',
												text: "You won't delete this tab?",
												type: 'warning',
												showCancelButton: true,
												confirmButtonColor: '#3085d6',
												cancelButtonColor: '#d33',
												confirmButtonText: 'Yes, delete it!'
											  }).then((result) => {
												if (result.value) {
												     this.deleteDashboard(this.props.id);
												}
											  })
										}}
										>
										X
									</Button>
								</NavLink>
							</NavItem>
						)
					})
				}
			</Nav>
			</div>
		  );
	  }
}

export default connect(
	(state:any) => {
		return{
			dashboards:state.GlobalState.dashboards,
			id: state.CurrentState.present.id
		}
	},
	dispatch => {
		return {
			stateAction: bindActionCreators(
				{ changeDashboardId, updateDashboards },
				dispatch
			)
		}
	}
)(TabView);;
