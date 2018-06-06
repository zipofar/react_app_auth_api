import React from 'react';
import { checkLoginPass, setLogin } from '../actions';

export default class Login extends React.Component {

	state = {login: '', password: '', wrongPass: false}

	handleSubmit = (e) => {
		e.preventDefault();

		if (checkLoginPass(this.state.login, this.state.password)) {
			this.props.dispatch(setLogin());
		} else {
			this.setState({ wrongPass: true });
		}

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
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
				<label>
				Login:
				<input type="text" name="login" onChange={this.handleChange} value={this.state.login} />
				</label>
				<label>
				Password:
				<input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
					</label>
					<input type="submit" value="Login" />
				</form>
				{this.state.wrongPass && this.showPanelWrongPassword()}
			</div>
		);
	}
}
