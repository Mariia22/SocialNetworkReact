import React from 'react';
import style from './../Profile.module.css'

const Friend = (props) => {
    return (
        <div className={style.appProfileFriend}>
            <img src={props.photo} alt="photo" />
            <span>{props.name}</span>
        </div>
    );
};
export default Friend;