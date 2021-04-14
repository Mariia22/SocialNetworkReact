import React from 'react';
import ReactDOM from 'react-dom';
import style from './Post.module.css'
import Post from './Post'

let postData = [
    { message: 'Hi!!!', like: 5 },
    { message: 'How are you?', like: 3 },
    { message: 'I am OK', like: 7 },
];

const PostList = () => {
    return (
        <div className={style.appPostList}>
            <form action='#' method='post'>
                <textarea className={style.appPostInput} placeholder='New post'></textarea>
                <button className={style.appPostButton}>Post</button>
            </form>
            <Post message={postData[0].message} like={postData[0].like} />
            <Post message={postData[1].message} like={postData[1].like} />
            <Post message={postData[2].message} like={postData[2].like} />
        </div>

    );
}
export default PostList;