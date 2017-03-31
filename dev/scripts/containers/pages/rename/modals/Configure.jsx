import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { switchToOptions } from '../../../../actions/progress';
import edge from 'electron-edge';

@connect((store) => { return {}; })

export default class Configure extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.API();
  }
  switchModal(){
    this.props.dispatch(switchToOptions());
  }
 API(){
    var csharp = edge.func({
			assemblyFile: './app/src/scripts/reflow.dll',
			methodName: 'GetFile'
  	});

    csharp(1, function (error, result) {
        if (error) {
          throw error
        }else{
          var json = JSON.parse(result);
          var name = json.name;
          var age = json.age;
          var car = json.car;
          console.log('Name: ' + name + ' Age: ' + age + ' Car: ' + car);
        }
    });
  }
  render(){
    return(
      <div id="configure">
        <div class="title">Configure</div>
        <Link to="/rename/options"><div class="next" onClick={this.switchModal.bind(this)}>Next</div></Link>
      </div>
    );
  }
}
