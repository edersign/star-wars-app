import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { fetchCharacter } from '../actions/characters';
import PostDetail from '../components/charactersdetail';
import Loader from '../components/load';
import Wrap from '../components/wrapper';
import NotFound from '../containers/NotFound';

export class Profile extends React.PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchCharacter(id));
  }

  renderPostDetail = () => {
    const { loading, character } = this.props;

    if (loading.charactersLoaded === true && character.length === 0) {
      return <Loader />;
    }
    if (loading.charactersLoaded === false && character.length === 0) {
      return <NotFound />;
    }
    return <PostDetail character={character} />;
  };

  render() {
    return <Wrap>{this.renderPostDetail()}</Wrap>;
  }
}

const mapStateToProps = ({ character, loading }) => {
  return {
    character,
    loading,
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators({ fetchCharacter }, dispatch),
  );
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profile);
