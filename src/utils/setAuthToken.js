import api from './api';

const setAuthToken = authtoken => {
  if (authtoken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${authtoken}`;
    console.log("token")
    localStorage.setItem('authtoken', authtoken);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('authtoken');
  }
};

export default setAuthToken;
