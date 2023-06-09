import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
   
   
  } from "../constants/userConstant";
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
  
      const { data } = await axios.post(
        `/api/users/login`,
        { email, password },
        { header: { "Content-Type": "application/json" } }
      );
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
  
  export const register = (user) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
  
      const { data } = await axios.post(`/api/users/`, user, {
        header: { "Content-Type": "application/json" },
      });
  
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

  //Google authentication
  export const googleAuth = ({ name,email}) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
  
      const { data } = await axios.post(
        '/api/users/google/',
      {name, email },
        { header: { "Content-Type": "application/json" } }
      );
   
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
      });
    }
  };
  