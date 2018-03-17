import { SHOW_ERROR, DISMISS_ERROR } from '../constants';

let nextId = 0;

const errors = (state = [], action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return [
        ...state,
        {
          message: action.error,
          dismissed: false,
          // eslint-disable-next-line no-plusplus
          id: nextId++,
        }
      ];
    case DISMISS_ERROR:
      return state.filter(error => error.id === action.id);
    default:
      return state;
  }
};

export default errors;
