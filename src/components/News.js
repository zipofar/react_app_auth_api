import React from 'react';
import Loader from './Loader';

export default class News extends React.Component {

    componentWillMount = () => {
        this.props.loadNews();
    };
	
    render() {
        if (this.props.processLoadNews === 'request') {
            return <Loader />
        }
		return(
			<div className="row">
                {this.props.news.map((item, i) => {
                    return(
                        <div key={i} className="col-sm-12">
                            <div className="card fluid">
                              <div className="section dark"><h2>{item.title}</h2></div>
                              <div className="section">{item.text}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
		);
	}
}
