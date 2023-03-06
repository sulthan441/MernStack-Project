
import { SIGN_UP } from "./ActionTypes";
export const signUpAction = (userData) => {
    return {
      type: SIGN_UP,
      payload: userData,
    };
  };
  