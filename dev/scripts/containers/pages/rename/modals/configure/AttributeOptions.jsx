//Modules
import React from 'react';
//Components
import LoadingScreen from 'containers/components/LoadingScreen.jsx';

export default class AttributeOptions extends React.Component{
  render(){
    return(
			<div class="attribute-options">
        <div class="option-title">Attribute Options</div>
        <div class="explorer-container">
          <LoadingScreen message="Loading options..."/>
        </div>
			</div>
    );
  }
}
