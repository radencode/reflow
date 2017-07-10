//Modules
import React from 'react';
import { connect } from 'react-redux';
//Containers
import Linker from 'containers/navigation/Linker.jsx';
//Assets
import * as getText from 'assets/text';
import * as icon from 'assets/icons';

@connect((store) => {
  return {
    titleStore: store.title,
		navigationStore: store.navigation
  };
})

export default class Navigation extends React.Component{
	render(){
		return(
				<div id="navigation">
						<div class={'nav-active ' + this.props.navigationStore.active}>
							<div id="nav-arrow">{icon.generate('page-arrow')}</div>
						</div>
						<div id="nav-menu">
							<ul id="nav-links">
								<Linker status={this.props.path.match(/rename/) ? 'active' : ''} link="rename" text={getText.navigation('rename-title')} icon='page-rename'/>
								<Linker status={this.props.path.match(/flow/) ? 'active' : ''} link="flow" text={getText.navigation('file-structure-title')} icon='page-flow'/>
								<Linker status={this.props.path.match(/history/) ? 'active' : ''} link="history" text={getText.navigation('history-title')} icon='page-history'/>
								<Linker status={this.props.path.match(/settings/) ? 'active' : ''} link="settings" text={getText.navigation('settings-title')} icon='page-settings'/>
							</ul>
							<div id="nav-status">				
								<div class={this.props.titleStore.hover ? 'nav-title hover' : 'nav-title'}>{this.props.titleStore.text}</div>		
							</div>
						</div>
				</div>	
		);
	}
}