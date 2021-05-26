import React from 'react';
import { connect } from 'react-redux';
import { toggleFollowing, setFriends, setTotalCount, setCurrentPage, setIsLoading } from './../../redux/friends_reduce';
import * as axios from 'axios';
import FriendList from './FriendList';
import Preload from './../../Common/Preload';

class FriendContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFriends(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                    this.props.setIsLoading(false);
                });
        }
    }
    changeCurrentPage = (currentPage) => {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.setIsLoading(false);
            });
        this.props.setCurrentPage(currentPage);
    }
    render() {
        return <>
            {this.props.isLoading === true ? <Preload /> : null}
            <FriendList totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changeCurrentPage={this.changeCurrentPage}
                toggleFollowing={this.props.toggleFollowing}
                users={this.props.users} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading
    }
}
export default connect(mapStateToProps, { toggleFollowing, setFriends, setTotalCount, setCurrentPage, setIsLoading })(FriendContainer);
