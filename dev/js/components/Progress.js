import React from 'react';
import Step from './Step'

export default class Progress extends React.Component{
  render(){
    return(
      <div id="progress">
        <Step label="Browse"/>
        <Step label="Configure"/>
        <Step label="Options"/>
        <Step label="Finalize"/>
      </div>
    );
  }
}
