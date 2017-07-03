//Modules
import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Components
import Sort from 'containers/pages/rename/modals/configure/Sort.jsx';
import File from 'containers/pages/rename/modals/configure/File.jsx';
//Action
import * as filesActions from 'actions/files';
//APIs
import * as API from 'core/APIs';
//Assets
import * as icon from 'assets/icons';

@connect((store) => {
  return {
    files: store.files.files,
		fetching: store.files.fetching
  };
}) 
export default class Files extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
		const files = [
			{
				Type: 'txt',
				OriginalName: 'PC Build Chart',
				NewName: '...',
				Size: '35KB',
				Key: 0,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'jpg',
				OriginalName: 'Mountain',
				NewName: '...',
				Size: '403.2KB',
				Key: 1,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'html',
				OriginalName: 'index',
				NewName: '...',
				Size: '24KB',
				Key: 2,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'js',
				OriginalName: 'viewer',
				NewName: '...',
				Size: '27MB',
				Key: 3,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'php',
				OriginalName: 'Account',
				NewName: '...',
				Size: '109.50MB',
				Key: 4,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'jpg',
				OriginalName: 'River',
				NewName: '...',
				Size: '540KB',
				Key: 5,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'txt',
				OriginalName: 'School supplies',
				NewName: '...',
				Size: '750.54MB',
				Key: 6,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'pdf',
				OriginalName: 'Resume',
				NewName: '...',
				Size: '403.2KB',
				Key: 7,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'psd',
				OriginalName: 'radencode',
				NewName: '...',
				Size: '3.5GB',
				Key: 8,
				Visibility: true,
				Select: true,
				Settings: false
			},
			{
				Type: 'docx',
				OriginalName: 'food',
				NewName: '...',
				Size: '70KB',
				Key: 9,
				Visibility: true,
				Select: true,
				Settings: false
			},
		];
		this.props.dispatch(filesActions.requestFiles());
		setTimeout(() => {
			this.props.dispatch(filesActions.receiveFiles(files));
		}, 1000);			
	}
	updateSearch(event){
		this.props.dispatch(filesActions.searchFiles(event.target.value));
	}
	showPlaceHolder(event){
		event.target.placeholder = 'Search original name results...';
	}
	hidePlaceHolder(event){
		event.target.placeholder = '';
	}
	filesToDisplay(){
		return this.props.files.map(file => {
							if(file.Visibility) return <File select={file.Select} settings={file.Settings} type={file.Type} original={file.OriginalName} new={file.NewName} size={file.Size} id={file.Key} key={file.Key}/>				
						});
	}
	loadDisplay(fetching){
		return fetching ? (
			<div class="load-list">
				<div class="screen">
					<div class="icon"></div>
					<div class="message">Importing files...</div>
				</div>
			</div> 
		)  
			:
		(
			<ul class="file-list">
				<ReactCSSTransitionGroup transitionName = "fade" transitionEnterTimeout = {500} transitionLeaveTimeout = {250}>
					{this.filesToDisplay()}
				</ReactCSSTransitionGroup>					
			</ul>	
		);	
	}
	render(){	
		return(
			<div class="files">
				<div class="search-bar">
					<input class="search" type="text" placeholder = "Search results..." onChange={this.updateSearch.bind(this)} onFocus={this.hidePlaceHolder.bind(this)} onBlur={this.showPlaceHolder.bind(this)}></input>
					<button class="filters">Filters</button>
				</div>
				<div class="sort-list">
					<Sort type="state" style="select" name="Select" label="Select" id={0}/>
					<Sort type="word" style="type" name="Type" label="Type" id={1}/>
					<Sort type="word" style="original" name="OriginalName" label="Original Name" id={2}/>
					<Sort type="word" style="new" name="NewName" label="New Name" id={3}/>
					<Sort type="word" style="size" name="Size" label="Size" id={4}/>
				</div>
				<div class="explorer">
					{this.loadDisplay(this.props.fetching)}
				</div>
				<div class="options">
					<div class="check">
						{icon.generate('rename-modal-configure-options-check-files')}
						<span>Check options</span>						
					</div>
					<div class="uncheck">
						{icon.generate('rename-modal-configure-options-uncheck-files')}	
						<span>Uncheck options</span>					
					</div>
					<div class="delete">
						{icon.generate('rename-modal-configure-options-delete-files')}
						<span>Delete options</span>						
					</div>
				</div>
			</div>
		);
	}
}