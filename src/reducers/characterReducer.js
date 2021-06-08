const initState = {
    name: 'Dar Ksen',
    occupation: 'magician',
    age: '27'
}

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name:action.payload,
            }
        case 'CHANGE_OCCUPATION':
            return {
                ...state,
                occupation:action.payload,
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age:action.payload,
            }
        default:
            return state;
    }
}

export default characterReducer;