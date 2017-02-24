import React from 'react';
const Remote = require('electron').remote;

export default class Controls extends React.Component{
  constructor(){
    super();
    this.state = {maximized: false};
    this.body = document.body;
  }
  min(){
    Remote.getCurrentWindow().minimize();
  }
  max(){
    Remote.getCurrentWindow().maximize();
    this.setState({maximized: true});
    this.body.classList.add('windowFullScreen');
  }
  unmax(){
    Remote.getCurrentWindow().unmaximize();
    this.setState({maximized: false});
    this.body.classList.remove('windowFullScreen');
  }
  exit(){
    Remote.getCurrentWindow().close();
  }
  maxIcon(){
    if(!this.state.maximized){
      return (<div onClick={this.max.bind(this)}><i class="fa fa-window-maximize" aria-hidden="true"></i></div>);
    }else{
      return (<div onClick={this.unmax.bind(this)}><i class="fa fa-window-restore" aria-hidden="true"></i></div>);
    }
  }
  borderBehavior(){
    Remote.getCurrentWindow().on('focus', () => {
      if(!this.state.maximized)
        this.body.className = 'windowFocused';
    });

    Remote.getCurrentWindow().on('blur', () => {
      this.body.className = 'windowBlur';
    });
  }

  render(){
    this.borderBehavior();
    return(
      <div id="controls">
        <div onClick={this.min.bind(this)}><i class="fa fa-window-minimize" aria-hidden="true"></i></div>
        {this.maxIcon()}
        <div class="exit" onClick={this.exit.bind(this)}><i class="fa fa-times" aria-hidden="true"></i></div>
      </div>
    );
  }
}
