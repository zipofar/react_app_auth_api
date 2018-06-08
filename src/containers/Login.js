import { connect } from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
	};
};

const container = connect(mapStateToProps)(Login);

export default container;
