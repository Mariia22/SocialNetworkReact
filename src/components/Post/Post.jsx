import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.appPost}>
            <div>{props.message}</div>
        </div>

    );
}
export default Post;