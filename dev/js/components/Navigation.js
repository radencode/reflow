import React from 'react';
import ModalLink from './ModalLink';

export default class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {
      disable: "enable"
    }
  }
  delay(){
    this.setState({disable: "disable"});
    setTimeout(() => {
      this.setState({disable: "enable"});
    }, 500);
  }
  render(){
    return(
      <div id="nav" class={this.state.disable} onClick={this.delay.bind(this)}>
        <ModalLink status={this.props.path === '/' ? 'active' : ''} link="/" label="Rename" icon="fa fa-pencil"/>
        <ModalLink status={this.props.path === '/flow' ? 'active' : ''} link="flow" label="File Structure" icon="fa fa-code-fork"/>
        <ModalLink status={this.props.path === '/history' ? 'active' : ''} link="history" label="History" icon="fa fa-history"/>
        <ModalLink status={this.props.path === '/settings' ? 'active' : ''} link="settings" label="Settings" icon="fa fa-cogs"/>
      </div>
    );
  }
}
