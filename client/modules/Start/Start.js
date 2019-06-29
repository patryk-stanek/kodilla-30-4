import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Start.css';

class Start extends Component {
  render() {
    return (
      <div>
        <h2>Hello /!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Start.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
