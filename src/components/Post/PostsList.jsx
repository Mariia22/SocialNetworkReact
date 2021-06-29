import React from 'react';
import style from './Post.module.css'
import Post from './Post';
import ProfileFriend from './../Profile/ProfileFriend';
import Preload from './../Common/Preload'


const PostList = (props) => {
    const postMessage = props.posts.posts.map(post => <Post message={post.message} like={post.like} key={post.id} />)
    const addPost = () => {
        props.posts.addPost();
    }
    const changePost = (e) => {
        let text = e.target.value;
        props.posts.changePost(text);
    }
    return (
        <div className={style.appPostList}>
            {props.posts.isLoadingProfile ? <ProfileFriend profile={props.posts.profile} status={props.posts.status} updateStatus={props.posts.updateStatus} />
                : <Preload />}
            <div className={style.appPostForm}>
                <textarea className={style.appPostInput} value={props.posts.newPostText} onChange={changePost}></textarea>
                <button className={style.appPostButton} onClick={addPost}>Post</button>
                {postMessage}
            </div>
        </div>
    );
}
export default PostList;

