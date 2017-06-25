//Modules
import React from 'react';

export default class File extends React.Component{
	render(){
		return(
			<li>
				<div class="type"><span>{this.props.type}</span></div>
				<div class="original">{this.props.original}</div> 
				<div class="new">{this.props.new}</div>
				<div class="size">{this.props.size}</div>  
			</li>
		);
	}
}