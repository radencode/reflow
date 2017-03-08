import React from 'react';

//App Components
import Bar from './components/Bar';
import Viewer from './components/Viewer';

export default class Layout extends React.Component{
  constructor(props){
    super();
    this.state = {title: 'Rename'};
  }
  change_title(title){
    this.setState({title: title});
  }
  get_key(props){
    this.path = props.location.pathname;
    return this.path.split('/')[1] || 'root';
  }
  render(){
    const key = this.get_key(this.props);
    return(
      <div class="app">
        <Bar title={this.state.title}/>
        <Viewer title={this.change_title.bind(this)} path={this.props.location.pathname} modal={React.cloneElement(this.props.children, {key: key})}/>
      </div>
    );
  }
}
