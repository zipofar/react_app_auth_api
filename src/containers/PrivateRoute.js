import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';

const mapStateToProps = (state) => {
	return { isLogin: state.isLogin };
};

const container = connect(mapStateToProps)(PrivateRoute);

export default container;
