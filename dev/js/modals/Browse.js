import React from 'react';
import { Link } from 'react-router';

export default class Browse extends React.Component{
  render(){
    return(
      <div id="browse">
        <div class="title">Browse</div>
        <Link to="rename/configure"><div class="next">Next</div></Link>
      </div>
    );
  }
}
