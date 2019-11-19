export const SET_STACK = 'SET_STACK';
export const LOAD_STACK = 'LOAD_STACKS';
export const ADD_STACK = 'ADD_STACKS';

export function setStack(stack){
    return {
        type:SET_STACK,
        stack:stack
    };
}
export function loadStacks(stacks){
    return {
        type:LOAD_STACK,
        stacks
    };
}
export function addStack(stack){
    return {
        type:ADD_STACK,
        stack
    };
}