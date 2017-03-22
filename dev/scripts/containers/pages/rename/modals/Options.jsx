import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { switchToFinalize } from '../../../../actions/progress';

@connect((store) => { return {}; })

export default class Options extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  switchModal(){
    this.props.dispatch(switchToFinalize());
  }
  render(){
    return(
      <div id="options">
        <div class="title">Options</div>
        <Link to="/rename/finalize"><div class="next" onClick={this.switchModal.bind(this)}>Next</div></Link>
      </div>
    );
  }
}
