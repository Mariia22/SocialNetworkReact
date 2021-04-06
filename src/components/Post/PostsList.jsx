import React from 'react';
import ReactDOM from 'react-dom';
import style from './Post.module.css'
import Post from './Post'

const PostList = () => {
    return (
        <div className={style.appPostList}>
            <form action='#' method='post'>
                <textarea className={style.appPostInput} placeholder='New post'></textarea>
                <button className={style.appPostButton}>Post</button>
            </form>
            <Post message='Hi!!!' like='5' />
            <Post message='How are you?' like='3' />
            <Post message='I am OK' like='7' />
        </div>

    );
}
export default PostList;