import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../services/store/reducersDef';

import SrollTabControls from './SrollTabControls'
class SrollTabControlsComp extends React.Component {

	render() {
		return (
			<SrollTabControls />
		  );
	}
 
}

const mapStateToProps = (state: IAppState) => {
	return {
		theme: state.settings.theme
	};
};

 export default connect(mapStateToProps)(SrollTabControlsComp);