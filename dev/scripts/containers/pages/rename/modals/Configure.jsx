//Modules
import React from 'react';
//Components
import Files from 'containers/pages/rename/modals/configure/Files.jsx';

export default class Configure extends React.Component{
  render(){
    return(
      <div class="container configure">
        <div class="config">
          <div class="top-panel">
            <Files/>
            <div class="side">
              <div class="attr"></div>
              <div class="options"></div>
            </div>
          </div>
          <div class="bottom-panel"></div>
        </div>
      </div>
    );
  }
}
