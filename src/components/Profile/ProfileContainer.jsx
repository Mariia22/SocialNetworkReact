import React from 'react';
import * as axios from 'axios';
import { setLoadingProfile, setProfile } from './../redux/profile_reduce';
import Profile from './Profile';
import ProfileFriend from './ProfileFriend';
import Preload from './../Common/Preload'
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data);
            this.props.setLoadingProfile(true);
        });
    }
    render() {
        return <div>
            <Profile />
            {this.props.isLoadingProfile === true ? <ProfileFriend profile={this.props.profile} /> : <Preload />}
        </div>
    }

}
const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        isLoadingProfile: state.profile.isLoadingProfile
    }
}
export default connect(mapStateToProps, { setLoadingProfile, setProfile })(ProfileContainer);