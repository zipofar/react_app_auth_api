import React from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Login extends React.Component {

	state = { login: '', password: '' }

	handleSubmit = (e) => {
		e.preventDefault();
        const { login, password } = this.state;
		this.props.checkLoginPass({ login, password }, () => this.setState({ password: '' }));
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	showPanelWrongPassword = () => {
		return(
		    <div className="row">
			    <div className="card error">
				    {this.props.authErrors.map((err, i) => <p key={i}>{err}</p>)}
				</div>
			</div>
		);
	}

	render() {
        const { refferer } = this.props.location.state || { refferer: { pathname: '/' } };

        if (this.props.isLogin) {
			return <Redirect to={ refferer } />
        }

		return(
			<div>
				<form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="login"
                        onChange={this.handleChange}
                        value={this.state.login}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
					<input
                        type="submit"
                        value="Login"
                        disabled={this.props.stateProcessLogin === 'request'}
                    />
            
                    <div className="row">
                        <Link to={'/registration'}>Регистрация</Link>
                    </div>
				</form>
				{this.props.stateProcessLogin === 'failure' && this.showPanelWrongPassword()}
			</div>
		);
	}
}
