import axios from 'axios';
export const login = (data) => {
  return {
    type: 'LOGIN',
    data
  };
};
export const getData = () => async dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
     const { title } = response.data[0];
    dispatch(login({ title }));

  });
}

