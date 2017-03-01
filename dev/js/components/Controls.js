import React from 'react';
const Remote = require('electron').remote;

export default class Controls extends React.Component{
  constructor(){
    super();
    this.state = {maximized: false};
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
  unmaximize(){
    this.win.unmaximize();
  }
  exit(){
    this.win.close();
  }
  min_max_icon(){
    if(!this.state.maximized){
      return (<div onClick={this.maximize.bind(this)}><i class="fa fa-window-maximize" aria-hidden="true"></i></div>);
    }else{
      return (<div onClick={this.unmaximize.bind(this)}><i class="fa fa-window-restore" aria-hidden="true"></i></div>);
    }
  }
  window_listeners(){
    this.win.on('maximize', () => {
      this.setState({maximized: true});
      this.body.classList.add('window-full-screen');
    });
    this.win.on('unmaximize', () => {
      this.setState({maximized: false});
      this.body.classList.remove('window-full-screen');
    });
    this.win.on('focus', () => {
      if(!this.state.maximized)
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
