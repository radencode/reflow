import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { switchToConfigure } from 'actions/progress';
import { createAlert } from 'actions/alert';
import * as browseActions from 'actions/browse';
import Lables from 'assets/text';
import GenerateIcon from 'assets/icons';
import fs from 'fs';
const { dialog } = require('electron').remote

@connect((store) => { return { browse: store.browse }; })

export default class Browse extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.props.dispatch(browseActions.resetPathVariables());
  }
  next(){
    this.props.dispatch(switchToConfigure());
    this.props.dispatch(createAlert(Lables.Alerts.Unsaved.Message, Lables.Alerts.Unsaved.Buttons.Success, Lables.Alerts.Unsaved.Buttons.Cancel));
  }
  action(type){
    switch(type){
      case 'browse':
        return ( <button class="btn" onClick={this.browse.bind(this)}>Browse</button> );
        break;
      case 'next':
        return ( <Link to="/rename/configure"><button class="btn" onClick={this.next.bind(this)}>Next</button></Link> );
        break;
    }
  }
  browse(){
    var path = dialog.showOpenDialog({properties: ['openDirectory']});
    if(path){
      fs.readdir(String(path), (err, files) => {
        if (err) throw err;
        if(files.length > 0){
          this.props.dispatch(browseActions.setSelectedFiles(files.length));
          this.props.dispatch(browseActions.configureType('next'));
          this.props.dispatch(browseActions.configureLabel(this.props.browse.files + Lables.Pages[0].Modal[0].Messages.Selected));
        }
      });
	  }
  }
  render(){
    return(
      <div class="container browse">
        <div class="select">
          <div class="icon">{GenerateIcon('rename-modal-browse-content-database')}</div>
          <div class="label">{this.props.browse.label}</div>
          <div class="arrow">{GenerateIcon('rename-modal-browse-content-arrow')}</div>    
          {this.action(this.props.browse.type)}    
        </div>        
      </div>
    );
  }
}