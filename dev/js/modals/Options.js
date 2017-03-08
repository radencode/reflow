import React from 'react';
import { Link } from 'react-router';

export default class Options extends React.Component{
  render(){
    return(
      <div id="options">
        <div class="title">Options</div>
        <Link to="/rename/finalize"><div class="next" onClick={this.props.next}>Next</div></Link>
      </div>
    );
  }
}
