import { combineReducers } from 'redux';
import courses from './courses';
import authors from './authors';

const pluralsightAdministration = combineReducers({
  courses,
  authors
});

export default pluralsightAdministration;
