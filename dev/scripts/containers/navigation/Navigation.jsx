import React from 'react';
import PagesLink from './PagesLink.jsx';

export default class Navigation extends React.Component{
  render(){
    return(
      <div id="nav">
        <PagesLink status={this.props.path.match(/rename/) ? 'active' : ''} link="rename" label="Rename" icon="fa fa-pencil"/>
        <PagesLink status={this.props.path.match(/flow/) ? 'active' : ''} link="flow" label="File Structure" icon="fa fa-code-fork"/>
        <PagesLink status={this.props.path.match(/history/) ? 'active' : ''} link="history" label="History" icon="fa fa-history"/>
        <PagesLink status={this.props.path.match(/settings/) ? 'active' : ''} link="settings" label="Settings" icon="fa fa-cogs"/>
      </div>
    );
  }
}
