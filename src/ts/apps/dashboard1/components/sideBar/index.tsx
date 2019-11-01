import React from "react";
import * as SidebarStyle  from './sideBar.scss';
class SideHelperBar extends React.Component<any, any>{
	constructor(props:any)
	{
		super(props);
		this.state = {
			toggle:false
		}
	}
	render(){
		return(
			<div className={SidebarStyle["customizer"] + " " + this.state.toggle? SidebarStyle["open"]:""}>
				<div className={SidebarStyle["handle"]} onClick = {
					()=>{
						this.setState({
							toggle: !this.state.toggle
						})
					}
				}>
				</div>
			<div className={SidebarStyle["customizer-body"]} data-perfect-scrollbar data-suppress-scroll-x="true">
			</div>
		  </div>
		)
	}
}
export default SideHelperBar;