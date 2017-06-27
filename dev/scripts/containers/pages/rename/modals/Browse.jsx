//Modules
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import fs from 'fs';
//Actions
import * as browse_actions from 'actions/browse';
//Assets
import Labels from 'assets/text';
import * as icon from 'assets/icons';
//Electron
const { dialog } = require('electron').remote

@connect((store) => { return { browse_store: store.browse }; })

export default class Browse extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.props.dispatch(browse_actions.resetPathVariables());
  }
  action(type){
    switch(type){
      case 'browse':
        return ( 
          <div class="select">
            <div class="icon">{icon.generate('rename-modal-browse-content-database')}</div>
            <div class="label">{this.props.browse_store.label}</div>
            <div class="arrow">{icon.generate('rename-modal-browse-content-arrow')}</div> 
            <button class="btn" onClick={this.browse.bind(this)}>{Labels.Pages[0].Modal[0].Buttons.Browse}</button>             
          </div>  
        );
      case 'next':
        return ( 
          <div class="select">
            <div class="icon">{icon.generate('rename-modal-browse-content-database')}</div>
            <div class="label"><span class="files">{this.props.browse_store.files}</span>{this.props.browse_store.label}</div>
            <div class="again" onClick={this.browse.bind(this)}>{Labels.Pages[0].Modal[0].Messages.Again}</div> 
            <button class="btn" onClick={this.props.next.bind(this, '/rename/configure', 'Configure')}>{Labels.Pages[0].Modal[0].Buttons.Next}</button>         
          </div> 
        );
    }
  }
  browse(){
    var path = dialog.showOpenDialog({properties: ['openDirectory']});
    if(path){
      fs.readdir(String(path), (err, files) => {
        if (err) throw err;
        if(files.length > 0){
          this.props.dispatch(browse_actions.setSelectedFiles(files.length));
          this.props.dispatch(browse_actions.configureType('next'));
          this.props.dispatch(browse_actions.configureLabel(Labels.Pages[0].Modal[0].Messages.Selected));
        }
      });
	  }
  }
  render(){
    return(
      <div class="container browse">
        {this.action(this.props.browse_store.type)}       
      </div>
    );
  }
}