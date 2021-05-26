import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Friend.module.css';
import userLogo from './../../../images/user.png';

const FriendList = (props) => {
    let count = Math.ceil(props.totalCount / props.pageSize);
    let pagination = [];
    for (let i = 1; i <= count; i++) {
        pagination.push(i)
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
                props.users.map(user =>
                    <div className={style.friendItem} key={user.id}>
                        <NavLink to={'/profile' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userLogo} alt="friend" />
                        </NavLink>
                        <span>{user.name}</span>
                        <button onClick={() => props.toggleFollowing(user.id)}>{user.follow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                )
            }
        </div>
    </div>
};

export default FriendList;
