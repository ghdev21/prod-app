import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://productivity-react.firebaseio.com/',
});

export default instance;
