import React from 'react';
import Step from './Step'

export default class Progress extends React.Component{
  render(){
    return(
      <div id="progress">
        <div id="steps">
          <Step link="/rename/browse" label="Browse" status={this.props.status[0]} back={this.props.back} stage={0} finish={this.props.finish} icon="fa fa-search"/>
          <Step link="/rename/configure" label="Configure" status={this.props.status[1]} back={this.props.back} finish={this.props.finish} stage={1} icon="fa fa-wrench"/>
          <Step link="/rename/options" label="Options" status={this.props.status[2]} back={this.props.back} finish={this.props.finish} stage={2} icon="fa fa-cog"/>
          <Step link={false} label="Finalize" status={this.props.status[3]} back={this.props.back} stage={3} finish={this.props.finish} icon="fa fa-check"/>
        </div>
        <div id="bar">
          <div class={'indicator ' + this.props.stage}></div>
        </div>
      </div>
    );
  }
}
