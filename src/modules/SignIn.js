import { signInAPI, signOutAPI } from "../api";

// action type
const SIGNIN_PENDING = "SIGNIN_PENDING";
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
const SIGNIN_FAIL = "SIGNIN_FAIL";
const SIGNOUT = "SIGNOUT";

// action creator
export const signIn = data => async dispatch => {
  dispatch({ type: SIGNIN_PENDING }); // 요청 시작과 함께 시작됨

  try {
    const result = await signInAPI(data);
    if (result.status === 401) {
      return dispatch({
        type: SIGNIN_FAIL,
        payload: result.message,
      });
    } else {
      return dispatch({
        type: SIGNIN_SUCCESS,
        payload: result,
      });
    }
  } catch (error) {
    console.log(error);
    return dispatch({
      type: SIGNIN_FAIL,
      payload: error,
    });
  }
};

export const signOut = () => async dispatch => {
  await signOutAPI();
  dispatch({ type: SIGNOUT });
};

export const clearUserData = () => dispatch => {
  dispatch({ type: SIGNOUT });
};

// initial state
const initialState = {
  pending: false,
  error: false,
  isSignIn: false,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        pending: false,
        isSignIn: true,
        error: false,
        data: action.payload,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        pending: false,
        error: true,
        isSignIn: false,
      };
    case SIGNOUT:
      return {
        ...state,
        pending: false,
        isSignIn: false,
        error: false,
        data: null,
      };
    default:
      return state;
  }
};
