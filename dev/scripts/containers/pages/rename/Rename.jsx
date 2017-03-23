import React from 'react';
import Progress from '../../navigation/Progress.jsx';
import Alert from '../../messages/Alert.jsx';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { initialize } from '../../../actions/progress';

@connect((store) => { return {}; })

export default class Rename extends React.Component{
  componentWillMount(){
    this.props.dispatch(initialize());
  }
  render(){
    return(
      <div id="rename">
        <Progress router={this.props.router}/>
        <Alert router={this.props.router}/>
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
