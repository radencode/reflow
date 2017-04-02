import React from 'react';

import Controls from 'containers/window/Controls.jsx';
import Title from 'containers/window/Title.jsx';

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
