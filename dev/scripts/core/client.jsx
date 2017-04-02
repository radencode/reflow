//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

//Containers
import Layout from 'containers/Layout.jsx';

//Core
import store from 'core/store';

//Pages
import Rename from 'containers/pages/rename/Rename.jsx';
import Flow from 'containers/pages/flow/Flow.jsx';
import History from 'containers/pages/history/History.jsx';
import Settings from 'containers/pages/settings/Settings.jsx';

//Modals
import Browse from 'containers/pages/rename/modals/Browse.jsx';
import Configure from 'containers/pages/rename/modals/Configure.jsx';
import Options from 'containers/pages/rename/modals/Options.jsx';
import Finalize from 'containers/pages/rename/modals/Finalize.jsx';

const reflow = document.getElementById('reflow');
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRedirect to="rename"></IndexRedirect>
        <Route path="rename" component={Rename}>
          <IndexRedirect to="browse"></IndexRedirect>
          <Route path="browse" component={Browse}></Route>
          <Route path="configure" component={Configure}></Route>
          <Route path="options" component={Options}></Route>
          <Route path="finalize" component={Finalize}></Route>
        </Route>
        <Route path="flow" component={Flow}></Route>
        <Route path="history" component={History}></Route>
        <Route path="settings" component={Settings}></Route>
      </Route>
    </Router>
  </Provider>,
reflow);

