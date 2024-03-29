import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest, thumbUpRequest, thumbDownRequest } from '../../PostActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };
  
  handleThumbUp = (cuid, votes) => {
    const newVotes = Number(votes) + 1;
    this.props.dispatch(thumbUpRequest(cuid, newVotes));
  };

  handleThumbDown = (cuid, votes) => {
    const newVotes = Number(votes) - 1;
    this.props.dispatch(thumbDownRequest(cuid, newVotes));
  };

  render() {
    return (
      <div>
        <PostCreateWidget
          addPost={this.handleAddPost}
          showAddPost={this.props.showAddPost}
        />
        <PostList
          handleDeletePost={this.handleDeletePost}
          posts={this.props.posts}
          handleThumbUp={this.handleThumbUp}
          handleThumbDown={this.handleThumbDown}
        />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

PostListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
