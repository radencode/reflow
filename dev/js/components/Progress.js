import React from 'react';
import Step from './Step'

export default class Progress extends React.Component{
  render(){
    return(
      <div id="progress">
        <div id="steps">
          <Step label="Browse" status={this.props.status[0]} icon="fa fa-search"/>
          <Step label="Configure" status={this.props.status[1]} icon="fa fa-wrench"/>
          <Step label="Options" status={this.props.status[2]} icon="fa fa-cog"/>
          <Step label="Finalize" status={this.props.status[3]} icon="fa fa-check"/>
        </div>
        <div id="bar">
          <div class={'indicator ' + this.props.stage}></div>
        </div>
      </div>
    );
  }
}
