import { combineReducers } from 'redux';
import {SET_STACK,LOAD_STACK} from '../actions'

function stack(state={},action){
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}

function stacks(state=[],action){
    switch (action.type) {
        case LOAD_STACK:
            return action.stacks;
        default:
            return state;
    }
}


export default combineReducers({stack,stacks});