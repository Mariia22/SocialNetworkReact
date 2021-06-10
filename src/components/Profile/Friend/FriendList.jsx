import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Friend.module.css';
import userLogo from './../../../images/user.png';
import * as axios from 'axios';

const FriendList = (props) => {
    let count = Math.ceil(props.totalCount / props.pageSize);
    let pagination = [];
    for (let i = 1; i <= count; i++) {
        pagination.push(i)
    }
    const changeToggle = (id, follow) => {
        if (follow) {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true, headers: {
                    'API-KEY': "1fc50f62-a8c6-466e-a15c-d8ecbf2f8fce"
                }
            }).then(response => {
                if (response.data.resultCode === 0) {
                    props.toggleFollowing();
                }
            });
        }
        else {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true, headers: {
                    'API-KEY': "1fc50f62-a8c6-466e-a15c-d8ecbf2f8fce"
                }
            })
                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.toggleFollowing();
                    }
                });
        }
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
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userLogo} alt="friend" />
                        </NavLink>
                        <span>{user.name}</span>
                        <button onClick={() => changeToggle(user.id, user.follow)}>{user.follow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                )
            }
        </div>
    </div>
};

export default FriendList;
