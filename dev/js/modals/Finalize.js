import React from 'react';

export default class Finalize extends React.Component{
  _finish(func, stage, saved){
    func(stage);
    saved();
  }
  render(){
    return(
      <div id="finalize">
        <div class="title">Finalize</div>
        <div class="next" onClick={this._finish.bind(this, this.props.finish, 3, this.props.saved)}>Finish</div>
      </div>
    );
  }
}
