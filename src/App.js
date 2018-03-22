import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui/Progress';
import './App.css';
import SwitchesContainer from './containers/SwitchesContainer';
import ErrorDisplay from './containers/ErrorDisplay';

const App = (props) => {
  const { loading } = props;
  return (
    <div>
      <ErrorDisplay key="error_display" />
      <SwitchesContainer key="switches_container" />
      {loading && <LinearProgress key="loading_animation" />}
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
