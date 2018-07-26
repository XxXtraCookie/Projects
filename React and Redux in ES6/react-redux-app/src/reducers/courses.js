import { LOAD_COURSES_SUCCESS } from '../constants/actionTypes';

function courses(state = [], action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return [
        ...state,
        ...action.courses
      ];
  
    default:
      return state;
  }
}

export default courses;
