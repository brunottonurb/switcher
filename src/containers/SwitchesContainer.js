import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switches from '../components/Switches';
import { setSwitch } from '../actions';


const SwitchesContainer = (props) => {
  const { switches, onChange, loading } = props;
  return (
    <Switches
      switches={switches}
      title="steckdosen"
      onChange={onChange}
      loading={loading}
    />
  );
};

SwitchesContainer.propTypes = {
  switches: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  switches: state.steckdose,
  loading: state.loading,
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
