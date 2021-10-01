import React from 'react';
import style from './Profile.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength, InputField, TextareaField } from './../Forms/FormControls';
import ProfileContacts from './ProfileContacts';

const ProfileDataForm = (props) => {
    const maxLengthName = maxLength(35);
    return (
        <form className={style.appProfileForm} onSubmit={props.handleSubmit}>
            <button className={style.appProfileSave} onClick={props.goToEditMode}>Save</button>
            <b>Full name:</b><Field name="fullName" placeholder="Full name" type="text" component={InputField} />
            <b>Looking for a job:</b><Field name="lookingJob" type="checkbox" component={InputField} />
            <b>My professional skills:</b><Field name="professionalSkills" placeholder="My professional skills" type="text" component={TextareaField} />
            <b>About me:</b><Field name="aboutMe" placeholder="About me" type="text" component={TextareaField} />
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return < ProfileContacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({ form: 'profile' })(ProfileDataForm);
export default ProfileDataFormRedux;

