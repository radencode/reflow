import React from 'react';
import { closeAlert, destroyAlert } from '../../actions/alert';
import { connect } from 'react-redux';

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
      this.props.dispatch(destroyAlert());
      this.props.router.push(this.props.alert.link);
  }
  cancel(){
    if(this.props.alert.alert)
      this.props.dispatch(closeAlert());
  }
  render(){
    console.log(this.props.alert);
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
