import React from 'react';
import { Link } from 'react-router';

export default class PagesLink extends React.Component{
  constructor(){
    super();
    this.state = {hover: false};
  }
  _animate_in(){
    this.setState({hover: true});
  }
  _animate_out(){
    this.setState({hover: false});
  }
  _switch(title, label, alert, location, event){
    title(label);
    alert(location, event);
  }
  render(){
    return(
      <Link to={this.props.link}>
        <div class={this.props.status} onClick={this._switch.bind(this, this.props.title, this.props.label, this.props.alert, this.props.link)} onMouseOver={this._animate_in.bind(this)} onMouseOut={this._animate_out.bind(this)}>
          <i class={this.props.icon} aria-hidden="true"></i>
          <div class={this.state.hover ? "hover animation" : "hover"}>
            <div class="arrow"></div>
            <div class="label">{this.props.label}</div>
          </div>
        </div>
      </Link>
    );
  }
}
