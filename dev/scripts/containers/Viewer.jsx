import React from 'react';

//Animations
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Viewer components
import Navigation from './Navigation';
import Alert from './Alert';

export default class Viewer extends React.Component{
  constructor(){
    super();
    this.state = {alert: false};
    this._unsaved_data = false;
    this._location = '';
  }
  _get_key(path){
    return path.split('/')[1] || 'root';
  }
  _alert(location, event){
    if(this._unsaved_data){
      event.preventDefault();
      this.setState({alert: true});
      this._location = '/' + location;
    }
  }
  _continue(){
    this.props.modal.props.router.push(this._location);
    this.setState({alert: false});
    this._saved();
  }
  _cancel(){
    this.setState({alert: false});
  }
  _unsaved(){
    this._unsaved_data = true;
  }
  _saved(){
    this._unsaved_data = false;
  }
  render(){
    const key = this._get_key(this.props.path);
    return(
      <div id="viewer">
        <Navigation title={this.props.title} path={this.props.path} alert={this._alert.bind(this)}/>
        <Alert unsaved={this.state.alert} message="Are you sure you want to continue? All progress will be lost." success="Continue" cancel="Cancel" funcContinue={this._continue.bind(this)} funcCancel={this._cancel.bind(this)}/>
        <ReactCSSTransitionGroup
          transitionName = "fade"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {250}>
          {React.cloneElement(this.props.modal, {key: key, unsaved: this._unsaved.bind(this), saved: this._saved.bind(this)})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
