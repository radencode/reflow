import React from 'react';
import PagesLink from 'containers/navigation/PagesLink.jsx';
import Labels from 'assets/text';

export default class Navigation extends React.Component{
  render(){
    return(
      <div id="nav">
        <PagesLink status={this.props.path.match(/rename/) ? 'active' : ''} link="rename" label={Labels.Pages[0].Title} icon="page-rename"/>
        <PagesLink status={this.props.path.match(/flow/) ? 'active' : ''} link="flow" label={Labels.Pages[1].Title} icon="page-flow"/>
        <PagesLink status={this.props.path.match(/history/) ? 'active' : ''} link="history" label={Labels.Pages[2].Title} icon="page-history"/>
        <PagesLink status={this.props.path.match(/settings/) ? 'active' : ''} link="settings" label={Labels.Pages[3].Title} icon="page-settings"/>
      </div>
    );
  }
}
