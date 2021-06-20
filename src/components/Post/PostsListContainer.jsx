import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost, changePost, getProfile, setLoadingProfile } from '../redux/posts_reduce.js';
import PostsList from './PostsList';
import { withAuthRedirected } from './../HOC/Auth'

class PostListContainer extends React.Component {
    componentDidMount() {
        this.props.setLoadingProfile(false);
        let userId = this.props.match.params.userId || 1;
        this.props.getProfile(userId);
    }
    render() {
        return <div><PostsList posts={this.props} /></div>
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.postData,
        newPostText: state.posts.newPostText,
        profile: state.posts.profile,
        isLoadingProfile: state.posts.isLoadingProfile
    }
}
let urlProfile = withRouter(PostListContainer);
export default withAuthRedirected(connect(mapStateToProps, { addPost, changePost, getProfile, setLoadingProfile })(urlProfile));
