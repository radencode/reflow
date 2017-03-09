import React from 'react';

export default class Finalize extends React.Component{
  render(){
    return(
      <div id="finalize">
        <div class="title">Finalize</div>
        <div class="next" onClick={this.props.finish}>Finish</div>
      </div>
    );
  }
}
