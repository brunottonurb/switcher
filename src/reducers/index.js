import { combineReducers } from 'redux';
import steckdose from './steckdose';
import errors from './errors';
import loading from './loading';

const app = combineReducers({
  steckdose,
  errors,
  loading,
});

export default app;
