import React from 'react';

//Viewer components
import Navigation from './Navigation';
import Rename from '../pages/Rename';

export default class Viewer extends React.Component{
  render(){
    return(
      <div id="viewer">
        <Navigation/>
        <Rename/>
      </div>
    );
  }
}
