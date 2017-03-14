import React from 'react';

export default class Step extends React.Component{
  _back(func, stage, status, link, finish){
    if(status === 'complete' && !finish)
      func(stage, link);
  }
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
        <div class={this.props.status === 'complete' && !this.props.finish ? 'label ' + this.props.status + ' link' : 'label ' + this.props.status}
             onClick={this._back.bind(this, this.props.back, this.props.stage, this.props.status, this.props.link, this.props.finish)}>
             {this.props.label}
        </div>
      </div>
    );
  }
}
