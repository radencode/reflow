import React from 'react';
import GenerateIcon from 'assets/icons';

export default class Step extends React.Component{
  render(){
    return(
      <div class="step">
        <div class="icon">
          <div class={'bar ' + this.props.bar}></div>
          <div class={this.props.status === 'await' ? 'await show' : 'await hide'}></div>
            <div class={this.props.status === 'active' ? 'active show' : 'active hide'}>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          <div class={this.props.status === 'completed' ? 'completed show' : 'completed hide'}>{GenerateIcon(this.props.icon)}</div>
        </div>
        <div class={this.props.status === 'completed' && !this.props.finish ? 'label ' + this.props.status + ' link' : 'label ' + this.props.status} onClick={this.props.switch.bind(this, this.props.link, this.props.label, this.props.status === 'completed' && !this.props.finish ? true : false)}>
          {this.props.label}
        </div>
      </div>
    );
  }
}
