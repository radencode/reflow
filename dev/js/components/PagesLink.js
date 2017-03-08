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
  _change_title(title, label){
    title(label);
  }
  render(){
    return(
      <Link to={this.props.link}>
        <div class={this.props.status} onClick={this._change_title.bind(this, this.props.title, this.props.label)} onMouseOver={this._animate_in.bind(this)} onMouseOut={this._animate_out.bind(this)}>
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
