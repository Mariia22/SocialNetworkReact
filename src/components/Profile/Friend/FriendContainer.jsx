import { connect } from 'react-redux';
import { toggleFollowActionCreator, setFriendsActionCreator } from './../../redux/friends_reduce';
import FriendList from './FriendList';

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowing: (userId) => { dispatch(toggleFollowActionCreator(userId)) },
        setFriends: (users) => { dispatch(setFriendsActionCreator(users)) }
    }
}
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);
export default FriendContainer;
