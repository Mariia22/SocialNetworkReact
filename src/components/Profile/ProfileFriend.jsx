import React from 'react';
import style from './Profile.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../images/user.png';

const ProfileFriend = (props) => {
    return (
        <div className={style.appProfile}>
            <div className={style.appProfileRed}></div>
            <img className={style.appProfilePhoto} src={props.profile.photos.large || userPhoto} alt="User pic" width="100px" height="100px" />
            <div className={style.appProfileWhite}>
                <h3>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileFriend;