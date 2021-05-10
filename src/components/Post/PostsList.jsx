import React from 'react';
import ReactDOM from 'react-dom';
import style from './Post.module.css'
import Post from './Post';


const PostList = (props) => {
    const postMessage = props.posts.map(post => <Post message={post.message} like={post.like} />)
    const addPost = () => {
        props.addNewPost();
    }
    const changePost = (e) => {
        let text = e.target.value;
        props.changeNewPost(text);
    }
    return (
        <div className={style.appPostList}>
            <div className={style.appPostForm}>
                <textarea className={style.appPostInput} value={props.newPostText} onChange={changePost}></textarea>
                <button className={style.appPostButton} onClick={addPost}>Post</button>
            </div>
            {postMessage}
        </div>
    );
}
export default PostList;

