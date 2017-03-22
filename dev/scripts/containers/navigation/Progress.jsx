import React from 'react';
import Step from './Step.jsx'
import { connect } from 'react-redux';
import * as action from '../../actions/progress';

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
    if(completed){
      switch(dispatch){
        case 'Browse':
          this.props.dispatch(action.initialize());
          break;
        case 'Configure':
          this.props.dispatch(action.switchToConfigure());
          break;
        case 'Options':
          this.props.dispatch(action.switchToOptions());
          break;
        case 'Finalize':
          this.props.dispatch(action.switchToFinalize());
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
                finish={this.props.progress.finish} 
                link="/rename/browse" label="Browse"  
                icon="fa fa-search"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress.configure.status} 
                bar={this.props.progress.configure.bar} 
                finish={this.props.progress.finish} 
                link="/rename/configure" label="Configure" 
                icon="fa fa-wrench"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress.options.status} 
                bar={this.props.progress.options.bar} 
                finish={this.props.progress.finish} 
                link="/rename/options" label="Options"  
                icon="fa fa-cog"/>
          <Step switch={this.switchStep.bind(this)} 
                status={this.props.progress.finalize.status} 
                bar={this.props.progress.finalize.bar} 
                finish={this.props.progress.finish} 
                link={false} label="Finalize" 
                icon="fa fa-check"/>
        </div>
      </div>
    );
  }
}
