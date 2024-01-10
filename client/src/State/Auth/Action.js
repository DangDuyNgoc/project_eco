import { axios } from 'axios';

import { API_BASE_URL } from '../../config/apiConfig';
import { 
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE, 
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGOUT
} from './ActionType';

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

const token = localStorage.getItem("token");

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
        if(user.jwt) {
            localStorage.setItem("token", user.jwt);
        }
        dispatch(registerSuccess(user.jwt));
    } catch(error) {
        dispatch(registerFailure(error.message));
    }
};

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
        const user = response.data;
        if(user.jwt) {
            localStorage.setItem("token", user.jwt);
        }
        dispatch(loginSuccess);
    } catch(error) {
        dispatch(loginFailure(error.message));
    }
};

export const getUser = (token) => async (dispatch) => {
    dispatch(getUserRequest());

    try {
        const response = await axios.get(`${API_BASE_URL}/auth/users/profile`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        });
        const user = response.data;
        console.log(user);
        dispatch(getUserSuccess(user));
    } catch(error) {
        dispatch(getUserFailure(error.message));
    }
};

export const logout = (dispatch) => {
    dispatch({ type: LOGOUT, payload: null });
    localStorage.clear();
}