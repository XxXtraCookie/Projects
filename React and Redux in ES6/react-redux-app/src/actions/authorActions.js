import AuthorApi from '../api/mockAuthorApi';
import { LOAD_AUTHORS_SUCCESS } from '../constants/actionTypes';

export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return dispatch => AuthorApi.getAllAuthors()
    .then(authors => dispatch(loadAuthorsSuccess(authors)))
    .catch(error => console.error(error))
}
