import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../../services/store/reducersDef';

import FullScreenDialog from './fullScreenDialog';
class FullScreenDialogComp extends React.Component {

	render() {
		return (
			<FullScreenDialog />
		  );
	}
 
}

const mapStateToProps = (state: IAppState) => {
	return {
		theme: state.settings.theme
	};
};

 export default connect(mapStateToProps)(FullScreenDialogComp);