import React from 'react';

export default class Title extends React.Component{
  render(){
    return(
      <div id="title">
        <div id="logo"></div>
        <div id="status">{this.props.title} - Reflow file manager</div>
      </div>
    );
  }
}
