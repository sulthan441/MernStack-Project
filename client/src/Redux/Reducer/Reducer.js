import { SIGN_UP } from '../Action/ActionTypes.js';

const initialState = {
  users: [],
};

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
