import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducers from '../../services/store/reducersDef';
import OptionComp from '../../components/test-comp1/OptionComp';
import RecipeReviewCard from '../../components/material-test/card/RecipeReviewCardComp'

const store = createStore(reducers, undefined);



	ReactDOM.render(
		<Provider store={store}>
			<OptionComp />
			<RecipeReviewCard />
		</Provider>
		, document.getElementById('app1-root'));
