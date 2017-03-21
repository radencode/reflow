import React from 'react';

export default class Alert extends React.Component{
  render(){
    return(
      <div>
        <div class="alert">
          <div class="message">{this.props.message}</div>
          <div class="buttons">
            <div class="btn" onClick={this.props.funcContinue.bind(this.props)}>{this.props.success}</div>
            <div class="btn" onClick={this.props.funcCancel}>{this.props.cancel}</div>
          </div>
        </div>
      </div>
    );
  }
}
