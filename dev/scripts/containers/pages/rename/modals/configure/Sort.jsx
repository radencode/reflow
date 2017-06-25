//Modules
import React from 'react';
import { connect } from 'react-redux';
//Assets
import * as icon from 'assets/icons';
//Actions
import * as sort_animation from 'actions/sort_animation';

@connect((store) => {
  return {
    sort_animation: store.sort_animation,
  };
}) 
export default class Sort extends React.Component{
	constructor(props){
		super();
		this.props = props;
	}
	sort_animation(_id){		
		if(this.props.sort_animation.sorts[_id].active){
			switch(this.props.sort_animation.sorts[_id].status){
				case 'up':
					this.props.dispatch(sort_animation.sort_down(_id));
				break;
				case 'down':
					this.props.dispatch(sort_animation.sort_up(_id));
				break;
				default:
					return;
			}
		}
		else
			this.props.dispatch(sort_animation.activate_sort(_id));		
	}
	sort_files(_id){

	}
	render(){
		return(
			<div class={'sort ' + this.props.name}>
				<div class="label" onClick={this.sort_animation.bind(this, this.props.id)}>
					<div class={this.props.sort_animation.sorts[this.props.id].active ? 'name active' : 'name'}>{this.props.label}</div>
					<div class={this.props.sort_animation.sorts[this.props.id].active ? 'icon ' + this.props.sort_animation.sorts[this.props.id].status : 'icon'}>{icon.generate('rename-modal-configure-sort')}</div>
				</div>		
			</div>
		);
	}
}