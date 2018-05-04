import { database } from '../firebase'
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  GET_ITEMS,
  GET_ITEM
} from "../const";

export function getItems(){
    return dispatch => {
      database.on("value", snapshot => {
        dispatch({ type: GET_ITEMS, payload: snapshot.val() });
      });
    };
}
export function addItem(item){
     return dispatch => database.push(item);
}

export function deleteItem(id) {
  return dispatch => database.child(id).remove();
}

export function getItem(id) {
    
  return dispatch => database.child(id).once("value", function(snapshot) {
      dispatch({type:GET_ITEM,payload: snapshot.val()});
    });
}
export function updateItem(id, post) {
    return dispatch => database.child(id).set(post);
}