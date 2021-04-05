import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.appPost}>
            <div>{props.message}
                <span>{props.like} Likes</span>
            </div>
        </div>

    );
}
export default Post;