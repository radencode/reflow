import React from 'react';
import Controller from 'containers/window/Controller.jsx';
import Viewer from 'containers/window/Viewer.jsx';

export default class Layout extends React.Component{
  render(){
    return(
      <div class="app">
        <Controller/>
        <Viewer path={this.props.location.pathname} modal={this.props.children}/>
      </div>
    );
  }
}
