import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as actions  from '../actions/profile';

const mapStateToProps = state => {
    return {
        profile: state.profile,
        processLoadProfile: state.processLoadProfile,
    };
};

export default connect(mapStateToProps, actions)(Profile);
