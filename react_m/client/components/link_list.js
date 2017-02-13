import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/links';

class LinkList extends Component {
	renderRows() {
		return this.props.links.map(link => {
			const { url, clicks, token } =link;
			return(
				<tr>
				    <td>{Url}</td>
				  <td>
				       <a></a>
				    </td>
				    <td>
				       {clicks}
				    </td>
				</tr>
				);
		});
	}
	render() {
		return (
			<table className="table">
             <thead>
               <tr>
               <th>URL</th>
	               <th>Address</th>
	               <th>Clicks</th>
               </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </table>
		);
	}
}

export default createContainer(() => {
   Meteor.subscribe('links');

   return { links: Links.find({}).fetch() };
}, LinkList);