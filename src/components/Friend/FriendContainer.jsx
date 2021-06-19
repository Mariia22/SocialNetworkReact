import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setIsFetching, getUsers, setIsLoading, followUser, unfollowUser } from '../redux/friends_reduce';
import FriendList from './FriendList';
import Preload from '../Common/Preload';

class FriendContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }
    changeCurrentPage = (currentPage) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isLoading === true ? <Preload /> : null}
            <FriendList totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changeCurrentPage={this.changeCurrentPage}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                users={this.props.users}
                isFetching={this.props.isFetching}
                setIsFetching={this.props.setIsFetching} />
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading,
        isFetching: state.users.isFetching
    }
}
export default connect(mapStateToProps, { setCurrentPage, setIsLoading, setIsFetching, getUsers, followUser, unfollowUser })(FriendContainer);
