//React
import React from 'react';
//Sass
import '../../styles/components/Bar.sass';
//Components
import Controls from './Controls';

export default class Bar extends React.Component{

  render(){
    return(
      <div id="bar">
        <Controls/>
      </div>
    );
  }
}
