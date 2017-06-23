//Modules
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
//Actions
import * as title from 'actions/title'
import * as alert from 'actions/alert';
import * as navigation from 'actions/navigation';
//Assets
import * as icon from 'assets/icons';

@connect((store) => {
  return{
    alert: store.alert
  };
})

export default class Linker extends React.Component{
	 constructor(props){
    super();
    this.props = props;
  }
	switchModal(active, event){
    if(active === 'active' || this.props.alert.alert){
      event.preventDefault();
      if(active != 'active')
        this.props.dispatch(alert.fireAlert(this.props.link));
    }
		this.props.dispatch(navigation.setActiveModal(this.props.link));
  }
	hoverOverLink(){
		this.props.dispatch(title.hoverInTitle(this.props.label));
	}
	hoverOutLink(){
		this.props.dispatch(title.hoverOutTitle());
	}
	render(){
		return(
			<li>
				<div class="anchor">					
						<Link to={this.props.link} onClick={this.switchModal.bind(this, this.props.status)} onMouseOver={this.hoverOverLink.bind(this)} onMouseOut={this.hoverOutLink.bind(this)}>
							<div class="icon">
								{icon.generate(this.props.icon)}
							</div>
						</Link>					
				</div>
			</li>
		);
	}
}