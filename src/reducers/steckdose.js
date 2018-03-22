import { SET_SWITCHES, SET_SWITCHES_STATE } from '../constants';

const steckdose = (state = {}, action) => {
  switch (action.type) {
    case SET_SWITCHES: {
      const newState = { ...state };
      action.ids.forEach((id) => {
        newState[id] = action.state;
      });
      return newState;
    }
    case SET_SWITCHES_STATE:
      return action.state;
    default:
      return state;
  }
};

export default steckdose;
