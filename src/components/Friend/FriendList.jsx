import React from 'react';
import style from './Friend.module.css';
import Friend from './Friend';

const FriendList = (props) => {
    let count = Math.ceil(props.totalCount / props.pageSize);
    let pagination = [];
    for (let i = 1; i <= count; i++) {
        pagination.push(i)
    }
    const changeToggle = (id, follow) => {
        props.setIsFetching(true, id);
        follow ? props.unfollowUser(id) : props.followUser(id);
    }
    return <div>
        <div className={style.paginationList}>
            {
                pagination.map(page => <span className={props.currentPage === page ? style.selected : style.nonselected}
                    onClick={() => { props.changeCurrentPage(page) }}>{page}</span>)
            }
        </div>
        <div className={style.friendList} >
            {
                props.users.map(user => <Friend key={user.id} id={user.id} photo={user.photos.small} name={user.name}
                    followed={user.followed} isFetching={props.isFetching} changeToggle={changeToggle} />)
            }
        </div>
    </div>
};

export default FriendList;
