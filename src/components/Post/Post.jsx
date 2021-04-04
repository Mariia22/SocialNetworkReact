import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.appPost}>
            <form action='#' method='post'>
                <input type='text' className={style.appPostInput} placeholder='New post'></input>
                <button className={style.appPostButton}>Post</button>
            </form>
        </div>

    );
}
export default Post;