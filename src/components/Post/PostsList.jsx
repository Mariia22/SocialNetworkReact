import React from 'react';
import style from './Post.module.css'
import Post from './Post';
import Profile from './../Profile/Profile';


const PostList = (props) => {
    console.log('fggg');
    const postMessage = props.posts.map(post => <Post message={post.message} like={post.like} key={post.id} />)
    const addPost = () => {
        props.addPost();
    }
    const changePost = (e) => {
        let text = e.target.value;
        props.changePost(text);
    }
    return (
        <div className={style.appPostList}>
            <Profile />
            <div className={style.appPostForm}>
                <textarea className={style.appPostInput} value={props.newPostText} onChange={changePost}></textarea>
                <button className={style.appPostButton} onClick={addPost}>Post</button>
            </div>
            {postMessage}
        </div>
    );
}
export default PostList;

