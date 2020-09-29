import { default as routerReducer } from './router';
import { default as routes } from './routes';

const reducers = {
  routes,
  router: routerReducer
};

export default reducers;