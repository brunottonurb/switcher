import {
  TOGGLE_SWITCH,
  TOGGLE_ALL_SWITCHES,
} from '../constants';

const fiddleState = [
  {
    id: 1,
    name: 'Grün',
    state: false,
    color: 'green',
  },
  {
    id: 2,
    name: 'Blau',
    state: true,
    color: 'blue',
  },
  {
    id: 3,
    name: 'Rot',
    state: false,
    color: 'red',
  },
  {
    id: 4,
    name: 'Gelb',
    state: true,
    color: 'yellow',
  }
];

const steckdose = (state = fiddleState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return state;
    case TOGGLE_ALL_SWITCHES:
      return state;
    default:
      return state;
  }
};

export default steckdose;
