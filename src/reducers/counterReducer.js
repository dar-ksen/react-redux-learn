const initState = {
    count: 0,
}

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {...state, count:state.count + 1,}
        case 'INCREMENT_COUNT_TEN':
            return {...state, count:state.count + 10,}
        case 'DOUBLE_COUNT':
            return {...state, count:state.count*2,}
        case 'DECREMENT_COUNT_TEN':
            return {...state, count:state.count - 10,}
        case 'DECREMENT_COUNT':
            return {...state, count:state.count - 1,}
        case 'RESET_COUNT':
            return {...state, count:0,}
        default:
            return state;
    }
}

export default counterReducer;