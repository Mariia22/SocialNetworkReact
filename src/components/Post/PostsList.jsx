import style from './Post.module.css'
import Post from './Post'

const PostList = () => {
    return (
        <div className={style.appPostList}>
            <form action='#' method='post'>
                <textarea className={style.appPostInput} placeholder='New post'></textarea>
                <button className={style.appPostButton}>Post</button>
            </form>
            <Post message='Hi!!!' />
            <Post message='How are you?' />
            <Post message='I am OK' />
        </div>

    );
}
export default PostList;