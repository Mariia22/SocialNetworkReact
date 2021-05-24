import React from 'react';
import { connect } from 'react-redux';
import { toggleFollowActionCreator, setFriendsActionCreator, setTotalCount, setCurrentPage } from './../../redux/friends_reduce';
import * as axios from 'axios';
import FriendList from './FriendList';

class FriendContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFriends(response.data.items);
                    this.props.setTotalCount(response.data.totalCount)
                });
        }
    }
    changeCurrentPage = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            });
        this.props.setCurrent(currentPage);
    }
    render() {
        return (
            <FriendList totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changeCurrentPage={this.changeCurrentPage}
                toggleFollowing={this.props.toggleFollowing}
                users={this.props.users} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowing: (userId) => { dispatch(toggleFollowActionCreator(userId)) },
        setFriends: (users) => { dispatch(setFriendsActionCreator(users)) },
        setTotalCount: (totalCount) => { dispatch(setTotalCount(totalCount)) },
        setCurrent: (currentPage) => { dispatch(setCurrentPage(currentPage)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendContainer);
