import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TypoGraphy from '@material-ui/core/Typography'
import { toolBarItem } from "../../config/toolBarConfig";
import ToolBarItem from './ToolBarItem';
interface ToolBarProps {
	ToolBarItems1?: any;
	dashboardId?: any;
};
interface ToolBarState {
	ToolBarItems1?: any;
};
class DashboardToolBar extends React.Component<ToolBarProps, ToolBarState> {
	render(){

		return(
			<AppBar color="primary" position="static" >
				<Toolbar variant="dense" style = {{maxHeight:"30px", minHeight:"0px"}}>
				    <TypoGraphy component = "div" style = {{flex:1, display:"flex"}}>
						<List component="nav" style = {{padding:"0px"}}>
							<ListItem component="div" style={{padding:"0px"}}>
								{
									toolBarItem.map( (items:any, index:any) =>{
										if(items.Pos == "left")
										{
											return(
												<ToolBarItem key = {index}
												Label = {items.Label}
												Pos   = {items.Pos}
												actionName = {items.actionName}
												iconName = {items.iconName}
												dashboardId = {this.props.dashboardId}
												/>
											)
										}else{
											return(
												<TypoGraphy key = {index}></TypoGraphy>
											)
										}
									})
								}
							</ListItem >
						</List>
						<TypoGraphy component = "div" style = {{flex:1}}></TypoGraphy>
					</TypoGraphy>
					<List component="nav" style = {{ float:"right",padding:"0px" }}>
						<ListItem component="div" style = {{padding:"0px"}}>
							{
								toolBarItem.map( (items:any, index:any) =>{
									if(items.Pos == "right")
									{
										return(
											<ToolBarItem key = {index}
												Label = {items.Label}
												Pos   = {items.Pos}
												actionName = {items.actionName}
												iconName = {items.iconName}
												dashboardId = {this.props.dashboardId}
											/>
										)
									}else{
										return(
											<TypoGraphy key = {index}></TypoGraphy>
										)
									}
								})
							}

						</ListItem >
					</List>
				</Toolbar>
			</AppBar>
			
		)
	}
 }

export default DashboardToolBar;