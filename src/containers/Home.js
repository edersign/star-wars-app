import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';

import { fetchCharacters } from '../actions/characters';
//import { selectedSort } from '../actions/sort';
//import Sort from '../components/sort';
import CharactersList from '../components/characterslist';
//import Categories from '../components/categories';
//import Wrap from '../components/wrapper';
import Loader from '../components/load';

export class Home extends React.PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchCharacters());
    //dispatch(selectedSort());
    //dispatch(fetchCategories());
  }

  /*handleChange = sort => {
    const { dispatch } = this.props;
    dispatch(selectedSort(sort));
  };

  onClickCat = (category) => {
   const { dispatch } = this.props;
   dispatch(fetchPostsByCategories(category));
  };*/

  onClickHome = () => {
    const { dispatch } = this.props;
    dispatch(fetchCharacters());
  };

  renderPostList = () => {
    const { characters, loading } = this.props;
    //console.log(loading);
    if (loading === true && characters.length === 0) {
      return <Loader />;
    }
    if (loading === false && characters.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }

    //console.log(characters.results);
    return <CharactersList characters={characters.results} />;
  };

  render() {
    //const { categories } = this.props;

    return <Mainfeed>{this.renderPostList()}</Mainfeed>;
  }
}

const mapStateToProps = ({ characters, loading }) => {
  return {
    characters,
    loading: loading.charactersLoaded,
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators(
      {
        fetchCharacters,
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
  z-index: 0;
  position: relative;
  min-height: 350px;
  width: 100%;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CharacterGrid = styled.div`
  flex: 1;
`;
