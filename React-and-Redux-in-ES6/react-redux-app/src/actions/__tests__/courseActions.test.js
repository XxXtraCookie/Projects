import expect from 'expect';
import * as courseActions from '../courseActions';
import {
  BEGIN_AJAX_CALL,
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS
} from '../../constants/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Course Action', () => {
  describe('createCourseSuccess', () => {

    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = { id: 'clean-code', title: 'Clean Code' };
      const expectedAction = {
        type: CREATE_COURSE_SUCCESS,
        course
      };
      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });

  });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastname: 'House' }] } });

    const expectedActions = [
      { type: BEGIN_AJAX_CALL },
      { type: LOAD_COURSES_SUCCESS, body: { courses: [{ id: 'clean-code', title: 'Clean Code'}]} }
    ];
    const store = mockStore({ courses: [] }, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(LOAD_COURSES_SUCCESS);
      done(); // we tell Mocha async work is complete
    });
  });

});
