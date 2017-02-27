import React from 'react';
import ModalLink from './ModalLink';

export default class Navigation extends React.Component{
  render(){
    return(
      <div id="nav">
        <ModalLink status="active" link="Rename" icon="fa fa-pencil"/>
        <ModalLink link="File Structure" icon="fa fa-code-fork"/>
        <ModalLink link="History" icon="fa fa-history"/>
        <ModalLink link="Settings" icon="fa fa-cogs"/>
      </div>
    );
  }
}
