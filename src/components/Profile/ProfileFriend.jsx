import React from 'react';
import style from './Profile.module.css'

const ProfileFriend = (props) => {
    return (
        <div className={style.appProfile} >
            <div className={style.appProfileRed}></div>
            <img className={style.appProfilePhoto} src={props.profile.photos.small} alt="User pic" width="100px" height="100px" />
            <div className={style.appProfileWhite}>
                <h3>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
                <div className={style.appProfileStatistic}>Following<span>34</span></div>
                <div className={style.appProfileStatistic}>Followers<span>34</span></div>
                <div className={style.appProfileView} ><a href='./home'>View Profile</a></div>
            </div>
        </div>
    )
}

export default ProfileFriend;