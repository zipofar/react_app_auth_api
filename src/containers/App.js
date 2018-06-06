import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
	isLogin: state.isLogin,
});

const container = connect(mapStateToProps)(App);

export default container;
