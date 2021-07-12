import { CHANGE_INPUT, ADD_EVENT, DEL_EVENT, ADD, DEL } from './index'
export const changeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
export const addEvent = (value) => {
    return {
        type: ADD_EVENT,
        value
    }
}
export const delEvent = (value) => {
    return {
        type: DEL_EVENT,
        value
    }
}
export const add = {
    type: ADD
}
export const del = {
    type: DEL
}