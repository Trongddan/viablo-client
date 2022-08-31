import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_DETAILS_SUCCESS,
  USER_LOGOUT,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_FOLLOW_REQUEST,
  USER_FOLLOW_FAIL,
  USER_FOLLOW_SUCCESS,
} from "../actionconst/actionTypes";
import apis from "../utils/Apis";
export const register = (newUser) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const { data } = await apis.post("api/register", newUser, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response ? error.response.data : "There is a problem",
    });
  }
};
//login
export const login = (userlogin) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await apis.post("api/login", userlogin);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // dispatch({
    //   type:USER_DETAILS_SUCCESS,
    //   payload:data
    // });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response ? error.response.data : "There's a problem",
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  localStorage.removeItem("userInfo");
};

export const getUserById = (id) => async (dispatch) => {
  try {
    dispatch({ type:USER_DETAILS_REQUEST});
    const { data } = await apis.get(`api/u/${id}`);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response ? error.response.data : "There's a problem",
    });
  }
};

export const UserFollow = (uId,fId) => async (dispatch) => {
  try {
    dispatch({ type:USER_FOLLOW_REQUEST});
     await apis.post(`api/follow/${uId}/${fId}`);

    dispatch({ type: USER_FOLLOW_SUCCESS});
  } catch (error) {
    dispatch({
      type: USER_FOLLOW_FAIL,
      payload: error.response ? error.response.data : "There's a problem",
    });
  }
};
