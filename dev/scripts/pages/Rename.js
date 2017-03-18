import React from 'react';
import Progress from '../components/Progress';
import { Link } from 'react-router';

//Animations
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Rename extends React.Component{
  constructor(){
    super();
    this._stages = ['active', 'await', 'await', 'await'];
    this.state = {status: this._stages,  stage: 'start', finish: false};
    this._bar = ['start', 'first', 'second', 'third'];
    this._toReset = false;
    this._stage = 0;
  }
  _next(){
    var update = this.state.status.slice();
    update[this._stage] = 'complete';
    update[this._stage + 1] = 'active';
    this.setState({status: update, stage: this._bar[this._stage + 1]});
    this._toReset = true;
    this._stage++;
  }
  _reset(){
    this.setState({status: this._stages, stage: 'start', finish: false});
    this._toReset = false;
    this._stage = 0;
  }
  _finish(last){
    var update = this.state.status.slice();
    update[last] = 'complete';
    this.setState({status: update, finish: true});
  }
  _back(stage, link){
    var update = this.state.status.slice();
    update[stage] = 'active';
    for(var stages = stage + 1; stages < 4; stages++)
      update[stages] = 'await';
    this.setState({status: update, stage: this._bar[stage]});
    this._stage = stage;
    this.props.router.push(link);
  }
  render(){
    return(
      <div id="rename">
        <Progress status={this.state.status} stage={this.state.stage} back={this._back.bind(this)} finish={this.state.finish}/>
        <ReactCSSTransitionGroup
          transitionName = "slide"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            next: this._next.bind(this),
            reset: this._reset.bind(this),
            finish: this._finish.bind(this),
            toReset: this._toReset,
            unsaved: this.props.unsaved,
            saved: this.props.saved
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
