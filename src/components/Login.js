import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { reduxForm, Field } from "redux-form";
import { validateFormProfile } from '../helpers/validators';

class Login extends React.Component {

    componentWillUnmount = () => {
        this.props.removeNetErrors();
    };

    submitLoginPass = (values) => {
        const { email, password } = values;
		this.props.checkLoginPass({ email, password }, () => this.setState({ password: '' }));
	};

	showPanelWrongPassword = () => {

		if (this.props.networkErrors.length === 0) {
			return null;
		}

		return(
            <div className="row responsive-label">
                <div className="col-sm-12 col-md-2 label"></div>
                <div className="col-sm-12 col-md">
					<div className="card fluid error">
						{this.props.networkErrors.map((err, i) => <p key={i}>{err}</p>)}
					</div>
				</div>
			</div>
		);
	};

	render() {
        const { refferer } = this.props.location.state || { refferer: { pathname: '/' } };

        if (this.props.isLogin) {
			return <Redirect to={ refferer } />
        }

		return(
			<div className='container form'>
				<form onSubmit={this.props.handleSubmit(this.submitLoginPass)}>
                    <Field name='email' component={renderField} type='text' className='input-text' label='Email'/>
                    <Field name='password' component={renderField} type='password' className='input-text' label='Password'/>

					{this.props.stateProcessLogin === 'failure' && this.showPanelWrongPassword()}

                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label"></div>
                        <div className="col-sm-12 col-md">
							<input
								type="submit"
								value="Login"
								disabled={this.props.stateProcessLogin === 'request'}
							/>
						</div>
					</div>

                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-2 label"></div>
                        <div className="col-sm-12 col-md">
							<Link to={'/registration'}>Регистрация</Link>
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

export default reduxForm({ form: 'login', validate: validateFormProfile })(Login);