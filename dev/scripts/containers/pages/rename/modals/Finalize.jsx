//Modules
import React from 'react';

export default class Finalize extends React.Component{
  render(){
    return(
      <div class="container">
        <div class="title">Finalize</div>
        <div class="next" onClick={this.props.next.bind(this, null, 'Finish')}>Finish</div>
      </div>
    );
  }
}
