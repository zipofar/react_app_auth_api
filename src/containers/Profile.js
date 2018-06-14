import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as actions  from '../actions/profile';

const mapStateToProps = state => {
    return {
        profile: state.profile,
    };
};

export default connect(mapStateToProps, actions)(Profile);
