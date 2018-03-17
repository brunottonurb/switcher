import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { dismissError } from '../actions';

const dismissButton = f => (
  <Button color="secondary" size="small" onClick={f}>
    Dismiss
  </Button>
);

const ErrorDisplay = (props) => {
  const { errors, onClose } = props;

  if (errors.length < 1) {
    return null;
  }

  const error = errors[0];

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open
      onClose={onClose}
      SnackbarContentProps={{
        'aria-describedby': `error_${error.id}`,
      }}
      message={<span id={`error_${error.id}`}>{error.message}</span>}
      action={dismissButton(onClose)}
    />
  );
};

ErrorDisplay.propTypes = {
  errors: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  onClose: (id) => {
    dispatch(dismissError(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorDisplay);
