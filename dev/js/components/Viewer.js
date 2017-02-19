import React from 'react';

//Viewer components
import Navigation from './Navigation';

export default class Viewer extends React.Component{
  render(){
    return(
      <div id="viewer">
        <Navigation/>
      </div>
    );
  }
}
