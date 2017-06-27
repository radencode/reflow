//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as alert_actions from 'actions/alert';


@connect((store) => {
  return { alert_store: store.alert };
})

export default class Alert extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  success(){
    if(this.props.alert_store.alert)
      this.props.dispatch(alert_actions.destroyAlert());
      this.props.router.push(this.props.alert_store.link);
  }
  cancel(){
    if(this.props.alert_store.alert)
      this.props.dispatch(alert_actions.closeAlert());
  }
  render(){
    return(      
      <div class={this.props.alert_store.stage}>
        <div class="alert">
          <div class="message">{this.props.alert_store.message}</div>
          <div class="buttons">
            <button class="btn" onClick={this.success.bind(this)}>{this.props.alert_store.success}</button>
            <button class="btn" onClick={this.cancel.bind(this)}>{this.props.alert_store.cancel}</button>
          </div>
        </div>
      </div>
    );
  }
}
