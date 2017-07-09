//Modules
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Components
import LoadingScreen from 'containers/components/LoadingScreen.jsx';

export default class ExplorerList extends React.Component{
	loadItems(loading){
		if(loading) return ( <LoadingScreen message = {this.props.loadingMessage}/>  );
		return (
			<ul class="item-list">
				<ReactCSSTransitionGroup transitionName = {this.props.animation.name} transitionEnterTimeout = {this.props.animation.enter} transitionLeaveTimeout = {this.props.animation.leave}>
					{this.props.items()}
				</ReactCSSTransitionGroup>					
			</ul>
		);		
	}
	render(){	
		return(
			<div class="explorer">
				{this.loadItems(this.props.loading)}
			</div>		
		);
	}
}