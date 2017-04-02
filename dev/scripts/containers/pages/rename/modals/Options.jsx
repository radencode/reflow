//Modules
import React from 'react';

export default class Options extends React.Component{
  render(){
    return(
      <div class="container">
        <div class="title">Options</div>
        <div class="next" onClick={this.props.next.bind(this, '/rename/finalize', 'Finalize')}>Next</div>
      </div>
    );
  }
}
