const increment = (val) => {
    return {
        type: 'INCREMENT',
        inc: val
    }
}

const decrement = (val) => {
    return {
        type: 'DECREMENT',
        dec: val
    }
}

export { increment, decrement };