import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dashboardLayoutChange, defaultLayoutChange } from '../../../../services/store/DashboardConfig'
import Swal from 'sweetalert2';
import GoldenLayout from 'golden-layout';
import { Button } from '@material-ui/core';
interface goldenState{
	currentGolden:any
};
let golden_Layout:any;
let thisGoldenLayoutConfig:any;
let mouseClickFlag:any;
class GoldenLayoutView extends React.Component<any, goldenState>{
	layout:any;
	layout1:any;
	constructor(props:any)
	{
		super(props);
		this.state = {
			currentGolden:null
		};
		this.displayGoldenLayout = this.displayGoldenLayout.bind(this);
		this.dragButton_rendor = this.dragButton_rendor.bind(this);
		this.MouseDown = this.MouseDown.bind(this);
		this.MouseUp = this.MouseUp.bind(this);
		mouseClickFlag = 0;
		window.addEventListener("resize", this.updateScreen);
		window.addEventListener("mousedown", this.MouseDown);
		window.addEventListener("mouseup", this.MouseUp);
	}
	MouseDown(){
		mouseClickFlag = 1;
	}
	MouseUp(){
		mouseClickFlag = 0;
	}
	wrapComponent(Component:any){
		class Wrapped extends React.Component<any,any>{
		  componentWillMount(){
		  }
		  render() {
			return (
				<Component {...this.props} />
			);
		  }
		}
		return Wrapped;
	}
	updateScreen(){
		if(golden_Layout)
		{
			golden_Layout.updateSize(window.innerWidth - 60, window.innerHeight - 300);
		}
	}
	componentWillUnmount(){
		window.removeEventListener("resize", this.updateScreen);
		window.removeEventListener("mousedown", this.updateScreen);
		window.removeEventListener("mouseup", this.updateScreen);
	}
	displayGoldenLayout = (configeState:any) => {
		this.layout.innerHTML = "";
		golden_Layout = new GoldenLayout(configeState,this.layout);
		golden_Layout.on( 'stackCreated', (stack:any) => {
			stack
				.header
				.controlsContainer
				.find( '.lm_close' ) //get the close icon
				.off( 'click' ) //unbind the current click handler
				.click(function(){
					Swal.fire({
						title: 'Are you sure?',
						text: "You won't delete this layout?",
						type: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, delete it!'
					  }).then((result) => {
						if (result.value) {
						  stack.remove();
						}
					  })
				});
		});
		golden_Layout.on( 'tabCreated', ( tab:any ) => {
			tab
				.closeElement
				.off( 'click' ) //unbind the current click handler
				.click(function(){
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
						  tab.contentItem.remove();
						}
					  })
				});
		});
		golden_Layout.on('stateChanged', ()=>{
			const currentLayout = JSON.stringify(thisGoldenLayoutConfig);
			const newLayout     = JSON.stringify(golden_Layout.toConfig());
			if(currentLayout != newLayout && newLayout != "" && newLayout != null && currentLayout != null && currentLayout != "" && mouseClickFlag == 0)
			{
				console.log("updated DashboardConfig");
				thisGoldenLayoutConfig = golden_Layout.toConfig();
				this.props.Actions.dashboardLayoutChange(
					{
						"dashboardId": this.props.thisDashboardId,
						"layout"     : thisGoldenLayoutConfig
					});
				this.updateScreen();
			}
		});
		golden_Layout.registerComponent( 'component1', function(container:any, state:any){
			container.getElement().html(
				'<div style = "display:flex; align-items: center; justify-content: center;height:100%">' +
					'<h2>' + state.text + '</h2>' +
				'</div>');
		});
		golden_Layout.registerComponent( 'component2', function(container:any){
			container.getElement().html(
				'<div style = "display:flex; align-items: center; justify-content: center;height:100%">' +
						'<img src = "../../images/activeStart.png" alt = "sdf"/>' +
				'</div>'
				);
		});
		golden_Layout.registerComponent( 'dragComponent', function(){
			
		});
		golden_Layout.init();
		const drag_config = {
			title: "DRAG DROP",
			type: 'component',
			componentName: 'dragComponent'
		};
		this.dragButton_rendor(drag_config);
	}
	dragButton_rendor(config:any){
		this.layout1.innerHTML = config.title;
		golden_Layout.createDragSource( this.layout1, config );
	}
	componentDidMount(){
		if( this.props.thisDashboardId!= "" &&  this.props.thisDashboardId != undefined)
		{
			// var thisGoldenLayoutConfig:any;
			for(var i = 0; i < this.props.dashboardConfigs.length; i++)
			{
				if(this.props.dashboardConfigs[i].id == this.props.thisDashboardId)
				{
					thisGoldenLayoutConfig = this.props.dashboardConfigs[i].layout;
				}
			}
			if(golden_Layout == null || golden_Layout == undefined)
			{
				this.displayGoldenLayout(thisGoldenLayoutConfig);
				this.updateScreen();
			} else {
				golden_Layout.destroy();
				this.layout.innerHTML = "";
				golden_Layout.config = thisGoldenLayoutConfig;
				golden_Layout.init();
				const drag_config = {
					title: "DRAG DROP",
					type: 'component',
					componentName: 'dragComponent'
				};
				this.dragButton_rendor(drag_config);
				this.updateScreen();
			}
			
		}
	}
	componentDidUpdate()
	{
		if( this.props.thisDashboardId!= "" &&  this.props.thisDashboardId != undefined)
		{
			// var thisGoldenLayoutConfig:any;
			for(var i = 0; i < this.props.dashboardConfigs.length; i++)
			{
				if(this.props.dashboardConfigs[i].id == this.props.thisDashboardId)
				{
					thisGoldenLayoutConfig = this.props.dashboardConfigs[i].layout;
				}
			}
			if(golden_Layout == null || golden_Layout == undefined)
			{
				this.displayGoldenLayout(thisGoldenLayoutConfig);
				this.updateScreen();
			} else {
				golden_Layout.destroy();
				this.layout.innerHTML = "";
				golden_Layout.config = thisGoldenLayoutConfig;
				golden_Layout.init();
				const drag_config = {
					title: "My Widget",
					type: 'component',
					componentName: 'dragComponent'
				};
				this.dragButton_rendor(drag_config);
				this.updateScreen();
			}
			
		}
	}
    isDashboardEditing(): boolean {
		return this.props.editingDashboardIds && this.props.editingDashboardIds.indexOf(this.props.thisDashboardId) != -1
	}
	disablePanel():string{
		if(this.isDashboardEditing()) return "none";
		else return "block";
	}
	render(){
		return(
			<div id="goldenLayoutArea" style = {{width:"100%",flex: 1,display:"flex", flexDirection:"column",position:"relative"}}>
			  <div style = {{
				  width:"100%",
				  height:"100%",
				  position:"absolute",
				  display: this.disablePanel(),
				  zIndex:99999,
				  }}></div>
			  <div style = {{padding:"10px", display:"flex"}}>
	  			  <Button variant="contained" color="inherit" size="small" ref={(input1:any) => (this.layout1 = input1)} ></Button>
				  <Button variant="contained" color="inherit" size="small" style = {{marginLeft:"20px"}} 
				  	 onClick = {()=>{
							this.props.Actions.defaultLayoutChange(golden_Layout.toConfig());
					   }}
				  >Save as default Layout</Button>
					  
			  </div>
			  <div className="goldenLayout" ref={(input:any) => (this.layout = input)} style = {{flex:1}}/>
			 
			</div>
		)
	}
}
export default connect(
	(state:any)=>{
		return{
			editingDashboardIds: state.EditingDashboards.editingDashboardIds
		}
	},
	dispatch => {
		return {
			Actions: bindActionCreators(
				{ dashboardLayoutChange, defaultLayoutChange },
				dispatch
			)
		}
	}
)(GoldenLayoutView);