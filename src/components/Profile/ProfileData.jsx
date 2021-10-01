import React from 'react'
import ProfileContacts from './ProfileContacts';

const ProfileData = (props) => {
    return (
        <>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            <b>Full name:</b>{props.profile.fullName}
            <b>Looking for a job:</b>{props.profile.lookingForAJob ? 'yes' : 'no'}
            <b>My professional skills:</b>{props.profile.lookingForAJobDescription ? 'yes' : 'no'}
            <b>About me:</b>{props.profile.aboutMe}
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return < ProfileContacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </>
    )
}

export default ProfileData
