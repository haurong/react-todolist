import * as types from './ActionTypes';

export function setFilter(filter){
    return {
        type :types.SET_FILTER,
        filter
    };
}