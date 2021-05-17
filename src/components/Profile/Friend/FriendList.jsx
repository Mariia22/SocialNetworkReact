import React from 'react';
import style from './Friend.module.css';
import * as axios from 'axios';
import userLogo from './../../../images/user.png';


const FriendList = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setFriends(response.data.items));
    }

    return (
        <div className={style.friendList}>
            {props.users.map(user =>
                <div className={style.friendItem} key={user.id}>
                    <img src={user.photos.small ? user.photos.small : userLogo} alt="friend" />
                    <span>{user.name}</span>
                    <button onClick={() => props.toggleFollowing(user.id)}>{user.follow ? 'Follow' : 'Unfollow'}</button>
                </div>
            )}
        </div>)
};
export default FriendList;