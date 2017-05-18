//Modules
import React from 'react';
//Containers
import Controls from 'containers/window/Controls.jsx';
import Navigation from 'containers/navigation/Navigation.jsx';
import Title from 'containers/window/Title.jsx';

export default class Controller extends React.Component{
  render(){
    return(
      <div id="controller">
        <div id="bar">
          <Title/>
          <Controls/>
          <Navigation path={this.props.path}/>          
        </div>
      </div>
    );
  }
}
