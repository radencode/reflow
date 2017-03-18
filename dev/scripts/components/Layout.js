import React from 'react';

//App Components
import Bar from './components/Bar';
import Viewer from './components/Viewer';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {title: 'Rename'};
  }
  _change_title(title){
    this.setState({title: title});
  }
  render(){
    return(
      <div class="app">
        <Bar title={this.state.title}/>
        <Viewer title={this._change_title.bind(this)} path={this.props.location.pathname} modal={this.props.children}/>
      </div>
    );
  }
}
