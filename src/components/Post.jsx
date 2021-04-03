const Post = () => {
    return (
        <div className='app_post'>
            <form action='#' method='post'>
                <input type='text' className='app_post_input' placeholder='New post'></input>
                <button className='app_post_button'>Post</button>
            </form>
        </div>

    );
}
export default Post;