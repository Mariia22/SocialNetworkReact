import React from 'react';
import style from './Profile.module.css';
import ProfileContacts from './ProfileContacts';

const ProfileDataForm = (props) => {
    return (
        <form className={style.appProfileForm}>
            <button className={style.appProfileSave} onClick={props.goToEditMode}>Save</button>
            <b>Full name:</b>{props.profile.fullName}
            <b>Looking for a job:</b>{props.profile.lookingForAJob ? 'yes' : 'no'}
            <b>My professional skills:</b>{props.profile.lookingForAJobDescription ? 'yes' : 'no'}
            <b>About me:</b>{props.profile.aboutMe}
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return < ProfileContacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </form>
    )
}

export default ProfileDataForm
