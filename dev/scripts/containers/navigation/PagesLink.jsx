import React from 'react';
import { Link } from 'react-router';
import { changeTitle } from '../../actions/title';
import { active, inactive } from '../../actions/navigation';
import { connect } from 'react-redux';

@connect((store) => {
  return{
    navigation: store.navigation
  };
})

export default class PagesLink extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.hover = false;
  }
  animateIn(){
    this.props.dispatch(active());
    this.hover = true;
  }
  animateOut(){
    this.props.dispatch(inactive());
    this.hover = false;
  }
  handleEvents(active, event){
    if(active === 'active')
      event.preventDefault();
    this.props.dispatch(changeTitle(this.props.label));
  }
  render(){
    return(
      <Link to={this.props.link}>
        <div class={this.props.status} onClick={this.handleEvents.bind(this, this.props.status)} onMouseOver={this.animateIn.bind(this)} onMouseOut={this.animateOut.bind(this)}>
          <i class={this.props.icon} aria-hidden="true"></i>
          <div class={this.props.navigation.hover && this.hover ? "hover animation" : "hover"}>
            <div class="arrow"></div>
            <div class="label">{this.props.label}</div>
          </div>
        </div>
      </Link>
    );
  }
}
