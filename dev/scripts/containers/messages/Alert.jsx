//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as alert from 'actions/alert';


@connect((store) => {
  return { alert: store.alert };
})

export default class Alert extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  success(){
    if(this.props.alert.alert)
      this.props.dispatch(alert.destroyAlert());
      this.props.router.push(this.props.alert.link);
  }
  cancel(){
    if(this.props.alert.alert)
      this.props.dispatch(alert.closeAlert());
  }
  render(){
    return(      
      <div class={this.props.alert.stage}>
        <div class="alert">
          <div class="message">{this.props.alert.message}</div>
          <div class="buttons">
            <button class="btn" onClick={this.success.bind(this)}>{this.props.alert.success}</button>
            <button class="btn" onClick={this.cancel.bind(this)}>{this.props.alert.cancel}</button>
          </div>
        </div>
      </div>
    );
  }
}
