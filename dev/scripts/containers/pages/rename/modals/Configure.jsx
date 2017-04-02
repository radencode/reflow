//Modules
import React from 'react';

export default class Configure extends React.Component{
  render(){
    return(
      <div class="container">
        <div class="title">Configure</div>
        <div class="next" onClick={this.props.next.bind(this, '/rename/options', 'Options')}>Next</div>
      </div>
    );
  }
}
