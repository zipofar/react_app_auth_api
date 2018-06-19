import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Loader from '../components/Loader';

class ProfileEditForm extends React.Component
{

    saveProfile = (values) => {

        let formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('birthday', values.birthday);
        formData.append('country', values.country);
        formData.append('sex', values.sex);
        formData.append('about', values.about);
        formData.append('avatar', this.uploadAvatar.files[0]);
        formData.append('api_token', this.props.initialValues.api_token);
        formData.append('id', this.props.initialValues.id);
        formData.append('_method', 'put');

        this.props.updateProfile(formData);
    };

    render() {
        if (this.props.processUpdateProfile === 'request') {
            return <Loader />;
        }

        if (this.props.processUpdateProfile === 'failure') {
            return <div>ERROR</div>
        }

        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.saveProfile)}>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Avatar:</label>
                        </div>
                        <div className="col-sm-11">
                            <img src={this.props.initialValues.file_path_avatar} alt={'avatar'} height={'100'} width={'100'}/>
                            <br />
                            <input type='file' name='avatar' ref={(node) => this.uploadAvatar = node} />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Name:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field name='name' component='input' type='text' />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Email:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field name='email' component='input' type='text' />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Birthday:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field name='birthday' component='input' type='text' />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Country:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field name='country' component='input' type='text' />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Sex:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field name='sex' component='input' type='text' />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>About:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field name='about' component='input' type='text' />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-11 col-sm-offset-1">
                            <button type='submit'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'profileEditForm' })(ProfileEditForm);