import React, { useState } from 'react';
import style from './Profile.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../images/user.png';

const ProfileFriend = (props) => {
    const [hover, setHover] = useState(false);
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={style.appProfile}>
            <div className={style.appProfileRed}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)} >
                {props.isOwner && hover ? <input type='file' onChange={onMainPhotoSelected} /> : null}
            </div>
            <img className={style.appProfilePhoto} src={props.profile.photos.large || userPhoto}
                alt="User pic"
                width="100px"
                height="100px" />
            <div className={style.appProfileWhite}>
                <h3>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileFriend;