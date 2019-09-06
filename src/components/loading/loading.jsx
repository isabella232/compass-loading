import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './loading.less';

class Loading extends Component {
  static displayName = 'LoadingComponent';
  static propTypes = {
    status: PropTypes.string.isRequired
  }

  /**
   * Render Loading component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className={classnames(styles.loading)}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="compass"
          className="svg-inline--fa fa-compass fa-w-16 fa-spin"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          height="25vh"
          viewBox="0 0 496 512">
          <path fill="#FFFFFF" d="M264.97 272.97c9.38-9.37 9.38-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0-9.38 9.37-9.38 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0zM351.44 125c-2.26 0-4.51.37-6.71 1.16l-154.9 55.85c-7.49 2.7-13.1 8.31-15.8 15.8l-55.85 154.91c-5.65 15.67 10.33 34.27 26.4 34.27 2.26 0 4.51-.37 6.71-1.16l154.9-55.85c7.49-2.7 13.1-8.31 15.8-15.8l55.85-154.9c5.64-15.67-10.33-34.28-26.4-34.28zm-58.65 175.79l-140.1 50.51 50.51-140.11 140.11-50.51-50.52 140.11zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216z">
          </path>
        </svg>
        <div className={classnames(styles['loading-status'])}>
          {this.props.status}
        </div>
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
  status: state.status
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
