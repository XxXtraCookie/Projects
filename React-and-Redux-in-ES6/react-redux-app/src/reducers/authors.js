import { LOAD_AUTHORS_SUCCESS } from '../constants/actionTypes';
import initialState from '../constants/initialState';

function authors(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return [
        ...state,
        ...action.authors
      ];

    default:
      return state;
  }
}

export default authors;
