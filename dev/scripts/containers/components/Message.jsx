//Modules
import React from 'react';
import { connect } from 'react-redux';
//Actions
import * as alertActions from 'actions/alert';


@connect((store) => {
  return { alertStore: store.alert };
})

export default class Alert extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  success(){
    if(this.props.alertStore.alert)
      this.props.dispatch(alertActions.destroyAlert());
      this.props.router.push(this.props.alertStore.link);
  }
  cancel(){
    if(this.props.alertStore.alert)
      this.props.dispatch(alertActions.closeAlert());
  }
  render(){
    return(      
      <div class={this.props.alertStore.stage}>
        <div class="alert">
          <div class="message">{this.props.alertStore.message}</div>
          <div class="buttons">
            <button class="btn" onClick={this.success.bind(this)}>{this.props.alertStore.success}</button>
            <button class="btn" onClick={this.cancel.bind(this)}>{this.props.alertStore.cancel}</button>
          </div>
        </div>
      </div>
    );
  }
}
