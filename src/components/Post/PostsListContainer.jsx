import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost, changePost, setProfile, setLoadingProfile } from '../redux/posts_reduce.js';
import PostsList from './PostsList';

class PostListContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 1;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setProfile(response.data);
            this.props.setLoadingProfile(true);
        });
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
export default connect(mapStateToProps, { addPost, changePost, setProfile, setLoadingProfile })(urlProfile);
