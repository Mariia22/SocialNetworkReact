import React from 'react';
import style from './Friend.module.css';
import Friend from './Friend';
import Pagination from '../Common/Pagination';

const FriendList = (props) => {
    const changeToggle = (id, follow) => {
        props.setIsFetching(true, id);
        follow ? props.unfollowUser(id) : props.followUser(id);
    }
    return (
        <div>
            <Pagination totalCount={props.totalCount} pageSize={props.pageSize} changeCurrentPage={props.changeCurrentPage} currentPage={props.currentPage} />
            <div className={style.friendList} >
                {
                    props.users.map(user => <Friend key={user.id} id={user.id} photo={user.photos.small} name={user.name}
                        followed={user.followed} isFetching={props.isFetching} changeToggle={changeToggle} />)
                }
            </div>
        </div>
    )
};

export default FriendList;
