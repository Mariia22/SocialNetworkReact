import React from 'react';
import ReactDOM from 'react-dom';
import style from './Post.module.css'
import Post from './Post'

const PostList = (props) => {
    const postMessage = props.state.postData.map(post => <Post message={post.message} like={post.like} />)
    return (
        <div className={style.appPostList}>
            <form action='#' method='post'>
                <textarea className={style.appPostInput} placeholder='New post'></textarea>
                <button className={style.appPostButton}>Post</button>
            </form>
            {postMessage}
        </div>

    );
}
export default PostList;