import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import { fetchCharacters } from '../actions/characters';
import { fetchStarships } from '../actions/starships';
import CharactersList from '../components/characterslist';
import Wrap from '../components/wrapper';
import Loader from '../components/load';

export class Home extends React.PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchCharacters());
    dispatch(fetchStarships());
  }

  onClickHome = () => {
    const { dispatch } = this.props;
    dispatch(fetchCharacters());
    dispatch(fetchStarships());
  };

  renderPostList = () => {
    const { characters, loading, starships } = this.props;

    if (loading === true && characters.length === 0) {
      return <Loader />;
    }
    if (loading === false && characters.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <CharactersList characters={characters.results} starships={starships} />;
  };

  render() {
    return (
      <Wrap>
        <Mainfeed>{this.renderPostList()}</Mainfeed>
      </Wrap>
    );
  }
}

const mapStateToProps = ({ characters, loading, starships }) => {
  return {
    characters,
    starships,
    loading: loading.charactersLoaded,
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators(
      {
        fetchCharacters, fetchStarships
      },
      dispatch,
    ),
  );
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Home);

const Mainfeed = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 50px;
`;
