import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Loader from '../components/Loader';
import Birthday from './ProfileEditForm/Birthday'
import { Redirect, Link } from 'react-router-dom';
import { validateFormProfile } from '../helpers/validators';

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
        formData.append('country', values.country === '' ? 'NONE' : values.country);
        formData.append('sex', values.sex);
        formData.append('about', values.about === '' ? 'NONE' : values.about);
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
                <div className="row responsive-label">
                    <div className='col-sm-12 col-md-2 label'>
                        <label>Errors:</label>
                    </div>
                    <div className="col-sm-12 col-md">
                        <div className="card error" style={{'marginLeft': '4px'}}>
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
        setTimeout(this.props.clearListCountries.bind(this), 100);
    };

    onSelectCountry = (value) => (e) => {
        this.props.updateProfileLocal({ country: value });
        this.props.clearListCountries();
    };

    showCountriesList = () => {
        if (this.props.countries.length === 0) {
            return null;
        }

        return(
            <div className="row responsive-label">
                <div className='col-sm-12 col-md-2 label'></div>
                <div className="col-sm-12 col-md">
                    <nav className='search-selector'>
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
            <div className='container form'>
                <form onSubmit={this.props.handleSubmit(this.saveProfile)} autoComplete='off'>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label">
                            <label>Avatar:</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <img src={this.props.initialValues.file_path_avatar} alt={'avatar'} height={'100'} width={'100'}/>
                        </div>
                    </div>
                    <div className='row responsive-label'>
                        <div className="col-sm-12 col-md-2 label"></div>
                        <div className="col-sm-12 col-md">
                            <input
                                type='file'
                                name='avatar'
                                ref={(node) => this.uploadAvatar = node}
                                id="file-input"
                                style={{display: 'none'}}
                            />
                            <label
                                htmlFor="file-input"
                                className="button"
                                style={{marginLeft: '4px'}}
                            >Upload file</label>
                        </div>
                    </div>

                    <Field name='email' component={renderField} type='text' className='input-text' label='Email:'/>
                    <Field name='name' component={renderField} type='text' className='input-text' label='Name:'/>

                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label">
                            <label>Birthday:</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <Birthday updateBirthday={(birthday) => this.props.updateProfileLocal({ birthday, })}>
                                {this.props.initialValues.birthday}
                             </Birthday>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label">
                            <label>Country:</label>
                        </div>
                        <div className="col-sm-12 col-md loader-input">
                            {this.props.processLoadCountries === 'request' && <div className="spinner search-field"></div>}

                            <Field
                                name='country'
                                component='input'
                                type='text'
                                onChange={this.onChangeCountries}
                                onBlur={this.onBlurCountryField}
                                className='input-text'
                            />
                        </div>
                    </div>
                    { this.showCountriesList() }
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label">
                            <label>Sex:</label>
                        </div>
                        <div className="col-sm-12 col-md responsive-label">
                            <Field name="sex" component="input" type="radio" value="male" /><label>Male</label>
                            <Field name="sex" component="input" type="radio" value="female"/><label>Female</label>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label">
                            <label>About:</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <Field name='about' component='textarea' type='text' className='input-text' />
                        </div>
                    </div>

                    { this.showPanelError() }

                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label"></div>
                        <div className="col-sm-12 col-md">
                            <button type='submit' style={{marginLeft: '4px'}}>Save</button>
                            <Link to='/profile'>
                                <button>Cancel</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return(
        <div>
            <div className="row responsive-label">
                <div className="col-sm-12 col-md-2 label">
                    <label>{label}</label>
                </div>
                <div className="col-sm-12 col-md">
                    <input {...input} type={type} className='input-text' />
                </div>
            </div>

            <div className="row responsive-label">
                <div className="col-sm-12 col-md-2 label"></div>
                <div className="col-sm-12 col-md">
                    {touched && (error &&
                        <span className='error-input'>
							<span className="icon-alert"></span>
                            {error}
						</span>)}
                </div>
            </div>
        </div>
    );
};

export default reduxForm({ form: 'profileEditForm', validate: validateFormProfile })(ProfileEditForm);