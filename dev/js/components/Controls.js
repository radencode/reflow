//React
import React from 'react';
//Sass
import '../../styles/components/Controls.sass';
//Electron
const remote = require('electron').remote;

export default class Controls extends React.Component{
  min(){
    remote.getCurrentWindow().minimize();
  }
  max(){
    remote.getCurrentWindow().maximize();
  }
  exit(){
    remote.getCurrentWindow().close();
  }
  render(){
    return(
      <div id="controls">
        <div class="min" onClick={this.min.bind(this)}>Min</div>
        <div class="max" onClick={this.max.bind(this)}>Max</div>
        <div class="exit" onClick={this.exit.bind(this)}>Exit</div>
      </div>
    );
  }
}
