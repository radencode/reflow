//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as controlsActions from 'actions/controls';
//Assets
import * as icon from 'assets/icons';
//Electron
const Remote = require('electron').remote;

@connect((store) => {
  return{
    controlsStore: store.controls
  };
})
export default class Controls extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.win = Remote.getCurrentWindow();
    this.body = document.body;
    this.windowListeners();
    this.dragListeners();
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
  minMaxIcon(){
    if(this.props.controlsStore.window === 'initial'){
      return (<div onClick={this.maximize.bind(this)}>{icon.generate('controls-maximize')}</div>);
    }else{
      return (<div onClick={this.restore.bind(this)}>{icon.generate('controls-restore')}</div>);
    }
  }
  windowListeners(){
    this.win.on('maximize', () => {
      this.props.dispatch(controlsActions.maxWindow());
      this.body.classList.add('window-full-screen');
    });
    this.win.on('unmaximize', () => {
      this.props.dispatch(controlsActions.restoreWindow());
      this.body.classList.remove('window-full-screen');
    });
    this.win.on('focus', () => {
      if(this.props.controlsStore.window === 'initial')
        this.body.className = 'window-focus';
    });
    this.win.on('blur', () => {
      this.body.className = 'window-blur';
    });
  }
  dragListeners(){
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
        {this.minMaxIcon()}
        <div class="exit" onClick={this.exit.bind(this)}>{icon.generate('controls-exit')}</div>
      </div>
    );
  }
}
