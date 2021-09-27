import React from 'react';
import style from './Post.module.css'
import Post from './Post';
import ProfileFriend from './../Profile/ProfileFriend';
import Preload from './../Common/Preload';
import AddNewPost from '../Forms/AddNewPost';


const PostList = (props) => {
    const postMessage = props.posts.posts.map(post => <Post message={post.message} like={post.like} key={post.id} />)
    const addPost = (value) => {
        props.posts.addPost(value.newPostMessage);
    }
    return (
        <div className={style.appPostList}>
            {props.posts.isLoadingProfile ?
                <ProfileFriend
                    profile={props.posts.profile} status={props.posts.status} updateStatus={props.posts.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} />
                : <Preload />}
            <div className={style.appPostForm}>
                <AddNewPost onSubmit={addPost} />
                {postMessage}
            </div>
        </div>
    );
}
export default PostList;

