//Modules
import React from 'react';
import { connect } from 'react-redux';
//Assets
import * as icon from 'assets/icons';
//Actions
import * as sort_actions from 'actions/sort';
import * as files_actions from 'actions/files';

@connect((store) => {
  return {
    sort_store: store.sort,
		files_store: store.files
  };
}) 
export default class Sort extends React.Component{
	constructor(props){
		super();
		this.props = props;
	}
	sort(_id, _sort){	
		if(this.props.sort_store.sorts[_id].active){
			switch(this.props.sort_store.sorts[_id].status){
				case 'up':
					this.props.dispatch(sort_actions.sort_down(_id));
					this.props.dispatch(files_actions.sort_files(_sort, 'up'));
				break;
				case 'down':
					this.props.dispatch(sort_actions.sort_up(_id));
					this.props.dispatch(files_actions.sort_files(_sort));
				break;
				default:
					return;
			}
			return;
		}	
		this.props.dispatch(sort_actions.activate_sort(_id));
		this.props.dispatch(files_actions.sort_files(_sort));		
	}
	render(){
		return(
			<div class={'sort ' + this.props.name}>
				<div class="label" onClick={this.sort.bind(this, this.props.id, this.props.name)}>
					<div class={this.props.sort_store.sorts[this.props.id].active ? 'name active' : 'name'}>{this.props.label}</div>
					<div class={this.props.sort_store.sorts[this.props.id].active ? 'icon ' + this.props.sort_store.sorts[this.props.id].status : 'icon'}>{icon.generate('rename-modal-configure-sort')}</div>
				</div>		
			</div>
		);
	}
}