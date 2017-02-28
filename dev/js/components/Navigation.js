import React from 'react';
import ModalLink from './ModalLink';

export default class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {click: "enable"}
  }
  render(){
    return(
      <div id="nav" class={this.state.click}>
        <ModalLink status="active" link="/" label="Rename" icon="fa fa-pencil"/>
        <ModalLink link="flow" label="File Structure" icon="fa fa-code-fork"/>
        <ModalLink link="history" label="History" icon="fa fa-history"/>
        <ModalLink link="settings" label="Settings" icon="fa fa-cogs"/>
      </div>
    );
  }
}
