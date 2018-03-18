import {
  TOGGLE_SWITCHES,
  SHOW_ERROR,
  DISMISS_ERROR,
  LOADING,
} from '../constants';

export const toggleSwitches = (ids, state) => ({
  type: TOGGLE_SWITCHES,
  ids,
  state
});

export const showError = error => ({
  type: SHOW_ERROR,
  error,
});

export const dismissError = id => ({
  type: DISMISS_ERROR,
  id,
});

export const loading = status => ({
  type: LOADING,
  status,
});


const ip = '192.168.178.69';

export function setSwitches(ids, state) {
  return (dispatch) => {
    dispatch(loading(true));
    const params = ids.map(id => `+p6${id}=${state ? '1' : '0'}`).join('');
    return fetch(`http://${ip}/Set.cmd?cmd=setpower${params}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(
        (response) => {
          if (response.status !== 200) {
            dispatch(showError(`Could not set power outlet (Response status ${response.status}`));
            return null;
          }
          return response.text();
        },
        // Do not use catch, because that will also catch other exceptions
        // https://github.com/facebook/react/issues/6895
        (error) => {
          dispatch(showError(error.message));
        }
      )
      .then((response) => {
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        // dispatch(addChoreSuccess());
        dispatch(loading(false));
        if (response) dispatch(toggleSwitches(ids, state));
      });
  };
}

export function getPowerStatus() {
  return (dispatch) => {
    dispatch(loading(true));
    return fetch(`http://${ip}set.cmd?cmd=getpower`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(
        (response) => {
          if (response.status !== 200) {
            dispatch(showError(`Could not set power outlet (Response status ${response.status}`));
            return null;
          }
          return response.text();
        },
        // Do not use catch, because that will also catch other exceptions
        (error) => {
          dispatch(showError(error.message));
        }
      )
      .then((response) => {
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        // dispatch(addChoreSuccess());
        dispatch(loading(false));
        if (response) dispatch(toggleSwitches(/* TODO parse response */));
      });
  };
}
