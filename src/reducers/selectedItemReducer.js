import {
  UPDATE_ITEM,
  GET_ITEM,
} from "../const";

const initialState = { loading: true };

export default function selectedItemReducer(state = initialState, action) {
    switch (action.type) {
    case GET_ITEM: {
        return {item:action.payload, loading:false};
    }
    default:
        return state;
    }
}
