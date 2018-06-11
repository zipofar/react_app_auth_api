import React from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Login extends React.Component {

	state = { login: '', password: '' }

	handleSubmit = (e) => {
		e.preventDefault();
        const { login, password } = this.state;
		this.props.checkLoginPass(login, password);
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	showPanelWrongPassword() {
		return(
		    <div className="row">
			    <div className="card error">
				    <p>Имя пользователя или пароль введены не верно</p>
				</div>
			</div>
		);
	}

	render() {
        const { refferer } = this.props.location.state || { refferer: { pathname: '/' } };

        if (this.props.isLogin) {
			return <Redirect to={ refferer } />
        }

        const wrongCredentials = this.props.stateProcessLogin === 'failure' ? true : false;

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
					<input type="submit" value="Login" />
                    <div className="row">
                        <Link to={'/registration'}>Регистрация</Link>
                    </div>
				</form>
				{wrongCredentials && this.showPanelWrongPassword()}
			</div>
		);
	}
}
