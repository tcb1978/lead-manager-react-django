import React, { Component, Fragment, useEffect, useState, useRef } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleErrors } from './utils';

export class Alerts extends Component {

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    handleErrors({ error, alert, message, prevProps });
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

Alerts.propstypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withAlert()(Alerts));