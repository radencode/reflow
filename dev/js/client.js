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
  </Router>,
reflow);
