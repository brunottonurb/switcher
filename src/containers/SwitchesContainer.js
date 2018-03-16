import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switches from '../components/Switches';
import { setSwitch } from '../actions';


const SwitchesContainer = (props) => {
  const { switches, onChange } = props;
  return (
    <Switches
      switches={switches}
      title="steckdose"
      onChange={onChange}
    />
  );
};

SwitchesContainer.propTypes = {
  switches: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  switches: state.steckdose,
});

const mapDispatchToProps = dispatch => ({
  onChange: (id, state) => {
    dispatch(setSwitch(id, state));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchesContainer);
