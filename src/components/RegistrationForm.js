import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { validateFormProfile } from '../helpers/validators';
import Loader from '../components/Loader';

class RegistrationForm extends React.Component {

    componentWillUnmount = () => {
        this.props.removeNetErrors();
    };

	handleSubmit = (values) => {
        const { name, email, password } = values;
        this.props.register({ name, email, password });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	showPanelError = () => {

		if (this.props.networkErrors.length === 0) {
            return null;
        }

		return(
            <div className="row responsive-label">
                <div className="col-sm-12 col-md-2 label"></div>
                <div className="col-sm-12 col-md">
                    <div className="card fluid error">
                        <ul>
                        { this.props.networkErrors.map((err, i) => {
                            return  <li key={i}>{err}</li>
                        }) }
                        </ul>
				    </div>
                </div>
			</div>
		);
	};

	render() {
        if (this.props.isLogin) {
            return <Redirect to="/" />
        }

        if (this.props.stateProcessRegister === 'request') {
        	return <Loader/>
		}

		return(
            <div className='container form'>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>

                    <Field name='name' component={renderField} type='text' className='input-text' label='Name'/>
                    <Field name='email' component={renderField} type='text' className='input-text' label='Email'/>
                    <Field name='password' component={renderField} type='password' className='input-text' label='Password'/>

                    { this.props.stateProcessRegister === 'failure' && this.showPanelError() }

                    <div className="row responsive-label">
						<div className="col-sm-12 col-md-2 label"></div>
                        <div className="col-sm-12 col-md">
							<input
                                type="submit"
                                value="Зарегистрироваться"
                                disabled={this.props.stateProcessRegister === 'request'}
                            />
						</div>
					</div>
				</form>
			</div>
		);
	};
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

export default reduxForm({ form: 'registrationForm', validate: validateFormProfile })(RegistrationForm);