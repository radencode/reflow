//Modules
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Containers
import Navigation from 'containers/navigation/Navigation.jsx';

export default class Viewer extends React.Component{
  get_key(path){
    return path.split('/')[1] || 'root';
  }
  render(){
    const key = this.get_key(this.props.path);
    return(
      <div id="viewer">
        <Navigation path={this.props.path}/>
        <ReactCSSTransitionGroup
          transitionName = "fade"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.modal, {key: key})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
