import React from 'react';
import ReactTable from 'react-table';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import AddResolution from './AddResolution.jsx';
import {Resolutions} from '../../../collections/resolutions.js';

export default class Home extends TrackerReact(React.Component) {
	constructor() {
		super();
		this.state = {
			subscription: {
				resolutions: Meteor.subscribe("allResolutions")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolutions.stop()
	}

	resolutions() {
		return Resolutions.find().fetch()
	}

	render() {
		const data = this.resolutions()
		const columns = [
			{
				Header: 'Resolution',
				accessor: 'resolution'
			}, 
			{
				Header: 'Description',
				accessor: 'description',
			}
		]

		if (data.length != 0) {
			return (
				<div className="container custom-margin-top">
					<h4>
						My Resolutions
					</h4>
					<AddResolution />
					<div className="custom-margin-top">
						<ReactTable
							defaultPageSize={10}
							data={data}
							columns={columns} />
					</div>
				</div>
			)
		}
		else{
			return (
				<div className="container custom-margin-top">
					<h4>
						My Resolutions
					</h4>
					<AddResolution />
				</div>
			)
		}
	}
}