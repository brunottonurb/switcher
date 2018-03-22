import {
  SET_SWITCHES,
  SET_SWITCHES_STATE,
  SHOW_ERROR,
  DISMISS_ERROR,
  START_LOADING,
  END_LOADING,
} from '../constants';

export const setSwitches = (ids, state) => ({
  type: SET_SWITCHES,
  ids,
  state,
});

export const setSwitchesState = obj => ({
  type: SET_SWITCHES_STATE,
  state: obj,
});

export const showError = error => ({
  type: SHOW_ERROR,
  error,
});

export const dismissError = id => ({
  type: DISMISS_ERROR,
  id,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});

export function setPower(ids, state) {
  return (dispatch) => {
    dispatch(startLoading());
    const params = ids.map(id => `${id}=${state ? '1' : '0'}`).join('&');
    return fetch(`http://localhost:8080/ippower/setpower?${params}`, {
      method: 'GET',
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
        dispatch(endLoading());
        if (response) dispatch(setSwitches(ids, state));
      });
  };
}

export function getPower() {
  return (dispatch) => {
    dispatch(startLoading());
    return fetch('http://localhost:8080/ippower/getpower', {
      method: 'GET',
    })
      .then(
        (response) => {
          if (response.status !== 200) {
            dispatch(showError(`Could not set power outlet (Response status ${response.status}`));
            return null;
          }
          return response.json();
        },
        // Do not use catch, because that will also catch other exceptions
        (error) => {
          dispatch(showError(error.message));
        }
      )
      .then((json) => {
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(endLoading());
        if (json) dispatch(setSwitchesState(json));
      });
  };
}
