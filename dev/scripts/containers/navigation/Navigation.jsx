//Modules
import React from 'react';
//Assets
import GenerateIcon from 'assets/icons';


export default class Navigation extends React.Component{
	render(){
		return(
				<div id="navigation">
						<div id="nav-menu">
							<div id="pointer">

							</div>
							<ul id="nav-links">
									<li>
										<div class="anchor">
											<div class="linker">
												<div class="icon">
													{GenerateIcon('page-settings')}
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="anchor">
											<div class="linker">
												<div class="icon">
													{GenerateIcon('page-history')}													
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="anchor">
											<div class="linker">
												<div class="icon">
													{GenerateIcon('page-flow')}
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="anchor">
											<div class="linker">
												<div class="icon">													
													{GenerateIcon('page-rename')}
												</div>
											</div>
										</div>
									</li>
							</ul>
							<div id="nav-status">				
								<div id="nav-title">Rename</div>		
							</div>
						</div>
				</div>	
		);
	}
}