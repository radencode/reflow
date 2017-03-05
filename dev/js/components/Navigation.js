import React from 'react';
import ModalLink from './ModalLink';

export default class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {disable: 'enable'};
  }
  delay(){
    this.setState({disable: 'disable'});
    setTimeout(() => {
      this.setState({disable: 'enable'});
    }, 500);
  }
  render(){
    return(
      <div id="nav" class={this.state.disable} onClick={this.delay.bind(this)}>
        <ModalLink title={this.props.title} status={this.props.path.match(/^\/rename/) ? 'active' : ''} link="/" label="Rename" icon="fa fa-pencil"/>
        <ModalLink title={this.props.title} status={this.props.path.match(/^\/flow/) ? 'active' : ''} link="flow" label="File Structure" icon="fa fa-code-fork"/>
        <ModalLink title={this.props.title} status={this.props.path.match(/^\/history/) ? 'active' : ''} link="history" label="History" icon="fa fa-history"/>
        <ModalLink title={this.props.title} status={this.props.path.match(/^\/settings/) ? 'active' : ''} link="settings" label="Settings" icon="fa fa-cogs"/>
      </div>
    );
  }
}
