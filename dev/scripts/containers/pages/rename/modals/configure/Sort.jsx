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
  };
}) 
export default class Sort extends React.Component{
	constructor(props){
		super();
		this.props = props;
	}
	sort(_id){		
		if(this.props.sort_store.sorts[_id].active){
			switch(this.props.sort_store.sorts[_id].status){
				case 'up':
					this.props.dispatch(sort_actions.sort_down(_id));
				break;
				case 'down':
					this.props.dispatch(sort_actions.sort_up(_id));
				break;
				default:
					return;
			}
		}
		else
			this.props.dispatch(sort_actions.activate_sort(_id));		
	}
	render(){
		return(
			<div class={'sort ' + this.props.name}>
				<div class="label" onClick={this.sort.bind(this, this.props.id)}>
					<div class={this.props.sort_store.sorts[this.props.id].active ? 'name active' : 'name'}>{this.props.label}</div>
					<div class={this.props.sort_store.sorts[this.props.id].active ? 'icon ' + this.props.sort_store.sorts[this.props.id].status : 'icon'}>{icon.generate('rename-modal-configure-sort')}</div>
				</div>		
			</div>
		);
	}
}