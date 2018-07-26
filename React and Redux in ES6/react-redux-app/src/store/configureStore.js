import { createStore, applyMiddleware } from 'redux';
import pluralsightAdministration from '../reducers/pluralsightAdministration';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

function configureStore(initialState) {
  return createStore(
    pluralsightAdministration,
    initialState,
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant()
    )
  );
}

export default configureStore;
