//Modules
import React from 'react';
import { connect } from 'react-redux';
//Components
import Attribute from 'containers/pages/rename/modals/configure/Attribute.jsx';
import AttributeOptions from 'containers/pages/rename/modals/configure/AttributeOptions.jsx';
import SearchBar from 'containers/components/SearchBar.jsx';
import ExplorerList from 'containers/components/ExplorerList.jsx';
//Action
import * as attributesActions from 'actions/attributes';
//Assets
import * as icon from 'assets/icons';
//APIs
import * as API from 'core/APIs';
@connect((store) => {
	return {
		attributes: store.attributes.attributes,
		fetching: store.attributes.fetching
	};
})
export default class Attributes extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
		const attributes = [
			{
				Id: 0,
				Name: "Auto Increment"
			},
			{
				Id: 1,
				Name: "Riegex"
			},
			{
				Id: 2,
				Name: "File Name"
			},
			{
				Id: 3,
				Name: "Type"
			},
			{
				Id: 4,
				Name: "Replace"
			},
			{
				Id: 5,
				Name: "Random"
			},
			{
				Id: 6,
				Name: "Reverse"
			},
			{
				Id: 7,
				Name: "Auto Increment"
			},
			{
				Id: 8,
				Name: "Riegex"
			},
			{
				Id: 9,
				Name: "File Name"
			},
			{
				Id: 10,
				Name: "Type"
			},
			{
				Id: 11,
				Name: "Replace"
			},
			{
				Id: 12,
				Name: "Random"
			},
			{
				Id: 14,
				Name: "Reverse"
			},			
		];
		this.props.dispatch(attributesActions.requestAttributes());
		setTimeout(() => {
			this.props.dispatch(attributesActions.receiveAttributes(attributes/*API.GetTagNames()*/));
		}, 1000);
	}
	mapItems(){
		return this.props.attributes.map(attribute => {
			/*if(attribute.Visible)*/ return <Attribute id={attribute.Id} name={attribute.Name} key={attribute.Id}/>
		});
	}
  render(){
    return(
			<div class="side">
				<div class="attributes">
					<SearchBar placeholder="Search attributes..." dispatch={this.props.dispatch.bind(this)} action={attributesActions.searchAttributes.bind(this)}/>
					<div class="explorer-container">
						<ExplorerList 
							loading={this.props.fetching}
							loadingMessage="Loading attributes..."
							animation={{name: 'fade', enter: 500, leave: 500}}
							items={this.mapItems.bind(this)}/>
					</div>				
				</div>
				<AttributeOptions/>
			</div>
    );
  }
}
