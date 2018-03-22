import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switches from '../components/Switches';
import { setPower } from '../actions';


const SwitchesContainer = (props) => {
  const { switches, onChange } = props;
  return (
    <Switches
      switches={switches}
      title="steckdosen"
      onChange={onChange}
    />
  );
};

SwitchesContainer.propTypes = {
  switches: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  switches: state.steckdose,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  onChange: (ids, state) => {
    dispatch(setPower(ids, state));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchesContainer);
