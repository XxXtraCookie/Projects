import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCourseSuccess(course) {
  return { type: CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => { throw(error); });
  };
}

export function saveCourse(course) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => course.id ?
        dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse)))
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}