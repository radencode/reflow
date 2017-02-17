import React from 'react';
import Bar from './Bar';
import Menu from './Menu';

export default class Layout extends React.Component{
  render(){
    return(
      <div>
        <Bar/>
        <Menu/>
      </div>
    );
  }
}
