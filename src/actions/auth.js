import api from '../utils/api';
import { setAlert } from './alert';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT
} from './types';

// Load User
export const loadUser = () => async dispatch => {

  const res = await api.get('/condoservices/api/v1/condoinfo');
  console.log("load", res.data.data[0].propertycode);

  dispatch({
    payload: res.data
  });
  console.log(res.data)
  dispatch(loadDashboard());
  // } catch (err) {
  //   dispatch({
  //     type: AUTH_ERROR
  //   });
  // }
};
export const loadDashboard = () => async dispatch => {
  try {
    console.log("dsdfh");
    const headers = {
      'X-PropertyCode': '36572524-62ab-41b7-8f0a-ab7d68297b05',
      'User': 'amal',
      'ReferenceId': 'MA-006',
      'AccessMode': 'view'
    }
    const res = await api.get('/condoservices/api/v1/user/amal/units', {
      headers: headers
    });
    // console.log("load",res.data.data.propertycode[0])
    console.log("load", res.data.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    });

  } catch (err) {

  }
};


// Login User
export const login = (username, password) => async dispatch => {
  const body = JSON.stringify({ username, password });
  console.log(body);

  const res = await api.post('/security/api/v1/usermanagement/login', body);


  if (res.data.statuscode === 200) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data
    });

    dispatch(loadDashboard());
    console.log(res.data)

  } else {
    const errors = res.data.errormessage;
    dispatch(setAlert(errors, 'danger'));
    // console.log(errors)
    // dispatch({
    //   type: LOGIN_FAIL
    // });

  }

};


// Logout / Clear Profile
export const logout = () => dispatch => {
  localStorage.removeItem('authtoken');
  dispatch({ type: LOGOUT });
};
