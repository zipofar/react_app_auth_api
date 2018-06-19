import React from 'react';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {

    componentDidMount = () => {
        const { id, api_token } = this.props.profile;
        this.props.getFullProfile(id, api_token);
    };

	render() {
	    if (this.props.processLoadProfile === 'request') {
	        return <Loader />;
        }

        if (this.props.processLoadProfile === 'failure') {
	        return <div>ERROR</div>
        }

		return(
            <div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Avatar:</label>
                    </div>
                    <div className="col-sm-11">
                        <img src={this.props.profile.file_path_avatar} alt={'avatar'} height={'100'} width={'100'}/>
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
                        <p>{this.props.profile.birthday}</p>
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Country:</label>
                    </div>
                    <div className="col-sm-11">
                        {this.props.profile.country}
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>Sex:</label>
                    </div>
                    <div className="col-sm-11">
                        {this.props.profile.sex}
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-1 label">
                        <label>About:</label>
                    </div>
                    <div className="col-sm-11">
                        {this.props.profile.about}
                    </div>
                </div>
                <div className="row responsive-label">
                    <div className="col-sm-11 col-sm-offset-1">
                        <Link to='/profile/edit'>
                            <button>Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
		);
	}
}
