//Modules
import React from 'react';

export default class Configure extends React.Component{
  render(){
    return(
      <div class="container configure">
        <div class="config">
          <div class="top-panel">
            <div class="files"></div>
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
