import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { switchToConfigure } from '../../../../actions/progress';
import { createAlert } from '../../../../actions/alert';

@connect((store) => { return {}; })

export default class Browse extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  switchModal(){
    this.props.dispatch(switchToConfigure());
    this.props.dispatch(createAlert("Are you sure you want to continue? All progress will be lost.", "Continue", "Cancel"));
  }
  browse(){

  }
  render(){
    return(
      <div id="browse">
        <div class="select">
          <div class="icon"><i class="fa fa-database" aria-hidden="true"></i></div>
          <div class="label">Select the files that you wish to rename</div>
          <div class="arrow"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>    
          <button class="btn">Browse</button>          
        </div>        
      </div>
    );
  }
}

//<Link to="/rename/configure"><div class="next" onClick={this.switchModal.bind(this)}>Next</div></Link>