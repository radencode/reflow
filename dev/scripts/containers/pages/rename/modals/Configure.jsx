//Modules
import React from 'react';
//Components
import Files from 'containers/pages/rename/modals/configure/Files.jsx';
import Attributes from 'containers/pages/rename/modals/configure/Attributes.jsx';

export default class Configure extends React.Component{
  render(){
    return(
      <div class="container configure">
        <div class="config">
          <div class="top-panel">
            <Files/>
            <Attributes/>
          </div>
          <div class="bottom-panel"></div>
        </div>
      </div>
    );
  }
}
