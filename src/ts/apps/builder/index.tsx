import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from '../../services/store'
import { Builder } from '../../components/main-style/Builder'

ReactDOM.render(
  <Provider store={store}>
    <Builder></Builder>
  </Provider>,

  document.getElementById("builder-root")
);
