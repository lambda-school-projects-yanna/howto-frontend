import {
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  FETCH_USERS_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  ADD_CATEGORY_FAILURE,
  EDIT_CATEGORY_FAILURE,
  DELETE_CATEGORY_FAILURE
} from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case FETCH_USERS_FAILURE:
    case FETCH_CATEGORIES_FAILURE:
    case ADD_CATEGORY_FAILURE:
    case EDIT_CATEGORY_FAILURE:
    case DELETE_CATEGORY_FAILURE:
      return action.payload.message;
    default:
      return '';
  }
};
