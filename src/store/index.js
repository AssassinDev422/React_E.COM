import { createStore } from "redux";
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";
const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
