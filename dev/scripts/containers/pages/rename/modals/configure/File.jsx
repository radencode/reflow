//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as filesActions from 'actions/files';
//Assets
import * as icon from 'assets/icons';

@connect ((store) => { return {} })

export default class File extends React.Component{
	toggleSelect(id){
		this.props.dispatch(filesActions.toggleSelect(id));
	}
	render(){
		return(
			<li onClick={this.toggleSelect.bind(this, this.props.id)}>
				<div class="select"><div class={this.props.select ? 'check true' : 'check false'}>{icon.generate('rename-modal-configure-file-check')}</div></div>
				<div class="type"><span>{this.props.type}</span></div>
				<div class="original">{this.props.original}</div> 
				<div class="new">{this.props.new}</div>
				<div class="size">{this.props.size}</div>  
			</li>
		);
	}
}