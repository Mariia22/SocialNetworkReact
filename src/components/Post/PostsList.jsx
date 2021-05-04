import React from 'react';
import ReactDOM from 'react-dom';
import style from './Post.module.css'
import Post from './Post'

const PostList = (props) => {
    const postMessage = props.state.postData.map(post => <Post message={post.message} like={post.like} />)
    const newPost = React.createRef();
    const addPost = () => {
        let post = newPost.current.value;
        props.addPost(post);
    }
    return (
        <div className={style.appPostList}>
            <form action='#' method='post'>
                <textarea className={style.appPostInput} placeholder='New post' ref={newPost}></textarea>
                <button className={style.appPostButton} onClick={addPost}>Post</button>
            </form>
            {postMessage}
        </div>

    );
}
export default PostList;