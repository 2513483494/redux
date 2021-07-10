export const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 }
        case 'del':
            return { count: state.count - 1 }
        default:
            return state
    }
}