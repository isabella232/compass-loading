import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './loading.less';

class Loading extends Component {
  static displayName = 'LoadingComponent';

  /**
   * Render Loading component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className={classnames(styles.loading)}>
        <i className="fal fa-compass fa-spin"></i>
      </div>
    );
  }
}

/**
 * Map the store state to properties to pass to the components.
 *
 * @param {Object} state - The store state.
 *
 * @returns {Object} The mapped properties.
 */
const mapStateToProps = (state) => ({
});

/**
 * Connect the redux store to the component.
 * (dispatch)
 */
const MappedLoading = connect(
  mapStateToProps,
  {
  },
)(Loading);

export default MappedLoading;
export { Loading };
