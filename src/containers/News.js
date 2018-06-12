import { connect } from 'react-redux';
import News from '../components/News';
import * as actions from '../actions/news';

const mapStateToProps = state => {
	return {
        news: state.news,
        processLoadNews: state.processLoadNews,
	};
};

const container = connect(mapStateToProps, actions)(News);

export default container;
