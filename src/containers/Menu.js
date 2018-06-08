import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { logOut } from '../actions';

const mapStateToProps = state => {
	return {
		isLogin: state.isLogin,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logOut: () => dispatch(logOut()),
	};
};

const container = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default container;
