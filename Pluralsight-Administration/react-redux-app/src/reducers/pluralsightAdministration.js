import { combineReducers } from 'redux';
import courses from './courses';
import authors from './authors';
import ajaxCallsInProgress from './ajaxStatus';

const pluralsightAdministration = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default pluralsightAdministration;
