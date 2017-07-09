//Modules
import React from 'react';
//Assets
import * as icon from 'assets/icons';

export default class SearchBar extends React.Component{
	updateSearch(dispatch, action, event) {
		if(dispatch && action)
			dispatch(action(event.target.value));
	}
	showPlaceHolder(placeholder, event){
		event.target.placeholder = placeholder;
	}
	hidePlaceHolder(event){
		event.target.placeholder = '';
	}
  render(){
    return(
			<div class="search-bar">
				<div class="search-icon">{icon.generate('search')}</div>
				<input class="search" type="text" placeholder={this.props.placeholder} onChange={this.updateSearch.bind(this, this.props.dispatch, this.props.action)} onFocus={this.hidePlaceHolder.bind(this)} onBlur={this.showPlaceHolder.bind(this, this.props.placeholder)}></input>
			</div>			
    );
  }
}
