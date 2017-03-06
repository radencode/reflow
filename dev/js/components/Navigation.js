import React from 'react';
import PagesLink from './PagesLink';

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
        <PagesLink title={this.props.title} status={this.props.path.match(/rename/) ? 'active' : ''} link="rename" label="Rename" icon="fa fa-pencil"/>
        <PagesLink title={this.props.title} status={this.props.path.match(/flow/) ? 'active' : ''} link="flow" label="File Structure" icon="fa fa-code-fork"/>
        <PagesLink title={this.props.title} status={this.props.path.match(/history/) ? 'active' : ''} link="history" label="History" icon="fa fa-history"/>
        <PagesLink title={this.props.title} status={this.props.path.match(/settings/) ? 'active' : ''} link="settings" label="Settings" icon="fa fa-cogs"/>
      </div>
    );
  }
}
