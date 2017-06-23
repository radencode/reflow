//Modules
import React from 'react';
import { connect } from 'react-redux';
//Containers
import Step from 'containers/navigation/Step.jsx'
//Actions
import * as progress from 'actions/progress';
//Assets
import Labels from 'assets/text';

@connect((store) => {
  return{
    progress: store.progress
  };
})

export default class Progress extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  switchStep(link, dispatch, completed){
    this.props.dispatch(progress.updateAnimationType('slide-right'));
    if(completed){
      switch(dispatch){
        case 'Browse':
          this.props.dispatch(progress.initialize());
          break;
        case 'Configure':
          this.props.dispatch(progress.switchToConfigure());
          break;
        case 'Options':
          this.props.dispatch(progress.switchToOptions());
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
                status={this.props.progress.browse.status} 
                bar={this.props.progress.browse.bar}
                connector={this.props.progress.browse.connector} 
                finish={this.props.progress.finish} 
                link="/rename/browse" label={Labels.Pages[0].Modal[0].Title}  
                icon="rename-modal-browse"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress.configure.status} 
                bar={this.props.progress.configure.bar}
                connector={this.props.progress.configure.connector} 
                finish={this.props.progress.finish} 
                link="/rename/configure" label={Labels.Pages[0].Modal[1].Title} 
                icon="rename-modal-configure"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress.options.status} 
                bar={this.props.progress.options.bar}
                connector={this.props.progress.options.connector} 
                finish={this.props.progress.finish} 
                link="/rename/options" label={Labels.Pages[0].Modal[2].Title}  
                icon="rename-modal-options"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress.finalize.status} 
                bar={this.props.progress.finalize.bar}
                connector={this.props.progress.finalize.connector} 
                finish={this.props.progress.finish} 
                link={false} label={Labels.Pages[0].Modal[3].Title} 
                icon="rename-modal-finalize"/>
        </div>
      </div>
    );
  }
}
