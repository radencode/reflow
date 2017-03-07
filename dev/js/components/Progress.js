import React from 'react';
import Step from './Step'

export default class Progress extends React.Component{
  constructor(){
    super();
  }
  next(){

  }
  reset(){

  }
  render(){
    return(
      <div id="progress">
        <div id="steps">
          <Step label="Browse" status="complete" icon="fa fa-search"/>
          <Step label="Configure" status="active" icon="fa fa-wrench"/>
          <Step label="Options" status="await" icon="fa fa-cog"/>
          <Step label="Finalize" status="await" icon="fa fa-check"/>
        </div>
        <div id="bar">
          <div id="indicator"></div>
        </div>
      </div>
    );
  }
}
