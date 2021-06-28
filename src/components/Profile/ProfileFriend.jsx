import React from 'react';
import style from './Profile.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileFriend = (props) => {
    return (
        <div className={style.appProfile}>
            <div className={style.appProfileRed}></div>
            <img className={style.appProfilePhoto} src={props.profile.posts.profile.photos.small} alt="User pic" width="100px" height="100px" />
            <div className={style.appProfileWhite}>
                <h3>{props.profile.posts.profile.fullName}</h3>
                <p>{props.profile.posts.profile.aboutMe}</p>
                <ProfileStatus />
            </div>
        </div>
    );
}
export default ProfileFriend;