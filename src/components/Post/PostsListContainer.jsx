import { connect } from 'react-redux';
import { addPostActionCreator, changePostActionCreator } from '../redux/posts_reduce.js';
import PostsList from './PostsList';

const mapStateToProps = (state) => {
    return {
        posts: state.posts.postData,
        newPostText: state.posts.newPostText
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePost: (text) => {
            dispatch(changePostActionCreator(text));

        }
    }
};
const PostListContainer = connect(mapStateToProps, dispatchStateToProps)(PostsList);
export default PostListContainer;

