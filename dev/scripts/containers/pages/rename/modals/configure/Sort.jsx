//Modules
import React from 'react';
import { connect } from 'react-redux';
//Assets
import * as icon from 'assets/icons';
//Actions
import * as sort from 'actions/sort';


@connect((store) => {
  return {
    sort: store.sort,
  };
}) 
export default class Sort extends React.Component{
	constructor(props){
		super();
		this.props = props;
	}
	update_sort(_id){		
		if(this.props.sort.sorts[_id].active){
			switch(this.props.sort.sorts[_id].status){
				case 'up':
					this.props.dispatch(sort.sort_down(_id));
				break;
				case 'down':
					this.props.dispatch(sort.sort_up(_id));
				break;
				default:
					return;
			}
		}
		else
			this.props.dispatch(sort.activate_sort(_id));		
	}
	render(){
		return(
			<div class={'sort ' + this.props.name}>
				<div class="label" onClick={this.update_sort.bind(this, this.props.id)}>
					<div class="name">{this.props.label}</div>
					<div class={this.props.sort.sorts[this.props.id].active ? 'icon ' + this.props.sort.sorts[this.props.id].status : 'icon'}>{icon.generate('rename-modal-configure-sort')}</div>
				</div>		
			</div>
		);
	}
}