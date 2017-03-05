import React from 'react';

//App Components
import Bar from './components/Bar';
import Viewer from './components/Viewer';

export default class Layout extends React.Component{
  render(){
      return(
      <div class="app">
        <Bar/>
        <Viewer path={this.props.location.pathname} modal={React.cloneElement(this.props.children, {key: this.props.location.pathname})}/>
      </div>
    );
  }
}
