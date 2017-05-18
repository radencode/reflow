//Modules
import React from 'react';
//Assets
import Labels from 'assets/text';

export default class Title extends React.Component{
  render(){
    return(
      <div id="title">
        <div id="logo"></div>
        <div id="status">{Labels.Window.Title}</div>
      </div>
    );
  }
}
