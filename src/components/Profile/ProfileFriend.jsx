import React from 'react';
import style from './Profile.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileFriend = (props) => {
    return (
        <div className={style.appProfile}>
            <div className={style.appProfileRed}></div>
            <img className={style.appProfilePhoto} src={props.profile.photos.small} alt="User pic" width="100px" height="100px" />
            <div className={style.appProfileWhite}>
                <h3>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileFriend;