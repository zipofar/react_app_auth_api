import React from 'react';

export default class Main extends React.Component {
	render() {
		return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>О проекте</h1>
						<p>Данный учебный проект основан на фреймворке React.</p>
						<ul>
							<li><a href='https://github.com/zipofar/react_app_auth_api'>Проект на Github</a></li>
                        	<li><a href='https://github.com/zipofar/react_app_auth_api_laravel'>API backend на Github</a></li>
						</ul>
						<p>Используемые технологии:</p>
						<ul>
							<li>React</li>
							<li>React-Router 4</li>
							<li>Redux</li>
							<li>Redux-Form</li>
							<li>Redux-Thunk</li>
							<li>Axios</li>
							<li>Laravel for backend</li>
						</ul>
                    </div>
                </div>
            </div>
		);
	}
}
