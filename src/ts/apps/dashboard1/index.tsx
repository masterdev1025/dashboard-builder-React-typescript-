import * as React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../services/store';
import 'bootstrap/dist/css/bootstrap.css';
import GxAppView from './components/appview-comp/AppView';

const target = document.querySelector('#dashboard1-root');

render(
	<Provider store={store}>

		<GxAppView />
	</Provider>,
	target
);
