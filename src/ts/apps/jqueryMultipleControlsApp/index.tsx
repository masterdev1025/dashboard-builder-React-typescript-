import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducers from '../../services/store/reducersDef';
import { Hello } from '../../components/hello';
import PopupComp from '../../components/test-comp1/PopupComp'
import $ from 'jquery'

const store = createStore(reducers, /*{clicksMade: 110}*/);


	// ReactDOM.render(
	// 	<Provider store={store}>
	// 		<PopupApp />
	// 		<Hello compiler="1.1" framework="2.2"/>
	// 	</Provider>
	// 	, document.getElementById('app2-root'));


	['one', 'two', 'three'].forEach(id => {
		ReactDOM.render(
		<Provider store={store}>
			<PopupComp />
			<Hello compiler="1.1" framework="2.2"/>
		</Provider>
		  ,
		  document.getElementById(id)
		);
	  });

	  $('#x').click(function(){
		$('body').append('<span>adding 1 more</span>');
	  $('<hr/><div class="t2">t2 class div..</div>').insertBefore('#x');
	   
	   $('.t2').each(function(i:number,v:any){
		   console.log(i,v);
		  ReactDOM.render(
			<Provider store={store}>
			<PopupComp />
			<Hello compiler="1.1" framework="2.2"/>
		</Provider>,
		v  );
	   })
	   
	 })
	 