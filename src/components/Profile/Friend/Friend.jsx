import React from 'react';
import style from './../Profile.module.css'

const Friend = (props) => {
    return (
        <div className={style.appProfileFriend}>
            <img src={props.photo} alt="friend" />
            <span>{props.name}</span>
            <button>{props.follow}</button>
        </div>
    );
};
export default Friend;