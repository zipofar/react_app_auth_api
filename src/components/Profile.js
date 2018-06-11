import React from 'react';

export default class Profile extends React.Component {

	render() {
		return(
			<div className="row">
                <div className="col-sm-12">
                    <p>Email: {this.props.profile.email}</p>
                    <p>Name: {this.props.profile.name}</p>
                </div>
            </div>
		);
	}
}
