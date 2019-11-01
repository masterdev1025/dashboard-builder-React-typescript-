import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../services/store/reducersDef';

import RecipeReviewCard from './RecipeReviewCard'
class RecipeReviewCardComp extends React.Component {

	render() {
		return (
			<RecipeReviewCard />
		  );
	}
 
}

const mapStateToProps = (state: IAppState) => {
	return {
		theme: state.settings.theme
	};
};

 export default connect(mapStateToProps)(RecipeReviewCardComp);