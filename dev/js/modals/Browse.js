import React from 'react';
import { Link } from 'react-router';

export default class Browse extends React.Component{
  componentWillMount(){
    if(this.props.toReset)
      this.props.reset();
  }
  _next(next, unsaved){
    next();
    unsaved();
  }
  render(){
    return(
      <div id="browse">
        <div class="title">Browse</div>
        <Link to="/rename/configure"><div class="next" onClick={this._next.bind(this, this.props.next, this.props.unsaved)}>Next</div></Link>
      </div>
    );
  }
}
