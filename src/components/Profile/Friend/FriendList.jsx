import React from 'react';
import style from './../Profile.module.css'

const FriendList = (props) => {
    if (props.users.length === 0) {
        props.setFriends(
            [
                { id: 1, name: 'Mariia', photo: 'https://stuki-druki.com/biofoto3/maria-pevchikh-01.jpg', follow: true },
                { id: 2, name: 'Anna', photo: 'https://s3-eu-west-1.amazonaws.com/znanylekarz.pl/doctor/70c91d/70c91d18b59f81b00c6b5e58b5cf9915_large.jpg', follow: true },
                { id: 3, name: 'Alina', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alina_Sergeyeva_%282007%29.jpg/384px-Alina_Sergeyeva_%282007%29.jpg', follow: false }
            ]
        )
    }

    return (
        <div className={style.appProfileFriendList}>
            {props.users.map(user =>
                < div className={style.appProfileFriend} key={user.id}>
                    <img src={user.photo} alt="friend" />
                    <span>{user.name}</span>
                    <button onClick={() => props.toggleFollowing(user.id)}>{user.follow ? 'Follow' : 'Unfollow'}</button>
                </ div>
            )}
        </div>)
};
export default FriendList;