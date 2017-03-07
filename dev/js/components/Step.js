import React from 'react';

export default class Step extends React.Component{
  render(){
    return(
      <div class="step">
        <div class="icon">
          <div class={this.props.status === 'await' ? 'await show' : 'await hide'}></div>
          <div class={this.props.status === 'active' ? 'active show' : 'active hide'}>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class={this.props.status === 'complete' ? 'complete show' : 'complete hide'}><i class={this.props.icon} aria-hidden="true"></i></div>
        </div>
        <div class={'label ' + this.props.status}>{this.props.label}</div>
      </div>
    );
  }
}
