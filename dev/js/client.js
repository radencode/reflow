//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Bar from './components/Bar';
//Sass
import '../styles/routes/Global.sass';

const reflow = document.getElementById('reflow');
ReactDOM.render(<Bar/>, reflow);
