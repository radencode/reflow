import React from 'react';

//App Components
import Controller from './Controller.jsx';
//import Viewer from '../container/Viewer';

export default class Layout extends React.Component{
  render(){
    return(
      <div class="app">
        <Controller/>
      </div>
    );
  }
}
