import React from 'react';

import Controls from '../containers/Controls.jsx';
import Title from '../containers/Title.jsx';

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
