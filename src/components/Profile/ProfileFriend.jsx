import React, { useState } from 'react';
import style from './Profile.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import Preloader from './../Common/Preload';
import userPhoto from './../../images/user.png';

const ProfileFriend = (props) => {
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);
    if (!props) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEdit(false);
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
                {edit ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> : <ProfileData
                    profile={props.profile}
                    isOwner={props.isOwner}
                    goToEditMode={() => { setEdit(true) }} />}
                <b>Status:</b><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileFriend;