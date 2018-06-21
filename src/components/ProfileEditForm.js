import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Loader from '../components/Loader';
import Birthday from './ProfileEditForm/Birthday'
import { Redirect } from 'react-router-dom';

class ProfileEditForm extends React.Component
{

    componentDidMount = () => {
        const { id, api_token } = this.props.profile;
        this.props.getFullProfile(id, api_token);
    };

    componentWillUnmount = () => {
        this.props.profileUpdateReset();
    };

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

    showPanelError = () => {
        const { processUpdateProfile, processLoadProfile } = this.props;

        if (processUpdateProfile === 'failure' || processLoadProfile === 'failure') {
            return(
                <div className="row">
                    <div className="col-sm-11 col-sm-offset-1">
                        <div className="card error">
                            <ul>
                                { this.props.networkErrors.map((err, i) => {
                                    return  <li key={i}>{err}</li>
                                }) }
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    onChangeCountries = (e) => {
        this.props.loadCountries(e.target.value);
        this.props.updateProfileLocal({ country: e.target.value });
    };

    onBlurCountryField = () => {
        setTimeout(this.props.clearListCountries.bind(this), 1);
    };

    onSelectCountry = (value) => (e) => {
        this.props.updateProfileLocal({ country: value });
        this.props.clearListCountries();
    };

    showCountriesList = () => {

        if (this.props.countries.count === 0) {
            return null;
        }

        return(
            <div className="row responsive-label">
                <div className="col-sm-11 col-sm-offset-1">
                    <nav>
                        { this.props.countries.map((item, i) => {
                            return <a onClick={this.onSelectCountry(item)} href="#" key={i}>{item}</a>;
                        }) }
                    </nav>
                </div>
            </div>
        );
    };

    render() {
        if (this.props.processUpdateProfile === 'success') {
            return <Redirect to='/profile'/>
        }

        if (this.props.processUpdateProfile === 'request' || this.props.processLoadProfile === 'request') {
            return <Loader />;
        }

        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.saveProfile)} autoComplete='off'>
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
                            <Birthday updateBirthday={(birthday) => this.props.updateProfileLocal({ birthday, })}>
                                {this.props.initialValues.birthday}
                             </Birthday>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Country:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field
                                name='country'
                                component='input'
                                type='text'
                                onChange={this.onChangeCountries}
                                onBlur={this.onBlurCountryField}
                            />
                        </div>
                    </div>
                    { this.showCountriesList() }
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>Sex:</label>
                        </div>
                        <div className="col-sm-11">
                            <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>
                            <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-1 label">
                            <label>About:</label>
                        </div>
                        <div className="col-sm-11">
                            <Field name='about' component='textarea' type='text' />
                        </div>
                    </div>

                    { this.showPanelError() }

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