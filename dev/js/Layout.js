import React from 'react';

//App Components
import Bar from './components/Bar';
import Menu from './components/Menu';
import Viewer from './components/Viewer';

export default class Layout extends React.Component{
  render(){
    return(
      <div class="app">
        <Bar/>
        <Menu/>
        <Viewer/>
      </div>
    );
  }
}
