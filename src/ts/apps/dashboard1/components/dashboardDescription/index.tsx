
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TypoGraphy from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';

import {
	changeDashboardId,
	changeDashboardName,
	changeDashboardDescription,
	//--
	initDashboardName,
	initDashboardDescription
} from '../../../../services/dashboard1/actions';

import { MuiThemeProvider } from '@material-ui/core';
import { themes } from '../../../../components/styles/themes';
import DashboardFavorite from '../dashboard-favorite';
interface DescriptionState {
	DashboardTitle?: any,
	DashboardDescription?: any,
	EnableEditTitle?: any,
	EnableEditDescription?: any,
	TitleEditState?: any,
	DescriptionEditState?: any,
	EditTitleIconHover?: any,
	EditDescriptionIconHover?: any,
	titleText: any,      //tempTitle_text
	descriptionText: any, //tempDescription_text
	Title: any,
	Description: any,
	hoverStart: any,
	firstrender: any
};
class DashboardDescription extends React.Component<any, DescriptionState> {
	constructor(props: any) {
		super(props);
		this.state = {
			EnableEditDescription: false,
			EnableEditTitle: false,
			TitleEditState: false,
			DescriptionEditState: false,
			EditTitleIconHover: false,
			EditDescriptionIconHover: false,
			titleText: "DashboardName",
			descriptionText: "description",
			Title: "DashboardName",
			Description: "description",
			hoverStart: false,
			firstrender: 0
		}
		this.saveTitle = this.saveTitle.bind(this);
		this.starHover = this.starHover.bind(this);
		this.starLeave = this.starLeave.bind(this);
	}
	componentDidMount() {
		if (this.state.firstrender == 0) {
			this.setState({
				Title: this.props.name,
				titleText: this.props.name,
				Description: this.props.description,
				descriptionText: this.props.description,
				firstrender: 1
			});
		}
	}
	changeTitle = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			titleText: event.target.value
		})
	}
	changeDescription = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			descriptionText: event.target.value
		})
	}
	saveTitle = () => {
		if (this.state.titleText == "") return;
		else {
			this.setState({
				Title: this.state.titleText,
				EnableEditTitle: false,
				TitleEditState: false,
				EditTitleIconHover: false
			});
			this.props.Actions.changeDashboardName(this.state.titleText);
			// this.props.Actions.changeTitle(this.state.titleText, this.props.DashboardNumber);
		}
	}
	cancelTitle = () => {
		this.setState({
			EnableEditTitle: false,
			TitleEditState: false,
			EditTitleIconHover: false,
			titleText: this.state.Title
		})
	}
	saveDescription = () => {
		if (this.state.titleText == "") return;
		else {
			this.setState({
				Description: this.state.descriptionText,
				EnableEditDescription: false,
				DescriptionEditState: false,
				EditDescriptionIconHover: false
			});
			this.props.Actions.changeDashboardDescription(this.state.descriptionText);
			// this.props.Actions.changeDescription(this.state.descriptionText, this.props.DashboardNumber);
		}
	}
	cancelDescription = () => {
		this.setState({
			EnableEditDescription: false,
			DescriptionEditState: false,
			EditDescriptionIconHover: false,
			descriptionText: this.state.Description
		})
	}
	render_title() {
		if (this.state.TitleEditState == true) {
			// input
			return (
				<TypoGraphy component="div" style={{ display: "flex" }}>
					<TextField
						id="outlined-name"
						label="DashboardName"
						value={this.state.titleText}
						margin="normal"
						variant="outlined"
						onChange={this.changeTitle()}
						fullWidth
					/>
					<TypoGraphy component="div" style={{ display: "flex", flexDirection: "column" }}>
						<i className="fa fa-check-circle fa-lg"
							style={{ marginTop: "17px", marginLeft: "4px", color: "green", cursor: "pointer" }}
							onClick={this.saveTitle}
						></i>
						<i className="fa fa-close fa-lg"
							style={{ marginTop: "10px", marginLeft: "4px", color: "#a59b59", cursor: "pointer" }}
							onClick={this.cancelTitle}
						></i>
					</TypoGraphy>
				</TypoGraphy>
			)

		} else {
			// Label
			return this.state.Title;
		}
	}
	render_description() {
		if (this.state.DescriptionEditState == true) {
			return (
				<TypoGraphy component="div" style={{ display: "flex" }}>
					<TextField
						id="outlined-name"
						label="Description_Edit"
						value={this.state.descriptionText}
						margin="normal"
						variant="outlined"
						onChange={this.changeDescription()}
						multiline
						fullWidth
					/>
					<TypoGraphy component="div" style={{ display: "flex", flexDirection: "column" }}>
						<i className="fa fa-check-circle fa-lg"
							style={{ marginTop: "17px", marginLeft: "4px", color: "green", cursor: "pointer" }}
							onClick={this.saveDescription}
						></i>
						<i className="fa fa-close fa-lg"
							style={{ marginTop: "10px", marginLeft: "4px", color: "#a59b59", cursor: "pointer" }}
							onClick={this.cancelDescription}
						></i>
					</TypoGraphy>
				</TypoGraphy>
			)
		} else {
			// Label
			return this.state.Description;
		}
	}
	render_edit_title_icon() {
		if (this.state.EnableEditTitle == true && this.state.TitleEditState == false) {
			if (this.state.EditTitleIconHover == true) {
				return (
					<i className="fa fa-edit" style={{ color: "#614a0e", marginLeft: "5px", marginTop: "3px", display: "inline", cursor: "pointer" }}
						onMouseLeave={() => {
							this.setState({
								EditTitleIconHover: false
							})
						}}
						onClick={() => {
							this.setState({
								TitleEditState: true
							})
						}}
					></i>
				)
			} else {
				return (
					<i className="fa fa-edit" style={{ color: "#a59b59", marginLeft: "5px", marginTop: "3px", display: "inline" }}
						onMouseEnter={() => {
							this.setState({
								EditTitleIconHover: true
							})
						}}
					></i>
				)
			}

		} else {
			return null;
		}
	}
	render_edit_description_icon() {
		if (this.state.EnableEditDescription == true && this.state.DescriptionEditState == false) {
			if (this.state.EditDescriptionIconHover == true) {
				return (
					<i className="fa fa-edit" style={{ color: "#614a0e", marginLeft: "5px", marginTop: "3px", display: "inline", cursor: "pointer" }}
						onMouseLeave={() => {
							this.setState({
								EditDescriptionIconHover: false
							})
						}}
						onClick={() => {
							this.setState({
								DescriptionEditState: true
							})
						}}
					></i>
				);
			} else {
				return (
					<i className="fa fa-edit" style={{ color: "#a59b59", marginLeft: "5px", marginTop: "3px", display: "inline" }}
						onMouseEnter={() => {
							this.setState({
								EditDescriptionIconHover: true
							})
						}}
					></i>
				);
			}

		} else {
			return null;
		}
	}
	componentDidUpdate(prevPros: any) {
		let _name, _description;
		if (prevPros.name != this.props.name || prevPros.description != this.props.description || prevPros.favorite != this.props.favorite) {
			if (this.props.name == "") _name = this.state.Title;
			else _name = this.props.name;

			if (this.props.description == "") _description = this.state.Description;
			else _description = this.props.description;
			this.setState({
				Title: _name,
				titleText: _name,
				Description: _description,
				descriptionText: _description,
				hoverStart: false,
				firstrender: 1
			})
		}
	}
	starHover() {
		this.setState({
			hoverStart: true
		})
	}
	starLeave() {
		this.setState({
			hoverStart: false
		})
	}
	render() {
		console.log("sss");
		return (
			<MuiThemeProvider theme={themes["light"]}>

				<div style={{ display: "flex" }}>
					<div style={{ margin: "30px", userSelect: "none", width: "50%" }}>
						<TypoGraphy variant="h4" component="h4" gutterBottom style={{ wordWrap: "break-word" }}
							onMouseEnter={() => {
								this.setState({
									EnableEditTitle: true
								})
							}}
							onMouseLeave={() => {
								this.setState({
									EnableEditTitle: false
								})
							}}
						>
							{this.render_title()}
							{this.render_edit_title_icon()}
						</TypoGraphy>
						<TypoGraphy variant="h6" component="h6" gutterBottom color="textSecondary" style={{ wordWrap: "break-word" }}
							onMouseEnter={() => {
								this.setState({
									EnableEditDescription: true
								})
							}}
							onMouseLeave={() => {
								this.setState({
									EnableEditDescription: false
								})
							}}
						>
							{this.render_description()}
							{this.render_edit_description_icon()}
						</TypoGraphy>

					</div>
					<div style={{ margin: "30px" }}>
						<div style={{ margin: "30px" }}>
							<DashboardFavorite dashboardId={this.state.titleText}></DashboardFavorite>

						</div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}
export default connect(
	(state: any) => {
		return {
			name: state.CurrentState.present.name,
			description: state.CurrentState.present.description,
			favorite: state.CurrentState.present.favorite,
			theme: state.settings.theme
		}
	},
	dispatch => {
		return {
			Actions: bindActionCreators(
				{
					changeDashboardId,
					changeDashboardDescription,
					changeDashboardName,
					//init;
					initDashboardName,
					initDashboardDescription
				},
				dispatch
			)
		}
	}
)(DashboardDescription);