import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <article className={styles['text-container']}>
        <h2 className={styles['header']}>About us</h2>
        <p className={styles['paragraph']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur luctus sapien eu finibus. Fusce non lacus ut orci luctus vulputate sed eu tortor. Nunc auctor augue ultrices ligula iaculis rhoncus a ac est. Sed dolor nunc, auctor rutrum ex ac, eleifend accumsan sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut a ultricies ante. In tincidunt odio eget scelerisque porttitor. Aliquam ac viverra nibh. Fusce sit amet elementum erat. Cras pretium quam in mauris faucibus, non rhoncus elit pulvinar. Suspendisse potenti.
        </p>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
