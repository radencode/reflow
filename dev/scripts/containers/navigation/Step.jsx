//Modules
import React from 'react';
//Assets
import * as icon from 'assets/icons';

export default class Step extends React.Component{
  render(){
    return(
      <div class="step">
        <div class="icon">
          <div class={'connector ' + this.props.connector}>
            <div class={'bar ' + this.props.bar}></div>
          </div>
          <div class={this.props.status === 'await' ? 'await show' : 'await hide'}></div>
          <div class={this.props.status === 'active' ? 'active show' : 'active hide'}>{icon.generate(this.props.icon)}</div>
          <div class={this.props.status === 'completed' ? 'completed show' : 'completed hide'}>{icon.generate(this.props.icon)}</div>
        </div>
        <div class={this.props.status === 'completed' && !this.props.finish ? 'text ' + this.props.status + ' link' : 'text ' + this.props.status} onClick={this.props.switch.bind(this, this.props.link, this.props.text, this.props.status === 'completed' && !this.props.finish ? true : false)}>
          {this.props.text}
        </div>
      </div>
    );
  }
}
