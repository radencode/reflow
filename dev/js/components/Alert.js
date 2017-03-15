import React from 'react';

export default class Alert extends React.Component{
  render(){
    return(
      <div class={this.props.unsaved ? 'unsaved active' : 'unsaved'}>
        <div class="alert">
          <div class="message">{this.props.message}</div>
          <div class="buttons">
            <div class="btn">{this.props.success}</div>
            <div class="btn">{this.props.cancel}</div>
          </div>
        </div>
      </div>
    );
  }
}
