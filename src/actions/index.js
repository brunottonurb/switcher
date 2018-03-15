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
