//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//Components
import Layout from './Layout';

//Pages
import Rename from './pages/Rename';
import Flow from './pages/Flow';
import History from './pages/History';
import Settings from './pages/Settings';

const reflow = document.getElementById('reflow');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Rename}></IndexRoute>
      <Route path="flow" component={Flow}></Route>
      <Route path="history" component={History}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
reflow);
