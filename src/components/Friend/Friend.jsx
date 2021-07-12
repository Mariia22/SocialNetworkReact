import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Friend.module.css';
import userLogo from './../../images/user.png';

const Friend = (props) => {
    return (
        <div className={style.friendItem}>
            <NavLink to={'/profile/' + props.id}>
                <img src={props.photo ? props.photo : userLogo} alt="friend" />
            </NavLink>
            <span>{props.name}</span>
            <button disabled={props.isFetching.some(id => id === props.id)} onClick={() => props.changeToggle(props.id, props.followed)}>
                {props.followed ? 'Follow' : 'Unfollow'}</button>
        </div>
    )
}

export default Friend;