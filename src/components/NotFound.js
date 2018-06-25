import React from 'react';

export default class NotFound extends React.Component {

	render() {
		return(
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<h1>Ошибка 404. <small>Страница не найдена.</small></h1>
					</div>
				</div>
			</div>
		);
	}
}
