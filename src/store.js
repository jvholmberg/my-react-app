// Core dependecies
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Project dependecies
import navigationReducer from './Containers/Navigation/reducer';
import loginFormReducer from './Containers/Login/reducer';

const history = createHistory();
const router = routerMiddleware(history);
const store = createStore(
  combineReducers({
    router: routerReducer,
    navigation: navigationReducer,
    loginForm: loginFormReducer,
}),
composeWithDevTools(applyMiddleware(router, thunk)));

export default store;
