import {ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, GET_ITEM,GET_ITEMS } from '../const';

const initialState = {loading:true};

export default function ItemsReducer(state = initialState, action){
    switch(action.type){
        case GET_ITEMS: return {items:action.payload, loading:false};
        case ADD_ITEM: {}
        case UPDATE_ITEM: {}
        case REMOVE_ITEM: {}
        default : return state

    }
}