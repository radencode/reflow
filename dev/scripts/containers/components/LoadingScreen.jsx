//Modules
import React from 'react';

export default class LoadingScreen extends React.Component{
  render(){
    return(
			<div class="load-screen">
				<div class="loader">
					<div class="icon"></div>
					<div class="message">{this.props.message}</div>
				</div>
			</div> 
    );
  }
}
