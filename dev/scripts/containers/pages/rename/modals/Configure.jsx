import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { switchToOptions } from 'actions/progress';

@connect((store) => { return {}; })

export default class Configure extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  switchModal(){
    this.props.dispatch(switchToOptions());
  }
  render(){
    return(
      <div class="container">
        <div class="title">Configure</div>
        <Link to="/rename/options"><div class="next" onClick={this.switchModal.bind(this)}>Next</div></Link>
      </div>
    );
  }
}
