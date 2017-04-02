//Modules
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Containers
import Progress from 'containers/navigation/Progress.jsx';
import Alert from 'containers/messages/Alert.jsx';
//Actions
import { createAlert, destroyAlert } from 'actions/alert';
import * as action from 'actions/progress';
//Assets
import Labels from 'assets/text';

@connect((store) => { return { progress: store.progress}; })

export default class Rename extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.props.dispatch(action.initialize());
  }
  switchModal(link, dispatch){
    this.props.dispatch(action.updateAnimationType('slide-left'));
      switch(dispatch){
        case 'Configure':
          this.props.dispatch(action.switchToConfigure());
          this.props.dispatch(createAlert(Labels.Alerts.Unsaved.Message, Labels.Alerts.Unsaved.Buttons.Success, Labels.Alerts.Unsaved.Buttons.Cancel));
          break;
        case 'Options':
          this.props.dispatch(action.switchToOptions());
          break;
        case 'Finalize':
          this.props.dispatch(action.switchToFinalize());
          break;
        case 'Finish':
          this.props.dispatch(action.finish());
          this.props.dispatch(destroyAlert());
          break;
      }  
      if(link) 
        this.props.router.push(link);
  }
  render(){
    return(
      <div id="rename">
        <Progress router={this.props.router}/>
        <Alert router={this.props.router}/>
        <ReactCSSTransitionGroup
          transitionName = {this.props.progress.animation}
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname, next: this.switchModal.bind(this)})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
