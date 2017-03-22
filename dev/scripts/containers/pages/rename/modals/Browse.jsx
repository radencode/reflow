import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { switchToConfigure } from '../../../../actions/progress';

@connect((store) => { return {}; })

export default class Browse extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  switchModal(){
    this.props.dispatch(switchToConfigure());
  }
  render(){
    return(
      <div id="browse">
        <div class="title">Browse</div>
        <Link to="/rename/configure"><div class="next" onClick={this.switchModal.bind(this)}>Next</div></Link>
      </div>
    );
  }
}
