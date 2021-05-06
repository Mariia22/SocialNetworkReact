import React from 'react';
import ReactDOM from 'react-dom';
import { addPostActionCreator, changePostActionCreator } from './../redux/state.js'
import style from './Post.module.css'
import Post from './Post'

const PostList = (props) => {
    const postMessage = props.posts.postData.map(post => <Post message={post.message} like={post.like} />)
    const newPost = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const changePost = () => {
        let text = newPost.current.value;
        props.dispatch(changePostActionCreator(text));
    }
    return (
        <div className={style.appPostList}>
            <div className={style.appPostForm}>
                <textarea className={style.appPostInput} ref={newPost} value={props.posts.newPostText} onChange={changePost}></textarea>
                <button className={style.appPostButton} onClick={addPost}>Post</button>
            </div>
            {postMessage}
        </div>
    );
}
export default PostList;

