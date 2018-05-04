import { combineReducers } from "redux";
import ItemsReducer from './itemsReducer';
import selectedItemsReducer from './selectedItemReducer';
export default combineReducers({ItemsReducer, selectedItemsReducer});