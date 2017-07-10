//Modules
import React from 'react';
import { connect } from 'react-redux';
//Containers
import Step from 'containers/navigation/Step.jsx'
//Actions
import * as progressActions from 'actions/progress';
//Assets
import * as getText from 'assets/text';

@connect((store) => {
  return{
    progressStore: store.progress
  };
})

export default class Progress extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  switchStep(link, dispatch, completed){
    this.props.dispatch(progressActions.updateAnimationType('slide-right'));
    if(completed){
      switch(dispatch){
        case 'Browse':
          this.props.dispatch(progressActions.initialize());
          break;
        case 'Configure':
          this.props.dispatch(progressActions.switchToConfigure());
          break;
        case 'Options':
          this.props.dispatch(progressActions.switchToOptions());
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
                status={this.props.progressStore.browse.status} 
                bar={this.props.progressStore.browse.bar}
                connector={this.props.progressStore.browse.connector} 
                finish={this.props.progressStore.finish} 
                link="/rename/browse" text={getText.progress('browse-title')}  
                icon="rename-modal-browse"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progressStore.configure.status} 
                bar={this.props.progressStore.configure.bar}
                connector={this.props.progressStore.configure.connector} 
                finish={this.props.progressStore.finish} 
                link="/rename/configure" text={getText.progress('configure-title')} 
                icon="rename-modal-configure"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progressStore.options.status} 
                bar={this.props.progressStore.options.bar}
                connector={this.props.progressStore.options.connector} 
                finish={this.props.progressStore.finish} 
                link="/rename/options" text={getText.progress('options-title')}  
                icon="rename-modal-options"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progressStore.finalize.status} 
                bar={this.props.progressStore.finalize.bar}
                connector={this.props.progressStore.finalize.connector} 
                finish={this.props.progressStore.finish} 
                link={false} text={getText.progress('finalize-title')} 
                icon="rename-modal-finalize"/>
        </div>
      </div>
    );
  }
}
