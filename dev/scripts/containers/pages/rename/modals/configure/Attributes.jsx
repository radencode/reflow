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
				Name: "Auto Increment",
				Visible: true
			},
			{
				Id: 1,
				Name: "Riegex",
				Visible: true
			},
			{
				Id: 2,
				Name: "File Name",
				Visible: true
			},
			{
				Id: 3,
				Name: "Type",
				Visible: true
			},
			{
				Id: 4,
				Name: "Replace",
				Visible: true
			},
			{
				Id: 5,
				Name: "Random",
				Visible: true
			},
			{
				Id: 6,
				Name: "Reverse",
				Visible: true
			},
			{
				Id: 7,
				Name: "Auto Increment",
				Visible: true
			},
			{
				Id: 8,
				Name: "Riegex",
				Visible: true
			},
			{
				Id: 9,
				Name: "File Name",
				Visible: true
			},
			{
				Id: 10,
				Name: "Type",
				Visible: true
			},
			{
				Id: 11,
				Name: "Replace",
				Visible: true
			},
			{
				Id: 12,
				Name: "Random",
				Visible: true
			},
			{
				Id: 14,
				Name: "Reverse",
				Visible: true
			},			
		];
		this.props.dispatch(attributesActions.requestAttributes());
		setTimeout(() => {
			this.props.dispatch(attributesActions.receiveAttributes(attributes/*API.GetTagNames()*/));
		}, 1000);
	}
	mapItems(){
		return this.props.attributes.map(attribute => {
			if(attribute.Visible) return <Attribute id={attribute.Id} name={attribute.Name} key={attribute.Id}/>
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
