import React from 'react';
import { Redirect } from 'react-router-dom';

export default class RegistrationForm extends React.Component {

	state = { name: '', email: '', password: '' }

	handleSubmit = (e) => {
		e.preventDefault();
        const { name, email, password } = this.state;
        this.props.register({ name, email, password });
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	showPanelError = () => {
		return(
		    <div className="row">
				<div className="col-sm-11 col-sm-offset-1">
			        <div className="card error">
                        <ul>
                        { this.props.authErrors.map((err, i) => {
                            return  <li key={i}>{err}</li>
                        }) }
                        </ul>
				    </div>
                </div>
			</div>
		);
	}

	render() {
        if (this.props.isLogin) {
            return <Redirect to="/" />
        }

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
								value={this.state.name}
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
								value={this.state.email}
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
                    
                    { this.props.stateProcessRegister === 'failure' && this.showPanelError() }

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
