//Modules
import React from 'react';

export default class Menu extends React.Component{
  render(){
    return(
      <div id="menu">
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
      </div>
    );
  }
}
