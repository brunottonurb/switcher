import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switches from '../components/Switches';

const SwitchesContainer = (props) => {
  const { switches } = props;
  return (
    <Switches
      switches={switches}
      onChange={() => {}}
      title="steckdose"
    />
  );
};

SwitchesContainer.propTypes = {
  switches: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  switches: state.steckdose,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchesContainer);
