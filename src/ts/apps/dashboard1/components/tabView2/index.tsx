import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  Nav, NavItem, NavLink,Button } from 'reactstrap';
import _ from "underscore"
import {ITabConfig} from '../../../../services/store/TabConfig';
import classnames from 'classnames';
import  './tabView.scss';
//import actions
import { onDashboardSelect } from '../../../../services/store/CurrentDashboard';
import { createNewTab, deleteTab } from '../../../../services/store/TabConfig';
class TabView2	 extends React.Component<any,any> {
	isClickCloseBtn:any;
	constructor(props:any) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.deleteTabFun = this.deleteTabFun.bind(this);
		this.isClickCloseBtn = false;
		this.state = {
		  activeTabId: ""
		};
	  }
	
	  toggle(id:any) {
		  if(!this.isClickCloseBtn)
		  {
			this.props.Actions.onDashboardSelect(id);
		  } else {
			  this.isClickCloseBtn = false;
		  }
	  }
	  deleteTabFun(tabs:Array<ITabConfig>, id:string){
		  if( tabs.length > 1 )
		  {
			  let newTabs = _.filter(tabs, function(tab){return tab.id != id});
			  let nextId = newTabs[newTabs.length -1].id;
			  this.props.Actions.onDashboardSelect(nextId);
			  this.props.Actions.deleteTab({id:id});
			  this.isClickCloseBtn = true;
		  }
	  }
	  componentDidUpdate(prevPros:any)
	  {
		console.log("TabView:updated");
		if(prevPros.currentDashboardId != this.props.currentDashboardId)
		{
			let tab2:ITabConfig|undefined = _.find(this.props.tabConfig.tabs,{id:this.props.currentDashboardId});
			if(tab2 == null)
			{
				let name = "";
				for(var i = 0; i < this.props.dashboards.length; i++)
				{
					if(this.props.dashboards[i].id == this.props.currentDashboardId)
					{
						name = this.props.dashboards[i].name;
					}
				}
				this.props.Actions.createNewTab({
					"id": this.props.currentDashboardId,
					"name": name
				});
			} else {
			}
		}
	  }
	  render(){
		return (
			<div className = "tabView">
			 <Nav tabs>
				{
					this.props.tabConfig.tabs.map((tab:any, index:any) => {
						return(
							<NavItem key = {index} className = "TabItem">
								<NavLink
									className={classnames({ active: tab.id == this.props.currentDashboardId })}
									onClick={() => { this.toggle(tab.id); }}
									>
									{tab.name}
									<Button className = "closeBtn"
										size="sm"
										color="link"
										onClick = {()=>{
											this.deleteTabFun(this.props.tabConfig.tabs, tab.id);
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
			tabConfig:state.TabConfig,
			currentDashboardId: state.CurrentDashboard.dashboardId,
			dashboards:state.DashboardConfig.dashboards
		}
	},
	dispatch => {
		return {
			Actions: bindActionCreators(
				{ onDashboardSelect ,createNewTab,deleteTab },
				dispatch
			)
		}
	}
)(TabView2);
