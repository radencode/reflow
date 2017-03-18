import React from 'react';

import Controls from './Controls';
import Title from './Title';

export default class Bar extends React.Component{
  render(){
    return(
      <div id="bar">
        <Title title={this.props.title}/>
        <Controls/>
      </div>
    );
  }
}
