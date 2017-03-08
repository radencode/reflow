import React from 'react';
const Remote = require('electron').remote;

export default class Controls extends React.Component{
  constructor(){
    super();
    this.state = {maximized: false};
    this._win = Remote.getCurrentWindow();
    this._body = document.body;
    this._window_listeners();
  }
  _minimize(){
    this._win.minimize();
  }
  _maximize(){
    this._win.maximize();
  }
  _unmaximize(){
    this._win.unmaximize();
  }
  _exit(){
    this._win.close();
  }
  _min_max_icon(){
    if(!this.state.maximized){
      return (<div onClick={this._maximize.bind(this)}><i class="fa fa-window-maximize" aria-hidden="true"></i></div>);
    }else{
      return (<div onClick={this._unmaximize.bind(this)}><i class="fa fa-window-restore" aria-hidden="true"></i></div>);
    }
  }
  _window_listeners(){
    this._win.on('maximize', () => {
      this.setState({maximized: true});
      this._body.classList.add('window-full-screen');
    });
    this._win.on('unmaximize', () => {
      this.setState({maximized: false});
      this._body.classList.remove('window-full-screen');
    });
    this._win.on('focus', () => {
      if(!this.state.maximized)
        this._body.className = 'window-focus';
    });
    this._win.on('blur', () => {
      this._body.className = 'window-blur';
    });
  }
  render(){
    return(
      <div id="controls">
        <div onClick={this._minimize.bind(this)}><i class="fa fa-window-minimize" aria-hidden="true"></i></div>
        {this._min_max_icon()}
        <div class="exit" onClick={this._exit.bind(this)}><i class="fa fa-times" aria-hidden="true"></i></div>
      </div>
    );
  }
}
