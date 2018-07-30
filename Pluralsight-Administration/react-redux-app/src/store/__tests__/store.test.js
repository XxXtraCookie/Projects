import expect from 'expect';
import { createStore } from 'redux';
import pluralsightAdministration from '../../reducers/pluralsightAdministration';
import initialState from '../../constants/initialState';
import * as courseActions from '../../actions/courseActions';

describe('Store', () => {

  it('should handle creating courses', () => {
    // arrange
    const store = createStore(pluralsightAdministration, initialState);
    const course = { title: 'Clean Code' };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = { title: 'Clean Code' };

    expect(actual).toEqual(expected);
  });

});
