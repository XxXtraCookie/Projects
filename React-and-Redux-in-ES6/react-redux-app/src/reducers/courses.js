import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from '../constants/actionTypes';
import initialState from '../constants/initialState';

function courses(state = initialState.courses, action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return [
        ...state,
        ...action.courses
      ];

    case CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case UPDATE_COURSE_SUCCESS:
      return [
        // return list of all the courses except the course that has been updated
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}

export default courses;
