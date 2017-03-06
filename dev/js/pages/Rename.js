import React from 'react';
import Progress from '../components/Progress';
import { Link } from 'react-router';

//Animations
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Rename extends React.Component{
  render(){
    return(
      <div id="rename">
        <Progress/>
        <ReactCSSTransitionGroup
          transitionName = "slide"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
