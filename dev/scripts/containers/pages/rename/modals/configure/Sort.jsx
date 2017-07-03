//Modules
import React from 'react';
import { connect } from 'react-redux';
//Assets
import * as icon from 'assets/icons';
//Actions
import * as sortAnimationActions from 'actions/sortAnimation';
import * as filesActions from 'actions/files';

@connect((store) => {
  return {
    sortAnimationStore: store.sortAnimation,
  };
}) 
export default class Sort extends React.Component{
	constructor(props){
		super();
		this.props = props;
	}
	sort(id, type, sort){	
		if(this.props.sortAnimationStore.sorts[id].active){
			switch(this.props.sortAnimationStore.sorts[id].status){
				case 'up':
					this.props.dispatch(sortAnimationActions.sortAnimationDown(id));
					this.props.dispatch(filesActions.sortFiles(type, sort, 'up'));
				break;
				case 'down':
					this.props.dispatch(sortAnimationActions.sortAnimationUp(id));
					this.props.dispatch(filesActions.sortFiles(type, sort));
				break;
				default:
					return;
			}
			return;
		}	
		this.props.dispatch(sortAnimationActions.activateAnimationSort(id));
		this.props.dispatch(filesActions.sortFiles(type, sort));	
	}
	render(){
		return(
			<div class={'sort ' + this.props.style}>
				<div class="label" onClick={this.sort.bind(this, this.props.id, this.props.type, this.props.name)}>
					<div class={this.props.sortAnimationStore.sorts[this.props.id].active ? 'name active' : 'name'}>{this.props.label}</div>
					<div class={this.props.sortAnimationStore.sorts[this.props.id].active ? 'icon ' + this.props.sortAnimationStore.sorts[this.props.id].status : 'icon'}>{icon.generate('rename-modal-configure-sort')}</div>
				</div>		
			</div>
		);
	}
}