import React from 'react';
import { connect } from 'react-redux';
import { finish } from '../../../../actions/progress';

@connect((store) => { return {}; })

export default class Finalize extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  finish(){
    this.props.dispatch(finish());
  }
  render(){
    return(
      <div id="finalize">
        <div class="title">Finalize</div>
        <div class="next" onClick={this.finish.bind(this)}>Finish</div>
      </div>
    );
  }
}
