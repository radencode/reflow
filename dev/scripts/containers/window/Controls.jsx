//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as controls_actions from 'actions/controls';
//Assets
import * as icon from 'assets/icons';
//Electron
const Remote = require('electron').remote;

@connect((store) => {
  return{
    controls_store: store.controls
  };
})
export default class Controls extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.win = Remote.getCurrentWindow();
    this.body = document.body;
    this.window_listeners();
    this.drag_listeners();
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
    if(this.props.controls_store.window === 'initial'){
      return (<div onClick={this.maximize.bind(this)}>{icon.generate('controls-maximize')}</div>);
    }else{
      return (<div onClick={this.restore.bind(this)}>{icon.generate('controls-restore')}</div>);
    }
  }
  window_listeners(){
    this.win.on('maximize', () => {
      this.props.dispatch(controls_actions.maxWindow());
      this.body.classList.add('window-full-screen');
    });
    this.win.on('unmaximize', () => {
      this.props.dispatch(controls_actions.restoreWindow());
      this.body.classList.remove('window-full-screen');
    });
    this.win.on('focus', () => {
      if(this.props.controls_store.window === 'initial')
        this.body.className = 'window-focus';
    });
    this.win.on('blur', () => {
      this.body.className = 'window-blur';
    });
  }
  drag_listeners(){
    this.body.addEventListener('dragover', (event) => {
      event.dataTransfer.dropEffect = 'none';
      event.preventDefault();      
    }, false);
    this.body.addEventListener('drop', (event) => {
      event.preventDefault();
    }, false);
  }
  render(){
    return(
      <div id="controls">
        <div onClick={this.minimize.bind(this)}>{icon.generate('controls-minimize')}</div>
        {this.min_max_icon()}
        <div class="exit" onClick={this.exit.bind(this)}>{icon.generate('controls-exit')}</div>
      </div>
    );
  }
}
