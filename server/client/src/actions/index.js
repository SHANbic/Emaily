import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  return {
    type: FETCH_USER
  };
};

export default fetchUser;
