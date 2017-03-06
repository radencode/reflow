import React from 'react';
import { Link } from 'react-router';

export default class Configure extends React.Component{
  render(){
    return(
      <div id="configure">
        <div class="title">Configure</div>
        <Link to="/rename/options"><div class="next">Next</div></Link>
      </div>
    );
  }
}
