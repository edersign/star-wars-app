import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { fetchStarship } from '../actions/starships';

class StarshipsItem extends React.PureComponent {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchStarship(id));
  }

  render() {
    const { starship, index } = this.props;
    var filtered = starship
      .filter(
        function(e) {
          return this.indexOf(e) < 0;
        },
        [index],
      )
      .map(item => <>{item.name}</>);

    return <StarshipsLabel>{filtered[index]}</StarshipsLabel>;
  }
}

StarshipsItem.propTypes = {
  id: PropTypes.number.isRequired,
};

const mapStateToProps = ({ starship, loading }, props) => {
  const { id } = props;
  return {
    starship,
    loading,
    id,
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators({ fetchStarship }, dispatch),
  );
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(StarshipsItem);

const StarshipsLabel = styled.div`
  border: 1px solid #757575;
  font-size: 12px;
  font-weight: 500;
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 35px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 50px;
  text-align: center;
  padding: 5px 0;
`;
