import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducers from '../../services/store/reducersDef';
import RecipeReviewCard from '../../components/material-test/card/RecipeReviewCard';
import SrollTabControlsComp from '../../components/material-test/tab-panel/SrollTabControlsComp';
import FullScreenDialogComp from '../../components/material-test/dialog/full-screen/fullScreenDialogComp';


const store = createStore(reducers, /*{clicksMade: 110}*/);


	ReactDOM.render(
		<Provider store={store}>
			<hr/>
			<RecipeReviewCard/>

			<hr/>
			<br/>
			<SrollTabControlsComp/>

			<FullScreenDialogComp/>
		
			
		</Provider>
		, document.getElementById('app-root'));
