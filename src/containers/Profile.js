import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { fetchCharacters, fetchCharacter } from '../actions/characters';
//import { fetchComments } from '../actions/comment';
//import PostDetail from '../components/post';
//import CommentsList from '../components/commentslist';
import Loader from '../components/load';

export class Post extends React.PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    //this.props.dispatch(fetchComments(postId));
    this.props.dispatch(fetchCharacter(id));
    this.props.dispatch(fetchCharacters());
  }

  onClickHome = () => {
    this.props.dispatch(fetchCharacters());
  };
  renderPostDetail = () => {
    const { characters, character, loading } = this.props;
    //const commentCount = comments.length;
    //const post = characters.filter(
    //  post => post.id === this.props.match.params.id,
    //);
    //const selectedpost = { ...characters[0] };

    //if (loading === false && post.length === 0) {
    //  return <Loader />;
    // }
    //console.log(selectedpost);
    //return <PostDetail post={selectedpost} commentCount={commentCount} />;

    console.log(character);
    console.log(this.props.match.params.id);
  };

  renderComments = () => {
    const { comments } = this.props;
    const { id } = this.props.match.params;

    //return <CommentsList comments={comments} postId={postId} />;
  };

  render() {
    const { characters } = this.props;

    /*const post = character.filter(
      post => post.id === this.props.match.params.id,
    );*/
    return (
      <>
        {/*character.length > 0 ? (
          <>
            {this.renderPostDetail()}
            {this.renderComments()}
          </>
        ) : (
          <PostTitle> nao tem port </PostTitle>
        )*/}
        {this.renderPostDetail()}
      </>
    );
  }
}

function mapStateToProps({ characters, character, loading }) {
  return {
    characters,
    character,
    loading: loading.charactersLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators({ fetchCharacters, fetchCharacter }, dispatch),
  );
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Post);

const PostTitle = styled.h3`
  font: 400 18px/28px Helvetica, Arial, sans-serif;
  margin: 100px auto;
  text-align: center;
`;
