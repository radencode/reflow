import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { switchToConfigure } from '../../../../actions/progress';
import { createAlert } from '../../../../actions/alert';
import fs from 'fs';
const { dialog } = require('electron').remote

@connect((store) => { return {}; })

export default class Browse extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.select = 'Select the files that you wish to rename';
    this.selected = ' files have been selected';
  }
  next(){
    this.props.dispatch(switchToConfigure());
    this.props.dispatch(createAlert("Are you sure you want to continue? All progress will be lost.", "Continue", "Cancel"));
  }
  button(files){
    if(files < 1)
      return ( <button class="btn" onClick={this.browse.bind(this)}>Browse</button> );
    else
      return ( <Link to="/rename/configure"><div class="next" onClick={this.next.bind(this)}>Next</div></Link> );
  }
  browse(){
    var path = dialog.showOpenDialog({properties: ['openDirectory']});
    if(path){
      fs.readdir(String(path), (err, files) => {
        
      });
	  }
  }
  render(){
    return(
      <div id="browse">
        <div class="select">
          <div class="icon"><i class="fa fa-database" aria-hidden="true"></i></div>
          <div class="label">{this.select}</div>
          <div class="arrow"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>    
          {this.button(1)}    
        </div>        
      </div>
    );
  }
}