//Modules
import React from 'react';
import { connect } from 'react-redux';
//Containers
import Linker from 'containers/navigation/Linker.jsx';
//Assets
import Labels from 'assets/text';
import * as icon from 'assets/icons';

@connect((store) => {
  return {
    title: store.title,
		navigation: store.navigation
  };
})

export default class Navigation extends React.Component{
	render(){
		return(
				<div id="navigation">
						<div class={'nav-active ' + this.props.navigation.active}>
							<div id="nav-arrow">{icon.generate('page-arrow')}</div>
						</div>
						<div id="nav-menu">
							<ul id="nav-links">
								<Linker status={this.props.path.match(/rename/) ? 'active' : ''} link="rename" label={Labels.Pages[0].Title} icon='page-rename'/>
								<Linker status={this.props.path.match(/flow/) ? 'active' : ''} link="flow" label={Labels.Pages[1].Title} icon='page-flow'/>
								<Linker status={this.props.path.match(/history/) ? 'active' : ''} link="history" label={Labels.Pages[2].Title} icon='page-history'/>
								<Linker status={this.props.path.match(/settings/) ? 'active' : ''} link="settings" label={Labels.Pages[3].Title} icon='page-settings'/>
							</ul>
							<div id="nav-status">				
								<div class={this.props.title.hover ? 'nav-title hover' : 'nav-title'}>{this.props.title.label}</div>		
							</div>
						</div>
				</div>	
		);
	}
}