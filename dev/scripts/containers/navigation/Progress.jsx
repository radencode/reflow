//Modules
import React from 'react';
import { connect } from 'react-redux';
//Containers
import Step from 'containers/navigation/Step.jsx'
//Actions
import * as progress_actions from 'actions/progress';
//Assets
import Labels from 'assets/text';

@connect((store) => {
  return{
    progress_store: store.progress
  };
})

export default class Progress extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  switchStep(link, dispatch, completed){
    this.props.dispatch(progress_actions.updateAnimationType('slide-right'));
    if(completed){
      switch(dispatch){
        case 'Browse':
          this.props.dispatch(progress_actions.initialize());
          break;
        case 'Configure':
          this.props.dispatch(progress_actions.switchToConfigure());
          break;
        case 'Options':
          this.props.dispatch(progress_actions.switchToOptions());
          break;
      }   
      if(link) 
        this.props.router.push(link);
    }    
  }
  render(){
    return(
      <div id="progress">
        <div id="steps">
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress_store.browse.status} 
                bar={this.props.progress_store.browse.bar}
                connector={this.props.progress_store.browse.connector} 
                finish={this.props.progress_store.finish} 
                link="/rename/browse" label={Labels.Pages[0].Modal[0].Title}  
                icon="rename-modal-browse"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress_store.configure.status} 
                bar={this.props.progress_store.configure.bar}
                connector={this.props.progress_store.configure.connector} 
                finish={this.props.progress_store.finish} 
                link="/rename/configure" label={Labels.Pages[0].Modal[1].Title} 
                icon="rename-modal-configure"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress_store.options.status} 
                bar={this.props.progress_store.options.bar}
                connector={this.props.progress_store.options.connector} 
                finish={this.props.progress_store.finish} 
                link="/rename/options" label={Labels.Pages[0].Modal[2].Title}  
                icon="rename-modal-options"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress_store.finalize.status} 
                bar={this.props.progress_store.finalize.bar}
                connector={this.props.progress_store.finalize.connector} 
                finish={this.props.progress_store.finish} 
                link={false} label={Labels.Pages[0].Modal[3].Title} 
                icon="rename-modal-finalize"/>
        </div>
      </div>
    );
  }
}
