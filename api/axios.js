import axios from 'axios';
import baseUrl from '../constants/baseUrl';

export default axios.create({ baseURL: baseUrl });
