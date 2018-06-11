import React from 'react';
import { Redirect } from 'react-router-dom';

export default class RegistrationForm extends React.Component {

	state = { login: '', password: '' }

	handleSubmit = (e) => {
		e.preventDefault();
        const { login, password } = this.state;
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

					<div className="row responsive-label">
						<div className="col-sm-1 label">
							<label>Имя:</label>
						</div>
						<div className="col-sm-11">
							<input
								type="text"
								name="name"
								onChange={this.handleChange}
								value={this.state.login}
							/>
						</div>
                    </div>

                    <div className="row responsive-label">
						<div className="col-sm-1 label">
							<label>Email:</label>
						</div>
						<div className="col-sm-11">
							<input
								type="text"
								name="email"
								onChange={this.handleChange}
								value={this.state.login}
							/>
						</div>
                    </div>

					<div className="row responsive-label">
						<div className="col-sm-1 label">
                    		<label>Пароль:</label>
						</div>
						<div className="col-sm-11">
							<input
								type="password"
								name="password"
								onChange={this.handleChange}
								value={this.state.password}
							/>
						</div>
					</div>
                    
					<div className="row">
						<div className="col-sm-11 col-sm-offset-1">
							<input type="submit" value="Зарегистрироваться" />
						</div>
					</div>
				</form>
			</div>
		);
	}
}
