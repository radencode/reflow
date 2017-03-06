import React from 'react';
import Progress from '../components/Progress';

//Animations
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Rename extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div id="rename">
        <Progress/>
        {this.props.children}
      </div>
    );
  }
}
