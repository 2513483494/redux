export const add = (value) => {
    return {
        type: 'add',
        value: value + 1
    }
}

export const del = (value) => {
    return {
        type: 'del',
        value: value - 1
    }
}