import { LOAD_COURSES_SUCCESS } from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return dispatch => courseApi.getAllCourses()
    .then(courses => dispatch(loadCoursesSuccess(courses)))
    .catch(error => console.log(error));
}
