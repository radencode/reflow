import React from 'react';

export default class Finalize extends React.Component{
  finish(func, stage){
    func(stage);
  }
  render(){
    return(
      <div id="finalize">
        <div class="title">Finalize</div>
        <div class="next" onClick={this.finish.bind(this, this.props.finish, 3, )}>Finish</div>
      </div>
    );
  }
}
