import { BaseActions } from './../actions';

const {
  SET_METHOD,
} = BaseActions.TYPES;

export default function BaseReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    method: null,
  },
  action,
) {
  switch (action.type) {
    case SET_METHOD: {
      return Object.assign({}, state, {
        method: action.method,
      });
    }
    default:
      return state;
  }
}