//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as files_actions from 'actions/files';

@connect ((store) => { return {} })

export default class File extends React.Component{
	remove_file(_id){
		this.props.dispatch(files_actions.remove_file(_id));
	}
	render(){
		return(
			<li onClick={this.remove_file.bind(this, this.props.id)}>
				<div class="type"><span>{this.props.type}</span></div>
				<div class="original">{this.props.original}</div> 
				<div class="new">{this.props.new}</div>
				<div class="size">{this.props.size}</div>  
			</li>
		);
	}
}