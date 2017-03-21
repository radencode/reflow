import React from 'react';

import Controls from './Controls.jsx';
import Title from './Title.jsx';

export default class Controller extends React.Component{
  render(){
    return(
      <div id="controller">
        <Title/>
        <Controls/>
      </div>
    );
  }
}
