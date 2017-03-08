import React from 'react';
import Progress from '../components/Progress';
import { Link } from 'react-router';

//Animations
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Rename extends React.Component{
  constructor(){
    super();
    this.stages = ['active', 'await', 'await', 'await'];
    this.state = {status: this.stages,  stage: 'start'};
    this.bar = ['start', 'first', 'second', 'third'];
    this.toReset = false;
    this.step = 0;
  }
  next(){
    const update = this.state.status.slice();
    update[this.step] = 'complete';
    update[this.step + 1] = 'active';
    this.setState({status: update, stage: this.bar[this.step + 1]});
    this.toReset = true;
    this.step++;
  }
  reset(){
    this.setState({status: this.stages, stage: 'start'});
    this.toReset = false;
    this.step = 0;
  }
  render(){
    return(
      <div id="rename">
        <Progress status={this.state.status} stage={this.state.stage}/>
        <ReactCSSTransitionGroup
          transitionName = "slide"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname, next: this.next.bind(this), reset: this.reset.bind(this), toReset: this.toReset})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
