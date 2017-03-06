//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

//Components
import Layout from './Layout';

//Pages
import Flow from './pages/Flow';
import History from './pages/History';
import Rename from './pages/Rename';
import Settings from './pages/Settings';

//Modals
import Browse from './modals/Browse';
import Configure from './modals/Configure';
import Finalize from './modals/Finalize';
import Options from './modals/Options';

const reflow = document.getElementById('reflow');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route key="root" path="/" component={Layout}>
      <IndexRedirect to="rename"></IndexRedirect>
      <Route key="rename" path="rename" component={Rename}>
        <IndexRedirect to="browse"></IndexRedirect>
        <Route key="broswe" path="browse" component={Browse}></Route>
        <Route key="configure" path="configure" component={Configure}></Route>
        <Route key="options" path="options" component={Options}></Route>
        <Route key="finalize" path="finalize" component={Finalize}></Route>
      </Route>
      <Route key="flow" path="flow" component={Flow}></Route>
      <Route key="history" path="history" component={History}></Route>
      <Route key="settings" path="settings" component={Settings}></Route>
    </Route>
  </Router>,
reflow);
