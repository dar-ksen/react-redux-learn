const initState = {
    todoList: [
        {
            id: 1,
            content: 'Learn React'
        },
        {
            id: 2,
            content: 'Learn React-hook'
        },
        {
            id: 3,
            content: 'Learn Redux'
        },
    ]
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todoList: [
                ...state.todoList,
                action.payload
            ]}
        case 'REMOVE_TODO':
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state
    }
}

export default todoReducer