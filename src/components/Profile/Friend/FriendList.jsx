import React from 'react';
import style from './../Profile.module.css'
import Friend from './Friend'

const FriendList = (props) => {
    const friendList = props.friends.map(friend => <Friend name={friend.name} photo={friend.photo} key={friend.id} follow={friend.follow} />);
    return (
        <div className={style.appProfileFriendList}>
            {friendList}
        </div>
    );
};
export default FriendList;