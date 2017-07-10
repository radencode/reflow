//Modules
import React from 'react';
//Assets
import * as getText from 'assets/text';

export default class Title extends React.Component{
  render(){
    return(
      <div id="title">
        <div id="logo"></div>
        <div id="status">{getText.window('title')}</div>
      </div>
    );
  }
}
