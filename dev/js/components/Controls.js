import React from 'react';
const Remote = require('electron').remote;

export default class Controls extends React.Component{
  constructor(){
    super();
    this.state = {maximized: false};
    this.body = document.body;
    this.win = Remote.getCurrentWindow();
  }
  min(){
    this.win.minimize();
  }
  max(){
    this.win.maximize();
    this.win.setResizable(false);
    this.setState({maximized: true});
    this.body.classList.add('window-full-screen');
  }
  unmax(){
    this.win.unmaximize();
    this.win.setResizable(true);
    this.setState({maximized: false});
    this.body.classList.remove('window-full-screen');
  }
  exit(){
    this.win.close();
  }
  maxIcon(){
    if(!this.state.maximized){
      return (<div onClick={this.max.bind(this)}><i class="fa fa-window-maximize" aria-hidden="true"></i></div>);
    }else{
      return (<div onClick={this.unmax.bind(this)}><i class="fa fa-window-restore" aria-hidden="true"></i></div>);
    }
  }
  screen(){
    this.win.on('focus', () => {
      if(!this.state.maximized)
        this.body.className = 'window-focus';
    });
    this.win.on('blur', () => {
      this.body.className = 'window-blur';
    });
  }

  render(){
    this.screen();
    return(
      <div id="controls">
        <div onClick={this.min.bind(this)}><i class="fa fa-window-minimize" aria-hidden="true"></i></div>
        {this.maxIcon()}
        <div class="exit" onClick={this.exit.bind(this)}><i class="fa fa-times" aria-hidden="true"></i></div>
      </div>
    );
  }
}
