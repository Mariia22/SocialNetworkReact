import React from 'react';
import { addPostActionCreator, changePostActionCreator } from '../redux/posts_reduce.js';
import PostsList from './PostsList';

const PostListContainer = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const changePost = (text) => {
        let action = changePostActionCreator(text);
        props.store.dispatch(action);
    }
    return (
        <PostsList addNewPost={addPost} changeNewPost={changePost} newPostText={state.posts.newPostText}
            posts={state.posts.postData} />
    );
}
export default PostListContainer;

