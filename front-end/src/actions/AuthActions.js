import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/api/login', {
      username: email,
      password: password
    });
    const token = response.data;
    localStorage.setItem('token', token);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: token,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: 'LOGOUT',
  });
};
