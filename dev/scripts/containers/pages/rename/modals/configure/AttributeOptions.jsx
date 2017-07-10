//Modules
import React from 'react';
//Components
import LoadingScreen from 'containers/components/LoadingScreen.jsx';
//Assets
import * as getText from 'assets/text';

export default class AttributeOptions extends React.Component{
  render(){
    return(
			<div class="attribute-options">
        <div class="option-title">{getText.configure('default-option-title')}</div>
        <div class="explorer-container">
          <LoadingScreen message={getText.configure('options-loading-screen')}/>
        </div>
			</div>
    );
  }
}
