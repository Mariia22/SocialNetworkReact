import { connect } from 'react-redux';
import { toggleFollowActionCreator, setFriendsActionCreator, setTotalCount } from './../../redux/friends_reduce';
import FriendList from './FriendList';

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowing: (userId) => { dispatch(toggleFollowActionCreator(userId)) },
        setFriends: (users) => { dispatch(setFriendsActionCreator(users)) },
        setTotalCount: (totalCount) => { dispatch(setTotalCount(totalCount)) }
    }
}
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);
export default FriendContainer;
