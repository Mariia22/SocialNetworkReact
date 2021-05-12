//import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, changePostActionCreator } from '../redux/posts_reduce.js';
import PostsList from './PostsList';

/*const PostListContainer = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const changePost = (text) => {
        props.store.dispatch(changePostActionCreator(text));
    }
    return (
        <PostsList addNewPost={addPost} changeNewPost={changePost} newPostText={state.posts.newPostText}
            posts={state.posts.postData} />
    );
}*/
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

