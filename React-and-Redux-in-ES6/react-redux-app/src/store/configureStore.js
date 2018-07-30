import { createStore, applyMiddleware, compose } from 'redux';
import pluralsightAdministration from '../reducers/pluralsightAdministration';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
  return createStore(
    pluralsightAdministration,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        reduxImmutableStateInvariant()
      )
    )
  );
}

export default configureStore;
