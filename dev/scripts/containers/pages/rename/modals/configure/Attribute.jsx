//Modules
import React from 'react';
//Assets
import * as icon from 'assets/icons';

export default class Attribute extends React.Component{
  render(){
    return(
      <li class="attribute-item">
				<div class="icon">{icon.generate('box')}</div>
				<div class="name">{this.props.name}</div>		
      </li>
    );
  }
}
