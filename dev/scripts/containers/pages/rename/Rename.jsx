//Modules
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Containers
import Progress from 'containers/navigation/Progress.jsx';
import Alert from 'containers/messages/Alert.jsx';
//Actions
import * as alert_actions from 'actions/alert';
import * as progress_actions from 'actions/progress';
//Assets
import Labels from 'assets/text';

@connect((store) => { return { progress_store: store.progress}; })

export default class Rename extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.props.dispatch(progress_actions.initialize());
  }
  switchModal(link, dispatch){
    this.props.dispatch(progress_actions.updateAnimationType('slide-left'));
      switch(dispatch){
        case 'Configure':
          this.props.dispatch(progress_actions.switchToConfigure());
          this.props.dispatch(alert_actions.createAlert(Labels.Alerts.Unsaved.Message, Labels.Alerts.Unsaved.Buttons.Success, Labels.Alerts.Unsaved.Buttons.Cancel));
          break;
        case 'Options':
          this.props.dispatch(progress_actions.switchToOptions());
          break;
        case 'Finalize':
          this.props.dispatch(progress_actions.switchToFinalize());
          break;
        case 'Finish':
          this.props.dispatch(progress_actions.finish());
          this.props.dispatch(alert_actions.destroyAlert());
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
          transitionName = {this.props.progress_store.animation}
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname, next: this.switchModal.bind(this)})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
