import axios from 'axios';
import environment from '../../environments/environment.dev';

export default axios.create({
  baseURL: environment.api
});
