import {
  TOGGLE_SWITCH,
  TOGGLE_ALL_SWITCHES,
} from '../constants';

export const toggleSwitch = (id, state) => ({
  type: TOGGLE_SWITCH,
  id,
  state
});

export const toggleAllSwitches = state => ({
  type: TOGGLE_ALL_SWITCHES,
  state
});

const ip = '192.168.178.69';

export function setSwitch(id, state) {
  return dispatch => fetch(`http://${ip}/Set.cmd?cmd=setpower+p6${id}=${state ? '1' : '0'}`, {
    method: 'GET',
  })
    .then(
      (response) => {
        if (response.status !== 200) {
          // TODO do something with error
          return null;
        }
        return response.text();
      },
      // Do not use catch, because that will also catch other exceptions
      // https://github.com/facebook/react/issues/6895
      (error) => {
        // TODO do something with error
      }
    )
    .then((response) => {
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.
      // dispatch(addChoreSuccess());
      if (response) dispatch(toggleSwitch(id, state));
    });
}
