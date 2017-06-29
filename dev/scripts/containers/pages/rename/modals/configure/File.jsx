//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as filesActions from 'actions/files';

@connect ((store) => { return {} })

export default class File extends React.Component{
	removeFile(id){
		this.props.dispatch(filesActions.removeFile(id));
	}
	render(){
		return(
			<li onClick={this.removeFile.bind(this, this.props.id)}>
				<div class="type"><span>{this.props.type}</span></div>
				<div class="original">{this.props.original}</div> 
				<div class="new">{this.props.new}</div>
				<div class="size">{this.props.size}</div>  
			</li>
		);
	}
}