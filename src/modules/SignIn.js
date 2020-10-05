import { signInAPI, signOutAPI, getUserInfoAPI } from "../api";

// action type
const SIGNIN_PENDING = "SIGNIN_PENDING";
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
const SIGNIN_FAIL = "SIGNIN_FAIL";
const GETUSER_PENDING = "GETUSER_PENDING";
const GETUSER_SUCCESS = "GETUSER_SUCCESS";
const GETUSER_FAIL = "GETUSER_FAIL";
const SIGNOUT = "SIGNOUT";

// action creator
export const signIn = data => async dispatch => {
  dispatch({ type: SIGNIN_PENDING }); // 요청 시작과 함께 시작됨

  try {
    const result = await signInAPI(data);
    if (result.status === 401) {
      return dispatch({
        type: SIGNIN_FAIL,
      });
    } else {
      return dispatch({
        type: SIGNIN_SUCCESS,
      });
    }
  } catch (error) {
    return dispatch({
      type: SIGNIN_FAIL,
    });
  }
};

export const signOut = () => async dispatch => {
  await signOutAPI();
  dispatch({ type: SIGNOUT });
};

export const getUserData = () => async dispatch => {
  dispatch({ type: GETUSER_PENDING }); // 요청 시작과 함께 시작됨

  try {
    const result = await getUserInfoAPI();
    if (result.status === 401) {
      dispatch({ type: GETUSER_FAIL });
    } else {
      const data = await result.json();
      return dispatch({
        type: GETUSER_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({ type: GETUSER_FAIL });
  }
};

// initial state
const initialState = {
  pending: false,
  error: false,
  isSignIn: false,
  data: null,
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
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        pending: false,
        error: true,
        isSignIn: false,
      };
    case GETUSER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GETUSER_SUCCESS:
      return {
        ...state,
        pending: false,
        isSignIn: true,
        error: false,
        data: action.payload,
      };
    case GETUSER_FAIL:
      return {
        ...state,
        pending: false,
        error: true,
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
