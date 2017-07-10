//Modules
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import fs from 'fs';
//Actions
import * as browseActions from 'actions/browse';
//Assets
import * as getText from 'assets/text';
import * as icon from 'assets/icons';
//Electron
const { dialog } = require('electron').remote

@connect((store) => { 
  return { 
    browseStore: store.browse 
  }; 
})

export default class Browse extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.props.dispatch(browseActions.resetPathVariables());
  }
  action(type){
    switch(type){
      case 'browse':
        return ( 
          <div class="select">
            <div class="icon">{icon.generate('rename-modal-browse-content-database')}</div>
            <div class="text">{this.props.browseStore.text}</div>
            <div class="arrow">{icon.generate('rename-modal-browse-content-arrow')}</div> 
            <button class="btn" onClick={this.browse.bind(this)}>{getText.browse('browse-button')}</button>             
          </div>  
        );
      case 'next':
        return ( 
          <div class="select">
            <div class="icon">{icon.generate('rename-modal-browse-content-database')}</div>
            <div class="text"><span class="files">{this.props.browseStore.files}</span>{this.props.browseStore.text}</div>
            <div class="again" onClick={this.browse.bind(this)}>{getText.browse('browse-again-link')}</div> 
            <button class="btn" onClick={this.props.next.bind(this, '/rename/configure', 'Configure')}>{getText.browse('configure-button')}</button>         
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
          this.props.dispatch(browseActions.setSelectedFiles(files.length));
          this.props.dispatch(browseActions.configureType('next'));
          this.props.dispatch(browseActions.configuretext(getText.browse('selected-message')));
        }
      });
	  }
  }
  render(){
    return(
      <div class="container browse">
        {this.action(this.props.browseStore.type)}       
      </div>
    );
  }
}