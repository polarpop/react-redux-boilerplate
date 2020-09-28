import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';


export default (history: History) => routerMiddleware(history);