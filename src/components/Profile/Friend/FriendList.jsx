import React from 'react';
import style from './Friend.module.css';
import * as axios from 'axios';
import userLogo from './../../../images/user.png';


export default class FriendList extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFriends(response.data.items);
                    this.props.setTotalCount(response.data.totalCount)
                }
                );

        }
    }
    changeCurrentPage(currentPage) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFriends(response.data.items);
                    this.props.setTotalCount(response.data.totalCount)
                }
                );
        this.props.setCurrent(currentPage);
    }
    render() {
        let count = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pagination = [];
        for (let i = 1; i <= count; i++) {
            pagination.push(i)
        }
        return (
            <div>
                <div className={style.paginationList}>
                    {
                        pagination.map(page => <span className={this.props.currentPage === page ? style.selected : style.nonselected}
                            onClick={() => { this.changeCurrentPage(page) }}>{page}</span>)
                    }
                </div>
                <div className={style.friendList} >
                    {
                        this.props.users.map(user =>
                            <div className={style.friendItem} key={user.id}>
                                <img src={user.photos.small ? user.photos.small : userLogo} alt="friend" />
                                <span>{user.name}</span>
                                <button onClick={() => this.props.toggleFollowing(user.id)}>{user.follow ? 'Follow' : 'Unfollow'}</button>
                            </div>
                        )
                    }
                </div>
            </div>)
    }
};
