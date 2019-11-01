import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import GlobalStyle from '../../../../components/styles/GlobalStyle';
import DashboardDescription2 from '../dashboardDescription2';
import DashboardSelectSection from '../dashboard-select-section';
import { ICurrentDashboard } from '../../../../services/store/CurrentDashboard/reducer';


export interface IAppStateTmp {
	thisDashboardId?:string
	dashboardConfigs?:any
	CurrentDashboard: ICurrentDashboard
}

class DashboardHeader extends React.Component<IAppStateTmp> {

	render() {
		console.log('%c ♕♕♕ render ---> DashboardHeader','color:yellow');
		return (
			<React.Fragment>
				<GlobalStyle />
				<HeaderContainer>
				{this.renderDashboardTitleIfNotNull()} 
				<DashboardSelectSection ></DashboardSelectSection>
				</HeaderContainer>
 			</React.Fragment>
		);
	}
	renderDashboardTitleIfNotNull() {
		console.log('%c renderDashboardTitleIfNotNull','color:blue',this.props.CurrentDashboard );

		if(this.props.thisDashboardId != null ){
			let notNullVal:string = this.props.thisDashboardId != null?this.props.thisDashboardId:"----";

			return(	<DashboardDescription2 
							dashboardConfigs = {this.props.dashboardConfigs} 
							thisDashboardId  = {notNullVal}
					 />);
		}
		else{
			console.log('nothing to render');
			return(<span/>);
		}
	}
}

const mapStateToProps = (state: IAppStateTmp) => {
	return {
		CurrentDashboard : state.CurrentDashboard
	};
};

export default connect(mapStateToProps)(DashboardHeader);

// const OptionsAppContainer = styled('div')`
// 	position: absolute;
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: center;
// 	justify-items: center;
// 	align-items: center;
// 	height: 90vh;
// 	width: 90vw;
// 	left: 5vw;
// 	top: 5vh;
// 	background-color: ${p => p.theme.backgroundColor};
// 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// `;


const HeaderContainer = styled('div')`
	margin-top: 5px;
	min-height: 30px;
	width: 100%;
	background-color:#ddd;
	border-radius:2px;
	color: ${p => p.theme.color};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	:hover {
		background-color: #eee;
	  }
`;
