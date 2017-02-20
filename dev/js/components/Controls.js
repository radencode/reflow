import React from 'react';
const remote = require('electron').remote;

export default class Controls extends React.Component{
  constructor(){
    super();
    this.state = {maximized: false};
    this.body = document.body;
  }
  min(){
    remote.getCurrentWindow().minimize();
  }
  max(){
    remote.getCurrentWindow().maximize();
    this.setState({maximized: true});
    this.body.classList.add('windowFullScreen');
  }
  unmax(){
    remote.getCurrentWindow().unmaximize();
    this.setState({maximized: false});
    this.body.classList.remove('windowFullScreen');
  }
  exit(){
    remote.getCurrentWindow().close();
  }
  maxIcon(){
    if(!this.state.maximized){
      return (<div onClick={this.max.bind(this)}><i class="fa fa-window-maximize" aria-hidden="true"></i></div>);
    }else{
      return (<div onClick={this.unmax.bind(this)}><i class="fa fa-window-restore" aria-hidden="true"></i></div>);
    }
  }
  render(){
    return(
      <div id="controls">
        <div onClick={this.min.bind(this)}><i class="fa fa-window-minimize" aria-hidden="true"></i></div>
        {this.maxIcon()}
        <div class="exit" onClick={this.exit.bind(this)}><i class="fa fa-times" aria-hidden="true"></i></div>
      </div>
    );
  }
}
