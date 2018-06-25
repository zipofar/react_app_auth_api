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
            <div className='container form'>
                <form>
                    <div className="row responsive-label">
                        <div className="col-sm col-md-2 label">
                            <label>Avatar:</label>
                        </div>
                        <div className="col-sm col-md">
                            <p><img src={this.props.profile.file_path_avatar} alt={'avatar'} height={'100'} width={'100'}/></p>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm col-md-2 label">
                            <label>Name:</label>
                        </div>
                        <div className="col-sm col-md">
                            <p>{this.props.profile.name}</p>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm col-md-2 label">
                            <label>Email:</label>
                        </div>
                        <div className="col-sm col-md">
                            <p>{this.props.profile.email}</p>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm col-md-2 label">
                            <label>Birthday:</label>
                        </div>
                        <div className="col-sm col-md">
                            <p>{this.props.profile.birthday}</p>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm col-md-2 label">
                            <label>Country:</label>
                        </div>
                        <div className="col-sm col-md">
                            <p>{this.props.profile.country}</p>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm col-md-2 label">
                            <label>Sex:</label>
                        </div>
                        <div className="col-sm col-md">
                            <p>{this.props.profile.sex}</p>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm col-md-2 label">
                            <label>About:</label>
                        </div>
                        <div className="col-sm col-md">
                            <p>{this.props.profile.about}</p>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className='col-sm col-md-2 label'></div>
                        <div className="col-sm col-md">
                            <Link to='/profile/edit'>
                                <button>Edit</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
		);
	}
}
