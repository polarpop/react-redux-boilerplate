import { routerMiddleware } from 'connected-react-router';
import { history } from '../utils';

export default routerMiddleware(history);