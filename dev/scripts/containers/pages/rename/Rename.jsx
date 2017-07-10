//Modules
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Containers
import Progress from 'containers/navigation/Progress.jsx';
import Message from 'containers/components/Message.jsx';
//Actions
import * as alertActions from 'actions/alert';
import * as progressActions from 'actions/progress';
//Assets
import * as getText from 'assets/text';

@connect((store) => { 
  return { 
    progressStore: store.progress
  }; 
})

export default class Rename extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.props.dispatch(progressActions.initialize());
  }
  switchModal(link, dispatch){
    this.props.dispatch(progressActions.updateAnimationType('slide-left'));
      switch(dispatch){
        case 'Configure':
          this.props.dispatch(progressActions.switchToConfigure());
          this.props.dispatch(alertActions.createAlert(getText.message('message'), getText.message('continue'), getText.message('cancel')));
          break;
        case 'Options':
          this.props.dispatch(progressActions.switchToOptions());
          break;
        case 'Finalize':
          this.props.dispatch(progressActions.switchToFinalize());
          break;
        case 'Finish':
          this.props.dispatch(progressActions.finalize());
          this.props.dispatch(alertActions.destroyAlert());
          break;
      }  
      if(link) 
        this.props.router.push(link);
  }
  render(){
    return(
      <div id="rename">
        <Progress router={this.props.router}/>
        <Message router={this.props.router}/>
        <ReactCSSTransitionGroup
          transitionName = {this.props.progressStore.animation}
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname, next: this.switchModal.bind(this)})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
