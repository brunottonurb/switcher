import { TOGGLE_SWITCHES } from '../constants';

const fiddleState = [
  {
    id: 1,
    name: 'Weiß',
    state: false,
    color: 'grey',
  },
  {
    id: 2,
    name: 'Blau',
    state: false,
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
    state: false,
    color: 'yellow',
  }
];

const steckdose = (state = fiddleState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCHES:
      return state.map(s => ({
        id: s.id,
        name: s.name,
        state: action.ids.includes(s.id) ? action.state : s.state,
        color: s.color,
      }));
    default:
      return state;
  }
};

export default steckdose;
