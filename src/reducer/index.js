import _ from 'lodash'
import { CHANGE_INPUT, ADD_EVENT, DEL_EVENT, ADD, DEL } from '../action'

const initState = {
    placcHolder: 'write sth',
    list: [
        '11111',
        '22222',
        '33333'
    ],
    inputValue: '',
    count: 0
}

export const reducer = (state = initState, action) => {
    let newState
    switch (action.type) {
        case ADD:
            newState = _.cloneDeep(state)
            newState.count = state.count + 1
            return newState
        case DEL:
            newState = _.cloneDeep(state)
            newState.count = state.count - 1
            return newState
        case CHANGE_INPUT:
            newState = _.cloneDeep(state)
            newState.inputValue = action.value
            return newState
        case ADD_EVENT:
            newState = _.cloneDeep(state)
            newState.list.push(action.value)
            newState.inputValue = ''
            return newState
        case DEL_EVENT:
            newState = _.cloneDeep(state)
            newState.list.splice(action.value, 1)
            return newState
        default:
            return state
    }
}