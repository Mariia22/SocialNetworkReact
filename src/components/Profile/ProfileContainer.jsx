import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import ProfileFriend from './ProfileFriend';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data.items);
            });
    }
    render() {
        return <div>
            <ProfileFriend />
            <Profile />
        </div>
    }

}
export default ProfileContainer;