import { connect } from 'react-redux';
import { toggleFollowActionCreator, setFriendsActionCreator } from './../../redux/friends_reduce';
import FriendList from './FriendList';

const mapStateToProps = (state) => {
    return {
        friends: state.friends.friendData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowing: () => { dispatch(toggleFollowActionCreator()) },
        setFriends: () => { dispatch(setFriendsActionCreator()) }
    }
}
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);
export default FriendContainer;
