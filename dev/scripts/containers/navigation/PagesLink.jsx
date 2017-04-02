import React from 'react';
import { Link } from 'react-router';
import { changeTitle } from 'actions/title';
import { active, inactive } from 'actions/navigation';
import { setLinkAlert, fireAlert } from 'actions/alert';
import { connect } from 'react-redux';
import GenerateIcon from 'assets/icons';

@connect((store) => {
  return{
    navigation: store.navigation,
    alert: store.alert,
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
    if(active === 'active' || this.props.alert.alert){
      event.preventDefault();
      if(active != 'active')
        this.props.dispatch(fireAlert(this.props.link));
    }
    this.props.dispatch(changeTitle(this.props.label));
  }
  render(){
    return(
      <Link to={this.props.link}>
        <div class={this.props.status} onClick={this.handleEvents.bind(this, this.props.status)} onMouseOver={this.animateIn.bind(this)} onMouseOut={this.animateOut.bind(this)}>
          {GenerateIcon(this.props.icon)}
          <div class={this.props.navigation.hover && this.hover ? "hover animation" : "hover"}>
            <div class="arrow"></div>
            <div class="label">{this.props.label}</div>
          </div>
        </div>
      </Link>
    );
  }
}
