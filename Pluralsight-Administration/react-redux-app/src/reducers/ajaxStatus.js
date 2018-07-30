import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from '../constants/actionTypes';
import initialState from '../constants/initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatus(
  state = initialState.ajaxCallInPropgress,
  action
) {
  if (action.type === BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (
    action.type === AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
