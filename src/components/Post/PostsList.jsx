import React from 'react';
import ReactDOM from 'react-dom';
import { addPostActionCreator, changePostActionCreator } from '../redux/posts_reduce.js'
import style from './Post.module.css'
import Post from './Post'

const PostList = (props) => {
    const postMessage = props.state.posts.postData.map(post => <Post message={post.message} like={post.like} />)
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const changePost = (e) => {
        let text = e.target.value;
        props.dispatch(changePostActionCreator(text));
    }
    return (
        <div className={style.appPostList}>
            <div className={style.appPostForm}>
                <textarea className={style.appPostInput} value={props.state.posts.newPostText} onChange={changePost}></textarea>
                <button className={style.appPostButton} onClick={addPost}>Post</button>
            </div>
            {postMessage}
        </div>
    );
}
export default PostList;

