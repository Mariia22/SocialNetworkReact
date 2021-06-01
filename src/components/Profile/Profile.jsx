import React from 'react';
import foto from './../../images/foto.jpeg';
import style from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={style.appProfile}>
            <div className={style.appProfileRed}></div>
            <img className={style.appProfilePhoto} src={foto} alt="User pic" width="100px" height="100px" />
            <div className={style.appProfileWhite}>
                <h3>{props.profile.posts.profile.fullName}</h3>
                <p>{props.profile.posts.profile.aboutMe}</p>
                <div className={style.appProfileStatistic}>Following<span>34</span></div>
                <div className={style.appProfileStatistic}>Followers<span>34</span></div>
                <div className={style.appProfileView} ><a href='./home'>View Profile</a></div>
            </div>
        </div>
    );
}
export default Profile;