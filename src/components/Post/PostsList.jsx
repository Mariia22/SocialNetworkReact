import React from 'react';
import ReactDOM from 'react-dom';
import style from './Post.module.css'
import Post from './Post'

const postData = [
    { message: 'Hi!!!', like: 5 },
    { message: 'How are you?', like: 3 },
    { message: 'I am OK', like: 7 },
];

const postMessage = postData.map(post => <Post message={post.message} like={post.like} />)

const PostList = () => {
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