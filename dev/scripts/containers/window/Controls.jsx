import React from 'react';
import { connect } from 'react-redux';
import { maxWindow, restoreWindow } from '../../actions/controls';
const Remote = require('electron').remote;

@connect((store) => {
  return{
    controls: store.controls
  };
})
export default class Controls extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.win = Remote.getCurrentWindow();
    this.body = document.body;
    this.window_listeners();
  }
  minimize(){
    this.win.minimize();
  }
  maximize(){
    this.win.maximize();
  }
  restore(){
    this.win.unmaximize();
  }
  exit(){
    this.win.close();
  }
  min_max_icon(){
    if(this.props.controls.window === 'initial'){
      return (<div onClick={this.maximize.bind(this)}><i class="fa fa-window-maximize" aria-hidden="true"></i></div>);
    }else{
      return (<div onClick={this.restore.bind(this)}><i class="fa fa-window-restore" aria-hidden="true"></i></div>);
    }
  }
  window_listeners(){
    this.win.on('maximize', () => {
      this.props.dispatch(maxWindow());
      this.body.classList.add('window-full-screen');
    });
    this.win.on('unmaximize', () => {
      this.props.dispatch(restoreWindow());
      this.body.classList.remove('window-full-screen');
    });
    this.win.on('focus', () => {
      if(this.props.controls.window === 'initial')
        this.body.className = 'window-focus';
    });
    this.win.on('blur', () => {
      this.body.className = 'window-blur';
    });
  }
  render(){
    return(
      <div id="controls">
        <div onClick={this.minimize.bind(this)}><i class="fa fa-window-minimize" aria-hidden="true"></i></div>
        {this.min_max_icon()}
        <div class="exit" onClick={this.exit.bind(this)}><i class="fa fa-times" aria-hidden="true"></i></div>
      </div>
    );
  }
}
