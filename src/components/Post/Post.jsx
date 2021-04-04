import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.appPost}>
            <form action='#' method='post'>
                <textarea className={style.appPostInput} placeholder='New post'></textarea>
                <button className={style.appPostButton}>Post</button>
            </form>
        </div>

    );
}
export default Post;