import React from 'react';
import Progress from '../../navigation/Progress.jsx';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Rename extends React.Component{
  constructor(){
    super();
    this.stages = ['active', 'await', 'await', 'await'];
    this.state = {status: this.stages,  stage: 'start', finish: false};
    this.bar = ['start', 'first', 'second', 'third'];
    this.toReset = false;
    this.stage = 0;
  }
  next(){
    var update = this.state.status.slice();
    update[this.stage] = 'complete';
    update[this.stage + 1] = 'active';
    this.setState({status: update, stage: this.bar[this.stage + 1]});
    this.toReset = true;
    this.stage++;
  }
  reset(){
    this.setState({status: this.stages, stage: 'start', finish: false});
    this.toReset = false;
    this.stage = 0;
  }
  finish(last){
    var update = this.state.status.slice();
    update[last] = 'complete';
    this.setState({status: update, finish: true});
  }
  back(stage, link){
    var update = this.state.status.slice();
    update[stage] = 'active';
    for(var stages = stage + 1; stages < 4; stages++)
      update[stages] = 'await';
    this.setState({status: update, stage: this.bar[stage]});
    this.stage = stage;
    this.props.router.push(link);
  }
  render(){
    return(
      <div id="rename">
        <Progress status={this.state.status} stage={this.state.stage} back={this.back.bind(this)} finish={this.state.finish}/>
        <ReactCSSTransitionGroup
          transitionName = "slide"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            next: this.next.bind(this),
            reset: this.reset.bind(this),
            finish: this.finish.bind(this),
            toReset: this.toReset,
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
