import React from 'react';
import { Link } from 'react-router';

export default class Browse extends React.Component{
  componentWillMount(){
    if(this.props.toReset)
      this.props.reset();
  }
  next(next){
    next();
  }
  render(){
    return(
      <div id="browse">
        <div class="title">Browse</div>
        <Link to="/rename/configure"><div class="next" onClick={this.next.bind(this, this.props.next)}>Next</div></Link>
      </div>
    );
  }
}
