import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    title: store.title
  };
})
export default class Title extends React.Component{
  render(){
    return(
      <div id="title">
        <div id="logo"></div>
        <div id="status">{this.props.title.label} - Reflow file manager</div>
      </div>
    );
  }
}
