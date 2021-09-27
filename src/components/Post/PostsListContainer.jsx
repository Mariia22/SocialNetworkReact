import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost, getProfile, setLoadingProfile, getStatus, updateStatus } from '../redux/posts_reduce.js';
import PostsList from './PostsList';

class PostListContainer extends React.Component {
    refreshProfile() {
        this.props.setLoadingProfile(false);
        let userId = this.props.match.params.userId || this.props.userAuthId;
        if (!userId) {
            this.props.history.push('/login');
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }
    render() {
        return <div><PostsList posts={this.props} /></div>
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.postData,
        profile: state.posts.profile,
        isLoadingProfile: state.posts.isLoadingProfile,
        status: state.posts.status,
        userAuthId: state.login.userId
    }
}
let urlProfile = withRouter(PostListContainer);
export default connect(mapStateToProps, { addPost, getProfile, setLoadingProfile, getStatus, updateStatus })(urlProfile);
