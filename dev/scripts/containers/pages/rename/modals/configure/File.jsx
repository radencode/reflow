//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as filesActions from 'actions/files';
//Assets
import * as icon from 'assets/icons';

@connect ((store) => { return {} })

export default class File extends React.Component{
	handleClick(id, event){
		switch(event.nativeEvent.which){
			case 1:
				this.props.dispatch(filesActions.toggleSelect(id));
			break;
			case 3:
				event.preventDefault();
				this.props.dispatch(filesActions.toggleSettings(id));
			break;
			default: 
				return;
		}		
	}
	deleteFile(id){
		this.props.dispatch(filesActions.removeFile(id));
	}
	viewFile(id){
		this.props.dispatch(filesActions.toggleSettings(id));
	}
	render(){
		return(
			<li class="file-item">
				<div class="file">
					<div class={this.props.settings ? 'properties close' : 'properties'} onClick={this.handleClick.bind(this, this.props.id)} onContextMenu={this.handleClick.bind(this, this.props.id)}>
						<div class="select"><div class={this.props.selected ? 'check true' : 'check false'}>{icon.generate('rename-modal-configure-file-check')}</div></div>
						<div class="type"><span>{this.props.type}</span></div>
						<div class="original">{this.props.original}</div> 
						<div class="new">{this.props.new}</div>
						<div class="size">{this.props.size}</div>
					</div>
					<div class={this.props.settings ? 'settings open' : 'settings'}>
						<div class="option delete" onClick={this.deleteFile.bind(this, this.props.id)}>
							{icon.generate('rename-modal-configure-delete-file')}
							<span>Delete file from list</span>
						</div>
						<div class="option back" onClick={this.viewFile.bind(this, this.props.id)}>
							{icon.generate('rename-modal-configure-view-file')}
							<span>Cancel</span>
						</div>
					</div>
				</div> 
			</li>
		);
	}
}