import React from 'react';

export default class Profile extends React.Component {

    componentDidUpdate = () => {
        const { id, api_token } = this.props.profile;
        this.props.getFullProfile(id, api_token);
    };

	render() {
		return(
            <div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Avatar:</label>
                    </div>
                    <div className="col-sm-11">
                        <img src={'/img/user_def_avatar.png'} height={'100'} width={'100'}/>
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Name:</label>
                    </div>
                    <div className="col-sm-11">
                        <p>{this.props.profile.name}</p>
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Email:</label>
                    </div>
                    <div className="col-sm-11">
                        <p>{this.props.profile.email}</p>
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Birthday:</label>
                    </div>
                    <div className="col-sm-11">
                        <p>01.01.1970</p>
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Country:</label>
                    </div>
                    <div className="col-sm-11">
                        Russia
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Sex:</label>
                    </div>
                    <div className="col-sm-11">
                        Man
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>About:</label>
                    </div>
                    <div className="col-sm-11">
                        Hello. I am a developer.
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-11 col-sm-offset-1">
                        <button>Edit</button>
                    </div>
                </div>
            </div>
		);
	}
}
